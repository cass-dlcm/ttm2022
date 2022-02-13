from django.contrib import admin
from .models import UserProfile, AvailableContactTime, ContactCategory, Contact


class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('email', 'password')


admin.site.register(UserProfile, UserProfileAdmin)
admin.site.register(AvailableContactTime)
admin.site.register(ContactCategory)
admin.site.register(Contact)

