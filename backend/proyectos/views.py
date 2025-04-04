from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status

from proyectos.models import Proyecto
from proyectos.serializers import ProyectoSerializer


class ProyectoView(generics.GenericAPIView):

    serializer_class = ProyectoSerializer

    def get(self, request):

        if Proyecto.objects.all().exists():
            proyectos = Proyecto.objects.all().order_by('-release_date')
            serializer = ProyectoSerializer(proyectos, many=True)
            return Response({'proyectos':serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({'error':'No hay proyectos'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def post(self, request):
        proyecto =  request.data
        serializer = ProyectoSerializer(data=proyecto)
        if serializer.is_valid():
            serializer.save()
            return Response({"success": True}, status=status.HTTP_200_OK)
        else:
            return Response({"success": serializer.errors})