---
title: Versionshinweise zu ImageTrans
layout: page
lang: de
---

<style>
.post-content h2 {
  font-size: 1.5rem;
}
</style>

## v7.0.0 (2026/11/01)

* ag-psd nach Java portiert, um PSD-Dateien zu erzeugen. Unterstützung für die Erzeugung von PSD-Dateien mit editierbarem Text ohne Photoshop und unter Linux; die zwingende Abhängigkeit von Krita bei der Erzeugung rasterisierter PSD-Dateien entfällt
* Sprechblasenerkennung in Erkennung mit benutzerdefinierten Modellen umbenannt
* Unterstützung für vollfunktionale benutzerdefinierte Modelle: Ein Modell übernimmt Textlokalisierung, Panel-Erkennung, Sprechblasenerkennung und Maskenerzeugung
* Benutzerdefinierte Modelle können das Lokalisierungsmodell von RapidOCR verwenden
* Das integrierte Modell japanese-lines verwendet jetzt ein für japanische Comics trainiertes PPOCR-Modell
* Das Panel-Erkennungsmodell für japanische Comics wurde entfernt
* Wenn beim Klicken auf die Erkennungsschaltfläche kein Bereich ausgewählt ist, wird ein Hinweis zur Vorgehensweise angezeigt
* Standardmäßig wird gefragt, welches benutzerdefinierte Erkennungsmodell verwendet werden soll (falls mehrere vorhanden sind)
* Vorlagen aktualisiert. Die Vorlage für japanische Comics verwendet standardmäßig die XYCut-Sortierung und einen erweiterten Pixelwert von 20 für die Textentfernung
* Der erweiterte Pixelwert für die Textentfernung gilt ebenso für die Maskenerzeugung
* Fehler behoben: Die XYCut-Sortierung konnte vorhandene Textbereiche löschen
* Fehler behoben: Ungenau beschriebene Menüeinträge
* Fehler behoben: Beim Bearbeiten der Maske eines Bereichs konnte die Maske des gesamten Bildes neu erzeugt werden, obwohl dies nicht nötig war

## v6.5.4 (2026/10/14)

* Menüeinträge zum Anpassen an Breite und Höhe hinzugefügt
* Standardmäßig wird die interne Magic-Code-Erkennung verwendet, um zu prüfen, ob eine Datei WebP ist
* PDF-Export unterstützt das Speichern im PDF/A-Format
* Neues Plugin zur Bildreparatur Resynth, portiert aus dem Resynthesizer von GIMP
* Fehler behoben: Das Zoomen mit dem Mausrad funktionierte unter Linux nicht

## v6.5.3 (2026/10/11)

* ChatGPT- und DeepSeek-Plugins aktualisiert
* Im API-Ausfüller wurde eine Zurücksetzen-Schaltfläche hinzugefügt
* Erkennungsmodell für Panels japanischer Comics hinzugefügt
* Vorlagen aktualisiert, um das Panel-Erkennungsmodell für japanische Comics zu verwenden
* Auslassungspunkte zu den standardmäßigen Zeichen ohne Abstand in vertikaler Schrift hinzugefügt
* Unter Linux wird zum Starten des Programms bevorzugt die Java-Datei unter `jre/bin/java` verwendet
* Fehler behoben: Der automatische Start von ImageTrans unter Linux schlug fehl
* Fehler behoben: Mögliches Problem beim Senden von Nachrichten per WebSocket an den Server (unter Linux konnten Nachrichten nicht erfolgreich gesendet werden)

## v6.5.2 (2026/10/03)

* Die WIA-Scan-Kommandozeile wurde mit .NET Framework statt .NET 8 geschrieben, sodass die zusätzliche Installation der .NET 8-Laufzeit entfällt
* OCR unter macOS verwendet standardmäßig die Livetext-Version der OCR, erkennt die Sprache automatisch und unterstützt vertikales Japanisch und Chinesisch
* Neues Projekt für benutzerdefinierte Pre-Rendering-Workflows
* Fehler behoben: Die Schriftgröße wurde nach der Berechnung unter Vermeidung der Trennung englischer Wörter falsch angezeigt

## v6.5.1 (2026/09/24)

* Unterstützung für das Aufrufen großer Modelle, um vorhandenen Bereichen anhand des gesamten Bildes Originaltext, Übersetzung, Farbe und Sortierung hinzuzufügen (umgesetzt über das ChatGPTOCR-Plugin mit der Operation „Text per OCR zu vorhandenen Bereichen hinzufügen“)
* Die Textlokalisierung der OCR mit großen Modellen wurde verbessert; zudem werden Übersetzung, Farbe und weitere Informationen hinzugefügt
* Der benutzerdefinierte Workflow zum Hinzufügen von Text zu vorhandenen Bereichen per OCR unterstützt das Speichern zusätzlicher Parameter
* Bei der Sortierung nach Panels werden auch Bereiche außerhalb der Panels sortiert
* Fehler behoben: Array-Überschreitung bei der XYCut-Sortierung

## v6.5.0 (2026/09/11)

* JRE auf [JRE26](https://download.bell-sw.com/java/26.0.2.1+1/bellsoft-jre26.0.2.1+1-windows-amd64-full.zip) aktualisiert
* Neue Einstellung für den JPEG-Export in hoher Wiedergabetreue
* Neuer benutzerdefinierter Workflow zur Erkennung der Textrichtung und zum Festlegen des Drehwinkels
* Es werden die Knoten der Textbereiche statt des Bildes gedreht
* Im Übersetzungsmodus wird beim Ausrichten ausgewählter Bereiche nur die Position der Übersetzungsbereiche angepasst
* Bei Steuerelementen für RTL-Sprachen wird NodeOrientation auf RIGHT_TO_LEFT gesetzt, statt nur die Rechtsausrichtung festzulegen
* Weitere Server-Downloadoptionen hinzugefügt
* Fehler behoben: Bei langsamen Netzwerkanfragen wurden fehlgeschlagene Dateien nach dem Abbrechen des Downloads nicht rechtzeitig gelöscht
* Fehler behoben: Beim Erstellen eines neuen Projekts wurde der Stil von TextArea nicht aktualisiert
* Fehler behoben: Reihenfolge beim Zusammenführen gemischter arabischer und nicht-arabischer Wörter
* Fehler behoben: Beim Setzen arabischer Texte wurde RTL nicht aktiviert
* Fehler behoben: Text in exportierten PDF-Dateien unterstützte keine Drehung
* Fehler behoben: Text in gedrehten Bereichen wurde nicht um die Mitte gedreht
* Fehler behoben: Größenanpassung gedrehter Bereiche
* Fehler behoben: Fehlermeldung beim Deaktivieren der vertikalen CJK-Schrift
* Fehler behoben: Verarbeitung reiner arabischer Ziffern durch rapidOCR
* Fehler behoben: Verarbeitung reiner arabischer Ziffern bei der Erzeugung arabischer PDF-Dateien

## v6.4.0 (2026/09/03)

* Die Auswahl der Standardschrift in den PDF-Exportoptionen wurde verbessert
* Die automatische Schriftsuche beim PDF-Export durchsucht nun auch den Schriftordner im Windows-Benutzerverzeichnis
* Der Zeilenabstand von Text in exportierten PDF-Dateien mit vertikalem Text wurde verbessert
* Wenn in den Projekteinstellungen kein Schriftschnitt festgelegt ist, wird beim Export chinesischer und japanischer PDF-Dateien die Textrichtung automatisch erkannt
* Benutzerdefinierte Workflows unterstützen die Messung der Verarbeitungszeit
* Alle Standardübersetzungsdienste wurden auf Baidu umgestellt
* Fehler behoben: Falsche Texthöhe in exportierten PDF-Dateien der chinesischen Übersetzung mit vertikalem Text
* Fehler behoben: RapidOCR kehrte arabische Ziffern fälschlicherweise um
* Fehler behoben: Arabische Ziffern wurden bei der Erzeugung arabischer PDF-Dateien fälschlicherweise umgekehrt

## v6.3.3 (2026/08/28)

* Neuer benutzerdefinierter Workflow zum Zusammenführen überlappender Bereiche
* Neue Sprachoption Portugiesisch (Brasilien)
* Die objektbasierte Panel-Erkennung unterstützt das Definieren der verwendeten Klassennamen in `model.json` (`class_names_to_use_for_panel`)
* Fehler behoben: Beim Erstellen eines neuen Projekts ohne Sprachauswahl trat eine Fehlermeldung auf
* Fehler behoben: Fehlermeldung beim Exportieren von PDF-Dateien mit vertikalem Text

## v6.3.2 (2026/08/21)

* Beim Öffnen des Textentferners wird die in den Projekteinstellungen festgelegte Entfernungsmethode geladen
* Wenn Maskenerzeugung für komplexe Hintergründe oder eine Bildreparaturmethode eingestellt ist, wird beim Öffnen des Maskeneditors oder Textentferners die Auswahl nach Bereichen verwendet
* Die Einstellung der Textform bei der Erkennung der Textrichtung wird nur ausgeführt, wenn die Zielsprache vertikale Schrift unterstützt
* Der Zertifikatsgenerator ruft die IP vorab ab und verwendet das cert-Verzeichnis der Software als Standardverzeichnis
* Fehler behoben: Der Zertifikatsgenerator verwendete die festgelegte IP nicht korrekt

## v6.3.1 (2026/08/13)

Fehler behoben: Beim Öffnen eines Projekts über die Kommandozeile wurden nachfolgende Operationen ausgeführt, ohne auf den Abschluss der UI-Anpassung und der OCR-Sprachauswahl zu warten

## v6.3.0 (2026/08/06)

* Das Installationspaket enthält standardmäßig das int8-quantisierte Lama Inpaint ONNX-Modell mit fester Größe von 512x512
* MIGAN Inpaint aus dem Installationspaket entfernt
* Das Bildsprachen-Klassifizierungsmodell wurde aus dem Installationspaket entfernt
* Die Nutzung von Lama Inpaint in der CG-Vorlage wurde verbessert
* Unterstützung für das RF-DETR-Modell
* Neuer benutzerdefinierter Workflow zum Entfernen nicht gedrehter Bereiche
* Neue Projekteinstellung: Wörter, die länger als der angegebene Wert sind, dürfen getrennt werden
* Der Download von Remote-Modellen unterstützt die SHA256-Prüfung
* RapidOCR lädt Modelle automatisch aus dem Netz herunter; beim Sprachwechsel wird kein Hinweis auf nicht installierte Modelle mehr angezeigt
* Das Installationspaket enthält standardmäßig die thailändischen und arabischen Wörterbücher von RapidOCR
* Beim Entfernen von Text nach Bereichen werden überlappende Bereiche zunächst zusammengeführt und dann entfernt, was die durch Überlappungen verursachte schlechte Textentfernung verbessert
* Bei der Erkennung des gesamten Bildes mit mangaOCR wird das rapid-Modell zur Erkennung langer Textstreifen verwendet, wenn kein mit48px-OCR-Modell vorhanden ist
* Fehler behoben: Die ROI-Prüfung, ob ein Bild komplex ist, war bei Maskenerzeugung und Textentfernung nicht identisch
* Fehler behoben: Die Vorübersetzung übersprang Bilder ohne Text

## v6.2.2 (2026/08/01)

* PPDocLayout v3 unterstützt die mac-mlx-Version
* Die Panel-Erkennung wird in globalen Variablen gespeichert, um häufiges Laden des Modells zu vermeiden
* Überflüssige Leerzeichen in der englischen Übersetzung der Objekterkennung entfernt
* Die Vorübersetzung überspringt Bilder ohne Text


## v6.2.1 (2026/07/28)

* `Character.UnicodeBlock.GENERAL_PUNCTUATION` (z. B. …) wurde aus den Bedingungen zur Erkennung chinesischer Zeichen entfernt
* Der maximale Differenzwert der vertikalen Koordinate in den Vorlagen wurde auf 2000 aktualisiert
* Fehler behoben: Beim Hochladen von Fehlermeldungen an den Server wurde der Name nicht übertragen
* Fehler behoben: Der Server setzte den Ausführungsstatus möglicherweise auf false, bevor die übersetzten Bilder hochgeladen waren

## v6.2.0 (2026/07/26)

* Neue allgemeine Servervorlage
* Beim Erstellen eines Projekts auf Basis der allgemeinen Sprachpaarvorlage wird die passende OCR automatisch ausgewählt
* Neuer benutzerdefinierter Workflow zur Erkennung von Zellen in der Tabellenklassifizierung
* Die gesamte Logik zur Bestimmung, zu welchem Panel ein Textbereich gehört, wurde neu geschrieben
* Die Bestimmung komplexer Hintergründe in Bildern wurde mithilfe von Textmasken verbessert
* Der Standardmodellname von DeepSeek wurde in deepseek-v4-flash geändert
* Workflows für Panel-Erkennung und Übersetzung unterstützen die Definition von Parametern für jeden Eintrag
* Die Erkennung invertierter Bereiche bei der Maskenerzeugung wurde verbessert
* Der Server unterstützt das Festlegen eines Kennworts für entfernte Server (ws_secret)
* Der Server unterstützt das Laden sprachspezifischer Projekteinstellungen (src.json)
* Die automatische Bildbereinigung des Servers umfasst nun auch Miniaturansichten
* Fehler behoben: Versionskonflikt von onnxruntime in oneocr

## v6.1.0 (2026/07/24)

* Neue Barcode-Scanfunktion auf Basis von ZXingCPP
* Neuer Hintergrundmodus: Der Server kann im Hintergrund ausgeführt werden, ohne dass während der Übersetzung ein Fenster angezeigt wird
* Die Zeitüberschreitung beim Ausführen von Workflows im Stapelmodus wurde auf 10 Minuten festgelegt
* Der Server unterstützt das Laden sprachspezifischer benutzerdefinierter Workflow-Vorlagen (custom_workflow_src-tgt.json)
* Fehler behoben: Der benutzerdefinierte Server-Workflow verwendete direkt ein zuvor exportiertes Bild mit demselben Namen
* Fehler behoben: Vom Server geladene Bilder konnten ungültig sein

## v6.0.3 (2026/07/16)

* Neue Tabellenerkennung
* Beim Zusammenführen von Bereichen innerhalb eines Panels werden Bereiche in Tabellen nicht zusammengeführt

## v6.0.2 (2026/07/11)

* In der Panelliste wurde ein Kontextmenü zum Bearbeiten der Kategorie hinzugefügt
* Weitere Markdown-Exportoptionen
* Export nach Markdown zu benutzerdefinierten Workflows hinzugefügt
* In den Projekteinstellungen können Markdown-Exporteinstellungen vorgegeben werden
* Beim Öffnen eines Projekts über die Kommandozeile zur Ausführung benutzerdefinierter Workflows werden preferences.conf, settings.json und setOCRBasedOnLang aus dem Projekt gelesen, konsistent mit dem Modus zur Projekterstellung über Vorlagen
* Unter macOS wird die Endung .itp aus dem anfänglichen Dateinamen entfernt, um Duplikate zu vermeiden
* Der Ordner für Zwischenergebnisse in den Vorlagen wurde in `intermediateResults` geändert
* Unterstützung für [ImageTrans-skills](https://github.com/xulihang/ImageTrans-skills), aufrufbar über Agenten wie Xiaolongxia und Claude
* Fehler behoben: Beim PDF-Export über die Kommandozeile wurde ein Abschlussdialog angezeigt

## v6.0.1 (2026/07/07)

* Die Behandlung von Satzzeichen ohne Zeilenanfang/-ende (Kinsoku) in der vertikalen Engine wurde verbessert
* Bei der Serversteuerung über die Kommandozeile wird der Parameter server nun auf Gleichheit statt auf Enthaltensein geprüft
* Beim Extrahieren von Bildern aus PDF-Dateien werden TIFF-Dateien in JPG umgewandelt
* Projekteinstellung für die Sprechblasenerkennung zum Zusammenführen überlappender Bereiche hinzugefügt
* Beim Zusammenführen überlappender Sprechblasenbereiche wird geprüft, ob sie derselben Kategorie angehören
* Unterstützung für PPDocLayout v3 hinzugefügt
* Fehler behoben: Nach der Auswahl eines Sprechblasenerkennungsmodells wurde eine Instanz desselben Modells erneut initialisiert
* Fehler behoben: Speicherleck in PPDocLayout
* Fehler behoben: Die Breitenberechnung der vertikalen Engine berücksichtigte die Kontur nicht
* Fehler behoben: Falscher Konturradius bei gedrehten vertikalen Textbereichen
* Fehler behoben: Falscher Fortschrittsbereich beim Importieren eines Seitenbereichs aus PDF-Dateien

## v6.0.0 (2026/07/03)

* Für horizontalen Text wird die präzise Schriftgrößenberechnung verwendet
* API-Einstellungen können in den Projekteinstellungen angepasst werden
* Fehler behoben: Automatische Schriftgröße bei gedrehten vertikalen Textbereichen

## v5.24.0 (2026/06/30)

* Drehwinkel unter 0,01 werden nicht gespeichert
* Neue Projekteinstellung der vertikalen Engine: Satzzeichen nicht am Zeilenanfang (Kinsoku)
* Neue Projekte für benutzerdefinierte Workflows zum Erweitern und Verkleinern von Übersetzungsbereichen
* Im Layoutmodus ändern die Operationen zum Erweitern und Verkleinern von Bereichen die Position der Übersetzung
* Die Effizienz der automatischen Textgrößenberechnung der vertikalen Engine wurde verbessert
* Fehler behoben: Schwingungen bei der automatischen Textgrößenberechnung der vertikalen Engine
* Fehler behoben: Verarbeitung mehrzeiligen Texts durch die automatische Textgröße der vertikalen Engine bei deaktiviertem automatischem Zeilenumbruch

## v5.23.0 (2026/06/29)

* Neues OCR-Plugin: oneocr (OCR für Screenshots unter Windows 11)
* Die OCR führt die Bildaufteilung vor der Skalierung aus
* Fehler behoben: Die vertikale Zentrierung der vertikalen Text-Engine funktionierte nicht
* Fehler behoben: Falsche Koordinaten bei der Erkennung schmaler Webtoons

## v5.22.1 (2026/06/23)

* Beim Aufruf über die Kommandozeile können bereits eingegebene Kontoinformationen zur Authentifizierung verwendet werden
* Bilder können als Kontext für die Übersetzung dienen (erfordert ein visuelles großes Sprachmodell)
* Der Text der vorherigen Seiten kann als Kontext für die Übersetzung dienen

## v5.22.0 (2026/06/18)

* Neue OCR-Projekteinstellung für die Mindestbreite: Bilder, die schmaler sind, werden auf diese Breite vergrößert
* Fehler behoben: Nach einem fehlgeschlagenen Download löschte der Server die fehlerhafte Datei nicht
* Fehler behoben: Bei fehlgeschlagenem Serverstart wurde dennoch Erfolg gemeldet

## v5.21.3 (2026/06/16)

Rapid OCR auf PPOCRv6 aktualisiert

## v5.21.2 (2026/06/10)

* Die Darstellung von Hanyu Pinyin in exportiertem HTML wurde verbessert
* Der Server unterstützt selbstsignierte Zertifikate

## v5.21.1 (2026/06/04)

* Unterstützung für das Festlegen der Rahmengröße des aktiven Textfelds
* Unterstützung für den Import von TIFF
* Panels unterstützen das Speichern von Text
* Benutzerdefinierter Workflow zum Erstellen von Bereichen mithilfe von Panels hinzugefügt
* Die Einheitlichkeit der automatischen Ausrichtungskorrektur der vertikalen Text-Engine bei unterschiedlichen Schriftgrößen wurde verbessert
* Fehler behoben: Mögliches Kodierungsproblem beim Lesen des Wörterbuchs durch mit48px OCR

## v5.21.0 (2026/05/30)

* Neue Einstellung zum Merken der Größe des Maskeneditorfensters
* Die Einheitlichkeit der automatischen Ausrichtungskorrektur der vertikalen Text-Engine bei unterschiedlichen Schriftgrößen wurde verbessert
* Für Sprechblasenerkennungsmodelle kann eine panel-spezifische Klasse angegeben werden
* Fehler behoben: Nach dem Start des Servers über die Kommandozeile konnte kein separater Prozess zur Verarbeitung gestartet werden

## v5.20.0 (2026/05/23)

* Vertikale Text-Engine:
   * Zentrierung der Zeichen korrigiert
   * Japanische Sokuon-Zeichen zu den rechtsbündigen Zeichen hinzugefügt
* Server:
   * Bilder werden während der Übersetzung nicht bereinigt
   * Einstellungen für den zeitgesteuerten Neustart und die Verwendung eines separaten Prozesses hinzugefügt
   * Servereinstellungen werden gespeichert
   * Unterstützung für das direkte Öffnen von ImageTrans über die Kommandozeile und Verbinden mit dem Server
* Maskeneditor und Textentferner:
   * Bei der Methodenauswahl wird geprüft, ob das Plugin installiert ist oder läuft
   * Die Auswahl nach Bereichen wurde der Liste der Verarbeitungsmethoden hinzugefügt; standardmäßig erfolgt keine automatische Auswahl anhand eines komplexen Hintergrunds
* Benutzerdefinierte Workflows können mehrere Prozesse parallel ausführen, um die Verarbeitungsgeschwindigkeit zu verbessern
* Fehler behoben: Die Verarbeitung von Dateien über Vorlagen per Kommandozeile unterstützte keine einzelnen Bilder
* Fehler behoben: Der automatische Start unter macOS schlug fehl


## v5.19.1 (2026/05/16)

* DeepSeek- und ChatGPT-Plugins aktualisiert, um zusätzliche Felder festlegen zu können
* DeepSeek aktiviert das Denken standardmäßig nicht
* Einstellung zum Anzeigen der Nummer des Schriftschnitts hinzugefügt [#issue1066](https://github.com/xulihang/ImageTrans-docs/issues/1066)

## v5.19.0 (2026/05/09)

* Unterstützung für das Festlegen horizontaler und vertikaler Versätze für Zeichen der vertikalen Text-Engine [#issue1063](https://github.com/xulihang/ImageTrans-docs/issues/1063)
* Der Vorlagenmodus der Kommandozeile unterstützt die Übergabe zusätzlicher Projekt- und Anwendungseinstellungen
* Der Aufruf über die Kommandozeile wurde verbessert
* Fehler behoben: Beim Erstellen einer Kopie wurde keine tiefe Kopie verwendet
* Fehler behoben: Der Bildauszugsmodus konnte keine PNG-Bilder aus PDF-Dateien extrahieren
* Fehler behoben: Bei aktiviertem Layoutmodus konnte der Export der Übersetzung die Koordinaten der Textbereiche verändern [#issue839](https://github.com/xulihang/ImageTrans-docs/issues/839)

## v5.18.0 (2026/04/19)

* Translation Memory:
   * Neue Projekteinstellung für Translation Memory
   * Unterstützung für die Einstellung, ob Projekttext verwendet wird
   * Unterstützung für den Import und die Verwendung externer Translation Memories (auf SQLite-Basis)
* Bildschirmleser:
   * Unterstützung für Translation Memory
   * Fehler behoben: Die Anmerkungsfunktion wurde auch bei deaktivierter Anmerkung aufgerufen
* Unterstützung für den Aufruf von OCR-Plugins zur parallelen Erkennung hinzugefügt
* Extraktor für harte Untertitel:
   * Unterstützung für Sprechblasenerkennung
   * Die parallele Erkennung mit OCR-Plugins wurde verbessert
   * Bei den Bedingungen der Keyframe-Erkennung wurde ein linker Offset hinzugefügt
   * Operation zum Vereinheitlichen der Textbereiche von Bildern mit ähnlichem Text bei der Keyframe-Erkennung hinzugefügt
* Neue Projekteinstellung für die Sprechblasenerkennung: Bild erweitern
* Weitere Verbesserungen

## v5.17.0 (2026/04/11)

* Bildschirmleser:
   * Layout angepasst
   * Unterstützung für die Anzeige von Anmerkungen (Ruby)
   * Unterstützung für Vorlesen
   * Unterstützung für benutzerdefinierte Workflows
   * Die automatische Erkennung wartet, bis das Bild stabil ist, bevor ein Screenshot erstellt wird
   * Wenn nur eine maschinelle Übersetzung aktiviert ist, wird der Name der Engine nicht angezeigt
   * Fehler behoben: Mehrere Probleme beim Speichern von Ergebnissen im Projekt
* Beim Öffnen des Vorlesers werden frühere Einstellungen geladen
* Maschinelle Übersetzung unterstützt seitenübergreifende Übersetzung [#issue1055](https://github.com/xulihang/ImageTrans-docs/issues/1055)
* Die Einstellungen der maschinellen Übersetzung wurden angepasst

## v5.16.0 (2026/03/22)

* Funktion zum Annotieren von Hanyu Pinyin und japanischen Kana hinzugefügt
* Neues Exportformat: einzelne HTML-Datei
* Operation zum Erzeugen einer PDF-Datei ohne Text hinzugefügt
* Einstellung dafür hinzugefügt, welcher Text in der Textfeldliste angezeigt wird [#1052](https://github.com/xulihang/ImageTrans-docs/issues/1053)
* Der Bildmanager unterstützt das Hinzufügen neu in einen Ordner aufgenommener Bilder [#1053](https://github.com/xulihang/ImageTrans-docs/issues/1053)
* mit48px_ctc-OCR mit Lokalisierungsversion hinzugefügt
* mangaOCR verarbeitet standardmäßig Graustufenbilder, um die Erkennungsrate farbiger Texte zu verbessern
* Fehler behoben: Bei vorhandenen Panels schlug die Neuerzeugung von Panels mittels Textclustering fehl



## v5.15.1 (2026/03/17)

* Die Unterstützung negativer Zeichenabstände in der vertikalen Text-Engine wurde verbessert
* Unterstützung für die Erkennung von Konturfarben hinzugefügt
* Das vielseitige Größensteuerelement des Rich-Text-Editors unterstützt negative Werte
* Fehler behoben: Übersetzungs-Textfelder verschoben sich beim Zoomen
* Fehler behoben: Im Layoutmodus wurden Ergebnisse im Bild bei der Eingabe maschineller Übersetzungen über Schnellübersetzung und unterstützte Übersetzung nicht in Echtzeit aktualisiert

## v5.15.0 (2026/03/14)

* Neuer Miniaturansichten-Betrachter
* Neuer Bildnavigator
* Neuer Bildmanager (über das Kontextmenü in der Bildliste aufrufbar)
* Unterstützung für das Ändern der Bildreihenfolge
* Bei importierten PDF-Bildern wird das Komma in der Nummerierung aus dem Namen entfernt
* Die Geschwindigkeit beim Wechseln von Bildern wurde verbessert
* Bei der Übersetzung mehrerer Sätze werden Bilder ohne Text übersprungen
* Fehler behoben: Der Manager für übersetzte Bilder konnte keine Bilder filtern, deren Übersetzung bereits exportiert wurde [#issue1044](https://github.com/xulihang/ImageTrans-docs/issues/1044)

## v5.14.0 (2026/03/06)

* PDF-Import:
   * Unterstützung für die Auswahl eines Seitenbereichs
   * Wenn beim PDF-Import im Bildauszugsmodus eine Seite ohne Bilder vorkommt, wird der Rendering-Modus verwendet
* PDF-Export:
   * Unterstützung für das Auffinden der passenden Schriftdatei anhand des Schriftnamens
   * Unterstützung für die Auswahl von TTC-Schriften
   * Unter macOS wird als Standardschrift Arial Unicode verwendet
   * Wenn vertikaler Text angezeigt wird, werden Satzzeichen wie Klammern durch Zeichen für vertikale Schrift und Halbbreitenzeichen durch Vollbreitenzeichen ersetzt
   * Die Darstellung vertikalen Texts wurde verbessert
* Die Zeitüberschreitung des ChatGPTOCR-Plugins wurde erhöht
* OllamaOCR-Plugin hinzugefügt
* Den Namen von eSCL-Scannern wird das Suffix eSCL hinzugefügt
* Die schlechte automatische Größenanpassung vertikalen Texts bei deaktiviertem automatischem Zeilenumbruch wurde korrigiert

## v5.13.0 (2026/02/23)

* Dokumentenscan:
   * Unter Windows wird die Verwendung von TWAIN unterstützt
   * Unterstützung für das Scannen von Filmen, Dias und anderen Dokumenten mit Durchlichtscannern
   * Bei Verwendung von WIA ohne lokal installiertes .NET 8 wird eine Fehlermeldung angezeigt
* Beim Schließen eines Projekts werden geöffnete Bilder freigegeben
* Der Zuschneidevorgang unterstützt das Speichern des Bildes als neues Bild
* Neue Bildbearbeitungsvorgänge: Invertieren, Entfernen des Filmfarbstichs

## v5.12.0 (2026/02/14)

* Dokumentenscan:
   * WIA, ICA und SANE unterstützen Dokumenteneinzug, Mehrseiten- und Duplexscan
   * WIA, ICA und SANE unterstützen das Abbrechen von Scanaufträgen
   * SANE unterstützt die Echtzeitvorschau des Scanergebnisses eines einzelnen Bildes
   * Unter macOS wird das Scannen über SANE unterstützt
   * Unterstützung für das Festlegen des Scanbereichs
   * WIA wird über die moderne Windows Runtime API aufgerufen
   * Schwarzweißbilder werden als 1-Bit-PNG gespeichert, um Speicherplatz zu sparen
   * Beim Schließen des Dokumentenscanfensters werden temporäre Scandateien automatisch gelöscht
   * Neue Schaltfläche zum Löschen von Bildern
   * Fehler behoben: Fehler beim Speichern von Dateien beim fortlaufenden Mehrseitenscan mit eSCL
* Entfernungsmessfunktion hinzugefügt
* Kontextmenü für die Bildbearbeitung hinzugefügt
* Unterstützung für Schriftgrößen mit Dezimalstellen; der standardmäßige Schritt zur Schriftanpassung wurde auf 0,5 geändert [#issue1038](https://github.com/xulihang/ImageTrans-docs/issues/1038)
* Die Schriftgröße in der Symbolleiste kann mit dem Mausrad angepasst werden [#issue1038](https://github.com/xulihang/ImageTrans-docs/issues/1038)
* Bei der Benennung eingefügter Bilder wird das Tausendertrennzeichen-Komma entfernt
* Je nach Pfad des eingefügten Bildes kann gewählt werden, ob PNG oder JPG verwendet wird
* Fehler behoben: Beim Verwenden eines entfernten Servers war die URL zum Senden von Fehlermeldungen falsch


## v5.11.1 (2026/02/07)

* Der Dokumentenscan unterstützt das Scannen mehrerer Seiten
* Der Dokumentenscan unterstützt den Dokumenteneinzug (nur eSCL)
* Fehler behoben: Die Einstellung des Farbmodus beim eSCL-Scan war unwirksam
* Für künstliche Kursivschrift wird eine affine statt einer perspektivischen Transformation verwendet, um falsche Breiten- und Höhenwerte bei gleichzeitiger Verwendung mit künstlichem Fettdruck zu beheben
* Unterstützung für das Platzieren einer Datei server-mode im Stammverzeichnis, um Fehlerdialoge bei der Verwendung des Servers zu vermeiden

## v5.11.0 (2026/01/31)

* Der Dokumentenscan unterstützt den Aufruf der System-Scanschnittstellen (WIA, ICA, SANE)
* Der Dokumentenscan speichert die zuvor gefundene Scannerliste
* PDF unterstützt die Anzeige in hoher Auflösung
* In der Dokumentenvorlage wurden die Einstellungen zum Entfernen von Text nach Bereichen und zur Farberkennung bei der Panel-Erkennung deaktiviert
* Beim Zoomen von Bildern wird für das Laden von Kacheln eine Entprellung verwendet
* Beim TXT-Export kann gewählt werden, ob nur der Originaltext oder Originaltext plus Übersetzung exportiert wird
* Der TXT-Import unterstützt den Import reiner Übersetzungen
* Fehler behoben: Nach dem Drehen eines Bildes wurde das Bild nicht korrekt aktualisiert


## v5.10.1 (2026/01/25)

* Neue Dokumentenscanfunktion (auf eSCL-Basis)
* Neue Funktion zum Anzeigen von Bildinformationen
* Papago-Übersetzungs-Plugin aktualisiert
* Fehler behoben: Im vertikalen Bearbeitungsmodus wurde die Option zur Einstellung der Rich-Text-Größe nicht angezeigt [#issue1032](https://github.com/xulihang/ImageTrans-docs/issues/1032)

## v5.10.0 (2026/01/17)

* Unterstützung für YOLO 26 hinzugefügt [#issue1026](https://github.com/xulihang/ImageTrans-docs/issues/1026)
* Unterstützung für das Anpassen horizontaler und vertikaler Versätze bei horizontalem Text hinzugefügt [#issue826](https://github.com/xulihang/ImageTrans-docs/issues/826)
* Unterstützung für das Anpassen des Zeichenabstands bei horizontalem Text hinzugefügt
* Unterstützung für das Anpassen des Zeichenabstands bei Rich-Text hinzugefügt
* Der standardmäßige Zeichenabstand wurde auf 0 geändert und wird unter dem Namen tracking gespeichert
* Der Rich-Text-Editor unterstützt das Festlegen von Zeichenabstand, horizontalem und vertikalem Versatz
* Fehler behoben: Nach dem Festlegen von Formatierungen im Rich-Text-Editor wurde das Rendering-Ergebnis nicht aktualisiert
* Fehler behoben: Benutzerdefinierte Workflows konnten beim Zusammenführen von Bereichen hängen bleiben [#issue1029](https://github.com/xulihang/ImageTrans-docs/issues/1029)
* Fehler behoben: Das Zoomen mit Tastenkürzeln funktionierte nicht

## v5.9.0 (2026/01/13)

* Die vertikale Engine unterstützt zentrierte und unten ausgerichtete Ausrichtung
* Farberkennung auf Zeichenebene hinzugefügt
* Unterstützung für das Festlegen von Rich-Text-Stilen für den Originaltext
* Einstellung für horizontale Zentrierung hinzugefügt
* Der standardmäßige maximale Differenzwert der vertikalen Koordinate wurde auf 2000 geändert

## v5.8.3 (2026/01/05)

* Die Behandlung fälschlich erkannter Winkel beim Drehen von Bildern anhand der Rotationsinformationen von Textbereichen wurde verbessert
* Die Unterstützung des Alpha-Kanals beim Drehen von Bildern anhand der Rotationsinformationen von Textbereichen wurde verbessert
* Die Behandlung überlappender und außerhalb des Bildes liegender Bereiche bei der Sprechblasenerkennung wurde verbessert
* Die Toleranz bei der Anwendung von OCR-Masken wurde erhöht
* Unterstützung für den Import von Lesezeichen aus dem Chaoxing Reader
* Fehler behoben: Beim Leeren von Bildern trat eine Fehlermeldung auf

## v5.8.2 (2026/01/03)

* Rotationsinformationen von Textbereichen werden mit doppelter Genauigkeit gespeichert
* Operationen zum Drehen von Bildern anhand der Rotationsinformationen von Textbereichen hinzugefügt
* Operationen zur Superauflösung hinzugefügt
* Die Anpassungsgenauigkeit beim Drehen von Bildern um beliebige Winkel wurde auf 0,1 geändert
* Unterstützung für den Import von Dateien im PDZ-Format über den Chaoxing Reader
* Der PDF-Export unterstützt weitere Einstellungen für Bildverarbeitungsparameter
* Semikolon und Doppelpunkt zur Liste der Zeichen hinzugefügt, die in chinesische Satzzeichen umgewandelt werden
* Fehler behoben: Nach der Bildbearbeitung wurden OCR und andere Operationen weiterhin mit dem vorherigen Bild ausgeführt


## v5.8.1 (2025/12/30)

* Bilder, die als Kacheln angezeigt werden, werden freigegeben, wenn sie nicht angezeigt werden
* Das Laden von Bildern als Kacheln unterstützt nun BMP

## v5.8.0 (2025/12/28)

* Die Anzeige sehr großer Bilder wurde mithilfe von Kacheln optimiert [#issue739](https://github.com/xulihang/ImageTrans-docs/issues/739)
* Für sehr große Bilder werden Miniaturansichten erzeugt, um das Laden zu beschleunigen
* Der Maskeneditor unterstützt das Umschalten des Bearbeitungsmodus mit der mittleren Maustaste [#issue1022](https://github.com/xulihang/ImageTrans-docs/issues/1022)
* Fehler behoben: Nach dem Aufnehmen einer Farbe aus dem Bild blieben Textfelder weiterhin ausgeblendet

## v5.7.0 (2025/12/21)

* Neues Objekterkennungsmodell: das Layoutanalysemodell [DocLayout](https://github.com/xulihang/PP_DocLayout_ONNX) von Paddle
* Neuer Sortieralgorithmus: XYCut
* Panels unterstützen das Speichern von Kategorien
* Neue Einstellungen und Workflows für Diagramm-Panels
* Neues Exportformat: Markdown
* Neue Vorlage: Dokument
* DeepSeek-OCR-Plugin aktualisiert, um das Speichern von Kategorien zu unterstützen
* Unterstützung für die Erzeugung von Bildern ohne Text im nicht präzisen Modus
* Die Objekterkennung unterstützt das direkte Filtern von Ergebnissen nach Klassennamen
* Die Behandlung von Zeilenumbrüchen horizontaler Übersetzungen beim PDF-Export wurde verbessert

## v5.6.1 (2025/12/16)

* Mithilfe von OCR wird unterschieden, ob die Sprache in einem Bild Chinesisch oder Japanisch ist
* Das Zoomen um den Mauszeiger wurde verbessert
* Die Zoomleistung wurde verbessert
* Fehler behoben: Die Standardvorlage zur OCR-Konfiguration nach Sprache berücksichtigte keine lateinischen Sprachen


## v5.6.0 (2025/12/14)

* Unterstützung für ONNXRuntime als Engine der Objekterkennung
* Neue Hot-Folder-Funktion
* Neue Funktionen zur Erkennung der Sprache in Bildern und in Texten
* RapidOCR unterstützt die automatische Erkennung der Sprache in Bildern
* Neue Workflows: PDF exportieren, Sprache im Bild erkennen und OCR festlegen, anhand des Textes die Projektausgangssprache erkennen und festlegen
* Unterstützung für voreingestellte PDF-Import- und -Exporteinstellungen sowie PSD-Exporteinstellungen
* Unterstützung für die Verarbeitung von PDF-Dateien und anderen Dateien über die Kommandozeile
* Projekteinstellung zum Zusammenführen anhand von Panels hinzugefügt
* Projekteinstellung zum Einbeziehen von Alpha-Kanal-Informationen bei der Bildreparatur hinzugefügt
* Projekteinstellungen für die Maskenerzeugungs- und Bildreparaturmethode bei Bildern mit komplexem Hintergrund hinzugefügt
* Fehler behoben: Das Hinzufügen von Bildern aus einem Projektordner per Drag-and-Drop schlug fehl
* Fehler behoben: Das Kopieren von Text schlug fehl, wenn „Zeilenumbrüche entfernen“ nicht aktiviert war
* Fehler behoben: Der Server löschte unter anderem benutzerdefinierte Workflow-Konfigurationen



## v5.5.1 (2025/12/07)

* Beim PDF-Import im Bildauszugsmodus werden die Originaldaten aus der PDF-Datei direkt gespeichert
* Fehler behoben: Beim Importieren einer PDF-Datei wurde der Vorgang nach dem Klicken auf Abbrechen nicht beendet


## v5.5.0 (2025/12/06)

* Neue Bildreparatur-Plugins: OpenAI und Gemini, mit Unterstützung für das Neuzeichnen von Bildern über Gemini 3 Pro Image (Nano Banana)
* Neues OCR-Plugin: DeepSeek-OCR
* Neuer Workflow-Ablauf: Bereiche außerhalb der Panels entfernen
* Bereiche, die nicht im selben Panel liegen, werden nicht zusammengeführt
* Unterstützung für den Aufruf von OCR-Plugins zur Layoutanalyse (über die Panel-Erkennung)
* Der PDF-Export unterstützt die Bildkomprimierung
* Unterstützung für das Hinzufügen von Dateien zum Projekt per Drag-and-Drop

## v5.4.0 (2025/11/29)

* Neue Projekteinstellung: Bei Bereichen mit komplexem Hintergrund werden keine Trennungen erkannt
* Neue Operationen zur Rechtschreibprüfung mit dem ChatGPT-Großmodell-Plugin
* Neues Maschinenübersetzungs-Plugin: die integrierte Übersetzung von macOS
* LamaInpaint unter macOS unterstützt den Aufruf von CoreML-Modellen
* mangaOCR verwendet standardmäßig die Sprechblasenerkennung zur Bereitstellung von Lokalisierungsinformationen
* RapidOCR unterstützt nun die Erkennung auf Wortebene
* Das Zuschneiden von Bildern unterstützt perspektivische Transformationen auf Basis von Masken
* Die API-Einstellungen unterstützen das Löschen per Rechtsklick
* Fehler behoben: Zusammenführung aufeinanderfolgender nicht-arabischer Wörter in arabischem Text
* Fehler behoben: Beim Export arabischer PDF-Dateien wurden aufeinanderfolgende nicht-arabische Wörter nicht als Ganzes umgekehrt


## v5.3.0 (2025/11/20)

* Zur Bildbearbeitung wurden Zuschneiden und Drehen um beliebige Winkel hinzugefügt
* Französisch und Vietnamesisch zur Sprachliste von RapidOCR hinzugefügt
* Menüeintrag zum Umkehren von Text hinzugefügt
* RapidOCR verwendet das arabische Modell der Version v5
* In Suchen und Ersetzen wurde ein Menüeintrag zum Filtern von Bildern hinzugefügt
* Der Manager für übersetzte Bilder unterstützt die Umkehrauswahl
* Beim Erzeugen von PDF-Dateien werden Richtungssteuerzeichen aus dem Text entfernt
* Das Entfernen von Bereichen mit geringer Konfidenz wurde zu benutzerdefinierten Workflows hinzugefügt
* Fehler behoben: Nach dem Wechseln des Bildes änderte sich das aktuelle Bild in Suchen und Ersetzen nicht
* Fehler behoben: Falsche Einstellung des Parameters für das Zwischenergebnisverzeichnis bei der PSD-Erzeugung
* Fehler behoben: Die Textebene exportierter PDF-Dateien konnte über die Dokumentgrenzen hinausragen
* Fehler behoben: Die PDF-Erzeugung meldete keine Fehler
* Fehler behoben: Bei der Erzeugung arabischer PDF-Dateien wurden nicht-arabische Zeichen umgekehrt

## v5.2.0 (2025/11/15)

* Das Photoshop-Skript für AutoIt v3 wurde entfernt und durch den direkten Aufruf von JavaScript-Dateien ersetzt
* Unter macOS wird Photoshop über Shell + AppleScript aktiviert
* Der Server unterstützt die Übergabe von Workflows, APIs, Projekteinstellungen und Vorlagennamen
* Der standardmäßige erweiterte Pixelwert für die Bildreparatur wurde von 20 auf 5 geändert
* Wenn die Maske das gesamte Bild abdeckt, werden einige Pixel am Rand aus dem Maskeninhalt entfernt
* Wenn der Server die OCR anhand der Sprache auswählt, wird anhand der Sprache auch festgelegt, ob die Option für die Leserichtung von rechts nach links deaktiviert wird
* Einstellungen für die maximale Breite der Bildreparatur und die Überlappungsrate des Schiebefensters hinzugefügt
* Masken werden standardmäßig nicht weichgezeichnet
* Wenn in den Projekteinstellungen eine Deep-Learning-Bildreparaturmethode wie MIGAN oder Lama ausgewählt ist, wird die Option „Nach Textbereichen arbeiten“ nicht mehr deaktiviert
* PSD-Dateien werden mit Krita in JPG umgewandelt
* Veraltete PSD-Operationen entfernt
* Die Erzeugung bearbeitbarer PSD-Dateien unterstützt Operationen für das aktuelle Bild
* Fehler behoben: Pfadproblem beim Hinzufügen von Bildern ohne Text durch das PS-Skript

## v5.1.1 (2025/11/12)

* Das Bild im Textentferner kann verschoben werden
* Rückfüllung von Bildern ohne Text auf Basis von Masken
* Projekteinstellung zum Weichzeichnen der Maske beim Rückfüllen von Bildern ohne Text hinzugefügt
* Bei der Maskenerzeugung werden nur Konturen ohne äußere Kontur entfernt, statt nur die zahlenmäßig häufigste Kontur beizubehalten
* Weitere Fehlerkorrekturen

## v5.1.0 (2025/11/08)

* Der Maskeneditor bietet nun Optionen zum Dilatieren oder Erodieren der Maske ausgewählter Bereiche; zudem wurde die standardmäßige Auswahl des Operationsmodus geändert
* Neues Ausgabeformat: rasterisierte PSD (erfordert Krita)
* Der Export im ORA-Format wurde neu strukturiert
* Bei neuen Projekten werden Masken und Bilder ohne Text standardmäßig im Verzeichnis `intermediateResults` gespeichert
* Der Ausgabepfad wurde so geändert, dass das Ausgabeverzeichnis das Stammverzeichnis bildet
* Neuer Maskengenerator SegmentAnything, besonders geeignet für Text auf komplexen Hintergründen
* Neue benutzerdefinierte Workflows zum Wiederherstellen des UI-Zustands, Erzeugen von Maskenbildern und Erzeugen von Bildern ohne Text
* Menüeinträge zum Erzeugen der Maske oder des Bildes ohne Text für das aktuelle Bild hinzugefügt
* Unterstützung für die Ausgabe verlustfreier WebP-Dateien
* Der Speicherverbrauch von OCR und Sprechblasenerkennung bei langen Bildern wurde optimiert
* Durch Schließen des Fortschrittsdialogs können OCR und Sprechblasenerkennung für ein einzelnes Bild abgebrochen werden
* Je nach Dateiendung wird gewählt, ob für die Bildreparatur mit externen Methoden das Zwischenformat JPG oder PNG verwendet wird
* Wenn in den Projekteinstellungen eine Deep-Learning-Bildreparaturmethode wie MIGAN oder Lama ausgewählt wird, wird die Option „Nach Textbereichen arbeiten“ deaktiviert
* Fehler behoben: Bei überlappenden Textfeldern hoben sich die Masken bei der Erzeugung gegenseitig auf
* Fehler behoben: Beim Übersetzen über den Server wurde der Übersetzungsmodus zu früh geöffnet
* Fehler behoben: Die Panel-Erkennung unterstützte keine Bilder mit mehr als 65500 Pixeln
* Fehler behoben: Beim Bearbeiten der Maske eines einzelnen Bereichs wurden die Koordinaten der Textbereiche nach der Erweiterung des Bereichs nicht aktualisiert

## v5.0.0 (2025/11/01)

* Der Maskenerzeugungsmodus umfasst nun die Sprechblasenerkennung
* Bei der Maskenerzeugung mit Sprechblasenerkennung und OCR wird standardmäßig nur das gesamte Bild verarbeitet
* Die Einstellungen für Masken- und Bildreparaturmethoden werden nun unter Namen gespeichert
* Die Bildreparatur ersetzt nur das Bild an den Positionen der Textfelder
* Neue Bildreparaturmethode MIGAN
* Die Bildreparatur unterstützt ein Schiebefenster, um große Bilder zu verarbeiten oder Details zu erhalten
* Die Textentfernung in der CG-Vorlage wurde verbessert
* Beim Bearbeiten des Bildes ohne Text eines Bereichs werden die Pixel gemäß den Projekteinstellungen erweitert
* Der Textentferner unterstützt Rückgängig, das Arbeiten nach Bereichen und die Reparatur auf Basis des aktuellen Bildes
* Die Prozentsteuerelemente von Textentferner und Maskeneditor lassen sich mit dem Mausrad bedienen
* Die Dilatation der Maske erfolgt nun für das gesamte Bild statt für einzelne Textbereiche
* Die Geschwindigkeit von Textentfernung und Maskenerzeugung wurde verbessert
* Das Lama-Plugin wurde aktualisiert, um Eingabebilder mit dynamischer Größe zu unterstützen; zudem wurde eine Einstellung für die maximale Größe hinzugefügt
* Die Prompts von Sakura wurden aktualisiert, um eine Verkettung zu vermeiden
* ChatGPT verwendet vereinfachte Prompts für die Stapelübersetzung
* Neue Einstellung: Ob maschinelle Übersetzungsergebnisse gespeichert werden
* Menüeintrag zum Löschen der Maske und des Bildes ohne Text des aktuellen Bildes hinzugefügt
* Der standardmäßige erweiterte Pixelwert für die Bildreparatur wurde von 5 auf 20 geändert
* Fehler behoben: Falsche Koordinaten nach der Erweiterung der Pixel bei der Bildreparatur
* Weitere Fehlerkorrekturen

## v4.7.0 (2025/10/26)

* Die Farberkennung wird in einem separaten Thread ausgeführt, um ein Nichtreagieren des Programms zu vermeiden
* Die Texterkennung von Farben unterstützt die Verwendung von OCR
* Neue Vorlage für CG-Bilder
* Neue 48px-CTC-OCR von manga-image-translator in der ONNX-Version
* Neue Projekteinstellung: Beim Ausführen reiner OCR-Erkennung wird der Hintergrund an beiden Enden des Texts im Bild entfernt
* Beim Verschieben ausgewählter Bereiche um einen Versatz wird bei Überschreiten der Grenze durch die Zielnummer die Gesamtzahl der Bereiche zur Zielnummer addiert oder davon subtrahiert
* Fehler behoben: Hatte ein Textbereich das Attribut textColor, war die Farbänderung über die Symbolleiste unwirksam


## v4.6.0 (2025/10/24)

* Im Layoutmodus wird die Schriftgröße nach dem Loslassen der Maus aktualisiert, wenn ein Textfeld ausgewählt ist
* Beim Festlegen des Schriftnamens über die Symbolleiste wird nicht gleichzeitig die Schriftgröße zum lokalen Stil hinzugefügt
* Operationen wie die automatische Textgröße prüfen, ob der lokale Stil eine Schriftgröße enthält, statt nur zu prüfen, ob ein lokaler Stil vorhanden ist
* OCR unter macOS liefert nun Ergebnisse auf Wortebene
* Das ChatGPT-Plugin wurde aktualisiert, um die Denkmodelle von SiliconFlow zu unterstützen
* Der PDF-Export unterstützt die Verwendung von Bildern ohne Text oder das Weglassen von Bildern
* Der PDF-Export unterstützt vertikalen Text, mehrzeiligen Text und Arabisch
* Die Textebene des PDF-Exports kann auf sichtbar gesetzt werden
* Der PDF-Import unterstützt den Import von Text auf Wortebene
* Beim PDF-Import mit Bildauszug wird auch der Import von Text unterstützt
* Laotisch, Thailändisch und Khmer zur Liste der Sprachen ohne Leerzeichen hinzugefügt

## v4.5.0 (2025/10/18)

* Neue Sortiermethoden: gegen den Uhrzeigersinn, im Uhrzeigersinn, Textspalten
* Neue Panel-Erkennungsmethode: Textclustering
* Neue Funktion zum stapelweisen Ändern der Reihenfolge ausgewählter Bereiche oder Panels
* Die Panel-Erkennung unterstützt die Angabe der Sortiermethode und des Objekterkennungsmodells
* Die Stapelverarbeitung zum Zusammenführen von Bereichen wird in einem Thread ausgeführt, um ein Nichtreagieren der Software zu vermeiden
* Das Laden von Plugins wurde verbessert
* Beim PSD-Export wurde eine Option zur Berechnung der Textabstände hinzugefügt
* Neues Sakura-Übersetzungs-Plugin
* Fehler behoben: Die vertikale Text-Engine meldete einen Fehler beim Rendern von Text, der nur Zeilenumbrüche enthält
* Fehler behoben: Nach dem Festlegen der Nummer per Doppelklick war die Ergebnisreihenfolge falsch
* Fehler behoben: Der Textentferner verarbeitete Alpha-Werte bei Bildern mit Transparenzinformationen nicht korrekt
* Fehler behoben: OCR und andere Operationen schlugen bei WebP-Bildern fehl
* Fehler behoben: Nach „Speichern unter“ wurden der Softwaretitel nicht aktualisiert und kein Eintrag zu den letzten Dateien hinzugefügt
* Fehler behoben: Bei der Bestimmung des Stils anhand der Textrichtung trat ein Fehler auf, wenn ein bestimmter Stil nicht existierte
* Weitere Fehlerkorrekturen

## v4.4.0 (2025/09/27)

* Neue Workflow-Symbolleiste
* Nach dem Erstellen eines Projekts wird die OCR-Sprache anhand der Projektsprache ausgewählt
* Nach dem Erstellen eines Projekts wird die Projektdatei automatisch gespeichert
* Beim ersten Öffnen der Konfiguration benutzerdefinierter Workflows werden vordefinierte Workflows geladen
* Beim Ändern von Stilen über die Symbolleiste werden nur die geänderten Stile im lokalen Stil beibehalten
* Fehler behoben: Problem bei der Übergabe von Kommandozeilenparametern an BAT- und EXE-Dateien unter Windows

## v4.3.0 (2025/09/24)

* Bei der Sprechblasenerkennung auf kleineren Bildern werden Breite und Höhe auf 1024 erweitert
* Anhand der Zusammenführungsrichtung und ob es sich um Zeichen handelt, wird festgelegt, ob Leerzeichen und Zeilenumbrüche hinzugefügt werden
* Bei zeichenweisen Erkennungsergebnissen von RapidOCR wird beim Speichern das Attribut `isChar` hinzugefügt
* Arabisches Modell zu RapidOCR hinzugefügt
* Nach der Sprechblasenerkennung werden Bereiche standardmäßig nicht erweitert
* Neue Operation für benutzerdefinierte Workflows zur Erkennung langer Streifenbereiche; die Projekteinstellung, dass die reine OCR-Erkennung nur für langen Text verwendet werden kann, wurde entfernt
* Neue Operation für benutzerdefinierte Workflows zur Erkennung textfreier Bereiche, die mit Textbereichen zusammengeführt werden können
* Neue Projekteinstellung für das Verhältnis langer Streifenbereiche
* Vorlage für japanische Comics aktualisiert
* Fehler behoben: Die Koordinaten der Sprechblasenerkennung konnten Dezimalstellen enthalten
* Fehler behoben: Bei aktivierter Option zum Entfernen von Zeilenumbrüchen wurden Zeichen, die nur aus einem Leerzeichen bestehen, gelöscht
* Fehler behoben: Bei der Lokalisierung des Texts von Operationsparametern in benutzerdefinierten Workflows konnte ein zusätzliches Leerzeichen entstehen


## v4.2.0 (2025/09/21)

* Die automatische Schriftgrößenanpassung der vertikalen Text-Engine ist nun genauer
* Die Erkennung der Textrichtung basiert standardmäßig auf dem Bildseitenverhältnis
* Neuer Menüeintrag zum Öffnen des Softwareverzeichnisses
* Bei der Stapelübersetzung wird nach der Sprechblasenerkennung auch das Zusammenführen von Bereichen ausgeführt
* Die reine OCR-Erkennung kann nur für langen Text verwendet werden
* RapidOCR unterstützt die Rückgabe von Ergebnissen auf Zeichenebene
* Die ONNX-Version von mangaOCR ist standardmäßig enthalten
* Die Vorlagen wurden auf Basis der neuen integrierten OCR optimiert
* OpenCV-Mat-Objekte werden rechtzeitig freigegeben, um den Speicherverbrauch zu optimieren
* Das stapelweise Zusammenführen von Bereichen ist nun eine von der UI unabhängige Operation
* Die dynamische Bibliothek von ONNXRuntime wird standardmäßig geladen
* Das Entfernen von Nicht-Textbereichen (OCR) wurde zu benutzerdefinierten Workflows hinzugefügt
* Bei der OCR eines einzelnen Bereichs wird anhand der gespeicherten Position statt anhand der Position des Steuerelements zugeschnitten
* RapidOCR korrigiert die Reihenfolge bei der Erkennung eines einzelnen Bereichs standardmäßig
* Die Option zur Anpassung der Reihenfolge bei der Erkennung eines einzelnen Bereichs ist bei reinen Erkennungs-Engines wie mangaOCR wirkungslos
* Fehler behoben: Problem mit der Textreihenfolge in der präzisen Version der Baidu-OCR
* Fehler behoben: Lokalisierungsproblem bei Parametern in benutzerdefinierten Workflows
* Fehler behoben: Bei aktiviertem Layoutmodus, aber ohne Ansicht der Übersetzung, wurde Text falsch ausgewählt
* Fehler behoben: Bei aktivierter Option zum Hinzufügen von Parametern konnten keine allgemeinen Einträge zu benutzerdefinierten Workflows hinzugefügt werden



## v4.1.0 (2025/09/13)

* Neue integrierte OCR: rapid
* Standardmäßig ist ein [Modell](https://github.com/xulihang/ImageTrans-docs/issues/860) zur Erkennung japanischer Textzeilen enthalten
* DocTROCR-Plugin hinzugefügt

## v4.0.2 (2025/09/10)

* Beim Zusammenführen von Bereichen innerhalb eines Panels sowie beim Hinzufügen von Text zu vorhandenen Bereichen per OCR werden Bereiche zusammengeführt, um die Reihenfolge zu korrigieren
* Beim Hinzufügen von Text zu vorhandenen Bereichen per OCR kann gewählt werden, den Bildinhalt außerhalb der Bereiche nicht zu entfernen
* Das Erweitern der Grenzen beim horizontalen Zusammenführen textenthaltender Bereiche wurde wiederhergestellt
* Die Geschwindigkeit der Panel-Erkennung wurde verbessert
* Die Anzeige der Nummern wurde verbessert
* Fehler behoben: Die Einstellung der Panel-Erkennungsmethode in benutzerdefinierten Workflows war unwirksam
* Fehler behoben: Mögliche Indexüberschreitung beim Springen zur entsprechenden Bildposition durch Auswahl eines Textfelds und beim Ändern der Reihenfolge

## v4.0.1 (2025/08/29)

Die Klarheit gedrehten Texts wurde verbessert [#950](https://github.com/xulihang/ImageTrans-docs/issues/950)

## v4.0.0 (2025/08/23)

* Neue Maskenerzeugungsmethode: OCR
* Beim Laden von WebP-Dateien bleibt der Transparenzkanal erhalten
* Wenn Text vorhanden ist, beginnt die Aufteilung der Erkennungsbereiche im Zentrum
* Der Projektpfad wird als Titel der Software verwendet [#946](https://github.com/xulihang/ImageTrans-docs/issues/946)
* Fehler behoben: Wenn der festgelegte Schriftschnitt nicht existierte, konnte der Standardstil nicht angewendet werden
* Fehler behoben: Bei der serverseitigen Sprechblasenerkennung wurde standardmäßig der Kategoriename als Schriftschnitt hinzugefügt
* Fehler behoben: Unter macOS konnten mit der Command-Taste keine Mehrfachauswahlen und ähnliche Operationen durchgeführt werden
* Fehler behoben: PatchMatch war nicht verwendbar (die macOS-Version wurde neu kompiliert und verwendet standardmäßig das PNG-Format)

## v3.19.1 (2025/08/17)

* Die Pixeleinheiten der Rendering-Größe der Text-Engine bei unterschiedlichen Maßstäben verwenden nun einheitlich Ganzzahlen
* Unterstützung für den direkten Import von Bildern im WebP-Format


## v3.19.0 (2025/08/16)

* Die Verwendung von OCR zur Drehungserkennung ist erlaubt; entsprechende Projekteinstellungen wurden hinzugefügt [#934](https://github.com/xulihang/ImageTrans-docs/issues/934)
* OCR-Plugins wurden aktualisiert, um die Drehungserkennung zu unterstützen
* Neue Einstellung für die Überlappungsrate von Bereichen
* Weitere Fehlerkorrekturen


## v3.18.2 (2025/08/10)

* Der Maskeneditor bietet nun ein Tastenkürzel zum Umschalten des Löschmodus [#issue924](https://github.com/xulihang/ImageTrans-docs/issues/924)
* Neue Operation zum Festlegen eines festen Versatzes für Textbereiche
* Fehler behoben: Durch das Klicken auf einen Textbereich wurde ein Textänderungsereignis ausgelöst, wodurch die Schriftgröße des Textbereichs neu berechnet wurde
* Fehler behoben: Durch das Festlegen der Größe von Textbereichen mit doppelter Genauigkeit konnte Text unscharf werden [issue928](https://github.com/xulihang/ImageTrans-docs/issues/928)

## v3.18.1 (2025/07/26)

* Neuer Menüeintrag für Textbereichsoperationen: Übersetzung einfügen
* Neues Ollama-Plugin
* Die Hauptoberfläche wird erst angezeigt, nachdem alle Plugins geladen sind
* Die automatische Bereinigung des Servers ist standardmäßig deaktiviert
* Fehler behoben: Beim Vereinheitlichen der Schrift verschwanden die Textfelder ausgewählter Textbereiche
* Fehler behoben: Beim Aufheben der Auswahl mehrerer Textbereiche wurde kein entsprechendes Ereignis ausgelöst

## v3.18.0 (2025/07/19)

* Benutzerdefinierte Workflows unterstützen das Speichern zusätzlicher Parameter für Operationen zur Texterkennung und -lokalisierung [#issue914](https://github.com/xulihang/ImageTrans-docs/issues/914)
* Protokollbetrachter hinzugefügt
* Lesezeichenmanager hinzugefügt
* Fehler behoben: Bei erneuter Auswahl des Sprechblasenmodells wurde es unwirksam
* Fehler behoben: Beim Öffnen eines Projekts per Drag-and-Drop wurde das bereits geöffnete Projekt nicht geschlossen


## v3.17.5 (2025/07/05)

* Text in Textbearbeitungsbereichen für bidirektionale Texte wie Arabisch ist standardmäßig rechtsbündig
* Doppelklick auf einen Textbereich aktiviert die Textbearbeitung
* Autokorrekturregeln können als CSV exportiert und aus CSV importiert werden
* Unterstützung für das Filtern von Bereichen mit benutzerdefinierten Regeln
* Neuer Menüeintrag zum Öffnen von Bildern ohne Text mit einem externen Programm
* Neuer Textsegmentierer

## v3.17.4 (2025/06/20)

* Menüeinträge zum Aktualisieren und Öffnen von Bildern mit einem externen Programm hinzugefügt
* Menüeinträge zum Erweitern und Verkleinern ausgewählter Bereiche hinzugefügt
* Unterstützung für das Festlegen der Rahmenfarbe von Bereichen mit geringer Konfidenz
* Die Dateinamensortierung verwendet die natürliche Sortierung
* Beim Öffnen von Textentferner und Maskeneditor wird der Bildzoomfaktor der Hauptoberfläche übernommen

## v3.17.3 (2025/06/10)

* Menüeintrag für Stileinstellungen hinzugefügt [#888](https://github.com/xulihang/ImageTrans-docs/issues/888)
* Menüeintrag für die Bereichsfilterung hinzugefügt [#887](https://github.com/xulihang/ImageTrans-docs/issues/887)
* Die Logik der lokalen Stileinstellungen wurde verbessert
* Fehler behoben: Das Öffnen der lokalen Stileinstellungen schlug fehl [#889](https://github.com/xulihang/ImageTrans-docs/issues/889)
* Bei der Verarbeitung aller Bilder mit STTN im Video-Untertitelentferner werden jeweils 30 Bilder auf einmal verarbeitet


## v3.17.2 (2025/06/04)

* Die Bildwechsellogik wurde verbessert
* Mit dem Video-Untertitelentferner erzeugte Bilder ohne Text erhalten das Attribut „Text entfernt“
* Der Video-Untertitelentferner unterstützt die Erzeugung von Textfeldern für alle Bilder
* Fehler behoben: Der Video-Untertitelentferner konnte nur geöffnet werden, wenn zuvor Untertitel geladen worden waren

## v3.17.1 (2025/06/02)

* Unterstützung für die Anpassung von Textstilen mit CSS [#883](https://github.com/xulihang/ImageTrans-docs/issues/883)
* Neue Textentfernungsmethode STTN
* Der Video-Untertitelentferner unterstützt die videobasierte Textentfernungsmethode STTN

## v3.17.0 (2025/05/18)

* Neuer Video-Untertitelentferner
* Neue Textentfernungsmethode: Gaußsche Unschärfe
* Menüeinträge zum Umkehren der Auswahl, Auswählen von Bereichen mit gleichem Stil und in den Hintergrund legen hinzugefügt
* Filteroption für Textbereiche mit nicht transparentem Hintergrund hinzugefügt
* Unterstützung für das Festlegen einer Maske für OCR-Operationen, um nicht zu erkennende Bereiche auszuschließen [#881](https://github.com/xulihang/ImageTrans-docs/issues/881)
* Die Eigenschaften geteilter Textbereiche bleiben erhalten
* Im Originalbild-Betrachter kann umgeschaltet werden, ob das Zoomen synchronisiert wird [#879](https://github.com/xulihang/ImageTrans-docs/issues/879)
* Fehler behoben: Breite und Höhe der erweiterten Pixel wurden beim Entfernen von Text falsch festgelegt

## v3.16.2 (2025/05/10)

* Während eine Operation eines benutzerdefinierten Workflows für ein einzelnes Bild läuft, ist die entsprechende Schaltfläche deaktiviert
* Beim Hinzufügen von Text zu vorhandenen Bereichen per OCR können Textfarbe, Drehung und weitere Informationen hinzugefügt werden
* Option hinzugefügt, ob beim Ändern der Deckkraft der Überlagerung auch die Textdeckkraft geändert wird
* Das Löschen von Maskenbildern und das Löschen von Bildern ohne Text wurden zu benutzerdefinierten Workflows hinzugefügt

## v3.16.1 (2025/05/02)

* Die Sprechblasenerkennung unterstützt das Filtern von Ergebnissen nach Kategorie-ID
* Unterstützung für das Zusammenführen von Text anhand der Textfarbe
* Das Zusammenführen anhand von Absatzpositionsinformationen unterstützt vertikalen Text
* Das Löschen von Originaltext, Übersetzung, Übersetzungsposition und Stil wurde zu benutzerdefinierten Workflows hinzugefügt
* In benutzerdefinierten Workflows wurde eine Schaltfläche zum Leeren hinzugefügt


## v3.16.0 (2025/04/26)

* Bei der OCR eines einzelnen Bereichs können dem Bild Ränder hinzugefügt werden [#issue866](https://github.com/xulihang/ImageTrans-docs/issues/866)
* In den Projekteinstellungen für Textlokalisierung und -zusammenführung wurden Optionen für die maximale Differenz der vertikalen und horizontalen Koordinate hinzugefügt
* Beim Hinzufügen von Text zu vorhandenen Bereichen per OCR wird das Bild außerhalb der Bereiche entfernt
* Fehler behoben: Bei der Ansicht der Übersetzung war das Verschieben des Bildes über Text unwirksam

## v3.15.4 (2025/04/18)

* Suchen und Ersetzen unterstützt die Auswahl leerer Abschnitte mit regulären Ausdrücken
* Unterstützung für das Zoomen um den Mauszeiger
* Für „Springen zu“ wurde ein Tastenkürzel hinzugefügt

## v3.15.3 (2025/03/29)

* Menüeinträge zum Einsetzen des Originaltexts in die Übersetzung und umgekehrt hinzugefügt
* Magische Schaltfläche hinzugefügt, um benutzerdefinierte Textbearbeitungsoperationen auszuführen [#858](https://github.com/xulihang/ImageTrans-docs/issues/858)
* Eigenes DeepSeek-Übersetzungs-Plugin hinzugefügt

## v3.15.2 (2025/03/13)

* Hilfelink hinzugefügt
* In der vertikalen Engine wurde eine Einstellung für Zeichen mit freier Höhe hinzugefügt [#841](https://github.com/xulihang/ImageTrans-docs/issues/841)

## v3.15.1 (2025/03/08)

* Verbesserte Extraktion harter Untertitel
* Menüeintrag „Springen zu“ hinzugefügt

## v3.15.0 (2025/03/02)

* Neuer Extraktor für harte Untertitel
* Erste Unterstützung für mehrthreadige OCR hinzugefügt
* In Suchen und Ersetzen wurde eine Option für den Ersetzungsmodus hinzugefügt
* Die Logik zur Sortierung anhand von Zahlen in Dateinamen wurde verbessert
* Fehler behoben: In tabulatorgetrennten TXT-Dateien waren Zeilenumbrüche in Übersetzungen nicht maskiert

## v3.14.4 (2025/02/19)

* Unterstützung für das Öffnen von Projekten mit der standardmäßigen Systemanwendung
* Unterstützung für das Öffnen des aktuellen Bildes mit einem externen Programm per Rechtsklick
* Fehler behoben: Falsche Koordinaten beim Screenshot eines festen Bereichs unter macOS bei hoher DPI
* Fehler behoben: Mögliche Fehler bei der Übersetzung mehrerer Sätze mit Google Translate [#issue835](https://github.com/xulihang/ImageTrans-docs/issues/835)

## v3.14.3 (2025/01/08)

* Fehler behoben: Nicht linksbündiger Text verschob sich beim Ändern des Maßstabs
* Neues OCR-Plugin auf Basis von ChatGPT

## v3.14.2 (2025/01/07)

* Fehler behoben: Die perspektivische Transformation gedrehter Bereiche in größeren Bildern schlug fehl [#issue813](https://github.com/xulihang/ImageTrans-docs/issues/813)
* Beim Speichern eines Projekts wird geprüft, ob es von einem anderen Prozess geändert wurde
* Neue Operation zum Zusammenführen von Bereichen innerhalb eines Panels in benutzerdefinierten Workflows

## v3.14.1 (2024/12/28)

* Der Eckenradius der Textfeldüberlagerung im nicht präzisen Modus wurde standardmäßig auf 10 gesetzt
* Im Layoutmodus wurde der Bereich vergrößert, in dem die Größe von Textfeldern angepasst werden kann
* Fehler behoben: Unscharfe Ecken der Textfeldüberlagerung im nicht präzisen Modus
* Fehler behoben: Der Server konnte nicht zu bereits heruntergeladenen Bildern wechseln

## v3.14.0 (2024/12/14)

* Neue Rasterfunktion
* Neuer Menüeintrag für die Rechtschreibprüfung
* Die API-Einstellungen verwenden nun TextArea, um die Eingabe mehrzeiligen Texts zu ermöglichen
* Im Rahmenauswahlmodus wird ein Textfeld beim Klicken bei gedrückter Steuerungstaste nicht abgewählt
* Im Rahmenauswahlmodus kann bei gedrückter Steuerungstaste die Auswahl durch Aufziehen eines Rahmens aufgehoben werden
* Der Server sendet alle 30 Sekunden einen Heartbeat
* Der Server unterstützt die Auswahl der OCR-Engine anhand der Ausgangssprache
* Fehler behoben: Im Servermodus wurde beim Erzeugen endgültiger Bilder nicht auf 100 % Maßstab umgeschaltet

## v3.13.2 (2024/12/10)

* Fehler behoben: Beim Zurücksetzen von Tastenkürzeln wurde der Text nicht übersetzt
* Fehler behoben: Beim Zurücksetzen von Tastenkürzeln wurden keine macOS-spezifischen Tastenkürzel verwendet
* Fehler behoben: Nach dem Einfügen von Dateien wurde nicht zur entsprechenden Datei gesprungen
* WebP zum Exportformat hinzugefügt
* Das Prüfintervall der Serververbindung wurde von 30 auf 5 Sekunden verkürzt
* Der Server unterstützt die Konvertierung von WebP-Dateien, die über einen lokalen Pfad zurückgegeben werden

## v3.13.1 (2024/12/08)

* Fehler behoben: Falsche Y-Koordinate nach dem Festlegen des oberen Abstands in der vertikalen Engine
* Fehler behoben: OCR-Ergebnisse im JSON-Format wurden nicht ausgewertet
* Unter macOS wird das mitgelieferte Java zum Starten externer JAR-Dateien verwendet
* Der Server unterstützt die Übertragung reiner Textdaten ohne Bilder
* Der Server überträgt standardmäßig Bilder im WebP-Format, um Bandbreite zu sparen

## v3.13.0 (2024/12/07)

* Die Darstellung von Zeichen ohne Abstand in der vertikalen Engine wurde verbessert
* Die Erkennung einzelner Bereiche durch mangaTranslator wurde verbessert
* Der Server unterstützt die Verbindung mit entfernten Servern

## v3.12.0 (2024/11/24)

* Bei Verwendung der Auswahlsymbolleiste werden die Koordinaten beim Klicken auf und Verschieben von Textfeldern unten in der Oberfläche angezeigt
* Operationen zum Vereinheitlichen von Breite und Höhe hinzugefügt
* In der Schriftsymbolleiste wurde eine Farbpipette hinzugefügt
* Suchen und Ersetzen unterstützt die Umwandlung in Satzanfangs-Großschreibung und Titelschreibweise
* Menüeintrag zur automatischen Berechnung einer passenden Schriftgröße hinzugefügt
* Masken im nicht präzisen Modus werden nur anhand der Originaltextbereiche erzeugt
* Fehler behoben: Falsche Positionsberechnung beim Entfernen nach Bereichen im Textentferner
* Fehler behoben: Der Server konnte Workflows nicht auswerten
* Fehler behoben: Anzeige- und Speicherprobleme bei Workflow-Einstellungen
* Fehler behoben: Die Panel-Sortierung unterstützte keine Doppelseiten
* Fehler behoben: Masken im nicht präzisen Modus reagierten nicht in Echtzeit auf Drehungen

## v3.11.2 (2024/11/16)

* Neue maschinelle Übersetzung von Alibaba
* Der Symbolleistenmodus des Originalbild-Betrachters unterstützt die Anzeige der Textfelder des Originaltexts
* Menüeintrag zum Ändern der Reihenfolge von Textfeldern hinzugefügt

## v3.11.1 (2024/11/03)

* Unterstützung für den Import von PDF-Bildern im JBIG-Format
* Unterstützung für die Verarbeitung von Dateien durch benutzerdefinierte Workflows über die Kommandozeile [#issue785](https://github.com/xulihang/ImageTrans-docs/issues/785)
* Benutzerdefinierte Workflows unterstützen das Ändern der aktuellen Einstellungen
* Unterstützung für die Verwendung der Hintergrundfarbe aus dem Textstil als Textfeld-Farbe [#issue775](https://github.com/xulihang/ImageTrans-docs/issues/775)
* Sortierung von Panels und Verkleinerung von Bereichen wurden zu benutzerdefinierten Workflows hinzugefügt [#issue774](https://github.com/xulihang/ImageTrans-docs/issues/774) [#issue776](https://github.com/xulihang/ImageTrans-docs/issues/776)


## v3.11.0 (2024/10/25)

* Nach dem Import von Bildern wird das aktuelle Bild beibehalten
* Unterstützung für den Aufruf eines lokalen Sprechblasenerkennungsdienstes [#issue771](https://github.com/xulihang/ImageTrans-docs/issues/771)
* Die Panel-Erkennung unterstützt die Verwendung der Objekterkennung [#issue772](https://github.com/xulihang/ImageTrans-docs/issues/772)
* Es können mehrere Einstellungen für benutzerdefinierte Workflows gespeichert werden


## v3.10.3 (2024/10/07)

* Unterstützung für das Öffnen von Projekten über die Kommandozeile und per Drag-and-Drop von Dateien
* Neuer Originalbild-Betrachter [#issue763](https://github.com/xulihang/ImageTrans-docs/issues/763)
* Fehler behoben: Es wurden leere maschinelle Übersetzungen gespeichert

## v3.10.2 (2024/09/22)

* Beim PDF-Import kann festgelegt werden, ob Text extrahiert wird
* Nach dem Aufrufen eines Screenshots per Tastenkürzel wird das Fenster des Bildschirmlesers automatisch wiederhergestellt
* ChatGPT-Plugin aktualisiert, um das Festlegen eines Hosts mit Versionsnummer zu unterstützen
* Fehler behoben: Textbereiche mit Breite oder Höhe 0 führten zum Fehlschlagen der Maskenerzeugung
* Fehler behoben: Screenshots des Bildschirmlesers hatten bei hoher DPI eine geringe Auflösung
* Beim Anpassen der Größe von Bereichen anhand von Textmasken wird über die Position des Mittelpunkts geprüft, ob die Maske korrekt ist

## v3.10.1 (2024/09/15)

* Beim Öffnen eines Projekts wird standardmäßig zum zuletzt geöffneten Bild gesprungen
* Fehler behoben: Beim Exportieren von Bildern ohne Panels und von Panels mit falschen Abmessungen trat eine Fehlermeldung auf

## v3.10.0 (2024/09/07)

* Unterstützung für horizontalen Text innerhalb vertikaler Schrift [#issue507](https://github.com/xulihang/ImageTrans-docs/issues/507)
* Der Rich-Text der horizontalen Text-Engine unterstützt das Festlegen von Durchstreichung und Unterstreichung
* Beim Loslassen der Maus und beim Aktualisieren werden Hilfslinien entfernt
* Der Versatz vertikalen Texts kann angepasst werden
* Die Operation zum Begrenzen von Textbereichen auf das Bild speichert die Positionsinformationen der Übersetzungsbereiche

## v3.9.0 (2024/09/01)

* Die Sprechblasenerkennung unterstützt die Modellauswahl über einen Dialog
* Neue Ausrichtung: Blocksatz
* Neue Ausrichtungshilfslinien und automatisches Einrasten [#issue733](https://github.com/xulihang/ImageTrans-docs/issues/733)
* Der Aufruf von Engine 2 von OCRSpace ist erlaubt
* Vor der maschinellen Übersetzung kann der Originaltext in Groß- oder Kleinschreibung umgewandelt werden

## v3.8.0 (2024/08/25)

* Die Panel-Erkennung unterstützt die automatische Verarbeitung von Bildern mit dunklem Hintergrund [#issue741](https://github.com/xulihang/ImageTrans-docs/issues/741)
* Unterstützung für das Festlegen der Hintergrundfarbe exportierter Webtoons
* Neue Funktion zum Entfernen überflüssiger Bereiche und Ergänzen fehlender Bereiche mithilfe der Sprechblasenerkennung
* Fehler behoben: Bei aktivierter Farbumkehrung verwendete das Zusammenführen von Textbereichen nicht das invertierte Bild
* Es kann festgelegt werden, ob bei der heuristischen Texterkennung in Stapeloperationen konfidenzbezogene Operationen für Textbereiche ausgeführt werden
* Sprechblasenerkennungsmodelle können im Verzeichnis `models` der Software abgelegt und über die Projekteinstellungen ausgewählt werden
* Die Offline-Sprechblasenerkennung ist standardmäßig aktiviert
* Neuer Kontextmenüeintrag für die Ein-Klick-Übersetzung auf Basis benutzerdefinierter Workflows
* Neue Vorlagen für chinesische, koreanische und westliche Comics
* Vorlagen können konfigurieren, ob Benutzer Sprache und Sprechblasenerkennungsmodell manuell festlegen bzw. herunterladen müssen

## v3.7.0 (2024/08/18)

* Die Texterkennung in natürlichen Szenen unterstützt die Verarbeitung schrägen Texts
* Der Maskengenerator für eingebettete Rechtecke unterstützt die Verarbeitung gedrehter Bereiche
* Operationen zur Textbereichserkennung prüfen Überlappungen nur mit vorhandenen Bereichen
* Beim Entfernen von Text nach Bereichen wird für gedrehte Bereiche das umschließende Rechteck verwendet
* Fehler behoben: Falsche Berechnung von Breite und Höhe beim Rückimport von Annotationsdaten im OBB-Format
* Fehler behoben: Zusammenführung von um 90 Grad gedrehtem Text bei der Objekterkennung
* Fehler behoben: Problem beim Aufruf von Nicht-ONNX-Modellen
* Fehler behoben: Bildverschiebung in Maskeneditor und Textentferner beim Aufziehen eines Rahmens über den Bildrand hinaus

## v3.6.1 (2024/08/17)

* Unterstützung für YOLO OBB zur Erkennung schrägen Texts hinzugefügt
* Der Server unterstützt die Verwendung benutzerdefinierter Workflows
* Fehler behoben: Nach dem Aufheben der Drehung wurde der Drehwinkel des Textfelds nicht wiederhergestellt
* Fehler behoben: Bei der Erkennung des Textwinkels per OCR wurde die Drehung des Textfelds nicht festgelegt

## v3.6.0 (2024/08/10)

* Neue Einstellung für die erweiterten Pixel beim Entfernen von Text nach Textbereichen
* Neuer Menüeintrag zum Verkleinern von Bereichen
* Neue Operation zum Anpassen der Größe von Textbereichen anhand von Masken
* Neuer Bildausrichtungskorrektor, der die Ausrichtung von mit Apple- und Samsung-Smartphones aufgenommenen Bildern anhand der Exif-Informationen korrigiert
* Neue Funktion zum Zusammenführen mit dem nächsten Bild
* Die Ausrichtung heruntergeladener Bilder wird automatisch anhand der Exif-Daten korrigiert
* Der Seitenwechsel bei Stapeloperationen wurde verbessert
* Zu benutzerdefinierten Workflows wurde eine Operation hinzugefügt, die OCR-Ergebnisse zu vorhandenen Bereichen hinzufügt
* Der Drag-and-Drop-Modus und das Entfernen von Text nach Textbereichen sind standardmäßig aktiviert
* Fehler behoben: Baidu Translate unterstützte keinen mehrzeiligen Text

## v3.5.0 (2024/07/28)

* Textfelder können über ihre vier Ecken in Größe und Position angepasst werden
* Positionsinformationen von Übersetzungen werden mit doppelter Genauigkeit gespeichert
* Der Panel-Export unterstützt das Speichern als ein langes Bild


## v3.4.0 (2024/07/21)

* Unterstützung für den Import von Dateien in Formaten wie Epub, Mobi, ZIP und CBZ
* Neuer Plugin-Assistent zur Verwaltung von Plugins
* Neue Bearbeitungssymbolleiste mit Unterstützung für das Drehen und Spiegeln von Bildern
* Neuer Doppelseiten-Manager. Bei als Doppelseiten festgelegten Bildern werden diese bei Sortierung und Panel-Erkennung in linke und rechte Hälften aufgeteilt
* Die Einstellungen unterstützen das Festlegen von Parametern für Textentfernungs- und Maskenerzeugungs-Plugins
* Fehler behoben: Der Textentferner lud Bilder ohne Text nicht korrekt
* Ergebnisse der mehrsätzigen maschinellen Übersetzung werden gespeichert

## v3.3.1 (2024/07/06)

* Fehler behoben: Beim Ändern des Anzeigemaßstabs wurden Textfelder nicht neu gezeichnet
* Fehler behoben: Beim Zusammenführen von Sprechblasen bei der Erkennung ging deren Kategorie verloren

## v3.3.0 (2024/06/30)

* Im Schriftstil wurde eine Einstellung für den oberen Abstand hinzugefügt
* In Suchen und Ersetzen wurden Kontextmenüeinträge für textbereichsbezogene Operationen hinzugefügt
* Zu benutzerdefinierten Workflows wurden Operationen wie das Entfernen äußerer Bereiche und die Textrichtungserkennung hinzugefügt
* Beim Erstellen eines Projekts wird gefragt, ob vorhandene Bilder im Projektordner importiert werden sollen
* Die Leistung beim Ändern des Anzeigemaßstabs wurde verbessert
* PDFBox wurde aktualisiert, um Probleme beim Import japanischer PDF-Dateien zu beheben

## v3.2.1 (2024/06/24)

* Die Ein-Klick-Übersetzung führt standardmäßig eine Panel-Erkennung und -Sortierung aus
* Die Darstellung der horizontalen Text-Engine bei Vermeidung der Worttrennung wurde verbessert

## v3.2.0 (2024/06/23)

* Neue Funktion zum Erstellen eines Projekts aus einer Vorlage [#issue688](https://github.com/xulihang/ImageTrans-docs/issues/688)
* Unterstützung für die Anzeige des Stilnamens in Textfeldern
* Die Unterstützung von Kategorien in der Objekterkennung wurde erweitert
* Fehler behoben: Standardmäßige Tastenkürzel waren möglicherweise unwirksam, wenn sie anderen Funktionen zugewiesen waren [#issue630](https://github.com/xulihang/ImageTrans-docs/issues/630)
* Fehler behoben: OpenCV konnte keine Modelle aus Pfaden mit Unicode-Zeichen laden


## v3.1.1 (2024/06/12)

* „Konfidenz von Textbereichen abrufen“ wurde zu benutzerdefinierten Workflows hinzugefügt
* Projekteinstellung für den Konfidenzschwellenwert von Textbereichen hinzugefügt
* Projekteinstellung zum Korrigieren der Textreihenfolge von OCR-Ergebnissen einzelner Bereiche hinzugefügt
* Fehler behoben: OCR-Plugins im Kombinationsmodus wurden nicht in den Einstellungen aufgeführt
* Fehler behoben: Im dunklen Design wurde Text der horizontalen Engine weiß
* Fehler behoben: Bei der Leserichtung von rechts nach links schlug das vertikale Zusammenführen von Bereichen mit Text fehl

## v3.1.0 (2024/06/10)

* In der Farbpipette wurde eine Schaltfläche für benutzerdefinierte Farben hinzugefügt
* Die Farbeinstellung im Layout-Einstellungsfenster erfolgt nun durch Aufnehmen einer Farbe aus dem Bild
* Benutzerdefinierte Workflows können nur das aktuelle Bild verarbeiten
* Neue Verarbeitungstypen für benutzerdefinierte Workflows: erkannte Textfarbe als Konturfarbe verwenden, Konturfarbe anhand der Helligkeit der Textfarbe festlegen, Textfarbe anhand der Helligkeit der Konturfarbe festlegen, Textstil anhand der Konturfarbe abstimmen
* Fehler behoben: Zeichensalat in der Sprachliste von WinRT OCR


## v3.0.0 (2024/06/08)

* JRE auf Java 23 aktualisiert, um das Problem zu beheben, dass Leerzeichen an beiden Enden den automatischen Zeilenumbruch beeinflussen [#issue482](https://github.com/xulihang/ImageTrans-docs/issues/482)
* Unterstützung für das Definieren von Textfeld-Stilen
* Der Maskeneditor unterstützt die Auswahl von Bereichen in beliebiger Richtung

## v2.12.4 (2024/06/02)

* Die vertikale Zentrierung ist standardmäßig aktiviert
* Beim Ziehen eines Textbereichs bei gedrückter Umschalttaste bleibt die horizontale Position unverändert. Bei gleichzeitig gedrückter Umschalt- und Z-Taste bleibt die vertikale Position unverändert
* Fehler behoben: Zeilenumbrüche in der vertikalen Text-Engine führten zum Verlust der Rich-Text-Formatierung
* Fehler behoben: Beim Wechsel des Übersetzungsmodus wurde die Auswahl der Textbereiche zurückgesetzt


## v2.12.3 (2024/05/23)

Fehler behoben: Die vertikale Zentrierung im PS-Skript und die horizontale Zentrierung im Rich-Text-Modus funktionierten nicht

## v2.12.2 (2024/05/19)

* Die Zwischensprache der maschinellen Übersetzung kann festgelegt werden [#issue647](https://github.com/xulihang/ImageTrans-docs/issues/647)
* Fehler behoben: Ein Fehlschlag bei der Maskenerzeugung während der OCR brach Stapeloperationen ab [#issue650](https://github.com/xulihang/ImageTrans-docs/issues/650)
* Fehler behoben: Über den Server erzeugte Bilder hatten bei einem Maßstab ungleich 100 % eine abweichende Auflösung

## v2.12.1 (2024/05/12)

Kann vom Server aufgerufen werden, um OCR und maschinelle Übersetzung auszuführen

## v2.12.0 (2024/05/11)

* Neue Projekteinstellung zur Vermeidung der Worttrennung
* Neue Einstellung: Beim Wechseln des Bildes wird automatisch der erste Textbereich ausgewählt [#issue642](https://github.com/xulihang/ImageTrans-docs/issues/642)
* Pseudoklassen wurden hinzugefügt, um die Anpassung von Textfeld-Stilen mit CSS zu vervollständigen [#issue636](https://github.com/xulihang/ImageTrans-docs/issues/636)
* Unterstützung für den Export von Bildern oder PDF-Dateien nach Panels
* Die Rückgabeergebnisse des Servers enthalten nun Daten wie Koordinaten und Text

## v2.11.2 (2024/05/02)

* Fehler behoben: In exportierten DOCX-Dateien hatte die Übersetzungsspalte bei leerer Übersetzung die Breite 0 [#issue639](https://github.com/xulihang/ImageTrans-docs/issues/639)
* Unterstützung für die Anpassung von Textfeld-Stilen mit CSS [#issue636](https://github.com/xulihang/ImageTrans-docs/issues/636)
* Fehler behoben: Durch die Verwendung doppelter Genauigkeit konnte horizontal oder vertikal zentrierter Text unscharf erscheinen


## v2.11.1 (2024/04/26)

* Fehler behoben: Beim Wechsel zu einem anderen Textbereich konnten in der unterstützten Übersetzung noch Ergebnisse des vorherigen Bereichs angezeigt werden [#633](https://github.com/xulihang/ImageTrans-docs/issues/633)
* Fehler behoben: Fehler bei der Suche nach aufeinanderfolgenden wiederholten Zeichen in Suchen und Ersetzen [#631](https://github.com/xulihang/ImageTrans-docs/issues/631)
* Das Aufziehen von Rahmen per Wischen unterstützt mehrere Richtungen [#629](https://github.com/xulihang/ImageTrans-docs/issues/629)
* Maschinelle Übersetzungsergebnisse für die unterstützte Übersetzung werden parallel abgerufen [#628](https://github.com/xulihang/ImageTrans-docs/issues/628)
* Fehler behoben: Nach der Installation von Schriften wurde die Schriftliste nicht rechtzeitig aktualisiert


## v2.11.0 (2024/04/21)

* Unterstützung für die Erzeugung von Textbereichen anhand von Vorlagen [#issue626](https://github.com/xulihang/ImageTrans-docs/issues/626)
* Nach dem Festlegen der Schrift über das Schrift-Einstellungsfenster wird die Auswahl nicht aufgehoben [#issue623](https://github.com/xulihang/ImageTrans-docs/issues/623)
* Menüeintrag zum Erstellen einer Kopie hinzugefügt [#issue622](https://github.com/xulihang/ImageTrans-docs/issues/622)
* Maschinenübersetzungs-Plugins können mehrere Kandidatenergebnisse im Tab für unterstützte Übersetzung zurückgeben [#issue619](https://github.com/xulihang/ImageTrans-docs/issues/619)


## v2.10.3 (2024/04/15)

* Fehler behoben: Beim Öffnen über die zuletzt verwendeten Projekte war die automatische Speicherung unwirksam
* Fehler behoben: Änderungen der automatischen Speicherzeit in den Einstellungen wurden nicht sofort wirksam
* Fehler behoben: Beim Wechsel des Projekts wurde der Speicherstatus nicht zurückgesetzt
* Beim Schließen der Software wird eine Sicherung des aktuellen Projekts erstellt

## v2.10.2 (2024/04/13)

* Unterstützung für das Festlegen von Breite und Höhe von ONNX-Sprechblasenerkennungsmodellen
* Unterstützung für das Ändern der Panel-Nummer per Doppelklick
* Neuer Kontextmenüeintrag zum Zusammenführen von Bereichen
* Zwei neue Sortiermethoden: erst vertikal, dann horizontal; erst horizontal, dann vertikal

## v2.10.1 (2024/04/04)

* Unterstützung für die Sprechblasenerkennung und den Export von Annotationsdaten mithilfe eines Schiebefensters
* Sprechblasenmodelle im Bildverzeichnis des Projekts werden bevorzugt verwendet

## v2.10.0 (2024/03/30)

* OpenCV auf 4.9.0 aktualisiert
* Unterstützung für Yolov8-Objekterkennungsmodelle hinzugefügt (ONNX-Modell als `model.onnx` benennen und im Softwareverzeichnis ablegen, um es zu aktivieren)
* Neuer Manager für Objekterkennungs-Annotationsdaten mit Unterstützung für Export und Import von Annotationsdaten im YOLO-Format


## v2.9.2 (2024/03/24)

* Im Kontextmenü wurde „Text kopieren“ hinzugefügt
* Der Bildschirmleser unterstützt das Hinzufügen von Ergebnissen mit Textpositionsinformationen zum Projekt
* Künstliche Kursivschrift für horizontalen Text unterstützt das Festlegen von Versatzwerten für Y-Koordinate und Höhe
* Fehler behoben: Bei der Stapelverarbeitung wurden seit 2.9.1 Bilder falsch zugeordnet [#issue598](https://github.com/xulihang/ImageTrans-docs/issues/598)
* Fehler behoben: Bei aktivierter automatischer Speicherung setzte das Erstellen eines neuen Textbereichs den Text des aktuell ausgewählten Bereichs zurück [#issue598](https://github.com/xulihang/ImageTrans-docs/issues/598)


## v2.9.1 (2024/03/17)

* Neuer Transparenzentferner, der JPG-Bilder ohne Transparenz erzeugt, um das Problem zu lösen, dass die meisten OCR- und Bildverarbeitungsmethoden Transparenz nicht korrekt verarbeiten [#issue593](https://github.com/xulihang/ImageTrans-docs/issues/593)
* Wenn ein reines Textbild vorhanden ist, wird es vorrangig in verschiedenen Bildverarbeitungsmethoden verwendet. Zuvor wurde es nur für die OCR von Textbereichen eingesetzt
* Neue präzise Textlöschmethode: transparenter Text. Unterstützt die Wiederherstellung des Hintergrunds anhand von Maske und umliegenden Pixeln. Wird hauptsächlich zum Entfernen von Text auf transparentem Hintergrund verwendet [#issue302](https://github.com/xulihang/ImageTrans-docs/issues/302)
* Fehler behoben: Mausereignisse auf Inhalten transparenter Bilder reagierten nicht


## v2.9.0 (2024/03/17)

* Die automatische Speicherung ist standardmäßig aktiviert
* Die Standardausrichtung wurde auf linksbündig geändert
* Projekteinstellung zum horizontalen Spiegeln endgültiger Bilder hinzugefügt [#discussion592](https://github.com/xulihang/ImageTrans-docs/discussions/592)
* Die Rich-Text-Funktion der vertikalen Text-Engine unterstützt das Festlegen der Schriftgröße
* Die vertikale Text-Engine unterstützt Leerzeilen
* Fehler behoben: Verhalten des Zeilenabstands in der vertikalen Text-Engine
* Fehler behoben: Beim Wechsel des Rich-Text-Code-Editors wurde die Schriftliste zurückgesetzt [#issue587](https://github.com/xulihang/ImageTrans-docs/issues/587)

## v2.8.8 (2024/03/09)

* Unterstützung für das Zusammenführen von Text anhand der Absatzposition [#issue586](https://github.com/xulihang/ImageTrans-docs/issues/586)
* Bei Online-OCR und Sprechblasenerkennung langer Bilder wurde ein Verarbeitungsintervall hinzugefügt

## v2.8.7 (2024/03/04)

* Fehler behoben: Das Zusammenführen von Textbereichen schlug aufgrund der Sortierung fehl
* Fehler behoben: Verarbeitung mehrzeiligen Texts durch Baidu Translate

## v2.8.6 (2024/03/01)

* Fehler behoben: Bei nicht aktivierter Option „Zeilenumbrüche automatisch entfernen“ wurden Zeilenumbrüche in zusammengeführten Textzeilen entfernt
* Beim Zusammenführen von Text im Bildschirmleser werden Breite und Höhe auf die Hälfte der entsprechenden Abmessungen gesetzt

## v2.8.5 (2024/02/25)

* Unterstützung für den PDF-Export mit Originalbildern und für den Export durchsuchbarer PDF-Dateien [#issue580](https://github.com/xulihang/ImageTrans-docs/issues/580)
* Unterstützung für die Erzeugung von Textbereichen aus Masken [#issue577](https://github.com/xulihang/ImageTrans-docs/issues/577)

## v2.8.4 (2024/02/15)

Die Textsortierung beim Zusammenführen von Textbereichen wurde verbessert [#issue576](https://github.com/xulihang/ImageTrans-docs/issues/576)

## v2.8.3 (2024/02/08)

* Unterstützung für die Vorschau von Schriften in der Schriftliste der Symbolleiste [#issue567](https://github.com/xulihang/ImageTrans-docs/issues/567)
* Beim Export endgültiger Bilder und Masken werden bereits übersetzte Bilder übersprungen [#issue548](https://github.com/xulihang/ImageTrans-docs/issues/548)
* Der Manager für übersetzte Bilder ermöglicht die schnelle Auswahl bereits exportierter Bilder
* Fehler behoben: Die automatische Schriftgrößenanpassung überschrieb die Fett- und Kursiveinstellungen im globalen Stil [#issue565](https://github.com/xulihang/ImageTrans-docs/issues/565)
* Weitere Fehlerkorrekturen

## v2.8.2 (2024/01/21)

* Der Bildschirmleser unterstützt globale Tastenkürzel [#issue237](https://github.com/xulihang/ImageTrans-docs/issues/237)
* Das Layout des Bildschirmlesers ist anpassbar
* Beim Rückimport der Übersetzung kann gleichzeitig der Originaltext geändert werden [#issue557](https://github.com/xulihang/ImageTrans-docs/issues/557)
* Neuer PDF-Importmodus: Bildauszugsmodus

## v2.8.1 (2024/01/15)

* Fehler behoben: Falsche Textreihenfolge beim Zusammenführen von Bereichen über die Symbolleiste
* Fehler behoben: Verhalten beim Zusammenführen anhand von Satzzeichen bei der Leserichtung von rechts nach links
* Fehler behoben: Beim Erstellen von Screenshots durch den Bildschirmleser wurde das Fenster nicht ausgeblendet
* Beim Zusammenführen von Bereichen wird anhand dessen, ob die Sprache Leerzeichen verwendet, entschieden, ob Leerzeichen hinzugefügt werden

## v2.8.0 (2024/01/14)

* Der Bildschirmleser unterstützt das Korrigieren der Textreihenfolge [#issue553](https://github.com/xulihang/ImageTrans-docs/issues/553)
* Der Bildschirmleser kann feste Bereiche in regelmäßigen Abständen erkennen und feststellen, ob sich das Bild im Bereich geändert hat. Die Deckkraft des Fensters für feste Bereiche ist anpassbar [#issue521](https://github.com/xulihang/ImageTrans-docs/issues/521)
* Neue Projekteinstellung für das Zusammenführen von Text: Text kann anhand der Satzzeichen am Ende zusammengeführt werden; bei textenthaltenden Bereichen werden Trennungen nicht erkannt [#issue553](https://github.com/xulihang/ImageTrans-docs/issues/552)
* In den Ergebnissen von Suchen und Ersetzen wird der Dateiname angezeigt
* Fehler behoben: Beim Zusammenführen von Bereichen über die Symbolleiste wurden zusätzliche Informationen wie Stile nicht gespeichert

## v2.7.1 (2024/01/01)

* Große Sprachmodelle wie ChatGPT und Gemini können Terminologie verwenden, um Übersetzungsergebnisse zu verbessern [#issue546](https://github.com/xulihang/ImageTrans-docs/issues/546)
* Suchen und Ersetzen unterstützt das Springen per Doppelklick; zudem wurde eine Option zum Suchen in der aktuellen Datei hinzugefügt [#issue545](https://github.com/xulihang/ImageTrans-docs/issues/545)
* Suchen und Ersetzen zeigt Ergebnisse in der Reihenfolge der Dateinamen an [#issue545](https://github.com/xulihang/ImageTrans-docs/issues/545)

## v2.7.0 (2023/12/24)

* Neue Funktion zur Erkennung des Drehwinkels von Text [#issue543](https://github.com/xulihang/ImageTrans-docs/issues/543)
* Neuer Lokalisierungsmanager, mit dem die Benutzeroberfläche der Software selbst übersetzt werden kann [#issue544](https://github.com/xulihang/ImageTrans-docs/issues/544)
* Neue Einstellung zum Deaktivieren des Verhaltens, beim Anzeigen der Übersetzung den Originaltext zu verwenden, wenn keine Übersetzung vorhanden ist [#issue541](https://github.com/xulihang/ImageTrans-docs/issues/541)
* Fehler behoben: Durch Text außerhalb des Bildes verursachte Verschiebungen im Standardausgabemodus
* Weitere Verbesserungen der Benutzerfreundlichkeit

## v2.6.0 (2023/12/17)

* Die Klassifizierung langer Streifen-Textbereiche wurde verbessert [#issue536](https://github.com/xulihang/ImageTrans-docs/issues/536)
* Willkommensseite hinzugefügt
* Statusleiste zur Anzeige der Bildanzahl und der Nummer des aktuellen Bildes hinzugefügt [#issue535](https://github.com/xulihang/ImageTrans-docs/issues/535)
* Option zur Sortierung nach der horizontalen Koordinate hinzugefügt [#issue533](https://github.com/xulihang/ImageTrans-docs/issues/533)
* Menüeintrag zum Anpassen der Schriftgröße hinzugefügt [#issue529](https://github.com/xulihang/ImageTrans-docs/issues/529)
* Der Status von Oberflächen wie der Prozentanzeige wird gespeichert [#issue528](https://github.com/xulihang/ImageTrans-docs/issues/528)
* Fehler behoben: Vertikal zentrierte Textbereiche konnten im Exportmodus für große Bilder verschoben werden

## v2.5.7 (2023/12/03)

* Fehler behoben: Bei der OCR großer Bilder wurde die erzeugte Maske verkleinert
* Im Maskeneditor wurde eine Operation zum Entfernen der Maske außerhalb der Textbereiche hinzugefügt
* Neue Projekte für benutzerdefinierte Workflows: Bereiche ohne Originaltext in allen Bildern entfernen, Masken außerhalb der Rahmen in allen Bildern entfernen

## v2.5.6 (2023/12/02)

* Die Autokorrektur unterstützt reguläre Ausdrücke [#issue520](https://github.com/xulihang/ImageTrans-docs/issues/520)
* Fehler behoben: Versatz beim Ziehen von Textfeldern bei hoher DPI-Skalierung [#issue524](https://github.com/xulihang/ImageTrans-docs/issues/524)
* Ein Rechtsklick auf die Bildliste öffnet ein Menü zum Leeren der Bilder [#issue516](https://github.com/xulihang/ImageTrans-docs/issues/516)

## v2.5.5 (2023/11/25)

* Menüeinträge „Sortieren“ und „Maschinelle Übersetzung/Translation Memory einsetzen“ hinzugefügt
* Unterstützung für die Erzeugung von Textmasken per OCR

## v2.5.4 (2023/11/12)

* Option zum Erzeugen von Textmasken bei der Texterkennung in natürlichen Szenen hinzugefügt
* Die Rechtschreibprüfung unterstützt die Prüfung von Übersetzungen [#issue514](https://github.com/xulihang/ImageTrans-docs/issues/514)
* Stapeloperationen unterstützen Voreinstellungen [#issue515](https://github.com/xulihang/ImageTrans-docs/issues/515)
* Die Pfade der zuletzt verwendeten Projekte werden verkürzt angezeigt [#issue509](https://github.com/xulihang/ImageTrans-docs/issues/509)

## v2.5.3 (2023/10/09)

* Fehler behoben: Gedrehter Text war in im Modus für große Bilder exportierten Bildern verschoben [#issue499](https://github.com/xulihang/ImageTrans-docs/issues/499)
* Suchen und Ersetzen unterstützt Mehrfachauswahl [#issue498](https://github.com/xulihang/ImageTrans-docs/issues/498)
* Der integrierte Browser unterstützt die JavaScript-Interoperabilität, um Abfragen ohne Neuladen der Seite durchzuführen [#issue500](https://github.com/xulihang/ImageTrans-docs/issues/500)

## v2.5.2 (2023/10/01)

* Die Leistung des Maskeneditors wurde verbessert; sehr große Bilder können geladen werden [#issue494](https://github.com/xulihang/ImageTrans-docs/issues/494)
* Textnachbearbeitungen wie das Entfernen von Leerzeichen werden auf die OCR des gesamten Bildes angewendet

## v2.5.1 (2023/09/24)

* Neue Einstellung der vertikalen Text-Engine: Erstes Zeichen anheben [#issue490](https://github.com/xulihang/ImageTrans-docs/issues/490)
* Im Manager für übersetzte Bilder kann festgelegt werden, dass übersetzte Bilder nicht in der Bearbeitungsoberfläche angezeigt werden [#issue488](https://github.com/xulihang/ImageTrans-docs/issues/488)

## v2.5.0 (2023/09/16)

Die vertikale Text-Engine unterstützt die horizontale Zentrierung

## v2.4.1 (2023/09/16)

* Neue Projekteinstellung für das standardmäßige Bildausgabeformat
* Neuer Menüeintrag zum Löschen von Textstilen
* Neue Einstellung zur Verwendung nativer macOS-Menüs
* Anpassung an Macs mit ARM
* Fehler behoben: Einige Texte hatten im Exportmodus für große Bilder einen falschen Maßstab
* Weitere Fehlerkorrekturen

## v2.4.0 (2023/08/26)

* Fehler behoben: Beim Exportieren von Bildern wurden Bilder ohne Text mehrfach erzeugt
* Fehler behoben: Beim Wechseln des Bildes änderte sich der Fortschrittsbalken vor dem Bildwechsel
* Textkonturen werden auf den Text statt auf das übergeordnete Pane des Texts angewendet [#issue432](https://github.com/xulihang/ImageTrans-docs/issues/432#issuecomment-1692600202)
* In der Schriftsymbolleiste wurde die Option „Auf alle anwenden“ hinzugefügt [#issue432](https://github.com/xulihang/ImageTrans-docs/issues/432#issuecomment-1692600202)
* Änderungen im Schrift-Einstellungsfenster können auf alle ausgewählten Textfelder angewendet werden [#issue432](https://github.com/xulihang/ImageTrans-docs/issues/432#issuecomment-1694525969)
* Im Drag-and-Drop-Modus kann das Bild bei gedrückter Strg-Taste mit dem Mausrad gezoomt werden
* Termini unterstützen das Hinzufügen von Anmerkungen
* Neuer Terminologiemanager

## v2.3.0 (2023/08/20)

* Fehler behoben: Bei aktivierter automatischer Textgröße funktionierte die vertikale Zentrierung nicht
* Fehler behoben: Ereigniskonflikt im Drag-and-Drop-Modus
* Neue Funktion: integrierter Webbrowser [#issue483](https://github.com/xulihang/ImageTrans-docs/issues/483)

## v2.2.2 (2023/08/10)

* Fehler behoben: Bei einem Zeilenabstand größer als 1 wurde Text von der horizontalen Text-Engine abgeschnitten
* Menüeintrag zur Ausrichtung von Textfeldern hinzugefügt [#issue479](https://github.com/xulihang/ImageTrans-docs/issues/479)

## v2.2.1 (2023/08/05)

* Maskeneditor verbessert: Masken sind standardmäßig halbtransparent [#issue472](https://github.com/xulihang/ImageTrans-docs/issues/472)
* Die vertikale Engine unterstützt das Festlegen von Zeichen ohne Abstand [#issue473](https://github.com/xulihang/ImageTrans-docs/issues/473)
* Fehlerkorrekturen

## v2.2.0 (2023/07/30)

* Neues Baidu-Bildübersetzungs-Plugin [#issue470](https://github.com/xulihang/ImageTrans-docs/issues/470)
* OCR-Plugins unterstützen das Festlegen von Übersetzung, Schriftfarbe und weiteren Informationen von Textfeldern
* Vor der OCR des gesamten Bildes werden zu große Bilder skaliert und zu lange Bilder aufgeteilt
* Der Maskeneditor übernimmt automatisch die zuvor gewählten Farboptionen [#issue467](https://github.com/xulihang/ImageTrans-docs/issues/467)
* Fehler behoben: Das Deaktivieren des automatischen Zeilenumbruchs war unwirksam

## v2.1.0 (2023/07/09)

* Neue Option: Nach der Auswahl eines Bereichs in der Textbereichsliste wird zum entsprechenden Bild gesprungen [#issue455](https://github.com/xulihang/ImageTrans-docs/issues/455)
* In Suchen und Ersetzen wurde eine Option zur Groß-/Kleinschreibungsumwandlung hinzugefügt
* Vor dem Export endgültiger Bilder werden erforderliche Einstellungen automatisch angewendet [#issue461](https://github.com/xulihang/ImageTrans-docs/issues/461)
* Beim Anpassen von Textbereichen kann durch Gedrückthalten der Umschalttaste das Seitenverhältnis beibehalten werden [#issue462](https://github.com/xulihang/ImageTrans-docs/issues/462)
* Neue Symbolleiste für Originalbilder zum Anpassen der Deckkraft der Überlagerung und zum Ausrichten der Positionen von Originaltext und Übersetzung [#issue458](https://github.com/xulihang/ImageTrans-docs/issues/458)
* Fehler behoben: Das PS-Skript konnte keine Konturen verarbeiten [b079d40](https://github.com/xulihang/ImageTrans_PhotoshopScripts/commit/b079d40ffdf8188de0c05eeaa64f742b28e2eb00)
* Fehler behoben: Drift beim manuellen Anpassen von Position und Größe der Übersetzung oder beim Ändern des Anzeigemaßstabs [#issue459](https://github.com/xulihang/ImageTrans-docs/issues/459)
* Fehler behoben: Konflikt beim Tastenkürzel zum Löschen [#issue455](https://github.com/xulihang/ImageTrans-docs/issues/455)
* Fehler behoben: Beim Bearbeiten der Übersetzung funktionierte die vertikale Zentrierung der vertikalen Text-Engine nicht [#issue458](https://github.com/xulihang/ImageTrans-docs/issues/458)

## v2.0.0 (2023/07/02)

* ChatGPT-Plugin aktualisiert, um das Festlegen des Modells zu unterstützen [#issue430](https://github.com/xulihang/ImageTrans-docs/issues/430)
* Der nicht präzise Modus unterstützt die Überlagerung gedrehten Texts
* Die Einheit der Textmaskenerzeugung für gedrehte Bereiche wurde auf das entsprechende umschließende Rechteck umgestellt
* Beim Wechsel zur Sortiersymbolleiste kann die Nummer eines Textbereichs per Doppelklick manuell festgelegt werden [#issue445](https://github.com/xulihang/ImageTrans-docs/issues/445)
* In den Projekteinstellungen wurde eine neue Sortiergrundlage hinzugefügt: Sortierung nach Abstand zum Ursprung oder nach vertikaler Koordinate [#issue445](https://github.com/xulihang/ImageTrans-docs/issues/445)
* Bei der Bestimmung überlappender Bereiche wird die Fläche nicht mehr berücksichtigt [#issue447](https://github.com/xulihang/ImageTrans-docs/issues/447#issuecomment-1616323053)
* Der Manager für übersetzte Bilder ermöglicht die schnelle Auswahl anhand von Bedingungen [#issue447](https://github.com/xulihang/ImageTrans-docs/issues/447#issuecomment-1616323053)
* Textbereiche außerhalb der Bildgrenzen werden automatisch in das Bild zurückgeführt [#issue452](https://github.com/xulihang/ImageTrans-docs/issues/452)
* Fehler behoben: Die bei der Texterkennung in natürlichen Szenen erzeugte Maske wurde skaliert

## v1.9.8 (2023/05/21)

* ChatGPT-Plugin aktualisiert, um die Stapelübersetzung nach Bildern zu unterstützen [#issue404](https://github.com/xulihang/ImageTrans-docs/issues/404)
* Beim Rückimport der Übersetzung aus TXT darf die Übersetzung leer sein
* Beim Rückimport der Übersetzung aus TXT wird bei Fehlern angezeigt, welche Zeile fehlerhaft ist [#issue412](https://github.com/xulihang/ImageTrans-docs/issues/412)
* Neues Maskenerzeugungs-Plugin: eingebettete Rechtecke [#issue413](https://github.com/xulihang/ImageTrans-docs/issues/413)

## v1.9.7 (2023/05/13)

* Fehler behoben: Bei aktivierter automatischer Speicherung von Originaltext und Übersetzung leerte das Löschen der Übersetzungsposition den Text [#issue408](https://github.com/xulihang/ImageTrans-docs/issues/408)
* In der Terminologieliste wurde eine Löschfunktion per Rechtsklick hinzugefügt

## v1.9.6 (2023/05/07)

* Fehler behoben: Problem bei der Übereinstimmung regulärer Ausdrücke mit mehrzeiligem Text in Suchen und Ersetzen [#issue402](https://github.com/xulihang/ImageTrans-docs/issues/402)
* Unterstützung für den Export von TMX-Translation-Memory-Dateien
* ChatGPT-Plugin aktualisiert, um das Festlegen von Drittanbieterdiensten zu unterstützen [#issue401](https://github.com/xulihang/ImageTrans-docs/issues/401)

## v1.9.5 (2023/05/01)

* Das Photoshop-Skript in der JavaScript-Version wurde aktualisiert, um Rich-Text zu unterstützen
* Die Vorübersetzung unterstützt den Aufruf des Translation Memory für exakte Übereinstimmungen
* Neuer Kontextmenüeintrag: Übersetzungsposition löschen [#issue393](https://github.com/xulihang/ImageTrans-docs/issues/393)
* Die Designeinstellungen werden auf alle Fenster angewendet
* Die Benutzerfreundlichkeit der Schriftstileinstellungen wurde verbessert

## v1.9.4 (2023/04/05)

* Fehler behoben: Falsche Höhe der perspektivischen Transformation bei künstlicher Kursivschrift, wenn ein Zeilenabstand festgelegt war
* Für künstlichen Fettdruck und künstliche Kursivschrift kann der Grad der Fettung und Neigung festgelegt werden

## v1.9.3 (2023/04/02)

* Unterstützung für den Export als PDF [#issue366](https://github.com/xulihang/ImageTrans-docs/issues/366)
* Neue Maschinenübersetzungs-Plugins: [ChatGPT](https://github.com/xulihang/ImageTrans-docs/issues/375), [Yandex](https://github.com/xulihang/ImageTrans-docs/issues/386)
* Neuer Rich-Text-Code-Editor [#issue390](https://github.com/xulihang/ImageTrans-docs/issues/390)
* Rich-Text unterstützt künstlichen Fettdruck, künstliche Kursivschrift sowie das Festlegen von Schriftname und Schriftgröße [#issue389](https://github.com/xulihang/ImageTrans-docs/issues/389)
* Neue Einstellung der vertikalen Text-Engine: Zeichenersetzung [#issue388](https://github.com/xulihang/ImageTrans-docs/issues/388)
* Bei ausgewählten mehreren Textfeldern werden keine Operationen für einzelne Textfelder ausgeführt

## v1.9.2 (2023/03/05)

* Fehler behoben: Beim Zusammenführen von Bereichen wurden Übersetzungen nicht zusammengeführt
* Projekteinstellung hinzugefügt, um Textmasken- und Bild-ohne-Text-Erzeugung nach Textbereichen auszuführen
* Unterstützung für das Speichern der Textmaskenergebnisse der Texterkennung in natürlichen Szenen [#issue370](https://github.com/xulihang/ImageTrans-docs/issues/370)

## v1.9.1 (2023/02/19)

* Fehler behoben: Bei der Berechnung der Höhe horizontalen Texts wurde BBCode nicht ignoriert
* Fehler behoben: Bei auf Großbuchstaben gesetztem Textstil war BBCode unwirksam
* Das standardmäßige JRE wurde auf Liberica JRE 11 umgestellt

## v1.9.0 (2023/02/12)

* Unterstützung für Rich-Text (auf BBCode-Basis) [#issue194](https://github.com/xulihang/ImageTrans-docs/issues/194#issuecomment-1426964710)
* Fehler behoben: Probleme im Zusammenhang mit Netzwerkanfragen, Mehrfachauswahl mit Strg und der Konfidenz von Textbereichen

## v1.8.5 (2023/01/08)

* Neues OCR-Plugin: die integrierte OCR von macOS [#issue341](https://github.com/xulihang/ImageTrans-docs/issues/341)
* Unterstützung für das Einfügen von Bildern aus Dateipfaden
* Mithilfe des Befehls file wird geprüft, ob Bilder im WebP-Format vorliegen [#issue338](https://github.com/xulihang/ImageTrans-docs/issues/338)
* Fehler behoben: Das Laden von Bildern über Data-URL-Links schlug fehl
* Fehler behoben: Bei einer als Standard festgelegten Bildreparaturmethode von Drittanbietern wurde das Graustufenbild der Textmaske statt des Originalbildes übergeben
* Option hinzugefügt, ob die Autokorrektur während der Eingabe erfolgt


## v1.8.4 (2022/11/26)

* Unterstützung für benutzerdefinierte Tastenkürzel [#issue323](https://github.com/xulihang/ImageTrans-docs/issues/323)
* Verbesserungen der Benutzeroberfläche

## v1.8.3 (2022/11/13)

* Neue Funktion: Automatische Zuordnung voreingestellter Textstile anhand der erkannten Textfarbe [#issue322](https://github.com/xulihang/ImageTrans-docs/issues/322)
* Screenshots des Bildschirmlesers werden im Maßstab 100 % angezeigt

## v1.8.2 (2022/10/29)

* Im Layoutmodus werden beim Ziehen von Textfeldern deren Rahmen ausgeblendet (das Ausblenden kann in den Einstellungen deaktiviert werden) [#issue314](https://github.com/xulihang/ImageTrans-docs/issues/314)
* Neue Projekteinstellung: Unterordner lesen (standardmäßig aktiviert) [#issue304](https://github.com/xulihang/ImageTrans-docs/issues/304)


## v1.8.1 (2022/10/05)

* Fehler behoben: Das Entfernen von Text aus PNG-Bildern mit einer Kanalzahl ungleich 4 schlug fehl
* Fehler behoben: Logik des Kontrollkästchens „Überlagerung hinzufügen“

## v1.8.0 (2022/10/02)

* Unterstützung für den Export von Bildern als PNG [#issue295](https://github.com/xulihang/ImageTrans-docs/issues/295)
* Wenn das Bildformat PNG ist, werden auch das Bild ohne Text und das endgültige Bild im PNG-Format gespeichert. Bei anderen Formaten wird standardmäßig JPG verwendet [#issue295](https://github.com/xulihang/ImageTrans-docs/issues/295)
* In den Projekteinstellungen wurde eine Einstellung für die Standardgröße von Textfeldern hinzugefügt [#issue290](https://github.com/xulihang/ImageTrans-docs/issues/290)
* Unterstützung für das Anpassen der Position mehrerer Textbereiche per Tastenkürzel [#issue285](https://github.com/xulihang/ImageTrans-docs/issues/285)


## v1.7.11 (2022/09/18)

Ein in v1.7.8 eingeführter Fehler beim Datenexport wurde behoben [#issue279](https://github.com/xulihang/ImageTrans-docs/issues/279)

## v1.7.10 (2022/09/18)

* Unter macOS werden für Tastenkürzel bevorzugt die Command-Taste verwendet [#issue277](https://github.com/xulihang/ImageTrans-docs/issues/277)
* Die Benutzerfreundlichkeit des Maskeneditors wurde verbessert [#issue261](https://github.com/xulihang/ImageTrans-docs/issues/261)
* In den Projekteinstellungen wurden benutzerdefinierte Einstellungen der vertikalen Text-Engine hinzugefügt [#issue271](https://github.com/xulihang/ImageTrans-docs/issues/271#issuecomment-1246208024)

## v1.7.9 (2022/09/12)

Das Verhalten der vertikalen Engine bei unterschiedlichen Schriften wurde verbessert [#issue271](https://github.com/xulihang/ImageTrans-docs/issues/271)

## v1.7.8 (2022/09/11)

* Fehler behoben: Bei zu großer Bildbreite schlug das Speichern im Textmaskeneditor fehl [#issue266](https://github.com/xulihang/ImageTrans-docs/issues/266)
* Die Schriftstileinstellungen wurden vervollständigt [#issue256](https://github.com/xulihang/ImageTrans-docs/issues/256)
* Das Verhalten des Pinsels im Textmaskeneditor wurde vervollständigt [#issue261](https://github.com/xulihang/ImageTrans-docs/issues/261)
* Neue Schriftstileinstellung: Zeichenabstand (nur für vertikalen Text) [#issue224](https://github.com/xulihang/ImageTrans-docs/issues/224)

## v1.7.7 (2022/08/27)

* Durch perspektivische Transformationen werden Bilder gedrehter Bereiche genauer erfasst
* Weitere Fehlerkorrekturen [#issue246](https://github.com/xulihang/ImageTrans-docs/issues/246) [#issue248](https://github.com/xulihang/ImageTrans-docs/issues/248)

## v1.7.6 (2022/08/20)

Die zuletzt im Projekt verwendete OCR-Engine und Sprache werden automatisch übernommen [#issue245](https://github.com/xulihang/ImageTrans-docs/issues/245)

## v1.7.5 (2022/08/13)

Horizontaler Text unterstützt das Festlegen des Zeilenabstands [#issue244](https://github.com/xulihang/ImageTrans-docs/issues/244)

## v1.7.4 (2022/07/24)

* Die vertikale Engine unterstützt die Anordnung von Text von links nach rechts [#issue242](https://github.com/xulihang/ImageTrans-docs/issues/242)
* Neue Einstellung: Ob OCR-Ergebnisse automatisch in die Zwischenablage kopiert werden [#issue169](https://github.com/xulihang/ImageTrans-docs/issues/169)

## v1.7.3 (2022/07/03)

* Der Pinsel-Bearbeitungsmodus des Maskeneditors unterstützt das Anpassen des Radius
* Fehler behoben: Der Export der Webseite schlug fehl, wenn keine Panels erkannt wurden
* Das Photoshop-Skript in der JS-Version wurde aktualisiert, um PSB-Dateien zu unterstützen

## v1.7.2 (2022/06/03)

Neue Einstellung: temporärer Ordner für Netzwerkanfragen, um das bei einigen Benutzern auftretende Problem „Zugriff verweigert“ zu lösen [#issue218](https://github.com/xulihang/ImageTrans-docs/issues/218)

## v1.7.1 (2022/05/29)

* Verbesserte Benutzerfreundlichkeit beim Ändern von Schriften [#issue212](https://github.com/xulihang/ImageTrans-docs/issues/212)
* Optimierte Tastenkürzel [#issue205](https://github.com/xulihang/ImageTrans-docs/issues/205#issuecomment-1135449173)
* Neue Aktualisierungsfunktion per Rechtsklick, mit der sich das Problem von Fehlermeldungen beim zu schnellen Wechseln von Bildern im Übersetzungsmodus umgehen lässt [#issue211](https://github.com/xulihang/ImageTrans-docs/issues/211)
* Neues Bildreparatur-Plugin: Lama Inpainting [#issue216](https://github.com/xulihang/ImageTrans-docs/issues/216)


## v1.7.0 (2022/05/22)

* Neuer Manager für Originalbilder ohne Text und reine Textbilder [#issue199](https://github.com/xulihang/ImageTrans-docs/issues/199)
* Die Autokorrektur kann für die OCR verwendet werden [#issue199](https://github.com/xulihang/ImageTrans-docs/issues/199#issuecomment-1126957556)
* Fehler behoben: Der XLIFF-Import schlug fehl [#issue207](https://github.com/xulihang/ImageTrans-docs/issues/207)
* Unterstützung für den Rückimport der Übersetzung aus tabulatorgetrennten TXT-Dateien [#issue207](https://github.com/xulihang/ImageTrans-docs/issues/207)
* Der Hintergrund von Schriftstilen kann auf transparent gesetzt werden [#issue208](https://github.com/xulihang/ImageTrans-docs/issues/208)
* Weitere Fehlerkorrekturen und Verbesserungen [#issue203](https://github.com/xulihang/ImageTrans-docs/issues/203)


## v1.6.5 (2022/05/01)

* Für Fälle wie Japanisch nach Englisch, bei denen der Originaltext vertikal und die Übersetzung horizontal ist, wurde eine Funktion hinzugefügt, die Position und Größe der Textbereiche automatisch an die horizontale Darstellung anpasst [#issue190](https://github.com/xulihang/ImageTrans-docs/issues/190#issuecomment-1107365256)
* Unter dem Textbearbeitungsbereich wurde eine Schaltfläche zum Vorlesen hinzugefügt (kann ausgeblendet werden) [#issue191](https://github.com/xulihang/ImageTrans-docs/issues/191)
* Standardmäßige Textmasken- und Bildreparaturmethoden können festgelegt werden [#issue192](https://github.com/xulihang/ImageTrans-docs/issues/192#issuecomment-1114153046)
* Textmaskenerzeugung und Bildreparatur werden nach Textbereichen aufgerufen, um die Verarbeitungsgeschwindigkeit zu erhöhen
* Weitere kleine Verbesserungen

## v1.6.4 (2022/04/17)

* Fehler behoben: Unter macOS war das Öffnen des Projektordners unwirksam und die Mausgeste zum Drehen zu empfindlich
* Schriftstileinstellungen unterstützen die Mehrfachauswahl und werden sofort wirksam [#issue185](https://github.com/xulihang/ImageTrans-docs/issues/185)
* Die Darstellung von Buchstaben und Satzzeichen in der vertikalen Text-Engine wurde verbessert [#issue186](https://github.com/xulihang/ImageTrans-docs/issues/186)
* Fehler behoben: Bei zu großer Schriftgröße wurde Text in der vertikalen Text-Engine abgeschnitten

## v1.6.3 (2022/04/04)

* Unterstützung für die Zahlungsmethode Mianbaoduo
* Neue kostenlose Version von DeepL ([Anleitung](https://github.com/xulihang/ImageTrans_plugins/tree/master/deeplfreeMT))

## v1.6.2 (2022/03/27)

* Neue Funktion zum Export als Webseite (unterstützt das Lesen nach Panels und Vorlesen)
* Der Server kann nun als HTTP-Server dienen, um exportierte Webseiten im lokalen Netzwerk zu betrachten
* Vertikale Text-Engine: Unterstützung für Zeilenabstandseinstellungen, Verbesserung von Geschwindigkeit und Darstellung von Satzzeichen
* Neue Operation zum Hinzufügen eines Textfelds für das gesamte Bild
* Der Name des Ausgabeordners kann festgelegt werden [#issue170](https://github.com/xulihang/ImageTrans-docs/issues/170#issuecomment-1058741066)
* Nach Abschluss einer Operation eines benutzerdefinierten Workflows kann ein Hinweiston abgespielt werden [#issue171](https://github.com/xulihang/ImageTrans-docs/issues/171)
* Die Schriftgröße in der Schriftsymbolleiste kann nun direkt eingegeben werden [#issue176](https://github.com/xulihang/ImageTrans-docs/issues/176)

## v1.6.1 (2022/02/26)

* Textfelder können mit der Maus gedreht werden. Der Drehwinkel kann zur Ausrichtung von Textbildern genutzt werden, um die Erkennungsrate zu erhöhen [#issue157](https://github.com/xulihang/ImageTrans-docs/issues/157)
* Für die Stapelverarbeitung von Panel- und Farberkennung wurden Fortschrittsbalken ergänzt [#issue153](https://github.com/xulihang/ImageTrans-docs/issues/153)
* Bei der TTS-Sprachausgabe wurde eine Einstellung für die Sprechgeschwindigkeit hinzugefügt; Originaltext und Übersetzung können gleichzeitig vorgelesen werden [#issue152](https://github.com/xulihang/ImageTrans-docs/issues/152)
* Fehler mit dem Textindex im AU3-Photoshop-Skript wurde behoben [#issue160](https://github.com/xulihang/ImageTrans-docs/issues/160)

## v1.6.0 (2022/02/06)

* Neue Comic-Panel-Erkennung, die zur Sortierung von Textbereichen und zum Lesen nach Panels auf Mobilgeräten genutzt werden kann [#issue147](https://github.com/xulihang/ImageTrans-docs/issues/147)
* Neuer Kontextmenüeintrag zum Anzeigen maschineller Übersetzungen, mit dem die Übersetzung des zusammengesetzten Texts mehrerer Textbereiche angezeigt werden kann, hauptsächlich für Fälle, in denen ein Satz auf verschiedene Sprechblasen aufgeteilt ist [#issue118](https://github.com/xulihang/ImageTrans-docs/issues/118)
* Weitere Leistungsverbesserungen und Fehlerkorrekturen

## v1.5.5 (2022/01/31)

* Die Sprechblasenerkennung unterstützt lange Webtoons [#issue138](https://github.com/xulihang/ImageTrans-docs/issues/138)
* Die automatische Schriftgrößenanpassung unterstützt das Festlegen einer maximalen Schriftgröße [#issue146](https://github.com/xulihang/ImageTrans-docs/issues/146)
* Der Bildschirmleser überwacht nun die Zwischenablage [#issue145](https://github.com/xulihang/ImageTrans-docs/issues/145)
* Der stille Übersetzer speichert die Pfadinformationen der Originaldateien in den Übersetzungsergebnissen [#issue144](https://github.com/xulihang/ImageTrans-docs/issues/144)
* Neues Maschinenübersetzungs-Plugin: DeepL [#issue15](https://github.com/xulihang/ImageTrans-docs/issues/15)
* Die Operation zum Erweitern von Bereichen prüft die Bildabmessungen, um ein Überschreiten der Bildgrenzen zu vermeiden
* Beim Wechseln des Bildes wird die Bildlaufleiste nach oben bewegt

## v1.5.4 (2022/01/22)

* Ein Lokalisierungsproblem auf der Seite der Einstellungen wurde behoben [#issue141](https://github.com/xulihang/ImageTrans-docs/issues/141)
* Eine Option zum Skalieren von Bildern vor der Sprechblasenerkennung wurde hinzugefügt (standardmäßig auf 1024 Pixel) [#issue137](https://github.com/xulihang/ImageTrans-docs/issues/137)

## v1.5.3 (2022/01/16)

* OpenCV auf 4.5.5 aktualisiert, um Scaled-Yolo V4 zu unterstützen [#issue129](https://github.com/xulihang/ImageTrans-docs/issues/129)
* Unterstützung für den Export von Textbereichen und den Rückimport von OCR-Ergebnissen für jedes Bild [#issue124](https://github.com/xulihang/ImageTrans-docs/issues/124)
* Im Textlöschmodus mit einfarbiger Überdeckung kann der Hintergrund als abgerundetes Rechteck festgelegt werden [#issue123](https://github.com/xulihang/ImageTrans-docs/issues/123)
* Das inkonsistente Verhalten vertikal zentrierten Texts bei unterschiedlichen Maßstäben wurde behoben [#issue122](https://github.com/xulihang/ImageTrans-docs/issues/122)
* Die Autokorrektur kann auch für die maschinelle Übersetzung verwendet werden [#issue133](https://github.com/xulihang/ImageTrans-docs/issues/133)
* Weitere Optimierungen von Oberfläche und Leistung

## v1.5.2 (2021/12/26)

* Text-zu-Sprache-Funktion (TTS) hinzugefügt
* Textbereiche können direkt mit der Entf-Taste gelöscht werden
* Die heuristische Texterkennung unterstützt das Festlegen einer Zeitüberschreitung
* Weitere Fehlerkorrekturen

## v1.5.1 (2021/12/05)

* Das Verhalten des Bildschirmlesers wurde vervollständigt [issue 110](https://github.com/xulihang/ImageTrans-docs/issues/110)
* Das Verhalten des Layoutmodus bei rechtsbündigem Text wurde vervollständigt

## v1.5.0 (2021/11/14)

* Unterstützung für das manuelle Laden von Schriftdateien [issue 100](https://github.com/xulihang/ImageTrans-docs/issues/100)
* Neuer Kompatibilitätseingabe-Assistent auf Basis von Swing JTextArea, um vorübergehend das Problem der tibetischen Eingabe in JavaFX zu lösen [issue 99](https://github.com/xulihang/ImageTrans-docs/issues/99)
* Neue Projekteinstellung: Schrift im Bearbeitungsbereich
* Weitere Fehlerkorrekturen

## v1.4.8 (2021/10/30)

* Das Verhalten von Textfeldern bei 100 % und anderen Anzeigemaßstäben wurde vereinheitlicht [issue 94](https://github.com/xulihang/ImageTrans-docs/issues/94)
* Neues OCR-Plugin: Google Drive OCR [issue 91](https://github.com/xulihang/ImageTrans-docs/issues/91)
* Ein Problem wurde korrigiert, bei dem Google OCR Text nicht korrekt erfasste

## v1.4.7 (2021/10/17)

* Die heuristische Texterkennung wird in einem Thread ausgeführt, um ein Nichtreagieren des Programms zu vermeiden
* Das OCR-Verhalten von Bildschirmleser und Hauptprogramm wurde vereinheitlicht
* Der standardmäßige Anzeigemaßstab wurde auf 100 % gesetzt

## v1.4.6 (2021/10/06)

* Neuer Tesseract-Modus zur Erkennung von Textzeilen. ImageTrans lokalisiert zunächst die Textzeilen, anschließend erkennt Tesseract jede Zeile, was die Genauigkeit deutlich erhöht ([issue87](https://github.com/xulihang/ImageTrans-docs/issues/87))
* Neue Option für automatische Großschreibung
* Der Bildschirmleser bietet nun eine Option für automatische maschinelle Übersetzung
* Weitere Fehlerkorrekturen

## v1.4.5 (2021/09/25)

* Neuer Assistent für stille Übersetzung
* Neue projektionsbasierte Methode zum Entfernen von Furigana
* OpenCV auf 4.5.3 aktualisiert; die integrierten Textlokalisierungs- und -erkennungsfunktionen von OpenCV werden unterstützt ([Plugin-Adresse](https://github.com/xulihang/ImageTrans-docs/issues/85)).
* Neues japanisches OCR-Plugin: [読取革命](https://github.com/xulihang/ImageTrans-docs/issues/83).
* Weitere Fehlerkorrekturen

## v1.4.4 (2021/08/07)

* Fehler behoben: Falsche Breite und Höhe gedrehten Texts beim Erzeugen hochauflösender Übersetzungsbilder
* Fehler behoben: Beim vertikalen Textsatz wurde nach der automatischen Anpassung zu kleiner Bereiche die Textposition nicht angepasst
* Neuer Menüeintrag: Projektordner öffnen

## v1.4.3 (2021/08/05)

* Fehler behoben: Beim Wechsel zur Schriftsymbolleiste wurden die Schrifteinstellungen des aktuellen Textbereichs nicht aktualisiert
* Fehler behoben: Beim Wechsel des Textbereichs wurde der Status der Schaltfläche für vertikale Zentrierung in der Schriftsymbolleiste nicht aktualisiert
* Die Wirkung der vertikalen Zentrierung wurde vervollständigt
* Weitere Verbesserungen

## v1.4.2 (2021/07/25)

* Fehler behoben: Der Export von Bildern mit hoher Auflösung (Breite oder Höhe > 8000) schlug fehl
* Vertikal angeordneter Text unterstützt die automatische Anpassung der Schriftgröße
* Die Anpassungsoperationen für vertikal angeordnete Textbereiche wurden an die Änderung in Version 1.4.1 (rechtsbündige Textanordnung) angepasst: Ein Klick auf die linke Seite des Bereichs ändert die Größe, ein Klick auf die rechte Seite die Position
* Weitere Verbesserungen


## v1.4.1 (2021/07/18)

* Option für vertikal zentrierten Text hinzugefügt ([#issue72](https://github.com/xulihang/ImageTrans-docs/issues/72))
* Tastenkürzel zum Löschen von Textbereichen hinzugefügt ([#issue71](https://github.com/xulihang/ImageTrans-docs/issues/71))
* Wenn keine Textmaske gespeichert ist und keine Textbereiche hinzugefügt, gelöscht oder angepasst wurden, wird das Bild ohne Text nicht neu erzeugt
* Vietnamesisch, Hindi und Indonesisch wurden zur Standardsprachliste hinzugefügt (in früheren Versionen mussten Sprachcodes manuell eingegeben werden) ([#issue61](https://github.com/xulihang/ImageTrans-docs/issues/61))
* Vertikaler Text wird standardmäßig von rechts beginnend angeordnet
* Weitere Verbesserungen

## v1.4.0 (2021/06/14)

* Operation „Speichern unter“ hinzugefügt
* Navigationsmenü hinzugefügt
* Manager für übersetzte Bilder hinzugefügt; als übersetzt markierte Bilder werden bei Stapeloperationen übersprungen ([#issue59](https://github.com/xulihang/ImageTrans-docs/issues/59))
* Der Editor für Originaltext und Übersetzung kann zum aktiven Fenster werden
* Zur Anpassung des Bildanzeigemaßstabs wird ein Spinner verwendet
* Beim Öffnen eines Projekts wird das bereits geöffnete Projekt automatisch geschlossen ([#issue39](https://github.com/xulihang/ImageTrans-docs/issues/39))


## v1.3.7 (2021/05/04)

* Beim Wechsel der Symbolleiste bleibt der Status erhalten ([#issue47](https://github.com/xulihang/ImageTrans-docs/issues/47))
* Ein Problem wurde behoben, bei dem exportierte Daten die Übersetzung nicht enthielten ([#issue45](https://github.com/xulihang/ImageTrans-docs/issues/45))

## v1.3.6 (2021/05/02)

* Löschen per Rechtsklick und Invertieren der Konfidenz wirken auf alle ausgewählten Textbereiche
* Bei gedrückter Strg-Taste können mehrere Textbereiche durch einfaches Anklicken ausgewählt werden
* Im Kontextmenü von Textbereichen wurde eine Funktion zum Entfernen von Originaltext und Übersetzung hinzugefügt
* Weitere Verbesserungen

## v1.3.5 Update2 (2021/04/26)

* Wird das Importieren von Bildern ohne geöffnetes Projekt ausgeführt, erscheint ein freundlicher Hinweis
* Unterstützung für die Dateiendung JPEG hinzugefügt

## v1.3.5 Update (2021/04/06)

* Beim Öffnen früherer Projekte erscheint die Sprachauswahl nicht mehr
* Der Tooltip des Bildselektors zeigt den aktuellen Dateinamen

## v1.3.5 (2021/03/30)

* Die Funktion zur Übersetzung mehrerer Sätze in einer einzigen Anfrage wurde vervollständigt; auch Baidu unterstützt nun die Stapelübersetzung
* Zur heuristischen Lokalisierungsmethode wurde eine automatische Parameteranpassung hinzugefügt (experimentell)
* Die Bedienung der Schriftstile wurde vervollständigt; Stile können verschoben und aus anderen Projekten importiert werden
* Beim Erstellen eines Projekts wird das Festlegen des Sprachpaars verlangt
* Der Schriftfarbenselektor wurde vereinheitlicht
* Die Rückgängig-Funktion wurde verbessert

## v1.3.4 (2021/03/27)

Auf GitHub gemeldete Probleme wurden behoben: [#16](https://github.com/xulihang/ImageTrans-docs/issues/16), [#19](https://github.com/xulihang/ImageTrans-docs/issues/19), [#22](https://github.com/xulihang/ImageTrans-docs/issues/22), [#23](https://github.com/xulihang/ImageTrans-docs/issues/23)

## v1.3.3 (2021/03/23)

* [ImageTrans_OCR](https://github.com/xulihang/ImageTrans_OCR) wurde aktualisiert und [ChineseOCR](https://github.com/ouyanghuiyu/chineseocr_lite) hinzugefügt; die Kombination verschiedener Textlokalisierungs- und -erkennungsmethoden wird unterstützt, und das entsprechende Plugin wurde aktualisiert
* Fehler behoben: Bei der Stapel-OCR überschritt der Index die Anzahl der Textfelder. [Zugehöriges Issue](https://github.com/xulihang/ImageTrans-docs/issues/6)
* Einstellung für das OCR-Intervall hinzugefügt

## v1.3.2 (2021/03/07)

* Bei der OCR eines Textbereichs wird ein zu kleines Bild vergrößert
* Bisher nicht lokalisierte Layouts wurden lokalisiert
* Neues OCR-Plugin: CRAFT+CRNN. Es basiert auf dem neuen [ImageTrans_OCR-Projekt](https://github.com/xulihang/ImageTrans_OCR). Dieses Projekt soll einen Dienst bereitstellen, der derzeit gut anpassbare Offline-OCR mit guter Erkennungsgeschwindigkeit und -genauigkeit bündelt.

## v1.3.1 (2021/02/28)

* Neues OCR-Plugin: Clova OCR von Naver.
* Unterstützung für das schnelle Zusammenführen oder Löschen von Bereichen im Rahmenauswahlmodus
* Option für die OCR nach der Rahmenauswahl hinzugefügt
* Tastenkürzel für Operationen an Textbereichen hinzugefügt (Verschieben und OCR)
* Offline-Sprechblasenerkennung auf Basis des DNN-Moduls von OpenCV; Modelle von [DarkNet](https://zhuanlan.zhihu.com/p/346021510) oder der [TensorFlow Object Detection API](https://github.com/opencv/opencv/wiki/TensorFlow-Object-Detection-API) können verwendet werden. Die Modelldatei, die Modellkonfigurationsdatei und model.json müssen im Stammverzeichnis der Software abgelegt werden ([Beispiel](/assets/model.json)).
* Der Texteditor unterstützt die über- und untereinander angezeigte Darstellung von Originaltext und Übersetzung


## v1.3.0 (2021/02/10)

* Funktion für benutzerdefinierte Workflows hinzugefügt, mit der Stapelverarbeitungsabläufe selbst definiert werden können
* Unterstützung für den PDF-Import. PDF-Dateien werden als Bilder ausgegeben. Wenn der Text der PDF-Datei kopierbar ist, wird auch der Text importiert

## v1.2.11

* Fehler behoben: Die Position der Übersetzungsbereiche wurde nicht korrekt gespeichert
* Fehler behoben: Speicherpfad der Photoshop-Skriptdatei
* Der Maskeneditor unterstützt die Erzeugung von Masken mit einer festgelegten Farbe und kann Masken halbtransparent anzeigen
* Unterstützung für den gleichzeitigen Abruf der Übersetzung mehrerer Sätze über Caiyun Xiaoyi, was die Geschwindigkeit der maschinellen Übersetzung deutlich erhöht
* Die Vorübersetzung mit maschineller Übersetzung unterstützt das Festlegen eines Anfrageintervalls, um zu vermeiden, dass zu viele Anfragen pro Zeiteinheit die Übersetzung verhindern (Anbieter maschineller Übersetzung legen üblicherweise eine QPS fest)

## v1.2.10

* Neues OCR-Plugin: ABBYY Cloud
* Unterstützung für die Rechtschreibprüfung von OCR-Ergebnissen mit LanguageTool


## v1.2.9

* Ist die Leserichtung von rechts nach links, werden Textfelder vor der Sortierung gespiegelt
* Im Textentferner wurde eine Option für den Radius der Bildreparatur hinzugefügt
* Designs hinzugefügt. Derzeit sind ein dunkles und ein grünes Design verfügbar.
* Einige OCR- und Maschinenübersetzungsdienste verwenden standardmäßig meinen persönlichen API-Schlüssel; bei der maschinellen Übersetzung sind dies Baidu, Xiaoniu und Tencent, bei der OCR OCRSPACE, Azure und Baidu.

## v1.2.8

* Rückgängig-Funktion hinzugefügt
* TextFlow wird als Standard-Textrenderer verwendet. Texte werden nicht mehr mit Auslassungspunkten abgeschnitten.
* Das Ändern des Anzeigemaßstabs verändert Schrift und Layout nicht mehr
* Weitere Verbesserungen

## v1.2.7

* Unterstützung für das gleichzeitige Ausführen mehrerer Tesseract-Instanzen zur Beschleunigung der OCR
* Validierungsdatensätze werden 7 Tage aufbewahrt
* Sogou OCR unterstützt die Leserichtung von rechts nach links
* Präzise Version der Baidu-OCR hinzugefügt
* Fehler in Suchen und Ersetzen behoben (fehlerhaftes Springen zu Abschnitten und fehlgeschlagenes Ersetzen aufgrund der Lokalisierung)

## v1.2.6

* Über Links heruntergeladene Bilder im WebP-Format werden in JPG umgewandelt (mit OpenCV)
* Unterstützung für das Entfernen von Furigana in japanischen Comics für bessere OCR-Ergebnisse
* Vertikal angeordnetes Japanisch wird besser in horizontal ausgerichtete Bilder umgewandelt (Drehung und zentrierte Platzierung von Inhalten wie „—“)
* Unterstützung für die Operation zum Vereinheitlichen von Schriftstilen
* Durch OCR ermittelte Textbereiche werden ebenfalls erweitert

## v1.2.5

* Ein Problem wurde behoben, bei dem die Position von Übersetzungs-Textbereichen von der Position der Originalbereiche überschrieben wurde
* Der Maskeneditor unterstützt den Pinselmodus
* Die Schrifteinstellungen unterstützen das Festlegen von Großbuchstaben
* In der Texterkennung wurde eine Einstellung für den minimalen Überlappungsprozentsatz von Breite/Höhe hinzugefügt
* Ein Problem wurde behoben, bei dem überlappende Textbereiche nicht hinzugefügt wurden
* Das Photoshop-Skript unterstützt das Festlegen von Stilen wie Fettdruck, Kursivschrift, Großschreibung und Drehung

## v1.2.4

* Unterstützung für die ImageTrans Chrome-Erweiterung (das Plugin) hinzugefügt. Eine Anleitung finden Sie [hier](https://github.com/xulihang/ImageTrans_chrome_extension).
* Beim Import von Bildern werden Textmasken, Bilder ohne Text und exportierte endgültige Bilder nicht importiert
* Fehler behoben: Die Funktion zur Aufzeichnung zuletzt verwendeter Projekte aus v1.2.2 verhinderte das ordnungsgemäße Erstellen neuer Projekte
* Weitere Verbesserungen

## v1.2.3

* Option für die Übersetzung nach der OCR hinzugefügt
* Beim Anzeigen der Übersetzung im nicht präzisen Modus wird der Hintergrund des Textfelds transparent, wenn Originaltext und Übersetzung leer sind, damit der Originaltext besser sichtbar ist
* Die Textbereichserkennung der Stapelübersetzung umfasst nun Texterkennung in natürlichen Szenen und Sprechblasenerkennung
* Der stille Übersetzer unterstützt das Festlegen der Schrift
* Kontextmenü hinzugefügt, mit dem Bilder über Bildlinks in das Projekt heruntergeladen werden können

## v1.2.2

* Stiller Übersetzer hinzugefügt, der Bilder stapelweise übersetzen kann und über die Kommandozeile oder als [Server](https://github.com/xulihang/ImageTrans_Server) betrieben werden kann
* Neues OCR-Plugin: Sogou Shenzhi OCR
* Die Pfade zuletzt geöffneter Projekte werden gespeichert
* Wenn die Ein-Klick-Übersetzung OCR verwendet, wird gefragt, ob Bereiche zusammengeführt werden sollen


## v1.2.1

* Unterstützung für das gleichzeitige Ziehen mehrerer Textfelder
* Unterstützung für die Ausrichtung mehrerer Textfelder
* Globale Schriftstile unterstützen das Festlegen von Hintergrund, Kontur und Drehung
* Operation zum Einfügen von Bildern per Rechtsklick hinzugefügt

## v1.2.0

* Ist die Leserichtung von rechts nach links festgelegt, erfolgt das Zusammenführen von Text in umgekehrter Koordinatenreihenfolge
* Plugins für Maskengeneratoren und Bildreparatur hinzugefügt. Das erste hinzugefügte Plugin ist [Sickzil-Machine](https://github.com/xulihang/SickZil-Machine)
* Tesseract unterstützt die Erkennung von Textbereichen im gesamten Bild
* Vorübersetzung und Ein-Klick-Übersetzung für einzelne Bilder werden unterstützt (Aufruf per Rechtsklick auf das Bild)
* Die Methode zur Texterkennung in natürlichen Szenen bei der Ein-Klick-Übersetzung wurde durch OCR ersetzt
* Einstellung für die minimale Schriftgröße hinzugefügt
* Option zur automatischen Anpassung der Größe von Textbereichen hinzugefügt
* Zum Anzeigen übersetzter Bilder wird ein Kontrollkästchen statt einer Schaltfläche verwendet
* Suchen und Ersetzen unterstützt die Verarbeitung des Originaltexts
* Weitere kleine Verbesserungen

## v1.1.11

* Neue OCR-Plugins: [easyOCR](https://www.jaided.ai/easyocr), Texterkennung von Tencent
* Die OCR-Sprachliste zeigt nur die von der ausgewählten Engine unterstützten Sprachen an
* Beim Erweitern von Bereichen wird der ursprüngliche Bereich als Zieltextbereich gespeichert
* Die Lokalisierungsmethode von TabPane wurde korrigiert

## v1.1.10

* Dem Bildschirmleser wurde maschinelle Übersetzung hinzugefügt
* Einige Bibliotheken von Drittanbietern wurden entfernt

## v1.1.9

* OpenCV auf 4.5.0 aktualisiert
* Die Konfidenz von Textbereichen kann offline abgerufen werden; der Operationsfortschritt wird angezeigt
* Neues OCR-Plugin: WinRT OCR, das die integrierte OCR-Funktion von Windows 10 nutzt; das entsprechende Sprachpaket muss im System installiert sein
* Einige Maschinenübersetzungs-Plugins von BasicCAT wurden integriert
* Verbesserungen der Benutzeroberfläche


## v1.1.8

* Textmasken und Bilder ohne Text werden in der festgelegten Reihenfolge erzeugt, wobei der Fortschritt der Stapelverarbeitung angezeigt wird
* Bildreparaturoperationen werden in einem separaten Thread ausgeführt, um ein Nichtreagieren des Programms zu vermeiden
* Bei der Maskenerzeugung wird geprüft, ob die Position der Textbereiche korrekt ist
* Fehler behoben: Bei der Verarbeitung zu großer Bilder waren Textmasken und Bild nicht deckungsgleich
* Im Kontextmenü des Bildes wurden textbereichsbezogene Operationen hinzugefügt

## v1.1.7

* Der Maskeneditor unterstützt Zoomen und die Erzeugung von Masken in ausgewählten Bereichen
* Der Textentferner kann Text in ausgewählten Bereichen entfernen
* Die Standardfarbe der Maske wurde wieder auf Rot geändert
* Bearbeitungsfunktion für Bilder ohne Text hinzugefügt
* Fehlerkorrekturen

## v1.1.6

* Textmasken werden als PNG gespeichert, damit der Textlöschmodus mit Überdeckung auch schwarze Hintergründe unterstützt
* Unterstützung für das Erstellen von Kopien von Textfeldern


## v1.1.5

* Neue Satz-Engine für vertikalen CJK-Text
* Autokorrekturfunktion hinzugefügt (kann das Problem der Eingabe von Vollbreiten-Satzzeichen unter macOS lösen)
* Fehlerkorrekturen

## v1.1.4

* Neues Werkzeug in der Symbolleiste: Schrifteinstellungen
* Beim Erstellen neuer Projekte und beim Importieren von Bildern wird der zuletzt gewählte Pfad übernommen
* Verbesserte Farbauswahl

## v1.1.3

* Neuer Plugin-Typ: OCR-Plugin. Der Quellcode ist offen: [github](https://github.com/xulihang/ImageTrans_plugins). Unterstützt den Aufruf der Offline-OCR von PaddleOCR.
* Neue OCR-Engine: ABBYY (verwendet die [Kommandozeilenschnittstelle](https://stackoverflow.com/questions/16385443/abbyy-finereader-exe-looking-for-cmd-commands-to-use-in-other-programms) von ABBYY FineReader, nur unter Windows)
* Neues Werkzeug: Bildschirmleser. Es kann als Screenshot-Werkzeug dienen; Screenshots können die OCR-Engine von ImageTrans zur Texterkennung nutzen und direkt in ImageTrans-Projekte eingefügt werden.
* Symbolleiste hinzugefügt, die weitere Operationen bietet, etwa das Aufteilen, Zusammenführen und Auswählen von Textbereichen.
* Der Mauszeiger nimmt je nach bereitgestellter Operation die passende Form an.

## v1.1.2

Neue OCR-Option: Bilder mit vertikal angeordnetem Text werden horizontal ausgerichtet; geeignet für vertikales Japanisch und verbessert OCR-Ergebnisse

## v1.1.1

* Ein-Klick-Übersetzungsfunktion hinzugefügt
* Neue Textbereichserkennung auf Basis der Texterkennung in natürlichen Szenen
* Der zuletzt gewählte Dateipfad wird gespeichert

## v1.1.0

* Externen Textentferner hinzugefügt (experimentell)
* Lokalisierungsunterstützung hinzugefügt. Die Software kann nun auf Chinesisch und Englisch angezeigt werden.

## v1.0.1

* Weitere Einstellungen
* Unterstützung für Rich-Text
* Import und Export von XLIFF

## v1.0.0 (2020/03/13)

Veröffentlichung der Software.

{% include comments.html %}
