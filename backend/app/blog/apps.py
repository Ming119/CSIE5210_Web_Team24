from django.apps import AppConfig


class BlogConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'blog'

    def ready(self):
        from django.db.models.signals import post_migrate
        from . import signals
        post_migrate.connect(signals.create_categories, sender=self)
