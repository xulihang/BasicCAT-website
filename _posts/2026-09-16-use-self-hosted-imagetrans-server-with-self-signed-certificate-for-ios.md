---
date: 2026-09-16 20:37:50+08:00
layout: post
title: "Use a Self-Hosted ImageTrans Server with a Self-Signed Certificate on iOS"
categories: blog
tags: imagetrans
---

In [a previous post](./2026-06-16-iphone-browser-extension-doujin-manga-image-translation.md), I explained how to use the Orion Browser on an iPhone together with an ImageTrans server and the ImageTrans browser extension to translate images on web pages.

This post covers the actual setup. Here is what you need to do.

On your computer:

1. In ImageTrans, go to Preferences - Server and generate a self-signed certificate. Make sure to fill in the correct LAN address of your computer.

   ![](/album/certificate/server-preference.png)

   ![](/album/certificate/server-self-cert-creation.png)

2. Start the local server from the Server menu.

   ![](/album/certificate/server.png)

3. Click the LAN link in the server window to show a QR code, then scan it with your phone to open the server. If the IP is wrong, find the correct LAN IP yourself and enter the address manually, for example https://192.168.0.169:51043.

   ![](/album/certificate/qr.png)


On your phone:

1. Once the page is open, find the line that says `Install self-signed cert ` and click it to download the certificate.

   ![](/album/certificate/install-certificate.jpg)

2. Open Settings. You will see a "Profile Downloaded" option. Open it and install the downloaded certificate.

   ![](/album/certificate/settings.PNG)

   ![](/album/certificate/install-profile.PNG)

   ![](/album/certificate/vpn-device-management.PNG)

   After that, the installed certificate will appear under VPN & Device Management.

3. Next, go to Settings - General - About - Certificate Trust Settings and turn on trust for this certificate.

   ![](/album/certificate/certificate-trust-settings.PNG)

4. Open Orion Browser, go to the ImageTrans extension settings, and set the server address to the LAN IP address of your computer, for example https://192.168.0.169:51043. Replace 192.168.0.169 with your own IP. It is usually the address shown in the server's QR code; if it is wrong, find the correct IP yourself.


   ![](/album/certificate/extension-server-settings.PNG)

5. Choose ImageTrans as the translation method, and you can start translating.

   ![](/album/certificate/extension-translation-settings.jpg)


## External Network Sharing

You can use the intranet penetration service provided by ngrok to perform translation on your home computer when you are outside. Since ngrok provides an HTTPS certificate, the certificate installation steps above can also be skipped.