# Generated by Django 2.2.3 on 2019-08-11 10:44

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0008_auto_20190811_1336'),
    ]

    operations = [
        migrations.RenameField(
            model_name='project',
            old_name='img_url',
            new_name='preview',
        ),
        migrations.RemoveField(
            model_name='project',
            name='likes',
        ),
        migrations.RemoveField(
            model_name='project',
            name='views',
        ),
        migrations.AlterField(
            model_name='project',
            name='created_date',
            field=models.DateTimeField(default=django.utils.timezone.now, editable=False),
        ),
        migrations.AlterField(
            model_name='project',
            name='installation',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='project',
            name='license',
            field=models.TextField(),
        ),
    ]
