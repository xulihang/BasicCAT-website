---
layout: default
title: "首页"
permalink: /zh/
---



<div class="home">
	<section class="site-header">
		<h1 class="smallcap"><a class="site-title" href="{{ '/' | prepend: site.baseurl | prepend: site.url }}">BasicCAT</a></h1>
		{% include nav.html %}
		{% include intro.html %}
	</section>
</div>


BasicCAT是一款开源免费的计算机辅助翻译软件，旨在为译员提供简单实用的翻译工具。取名BasicCAT，一是因为它简单易用，二是因为它使用Basic语言编写，普通人花上一段时间学习后也能掌握，从而在BasicCAT源代码的基础上修改出适合自己需要的软件。

BasicCAT的设计原则是尽量减少译者的视线转移，专注于译文编辑。机器翻译、划词取义还是拼写错误，都会以下拉列表的形式呈现在输入框下方。

![](/album/demo.gif)

BasicCAT具有以下功能，帮助译员从容完成翻译任务：

* 翻译记忆
* 术语管理
* 语言检查
* 划词取义
* 快速填充
* 自动更正
* 交互式机器翻译
* 导出Word供外部审校
* 导出双语段落对照文件
* 句段分割与合并
* 调用多种在线词典
* 常见机器翻译服务的API调用
* 支持利用翻译记忆与机器翻译进行全文预翻译
* 支持常见源文件格式：txt, idml, xliff, gettext po
* 支持翻译记忆标准TMX、术语管理标准TBX和句段分割标准SRX
* 使用Git进行版本控制

更多内容请见[说明文档](https://docs.basiccat.org/zh_CN/latest/)

如果需要翻译漫画/图片，请使用[ImageTrans](/zh/imagetrans/)

![](/album/main.png)



