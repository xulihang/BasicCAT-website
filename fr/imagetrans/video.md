---
title: Tutoriels vidéo et démonstrations d'ImageTrans
layout: page
lang: fr
---

## Tutoriels vidéo et démonstrations

### Prise en main

<iframe src="//player.bilibili.com/player.html?aid=89725886&cid=153246062&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

### Traduire un manga japonais

<iframe src="//player.bilibili.com/player.html?aid=373454146&bvid=BV1Uo4y1Z7Wo&cid=283625204&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

Outre la traduction manuelle étape par étape, la traduction automatique en un clic est également prise en charge. [Démonstration](https://www.bilibili.com/video/BV1Uo4y1Z7Wo?p=4).

### Détection des zones de texte

<iframe src="//player.bilibili.com/player.html?aid=89974961&cid=153667812&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>	

### Insertion du texte traduit

<iframe src="//player.bilibili.com/player.html?aid=89974961&cid=153668149&page=2" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

### Recherche dans le corpus et recherche d'onomatopées

<iframe src="//player.bilibili.com/player.html?aid=90795736&cid=155049012&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

### Extension Chrome de traduction d'images

<iframe src="//player.bilibili.com/player.html?aid=458404487&bvid=BV1E5411p73K&cid=276586632&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

L'[extension Chrome](https://github.com/xulihang/ImageTrans_chrome_extension) permet de traduire directement les images présentes sur les pages web.

### Serveur de traduction automatique

<video src="https://github.wuyanzheshui.workers.dev/xulihang/BasicCAT-website/releases/download/attachments/imagetrans_server_fastmode.mp4" controls="controls">
Votre navigateur ne prend pas en charge la balise video.
</video>

Le serveur permet aux utilisateurs d'appeler ImageTrans en ligne depuis une page web et d'ajuster les paramètres de traitement pour chaque image. La vidéo ci-dessus montre le mode de traduction rapide, dans lequel une image prend moins de 10 secondes à traduire.

Il existe actuellement deux versions du serveur. La version 1 dépend d'ImageTrans installé en local : les résultats sont meilleurs, mais elle est limitée à 5 traductions par jour. La version 2 ne dépend pas d'ImageTrans local et ses fonctionnalités sont plus limitées, mais elle permet d'utiliser ses propres clés d'API, sans limite du nombre de requêtes.

Les paramètres de langue de la traduction automatique et de l'OCR doivent être définis manuellement ; le sens par défaut va du chinois vers l'anglais.

À noter que le résultat de la traduction automatique n'est pas toujours satisfaisant et nécessite des ajustements manuels minutieux. La prise en charge de ces ajustements est l'une des grandes caractéristiques d'ImageTrans.

{% include comments.html %}
