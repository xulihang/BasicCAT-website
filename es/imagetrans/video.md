---
title: Vídeos de ImageTrans
layout: page
lang: es
---

## Tutoriales en vídeo y demostraciones

### Introducción

<iframe src="//player.bilibili.com/player.html?aid=89725886&cid=153246062&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

### Traducir manga japonés

<iframe src="//player.bilibili.com/player.html?aid=373454146&bvid=BV1Uo4y1Z7Wo&cid=283625204&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

Además de la traducción manual paso a paso, también se puede traducir todo automáticamente con un clic. [Demostración](https://www.bilibili.com/video/BV1Uo4y1Z7Wo?p=4).

### Detección de regiones de texto

<iframe src="//player.bilibili.com/player.html?aid=89974961&cid=153667812&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>	

### Insertar el texto traducido

<iframe src="//player.bilibili.com/player.html?aid=89974961&cid=153668149&page=2" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

### Búsqueda en corpus y búsqueda de onomatopeyas

<iframe src="//player.bilibili.com/player.html?aid=90795736&cid=155049012&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

### Extensión de Chrome para la traducción de imágenes

<iframe src="//player.bilibili.com/player.html?aid=458404487&bvid=BV1E5411p73K&cid=276586632&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

Es posible traducir imágenes directamente en páginas web con la [extensión de Chrome](https://github.com/xulihang/ImageTrans_chrome_extension).

### Servidor de traducción automática

<video src="https://github.wuyanzheshui.workers.dev/xulihang/BasicCAT-website/releases/download/attachments/imagetrans_server_fastmode.mp4" controls="controls">
Su navegador no admite la etiqueta video.
</video>

El servidor permite a los usuarios llamar a ImageTrans en línea desde una página web y ajustar los parámetros de procesamiento para cada imagen. El vídeo anterior muestra el modo de traducción rápida, en el que una imagen tarda menos de 10 segundos en traducirse.

Actualmente existen dos versiones del servidor. La versión 1 depende del ImageTrans local, tiene mejores resultados, pero solo permite 5 traducciones al día. La versión 2 no depende del ImageTrans local y tiene funciones limitadas, pero permite usar sus propias claves de API, sin límite de solicitudes.

Los parámetros de idioma de la traducción automática y del OCR deben definirse manualmente; la dirección predeterminada es del chino al inglés.

Cabe señalar que el resultado de la traducción automática no siempre es satisfactorio y requiere ajustes manuales cuidadosos. La posibilidad de hacer estos ajustes es una de las grandes características de ImageTrans.

{% include comments.html %}
