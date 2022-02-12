from rest_framework import serializers

from .models import CustomUser, Contact


class CustomUserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['url', 'email']


class ContactSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Contact
        fields = ['url', 'name', 'category', 'picture', 'next_contact_date', 'most_recent_prompt_date']
