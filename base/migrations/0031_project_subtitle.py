# Generated by Django 2.2.3 on 2019-08-15 21:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0030_award_created_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='subtitle',
            field=models.CharField(default=1, max_length=150),
            preserve_default=False,
        ),
    ]
