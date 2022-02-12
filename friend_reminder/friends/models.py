from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.models import BaseUserManager


# Create your models here.
class UserProfileSuperUser(BaseUserManager):
    """Manager for user profiles"""

    def create_user(self, email, password=None):
        """Create a new user profile"""
        if not email:
            raise ValueError('Users must have an email address')

        email = self.normalize_email(email)
        user = self.model(email=email,)

        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password):
        """Create and save a new superuser with given details"""
        user = self.create_user(email, password)

        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)

        return user


class UserProfile(AbstractBaseUser, PermissionsMixin):
    """Database model for users in the system"""
    email = models.EmailField(max_length=255, unique=True)
    birthday = models.DateField(auto_now=False, null=True, blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserProfileSuperUser()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELD = ['email', 'birthday']

    def ___str___(self):
        return self.email


class AvailableContactTime(models.Model):
    user = models.ForeignKey(to=UserProfile, on_delete=models.CASCADE)
    contact = models.ForeignKey(to='Contact', on_delete=models.SET_NULL, null=True)


class ContactCategory(models.Model):
    user = models.ForeignKey(to=UserProfile, on_delete=models.CASCADE)
    min_contact_days = models.PositiveIntegerField()
    max_contact_days = models.PositiveIntegerField()


class Contact(models.Model):
    category = models.ForeignKey(to=ContactCategory, on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(to=UserProfile, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    picture = models.ImageField(null=True, blank=True)
    next_contact_date = models.DateTimeField()
    most_recent_prompt_date = models.DateTimeField(null=True, blank=True)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

