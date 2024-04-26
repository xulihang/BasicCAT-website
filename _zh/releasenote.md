---
title: 发布说明
layout: page
permalink: /zh/releasenote/
---

<style>
.post-content h2 {
  font-size: 1.5rem;
}
</style>

## v1.10.7 (2024/04/23)

* 修复查找与替换搜索连续字符出错的问题
* 添加拼写检查的菜单项

## 之前的发布说明

<section>
    <ul class="post-list">
        {% assign posts=site.zh | where: "layout", "post" | where: "categories", "releasenote" %}
        {% for post in posts reversed %}
        <li>
            <a href="{{ post.url | prepend: site.baseurl | prepend: site.url }}">{{ post.title }}</a> <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y年%-m月%-d日" }}</time>
        </li>
        {% endfor %}
    </ul>
</section>