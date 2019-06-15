from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
from django.conf import settings
from django.http import HttpResponse


def home(request):
    return render(request, "index.html")

@csrf_exempt
def contact(request):
    if request.method == "POST":
        from_name = request.POST.get("name")
        from_mail = request.POST.get("email")
        subject = request.POST.get('subject')
        message = request.POST.get('message')

        message_body = "Subject: {0}\nName: {1}\nEmail: {2}\nMessage: {3}".format(subject, from_name, from_mail,message)
        to_mail = [settings.DEFAULT_TO_EMAIL]
        send_mail(subject, message_body, from_mail, to_mail, fail_silently=False)
    return HttpResponse("cool")
