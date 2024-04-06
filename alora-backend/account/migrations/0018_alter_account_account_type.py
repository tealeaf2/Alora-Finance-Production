# Generated by Django 5.0.1 on 2024-03-28 02:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0017_alter_account_account_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='account',
            name='account_type',
            field=models.CharField(choices=[('T', 'Teacher'), ('S', 'Student')], default='S', max_length=1),
        ),
    ]
