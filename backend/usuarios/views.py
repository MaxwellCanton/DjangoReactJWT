from rest_framework import permissions, status
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework import generics
from rest_framework_simplejwt.tokens import RefreshToken

from usuarios.serializers import RegistroSerializer

User = get_user_model()

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


class HomeView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        content = {"message": "Welcome to the JWT Authentication page using React Js and Django!"}
        return Response(content)


class LogoutView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request):

        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)

class Registro(generics.GenericAPIView):
    permission_classes = (permissions.AllowAny,)

    serializer_class = RegistroSerializer

    def post(self, request):
        request.data['username'] = request.data['email']
        clean_data = request.data
        email =  request.data.get('email')
        password = request.data.get('password')

        if not email or not password:
            return Response({"data": "Agregue un correo y contraseña"}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(email=email).exists():
            return Response({"data": "Escoja otro correo"}, status=status.HTTP_400_BAD_REQUEST)

        if len(password.strip()) < 8:
            return Response({"data": "Escoja otra contraseña, min 8 caracteres"}, status=status.HTTP_400_BAD_REQUEST)

        serializer = RegistroSerializer(data=clean_data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.create(clean_data)
            if user:
                return Response({"data": "success"}, status=status.HTTP_201_CREATED)
        return Response({"data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)