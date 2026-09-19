---
title: المدونة
layout: page
lang: ar
---

<ul class="post-list">
        {% comment %}
          لم تُترجم بعد أي من مقالات المدونة إلى العربية، لذا تبقى القائمة
          فارغة. أضف مقالات إلى _ar لتظهر هنا.
        {% endcomment %}
        {% assign posts=site.ar | where: "layout", "post" | where: "categories", "blog" %}
        {% for post in posts reversed %}
        <li>
            <a href="{{ post.url | prepend: site.baseurl | prepend: site.url }}">{{ post.title }}</a> <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%-d/%-m/%Y" }}</time>
        </li>
        {% endfor %}
</ul>

ملاحظات تطوير BasicCAT الأحدث تجدها على [موقعي الشخصي](https://blog.xulihang.me/tags/#CAT).
