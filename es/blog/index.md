---
title: Blog
layout: page
lang: es
---

<ul class="post-list">
        {% comment %}
          Aún no hay artículos de blog traducidos al español, así que la lista
          está vacía. Añade artículos en _es para que aparezcan aquí.
        {% endcomment %}
        {% assign posts=site.es | where: "layout", "post" | where: "categories", "blog" %}
        {% for post in posts reversed %}
        <li>
            <a href="{{ post.url | prepend: site.baseurl | prepend: site.url }}">{{ post.title }}</a> <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d/%m/%Y" }}</time>
        </li>
        {% endfor %}
</ul>

Las notas de desarrollo más recientes de BasicCAT están en mi [sitio personal](https://blog.xulihang.me/tags/#CAT).
