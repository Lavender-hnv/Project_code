from tkinter import NO
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
import json


# Create your views here.

def register(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']
        confirm_password = request.POST['confirm_password']
        if password != confirm_password:
            error ="Mật khẩu nhập lại không đúng!"
            data ={
            "email": email,
            "error":error
            }
            return render(request, 'dangky.html', data)
        
        user = User.objects.create_user(username=email,email=email,password=password )
        user.save()
        return render(request, 'index.html')
    return render(request, 'dangky.html')

