# Generated by Django 4.0.4 on 2022-04-30 15:22

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('chat', '0005_chats_message_sent_time'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='friendlist',
            unique_together={('user_one', 'user_two')},
        ),
    ]