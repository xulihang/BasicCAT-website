---
title: Notas de versión de ImageTrans
layout: page
lang: es
---

<style>
.post-content h2 {
  font-size: 1.5rem;
}
</style>

## v7.0.0 (2026/11/01)

* Se ha portado ag-psd a Java para generar PSD. Permite generar PSD con texto editable sin depender de Photoshop y en Linux; además, elimina la dependencia obligatoria de Krita para generar PSD rasterizados
* Se ha cambiado el nombre de «detección de bocadillos» a «detección con modelos personalizados»
* Soporte para modelos personalizados con todas las funciones: un solo modelo realiza la localización de texto, la detección de viñetas, la detección de bocadillos y la generación de máscaras
* Los modelos personalizados permiten usar los modelos de localización de RapidOCR
* El modelo integrado japanese-lines ahora utiliza un modelo PPOCR entrenado para manga japonés
* Se ha eliminado el modelo de detección de viñetas de manga japonés
* Al pulsar el botón de reconocimiento sin ninguna región seleccionada, se muestran sugerencias de cómo proceder
* Por defecto, se pregunta qué modelo de detección personalizado usar (si hay varios)
* Plantillas actualizadas. La plantilla de manga japonés usa XYCut para el orden por defecto y el valor de píxeles de expansión para la eliminación de texto se ha establecido en 20
* Los píxeles de expansión de la eliminación de texto también se aplican a la generación de máscaras
* Corregido el problema por el que la ordenación XYCut podía eliminar regiones de texto existentes
* Corregidos los elementos de menú cuya descripción era inexacta
* Corregido el problema por el que modificar la máscara de una región podía provocar que se regenerara la máscara de toda la imagen aunque no fuera necesario

## v6.5.4 (2026/10/14)

* Añadidos elementos de menú para ajustar al ancho y ajustar a la altura
* Por defecto, se utiliza el método interno de detección por «magic code» para determinar si un archivo es WebP
* La exportación a PDF permite guardar en formato PDF/A
* Nuevo plugin de restauración de imágenes Resynth, portado del resynthesizer de GIMP
* Corregido el problema por el que el zoom con la rueda del ratón no funcionaba en Linux

## v6.5.3 (2026/10/11)

* Actualizados los plugins de ChatGPT y Deepseek
* Añadido un botón de restablecimiento al editor de API
* Añadido un modelo de reconocimiento de viñetas de manga japonés
* Plantillas actualizadas para usar el modelo de reconocimiento de viñetas de manga japonés
* Añadidos los puntos suspensivos a los caracteres verticales con espaciado cero por defecto
* En Linux, se da prioridad al archivo java de la ruta `jre/bin/java` para iniciar el programa
* Corregido el problema de que ImageTrans no se iniciara automáticamente en Linux
* Corregido un posible problema al enviar información al servidor mediante WebSocket (en Linux no se podía enviar correctamente)

## v6.5.2 (2026/10/03)

* La herramienta de línea de comandos para escaneo WIA se ha escrito con .NET Framework en lugar de .NET 8, lo que elimina la necesidad de instalar el runtime de .NET 8 por separado
* En macOS, el OCR usa por defecto la versión Live Text, detecta el idioma automáticamente y admite japonés y chino verticales
* Añadido un elemento de flujo de trabajo personalizado para la prerenderización
* Corregido el problema de visualización incorrecta del tamaño de fuente tras el cálculo para evitar dividir palabras en inglés

## v6.5.1 (2026/09/24)

* Soporte para usar modelos de lenguaje grandes a partir de la imagen completa para añadir texto original, traducción, color y ordenación a las regiones existentes (implementado mediante la operación del plugin ChatGPTOCR de añadir texto a regiones existentes con OCR)
* Optimizada la localización de texto del OCR con modelos grandes y añadido el soporte para añadir traducción, color y otra información
* El flujo de trabajo personalizado de añadir texto a regiones existentes con OCR permite guardar parámetros adicionales
* Al ordenar por viñetas, también se ordenan las regiones fuera de las viñetas
* Corregido el error de índice fuera de rango en la ordenación XYCut

## v6.5.0 (2026/09/11)

* Actualizado el JRE a [JRE26](https://download.bell-sw.com/java/26.0.2.1+1/bellsoft-jre26.0.2.1+1-windows-amd64-full.zip)
* Añadida una configuración de exportación JPEG de alta fidelidad
* Añadido un flujo de trabajo personalizado para detectar la dirección del texto y establecer el ángulo de rotación
* Se rotan los nodos de las regiones de texto en lugar de la imagen
* En el modo de traducción, al alinear las regiones seleccionadas solo se ajusta la posición de la región de traducción
* En los controles para idiomas RTL, se establece NodeOrientation en RIGHT_TO_LEFT en lugar de limitarse a establecer la alineación a la derecha
* Añadidas más opciones de descarga en el servidor
* Corregido el problema de que los archivos fallidos no se eliminaban a tiempo al cancelar la descarga cuando la red iba lenta
* Corregido el problema de no actualizar el estilo de TextArea al crear un proyecto nuevo
* Corregido el orden al combinar palabras que mezclan árabe y no árabe
* Corregido el problema de que RTL no se habilitaba al componer texto en árabe
* Corregido el problema de que el texto de los PDF exportados no admitía rotación
* Corregido el problema de que el texto de las regiones rotadas no giraba de forma centrada
* Corregido el redimensionamiento de las regiones rotadas
* Corregido el error al deshabilitar la composición vertical CJK
* Corregido el tratamiento de números puramente arábigos por parte de rapidOCR
* Corregido el tratamiento de números puramente arábigos al generar PDF en árabe

## v6.4.0 (2026/09/03)

* Optimizada la selección de la fuente predeterminada en las opciones de exportación a PDF
* La búsqueda automática de fuentes al exportar PDF ahora también busca en la carpeta de fuentes del directorio de usuario de Windows
* Optimizado el espaciado del texto en los PDF exportados con texto vertical
* Al exportar PDF en chino y japonés cuando la configuración del proyecto no tiene estilo de fuente, se detecta automáticamente la dirección del texto
* Los flujos de trabajo personalizados permiten contabilizar el tiempo de procesamiento
* Se ha cambiado toda la traducción predeterminada a Baidu
* Corregido el problema de altura incorrecta del texto en los PDF traducidos con texto vertical en chino
* Corregido el problema de que RapidOCR invertía incorrectamente los números arábigos
* Corregido el problema de invertir incorrectamente los números arábigos al generar PDF en árabe

## v6.3.3 (2026/08/28)

* Añadido un flujo de trabajo personalizado para combinar regiones superpuestas
* Añadida la opción de idioma portugués (Brasil)
* La detección de viñetas basada en detección de objetos permite definir en `model.json` los nombres de las clases utilizadas (`class_names_to_use_for_panel`)
* Corregido el error al crear un proyecto nuevo sin seleccionar el idioma
* Corregido el error al exportar PDF con texto vertical

## v6.3.2 (2026/08/21)

* Al abrir el removedor de texto se carga el método de eliminación establecido en la configuración del proyecto
* Si se ha establecido un método de generación de máscaras para fondos complejos o de restauración de imágenes, al abrir el editor de máscaras o el removedor de texto se utiliza el método de selección por región
* La detección de la dirección del texto para establecer el estilo de texto solo se ejecuta cuando el idioma de destino admite texto vertical
* El generador de certificados obtiene la IP de antemano y usa el directorio cert del software como directorio predeterminado
* Corregido el problema de que el generador de certificados no usaba correctamente la IP establecida

## v6.3.1 (2026/08/13)

Corregido el problema de que al abrir un proyecto desde la línea de comandos se ejecutaban las operaciones siguientes sin esperar a que la interfaz terminara de ajustarse y a que se completara la selección del idioma de OCR

## v6.3.0 (2026/08/06)

* El paquete de instalación incluye por defecto el modelo ONNX Lama Inpaint cuantizado a int8 con tamaño fijo de 512x512
* Se ha eliminado MIGAN Inpaint del paquete de instalación
* Se ha eliminado el modelo de clasificación de idioma de imagen del paquete de instalación
* Optimizado el uso de Lama Inpaint en la plantilla de CG
* Añadido soporte para el modelo RF-DETR
* Añadido un flujo de trabajo personalizado para eliminar regiones no rotadas
* Añadida una configuración de proyecto para dividir palabras cuando superan cierta longitud
* La descarga remota de modelos permite la verificación SHA256
* RapidOCR descarga los modelos automáticamente de la red y, al cambiar de idioma, no muestra el aviso de modelo no instalado
* El paquete de instalación incluye por defecto los diccionarios de tailandés y árabe de RapidOCR
* Al eliminar texto por región, si las regiones se superponen se combinan antes de la eliminación por región, lo que mejora el resultado deficiente que causaba la superposición
* Al reconocer una imagen completa con mangaOCR, si no existe el modelo OCR mit48px se usa rapid para reconocer el texto en tiras
* Corregido el problema de ROI inconsistente al comprobar si una imagen es compleja durante la generación de máscaras y la eliminación de texto
* Corregido el error por el que la pretraducción omitía imágenes sin texto

## v6.2.2 (2026/08/01)

* PPDocLayout v3 admite la versión mac mlx
* Se usan variables globales para almacenar la detección de viñetas y evitar cargas frecuentes del modelo
* Eliminados los espacios sobrantes en la traducción al inglés de la detección de objetos
* La pretraducción omite las imágenes sin texto


## v6.2.1 (2026/07/28)

* Se ha eliminado `Character.UnicodeBlock.GENERAL_PUNCTUATION` (por ejemplo, …) de las condiciones para determinar caracteres han
* Actualizada la diferencia máxima de coordenada vertical en las plantillas a 2000
* Corregido el problema de que el mensaje de error de carga del servidor no transmitía el nombre
* Corregido el problema de que el servidor podía establecer el estado de ejecución en false antes de subir las imágenes traducidas

## v6.2.0 (2026/07/26)

* Añadida una plantilla de servidor genérica
* Al crear un proyecto basado en la plantilla de par de idiomas genérica, se selecciona automáticamente el OCR adecuado
* Añadido un flujo de trabajo personalizado para detectar las celdas de la clasificación de tablas
* Reescrita toda la lógica que determina a qué viñeta pertenece una región de texto
* Se usa la máscara de texto para optimizar la determinación de imágenes con fondo complejo
* El nombre del modelo predeterminado de Deepseek se ha cambiado a deepseek-v4-flash
* La detección de viñetas y los flujos de trabajo de traducción permiten definir parámetros para cada elemento
* Optimizada la determinación de las regiones de inversión de color en la generación de máscaras
* El servidor permite establecer una contraseña de servidor remoto (ws_secret)
* El servidor permite cargar configuraciones de proyecto específicas del idioma (src.json)
* La limpieza automática de imágenes del servidor ahora también limpia las miniaturas
* Corregido el conflicto de versiones de onnxruntime de oneocr

## v6.1.0 (2026/07/24)

* Añadida una función de escaneo de códigos de barras basada en ZXingCPP
* Añadido un modo de ejecución en segundo plano que permite ejecutar el servidor en segundo plano sin mostrar ventanas durante la traducción
* El tiempo de espera para ejecutar flujos de trabajo en modo por lotes se ha establecido en 10 minutos
* El servidor permite cargar plantillas de flujos de trabajo personalizados específicas del idioma (custom_workflow_src-tgt.json)
* Corregido el problema de que el flujo de trabajo personalizado del servidor usaba directamente imágenes del mismo nombre exportadas anteriormente
* Corregido el problema de que las imágenes cargadas por el servidor podían no ser válidas

## v6.0.3 (2026/07/16)

* Añadida la función de reconocimiento de tablas
* La operación de combinar regiones dentro de una viñeta no combina las regiones de una tabla

## v6.0.2 (2026/07/11)

* Añadido un menú contextual para editar categorías en la lista de viñetas
* Más opciones de exportación a markdown
* Añadida la exportación a markdown en los flujos de trabajo personalizados
* Se pueden predefinir los ajustes de exportación a markdown en la configuración del proyecto
* Al abrir un proyecto desde la línea de comandos y ejecutar un flujo de trabajo personalizado se leen preferences.conf, settings.json y setOCRBasedOnLang del proyecto, manteniendo la coherencia con el modo de creación de proyectos mediante plantilla
* En mac, se elimina el sufijo .itp del nombre de archivo inicial para evitar duplicados
* Actualizada la carpeta de resultados intermedios de las plantillas a `intermediateResults`
* Soporte para usar [ImageTrans-skills](https://github.com/xulihang/ImageTrans-skills), que permite invocarlo mediante Claude y otros agentes
* Corregido el problema de que se mostraba un cuadro de diálogo de finalización al exportar PDF desde la línea de comandos

## v6.0.1 (2026/07/07)

* Optimizado el tratamiento de la puntuación al inicio y final de línea (kinsoku) en el motor vertical
* En la llamada al servidor desde la línea de comandos, la comprobación del parámetro server ha pasado de «contiene» a «es igual a»
* Al extraer imágenes de un PDF, las TIFF se convierten a JPG
* Añadida una configuración de proyecto de detección de bocadillos para combinar regiones superpuestas
* Al combinar regiones de bocadillos superpuestas se comprueba si son de la misma categoría
* Añadido soporte para PPDocLayout v3
* Corregido el problema de reinicializar la instancia del mismo modelo tras seleccionar un modelo de detección de bocadillos
* Corregida una fuga de memoria de PPDocLayout
* Corregido el problema de que el cálculo de ancho del motor vertical no tenía en cuenta el trazo
* Corregido el radio de trazo incorrecto en las regiones de texto vertical rotadas
* Corregido el problema del rango de progreso incorrecto al importar un rango de páginas de un PDF

## v6.0.0 (2026/07/03)

* El texto horizontal usa el cálculo preciso del tamaño de fuente
* Las preferencias de API se pueden personalizar en la configuración del proyecto
* Corregido el error del tamaño de fuente automático en las regiones de texto vertical rotadas

## v5.24.0 (2026/06/30)

* No se almacenan ángulos de rotación inferiores a 0.01
* Añadida una configuración de proyecto para que la puntuación no quede al inicio de línea en el motor vertical (kinsoku)
* Añadidos elementos de flujo de trabajo personalizado para expandir y reducir la región de traducción
* En el modo de composición, las operaciones de expandir y reducir regiones ajustan la posición de la traducción
* Optimizada la eficiencia del cálculo automático del tamaño de texto del motor vertical
* Corregido el problema de oscilación del cálculo automático del tamaño de texto del motor vertical
* Corregido el tratamiento del texto de varias líneas por el tamaño de texto automático del motor vertical cuando el ajuste de línea automático está desactivado

## v5.23.0 (2026/06/29)

* Nuevo plugin de OCR: oneocr (OCR de capturas de pantalla de Windows 11)
* El OCR realiza primero la división de la imagen y luego el escalado
* Corregido el problema de que el centrado vertical no funcionaba en el motor de texto vertical
* Corregidas las coordenadas incorrectas al reconocer tiras cómicas de poca anchura

## v5.22.1 (2026/06/23)

* Al invocar desde la línea de comandos se pueden usar las credenciales de cuenta ya introducidas para la autenticación
* Soporte para usar imágenes como contexto para la traducción (requiere un modelo de lenguaje con visión)
* Soporte para usar el texto de las páginas anteriores como contexto para la traducción

## v5.22.0 (2026/06/18)

* Añadida una configuración de proyecto de OCR para el ancho mínimo: si la imagen es más estrecha que ese ancho, se amplía hasta ese valor
* Corregido el problema de que los archivos cuya descarga fallaba no se eliminaban
* Corregido el problema de que, si el servidor no se iniciaba, aun así se mostraba un mensaje de inicio correcto

## v5.21.3 (2026/06/16)

Actualizado Rapid OCR a PPOCRv6

## v5.21.2 (2026/06/10)

* Optimizada la visualización del pinyin en el HTML exportado
* El servidor permite usar certificados autofirmados

## v5.21.1 (2026/06/04)

* Soporte para establecer el tamaño del borde del cuadro de texto activo
* Soporte para importar TIFF
* Las viñetas permiten guardar texto
* Añadido un flujo de trabajo personalizado para crear regiones a partir de viñetas
* Optimizada la uniformidad del efecto de corrección automática del motor de texto vertical con distintos tamaños de fuente
* Corregido un posible problema de codificación al leer el diccionario de mit48px OCR

## v5.21.0 (2026/05/30)

* Añadida una preferencia para recordar la ventana de edición de máscaras
* Optimizada la uniformidad del efecto de corrección automática del motor de texto vertical con distintos tamaños de fuente
* Los modelos de detección de bocadillos pueden especificar una clase específica para viñetas
* Corregido el problema de que, tras iniciar el servidor desde la línea de comandos, no se podía iniciar un proceso independiente para el procesamiento

## v5.20.0 (2026/05/23)

* Motor de texto vertical:
   * Corregida la alineación centrada de los caracteres
   * Añadido el sokuon japonés a los caracteres de alineación a la derecha
* Servidor:
   * No limpiar las imágenes durante la traducción
   * Añadidas preferencias para el reinicio programado y el uso de un proceso independiente
   * Guardar la configuración del servidor
   * Soporte para abrir ImageTrans desde la línea de comandos y conectarse al servidor
* Editor de máscaras y removedor de texto:
   * Al seleccionar un método se comprueba si el plugin está instalado o en ejecución
   * Añadida la selección por región a la lista de métodos de procesamiento; por defecto no se selecciona automáticamente según si el fondo es complejo
* Los flujos de trabajo personalizados permiten la ejecución concurrente con varios procesos para optimizar la velocidad de procesamiento
* Corregido el problema de que el procesamiento de archivos mediante plantillas desde la línea de comandos no admitía imágenes individuales
* Corregido el problema de que el inicio automático fallaba en macOS


## v5.19.1 (2026/05/16)

* Actualizados los plugins de DeepSeek y ChatGPT para permitir establecer campos adicionales
* DeepSeek no activa el razonamiento por defecto
* Añadida una preferencia para mostrar el número de los estilos de fuente [#issue1066](https://github.com/xulihang/ImageTrans-docs/issues/1066)

## v5.19.0 (2026/05/09)

* Soporte para establecer desplazamientos horizontales y verticales en los caracteres del motor de texto vertical [#issue1063](https://github.com/xulihang/ImageTrans-docs/issues/1063)
* El modo de plantilla invocado desde la línea de comandos permite pasar configuraciones de proyecto y preferencias adicionales
* Optimizada la invocación mediante la línea de comandos
* Corregido el problema de que crear una copia no usaba una copia profunda
* Corregido el fallo al extraer imágenes PNG de un PDF en el modo de extracción de imágenes
* Corregido el problema de que exportar el resultado de la traducción con el modo de composición activado podía modificar las coordenadas de las regiones de texto [#issue839](https://github.com/xulihang/ImageTrans-docs/issues/839)

## v5.18.0 (2026/04/19)

* Memoria de traducción:
   * Añadida una configuración de proyecto de memoria de traducción
   * Soporte para establecer si se usa el texto del proyecto
   * Soporte para importar y usar memorias de traducción externas (basadas en SQLite)
* Lector de pantalla:
   * Soporte para usar la memoria de traducción
   * Corregido el problema de invocar la anotación fonética sin haberla habilitado
* Añadido soporte para invocar plugins de OCR y realizar reconocimiento concurrente
* Extractor de subtítulos incrustados:
   * Soporte para usar la detección de bocadillos
   * Optimizada la operación de reconocimiento concurrente con plugins de OCR
   * Añadido el desplazamiento (offset) izquierdo a las condiciones de reconocimiento de fotogramas clave
   * Añadida la operación para unificar las regiones de texto de imágenes con texto similar reconocidas en fotogramas clave
* Nueva configuración de proyecto de detección de bocadillos: expandir la imagen
* Otras optimizaciones

## v5.17.0 (2026/04/11)

* Lector de pantalla:
   * Se ha ajustado el diseño
   * Soporte para mostrar la anotación fonética
   * Soporte para lectura en voz alta
   * Soporte para usar flujos de trabajo personalizados
   * El reconocimiento automático espera a que la imagen se estabilice antes de tomar la captura
   * Si solo hay un motor de traducción automática habilitado, no se muestra su nombre
   * Corregidos varios problemas al guardar los resultados en el proyecto
* Al abrir el lector se cargan los ajustes anteriores
* La traducción automática permite traducir entre páginas [#issue1055](https://github.com/xulihang/ImageTrans-docs/issues/1055)
* Se han ajustado las preferencias de traducción automática

## v5.16.0 (2026/03/22)

* Añadida la función de anotar pinyin chino y kana japonés
* Nuevo formato de exportación: HTML único
* Añadida la operación de generar un PDF sin texto
* Añadida una preferencia sobre qué texto se muestra en la lista de cuadros de texto [#1052](https://github.com/xulihang/ImageTrans-docs/issues/1053)
* El gestor de imágenes permite añadir las imágenes incorporadas recientemente a la carpeta [#1053](https://github.com/xulihang/ImageTrans-docs/issues/1053)
* Añadido el OCR mit48px_ctc con versión de localización
* mangaOCR procesa por defecto imágenes en escala de grises para mejorar la tasa de reconocimiento de texto en color
* Corregido el fallo al regenerar viñetas mediante agrupación de texto cuando ya existían viñetas



## v5.15.1 (2026/03/17)

* Optimizado el soporte del motor de texto vertical para el espaciado negativo entre caracteres
* Añadido soporte para la detección del color del trazo
* El control de tamaño multiuso del editor de texto enriquecido admite números negativos
* Corregido el desplazamiento de los cuadros de texto de traducción al hacer zoom
* Corregido el problema de que, al rellenar traducciones automáticas con traducción rápida o traducción asistida en el modo de composición, los resultados de la imagen no se actualizaban en tiempo real

## v5.15.0 (2026/03/14)

* Añadido un visor de miniaturas
* Añadido un navegador de imágenes
* Añadido un gestor de imágenes (se abre con el botón derecho en la lista de imágenes)
* Soporte para cambiar el orden de las imágenes
* En los nombres de las imágenes importadas de PDF se eliminan las comas de los números de orden
* Optimizada la velocidad de cambio de imagen
* Al traducir varias frases se omiten las imágenes sin texto
* Corregido el fallo del gestor de imágenes traducidas al filtrar las imágenes ya exportadas con traducción [#issue1044](https://github.com/xulihang/ImageTrans-docs/issues/1044)

## v5.14.0 (2026/03/06)

* Importación de PDF:
   * Soporte para seleccionar un rango de páginas
   * Al importar un PDF en el modo de extracción de imágenes, si se encuentra una página sin imágenes se utiliza el modo de renderizado
* Exportación de PDF:
   * Soporte para buscar el archivo de fuente correspondiente según el nombre de la fuente
   * Soporte para seleccionar fuentes TTC
   * La fuente predeterminada en mac es Arial Unicode
   * Si se muestra texto vertical, se sustituyen los caracteres de puntuación como los paréntesis por caracteres para texto vertical y los caracteres de ancho medio por caracteres de ancho completo
   * Optimizada la visualización del texto vertical
* Aumentado el tiempo de espera del plugin ChatGPTOCR
* Añadido el plugin OllamaOCR
* Se ha añadido el sufijo eSCL al nombre de los escáneres eSCL
* Corregido el mal resultado del ajuste automático de tamaño del texto vertical cuando el ajuste de línea automático está desactivado

## v5.13.0 (2026/02/23)

* Escaneo de documentos:
   * En Windows se puede usar TWAIN
   * Soporte para escanear películas, diapositivas y otros documentos con un escáner de transparencias
   * Se muestra un error al usar WIA si .NET 8 no está instalado localmente
* Al cerrar un proyecto se liberan las imágenes abiertas
* La operación de recorte permite guardar la imagen como una imagen nueva
* Nuevas operaciones de edición de imágenes: invertir colores y eliminar la dominante de color de la película

## v5.12.0 (2026/02/14)

* Escaneo de documentos:
   * WIA, ICA y SANE admiten alimentador, escaneo de varias páginas y escaneo a doble cara
   * WIA, ICA y SANE permiten cancelar tareas de escaneo
   * SANE permite previsualizar en tiempo real el resultado del escaneo de una sola imagen
   * macOS permite usar SANE para escanear
   * Soporte para establecer el área de escaneo
   * Se usa la API moderna de Windows Runtime para invocar WIA
   * Las imágenes en blanco y negro se guardan en PNG de 1 bit para ahorrar espacio
   * Al cerrar la ventana de escaneo de documentos se eliminan automáticamente los archivos temporales de escaneo
   * Añadido un botón para eliminar imágenes
   * Corregido el error al guardar archivos en el escaneo continuo de varias páginas con eSCL
* Añadida la función de medición de distancias
* Añadido un menú contextual de edición de imágenes
* Soporte para establecer tamaños de fuente con decimales; el paso de ajuste predeterminado del tamaño de fuente se ha cambiado a 0.5 [#issue1038](https://github.com/xulihang/ImageTrans-docs/issues/1038)
* El tamaño de fuente de la barra de herramientas se puede ajustar con la rueda del ratón [#issue1038](https://github.com/xulihang/ImageTrans-docs/issues/1038)
* En los nombres de las imágenes pegadas se eliminan las comas de los separadores de miles
* Se elige PNG o JPG según la ruta de la imagen pegada
* Corregida la URL incorrecta al enviar mensajes de error cuando se usa un servidor remoto

## v5.11.1 (2026/02/07)

* El escaneo de documentos permite escanear varias páginas
* El escaneo de documentos permite usar el alimentador (solo eSCL)
* Corregido el problema de que el modo de color establecido en el escaneo eSCL no tenía efecto
* La cursiva simulada usa una transformación afín en lugar de una transformación en perspectiva para resolver el problema de ancho y alto incorrectos al usarla junto con la negrita simulada
* Soporte para colocar un archivo server-mode en el directorio raíz y evitar el error emergente al usar el servidor

## v5.11.0 (2026/01/31)

* El escaneo de documentos permite usar las interfaces de escaneo del sistema (WIA, ICA, SANE)
* El escaneo de documentos guarda la lista de escáneres encontrados anteriormente
* Los PDF admiten visualización en alta definición
* La plantilla de documento desactiva la eliminación de texto por región y la detección de color en la detección de viñetas
* Al hacer zoom en la imagen, la carga por teselas utiliza antirrebote
* La exportación a TXT permite elegir entre exportar solo el texto original o el texto original junto con la traducción
* La importación de TXT permite importar solo la traducción
* Corregido el problema de que la imagen no se actualizaba correctamente tras rotarla


## v5.10.1 (2026/01/25)

* Añadida la función de escaneo de documentos (basada en eSCL)
* Añadida la función de ver la información de la imagen
* Actualizado el plugin de traducción Papago
* Corregido el problema de que el modo de edición vertical no mostraba la opción de tamaño del texto enriquecido [#issue1032](https://github.com/xulihang/ImageTrans-docs/issues/1032)

## v5.10.0 (2026/01/17)

* Añadido soporte para YOLO 26 [#issue1026](https://github.com/xulihang/ImageTrans-docs/issues/1026)
* Añadido soporte para ajustar el desplazamiento horizontal y vertical del texto horizontal [#issue826](https://github.com/xulihang/ImageTrans-docs/issues/826)
* Añadido soporte para ajustar el espaciado entre caracteres del texto horizontal
* Añadido soporte para ajustar el espaciado entre caracteres del texto enriquecido
* El espaciado entre caracteres predeterminado se ha cambiado a 0 y se almacena con el nombre tracking
* El editor de texto enriquecido permite establecer el espaciado entre caracteres, el desplazamiento horizontal y el desplazamiento vertical
* Corregido el problema de que el resultado renderizado no se actualizaba tras establecer el formato con el editor de texto enriquecido
* Corregido el posible bloqueo al ejecutar la combinación de regiones en un flujo de trabajo personalizado [#issue1029](https://github.com/xulihang/ImageTrans-docs/issues/1029)
* Corregido el problema de que el zoom con atajos de teclado no funcionaba

## v5.9.0 (2026/01/13)

* El motor vertical admite alineación centrada y alineación inferior
* Añadida la detección de color a nivel de carácter
* Soporte para aplicar estilos de texto enriquecido al texto original
* Añadida la configuración de estilo de centrado horizontal
* La diferencia máxima de coordenada vertical predeterminada se ha cambiado a 2000

## v5.8.3 (2026/01/05)

* Optimizado el tratamiento de los ángulos detectados erróneamente al rotar imágenes según la información de rotación de las regiones de texto
* Optimizado el soporte del canal alfa al rotar imágenes según la información de rotación de las regiones de texto
* Optimizado el tratamiento de las regiones superpuestas y fuera de la imagen en la detección de bocadillos
* Aumentada la tolerancia al aplicar máscaras de OCR
* Soporte para importar marcadores desde el lector Chaoxing
* Corregido el error al vaciar las imágenes

## v5.8.2 (2026/01/03)

* La información de rotación de las regiones de texto se guarda con doble precisión
* Añadidas operaciones para rotar imágenes según la información de rotación de las regiones de texto
* Añadidas operaciones de superresolución
* La precisión de ajuste al rotar imágenes en cualquier ángulo se ha cambiado a 0.1
* Soporte para importar archivos en formato PDZ mediante el lector Chaoxing
* La exportación a PDF permite configurar más parámetros de procesamiento de imágenes
* Añadidos el punto y coma y los dos puntos a la lista de caracteres que deben convertirse en puntuación china
* Corregido el problema de que, tras editar una imagen, se seguía usando la imagen anterior para operaciones como el OCR


## v5.8.1 (2025/12/30)

* Cuando una imagen mostrada por teselas deja de mostrarse, se libera la imagen
* La carga de imágenes por teselas ahora admite BMP

## v5.8.0 (2025/12/28)

* Se usan teselas para optimizar la navegación por imágenes muy grandes [#issue739](https://github.com/xulihang/ImageTrans-docs/issues/739)
* Se generan miniaturas de las imágenes muy grandes para acelerar la carga
* El editor de máscaras permite cambiar el modo de edición con el botón central del ratón [#issue1022](https://github.com/xulihang/ImageTrans-docs/issues/1022)
* Corregido el problema de que los cuadros de texto seguían ocultos tras tomar un color de la imagen

## v5.7.0 (2025/12/21)

* Nuevo modelo de detección de objetos: el modelo de análisis de diseño [DocLayout](https://github.com/xulihang/PP_DocLayout_ONNX) de Paddle
* Nuevo algoritmo de ordenación: XYCut
* Las viñetas permiten almacenar clasificaciones
* Añadidas configuraciones y flujos de trabajo relacionados con viñetas de tipo gráfico
* Nuevo formato de exportación: markdown
* Nueva plantilla: documento
* Actualizado el plugin de DeepSeek-OCR para permitir guardar clasificaciones
* Soporte para generar imágenes sin texto en modo no preciso
* La detección de objetos permite filtrar los resultados directamente por nombre de categoría
* Optimizado el tratamiento de los saltos de línea del texto traducido horizontal en la exportación a PDF

## v5.6.1 (2025/12/16)

* Se usa OCR como apoyo para distinguir si el idioma de una imagen es chino o japonés
* Optimizado el efecto del zoom centrado en el cursor
* Optimizado el rendimiento del zoom
* Corregido el problema de que la plantilla predeterminada que configura el OCR según el idioma no trataba las lenguas latinas


## v5.6.0 (2025/12/14)

* Soporte para usar ONNXRuntime como motor de detección de objetos
* Añadida la función Hot Folder
* Añadidas las funciones de detectar el idioma de una imagen y detectar el idioma de un texto
* RapidOCR permite detectar automáticamente el idioma de la imagen
* Nuevos flujos de trabajo: exportar PDF, detectar el idioma de la imagen para configurar el OCR, y detectar el idioma del texto y establecer el idioma de origen del proyecto
* Soporte para predefinir los ajustes de importación y exportación de PDF y los ajustes de exportación de PSD
* Soporte para procesar archivos como PDF desde la línea de comandos
* Añadida una configuración de proyecto para combinar según las viñetas
* Añadida una configuración de proyecto para incorporar la información del canal alfa en la restauración de imágenes
* Añadidas configuraciones de proyecto para el método de generación de máscaras y el método de restauración de imágenes con fondos complejos
* Corregido el fallo al añadir imágenes de la carpeta del proyecto mediante arrastrar y soltar
* Corregido el fallo al copiar texto cuando no está marcada la opción de eliminar saltos de línea
* Corregidos problemas como que el servidor eliminaba la configuración de los flujos de trabajo personalizados



## v5.5.1 (2025/12/07)

* Al importar un PDF en el modo de extracción de imágenes, se guardan directamente los datos originales del PDF
* Corregido el problema de que al cancelar la importación de un PDF la operación no finalizaba


## v5.5.0 (2025/12/06)

* Nuevos plugins de restauración de imágenes: OpenAI y Gemini; permiten usar Gemini 3 Pro Image (Nano Banana) para redibujar imágenes
* Nuevo plugin de OCR: DeepSeek-OCR
* Nuevo flujo de trabajo: eliminar las regiones fuera de las viñetas
* No se combinan las regiones que no están en la misma viñeta
* Soporte para invocar plugins de OCR y realizar análisis de diseño (mediante la detección de viñetas)
* La exportación a PDF permite comprimir las imágenes
* Soporte para añadir archivos al proyecto mediante arrastrar y soltar

## v5.4.0 (2025/11/29)

* Añadida una configuración de proyecto para no detectar separadores en regiones de fondo complejo
* Añadidas operaciones para la corrección ortográfica con el plugin de modelos grandes ChatGPT
* Nuevo plugin de traducción automática: la traducción integrada de macOS
* LamaInpaint en macOS permite usar modelos CoreML
* mangaOCR usa por defecto la detección de bocadillos para proporcionar información de localización
* RapidOCR añade el reconocimiento a nivel de palabra
* El recorte de imágenes permite aplicar una transformación en perspectiva basada en la máscara
* La configuración de API permite borrar los ajustes con el botón derecho
* Corregida la combinación de palabras no árabes consecutivas en texto árabe
* Corregido el problema de que las palabras no árabes consecutivas no se invertían como un todo al exportar PDF en árabe


## v5.3.0 (2025/11/20)

* La edición de imágenes añade funciones de recorte y rotación en cualquier ángulo
* Añadidos el francés y el vietnamita a la lista de idiomas de RapidOCR
* Añadido un elemento de menú para invertir el texto
* RapidOCR usa el modelo de árabe de la versión v5
* Añadido un elemento de menú para filtrar imágenes en buscar y reemplazar
* El gestor de imágenes traducidas permite invertir la selección
* Al generar PDF se eliminan los caracteres de control de dirección del texto
* Añadida la eliminación de regiones de baja confianza a los flujos de trabajo personalizados
* Corregido el problema de que, tras cambiar de imagen, la imagen actual de buscar y reemplazar no cambiaba
* Corregido el error en la configuración del parámetro del directorio de resultados intermedios al generar PSD
* Corregido el problema de que la capa de texto de los PDF exportados podía salir de los límites del documento
* Corregido el problema de que la operación de generación de PDF no notificaba los errores
* Corregido el problema de que los caracteres no árabes se invertían al generar PDF en árabe

## v5.2.0 (2025/11/15)

* Se ha eliminado el script de Photoshop para AutoitV3 y ahora se llama directamente al archivo JavaScript
* En macOS se usa Shell + AppleScript para activar Photoshop
* El servidor permite pasar flujos de trabajo, API, configuraciones de proyecto y nombres de plantilla
* El valor predeterminado de píxeles de expansión de la restauración de imágenes se ha cambiado de 20 a 5
* Si la máscara cubre toda la imagen, se eliminan unos píxeles del contenido de la máscara en los bordes
* Cuando el servidor selecciona el OCR según el idioma, también elige según el idioma si se desactiva la opción de orden de lectura de derecha a izquierda
* Añadidos los ajustes de ancho máximo de restauración de imágenes y proporción de superposición de la ventana deslizante de restauración
* Por defecto, las máscaras no se difuminan
* Al seleccionar métodos de restauración de imágenes por aprendizaje profundo como MIGAN o Lama en la configuración del proyecto, ya no se desmarca la operación por región de texto
* Se usa Krita para convertir PSD a JPG
* Eliminadas las operaciones de PSD obsoletas
* La generación de PSD editables permite operar sobre la imagen actual
* Corregido el problema de la ruta al añadir la imagen sin texto con el script de Photoshop

## v5.1.1 (2025/11/12)

* La imagen del removedor de texto se puede arrastrar
* Se rellena la imagen de eliminación de texto basándose en la máscara
* Añadida una configuración de proyecto para difuminar la máscara al rellenar la imagen sin texto
* La generación de máscaras elimina solo los contornos sin contorno exterior, en lugar de conservar únicamente los contornos más numerosos
* Otras correcciones de errores

## v5.1.0 (2025/11/08)

* El editor de máscaras añade opciones para dilatar o erosionar la máscara de las regiones seleccionadas y ha cambiado la forma de seleccionar el modo de operación predeterminado
* Nuevo formato de salida: PSD rasterizado (requiere Krita)
* Se ha reestructurado la exportación en formato ORA
* En los proyectos nuevos, las máscaras y las imágenes sin texto se guardan por defecto en el directorio `intermediateResults`
* Se ha cambiado la ruta de salida para que el directorio de salida sea la raíz
* Añadido el generador de máscaras SegmentAnything, más adecuado para texto sobre fondos complejos
* Añadidos flujos de trabajo personalizados para restaurar el estado de la interfaz, generar imágenes de máscara y generar imágenes sin texto
* Añadidos elementos de menú para generar la máscara o la imagen sin texto de la imagen actual
* Soporte para exportar WebP sin pérdida
* Optimizado el uso de memoria del OCR y la detección de bocadillos con imágenes largas
* Cerrar el cuadro de progreso detiene las operaciones de OCR y detección de bocadillos de una sola imagen
* Según la extensión, se elige JPG o PNG como formato intermedio de la restauración de imágenes con métodos externos
* Al seleccionar métodos de restauración de imágenes por aprendizaje profundo como MIGAN o Lama en la configuración del proyecto, se desmarca la operación por región de texto
* Corregido el problema de cancelación mutua en la generación de máscaras en las partes superpuestas de los cuadros de texto
* Corregido el problema de que el servidor abría el modo de traducción antes de tiempo al traducir
* Corregido el problema de que la detección de viñetas no admitía imágenes de más de 65500 píxeles
* Corregido el problema de que al modificar la máscara de una región individual no se actualizaban las coordenadas de la región de texto tras expandirla

## v5.0.0 (2025/11/01)

* El modo de generación de máscaras añade la detección de bocadillos
* La generación de máscaras con detección de bocadillos y OCR se aplica por defecto solo a la imagen completa
* Los ajustes de máscara y de método de restauración de imágenes ahora se guardan por nombre
* La restauración de imágenes solo sustituye la imagen en la posición de los cuadros de texto
* Añadido el método de restauración de imágenes MIGAN
* La restauración de imágenes admite ventanas deslizantes para trabajar con imágenes grandes o conservar detalles
* Optimizado el efecto de eliminación de texto de la plantilla de CG
* Al editar la imagen sin texto de una región se expanden los píxeles según la configuración del proyecto
* El removedor de texto permite deshacer, operar por región y restaurar a partir de la imagen actual
* Los controles de porcentaje del removedor de texto y del editor de máscaras se pueden ajustar con la rueda del ratón
* La operación de dilatación de la máscara ahora se aplica a toda la imagen en lugar de a una sola región de texto
* Optimizada la velocidad de eliminación de texto y de generación de máscaras
* Actualizado el plugin de Lama para admitir imágenes de entrada de tamaño dinámico y añadido el ajuste de tamaño máximo
* Actualizado el prompt de Sakura para evitar la concatenación
* ChatGPT usa un prompt de traducción por lotes simplificado
* Añadida una preferencia para recordar o no los resultados de la traducción automática
* Añadidos elementos de menú para eliminar la máscara y la imagen sin texto de la imagen actual
* El valor predeterminado de píxeles de expansión de la restauración de imágenes se ha cambiado de 5 a 20
* Corregido el problema de coordenadas incorrectas tras expandir los píxeles de la restauración de imágenes
* Otras correcciones de errores

## v4.7.0 (2025/10/26)

* La detección de color se ejecuta en un hilo independiente para evitar que el programa deje de responder
* La detección del color del texto permite usar OCR
* Añadida una plantilla para imágenes CG
* Añadido el OCR 48px CTC en versión ONNX de manga-image-translator
* Añadida una configuración de proyecto para eliminar el fondo de ambos extremos del texto de la imagen cuando se ejecuta un OCR de solo reconocimiento
* Al ajustar las regiones seleccionadas por desplazamiento, si el número de destino se sale de los límites, se suma o resta el número de destino al total de regiones
* Corregido el problema de que los cambios de color en la barra de herramientas no tenían efecto cuando la región de texto tenía el atributo textColor


## v4.6.0 (2025/10/24)

* En el modo de composición, al soltar el ratón con un cuadro de texto seleccionado se actualiza el tamaño de fuente
* Al establecer el nombre de la fuente desde la barra de herramientas ya no se añade al mismo tiempo el tamaño de fuente al estilo local
* Operaciones como el tamaño de texto automático comprueban si el estilo local tiene un tamaño de fuente, en lugar de comprobar si existe un estilo local
* El OCR de macOS añade resultados a nivel de palabra
* Actualizado el plugin de ChatGPT para admitir los modelos de razonamiento de SiliconFlow
* La exportación a PDF permite usar imágenes sin texto o no añadir imágenes
* La exportación a PDF permite texto vertical, texto de varias líneas y árabe
* La capa de texto de la exportación a PDF se puede configurar para que se muestre
* La importación de PDF permite importar texto a nivel de palabra
* La importación de PDF permite importar texto también al seleccionar la extracción de imágenes
* Añadidos el laosiano, el tailandés y el jemer a la lista de idiomas sin espacios

## v4.5.0 (2025/10/18)

* Nuevos modos de ordenación: sentido antihorario, sentido horario y columnas de texto
* Nuevo método de detección de viñetas: agrupación de texto
* Añadida la función de ajustar por lotes el orden de las regiones o viñetas seleccionadas
* La detección de viñetas permite especificar el modo de ordenación y el modelo de detección de objetos
* La operación de combinar regiones del procesamiento por lotes ahora se ejecuta en un hilo para evitar que el software deje de responder
* Optimizada la carga de plugins
* La exportación a PSD añade la opción de calcular los márgenes del texto
* Añadido el plugin de traducción Sakura
* Corregido el error de renderizado del motor de texto vertical cuando el texto solo contiene saltos de línea
* Corregido el problema de orden incorrecto al establecer el número de secuencia con doble clic
* Corregido el problema de que el removedor de texto no trataba correctamente los valores alfa en imágenes con transparencia
* Corregido el fallo de operaciones como el OCR en imágenes WebP
* Corregido el problema de que tras Guardar como no se actualizaba el título del software ni se añadía el registro reciente
* Corregido el error al determinar el estilo según la dirección del texto cuando algún estilo no existe
* Otras correcciones de errores

## v4.4.0 (2025/09/27)

* Añadida una barra de herramientas de flujos de trabajo
* Tras crear un proyecto se selecciona el idioma de OCR según el idioma del proyecto
* Tras crear un proyecto se guarda automáticamente el archivo del proyecto
* La primera vez que se abre la configuración de flujos de trabajo personalizados se carga el flujo de trabajo predefinido
* Al modificar estilos desde la barra de herramientas solo se guardan en el estilo local los estilos modificados
* Corregido el problema de paso de argumentos por línea de comandos en los archivos bat y exe de Windows

## v4.3.0 (2025/09/24)

* Al usar la detección de bocadillos en imágenes pequeñas, se amplían su ancho y alto a 1024
* Se determina si se añaden espacios y saltos de línea según la dirección de combinación y si se trata de caracteres
* Los resultados de reconocimiento de RapidOCR por carácter se guardan con el atributo `isChar`
* RapidOCR añade un modelo de árabe
* Por defecto, las regiones no se expanden tras la detección de bocadillos
* Añadido un elemento de operación de flujo de trabajo personalizado para reconocer regiones alargadas y eliminada la configuración de proyecto que permitía usar el OCR de solo reconocimiento únicamente para texto alargado
* Añadido un elemento de operación de flujo de trabajo personalizado para reconocer regiones sin texto que se pueden combinar con regiones con texto
* Añadida una configuración de proyecto para la proporción de regiones alargadas
* Actualizada la plantilla de manga japonés
* Corregido el problema de que las coordenadas de la detección de bocadillos podían contener decimales
* Corregido el problema de que se eliminaban caracteres que solo eran un espacio al activar la eliminación de saltos de línea
* Corregido el problema de que podía aparecer un espacio adicional al localizar el texto de elementos de operación con parámetros en los flujos de trabajo personalizados


## v4.2.0 (2025/09/21)

* La función de ajuste automático del tamaño de fuente del motor de texto vertical es más precisa
* La detección de la dirección del texto se basa por defecto en la proporción de la imagen
* Añadido un elemento de menú para abrir el directorio del software
* En las operaciones de traducción por lotes, tras la detección de bocadillos también se ejecuta la combinación de regiones
* El OCR de solo reconocimiento puede usarse únicamente para texto alargado
* RapidOCR permite devolver resultados a nivel de carácter
* Se incluye por defecto mangaOCR en versión ONNX
* Plantillas optimizadas a partir del nuevo OCR integrado
* Se liberan oportunamente los Mat de OpenCV para optimizar el uso de memoria
* La combinación de regiones por lotes ahora es una operación independiente de la interfaz
* Por defecto se cargan las bibliotecas dinámicas de ONNXRuntime
* Añadida la eliminación de regiones sin texto (OCR) a los flujos de trabajo personalizados
* Al aplicar OCR a una región individual se recorta según la posición almacenada y no según la posición del control
* RapidOCR corrige el orden por defecto al reconocer una región individual
* La opción de ajustar el orden al reconocer una región individual no tiene efecto en motores de solo reconocimiento como mangaOCR
* Corregido el problema del orden del texto en la versión precisa del OCR de Baidu
* Corregido el problema de localización de los elementos con parámetros de los flujos de trabajo personalizados
* Corregido el error al seleccionar texto con el modo de composición activado sin estar viendo la traducción
* Corregido el problema de que no se podían añadir elementos generales al activar la adición de parámetros en los flujos de trabajo personalizados



## v4.1.0 (2025/09/13)

* Nuevo OCR integrado: rapid
* Se incluye por defecto el [modelo](https://github.com/xulihang/ImageTrans-docs/issues/860) para reconocer líneas de texto en japonés
* Añadido el plugin DocTROCR

## v4.0.2 (2025/09/10)

* La combinación de regiones dentro de una viñeta y la operación de añadir texto a regiones existentes con OCR realizan una combinación de regiones para corregir el orden
* Al añadir texto a regiones existentes con OCR se puede elegir no eliminar el contenido de la imagen fuera de la región
* Restaurado el comportamiento de expandir los límites al combinar horizontalmente regiones que contienen texto
* Optimizada la velocidad de la detección de viñetas
* Optimizada la visualización de los números de secuencia
* Corregido el problema de que el método de detección de viñetas establecido en los flujos de trabajo personalizados no tenía efecto
* Corregido un posible problema de índice fuera de rango al seleccionar un cuadro de texto para ir a su posición en la imagen y al ajustar el orden

## v4.0.1 (2025/08/29)

Mejorada la nitidez del texto rotado [#950](https://github.com/xulihang/ImageTrans-docs/issues/950)

## v4.0.0 (2025/08/23)

* Añadido un método de generación de máscaras: OCR
* Al cargar WebP se conserva el canal de transparencia
* Cuando hay texto, la detección de separación de regiones parte del centro
* Se usa la ruta del proyecto como título del software [#946](https://github.com/xulihang/ImageTrans-docs/issues/946)
* Corregido el problema de que no se podía aplicar el estilo predeterminado cuando el estilo de fuente establecido no existía
* Corregido el problema de que la detección de bocadillos del servidor añadía por defecto el nombre de la categoría como estilo de fuente
* Corregido el problema de que la tecla Command no permitía realizar operaciones como la selección múltiple en macOS
* Corregido el problema de que PatchMatch no se podía usar (se recompiló la versión de macOS y se usa PNG por defecto)

## v3.19.1 (2025/08/17)

* La unidad de píxeles del tamaño de renderizado del motor de texto en distintas proporciones usa enteros de forma uniforme
* Soporte para importar directamente imágenes en formato WebP


## v3.19.0 (2025/08/16)

* Se permite usar OCR para la detección de rotación y se añaden configuraciones de proyecto relacionadas [#934](https://github.com/xulihang/ImageTrans-docs/issues/934)
* Actualizados los plugins de OCR para admitir la detección de rotación
* Añadida una configuración de proporción de superposición de regiones
* Otras correcciones de errores


## v3.18.2 (2025/08/10)

* El editor de máscaras añade un atajo de teclado para cambiar el modo de borrado [#issue924](https://github.com/xulihang/ImageTrans-docs/issues/924)
* Añadida la operación de establecer un desplazamiento fijo en las regiones de texto
* Corregido el problema de que al hacer clic en una región de texto se desencadenaba el evento de cambio de texto y se recalculaba el tamaño del texto de la región
* Corregido el posible desenfoque del texto causado por establecer el tamaño de las regiones de texto con doble precisión [issue928](https://github.com/xulihang/ImageTrans-docs/issues/928)

## v3.18.1 (2025/07/26)

* Añadido un elemento de menú de operaciones de región de texto: pegar traducción
* Añadido el plugin Ollama
* La interfaz principal se muestra una vez cargados completamente los plugins
* El servidor desactiva la limpieza automática por defecto
* Corregido el problema de que los cuadros de texto de las regiones de texto seleccionadas desaparecían al unificar la fuente
* Corregido el problema de que al deseleccionar una región de texto con selección múltiple no se desencadenaba el evento correspondiente

## v3.18.0 (2025/07/19)

* Los flujos de trabajo personalizados permiten guardar parámetros adicionales para las operaciones de detección y reconocimiento de texto [#issue914](https://github.com/xulihang/ImageTrans-docs/issues/914)
* Añadido un visor de registros
* Añadido un gestor de marcadores
* Corregido el problema de que el modelo de bocadillos dejaba de funcionar al seleccionarlo por segunda vez
* Corregido el problema de que al abrir un proyecto mediante arrastrar y soltar no se cerraba el proyecto ya abierto

## v3.17.5 (2025/07/05)

* El texto de las áreas de edición de texto de idiomas bidireccionales como el árabe está alineado a la derecha por defecto
* Hacer doble clic en una región de texto activa la edición de texto
* Las reglas de autocorrección se pueden exportar a CSV o importar desde CSV
* Soporte para filtrar regiones con reglas personalizadas
* Añadido un elemento de menú para abrir la imagen sin texto con un programa externo
* Añadido un divisor de texto

## v3.17.4 (2025/06/20)

* Añadidos elementos de menú para actualizar y abrir la imagen con un programa externo
* Añadidos elementos de menú para expandir y reducir las regiones seleccionadas
* Soporte para establecer el color del borde de las regiones de baja confianza
* La ordenación de nombres de archivo usa el orden natural
* Al abrir el removedor de texto y el editor de máscaras se usa la proporción de zoom de la imagen de la interfaz principal

## v3.17.3 (2025/06/10)

* Añadido un elemento de menú para la configuración de estilos [#888](https://github.com/xulihang/ImageTrans-docs/issues/888)
* Añadido un elemento de menú para el filtrado de regiones [#887](https://github.com/xulihang/ImageTrans-docs/issues/887)
* Optimizada la lógica de configuración de estilos locales
* Corregido el fallo al abrir la configuración de estilos locales [#889](https://github.com/xulihang/ImageTrans-docs/issues/889)
* Cuando el removedor de subtítulos de vídeo usa STTN para procesar todas las imágenes, las procesa en grupos de 30


## v3.17.2 (2025/06/04)

* Optimizada la lógica de cambio de imagen
* Las imágenes sin texto generadas con el removedor de subtítulos de vídeo se marcan con el atributo de texto eliminado
* El removedor de subtítulos de vídeo permite generar cuadros de texto para todas las imágenes
* Corregido el problema de que el removedor de subtítulos de vídeo solo se abría si se cargaban antes los subtítulos

## v3.17.1 (2025/06/02)

* Soporte para ajustar el estilo del texto con CSS [#883](https://github.com/xulihang/ImageTrans-docs/issues/883)
* Añadido el método de eliminación de texto STTN
* El removedor de subtítulos de vídeo permite usar STTN, un método de eliminación de texto específico para vídeo

## v3.17.0 (2025/05/18)

* Añadido el removedor de subtítulos de vídeo
* Nuevo método de eliminación de texto: desenfoque gaussiano
* Añadidos elementos de menú para invertir la selección, seleccionar regiones con el mismo estilo y enviar al fondo
* Añadida una opción de filtrado de regiones de texto con fondo no transparente
* Soporte para establecer una máscara en las operaciones de OCR y eliminar las regiones que no es necesario reconocer [#881](https://github.com/xulihang/ImageTrans-docs/issues/881)
* Se conservan los atributos de las regiones de texto divididas
* El visor de la imagen original permite activar o desactivar el zoom sincronizado [#879](https://github.com/xulihang/ImageTrans-docs/issues/879)
* Corregido el problema de que el ancho y el alto de los píxeles de expansión al eliminar texto se establecían incorrectamente

## v3.16.2 (2025/05/10)

* Los botones correspondientes se deshabilitan mientras no termina una operación de flujo de trabajo personalizado sobre una sola imagen
* Al añadir texto a regiones existentes con OCR se puede añadir información como el color y la rotación del texto
* Añadida la opción de modificar también la transparencia del texto al cambiar la transparencia de la capa de superposición
* Añadidas la eliminación de imágenes de máscara y de imágenes sin texto a los flujos de trabajo personalizados

## v3.16.1 (2025/05/02)

* La detección de bocadillos permite filtrar los resultados por ID de clasificación
* Soporte para combinar texto según el color del texto
* La combinación según la información de posición del párrafo admite texto vertical
* Añadidas a los flujos de trabajo personalizados las acciones de borrar el texto original, borrar la traducción, borrar la posición de la traducción y borrar el estilo
* Añadido un botón de limpieza a los flujos de trabajo personalizados


## v3.16.0 (2025/04/26)

* Al aplicar OCR a una región individual se pueden añadir bordes a la imagen [#issue866](https://github.com/xulihang/ImageTrans-docs/issues/866)
* La configuración de proyecto de localización y combinación de texto añade las opciones de diferencia máxima de coordenada vertical y diferencia máxima de coordenada horizontal
* Al añadir texto a regiones existentes con OCR se elimina la imagen situada fuera de la región
* Corregido el problema de que no se podía mover la imagen sobre el texto al ver la traducción

## v3.15.4 (2025/04/18)

* Buscar y reemplazar permite seleccionar fragmentos vacíos con expresiones regulares
* Soporte para hacer zoom centrado en el cursor
* Añadido un atajo de teclado para «Ir a»

## v3.15.3 (2025/03/29)

* Añadidos elementos de menú para rellenar el texto traducido con el texto original y el texto original con la traducción
* Añadido un botón mágico para ejecutar operaciones personalizadas de edición de texto [#858](https://github.com/xulihang/ImageTrans-docs/issues/858)
* Añadido un plugin de traducción dedicado para DeepSeek

## v3.15.2 (2025/03/13)

* Añadido un enlace de ayuda
* El motor vertical añade la configuración de caracteres de altura libre [#841](https://github.com/xulihang/ImageTrans-docs/issues/841)

## v3.15.1 (2025/03/08)

* Extracción de subtítulos incrustados más completa
* Añadido el elemento de menú «Ir a»

## v3.15.0 (2025/03/02)

* Añadido el extractor de subtítulos incrustados
* Añadido soporte inicial para OCR multihilo
* Buscar y reemplazar añade una opción de modo de reemplazo
* Optimizada la lógica de ordenación según los números del nombre de archivo
* Corregido el problema de que los saltos de línea de la traducción en archivos TXT separados por tabulaciones no se escapaban

## v3.14.4 (2025/02/19)

* Soporte para abrir proyectos con la aplicación predeterminada del sistema
* Soporte para abrir la imagen actual con un programa externo desde el menú contextual
* Corregidas las coordenadas incorrectas al capturar una región fija en macOS con DPI alto
* Corregido un posible error al traducir varias frases con Google Translate [#issue835](https://github.com/xulihang/ImageTrans-docs/issues/835)

## v3.14.3 (2025/01/08)

* Corregido el desplazamiento al cambiar de proporción en textos no alineados a la izquierda
* Añadido un plugin de OCR que usa ChatGPT

## v3.14.2 (2025/01/07)

* Corregido el fallo de la transformación en perspectiva en regiones rotadas de imágenes grandes [#issue813](https://github.com/xulihang/ImageTrans-docs/issues/813)
* Al guardar un proyecto se comprueba si otro proceso lo ha modificado
* Los flujos de trabajo personalizados añaden la operación de combinar regiones dentro de una viñeta

## v3.14.1 (2024/12/28)

* El radio de las esquinas redondeadas de los cuadros de texto de superposición en modo no preciso se establece por defecto en 10
* Aumentada el área de respuesta para redimensionar cuadros de texto en el modo de composición
* Corregido el problema de desenfoque de las esquinas redondeadas de los cuadros de texto de superposición en modo no preciso
* Corregido el fallo del servidor al cambiar a imágenes ya descargadas

## v3.14.0 (2024/12/14)

* Añadida la función de cuadrícula
* Añadido un elemento de menú de corrección ortográfica
* La configuración de API ahora usa TextArea para permitir introducir texto de varias líneas
* En el modo de selección múltiple por recuadro, al mantener pulsada la tecla de control, hacer clic en un cuadro de texto no lo deselecciona
* En el modo de selección múltiple por recuadro, al mantener pulsada la tecla de control se puede dibujar un recuadro para borrar la selección
* El servidor envía una comprobación de latido cada 30 segundos
* El servidor permite seleccionar el motor de OCR según el idioma de origen
* Corregido el problema de que el modo servidor no cambiaba al 100 % al generar la imagen final

## v3.13.2 (2024/12/10)

* Corregido el problema de que el atajo de restablecimiento no traducía el texto
* Corregido el problema de que el atajo de restablecimiento no usaba el atajo específico de Mac
* Corregido el problema de que tras pegar un archivo no se saltaba al archivo correspondiente
* Añadido WebP a los formatos de exportación
* El intervalo de comprobación de conexión del servidor se ha reducido de 30 a 5 segundos
* El servidor permite convertir archivos WebP devueltos mediante rutas locales

## v3.13.1 (2024/12/08)

* Corregido el problema de la coordenada Y incorrecta tras establecer el margen superior del motor vertical
* Corregido el problema de que los resultados de OCR en formato JSON no se analizaban
* En macOS se usa el java integrado para iniciar archivos jar externos
* El servidor permite transmitir solo datos de texto, sin imágenes
* El servidor transmite por defecto imágenes en formato WebP para ahorrar ancho de banda

## v3.13.0 (2024/12/07)

* Optimizado el efecto de los caracteres sin espaciado del motor vertical
* Optimizado el resultado de mangaTranslator al reconocer una región individual
* El servidor permite conectarse a servidores remotos

## v3.12.0 (2024/11/24)

* Al usar la barra de herramientas de selección, hacer clic y mover un cuadro de texto muestra sus coordenadas en la parte inferior de la interfaz
* Añadidas las operaciones de unificar el ancho y unificar la altura
* Añadido un selector de color a la barra de herramientas de fuentes
* Buscar y reemplazar permite convertir a mayúscula inicial y a mayúsculas de título
* Añadido un elemento de menú para calcular automáticamente el tamaño de fuente adecuado
* Las máscaras del modo no preciso se generan solo según las regiones del texto original
* Corregido el error de cálculo de la posición en la eliminación de texto por región del removedor de texto
* Corregido el fallo del servidor al analizar los flujos de trabajo
* Corregidos los problemas de visualización y guardado de la configuración de los flujos de trabajo
* Corregido el problema de que la ordenación de viñetas no admitía páginas dobles
* Corregido el problema de que las máscaras del modo no preciso no respondían a la rotación en tiempo real

## v3.11.2 (2024/11/16)

* Añadida la traducción automática de Alibaba
* El modo de barra de herramientas del visor de la imagen original permite mostrar los cuadros de texto del texto original
* Añadido un elemento de menú para ajustar el orden de los cuadros de texto

## v3.11.1 (2024/11/03)

* Soporte para importar imágenes PDF en formato JBIG
* Soporte para procesar archivos con flujos de trabajo personalizados desde la línea de comandos [#issue785](https://github.com/xulihang/ImageTrans-docs/issues/785)
* Los flujos de trabajo personalizados permiten modificar la configuración actual
* Soporte para usar el color de fondo del estilo de texto como color del cuadro de texto [#issue775](https://github.com/xulihang/ImageTrans-docs/issues/775)
* Añadidas a los flujos de trabajo personalizados las operaciones de ordenación de viñetas y de reducción de regiones [#issue774](https://github.com/xulihang/ImageTrans-docs/issues/774) [#issue776](https://github.com/xulihang/ImageTrans-docs/issues/776)


## v3.11.0 (2024/10/25)

* Tras importar imágenes se permanece en la imagen actual
* Soporte para usar un servicio local de detección de bocadillos [#issue771](https://github.com/xulihang/ImageTrans-docs/issues/771)
* La detección de viñetas permite usar la detección de objetos [#issue772](https://github.com/xulihang/ImageTrans-docs/issues/772)
* Se pueden guardar varias configuraciones de flujos de trabajo personalizados


## v3.10.3 (2024/10/07)

* Soporte para abrir proyectos desde la línea de comandos y arrastrando archivos
* Añadido un visor de la imagen original [#issue763](https://github.com/xulihang/ImageTrans-docs/issues/763)
* Corregido el problema de que se almacenaban traducciones automáticas vacías

## v3.10.2 (2024/09/22)

* Al importar un PDF se puede establecer si se extrae el texto
* Tras tomar una captura con el atajo de teclado se restaura automáticamente la ventana del lector de pantalla
* Actualizado el plugin de ChatGPT para permitir establecer un host con número de versión
* Corregido el problema de que las regiones de texto con ancho o alto 0 hacían fallar la generación de máscaras
* Corregida la baja resolución de las capturas del lector de pantalla con DPI alto
* Al ajustar el tamaño de una región según la máscara de texto se comprueba mediante la posición del punto central si la máscara es correcta

## v3.10.1 (2024/09/15)

* Al abrir un proyecto se salta por defecto a la última imagen abierta
* Corregido el error al exportar imágenes sin viñetas y viñetas con dimensiones incorrectas

## v3.10.0 (2024/09/07)

* Añadido soporte para texto horizontal dentro de texto vertical [#issue507](https://github.com/xulihang/ImageTrans-docs/issues/507)
* El texto enriquecido del motor de texto horizontal permite establecer tachado y subrayado
* Las líneas de alineación se borran al soltar el ratón y al actualizar
* Se permite ajustar el desplazamiento del texto vertical
* La operación de limitar las regiones de texto al interior de la imagen guarda la información de posición de la región de traducción

## v3.9.0 (2024/09/01)

* La detección de bocadillos permite seleccionar el modelo en un cuadro de diálogo
* Nueva alineación: justificada
* Añadidas guías de alineación y ajuste automático [#issue733](https://github.com/xulihang/ImageTrans-docs/issues/733)
* Se permite usar el motor 2 de OCRSpace
* Antes de la traducción automática se puede convertir el uso de mayúsculas y minúsculas del texto original

## v3.8.0 (2024/08/25)

* La detección de viñetas permite procesar automáticamente imágenes con fondo oscuro [#issue741](https://github.com/xulihang/ImageTrans-docs/issues/741)
* Soporte para establecer el color de fondo de las tiras cómicas exportadas
* Añadida la función de eliminar regiones sobrantes y completar regiones faltantes mediante la detección de bocadillos
* Corregido el problema de que, al activar la inversión de color, la combinación de regiones de texto no usaba la imagen invertida
* Se puede establecer si, en las operaciones por lotes, la detección heurística de texto debe realizar operaciones relacionadas con la confianza de las regiones de texto
* Los modelos de detección de bocadillos se pueden colocar en el directorio `models` del software y elegir cuál usar en la configuración del proyecto
* La detección de bocadillos sin conexión está habilitada por defecto
* Añadido un menú contextual de traducción en un clic basado en flujos de trabajo personalizados
* Añadidas plantillas de manga chino, manga coreano, cómic occidental, etc.
* Las plantillas permiten configurar si el usuario debe establecer manualmente el idioma y descargar el modelo de detección de bocadillos

## v3.7.0 (2024/08/18)

* La detección de texto en escenas naturales permite procesar texto inclinado
* El generador de máscaras de rectángulo inscrito permite procesar regiones inclinadas
* Las operaciones relacionadas con la detección de regiones de texto solo comprueban la superposición con las regiones existentes
* Al eliminar texto por región, las regiones rotadas usan el rectángulo delimitador
* Corregido el error de cálculo de ancho y alto al importar de vuelta datos de anotación en formato OBB
* Corregido el problema de combinación de la detección de objetos con texto rotado 90 grados
* Corregido el problema de invocación de modelos que no son ONNX
* Corregido el desplazamiento de la imagen al dibujar un recuadro fuera de ella en el editor de máscaras y el removedor de texto

## v3.6.1 (2024/08/17)

* Añadido soporte para YOLO OBB para detectar texto inclinado
* El servidor permite usar flujos de trabajo personalizados
* Corregido el problema de que los cuadros de texto no recuperaban el ángulo de rotación tras cancelar la rotación
* Corregido el problema de que los cuadros de texto no establecían la rotación al detectar el ángulo del texto con OCR

## v3.6.0 (2024/08/10)

* Añadida una configuración de píxeles de expansión al eliminar texto por región de texto
* Añadido un elemento de menú para reducir regiones
* Añadida la operación de ajustar el tamaño de las regiones de texto según la máscara
* Añadido un corrector de orientación de imágenes para corregir según la información Exif la orientación de las imágenes tomadas con teléfonos Apple y Samsung
* Añadida la función de combinar con la imagen siguiente
* Se corrige automáticamente la orientación de las imágenes descargadas según Exif
* Optimizado el cambio de página en las operaciones por lotes
* Añadida a los flujos de trabajo personalizados la operación de añadir los resultados de OCR a regiones existentes
* El modo de arrastre y la eliminación de texto por región de texto están habilitados por defecto
* Corregido el problema de que la traducción de Baidu no admitía texto de varias líneas

## v3.5.0 (2024/07/28)

* Se permite ajustar el tamaño y la posición de los cuadros de texto con las cuatro esquinas
* La información de posición de la traducción se guarda con doble precisión
* La exportación de viñetas permite guardarlas como una única imagen larga


## v3.4.0 (2024/07/21)

* Soporte para importar archivos en formatos como Epub, Mobi, ZIP y CBZ
* Añadido un asistente de plugins para gestionarlos
* Añadida una barra de herramientas de edición que permite rotar y voltear imágenes
* Añadido un gestor de páginas dobles. Al establecer imágenes como páginas dobles, se dividen en dos imágenes, izquierda y derecha, para la ordenación y la detección de viñetas
* Las preferencias permiten establecer los parámetros de los plugins de eliminación de texto y generación de máscaras
* Corregido el problema de que el removedor de texto no cargaba correctamente la imagen sin texto
* Se memorizan los resultados de traducción automática de varias frases

## v3.3.1 (2024/07/06)

* Corregido el problema de que los cuadros de texto no se redibujaban al cambiar la proporción de visualización
* Corregido el problema de que se perdía la clasificación de los bocadillos combinados en la detección de bocadillos

## v3.3.0 (2024/06/30)

* El estilo de fuente añade la configuración del margen superior
* Buscar y reemplazar añade elementos de menú contextual para operaciones relacionadas con regiones de texto
* Añadidas a los flujos de trabajo personalizados operaciones como eliminar regiones externas y detectar la dirección del texto
* Al crear un proyecto, si hay imágenes en la carpeta donde está el archivo del proyecto se pregunta si importarlas
* Optimizado el rendimiento al cambiar la proporción de visualización
* Actualizado PDFBox para corregir el problema de importación de PDF en japonés

## v3.2.1 (2024/06/24)

* La traducción en un clic realiza por defecto la detección y la ordenación de viñetas
* Optimizada la visualización del motor de texto horizontal al mantener las palabras sin dividir

## v3.2.0 (2024/06/23)

* Añadida la función de crear proyectos a partir de plantillas [#issue688](https://github.com/xulihang/ImageTrans-docs/issues/688)
* Soporte para mostrar el nombre del estilo en los cuadros de texto
* Mejorado el soporte de clasificación de la detección de objetos
* Corregido el posible problema de que los atajos de teclado predeterminados no funcionaran cuando estaban asignados a otras funciones [#issue630](https://github.com/xulihang/ImageTrans-docs/issues/630)
* Corregido el fallo de OpenCV al cargar modelos desde rutas con caracteres Unicode


## v3.1.1 (2024/06/12)

* Añadida «Obtener la confianza de las regiones de texto» a los flujos de trabajo personalizados
* Añadida una configuración de proyecto para el umbral de confianza de las regiones de texto
* Añadida una configuración de proyecto para corregir el orden del texto de los resultados de OCR de una región individual
* Corregido el problema de que los plugins de OCR de modo combinado no aparecían en las preferencias
* Corregido el problema de que el texto del motor horizontal se volvía blanco con el tema oscuro
* Corregido el fallo al combinar verticalmente regiones con texto con orden de lectura de derecha a izquierda

## v3.1.0 (2024/06/10)

* Añadido un botón de colores personalizados al selector de color
* La forma de establecer los colores en la ventana de configuración de composición ha cambiado a tomar el color de la imagen
* Los flujos de trabajo personalizados permiten procesar solo la imagen actual
* Nuevos tipos de procesamiento en los flujos de trabajo personalizados: usar el color del texto reconocido como color del trazo, establecer el color del trazo según la intensidad del color del texto, establecer el color del texto según la intensidad del color del trazo y hacer coincidir el estilo del texto con el color del trazo
* Corregidos los caracteres ilegibles en la lista de idiomas de WinRT OCR


## v3.0.0 (2024/06/08)

* Actualizado el JRE a Java 23 para corregir el problema de que los espacios en ambos extremos afectaban al ajuste de línea automático [#issue482](https://github.com/xulihang/ImageTrans-docs/issues/482)
* Soporte para definir estilos de cuadros de texto
* El editor de máscaras permite seleccionar regiones en cualquier dirección

## v2.12.4 (2024/06/02)

* El centrado vertical está habilitado por defecto
* Al arrastrar una región de texto con la tecla SHIFT pulsada se mantiene la posición horizontal. Con SHIFT y Z pulsadas se mantiene la posición vertical
* Corregido el problema de que los saltos de línea del motor de texto vertical hacían que el texto enriquecido dejara de funcionar
* Corregido el problema de que al cambiar de modo de traducción se restablecía la selección de las regiones de texto


## v2.12.3 (2024/05/23)

Corregido el problema de que el centrado vertical del script de Photoshop y el centrado horizontal en modo de texto enriquecido no funcionaban

## v2.12.2 (2024/05/19)

* Se permite establecer un idioma intermedio para la traducción automática [#issue647](https://github.com/xulihang/ImageTrans-docs/issues/647)
* Corregido el problema de que un fallo en la generación de máscaras durante una operación de OCR interrumpía la operación por lotes [#issue650](https://github.com/xulihang/ImageTrans-docs/issues/650)
* Corregida la inconsistencia de resolución de las imágenes generadas por el servidor en proporciones distintas del 100 %

## v2.12.1 (2024/05/12)

Se permite que el servidor lo invoque para ejecutar OCR y traducción automática

## v2.12.0 (2024/05/11)

* Añadida una configuración de proyecto para evitar dividir palabras
* Añadida una preferencia para seleccionar automáticamente la primera región de texto al cambiar de imagen [#issue642](https://github.com/xulihang/ImageTrans-docs/issues/642)
* Añadidas pseudoclases para completar la personalización del estilo de los cuadros de texto con CSS [#issue636](https://github.com/xulihang/ImageTrans-docs/issues/636)
* Soporte para exportar imágenes o PDF por viñetas
* Los resultados devueltos por el servidor incluyen datos como coordenadas y texto

## v2.11.2 (2024/05/02)

* Corregido el problema de que, en los archivos docx exportados, la columna de traducción tenía ancho 0 si la traducción estaba vacía [#issue639](https://github.com/xulihang/ImageTrans-docs/issues/639)
* Soporte para personalizar el estilo de los cuadros de texto con CSS [#issue636](https://github.com/xulihang/ImageTrans-docs/issues/636)
* Corregido el posible desenfoque del texto centrado horizontal o verticalmente causado por el uso de doble precisión


## v2.11.1 (2024/04/26)

* Corregido el problema de que, al cambiar a otra región de texto, los resultados de la traducción asistida podían incluir los de la región anterior [#633](https://github.com/xulihang/ImageTrans-docs/issues/633)
* Corregido el error al buscar caracteres repetidos consecutivos en buscar y reemplazar [#631](https://github.com/xulihang/ImageTrans-docs/issues/631)
* La creación de cuadros arrastrando es compatible con varias direcciones [#629](https://github.com/xulihang/ImageTrans-docs/issues/629)
* Se obtienen de forma concurrente los resultados de traducción automática para la traducción asistida [#628](https://github.com/xulihang/ImageTrans-docs/issues/628)
* Corregido el problema de que la lista de fuentes no se actualizaba a tiempo tras instalar una fuente


## v2.11.0 (2024/04/21)

* Soporte para generar regiones de texto a partir de plantillas [#issue626](https://github.com/xulihang/ImageTrans-docs/issues/626)
* Tras establecer la fuente desde la ventana de configuración de fuentes, no se cancela la selección [#issue623](https://github.com/xulihang/ImageTrans-docs/issues/623)
* Añadido un elemento de menú para crear una copia [#issue622](https://github.com/xulihang/ImageTrans-docs/issues/622)
* Los plugins de traducción automática permiten devolver varias propuestas en la pestaña de traducción asistida [#issue619](https://github.com/xulihang/ImageTrans-docs/issues/619)

## v2.10.3 (2024/04/15)

* Corregido el problema de que el guardado automático no tenía efecto al abrir un proyecto reciente
* Corregido el problema de que modificar el intervalo de guardado automático en las preferencias no surtía efecto de inmediato
* Corregido el problema de que el estado de guardado no se restablecía al cambiar de proyecto
* Al cerrar el software se genera una copia de seguridad del proyecto actual

## v2.10.2 (2024/04/13)

* Soporte para establecer el ancho y el alto del modelo ONNX de detección de bocadillos
* Soporte para cambiar el número de viñeta con doble clic
* Añadido un elemento de menú contextual para combinar regiones
* Añadidos dos modos de ordenación: primero vertical y luego horizontal, y primero horizontal y luego vertical

## v2.10.1 (2024/04/04)

* Soporte para detectar bocadillos y exportar datos de anotación mediante ventanas deslizantes
* Se da prioridad al modelo de bocadillos colocado en el directorio de imágenes del proyecto

## v2.10.0 (2024/03/30)

* Actualizado OpenCV a 4.9.0
* Añadido soporte para el modelo de detección de objetos Yolov8 (para activarlo, nombre el modelo onnx `model.onnx` y colóquelo en el directorio del software)
* Añadido un gestor de datos de anotación para detección de objetos que permite exportar datos de anotación en formato Yolo o importarlos


## v2.9.2 (2024/03/24)

* Añadido «Copiar texto» al menú contextual
* El lector de pantalla permite añadir al proyecto resultados con información de la posición del texto
* La cursiva simulada del texto horizontal permite establecer valores de desplazamiento de la coordenada Y y de la altura
* Corregido el problema introducido en 2.9.1 por el que las imágenes procesadas en el procesamiento por lotes no se correspondían [#issue598](https://github.com/xulihang/ImageTrans-docs/issues/598)
* Corregido el problema de que, con el guardado automático activado, crear una región de texto restablecía el texto de la región seleccionada [#issue598](https://github.com/xulihang/ImageTrans-docs/issues/598)


## v2.9.1 (2024/03/17)

* Añadido un removedor de transparencia que genera imágenes JPG sin transparencia para resolver el problema de que la mayoría de los métodos de OCR y procesamiento de imágenes no tratan correctamente la transparencia [#issue593](https://github.com/xulihang/ImageTrans-docs/issues/593)
* Si existe una imagen de solo texto, se da prioridad a su uso en los distintos métodos de procesamiento de imágenes. Antes solo se usaba para el OCR de las regiones de texto
* Nuevo método preciso de borrado de texto: texto transparente. Permite restaurar el fondo combinando la máscara y los píxeles circundantes. Se usa principalmente para eliminar texto sobre fondos transparentes [#issue302](https://github.com/xulihang/ImageTrans-docs/issues/302)
* Corregido el problema de que los eventos del ratón no respondían sobre el contenido de imágenes transparentes


## v2.9.0 (2024/03/17)

* El guardado automático está habilitado por defecto
* La alineación predeterminada se ha cambiado a izquierda
* Añadida una configuración de proyecto para voltear horizontalmente la imagen final [#discussion592](https://github.com/xulihang/ImageTrans-docs/discussions/592)
* La función de texto enriquecido del motor de texto vertical permite establecer el tamaño de fuente
* El motor de texto vertical admite líneas vacías
* Corregido el comportamiento del interlineado del motor de texto vertical
* Corregido el problema de que al cambiar al editor de código de texto enriquecido se restablecía la lista de fuentes [#issue587](https://github.com/xulihang/ImageTrans-docs/issues/587)

## v2.8.8 (2024/03/09)

* Soporte para combinar texto según la posición de los párrafos [#issue586](https://github.com/xulihang/ImageTrans-docs/issues/586)
* Añadido un intervalo de procesamiento al OCR en línea y a la detección de bocadillos de imágenes largas

## v2.8.7 (2024/03/04)

* Corregido el problema de que las regiones de texto no se combinaban correctamente debido a la ordenación
* Corregido el tratamiento del texto de varias líneas por la traducción de Baidu

## v2.8.6 (2024/03/01)

* Corregido el problema de que se eliminaban los saltos de línea del resultado de combinar líneas de texto cuando no estaba marcada la opción «Eliminar saltos de línea automáticamente»
* Al combinar texto en el lector de pantalla, la altura y el ancho se establecen en la mitad de las dimensiones correspondientes

## v2.8.5 (2024/02/25)

* Soporte para exportar PDF con la imagen original y para exportar PDF con texto buscable [#issue580](https://github.com/xulihang/ImageTrans-docs/issues/580)
* Soporte para generar regiones de texto a partir de máscaras [#issue577](https://github.com/xulihang/ImageTrans-docs/issues/577)

## v2.8.4 (2024/02/15)

Optimizada la ordenación del texto al combinar regiones de texto [#issue576](https://github.com/xulihang/ImageTrans-docs/issues/576)

## v2.8.3 (2024/02/08)

* Soporte para previsualizar las fuentes en la lista de fuentes de la barra de herramientas [#issue567](https://github.com/xulihang/ImageTrans-docs/issues/567)
* Al exportar la imagen final y las máscaras se omiten las imágenes traducidas [#issue548](https://github.com/xulihang/ImageTrans-docs/issues/548)
* El gestor de imágenes traducidas permite seleccionar rápidamente las imágenes ya exportadas
* Corregido el problema de que el ajuste automático del tamaño de fuente sobrescribía la configuración de negrita y cursiva del estilo global [#issue565](https://github.com/xulihang/ImageTrans-docs/issues/565)
* Otras correcciones de errores

## v2.8.2 (2024/01/21)

* El lector de pantalla admite atajos de teclado globales [#issue237](https://github.com/xulihang/ImageTrans-docs/issues/237)
* El diseño del lector de pantalla es ajustable
* Al importar de vuelta la traducción también se puede modificar el texto original [#issue557](https://github.com/xulihang/ImageTrans-docs/issues/557)
* Añadido un modo de importación de PDF: modo de extracción de imágenes

## v2.8.1 (2024/01/15)

* Corregido el problema del orden incorrecto del texto al combinar regiones con la barra de herramientas
* Corregido el comportamiento de combinación según la puntuación con orden de lectura de derecha a izquierda
* Corregido el problema de que el lector de pantalla no ocultaba la ventana al tomar capturas
* Al combinar regiones, se decide si añadir espacios según si el idioma usa espacios

## v2.8.0 (2024/01/14)

* El lector de pantalla permite corregir el orden del texto [#issue553](https://github.com/xulihang/ImageTrans-docs/issues/553)
* El lector de pantalla puede reconocer periódicamente una región fija y detectar si la imagen dentro de la región ha cambiado. La transparencia de la ventana de región fija es ajustable [#issue521](https://github.com/xulihang/ImageTrans-docs/issues/521)
* Añadida una configuración de proyecto de combinación de texto que permite combinar según la puntuación final; al combinar regiones con texto no se detectan separadores [#issue553](https://github.com/xulihang/ImageTrans-docs/issues/552)
* Los resultados de buscar y reemplazar muestran el nombre del archivo
* Corregido el problema de que al combinar regiones con la barra de herramientas no se guardaba información adicional como el estilo

## v2.7.1 (2024/01/01)

* Los modelos de lenguaje grandes como ChatGPT y Gemini pueden usar la terminología para mejorar los resultados de traducción [#issue546](https://github.com/xulihang/ImageTrans-docs/issues/546)
* Buscar y reemplazar permite saltar con doble clic y añade la opción de buscar en el archivo actual [#issue545](https://github.com/xulihang/ImageTrans-docs/issues/545)
* Buscar y reemplazar muestra los resultados en orden de nombre de archivo [#issue545](https://github.com/xulihang/ImageTrans-docs/issues/545)

## v2.7.0 (2023/12/24)

* Añadida la función de detectar el ángulo de rotación del texto [#issue543](https://github.com/xulihang/ImageTrans-docs/issues/543)
* Añadido un gestor de localización para traducir la interfaz del software [#issue544](https://github.com/xulihang/ImageTrans-docs/issues/544)
* Añadida una preferencia para desactivar el uso del texto original cuando no hay traducción al ver la traducción [#issue541](https://github.com/xulihang/ImageTrans-docs/issues/541)
* Corregido el problema de desplazamiento causado por el texto fuera de la imagen en el modo de salida predeterminado
* Otras mejoras de usabilidad

## v2.6.0 (2023/12/17)

* Mejorado el efecto de clasificación de las regiones de texto alargadas [#issue536](https://github.com/xulihang/ImageTrans-docs/issues/536)
* Añadida una página de bienvenida
* Añadida una barra de estado para mostrar el número de imágenes y el número de la imagen actual [#issue535](https://github.com/xulihang/ImageTrans-docs/issues/535)
* Añadida la opción de ordenar según la coordenada horizontal [#issue533](https://github.com/xulihang/ImageTrans-docs/issues/533)
* Añadido un elemento de menú para ajustar el tamaño de fuente [#issue529](https://github.com/xulihang/ImageTrans-docs/issues/529)
* Se memorizan estados de la interfaz como el porcentaje [#issue528](https://github.com/xulihang/ImageTrans-docs/issues/528)
* Corregido el posible desplazamiento de posición de las regiones de texto con centrado vertical en el modo de exportación de imágenes grandes

## v2.5.7 (2023/12/03)

* Corregido el problema de que las máscaras generadas al aplicar OCR a imágenes grandes se reducían
* El editor de máscaras añade la operación de eliminar la máscara fuera de las regiones de texto
* Nuevos elementos de flujo de trabajo personalizado: eliminar las regiones sin texto original de todas las imágenes y eliminar la máscara fuera del recuadro de todas las imágenes

## v2.5.6 (2023/12/02)

* La autocorrección permite usar expresiones regulares [#issue520](https://github.com/xulihang/ImageTrans-docs/issues/520)
* Corregido el desplazamiento al arrastrar cuadros de texto con escalado de DPI alto [#issue524](https://github.com/xulihang/ImageTrans-docs/issues/524)
* Con el botón derecho en la lista de imágenes se abre el menú para vaciar las imágenes [#issue516](https://github.com/xulihang/ImageTrans-docs/issues/516)

## v2.5.5 (2023/11/25)

* Añadidos los elementos de menú «Ordenar» y «Rellenar con traducción automática/memoria de traducción»
* Soporte para generar máscaras de texto mediante OCR

## v2.5.4 (2023/11/12)

* Añadida una opción para generar máscaras de texto al detectar texto en escenas naturales
* La corrección ortográfica permite revisar la traducción [#issue514](https://github.com/xulihang/ImageTrans-docs/issues/514)
* Las operaciones por lotes permiten configurarse de antemano [#issue515](https://github.com/xulihang/ImageTrans-docs/issues/515)
* Se abrevia la ruta de los proyectos recientes [#issue509](https://github.com/xulihang/ImageTrans-docs/issues/509)

## v2.5.3 (2023/10/09)

* Corregido el desplazamiento del texto rotado en las imágenes exportadas en modo de imagen grande [#issue499](https://github.com/xulihang/ImageTrans-docs/issues/499)
* Buscar y reemplazar admite selección múltiple [#issue498](https://github.com/xulihang/ImageTrans-docs/issues/498)
* El navegador integrado admite interoperabilidad con JavaScript para realizar consultas sin recargar la página [#issue500](https://github.com/xulihang/ImageTrans-docs/issues/500)

## v2.5.2 (2023/10/01)

* Mejorado el rendimiento del editor de máscaras, que admite la carga de imágenes muy grandes [#issue494](https://github.com/xulihang/ImageTrans-docs/issues/494)
* El posprocesamiento de texto, como la eliminación de espacios, se aplica a las operaciones de OCR de la imagen completa

## v2.5.1 (2023/09/24)

* Nueva configuración del motor de texto vertical: elevar el primer carácter [#issue490](https://github.com/xulihang/ImageTrans-docs/issues/490)
* El gestor de imágenes traducidas permite establecer que las imágenes traducidas no se muestren en la interfaz de edición [#issue488](https://github.com/xulihang/ImageTrans-docs/issues/488)

## v2.5.0 (2023/09/16)

El motor de texto vertical admite el centrado horizontal

## v2.4.1 (2023/09/16)

* Añadida una configuración de proyecto para el formato de salida de imagen predeterminado
* Añadido un elemento de menú para borrar el estilo del texto
* Añadida una preferencia para usar los menús nativos de macOS
* Compatibilidad con Mac ARM
* Corregido el problema de proporción incorrecta de parte del texto en el modo de exportación de imágenes grandes
* Otras correcciones de errores

## v2.4.0 (2023/08/26)

* Corregido el problema de generar repetidamente la imagen sin texto al exportar imágenes
* Corregido el problema de que la barra de progreso cambiaba antes que la imagen al cambiar de imagen
* El trazo del texto se aplica al texto y no al panel principal del texto [#issue432](https://github.com/xulihang/ImageTrans-docs/issues/432#issuecomment-1692600202)
* La barra de herramientas de fuentes añade la opción de aplicar a todo [#issue432](https://github.com/xulihang/ImageTrans-docs/issues/432#issuecomment-1692600202)
* Los cambios de la ventana de configuración de fuentes se pueden aplicar a todos los cuadros de texto seleccionados [#issue432](https://github.com/xulihang/ImageTrans-docs/issues/432#issuecomment-1694525969)
* En el modo de arrastre, al mantener pulsada la tecla Ctrl se puede hacer zoom con la rueda del ratón
* La terminología permite añadir notas
* Añadido un gestor de terminología

## v2.3.0 (2023/08/20)

* Corregido el problema de que el centrado vertical dejaba de funcionar al activar el tamaño de texto automático
* Corregido el conflicto de eventos en el modo de arrastre
* Nueva función: navegador web integrado [#issue483](https://github.com/xulihang/ImageTrans-docs/issues/483)

## v2.2.2 (2023/08/10)

* Corregido el recorte del texto del motor de texto horizontal cuando el interlineado es mayor que 1
* Añadido un elemento de menú para alinear cuadros de texto [#issue479](https://github.com/xulihang/ImageTrans-docs/issues/479)

## v2.2.1 (2023/08/05)

* Optimizado el editor de máscaras: las máscaras son semitransparentes por defecto [#issue472](https://github.com/xulihang/ImageTrans-docs/issues/472)
* El motor vertical permite configurar caracteres con espaciado cero [#issue473](https://github.com/xulihang/ImageTrans-docs/issues/473)
* Corrección de errores

## v2.2.0 (2023/07/30)

* Añadido el plugin de traducción de imágenes de Baidu [#issue470](https://github.com/xulihang/ImageTrans-docs/issues/470)
* Los plugins de OCR permiten establecer información como la traducción y el color de fuente de los cuadros de texto
* Antes del OCR de la imagen completa se reducen las imágenes demasiado grandes y se dividen las demasiado largas
* El editor de máscaras conserva automáticamente el color de la opción anterior [#issue467](https://github.com/xulihang/ImageTrans-docs/issues/467)
* Corregido el problema de que desactivar el ajuste de línea automático no tenía efecto

## v2.1.0 (2023/07/09)

* Añadida la opción de saltar a la imagen correspondiente tras seleccionar una región en la lista de regiones de texto [#issue455](https://github.com/xulihang/ImageTrans-docs/issues/455)
* Buscar y reemplazar añade opciones de conversión de mayúsculas y minúsculas
* Antes de exportar la imagen final se aplican automáticamente los ajustes necesarios [#issue461](https://github.com/xulihang/ImageTrans-docs/issues/461)
* Al ajustar una región de texto se puede mantener la proporción pulsando SHIFT [#issue462](https://github.com/xulihang/ImageTrans-docs/issues/462)
* Nueva barra de herramientas relacionada con la imagen original para ajustar la transparencia de la capa de superposición y alinear las posiciones del texto original y la traducción [#issue458](https://github.com/xulihang/ImageTrans-docs/issues/458)
* Corregido el problema de que el script de Photoshop no podía procesar el trazo [b079d40](https://github.com/xulihang/ImageTrans_PhotoshopScripts/commit/b079d40ffdf8188de0c05eeaa64f742b28e2eb00)
* Corregido el desplazamiento al ajustar manualmente la posición y el tamaño de la traducción o al cambiar la proporción de visualización [#issue459](https://github.com/xulihang/ImageTrans-docs/issues/459)
* Corregido el conflicto del atajo de teclado de eliminación [#issue455](https://github.com/xulihang/ImageTrans-docs/issues/455)
* Corregido el problema de que el centrado vertical del motor de texto vertical no tenía efecto al modificar la traducción [#issue458](https://github.com/xulihang/ImageTrans-docs/issues/458)

## v2.0.0 (2023/07/02)

* Actualizado el plugin de ChatGPT para permitir establecer el modelo [#issue430](https://github.com/xulihang/ImageTrans-docs/issues/430)
* El modo no preciso permite cubrir texto rotado
* La unidad de generación de máscaras de texto de las regiones rotadas se ha actualizado a su rectángulo delimitador correspondiente
* Al cambiar a la barra de herramientas de ordenación, se puede establecer manualmente el número de secuencia de una región de texto con doble clic [#issue445](https://github.com/xulihang/ImageTrans-docs/issues/445)
* La configuración del proyecto añade un nuevo ajuste de criterio de ordenación que permite elegir entre ordenar por distancia al origen o por coordenada vertical [#issue445](https://github.com/xulihang/ImageTrans-docs/issues/445)
* La determinación de regiones superpuestas ya no tiene en cuenta el área [#issue447](https://github.com/xulihang/ImageTrans-docs/issues/447#issuecomment-1616323053)
* El gestor de imágenes traducidas permite realizar selecciones rápidas según condiciones [#issue447](https://github.com/xulihang/ImageTrans-docs/issues/447#issuecomment-1616323053)
* Las regiones de texto que salen de los límites de la imagen se devuelven automáticamente al interior [#issue452](https://github.com/xulihang/ImageTrans-docs/issues/452)
* Corregido el problema de que las máscaras generadas por la detección de texto en escenas naturales se escalaban

## v1.9.8 (2023/05/21)

* Actualizado el plugin de ChatGPT para permitir la traducción por lotes por imagen [#issue404](https://github.com/xulihang/ImageTrans-docs/issues/404)
* Al importar de vuelta la traducción desde TXT se permite que la traducción esté vacía
* Al importar de vuelta la traducción desde TXT, si hay un error se indica qué línea contiene el error [#issue412](https://github.com/xulihang/ImageTrans-docs/issues/412)
* Nuevo plugin de generación de máscaras: rectángulo inscrito [#issue413](https://github.com/xulihang/ImageTrans-docs/issues/413)

## v1.9.7 (2023/05/13)

* Corregido el problema de que, con el guardado automático de texto original y traducción activado, borrar la posición de la traducción vaciaba el texto [#issue408](https://github.com/xulihang/ImageTrans-docs/issues/408)
* Añadida la función de eliminar con el botón derecho en la lista de terminología

## v1.9.6 (2023/05/07)

* Corregido el problema de coincidencia de expresiones regulares en texto de varias líneas en buscar y reemplazar [#issue402](https://github.com/xulihang/ImageTrans-docs/issues/402)
* Soporte para exportar archivos de memoria de traducción TMX
* Actualizado el plugin de ChatGPT para permitir establecer servicios de terceros [#issue401](https://github.com/xulihang/ImageTrans-docs/issues/401)

## v1.9.5 (2023/05/01)

* Actualizado el script de Photoshop en JavaScript para admitir texto enriquecido
* La pretraducción permite usar la memoria de traducción para coincidencias exactas
* Nuevo elemento de menú contextual: borrar la posición de la traducción [#issue393](https://github.com/xulihang/ImageTrans-docs/issues/393)
* La configuración del tema se aplica a todas las ventanas
* Mejoras de usabilidad en la configuración de estilos de fuente

## v1.9.4 (2023/04/05)

* Corregido el problema de altura incorrecta de la transformación en perspectiva de la cursiva simulada cuando se ha establecido un interlineado
* La negrita simulada y la cursiva simulada permiten establecer el grado de engrosamiento e inclinación

## v1.9.3 (2023/04/02)

* Soporte para exportar a PDF [#issue366](https://github.com/xulihang/ImageTrans-docs/issues/366)
* Nuevos plugins de traducción automática: [ChatGPT](https://github.com/xulihang/ImageTrans-docs/issues/375), [Yandex](https://github.com/xulihang/ImageTrans-docs/issues/386)
* Añadido un editor de código de texto enriquecido [#issue390](https://github.com/xulihang/ImageTrans-docs/issues/390)
* El texto enriquecido permite configurar negrita simulada, cursiva simulada, nombre de fuente y tamaño de fuente [#issue389](https://github.com/xulihang/ImageTrans-docs/issues/389)
* Nueva configuración del motor de texto vertical: sustitución de caracteres [#issue388](https://github.com/xulihang/ImageTrans-docs/issues/388)
* Al seleccionar varios cuadros de texto no se ejecutan las operaciones de un solo cuadro de texto

## v1.9.2 (2023/03/05)

* Corregido el problema de que la traducción no se combinaba al combinar regiones
* Añadida una configuración de proyecto para ejecutar la generación de máscaras de texto y de imágenes sin texto por región de texto
* Soporte para guardar los resultados de la máscara de texto de la detección de texto en escenas naturales [#issue370](https://github.com/xulihang/ImageTrans-docs/issues/370)

## v1.9.1 (2023/02/19)

* Corregido el problema de que no se ignoraba el BBCode al calcular la altura del texto horizontal
* Corregido el problema de que el BBCode dejaba de funcionar cuando el estilo de texto se establecía en mayúsculas
* El JRE predeterminado se ha cambiado a Liberica JRE 11

## v1.9.0 (2023/02/12)

* Soporte para texto enriquecido (basado en BBCode) [#issue194](https://github.com/xulihang/ImageTrans-docs/issues/194#issuecomment-1426964710)
* Corregidos problemas relacionados con las solicitudes de red, la selección múltiple con Ctrl y la confianza de las regiones de texto

## v1.8.5 (2023/01/08)

* Nuevo plugin de OCR: el OCR integrado de macOS [#issue341](https://github.com/xulihang/ImageTrans-docs/issues/341)
* Soporte para pegar imágenes desde una ruta de archivo
* Se usa el comando file para detectar si una imagen está en formato WebP [#issue338](https://github.com/xulihang/ImageTrans-docs/issues/338)
* Corregido el fallo al cargar imágenes mediante enlaces data URL
* Corregido el problema de que, al establecer un método de restauración de imágenes de terceros como método predeterminado, se pasaba la imagen en escala de grises de la máscara de texto en lugar de la imagen original
* Añadida la opción de autocorregir al escribir


## v1.8.4 (2022/11/26)

* Soporte para personalizar atajos de teclado [#issue323](https://github.com/xulihang/ImageTrans-docs/issues/323)
* Mejoras en la interfaz

## v1.8.3 (2022/11/13)

* Nueva función: hacer coincidir automáticamente el estilo de texto predefinido según el color del texto detectado  [#issue322](https://github.com/xulihang/ImageTrans-docs/issues/322)
* Las capturas del lector de pantalla se muestran al 100 %

## v1.8.2 (2022/10/29)

* En el modo de composición, los bordes de los cuadros de texto se ocultan al arrastrarlos (se puede desactivar la ocultación en las preferencias) [#issue314](https://github.com/xulihang/ImageTrans-docs/issues/314)
* Nueva opción de configuración del proyecto: leer subcarpetas (activada por defecto) [#issue304](https://github.com/xulihang/ImageTrans-docs/issues/304)


## v1.8.1 (2022/10/05)

* Corregido el fallo al eliminar texto en imágenes PNG cuyo número de canales no es 4
* Corregida la lógica de la casilla «Añadir capa de superposición»

## v1.8.0 (2022/10/02)

* Soporte para exportar imágenes como PNG [#issue295](https://github.com/xulihang/ImageTrans-docs/issues/295)
* Si el formato de la imagen es PNG, la imagen sin texto y la imagen final también usan PNG. Para otros formatos se usa JPG por defecto [#issue295](https://github.com/xulihang/ImageTrans-docs/issues/295)
* Añadida una configuración del tamaño predeterminado de los cuadros de texto en la configuración del proyecto [#issue290](https://github.com/xulihang/ImageTrans-docs/issues/290)
* Soporte para ajustar la posición de varias regiones de texto con atajos de teclado [#issue285](https://github.com/xulihang/ImageTrans-docs/issues/285)


## v1.7.11 (2022/09/18)

Corregido un error de exportación de datos introducido en v1.7.8 [#issue279](https://github.com/xulihang/ImageTrans-docs/issues/279)

## v1.7.10 (2022/09/18)

* En macOS, los atajos de teclado dan prioridad a la tecla Command [#issue277](https://github.com/xulihang/ImageTrans-docs/issues/277)
* Optimizada la usabilidad del editor de máscaras [#issue261](https://github.com/xulihang/ImageTrans-docs/issues/261)
* Añadida la configuración personalizada del motor de texto vertical en la configuración del proyecto [#issue271](https://github.com/xulihang/ImageTrans-docs/issues/271#issuecomment-1246208024)

## v1.7.9 (2022/09/12)

Mejorado el comportamiento del motor vertical con distintas fuentes [#issue271](https://github.com/xulihang/ImageTrans-docs/issues/271)

## v1.7.8 (2022/09/11)

* Corregido el fallo al guardar el editor de máscaras de texto cuando la imagen tenía demasiado ancho [#issue266](https://github.com/xulihang/ImageTrans-docs/issues/266)
* Mejorada la configuración de estilos de fuente [#issue256](https://github.com/xulihang/ImageTrans-docs/issues/256)
* Mejorado el comportamiento del pincel del editor de máscaras de texto [#issue261](https://github.com/xulihang/ImageTrans-docs/issues/261)
* Nueva opción de estilo de fuente: espaciado entre caracteres (solo para texto vertical) [#issue224](https://github.com/xulihang/ImageTrans-docs/issues/224)

## v1.7.7 (2022/08/27)

* Se usa la transformación en perspectiva para obtener con mayor precisión la imagen de las regiones rotadas
* Otras correcciones de errores [#issue246](https://github.com/xulihang/ImageTrans-docs/issues/246) [#issue248](https://github.com/xulihang/ImageTrans-docs/issues/248)

## v1.7.6 (2022/08/20)

Se reutilizan automáticamente el motor de OCR y el idioma usados anteriormente en el proyecto [#issue245](https://github.com/xulihang/ImageTrans-docs/issues/245)

## v1.7.5 (2022/08/13)

El texto horizontal permite establecer el interlineado [#issue244](https://github.com/xulihang/ImageTrans-docs/issues/244)

## v1.7.4 (2022/07/24)

* El motor vertical permite ordenar el texto de izquierda a derecha [#issue242](https://github.com/xulihang/ImageTrans-docs/issues/242)
* Nueva preferencia: guardar automáticamente los resultados de OCR en el portapapeles [#issue169](https://github.com/xulihang/ImageTrans-docs/issues/169)

## v1.7.3 (2022/07/03)

* El modo de edición con pincel de máscara permite ajustar el radio
* Corregido el fallo al exportar la página web cuando no se han detectado viñetas
* Actualizado el script de Photoshop en JS para admitir archivos en formato PSB

## v1.7.2 (2022/06/03)

Nueva preferencia: carpeta temporal para solicitudes de red, que resuelve el problema de «Acceso denegado» que experimentan algunos usuarios [#issue218](https://github.com/xulihang/ImageTrans-docs/issues/218)

## v1.7.1 (2022/05/29)

* Mejoras en la experiencia de usuario al modificar fuentes [#issue212](https://github.com/xulihang/ImageTrans-docs/issues/212)
* Mejoras en los atajos de teclado [#issue205](https://github.com/xulihang/ImageTrans-docs/issues/205#issuecomment-1135449173)
* Añadida la función de actualizar con el botón derecho, que permite ver los errores al cambiar de imagen demasiado rápido en el modo de traducción [#issue211](https://github.com/xulihang/ImageTrans-docs/issues/211)
* Nuevo plugin de restauración de imágenes: Lama Inpainting [#issue216](https://github.com/xulihang/ImageTrans-docs/issues/216)


## v1.7.0 (2022/05/22)

* Añadido un gestor de imágenes originales sin texto y de imágenes de solo texto [#issue199](https://github.com/xulihang/ImageTrans-docs/issues/199)
* La autocorrección se puede usar en el OCR [#issue199](https://github.com/xulihang/ImageTrans-docs/issues/199#issuecomment-1126957556)
* Corregido el fallo de importación de XLIFF [#issue207](https://github.com/xulihang/ImageTrans-docs/issues/207)
* Soporte para importar de vuelta la traducción desde archivos TXT separados por tabulaciones [#issue207](https://github.com/xulihang/ImageTrans-docs/issues/207)
* El fondo del estilo de fuente se puede establecer como transparente [#issue208](https://github.com/xulihang/ImageTrans-docs/issues/208)
* Otras correcciones de errores y optimizaciones [#issue203](https://github.com/xulihang/ImageTrans-docs/issues/203)


## v1.6.5 (2022/05/01)

* Para casos como la traducción del japonés al inglés, con texto original vertical y traducción horizontal, añadida la función de ajustar automáticamente la posición y el tamaño de las regiones de texto para adaptarlas a la visualización horizontal [#issue190](https://github.com/xulihang/ImageTrans-docs/issues/190#issuecomment-1107365256)
* Añadido un botón de lectura en voz alta debajo del área de edición de texto (se puede ocultar) [#issue191](https://github.com/xulihang/ImageTrans-docs/issues/191)
* Se pueden establecer el método predeterminado de máscara de texto y de restauración de imágenes [#issue192](https://github.com/xulihang/ImageTrans-docs/issues/192#issuecomment-1114153046)
* La generación de máscaras de texto y la restauración de imágenes se ejecutan por región de texto para mejorar la velocidad de procesamiento
* Otras pequeñas optimizaciones

## v1.6.4 (2022/04/17)

* Corregido el problema de que no funcionaba abrir la carpeta del proyecto en macOS y del gesto de ratón para rotar demasiado sensible
* La configuración de estilos de fuente admite selección múltiple y se aplica de inmediato [#issue185](https://github.com/xulihang/ImageTrans-docs/issues/185)
* Optimizada la visualización de letras y puntuación del motor de texto vertical [#issue186](https://github.com/xulihang/ImageTrans-docs/issues/186)
* Corregido el recorte de texto cuando el tamaño de fuente del motor de texto vertical es demasiado grande

## v1.6.3 (2022/04/04)

* Añadido soporte para el método de pago Mianbaoduo
* Añadida la versión gratuita de DeepL ([instrucciones](https://github.com/xulihang/ImageTrans_plugins/tree/master/deeplfreeMT))

## v1.6.2 (2022/03/27)

* Añadida la función de exportar como página web (permite la lectura por viñetas y la lectura en voz alta)
* El servidor puede usarse ahora como servidor HTTP para consultar las páginas web exportadas en la red local
* Motor de texto vertical: admite la configuración del interlineado y optimiza la velocidad y la visualización de la puntuación
* Añadida la operación de añadir un cuadro de texto de imagen completa
* El nombre de la carpeta de salida se puede configurar [#issue170](https://github.com/xulihang/ImageTrans-docs/issues/170#issuecomment-1058741066)
* Se puede reproducir un sonido de aviso al completar las operaciones de los flujos de trabajo personalizados [#issue171](https://github.com/xulihang/ImageTrans-docs/issues/171)
* El tamaño de fuente de la barra de herramientas ahora se puede introducir directamente [#issue176](https://github.com/xulihang/ImageTrans-docs/issues/176)

## v1.6.1 (2022/02/26)

* Soporte para rotar cuadros de texto arrastrando con el ratón. El ángulo de rotación se puede usar para corregir la imagen del texto y mejorar la tasa de reconocimiento [#issue157](https://github.com/xulihang/ImageTrans-docs/issues/157)
* Añadidas barras de progreso del procesamiento por lotes para la detección de viñetas y de color [#issue153](https://github.com/xulihang/ImageTrans-docs/issues/153)
* La conversión de texto a voz (TTS) añade la configuración de velocidad y permite leer al mismo tiempo el texto original y la traducción [#issue152](https://github.com/xulihang/ImageTrans-docs/issues/152)
* Corregido el problema del índice de texto del script de Photoshop en AU3 [#issue160](https://github.com/xulihang/ImageTrans-docs/issues/160)

## v1.6.0 (2022/02/06)

* Añadida la función de detección de viñetas de cómic, que se puede usar para ordenar las regiones de texto y para la lectura por viñetas en dispositivos móviles [#issue147](https://github.com/xulihang/ImageTrans-docs/issues/147)
* Añadido un menú contextual para ver la traducción automática, que permite ver el resultado de traducir el texto concatenado de varias regiones de texto; se usa principalmente cuando una frase está dividida entre distintos bocadillos [#issue118](https://github.com/xulihang/ImageTrans-docs/issues/118)
* Otras optimizaciones de rendimiento y correcciones de errores

## v1.5.5 (2022/01/31)

* La detección de bocadillos admite tiras cómicas largas [#issue138](https://github.com/xulihang/ImageTrans-docs/issues/138)
* El ajuste automático del tamaño de fuente permite establecer el tamaño máximo de fuente [#issue146](https://github.com/xulihang/ImageTrans-docs/issues/146)
* El lector de pantalla añade la función de supervisar el portapapeles [#issue145](https://github.com/xulihang/ImageTrans-docs/issues/145)
* Los resultados de traducción del traductor silencioso guardan la información de la ruta del archivo original [#issue144](https://github.com/xulihang/ImageTrans-docs/issues/144)
* Nuevo plugin de traducción automática: DeepL [#issue15](https://github.com/xulihang/ImageTrans-docs/issues/15)
* La operación de expandir regiones comprueba las dimensiones de la imagen para no salirse de ella
* Al cambiar de imagen, la barra de desplazamiento se mueve a la parte superior

## v1.5.4 (2022/01/22)

* Corregido un problema de localización de la página de preferencias [#issue141](https://github.com/xulihang/ImageTrans-docs/issues/141)
* Añadida una opción para escalar la imagen antes de la detección de bocadillos (por defecto se escala a 1024 píxeles) [#issue137](https://github.com/xulihang/ImageTrans-docs/issues/137)

## v1.5.3 (2022/01/16)

* Actualizado OpenCV a 4.5.5 para admitir Scaled-Yolo V4 [#issue129](https://github.com/xulihang/ImageTrans-docs/issues/129)
* Soporte para exportar las regiones de texto e importar de vuelta los resultados de OCR de cada imagen [#issue124](https://github.com/xulihang/ImageTrans-docs/issues/124)
* En el modo de borrado de texto con cobertura de color sólido se puede establecer un fondo de rectángulo redondeado [#issue123](https://github.com/xulihang/ImageTrans-docs/issues/123)
* Corregida la inconsistencia del comportamiento del texto centrado verticalmente en distintas proporciones [#issue122](https://github.com/xulihang/ImageTrans-docs/issues/122)
* La función de autocorrección también se puede usar en la traducción automática [#issue133](https://github.com/xulihang/ImageTrans-docs/issues/133)
* Otras mejoras de interfaz y rendimiento

## v1.5.2 (2021/12/26)

* Añadida la función de conversión de texto a voz (TTS)
* Las regiones de texto se pueden eliminar directamente con la tecla Suprimir
* La detección heurística de texto permite establecer un tiempo de espera
* Otras correcciones de errores

## v1.5.1 (2021/12/05)

* Mejorado el comportamiento del lector de pantalla [issue 110](https://github.com/xulihang/ImageTrans-docs/issues/110)
* Mejorado el comportamiento del modo de composición con texto alineado a la derecha

## v1.5.0 (2021/11/14)

* Soporte para cargar manualmente archivos de fuentes [issue 100](https://github.com/xulihang/ImageTrans-docs/issues/100)
* Añadido un asistente de entrada compatible basado en Swing JTextArea para resolver temporalmente el problema de entrada de tibetano en JavaFX [issue 99](https://github.com/xulihang/ImageTrans-docs/issues/99)
* Nueva configuración de proyecto: fuente del área de edición
* Otras correcciones de errores

## v1.4.8 (2021/10/30)

* Se unifica el comportamiento de los cuadros de texto al 100 % y en otras proporciones de visualización [issue 94](https://github.com/xulihang/ImageTrans-docs/issues/94)
* Nuevo plugin de OCR: Google Drive OCR [issue 91](https://github.com/xulihang/ImageTrans-docs/issues/91)
* Corregido un problema por el que el OCR de Google no obtenía el texto correctamente

## v1.4.7 (2021/10/17)

* La detección heurística de texto se ejecuta en un hilo para evitar que el programa deje de responder
* Se unifica el comportamiento de las operaciones de OCR del lector de pantalla y del programa principal
* La proporción de visualización predeterminada se ha ajustado al 100 %

## v1.4.6 (2021/10/06)

* Añadido un modo de reconocimiento de líneas de texto con Tesseract. ImageTrans localiza las líneas de texto y luego Tesseract reconoce cada línea, lo que puede aumentar considerablemente la precisión ([issue87](https://github.com/xulihang/ImageTrans-docs/issues/87))
* Añadida la opción de mayúsculas automáticas
* El lector de pantalla añade la opción de traducción automática automática
* Otras correcciones de errores

## v1.4.5 (2021/09/25)

* Añadido un asistente de traducción silenciosa
* Añadido un método de eliminación de furigana basado en proyecciones
* Actualizado OpenCV a 4.5.3, que admite las funciones de detección y reconocimiento de texto incluidas en OpenCV ([dirección del plugin](https://github.com/xulihang/ImageTrans-docs/issues/85)).
* Nuevo plugin de OCR para japonés: [読取革命](https://github.com/xulihang/ImageTrans-docs/issues/83).
* Otras correcciones de errores

## v1.4.4 (2021/08/07)

* Corregido el problema de ancho y alto incorrectos del texto rotado al generar imágenes de traducción de alta resolución
* Corregido el problema de que, al componer texto vertical, tras ajustar automáticamente una región demasiado pequeña no se ajustaba la posición del texto
* Nuevo elemento de menú: abrir la carpeta del proyecto

## v1.4.3 (2021/08/05)

* Corregido el problema de que al cambiar a la barra de herramientas de fuentes no se actualizaba la configuración de fuente de la región de texto actual
* Corregido el problema de que el botón de centrado vertical de la barra de herramientas de fuentes no actualizaba su estado al cambiar de región de texto
* Mejorado el efecto del centrado vertical
* Otras optimizaciones

## v1.4.2 (2021/07/25)

* Corregido el fallo al exportar imágenes de gran resolución (ancho o alto > 8000)
* El texto dispuesto verticalmente admite el ajuste automático del tamaño de fuente
* Actualizadas las operaciones de ajuste de las regiones de texto dispuestas verticalmente para adaptarlas al cambio de la versión 1.4.1, que alinea el texto a la derecha: hacer clic en el lado izquierdo de la región ajusta el tamaño y en el lado derecho ajusta la posición
* Otras optimizaciones


## v1.4.1 (2021/07/18)

* Añadida la opción de centrar verticalmente el texto ([#issue72](https://github.com/xulihang/ImageTrans-docs/issues/72))
* Añadido un atajo de teclado para eliminar regiones de texto ([#issue71](https://github.com/xulihang/ImageTrans-docs/issues/71))
* Si no se ha guardado la máscara de texto y no se han añadido, eliminado o ajustado regiones de texto, no se regenera la imagen sin texto
* Añadidos el vietnamita, el hindi y el indonesio a la lista de idiomas predeterminada (en versiones anteriores había que introducir manualmente el código de idioma) ([#issue61](https://github.com/xulihang/ImageTrans-docs/issues/61))
* El texto vertical se ordena por defecto desde el lado derecho
* Otras optimizaciones

## v1.4.0 (2021/06/14)

* Añadida la operación Guardar como
* Añadido un menú de navegación
* Añadido un gestor de imágenes traducidas; las imágenes marcadas como traducidas se omiten en las operaciones por lotes ([#issue59](https://github.com/xulihang/ImageTrans-docs/issues/59))
* El editor de texto original y traducción puede convertirse en ventana activa
* Se usa un Spinner como control para ajustar la proporción de visualización de la imagen
* Al abrir un proyecto se cierra automáticamente el proyecto ya abierto ([#issue39](https://github.com/xulihang/ImageTrans-docs/issues/39))


## v1.3.7 (2021/05/04)

* Se conserva el estado al cambiar de barra de herramientas ([#issue47](https://github.com/xulihang/ImageTrans-docs/issues/47))
* Corregido un problema por el que la exportación de datos no incluía la traducción ([#issue45](https://github.com/xulihang/ImageTrans-docs/issues/45))

## v1.3.6 (2021/05/02)

* Eliminar y invertir la confianza con el botón derecho se aplican a todas las regiones de texto seleccionadas
* Al mantener pulsada la tecla Control se pueden seleccionar varias regiones de texto con un solo clic
* Añadida al menú contextual de las regiones de texto la función de eliminar el texto original y la traducción
* Otras optimizaciones

## v1.3.5 Update2 (2021/04/26)

* Si se intentan importar imágenes sin haber abierto un proyecto, se muestra un aviso amable
* Añadido soporte para la extensión JPEG

## v1.3.5 Update (2021/04/06)

* El selector de idioma ya no aparece al abrir proyectos anteriores
* El texto emergente del selector de imágenes se establece en el nombre del archivo actual

## v1.3.5 (2021/03/30)

* Mejorada la función de traducir varias frases en una sola solicitud de traducción automática; Baidu ahora también admite la traducción por lotes
* El método de localización heurística añade el ajuste automático de parámetros (experimental)
* Mejoradas las operaciones de estilos de fuente, que permiten moverlos e importarlos desde otros proyectos
* Al crear un proyecto se solicita establecer el par de idiomas
* Se unifica el selector de color de fuente
* Mejorada la función de deshacer

## v1.3.4 (2021/03/27)

Se han resuelto los problemas planteados en GitHub: [#16](https://github.com/xulihang/ImageTrans-docs/issues/16), [#19](https://github.com/xulihang/ImageTrans-docs/issues/19), [#22](https://github.com/xulihang/ImageTrans-docs/issues/22), [#23](https://github.com/xulihang/ImageTrans-docs/issues/23)

## v1.3.3 (2021/03/23)

* Actualizado [ImageTrans_OCR](https://github.com/xulihang/ImageTrans_OCR), añadido [ChineseOCR](https://github.com/ouyanghuiyu/chineseocr_lite) y añadido soporte para combinar distintos métodos de detección y reconocimiento de texto; también se ha actualizado el plugin correspondiente
* Corregido el problema de que el índice superaba el número de cuadros de texto en el OCR por lotes. [Issue correspondiente](https://github.com/xulihang/ImageTrans-docs/issues/6)
* Añadida la configuración del intervalo de OCR

## v1.3.2 (2021/03/07)

* Al aplicar OCR a una región de texto, si la imagen es demasiado pequeña se amplía
* Se han localizado diseños que se habían omitido
* Nuevo plugin de OCR: CRAFT+CRNN. Se basa en el nuevo [proyecto ImageTrans_OCR](https://github.com/xulihang/ImageTrans_OCR). Este proyecto tiene como objetivo convertirse en un servicio que agrupe los OCR sin conexión actuales que ofrecen buena personalización, velocidad y precisión de reconocimiento

## v1.3.1 (2021/02/28)

* Nuevo plugin de OCR: Clova OCR de Naver
* Soporte para combinar o eliminar regiones rápidamente en modo de selección por recuadro
* Añadida la opción de aplicar OCR tras la selección por recuadro
* Añadidos atajos de teclado para operar con regiones de texto (mover y OCR)
* Detección de bocadillos sin conexión basada en el módulo Dnn de OpenCV, que puede usar modelos generados por [DarkNet](https://zhuanlan.zhihu.com/p/346021510) o [TensorFlow Object Detection API](https://github.com/opencv/opencv/wiki/TensorFlow-Object-Detection-API). Es necesario colocar el archivo del modelo, el archivo de configuración del modelo y model.json en el directorio raíz del software ([ejemplo](/assets/model.json)).
* El editor de texto permite mostrar el texto original y la traducción uno encima del otro


## v1.3.0 (2021/02/10)

* Añadida la función de flujos de trabajo personalizados, que permite definir los procesos por lotes
* Soporte para importar PDF. Los PDF se exportan como imágenes. Si el texto del PDF se puede copiar, también se importa el texto

## v1.2.11

* Corregido el problema de que la posición de la región de traducción no se guardaba correctamente
* Corregido el problema de la ruta de guardado de los archivos de scripts de Photoshop
* El editor de máscaras permite generar máscaras con un color especificado y mostrarlas semitransparentes
* Soporte para usar Caiyun Xiaoyi para solicitar la traducción de varias frases a la vez, lo que puede aumentar considerablemente la velocidad de traducción automática
* La pretraducción automática permite establecer un intervalo entre solicitudes para evitar superar el número de solicitudes por unidad de tiempo y no obtener traducción (los proveedores de traducción automática suelen establecer un QPS)

## v1.2.10

* Nuevo plugin de OCR: ABBYY Cloud
* Soporte para usar LanguageTool para la corrección ortográfica de los resultados de OCR


## v1.2.9

* Si el orden de lectura es de derecha a izquierda, los cuadros de texto se voltean antes de ordenarlos
* El removedor de texto añade la opción de radio de restauración de imágenes
* Añadidos temas. Actualmente se ofrecen tema oscuro y tema verde.
* Algunos OCR y traducciones automáticas usan por defecto mi clave de API personal; la traducción automática incluye Baidu, Xiaoniu y Tencent, y el OCR incluye OCRSPACE, Azure y Baidu.

## v1.2.8

* Añadida la función de deshacer
* Se usa TextFlow como renderizador de texto predeterminado. El texto ya no muestra puntos suspensivos.
* Cambiar la proporción de visualización no modifica la fuente ni el diseño
* Otras optimizaciones

## v1.2.7

* Soporte para ejecutar varios procesos de tesseract a la vez para acelerar el OCR
* Los registros de verificación se conservan 7 días
* El OCR de Sogou admite el orden de lectura de derecha a izquierda
* Añadida la versión precisa del OCR de Baidu
* Corregidos problemas de buscar y reemplazar (comportamiento incorrecto al saltar a fragmentos y fallos de reemplazo causados por la localización)

## v1.2.6

* Las imágenes en formato WebP descargadas desde enlaces se convierten a JPG (con OpenCV)
* Soporte para eliminar el furigana de los cómics japoneses y obtener mejores resultados de OCR
* Se convierte mejor el japonés dispuesto verticalmente en imágenes de disposición horizontal (se rotan y centran contenidos como «—»)
* Soporte para la operación de unificar estilos de fuente
* Las regiones de texto obtenidas por OCR también se expanden

## v1.2.5

* Corregido un problema por el que la posición de la región de texto de traducción se sobrescribía con la posición de la región del texto original
* El editor de máscaras admite el modo pincel
* La configuración de fuentes permite establecer mayúsculas
* La detección de texto añade la configuración de porcentaje mínimo de superposición de ancho/alto
* Corregido un problema por el que no se añadía una región de texto cuando había superposición
* El script de Photoshop permite establecer estilos como negrita, cursiva, mayúsculas y rotación

## v1.2.4

* Añadido soporte para la extensión (plugin) de ImageTrans para Chrome. Visite [este enlace](https://github.com/xulihang/ImageTrans_chrome_extension) para consultar las instrucciones de uso.
* Al importar imágenes no se importan las máscaras de texto, las imágenes sin texto ni las imágenes finales exportadas
* Corregido el problema de que la función de registro de proyectos recientes de v1.2.2 impedía crear proyectos nuevos correctamente
* Otras optimizaciones

## v1.2.3

* Añadida la opción de traducir después del OCR
* En el modo no preciso, al ver la traducción, si el texto original y la traducción están vacíos, el fondo del cuadro de texto se vuelve transparente para facilitar la consulta del texto original
* La operación de detección de regiones de texto de la traducción por lotes añade la detección de texto en escenas naturales y de bocadillos
* El traductor silencioso permite establecer la fuente
* Añadido un menú contextual que permite descargar imágenes al proyecto a partir de enlaces de imágenes

## v1.2.2

* Añadido el traductor silencioso, que permite traducir imágenes por lotes y se puede invocar desde la línea de comandos o ejecutar como [servidor](https://github.com/xulihang/ImageTrans_Server)
* Nuevo plugin de OCR: Sogou Shenzhi OCR
* Se guardan las rutas de los proyectos abiertos recientemente
* Si la función de traducción en un clic usa OCR, se pregunta si se desea combinar regiones


## v1.2.1

* Soporte para arrastrar varios cuadros de texto a la vez
* Soporte para alinear varios cuadros de texto
* El estilo de fuente global permite configurar fondo, trazo y rotación
* Añadida la operación de pegar imágenes con el botón derecho

## v1.2.0

* Si el orden de lectura se establece de derecha a izquierda, la combinación de texto se realiza en orden inverso al de las coordenadas
* Añadidos plugins de generación de máscaras y de restauración de imágenes. El primero en añadirse es [Sickzil-Machine](https://github.com/xulihang/SickZil-Machine)
* Tesseract permite detectar las regiones de texto de toda la imagen
* Soporte de pretraducción y traducción en un clic para una sola imagen (se invocan con el botón derecho sobre la imagen)
* El método de detección de texto en escenas naturales de la traducción en un clic se ha sustituido por OCR
* Añadida la configuración del tamaño mínimo de fuente
* Añadida la opción de ajustar automáticamente el tamaño de las regiones de texto
* Se usa una casilla de verificación en lugar de un botón para ver la imagen traducida
* Buscar y reemplazar permite trabajar con el texto original
* Otras pequeñas mejoras

## v1.1.11

* Nuevos plugins de OCR: [easyOCR](https://www.jaided.ai/easyocr) y el reconocimiento de texto de Tencent
* La lista de idiomas de OCR solo muestra los idiomas admitidos por el motor seleccionado
* Al expandir regiones se guarda la región original como región de texto de destino
* Corregido el método de localización de TabPane

## v1.1.10

* El lector de pantalla añade traducción automática
* Se han eliminado algunas bibliotecas de terceros

## v1.1.9

* Actualizado OpenCV a 4.5.0
* La confianza de las regiones de texto se puede obtener sin conexión y se muestra el progreso de la operación
* Nuevo plugin de OCR: WinRT OCR, que permite usar la función de OCR integrada de Windows 10; es necesario instalar el paquete de idioma correspondiente en el sistema
* Se han incluido algunos plugins de traducción automática de BasicCAT
* Mejoras en la interfaz


## v1.1.8

* Se generan las máscaras de texto y las imágenes sin texto según el orden y se muestra el progreso del procesamiento por lotes
* Las operaciones de restauración de imágenes se ejecutan en un hilo distinto para evitar que el programa deje de responder
* Al generar máscaras se comprueba si la posición de las regiones de texto es correcta
* Corregido el desajuste entre la máscara de texto y la imagen al procesar imágenes demasiado grandes
* Añadidas operaciones relacionadas con regiones de texto al menú contextual de la imagen

## v1.1.7

* El editor de máscaras permite hacer zoom y generar máscaras en las regiones seleccionadas
* El removedor de texto puede eliminar el texto de las regiones seleccionadas
* El color predeterminado de la máscara se ha vuelto a cambiar a rojo
* Añadida la función de edición de imágenes sin texto
* Corrección de errores

## v1.1.6

* Las máscaras de texto se guardan en PNG para que el modo de eliminación de texto por cobertura admita fondos de color negro
* Soporte para crear copias de cuadros de texto


## v1.1.5

* Añadido el motor de composición de texto vertical CJK
* Añadida la función de autocorrección (puede usarse para resolver el problema de entrada de puntuación de ancho completo en macOS)
* Corrección de errores

## v1.1.4

* Nueva herramienta de la barra de herramientas: configuración de fuentes
* Al crear un proyecto y al importar imágenes se comparte la última ruta seleccionada
* Mejor selección de colores

## v1.1.3

* Nuevo tipo de plugin: plugins de OCR. Código abierto: [github](https://github.com/xulihang/ImageTrans_plugins). Permite usar el OCR sin conexión PaddleOCR.
* Nuevo motor de OCR: ABBYY (usa la [interfaz de línea de comandos](https://stackoverflow.com/questions/16385443/abbyy-finereader-exe-looking-for-cmd-commands-to-use-in-other-programms) de ABBYY FineReader, solo disponible en Windows)
* Nueva herramienta: lector de pantalla. Puede usarse como herramienta de captura de pantalla; las capturas pueden usar el motor de OCR de ImageTrans para el reconocimiento de texto y también se pueden añadir directamente a un proyecto de ImageTrans.
* Añadida una barra de herramientas que ofrece más operaciones, como dividir, combinar y seleccionar regiones de texto.
* La forma del cursor cambia correctamente según la operación disponible.

## v1.1.2

Nueva opción de OCR: convertir imágenes con texto dispuesto verticalmente a disposición horizontal; es adecuada para el japonés vertical y puede mejorar los resultados de OCR

## v1.1.1

* Añadida la función de traducción en un clic
* Añadida la función de detección de regiones de texto basada en la detección de texto en escenas naturales
* Se recuerda la ruta del último archivo seleccionado

## v1.1.0

* Añadido un removedor de texto externo (experimental)
* Añadido soporte de localización. El software ahora se puede mostrar en chino e inglés.

## v1.0.1

* Más ajustes
* Soporte para texto enriquecido
* Importación y exportación de XLIFF

## v1.0.0 (2020/03/13)

Publicación del software.

{% include comments.html %}
