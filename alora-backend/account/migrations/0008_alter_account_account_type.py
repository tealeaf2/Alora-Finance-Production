# Generated by Django 4.2.6 on 2024-01-13 17:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("account", "0007_alter_account_account_type"),
    ]

    operations = [
        migrations.AlterField(
            model_name="account",
            name="account_type",
            field=models.CharField(
                choices=[("S", "Student"), ("T", "Teacher")], default="S", max_length=1
            ),
        ),
    ]
