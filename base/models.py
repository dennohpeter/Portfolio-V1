from django.db import models
from django.utils import timezone

class Project(models.Model):
	name = models.CharField(max_length=40)
	intro = models.CharField(max_length=150)
	link = models.CharField(max_length=40)
	category = models.CharField(max_length=40)
	preview = models.CharField(max_length=150)
	open_source= models.BooleanField(default=False)
	source = models.CharField(blank=True, max_length=40)
	source_url = models.URLField(blank=True)
	releases = models.CharField(blank=True, max_length=40)
	release_url = models.URLField(blank=True)
	homepage = models.CharField(blank=True, max_length=40)
	homepage_url = models.URLField()
	description = models.TextField()
	works = models.TextField()
	extra_info = models.TextField(blank=True)
	get_started = models.TextField()
	has_installation = models.BooleanField(default=False)
	created_date = models.DateTimeField(editable=False, default=timezone.now)
	installation = models.TextField(blank=True)
	credits = models.TextField()
	license = models.TextField()

	def __str__(self):
		return self.name