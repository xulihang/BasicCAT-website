---
title: เครื่องมือ
layout: page
lang: th
---

เครื่องมือบางส่วนที่ผมพัฒนาขึ้นระหว่างทำงานแปล:


1. XLSX to TMX

	อ่านเวิร์กชีตแรกของไฟล์ XLSX โดยเวิร์กชีตต้องมีแถวหัวตารางซึ่งระบุรหัสภาษา เช่น zh-CN, en-US

	ตัวอย่าง:

	```

	zh-CN	en-US
	Hello
	```

	[ดาวน์โหลด](https://github.com/xulihang/Translation-Tools/releases/download/v1.0/XLSXToTMX.jar)

2. Aligner

	จัดแนวจากไฟล์ต้นฉบับและไฟล์คำแปล หรือจากไฟล์สองภาษาที่สลับต้นฉบับและคำแปลทีละประโยค

	รายละเอียดเพิ่มเติม: [เครื่องมือใหม่! ซอฟต์แวร์จัดแนวข้อความสองภาษา Aligner](/zh/new-tool-bitext-aligner/)

3. PSD Localization

	ดึงข้อความจากไฟล์ PSD และใส่คำแปลกลับเข้าไป ต้องติดตั้ง Photoshop ฉบับเต็มบนคอมพิวเตอร์ และปัจจุบันรองรับเฉพาะ Windows

	[ดาวน์โหลด](https://github.com/xulihang/Translation-Tools/releases/download/v1.1/PSDLocalization.zip)

4. Image Transcriber

	เครื่องมือช่วย OCR รูปภาพ สามารถสร้างไฟล์ PSD ที่มีเลเยอร์ข้อความได้ (ต้องติดตั้ง Photoshop บนคอมพิวเตอร์)

	เครื่องมือใช้ tesseract และ API ของ Baidu ในการ OCR ต้องวาง tesseract ไว้ในโฟลเดอร์ tesseract-ocr ที่ไดเรกทอรีราก และบันทึก id กับ secret ของ API ของ Baidu ไว้ในไฟล์ `baidu` ที่ไดเรกทอรีราก โดยคั่นแต่ละค่าด้วยการขึ้นบรรทัดใหม่

	หยุดพัฒนาแล้ว โปรดใช้ [ImageTrans](https://www.basiccat.org/th/imagetrans/) แทน

5. FileDiff

	เครื่องมือนี้แสดงความแตกต่างระหว่างเวอร์ชันเก่าและใหม่ของไฟล์ รองรับหลายรูปแบบไฟล์ หากคุณแก้ไขเอกสารที่แปลแล้วและต้องการอัปเดตข้อความที่เกี่ยวข้องใน CAT เครื่องมือนี้จะช่วยแสดงความแตกต่างให้ดู

	[ซอร์สโค้ด](https://github.com/xulihang/FileDiff)

หมายเหตุ: ในการเรียกใช้เครื่องมือเหล่านี้ ให้ติดตั้ง Java Runtime Environment 8 ก่อน