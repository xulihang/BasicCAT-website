---
title: Versionshinweise zu Silhouette
layout: page
description: Versionshinweise zu Silhouette.
lang: de
---

<style>
.post-content h2 {
  font-size: 1.5rem;
}
</style>

## v1.6.2 (2026/08/30)

* Aktualisiert die Übersetzungs-Plugins für ChatGPT und DeepSeek
* Neues kostenloses LLM-Plugin
* Behebt das Problem, dass beim Teilen von Text fälschlicherweise der Originaltext anstelle des übersetzten Textes verwendet wurde


## v1.6.1 (2026/05/01)

* FunASR hinzugefügt
* Behebt das Problem, dass der Export von SRT-Dateien fehlschlug, wenn das Erkennungsergebnis nur aus Zahlen bestand
* Behebt das Problem, dass die Einstellung für die Untertitel-Schriftgröße beim Abspielen von Audiodateien nicht wirksam war
* Behebt das Problem, dass das Drücken der Leertaste oder das Bewegen der Maus im Textfeld den Fokus wechselte

## v1.6.0 (2026/04/28)

* Qwen3-ASR hinzugefügt
* Weitere Optionen zum Zusammenführen von Zeilen: nach Satzzeichen und mit optionaler Zeitprüfung
* Einstellung für den unteren Versatz von Untertiteln
* Prüft, ob das ASR-Plugin installiert ist oder läuft
* Behebt einen Fehler beim Öffnen von Audiodateien

## v1.5.5 (2025/10/21)

* Unterstützt Windows 7
* Bei fehlgeschlagenem Laden von VLC wird ein Fehler gemeldet
* Behebt das Problem, dass das Klicken auf die Wellenform nicht zum Springen führte, wenn die Wellenform deaktiviert war
* Behebt das Problem, dass der Status „Fortschritt folgen“ nach dem Pausieren der Wiedergabe ausgewählter Zeilen nicht wiederhergestellt wurde

## v1.5.4 (2025/10/19)

* Behebt einen Fehler beim Rechtsklick auf den Wiedergabebereich, wenn kein Video geöffnet ist
* VLC standardmäßig enthalten

## v1.5.3 (2025/07/06)

* Einstellung für die Zeit des schnellen Vorlaufs hinzugefügt
* Menüpunkt zum Abspielen jeder Zeile hinzugefügt
* Fehler behoben

## v1.5.2 (2025/05/18)

* Generator für Videos ohne Untertitel hinzugefügt
* Klicken auf die Wellenform zum Springen in der Wiedergabe unterstützt

## v1.5.1 (2025/05/11)

* „Fortschritt folgen“ beim Abspielen der Auswahl deaktiviert
* Der Aligner unterstützt jetzt die Ausrichtung eines Teils des Textes
* Untertitel-Einstellungen hinzugefügt: Format und Anpassung an die Videobreite
* FFmpeg-Runner hinzugefügt
* Neue Exportoption: Video mit eingebrannten Untertiteln (mit FFmpeg gerendert)

## v1.5.0 (2025/05/02)

* Neue Funktionen: Zeilen teilen und zusammenführen
* Der Satzsplitter hat eine Schaltfläche zum automatischen Teilen von Sätzen nach SRX-Regeln erhalten
* Neuer Modus zum Teilen und Zusammenführen von Zeilen
* Neue Schaltfläche für schnelle Übersetzung
* Neue CSS-Einstellungen für den Untertiteltext
* Behebt die Übergabe zusätzlicher Parameter bei der Erkennung der gesamten Datei mit Whisper
* Verbessert die Fehlermeldungen von Whisper

## v1.4.1 (2025/04/04)

* Neue Option zum Importieren und Exportieren von TXT
* Neue Optionen im Zusammenhang mit dem Importieren von Text aus SRT
* Neues DeepSeek-Plugin
* Timeout von ChatGPT auf 2 Minuten erhöht

## v1.4.0 (2025/03/01)

* Neue Konvertierung zwischen vereinfachtem und traditionellem Chinesisch
* Neuer Frame-Extraktor
* Menüpunkte zum Springen und Abspielen hinzugefügt
* Kontextmenüpunkt zum Erkennen der Auswahl hinzugefügt
* Behebt das Problem mit dem chinesischen Sprachcode bei Whisper

## v1.3.0 (2025/02/22)

* Neuer Aligner zur Ausrichtung der erkannten Zeitachse an vorhandenem Text (Text-Audio-Synchronisierung)
* Import und Export von XLIFF unterstützt
* Import zweisprachiger SRT-Dateien unterstützt
* Neue Projekteinstellung für zusätzliche Spracherkennungsparameter
* Neuer Menüpunkt zum Vertauschen von Original- und Übersetzungstext
* Neue Spracherkennungsoption: Audio nicht aufteilen
* Unter Windows wird beim ersten Start gefragt, ob die GPU aktiviert werden soll
* Weitere Fehlerbehebungen

## v1.2.0 (2025/02/09)

* Einstellung zum präzisen Abspielen der Auswahl hinzugefügt
* Spracheingabe hinzugefügt
* Satzsplitter hinzugefügt
* Der Stapelübersetzer unterstützt jetzt den SRT-Export
* Vor dem stapelweisen Anpassen der Zeitachse wird nach dem anzupassenden Bereich gefragt
* Behebt das Versatzproblem beim Zeichnen der Wellenform
* Weitere Fehlerbehebungen

## v1.1.0 (2025/02/04)

* Einstellung für die Untertitel-Schriftgröße hinzugefügt
* Einstellung zur Verwendung der GPU hinzugefügt
* Projekteinstellung für Prompts hinzugefügt
* Stapelübersetzung hinzugefügt
* Funktion zum gesamten Verschieben der Zeitachse hinzugefügt
* Menüpunkte zum Verschieben der ausgewählten Zeilen nach oben und unten hinzugefügt
* Fortschrittstext verwendet das Format hh:mm:ss
* macOS-Tastenkombinationen verwenden die Befehlstaste
* Ausgewählte Zeilen können mit der Entf-Taste schnell gelöscht werden
* Fügt nach der ausgewählten Zeile eine neue Zeile ein
* Hinweis, dass der Pfad unter macOS und Linux keine Leerzeichen enthalten darf
* Behebt das Problem der zentrierten Ausrichtung von Untertiteln
* Behebt Lokalisierungsprobleme

## v1.0.0 (2025/01/27)

Veröffentlichung der ersten Version.

{% include comments.html %}
