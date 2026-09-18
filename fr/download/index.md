---
title: Télécharger
layout: page
permalink: /fr/download/
lang: fr
---

Choisissez l'installateur correspondant à votre système d'exploitation.

### BasicCAT v1.11.0

* Windows: [32 bits](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-windows-x86.exe) / [64 bits](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-windows-x64.exe)
* macOS:  [Version pour processeur Intel](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-mac-x64.dmg) / [Version pour processeur Apple](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-mac-arm.dmg)
* Linux et autres systèmes:  [CrossPlatfroms.zip](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-crossplatforms.zip)

Vous pouvez aussi le télécharger depuis Baidu NetDisk : [Lien](https://pan.baidu.com/s/1HmD4pJ9hIYyK9bnqINtoFQ)

Versions précédentes : [Releases](https://github.com/xulihang/BasicCAT/releases/)

Remarque à l'attention des utilisateurs de macOS : depuis macOS Catalina, les fichiers possèdent un nouvel attribut appelé `com.apple.quarantine`. À l'ouverture de BasicCAT, un message indique que l'application est endommagée. Il faut supprimer cet attribut à l'aide de la commande suivante pour que le programme fonctionne normalement.

```
sudo xattr -rd com.apple.quarantine /Applications/BasicCAT.app
```

### Serveur pour le partage de mémoires de traduction et de terminologie

*  [CloudKVS_Server.jar](https://github.com/xulihang/BasicCAT/releases/download/v1.2-beta2/CloudKVS_Server.jar)

### Plugins

BasicCAT propose actuellement deux types de plugins : les plugins de filtre et les plugins de traduction automatique.

Vous pouvez télécharger tous les plugins [ici](https://github.com/xulihang/BasicCAT/releases/download/plugins/all_plugins.zip). Le package d'installation de BasicCAT contient déjà les plugins les plus récents, il n'est donc généralement pas nécessaire de les télécharger séparément.

N'oubliez pas de placer les fichiers jar et xml extraits dans le dossier plugins.

Plugins actuellement disponibles :

Traduction automatique :

* ChatGPT
* Gemini
* DeepL
* Tencent
* Niutrans
* Google
* IBM Watson
* Colorful Clouds
* Naver Papago
* Cloudtranslation (il suffit de configurer le paramètre url, voir la [documentation officielle](https://cloudtranslation.com/static/api_zh-cn.html))
* Amazon (téléchargement séparé nécessaire : [lien](https://github.com/xulihang/BasicCAT/releases/download/plugins/amazon.zip))
* OpusCAT (moteur de traduction automatique hors ligne, [présentation](/zh/offline-machine-translation))
* Traduction automatique via le web (extrait la traduction automatique de pages web, sans API, [en savoir plus](https://www.basiccat.org/zh/new-plugin-machine-translation-via-web/))

Filtre :

* Gettext PO

### Autres outils

Quelques petits outils développés pour résoudre des tâches de traduction : [Outils](/fr/tools/)

