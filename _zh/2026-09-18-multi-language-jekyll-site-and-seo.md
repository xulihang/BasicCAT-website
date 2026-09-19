---
date: 2026-09-18 19:40:00+08:00
layout: post
title: Jekyll站点多语言支持和SEO优化
categories: blog
tags: jekyll
---

Jekyll本身没有内置的多语言支持。站点只有一两种语言时，最常见的小聪明是用条件判断分流：

```liquid
{% raw %}{% if page.url contains '/zh/' %}
  ...中文内容...
{% else %}
  ...英文内容...
{% endif %}{% endraw %}
```

一两种语言时这还能忍。但每加一种语言，每个模板就要多一层嵌套，分支组合还会互相纠缠，最后没人敢改。

更好的做法是**把语言变成一等公民**：语言清单抽到配置里，每个页面声明自己的语言，模板只做查表。这篇讲怎么改，顺带把多语言SEO该做的补上。

## 从配置开始

核心是在`_config.yml`里定义语言清单：

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

然后每个页面在front matter里声明语言：

```yaml
---
layout: page
title: ダウンロード
lang: ja
---
```

模板里就不再是if/else，而是查表：

```liquid
{% raw %}{% assign cur = site.languages | where: "code", page.lang | first %}{% endraw %}
```

好处是**加语言只需要改一处配置加一个目录**，模板一行都不用动。

不想在每个文件里手写`lang`的话，用`defaults`按目录批量设置：

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

### locale和hreflang是两个字段

注意上面配置里`locale`和`hreflang`是分开的，**不能合并成一个**。这是个容易忽略的细节：

- `locale`给`<html lang>`和`og:locale`用，要下划线形式（`zh_CN`）
- `hreflang`给`<link rel="alternate">`用，要BCP 47连字符形式（`zh-CN`）

用错格式的话，`og:locale`会失效，或者hreflang被搜索引擎静默忽略——它不报错，就是当没看见。

## 两个Liquid上的坑

加多语言时容易撞上的两个问题，都跟Liquid的取值和传参有关。

### 坑一：`_data`下目录和文件不等价

Jekyll的数据文件有两种放法，取值方式不同：

```
_data/text.yml         ← 文件，取值 site.data.text
_data/zh/text.yml      ← 目录，取值 site.data.zh.text
```

看起来对称，但如果你写一个通用的`site.data[lang].text`，对目录形式成立，对文件形式却是`site.data['en']`——这个键根本不存在，取到nil。

**Liquid对未定义变量静默渲染成空字符串，不报错。** 所以症状是页面文字一片空白，但链接地址又是对的（地址往往来自另一处数据），排查起来很费劲。

所以要么统一都用目录形式（`_data/en/`、`_data/zh/`），要么加回落：

```liquid
{% raw %}{% assign t = site.data[lang].text %}
{% if t == nil %}{% assign t = site.data.text %}{% endif %}{% endraw %}
```

### 坑二：`include`和`render`的作用域不同

写多语言模板时，常常要把当前语言传给include，比如：

```liquid
{% raw %}{% include nav.html lang=page.lang %}{% endraw %}
```

这里要留意Jekyll里`include`和`render`的**作用域规则不一样**：

- `include`**共享作用域**，include里`assign`的变量，回到外层以及后面的同级include都还能读到
- `render`是**隔离作用域**，默认拿不到外层变量，只能看到显式传入的参数

`include`的共享语义有时很方便，但也容易写出脆弱代码：一个include依赖另一个include先执行过、在里面`assign`过某个变量。这种代码单独拿出来用会失效，调整include顺序也会坏，而且出错时是静默的（Liquid对未定义变量渲染成空字符串）。

所以**跨include传值一律走显式参数**，不要依赖泄漏。如果希望强制隔离，可以改用`render`（需要Jekyll 4.x，且它要求include文件放在`_includes`下、性能也更好）。

## 语言选择器

有了语言清单，就可以做一个语言切换控件。最简单的形式是下拉框：

```liquid
{% raw %}<select onchange="if(this.value)location.href=this.value">
  {% for cand in altlangs %}
    {% assign idx = forloop.index0 %}
    <option value="{{ cand }}"{% if cand == page.url %} selected{% endif %}>{{ altlabels[idx] }}</option>
  {% endfor %}
</select>{% endraw %}
```

里面的`altlangs`是「这个页面在别的语言里的URL」列表，`altlabels`是对应的语言名。下面讲怎么算出来。

关键是怎么算出「这个页面在别的语言里的URL」。

思路是：**先算出当前页面相对于它自己语言根目录的路径，再拼到其它语言的根目录上**。

```liquid
{% raw %}{% assign rest = page.url %}
{% unless cur.url == '/' %}
  {% assign rest = page.url | remove_first: cur.url | prepend: '/' %}
{% endunless %}{% endraw %}
```

`/zh/imagetrans/`把`/zh/`剥掉得到`/imagetrans/`，再拼上`/ja/`就是`/ja/imagetrans/`；根目录语言因为前缀是`/`，`rest`就是原样。

### 不存在的页面不要给选项

光算URL不够。**如果某个语言没有这个页面，就不该给这个选项**——否则点过去是404。

所以拿到候选URL后要真实查一下：

```liquid
{% raw %}{% assign found = site.pages | where: "url", cand | first %}
{% if found == nil %}{% assign found = site.documents | where: "url", cand | first %}{% endif %}{% endraw %}
```

要查两个地方：常规页面在`site.pages`，而文章类内容（`_posts`和自定义collection）在`site.documents`。只查`site.pages`会导致文章页的选择器少选项。

这样就得到了**这个页面实际存在的所有语言版本**。只有选项多于一个时才渲染整个选择器。

### 一个隐蔽的失败模式

判断「当前语言」的这段逻辑：

```liquid
{% raw %}{% if l.code == lang %}{% assign is_cur = true %}{% endif %}{% endraw %}
```

如果`page.lang`取不到（比如某批页面忘了声明`lang`），那么**所有语言的`is_cur`都是false**，连当前语言这一项本身都被漏掉。结果是数组里可能只剩别的语言，`size > 1`不成立，**整个选择器消失**——而不只是少一个选项。

排查方法：搜页面源码里有没有`class="language-chooser"`。搜不到就说明数组没超过1项，先查`page.lang`有没有正确取到。

## SEO：hreflang

这是多语言SEO里**最关键的一件事**。

问题在于：`/download/`、`/zh/download/`、`/ja/download/`三个页面内容不同但主题相同。搜索引擎不知道它们是一回事，可能当成**重复内容**处理，互相稀释权重，或者只挑一个收录，导致日文用户搜到英文页。

`hreflang`就是用来声明「这几页是同一内容的不同语言版本」的：

```html
<link rel="alternate" hreflang="en" href="https://example.com/download/" />
<link rel="alternate" hreflang="zh-CN" href="https://example.com/zh/download/" />
<link rel="alternate" hreflang="ja" href="https://example.com/ja/download/" />
<link rel="alternate" hreflang="x-default" href="https://example.com/download/" />
```

几个要点：

- **必须是绝对URL**，不能是相对路径
- **每个语言版本都要互相声明**，不能只在一侧写（A指向B，B也要指向A）
- `x-default`指向「没匹配到用户语言时」的兜底版本，通常是主站

在Jekyll里，如果`site.url`没配（为了同时支持本地预览），记得兜底：

```liquid
{% raw %}{% assign siteurl = site.url | default: 'https://example.com' %}{% endraw %}
```

### 复用语言选择器的数据

语言选择器那一步已经算出了「这个页面在哪些语言里存在」，hreflang要的是**同一份数据**。所以只是多收集一个字段，复用同一个循环：

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

然后在`<head>`里输出：

```liquid
{% raw %}{% if altlangs.size > 1 %}
  {% for cand in altlangs %}
    {% assign idx = forloop.index0 %}
  <link rel="alternate" hreflang="{{ althreflangs[idx] }}" href="{{ siteurl }}{{ cand }}" />
  {% endfor %}
  <link rel="alternate" hreflang="x-default" href="{{ siteurl }}{{ englishurl | default: '/' }}" />
{% endif %}{% endraw %}
```

复用同一份数据有个额外的好处：**不会输出指向不存在页面的hreflang**。这一点很重要——**错误的hreflang比没有hreflang更糟**。如果你声明某页的日文版是一个不存在的URL，搜索引擎会认为这个页面配置有问题，可能连正确的那些信号一起忽略掉。

## 从右往左的语言

阿拉伯语、希伯来语、波斯语、乌尔都语这些语言是从右往左读写的。加这类语言时，光翻译内容不够，**排版必须跟着镜像**，否则界面会处处别扭。

### 第一步：声明方向

HTML的`dir`属性就是干这个的：

```html
<html lang="ar" dir="rtl">
```

和`lang`一样，别硬编码在模板里，放进语言配置：

```yaml
  - code: ar
    label: العربية
    url: /ar/
    locale: ar
    hreflang: ar
    rtl: true
```

模板里按字段输出：

```liquid
{% raw %}<html lang="{{ cur.locale }}"{% if cur.rtl %} dir="rtl"{% endif %}>{% endraw %}
```

这样再加希伯来语时，只是在配置里多一行`rtl: true`，模板一行都不用改。

### 第二步：处理CSS里的物理方向属性

**这是RTL改造里工作量最大、也最容易漏的一步。**

`dir="rtl"`只影响文本流向和部分默认对齐，它**不会自动翻转**那些写死了方向的样式。而绝大多数主题都大量使用物理属性：

```css
ul       { margin-left: 2rem; }              /* 列表缩进在左 */
blockquote { border-left: 2px solid #ccc; }  /* 引用条在左 */
th       { text-align: left; }               /* 表头左对齐 */
```

在RTL页面里这些全都会留在原地，于是列表缩进跑到错误的一侧、引用条出现在文字的对侧、表头对齐反了。

有两种解法。

**解法一：改用逻辑属性**（现代做法）

```css
ul         { margin-inline-start: 2rem; }
blockquote { border-inline-start: 2px solid #ccc; }
th         { text-align: start; }
```

`inline-start`表示「行内方向的起点」——LTR里是左边，RTL里自动变成右边。这是最干净的方案，但**需要把主题里所有物理属性逐个改一遍**，还要确认目标浏览器支持（`border-inline-start`这类较新的属性在旧浏览器上无效）。

**解法二：用属性选择器批量覆盖**（侵入性小）

不动原样式，在样式表末尾追加一组覆盖规则：

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

**这种写法有个额外好处**：选择器是`[dir="rtl"]`而不是`[lang="ar"]`，所以它对**所有**RTL语言同时生效。以后加希伯来语、波斯语，不用再补CSS。

代价是规则分散在两处，改原样式时容易忘记同步覆盖规则。用哪种取决于你是否愿意动原主题——如果是第三方主题、想保持能升级，第二种更实际。

### 第三步：让代码块保持从左往右

这一步经常被忽略，但**不处理会直接影响可读性**。

RTL页面里，代码块、URL、文件路径、命令行示例如果跟着镜像，会变得几乎无法阅读：

```
# 跟着镜像之后（示意）
--with-ssl https://example.com/path    →  路径读起来是反的
```

这些内容的语义就是「从左往右读」，跟界面语言无关。所以要把它们**钉回LTR**：

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

三个属性各有作用，缺一不可：

- `direction: ltr` —— 声明方向
- `text-align: left` —— 对齐方式不会自动跟着`direction`走，要单独写
- `unicode-bidi: embed` —— 让这块内容形成一个独立的双向文本作用域，避免被外层RTL环境干扰

`unicode-bidi`这行尤其容易漏。不写的话，代码块里混排的标点和数字仍可能被重排。

### 第四步：处理图标和方向性符号

有些字符本身带方向含义，镜像后意思会反：

- **箭头**：`→`在RTL语境里读作「返回」，应该换成`←`表示「前进」
- **返回/前进按钮**：图标通常要左右互换
- **进度条、面包屑**：起始位置在视觉上应该反过来

这类不是CSS能自动解决的，得在内容层面处理。

倒过来说，**有些东西不该镜像**：时钟图标、播放/暂停按钮、商标、数字——强行镜像反而会让人困惑。

### 第五步：检查独立页面

和前面说的一样，**不走layout的独立HTML页面不会继承`dir`**。站的根元素、独立的工具页、嵌入的小应用，都要单独设`dir="rtl"`。这是最常漏的一块。

### 一个连带影响：hreflang和og:locale

这里有个容易踩的坑，**和RTL无关但总是一起出现**。

`og:locale`用的是`语言_地区`格式，其中的地区码是**ISO 3166国家码**。阿拉伯语的`ar`本身没有单一地区归属，而`AR`这个代码在ISO 3166里是**阿根廷**——所以写`ar_AR`字面上是「阿拉伯语（阿根廷）」，是错的。应该用语言默认地区`ar_SA`，或者干脆只写`ar`。

这个坑的教训是：**别凭直觉拼地区码**，尤其是`ar`、`en`、`es`、`pt`这些跨多国的语言——`en_US`和`en_GB`是不同地区，`es_ES`和`es_MX`也一样，用哪个要看你的实际目标用户。

## 效果和检查

改完之后，每个页面都会输出类似这样的标签：

```html
<link rel="alternate" hreflang="en" href="https://example.com/" />
<link rel="alternate" hreflang="zh-CN" href="https://example.com/zh/" />
<link rel="alternate" hreflang="ja" href="https://example.com/ja/" />
<link rel="alternate" hreflang="x-default" href="https://example.com/" />
```

检查的话，可以直接看页面源码，也可以用Google的[Rich Results Test](https://search.google.com/test/rich-results)或专门的hreflang校验工具跑一下线上页面。

有个容易漏的点：**这套模板只覆盖走layout的页面**。如果站里有独立编写的完整HTML页面（不走默认layout），它们不会自动获得这些标签，得单独处理。

## 其它几个小点

**sitemap不用管**。用了`jekyll-sitemap`的话，新增的语言页面会自动被收录，不需要手动维护；而且它生成的sitemap本身也带hreflang信息。

**`<html lang>`要正确**。这个用`locale`字段，注意不要和hreflang搞混格式。RTL语言还要一并输出`dir`，见上文。

**内容没跟上时，宁可留空**。如果某个语言的翻译还没做，对应的列表页（博客、标签页）宁可显示空列表，也不要拿别的语言的内容充数——那会让用户看到一堆看不懂的标题，跳出率反而拉低这个目录的权重。等翻译有了再往里加，模板会自动显示。

**机翻页面应该标注**。如果某个语言是机器翻译的，在配置里打个标记，页面上显示提示条并给出原文语言的链接。这既是诚实，也避免了用户对翻译质量产生误解。实现很简单，配置里加一行字段，模板里判断一下就行。

---

**小结**：把语言抽成配置数据，模板只做查表，语言选择器和hreflang复用同一份「这个页面有哪些语言版本」的计算结果——这样加语言只改配置和内容，不用碰模板。RTL语言多一步：在配置里标记`rtl: true`，再补一套`[dir="rtl"]`的选择器覆盖，之后所有从右往左的语言都能共用。
