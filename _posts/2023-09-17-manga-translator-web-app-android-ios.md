---
date: 2023-09-17 15:54:50+08:00
layout: post
title: Manga Translator Web App for Android and iOS
categories: blog
tags: imagetrans
---

[ImageTrans](https://www.basiccat.org/imagetrans) is an image translation software, which can be used to translate images like manga and posters. It can run as a web app so that we can use it in browsers. Android and iOS devices can then use it to translate images.

If we run the web app at home, we can only access it on the local area network. In order to use it on the internet, we can use ngrok. In this article, we are going to describe how to do this in detail.

1. Create a new Japanese to English project. Select mangaOCR as the OCR engine.

2. Start the server of ImageTrans.

   1. Open the window form of the server via the menu.

      ![Server](/album/web-app/menu-server.jpg)

   2. Click Start Server and connect. Here, you can set the machine translation, text detection, and boxes merging methods. Here we use ChatGPT for translation and the balloon detection model for text detection.

      ![Server form](/album/web-app/server-form.jpg)


3. After starting the server, we can access <https://local.basiccat.org:51043/> to use ImageTrans running on our computer. On this page, we can upload an image to translate.

   ![Web page](/album/web-app/web-page.jpg)


4. To use it on the internet, we can use ngrok.

   1. Download and register [ngrok](https://ngrok.com/).

   2. Install it according to the instructions and run it using the following command:

      ```bash
      ngrok http 51042
      ```

      The following interface will be displayed:

      ![ngrok](/album/web-app/ngrok-cli.jpg)

      ngrok will provide a URL like `https://3751-101-71-39-138.ngrok-free.app-like` that we can use to access the web app of ImageTrans.

5. Use a mobile phone to visit the page and translate a manga image:

   <video src="https://github.com/xulihang/BasicCAT-website/releases/download/attachments/ImageTrans-web-demo-ja2en.mp4" controls="controls" style="max-width:100%;">
   Your browser does not support the video tag.
   </video>

