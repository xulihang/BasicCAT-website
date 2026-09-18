---
title: ImageTrans 개선 돕기
layout: page
lang: ko
---

다음과 같은 방법으로 ImageTrans 개선을 도울 수 있습니다:

1. 문서 번역

	ImageTrans의 문서는 Sphinx로 제작되어 readthedocs에 호스팅되어 있습니다.

	문서 코드 저장소: <https://github.com/xulihang/ImageTrans-docs>

	Sphinx의 현지화 도구를 사용해 po 파일을 추출한 뒤 번역해야 합니다.

2. 소프트웨어 인터페이스 번역

	ImageTrans는 [B4XLocalizator](https://www.b4x.com/android/forum/threads/b4x-localizator-localize-your-b4x-applications.68751/)로 현지화를 구현하며, strings.xlsx 파일을 번역해야 합니다. 번역이 끝나면 strings.db로 변환하여 소프트웨어에서 호출합니다.
	
	strings.xlsx는 여기에서 내려받을 수 있습니다: <https://github.com/xulihang/ImageTrans_l10n_en/releases/tag/strings>

3. 플러그인 개발

	ImageTrans는 ABPlugin으로 플러그인을 개발합니다. 기존 플러그인 코드: <https://github.com/xulihang/ImageTrans_plugins>
	
4. 의견 제안

	문서의 [issue 페이지](https://github.com/xulihang/ImageTrans-docs/issues)에서 의견을 제안하세요.


{% include comments.html %}
