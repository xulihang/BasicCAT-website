---
title: FAQ - ImageTrans
layout: page
lang: ko
---

ImageTrans 자주 묻는 질문을 정리한 것으로, 더 많은 질문은 [여기](https://github.com/xulihang/ImageTrans-docs/issues)에서 검색할 수 있습니다.

1. 소프트웨어는 어떤 언어를 지원하나요?

    소프트웨어 자체는 모든 언어를 지원합니다. 제한은 주로 OCR과 기계 번역에 있습니다.

    다음은 ImageTrans에서 사용하는 일부 OCR 및 기계 번역 서비스의 지원 언어 설명 페이지입니다:

    * <https://tesseract-ocr.github.io/tessdoc/Data-Files-in-different-versions.html>
    * <https://cloud.google.com/vision/docs/languages>
    * <https://cloud.google.com/translate/docs/languages>

2. 세로쓰기 일본어도 지원하나요?

    유다오, 바이두, 구글, mangaOCR, tesseract, Windows 10 기본 OCR 모두 세로쓰기 일본어를 인식할 수 있습니다. ImageTrans는 세로쓰기 이미지를 가로쓰기로 변환하는 기능도 제공하여, 가로쓰기 일본어만 인식하는 OCR 엔진도 세로쓰기 일본어를 인식할 수 있게 합니다.

3. 개인용 버전과 상업용 버전은 무엇이 다른가요?

    현재 두 버전은 기능상 차이가 없습니다. 상업용 버전은 주로 상업 번역 업무에 사용하는 회사를 대상으로 하며, 구매 후 5대의 기기에서 사용할 수 있습니다.

4. 이 가격은 매달 내는 비용인가요, 아니면 일회성 구매 비용인가요?

    구매한 버전은 평생 사용할 수 있으며 6개월 동안 무료 업데이트를 지원합니다.

5. 소프트웨어는 어떤 플랫폼에서 실행되며, Linux도 지원하나요?

    ImageTrans는 JavaFX로 개발된 크로스 플랫폼 애플리케이션으로, Windows, macOS, Linux에서 실행할 수 있습니다. 이 소프트웨어는 OpenCV에 의존하며, 이를 위해 Windows, macOS, Linux용 런타임 라이브러리를 별도로 제공합니다.

6. 기계 번역 결과가 원문과 같은 이유는 무엇인가요?

    프로젝트 설정에서 먼저 번역할 언어 쌍을 지정해야 합니다.

7. OCR과 기계 번역 API란 무엇인가요? 어떻게 신청하나요?

    API는 응용 프로그램 인터페이스(Application Programming Interface)의 약자입니다. 구글, 마이크로소프트 등의 기업은 자사가 개발한 OCR과 기계 번역을 API 형태로 공개하여 다른 소프트웨어에서 호출할 수 있게 합니다. ImageTrans는 일반적인 OCR 및 기계 번역 API를 통합하고 있습니다. 이러한 API는 보통 API 키를 신청해야 호출할 수 있습니다. 구체적인 방법은 각 플랫폼의 문서를 참고하세요.

    다음은 제가 인터넷에서 찾은 Google Vision의 OCR API 키 신청 튜토리얼입니다:

    <https://easyscreenocr.com/how-to-load-google-api-in-easyscreenocr-for-mac-lifetime-version/>

8. 소프트웨어는 어떤 OCR 및 기계 번역 서비스를 지원하나요?

    다음은 현재 지원하는 온라인 서비스 목록입니다

    OCR: 바이두, 유다오, 텐센트, 구글, 마이크로소프트 Azure, OCRSPACE, ABBYY Cloud, Clova

    기계 번역: 바이두, 유다오, 텐센트, 니우트랜스, 구글, 마이크로소프트, Colorful Clouds, Cloudtranslation, Papago

    ImageTrans에는 바이두, Azure, OCRSPACE 등 OCR 서비스의 키와 바이두, 텐센트, 니우트랜스 등 기계 번역 서비스의 키가 기본으로 포함되어 있습니다.

    또한 오프라인 OCR과 기계 번역도 지원합니다. 다음 질문을 참고하세요.

9. 소프트웨어를 오프라인에서 사용할 수 있나요?

    오프라인에서 사용할 수 있습니다. 다만 처음 실행할 때는 구매 여부를 확인하기 위해 인터넷에 연결해야 하며, 기록은 7일간 보관됩니다.
    
    소프트웨어는 오프라인에서 이미지를 번역할 수 있으며, 오프라인 버전 OCR과 기계 번역도 지원합니다.

    오프라인 OCR: tesseract, mangaOCR, Windows 10 기본 OCR, PaddleOCR, EasyOCR

    오프라인 기계 번역: OPUS-CAT, eztrans, Sugoi
    
    온라인 OCR과 기계 번역, 특히 기계 번역은 대체로 품질이 더 좋고 지원하는 언어도 더 다양하지만, 인터넷 연결이 필요하고 요청에 제한이 있다는 등의 문제도 있습니다.

10. 일괄 OCR 및 기계 번역 작업을 할 때 일부 상자에 결과가 없는 이유는 무엇인가요?

    온라인 OCR 및 기계 번역 서비스는 요청에 제한이 있습니다. 예를 들어 1초에 5번만 요청할 수 있습니다. ImageTrans에서는 이 문제를 피하기 위해 OCR 및 기계 번역 요청의 시간 간격을 설정할 수 있습니다.

    OCR 결과가 없는 경우에는 OCR 엔진이 글자를 인식하지 못한 것일 수도 있습니다.

11. 글자가 완전히 지워지지 않는 이유는 무엇인가요?

    텍스트 상자가 글자를 완전히 덮어야 하며, 글자 가장자리와 일정한 간격을 두어야 합니다. 글자 배경이 복잡한 경우에는 대개 수동으로 처리해야 합니다.

12. 소프트웨어에 영어 인터페이스가 있나요?

    현재 소프트웨어는 영어와 중국어 두 가지 인터페이스 언어를 지원합니다.
	
13. 텍스트 행이 병합되지 않는 이유는 무엇인가요?

	여러 가지 원인이 있습니다.

	1. 기본 증가 높이 또는 너비가 너무 작은 경우로, 값을 조금 더 크게 설정해야 합니다(일반적으로 텍스트 행의 높이).
	2. 텍스트 영역 사이에 간격이 있어 병합에 영향을 줍니다. 처리 방법은 여러 가지가 있습니다:

		* 확장 픽셀 값을 줄이기
		* 수동으로 병합
		* 간격 존재 여부 판단 해제
		
    예시 이미지:
	
	![](/album/unmerged.jpg){: width="287" height="350"}
	
	병합 후:
	
    ![](/album/merged.jpg){: width="289" height="335"}



{% include comments.html %}
