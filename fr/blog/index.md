---
title: Blog
layout: page
lang: fr
---

<ul class="post-list">
        {% comment %}
          Aucun article de blog n'a encore été traduit en français, la liste
          reste donc vide. Ajoutez des articles dans _fr pour qu'ils apparaissent ici.
        {% endcomment %}
        {% assign posts=site.fr | where: "layout", "post" | where: "categories", "blog" %}
        {% for post in posts reversed %}
        <li>
            <a href="{{ post.url | prepend: site.baseurl | prepend: site.url }}">{{ post.title }}</a> <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d/%m/%Y" }}</time>
        </li>
        {% endfor %}
</ul>

Les notes de développement les plus récentes de BasicCAT sont disponibles sur mon [site personnel](https://blog.xulihang.me/tags/#CAT).
