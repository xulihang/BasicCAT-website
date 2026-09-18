---
title: ブログ
layout: page
lang: ja
---

<ul class="post-list">
        {% comment %}
          日本語版のブログ記事はまだ翻訳していないため、一覧は空になります。
          _ja ディレクトリに記事を追加すると、ここに表示されます。
        {% endcomment %}
        {% assign posts=site.ja | where: "layout", "post" | where: "categories", "blog" %}
        {% for post in posts reversed %}
        <li>
            <a href="{{ post.url | prepend: site.baseurl | prepend: site.url }}">{{ post.title }}</a> <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y年%-m月%-d日" }}</time>
        </li>
        {% endfor %}
</ul>

更新版のBasicCAT開発ノートは私の[個人サイト](https://blog.xulihang.me/tags/#CAT)をご覧ください。
