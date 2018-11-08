---
date: 2018-11-08 14:43:50+08:00
layout: post
title: BasicCAT开发笔记（十）：机器翻译与插件的编写
categories: 技术随笔
tags: CAT
---

机器翻译功能的添加是比较简单的一件事情，切换到新的片段时，调用机器翻译API即可。

比如以下是调用谷歌翻译的例子：

```vb
Sub googleMT(source As String,sourceLang As String,targetLang As String) As ResumableSub
	Dim target As String
	Dim su As StringUtils
	Dim job As HttpJob
	job.Initialize("job",Me)
	Dim params As String
	params="?key="&Utils.getMap("google",Utils.getMap("mt",Main.preferencesMap)).Get("key")& _ 
	"&q="&su.EncodeUrl(source,"UTF-8")&"&format=text&source="&sourceLang&"&target="&targetLang
	
	job.Download("https://translation.googleapis.com/language/translate/v2"&params)
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
```

有些机器翻译可能还要使用md5生成16进制编码的密钥，会复杂一点。

机器翻译的API一般需要设置密钥等信息，我们需要在设置界面里添加设置选项。

因为机器翻译很多，我把它做成了可以用插件来开发的形式。主要使用了ABPlugin这一个库。

在程序开始运行时扫描插件目录里的插件：

```vb
Public Sub loadPlugins
	Dim dir As String
	If preferencesMap.ContainsKey("pluginDir") Then
		dir=preferencesMap.Get("pluginDir")
	Else
		dir=File.Combine(File.DirApp,"plugins")
	End If
	plugin.Initialize("plugin",dir, "MyKey")
	plugin.Start(1)
	Log(plugin.GetAvailablePlugins)
End Sub

Sub plugin_PluginsChanged()
	Log("plugins have changed!")
	Log(plugin.GetAvailablePlugins)
	plugin.Stop
End Sub
```

然后根据插件的名字，判断其功能，将其加入MT列表。如果调用的MT不是内建的MT引擎，则调用对应的插件。

```vb
Sub getMTPluginList As List
	Dim mtList As List
	mtList.Initialize
	For Each name As String In Main.plugin.GetAvailablePlugins
		If name.EndsWith("MT") Then
			mtList.Add(name.Replace("MT",""))
		End If
	Next
	Return mtList
End Sub

Sub getMT(source As String,sourceLang As String,targetLang As String,MTEngine As String) As ResumableSub
    ......
	If getMTPluginList.IndexOf(MTEngine)<>-1 Then
		Dim params As Map
		params.Initialize
		params.Put("source",source)
		params.Put("sourceLang",sourceLang)
		params.Put("targetLang",targetLang)
		params.Put("preferencesMap",Main.preferencesMap)
		wait for (Main.plugin.RunPlugin(MTEngine&"MT","translate",params)) complete (result As String)
		Log("pluginMT"&result)
		Return result
	End If
End Sub
```

以上是主程序需要做的。然后是插件的内容，以下是添加的小牛机器翻译的例子，其中NiceName就是插件的名字，用MT结尾表示其功能，初始化时的key用以保证安全性。

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
	Return "niutransMT"
End Sub

' must be available
public Sub Run(Tag As String, Params As Map) As ResumableSub
	Log("run"&Params)
	Select Tag
		Case "getParams"
			Dim paramsList As List
			paramsList.Initialize
			paramsList.Add("key")
			Return paramsList
		Case "translate"
			wait for (translate(Params.Get("source"),Params.Get("sourceLang"),Params.Get("targetLang"),Params.Get("preferencesMap"))) complete (result As String)
			Return result
	End Select
	Return ""
End Sub


Sub translate(source As String, sourceLang As String, targetLang As String,preferencesMap As Map) As ResumableSub
	Dim target As String
	Dim su As StringUtils
	Dim job As HttpJob
	job.Initialize("job",Me)
	Dim params As String
	params="?apikey="&getMap("niutrans",getMap("mt",preferencesMap)).Get("key")&"&src_text="&su.EncodeUrl(source,"UTF-8")&"&from="&sourceLang&"&to="&targetLang
	job.Download("http://api.niutrans.vip/NiuTransServer/translation"&params)
	wait For (job) JobDone(job As HttpJob)
	If job.Success Then
		Log(job.GetString)
		Try
			Dim json As JSONParser
			json.Initialize(job.GetString)
		    target=json.NextObject.Get("tgt_text")
		Catch
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

插件需要编译为库。测试debug时编译得到的结果会报错，release模式没有问题。

相关文件：

<https://github.com/xulihang/BasicCAT/blob/master/BasicCAT/MT.bas>

<https://github.com/xulihang/BasicCAT/blob/master/BasicCAT/MTParamsFiller.bas>

<https://github.com/xulihang/BasicCAT/blob/master/plugins/niutransMT/niuTransMTPlugin.bas>