---
date: 2026-06-16 19:26:50+08:00
layout: post
title: "Translate Manga, Doujinshi, and Images on iPhone with a Browser Extension"
categories: blog
tags: imagetrans
---
Reading Japanese manga and doujinshi on an iPhone can be frustrating if you don't understand the language. While modern browsers can translate webpage text, they usually cannot translate text embedded inside images.

This is a problem because manga, doujinshi, comics, scanned books, screenshots, and many social media posts contain most or all of their content as images.

With the ImageTrans browser extension and Orion Browser, you can translate images directly on your iPhone.

## Why Traditional Web Translators Don't Work

Built-in translators such as Google Translate mainly work on HTML text.

However, many websites display content as images:

* Manga pages
* Doujinshi
* Comics
* Scanned books
* Screenshots
* Infographics
* Social media posts

Since the text is part of the image itself, normal webpage translation cannot access or translate it.

ImageTrans solves this problem by performing OCR, translation, and image editing on the image.

## Why Orion Browser?

Apple's Safari does not support Chrome extensions directly.

Fortunately, Orion Browser provides experimental support for many Chrome and Firefox extensions on iPhone and iPad.

This makes it possible to install and use the ImageTrans browser extension on iOS.

Once installed, ImageTrans can help translate manga pages, comics, scanned documents, and other image-based content while browsing.

## Two Ways to Translate Images

### Method 1: Image Translation

The extension detects images on the webpage and sends them for processing.

The workflow is:

1. Detect the image.
2. Extract text using OCR.
3. Translate the text.
4. Remove the original text.
5. Render the translation.
6. Replace the original image.

This method works well for:

* Manga
* Doujinshi
* Comics
* Scanned documents
* Posters
* Infographics

### Method 2: Screenshot Translation

Screenshot Translation is currently the most reliable option on iPhone.

Instead of downloading the image directly from the webpage, you select a region of the screen and send the screenshot to ImageTrans.

The workflow is:

1. Capture a screenshot of the selected area.
2. Extract text using OCR.
3. Translate the text.
4. Generate a translated image.
5. Display the result.

This method works even when direct access to webpage images is restricted.

## Current Limitations on iOS

Because Orion Browser runs extensions differently from desktop Chrome, there are some limitations.

### Cross-Origin Image Access

Many websites host images on domains that are different from the webpage itself.

On desktop Chrome, ImageTrans uses DeclarativeNetRequest rules to modify requests and work around some cross-origin restrictions.

On Orion Browser for iOS, these request modifications do not always work correctly.

As a result:

* Some images cannot be downloaded by the extension.
* Direct image translation may fail.
* Screenshot Translation is often the preferred workaround.

For manga and doujinshi readers, Screenshot Translation is usually the most reliable option.

### Using a Local ImageTrans Server

ImageTrans can run OCR and translation locally on your computer, allowing images to be processed without relying on external cloud services.

On desktop browsers, the extension normally communicates with the local ImageTrans server through its background script. This helps avoid certificate and mixed-content restrictions when accessing a service running on a local network IP address.

Unfortunately, this communication path does not work reliably in Orion Browser on iOS.

As a result, the extension often needs to communicate with the ImageTrans server directly.

Because most websites today are served over HTTPS, browsers will block requests from an HTTPS page to an unsecured HTTP service on your local network.

To make the connection work properly, the ImageTrans server should also use HTTPS.

A self-signed certificate is needed for Intranet usage, you will need to:

1. Generate a certificate for the ImageTrans server with the server's IP.
2. Install the certificate on your iPhone.
3. Trust the certificate in iOS Settings.

After the certificate is trusted, the browser can securely communicate with the ImageTrans server through its local network address.

### Local PaddleOCR Is Not Available

The ImageTrans browser extension can normally run PaddleOCR directly inside the browser using WebAssembly (WASM).

This allows OCR to run entirely on the user's device without requiring a separate server.

However, Orion Browser on iOS currently has compatibility issues with loading the required WASM modules.

As a result, the built-in PaddleOCR engine cannot be initialized correctly.

Because of this limitation, OCR processing must be performed by an ImageTrans server running on another device, such as:

* A Windows PC
* A Mac
* A Linux machine

The extension sends screenshots or images to the server, which performs OCR, translation, and image rendering before returning the translated result.

## Recommended Setup

For the best manga and doujinshi reading experience on iPhone:

1. Install Orion Browser.
2. Install the ImageTrans browser extension.
3. Run ImageTrans on a PC, Mac, or home server.
4. Setup certificate HTTPS on the ImageTrans server.
5. Install and trust the server certificate on iOS.
6. Configure the extension to use the ImageTrans server.
7. Use Screenshot Translation whenever direct image translation is unavailable.

This setup avoids the current iOS limitations related to cross-origin image access, background-script networking, and WebAssembly-based OCR.

PS: There is also a public server you can have a try first without setting up the ImageTrans server. But since it is slow, not recommended for heavy usage.

## What Can You Translate?

ImageTrans is not limited to manga and doujinshi.

You can also translate:

* Comics
* Webtoons
* Light novel illustrations
* Game screenshots
* Japanese blogs
* Chinese comics
* Korean webtoons
* Scanned books
* Technical diagrams
* Infographics
* Social media images

Any image containing text can potentially be translated.

## Conclusion

Although browser extension support on iPhone is still more limited than on desktop systems, Orion Browser makes image translation possible on iOS.

By combining Orion Browser with ImageTrans, you can translate manga, doujinshi, comics, scanned documents, and other image-based content directly while browsing.

Due to current iOS limitations, Screenshot Translation remains the most reliable workflow. When paired with an HTTPS-enabled ImageTrans server, it provides a practical way to read foreign-language image content on an iPhone without constantly switching between apps.

Demo video: <https://youtube.com/shorts/YeDeC-KigDE?si=NK240zYsoEEUpMok>