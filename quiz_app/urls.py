from django.urls import path
from . import views

urlpatterns = [
    path('', views.quiz, name='quiz'),
    path('results/', views.results, name='results'),
]
