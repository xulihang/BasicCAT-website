---
date: 2026-03-08 19:32:50+08:00
layout: post
title: How to Convert Traditional Chinese PDF from Vertical to Horizontal and Enhance Text Clarity
categories: blog
tags: imagetrans
---

I recently came across several older Taiwanese academic papers and found that they were all in PDF format with vertical text, Traditional Chinese, and black-and-white scanned copies. The text was illegible, which was so difficult to read that I worried it might worsen my myopia. So, I came up with some ways to optimize the reading experience. For users in Mainland China, converting the vertical text to horizontal format makes it much easier to read. However, sometimes preserving the original layout is better. So I also tried using OCR to recognize the text, remove the original content, and reformat it with clear, readable text. Below is a demonstration of the results and how to do it.

## Demonstration of Results

Original file ([PDF](https://kmweb.moa.gov.tw/redirect_files.php?id=98635)):

![Original file](/album/vertical-text-PDF/original.png)

Converted to horizontal markdown format:

```markdown
卷五十第

期一十二第

## 那一個甘蔗品種好?

## 選擇蔗種的基本原則

選擇甘蔗品種的基本原則,是「適地適種」,而「適地」的意義,並不是單指適合的土壤的意思,還包括蔗園所在地點的一切環境條件,諸如氣候狀況、灌溉條件、肥料多少、勞力充份否,間作不間作,留宿根不留等等,都要考慮到.只有適合種蔗環境的品種,才能有好的收成,所以在選擇品種之前,首先要明白所經營的蔗園的環境.下面幾點是主要的考慮對象：

（1）土質和地力：土質的粘重或輕鬆,主要關係土壤水分的保持與喪失.粘重的土壤,保水力较强,纵然在灌溉水不够充分的地方,也能栽培比較不耐旱的品種,但是粘重的蔗園容易排水不良,根系太深,不耐浸的品种就发育不良.土质轻松的土壤適恰相反,不適合栽培不耐旱品種,而適應根系深的品種.

甘蔗品種的耐肥性是個個不同的,有的適合在好地方的蔗園,有的在地方好的蔗園反而減產.所以地方的肥沃瘦瘠也需要密切注意.

（2）灌溉的條件：要說甘蔗是水做的,一點也沒有錯,一支甘蔗有七〇％以上是水.因之,水成了種蔗的必具條件,只是甘蔗品種裏有些特別喜愛水一些,缺了水,產量隨即降低,另一些對水淡漠一些,早一點影響產量不大.選擇品種的時候,不能不顧到這點.

（3）宿根：每一個品種的宿根能力多有不同,有些可以宿根,有些宿根产量很低,留宿根化不來,要是選錯了就要自己吃虧.

（4）植期不同：有些品种只能作为秋植,而且必須早秋植；延遲種植,產量降低.另一些品種又只適合春植,作為秋植時並不理想.而二期糊仔有二期糊仔的品種,一期糊仔有一期糊仔的品種,

都混雜不得的.

（5）勞力的多少：有的蔗友家中勞力很多,或者財力雄厚,足以招雇够量的勞力來從事精耕栽培,那麼就應該選擇適合精耕栽培的品種.否則,應該選擇在粗放耕作時仍有相當產量的品種.

（6）病蟲害問題：現在推廣的品種,大致說對於主要的病蟲害都是抵抗的,但在容易發生病蟲害的環境如玉米栽培地區,有些品種比較容易發生露菌病,應該避免栽培.

## 目前推廣的優良蔗種

談完了選擇品種時考慮的主要種蔗環境條件,現在來選擇品種,首先要介紹一些最近由糖業試驗所育成,在推廣中的甘蔗新品種.

F一四六已經推廣三個年期了,大家對它都已十分認識,它是一個中大莖,多分櫱的品種.初期生育緩慢,而在次年高溫多水的季節迅F一四六速生長.原料莖很多,只是短一點,適合在地力中等以上,有水灌溉,不很粘重的地方作为早秋植,F一四六可以間作,宿根也不錯,最高的產量可以達到三十萬公斤.

F一四八作為春植或晚秋植時,它增產能力比在早秋植時高,同時也不適合二期糊仔.蔗莖又細小一點,所以蔗友們不很歡迎.事實F一四八上,用F一四八作晚植蔗園的品種,它的產量比F一四六,和F一五二安定.而且在所有的新品種中,F一四八是糖份最高的一個,也是最不怕露菌病的品種,又因為它很早熟,種了它,多半是在製糖季初收穫,蔗友們可以提前利用種蔗後的土地.

F一四八也不適合在粘重或過份輕鬆,以及乾旱的地方栽培,間作和宿根的條件不及F一四六.

## F一五一

F一五一適合在粘土蔗園秋植及二期糊仔

,在溫度較低,土壤較乾的時候,萌

芽比其他新品種好.它是中莖種,原料莖比F一四六細而長,也比F一四六容易倒伏,但不易开花；和F一四六同样地晚熟,步留也差不多.露菌病的感染程度較重.F一五一的新植產量在輕鬆的壤土裏不及F一四六,在粘重的土壤則勝過F一四六.宿根的產量和F一四六相仿.

F一五一不能作為晚植蔗園的品種.

F一五二是地力肥沃,灌溉水充沛蕉園的增產王牌,它的原料莖高而粗,只要保持適當的原料莖數,很容易的得上二十萬公斤以上的F一五一甲當產量.不過在灌溉水缺乏,地力不夠而又沒有辦法施用重肥的蔗園,F一五二沒有增產的希望.

七、八月種植的F一五二容易母莖徒長,因此不如九月種植的蔗園產量穩定.F一五二是個好


## ·紹介者作期本·

▼湯冠雄：曾任臺灣糖業試驗所種藝系技師,現任該所虎尾蔗作改良場場長,從事甘蔗栽培研究已十七年.

![图片]()

夏輔禹：安東省岡城縣人,臺灣省立農學院畢業,現任糖業試驗所虎尾蔗作改良場研究組組長,一直擔任蔗田間作試驗方面工作.

![图片]()

```

A clear version preserving the original layout (Image + PDF):

![Clear version](/album/vertical-text-PDF/reconstructed.png)

Text-based PDF with vector text, remains sharp even when zoomed in:

[File Link](/album/vertical-text-PDF/reconstructed-pdf.pdf)

## How-to Guide

This requires using the OCR software [ImageTrans](/imagetrans/).

1.  Use the built-in bubble detection feature to detect vertical text lines.
2.  Use a large language model for OCR. Since the text here is quite blurry, only large language models can achieve good results. I chose the `qwen3-vl-235b-a22b-instruct` model for this task.
3.  Use PaddleOCR's DocLayout panel detection model to identify text paragraphs and sort the text lines from right to left according to the reading order.
4.  Specify text styles for both vertical and horizontal text. Then, determine which text is horizontal and which is vertical based on the aspect ratio.
5.  Export as PDF.
6.  Next, export as markdown. Here, we can merge text lines by paragraph to remove unnecessary line breaks.

Software main interface:

![Software main interface](/album/vertical-text-PDF/imagetrans.jpg)

Displaying panels and order:

![Displaying panels and order](/album/vertical-text-PDF/imagetrans-order-mode.jpg)
