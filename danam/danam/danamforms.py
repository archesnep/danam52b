from django import forms
from danam.models import MonumentOfMonth, PdfUploader
from ckeditor_uploader.widgets import CKEditorUploadingWidget
from django.utils.translation import gettext_lazy as _
from django.core.exceptions import NON_FIELD_ERRORS



class MonumentOfMonthForm(forms.ModelForm):
    title = forms.CharField(widget=forms.TextInput(),
                            required=True, max_length=255)
    author = forms.CharField(widget=forms.TextInput(),
                             required=False, max_length=100)
    caption = forms.CharField(widget=forms.TextInput(), required=False)
    description = forms.CharField(widget=CKEditorUploadingWidget())
    date = forms.DateField()

    class Meta:
        model = MonumentOfMonth
        fields = ['title', 'author', 'thumbnail', 'image',
                  'caption', 'description', 'date', 'status']


class PdfUploadForm(forms.ModelForm):
    title = forms.CharField(widget=forms.TextInput(),
                            required=True, max_length=200)
    author = forms.CharField(widget=forms.TextInput(),
                             required=False, max_length=100)
    publication_date = forms.CharField(
        widget=forms.TextInput(), required=False, max_length=100)
    docfile = forms.FileField(
        widget=forms.ClearableFileInput(attrs={'multiple': True}))

    class Meta:
        model = PdfUploader
        fields = ['title', 'author', 'publication_date', 'docfile']
        error_messages = {
            NON_FIELD_ERRORS: {
                'unique_together': "%(model_name)s's %(field_labels)s are not unique.",
            }
        }
