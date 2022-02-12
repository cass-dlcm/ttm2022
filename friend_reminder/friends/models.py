from django.contrib.auth.models import AbstractUser
from django.db import models


# Create your models here.
class CustomUser(AbstractUser):
    pass

    def __str__(self):
        return self.email


class AvailableContactTime(models.Model):
    user = models.ForeignKey(to=CustomUser, on_delete=models.CASCADE)
    contact = models.ForeignKey(to='Contact', on_delete=models.SET_NULL, null=True)


class ContactCategory(models.Model):
    user = models.ForeignKey(to=CustomUser, on_delete=models.CASCADE)
    min_contact_days = models.PositiveIntegerField()
    max_contact_days = models.PositiveIntegerField()


class Contact(models.Model):
    category = models.ForeignKey(to=ContactCategory, on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(to=CustomUser, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    picture = models.ImageField(null=True, blank=True)
    next_contact_date = models.DateTimeField()
    most_recent_prompt_date = models.DateTimeField(null=True, blank=True)
