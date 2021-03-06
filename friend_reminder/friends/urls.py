"""friends URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import ContactViewSet, UserViewSet, ContactCategoryViewSet, AvailableContactTimeViewSet, sign_up, sign_in, \
    dashboard, password_reset_confirm, password_reset_request

router = DefaultRouter()
router.register(r'contacts', ContactViewSet)
router.register(r'users', UserViewSet)
router.register(r'contact_categories', ContactCategoryViewSet)
router.register(r'schedule', AvailableContactTimeViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('', dashboard),
    path('sign-up/', sign_up),
    path('sign-in/', sign_in),
    path('password_reset_request', password_reset_request),
    path('password_reset_confirm/<int:userid>/<int:token>', password_reset_confirm),
    path('password_reset_confirm/<int:userid>/', password_reset_confirm),
]
