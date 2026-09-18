---
title: Notes de version d'ImageTrans
layout: page
lang: fr
---

<style>
.post-content h2 {
  font-size: 1.5rem;
}
</style>

## v6.5.0 (2026/09/11)

* Mise à jour du JRE vers [JRE26](https://download.bell-sw.com/java/26.0.2.1+1/bellsoft-jre26.0.2.1+1-windows-amd64-full.zip)
* Ajout d'un paramètre d'exportation JPEG haute fidélité
* Ajout d'un flux de travail personnalisé pour détecter la direction du texte et définir l'angle de rotation
* Rotation des nœuds des régions de texte plutôt que de l'image
* En mode traduction, l'alignement des régions sélectionnées n'ajuste que la position des régions de traduction
* Pour les contrôles en langues RTL, définition de NodeOrientation sur RIGHT_TO_LEFT au lieu d'un simple alignement à droite
* Ajout de davantage d'options de téléchargement de serveur
* Correction du problème où les fichiers en échec n'étaient pas supprimés à temps après l'annulation d'un téléchargement lorsque le réseau était lent
* Correction du problème d'oubli de mise à jour du style TextArea lors de la création d'un projet
* Correction de l'ordre lors de la fusion de mots mêlant arabe et non-arabe
* Correction du problème où le RTL n'était pas activé pour la composition en arabe
* Correction du problème où le texte des PDF exportés ne prenait pas en charge la rotation
* Correction du problème où le texte des régions pivotées n'était pas centré lors de la rotation
* Correction du redimensionnement des régions pivotées
* Correction de l'erreur lors de la désactivation du texte vertical CJK
* Correction du traitement des chiffres purement arabes par rapidOCR
* Correction du traitement des chiffres purement arabes lors de la génération de PDF en arabe

## v6.4.0 (2026/09/03)

* Optimisation du choix de la police par défaut dans les options d'exportation PDF
* Ajout de la recherche des polices dans le dossier de polices du répertoire utilisateur Windows à la recherche automatique de polices pour l'exportation PDF
* Optimisation de l'espacement du texte des PDF en texte vertical exportés
* Détection automatique de la direction du texte lors de l'exportation de PDF en chinois/japonais lorsque les paramètres du projet n'ont pas de style de police
* Prise en charge de la mesure du temps de traitement dans les flux de travail personnalisés
* Modification de tous les services de traduction par défaut vers Baidu
* Correction de la hauteur de texte incorrecte dans les PDF de traduction en chinois vertical exportés
* Correction de l'inversion erronée des chiffres arabes par RapidOCR
* Correction de l'inversion erronée des chiffres arabes lors de la génération de PDF en arabe

## v6.3.3 (2026/08/28)

* Ajout d'un flux de travail personnalisé pour fusionner les régions qui se chevauchent
* Ajout de l'option de langue portugais (Brésil)
* Prise en charge de la définition des noms de catégories utilisés dans `model.json` (`class_names_to_use_for_panel`) pour la détection de cases basée sur la détection d'objets
* Correction de l'erreur lors de la création d'un projet sans sélectionner de langue
* Correction de l'erreur lors de l'exportation de PDF contenant du texte vertical

## v6.3.2 (2026/08/21)

* L'ouverture de l'outil de suppression de texte charge la méthode de suppression des paramètres du projet
* Si une méthode de génération de masque pour arrière-plan complexe ou de retouche d'image est définie, la méthode de sélection par région est utilisée à l'ouverture de l'éditeur de masque ou de l'outil de suppression de texte
* La détection de la direction du texte pour définir le style de texte n'est exécutée que si la langue cible prend en charge le texte vertical
* Le générateur de certificats récupère l'IP à l'avance et utilise le dossier cert du logiciel comme dossier par défaut
* Correction du problème où le générateur de certificats n'utilisait pas correctement l'IP définie

## v6.3.1 (2026/08/13)

Correction du problème où l'ouverture d'un projet en ligne de commande exécutait les opérations suivantes sans attendre la fin de l'ajustement de l'interface ni la sélection de la langue OCR

## v6.3.0 (2026/08/06)

* Le package d'installation inclut par défaut le modèle ONNX Lama Inpaint quantifié int8 à taille fixe 512x512
* Suppression de MIGAN Inpaint du package d'installation
* Suppression du modèle de classification de la langue des images du package d'installation
* Optimisation de l'utilisation de Lama Inpaint par le modèle CG
* Ajout de la prise en charge du modèle RF-DETR
* Ajout d'un flux de travail personnalisé pour supprimer les régions non pivotées
* Ajout d'un paramètre de projet pour diviser les mots dépassant une certaine longueur
* Prise en charge de la vérification SHA256 pour le téléchargement de modèles distants
* RapidOCR télécharge automatiquement les modèles depuis le réseau et n'affiche plus l'avertissement de modèle non installé lors du changement de langue
* Le package d'installation inclut par défaut les dictionnaires thaï et arabe de RapidOCR
* Lors de la suppression de texte par région, les régions qui se chevauchent sont fusionnées avant la suppression par région, ce qui améliore la mauvaise qualité de suppression causée par les chevauchements
* Lors de la reconnaissance d'une image entière avec mangaOCR, si le modèle OCR mit48px n'existe pas, rapid est utilisé pour reconnaître le texte en bandes
* Correction de l'incohérence des ROI utilisées pour vérifier si l'image est complexe lors de la génération de masque et de la suppression de texte
* Correction du bug où la pré-traduction ignorait les images sans texte

## v6.2.2 (2026/08/01)

* Prise en charge de la version mac mlx de PPDocLayout v3
* Utilisation de variables globales pour stocker la détection de cases afin d'éviter les chargements fréquents de modèles
* Suppression des espaces superflus dans la traduction anglaise de la détection d'objets
* La pré-traduction ignore les images sans texte


## v6.2.1 (2026/07/28)

* Retrait de `Character.UnicodeBlock.GENERAL_PUNCTUATION` (par exemple …) des conditions de détermination des caractères chinois
* Mise à jour de l'écart maximal d'ordonnée dans le modèle à 2000
* Correction du problème où les messages d'erreur d'envoi du serveur ne transmettaient pas le nom
* Correction du problème où le serveur pouvait définir l'état d'exécution sur false avant même d'avoir envoyé les images traduites

## v6.2.0 (2026/07/26)

* Ajout d'un modèle de serveur générique
* Sélection automatique de l'OCR approprié lors de la création d'un projet à partir du modèle de paire de langues générique
* Ajout d'un flux de travail personnalisé pour détecter les cellules de la classification de tableaux
* Réécriture de toute la logique déterminant à quelle case appartient chaque région de texte
* Utilisation du masque de texte pour optimiser la détermination des images à arrière-plan complexe
* Changement du nom de modèle par défaut de Deepseek en deepseek-v4-flash
* Prise en charge de la définition de paramètres par entrée dans les flux de travail de détection de cases et de traduction
* Optimisation de la détermination des régions inversées dans la génération de masque
* Prise en charge de la définition du mot de passe du serveur distant (ws_secret)
* Prise en charge du chargement des paramètres de projet propres à une langue (src.json)
* Ajout du nettoyage des vignettes à la fonction de nettoyage automatique des images du serveur
* Correction du conflit de version d'onnxruntime avec oneocr

## v6.1.0 (2026/07/24)

* Ajout d'une fonction de numérisation de codes-barres basée sur ZXingCPP
* Ajout d'un mode d'exécution en arrière-plan permettant de faire tourner le serveur en arrière-plan, sans afficher de fenêtre pendant la traduction
* Délai d'expiration de l'exécution des flux de travail en mode par lots fixé à 10 minutes
* Prise en charge du chargement des modèles de flux de travail personnalisés propres à une langue (custom_workflow_src-tgt.json)
* Correction du problème où le flux de travail personnalisé du serveur utilisait directement une image de même nom exportée précédemment
* Correction du problème où les images chargées par le serveur pouvaient être invalides

## v6.0.3 (2026/07/16)

* Ajout d'une fonction de reconnaissance de tableaux
* L'opération de fusion des régions d'une case ne fusionne pas les régions d'un tableau

## v6.0.2 (2026/07/11)

* Ajout d'un menu contextuel d'édition de catégorie dans la liste des cases
* Davantage d'options d'exportation markdown
* Ajout de l'exportation markdown aux flux de travail personnalisés
* Prise en charge de la prédéfinition des paramètres d'exportation markdown dans les paramètres du projet
* Lors de l'exécution d'un flux de travail personnalisé via l'ouverture d'un projet en ligne de commande, lecture des fichiers preferences.conf, settings.json et setOCRBasedOnLang du projet, pour rester cohérent avec le mode de création de projet à partir d'un modèle
* Suppression du suffixe .itp du nom de fichier initial sur mac pour éviter les doublons
* Mise à jour du dossier de résultats intermédiaires du modèle en `intermediateResults`
* Prise en charge de [ImageTrans-skills](https://github.com/xulihang/ImageTrans-skills), appelable via des agents comme 小龙虾, Claude, etc.
* Correction du problème où une boîte de dialogue d'achèvement s'affichait lors de l'exportation PDF appelée en ligne de commande

## v6.0.1 (2026/07/07)

* Optimisation de la gestion des règles de ponctuation interdite en début et fin de ligne par le moteur de texte vertical
* Le test du paramètre server lors de l'appel du serveur en ligne de commande passe de "contient" à "égal à"
* Conversion des images TIFF en JPG lors de l'extraction des images d'un PDF
* Ajout d'un paramètre de projet de détection de bulles pour fusionner les régions qui se chevauchent
* La fusion des régions de bulles qui se chevauchent vérifie si elles sont de la même catégorie
* Ajout de la prise en charge de PPDocLayout v3
* Correction du problème de réinitialisation d'une instance du même modèle après sélection du modèle de détection de bulles
* Correction d'une fuite de mémoire de PPDocLayout
* Correction du problème où le calcul de largeur du moteur de texte vertical ne tenait pas compte du contour
* Correction du rayon de contour incorrect des régions de texte vertical pivotées
* Correction de la plage de progression incorrecte lors de l'importation d'une plage spécifiée d'un PDF

## v6.0.0 (2026/07/03)

* Utilisation du calcul précis de taille de police pour le texte horizontal
* Les préférences d'API peuvent être personnalisées dans les paramètres du projet
* Correction d'un bug de taille de police automatique des régions de texte vertical pivotées

## v5.24.0 (2026/06/30)

* Les angles de rotation inférieurs à 0.01 ne sont pas stockés
* Ajout d'un paramètre de projet pour empêcher la ponctuation en début de ligne dans le moteur de texte vertical (règles de ponctuation)
* Ajout d'éléments de flux de travail personnalisés pour agrandir et réduire les régions de traduction
* En mode composition, les opérations d'agrandissement et de réduction des régions modifient la position de la traduction
* Optimisation de l'efficacité du calcul automatique de taille de texte du moteur de texte vertical
* Correction du problème d'oscillation du calcul automatique de taille de texte du moteur de texte vertical
* Correction du traitement du texte multiligne par la taille de texte automatique du moteur de texte vertical lorsque le retour à la ligne automatique est désactivé

## v5.23.0 (2026/06/29)

* Nouveau plugin OCR : oneocr (OCR de capture d'écran de Windows 11)
* L'OCR effectue d'abord le découpage de l'image, puis la mise à l'échelle
* Correction du problème d'inefficacité du centrage vertical du moteur de texte vertical
* Correction des coordonnées incorrectes de reconnaissance des bandes dessinées verticales de faible largeur

## v5.22.1 (2026/06/23)

* Prise en charge de l'utilisation des informations de compte déjà saisies pour l'authentification lors d'un appel en ligne de commande
* Prise en charge de l'utilisation d'images comme contexte pour la traduction (nécessite un grand modèle de vision)
* Prise en charge de l'utilisation du texte des pages précédentes comme contexte pour la traduction

## v5.22.0 (2026/06/18)

* Ajout d'un paramètre de projet OCR de largeur minimale : si l'image est plus petite que cette largeur, elle est agrandie à cette largeur
* Correction du problème où les fichiers dont le téléchargement avait échoué n'étaient pas supprimés
* Correction du problème où un échec de démarrage du serveur affichait quand même un message de succès

## v5.21.3 (2026/06/16)

Mise à jour de Rapid OCR vers PPOCRv6

## v5.21.2 (2026/06/10)

* Optimisation de l'affichage du pinyin dans le HTML exporté
* Prise en charge de l'utilisation de certificats auto-signés par le serveur

## v5.21.1 (2026/06/04)

* Prise en charge de la définition de la taille de bordure du champ de texte actif
* Prise en charge de l'importation TIFF
* Prise en charge de l'enregistrement du texte pour les cases
* Ajout d'un flux de travail personnalisé pour créer des régions à partir des cases
* Optimisation de l'uniformité du redressement automatique du moteur de texte vertical selon la taille de police
* Correction d'un éventuel problème d'encodage de lecture du dictionnaire avec l'OCR mit48px

## v5.21.0 (2026/05/30)

* Ajout d'une préférence pour mémoriser la fenêtre d'édition du masque
* Optimisation de l'uniformité du redressement automatique du moteur de texte vertical selon la taille de police
* Le modèle de détection des bulles peut spécifier une classe dédiée aux cases
* Correction du problème empêchant le lancement d'un processus indépendant de traitement après le démarrage du serveur en ligne de commande

## v5.20.0 (2026/05/23)

* Moteur de texte vertical :
   * Correction de l'alignement centré des caractères
   * Ajout du sokuon japonais aux caractères alignés à droite
* Serveur :
   * Ne pas nettoyer les images pendant la traduction
   * Ajout de préférences pour le redémarrage planifié et l'utilisation d'un processus indépendant
   * Enregistrement des paramètres du serveur
   * Prise en charge de l'ouverture directe d'ImageTrans en ligne de commande pour se connecter au serveur
* Éditeur de masque et outil de suppression de texte :
   * Lors de la sélection d'une méthode, vérification de l'installation ou de l'exécution du plugin
   * Ajout de la sélection par région à la liste des méthodes de traitement, sans sélection automatique par défaut selon la complexité de l'arrière-plan
* Le flux de travail personnalisé prend en charge l'exécution concurrente sur plusieurs processus afin d'optimiser la vitesse de traitement
* Correction du problème de non-prise en charge d'une seule image lors du traitement de fichiers via un modèle appelé en ligne de commande
* Correction du problème d'échec du démarrage automatique sur macOS


## v5.19.1 (2026/05/16)

* Mise à jour des plugins DeepSeek et ChatGPT pour prendre en charge la définition de champs supplémentaires
* DeepSeek n'active pas la réflexion par défaut
* Ajout d'une préférence pour afficher le numéro de style de police [#issue1066](https://github.com/xulihang/ImageTrans-docs/issues/1066)

## v5.19.0 (2026/05/09)

* Prise en charge de la définition d'un décalage horizontal et vertical pour les caractères du moteur de texte vertical [#issue1063](https://github.com/xulihang/ImageTrans-docs/issues/1063)
* Le mode modèle appelé en ligne de commande prend en charge la transmission de paramètres de projet et de préférences supplémentaires
* Optimisation des appels en ligne de commande
* Correction du problème de non-utilisation d'une copie profonde lors de la création d'une copie
* Correction de l'échec de l'extraction des images PNG d'un PDF en mode extraction d'images
* Correction du problème de modification possible des coordonnées des régions de texte lors de l'exportation des résultats de traduction en mode composition [#issue839](https://github.com/xulihang/ImageTrans-docs/issues/839)

## v5.18.0 (2026/04/19)

* Mémoire de traduction :
   * Ajout d'un paramètre de projet de mémoire de traduction
   * Prise en charge de la définition de l'utilisation ou non du texte du projet
   * Prise en charge de l'importation et de l'utilisation d'une mémoire de traduction externe (basée sur SQLite)
* Lecteur d'écran :
   * Prise en charge de l'utilisation de la mémoire de traduction
   * Correction du problème d'appel de la phonétique sans l'avoir activée
* Ajout de la prise en charge de l'appel du plugin OCR pour une reconnaissance concurrente
* Extracteur de sous-titres incrustés :
   * Prise en charge de l'utilisation de la détection des bulles
   * Optimisation de l'opération de reconnaissance concurrente via le plugin OCR
   * Ajout d'un offset à gauche dans les conditions de reconnaissance des images clés
   * Ajout d'une opération pour unifier les régions de texte des images aux textes proches lors de la reconnaissance des images clés
* Nouveau paramètre de projet de détection des bulles : extension de l'image
* Autres optimisations

## v5.17.0 (2026/04/11)

* Lecteur d'écran :
   * Ajustement de la disposition
   * Prise en charge de l'affichage de la phonétique
   * Prise en charge de la lecture à voix haute
   * Prise en charge de l'utilisation d'un flux de travail personnalisé
   * La reconnaissance automatique attend la stabilisation de l'image avant de faire une capture d'écran
   * Si un seul moteur de traduction automatique est activé, ne pas afficher son nom
   * Correction de plusieurs problèmes d'enregistrement des résultats dans le projet
* Chargement des paramètres précédents à l'ouverture du lecteur
* La traduction automatique prend en charge la traduction sur plusieurs pages [#issue1055](https://github.com/xulihang/ImageTrans-docs/issues/1055)
* Ajustement des préférences de traduction automatique

## v5.16.0 (2026/03/22)

* Ajout de la fonction d'annotation du pinyin et des kana japonais
* Nouveau format d'exportation : HTML unique
* Ajout de l'opération de génération d'un PDF sans texte
* Ajout d'une préférence pour le texte affiché dans la liste des champs de texte [#1052](https://github.com/xulihang/ImageTrans-docs/issues/1053)
* Le gestionnaire d'images prend en charge l'ajout des images nouvellement ajoutées au dossier [#1053](https://github.com/xulihang/ImageTrans-docs/issues/1053)
* Ajout d'une version avec localisation de l'OCR mit48px_ctc
* mangaOCR traite par défaut les images en niveaux de gris afin d'améliorer le taux de reconnaissance du texte en couleur
* Correction de l'échec de la régénération des cases par regroupement de texte en présence de cases



## v5.15.1 (2026/03/17)

* Optimisation de la prise en charge de l'espacement négatif entre caractères par le moteur de texte vertical
* Ajout de la prise en charge de la détection de la couleur du contour
* Le contrôle de réglage de taille polyvalent de l'éditeur de texte enrichi prend en charge les nombres négatifs
* Correction du décalage des champs de texte traduits lors du zoom
* Correction du problème de non-mise à jour en temps réel des résultats dans l'image lors du remplissage de la traduction automatique par traduction rapide ou traduction assistée en mode composition

## v5.15.0 (2026/03/14)

* Ajout d'un visualiseur de vignettes
* Ajout d'un navigateur d'images
* Ajout d'un gestionnaire d'images (appel par clic droit sur la liste des images)
* Prise en charge du réglage de l'ordre des images
* Suppression de la virgule des numéros dans les noms des images PDF importées
* Optimisation de la vitesse de changement d'image
* Ignorer les images sans texte lors de la traduction de plusieurs phrases
* Correction de l'échec du filtrage des images dont la traduction a déjà été exportée dans le gestionnaire d'images traduites [#issue1044](https://github.com/xulihang/ImageTrans-docs/issues/1044)

## v5.14.0 (2026/03/06)

* Importation PDF :
   * Prise en charge de la sélection de la plage de pages
   * En mode extraction d'images, si une page sans image est rencontrée lors de l'importation d'un PDF, le mode rendu est utilisé
* Exportation PDF :
   * Prise en charge de la recherche du fichier de police correspondant selon le nom de la police
   * Prise en charge de la sélection des polices TTC
   * Utilisation d'Arial Unicode comme police par défaut sur Mac
   * Si du texte vertical est affiché, remplacer les caractères de ponctuation tels que les parenthèses par des caractères pour texte vertical et les caractères demi-largeur par des caractères pleine largeur
   * Optimisation de l'affichage du texte vertical
* Augmentation du délai d'expiration du plugin ChatGPTOCR
* Ajout du plugin OllamaOCR
* Ajout du suffixe eSCL aux noms des scanners eSCL
* Correction du mauvais ajustement automatique de la taille du texte vertical lorsque le retour à la ligne automatique est désactivé

## v5.13.0 (2026/02/23)

* Numérisation de documents :
   * Prise en charge de l'appel à TWAIN sur Windows
   * Prise en charge de la numérisation de films, de diapositives et d'autres documents avec un transparent
   * Erreur lors de l'utilisation de WIA si .NET 8 n'est pas installé localement
* Libération des images déjà ouvertes à la fermeture du projet
* L'opération de recadrage prend en charge l'enregistrement de l'image comme nouvelle image
* Nouvelles opérations d'édition d'image : inversion des couleurs, suppression du voile de film

## v5.12.0 (2026/02/14)

* Numérisation de documents :
   * WIA, ICA et SANE prennent en charge le chargeur automatique, la numérisation multipage et la numérisation recto-verso
   * WIA, ICA et SANE prennent en charge l'annulation des tâches de numérisation
   * SANE prend en charge l'aperçu en temps réel du résultat de numérisation d'une seule image
   * Prise en charge de l'appel à SANE pour la numérisation sur macOS
   * Prise en charge de la définition de la zone de numérisation
   * Utilisation de l'API Windows Runtime moderne pour appeler WIA
   * Enregistrement des images en noir et blanc au format PNG 1 bit pour économiser de l'espace
   * Suppression automatique des fichiers de numérisation temporaires à la fermeture de la fenêtre de numérisation de documents
   * Ajout d'un bouton de suppression d'image
   * Correction de l'erreur d'enregistrement des fichiers lors de la numérisation multipage continue avec eSCL
* Ajout d'une fonction de mesure de distance
* Ajout d'un menu contextuel d'édition d'image
* Prise en charge de la définition d'une taille de police décimale, le pas d'ajustement par défaut de la police passant à 0,5 [#issue1038](https://github.com/xulihang/ImageTrans-docs/issues/1038)
* La taille de police de la barre d'outils peut être ajustée avec la molette [#issue1038](https://github.com/xulihang/ImageTrans-docs/issues/1038)
* Suppression de la virgule des milliers dans le nom des images collées
* Prise en charge du choix entre PNG et JPG selon le chemin de l'image collée
* Correction de l'URL incorrecte lors de l'envoi des messages d'erreur avec un serveur distant


## v5.11.1 (2026/02/07)

* La numérisation de documents prend en charge la numérisation multipage
* La numérisation de documents prend en charge le chargeur automatique (eSCL uniquement)
* Correction du problème d'inefficacité du réglage du mode couleur lors de la numérisation eSCL
* Utilisation d'une transformation affine plutôt que perspective pour l'italique synthétique afin de résoudre le problème de largeur et de hauteur incorrectes lors d'une utilisation simultanée avec le gras synthétique
* Prise en charge du placement d'un fichier server-mode dans le répertoire racine pour éviter les erreurs de boîte de dialogue lors de l'utilisation du serveur

## v5.11.0 (2026/01/31)

* La numérisation de documents prend en charge l'appel des interfaces de numérisation du système (WIA, ICA, SANE)
* La numérisation de documents enregistre la liste des scanners trouvés précédemment
* Prise en charge de l'affichage haute définition pour les PDF
* Désactivation des paramètres de suppression de texte par région et de détection des couleurs du modèle de document
* Utilisation d'un anti-rebond pour l'opération de chargement des tuiles lors du zoom d'image
* L'exportation TXT prend en charge le choix entre l'exportation du texte source seul ou du texte source avec la traduction
* L'importation TXT prend en charge l'importation de la traduction seule
* Correction du problème de non-mise à jour correcte de l'image après une rotation


## v5.10.1 (2026/01/25)

* Ajout de la fonction de numérisation de documents (basée sur eSCL)
* Ajout d'une fonction d'affichage des informations de l'image
* Mise à jour du plugin de traduction Papago
* Correction du problème d'absence d'option de réglage de la taille du texte enrichi en mode édition vertical [#issue1032](https://github.com/xulihang/ImageTrans-docs/issues/1032)

## v5.10.0 (2026/01/17)

* Ajout de la prise en charge de YOLO 26 [#issue1026](https://github.com/xulihang/ImageTrans-docs/issues/1026)
* Ajout de la prise en charge du réglage du décalage horizontal et vertical pour le texte horizontal [#issue826](https://github.com/xulihang/ImageTrans-docs/issues/826)
* Ajout de la prise en charge du réglage de l'espacement entre caractères pour le texte horizontal
* Ajout de la prise en charge du réglage de l'espacement entre caractères pour le texte enrichi
* L'espacement entre caractères par défaut passe à 0 et est enregistré sous le nom tracking
* L'éditeur de texte enrichi prend en charge la définition de l'espacement entre caractères, du décalage horizontal et du décalage vertical
* Correction du problème de non-mise à jour du résultat de rendu après la définition du format avec l'éditeur de texte enrichi
* Correction du blocage possible lors de l'exécution de la fusion de régions dans un flux de travail personnalisé [#issue1029](https://github.com/xulihang/ImageTrans-docs/issues/1029)
* Correction de l'inefficacité du zoom avec le raccourci clavier

## v5.9.0 (2026/01/13)

* Le moteur de texte vertical prend en charge l'alignement centré et l'alignement en bas
* Ajout de la détection des couleurs au niveau des caractères
* Prise en charge de la définition d'un style de texte enrichi pour le texte source
* Ajout d'un paramètre de style de centrage horizontal
* La différence maximale d'ordonnée par défaut passe à 2000

## v5.8.3 (2026/01/05)

* Optimisation du traitement des angles détectés par erreur lors de la rotation d'image basée sur les informations de rotation des régions de texte
* Optimisation de la prise en charge du canal alpha pour la rotation d'image basée sur les informations de rotation des régions de texte
* Optimisation du traitement des régions qui se chevauchent et de celles situées hors de l'image par la détection des bulles
* Augmentation de la tolérance de l'application du masque OCR
* Prise en charge de l'importation de signets depuis le lecteur Chaoxing
* Correction de l'erreur lors du vidage des images

## v5.8.2 (2026/01/03)

* Enregistrement des informations de rotation des régions de texte en double précision
* Ajout des opérations de rotation d'image basées sur les informations de rotation des régions de texte
* Ajout des opérations de super-résolution
* La précision d'ajustement de la rotation d'image à n'importe quel angle passe à 0,1
* Prise en charge de l'appel du lecteur Chaoxing pour importer des fichiers au format PDZ
* L'exportation PDF prend en charge davantage de paramètres de traitement d'image
* Ajout du point-virgule et des deux-points à la liste des caractères à convertir en ponctuation chinoise
* Correction du problème d'utilisation de l'image précédente pour l'OCR et d'autres opérations après l'édition de l'image


## v5.8.1 (2025/12/30)

* Libération de l'image lorsque l'affichage par tuiles ne s'affiche pas
* Ajout de la prise en charge du format bmp au chargement des images par tuiles

## v5.8.0 (2025/12/28)

* Optimisation de la navigation dans les très grandes images à l'aide de tuiles [#issue739](https://github.com/xulihang/ImageTrans-docs/issues/739)
* Génération de vignettes pour les très grandes images afin d'accélérer le chargement
* Prise en charge du bouton central de la souris pour changer de mode d'édition dans l'éditeur de masque [#issue1022](https://github.com/xulihang/ImageTrans-docs/issues/1022)
* Correction du problème où la zone de texte restait masquée après avoir prélevé une couleur sur l'image

## v5.7.0 (2025/12/21)

* Nouveau modèle de détection d'objets : le modèle d'analyse de mise en page [DocLayout](https://github.com/xulihang/PP_DocLayout_ONNX) de Paddle
* Nouvel algorithme de tri : XYCut
* Prise en charge de l'enregistrement des catégories pour les cases
* Ajout des paramètres et des flux de travail liés aux cases de type graphique
* Nouveau format d'exportation : markdown
* Nouveau modèle : document
* Mise à jour du plugin DeepSeek-OCR pour prendre en charge l'enregistrement des catégories
* Prise en charge de la génération d'images sans texte en mode non exact
* Prise en charge du filtrage direct des résultats de détection d'objets par nom de catégorie
* Optimisation de la gestion des retours à la ligne du texte traduit horizontal lors de l'exportation PDF

## v5.6.1 (2025/12/16)

* Utilisation de l'OCR pour aider à distinguer si la langue de l'image est le chinois ou le japonais
* Optimisation de l'effet de zoom centré sur la souris
* Optimisation des performances du zoom
* Correction du problème où le modèle par défaut configurant l'OCR selon la langue ne gérait pas le latin


## v5.6.0 (2025/12/14)

* Prise en charge d'ONNXRuntime comme moteur de détection d'objets
* Ajout de la fonction Hot Folder
* Ajout des fonctions de détection de la langue dans les images et de détection de la langue dans les textes
* RapidOCR prend en charge la détection automatique de la langue des images
* Nouveaux flux de travail : exportation PDF, détection de la langue de l'image pour configurer l'OCR, détection et configuration de la langue source du projet d'après le texte
* Prise en charge de la préconfiguration des paramètres d'importation et d'exportation PDF et des paramètres d'exportation PSD
* Prise en charge du traitement de fichiers tels que les PDF par la ligne de commande
* Ajout d'un paramètre de projet pour la fusion selon les cases
* Ajout d'un paramètre de projet pour intégrer les informations du canal Alpha lors de la retouche d'image
* Ajout de paramètres de projet pour la méthode de génération de masque et la méthode de retouche d'image des images à arrière-plan complexe
* Correction du problème d'échec de l'ajout des images du dossier de projet par glisser-déposer
* Correction du problème d'échec de la copie du texte lorsque la suppression des retours à la ligne n'est pas cochée
* Correction du problème où le serveur supprimait la configuration des flux de travail personnalisés, entre autres



## v5.5.1 (2025/12/07)

* En mode d'extraction d'images, enregistrement direct des données d'origine du PDF lors de l'importation d'un PDF
* Correction du problème où l'annulation ne mettait pas fin à l'opération lors de l'importation d'un PDF


## v5.5.0 (2025/12/06)

* Ajout de plugins de retouche d'image : OpenAI et Gemini, avec prise en charge de l'appel de Gemini 3 Pro Image (Nano Banana) pour redessiner les images
* Ajout d'un plugin OCR : DeepSeek-OCR
* Ajout d'un flux de travail : suppression des régions hors case
* Pas de fusion des régions qui ne sont pas dans la même case
* Prise en charge de l'appel des plugins OCR pour l'analyse de mise en page (via la détection des cases)
* L'exportation PDF prend en charge la compression des images
* Prise en charge de l'ajout de fichiers au projet par glisser-déposer

## v5.4.0 (2025/11/29)

* Ajout d'un paramètre de projet pour ne pas détecter les séparations dans les régions à arrière-plan complexe
* Ajout des opérations de vérification orthographique avec le plugin de grand modèle ChatGPT
* Nouveau plugin de traduction automatique : la traduction intégrée à macOS
* LamaInpaint sur macOS prend en charge l'appel des modèles CoreML
* mangaOCR utilise par défaut la détection des bulles pour fournir les informations de position
* Ajout de la reconnaissance au niveau des mots dans RapidOCR
* Le recadrage d'image prend en charge la transformation de perspective basée sur le masque
* Les paramètres d'API prennent en charge l'effacement des paramètres par clic droit
* Correction de la fusion des mots non arabes consécutifs dans le texte arabe
* Correction du problème où les mots non arabes consécutifs n'étaient pas inversés comme un tout lors de l'exportation d'un PDF en arabe


## v5.3.0 (2025/11/20)

* Ajout des fonctions de recadrage et de rotation à n'importe quel angle dans l'édition d'image
* Ajout du français et du vietnamien à la liste des langues de RapidOCR
* Ajout d'un élément de menu pour inverser le texte
* RapidOCR utilise la version v5 du modèle arabe
* Ajout d'un élément de menu pour filtrer les images dans la recherche et le remplacement
* Le gestionnaire d'images traduites prend en charge l'inversion de la sélection
* Suppression des caractères de contrôle de direction dans le texte lors de la génération du PDF
* Ajout de la suppression des régions à faible confiance aux flux de travail personnalisés
* Correction du problème où l'image courante de la recherche et du remplacement ne changeait pas après un changement d'image
* Correction du paramètre erroné du dossier des résultats intermédiaires lors de la génération de PSD
* Correction du problème où la couche de texte du PDF exporté pouvait dépasser les limites du document
* Correction du problème où l'opération de génération de PDF ne signalait pas d'erreur
* Correction du problème où les caractères non arabes étaient inversés lors de la génération d'un PDF en arabe

## v5.2.0 (2025/11/15)

* Retrait du script Photoshop en AutoitV3, remplacé par l'appel direct de fichiers JavaScript
* Utilisation de Shell+AppleScript sur macOS pour activer Photoshop
* Le serveur prend en charge la transmission des flux de travail, de l'API, des paramètres de projet et du nom du modèle
* La valeur par défaut de l'extension en pixels de la retouche d'image passe de 20 à 5
* Si le masque couvre toute l'image, suppression du contenu du masque sur quelques pixels des bords
* Lorsque le serveur choisit l'OCR selon la langue, il choisit aussi selon la langue s'il faut désactiver l'ordre de lecture de droite à gauche
* Ajout des paramètres de largeur maximale de la retouche d'image et de proportion de chevauchement de la fenêtre glissante de retouche d'image
* Pas d'adoucissement du masque par défaut
* Dans les paramètres du projet, la sélection des méthodes de retouche d'image par apprentissage profond telles que MIGAN ou Lama ne décoche plus l'opération par région de texte
* Utilisation de Krita pour convertir les PSD en JPG
* Retrait des opérations PSD obsolètes
* La génération de PSD modifiable prend en charge les opérations sur l'image courante
* Correction du problème de chemin lors de l'ajout de l'image sans texte dans le script PS

## v5.1.1 (2025/11/12)

* L'image de l'outil de suppression de texte peut être déplacée
* Remplissage de l'image de suppression de texte à partir du masque
* Ajout d'un paramètre de projet pour adoucir le masque lors du remplissage de l'image sans texte
* La génération de masque ne supprime que les contours sans contour externe, au lieu de ne conserver que les contours les plus nombreux
* Autres corrections de bugs

## v5.1.0 (2025/11/08)

* Ajout dans l'éditeur de masque d'options de dilatation ou d'érosion du masque sur les régions sélectionnées, et modification du mode de sélection du mode d'opération par défaut
* Nouveau format de sortie : PSD rastérisé (dépend de Krita)
* Refonte de l'exportation au format ORA
* Pour les nouveaux projets, le masque et l'image sans texte sont enregistrés par défaut dans le dossier `intermediateResults`
* Modification du chemin de sortie pour utiliser le dossier de sortie comme racine
* Ajout du générateur de masque SegmentAnything, plus adapté au texte sur arrière-plan complexe
* Ajout de flux de travail personnalisés pour restaurer l'état de l'interface, générer l'image de masque et générer l'image sans texte
* Ajout d'un élément de menu pour générer le masque ou l'image sans texte de l'image courante
* Prise en charge de la sortie WebP sans perte
* Optimisation de l'utilisation de la mémoire de l'OCR et de la détection des bulles pour les images longues
* La fermeture de la boîte de progression permet d'arrêter les opérations d'OCR et de détection des bulles sur une seule image
* Choix du format intermédiaire JPG ou PNG de la retouche d'image externe selon l'extension
* Dans les paramètres du projet, la sélection des méthodes de retouche d'image par apprentissage profond telles que MIGAN ou Lama décoche l'opération par région de texte
* Correction du problème d'annulation mutuelle dans la génération de masque des parties qui se chevauchent des zones de texte
* Correction du problème où le mode traduction était ouvert prématurément lors de la traduction par le serveur
* Correction du problème de non-prise en charge des images de plus de 65500 pixels par la détection des cases
* Correction du problème où les coordonnées de la région de texte après extension n'étaient pas mises à jour lors de la modification du masque d'une seule région

## v5.0.0 (2025/11/01)

* Ajout de la détection des bulles aux modes de génération de masque
* La génération de masque par détection des bulles et OCR ne traite par défaut que l'image entière
* Les paramètres de masque et de méthode de retouche d'image sont désormais enregistrés par nom
* La retouche d'image ne remplace que l'image à l'emplacement des zones de texte
* Ajout de la méthode de retouche d'image MIGAN
* La retouche d'image prend en charge la fenêtre glissante pour les grandes images ou la conservation des détails
* Optimisation de l'effet de suppression de texte du modèle CG
* L'image sans texte d'une région en cours d'édition étend les pixels selon les paramètres du projet
* L'outil de suppression de texte prend en charge l'annulation, les opérations par région et la retouche à partir de l'image courante
* Les contrôles de pourcentage de l'outil de suppression de texte et de l'éditeur de masque prennent en charge la molette de la souris
* L'opération de dilatation du masque s'applique désormais à l'image entière, et non à une seule région de texte
* Optimisation de la vitesse de suppression de texte et de génération de masque
* Mise à jour du plugin Lama pour prendre en charge les images d'entrée de taille dynamique et ajout d'un paramètre de taille maximale
* Mise à jour du prompt de Sakura pour éviter les fusions de lignes
* ChatGPT utilise un prompt de traduction par lots simplifié
* Ajout d'une préférence pour mémoriser ou non les résultats de traduction automatique
* Ajout d'un élément de menu pour supprimer le masque et l'image sans texte de l'image courante
* La valeur par défaut de l'extension en pixels de la retouche d'image passe de 5 à 20
* Correction du problème de coordonnées incorrectes après l'extension en pixels de la retouche d'image
* Autres corrections de bugs

## v4.7.0 (2025/10/26)

* La détection de couleur s'exécute dans un thread séparé pour éviter que le programme ne réponde plus
* La détection de la couleur du texte prend en charge l'utilisation de l'OCR
* Ajout d'un modèle pour les images CG
* Ajout de l'OCR CTC 48px de manga-image-translator en version ONNX
* Ajout d'un paramètre de projet pour supprimer l'arrière-plan aux deux extrémités du texte de l'image lors de l'exécution de l'OCR en mode reconnaissance pure
* Lors de l'ajustement des régions sélectionnées par décalage, si le numéro cible dépasse les limites, on ajoute ou soustrait le nombre total de régions et le numéro cible
* Correction du problème où la modification de la couleur depuis la barre d'outils était sans effet lorsque la région de texte avait l'attribut textColor


## v4.6.0 (2025/10/24)

* En mode composition, la taille de police est mise à jour après avoir relâché la souris lors de la sélection d'une zone de texte
* La définition du nom de police depuis la barre d'outils n'ajoute plus en même temps la taille de police aux styles locaux
* Les opérations telles que la taille de texte automatique vérifient si les styles locaux ont une taille de police, plutôt que de vérifier l'existence de styles locaux
* Ajout des résultats au niveau des mots dans l'OCR de macOS
* Mise à jour du plugin ChatGPT pour prendre en charge les modèles de réflexion de SiliconFlow
* L'exportation PDF prend en charge l'utilisation d'images sans texte ou l'absence d'ajout d'image
* L'exportation PDF prend en charge le texte vertical, le texte multiligne et l'arabe
* La couche de texte de l'exportation PDF peut être définie comme visible
* L'importation PDF prend en charge l'importation du texte au niveau des mots
* L'importation PDF prend également en charge l'importation du texte lors de la sélection de l'extraction d'images
* Ajout du lao, du thaï et du khmer à la liste des langues sans espaces

## v4.5.0 (2025/10/18)

* Nouveaux modes de tri : antihoraire, horaire, colonnes de texte
* Nouvelle méthode de détection des cases : regroupement de texte
* Ajout d'une fonction d'ajustement en lot de l'ordre des régions ou des cases sélectionnées
* La détection des cases prend en charge la spécification du mode de tri et du modèle de détection d'objets
* L'opération de fusion des régions du traitement par lots s'exécute désormais dans un thread pour éviter que le logiciel ne réponde plus
* Optimisation du chargement des plugins
* Ajout d'une option de calcul des marges de texte à l'exportation PSD
* Ajout du plugin de traduction Sakura
* Correction de l'erreur de rendu du moteur de texte vertical lorsque le texte ne contient qu'un retour à la ligne
* Correction du problème d'ordre incorrect des résultats lors de la définition du numéro par double-clic
* Correction du problème où l'outil de suppression de texte ne traitait pas correctement la valeur alpha des images contenant des informations de transparence
* Correction de l'échec des opérations telles que l'OCR sur les images WebP
* Correction du problème où le titre du logiciel n'était pas mis à jour et l'entrée récente n'était pas ajoutée après un Enregistrer sous
* Correction de l'erreur lorsqu'un style n'existait pas lors de la détermination du style selon la direction du texte
* Autres corrections de bugs

## v4.4.0 (2025/09/27)

* Ajout d'une barre d'outils des flux de travail
* Sélection de la langue de l'OCR selon la langue du projet après la création d'un projet
* Enregistrement automatique du fichier de projet après la création d'un projet
* Chargement des flux de travail prédéfinis lors de la première ouverture de la configuration des flux de travail personnalisés
* Lors de la modification d'un style depuis la barre d'outils, seul le style modifié est conservé dans les styles locaux
* Correction du problème de passage de paramètres en ligne de commande pour les bat et exe sous Windows

## v4.3.0 (2025/09/24)

* Élargissement de la largeur et de la hauteur de l'image à 1024 lors de l'utilisation de la détection des bulles sur les petites images
* Détermination de l'ajout d'espaces et de retours à la ligne selon la direction de fusion et s'il s'agit de caractères
* Les résultats de reconnaissance par caractère de RapidOCR ajoutent l'attribut `isChar` lors de l'enregistrement
* Ajout du modèle arabe à RapidOCR
* Pas d'extension des régions par défaut après la détection des bulles
* Ajout d'une opération de flux de travail personnalisé pour reconnaître les régions allongées, et suppression du paramètre de projet permettant de réserver l'OCR en mode reconnaissance pure au texte allongé
* Ajout d'une opération de flux de travail personnalisé pour reconnaître les régions sans texte pouvant être fusionnées avec des régions de texte
* Ajout d'un paramètre de projet pour le ratio des régions allongées
* Mise à jour du modèle de manga japonais
* Correction du problème où les coordonnées de la détection des bulles pouvaient contenir des décimales
* Correction du problème où les caractères ne contenant qu'un espace étaient supprimés lorsque la suppression des retours à la ligne était activée
* Correction du problème où un espace superflu pouvait apparaître lors de la traduction du texte des opérations de flux de travail personnalisé avec paramètres


## v4.2.0 (2025/09/21)

* La fonction d'ajustement automatique de la taille de police du moteur de texte vertical est plus précise
* La détection de la direction du texte se base par défaut sur les proportions de l'image
* Ajout d'un élément de menu pour ouvrir le dossier du logiciel
* Lors de la traduction par lots, l'opération de fusion des régions est également exécutée après la détection des bulles
* L'OCR en mode reconnaissance pure peut être réservé au texte allongé
* RapidOCR prend en charge le renvoi de résultats au niveau des caractères
* Inclusion par défaut de mangaOCR en version ONNX
* Optimisation des modèles à partir du nouvel OCR intégré
* Libération rapide des Mat d'OpenCV pour optimiser l'utilisation de la mémoire
* La fusion des régions en lot devient une opération indépendante de l'interface
* Chargement par défaut de la bibliothèque dynamique d'ONNXRuntime
* Ajout de la suppression des régions sans texte (OCR) aux flux de travail personnalisés
* L'OCR d'une seule région recadre selon la position enregistrée et non selon la position du contrôle
* RapidOCR corrige l'ordre par défaut lors de la reconnaissance d'une seule région
* L'option d'ajustement de l'ordre lors de la reconnaissance d'une seule région est sans effet pour les moteurs de reconnaissance pure tels que mangaOCR
* Correction du problème d'ordre du texte dans la version précise de Baidu OCR
* Correction du problème de traduction des éléments avec paramètres des flux de travail personnalisés
* Correction du problème de sélection erronée du texte lors de l'activation du mode composition sans afficher la traduction
* Correction du problème d'impossibilité d'ajouter un élément général lors de l'activation de l'ajout de paramètres dans un flux de travail personnalisé



## v4.1.0 (2025/09/13)

* Nouvel OCR intégré : rapid
* Inclusion par défaut du [modèle](https://github.com/xulihang/ImageTrans-docs/issues/860) de reconnaissance des lignes de texte japonais
* Ajout du plugin DocTROCR

## v4.0.2 (2025/09/10)

* La fusion des régions d'une case et l'ajout de texte aux régions existantes par OCR effectuent une fusion de régions pour corriger l'ordre
* L'ajout de texte aux régions existantes par OCR permet de choisir de ne pas supprimer le contenu de l'image situé hors des régions
* Restauration du comportement d'extension des limites lors de la fusion horizontale de régions contenant du texte
* Optimisation de la vitesse de détection des cases
* Optimisation de l'affichage des numéros
* Correction du problème d'inefficacité du réglage de la méthode de détection des cases dans le flux de travail personnalisé
* Correction d'un possible dépassement d'index lors du saut à la position correspondante de l'image via la sélection d'une zone de texte et de la modification de l'ordre

## v4.0.1 (2025/08/29)

Amélioration de la netteté du texte pivoté [#950](https://github.com/xulihang/ImageTrans-docs/issues/950)

## v4.0.0 (2025/08/23)

* Ajout d'une méthode de génération de masque : OCR
* Conservation du canal transparent lors du chargement de WebP
* En présence de texte, la séparation des régions de détection part du centre
* Utilisation du chemin du projet comme titre du logiciel [#946](https://github.com/xulihang/ImageTrans-docs/issues/946)
* Correction du problème d'impossibilité d'appliquer le style par défaut lorsque le style de police défini n'existe pas
* Correction du problème d'ajout par défaut du nom de catégorie comme style de police avec la détection de bulles de la version serveur
* Correction du problème empêchant la sélection multiple avec la touche Command sur macOS
* Correction du problème d'indisponibilité de PatchMatch (version macOS recompilée, format PNG utilisé par défaut)

## v3.19.1 (2025/08/17)

* Utilisation uniforme d'entiers comme unité de pixel pour les dimensions de rendu du moteur de texte à différentes échelles
* Prise en charge de l'importation directe d'images au format WebP


## v3.19.0 (2025/08/16)

* Possibilité d'utiliser l'OCR pour la détection de rotation et ajout des paramètres de projet associés [#934](https://github.com/xulihang/ImageTrans-docs/issues/934)
* Mise à jour du plugin OCR pour prendre en charge la détection de rotation
* Ajout d'un paramètre de proportion de chevauchement des régions
* Autres corrections de bugs


## v3.18.2 (2025/08/10)

* Ajout d'un raccourci clavier pour basculer le mode d'effacement dans l'éditeur de masque [#issue924](https://github.com/xulihang/ImageTrans-docs/issues/924)
* Ajout d'une opération permettant de définir un décalage fixe pour les régions de texte
* Correction du problème de recalcul de la taille du texte des régions de texte dû au déclenchement de l'événement de modification du texte par un clic sur une région de texte
* Correction du problème de flou possible du texte dû à la définition en double précision de la taille des régions de texte [issue928](https://github.com/xulihang/ImageTrans-docs/issues/928)

## v3.18.1 (2025/07/26)

* Ajout d'un élément de menu d'opération sur les régions de texte : coller la traduction
* Ajout du plugin Ollama
* Affichage de l'interface principale seulement après le chargement complet des plugins
* Désactivation par défaut du nettoyage automatique du serveur
* Correction du problème de disparition des zones de texte des régions de texte sélectionnées lors de l'unification des polices
* Correction du problème de non-déclenchement de l'événement correspondant lors de la désélection de régions de texte en sélection multiple

## v3.18.0 (2025/07/19)

* Prise en charge de l'enregistrement de paramètres supplémentaires pour les opérations de détection et de reconnaissance de texte dans le flux de travail personnalisé [#issue914](https://github.com/xulihang/ImageTrans-docs/issues/914)
* Ajout d'un visualiseur de journal
* Ajout d'un gestionnaire de signets
* Correction du problème d'invalidation du modèle de bulles lors d'une seconde sélection
* Correction du problème de non-fermeture du projet déjà ouvert lors de l'ouverture d'un projet par glisser-déposer


## v3.17.5 (2025/07/05)

* Le texte des régions d'édition de texte en écriture bidirectionnelle, comme l'arabe, est aligné à droite par défaut
* Un double-clic sur une région de texte active l'édition du texte
* Les règles de correction automatique peuvent être exportées vers CSV ou importées depuis CSV
* Prise en charge du filtrage des régions avec des règles personnalisées
* Ajout d'un élément de menu pour ouvrir l'image sans texte avec un programme externe
* Ajout d'un segmenteur de texte

## v3.17.4 (2025/06/20)

* Ajout d'éléments de menu pour actualiser l'image et l'ouvrir avec un programme externe
* Ajout d'éléments de menu pour étendre et réduire les régions sélectionnées
* Prise en charge de la définition d'une couleur de bordure pour les régions à faible confiance
* Utilisation du tri naturel pour le tri des noms de fichiers
* L'outil de suppression de texte et l'éditeur de masque utilisent le facteur de zoom de l'image de l'interface principale à l'ouverture

## v3.17.3 (2025/06/10)

* Ajout d'un élément de menu pour les paramètres de style [#888](https://github.com/xulihang/ImageTrans-docs/issues/888)
* Ajout d'un élément de menu pour le filtrage des régions [#887](https://github.com/xulihang/ImageTrans-docs/issues/887)
* Optimisation de la logique des paramètres de style locaux
* Correction du problème d'échec d'ouverture des paramètres de style locaux [#889](https://github.com/xulihang/ImageTrans-docs/issues/889)
* L'outil de suppression de sous-titres vidéo traite toutes les images par lots de 30 images lorsqu'il utilise STTN


## v3.17.2 (2025/06/04)

* Optimisation de la logique de changement d'image
* Ajout de l'attribut de texte supprimé aux images sans texte générées par l'outil de suppression de sous-titres vidéo
* Prise en charge de la génération de zones de texte pour toutes les images par l'outil de suppression de sous-titres vidéo
* Correction du problème d'ouverture de l'outil de suppression de sous-titres vidéo nécessitant un chargement préalable des sous-titres

## v3.17.1 (2025/06/02)

* Prise en charge de l'ajustement du style du texte avec CSS [#883](https://github.com/xulihang/ImageTrans-docs/issues/883)
* Ajout de la méthode de suppression de texte STTN
* Prise en charge de l'appel à STTN, méthode de suppression de texte dédiée à la vidéo, par l'outil de suppression de sous-titres vidéo

## v3.17.0 (2025/05/18)

* Ajout de l'outil de suppression de sous-titres vidéo
* Nouvelle méthode de suppression de texte : flou gaussien
* Ajout d'éléments de menu pour inverser la sélection, sélectionner les régions de même style et placer en arrière-plan
* Ajout d'une option de filtrage des régions de texte à fond non transparent
* Prise en charge de la définition d'un masque pour l'opération OCR afin de supprimer les régions à ne pas reconnaître [#881](https://github.com/xulihang/ImageTrans-docs/issues/881)
* Conservation des attributs des régions de texte divisées
* Le visualiseur d'image originale permet de basculer la synchronisation du zoom [#879](https://github.com/xulihang/ImageTrans-docs/issues/879)
* Correction du problème de définition incorrecte de la largeur et de la hauteur des pixels d'extension lors de la suppression de texte

## v3.16.2 (2025/05/10)

* Désactivation du bouton correspondant tant que l'opération de traitement d'une image unique du flux de travail personnalisé n'est pas terminée
* L'ajout de texte aux régions existantes par OCR prend en charge l'ajout d'informations telles que la couleur et la rotation du texte
* Ajout d'une option pour modifier ou non la transparence du texte lors de la modification de la transparence de la couche de recouvrement
* Ajout de la suppression de l'image de masque et de l'image sans texte au flux de travail personnalisé

## v3.16.1 (2025/05/02)

* Prise en charge du filtrage des résultats selon l'ID de catégorie par la détection de bulles
* Prise en charge de la fusion des textes selon la couleur du texte
* La fusion selon les informations de position des paragraphes prend en charge le texte vertical
* Ajout de l'effacement du texte source, du texte cible, de la position du texte cible et du style au flux de travail personnalisé
* Ajout d'un bouton de réinitialisation au flux de travail personnalisé


## v3.16.0 (2025/04/26)

* Prise en charge de l'ajout de bordures à l'image lors de l'OCR d'une seule région [#issue866](https://github.com/xulihang/ImageTrans-docs/issues/866)
* Ajout d'options de différence maximale d'ordonnée et d'abscisse dans les paramètres du projet de positionnement et de fusion de texte
* Lors de l'ajout de texte aux régions existantes par OCR, l'image située hors des régions est supprimée
* Correction du problème d'inefficacité du déplacement de l'image sur le texte lors de la consultation de la traduction

## v3.15.4 (2025/04/18)

* Prise en charge de la sélection de fragments vides par expression régulière dans la recherche et le remplacement
* Prise en charge du zoom centré sur la souris
* Ajout d'un raccourci clavier pour « Atteindre »

## v3.15.3 (2025/03/29)

* Ajout d'éléments de menu pour insérer le texte source dans le texte cible et le texte cible dans le texte source
* Ajout d'un bouton magique pour prendre en charge l'exécution d'opérations d'édition de texte personnalisées [#858](https://github.com/xulihang/ImageTrans-docs/issues/858)
* Ajout d'un plugin de traduction DeepSeek dédié

## v3.15.2 (2025/03/13)

* Ajout d'un lien d'aide
* Ajout d'un paramètre de caractères à hauteur libre dans le moteur de texte vertical [#841](https://github.com/xulihang/ImageTrans-docs/issues/841)

## v3.15.1 (2025/03/08)

* Amélioration de l'extraction des sous-titres incrustés
* Ajout d'un élément de menu « Atteindre »

## v3.15.0 (2025/03/02)

* Ajout d'un extracteur de sous-titres incrustés
* Ajout d'une prise en charge préliminaire de l'OCR multithread
* Ajout d'une option de mode de remplacement à la recherche et au remplacement
* Optimisation de la logique de tri d'après les nombres contenus dans les noms de fichiers
* Correction du problème de non-échappement des sauts de ligne dans les traductions des fichiers TXT séparés par des tabulations

## v3.14.4 (2025/02/19)

* Prise en charge de l'ouverture des projets avec l'application par défaut du système
* Prise en charge de l'ouverture de l'image courante avec un programme externe par clic droit
* Correction des coordonnées incorrectes des captures de région fixe en haute DPI sous macOS
* Correction d'erreurs possibles lors de la traduction de plusieurs phrases avec Google Translate [#issue835](https://github.com/xulihang/ImageTrans-docs/issues/835)

## v3.14.3 (2025/01/08)

* Correction du décalage des textes non alignés à gauche lors du changement d'échelle
* Ajout d'un plugin OCR utilisant ChatGPT

## v3.14.2 (2025/01/07)

* Correction de l'échec de la transformation de perspective des régions pivotées sur les images de grande taille [#issue813](https://github.com/xulihang/ImageTrans-docs/issues/813)
* Détection de la modification du projet par un autre processus lors de l'enregistrement
* Ajout d'une opération de fusion des régions d'une case aux flux de travail personnalisés

## v3.14.1 (2024/12/28)

* Rayon d'arrondi des zones de texte superposées en mode non précis défini par défaut à 10
* Agrandissement de la zone de réponse au redimensionnement des zones de texte en mode composition
* Correction du flou des coins arrondis des zones de texte superposées en mode non précis
* Correction de l'échec du passage à une image téléchargée sur le serveur

## v3.14.0 (2024/12/14)

* Ajout d'une fonction de grille
* Ajout d'un élément de menu de vérification orthographique
* Les paramètres d'API utilisent désormais un TextArea pour permettre la saisie de texte multiligne
* En mode de sélection multiple par cadre, cliquer sur une zone de texte avec la touche Ctrl enfoncée ne la désélectionne plus
* Le mode de sélection multiple par cadre permet de désélectionner en traçant un cadre tout en maintenant la touche Ctrl enfoncée
* Le serveur envoie un signal de battement de cœur toutes les 30 secondes
* Prise en charge par le serveur de la sélection du moteur OCR selon la langue source
* Correction de l'absence de passage à l'échelle 100 % lors de la génération de l'image finale en mode serveur

## v3.13.2 (2024/12/10)

* Correction de l'absence de traduction du texte lors de la réinitialisation des raccourcis clavier
* Correction de l'absence d'utilisation des raccourcis clavier propres à macOS lors de la réinitialisation
* Correction de l'absence de saut vers le fichier correspondant après le collage d'un fichier
* Ajout du format WebP à l'exportation
* Intervalle de détection de la connexion au serveur réduit de 30 à 5 secondes
* Prise en charge par le serveur de la conversion des fichiers WebP transmis par chemin local

## v3.13.1 (2024/12/08)

* Correction de la coordonnée Y incorrecte après le réglage de la marge supérieure du moteur de texte vertical
* Correction de la non-analyse des résultats OCR au format JSON
* macOS utilise son propre Java pour lancer les jar externes
* Prise en charge par le serveur de la transmission des seules données textuelles, sans les images
* Le serveur transmet par défaut les images au format WebP pour économiser la bande passante

## v3.13.0 (2024/12/07)

* Optimisation du rendu des caractères sans espacement du moteur de texte vertical
* Optimisation de la reconnaissance d'une région unique par mangaTranslator
* Prise en charge par le serveur de la connexion à un serveur distant

## v3.12.0 (2024/11/24)

* Lors de l'utilisation de la barre d'outils de sélection, cliquer sur une zone de texte ou la déplacer affiche ses coordonnées en bas de l'interface
* Ajout d'opérations d'uniformisation de la largeur et de la hauteur
* Ajout d'un sélecteur de couleur à la barre d'outils de police
* Prise en charge par la recherche et le remplacement de la conversion en majuscule initiale et en casse de titre
* Ajout d'un élément de menu pour calculer automatiquement une taille de police adaptée
* Le masque du mode non précis n'est généré qu'à partir des régions du texte source
* Correction du calcul erroné de la position de suppression par région de l'outil de suppression de texte
* Correction de l'échec de l'analyse des flux de travail par le serveur
* Correction des problèmes d'affichage et d'enregistrement des paramètres de flux de travail
* Correction de l'absence de prise en charge des doubles pages par le tri des cases
* Correction de l'absence de réaction en temps réel du masque du mode non précis à la rotation

## v3.11.2 (2024/11/16)

* Ajout de la traduction automatique d'Alibaba
* Le mode barre d'outils de consultation de l'image originale permet d'afficher les zones de texte source
* Ajout d'un élément de menu pour ajuster l'ordre des zones de texte

## v3.11.1 (2024/11/03)

* Prise en charge de l'importation des images PDF au format JBIG
* Prise en charge de l'appel des flux de travail personnalisés en ligne de commande pour traiter des fichiers [#issue785](https://github.com/xulihang/ImageTrans-docs/issues/785)
* Prise en charge de la modification des paramètres courants par les flux de travail personnalisés
* Prise en charge de l'utilisation de la couleur d'arrière-plan des styles de texte comme couleur des zones de texte [#issue775](https://github.com/xulihang/ImageTrans-docs/issues/775)
* Ajout du tri des cases et de l'opération de réduction de région aux flux de travail personnalisés [#issue774](https://github.com/xulihang/ImageTrans-docs/issues/774) [#issue776](https://github.com/xulihang/ImageTrans-docs/issues/776)


## v3.11.0 (2024/10/25)

* Rester sur l'image courante après l'importation d'images
* Prise en charge de l'appel au service local de détection de bulles [#issue771](https://github.com/xulihang/ImageTrans-docs/issues/771)
* Prise en charge de la détection d'objets par la détection des cases [#issue772](https://github.com/xulihang/ImageTrans-docs/issues/772)
* Possibilité d'enregistrer plusieurs configurations de flux de travail personnalisés


## v3.10.3 (2024/10/07)

* Prise en charge de l'ouverture des projets en ligne de commande et par glisser-déposer de fichiers
* Ajout d'un visualiseur d'image originale [#issue763](https://github.com/xulihang/ImageTrans-docs/issues/763)
* Correction de l'enregistrement de traductions automatiques vides

## v3.10.2 (2024/09/22)

* Possibilité de définir si le texte doit être extrait lors de l'importation d'un PDF
* Restauration automatique de la fenêtre du lecteur d'écran après l'appel d'une capture d'écran par raccourci clavier
* Mise à jour du plugin ChatGPT pour prendre en charge la définition d'un host avec numéro de version
* Correction de l'échec de génération du masque causé par des zones de texte de largeur ou de hauteur nulle
* Correction de la faible résolution des captures du lecteur d'écran en haute DPI
* Le redimensionnement des régions basé sur le masque de texte détermine si le masque est correct à partir de la position du point central

## v3.10.1 (2024/09/15)

* Saut par défaut vers la dernière image ouverte à l'ouverture d'un projet
* Correction de l'erreur à l'exportation des images sans case et des cases de taille incorrecte

## v3.10.0 (2024/09/07)

* Ajout de la prise en charge du texte horizontal à l'intérieur du texte vertical [#issue507](https://github.com/xulihang/ImageTrans-docs/issues/507)
* Prise en charge de la définition du texte barré et du soulignement dans le texte enrichi du moteur de texte horizontal
* Effacement des lignes d'alignement au relâchement de la souris et à l'actualisation
* Possibilité d'ajuster le décalage du texte vertical
* L'opération de limitation des zones de texte à l'intérieur de l'image enregistre les informations de position des régions de traduction

## v3.9.0 (2024/09/01)

* Prise en charge par la détection de bulles de l'affichage d'une boîte de dialogue de sélection de modèle
* Nouvel alignement : justifié
* Ajout de lignes d'alignement auxiliaires et de l'aimantation automatique [#issue733](https://github.com/xulihang/ImageTrans-docs/issues/733)
* Possibilité d'appeler le moteur 2 d'OCRSpace
* Prise en charge de la conversion de casse du texte source avant la traduction automatique

## v3.8.0 (2024/08/25)

* Prise en charge du traitement automatique des images à fond sombre par la détection des cases [#issue741](https://github.com/xulihang/ImageTrans-docs/issues/741)
* Prise en charge de la définition de la couleur d'arrière-plan des bandes dessinées verticales exportées
* Ajout d'une fonction utilisant la détection de bulles pour supprimer les régions superflues et compléter les régions manquantes
* Correction de l'absence d'utilisation de l'image inversée lors de la fusion des zones de texte quand l'inversion est activée
* Possibilité de définir, lors des opérations par lots, si la détection heuristique de texte doit effectuer les opérations liées à la confiance des zones de texte
* Les modèles de détection de bulles peuvent être placés dans le dossier `models` du logiciel, et le modèle à utiliser se choisit dans les paramètres du projet
* Activation par défaut de la détection de bulles hors ligne
* Ajout d'un menu contextuel de traduction en un clic basé sur les flux de travail personnalisés
* Ajout de modèles pour les mangas chinois, coréens, européens et américains, etc.
* Prise en charge par les modèles de la configuration du besoin pour l'utilisateur de définir manuellement la langue et de télécharger les modèles de détection de bulles

## v3.7.0 (2024/08/18)

* Prise en charge du texte incliné dans la détection de texte en scène naturelle
* Prise en charge des régions inclinées par le générateur de masques rectangulaires intégré
* Les opérations liées à la détection des régions de texte ne vérifient le chevauchement qu'avec les régions existantes
* Lors de la suppression de texte par région, les régions pivotées utilisent le rectangle englobant
* Correction du calcul erroné de la largeur et de la hauteur lors de la réimportation des données d'annotation au format OBB
* Correction du problème de fusion des textes pivotés à 90 degrés par la détection d'objets
* Correction de l'appel des modèles non ONNX
* Correction du décalage de l'image lorsque le cadre est dessiné à l'extérieur dans l'éditeur de masques et l'outil de suppression de texte

## v3.6.1 (2024/08/17)

* Ajout de la prise en charge de YOLO OBB pour détecter le texte incliné
* Prise en charge de l'utilisation de flux de travail personnalisés sur le serveur
* Correction du fait que la zone de texte ne restaure pas son angle de rotation après l'annulation de la rotation
* Correction du fait que la rotation n'est pas appliquée à la zone de texte lors de la détection de l'angle du texte par OCR

## v3.6.0 (2024/08/10)

* Ajout d'un paramètre pour l'extension en pixels lors de la suppression de texte par région de texte
* Ajout d'un élément de menu pour réduire les régions
* Ajout d'une opération pour ajuster la taille des régions de texte selon le masque
* Ajout d'un correcteur d'orientation d'image pour corriger, d'après les informations Exif, l'orientation des images prises avec des téléphones Apple et Samsung
* Ajout de la fonction de fusion avec l'image suivante
* Correction automatique de l'orientation des images téléchargées d'après les informations Exif
* Optimisation du changement de page lors des opérations par lots
* Ajout d'une opération au flux de travail personnalisé pour ajouter les résultats OCR aux régions existantes
* Activation par défaut du mode glisser-déposer et de la suppression de texte par région de texte
* Correction du fait que la traduction Baidu ne prend pas en charge le texte multiligne

## v3.5.0 (2024/07/28)

* Possibilité de redimensionner et de déplacer les zones de texte à l'aide des quatre coins
* Enregistrement des informations de position des traductions en double précision
* Prise en charge de l'exportation des cases sous forme d'une seule image longue


## v3.4.0 (2024/07/21)

* Prise en charge de l'importation de fichiers aux formats Epub, Mobi, ZIP et CBZ
* Ajout d'un assistant de plugins pour gérer les plugins
* Ajout d'une barre d'outils d'édition, avec prise en charge de la rotation et du retournement des images
* Ajout d'un gestionnaire de pages en vis-à-vis. En définissant les images en vis-à-vis, celles-ci sont divisées en deux images gauche et droite lors du tri et de la détection des cases
* Prise en charge du réglage des paramètres des plugins de suppression de texte et de génération de masques dans les préférences
* Correction du chargement incorrect de l'image sans texte par l'outil de suppression de texte
* Mémorisation des résultats de traduction automatique de plusieurs phrases

## v3.3.1 (2024/07/06)

* Correction du fait que les zones de texte ne sont pas redessinées lors du changement de zoom
* Correction de la perte de la classification des bulles fusionnées lors de la détection des bulles

## v3.3.0 (2024/06/30)

* Ajout d'un paramètre de marge supérieure dans les styles de police
* Ajout d'éléments de menu contextuel pour les opérations sur les régions de texte dans la recherche et le remplacement
* Ajout d'opérations telles que la suppression des régions extérieures et la détection de l'orientation du texte au flux de travail personnalisé
* Lors de la création d'un projet, proposer d'importer les images si le dossier du fichier de projet en contient
* Optimisation des performances lors du changement de zoom
* Mise à jour de PDFBox pour corriger l'importation des PDF japonais

## v3.2.1 (2024/06/24)

* La traduction en un clic effectue par défaut la détection et le tri des cases
* Optimisation de l'affichage du moteur de texte horizontal lorsqu'il évite de couper les mots

## v3.2.0 (2024/06/23)

* Ajout de la création d'un projet à partir d'un modèle [#issue688](https://github.com/xulihang/ImageTrans-docs/issues/688)
* Prise en charge de l'affichage du nom du style dans les zones de texte
* Renforcement de la prise en charge de la classification par la détection d'objets
* Correction du fait qu'un raccourci clavier par défaut peut ne pas fonctionner lorsqu'il est attribué à une autre fonction [#issue630](https://github.com/xulihang/ImageTrans-docs/issues/630)
* Correction de l'échec du chargement des modèles par OpenCV depuis un chemin contenant des caractères Unicode


## v3.1.1 (2024/06/12)

* Ajout de « Obtenir le score de confiance des régions de texte » au flux de travail personnalisé
* Ajout d'un paramètre de projet pour le seuil de confiance des régions de texte
* Ajout d'un paramètre de projet pour corriger l'ordre du texte des résultats OCR d'une seule région
* Correction du fait que les plugins OCR en mode combiné ne sont pas listés dans les préférences
* Correction du fait que le texte du moteur de texte horizontal devient blanc dans le thème sombre
* Correction de l'échec de la fusion verticale des régions de texte en ordre de lecture de droite à gauche

## v3.1.0 (2024/06/10)

* Ajout d'un bouton de couleur personnalisée dans le sélecteur de couleur
* La définition des couleurs dans la fenêtre des paramètres de composition se fait désormais en prélevant la couleur dans l'image
* Prise en charge du traitement de la seule image courante par le flux de travail personnalisé
* Ajout de nouveaux types de traitement au flux de travail personnalisé : utiliser la couleur du texte reconnu comme couleur de contour, définir la couleur de contour selon la luminosité de la couleur du texte, définir la couleur du texte selon la luminosité de la couleur de contour, faire correspondre le style de texte à l'aide de la couleur de contour
* Correction des caractères illisibles dans la liste des langues de WinRT OCR


## v3.0.0 (2024/06/08)

* Mise à jour du JRE vers Java 23 pour corriger l'incidence des espaces en début et en fin de ligne sur le retour à la ligne automatique [#issue482](https://github.com/xulihang/ImageTrans-docs/issues/482)
* Prise en charge de la définition des styles de zone de texte
* Prise en charge de la sélection de régions dans n'importe quelle direction par l'éditeur de masques

## v2.12.4 (2024/06/02)

* Activation par défaut du centrage vertical
* Maintenir la touche SHIFT en déplaçant une région de texte permet de conserver la position horizontale. Maintenir simultanément SHIFT et Z permet de conserver la position verticale
* Correction de la désactivation du texte enrichi causée par le retour à la ligne du moteur de texte vertical
* Correction de la réinitialisation de la sélection des régions de texte lors du changement de mode de traduction


## v2.12.3 (2024/05/23)

Correction du centrage vertical dans le script PS et du centrage horizontal en mode texte enrichi

## v2.12.2 (2024/05/19)

* Possibilité de définir la langue intermédiaire de la traduction automatique [#issue647](https://github.com/xulihang/ImageTrans-docs/issues/647)
* Correction de l'interruption des opérations par lots due à l'échec de la génération de masques lors des opérations OCR [#issue650](https://github.com/xulihang/ImageTrans-docs/issues/650)
* Correction de la résolution incohérente des images générées par le serveur à un zoom autre que 100 %

## v2.12.1 (2024/05/12)

Possibilité d'être appelé par le serveur pour exécuter l'OCR et la traduction automatique

## v2.12.0 (2024/05/11)

* Ajout d'un paramètre de projet pour éviter de couper les mots
* Ajout d'une préférence pour sélectionner automatiquement la première région de texte lors du changement d'image [#issue642](https://github.com/xulihang/ImageTrans-docs/issues/642)
* Ajout de pseudo-classes pour compléter la personnalisation des styles de zone de texte en CSS [#issue636](https://github.com/xulihang/ImageTrans-docs/issues/636)
* Prise en charge de l'exportation d'images ou de PDF par case
* Ajout des coordonnées et du texte aux résultats renvoyés par le serveur

## v2.11.2 (2024/05/02)

* Correction de la largeur nulle de la colonne de traduction lorsque la traduction est vide dans le fichier docx exporté [#issue639](https://github.com/xulihang/ImageTrans-docs/issues/639)
* Prise en charge de la personnalisation des styles de zone de texte en CSS [#issue636](https://github.com/xulihang/ImageTrans-docs/issues/636)
* Correction de l'affichage flou possible du texte centré horizontalement ou verticalement en raison de l'utilisation de la double précision


## v2.11.1 (2024/04/26)

* Correction du fait que les résultats affichés dans la traduction assistée peuvent contenir ceux de la région précédente lors du passage à une autre région de texte [#633](https://github.com/xulihang/ImageTrans-docs/issues/633)
* Correction de l'erreur de recherche des caractères répétés consécutifs dans la recherche et le remplacement [#631](https://github.com/xulihang/ImageTrans-docs/issues/631)
* Prise en charge de plusieurs directions pour la création de cadres par glissement [#629](https://github.com/xulihang/ImageTrans-docs/issues/629)
* Récupération concurrente des résultats de traduction automatique pour la traduction assistée [#628](https://github.com/xulihang/ImageTrans-docs/issues/628)
* Correction du fait que la liste des polices n'est pas mise à jour immédiatement après l'installation d'une police


## v2.11.0 (2024/04/21)

* Prise en charge de la génération de régions de texte à partir d'un modèle [#issue626](https://github.com/xulihang/ImageTrans-docs/issues/626)
* La sélection n'est plus annulée après avoir défini la police via la fenêtre des paramètres de police [#issue623](https://github.com/xulihang/ImageTrans-docs/issues/623)
* Ajout d'un élément de menu pour créer une copie [#issue622](https://github.com/xulihang/ImageTrans-docs/issues/622)
* Prise en charge du renvoi de plusieurs résultats candidats par les plugins de traduction automatique dans l'onglet de traduction assistée [#issue619](https://github.com/xulihang/ImageTrans-docs/issues/619)


## v2.10.3 (2024/04/15)

* Correction du problème d'enregistrement automatique sans effet lors de l'ouverture via les projets récents
* Correction du problème de prise en compte immédiate des modifications de l'intervalle d'enregistrement automatique dans les préférences
* Correction du problème de réinitialisation de l'état d'enregistrement lors du changement de projet
* Génération d'une sauvegarde du projet courant à la fermeture du logiciel

## v2.10.2 (2024/04/13)

* Prise en charge du réglage de la largeur et de la hauteur du modèle de détection de bulles ONNX
* Prise en charge du double-clic pour modifier le numéro de case
* Ajout d'un élément de menu contextuel pour la fusion des régions
* Ajout de deux modes de tri : vertical puis horizontal et horizontal puis vertical

## v2.10.1 (2024/04/04)

* Prise en charge de la détection des bulles et de l'exportation des données d'annotation sous forme de fenêtre glissante
* Utilisation prioritaire du modèle de bulles placé dans le dossier d'images du projet

## v2.10.0 (2024/03/30)

* Mise à jour d'OpenCV vers 4.9.0
* Ajout de la prise en charge des modèles de détection d'objets Yolov8 (nommer le modèle onnx `model.onnx` et le placer dans le dossier du logiciel pour l'activer)
* Ajout d'un gestionnaire de données d'annotation de détection d'objets, avec prise en charge de l'exportation des données d'annotation au format Yolo et de l'importation des données d'annotation


## v2.9.2 (2024/03/24)

* Ajout de « Copier le texte » au menu contextuel
* Prise en charge, par le lecteur d'écran, de l'ajout au projet de résultats contenant les informations de position du texte
* Prise en charge du réglage des décalages de coordonnée Y et de hauteur pour l'italique simulé du texte horizontal
* Correction du problème de correspondance erronée des images traitées lors du traitement par lots, introduit en 2.9.1 [#issue598](https://github.com/xulihang/ImageTrans-docs/issues/598)
* Correction du problème de réinitialisation du texte de la région sélectionnée lors de la création d'une région de texte lorsque l'enregistrement automatique est activé [#issue598](https://github.com/xulihang/ImageTrans-docs/issues/598)


## v2.9.1 (2024/03/17)

* Ajout d'un outil de suppression des informations de transparence, permettant de générer des images JPG sans transparence afin de résoudre le problème de gestion incorrecte de la transparence par la plupart des méthodes d'OCR et de traitement d'image [#issue593](https://github.com/xulihang/ImageTrans-docs/issues/593)
* Si une image de texte pur existe, l'utiliser en priorité dans les différentes méthodes de traitement d'image. Elle n'était auparavant utilisée que pour l'OCR des régions de texte
* Nouvelle méthode d'effacement précis du texte : le texte transparent. Prise en charge de la restauration de l'arrière-plan en combinant le masque et les pixels environnants. Principalement destinée à supprimer le texte sur un arrière-plan transparent [#issue302](https://github.com/xulihang/ImageTrans-docs/issues/302)
* Correction du problème de non-réponse des événements de souris sur le contenu des images transparentes


## v2.9.0 (2024/03/17)

* Activation de l'enregistrement automatique par défaut
* Modification de l'alignement par défaut en alignement à gauche
* Ajout d'un paramètre de projet pour le retournement horizontal de l'image finale [#discussion592](https://github.com/xulihang/ImageTrans-docs/discussions/592)
* Prise en charge du réglage de la taille de police par la fonction de texte enrichi du moteur de texte vertical
* Prise en charge des lignes vides par le moteur de texte vertical
* Correction du comportement d'interligne du moteur de texte vertical
* Correction du problème de réinitialisation de la liste des polices lors du changement d'éditeur de code de texte enrichi [#issue587](https://github.com/xulihang/ImageTrans-docs/issues/587)

## v2.8.8 (2024/03/09)

* Prise en charge de la fusion des textes selon la position des paragraphes [#issue586](https://github.com/xulihang/ImageTrans-docs/issues/586)
* Ajout d'un intervalle de traitement pour l'OCR en ligne et la détection des bulles des images longues

## v2.8.7 (2024/03/04)

* Correction du problème d'échec de fusion des régions de texte causé par le tri
* Correction du traitement des textes multilignes par Baidu Translate

## v2.8.6 (2024/03/01)

* Correction du problème de suppression des sauts de ligne dans le résultat de fusion des lignes de texte lorsque « Suppression automatique des sauts de ligne » n'est pas cochée
* Division par deux de la hauteur et de la largeur lors de la fusion de textes par le lecteur d'écran

## v2.8.5 (2024/02/25)

* Prise en charge de l'exportation PDF avec l'image d'origine et de l'exportation PDF avec texte recherchable [#issue580](https://github.com/xulihang/ImageTrans-docs/issues/580)
* Prise en charge de la génération de régions de texte à partir d'un masque [#issue577](https://github.com/xulihang/ImageTrans-docs/issues/577)

## v2.8.4 (2024/02/15)

Optimisation du tri des textes lors de la fusion des régions de texte [#issue576](https://github.com/xulihang/ImageTrans-docs/issues/576)

## v2.8.3 (2024/02/08)

* Prise en charge de l'aperçu des polices dans la liste des polices de la barre d'outils [#issue567](https://github.com/xulihang/ImageTrans-docs/issues/567)
* Les images déjà traduites sont ignorées lors de l'exportation de l'image finale et du masque [#issue548](https://github.com/xulihang/ImageTrans-docs/issues/548)
* Le gestionnaire d'images traduites permet de sélectionner rapidement les images déjà exportées
* Correction du problème d'écrasement des réglages de gras et d'italique des styles globaux par l'ajustement automatique de la taille de police [#issue565](https://github.com/xulihang/ImageTrans-docs/issues/565)
* Autres corrections de bugs

## v2.8.2 (2024/01/21)

* Prise en charge des raccourcis clavier globaux par le lecteur d'écran [#issue237](https://github.com/xulihang/ImageTrans-docs/issues/237)
* Mise en page ajustable du lecteur d'écran
* Possibilité de modifier aussi le texte original lors de la réimportation de la traduction [#issue557](https://github.com/xulihang/ImageTrans-docs/issues/557)
* Ajout d'un mode d'importation PDF : le mode d'extraction d'images

## v2.8.1 (2024/01/15)

* Correction du problème d'ordre incorrect des textes lors de la fusion de régions avec la barre d'outils
* Correction du comportement de fusion selon la ponctuation dans l'ordre de lecture de droite à gauche
* Correction du problème de fenêtre non masquée lors de la capture d'écran par le lecteur d'écran
* Lors de la fusion de régions, décision d'ajouter ou non un espace selon que la langue utilise des espaces

## v2.8.0 (2024/01/14)

* Prise en charge de la correction de l'ordre du texte par le lecteur d'écran [#issue553](https://github.com/xulihang/ImageTrans-docs/issues/553)
* Le lecteur d'écran peut reconnaître périodiquement des régions fixes et détecter si l'image de la région a changé. L'opacité de la fenêtre de région fixe est ajustable [#issue521](https://github.com/xulihang/ImageTrans-docs/issues/521)
* Ajout d'un paramètre de projet de fusion de texte, permettant de fusionner les textes selon la ponctuation finale ; les régions contenant du texte ne détectent pas les séparateurs lors de la fusion [#issue553](https://github.com/xulihang/ImageTrans-docs/issues/552)
* Affichage du nom de fichier dans les résultats de la recherche et du remplacement
* Correction du problème de non-enregistrement des styles et autres informations supplémentaires lors de la fusion de régions avec la barre d'outils

## v2.7.1 (2024/01/01)

* Les grands modèles de langage comme ChatGPT et Gemini peuvent utiliser la terminologie pour améliorer les résultats de traduction [#issue546](https://github.com/xulihang/ImageTrans-docs/issues/546)
* Prise en charge du double-clic pour accéder au résultat dans la recherche et le remplacement, et ajout d'une option de recherche dans le fichier courant [#issue545](https://github.com/xulihang/ImageTrans-docs/issues/545)
* Affichage des résultats de la recherche et du remplacement par ordre de nom de fichier [#issue545](https://github.com/xulihang/ImageTrans-docs/issues/545)

## v2.7.0 (2023/12/24)

* Ajout de la fonction de détection de l'angle de rotation du texte [#issue543](https://github.com/xulihang/ImageTrans-docs/issues/543)
* Ajout d'un gestionnaire de localisation, permettant de traduire soi-même l'interface du logiciel [#issue544](https://github.com/xulihang/ImageTrans-docs/issues/544)
* Ajout d'une préférence pour désactiver le recours au texte original en l'absence de traduction lors de la consultation des traductions [#issue541](https://github.com/xulihang/ImageTrans-docs/issues/541)
* Correction du problème de décalage causé par le texte en dehors de l'image en mode de sortie par défaut
* Autres optimisations d'ergonomie

## v2.6.0 (2023/12/17)

* Amélioration de la classification des régions de texte allongées [#issue536](https://github.com/xulihang/ImageTrans-docs/issues/536)
* Ajout d'une page d'accueil
* Ajout d'une barre d'état affichant le nombre d'images et le numéro de l'image courante [#issue535](https://github.com/xulihang/ImageTrans-docs/issues/535)
* Ajout d'une option de tri selon l'abscisse [#issue533](https://github.com/xulihang/ImageTrans-docs/issues/533)
* Ajout d'un élément de menu pour ajuster la taille de police [#issue529](https://github.com/xulihang/ImageTrans-docs/issues/529)
* Mémorisation de l'état de l'interface, comme le pourcentage [#issue528](https://github.com/xulihang/ImageTrans-docs/issues/528)
* Correction du possible décalage de position des régions de texte centrées verticalement en mode d'exportation de grandes images

## v2.5.7 (2023/12/03)

* Correction du problème de réduction du masque généré lors de l'OCR de grandes images
* Ajout dans l'éditeur de masque d'une opération pour supprimer le masque en dehors des régions de texte
* Nouveaux éléments de flux de travail personnalisé : suppression des régions sans texte original de toutes les images, suppression du masque hors cadre de toutes les images

## v2.5.6 (2023/12/02)

* La correction automatique prend en charge les expressions régulières [#issue520](https://github.com/xulihang/ImageTrans-docs/issues/520)
* Correction du décalage de glissement des zones de texte lors de la mise à l'échelle à haut DPI [#issue524](https://github.com/xulihang/ImageTrans-docs/issues/524)
* Le clic droit sur la liste d'images fait apparaître le menu d'effacement des images [#issue516](https://github.com/xulihang/ImageTrans-docs/issues/516)

## v2.5.5 (2023/11/25)

* Ajout des éléments de menu « Tri » et « Remplir avec la traduction automatique/mémoire de traduction »
* Prise en charge de la génération de masques de texte via OCR

## v2.5.4 (2023/11/12)

* Ajout d'une option de paramètre pour générer un masque de texte lors de la détection de texte en scène naturelle
* La vérification orthographique prend en charge la vérification du texte traduit [#issue514](https://github.com/xulihang/ImageTrans-docs/issues/514)
* Les opérations par lots prennent en charge les préréglages [#issue515](https://github.com/xulihang/ImageTrans-docs/issues/515)
* Affichage abrégé du chemin des projets récents [#issue509](https://github.com/xulihang/ImageTrans-docs/issues/509)

## v2.5.3 (2023/10/09)

* Correction du décalage du texte pivoté dans les images exportées en mode grande image [#issue499](https://github.com/xulihang/ImageTrans-docs/issues/499)
* La recherche et le remplacement prennent en charge la sélection multiple [#issue498](https://github.com/xulihang/ImageTrans-docs/issues/498)
* Le navigateur intégré prend en charge l'interopérabilité JavaScript pour effectuer des requêtes sans recharger la page [#issue500](https://github.com/xulihang/ImageTrans-docs/issues/500)

## v2.5.2 (2023/10/01)

* Amélioration des performances de l'éditeur de masques, avec prise en charge du chargement de très grandes images [#issue494](https://github.com/xulihang/ImageTrans-docs/issues/494)
* Le post-traitement du texte, comme la suppression des espaces, est appliqué aux opérations OCR sur toute l'image

## v2.5.1 (2023/09/24)

* Nouveau paramètre du moteur de texte vertical : relever le premier caractère [#issue490](https://github.com/xulihang/ImageTrans-docs/issues/490)
* Le gestionnaire d'images traduites permet de configurer l'affichage des images traduites hors de l'interface d'édition [#issue488](https://github.com/xulihang/ImageTrans-docs/issues/488)

## v2.5.0 (2023/09/16)

Le moteur de texte vertical prend en charge le centrage horizontal

## v2.4.1 (2023/09/16)

* Ajout d'un paramètre de projet pour le format de sortie d'image par défaut
* Ajout d'un élément de menu pour effacer les styles de texte
* Ajout d'une préférence pour utiliser les menus natifs de macOS
* Adaptation aux Mac ARM
* Correction du rapport incorrect de certains textes en mode d'exportation grande image
* Autres corrections de bugs

## v2.4.0 (2023/08/26)

* Correction de la génération répétée d'images sans texte lors de l'exportation
* Correction du changement de la barre de progression avant le changement d'image lors du basculement
* Application du contour du texte au texte lui-même plutôt qu'à son Pane parent [#issue432](https://github.com/xulihang/ImageTrans-docs/issues/432#issuecomment-1692600202)
* Ajout d'une option « Appliquer à tous » dans la barre d'outils des polices [#issue432](https://github.com/xulihang/ImageTrans-docs/issues/432#issuecomment-1692600202)
* Les modifications de la fenêtre des paramètres de police peuvent être appliquées à toutes les zones de texte sélectionnées [#issue432](https://github.com/xulihang/ImageTrans-docs/issues/432#issuecomment-1694525969)
* En mode glisser, le maintien de la touche Ctrl permet de zoomer l'image avec la molette
* Prise en charge de l'ajout de notes aux termes
* Ajout d'un gestionnaire de termes

## v2.3.0 (2023/08/20)

* Correction de la défaillance du centrage vertical lorsque la taille de texte automatique est activée
* Correction des conflits d'événements en mode glisser
* Nouvelle fonctionnalité : navigateur Web intégré [#issue483](https://github.com/xulihang/ImageTrans-docs/issues/483)

## v2.2.2 (2023/08/10)

* Correction du rognage du texte lorsque l'interligne du moteur de texte horizontal est supérieur à 1
* Ajout d'un élément de menu pour l'alignement des zones de texte [#issue479](https://github.com/xulihang/ImageTrans-docs/issues/479)

## v2.2.1 (2023/08/05)

* Optimisation de l'éditeur de masques : le masque est semi-transparent par défaut [#issue472](https://github.com/xulihang/ImageTrans-docs/issues/472)
* Le moteur de texte vertical prend en charge la définition de caractères à espacement nul [#issue473](https://github.com/xulihang/ImageTrans-docs/issues/473)
* Correction de bugs

## v2.2.0 (2023/07/30)

* Ajout du plugin de traduction d'images Baidu [#issue470](https://github.com/xulihang/ImageTrans-docs/issues/470)
* Le plugin OCR prend en charge la définition des informations telles que la traduction et la couleur de police des zones de texte
* Mise à l'échelle des images trop grandes et découpage des images trop longues avant l'OCR sur toute l'image
* Les couleurs de l'éditeur de masques reprennent automatiquement les options précédentes [#issue467](https://github.com/xulihang/ImageTrans-docs/issues/467)
* Correction de l'inefficacité de la désactivation du retour à la ligne automatique

## v2.1.0 (2023/07/09)

* Ajout d'une option pour accéder à l'image correspondante après avoir sélectionné une région dans la liste des régions de texte [#issue455](https://github.com/xulihang/ImageTrans-docs/issues/455)
* Ajout d'une option de conversion de casse dans la recherche et le remplacement
* Application automatique des paramètres requis avant l'exportation de l'image finale [#issue461](https://github.com/xulihang/ImageTrans-docs/issues/461)
* Le maintien de la touche SHIFT permet de conserver les proportions lors de l'ajustement d'une région de texte [#issue462](https://github.com/xulihang/ImageTrans-docs/issues/462)
* Nouvelle barre d'outils liée à l'image originale pour ajuster l'opacité du calque de superposition et aligner la position du texte source et de la traduction [#issue458](https://github.com/xulihang/ImageTrans-docs/issues/458)
* Correction de l'incapacité des scripts PS à traiter les contours [b079d40](https://github.com/xulihang/ImageTrans_PhotoshopScripts/commit/b079d40ffdf8188de0c05eeaa64f742b28e2eb00)
* Correction de la dérive lors de l'ajustement manuel de la position et de la taille de la traduction ou du changement du taux d'affichage [#issue459](https://github.com/xulihang/ImageTrans-docs/issues/459)
* Correction du conflit du raccourci clavier de suppression [#issue455](https://github.com/xulihang/ImageTrans-docs/issues/455)
* Correction de l'inefficacité du centrage vertical du moteur de texte vertical lors de la modification de la traduction [#issue458](https://github.com/xulihang/ImageTrans-docs/issues/458)

## v2.0.0 (2023/07/02)

* Mise à jour du plugin ChatGPT pour prendre en charge la définition du modèle [#issue430](https://github.com/xulihang/ImageTrans-docs/issues/430)
* Le mode non précis prend en charge la superposition de texte pivoté
* L'unité de génération du masque de texte des régions pivotées est mise à jour vers son rectangle englobant correspondant
* Lors du passage à la barre d'outils de tri, un double-clic sur une région de texte permet de définir manuellement son numéro d'ordre [#issue445](https://github.com/xulihang/ImageTrans-docs/issues/445)
* Ajout d'un nouveau paramètre de critère de tri dans les paramètres du projet, permettant de trier selon la distance à l'origine ou l'ordonnée [#issue445](https://github.com/xulihang/ImageTrans-docs/issues/445)
* La détermination des régions qui se chevauchent ne tient plus compte de la superficie [#issue447](https://github.com/xulihang/ImageTrans-docs/issues/447#issuecomment-1616323053)
* Le gestionnaire d'images traduites permet une sélection rapide selon des critères [#issue447](https://github.com/xulihang/ImageTrans-docs/issues/447#issuecomment-1616323053)
* Replacement automatique des régions de texte dépassant les limites de l'image à l'intérieur de celle-ci [#issue452](https://github.com/xulihang/ImageTrans-docs/issues/452)
* Correction de la mise à l'échelle du masque généré par la détection de texte en scène naturelle

## v1.9.8 (2023/05/21)

* Mise à jour du plugin ChatGPT pour prendre en charge la traduction par lots par image [#issue404](https://github.com/xulihang/ImageTrans-docs/issues/404)
* Autorisation d'une traduction vide lors de la réimportation des traductions depuis un fichier TXT
* En cas d'erreur lors de la réimportation des traductions depuis un fichier TXT, indication de la ligne en erreur [#issue412](https://github.com/xulihang/ImageTrans-docs/issues/412)
* Nouveau plugin de génération de masques : rectangle intégré [#issue413](https://github.com/xulihang/ImageTrans-docs/issues/413)

## v1.9.7 (2023/05/13)

* Correction du vidage du texte lors de l'effacement de la position de la traduction quand l'enregistrement automatique du texte source et de la traduction est activé [#issue408](https://github.com/xulihang/ImageTrans-docs/issues/408)
* Ajout d'une fonction de suppression par clic droit dans la liste des termes

## v1.9.6 (2023/05/07)

* Correction du problème de correspondance des expressions régulières dans la recherche et le remplacement de texte multiligne [#issue402](https://github.com/xulihang/ImageTrans-docs/issues/402)
* Prise en charge de l'exportation de fichiers de mémoire de traduction TMX
* Mise à jour du plugin ChatGPT pour prendre en charge la définition de services tiers [#issue401](https://github.com/xulihang/ImageTrans-docs/issues/401)

## v1.9.5 (2023/05/01)

* Mise à jour des scripts Photoshop en version JavaScript pour prendre en charge le texte enrichi
* La prétraduction prend en charge l'appel à la mémoire de traduction pour une correspondance exacte
* Nouvel élément de menu contextuel : effacer la position de la traduction [#issue393](https://github.com/xulihang/ImageTrans-docs/issues/393)
* Application des paramètres de thème à toutes les fenêtres
* Optimisation de l'ergonomie des paramètres de style de police

## v1.9.4 (2023/04/05)

* Correction de la hauteur incorrecte de la transformation de perspective de l'italique simulé lorsque l'interligne est défini
* L'italique et le gras simulés permettent de définir le degré de gras et d'inclinaison

## v1.9.3 (2023/04/02)

* Prise en charge de l'exportation au format PDF [#issue366](https://github.com/xulihang/ImageTrans-docs/issues/366)
* Nouveaux plugins de traduction automatique : [ChatGPT](https://github.com/xulihang/ImageTrans-docs/issues/375), [Yandex](https://github.com/xulihang/ImageTrans-docs/issues/386)
* Ajout d'un éditeur de code en texte enrichi [#issue390](https://github.com/xulihang/ImageTrans-docs/issues/390)
* Prise en charge dans le texte enrichi du pseudo-gras, du pseudo-italique et des réglages du nom et de la taille de police [#issue389](https://github.com/xulihang/ImageTrans-docs/issues/389)
* Nouveau paramètre du moteur de texte vertical : remplacement de caractères [#issue388](https://github.com/xulihang/ImageTrans-docs/issues/388)
* Ne pas exécuter les opérations propres à un champ de texte lorsque plusieurs champs de texte sont sélectionnés

## v1.9.2 (2023/03/05)

* Correction du problème de fusion des traductions lors de la fusion de régions
* Ajout d'un paramètre de projet pour exécuter le masque de texte et la génération de l'image sans texte par région de texte
* Prise en charge de l'enregistrement du résultat du masque de texte de la détection de texte en scène naturelle [#issue370](https://github.com/xulihang/ImageTrans-docs/issues/370)

## v1.9.1 (2023/02/19)

* Correction du problème où le BBCode n'était pas ignoré lors du calcul de la hauteur du texte horizontal
* Correction du problème où le BBCode ne fonctionnait plus lorsque le style de texte était défini sur majuscules
* Le JRE par défaut passe à Liberica JRE 11

## v1.9.0 (2023/02/12)

* Prise en charge du texte enrichi (basé sur BBCode) [#issue194](https://github.com/xulihang/ImageTrans-docs/issues/194#issuecomment-1426964710)
* Correction de problèmes liés aux requêtes réseau, à la multi-sélection avec Ctrl et à la confiance des régions de texte

## v1.8.5 (2023/01/08)

* Nouveau plugin OCR : l'OCR intégré à macOS [#issue341](https://github.com/xulihang/ImageTrans-docs/issues/341)
* Prise en charge du collage d'images à partir d'un chemin de fichier
* Détection du format WebP des images via la commande file [#issue338](https://github.com/xulihang/ImageTrans-docs/issues/338)
* Correction de l'échec de chargement des images liées par data URL
* Correction du problème où, lorsqu'une méthode de retouche d'image tierce était définie comme méthode par défaut, une image en niveaux de gris du masque de texte était transmise au lieu de l'image originale
* Ajout d'une option de correction automatique pendant la saisie


## v1.8.4 (2022/11/26)

* Prise en charge des raccourcis clavier personnalisés [#issue323](https://github.com/xulihang/ImageTrans-docs/issues/323)
* Optimisation de l'interface

## v1.8.3 (2022/11/13)

* Nouvelle fonctionnalité : correspondance automatique avec les styles de texte prédéfinis selon la couleur de texte détectée  [#issue322](https://github.com/xulihang/ImageTrans-docs/issues/322)
* Affichage des captures d'écran du lecteur d'écran à l'échelle 100 %

## v1.8.2 (2022/10/29)

* En mode composition, masquage de la bordure des champs de texte lors de leur glissement (peut être désactivé dans les préférences) [#issue314](https://github.com/xulihang/ImageTrans-docs/issues/314)
* Nouvelle option de paramètre de projet : lecture des sous-dossiers (activée par défaut) [#issue304](https://github.com/xulihang/ImageTrans-docs/issues/304)


## v1.8.1 (2022/10/05)

* Correction de l'échec de suppression du texte sur les images PNG dont le nombre de canaux n'est pas 4
* Correction de la logique de la case à cocher « Ajouter un calque de superposition »

## v1.8.0 (2022/10/02)

* Prise en charge de l'exportation des images au format PNG [#issue295](https://github.com/xulihang/ImageTrans-docs/issues/295)
* Si le format de l'image est PNG, l'image sans texte et l'image finale sont aussi au format PNG. Sinon, le format JPG est utilisé par défaut [#issue295](https://github.com/xulihang/ImageTrans-docs/issues/295)
* Ajout dans les paramètres de projet d'un réglage de la taille par défaut des champs de texte [#issue290](https://github.com/xulihang/ImageTrans-docs/issues/290)
* Prise en charge de l'ajustement de la position de plusieurs régions de texte avec les raccourcis clavier [#issue285](https://github.com/xulihang/ImageTrans-docs/issues/285)


## v1.7.11 (2022/09/18)

Correction d'un bug d'exportation de données introduit par la v1.7.8 [#issue279](https://github.com/xulihang/ImageTrans-docs/issues/279)

## v1.7.10 (2022/09/18)

* Sur macOS, les raccourcis clavier utilisent en priorité la touche Command [#issue277](https://github.com/xulihang/ImageTrans-docs/issues/277)
* Optimisation de l'ergonomie de l'éditeur de masque [#issue261](https://github.com/xulihang/ImageTrans-docs/issues/261)
* Ajout dans les paramètres de projet de réglages personnalisés du moteur de texte vertical [#issue271](https://github.com/xulihang/ImageTrans-docs/issues/271#issuecomment-1246208024)

## v1.7.9 (2022/09/12)

Amélioration du comportement du moteur de texte vertical avec différentes polices [#issue271](https://github.com/xulihang/ImageTrans-docs/issues/271)

## v1.7.8 (2022/09/11)

* Correction de l'échec d'enregistrement de l'éditeur de masque de texte lorsque la largeur de l'image est trop grande [#issue266](https://github.com/xulihang/ImageTrans-docs/issues/266)
* Amélioration des réglages de style de police [#issue256](https://github.com/xulihang/ImageTrans-docs/issues/256)
* Amélioration du comportement du pinceau de l'éditeur de masque de texte [#issue261](https://github.com/xulihang/ImageTrans-docs/issues/261)
* Nouvelle option de style de police : espacement des caractères (uniquement pour le texte vertical) [#issue224](https://github.com/xulihang/ImageTrans-docs/issues/224)

## v1.7.7 (2022/08/27)

* Utilisation de la transformation perspective pour obtenir plus précisément l'image d'une région pivotée
* Autres corrections de bugs [#issue246](https://github.com/xulihang/ImageTrans-docs/issues/246) [#issue248](https://github.com/xulihang/ImageTrans-docs/issues/248)

## v1.7.6 (2022/08/20)

Réutilisation automatique du moteur OCR et de la langue utilisés précédemment dans le projet [#issue245](https://github.com/xulihang/ImageTrans-docs/issues/245)

## v1.7.5 (2022/08/13)

Prise en charge du réglage de l'interligne pour le texte horizontal [#issue244](https://github.com/xulihang/ImageTrans-docs/issues/244)

## v1.7.4 (2022/07/24)

* Le moteur de texte vertical prend en charge la disposition du texte de gauche à droite [#issue242](https://github.com/xulihang/ImageTrans-docs/issues/242)
* Nouvelle préférence : enregistrer ou non automatiquement le résultat OCR dans le presse-papiers [#issue169](https://github.com/xulihang/ImageTrans-docs/issues/169)

## v1.7.3 (2022/07/03)

* Prise en charge du réglage du rayon en mode d'édition au pinceau de masque
* Correction de l'échec de l'exportation de la page web lorsqu'aucune case n'est détectée
* Mise à jour du script Photoshop en version JS pour prendre en charge les fichiers au format PSB

## v1.7.2 (2022/06/03)

Nouvelle préférence : dossier temporaire des requêtes réseau, pour résoudre le problème « Accès refusé » rencontré par certains utilisateurs [#issue218](https://github.com/xulihang/ImageTrans-docs/issues/218)

## v1.7.1 (2022/05/29)

* Optimisation de l'UX de modification des polices [#issue212](https://github.com/xulihang/ImageTrans-docs/issues/212)
* Optimisation des raccourcis clavier [#issue205](https://github.com/xulihang/ImageTrans-docs/issues/205#issuecomment-1135449173)
* Ajout de la fonction d'actualisation par clic droit, utile pour examiner le problème d'erreur lié à un changement d'image trop rapide en mode traduction [#issue211](https://github.com/xulihang/ImageTrans-docs/issues/211)
* Nouveau plugin de retouche d'image : Lama Inpainting [#issue216](https://github.com/xulihang/ImageTrans-docs/issues/216)


## v1.7.0 (2022/05/22)

* Ajout d'un gestionnaire pour les images originales sans texte et les images de texte seul [#issue199](https://github.com/xulihang/ImageTrans-docs/issues/199)
* La correction automatique est utilisable pour l'OCR [#issue199](https://github.com/xulihang/ImageTrans-docs/issues/199#issuecomment-1126957556)
* Correction de l'échec de l'importation XLIFF [#issue207](https://github.com/xulihang/ImageTrans-docs/issues/207)
* Prise en charge de la réimportation des traductions depuis un fichier TXT séparé par des tabulations [#issue207](https://github.com/xulihang/ImageTrans-docs/issues/207)
* Le fond du style de police peut être défini sur transparent [#issue208](https://github.com/xulihang/ImageTrans-docs/issues/208)
* Autres corrections de bugs et optimisations [#issue203](https://github.com/xulihang/ImageTrans-docs/issues/203)


## v1.6.5 (2022/05/01)

* Ajout d'une fonction d'ajustement automatique de la position et de la taille des régions de texte pour l'affichage en texte horizontal, dans les cas de traduction du japonais vers l'anglais où l'original est en texte vertical et la traduction en texte horizontal [#issue190](https://github.com/xulihang/ImageTrans-docs/issues/190#issuecomment-1107365256)
* Ajout d'un bouton de lecture vocale sous la zone d'édition du texte (masquable dans les paramètres) [#issue191](https://github.com/xulihang/ImageTrans-docs/issues/191)
* Possibilité de définir le masque de texte et la méthode de retouche d'image par défaut [#issue192](https://github.com/xulihang/ImageTrans-docs/issues/192#issuecomment-1114153046)
* Appel des opérations de génération de masque de texte et de retouche d'image par région de texte pour accélérer le traitement
* Autres petites optimisations

## v1.6.4 (2022/04/17)

* Correction de l'inefficacité de l'ouverture du dossier de projet sous macOS et du geste de rotation à la souris trop important
* La modification des styles de police prend en charge la sélection multiple et s'applique immédiatement [#issue185](https://github.com/xulihang/ImageTrans-docs/issues/185)
* Optimisation de l'affichage des lettres et de la ponctuation du moteur de texte vertical [#issue186](https://github.com/xulihang/ImageTrans-docs/issues/186)
* Correction du rognage du texte du moteur de texte vertical lorsque la taille de police est trop grande

## v1.6.3 (2022/04/04)

* Ajout de la prise en charge du moyen de paiement Mianbaoduo
* Ajout de la version gratuite de DeepL ([description](https://github.com/xulihang/ImageTrans_plugins/tree/master/deeplfreeMT))

## v1.6.2 (2022/03/27)

* Ajout de la fonction d'exportation vers une page web (lecture par case et lecture vocale prises en charge)
* Le serveur peut désormais servir de serveur HTTP pour consulter les pages web exportées sur le réseau local
* Moteur de texte vertical : prise en charge du réglage de l'interligne, optimisation de la vitesse et de l'affichage de la ponctuation
* Ajout de l'opération d'ajout d'une zone de texte sur toute l'image
* Le nom du dossier de sortie est configurable [#issue170](https://github.com/xulihang/ImageTrans-docs/issues/170#issuecomment-1058741066)
* Lecture d'un son de notification à la fin d'une opération de flux de travail personnalisé [#issue171](https://github.com/xulihang/ImageTrans-docs/issues/171)
* La taille de police de la barre d'outils de police peut désormais être saisie directement [#issue176](https://github.com/xulihang/ImageTrans-docs/issues/176)

## v1.6.1 (2022/02/26)

* Prise en charge de la rotation des zones de texte par glissement à la souris. L'angle de rotation peut servir à redresser l'image du texte et ainsi améliorer le taux de reconnaissance [#issue157](https://github.com/xulihang/ImageTrans-docs/issues/157)
* Ajout d'une barre de progression de traitement par lots pour la détection des cases et des couleurs [#issue153](https://github.com/xulihang/ImageTrans-docs/issues/153)
* Ajout d'un réglage de la vitesse de parole à la synthèse vocale TTS, avec prise en charge de la lecture simultanée de l'original et de la traduction [#issue152](https://github.com/xulihang/ImageTrans-docs/issues/152)
* Correction du problème d'index de texte du script Photoshop AU3 [#issue160](https://github.com/xulihang/ImageTrans-docs/issues/160)

## v1.6.0 (2022/02/06)

* Ajout de la détection des cases de manga, utilisable pour le tri des régions de texte et la lecture par case sur mobile [#issue147](https://github.com/xulihang/ImageTrans-docs/issues/147)
* Ajout d'un menu contextuel d'affichage de la traduction automatique, qui montre le résultat de traduction obtenu après concaténation du texte de plusieurs régions, principalement pour les cas où une phrase est répartie sur plusieurs bulles [#issue118](https://github.com/xulihang/ImageTrans-docs/issues/118)
* Autres optimisations de performances et corrections de bugs

## v1.5.5 (2022/01/31)

* La détection des bulles prend en charge les bandes dessinées à défilement vertical [#issue138](https://github.com/xulihang/ImageTrans-docs/issues/138)
* L'ajustement automatique de la taille de police permet de définir une taille de police maximale [#issue146](https://github.com/xulihang/ImageTrans-docs/issues/146)
* Ajout de la surveillance du presse-papiers au lecteur d'écran [#issue145](https://github.com/xulihang/ImageTrans-docs/issues/145)
* Les résultats du traducteur silencieux conservent le chemin du fichier d'origine [#issue144](https://github.com/xulihang/ImageTrans-docs/issues/144)
* Nouveau plugin de traduction automatique : DeepL [#issue15](https://github.com/xulihang/ImageTrans-docs/issues/15)
* L'opération d'extension de région vérifie les dimensions de l'image pour éviter de dépasser ses limites
* Déplacement de la barre de défilement vers le haut lors du changement d'image

## v1.5.4 (2022/01/22)

* Correction d'un problème de localisation de la page des préférences [#issue141](https://github.com/xulihang/ImageTrans-docs/issues/141)
* Ajout d'une option de redimensionnement de l'image avant la détection des bulles (redimensionnement à 1024 pixels par défaut) [#issue137](https://github.com/xulihang/ImageTrans-docs/issues/137)

## v1.5.3 (2022/01/16)

* Mise à jour d'OpenCV vers 4.5.5 pour prendre en charge Scaled-Yolo V4 [#issue129](https://github.com/xulihang/ImageTrans-docs/issues/129)
* Prise en charge de l'exportation des régions de texte et de la réimportation des résultats OCR de chaque image [#issue124](https://github.com/xulihang/ImageTrans-docs/issues/124)
* Le mode d'effacement du texte par remplissage de couleur unie permet de définir un fond en rectangle aux coins arrondis [#issue123](https://github.com/xulihang/ImageTrans-docs/issues/123)
* Correction de l'incohérence du centrage vertical du texte selon le facteur de zoom [#issue122](https://github.com/xulihang/ImageTrans-docs/issues/122)
* La correction automatique est également utilisable pour la traduction automatique [#issue133](https://github.com/xulihang/ImageTrans-docs/issues/133)
* Autres optimisations de l'interface et des performances

## v1.5.2 (2021/12/26)

* Ajout de la fonction de synthèse vocale (TTS)
* Suppression directe d'une région de texte avec la touche Suppr
* La détection heuristique de texte permet de définir un délai d'expiration
* Autres corrections de bugs

## v1.5.1 (2021/12/05)

* Amélioration du comportement du lecteur d'écran [issue 110](https://github.com/xulihang/ImageTrans-docs/issues/110)
* Amélioration du comportement du mode de composition lors d'un alignement du texte à droite

## v1.5.0 (2021/11/14)

* Prise en charge du chargement manuel de fichiers de police [issue 100](https://github.com/xulihang/ImageTrans-docs/issues/100)
* Ajout d'un assistant de saisie compatible basé sur Swing JTextArea, pour résoudre temporairement le problème de saisie du tibétain avec JavaFX [issue 99](https://github.com/xulihang/ImageTrans-docs/issues/99)
* Ajout d'un paramètre de projet : police de la région d'édition
* Autres corrections de bugs

## v1.4.8 (2021/10/30)

* Uniformisation du comportement des zones de texte à 100 % et aux autres facteurs de zoom [issue 94](https://github.com/xulihang/ImageTrans-docs/issues/94)
* Nouveau plugin OCR : Google Drive OCR [issue 91](https://github.com/xulihang/ImageTrans-docs/issues/91)
* Correction d'un problème où Google OCR ne récupérait pas correctement le texte

## v1.4.7 (2021/10/17)

* Exécution de la détection heuristique de texte dans un thread pour éviter le blocage du programme
* Uniformisation du comportement des opérations OCR du lecteur d'écran et du programme principal
* Facteur de zoom par défaut ajusté à 100 %

## v1.4.6 (2021/10/06)

* Ajout d'un mode de reconnaissance des lignes de texte Tesseract. ImageTrans localise les lignes de texte, puis Tesseract reconnaît chaque ligne, ce qui améliore grandement la précision ([issue87](https://github.com/xulihang/ImageTrans-docs/issues/87))
* Ajout de l'option de mise en majuscules automatique
* Ajout d'une option de traduction automatique dans le lecteur d'écran
* Autres corrections de bugs

## v1.4.5 (2021/09/25)

* Ajout de l'assistant de traduction silencieuse
* Ajout d'une méthode de suppression des furigana basée sur la projection
* Mise à jour d'OpenCV vers 4.5.3, avec prise en charge des fonctions de détection et de reconnaissance de texte intégrées à OpenCV ([adresse du plugin](https://github.com/xulihang/ImageTrans-docs/issues/85)).
* Ajout d'un plugin OCR pour le japonais : [Révolution de la lecture](https://github.com/xulihang/ImageTrans-docs/issues/83).
* Autres corrections de bugs

## v1.4.4 (2021/08/07)

* Correction de la largeur et de la hauteur incorrectes du texte pivoté lors de la génération d'images traduites en haute résolution
* Correction du fait que la position du texte n'était pas ajustée après le redimensionnement automatique des régions trop petites en composition de texte vertical
* Nouvel élément de menu : ouvrir le dossier du projet

## v1.4.3 (2021/08/05)

* Correction du fait que les paramètres de police de la région de texte courante n'étaient pas mis à jour lors du passage à la barre d'outils de police
* Correction du fait que l'état du bouton de centrage vertical de la barre d'outils de police n'était pas mis à jour lors du changement de région de texte
* Amélioration de l'effet de centrage vertical
* Autres optimisations

## v1.4.2 (2021/07/25)

* Correction de l'échec d'exportation des images de grande résolution (largeur ou hauteur > 8000)
* Prise en charge de l'ajustement automatique de la taille de police pour le texte vertical
* Mise à jour des opérations d'ajustement des régions de texte vertical pour s'adapter au changement apporté par la version 1.4.1 (texte aligné à droite) : un clic à gauche de la région redimensionne, un clic à droite la déplace
* Autres optimisations


## v1.4.1 (2021/07/18)

* Ajout d'une option de centrage vertical du texte ([#issue72](https://github.com/xulihang/ImageTrans-docs/issues/72))
* Ajout d'un raccourci clavier pour supprimer une région de texte ([#issue71](https://github.com/xulihang/ImageTrans-docs/issues/71))
* Lorsque le masque de texte n'est pas enregistré, l'image sans texte n'est pas régénérée si aucune région de texte n'a été ajoutée, supprimée ou ajustée
* Ajout du vietnamien, de l'hindi et de l'indonésien à la liste de langues par défaut (les versions précédentes nécessitaient la saisie manuelle du code de langue) ([#issue61](https://github.com/xulihang/ImageTrans-docs/issues/61))
* Le texte vertical est par défaut disposé en partant de la droite
* Autres optimisations

## v1.4.0 (2021/06/14)

* Ajout de l'opération Enregistrer sous
* Ajout d'un menu de navigation
* Ajout d'un gestionnaire d'images traduites ; les images marquées comme traduites sont ignorées lors des opérations par lots ([#issue59](https://github.com/xulihang/ImageTrans-docs/issues/59))
* L'éditeur texte source/texte cible peut devenir une fenêtre active
* Utilisation d'un Spinner comme contrôle de réglage du ratio d'affichage des images
* L'ouverture d'un projet ferme automatiquement le projet déjà ouvert ([#issue39](https://github.com/xulihang/ImageTrans-docs/issues/39))


## v1.3.7 (2021/05/04)

* Conservation de l'état lors du changement de barre d'outils ([#issue47](https://github.com/xulihang/ImageTrans-docs/issues/47))
* Correction d'un problème où la traduction n'était pas incluse lors de l'exportation des données ([#issue45](https://github.com/xulihang/ImageTrans-docs/issues/45))

## v1.3.6 (2021/05/02)

* La suppression par clic droit et l'inversion du niveau de confiance s'appliquent à toutes les régions de texte sélectionnées
* Le maintien de la touche Control permet de sélectionner plusieurs régions de texte par simple clic
* Ajout de la suppression du texte source et de la traduction dans le menu contextuel des régions de texte
* Autres optimisations

## v1.3.5 Update2 (2021/04/26)

* Un message d'avertissement s'affiche lorsqu'une importation d'images est lancée sans projet ouvert
* Ajout de la prise en charge de l'extension JPEG

## v1.3.5 Update (2021/04/06)

* Le sélecteur de langue ne s'affiche plus lors de l'ouverture d'anciens projets
* Le texte de survol du sélecteur d'images affiche désormais le nom du fichier courant

## v1.3.5 (2021/03/30)

* Amélioration de la traduction de plusieurs phrases en une seule requête de traduction automatique ; Baidu prend désormais en charge la traduction par lots
* Ajout d'un réglage automatique des paramètres pour la méthode de positionnement heuristique (expérimental)
* Amélioration des opérations sur les styles de police, avec prise en charge du déplacement et de l'importation depuis d'autres projets
* La création d'un projet demande désormais de définir la paire de langues
* Unification du sélecteur de couleur de police
* Amélioration de la fonction d'annulation

## v1.3.4 (2021/03/27)

Résolution des problèmes signalés sur GitHub : [#16](https://github.com/xulihang/ImageTrans-docs/issues/16), [#19](https://github.com/xulihang/ImageTrans-docs/issues/19), [#22](https://github.com/xulihang/ImageTrans-docs/issues/22), [#23](https://github.com/xulihang/ImageTrans-docs/issues/23)

## v1.3.3 (2021/03/23)

* Mise à jour d'[ImageTrans_OCR](https://github.com/xulihang/ImageTrans_OCR), ajout de [ChineseOCR](https://github.com/ouyanghuiyu/chineseocr_lite), prise en charge de la combinaison de différentes méthodes de détection et de reconnaissance de texte, et mise à jour du plugin correspondant
* Correction d'un problème d'index dépassant le nombre de zones de texte lors de l'OCR par lots. [Issue correspondante](https://github.com/xulihang/ImageTrans-docs/issues/6)
* Ajout d'un paramètre d'intervalle OCR

## v1.3.2 (2021/03/07)

* Lors de l'OCR d'une région de texte, l'image est agrandie si elle est trop petite
* Localisation de mises en page précédemment omises
* Nouveau plugin OCR : CRAFT+CRNN. Il repose sur le nouveau [projet ImageTrans_OCR](https://github.com/xulihang/ImageTrans_OCR). Ce projet vise à devenir un service agrégeant les OCR hors ligne actuels offrant une bonne personnalisation, une bonne vitesse de reconnaissance et une bonne précision.

## v1.3.1 (2021/02/28)

* Nouveau plugin OCR : Clova OCR de Naver.
* Prise en charge du mode sélection par cadre pour fusionner ou supprimer rapidement des régions
* Ajout d'une option d'OCR après sélection par cadre
* Ajout de raccourcis clavier pour les opérations sur les régions de texte (déplacement et OCR)
* Détection de bulles hors ligne, basée sur le module Dnn d'OpenCV, capable d'utiliser des modèles générés par [DarkNet](https://zhuanlan.zhihu.com/p/346021510) ou [TensorFlow Object Detection API](https://github.com/opencv/opencv/wiki/TensorFlow-Object-Detection-API). Il faut placer le fichier de modèle, le fichier de configuration du modèle et model.json dans le répertoire racine du logiciel ([exemple](/assets/model.json)).
* L'éditeur de texte prend en charge l'affichage du texte source et de la traduction l'un au-dessus de l'autre


## v1.3.0 (2021/02/10)

* Ajout de la fonction de flux de travail personnalisé, permettant de définir soi-même le processus de traitement par lots
* Prise en charge de l'importation de PDF. Les PDF sont exportés sous forme d'images. Si le texte du PDF est copiable, le texte est également importé

## v1.2.11

* Correction d'un problème où la position des régions de traduction n'était pas correctement enregistrée
* Correction d'un problème de chemin d'enregistrement du fichier de script Photoshop
* L'éditeur de masque prend en charge la génération de masques avec une couleur spécifiée et leur affichage semi-transparent
* Prise en charge de requêtes simultanées de traduction de plusieurs phrases via Caiyun Xiaoyi, ce qui accélère considérablement la traduction automatique
* La pré-traduction automatique prend en charge la définition d'un intervalle entre les requêtes afin d'éviter qu'un nombre trop élevé de requêtes par unité de temps n'empêche l'obtention des traductions (les fournisseurs de traduction automatique imposent généralement des QPS)

## v1.2.10

* Nouveau plugin OCR : ABBYY Cloud
* Prise en charge de la vérification orthographique des résultats de reconnaissance OCR avec LanguageTool


## v1.2.9

* Si l'ordre de lecture va de droite à gauche, les zones de texte sont d'abord retournées avant le tri
* Ajout d'une option de rayon de retouche d'image dans l'outil de suppression de texte
* Ajout de thèmes. Un thème sombre et un thème vert sont actuellement proposés.
* Certains OCR et services de traduction automatique utilisent par défaut ma clé API personnelle : la traduction automatique inclut Baidu, Xiaoniu et Tencent, et l'OCR inclut OCRSPACE, Azure et Baidu.

## v1.2.8

* Ajout de la fonction de retour en arrière
* Utilisation de TextFlow comme moteur de rendu de texte par défaut. Les textes n'affichent plus de points de suspension.
* Le changement du ratio d'affichage ne modifie plus la police ni la mise en page
* Autres optimisations

## v1.2.7

* Prise en charge de l'exécution simultanée de plusieurs instances tesseract pour accélérer l'OCR
* Conservation des enregistrements de vérification pendant 7 jours
* L'OCR Sogou prend en charge l'ordre de lecture de droite à gauche
* Ajout de la version précise de l'OCR Baidu
* Correction de problèmes dans la recherche et le remplacement (comportement de saut de segment erroné et échecs de remplacement dus à la localisation)

## v1.2.6

* Les images au format WebP téléchargées à partir d'un lien sont converties au format JPG (avec OpenCV) 
* Prise en charge de la suppression des furigana dans les mangas japonais pour de meilleurs résultats OCR
* Meilleure conversion du japonais vertical en images horizontales (rotation et centrage d'éléments comme « — »)
* Prise en charge de l'unification des styles de police
* Les régions de texte obtenues par OCR sont également étendues

## v1.2.5

* Correction d'un problème où la position d'une région de texte traduit était écrasée par celle de la région source
* L'éditeur de masque prend en charge le mode pinceau
* Les paramètres de police prennent en charge la mise en majuscules
* Ajout d'un paramètre de pourcentage de chevauchement minimal en largeur/hauteur pour la détection de texte
* Correction d'un problème où une région de texte chevauchante n'était pas ajoutée
* Le script Photoshop prend en charge la définition de styles tels que gras, italique, majuscules et rotation

## v1.2.4

* Ajout de la prise en charge de l'extension Chrome (plugin) ImageTrans. Consultez [cette page](https://github.com/xulihang/ImageTrans_chrome_extension) pour les instructions d'utilisation.
* Lors de l'importation d'images, ne pas importer les masques de texte, les images sans texte ni les images finales exportées
* Correction du problème de la fonction d'historique des projets récents de la v1.2.2 qui empêchait la création normale de nouveaux projets
* Autres optimisations

## v1.2.3

* Ajout d'une option de traduction après l'OCR
* En mode non précis, lors de la consultation de la traduction, si le texte source et le texte cible sont vides, l'arrière-plan de la zone de texte devient transparent pour faciliter la lecture du texte source
* Ajout de la détection de texte en scène naturelle et de la détection de bulles à l'opération de détection des régions de texte de la traduction par lots
* Le traducteur silencieux prend en charge le réglage de la police
* Ajout d'un menu contextuel permettant de télécharger des images dans le projet à partir de leur lien

## v1.2.2

* Ajout du traducteur silencieux, qui permet de traduire des images par lots et peut être appelé depuis la ligne de commande ou exécuté sous forme de [serveur](https://github.com/xulihang/ImageTrans_Server)
* Nouveau plugin OCR : Sogou Shenzhi OCR
* Enregistrement du chemin des projets récemment ouverts
* Si la traduction en un clic utilise l'OCR, une invite demande s'il faut fusionner les régions


## v1.2.1

* Prise en charge du glisser-déposer simultané de plusieurs zones de texte
* Prise en charge de l'alignement de plusieurs zones de texte
* Le style de police global prend en charge le réglage de l'arrière-plan, du contour et de la rotation
* Ajout de l'action de collage d'image via le menu contextuel

## v1.2.0

* Si l'ordre de lecture est défini de droite à gauche, la fusion du texte s'effectue dans l'ordre inverse des coordonnées
* Ajout de plugins de générateur de masques et de retouche d'image. Le premier plugin ajouté est [Sickzil-Machine](https://github.com/xulihang/SickZil-Machine)
* Tesseract prend en charge la détection des régions de texte de toute l'image
* Prise en charge de la pré-traduction et de la traduction en un clic pour une image unique (à invoquer par un clic droit sur l'image)
* La méthode de détection de texte en scène naturelle de la traduction en un clic est remplacée par l'OCR
* Ajout d'un paramètre de taille de police minimale
* Ajout d'une option d'ajustement automatique de la taille des régions de texte
* Utilisation d'une case à cocher au lieu d'un bouton pour afficher l'image traduite
* La recherche et le remplacement prennent en charge le traitement du texte source
* Autres petites améliorations

## v1.1.11

* Nouveaux plugins OCR : [easyOCR](https://www.jaided.ai/easyocr), reconnaissance de texte Tencent
* La liste des langues OCR n'affiche que les langues prises en charge par le moteur sélectionné
* Lors de l'extension d'une région, la région d'origine est enregistrée comme région de texte cible
* Correction de la méthode de localisation de TabPane

## v1.1.10

* Ajout de la traduction automatique au lecteur d'écran
* Suppression de certaines bibliothèques tierces

## v1.1.9

* Mise à jour d'OpenCV vers 4.5.0
* L'obtention hors ligne de la confiance des régions de texte est prise en charge, avec affichage de la progression de l'opération
* Nouveau plugin OCR : WinRT OCR, qui permet d'appeler la fonction OCR intégrée à Windows 10 et nécessite l'installation du pack de langue correspondant dans le système
* Intégration de certains plugins de traduction automatique de BasicCAT
* Optimisation de l'interface


## v1.1.8

* Génération des masques de texte et des images sans texte selon l'ordre, avec affichage de la progression du traitement par lots
* L'opération de retouche d'image utilise désormais un thread différent pour éviter les problèmes de non-réponse du programme
* Vérification de la position correcte des régions de texte lors de la génération des masques
* Correction du problème de décalage entre les masques de texte et l'image lors du traitement d'images trop grandes
* Ajout des opérations liées aux régions de texte dans le menu contextuel de l'image

## v1.1.7

* L'éditeur de masques prend en charge le zoom et la génération de masques dans la région sélectionnée
* L'outil de suppression de texte peut supprimer le texte d'une région sélectionnée
* La couleur par défaut des masques redevient le rouge
* Ajout de la fonction d'édition des images sans texte
* Correction d'un bug

## v1.1.6

* Enregistrement des masques de texte au format PNG, afin que le mode de suppression de texte par superposition prenne en charge le cas d'une couleur d'arrière-plan noire
* Prise en charge de la création de copies de zones de texte


## v1.1.5

* Ajout d'un moteur de composition de texte vertical CJK
* Ajout d'une fonction de correction automatique (utile pour résoudre les problèmes de saisie de ponctuation pleine largeur sur macOS)
* Correction d'un bug

## v1.1.4

* Nouvel outil dans la barre d'outils : paramètres de police
* Pour la création de projet et l'importation d'images, les chemins précédemment sélectionnés sont partagés
* Meilleure sélection des couleurs

## v1.1.3

* Nouveau type de plugin : plugin OCR. Code open source : [github](https://github.com/xulihang/ImageTrans_plugins). Prise en charge de l'appel à l'OCR hors ligne PaddleOCR.
* Nouveau moteur OCR : ABBYY (utilise l'[interface en ligne de commande](https://stackoverflow.com/questions/16385443/abbyy-finereader-exe-looking-for-cmd-commands-to-use-in-other-programms) d'ABBYY FineReader, Windows uniquement)
* Nouvel outil : lecteur d'écran. Il peut servir d'outil de capture d'écran ; la capture peut faire appel au moteur OCR d'ImageTrans pour la reconnaissance de texte et peut aussi être ajoutée directement à un projet ImageTrans.
* Ajout d'une barre d'outils offrant davantage d'opérations, comme la division, la fusion et la sélection des régions de texte.
* La forme du curseur change correctement selon l'opération proposée.

## v1.1.2

Nouvelle option OCR : transformer les images dont le texte est disposé verticalement en une disposition horizontale, adaptée au japonais en texte vertical, ce qui améliore les résultats de l'OCR

## v1.1.1

* Ajout de la fonction de traduction en un clic
* Ajout d'une fonction de détection des régions de texte basée sur la détection de texte en scène naturelle
* Mémorisation du chemin des fichiers précédemment sélectionnés

## v1.1.0

* Ajout d'un outil de suppression de texte externe (expérimental)
* Ajout de la prise en charge de la localisation. Le logiciel peut désormais s'afficher en chinois et en anglais.

## v1.0.1

* Davantage de paramètres
* Prise en charge du texte enrichi
* Importation et exportation XLIFF

## v1.0.0 (2020/03/13)

Publication du logiciel.

{% include comments.html %}

