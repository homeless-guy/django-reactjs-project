# Generated by Django 4.0.4 on 2022-04-24 14:59

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0004_chats_sent_by_chats_sent_to_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='chats',
            name='message_sent_time',
            field=models.DateTimeField(auto_now_add=True, default=datetime.datetime(2022, 4, 24, 14, 59, 25, 730896, tzinfo=utc)),
            preserve_default=False,
        ),
    ]