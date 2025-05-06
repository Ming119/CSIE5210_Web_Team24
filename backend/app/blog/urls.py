from django.urls import path

from . import views

urlpatterns = [
  path('', views.index_view, name='index'),
  path('login/', views.login_view, name='login'),
  path('logout/', views.logout_view, name='logout'),
  path('register/', views.register_view, name='register'),
  path("posts/", views.get_posts, name="get_posts"),
  path('post/<int:pk>/', views.post_detail, name='post_detail'),
  path('posts/new/', views.create_post, name='create_post'),
]