from django.shortcuts import render, redirect, HttpResponseRedirect
from django.views import View
def index(request):
    return render(request, 'index.html')

def gioithieu(request):
    return render(request, 'gioithieu.html')

def guide(request):
    return render(request, 'guide.html')