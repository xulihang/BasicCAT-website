---
title: تحميل
layout: page
permalink: /ar/download/
lang: ar
---

يرجى اختيار حزمة التثبيت المناسبة لنظام التشغيل الذي تستخدمه.

### BasicCAT v1.11.0

* Windows: [32 بت](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-windows-x86.exe) / [64 بت](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-windows-x64.exe)
* macOS:  [إصدار معالجات Intel](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-mac-x64.dmg) / [إصدار معالجات Apple](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-mac-arm.dmg)
* Linux والأنظمة الأخرى:  [CrossPlatfroms.zip](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-crossplatforms.zip)

يمكنك أيضًا التنزيل من Baidu NetDisk: [الرابط](https://pan.baidu.com/s/1HmD4pJ9hIYyK9bnqINtoFQ)

الإصدارات السابقة: [Releases](https://github.com/xulihang/BasicCAT/releases/)

ملاحظة لمستخدمي macOS: بدءًا من macOS Catalina، تكتسب الملفات سمة جديدة تُسمى `com.apple.quarantine`. وعند فتح BasicCAT ستظهر رسالة تفيد بأن التطبيق تالف. تحتاج إلى تنفيذ الأمر التالي لإزالة هذه السمة حتى يعمل البرنامج بشكل طبيعي.

```
sudo xattr -rd com.apple.quarantine /Applications/BasicCAT.app
```

### برنامج خادم لمشاركة ذاكرة الترجمة والمصطلحات

*  [CloudKVS_Server.jar](https://github.com/xulihang/BasicCAT/releases/download/v1.2-beta2/CloudKVS_Server.jar)

### الإضافات

يتوفر حاليًا في BasicCAT نوعان من الإضافات: إضافات المرشحات وإضافات الترجمة الآلية.

يمكنك النقر [هنا](https://github.com/xulihang/BasicCAT/releases/download/plugins/all_plugins.zip) لتنزيل جميع الإضافات. تتضمن حزمة تثبيت BasicCAT أحدث الإضافات، لذا لا حاجة عادةً إلى تنزيلها بشكل منفصل.

تذكّر وضع ملفات jar و xml التي تحصل عليها بعد فك الضغط في مجلد plugins.

الإضافات المتوفرة حاليًا:

الترجمة الآلية:

* ChatGPT
* Gemini
* DeepL
* Tencent
* Niutrans
* Google
* IBM Watson
* Colorful Clouds
* Naver Papago
* Cloud Translation (ما عليك سوى ضبط معامل url، راجع [الشرح الرسمي](https://cloudtranslation.com/static/api_zh-cn.html))
* Amazon (يحتاج إلى تنزيل منفصل: [الرابط](https://github.com/xulihang/BasicCAT/releases/download/plugins/amazon.zip))
* OpusCAT (محرك ترجمة آلية دون اتصال، [الشرح](/zh/offline-machine-translation))
* الترجمة الآلية عبر صفحات الويب (استخراج الترجمة الآلية من صفحات الويب دون الحاجة إلى API، [شرح مفصّل](https://www.basiccat.org/zh/new-plugin-machine-translation-via-web/))

المرشحات:

* Gettext PO

### أدوات أخرى

بعض الأدوات الصغيرة التي طُوّرت لإنجاز مهام الترجمة: [الأدوات](/ar/tools/)

