from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.home, name='home'),
    url(r'^about/$', views.about, name='about'),
    url(r'^skills/$', views.skills, name='skills'),
    url(r'^portfolio/$', views.portfolio, name='portfolio'),
    url(r'^contact/$', views.contact, name='contact'),
    url(r'^feed/$', views.feed, name='feed'),
    url(r'^my_work/$', views.my_work, name='my_work'),
    ]
