# Generated by Django 2.2.3 on 2019-07-07 11:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0004_projects_url'),
    ]

    operations = [
        migrations.RenameField(
            model_name='projects',
            old_name='url',
            new_name='intro',
        ),
        migrations.AddField(
            model_name='projects',
            name='credits',
            field=models.CharField(default='intro', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='projects',
            name='installation',
            field=models.CharField(default='', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='projects',
            name='license',
            field=models.CharField(default='ed', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='projects',
            name='link',
            field=models.CharField(default='cd', max_length=40),
            preserve_default=False,
        ),
    ]
