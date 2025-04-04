from django.urls import path

from proyectos.views import ProyectoView, ProyectoByIdView

urlpatterns = [

    path('api/',  ProyectoView.as_view()),
    path('api/<proyecto_id>', ProyectoByIdView.as_view()),

]