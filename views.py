from django.shortcuts import render,HttpResponse

def index(request):
    return render(request,'index.html')
    # return HttpResponse("This is homepage")
def about(request):
    return render(request,'about.html')

def contact(request):
    return render(request,'contact.html')
