---
title: Tài liệu Silhouette
layout: page
description: Tài liệu Silhouette.
lang: vi
---

## Hệ điều hành được hỗ trợ

* Windows 7+
* macOS 10.15+
* Linux

## Cài đặt

Đối với Windows, giải nén tệp và chạy chương trình bằng `Silhouette.exe`.

Đối với macOS, kéo ứng dụng trong tệp dmg vào thư mục `Applications` để cài đặt. Nếu hiển thị gói đã bị hỏng, hãy mở terminal và chạy lệnh sau:

```bash
sudo xattr -rd com.apple.quarantine /Applications/Silhouette.app
```

Đối với Linux, bạn có thể sử dụng các tệp trong gói zip của Windows. Cần cài đặt FFmpeg, Whisper.cpp, Java và JavaFX để chạy chương trình. Bạn có thể sử dụng [tệp mẫu](https://github.com/xulihang/Silhouette/releases/download/v1.1.0/Silhouette-Linux-template.zip) có chứa các phụ thuộc này. Sau đó, cũng cần tải xuống ONNXRuntime, giải nén các tệp so vào thư mục phần mềm: [linux-onnxruntime-1.20.0.zip](https://github.com/xulihang/onnxruntime-for-win7/releases/download/builds/linux-onnxruntime-1.20.0.zip).

## Thiết lập

Khi mở chương trình, cần nhập số đơn hàng và email để xác minh việc mua hàng. Có thể sử dụng bản dùng thử 7 ngày hoặc chế độ hạn chế để dùng thử chương trình trước.

Ngoài ra, cần hoàn thành các thiết lập khác.


1. Mô hình Whisper. Cần chọn một mô hình Whisper cho nhận dạng giọng nói. Có thể tìm liên kết tải xuống trong chương trình hoặc [tại đây](https://github.com/xulihang/Silhouette_plugins/#whisper-models).
2. Khóa API. Nếu cần sử dụng các dịch vụ dịch như ChatGPT, Google hoặc DeepL. Cần điền khóa API trong phần tùy chọn.


## Bắt đầu nhanh

Ảnh chụp màn hình của Silhouette:

![Ảnh chụp màn hình](/album/silhouette/screenshot_zh.webp){: width="1500" height="1160"}

Ở góc trên bên trái, có một trình phát video với nhiều điều khiển khác nhau.

Ở góc dưới bên trái, có một bảng hiển thị các dòng phụ đề hiện có.

Ở góc trên bên phải, có thể xem dạng sóng âm tương ứng với dòng phụ đề hiện tại và chỉnh sửa dấu thời gian và văn bản của nó.

Ở góc dưới bên phải, có thể xem kết quả của nhiều dịch vụ dịch.

Dưới đây là quy trình cơ bản để dịch tệp video/âm thanh bằng Silhouette:

1. Sử dụng menu Tệp trong thanh menu để mở tệp phương tiện và cấu hình cặp ngôn ngữ.
2. Sử dụng menu Chỉnh sửa để nhận dạng giọng nói, phát hiện hoạt động giọng nói và chỉnh sửa các dòng phụ đề.
3. Sau khi phiên âm và dịch, có thể xuất kết quả ra tệp SRT hoặc tệp txt phân tách bằng tab. Cũng có thể nhập dữ liệu từ các tệp này.





