from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status, generics
from rest_framework.views import APIView

from proyectos.models import Proyecto
from proyectos.serializers import ProyectoSerializer


class ProyectoView(generics.GenericAPIView):

    serializer_class = ProyectoSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request):

        if Proyecto.objects.all().exists():
            proyectos = Proyecto.objects.all()
            serializer = ProyectoSerializer(proyectos, many=True)
            return Response({'proyectos':serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({'error':'No hay proyectos'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    # def post(self, request):
    #     proyecto =  request.data
    #     proyecto["usuario"] = request.user.id
    #     serializer = ProyectoPostSerializer(data=proyecto)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response({"success": True}, status=status.HTTP_200_OK)
    #     else:
    #         return Response({"success": serializer.errors})

class ProyectoByIdView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request, proyecto_id):
        if Proyecto.objects.all().exists():
            proyecto = Proyecto.objects.get(id = proyecto_id)
            serializer = ProyectoSerializer(proyecto, many=False)
            return Response({'proyecto':serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({'error':'No existe proyecto con ese id'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def delete(self, request, proyecto_id):
        proyecto = get_object_or_404(Proyecto.objects.all(), pk=proyecto_id)
        proyecto.delete()
        return Response({"success": True}, status=status.HTTP_200_OK)

    def put(self, request, proyecto_id):
        data = request.data
        proyecto = Proyecto.objects.get(id = proyecto_id)
        serializer = ProyectoSerializer(instance = proyecto, data = data, partial = True)
        if serializer.is_valid():
            serializer.save()
            return Response({"success": True}, status=status.HTTP_200_OK)
        else:
            print(serializer.errors)
            return Response({"success": False})