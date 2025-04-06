from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm
from django.http import JsonResponse
from .models import Post
from django.contrib.auth.decorators import login_required

# User Registration
def register(request):
  if request.method == 'POST':
    form = UserCreationForm(request.POST)
    if form.is_valid():
      form.save()
      username = form.cleaned_data.get('username')
      password = form.cleaned_data.get('password1')
      user = authenticate(username=username, password=password)
      login(request, user)
      return redirect('post_list')
  else:
    form = UserCreationForm()
  return render(request, 'blog/register.html', {'form': form})

# Post List
def post_list(request):
  posts = Post.objects.all()
  return render(request, 'blog/post_list.html', {'posts': posts})

# Post Detail
def post_detail(request, pk):
  post = get_object_or_404(Post, pk=pk)
  return render(request, 'blog/post_detail.html', {'post': post})

# Create Post (requires login)
@login_required
def post_create(request):
  if request.method == 'POST':
    title = request.POST.get('title')
    content = request.POST.get('content')
    post = Post(title=title, content=content, author=request.user)
    post.save()
    return redirect('post_list')
  return render(request, 'blog/post_form.html')

# Update Post (requires login)
@login_required
def post_update(request, pk):
  post = get_object_or_404(Post, pk=pk)
  if post.author != request.user:
    return JsonResponse({'error': 'Unauthorized'}, status=403)
  if request.method == 'POST':
    post.title = request.POST.get('title')
    post.content = request.POST.get('content')
    post.save()
    return redirect('post_list')
  return render(request, 'blog/post_form.html', {'post': post})

# Delete Post (requires login)
@login_required
def post_delete(request, pk):
  post = get_object_or_404(Post, pk=pk)
  if post.author != request.user:
    return JsonResponse({'error': 'Unauthorized'}, status=403)
  if request.method == 'POST':
    post.delete()
    return redirect('post_list')
  return render(request, 'blog/post_confirm_delete.html', {'post': post})