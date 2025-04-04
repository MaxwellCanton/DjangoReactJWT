from django.shortcuts import get_object_or_404
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

from clientes.models import Cliente
from clientes.serializers import ClienteSerializer, ClientePostSerializer


class ClienteView(generics.GenericAPIView):

    serializer_class = ClienteSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request):

        if Cliente.objects.all().exists():
            clientes = Cliente.objects.all()
            serializer = ClienteSerializer(clientes, many=True)
            return Response({'clientes':serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({'error':'No hay clientes'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def post(self, request):
        cliente =  request.data
        cliente["usuario"] = request.user.id
        serializer = ClientePostSerializer(data=cliente)
        if serializer.is_valid():
            serializer.save()
            return Response({"success": True}, status=status.HTTP_200_OK)
        else:
            return Response({"success": serializer.errors})

class ClienteByIdView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request, cliente_id):
        if Cliente.objects.all().exists():
            cliente = Cliente.objects.get(id = cliente_id)
            serializer = ClienteSerializer(cliente, many=False)
            return Response({'cliente':serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({'error':'No existe cliente con ese id'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def delete(self, request, cliente_id):
        cliente = get_object_or_404(Cliente.objects.all(), pk=cliente_id)
        cliente.delete()
        return Response({"success": True}, status=status.HTTP_200_OK)

    def put(self, request, cliente_id):
        data = request.data
        cliente = Cliente.objects.get(id = cliente_id)
        serializer = ClienteSerializer(instance = cliente, data = data, partial = True)
        if serializer.is_valid():
            serializer.save()
            return Response({"success": True}, status=status.HTTP_200_OK)
        else:
            print(serializer.errors)
            return Response({"success": False})