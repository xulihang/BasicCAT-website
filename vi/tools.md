---
title: Công cụ
layout: page
lang: vi
---

Một số công cụ tôi đã phát triển trong quá trình làm công việc dịch thuật:


1. XLSX to TMX

	Đọc trang tính đầu tiên của tệp XLSX; trang tính cần có dòng tiêu đề ghi mã ngôn ngữ, chẳng hạn zh-CN, en-US.

	Ví dụ:

	```

	zh-CN	en-US
	Hello
	```

	[Tải xuống](https://github.com/xulihang/Translation-Tools/releases/download/v1.0/XLSXToTMX.jar)

2. Aligner

	Có thể căn chỉnh từ tệp gốc và tệp đích, hoặc từ một tệp song ngữ xen kẽ câu gốc và câu dịch.

	Giới thiệu chi tiết: [Công cụ mới! Phần mềm căn chỉnh song ngữ Aligner](/zh/new-tool-bitext-aligner/)

3. PSD Localization

	Có thể trích xuất văn bản từ tệp PSD và điền lại bản dịch. Cần cài đặt Photoshop bản đầy đủ trên máy tính; hiện chỉ hỗ trợ Windows.

	[Tải xuống](https://github.com/xulihang/Translation-Tools/releases/download/v1.1/PSDLocalization.zip)

4. Image Transcriber

	Công cụ OCR hình ảnh hỗ trợ. Có thể tạo thêm tệp PSD có lớp văn bản (cần cài Photoshop trên máy tính).

	Công cụ dùng tesseract và API của Baidu để OCR. Cần đặt tesseract trong thư mục tesseract-ocr ở thư mục gốc, lưu id và secret của API Baidu vào tệp `baidu` ở thư mục gốc, mỗi dòng một giá trị.

	Đã ngừng phát triển, vui lòng dùng [ImageTrans](https://www.basiccat.org/vi/imagetrans/).

5. FileDiff

	Công cụ này hiển thị sự khác biệt giữa phiên bản cũ và mới của tệp, hỗ trợ nhiều định dạng. Nếu bạn đã sửa một tài liệu đã dịch và muốn cập nhật văn bản tương ứng trong CAT, công cụ này giúp bạn thấy sự khác biệt.

	[Mã nguồn](https://github.com/xulihang/FileDiff)

Lưu ý: để chạy các công cụ này, trước tiên hãy cài Java Runtime Environment 8.