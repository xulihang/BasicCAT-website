---
title: Blog
layout: page
lang: pt
---

<ul class="post-list">
        {% comment %}
          Ainda não há artigos de blog traduzidos para o português, então a
          lista fica vazia. Adicione artigos em _pt para que apareçam aqui.
        {% endcomment %}
        {% assign posts=site.pt | where: "layout", "post" | where: "categories", "blog" %}
        {% for post in posts reversed %}
        <li>
            <a href="{{ post.url | prepend: site.baseurl | prepend: site.url }}">{{ post.title }}</a> <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d/%m/%Y" }}</time>
        </li>
        {% endfor %}
</ul>

As notas de desenvolvimento mais recentes do BasicCAT estão no meu [site pessoal](https://blog.xulihang.me/tags/#CAT).
