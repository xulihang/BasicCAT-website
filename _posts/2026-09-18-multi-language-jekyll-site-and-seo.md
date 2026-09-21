---
date: 2026-09-18 19:40:00+08:00
layout: post
title: "Multi-Language Jekyll Sites and SEO"
categories: blog
tags: jekyll
---

Jekyll has no built-in support for multiple languages. When a site only has one or two languages, the most common shortcut is to branch with conditionals:

```liquid
{% raw %}{% if page.url contains '/zh/' %}
  ...Chinese content...
{% else %}
  ...English content...
{% endif %}{% endraw %}
```

With one or two languages this is tolerable. But every language you add means another level of nesting in every template, and the branches start to interleave with each other until nobody dares to touch them.

The better approach is to **make language a first-class citizen**: move the language list into config, let each page declare its own language, and have templates do nothing but look things up. This post covers that change, plus the multi-language SEO work you should do along the way.

## Start with config

The core idea is to define the language list in `_config.yml`:

```yaml
languages:
  - code: en
    label: English
    url: /
    locale: en
    hreflang: en
  - code: zh
    label: 中文
    url: /zh/
    locale: zh_CN
    hreflang: zh-CN
  - code: ja
    label: 日本語
    url: /ja/
    locale: ja
    hreflang: ja
  - code: ar
    label: العربية
    url: /ar/
    locale: ar
    hreflang: ar
    rtl: true
```

Then each page declares its language in the front matter:

```yaml
---
layout: page
title: ダウンロード
lang: ja
---
```

In templates, the if/else is replaced by a lookup:

```liquid
{% raw %}{% assign cur = site.languages | where: "code", page.lang | first %}{% endraw %}
```

The benefit is that **adding a language means changing one config entry and adding one directory** — no template changes at all.

If you don't want to hand-write `lang` in every file, set it in bulk per directory with `defaults`:

```yaml
defaults:
  - scope:
      path: "zh"
    values:
      locale: "zh_CN"
      lang: "zh"
  - scope:
      path: "ja"
    values:
      locale: "ja"
      lang: "ja"
```

### `locale` and `hreflang` are two separate fields

Note that `locale` and `hreflang` are kept apart in the config above and **cannot be merged into one**. This is an easy detail to overlook:

- `locale` is used for `<html lang>` and `og:locale`, and takes the underscore form (`zh_CN`)
- `hreflang` is used for `<link rel="alternate">`, and takes the BCP 47 hyphen form (`zh-CN`)

Use the wrong format and either `og:locale` stops working or the hreflang is silently ignored by search engines — no error, they just act as if it weren't there.

## Two Liquid pitfalls

There are two problems you tend to run into when adding languages, and both have to do with how Liquid looks up values and passes arguments.

### Pitfall 1: a directory and a file under `_data` are not equivalent

Jekyll data files can be laid out two ways, and they are accessed differently:

```
_data/text.yml         ← file, accessed as site.data.text
_data/zh/text.yml      ← directory, accessed as site.data.zh.text
```

That looks symmetrical, but if you write a generic `site.data[lang].text`, it holds for the directory form and fails for the file form — that would be `site.data['en']`, a key that simply doesn't exist, so you get nil.

**Liquid renders undefined variables as empty strings without complaining.** The symptom is therefore a page with blank text where the links still work fine (the URLs usually come from somewhere else entirely), which makes it painful to track down.

So either use the directory form consistently (`_data/en/`, `_data/zh/`), or add a fallback:

```liquid
{% raw %}{% assign t = site.data[lang].text %}
{% if t == nil %}{% assign t = site.data.text %}{% endif %}{% endraw %}
```

### Pitfall 2: `include` and `render` have different scopes

When writing multi-language templates you often need to pass the current language into an include, like this:

```liquid
{% raw %}{% include nav.html lang=page.lang %}{% endraw %}
```

Here you need to be aware that in Jekyll, `include` and `render` follow **different scoping rules**:

- `include` **shares scope** — a variable `assign`ed inside the include is still visible in the outer template, and in later sibling includes
- `render` is **isolated** — it can't see outer variables by default and only sees the arguments passed to it explicitly

The shared semantics of `include` are convenient sometimes, but they make it easy to write fragile code: one include depending on another include having run first and `assign`ed some variable. That kind of code breaks when used on its own, breaks when you reorder the includes, and fails silently (Liquid renders undefined variables as empty strings).

So **always pass values across includes as explicit arguments**, never rely on leakage. If you want to enforce isolation, switch to `render` (requires Jekyll 4.x, and it requires the include file to live under `_includes`; it's also faster).

## The language chooser

With the language list in place, you can build a language switcher. The simplest form is a dropdown:

```liquid
{% raw %}<select onchange="if(this.value)location.href=this.value">
  {% for cand in altlangs %}
    {% assign idx = forloop.index0 %}
    <option value="{{ cand }}"{% if cand == page.url %} selected{% endif %}>{{ altlabels[idx] }}</option>
  {% endfor %}
</select>{% endraw %}
```

Here `altlangs` is the list of "URLs of this page in the other languages" and `altlabels` is the matching language name. How to compute them is below.

The key step is working out "the URL of this page in the other languages".

The idea is: **first compute the current page's path relative to its own language root, then append it to the other language roots**.

```liquid
{% raw %}{% assign rest = page.url %}
{% unless cur.url == '/' %}
  {% assign rest = page.url | remove_first: cur.url | prepend: '/' %}
{% endunless %}{% endraw %}
```

Stripping `/zh/` off `/zh/imagetrans/` gives `/imagetrans/`, and appending `/ja/` to that gives `/ja/imagetrans/`. For the root language the prefix is `/`, so `rest` is just the original URL.

### Don't offer options for pages that don't exist

Computing the URLs isn't enough. **If a language doesn't have this page, it shouldn't be offered as an option** — otherwise clicking through lands on a 404.

So after getting the candidate URL you have to actually look it up:

```liquid
{% raw %}{% assign found = site.pages | where: "url", cand | first %}
{% if found == nil %}{% assign found = site.documents | where: "url", cand | first %}{% endif %}{% endraw %}
```

You have to check two places: regular pages live in `site.pages`, while post-like content (`_posts` and custom collections) lives in `site.documents`. Checking only `site.pages` means the chooser is missing options on post pages.

That gives you **every language version of this page that actually exists**. Only render the whole selector when there is more than one option.

### A subtle failure mode

Consider this logic for determining the current language:

```liquid
{% raw %}{% if l.code == lang %}{% assign is_cur = true %}{% endif %}{% endraw %}
```

If `page.lang` comes back empty (say a batch of pages forgot to declare `lang`), then **`is_cur` is false for every language**, including the current one itself. The result is that the array may contain only the other languages, `size > 1` doesn't hold, and **the entire selector disappears** — not just one option missing.

To debug: search the page source for `class="language-chooser"`. If it isn't there, the array never exceeded one item, so first check whether `page.lang` is being picked up correctly.

## SEO: hreflang

This is **the single most important thing** in multi-language SEO.

The problem is that `/download/`, `/zh/download/` and `/ja/download/` have different content but the same subject. Search engines don't know they're the same thing, so they may treat them as **duplicate content**, diluting each other's weight, or index only one of them — which means Japanese users searching in Japanese land on the English page.

`hreflang` is how you declare "these pages are different language versions of the same content":

```html
<link rel="alternate" hreflang="en" href="https://example.com/download/" />
<link rel="alternate" hreflang="zh-CN" href="https://example.com/zh/download/" />
<link rel="alternate" hreflang="ja" href="https://example.com/ja/download/" />
<link rel="alternate" hreflang="x-default" href="https://example.com/download/" />
```

A few points:

- **It must be an absolute URL**, not a relative path
- **Every language version must declare all the others**, not just one side (if A points to B, B must point to A)
- `x-default` points to the fallback version used when no language matches the user, usually the main site

In Jekyll, if `site.url` isn't configured (so local preview still works), remember the fallback:

```liquid
{% raw %}{% assign siteurl = site.url | default: 'https://example.com' %}{% endraw %}
```

### Reuse the chooser's data

The chooser step already computed "which languages this page exists in", and hreflang wants **the same data**. So it's just a matter of collecting one more field in the same loop:

```liquid
{% raw %}{% for l in site.languages %}
  ...
  {% if is_cur or found != nil %}
    {% assign altlangs = altlangs | push: cand %}
    {% assign altlabels = altlabels | push: l.label %}
    {% assign althreflangs = althreflangs | push: l.hreflang %}
  {% endif %}
{% endfor %}{% endraw %}
```

Then output it in `<head>`:

```liquid
{% raw %}{% if altlangs.size > 1 %}
  {% for cand in altlangs %}
    {% assign idx = forloop.index0 %}
  <link rel="alternate" hreflang="{{ althreflangs[idx] }}" href="{{ siteurl }}{{ cand }}" />
  {% endfor %}
  <link rel="alternate" hreflang="x-default" href="{{ siteurl }}{{ englishurl | default: '/' }}" />
{% endif %}{% endraw %}
```

Reusing the same data has a bonus: **you never emit hreflang pointing at a page that doesn't exist**. That matters, because **a wrong hreflang is worse than no hreflang**. If you declare that a page's Japanese version is at a URL that doesn't exist, search engines will consider the page's configuration broken and may discard the correct signals along with the bad one.

## Right-to-left languages

Arabic, Hebrew, Persian and Urdu are written right to left. When you add one of these, translating the content isn't enough — **the layout has to mirror too**, or the interface feels wrong everywhere.

### Step 1: declare the direction

The HTML `dir` attribute does this:

```html
<html lang="ar" dir="rtl">
```

As with `lang`, don't hard-code it in templates — put it in the language config:

```yaml
  - code: ar
    label: العربية
    url: /ar/
    locale: ar
    hreflang: ar
    rtl: true
```

And output it from the field in the template:

```liquid
{% raw %}<html lang="{{ cur.locale }}"{% if cur.rtl %} dir="rtl"{% endif %}>{% endraw %}
```

This way, adding Hebrew later is just one more `rtl: true` line in the config, with no template changes.

### Step 2: deal with physical direction properties in CSS

**This is the biggest and most easily missed part of the RTL work.**

`dir="rtl"` only affects text flow and some default alignment. It does **not automatically flip** styles that hard-code a direction, and almost every theme uses physical properties heavily:

```css
ul       { margin-left: 2rem; }              /* list indent on the left */
blockquote { border-left: 2px solid #ccc; }  /* quote bar on the left */
th       { text-align: left; }               /* table headers left-aligned */
```

In an RTL page all of these stay exactly where they were, so list indentation ends up on the wrong side, the quote bar appears opposite the text, and table headers are aligned the wrong way.

There are two ways to fix it.

**Option 1: switch to logical properties** (the modern approach)

```css
ul         { margin-inline-start: 2rem; }
blockquote { border-inline-start: 2px solid #ccc; }
th         { text-align: start; }
```

`inline-start` means "the start of the inline direction" — the left in LTR, automatically the right in RTL. This is the cleanest solution, but it **requires going through every physical property in the theme** and confirming browser support (newer properties like `border-inline-start` do nothing in old browsers).

**Option 2: override in bulk with attribute selectors** (less invasive)

Leave the original styles alone and append a set of overrides at the end of the stylesheet:

```css
[dir="rtl"] ul {
    margin-left: 0;
    margin-right: 2rem;
}
[dir="rtl"] blockquote {
    padding-left: 0;
    padding-right: 1rem;
    border-left: 0;
    border-right: 2px solid #ccc;
}
[dir="rtl"] th {
    text-align: right;
}
```

**This has an extra benefit**: the selector is `[dir="rtl"]`, not `[lang="ar"]`, so it applies to **all** RTL languages at once. Adding Hebrew or Persian later needs no more CSS.

The cost is that the rules are now split across two places, so it's easy to forget to update the overrides when you change the original styles. Which one to pick depends on whether you're willing to touch the original theme — if it's a third-party theme you want to keep upgradable, the second is more practical.

### Step 3: keep code blocks left-to-right

This one is often overlooked, but **skipping it directly hurts readability**.

In an RTL page, if code blocks, URLs, file paths and command-line examples mirror along with everything else, they become nearly unreadable:

```
# after mirroring (illustrative)
--with-ssl https://example.com/path    →  the path reads backwards
```

The semantics of this content is "read left to right" regardless of the interface language. So **pin it back to LTR**:

```css
[dir="rtl"] code,
[dir="rtl"] pre,
[dir="rtl"] kbd,
[dir="rtl"] samp {
    direction: ltr;
    text-align: left;
    unicode-bidi: embed;
}
```

All three properties matter, none can be dropped:

- `direction: ltr` — declares the direction
- `text-align: left` — alignment does not follow `direction` automatically, it has to be set separately
- `unicode-bidi: embed` — makes this block its own bidirectional text scope, so it isn't disturbed by the surrounding RTL context

The `unicode-bidi` line is especially easy to forget. Without it, mixed punctuation and digits inside code blocks can still get reordered.

### Step 4: handle icons and directional symbols

Some characters carry direction in their meaning, and mirroring reverses it:

- **Arrows**: `→` reads as "back" in an RTL context and should become `←` for "forward"
- **Back/forward buttons**: the icons usually need swapping
- **Progress bars, breadcrumbs**: the starting point should visually be reversed

This isn't something CSS can fix automatically — it has to be handled at the content level.

Conversely, **some things should not be mirrored**: clock icons, play/pause buttons, logos, numerals. Forcing a mirror on those is just confusing.

### Step 5: check standalone pages

As mentioned earlier, **standalone HTML pages that don't go through a layout won't inherit `dir`**. The site's root element, standalone tool pages and embedded small apps all need `dir="rtl"` set individually. This is the most commonly missed piece.

### A related side effect: hreflang and og:locale

There's an easy trap here that **has nothing to do with RTL but always shows up alongside it**.

`og:locale` uses a `language_REGION` format, where the region code is an **ISO 3166 country code**. Arabic as `ar` has no single region, and `AR` in ISO 3166 is **Argentina** — so `ar_AR` literally means "Arabic (Argentina)", which is wrong. Use the language's default region, `ar_SA`, or just write `ar` on its own.

The lesson from this trap: **don't guess region codes by intuition**, especially for languages spanning many countries like `ar`, `en`, `es` and `pt`. `en_US` and `en_GB` are different regions, as are `es_ES` and `es_MX`, and which one to use depends on who your actual target users are.

## Result and checks

After the change, every page outputs tags like these:

```html
<link rel="alternate" hreflang="en" href="https://example.com/" />
<link rel="alternate" hreflang="zh-CN" href="https://example.com/zh/" />
<link rel="alternate" hreflang="ja" href="https://example.com/ja/" />
<link rel="alternate" hreflang="x-default" href="https://example.com/" />
```

To check, you can look at the page source directly, or run the live pages through Google's [Rich Results Test](https://search.google.com/test/rich-results) or a dedicated hreflang validator.

One thing that's easy to miss: **this template only covers pages that go through a layout**. If the site has fully hand-written HTML pages that bypass the default layout, they won't get these tags automatically and have to be handled separately.

## A few smaller points

**The sitemap needs no attention.** If you're using `jekyll-sitemap`, newly added language pages are picked up automatically with no manual maintenance, and the sitemap it generates carries hreflang information itself.

**`<html lang>` has to be correct.** This uses the `locale` field — don't mix up the format with hreflang. RTL languages also need `dir` output alongside it, see above.

**When the content isn't ready, prefer leaving it empty.** If a language's translations aren't done yet, the corresponding listing pages (blog, tags) should show an empty list rather than being padded out with content from another language — that just shows users a pile of headlines they can't read, and the bounce rate ends up dragging down that directory's weight. Add content once the translation exists; the template will display it automatically.

**Machine-translated pages should be labelled.** If a language is machine-translated, flag it in the config, show a notice bar on the page and link to the source language. It's honest, and it stops users from misjudging the quality of the translation. The implementation is simple: one more field in the config and a check in the template.

---

**Summary**: Make languages config data and let templates do nothing but look things up. The language chooser and hreflang reuse the same computation of "which language versions of this page exist" — so adding a language means touching only the config and the content, never the templates. RTL languages take one extra step: mark `rtl: true` in the config, then add a set of `[dir="rtl"]` selector overrides, and every right-to-left language from then on shares them.
