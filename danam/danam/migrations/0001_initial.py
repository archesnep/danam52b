# Generated by Django 2.2.9 on 2020-12-20 08:05

from django.db import migrations, models
import django.db.models.deletion
import tinymce.models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='News',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=255)),
                ('slug', models.SlugField(max_length=300)),
                ('content', tinymce.models.HTMLField()),
                ('created_date', models.DateTimeField()),
                ('status', models.CharField(choices=[('d', 'Draft'), ('p', 'Published')], default='d', max_length=1)),
            ],
            options={
                'verbose_name': 'news',
                'verbose_name_plural': 'news',
                'db_table': 'danam_news',
                'ordering': ['-created_date'],
            },
        ),
        migrations.CreateModel(
            name='Terms',
            fields=[
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('preflabel', models.CharField(max_length=50)),
                ('altlabel', models.CharField(max_length=50)),
                ('definition', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, null=True, upload_to='photos/')),
                ('post', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='danam.News')),
            ],
            options={
                'db_table': 'news_images',
            },
        ),
        migrations.CreateModel(
            name='Glossimages',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('altimage', models.CharField(max_length=300)),
                ('tnimage', models.CharField(max_length=300)),
                ('heidicon', models.CharField(max_length=200)),
                ('imgmain', models.BooleanField()),
                ('uuid', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='danam.Terms')),
            ],
        ),
    ]