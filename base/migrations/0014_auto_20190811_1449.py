# Generated by Django 2.2.3 on 2019-08-11 11:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0013_auto_20190811_1447'),
    ]

    operations = [
        migrations.RenameField(
            model_name='project',
            old_name='releases_url',
            new_name='release_url',
        ),
    ]