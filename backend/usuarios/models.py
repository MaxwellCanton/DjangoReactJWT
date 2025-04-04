from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models


class UsersManager(BaseUserManager):
	def create_user(self, email, password=None):
		if not email:
			raise ValueError('Un correo es requerido')
		if not password:
			raise ValueError('Una contraseña es requerida')
		email = self.normalize_email(email)
		user = self.model(email=email)
		user.set_password(password)
		user.save()
		return user

class AppUser(AbstractBaseUser, PermissionsMixin):
	id = models.AutoField(primary_key=True)
	email = models.EmailField(max_length=50, unique=True)
	username = models.CharField(max_length=50)
	USERNAME_FIELD = 'email'
	REQUIRED_FIELDS = ['username']
	objects = UsersManager()

	def __str__(self):
		return self.username