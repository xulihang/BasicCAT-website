---
date: 2026-09-16 20:37:50+08:00
layout: post
title: iOS使用自部署ImageTrans服务器与自签名证书
categories: blog
tags: imagetrans
---

[前文](./2026-06-16-iphone-browser-extension-doujin-manga-image-translation.md)讲到如何在iPhone上使用Orion浏览器，结合ImageTrans服务器和ImageTrans的浏览器插件，翻译网页中的图片。

下面讲一下配置。大致需要进行以下操作：

电脑端：

1. 在ImageTrans的偏好设置-服务器中，生成自签名证书。注意需要填写正确的电脑的局域网地址。

   ![](/album/certificate/server-preference.png){: width="960" height="780"}

   ![](/album/certificate/server-self-cert-creation.png){: width="882" height="573"}

2. 通过ImageTrans的菜单-服务器，启动本地服务器。

   ![](/album/certificate/server.png){: width="979" height="422"}

3. 点击服务器窗口的局域网链接，会出现一个二维码，用手机扫描这个二维码，访问服务器。（如果IP不对需要自行查找对应局域网IP，手动输入地址，例如https://192.168.0.169:51043）

   ![](/album/certificate/qr.png){: width="557" height="706"}


手机端：

1. 打开页面后。找到`Install self-signed cert `这行，点击下载证书。
   
   ![](/album/certificate/install-certificate.jpg){: width="750" height="1334"}

2. 打开设置，可以看到已下载描述文件（Profile Downloaded）这个选项。打开，然后安装下载的证书。

   ![](/album/certificate/settings.PNG){: width="750" height="1334"}

   ![](/album/certificate/install-profile.PNG){: width="750" height="1334"}
   
   ![](/album/certificate/vpn-device-management.PNG){: width="750" height="1334"}

   之后在VPN与设备管理选项里能看到安装的证书。

3. 接下来，还要前往设置-通用-关于-证书信任设置里，选择信任这个证书。

   ![](/album/certificate/certificate-trust-settings.PNG){: width="750" height="1334"}

4. 打开Orion浏览器，进入ImageTrans浏览器插件的设置，填写服务器地址为本地电脑的局域网IP地址，例如https://192.168.0.169:51043，替换192.168.0.169为你的IP。一般就是服务器二维码里的地址，如果不对需要自行查找对应IP。


   ![](/album/certificate/extension-server-settings.PNG){: width="750" height="1334"}

5. 选择翻译方式为ImageTrans，然后可以开始翻译了。

   ![](/album/certificate/extension-translation-settings.jpg){: width="750" height="1334"}



## 外网共享

可以使用ngrok提供的内网穿透服务，从而在外面用家里的电脑进行翻译。因为ngrok提供了https证书，所以上面证书安装的步骤也可以省略。