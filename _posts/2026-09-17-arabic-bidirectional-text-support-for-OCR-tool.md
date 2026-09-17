---
date: 2026-09-17 15:30:00+08:00
layout: post
title: Arabic and Other Bidirectional Text Support in an OCR Tool
categories: blog
tags: imagetrans
---

Arabic, Hebrew and Persian are written from right to left, while the Arabic numerals and Latin words mixed into them are read the normal left-to-right way. That is why they are called bidirectional text. When image OCR and translation software runs into these languages, it has to deal with an extra set of problems: how the interface displays the text, how to restore the character order of the OCR output, how to join words into lines in the correct order, and how to lay text out in reading order when exporting a PDF.

This article describes how [ImageTrans](/imagetrans/) handles these.

## Interface display and text rendering

A JavaFX Node has a `nodeOrientation` property. Once you set it to `RIGHT_TO_LEFT`, JavaFX takes care of text alignment, cursor movement direction, and which side punctuation falls on, with no manual intervention needed.

ImageTrans sets this property on every control that displays bidirectional text, including the source text box, the target text box, and the typesetting engine.

Besides display, there is also a project setting for right-to-left reading, which affects **ordering**.

In an Arabic paragraph, the first word is at the **far right**. If we sort the usual way, from smallest to largest X coordinate, the reading order of the whole paragraph comes out completely reversed. So this switch is passed to several modules involved in sorting and merging:

- Text box sorting
- In-line box sorting
- Panel detection
- Box merging

## Character handling in OCR

ImageTrans uses the PaddleOCR family of models (integrated through RapidOCR). When these models recognize Arabic, what they output is in **visual order** — they scan the image pixels from left to right.

Visual order means the actual writing order of the letters is reversed, but digits, which are already laid out from left to right visually, come out in the correct order.

So a reversal is needed, one that preserves digit runs:

- A pure digit string: return it as is
- Everything else: reverse the whole string first, then flip each run of consecutive digits back

For example, `م٢٠٢٦` should be restored to `٢٠٢٦م`.

At the same time, a bracket mirroring pass swaps left and right brackets.

Other OCR engines, however, do not need this.

## Joining words into lines: right to left

What OCR produces is a pile of word boxes, which first have to be merged into lines and then into paragraphs.

Merging works by starting from a seed box and repeatedly swallowing adjacent boxes in some direction. Which direction to try first is reversed for Arabic:

```basic
growRightFirstRound = True              ' try right first by default
If right2left And horizontal Then
    growRightFirstRound = False         ' for Arabic, try left first
End If
```

It first gathers the words of the same line going left; when this round can no longer grow, it tries the other direction; when neither direction can grow, the line is finished.

But the merge direction alone is not enough. There is one kind of mixed-script case that needs separate handling.

An Arabic line merges from right to left, and that order is correct for Arabic words, but **Latin text embedded in the line must stay left to right** — otherwise a `hello world` comes out of the merge as `world hello`.

So when the end of the first box carries two or more non-Arabic letters and the second box is not an Arabic word either, the two boxes are taken to belong to the same LTR text run and their order needs to be swapped. In implementation, the tail segment of the first box is cut off and appended to the second box:

```
source1 = source1 without the tail  +  " "  +  source2  +  tail
source2 = ""
```

For instance, if the first box is `world` and the second is `hello`, after processing they are restored to `hello world`.

## Exporting PDF: shape and reverse

This is the hardest step.

PDF itself does no complex text layout. When [PDFBox](https://pdfbox.apache.org/)'s `showText` gets a string, it looks up each Unicode code point in the font's cmap one by one and draws the glyph it finds. It does **not** handle Arabic contextual shaping — the fact that the same letter has a different shape at the beginning, middle or end of a word, or standing alone. PDFBox will not do that for you.

So ImageTrans does two steps of its own.

**The first step is shape**: replace each letter with the variant it takes at its current position. Unicode has an "Arabic Presentation Forms" block (U+FE70–FEFF) set aside for exactly these variant glyphs. For example, `ت` standing alone is `FE95`, at the beginning of a word it is `FE97`, in the middle `FE98`, and at the end `FE96`. The decision rests on whether the neighbouring letters can join — letters such as `ا`, `د` and `ر` can only join to the preceding letter, never to the following one.

**The second step is reverse**: the product of the previous step is a string of "glyph codes" rather than "characters". Character order is logical order, whereas glyph code order has to be visual order — the order in which they are drawn on the page. So the whole string is turned around, so that drawing it from left to right comes out right.

The reversal has a pitfall: **digits must not be reversed along with it**. So this is not a simple one-step reversal but a per-word process, splitting on spaces:

- Pure digit words: put back as they were
- Arabic words: keep, but flip each run of consecutive digits inside the word
- Other words (Latin words and so on): collect them into a group and reverse the group as a whole

Finally the brackets are mirrored once more and the direction control characters are stripped, and only then is it handed to PDFBox to draw.

### Font requirements

This approach depends on the font carrying the presentation form glyphs in U+FE80–FEFC. Common system fonts such as Arial, Tahoma and Segoe UI have them (for historical reasons, for compatibility with old software). But some fonts do not, such as Windows' own Arabic Typesetting, which will simply throw an error on export.

### Searchability

There is an unexpected benefit: although what is stored in the PDF is presentation form glyphs, what gets copied out is ordinary Arabic text.

The reason is that PDFBox applies NFKC normalization to each word when extracting text, and NFKC happens to compatibility-decompose U+FE70–FEFF back into the base letters. So the exported PDF both displays correctly and can be copied and searched.

### Known limitations

- The font must contain the presentation form glyphs (U+FE80–FEFC), otherwise the export will fail. If your font runs into this problem, just switch to one with full coverage.
- If the source text carries diacritics (harakat), they enter the text layer along with everything else. Searching may then require including the diacritics to match exactly; the exact behaviour depends on the reader's implementation.
- Ligatures (such as `لا`) are currently assembled from two joined glyphs. The visual result is close, and extraction restores them correctly as two letters.

---

Related reading: [How to Determine the Reading Order of Text in an Image](./how-to-determine-the-reading-order-of-text-in-image.html)
