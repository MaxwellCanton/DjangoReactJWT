from django.urls import path
from . import views

urlpatterns = [
	path('register', views.Registro.as_view(), name='register'),
]