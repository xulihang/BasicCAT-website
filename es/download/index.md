---
title: Descargar
layout: page
permalink: /es/download/
lang: es
---

Elige el instalador correspondiente a tu sistema operativo.

### BasicCAT v1.11.0

* Windows: [32 bits](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-windows-x86.exe) / [64 bits](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-windows-x64.exe)
* macOS:  [Versión para CPU Intel](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-mac-x64.dmg) / [Versión para CPU Apple](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-mac-arm.dmg)
* Linux y otros sistemas:  [CrossPlatfroms.zip](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-crossplatforms.zip)

También puedes descargarlo desde Baidu NetDisk: [Enlace](https://pan.baidu.com/s/1HmD4pJ9hIYyK9bnqINtoFQ)

Versiones anteriores: [Releases](https://github.com/xulihang/BasicCAT/releases/)

Nota para usuarios de macOS: a partir de macOS Catalina, los archivos tienen un nuevo atributo llamado `com.apple.quarantine`. Al abrir BasicCAT aparecerá un mensaje de que la aplicación está dañada. Hay que eliminar ese atributo con el siguiente comando para que el programa funcione con normalidad.

```
sudo xattr -rd com.apple.quarantine /Applications/BasicCAT.app
```

### Servidor para compartir memorias de traducción y glosarios

*  [CloudKVS_Server.jar](https://github.com/xulihang/BasicCAT/releases/download/v1.2-beta2/CloudKVS_Server.jar)

### Plugins

Actualmente BasicCAT tiene dos tipos de plugins: plugins de filtro y plugins de traducción automática.

Puedes hacer clic [aquí](https://github.com/xulihang/BasicCAT/releases/download/plugins/all_plugins.zip) para descargar todos los plugins. El instalador de BasicCAT ya incluye los plugins más recientes, así que normalmente no hace falta descargarlos por separado.

Recuerda copiar los archivos jar y xml descomprimidos en la carpeta plugins.

Plugins disponibles actualmente:

Traducción automática:

* ChatGPT
* Gemini
* DeepL
* Tencent
* Niutrans
* Google
* IBM Watson
* Caiyun Xiaoyi
* Naver Papago
* Cloudtranslation (solo hay que configurar el parámetro url; consulta la [documentación oficial](https://cloudtranslation.com/static/api_zh-cn.html))
* Amazon (hay que descargarlo por separado: [enlace](https://github.com/xulihang/BasicCAT/releases/download/plugins/amazon.zip))
* OpusCAT (motor de traducción automática sin conexión, [instrucciones](/zh/offline-machine-translation))
* Traducción automática web (extrae la traducción de páginas de traducción automática, sin necesidad de API, [más información](https://www.basiccat.org/zh/new-plugin-machine-translation-via-web/))

Filtros:

* Gettext PO

### Otras herramientas

Pequeñas herramientas creadas para resolver tareas de traducción: [Herramientas](/es/tools/)
