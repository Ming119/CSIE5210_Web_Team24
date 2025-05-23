import json

from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.http import JsonResponse
from django.shortcuts import get_object_or_404, redirect, render
from django.utils.timezone import localtime
from django.views.decorators.csrf import csrf_exempt
from rest_framework_simplejwt.views import TokenObtainPairView

from .forms import PostForm
from .models import Category, Post


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

def get_posts(request):
    category_slug = request.GET.get('category')

    if category_slug:
      posts = Post.objects.filter(category__slug=category_slug)
    else:
      posts = Post.objects.all()

    formatted_posts = [
      {
        "id": post.id,
        "title": post.title,
        "updated_at": localtime(post.updated_at).strftime("%Y-%m-%d %H:%M:%S"),
        "author": post.author.username,
        "content": post.content,
        "category": post.category.name if post.category else "未分類",
      }
      for post in posts
    ]
    return JsonResponse(formatted_posts, safe=False)

def post_detail(request, pk):
  post = get_object_or_404(Post, pk=pk)
  return render(request, 'post_detail.html', {'post': post})

@csrf_exempt
@login_required
def create_post(request):
  if request.method == "POST":
    try:
      # Parse JSON data
      data = json.loads(request.body)

      # Create the post
      post = Post.objects.create(
        title=data.get("title"),
        content=data.get("content"),
        author=request.user,
        category=Category.objects.get(id=data['category']) if data['category'] else None
      )

      return JsonResponse({
          "message": "Post created successfully",
          "post": {
              "id": post.id,
              "title": post.title,
              "content": post.content,
              "author": post.author.username,
              "category": post.category.name if post.category else "未分類",
              "updated_at": post.updated_at.strftime("%Y-%m-%d %H:%M:%S"),
          },
      })
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=400)
  return JsonResponse({"error": "Invalid request method"}, status=405)

@login_required
def my_posts(request):
  posts = Post.objects.filter(author=request.user)
  formatted_posts = [
    {
        "id": post.id,
        "title": post.title,
        "updated_at": localtime(post.updated_at).strftime("%Y-%m-%d %H:%M:%S"),
        "author": post.author.username,
        "content": post.content,
        "category": post.category.name if post.category else "未分類",
    }
    for post in posts
  ]

  return render(request, 'my_posts.html', {'posts': formatted_posts})

def edit_post(request, pk):
    post = get_object_or_404(Post, pk=pk)
    
    # 確保只有文章作者可以修改
    if post.author != request.user:
        return JsonResponse({"error": "You are not authorized to edit this post"}, status=403)
    
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            post.title = data.get("title", post.title)
            post.content = data.get("content", post.content)
            post.category = Category.objects.get(id=data['category']) if data.get('category') else post.category
            post.save()
            return JsonResponse({
                "message": "Post updated successfully",
                "post": {
                    "id": post.id,
                    "title": post.title,
                    "content": post.content,
                    "author": post.author.username,
                    "category": post.category.name if post.category else "未分類",
                    "updated_at": localtime(post.updated_at).strftime("%Y-%m-%d %H:%M:%S"),
                },
            })
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    else:
        # GET 請求時渲染編輯頁面
        categories = Category.objects.all()
        return render(request, 'edit_post.html', {'post': post, 'categories': categories})




def chat_view(request):
    return render(request, 'chat.html')

from rest_framework import viewsets

from .models import Post
from .serializers import PostSerializer


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer