---  
date: 2026-02-27 10:42:50+08:00  
layout: post  
title: 文档扫描仪协议逆向工程
categories: blog  
tags: imagetrans  
---  

扫描仪一般支持通过SCSI、USB和网络等接口去访问。如何控制扫描仪执行扫描任务，返回扫描数据，需要遵循一套规范。现代的扫描仪一般都支持eSCL这一标准，通过网络去连接。但不是所有扫描仪都支持这种标准，通常都是厂家自己定义了一套协议，并提供驱动供应用软件进行调用。

但也不是所有操作系统和CPU架构都有驱动可以用，于是有人通过逆向工程，破解了这些协议，使得不用官方驱动，也能使用这些扫描仪。这类软件有开源的SANE和商业的ExactScan、VueScan等等。另外，自己编写驱动，可以对扫描仪做到精准的控制，比如色调、是否启用卡纸检测传感器、实时预览扫描结果等等。并且，随着浏览器支持控制USB设备，我们甚至能直接在浏览器操作扫描仪。

下面是对扫描仪进行逆向的一些方式。

1. 直接借鉴SANE的源代码。SANE逆向了大多数扫描仪，我们可以直接阅读它的代码了解各种扫描仪的通讯方法。
2. 在有驱动的环境对USB传输进行抓包。比如以下是Linux上的操作方式：

   开启抓包：
   
   ```bash
   sudo modprobe usbmon
   sudo tcpdump -i usbmon2 -w scan.pcap
   ```
   
   
   使用SANE扫描一份文档：
   
   ```bash
   scanimage -o t.jpg -l 0 -t 0 -x 5 -y 5
   ```
   
   然后用Ctrl+C终止上面的命令保存结果。之后用WireShark查看结果。
   
   这种方式需要对USB协议有比较强的分析能力，难度比较大。
   
   

我用Qoder让AI基于SANE的Pixma驱动写了一个Python+libusb控制佳能Lide 300的Python程序，测试可以实现扫描：<https://github.com/xulihang/Canon-Lide-300-Python-USB-Driver>

对于普通用户，直接使用现成的扫描软件就行了，比如[ImageTrans](/zh/imagetrans/)，支持TWAIN、WIA、ICA、SANE和eSCL等各种扫描API，可以支持在各种操作系统上对大多数扫描仪的调用。扫描的文档能进一步处理，进行翻译、OCR和生成可搜索的PDF等操作。




