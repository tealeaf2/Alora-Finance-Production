# Generated by Django 5.0 on 2024-01-17 04:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('classroom', '0002_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='quiz',
            name='quiz_type',
            field=models.CharField(choices=[('FRQ', 'Free Response'), ('MCQ', 'Multiple Choice')], default='MCQ', max_length=3),
        ),
    ]
