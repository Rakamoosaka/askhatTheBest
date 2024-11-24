# Generated by Django 3.2.5 on 2024-11-18 09:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_alter_profile_avatar'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='avatar',
            field=models.URLField(default=None),
        ),
        migrations.AlterField(
            model_name='profile',
            name='bio',
            field=models.TextField(default='Hello world', max_length=500),
        ),
    ]
