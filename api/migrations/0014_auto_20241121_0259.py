# Generated by Django 3.2.5 on 2024-11-20 21:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_alter_thread_topic'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='course_year',
            field=models.PositiveSmallIntegerField(default=1, verbose_name='Course Year'),
        ),
        migrations.AddField(
            model_name='profile',
            name='specialty',
            field=models.CharField(default='', max_length=128, verbose_name='Specialty'),
        ),
    ]