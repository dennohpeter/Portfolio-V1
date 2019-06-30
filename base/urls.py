from django.conf.urls import url
from django.views.generic import TemplateView

from . import views

urlpatterns = [
    url(r'^$', views.home, name='home'),
    url(r'^about/$', views.about, name='about'),
    url(r'^skills/$', views.skills, name='skills'),
    url(r'^resume/$', views.resume, name='resume'),
    url(r'^projects/$', views.projects, name='projects'),
    url(r'^awards/$', views.awards, name='awards'),
    url(r'^contact/$', views.contact, name='contact'),
    url(r'^contact/send_mail$', views.mail, name='mail'),
    url(r'^robots\.txt$', TemplateView.as_view(template_name="robots.txt", content_type='text/plain')),
]
