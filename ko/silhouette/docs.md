---
title: Silhouette 문서
layout: page
description: Silhouette 문서
lang: ko
---

## 지원하는 운영 체제

* Windows 7+
* macOS 10.15+
* Linux

## 설치

Windows의 경우 압축을 푼 후 `Silhouette.exe`를 사용하여 프로그램을 실행합니다.

macOS의 경우 dmg 파일 안의 앱을 `Applications` 폴더로 드래그하여 설치합니다. 패키지가 손상되었다는 메시지가 표시되면 터미널을 열고 다음 명령을 실행하세요:

```bash
sudo xattr -rd com.apple.quarantine /Applications/Silhouette.app
```

Linux의 경우 Windows용 zip 패키지에 있는 파일을 사용할 수 있습니다. 프로그램을 실행하려면 FFmpeg, Whisper.cpp, Java 및 JavaFX를 설치해야 합니다. 이러한 종속성이 포함된 [템플릿 파일](https://github.com/xulihang/Silhouette/releases/download/v1.1.0/Silhouette-Linux-template.zip)을 사용할 수 있습니다. 그런 다음 ONNXRuntime을 다운로드하여 so 파일의 압축을 소프트웨어 디렉터리에 풀어야 합니다: [linux-onnxruntime-1.20.0.zip](https://github.com/xulihang/onnxruntime-for-win7/releases/download/builds/linux-onnxruntime-1.20.0.zip).

## 설정

프로그램을 열면 구매 확인을 위해 주문 번호와 이메일을 입력해야 합니다. 7일 체험판이나 제한 모드로 먼저 프로그램을 사용해 볼 수 있습니다.

또한 다른 설정도 완료해야 합니다.


1. Whisper 모델. 음성 인식을 위해 Whisper 모델을 선택해야 합니다. 프로그램에서 다운로드 링크를 찾거나 [여기](https://github.com/xulihang/Silhouette_plugins/#whisper-models)에서 다운로드할 수 있습니다.
2. API 키. ChatGPT, Google 또는 DeepL 등의 번역 서비스를 사용해야 하는 경우 환경 설정에서 API 키를 입력해야 합니다.


## 빠른 시작

Silhouette의 스크린샷:

![스크린샷](/album/silhouette/screenshot_zh.webp){: width="1500" height="1160"}

왼쪽 상단에는 다양한 컨트롤이 있는 동영상 플레이어가 있습니다.

왼쪽 하단에는 기존 자막 행을 표시하는 표가 있습니다.

오른쪽 상단에서는 현재 자막 행에 해당하는 파형을 확인하고 타임스탬프와 텍스트를 편집할 수 있습니다.

오른쪽 하단에서는 여러 번역 서비스의 결과를 확인할 수 있습니다.

다음은 Silhouette를 사용하여 동영상/오디오 파일을 번역하는 기본 과정입니다:

1. 메뉴 바의 파일 메뉴를 사용하여 미디어 파일을 열고 언어 쌍을 구성합니다.
2. 편집 메뉴를 사용하여 음성을 인식하고, 음성 활동을 감지하고, 자막 행을 편집합니다.
3. 전사와 번역 후 결과를 SRT 파일이나 탭으로 구분된 txt 파일로 내보낼 수 있습니다. 이러한 파일에서 데이터를 가져올 수도 있습니다.




