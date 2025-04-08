from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required
from .models import Post

def index_view(request):
  return render(request, 'index.html')

def register_view(request):
  if request.method == 'POST':
    # form = UserCreationForm(request.POST)
    # if form.is_valid():
    username = request.POST.get('username')
    password = request.POST.get('password')
    confirm_password = request.POST.get('confirm_password')
    if password != confirm_password:
      return render(request, 'accounts/register.html', {'error': '密碼不一致'})
    if User.objects.filter(username=username).exists():
      return render(request, 'accounts/register.html', {'error': '使用者名稱已存在'})
    user = User.objects.create_user(username=username, password=password)
    login(request, user)
    return redirect('login')
  return render(request, 'accounts/register.html')

def login_view(request):
  if request.method == 'POST':
    username = request.POST.get('username')
    password = request.POST.get('password')
    user = authenticate(request, username=username, password=password)
    if user is not None:
      login(request, user)
      next_url = request.POST.get('next') or request.GET.get('next') or 'index'
      return redirect(next_url)
    else:
      return render(request, 'accounts/login.html', {'error': '使用者名稱或密碼錯誤'})
  return render(request, 'accounts/login.html')

def logout_view(request):
  # if request.method == 'POST':
  logout(request)
  return redirect('index')



# TODO
# Post Detail
def post_detail(request, pk):
  post = get_object_or_404(Post, pk=pk)
  return render(request, 'post_detail.html', {'post': post})

# Create Post (requires login)
@login_required
def post_create(request):
  if request.method == 'POST':
    title = request.POST.get('title')
    content = request.POST.get('content')
    post = Post(title=title, content=content, author=request.user)
    post.save()
    return redirect('post_list')
  return render(request, 'new_post.html')
