from django.urls import path

from clientes.views import ClienteView

urlpatterns = [

    path('api/',  ClienteView.as_view()),

]