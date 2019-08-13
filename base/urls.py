from django.urls import path
from django.views.generic import TemplateView

from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('skills/', views.skills, name='skills'),
    path('resume/', views.resume, name='resume'),
    path('projects/', views.projects, name='projects'),
    path('projects/<slug:name>/', views.project_details, name='more'),
    path('awards/', views.awards, name='awards'),
    path('contact/', views.contact, name='contact'),
    path('contact/send_mail/', views.mail, name='mail'),
    path('robots.txt', TemplateView.as_view(
        template_name="robots.txt", content_type='text/plain')),
]
