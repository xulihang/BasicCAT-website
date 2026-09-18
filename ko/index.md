---
layout: default
title: "홈"
description: BasicCAT는 오픈 소스 컴퓨터 보조 번역 소프트웨어입니다
lang: ko
---



<div class="home">
	<section class="site-header">
		<h1 class="smallcap"><a class="site-title" href="{{ '/' | prepend: site.baseurl | prepend: site.url }}">BasicCAT</a></h1>
		{% include nav.html %}
		{% include intro.html %}
	</section>
</div>


BasicCAT는 번역가에게 간단하고 실용적인 번역 도구를 제공하는 것을 목표로 하는 오픈 소스 무료 컴퓨터 보조 번역 소프트웨어입니다. 이름을 BasicCAT로 지은 데에는 두 가지 이유가 있습니다. 하나는 사용하기 간단하고 쉽기 때문이고, 다른 하나는 Basic 언어로 작성되었기 때문에 일반인도 얼마간 배우면 익힐 수 있어 BasicCAT 소스 코드를 바탕으로 자신에게 필요한 소프트웨어로 고쳐 쓸 수 있기 때문입니다.

BasicCAT의 설계 원칙은 번역가의 시선 이동을 최대한 줄이고 번역문 편집에 집중할 수 있도록 하는 것입니다. 기계 번역, 선택한 단어의 뜻 찾기, 맞춤법 오류는 모두 입력창 아래에 드롭다운 목록 형태로 표시됩니다.

![데모](/album/demo.gif)

BasicCAT은 다음과 같은 기능을 갖추고 있어 번역가가 번역 작업을 수월하게 완수할 수 있도록 돕습니다:

* 번역 메모리
* 용어 관리
* 언어 검사
* 선택한 단어의 뜻 찾기
* 빠른 채우기
* 자동 교정
* 대화형 기계 번역
* 외부 교정을 위한 Word 내보내기
* 이중 언어 문단 대조 파일 내보내기
* 세그먼트 분할 및 병합
* 다양한 온라인 사전 호출
* 주요 기계 번역 서비스의 API 호출
* 번역 메모리와 기계 번역을 이용한 전체 텍스트 사전 번역 지원
* 주요 원본 파일 형식 지원: txt, idml, xliff, gettext po
* 번역 메모리 표준 TMX, 용어 관리 표준 TBX, 세그먼트 분할 표준 SRX 지원
* Git을 이용한 버전 관리

링크:

* [다운로드](https://www.basiccat.org/ko/download)
* [릴리스 노트](https://www.basiccat.org/ko/releasenote)
* [문서](https://docs.basiccat.org/en/latest/)

만화나 이미지를 번역해야 한다면 [ImageTrans](/ko/imagetrans/)를 사용하세요.

음성·영상을 번역해야 한다면 [Silhouette](/ko/silhouette/)를 사용하세요.

더 많은 제품은 [제품 목록](/ko/products/)을 참고하세요.

![스크린샷](/album/main.png)
