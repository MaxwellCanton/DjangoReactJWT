from rest_framework import serializers
from clientes.models import Cliente
from usuarios.models import AppUser


class ClienteSerializer(serializers.ModelSerializer):
    usuario = serializers.SerializerMethodField()

    class Meta:
        model = Cliente
        fields = '__all__'

    def get_usuario(self, obj):
        return f"{obj.usuario.email}"

class ClientePostSerializer(serializers.ModelSerializer):
    usuario = serializers.PrimaryKeyRelatedField(queryset=AppUser.objects.all(), required=False)

    class Meta:
        model = Cliente
        fields = '__all__'

