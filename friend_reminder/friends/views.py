
from http.client import HTTPResponse
from rest_framework import generics, permissions, viewsets
from django.shortcuts import render, redirect
from django.contrib.auth.hashers import make_password, check_password

from .models import UserProfile, Contact
from .permissions import IsOwner
from .serializers import UserProfileSerializer, ContactSerializer

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
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer


class ContactList(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated, IsOwner]
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
