---
date: 2026-10-25 10:00:00+08:00
layout: post
title: "Read Japanese and Korean Manga and Untranslated Games with On-Screen Translation on Android"
categories: blog
tags: imagetrans
---

If you follow Japanese or Korean manga on your phone, or play Japanese mobile games, you've probably run into the same problem: you understand the pictures but not the words. Web page translation can translate a web page, but not the dialogue in a manga panel. Screenshot translation means switching apps back and forth, taking a new screenshot for every page.

[ImageTrans for Android](/imagetrans/android/) was built for this. It brings ImageTrans's image translation to your phone: text recognition (OCR) runs on the device, a translation service is called, and the translation is filled back into the image at its original position, size and color.

Today I'd like to introduce two ways to use it:

- Install the ImageTrans extension in Edge for Android and use the ImageTrans Android app on the same phone as a local server, to translate comic images in web pages directly — on sites like pixiv, DLsite, Lezhin and Ridibooks;
- Use the on-screen translation overlay to translate manga and game screens without leaving the current app.

## What is it?

ImageTrans for Android is the Android version of the desktop computer-aided image translation software [ImageTrans](https://www.basiccat.org/imagetrans/). It supports image translation, camera translation, folder translation and screenshot translation. In the app you can choose how to translate:

- Connect to an ImageTrans server and use the full ImageTrans pipeline;
- Local OCR + an OpenAI-compatible API (DeepSeek, Qwen and other compatible APIs work too);
- Local OCR + MyMemory (free, no API key);
- Recognize only, without translating, to check the OCR result.

OCR and image processing can both run entirely on the phone. Only the recognized text is sent out for translation, never the image itself.

Download the APK from [GitHub Releases](https://github.com/xulihang/ImageTrans-Android/releases). It requires Android 8.0 or later on an arm64 device.

## Use case 1: A local server for the Edge browser extension

### Why do you need it?

The ImageTrans browser extension can find the images in a web page, translate them and draw the translation back onto the original images. It's very convenient for reading manga on the web on a phone. There are several ways to give the extension this ability:

- Use the ImageTrans desktop server. The results are good, but it has to run on a local computer, so it ties you to home; a remote server works, but is slow — over ten seconds per image.
- Run local OCR with ONNX Runtime Web in the browser, then translate and lay out the text in the browser. Performance is poor.

The local server in the Android version needs only an Android device to do everything locally, and it's fairly fast.

### How to use it

1. Install ImageTrans for Android on your phone, choose a translation method in the settings — for example "Local OCR + OpenAI" or "Local OCR + MyMemory" — and set the language pair.
2. Start the server feature in the app. The server listens on port `51042`, and the address stays visible in the notification.
3. Install the ImageTrans extension in Edge for Android.
4. Open a comic page, click the extension button, set the processing method to **ImageTrans Server** in the extension settings, enter `http://127.0.0.1:51042` as the address, and set the language pair.
5. Use the extension to translate the images.

The process is: the extension reads the image in the page → ImageTrans for Android does OCR, merges lines into paragraphs, translates and renders the image → the extension swaps in the result. No repeated screenshots, and the images are not sent to a third-party service you know nothing about.

It isn't limited to Japanese manga sites: anything drawn as text inside an image on a web page can be translated this way, for example:

- **Japanese manga sites** such as pixiv, which hosts plenty of Japanese comics;
- **Korean webtoon platforms** such as [Lezhin](https://www.lezhin.com/) and [Ridibooks](https://ridibooks.com/). A webtoon page is usually one very long vertical strip; the Android app recognizes it in blocks by width, renders it block by block and stitches the result together, so a long image is neither squashed nor lost to out-of-memory errors.

Watch the extension translate images in Edge:

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=117499618134284&bvid=BV1i7HV69E7c&cid=43034280445&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

## Use case 2: The on-screen translation overlay for untranslated manga and games

The browser extension only handles images in web pages. Untranslated manga may live in a local reader app, and a game's dialogue, item descriptions and quest hints are drawn straight onto the screen — there is no "image" to hand to the extension.

For that, ImageTrans for Android offers a **persistent translation overlay**:

1. Turn on "Screenshot translation overlay". A selection box appears on screen; you can drag it and resize it by its corners, and it stays above other apps.
2. Switch to your manga reader or game and move the box over the text you want to translate.
3. Tap inside the box or tap the floating ball to recognize and translate. The translation is displayed right inside the box.
4. The rest of the screen is unaffected, so you can keep tapping game buttons and turning pages.

On Android 12 and later, screenshots are taken through the system accessibility service. Grant accessibility to ImageTrans once in the Android settings, and you can switch apps and translate at any time afterwards without another prompt. The service is only used for screenshots and does not read screen content.

Android 10 and 11 don't have usable accessibility screenshots, so they use the system screen capture (MediaProjection) consent instead: you grant it once when the overlay is turned on, and it can be reused for a while.

Watch on-screen translation while reading untranslated manga and playing a game:

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=117501027419895&bvid=BV1PxH56MEcE&cid=43042802683&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
