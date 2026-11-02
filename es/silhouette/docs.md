---
title: Documentación de Silhouette
layout: page
description: Documentación de Silhouette.
lang: es
---

## Sistemas operativos compatibles

* Windows 7+
* macOS 10.15+
* Linux

## Instalación

Para Windows, descomprime el archivo y ejecuta el programa con `Silhouette.exe`.

Para macOS, arrastra la aplicación del archivo dmg a la carpeta `Applications` para instalarla. Si aparece un mensaje de que el paquete está dañado, abre la terminal y ejecuta el siguiente comando:

```bash
sudo xattr -rd com.apple.quarantine /Applications/Silhouette.app
```

Para Linux, puedes usar los archivos del paquete zip de Windows. Necesitas instalar FFmpeg, Whisper.cpp, Java y JavaFX para ejecutar el programa. Puedes usar el [archivo de plantilla](https://github.com/xulihang/Silhouette/releases/download/v1.1.0/Silhouette-Linux-template.zip), que incluye estas dependencias. Después, también debes descargar ONNXRuntime y descomprimir los archivos so en el directorio del programa: [linux-onnxruntime-1.20.0.zip](https://github.com/xulihang/onnxruntime-for-win7/releases/download/builds/linux-onnxruntime-1.20.0.zip).

## Configuración

Al abrir el programa, debes introducir el número de pedido y el correo electrónico para verificar la compra. Puedes usar la prueba de 7 días o el modo limitado para probar el programa primero.

Además, hay que completar otros ajustes.


1. Modelo Whisper. Debes elegir un modelo Whisper para el reconocimiento de voz. Puedes encontrar el enlace de descarga en el programa o [aquí](https://github.com/xulihang/Silhouette_plugins/#whisper-models).
2. Claves de API. Si necesitas usar servicios de traducción como ChatGPT, Google o DeepL, debes introducir las claves de API en las preferencias.


## Primeros pasos

Una captura de pantalla de Silhouette:

![captura de pantalla](/album/silhouette/screenshot_zh.webp){: width="1500" height="1160"}

En la esquina superior izquierda hay un reproductor de vídeo con varios controles.

En la esquina inferior izquierda hay una tabla que muestra las líneas de subtítulos existentes.

En la esquina superior derecha puedes ver la forma de onda correspondiente a la línea de subtítulos actual y editar su marca de tiempo y su texto.

En la esquina inferior derecha puedes ver los resultados de varios servicios de traducción.

A continuación se describe el proceso básico para traducir un archivo de vídeo o audio con Silhouette:

1. Usa el menú Archivo de la barra de menús para abrir un archivo multimedia y configurar el par de idiomas.
2. Usa el menú Edición para reconocer la voz, detectar la actividad de voz y editar las líneas de subtítulos.
3. Después de la transcripción y la traducción, puedes exportar el resultado a un archivo SRT o a un archivo txt separado por tabulaciones. También puedes importar datos desde estos archivos.




