
from http.client import HTTPResponse
from rest_framework import generics, permissions, viewsets
from django.shortcuts import render, redirect
from django.contrib.auth.hashers import make_password, check_password
import random
from datetime import datetime

from django.contrib.auth.models import AnonymousUser
from rest_framework import viewsets

from .models import UserProfile, Contact, ContactCategory
from .permissions import IsOwner, IsSuperuser
from .serializers import UserProfileSerializer, ContactSerializer, ContactCategorySerializer

def dashboard(request):
    user = request.session.get('user')

    if user:
        user = UserProfile.objects.get(pk=user)
        return HTTPResponse(user.email)

    return HTTPResponse('Dashboard')

def signUp(request):
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
                email = email,
                password = make_password(password)
            )
            user.save()

        return render(request, 'signup.html', res_data)

def signIn(request):
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


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    permission_classes = [IsSuperuser]
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

    def get_queryset(self):
        user = self.request.user
        if type(user) == AnonymousUser:
            return None
        return UserProfile.objects.all() if user.is_staff else None


class ContactViewSet(viewsets.ModelViewSet):
    permission_classes = [IsOwner]
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def perform_create(self, serializer):
        next_contact_date = datetime.now().replace(day=datetime.now().day + random.randint(ContactCategory.objects.get(id=int(self.request.data["category"].split("/")[-2])).min_contact_days, ContactCategory.objects.get(id=int(self.request.data["category"].split("/")[-2])).max_contact_days))
        serializer.save(user=self.request.user, next_contact_date=next_contact_date)

    def get_queryset(self):
        """
        This view should return a list of all the contacts
        for the currently authenticated user.
        """
        user = self.request.user
        if type(user) == AnonymousUser:
            return None
        return Contact.objects.filter(user=user)


class ContactCategoryViewSet(viewsets.ModelViewSet):
    permission_classes = [IsOwner]
    queryset = ContactCategory.objects.all()
    serializer_class = ContactCategorySerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_queryset(self):
        """
        This view should return a list of all the contact
        categories for the currently authenticated user.
        """
        user = self.request.user
        if type(user) == AnonymousUser:
            return None
        return ContactCategory.objects.filter(user=user)
