---
title: Notes de version de Silhouette
layout: page
description: Notes de version de Silhouette.
lang: fr
---

<style>
.post-content h2 {
  font-size: 1.5rem;
}
</style>

## v1.6.2 (2026/08/30)

* Mise à jour des plugins de traduction ChatGPT et DeepSeek
* Ajout du plugin LLM gratuit
* Correction du problème où, lors de la division du texte, le texte cible reprenait par erreur le texte source


## v1.6.1 (2026/05/01)

* Ajout de FunASR
* Correction de l'échec d'analyse du SRT exporté lorsque le résultat de la reconnaissance ne contient que des chiffres
* Correction de l'inefficacité de la préférence de taille de police des sous-titres lors de la lecture d'un fichier audio
* Correction du changement de focus lors de l'appui sur la barre d'espace ou du déplacement de la souris dans une zone de texte

## v1.6.0 (2026/04/28)

* Ajout de Qwen3-ASR
* Plus d'options de fusion des lignes : par ponctuation, vérification du temps
* Préférence de décalage du bas des sous-titres
* Vérification de l'installation ou de l'exécution du plugin ASR
* Correction d'un bug à l'ouverture des fichiers audio

## v1.5.5 (2025/10/21)

* Prise en charge de Windows 7
* Un message d'erreur s'affiche en cas d'échec du chargement de VLC
* Correction de l'échec du saut lors d'un clic sur la forme d'onde lorsque celle-ci n'est pas activée
* Correction du non-rétablissement de l'état de suivi de la progression après la mise en pause de la lecture d'une ligne sélectionnée

## v1.5.4 (2025/10/19)

* Correction de l'erreur au clic droit sur la zone de lecture lorsqu'aucune vidéo n'est ouverte
* VLC inclus par défaut

## v1.5.3 (2025/07/06)

* Ajout du réglage de la durée d'avance rapide
* Ajout d'un élément de menu pour lire chaque ligne
* Correction de bugs

## v1.5.2 (2025/05/18)

* Ajout du générateur de vidéo sans sous-titres
* Prise en charge du saut de progression par clic sur la forme d'onde

## v1.5.1 (2025/05/11)

* Désactivation de « Suivre la progression » lors de la lecture de la sélection
* L'aligneur prend en charge l'alignement d'une partie du texte
* Ajout de préférences de sous-titres : format, adaptation à la largeur de la vidéo
* Ajout de l'exécuteur FFmpeg
* Nouvelle option d'export : vidéo avec sous-titres incrustés (gravure avec FFmpeg)

## v1.5.0 (2025/05/02)

* Nouvelle fonctionnalité : division et fusion de lignes
* Ajout dans le segmenteur de phrases d'un bouton de segmentation automatique des phrases basée sur SRX
* Nouveau mode de division et de fusion de lignes
* Ajout d'un bouton de traduction rapide
* Ajout des réglages CSS du texte des sous-titres
* Correction de la transmission des paramètres supplémentaires lors de la reconnaissance de tout le fichier avec Whisper
* Amélioration des messages d'erreur de Whisper

## v1.4.1 (2025/04/04)

* Nouvelle option d'import et d'export vers TXT
* Nouvelles options d'import de texte depuis un fichier SRT
* Ajout du plugin DeepSeek
* Délai d'expiration de ChatGPT porté à 2 minutes

## v1.4.0 (2025/03/01)

* Ajout de la conversion entre chinois simplifié et traditionnel
* Ajout de l'extracteur d'images
* Ajout d'éléments de menu pour se déplacer et lancer la lecture
* Ajout d'un élément de menu contextuel pour reconnaître la sélection
* Correction du code de langue chinois de Whisper

## v1.3.0 (2025/02/22)

* Ajout de l'aligneur pour aligner la chronologie reconnue et un texte existant (alignement texte-audio)
* Prise en charge de l'import et de l'export XLIFF
* Prise en charge de l'import de SRT bilingues
* Ajout de paramètres de projet pour les paramètres supplémentaires de reconnaissance vocale
* Ajout d'un élément de menu pour échanger le texte source et le texte cible
* Nouvelle option de reconnaissance vocale : ne pas diviser l'audio
* Au premier démarrage sous Windows, une demande d'activation du GPU est affichée
* Autres corrections de bugs

## v1.2.0 (2025/02/09)

* Ajout d'une préférence pour lire précisément la partie sélectionnée
* Ajout de la saisie vocale
* Ajout du segmenteur de phrases
* Le traducteur par lots prend en charge l'export SRT
* Demande de la plage à ajuster avant le réglage par lots de la chronologie
* Correction du décalage dans le dessin de la forme d'onde
* Autres corrections de bugs

## v1.1.0 (2025/02/04)

* Ajout d'une préférence de taille de police des sous-titres
* Ajout d'une préférence d'utilisation du GPU
* Ajout de paramètres de projet pour les invites (prompts)
* Ajout de la traduction par lots
* Ajout de la fonction de décalage global de la chronologie
* Ajout d'éléments de menu pour déplacer la ligne sélectionnée vers le haut ou vers le bas
* Le texte de progression utilise le format hh:mm:ss
* Les raccourcis de macOS utilisent la touche Commande
* Prise en charge de la suppression rapide de la ligne sélectionnée avec la touche Suppr
* Insertion d'une nouvelle ligne après la ligne sélectionnée
* Sous macOS et Linux, un message rappelle de ne pas utiliser d'espaces dans les chemins
* Correction de l'alignement centré des sous-titres
* Correction de problèmes de localisation

## v1.0.0 (2025/01/27)

Publication de la première version.

{% include comments.html %}
