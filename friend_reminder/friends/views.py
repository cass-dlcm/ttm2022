import random
from urllib.parse import urlparse
from datetime import datetime

from rest_framework import viewsets

from .models import UserProfile, Contact, ContactCategory
from .permissions import IsOwner, IsSuperuser
from .serializers import UserProfileSerializer, ContactSerializer, ContactCategorySerializer


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    permission_classes = [IsSuperuser, ]
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer


class ContactViewSet(viewsets.ModelViewSet):
    permission_classes = [IsOwner, ]
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def perform_create(self, serializer):
        next_contact_date = datetime.now().replace(day=datetime.now().day + random.randint(ContactCategory.objects.get(id=int(self.request.data["category"].split("/")[-2])).min_contact_days, ContactCategory.objects.get(id=int(self.request.data["category"].split("/")[-2])).max_contact_days))
        serializer.save(user=self.request.user, next_contact_date=next_contact_date)


class ContactCategoryViewSet(viewsets.ModelViewSet):
    permission_classes = [IsOwner, ]
    queryset = ContactCategory.objects.all()
    serializer_class = ContactCategorySerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
