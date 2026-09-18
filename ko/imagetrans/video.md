---
title: ImageTrans 동영상 튜토리얼과 데모
layout: page
lang: ko
---

## 동영상 튜토리얼과 데모

### 시작하기

<iframe src="//player.bilibili.com/player.html?aid=89725886&cid=153246062&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

### 일본어 만화 처리하기

<iframe src="//player.bilibili.com/player.html?aid=373454146&bvid=BV1Uo4y1Z7Wo&cid=283625204&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

단계별 수동 번역 외에도 클릭 한 번으로 자동 번역하는 것도 지원합니다. [데모](https://www.bilibili.com/video/BV1Uo4y1Z7Wo?p=4).

### 텍스트 영역 감지

<iframe src="//player.bilibili.com/player.html?aid=89974961&cid=153667812&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>	

### 번역문 채워 넣기

<iframe src="//player.bilibili.com/player.html?aid=89974961&cid=153668149&page=2" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

### 말뭉치 검색과 의성어 검색

<iframe src="//player.bilibili.com/player.html?aid=90795736&cid=155049012&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

### Chrome 이미지 번역 확장 프로그램

<iframe src="//player.bilibili.com/player.html?aid=458404487&bvid=BV1E5411p73K&cid=276586632&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

[Chrome 확장 프로그램](https://github.com/xulihang/ImageTrans_chrome_extension)을 사용하면 웹 페이지의 이미지를 바로 번역할 수 있습니다.

### 자동 번역 서버

<video src="https://github.wuyanzheshui.workers.dev/xulihang/BasicCAT-website/releases/download/attachments/imagetrans_server_fastmode.mp4" controls="controls">
사용하시는 브라우저는 video 태그를 지원하지 않습니다.
</video>

이 서버를 사용하면 웹 페이지에서 온라인으로 ImageTrans를 호출할 수 있고, 이미지마다 처리 매개변수를 조정할 수 있습니다. 위 동영상은 빠른 번역 모드로, 이미지 한 장을 번역하는 데 10초도 걸리지 않습니다.

현재 두 가지 서버 버전이 있습니다. 버전 1은 로컬 ImageTrans에 의존하며 결과가 좋지만 하루에 5회만 번역할 수 있습니다. 버전 2는 로컬 ImageTrans에 의존하지 않고 기능은 제한적이지만, 자신의 API 키를 사용할 수 있고 요청 횟수 제한이 없습니다.

기계 번역과 OCR의 언어 매개변수는 수동으로 설정해야 하며, 기본 방향은 중국어에서 영어입니다.

자동 번역 결과가 항상 만족스러운 것은 아니며 사람이 세밀하게 조정해야 한다는 점에 유의하세요. 이런 조정을 지원하는 것이 ImageTrans의 큰 특징입니다.

{% include comments.html %}
