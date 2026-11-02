---
title: Видео ImageTrans
layout: page
lang: ru
---

## Видеоуроки и демонстрации

### Введение

<iframe src="//player.bilibili.com/player.html?aid=89725886&cid=153246062&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

### Перевод японских комиксов

<iframe src="//player.bilibili.com/player.html?aid=373454146&bvid=BV1Uo4y1Z7Wo&cid=283625204&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

Помимо пошагового перевода вручную, поддерживается и автоматический перевод в один клик — [демонстрация](https://www.bilibili.com/video/BV1Uo4y1Z7Wo?p=4).

### Обнаружение текстовых областей

<iframe src="//player.bilibili.com/player.html?aid=89974961&cid=153667812&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>	

### Вставка перевода

<iframe src="//player.bilibili.com/player.html?aid=89974961&cid=153668149&page=2" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

### Поиск по корпусу и поиск звукоподражаний

<iframe src="//player.bilibili.com/player.html?aid=90795736&cid=155049012&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

### Расширение Chrome для перевода изображений

<iframe src="//player.bilibili.com/player.html?aid=458404487&bvid=BV1E5411p73K&cid=276586632&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

С помощью [расширения Chrome](https://github.com/xulihang/ImageTrans_chrome_extension) можно переводить изображения прямо на веб-страницах.

### Сервер автоматического перевода

<video src="https://github.wuyanzheshui.workers.dev/xulihang/BasicCAT-website/releases/download/attachments/imagetrans_server_fastmode.mp4" controls="controls">
Ваш браузер не поддерживает тег video.
</video>

Сервер позволяет пользователям вызывать ImageTrans онлайн через веб-страницу и настраивать параметры обработки для разных изображений. В видео выше показан режим быстрого перевода: на перевод одного изображения уходит менее 10 секунд.

В настоящее время существует две версии сервера. Версия 1 зависит от локального ImageTrans, даёт лучшие результаты, но позволяет переводить только 5 раз в день. Версия 2 не зависит от локального ImageTrans, имеет ограниченные функции, но позволяет использовать собственные ключи API без ограничений на количество запросов.

Параметры языка для машинного перевода и OCR необходимо задавать вручную; по умолчанию направление — с китайского на английский.

Следует отметить, что результат автоматического перевода не всегда бывает удовлетворительным и требует тщательной ручной доработки. Возможность такой доработки — одна из главных особенностей ImageTrans.

{% include comments.html %}
