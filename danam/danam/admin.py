from django.contrib import admin
from danam.models import News, Image
from danam.newsforms import NewsAdminForm


def published_filter(modeladmin, request, queryset):
    queryset.update(status='p')


published_filter.short_description = 'Mark selected news as published'


class Imagesinline(admin.TabularInline):
    model = Image
    readonly_fields = ('thumbnail_preview',)
    list_display = [
        'image'
    ]

    def thumbnail_preview(self, obj):
        return obj.thumbnail_preview

    thumbnail_preview.short_description = 'Image Preview'
    thumbnail_preview.allow_tags = True


class PostAmdin(admin.ModelAdmin):
    inlines = [
        Imagesinline
    ]
    list_display = (
        "title",
        "created_date",
        "short_description",
        "status",
    )
    search_fields = ['title', 'created_date']
    ordering = ['-created_date']
    actions = [published_filter, ]
    form = NewsAdminForm

    class Media:
        js = ('/media/js/tinymce/tinymce.min.js',
              '',)


admin.site.register(News, PostAmdin)
