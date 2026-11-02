---
title: Blog
layout: page
lang: de
---

<ul class="post-list">
        {% comment %}
          Es gibt noch keine ins Deutsche übersetzten Blogbeiträge, die Liste ist
          daher leer. Fügen Sie Beiträge in _de hinzu, damit sie hier erscheinen.
        {% endcomment %}
        {% assign posts=site.de | where: "layout", "post" | where: "categories", "blog" %}
        {% for post in posts reversed %}
        <li>
            <a href="{{ post.url | prepend: site.baseurl | prepend: site.url }}">{{ post.title }}</a> <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d.%m.%Y" }}</time>
        </li>
        {% endfor %}
</ul>

Die neuesten Entwicklungsnotizen zu BasicCAT finden Sie auf meiner [persönlichen Website](https://blog.xulihang.me/tags/#CAT).
