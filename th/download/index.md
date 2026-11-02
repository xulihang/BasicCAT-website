---
title: ดาวน์โหลด
layout: page
permalink: /th/download/
lang: th
---

โปรดเลือกตัวติดตั้งที่ตรงกับระบบปฏิบัติการของคุณ

### BasicCAT v1.11.0

* Windows: [32 บิต](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-windows-x86.exe) / [64 บิต](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-windows-x64.exe)
* macOS:  [เวอร์ชันสำหรับ CPU Intel](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-mac-x64.dmg) / [เวอร์ชันสำหรับ CPU Apple](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-mac-arm.dmg)
* Linux และระบบอื่น ๆ:  [CrossPlatfroms.zip](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-crossplatforms.zip)

ดาวน์โหลดจาก Baidu NetDisk ได้เช่นกัน: [ลิงก์](https://pan.baidu.com/s/1HmD4pJ9hIYyK9bnqINtoFQ)

เวอร์ชันก่อนหน้า: [Releases](https://github.com/xulihang/BasicCAT/releases/)

ข้อควรระวังสำหรับผู้ใช้ macOS: ตั้งแต่ macOS Catalina เป็นต้นมา ไฟล์จะมีแอตทริบิวต์ใหม่ชื่อ `com.apple.quarantine` เมื่อเปิด BasicCAT จะแสดงว่าแอปเสียหาย ต้องลบแอตทริบิวต์นี้ด้วยคำสั่งด้านล่าง โปรแกรมจึงจะทำงานได้ตามปกติ

```
sudo xattr -rd com.apple.quarantine /Applications/BasicCAT.app
```

### โปรแกรมเซิร์ฟเวอร์สำหรับแบ่งปันหน่วยความจำการแปลและคำศัพท์

*  [CloudKVS_Server.jar](https://github.com/xulihang/BasicCAT/releases/download/v1.2-beta2/CloudKVS_Server.jar)

### ปลั๊กอิน

ปัจจุบัน BasicCAT มีปลั๊กอินสองประเภท: ปลั๊กอินตัวกรอง และปลั๊กอินแปลด้วยเครื่อง

คลิก[ที่นี่](https://github.com/xulihang/BasicCAT/releases/download/plugins/all_plugins.zip)เพื่อดาวน์โหลดปลั๊กอินทั้งหมด ตัวติดตั้ง BasicCAT มีปลั๊กอินล่าสุดอยู่แล้ว ปกติจึงไม่จำเป็นต้องดาวน์โหลดแยก

อย่าลืมวางไฟล์ jar และ xml ที่แตกออกมาไว้ในโฟลเดอร์ plugins

ปลั๊กอินที่ให้บริการในปัจจุบัน:

การแปลด้วยเครื่อง:

* ChatGPT
* Gemini
* DeepL
* Tencent
* Niutrans
* Google
* IBM Watson
* Caiyun Xiaoyi
* Naver Papago
* Cloudtranslation (เพียงตั้งค่าพารามิเตอร์ url ดู[เอกสารทางการ](https://cloudtranslation.com/static/api_zh-cn.html))
* Amazon (ต้องดาวน์โหลดแยก: [ลิงก์](https://github.com/xulihang/BasicCAT/releases/download/plugins/amazon.zip))
* OpusCAT (เครื่องแปลด้วยเครื่องแบบออฟไลน์ [คำอธิบาย](/zh/offline-machine-translation))
* การแปลด้วยเครื่องผ่านเว็บ (ดึงคำแปลจากการแปลด้วยเครื่องบนเว็บ ไม่ต้องใช้ API [รายละเอียดเพิ่มเติม](https://www.basiccat.org/zh/new-plugin-machine-translation-via-web/))

ตัวกรอง:

* Gettext PO

### เครื่องมืออื่น ๆ

เครื่องมือขนาดเล็กที่พัฒนาขึ้นสำหรับงานแปล: [เครื่องมือ](/th/tools/)
