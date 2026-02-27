---  
date: 2026-02-24 10:42:50+08:00  
layout: post  
title: Compiling SANE for macOS  
categories: blog  
tags: imagetrans  
---  

I recently purchased a Fujitsu Fi-6130 scanner for just over 500 RMB, which is a relatively affordable sheet-fed scanner. I wanted to use it on macOS, but I found that for older, low-end scanners like this, the official drivers are no longer provided. The only options are to use SANE or VueScan.  

SANE can be installed via Homebrew, but since I wanted to compile a version that is easy to distribute, I decided to recompile it myself. Here are the steps I took.  

1. Install Homebrew.  

2. Install the necessary dependencies.  

   ```bash  
   brew install autoconf automake libtool gettext git pkg-config libusb libjpeg  
   ```  

3. Download the source code package from the SANE official website.  

4. Run the following commands to compile:  

   ```bash  
   ./autogen.sh  
   ./configure --prefix=/usr/local \  
               CPPFLAGS="-I/usr/local/include -I/opt/homebrew/include" \  
               LDFLAGS="-L/usr/local/lib -L/opt/homebrew/lib"  
   make  
   make install  
   ```  

5. If you need to distribute it to an environment without Homebrew, you can use `otool` and `install_name_tool` to modify the paths.  

The macOS version of [ImageTrans](/imagetrans/) has already integrated SANE, allowing you to directly use scanners like the old fi-6130 for scanning.


