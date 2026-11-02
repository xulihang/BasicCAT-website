---
title: Silhouette-Dokumentation
layout: page
description: Silhouette-Dokumentation.
lang: de
---

## Unterstützte Betriebssysteme

* Windows 7+
* macOS 10.15+
* Linux

## Installation

Für Windows entpacken Sie die Datei und starten Sie das Programm mit `Silhouette.exe`.

Für macOS ziehen Sie die App aus der dmg-Datei in den Ordner `Applications`, um sie zu installieren. Wenn die Meldung erscheint, dass das Paket beschädigt ist, öffnen Sie das Terminal und führen Sie den folgenden Befehl aus:

```bash
sudo xattr -rd com.apple.quarantine /Applications/Silhouette.app
```

Für Linux können Sie die Dateien aus dem Windows-Zip-Paket verwenden. Sie müssen FFmpeg, Whisper.cpp, Java und JavaFX installieren, um das Programm auszuführen. Sie können die [Vorlagendatei](https://github.com/xulihang/Silhouette/releases/download/v1.1.0/Silhouette-Linux-template.zip) verwenden, die diese Abhängigkeiten enthält. Anschließend müssen Sie noch ONNXRuntime herunterladen und die so-Dateien in das Programmverzeichnis entpacken: [linux-onnxruntime-1.20.0.zip](https://github.com/xulihang/onnxruntime-for-win7/releases/download/builds/linux-onnxruntime-1.20.0.zip).

## Einstellungen

Beim Öffnen des Programms müssen Sie die Bestellnummer und die E-Mail-Adresse eingeben, um den Kauf zu verifizieren. Sie können das Programm zunächst mit der 7-tägigen Testversion oder im eingeschränkten Modus ausprobieren.

Außerdem müssen weitere Einstellungen vorgenommen werden.


1. Whisper-Modell. Für die Spracherkennung müssen Sie ein Whisper-Modell auswählen. Den Download-Link finden Sie im Programm oder [hier](https://github.com/xulihang/Silhouette_plugins/#whisper-models).
2. API-Schlüssel. Wenn Sie Übersetzungsdienste wie ChatGPT, Google oder DeepL nutzen möchten, müssen Sie die API-Schlüssel in den Einstellungen eingeben.


## Schnellstart

Ein Screenshot von Silhouette:

![Screenshot](/album/silhouette/screenshot_zh.webp){: width="1500" height="1160"}

In der oberen linken Ecke befindet sich ein Videoplayer mit verschiedenen Steuerelementen.

In der unteren linken Ecke befindet sich eine Tabelle, die die vorhandenen Untertitelzeilen anzeigt.

In der oberen rechten Ecke können Sie die Wellenform anzeigen, die der aktuellen Untertitelzeile entspricht, und deren Zeitstempel und Text bearbeiten.

In der unteren rechten Ecke können Sie die Ergebnisse mehrerer Übersetzungsdienste ansehen.

Im Folgenden wird der grundlegende Ablauf zum Übersetzen einer Video- oder Audiodatei mit Silhouette beschrieben:

1. Öffnen Sie über das Menü „Datei“ in der Menüleiste eine Mediendatei und konfigurieren Sie das Sprachpaar.
2. Verwenden Sie das Menü „Bearbeiten“, um Sprache zu erkennen, Sprachaktivität zu erkennen und Untertitelzeilen zu bearbeiten.
3. Nach der Transkription und Übersetzung können Sie das Ergebnis in eine SRT-Datei oder eine tabulatorgetrennte txt-Datei exportieren. Sie können Daten auch aus diesen Dateien importieren.
