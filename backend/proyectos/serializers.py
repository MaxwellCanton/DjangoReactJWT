from rest_framework import serializers

from clientes.models import Cliente
from proyectos.models import Proyecto

class ProyectoSerializer(serializers.ModelSerializer):
    cliente = serializers.SerializerMethodField()

    class Meta:
        model = Proyecto
        fields = '__all__'

    def get_cliente(self, obj):
        return f"{obj.cliente.nombre}"

class ProyectoPostSerializer(serializers.ModelSerializer):
    cliente = serializers.PrimaryKeyRelatedField(queryset=Cliente.objects.all(), required=False)
    estado = serializers.ChoiceField(choices=Proyecto.ESTADOS, default='pendiente')

    class Meta:
        model = Proyecto
        fields = '__all__'