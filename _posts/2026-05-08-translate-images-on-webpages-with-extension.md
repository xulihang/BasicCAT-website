---
date: 2026-05-08 20:42:50+08:00
layout: post
title: How to Translate Images on a Web Page
categories: blog
tags: imagetrans
---

Browsers all have built-in webpage translation features, but they usually can only translate selectable text, not images. Yandex supports image translation, but with unsatisfactory results. Safari allows copying text but has no translation function. The computer-assisted image translation software [ImageTrans](/imagetrans/) provides a Chrome browser extension that supports direct translation of images on web pages, erasing the original text, filling in the translated text, and restoring colors, rotations, and various styles.

Below is its processing workflow:

1. Through the browser extension, an image translation request is sent to the server.
2. The server calls the connected ImageTrans program to perform the translation.
3. ImageTrans carries out text recognition with OCR, text translation, text inpainting and typesetting, generating a translated image.
4. After receiving the translation result, the browser extension replaces the original image with the translated version.

Because this operates within the browser, some technical limitations must be overcome:

1. Browsers restrict the use of local programs. The local server needs to add headers that allow local invocation. Older versions of Chrome also require HTTPS.
2. If an image is cross‑origin restricted, it cannot be downloaded directly, and fetching image data via canvas will result in a tainted canvas error. In this case, the extension must modify headers to remove CORS restrictions. If referrer information is also restricted, or if the image is not an `<img>` element but a canvas, making direct download impossible, a screenshot feature can be used—but content outside the viewport will be lost. Pixiv, for example, restricts cross‑origin access.
3. Some websites overlay additional content on images, so replacing the image alone does not display the translated version. For instance, X.com.

The ImageTrans extension can already translate images on common websites. Tested sites include Read Comics Online, Pixiv, MangaDex, Lezhin, Tencent Comics, and more. It supports various image types: manga, webtoon, manhua, comics, illustration, scanned books, etc.

Many browser extensions on the market rely on remote servers and require a subscription. ImageTrans, by contrast, runs entirely on the local computer, allowing unlimited translation, using various OCR engines and large language models, directly downloading images to the local machine, preserving translation results, and freely defining text styles.

Extension link: <https://github.com/xulihang/ImageTrans_chrome_extension>

Demo video:

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=116533535705831&bvid=BV1TKdPBcE5G&cid=38164957756&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

PS:

ImageTrans's extension also supports OCR right in the browser through WebAssembly. But its pocessing speed is slow and the ability is limited. It is provided as a free option along with the public ImageTrans server. It is recommended to use the extension with ImageTrans desktop version.


