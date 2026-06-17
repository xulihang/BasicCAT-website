---
date: 2026-06-17 20:32:50+08:00
layout: post
title: "Translate Manga Images on Android Browser with Extension"
categories: blog
tags: imagetrans
---

Previously [introduced](./2026-06-16-iphone-browser-extension-doujin-manga-image-translation.md) how to translate manga images on iPhone using Orion Browser and the ImageTrans browser extension. Android supports it as well.

I tested Kiwi and Firefox browsers, and both can install the ImageTrans extension and translate images in web pages without issues. There are no restrictions like those on Orion Browser for iOS.

Kiwi Browser supports installing Chrome extensions. Once the browser is installed, you can install the ImageTrans extension directly from the Chrome Web Store.

For Firefox, you can download and install it directly from the Firefox Add-ons store.

After installation, open the manga page and click the extension button to start translating.

ImageTrans reads the images in the web page, performs OCR recognition on them, calls translation services to obtain the translated text, and finally overlays the translation back onto the original images. The entire process is completed within the current web page, without the need for repeated screenshots or switching between apps.

The extension also provides a screenshot translation feature, allowing you to recognize and translate any area on the screen.

Source code repositories for the ImageTrans browser extension:

* Chrome: <https://github.com/xulihang/ImageTrans_chrome_extension>
* Firefox: <https://github.com/xulihang/ImageTrans_firefox_extension>

Demo video:

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=116708002041395&bvid=BV131Ex6VEhr&cid=38930809605&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
