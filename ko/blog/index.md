---
title: 블로그
layout: page
lang: ko
---

<ul class="post-list">
        {% comment %}
          아직 한국어로 번역된 블로그 글이 없어 목록이 비어 있습니다.
          _ko 디렉터리에 글을 추가하면 여기에 표시됩니다.
        {% endcomment %}
        {% assign posts=site.ko | where: "layout", "post" | where: "categories", "blog" %}
        {% for post in posts reversed %}
        <li>
            <a href="{{ post.url | prepend: site.baseurl | prepend: site.url }}">{{ post.title }}</a> <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y년 %-m월 %-d일" }}</time>
        </li>
        {% endfor %}
</ul>

업데이트된 BasicCAT 개발 노트는 제 [개인 사이트](https://blog.xulihang.me/tags/#CAT)를 참고하세요.
