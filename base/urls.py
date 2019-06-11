from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.home, name='home'),
    # url(r'^send_mail/$', views.send_mail, name="send_mail")
    ]
