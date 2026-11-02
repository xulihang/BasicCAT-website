---
title: ช่วยปรับปรุง ImageTrans ให้ดียิ่งขึ้น
layout: page
lang: th
---

คุณสามารถช่วยปรับปรุง ImageTrans ให้ดียิ่งขึ้นได้ด้วยวิธีต่อไปนี้:

1. แปลเอกสาร

	เอกสารของ ImageTrans สร้างด้วย Sphinx และโฮสต์บน readthedocs

	ที่เก็บโค้ดเอกสาร: <https://github.com/xulihang/ImageTrans-docs>

	ต้องใช้เครื่องมือโลคัลไลเซชันของ Sphinx เพื่อแยกไฟล์ po และแปลไฟล์เหล่านั้น

2. แปลอินเทอร์เฟซซอฟต์แวร์

	ImageTrans ใช้ [B4XLocalizator](https://www.b4x.com/android/forum/threads/b4x-localizator-localize-your-b4x-applications.68751/) ในการทำโลคัลไลเซชัน ต้องแปลไฟล์ strings.xlsx เมื่อแปลเสร็จแล้วให้แปลงเป็น strings.db เพื่อให้ซอฟต์แวร์เรียกใช้งาน
	
	ดาวน์โหลด strings.xlsx ได้ที่นี่: <https://github.com/xulihang/ImageTrans_l10n_en/releases/tag/strings>

3. พัฒนาปลั๊กอิน

	ImageTrans ใช้ ABPlugin ในการพัฒนาปลั๊กอิน โค้ดของปลั๊กอินที่มีอยู่: <https://github.com/xulihang/ImageTrans_plugins>
	
4. เสนอข้อเสนอแนะ

	ไปที่[หน้า issue](https://github.com/xulihang/ImageTrans-docs/issues)ของเอกสารเพื่อเสนอข้อเสนอแนะ


{% include comments.html %}
