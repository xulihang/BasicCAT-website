---
title: Блог
layout: page
lang: ru
---

<ul class="post-list">
        {% comment %}
          Статей блога, переведённых на русский, пока нет, поэтому список пуст.
          Добавьте статьи в _ru, чтобы они появились здесь.
        {% endcomment %}
        {% assign posts=site.ru | where: "layout", "post" | where: "categories", "blog" %}
        {% for post in posts reversed %}
        <li>
            <a href="{{ post.url | prepend: site.baseurl | prepend: site.url }}">{{ post.title }}</a> <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d.%m.%Y" }}</time>
        </li>
        {% endfor %}
</ul>

Свежие заметки о разработке BasicCAT — на моём [личном сайте](https://blog.xulihang.me/tags/#CAT).
