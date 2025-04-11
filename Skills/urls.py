from Skills import views
from django.urls import path
urlpatterns=[
    path('Skills/',views.skill,name='skill1')
]