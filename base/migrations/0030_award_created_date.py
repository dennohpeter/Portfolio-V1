# Generated by Django 2.2.3 on 2019-08-13 12:55

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0029_award_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='award',
            name='created_date',
            field=models.DateTimeField(default=django.utils.timezone.now, editable=False),
        ),
    ]
