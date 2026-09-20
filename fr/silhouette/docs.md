---
title: Documentation de Silhouette
layout: page
description: Documentation de Silhouette.
lang: fr
---

## Systèmes pris en charge

* Windows 7+
* macOS 10.15+
* Linux

## Installation

Pour Windows, décompressez le fichier puis utilisez `Silhouette.exe` pour lancer le programme.

Pour macOS, faites glisser l'application du fichier dmg dans le dossier `Applications` pour l'installer. Si un message indique que le paquet est endommagé, ouvrez le terminal et exécutez la commande suivante :

```bash
sudo xattr -rd com.apple.quarantine /Applications/Silhouette.app
```

Pour Linux, vous pouvez utiliser les fichiers contenus dans l'archive zip de Windows. Vous devez installer FFmpeg, Whisper.cpp, Java et JavaFX pour lancer le programme. Vous pouvez utiliser le [fichier modèle](https://github.com/xulihang/Silhouette/releases/download/v1.1.0/Silhouette-Linux-template.zip), qui contient ces dépendances. Vous devez également télécharger ONNXRuntime et décompresser les fichiers so dans le dossier du logiciel : [linux-onnxruntime-1.20.0.zip](https://github.com/xulihang/onnxruntime-for-win7/releases/download/builds/linux-onnxruntime-1.20.0.zip).

## Configuration

À l'ouverture du programme, vous devez saisir votre numéro de commande et votre adresse e-mail pour vérifier l'achat. Vous pouvez aussi utiliser l'essai de 7 jours ou le mode limité pour essayer le programme.

D'autres réglages sont également nécessaires.


1. Modèle Whisper. Vous devez sélectionner un modèle Whisper pour la reconnaissance vocale. Vous trouverez le lien de téléchargement dans le programme ou vous pouvez les télécharger [ici](https://github.com/xulihang/Silhouette_plugins/#whisper-models).
2. Clés API. Si vous avez besoin d'utiliser des services de traduction comme ChatGPT, Google ou DeepL, vous devez renseigner les clés API dans les préférences.


## Démarrage rapide

Une capture d'écran de Silhouette :

![capture d'écran](/album/silhouette/screenshot_zh.webp){: width="1500" height="1160"}

En haut à gauche se trouve un lecteur vidéo avec divers contrôles.

En bas à gauche se trouve un tableau affichant les lignes de sous-titres existantes.

En haut à droite, vous pouvez consulter la forme d'onde correspondant à la ligne de sous-titres actuelle et modifier son horodatage et son texte.

En bas à droite, vous pouvez consulter les résultats de plusieurs services de traduction.

Voici le processus de base pour traduire un fichier vidéo/audio avec Silhouette :

1. Utilisez le menu Fichier de la barre de menus pour ouvrir un fichier multimédia et configurer la paire de langues.
2. Utilisez le menu Édition pour reconnaître la parole, détecter l'activité vocale et modifier les lignes de sous-titres.
3. Après la transcription et la traduction, vous pouvez exporter le résultat vers un fichier SRT ou un fichier txt délimité par des tabulations. Vous pouvez également importer des données depuis ces fichiers.
