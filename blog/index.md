---
title: Blogs
layout: page
---

<ul class="post-list">
        {% assign posts=site.posts | where: "layout", "post" | where: "categories", "blog" %}
        {% for post in posts %}
		<li>
            <a href="{{ post.url | prepend: site.baseurl | prepend: site.url }}">{{ post.title }}</a> <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %d, %Y" }}</time>
        </li>
        {% endfor %}
</ul>