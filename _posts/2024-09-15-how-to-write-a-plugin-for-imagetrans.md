---
date: 2024-09-15 11:23:50+08:00
layout: post
title: How to Write a Plugin for ImageTrans
categories: blog
tags: imagetrans basiccat
---

ImageTrans uses the ABPlugin library to provide plugin functionality. We can develop four types of plugins: text recognition, machine translation, mask generation, and text removal.

Here we are going to write a Google machine translation plugin for demonstration.

## Environments

1. Download B4J 8.9: [B4J.zip](https://github.com/xulihang/misc/releases/download/builds/B4J.zip).
2. Download additional libraries: [b4jlib.zip](https://github.com/xulihang/misc/releases/download/builds/b4jlib.zip).
3. Download OpenJDK+OpenJFX: [jdk-14.0.1.zip](https://www.b4x.com/b4j/files/java/jdk-14.0.1.zip)


Configure the library path and the JDK path in the software.

![Path configuration](/album/B4J/path.jpg)


## New Project

Create a new UI project.

In Build Configuration, change the package to`org.xulihang.imagetrans`, which is the same as ImageTrans.

Then create a new`googleMTPlugin.bas`class, containing the following template content:

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

The plugin name can be obtained through`GetIceName`.

The types of plugins are distinguished based on the suffixes of their names, and currently there are several types of suffixes:

* Machine translation: `MT`
* Text recognition: `OCR`
* Image inpainting (text removal): `Inpaint`
* Text mask generation: `MaskGen`

## Plugin Implementation

ImageTrans will pass the name of the operation to be executed and the corresponding parameters to the plugin. The plugin performs the corresponding operation based on the specified tag.

Here are the common operations:

* `getParams`: get the parameters that need to be configured.
* `getDefaultParamValues`: get default params
* `getSetupParams`: get params for installation
* `getIsInstalledOrRunning`: check if the plugin is installed or running
* `translate`: translate a single sentence
* `batchtranslate`: translate multiple sentences
* `supportBatchTranslation`: whether it supports multiple sentence translation
* `getText`: recognize text in a single area
* `getTextWithLocation`: recognize the text of the entire image and return coordinate information
* `inpaint`: generate text-removed images
* `genMask`: generate text mask
* `byTextArea`: designed to process by text area


Here, let's implement translation using Google.


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

Firstly, implement single sentence translation with a simple HTTP request:

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

Then handle multiple sentence translation. Google does not support multiple sentence translation by default. We can separate multiple sentences with segmentation symbols and send them to Google Translate in one request.

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

## Test

In main, run the following code for testing:

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

## Pack

After the implementation, we need to package it.

Perform the following compile to library operation and save the files to the plugins folder of ImageTrans.


![Compile](/album/B4J/compile-to-library.jpg)


## More Plugin Examples

You can find more plugin examples here: <https://github.com/xulihang/ImageTrans_plugins>
