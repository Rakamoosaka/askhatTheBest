# Importing Django's built-in admin module, which allows managing the app's data via the admin interface
from django.contrib import admin 

# Importing models that will be managed in the admin panel
from .models import Profile, Thread, Post, User, Pin

# Register your models here.
# Registering models with the admin panel means that we can use the Django admin UI to view, add, edit, or delete these models.
admin.site.register(Thread)  # Registering the Thread model to be manageable via admin
admin.site.register(Post)    # Registering the Post model to be manageable via admin
admin.site.register(User)    # Registering the User model to be manageable via admin
admin.site.register(Profile) # Registering the Profile model to be manageable via admin
admin.site.register(Pin)     # Registering the Pin model to be manageable via admin
