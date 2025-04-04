from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status

from clientes.models import Cliente
from clientes.serializers import ClienteSerializer


class ClienteView(generics.GenericAPIView):

    serializer_class = ClienteSerializer

    def get(self, request):

        if Cliente.objects.all().exists():
            clientes = Cliente.objects.all().order_by('-release_date')
            serializer = ClienteSerializer(clientes, many=True)
            return Response({'clientes':serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({'error':'No hay clientes'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def post(self, request):
        cliente =  request.data
        serializer = ClienteSerializer(data=cliente)
        if serializer.is_valid():
            serializer.save()
            return Response({"success": True}, status=status.HTTP_200_OK)
        else:
            return Response({"success": serializer.errors})