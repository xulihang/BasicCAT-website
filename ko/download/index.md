---
title: 다운로드
layout: page
permalink: /ko/download/
lang: ko
---

사용 중인 운영체제에 맞는 설치 파일을 선택하세요.

### BasicCAT v1.11.0

* Windows: [32비트](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-windows-x86.exe) / [64비트](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-windows-x64.exe)
* macOS:  [Intel CPU 버전](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-mac-x64.dmg) / [Apple CPU 버전](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-mac-arm.dmg)
* Linux 및 기타 시스템:  [CrossPlatfroms.zip](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-crossplatforms.zip)

바이두 넷디스크에서도 내려받을 수 있습니다: [링크](https://pan.baidu.com/s/1HmD4pJ9hIYyK9bnqINtoFQ)

이전 버전: [Releases](https://github.com/xulihang/BasicCAT/releases/)

macOS 사용자 주의 사항: macOS Catalina부터 파일에 `com.apple.quarantine`이라는 새로운 속성이 추가됩니다. BasicCAT을 열면 앱이 손상되었다는 메시지가 표시됩니다. 다음 명령으로 이 속성을 제거해야 프로그램이 정상적으로 실행됩니다.

```
sudo xattr -rd com.apple.quarantine /Applications/BasicCAT.app
```

### 번역 메모리 및 용어 공유용 서버 프로그램

*  [CloudKVS_Server.jar](https://github.com/xulihang/BasicCAT/releases/download/v1.2-beta2/CloudKVS_Server.jar)

### 플러그인

현재 BasicCAT에는 필터 플러그인과 기계 번역 플러그인, 두 가지 플러그인이 있습니다.

[여기](https://github.com/xulihang/BasicCAT/releases/download/plugins/all_plugins.zip)를 클릭하면 모든 플러그인을 내려받을 수 있습니다. BasicCAT 설치 패키지에 최신 플러그인이 이미 포함되어 있으므로 일반적으로 따로 내려받을 필요는 없습니다.

압축을 풀어 나온 jar와 xml 파일을 plugins 폴더에 넣는 것을 잊지 마세요.

현재 제공되는 플러그인:

기계 번역:

* ChatGPT
* Gemini
* DeepL
* 텐센트
* 니우트랜스
* 구글
* IBM Watson
* Colorful Clouds
* Naver Papago
* Cloudtranslation (url 매개변수만 설정하면 됩니다. 자세한 내용은 [공식 설명](https://cloudtranslation.com/static/api_zh-cn.html) 참고)
* 아마존 (별도 다운로드 필요: [링크](https://github.com/xulihang/BasicCAT/releases/download/plugins/amazon.zip))
* OpusCAT(오프라인 기계 번역 엔진, [설명](/zh/offline-machine-translation))
* 웹 기계 번역(웹 페이지에서 기계 번역을 추출하며 API가 필요하지 않습니다, [자세히 보기](https://www.basiccat.org/zh/new-plugin-machine-translation-via-web/))

필터:

* Gettext PO

### 기타 도구

번역 작업을 해결하기 위해 개발한 몇 가지 작은 도구: [도구](/ko/tools/)

