---
date: 2026-01-31 19:32:50+08:00
layout: post
title: Overview of Document Scanning Interfaces
categories: blog
tags: imagetrans
---

Modern document scanners emerged around the 1980s. To connect scanners with computers, many document scanning APIs were developed: TWAIN, ICA, SANE, WIA, eSCL, and so on. This article provides an overview of these protocols.

## TWAIN

Scanner manufacturers provide specialized scanning software for mainstream operating systems, typically Windows and macOS. TWAIN is a universal interface for calling the manufacturer-provided software to perform scanning. It is strongly tied to the user interface (UI); although the default scanning interface can be hidden, different UIs may still appear during operations.

Because it directly calls the manufacturer-provided software, it offers extensive capabilities, such as acquiring scanned images line by line, detecting barcodes within images, image enhancement, and more.

Using TWAIN to call Epson Scan for scanning:

![epson twain](/album/document-scanning-api/epson-scan.jpg)

TWAIN is primarily used on Windows.

## WIA

WIA is the officially supported interface for image acquisition devices on Windows. After installing the scanner driver, scanning can be performed through the Windows Fax and Scan application.

![windows fax](/album/document-scanning-api/windows-fax.jpg)

It can also be called programmatically via COM. You can show the UI or acquire the image silently. The UI, when shown, is a unified, specialized version of WIA.

![wia](/album/document-scanning-api/wia.jpg)

Using WIA cannot use the manufacturer's specialized scanning software.

## ICA

ICA is the official interface provided by Apple. After installing the dedicated ICA driver, a customized scanning interface becomes available in the Image Capture application. It also supports calling via the interface without displaying the UI.

![ica](/album/document-scanning-api/imagecapture.jpg)

## SANE

SANE is the primary scanning interface on Unix-like systems (mainly Linux). It can also be used on macOS.

SANE scanner drivers are mostly written through reverse engineering, though some manufacturers, like Epson, do provide dedicated SANE drivers.

SANE was designed from the start for network scanning, so it is not as tightly bound to the UI as TWAIN.

## eSCL

eSCL is an HTTP-based network document scanning protocol promoted by Apple. As long as the scanner is connected to the network, scanning can be performed directly through this interface. It is now maintained by the Mopria organization, initiated by manufacturers such as Canon and HP.

## Scanning Software

### Desktop Software

* **NAPS2**: Supports TWAIN, WIA, SANE, eSCL, and ICA. It is an open-source, all-in-one, cross-platform scanning software.
* **[ImageTrans](imagetrans/)**: Integrates document scanning functionality based on WIA, SANE, ICA, and eSCL. It can directly scan documents and perform tasks such as OCR, translation, and generating searchable PDFs.
* **VueScan**: Reverse engineers the drivers of most scanners, allowing direct scanner usage without additional driver installations.
* **SilverFast**: Highly professional in scanning photos and film negatives; typically bundled with scanner purchases.

### SDKs

* **Dynamsoft**: Dynamic Web TWAIN
* **Aprise**: JSane, JTWAIN, Scanner.js
* **Leadtools**
* **Vintasoft**
* **ScanOnWeb**

Among these SDKs, Dynamic Web TWAIN supports the most protocols and is the most actively maintained.



