from django.db import models

from usuarios.models import AppUser


class Cliente(models.Model):
    usuario = models.ForeignKey(AppUser, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    telefono = models.CharField(max_length=20, blank=True, null=True)
    descripcion = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.nombre