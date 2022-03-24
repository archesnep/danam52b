from django import forms
from danam.models import MonumentOfMonth
from ckeditor_uploader.widgets import CKEditorUploadingWidget
from django.utils.translation import gettext_lazy as _
from django.core.exceptions import NON_FIELD_ERRORS



class MonumentOfMonthUploadForm(forms.ModelForm):
    title = forms.CharField(widget=forms.TextInput(),
                            required=True, max_length=255)
    image = forms.ImageField(required=False, error_messages={
                             'invalid format': _("Image files only")}, widget=forms.FileInput)
    caption = forms.CharField(widget=forms.TextInput(), required=False)
    description = forms.CharField(widget=CKEditorUploadingWidget())
    date = forms.DateField()

    class Meta:
        model = MonumentOfMonth
        fields = ['title', 'image', 'caption', 'description', 'date', 'status']


class MonumentOfMonthUpdateForm(forms.ModelForm):
    title = forms.CharField(widget=forms.TextInput())
    image = forms.ImageField()
    caption = forms.CharField(widget=forms.TextInput())
    description = forms.CharField(widget=CKEditorUploadingWidget())
    date = forms.DateField()

    class Meta:
        model = MonumentOfMonth
        fields = [
            'title',
            'image',
            'caption',
            'description',
            'date',
            'status'
        ]
