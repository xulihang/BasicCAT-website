---
date: 2020-11-03 09:47:17+08:00
layout: post
title: "�²������ҳ���������"
categories: releasenote
tags:
---

���û������ṩһ��������ҳ��ȸ跭��Ļ�����������

����������һ���ܴ���ҳ����������ȡ�������Ĳ����

ͨ�����ı������Դ��������URL����ָ��������ȸ��URL:<https://translate.google.cn/#view=home&op=translate&sl=en&tl=zh-CN&text=Hello!>�������������߻����������ͱȽ������ˡ����⣬������Ը���������ȡ����������������������ʹ��API�Ļ���������һ��������

����: <https://github.com/xulihang/BasicCAT/releases/download/plugins/all_plugins.zip>

��ͼ:

![](/album/basiccat_mtweb.png)

�÷�:

1. ��װ�����ò����
2. �л�Ƭ��ʱ�������һ���򵥵���ҳ�������������عȸ跭����ҳ�����Զ����ô�������ı�Ϊ��ǰ��Ŀ��Դ�ı���
3. ���Ҫ�������ԣ���Ҫ�ڲ����༭�������ֶ��༭���Դ��롣
4. Ĭ�ϵĻ��������ǹȸ衣����ͨ���༭URLģ��Ͳ���ʹ�������������롣

URLģ��ʹ��`{sourceLang}`��`{targetLang}`��`{text}`��Ϊռλ����

������ѭ���¸�ʽ:

```
Դ���Դ���,Ŀ�����Դ���,�����class��
�ı�
```

������һЩ���ӡ�

### Google

URL Template:

```
https://translate.google.cn/#view=home&op=translate&sl={sourceLang}&tl={targetLang}&text={text}
```

Params:

```
auto,zh-CN,translation
Hello World!
```

### Baidu

URL Template:

```
https://fanyi.baidu.com/#{sourceLang}/{targetLang}/{text}
```

Params:

```
en,zh,trans-content
Hello World!
```


### Sogou

URL Template:

```
https://fanyi.sogou.com/?keyword={text}&transfrom={sourceLang}&transto={targetLang}&model=general
```

Params:

```
auto,zh-CHS,trans-to
Hello World!
```

