# Generated by Django 4.1.4 on 2023-08-23 16:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api_todos', '0002_todo_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='todo',
            name='category',
        ),
        migrations.RemoveField(
            model_name='todo',
            name='user',
        ),
        migrations.DeleteModel(
            name='Category',
        ),
    ]
