---
date: 2021-01-20 14:53:50+08:00
layout: post
title: Details about Image Text Removal using ImageTrans
categories: blog
tags: imagetrans
---

ImageTrans provides two ways to erase text: one is to cover the text area with background color, and the other is to use image inpainting methods. ImageTrans removes text based on the rectangular area where the text is located.

For the case where the background is solid color as shown in the image below, we can cover the text with background color.

![](/album/imagetrans-text-removal/different_colors.jpg)

However, simply covering with a rectangular box will overwrite non-text elements.

In addition, the background of many images is not solid color, as shown in the following image.

![](/album/imagetrans-text-removal/scrooge.jpg)

In such cases, we need to use image inpainting.

Image inpainting needs to generate a mask of the object to remove. The image below is a text mask generated by ImageTrans.

![](/album/imagetrans-text-removal/scrooge.jpg-mask.png)

With the text mask, we can generate the text-removed image.

![](/album/imagetrans-text-removal/scrooge.jpg-text-removed.jpg)

Image inpainting can be used to repair old photos and remove objects in photos, such as the UFO in the image below. It is used in ImageTrans to remove text.

![](/album/imagetrans-text-removal/ufo.jpg)

For images with a solid background color, the generated mask can also be used to cover text directly, and the result will be better than the default image inpainting method's.

Default image inpainting result:

![](/album/imagetrans-text-removal/18_097_one_frame.jpg-text-removed_inpaint.jpg)

Covering with mask:

![](/album/imagetrans-text-removal/18_097_one_frame.jpg-text-removed_cover_text.jpg)

By default, ImageTrans uses binarization and contours detection to generate text mask, and Telea image inpainting algorithm. In addition, it also allows users to write plug-ins to access third-party methods to adapt to different kinds of images.

Currently, a PatchMatch image inpainting method and Sickzil-Machine's text mask generation method and image inpainting method are provided.

Take the mask-generation of the following image as an example: Non-text content will be included by using the binarization method, while Sickzil-Machine can give an accurate result.

Original image:

![](/album/imagetrans-text-removal/gradual_color_background.jpg)

Binarization method:

![](/album/imagetrans-text-removal/gradual_color_background_mask_binary.png)

SickZil-Machine:

![](/album/imagetrans-text-removal/gradual_color_background_mask_sickzil_machine.png)

The following is the result of the default image inpainting method based on the mask generated by the Sickzil-Machine.

![](/album/imagetrans-text-removal/gradual_color_background-text-removed_telea.jpg)

The result of Sickzil-Machine's inpainting is not ideal, either.

![](/album/imagetrans-text-removal/gradual_color_background-text-removed_sickzil.jpg)

Switch to PatchMatch. We can see it has a better restoration of the background, which is suitable for images whose background is gradual color or screen tones. But this method will take a long time to process.

![](/album/imagetrans-text-removal/gradual_color_background-text-removed_patchmatch.jpg)


## Some Special Cases

### Text with Shadow or Stroke

![](/album/imagetrans-text-removal/big_font_with_background.jpg)

Default result:

![](/album/imagetrans-text-removal/big_font_with_background.jpg-mask_dilation_2.png)

![](/album/imagetrans-text-removal/big_font_with_background.jpg-text-removed.jpg)

In this case, we need to set the mask dilation size larger, or manually edit the mask so that the mask completely covers the text.

Set the dilation kernel size to 10 and use PatchMatch.

![](/album/imagetrans-text-removal/big_font_with_background.jpg-mask_dilation_10.png)

![](/album/imagetrans-text-removal/big_font_with_background.jpg-text-removed_inpaint.jpg)

### Handwritten Text which is Connected with Edges

![](/album/imagetrans-text-removal/handwritten_text.jpg)

The default binarization text mask generation method will remove outer contours, so if the text is connected to the edge, it will not be generated. Sickzil-Machine cannot give an accurate result as well since its lack of such training data.

In this case, you need to uncheck the Remove Outer Contours checkbox in Mask Editor, regenerate the mask, and manually remove non-text parts.

You can check the Translucent checkbox to make the mask semi-transparent, which is convenient for manual modification.

When the mask is ready, choose a suitable image inpainting method to remove text.

The edited mask and inpainting result using Sickzil-Machine:

![](/album/imagetrans-text-removal/handwritten_text_mask_and_text_removed.jpg)


### Image with Complex Background

![](/album/imagetrans-text-removal/complex_background.jpg)

Text is above graphics and is often stroked. The following is the default mask and removal results.

![](/album/imagetrans-text-removal/complex_background_mask_text_removed.jpg)

For this image, we have to manually edit the mask and choose a suitable inpainting method.

We can try to cover the text with stroked target text and focus on parts not being covered.

The following is the mask and removal results generated by Sickzil-Machine with a slight editing. Sickzil-Machine has a good result for Japanese manga. It can accurately generate text mask and restore lines.

![](/album/imagetrans-text-removal/complex_background_mask_text_removed_edited.jpg)

Translated:

![](/album/imagetrans-text-removal/complex_background_translated.png)


## Lama Inpaint

Added in new versions of ImageTrans, there is an AI algorithm called Lama Inpaint which can restore the background with amazing results. Here is the comparison of different inpainting methods.

Original Image:

![origin](/album/imagetrans-text-removal/mrz/origin.jpg)


Mask:

![mask](/album/imagetrans-text-removal/mrz/mask.png)


OpenCV Telea:

![OpenCV](/album/imagetrans-text-removal/mrz/opencv.jpg)

Patchmatch:

![Patchmatch](/album/imagetrans-text-removal/mrz/patchmatch.jpg)

Lama Inpaint:

![Lama Inpaint](/album/imagetrans-text-removal/mrz/lama.jpg)



