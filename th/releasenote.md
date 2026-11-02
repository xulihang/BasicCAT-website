---
title: บันทึกการเผยแพร่
layout: page
lang: th
---

<style>
.post-content h2 {
  font-size: 1.5rem;
}
</style>

## v1.11.0 (2026/04/14)

* การแปลด้วยเครื่องรองรับการแปลหลายประโยคในคำขอเดียว (การแปลแบบกลุ่ม)
* การแปลล่วงหน้าสามารถยกเลิกได้โดยปิดกล่องความคืบหน้า
* อัปเดตปลั๊กอิน

## v1.10.7 (2024/04/23)

* แก้ไขข้อผิดพลาดในการค้นหาและแทนที่เมื่อค้นหาอักขระที่ต่อเนื่องกัน
* เพิ่มรายการเมนูตรวจสอบการสะกด

## บันทึกการเผยแพร่ก่อนหน้า

<section>
    <ul class="post-list">
        {% comment %}
          ยังไม่มีบันทึกการเผยแพร่รุ่นก่อน ๆ ที่แปลเป็นภาษาไทย รายการจึงว่างอยู่
          เพิ่มบทความใน _th เพื่อให้แสดงที่นี่
        {% endcomment %}
        {% assign posts=site.th | where: "layout", "post" | where: "categories", "releasenote" %}
        {% for post in posts reversed %}
        <li>
            <a href="{{ post.url | prepend: site.baseurl | prepend: site.url }}">{{ post.title }}</a> <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d/%m/%Y" }}</time>
        </li>
        {% endfor %}
    </ul>
</section>