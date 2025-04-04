from django.urls import path

from clientes.views import ClienteView, ClienteByIdView

urlpatterns = [

    path('api/',  ClienteView.as_view()),
    path('api/<cliente_id>', ClienteByIdView.as_view()),

]