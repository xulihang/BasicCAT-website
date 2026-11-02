---
title: Инструменты
layout: page
lang: ru
---

Несколько инструментов, которые я разработал в процессе переводческой работы:


1. XLSX to TMX

	Читает первый лист файла XLSX; на листе должна быть строка заголовков с кодами языков, например zh-CN, en-US.

	Пример:

	```

	zh-CN	en-US
	Hello
	```

	[Скачать](https://github.com/xulihang/Translation-Tools/releases/download/v1.0/XLSXToTMX.jar)

2. Aligner

	Выравнивает исходный и переведённый файлы либо двуязычный файл, в котором чередуются исходные предложения и их переводы.

	Подробнее: [Новый инструмент! Программа выравнивания двуязычных текстов Aligner](/zh/new-tool-bitext-aligner/)

3. PSD Localization

	Извлекает текст из файлов PSD и вставляет обратно перевод. Требует установленной полной версии Photoshop; пока поддерживается только Windows.

	[Скачать](https://github.com/xulihang/Translation-Tools/releases/download/v1.1/PSDLocalization.zip)

4. Image Transcriber

	Вспомогательный инструмент для OCR изображений. Может дополнительно создавать файлы PSD со слоями текста (нужен установленный Photoshop).

	Для OCR инструмент использует tesseract и API Baidu. Нужно поместить tesseract в папку tesseract-ocr в корневом каталоге, а id и secret API Baidu сохранить в файл `baidu` в корневом каталоге, каждый с новой строки.

	Разработка остановлена, используйте [ImageTrans](https://www.basiccat.org/ru/imagetrans/).

5. FileDiff

	Этот инструмент показывает различия между старой и новой версиями файла и поддерживает различные форматы. Если вы изменили переведённый документ и хотите обновить соответствующий текст в CAT, этот инструмент покажет различия.

	[Исходный код](https://github.com/xulihang/FileDiff)

Примечание. Для запуска этих инструментов сначала установите Java Runtime Environment 8.