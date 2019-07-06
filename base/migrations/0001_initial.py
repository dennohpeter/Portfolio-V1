# Generated by Django 2.2.2 on 2019-07-04 18:42

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='projects',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('project_name', models.CharField(max_length=40)),
                ('project_category', models.CharField(max_length=40)),
                ('project_description', models.CharField(max_length=100)),
                ('project_more_info', models.TextField()),
                ('project_likes', models.IntegerField()),
                ('project_views', models.IntegerField()),
                ('project_img_url', models.CharField(max_length=150)),
            ],
        ),
    ]