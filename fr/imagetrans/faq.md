---
title: FAQ - ImageTrans
layout: page
lang: fr
---

Questions fréquentes sur ImageTrans. Pour chercher d'autres questions, consultez [cette page](https://github.com/xulihang/ImageTrans-docs/issues).

1. Quelles langues le logiciel prend-il en charge ?

    Le logiciel lui-même prend en charge toutes les langues. Les limitations concernent principalement l'OCR et la traduction automatique.

    Voici les pages décrivant les langues prises en charge par une partie des services d'OCR et de traduction automatique utilisés par ImageTrans :

    * <https://tesseract-ocr.github.io/tessdoc/Data-Files-in-different-versions.html>
    * <https://cloud.google.com/vision/docs/languages>
    * <https://cloud.google.com/translate/docs/languages>

2. La reconnaissance du japonais vertical est-elle prise en charge ?

    Youdao, Baidu, Google, mangaOCR, tesseract et l'OCR intégré à Windows 10 reconnaissent tous le japonais vertical. ImageTrans propose en outre une fonction de conversion des images en texte vertical vers du texte horizontal, pour que les moteurs d'OCR qui ne reconnaissent que le japonais horizontal puissent eux aussi reconnaître le japonais vertical.

3. Quelle est la différence entre la version à usage personnel et la version à usage commercial ?

    Pour le moment, il n'y a aucune différence de fonctionnalités entre les deux. La version à usage commercial s'adresse principalement aux entreprises qui l'utilisent pour des travaux de traduction commerciale ; après l'achat, elle peut être utilisée sur 5 appareils.

4. Ce prix correspond-il à des frais mensuels ou à un paiement unique ?

    La version achetée est utilisable à vie et inclut six mois de mises à jour gratuites.

5. Sur quelles plateformes le logiciel peut-il fonctionner, et Linux est-il pris en charge ?

    ImageTrans est une application multiplateforme développée avec JavaFX ; elle peut fonctionner sous Windows, macOS et Linux. Le logiciel dépend d'OpenCV, et des bibliothèques d'exécution spécifiques sont donc fournies pour Windows, macOS et Linux.

6. Pourquoi le résultat de la traduction automatique est-il identique au texte source ?

    Il faut d'abord indiquer la paire de langues à traduire dans les paramètres du projet.

7. Que sont les API d'OCR et de traduction automatique ? Comment en faire la demande ?

    API est l'abréviation d'interface de programmation d'application. Des entreprises comme Google et Microsoft mettent leurs technologies d'OCR et de traduction automatique à disposition sous forme d'API, que des logiciels tiers peuvent appeler. ImageTrans intègre les API d'OCR et de traduction automatique courantes. Ces API nécessitent généralement une clé d'API pour être appelées. Pour la marche à suivre précise, consultez la documentation de chaque plateforme.

    Voici un tutoriel que j'ai trouvé sur Internet pour demander une clé d'API de l'OCR Google Vision :

    <https://easyscreenocr.com/how-to-load-google-api-in-easyscreenocr-for-mac-lifetime-version/>

8. Quels services d'OCR et de traduction automatique le logiciel prend-il en charge ?

    Voici la liste des services en ligne actuellement pris en charge

    OCR : Baidu, Youdao, Tencent, Google, Microsoft Azure, OCRSPACE, ABBYY Cloud, Clova

    Traduction automatique : Baidu, Youdao, Tencent, Niutrans, Google, Microsoft, Colorful Clouds, Cloudtranslation, Papago

    Par défaut, ImageTrans intègre les clés des services d'OCR tels que Baidu, Azure et OCRSPACE, ainsi que celles des services de traduction automatique tels que Baidu, Tencent et Niutrans.

    Il prend également en charge l'OCR et la traduction automatique hors ligne ; voir la question suivante.

9. Le logiciel peut-il être utilisé hors ligne ?

    Le logiciel peut être utilisé hors ligne. Mais le premier lancement nécessite une connexion Internet pour vérifier si l'achat a été effectué ; l'enregistrement est conservé pendant 7 jours.
    
    Le logiciel peut traduire des images hors ligne et prend en charge l'OCR et la traduction automatique hors ligne.

    OCR hors ligne : tesseract, mangaOCR, OCR intégré à Windows 10, PaddleOCR, EasyOCR

    Traduction automatique hors ligne : OPUS-CAT, eztrans, Sugoi
    
    L'OCR et la traduction automatique en ligne, en particulier la traduction automatique, donnent souvent de meilleurs résultats et couvrent davantage de langues, mais posent aussi des problèmes : nécessité d'une connexion Internet, limites sur les requêtes, etc.

10. Pourquoi certaines zones n'ont-elles pas de résultat lors d'une OCR ou d'une traduction automatique par lots ?

    Les services d'OCR et de traduction automatique en ligne imposent des limites sur les requêtes, par exemple 5 requêtes par seconde. ImageTrans permet de définir l'intervalle de temps entre les requêtes d'OCR et de traduction automatique pour éviter ce problème.

    Si c'est l'OCR qui ne renvoie aucun résultat, il se peut aussi que le moteur d'OCR n'ait pas reconnu le texte.

11. Pourquoi le texte n'a-t-il pas été entièrement effacé ?

    Le cadre de texte doit couvrir entièrement le texte et laisser un certain espace par rapport aux bords du texte. Si l'arrière-plan du texte est complexe, il faut souvent procéder manuellement.

12. Le logiciel a-t-il une interface en anglais ?

    Le logiciel prend actuellement en charge deux langues d'interface : l'anglais et le chinois.
	
13. Pourquoi les lignes de texte n'ont-elles pas été fusionnées ?

	Plusieurs raisons sont possibles.

	1. La hauteur ou la largeur d'extension par défaut est trop petite ; il faut augmenter un peu la valeur (il s'agit généralement de la hauteur de la ligne de texte).
	2. Il existe un espacement entre les zones de texte, ce qui gêne la fusion. Il y a plusieurs façons de procéder :

		* Réduire la valeur d'extension en pixels
		* Fusionner manuellement
		* Désactiver le test de présence d'un espacement
		
    Image d'exemple :
	
	![](/album/unmerged.jpg)
	
	Après fusion :
	
    ![](/album/merged.jpg)



{% include comments.html %}