from django.shortcuts import render


def home(request):
    return render(request, "index.html")


def about(request):
    return render(request, "about.html")


def skills(request):
    return render(request, "skills.html")


def portfolio(request):
    return render(request, "portfolio.html")


def contact(request):
    return render(request, "contact.html")