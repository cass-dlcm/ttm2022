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
    password = models.CharField(max_length=64)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserProfileSuperUser()

    USERNAME_FIELD = 'email'

    def __str__(self):
        return self.email


class ResetToken(models.Model):
    user = models.ForeignKey(to=UserProfile, on_delete=models.CASCADE, related_name="tokens")
    expiry = models.DateTimeField()
    value = models.BigIntegerField()


class AvailableContactTime(models.Model):
    user = models.ForeignKey(to=UserProfile, on_delete=models.CASCADE)
    contact = models.ForeignKey(to='Contact', on_delete=models.SET_NULL, null=True)
    weekdays = (("M", "Monday"), ("Tu", "Tuesday"), ("W", "Wednesday"), ("Th", "Thursday"), ("F", "Friday"),
                ("Sa", "Saturday"), ("Su", "Sunday"))
    day_of_week = models.CharField(max_length=9, choices=weekdays)
    start_time = models.TimeField()
    end_time = models.TimeField()

    def __str__(self):
        return f"{self.day_of_week}, from {self.start_time} to {self.end_time}"


class ContactCategory(models.Model):
    user = models.ForeignKey(to=UserProfile, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    min_contact_days = models.PositiveIntegerField()
    max_contact_days = models.PositiveIntegerField()

    def __str__(self):
        return self.name


class Contact(models.Model):
    category = models.ForeignKey(to=ContactCategory, on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(to=UserProfile, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    picture = models.ImageField(null=True, blank=True)
    next_contact_date = models.DateField()
    next_contact_time = models.TimeField(null=True, blank=True)
    most_recent_prompt_date = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.name

