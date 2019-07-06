from django.db import models
from django.utils import timezone

class Projects(models.Model):
	name = models.CharField(max_length=40)
	url = models.CharField(max_length=40)
	category = models.CharField(max_length=40)
	description = models.CharField(max_length=100)
	more_info = models.TextField()
	likes = models.IntegerField()
	views = models.IntegerField()
	img_url = models.CharField(max_length=150)
	created_date = models.DateTimeField(default=timezone.now)


	def __str__(self):
		return self.name