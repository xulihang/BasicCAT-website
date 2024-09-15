---
date: 2024-09-15 11:23:50+08:00
layout: post
title: 如何编写一个ImageTrans的插件
categories: blog
tags: imagetrans basiccat
---

ImageTrans使用ABPlugin这个库提供插件功能。我们可以编写文字识别、机器翻译、掩膜生成和文字去除等四种插件。

这里我们演示一下如何编写一个谷歌机器翻译插件。

## 环境准备

1. 下载B4J 8.9：[B4J.zip](https://github.com/xulihang/misc/releases/download/builds/B4J.zip)。
2. 下载额外的类库：[b4jlib.zip](https://github.com/xulihang/misc/releases/download/builds/b4jlib.zip)。
3. 下载OpenJDK + OpenJFX：[jdk-14.0.1.zip](https://www.b4x.com/b4j/files/java/jdk-14.0.1.zip)


在软件中配置类库地址和JDK的地址。

![路径配置](/album/B4J/path.jpg)


## 新建项目

新建一个UI项目。

在Build Configuration中将包改为和ImageTrans一样的`org.xulihang.imagetrans`。

然后新建一个`googleMTPlugin.bas`的类，包含以下模板内容：

```vb
Sub Class_Globals
	Private fx As JFX
End Sub

'Initializes the object. You can NOT add parameters to this method!
Public Sub Initialize() As String
	Log("Initializing plugin " & GetNiceName)
	' Here return a key to prevent running unauthorized plugins
	Return "MyKey"
End Sub

' must be available
public Sub GetNiceName() As String
	Return "googleMT"
End Sub

' must be available
public Sub Run(Tag As String, Params As Map) As ResumableSub
	Select Tag
		Case "getParams"
			Dim paramsList As List
			paramsList.Initialize
			paramsList.Add("key")
			Return paramsList
		Case "translate"
			Return ""
		Case "batchtranslate"
			Return Array()
		Case "supportBatchTranslation"
			Return True
	End Select
	Return ""
End Sub
```

插件名可以通过`GetNiceName`获取。

插件的类别是根据名字的后缀区分的，目前有这几种后缀：

* 机器翻译：`MT`
* 文字识别：`OCR`
* 图像修复（文字去除）：`Inpaint`
* 文字掩膜生成：`MaskGen`

## 实现插件

ImageTrans会传递需要执行的操作名和对应的参数给插件。插件根据指定的tag执行对应的操作。

下面是常见操作的说明：

* `getParams`：获取需要进行配置的参数。
* `getDefaultParamValues`：获取默认的配置
* `getSetupParams`：获取安装配置
* `getIsInstalledOrRunning`：检查插件是否安装或运行
* `translate`：翻译单个句子
* `batchtranslate`：翻译多个句子
* `supportBatchTranslation`：是否支持多句翻译
* `getText`：识别单个区域的文字
* `getTextWithLocation`：识别整张图片的文字，并返回坐标信息
* `inpaint`：生成去文字图
* `genMask`：生成文字掩膜
* `byTextArea`：需要按文字区域处理


这里，我们需要实现用谷歌去翻译的接口。


```vb
Select Tag
	Case "translate"
		wait for (translate(Params.Get("source"),Params.Get("sourceLang"),Params.Get("targetLang"),Params.Get("preferencesMap"))) complete (result As String)
		Return result
	Case "batchtranslate"
		wait for (batchTranslate(Params.Get("source"),Params.Get("sourceLang"),Params.Get("targetLang"),Params.Get("preferencesMap"))) complete (targetList As List)
		Return targetList
End Select
```

首先实现单句翻译，一个简单的HTTP请求：

```vb
Sub translate(source As String,sourceLang As String,targetLang As String,preferencesMap As Map) As ResumableSub
	Dim target As String
	Dim su As StringUtils
	Dim job As HttpJob
	job.Initialize("job",Me)
	Dim params As String
	Dim key As String
	key=getMap("google",getMap("api",preferencesMap)).GetDefault("key","")
	If key="" Then
		Return ""
	End If
	params="key="&key& _
	"&q="&su.EncodeUrl(source,"UTF-8")&"&format=text&source="&sourceLang&"&target="&targetLang
	job.PostString("https://translation.googleapis.com/language/translate/v2",params)
	wait For (job) JobDone(job As HttpJob)
	If job.Success Then
		Try
			Dim result,data As Map
			Dim json As JSONParser
			json.Initialize(job.GetString)
			result=json.NextObject
			data=result.Get("data")
			Dim translations As List
			translations=data.Get("translations")
			Dim map1 As Map
			map1=translations.Get(0)
			target=map1.Get("translatedText")
		Catch
			target=""
			Log(LastException)
		End Try
	Else
		target=""
	End If
	job.Release
	Return target
End Sub


Sub getMap(key As String,parentmap As Map) As Map
	Return parentmap.Get(key)
End Sub
```

然后处理多句翻译。谷歌默认不支持多句翻译，我们可以将多个句子以分割符号隔开，一次性传给谷歌翻译后再做切分。

```vb
Sub batchTranslate(sourceList As List,sourceLang As String,targetLang As String,preferencesMap As Map) As ResumableSub
	Dim targetList As List
	targetList.Initialize
	Dim sb As StringBuilder
	sb.Initialize
	For Each source As String In sourceList
		sb.Append(source.Replace(CRLF,"<br/>"))
		sb.Append(CRLF)
	Next
	wait for (translate(sb.ToString,sourceLang,targetLang,preferencesMap)) Complete (target As String)
	Dim targetList As List
	targetList.Initialize
	For Each result As String In Regex.Split(CRLF,target)
		result = result.Replace("<br/>",CRLF)
		targetList.Add(result)
	Next
	Return targetList
End Sub
```

## 测试

在main中，运行以下代码进行测试：

```vb
Dim map1 As Map
map1.Initialize
map1.Put("api",CreateMap("google":CreateMap("key":"api key")))
Dim n As googleMTPlugin
n.Initialize
wait for (n.translate("BasicCAT Documentation","en","zh",map1)) complete (result As String)
Log(result)
wait for (n.batchTranslate(Array("Sentence 1","Sentence 2"),"en","zh",map1)) complete (targetList As List)
Log(targetList)
```

## 打包

编写完成后，我们需要进行打包。

执行以下compile to library的操作，保存文件到ImageTrans的plugins目录即可。


![编译](/album/B4J/compile-to-library.jpg)
