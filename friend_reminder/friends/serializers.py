from rest_framework import serializers

from .models import UserProfile, Contact


class UserProfileSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['url', 'email']


class ContactSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Contact
        fields = ['url', 'name', 'category', 'picture', 'next_contact_date', 'most_recent_prompt_date']
