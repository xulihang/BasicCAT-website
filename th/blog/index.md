---
title: บล็อก
layout: page
lang: th
---

<ul class="post-list">
        {% comment %}
          ยังไม่มีบทความบล็อกที่แปลเป็นภาษาไทย รายการจึงว่างอยู่
          เพิ่มบทความใน _th เพื่อให้แสดงที่นี่
        {% endcomment %}
        {% assign posts=site.th | where: "layout", "post" | where: "categories", "blog" %}
        {% for post in posts reversed %}
        <li>
            <a href="{{ post.url | prepend: site.baseurl | prepend: site.url }}">{{ post.title }}</a> <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d/%m/%Y" }}</time>
        </li>
        {% endfor %}
</ul>

บันทึกการพัฒนา BasicCAT ฉบับล่าสุดอยู่ที่[เว็บไซต์ส่วนตัว](https://blog.xulihang.me/tags/#CAT)ของผม
