---
title: Blog
layout: page
lang: vi
---

<ul class="post-list">
        {% comment %}
          Chưa có bài viết blog nào dịch sang tiếng Việt nên danh sách đang trống.
          Thêm bài viết vào _vi để chúng hiển thị tại đây.
        {% endcomment %}
        {% assign posts=site.vi | where: "layout", "post" | where: "categories", "blog" %}
        {% for post in posts reversed %}
        <li>
            <a href="{{ post.url | prepend: site.baseurl | prepend: site.url }}">{{ post.title }}</a> <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d/%m/%Y" }}</time>
        </li>
        {% endfor %}
</ul>

Ghi chú phát triển mới nhất của BasicCAT có trên [trang cá nhân](https://blog.xulihang.me/tags/#CAT) của tôi.
