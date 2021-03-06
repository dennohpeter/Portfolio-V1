from django.shortcuts import render, redirect, get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
from django.conf import settings
from django.http import HttpResponse
from base.models import Project, Tag, Award


def home(request):
    return render(request, "index.html")


@csrf_exempt
def mail(request):
    if request.method == "POST":
        from_name = request.POST.get("name")
        from_mail = request.POST.get("email")
        subject = request.POST.get('subject')
        message = request.POST.get('message')

        message_body = "You have received an email from\n\
         Name: {0}\n Subject: {1}\n Email: {2}\n Message: {3}".format(
            from_name, subject, from_mail, message)
        to_mail = [settings.DEFAULT_TO_EMAIL]
        send_mail("Email From Your Website", message_body,
                  from_mail, to_mail, fail_silently=False)
    return HttpResponse("sent")


def about(request):
    return render(request, "about.html")


def skills(request):
    return render(request, "skills.html")


def resume(request):
    return render(request, "resume.html")


def projects(request):
    projects = Project.objects.all().order_by('-created_date')
    tags = Tag.objects.all()
    context = {"projects": projects, "tags": tags}
    return render(request, "projects/index.html", context)


def project_details(request, name):
    project = get_object_or_404(Project, slug_name=name)
    return render(request, "projects/show.html", {"project": project})


def awards(request):
    awards = Award.objects.all().order_by('-created_date')
    return render(request, "awards.html", {"awards": awards})


def contact(request):
    return render(request, "contact.html")
