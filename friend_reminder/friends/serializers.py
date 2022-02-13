from rest_framework import serializers

from .models import UserProfile, Contact, ContactCategory, AvailableContactTime


class UserProfileSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['url', 'email']


class ContactSerializer(serializers.HyperlinkedModelSerializer):
    user = serializers.ReadOnlyField(source='user.email')
    next_contact_date = serializers.ReadOnlyField()
    next_contact_time = serializers.ReadOnlyField()
    most_recent_prompt_date = serializers.ReadOnlyField()

    class Meta:
        model = Contact
        fields = ['url', 'name', 'category', 'picture', 'next_contact_date', 'next_contact_time', 'most_recent_prompt_date', 'user']


class ContactCategorySerializer(serializers.HyperlinkedModelSerializer):
    user = serializers.ReadOnlyField(source='user.email')

    class Meta:
        model = ContactCategory
        fields = ['url', 'min_contact_days', 'max_contact_days', 'name', 'user']


class AvailableContactTimeSerializer(serializers.HyperlinkedModelSerializer):
    user = serializers.ReadOnlyField(source='user.email')

    class Meta:
        model = AvailableContactTime
        fields = ['url', 'user', 'contact', 'day_of_week', 'start_time', 'end_time']
