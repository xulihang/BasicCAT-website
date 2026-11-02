---
title: Tải xuống
layout: page
permalink: /vi/download/
lang: vi
---

Vui lòng chọn bộ cài phù hợp với hệ điều hành của bạn.

### BasicCAT v1.11.0

* Windows: [32 bit](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-windows-x86.exe) / [64 bit](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-windows-x64.exe)
* macOS:  [Bản cho CPU Intel](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-mac-x64.dmg) / [Bản cho CPU Apple](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-mac-arm.dmg)
* Linux và các hệ thống khác:  [CrossPlatfroms.zip](https://github.com/xulihang/BasicCAT/releases/download/v1.11.0/BasicCAT-crossplatforms.zip)

Cũng có thể tải từ Baidu NetDisk: [liên kết](https://pan.baidu.com/s/1HmD4pJ9hIYyK9bnqINtoFQ)

Phiên bản cũ: [Releases](https://github.com/xulihang/BasicCAT/releases/)

Lưu ý cho người dùng macOS: từ macOS Catalina, tệp có thêm thuộc tính mới tên là `com.apple.quarantine`. Khi mở BasicCAT sẽ hiện thông báo ứng dụng bị hỏng. Cần xóa thuộc tính này bằng lệnh sau thì chương trình mới chạy bình thường.

```
sudo xattr -rd com.apple.quarantine /Applications/BasicCAT.app
```

### Chương trình máy chủ chia sẻ bộ nhớ dịch và thuật ngữ

*  [CloudKVS_Server.jar](https://github.com/xulihang/BasicCAT/releases/download/v1.2-beta2/CloudKVS_Server.jar)

### Plugin

Hiện nay BasicCAT có hai loại plugin: plugin bộ lọc và plugin dịch máy.

Nhấn [vào đây](https://github.com/xulihang/BasicCAT/releases/download/plugins/all_plugins.zip) để tải tất cả plugin. Bộ cài BasicCAT đã có sẵn plugin mới nhất nên thường không cần tải riêng.

Nhớ đặt các tệp jar và xml được giải nén vào thư mục plugins.

Các plugin hiện có:

Dịch máy:

* ChatGPT
* Gemini
* DeepL
* Tencent
* Niutrans
* Google
* IBM Watson
* Caiyun Xiaoyi
* Naver Papago
* Cloudtranslation (chỉ cần cấu hình tham số url, xem [tài liệu chính thức](https://cloudtranslation.com/static/api_zh-cn.html))
* Amazon (cần tải riêng: [liên kết](https://github.com/xulihang/BasicCAT/releases/download/plugins/amazon.zip))
* OpusCAT (công cụ dịch máy ngoại tuyến, [hướng dẫn](/zh/offline-machine-translation))
* Dịch máy qua trang web (trích xuất bản dịch máy từ trang web, không cần API, [giới thiệu chi tiết](https://www.basiccat.org/zh/new-plugin-machine-translation-via-web/))

Bộ lọc:

* Gettext PO

### Công cụ khác

Một số công cụ nhỏ được tạo ra để giải quyết các công việc dịch thuật: [Công cụ](/vi/tools/)
