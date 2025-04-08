from django import forms
from .models import Post, Category

class PostForm(forms.ModelForm):
  class Meta:
    model = Post
    fields = ['title', 'content', 'category']
    widgets = {
      'title': forms.TextInput(attrs={'class': 'form-control', 'placeholder': '輸入貼文標題'}),
      'content': forms.Textarea(attrs={'class': 'form-control', 'rows': 5, 'placeholder': '輸入貼文內容'}),
      'category': forms.Select(attrs={'class': 'form-select'}),
    }
    labels = {
      'title': '標題',
      'content': '內容',
      'category': '分類',
    }