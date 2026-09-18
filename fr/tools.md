---
title: Outils
layout: page
lang: fr
---

Quelques outils que j'ai développés dans le cadre de mon travail de traduction :


1. XLSX to TMX

	Lit la première feuille de calcul du fichier XLSX. La feuille doit comporter un en-tête, avec des codes de langue tels que zh-CN, en-US.

	Exemple :

	```

	zh-CN	en-US
	Bonjour	Hello
	```
	
	[Télécharger](https://github.com/xulihang/Translation-Tools/releases/download/v1.0/XLSXToTMX.jar)
	
2. Aligner

	Permet d'aligner le fichier source et le fichier cible, ou un fichier bilingue composé d'un passage en langue source et d'un passage en langue cible.

	Présentation détaillée : [Nouvel outil ! Aligner, logiciel d'alignement de bitextes](/zh/new-tool-bitext-aligner/)
	
3. PSD Localization

	Permet d'extraire le texte d'un fichier PSD et de réinjecter le texte traduit. Nécessite l'installation de la version complète de Photoshop sur l'ordinateur ; seul Windows est pris en charge pour le moment.

	[Télécharger](https://github.com/xulihang/Translation-Tools/releases/download/v1.1/PSDLocalization.zip)
	
4. Image Transcriber

	Outil d'assistance à l'OCR d'images. Il peut en outre générer des fichiers PSD contenant des calques de texte (nécessite l'installation de Photoshop sur l'ordinateur).
	
	L'outil utilise tesseract et l'API de Baidu pour l'OCR. Il faut placer tesseract dans le dossier tesseract-ocr du répertoire racine, et enregistrer l'id et le secret de l'API de Baidu dans un fichier nommé baidu à la racine, en les séparant par un retour à la ligne.
		
	Le développement a été arrêté ; utilisez [ImageTrans](https://www.basiccat.org/fr/imagetrans/).

5. FileDiff

	Cet outil affiche les différences entre l'ancienne et la nouvelle version d'un fichier et prend en charge divers formats de fichiers. Si vous avez modifié un document traduit et souhaitez modifier le texte correspondant dans le CAT, vous pouvez utiliser cet outil pour afficher les différences.
	
	[Code source](https://github.com/xulihang/FileDiff)	
	
Remarque : pour exécuter ces outils, installez d'abord Java Runtime Environment 8.