from django.apps import AppConfig


class BlogConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'blog'

    def ready(self):
        from .models import Category

        categories = [
            {'name': '生活', 'slug': 'life'},
            {'name': '旅遊', 'slug': 'travel'},
            {'name': '美食', 'slug': 'food'},
            {'name': '科技', 'slug': 'technology'},
            {'name': '運動', 'slug': 'sports'},
            {'name': '藝術', 'slug': 'art'},
            {'name': '音樂', 'slug': 'music'},
            {'name': '電影', 'slug': 'movies'},
            {'name': '書籍', 'slug': 'books'},
            {'name': '時尚', 'slug': 'fashion'},
        ]

        for category in categories:
            Category.objects.get_or_create(name=category['name'], slug=category['slug'])