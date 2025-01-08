from django.urls import path, include

from . import views
# from .views import index


urlpatterns = [
    # path('login/',views.login ,name ='login'), 
    # path('logout/',views.logout ,name ='logout'), 
    path('register/',views.register ,name ='register'),
   
]
