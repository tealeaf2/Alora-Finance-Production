# Generated by Django 5.0.1 on 2024-04-01 23:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('classroom', '0017_alter_lessons_completed_lesson_completed'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lesson_assignment',
            name='attempts_max',
            field=models.IntegerField(default=3),
        ),
    ]