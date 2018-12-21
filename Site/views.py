from django.shortcuts import render


def home(request):
    return render(request, "index.html")


def about(request):
    return render(request, "about/index.html")


def skills(request):
    return render(request, "skills/index.html")


def portfolio(request):
    return render(request, "portfolio/index.html")


def contact(request):
    return render(request, "contact/index.html")
