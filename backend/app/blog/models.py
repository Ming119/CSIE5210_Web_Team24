from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class Category(models.Model):
  name = models.CharField(max_length=50, unique=True)
  slug = models.SlugField(max_length=100, unique=True)

  def __str__(self):
    return self.name

  class Meta:
    verbose_name = "Category"
    verbose_name_plural = "Categories"

class Post(models.Model):
  id = models.AutoField(primary_key=True)
  title = models.CharField(max_length=200)
  content = models.TextField()
  author = models.ForeignKey(User, on_delete=models.CASCADE)
  category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True)
  created_at = models.DateTimeField(default=timezone.now)
  updated_at = models.DateTimeField(auto_now=True)

  def __str__(self):
    return self.title

  class Meta:
    ordering = ['-created_at']