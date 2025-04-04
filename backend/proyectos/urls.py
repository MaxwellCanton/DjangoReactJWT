from django.urls import path

from proyectos.views import ProyectoView

urlpatterns = [

    path('api/',  ProyectoView.as_view()),

]