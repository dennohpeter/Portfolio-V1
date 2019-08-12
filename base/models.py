from django.db import models
from django.utils import timezone
from django.template.defaultfilters import slugify

class Project(models.Model):
	name = models.CharField(max_length=40)
	slug_name = models.SlugField()
	intro = models.CharField(max_length=150)
	options = [
	('wip', 'wip'),
	('code', 'code'),
	('art', 'art'),
	('fun', 'fun')]
	category = models.CharField(max_length=4, choices=options, default='code')
	preview = models.CharField(max_length=150)
	open_source= models.BooleanField(default=False)
	status = models.CharField(max_length=12, choices=[('maintained', 'maintained'),
	('unmaintained', 'unmaintained')], default='maintained')
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
	installation = models.TextField(blank=True)
	usage = models.TextField(blank=True)
	credits = models.TextField()
	license = models.TextField()
	created_date = models.DateTimeField(editable=False, default=timezone.now)

	def __str__(self):
		return self.name

	def save(self, *args, **kwargs):
		if not self.id:
			self.slug_name = slugify(self.name)
		super(Project, self).save(*args, **kwargs)
