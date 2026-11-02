---
title: Werkzeuge
layout: page
lang: de
---

Einige Werkzeuge, die ich bei meiner Übersetzungsarbeit entwickelt habe:


1. XLSX to TMX

	Liest das erste Arbeitsblatt einer XLSX-Datei ein; das Arbeitsblatt muss eine Kopfzeile mit Sprachcodes wie zh-CN, en-US enthalten.

	Beispiel:

	```

	zh-CN	en-US
	Hello
	```

	[Herunterladen](https://github.com/xulihang/Translation-Tools/releases/download/v1.0/XLSXToTMX.jar)

2. Aligner

	Richtet eine Ausgangsdatei und eine Zieldatei oder eine zweisprachige Datei mit abwechselnd Original und Übersetzung aneinander aus.

	Ausführliche Beschreibung: [Neues Werkzeug! Software zur Ausrichtung zweisprachiger Texte – Aligner](/zh/new-tool-bitext-aligner/)

3. PSD Localization

	Extrahiert Text aus PSD-Dateien und fügt den übersetzten Text wieder ein. Erfordert eine vollständige Photoshop-Installation; derzeit wird nur Windows unterstützt.

	[Herunterladen](https://github.com/xulihang/Translation-Tools/releases/download/v1.1/PSDLocalization.zip)

4. Image Transcriber

	Hilfswerkzeug für OCR von Bildern. Kann zusätzlich PSD-Dateien mit Textebenen erzeugen (erfordert Photoshop auf dem Computer).

	Das Werkzeug verwendet tesseract und die Baidu-API für OCR. tesseract muss sich im Ordner tesseract-ocr im Stammverzeichnis befinden, und die ID sowie der Secret-Schlüssel der Baidu-API müssen in der Datei `baidu` im Stammverzeichnis gespeichert werden, jeweils durch einen Zeilenumbruch getrennt.

	Die Entwicklung wurde eingestellt, bitte verwenden Sie [ImageTrans](https://www.basiccat.org/de/imagetrans/).

5. FileDiff

	Dieses Werkzeug zeigt die Unterschiede zwischen der alten und der neuen Version einer Datei an und unterstützt viele Dateiformate. Wenn Sie ein übersetztes Dokument bearbeitet und den entsprechenden Text im CAT aktualisieren möchten, zeigt Ihnen dieses Werkzeug die Unterschiede an.

	[Quellcode](https://github.com/xulihang/FileDiff)

Hinweis: Um diese Werkzeuge auszuführen, installieren Sie zuerst Java Runtime Environment 8.