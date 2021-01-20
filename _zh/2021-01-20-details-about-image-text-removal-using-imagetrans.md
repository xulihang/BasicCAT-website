---
date: 2021-01-20 14:53:50+08:00
layout: post
title: ImageTrans图片文字抹除详解
categories: blog
tags: imagetrans
---

ImageTrans提供两种文字抹除方式，一种是用文字所在区域的背景颜色覆盖文字区域，一种是用图像修复方法。ImageTrans会以文字所在的矩形区域为单位进行文字去除。

对于下图这样背景为纯色的情况，使用背景颜色覆盖法即可。

![](/album/imagetrans-text-removal/different_colors.jpg)

但是单纯以矩形框进行覆盖会覆盖非文字元素。

并且很多图像的背景也并不是纯色的，例如下图。

![](/album/imagetrans-text-removal/scrooge.jpg)

这时需要使用图像修复法。

图像修复法需要先生成去除对象的掩膜。下图是ImageTrans生成的文字掩膜。

![](/album/imagetrans-text-removal/scrooge.jpg-mask.png)

之后便可以生成去文字图像。

![](/album/imagetrans-text-removal/scrooge.jpg-text-removed.jpg)

图像修复法可以用于修复老照片，去除照片中的物体，比如去除下图中的UFO。在ImageTrans中主要用来去除文字。

![](/album/imagetrans-text-removal/ufo.jpg)

对于背景为纯色的图像，生成的掩膜也可以直接用来覆盖文字，效果会比默认的图像修复法更好。

默认的图像修复法：

![](/album/imagetrans-text-removal/18_097_one_frame.jpg-text-removed_inpaint.jpg)

掩膜覆盖法：

![](/album/imagetrans-text-removal/18_097_one_frame.jpg-text-removed_cover_text.jpg)

ImageTrans默认采用二值化和轮廓检测生成文字掩膜法，以及Telea图像修复法。此外也允许用户编写插件，接入第三方的方法，以适用于不同情况的图片。

目前有提供一种PatchMatch图像修复法以及Sickzil-Machine的文字掩膜生成法和图像修复法。

例如对于下面这张图，使用二值化方法，非文字内容也会被包含进去，而使用Sickzil-Machine的方法可以准确生成。

原图：

![](/album/imagetrans-text-removal/gradual_color_background.jpg)

二值化方法：

![](/album/imagetrans-text-removal/gradual_color_background_mask_binary.png)

SickZil-Machine方法：

![](/album/imagetrans-text-removal/gradual_color_background_mask_sickzil_machine.png)

下面是使用默认的图像修复法，基于Sickzil-Machine生成的掩膜处理该张图片的结果。

![](/album/imagetrans-text-removal/gradual_color_background-text-removed_telea.jpg)

使用Sickzil-Machine还原背景，也不是很理想。

![](/album/imagetrans-text-removal/gradual_color_background-text-removed_sickzil.jpg)

改换为PatchMatch，可以发现该方法对于背景还原较好，适用于背景是渐变色或者由网点填充的图像。但该方法处理会耗费较长时间。

![](/album/imagetrans-text-removal/gradual_color_background-text-removed_patchmatch.jpg)


### 一些特别情况

#### 带阴影或者描边的文字

![](/album/imagetrans-text-removal/big_font_with_background.jpg)

默认生成的结果：

![](/album/imagetrans-text-removal/big_font_with_background.jpg-mask_dilation_2.png)

![](/album/imagetrans-text-removal/big_font_with_background.jpg-text-removed.jpg)

这时需要将掩膜膨胀大小设大一点，或者手动编辑掩膜，让掩膜完全覆盖文字。

掩膜膨胀大小设置为10，并改用PatchMatch方法。

![](/album/imagetrans-text-removal/big_font_with_background.jpg-mask_dilation_10.png)

![](/album/imagetrans-text-removal/big_font_with_background.jpg-text-removed_inpaint.jpg)

#### 文字和边缘相连的手写文本

![](/album/imagetrans-text-removal/big_font_with_background.jpg)

默认的二值化文字掩膜生成法会去除外层轮廓，所以文字与边缘相连的话会无法生成。换用Sickzil-Machine也无法正确生成，应该是没有类似的训练数据支撑。

这时需要在掩膜编辑器中取消勾选去除外层轮廓后再重新生成掩膜，并手动去除非文字的部分。

可以勾选半透明选框，将掩膜半透明，便于进行手工修改。

完成后再换用合适的图像修复方法去除文字。

修改后的掩膜和Sickzil-Machine修复的结果：

![](/album/imagetrans-text-removal/handwritten_text_mask_and_text_removed.jpg)


#### 背景复杂的图像

![](/album/imagetrans-text-removal/complex_background.jpg)

图像上的文字，通常还带有描边。下面是默认的掩膜和去除结果。

![](/album/imagetrans-text-removal/complex_background_mask_text_removed.jpg)

这时可以手动修改掩膜并选择和合适的修复方法。

可以先试着用带描边的译文进行遮盖，重点处理没有被较好地遮盖的地方。

下面是掩膜和去除结果，这里采用Sickzil-Machine生成掩膜并还原背景。处理日漫时，Sickzil-Machine能较好地生成掩膜并还原线条：

![](/album/imagetrans-text-removal/complex_background_mask_text_removed_edited.jpg)

翻译好的图片：

![](/album/imagetrans-text-removal/complex_background_translated.png)






