from http.client import HTTPResponse
from django.shortcuts import render, redirect
from django.contrib.auth.hashers import make_password, check_password
import random
from datetime import datetime

from django.contrib.auth.models import AnonymousUser
from rest_framework import viewsets

from .models import UserProfile, Contact, ContactCategory, AvailableContactTime
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
        next_contact_date = datetime.now().replace(day=datetime.now().day + next_contact_days)
        most_recent_prompt_date = datetime.now()
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
        serializer.save(user=self.request.user)
