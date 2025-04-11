from services import views
from django.urls import path

urlpatterns=[
    path('projects/',views.service,name='service1')
]