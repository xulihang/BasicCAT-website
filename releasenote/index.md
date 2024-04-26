---
title: Release Notes
layout: page
---

<style>
.post-content h2 {
  font-size: 1.5rem;
}
</style>

## v1.10.7 (2024/04/23)

* Fix a problem in find and replace searching repeated characters
* Add a menu item for language check

## Previous Release Notes Posts

<section>
    <ul class="post-list">
        {% assign posts=site.posts | where: "categories", "releasenote" %}
        {% for post in posts %}
        <li>
            <a href="{{ post.url | prepend: site.baseurl | prepend: site.url }}">{{ post.title }}</a> <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %d, %Y" }}</time>
        </li>
        {% endfor %}
    </ul>
</section>