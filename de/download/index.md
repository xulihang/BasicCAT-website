---
title: Herunterladen
layout: page
permalink: /de/download/
lang: de
---

Bitte wählen Sie das Installationspaket, das zu Ihrem Betriebssystem passt.

### BasicCAT v1.11.0

* Windows: [32 Bit](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-windows-x86.exe) / [64 Bit](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-windows-x64.exe)
* macOS:  [Version für Intel-CPU](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-mac-x64.dmg) / [Version für Apple-CPU](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-mac-arm.dmg)
* Linux und andere Systeme:  [CrossPlatfroms.zip](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-crossplatforms.zip)

Auch über Baidu NetDisk verfügbar: [Link](https://pan.baidu.com/s/1HmD4pJ9hIYyK9bnqINtoFQ)

Frühere Versionen: [Releases](https://github.com/xulihang/BasicCAT/releases/)

Hinweis für macOS-Nutzer: Seit macOS Catalina haben Dateien ein neues Attribut namens `com.apple.quarantine`. Beim Öffnen von BasicCAT erscheint dann die Meldung, die App sei beschädigt. Entfernen Sie dieses Attribut mit dem folgenden Befehl, damit das Programm normal läuft.

```
sudo xattr -rd com.apple.quarantine /Applications/BasicCAT.app
```

### Serverprogramm für gemeinsame Translation Memories und Terminologie

*  [CloudKVS_Server.jar](https://github.com/xulihang/BasicCAT/releases/download/v1.2-beta2/CloudKVS_Server.jar)

### Plugins

Derzeit gibt es für BasicCAT zwei Arten von Plugins: Filter-Plugins und MT-Plugins.

Klicken Sie [hier](https://github.com/xulihang/BasicCAT/releases/download/plugins/all_plugins.zip), um alle Plugins herunterzuladen. Das BasicCAT-Installationspaket enthält bereits die neuesten Plugins, eine separate Installation ist in der Regel nicht nötig.

Denken Sie daran, die entpackten jar- und xml-Dateien in den Ordner plugins zu legen.

Derzeit verfügbare Plugins:

Maschinelle Übersetzung:

* ChatGPT
* Gemini
* DeepL
* Tencent
* Niutrans
* Google
* IBM Watson
* Caiyun Xiaoyi
* Naver Papago
* Cloudtranslation (nur den URL-Parameter einstellen, siehe [offizielle Dokumentation](https://cloudtranslation.com/static/api_zh-cn.html))
* Amazon (separat herunterladen: [Link](https://github.com/xulihang/BasicCAT/releases/download/plugins/amazon.zip))
* OpusCAT (Offline-MT-Engine, [Beschreibung](/zh/offline-machine-translation))
* Web-Maschinelle Übersetzung (extrahiert die maschinelle Übersetzung aus Webseiten, kein API-Schlüssel nötig, [Details](https://www.basiccat.org/zh/new-plugin-machine-translation-via-web/))

Filter:

* Gettext PO

### Weitere Werkzeuge

Einige kleine Werkzeuge, die zur Lösung von Übersetzungsaufgaben entwickelt wurden: [Werkzeuge](/de/tools/)
