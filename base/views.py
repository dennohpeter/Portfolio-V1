from django.shortcuts import render, redirect


def home(request):
    return render(request, "index.html")

def send_mail(request):
    if request.method == "POST":
        form_date = request.POST.get('')
