---
title: リリースノート
layout: page
lang: ja
---

<style>
.post-content h2 {
  font-size: 1.5rem;
}
</style>

## v1.11.0 (2026/04/14)

* 機械翻訳で1回のリクエストで複数の文を翻訳できるようになりました（バッチ翻訳）
* 事前翻訳は進捗ダイアログを閉じることでキャンセルできるようになりました
* プラグインを更新

## v1.10.7 (2024/04/23)

* 検索と置換で連続する文字を検索する際のエラーを修正
* スペルチェックのメニュー項目を追加

## これまでのリリースノート

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
