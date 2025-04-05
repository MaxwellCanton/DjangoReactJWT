from django.urls import path

from proyectos.views import ProyectoView, ProyectoByIdView, ProyectosPorEstadoView

urlpatterns = [

    path('api/',  ProyectoView.as_view()),
    path('api/<proyecto_id>', ProyectoByIdView.as_view()),
    path('api/proyectos_estados/<str:estado_id>/', ProyectosPorEstadoView.as_view()),
]