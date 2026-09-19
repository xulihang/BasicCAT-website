---
title: أدوات
layout: page
lang: ar
---

بعض الأدوات التي طوّرتها أثناء عملي في الترجمة:


1. XLSX to TMX

	يقرأ ورقة العمل الأولى في ملف XLSX، ويجب أن تكون لورقة العمل صف رؤوس بالأعمدة، مثل رموز اللغات zh-CN و en-US.

	مثال:

	```

	zh-CN	en-US
	مرحبا	Hello
	```
	
	[تنزيل](https://github.com/xulihang/Translation-Tools/releases/download/v1.0/XLSXToTMX.jar)
	
2. Aligner

	يمكنه إجراء عملية المحاذاة انطلاقًا من الملف الأصلي والملف الهدف، أو من ملف ثنائي اللغة يتألف من مقطع نص أصلي يتلوه مقطع نص مترجم.

	شرح مفصّل: [أداة جديدة! برنامج محاذاة النصوص الثنائية Aligner](/zh/new-tool-bitext-aligner/)
	
3. PSD Localization

	يمكنه استخراج النص من ملف PSD وإعادة إدراج النص المترجم فيه. يتطلب تثبيت النسخة الكاملة من Photoshop على الحاسوب، ويدعم حاليًا أنظمة Windows فقط.

	[تنزيل](https://github.com/xulihang/Translation-Tools/releases/download/v1.1/PSDLocalization.zip)
	
4. Image Transcriber

	أداة مساعدة للتعرف الضوئي على الحروف (OCR) في الصور. ويمكنها كذلك إنشاء ملفات PSD تحتوي على طبقات نصية (يتطلب تثبيت Photoshop على الحاسوب).
	
	تستخدم الأداة tesseract وواجهة Baidu API لإجراء التعرف الضوئي على الحروف، لذا يجب وضع tesseract في مجلد tesseract-ocr في الدليل الجذر، وحفظ معرّف Baidu API والـ secret الخاص به في ملف باسم baidu في الدليل الجذر، مع الفصل بينهما بسطر جديد.
		
	توقف تطوير هذه الأداة، يرجى استخدام [ImageTrans](https://www.basiccat.org/ar/imagetrans/).

5. FileDiff

	تتيح هذه الأداة عرض الفروق بين الإصدارين القديم والجديد للملفات، وتدعم مختلف صيغ الملفات. وإذا عدّلت مستندًا مترجمًا وأردت تعديل النص المقابل له في برنامج CAT، يمكنك استخدام هذه الأداة لعرض الفروق.
	
	[الشيفرة المصدرية](https://github.com/xulihang/FileDiff)	
	
ملاحظة: لتشغيل هذه الأدوات، يرجى تثبيت Java Runtime Environment 8 أولاً.