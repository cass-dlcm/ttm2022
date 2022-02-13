import os
import sys
from base64 import b64encode, b64decode, b16encode, b16decode
from http.client import HTTPResponse

from django.contrib.auth import login
from django.core.mail import send_mail, EmailMultiAlternatives
from django.shortcuts import render, redirect
from django.contrib.auth.hashers import make_password, check_password
import random
import datetime

from django.contrib.auth.models import AnonymousUser
from django.template.loader import render_to_string
from pytz import timezone
from rest_framework import viewsets

from .models import UserProfile, Contact, ContactCategory, AvailableContactTime, ResetToken
from .permissions import IsOwner, IsSuperuser
from .serializers import UserProfileSerializer, ContactSerializer, ContactCategorySerializer, \
    AvailableContactTimeSerializer


def dashboard(request):
    user = request.session.get('user')

    if user:
        user = UserProfile.objects.get(id=user)
        return HTTPResponse(user.email)

    return HTTPResponse('Dashboard')


def sign_up(request):
    if request.method == 'GET':
        return render(request, 'signup.html')
    elif request.method == 'POST':
        email = request.POST.get('email', None)
        birthday = request.POST.get('birthday', None)
        password = request.POST.get('password', None)
        re_password = request.POST.get('re-password', None)

        res_data = {}

        if not (email and birthday and password and re_password):
            res_data['error'] = 'You are missing some required information!'
        elif password != re_password:
            res_data['error'] = 'The passwords you entered do not match!'
        else:
            user = UserProfile(
                email=email,
                password=make_password(password)
            )
            user.save()

        return render(request, 'signup.html', res_data)


def sign_in(request):
    if request.method == 'GET':
        return render(request, 'signin.html')
    elif request.method == 'POST':
        email = request.POST.get('email', None)
        password = request.POST.get('password', None)

        res_data = {}
        if not (email and password):
            res_data['error'] = 'You are missing some required information!'
        else:
            user = UserProfile.objects.get(email=email)
            if check_password(password, user.password):
                """Successfully sign in"""
                request.session['user'] = user.id
                return redirect('/')
            else:
                """Wrong password"""
                res_data['error'] = 'Incorrect password!'

        return render(request, 'signin.html', res_data)


class CustomModelViewSet(viewsets.ModelViewSet):
    permission_classes = [IsOwner]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_queryset(self):
        """
        This view should return a list of all the contacts
        for the currently authenticated user.
        """
        user = self.request.user
        if type(user) == AnonymousUser:
            return None
        return self.queryset.filter(user=user)


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    permission_classes = [IsSuperuser]
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

    def get_queryset(self):
        user = self.request.user
        if type(user) == AnonymousUser:
            return None
        return UserProfile.objects.all() if user.is_staff else None


class ContactViewSet(CustomModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def perform_create(self, serializer):
        next_contact_days = random.randint(
            ContactCategory.objects.get(id=int(self.request.data["category"].split("/")[-2])).min_contact_days,
            ContactCategory.objects.get(id=int(self.request.data["category"].split("/")[-2])).max_contact_days)
        next_contact_date = datetime.datetime.now().replace(day=datetime.datetime.now().day + next_contact_days)
        most_recent_prompt_date = datetime.datetime.now()
        serializer.save(user=self.request.user, next_contact_date=next_contact_date, most_recent_prompt_date=most_recent_prompt_date)


class ContactCategoryViewSet(CustomModelViewSet):
    queryset = ContactCategory.objects.all()
    serializer_class = ContactCategorySerializer


class AvailableContactTimeViewSet(CustomModelViewSet):
    queryset = AvailableContactTime.objects.all()
    serializer_class = AvailableContactTimeSerializer

    def perform_create(self, serializer):
        weekdays = ("M", "Tu", "W", "Th", "F", "Sa", "Su")
        if len(self.request.data["contact"].split("/")) > 2:
            print(self.request.data["contact"])
            contact = Contact.objects.get(id=int(self.request.data["contact"].split("/")[-2]))
            next_contact_date = contact.next_contact_date
            if weekdays[next_contact_date.weekday()] == self.request.data["day_of_week"]:
                result_set = AvailableContactTime.objects.filter(user=self.request.user, contact=contact)
                pks = result_set.values_list('id', flat=True)
                random_idx = random.randint(0, len(pks) - 1)
                random_obj = result_set.get(id=pks[random_idx])
                contact.next_contact_time = random_obj.start_time
                contact.save(update_fields=["next_contact_time"])
        super().perform_create(serializer)


def password_reset_request(request):
    if request.method == 'GET':
        return render(request, 'reset-request.html')
    if request.method == 'POST':
        email = request.POST.get('email', None)
        res_data = {}
        if email is None:
            res_data['error'] = "please enter an email address"
            return render(request, 'reset-request.html', res_data)
        try:
            user = UserProfile.objects.get(email=email)
            token = ResetToken(user=user, value=int.from_bytes(os.urandom(4), "big"), expiry=datetime.datetime.now() + datetime.timedelta(minutes=10))
            token.save()
            print(token.value)
            print(user.id)
            print(token.expiry)
            msg_plain = render_to_string('reset-email.txt', {'protocol': "http", 'domain': os.getenv("HOST"), 'uidb64': user.id, 'token': token.value})
            msg = EmailMultiAlternatives("Catch Up - Password Reset", msg_plain, "CatchUp@cass-dlcm.dev", [email])
            msg.attach_alternative(render_to_string('reset-email.html', {'protocol': "http", 'domain': os.getenv("host"), 'uidb64': user.id, 'token': token.value}), "text/html")
            msg.send()
            return render(request, 'reset-request.html')
        except UserProfile.DoesNotExist:
            res_data['error'] = "that email address is not associated with a user"
            return render(request, 'reset-request.html', res_data)


def password_reset_confirm(request, userid, token = None):
    if request.method == 'GET':
        try:
            user = UserProfile.objects.get(id=userid)
            try:
                print(token)
                dbtoken = user.tokens.get(value=token)
                print(dbtoken.expiry)
                if datetime.datetime.now().replace(tzinfo=timezone("utc")) > dbtoken.expiry:
                    return redirect('/')
                login(request, user)
                dbtoken.delete()
                return render(request, "reset-confirm.html")
            except ResetToken.DoesNotExist:
                return redirect('/')
        except UserProfile.DoesNotExist:
            return redirect('/')
    if request.method == 'POST':
        new_pass = request.POST.get("password", None)
        new_pass_confirm = request.POST.get("re-password", None)
        print(new_pass, new_pass_confirm)
        if new_pass != new_pass_confirm:
            return render(request, 'reset-confirm.html', {"error": "the passwords are not the same"})
        if type(request.user) is AnonymousUser:
            return render(request, 'reset-confirm.html', {"error": "please navigate to this page by using the link in the email"})
        request.user.set_password(new_pass)
        request.user.save()
        return render(request, "reset-done.html")
