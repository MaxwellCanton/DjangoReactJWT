from django.db import models

from clientes.models import Cliente


class Proyecto(models.Model):
    ESTADOS = [
        ('pendiente', 'Pendiente'),
        ('en_progreso', 'En Progreso'),
        ('completado', 'Completado'),
    ]

    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE, related_name="proyectos")
    nombre = models.CharField(max_length=255)
    descripcion = models.TextField(blank=True, null=True)
    estado = models.CharField(max_length=20, choices=ESTADOS, default='pendiente')
    creado_en = models.DateTimeField(auto_now_add=True)