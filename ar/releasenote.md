---
title: ملاحظات الإصدار
layout: page
lang: ar
---

<style>
.post-content h2 {
  font-size: 1.5rem;
}
</style>

## v1.11.0 (2026/04/14)

* صارت الترجمة الآلية تدعم ترجمة عدة جمل في طلب واحد (الترجمة المجمّعة)
* صار من الممكن إلغاء الترجمة المسبقة بإغلاق مربع التقدم
* تحديث الإضافات

## v1.10.7 (2024/04/23)

* إصلاح مشكلة الخطأ في البحث عن الأحرف المتتالية في خاصية البحث والاستبدال
* إضافة عنصر قائمة للتدقيق الإملائي

## ملاحظات الإصدارات السابقة

<section>
    <ul class="post-list">
        {% assign posts=site.ar | where: "layout", "post" | where: "categories", "releasenote" %}
        {% for post in posts reversed %}
        <li>
            <a href="{{ post.url | prepend: site.baseurl | prepend: site.url }}">{{ post.title }}</a> <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%-d/%-m/%Y" }}</time>
        </li>
        {% endfor %}
    </ul>
</section>