from django.shortcuts import render

def home(request):
    return render(request, 'home.html')

def tester(request):
    return render(request, 'tester.html')
