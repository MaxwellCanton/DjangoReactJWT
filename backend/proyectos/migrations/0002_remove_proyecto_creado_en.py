# Generated by Django 5.2 on 2025-04-04 19:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('proyectos', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='proyecto',
            name='creado_en',
        ),
    ]
