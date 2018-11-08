---
title: 博客
layout: page
permalink: /zh/blog/
---

<section>
    <ul class="post-list">
        {% assign posts=site.zh | where: "layout", "post" | where: "categories", "blog" %}
        {% for post in posts reversed %}
        <li>
            <a href="{{ post.url | prepend: site.baseurl | prepend: site.url }}">{{ post.title }}</a> <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y年%-m月%-d日" }}</time>
        </li>
        {% endfor %}
    </ul>
</section>