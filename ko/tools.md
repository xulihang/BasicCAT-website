---
title: 도구
layout: page
lang: ko
---

제가 번역 작업을 하면서 개발한 몇 가지 도구입니다:


1. XLSX to TMX

	XLSX의 첫 번째 워크시트를 읽습니다. 워크시트에는 zh-CN, en-US와 같은 언어 코드로 된 머리글이 있어야 합니다.

	예시:

	```

	zh-CN	en-US
	안녕하세요	Hello
	```
	
	[다운로드](https://github.com/xulihang/Translation-Tools/releases/download/v1.0/XLSXToTMX.jar)
	
2. Aligner

	원본 파일과 대상 파일, 또는 원문 한 단락과 번역문 한 단락이 번갈아 나오는 이중 언어 파일로 정렬 작업을 할 수 있습니다.

	자세히 보기: [새 도구! 문장 단위 정렬 소프트웨어 Aligner](/zh/new-tool-bitext-aligner/)
	
3. PSD Localization

	PSD 파일에서 텍스트를 추출하고 번역한 텍스트를 다시 채워 넣을 수 있습니다. 컴퓨터에 Photoshop 정식 버전이 설치되어 있어야 하며, 현재는 Windows만 지원합니다.

	[다운로드](https://github.com/xulihang/Translation-Tools/releases/download/v1.1/PSDLocalization.zip)
	
4. Image Transcriber

	이미지 OCR 보조 도구입니다. 텍스트 레이어가 포함된 PSD 파일을 추가로 생성할 수 있습니다(컴퓨터에 Photoshop 설치 필요).
	
	이 도구는 tesseract와 바이두 API로 OCR을 수행하며, tesseract를 루트 디렉터리의 tesseract-ocr 폴더에 넣고 바이두 API의 id와 secret을 루트 디렉터리의 baidu 파일에 줄바꿈으로 구분하여 저장해야 합니다.
		
	개발이 중단되었습니다. [ImageTrans](https://www.basiccat.org/ko/imagetrans/)를 사용하세요.

5. FileDiff

	이 도구는 파일의 새 버전과 이전 버전의 차이를 표시하며 다양한 파일 형식을 지원합니다. 번역한 문서를 수정한 뒤 CAT에서 해당 텍스트를 수정하고 싶다면 이 도구로 차이를 확인할 수 있습니다.
	
	[소스 코드](https://github.com/xulihang/FileDiff)	
	
참고: 이 도구들을 실행하려면 먼저 Java Runtime Environment 8을 설치하세요.
