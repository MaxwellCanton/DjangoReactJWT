from rest_framework import serializers
from clientes.models import Cliente


class ClienteSerializer(serializers.ModelSerializer):
    usuario = serializers.SerializerMethodField()

    class Meta:
        model = Cliente
        fields = '__all__'

    def get_usuario(self, obj):
        return f"{obj.usuario.email}"
