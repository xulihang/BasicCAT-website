---
title: Скачать
layout: page
permalink: /ru/download/
lang: ru
---

Выберите установочный файл, соответствующий вашей операционной системе.

### BasicCAT v1.11.0

* Windows: [32 бита](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-windows-x86.exe) / [64 бита](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-windows-x64.exe)
* macOS:  [Для процессоров Intel](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-mac-x64.dmg) / [Для процессоров Apple](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-mac-arm.dmg)
* Linux и другие системы:  [CrossPlatfroms.zip](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-crossplatforms.zip)

Также можно скачать с Baidu NetDisk: [ссылка](https://pan.baidu.com/s/1HmD4pJ9hIYyK9bnqINtoFQ)

Предыдущие версии: [Releases](https://github.com/xulihang/BasicCAT/releases/)

Примечание для пользователей macOS: начиная с macOS Catalina у файлов есть новый атрибут `com.apple.quarantine`. При открытии BasicCAT появится сообщение о том, что приложение повреждено. Чтобы программа работала нормально, уберите этот атрибут командой ниже.

```
sudo xattr -rd com.apple.quarantine /Applications/BasicCAT.app
```

### Серверная программа для общего доступа к памяти переводов и терминологии

*  [CloudKVS_Server.jar](https://github.com/xulihang/BasicCAT/releases/download/v1.2-beta2/CloudKVS_Server.jar)

### Плагины

Сейчас у BasicCAT есть плагины двух типов: плагины-фильтры и плагины машинного перевода.

Нажмите [здесь](https://github.com/xulihang/BasicCAT/releases/download/plugins/all_plugins.zip), чтобы скачать все плагины. Установочный файл BasicCAT уже содержит последние версии плагинов, поэтому обычно их не нужно скачивать отдельно.

Не забудьте положить распакованные файлы jar и xml в папку plugins.

Доступные сейчас плагины:

Машинный перевод:

* ChatGPT
* Gemini
* DeepL
* Tencent
* Niutrans
* Google
* IBM Watson
* Caiyun Xiaoyi
* Naver Papago
* Cloudtranslation (достаточно указать параметр url, см. [официальную документацию](https://cloudtranslation.com/static/api_zh-cn.html))
* Amazon (скачивается отдельно: [ссылка](https://github.com/xulihang/BasicCAT/releases/download/plugins/amazon.zip))
* OpusCAT (офлайн-движок машинного перевода, [описание](/zh/offline-machine-translation))
* Машинный перевод через веб-страницы (извлекает перевод со страниц машинного перевода, API не нужен, [подробнее](https://www.basiccat.org/zh/new-plugin-machine-translation-via-web/))

Фильтры:

* Gettext PO

### Другие инструменты

Небольшие инструменты, созданные для решения задач перевода: [Инструменты](/ru/tools/)
