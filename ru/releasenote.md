---
title: Примечания к выпускам
layout: page
lang: ru
---

<style>
.post-content h2 {
  font-size: 1.5rem;
}
</style>

## v1.11.0 (2026/04/14)

* Машинный перевод поддерживает перевод нескольких предложений за один запрос (пакетный перевод)
* Предварительный перевод можно отменить, закрыв окно хода выполнения
* Обновлены плагины

## v1.10.7 (2024/04/23)

* Исправлена ошибка поиска и замены при поиске последовательных символов
* Добавлен пункт меню проверки правописания

## Предыдущие примечания к выпускам

<section>
    <ul class="post-list">
        {% comment %}
          Старых примечаний к выпускам на русском пока нет, поэтому список пуст.
          Добавьте записи в _ru, чтобы они появились здесь.
        {% endcomment %}
        {% assign posts=site.ru | where: "layout", "post" | where: "categories", "releasenote" %}
        {% for post in posts reversed %}
        <li>
            <a href="{{ post.url | prepend: site.baseurl | prepend: site.url }}">{{ post.title }}</a> <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d.%m.%Y" }}</time>
        </li>
        {% endfor %}
    </ul>
</section>