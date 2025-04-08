from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from .models import Category, Post
from .forms import PostForm

def index_view(request):
  categories = Category.objects.all()
  category_slug = request.GET.get('category')
  if category_slug:
    posts = Post.objects.filter(category__slug=category_slug)
  else:
    posts = Post.objects.all()

  context = {
    'categories': categories,
    'posts': posts,
  }
  
  return render(request, 'index.html', context)

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
    return redirect('index')
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

@login_required
def create_post(request):
  if request.method == 'POST':
    form = PostForm(request.POST)
    if form.is_valid():
      post = form.save(commit=False)
      post.author = request.user  # Set the author to the current user
      post.save()
      return redirect('index')  # Redirect to the blog index page after saving
  else:
    form = PostForm()
  
  return render(request, 'create_post.html', {'form': form})