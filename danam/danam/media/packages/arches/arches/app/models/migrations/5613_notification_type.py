# Generated by Django 2.2.6 on 2019-12-03 14:15

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("models", "5475_update_geom_mv"),
    ]

    operations = [
        migrations.CreateModel(
            name="NotificationType",
            fields=[
                ("typeid", models.UUIDField(default=uuid.uuid1, primary_key=True, serialize=False)),
                ("name", models.TextField(blank=True, null=True)),
                ("emailtemplate", models.TextField(blank=True, null=True)),
                ("emailnotify", models.BooleanField(default=False)),
                ("webnotify", models.BooleanField(default=False)),
            ],
            options={"db_table": "notification_types", "managed": True},
        ),
        migrations.CreateModel(
            name="UserXNotificationType",
            fields=[
                ("id", models.UUIDField(default=uuid.uuid1, primary_key=True, serialize=False)),
                ("emailnotify", models.BooleanField(default=False)),
                ("webnotify", models.BooleanField(default=False)),
                ("notiftype", models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to="models.NotificationType")),
                ("user", models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={"db_table": "user_x_notification_types", "managed": True},
        ),
        migrations.AddField(
            model_name="notification",
            name="notiftype",
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to="models.NotificationType"),
        ),
        migrations.RenameField(model_name="userxtask", old_name="date_done", new_name="datedone"),
        migrations.RenameField(model_name="userxtask", old_name="date_start", new_name="datestart"),
        migrations.CreateModel(
            name="UserXNotification",
            fields=[
                ("id", models.UUIDField(default=uuid.uuid1, primary_key=True, serialize=False)),
                ("isread", models.BooleanField(default=False)),
                ("notif", models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to="models.Notification")),
                ("recipient", models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={"db_table": "user_x_notifications", "managed": True},
        ),
        migrations.AddField(
            model_name="notification",
            name="context",
            field=django.contrib.postgres.fields.jsonb.JSONField(blank=True, default=dict, null=True),
        ),
        migrations.RunSQL(
            """
            INSERT INTO notification_types (typeid, name, emailtemplate, emailnotify, webnotify)
            VALUES (
                '441e6ed4-188d-11ea-a35b-784f435179ea',
                'Search Export Download Ready',
                'email/download_ready_email_notification.htm',
                true,
                true
            );
            """,
            """
            DELETE FROM notification_types
                WHERE typeid in ('441e6ed4-188d-11ea-a35b-784f435179ea');
            """,
        ),
    ]
