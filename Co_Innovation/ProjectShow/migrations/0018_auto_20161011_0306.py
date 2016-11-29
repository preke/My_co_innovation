# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ProjectShow', '0017_auto_20161010_0228'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='deadline',
            field=models.CharField(default=b'', max_length=100, verbose_name=b'\xe6\x88\xaa\xe6\xad\xa2\xe6\x97\xb6\xe9\x97\xb4'),
        ),
        migrations.AddField(
            model_name='task',
            name='start_time',
            field=models.CharField(default=b'', max_length=100, verbose_name=b'\xe5\xbc\x80\xe5\xa7\x8b\xe6\x97\xb6\xe9\x97\xb4'),
        ),
    ]
