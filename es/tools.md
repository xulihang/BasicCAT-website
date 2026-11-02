---
title: Herramientas
layout: page
lang: es
---

Algunas herramientas que he desarrollado durante mi trabajo de traducción:


1. XLSX to TMX

	Lee la primera hoja del archivo XLSX; la hoja debe tener una fila de encabezados con los códigos de idioma, como zh-CN y en-US.

	Ejemplo:

	```

	zh-CN	en-US
	Hello
	```

	[Descargar](https://github.com/xulihang/Translation-Tools/releases/download/v1.0/XLSXToTMX.jar)

2. Aligner

	Permite alinear un archivo original y su archivo traducido, o un archivo bilingüe con el original y la traducción intercalados.

	Más información: [¡Nueva herramienta! Software de alineación de bitextos Aligner](/zh/new-tool-bitext-aligner/)

3. PSD Localization

	Extrae el texto de archivos PSD y vuelve a insertar el texto traducido. Requiere Photoshop completo instalado en el ordenador y, por ahora, solo funciona en Windows.

	[Descargar](https://github.com/xulihang/Translation-Tools/releases/download/v1.1/PSDLocalization.zip)

4. Image Transcriber

	Herramienta de OCR para imágenes. Además, puede generar archivos PSD con el texto en capas (requiere Photoshop instalado en el ordenador).

	La herramienta usa tesseract y la API de Baidu para el OCR. Hay que colocar tesseract en la carpeta tesseract-ocr de la raíz y guardar el id y el secret de la API de Baidu en un archivo `baidu` en la raíz, separados por un salto de línea.

	El desarrollo está detenido; usa [ImageTrans](https://www.basiccat.org/es/imagetrans/).

5. FileDiff

	Esta herramienta muestra las diferencias entre la versión antigua y la nueva de un archivo, y es compatible con muchos formatos. Si has modificado un documento ya traducido y quieres actualizar el texto correspondiente en la CAT, esta herramienta te ayuda a ver las diferencias.

	[Código fuente](https://github.com/xulihang/FileDiff)

Nota: para ejecutar estas herramientas, primero instala Java Runtime Environment 8.