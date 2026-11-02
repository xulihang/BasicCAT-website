---
title: Notas de versión de Silhouette
layout: page
description: Notas de versión de Silhouette.
lang: es
---

<style>
.post-content h2 {
  font-size: 1.5rem;
}
</style>

## v1.6.2 (2026/08/30)

* Actualiza los complementos de traducción de ChatGPT y DeepSeek
* Nuevo complemento de LLM gratuito
* Corrige el problema por el que, al dividir el texto, el texto traducido utilizaba erróneamente el texto original


## v1.6.1 (2026/05/01)

* Añade FunASR
* Corrige el fallo de análisis de los archivos SRT exportados cuando el resultado del reconocimiento solo contenía números
* Corrige el problema por el que las preferencias de tamaño de fuente de los subtítulos no tenían efecto al reproducir archivos de audio
* Corrige el problema por el que el foco cambiaba al pulsar la barra espaciadora o mover el ratón en el cuadro de texto

## v1.6.0 (2026/04/28)

* Añade Qwen3-ASR
* Más opciones de combinación de líneas: por puntuación y con comprobación de tiempo
* Preferencia de desplazamiento inferior de los subtítulos
* Comprueba si los complementos de ASR están instalados o en ejecución
* Corrige el error al abrir archivos de audio

## v1.5.5 (2025/10/21)

* Compatibilidad con Windows 7
* Los fallos al cargar VLC ahora muestran un mensaje de error
* Corrige el fallo de salto al hacer clic en la forma de onda cuando esta está desactivada
* Corrige el problema por el que el estado "Seguir el progreso" no se restauraba tras pausar la reproducción de las líneas seleccionadas

## v1.5.4 (2025/10/19)

* Corrige el error al hacer clic con el botón derecho en el área de reproducción cuando no hay ningún vídeo abierto
* Incluye VLC de forma predeterminada

## v1.5.3 (2025/07/06)

* Añade una configuración de tiempo para el avance rápido
* Añade un elemento de menú para reproducir cada línea
* Corrige errores

## v1.5.2 (2025/05/18)

* Añade el generador de vídeo sin subtítulos
* Permite hacer clic en la forma de onda para saltar en la reproducción

## v1.5.1 (2025/05/11)

* Desactiva "Seguir el progreso" al reproducir la selección
* El alineador ahora permite alinear parte del texto
* Añade preferencias de subtítulos: formato y ajuste al ancho del vídeo
* Añade el ejecutor de FFmpeg
* Nueva opción de exportación: vídeo con subtítulos incrustados (grabados con FFmpeg)

## v1.5.0 (2025/05/02)

* Nuevas funciones: dividir líneas y combinar líneas
* Añade al divisor de frases un botón para dividir frases automáticamente según reglas SRX
* Nuevo modo de división y combinación de líneas
* Nuevo botón de traducción rápida
* Nueva configuración de CSS para el texto de los subtítulos
* Corrige el paso de parámetros adicionales al reconocer el archivo completo con Whisper
* Mejora los mensajes de error de Whisper

## v1.4.1 (2025/04/04)

* Nueva opción de importación y exportación a TXT
* Nuevas opciones relacionadas con la importación de texto desde SRT
* Nuevo complemento de DeepSeek
* Aumenta el tiempo de espera de ChatGPT a 2 minutos

## v1.4.0 (2025/03/01)

* Nuevo conversor entre chino simplificado y tradicional
* Nuevo extractor de fotogramas
* Añade elementos de menú para saltar y reproducir
* Añade un elemento de menú contextual para reconocer la selección
* Corrige el código de idioma chino de Whisper

## v1.3.0 (2025/02/22)

* Nuevo alineador para alinear la línea de tiempo reconocida con un texto existente (alineación de texto y audio)
* Compatibilidad con la importación y exportación de XLIFF
* Compatibilidad con la importación de SRT bilingüe
* Nueva configuración de proyecto para parámetros adicionales de reconocimiento de voz
* Nuevo elemento de menú para intercambiar el texto original y el traducido
* Nueva opción de reconocimiento de voz: no dividir el audio
* En Windows, pregunta si se debe activar la GPU en el primer inicio
* Otras correcciones de errores

## v1.2.0 (2025/02/09)

* Añade una preferencia para reproducir con precisión la selección
* Añade entrada de voz
* Añade un divisor de frases
* El traductor por lotes ahora permite exportar SRT
* Pregunta el intervalo que se va a ajustar antes de ajustar la línea de tiempo por lotes
* Corrige el desplazamiento en el dibujo de la forma de onda
* Otras correcciones de errores

## v1.1.0 (2025/02/04)

* Añade una preferencia de tamaño de fuente de los subtítulos
* Añade una preferencia de uso de la GPU
* Añade una configuración de proyecto para los prompts
* Añade traducción por lotes
* Añade la función de desplazamiento general de la línea de tiempo
* Añade elementos de menú para mover las líneas seleccionadas hacia arriba y hacia abajo
* El texto de progreso usa el formato hh:mm:ss
* Los atajos de macOS usan la tecla Command
* Permite eliminar rápidamente la línea seleccionada con la tecla Supr
* Inserta una nueva línea después de la línea seleccionada
* Avisa de que la ruta no debe contener espacios en macOS y Linux
* Corrige el problema de alineación centrada de los subtítulos
* Corrige problemas de localización

## v1.0.0 (2025/01/27)

Publicación de la primera versión.

{% include comments.html %}

