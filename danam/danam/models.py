from __future__ import unicode_literals
import uuid
from django.db import models
from django.contrib.postgres.fields import JSONField
from django.urls import reverse
from django.db.models.signals import pre_save
from django.dispatch import receiver
from django.utils.text import slugify
from tinymce.models import HTMLField
from django.utils.html import mark_safe
from django.template.defaultfilters import truncatechars


STATUS_CHOICES = (
    ('d', "Draft"),
    ('p', "Published")
)


class News(models.Model):
    title = models.CharField(max_length=255, blank=True)
    slug = models.SlugField(max_length=300)
    content = HTMLField()
    created_date = models.DateTimeField()
    created_date.editable = True
    status = models.CharField(
        max_length=1, choices=STATUS_CHOICES, default='d')

    def get_absolute_url(self):
        return reverse("post_detail", args=[self.id, self.slug])

    @property
    def short_description(self):
        return truncatechars(self.content, 100)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-created_date']
        verbose_name = 'news'
        verbose_name_plural = 'news'
        db_table = 'danam_news'


@receiver(pre_save, sender=News)
def pre_save_slug(sender, **kwargs):
    slug = slugify(kwargs['instance'].title)
    kwargs['instance'].slug = slug


class Image(models.Model):
    post = models.ForeignKey(
        News, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='uploadedfiles/news_img/', blank=True, null=True)

    class Meta:
        db_table = 'news_images'

    @property
    def thumbnail_preview(self):
        if self.image:
            return mark_safe('<img src="{}" width="200" height="200" />'.format(self.image.url))
        return ""

    def __str__(self):
        return str(self.post.id)


class Terms(models.Model):
    uuid = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False)
    preflabel = models.CharField(max_length=50)
    altlabel = models.CharField(max_length=50)
    definition = models.TextField()

    def __str__(self):
        return self.preflabel


class Glossimages(models.Model):
    uuid = models.ForeignKey(Terms, on_delete=models.CASCADE)
    altimage = models.CharField(max_length=300)  # alternative ImageField
    tnimage = models.CharField(max_length=300)  # should be tried
    heidicon = models.CharField(max_length=200)
    imgmain = models.BooleanField()

    def __self__(self):
        return self.altimage
