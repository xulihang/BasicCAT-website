---
title: Ghi chú phát hành của Silhouette
layout: page
description: Ghi chú phát hành của Silhouette.
lang: vi
---

<style>
.post-content h2 {
  font-size: 1.5rem;
}
</style>

## v1.6.2 (2026/08/30)

* Cập nhật plugin dịch của ChatGPT và DeepSeek
* Thêm plugin LLM miễn phí
* Sửa lỗi khi tách văn bản, văn bản dịch sử dụng nhầm văn bản gốc


## v1.6.1 (2026/05/01)

* Thêm FunASR
* Sửa lỗi phân tích SRT xuất ra thất bại khi kết quả nhận dạng chỉ có chữ số
* Sửa lỗi tùy chọn cỡ chữ phụ đề không có hiệu lực khi phát tệp âm thanh
* Sửa lỗi khi nhấn phím cách hoặc di chuyển chuột trong hộp văn bản sẽ chuyển đổi tiêu điểm

## v1.6.0 (2026/04/28)

* Thêm Qwen3-ASR
* Nhiều tùy chọn gộp dòng hơn: theo dấu câu, có kiểm tra thời gian hay không
* Tùy chọn độ lệch dưới cùng của phụ đề
* Kiểm tra xem plugin ASR đã được cài đặt hoặc đang chạy chưa
* Sửa lỗi khi mở tệp âm thanh

## v1.5.5 (2025/10/21)

* Hỗ trợ Windows 7
* Tải VLC thất bại sẽ báo lỗi
* Sửa lỗi nhấp vào dạng sóng âm để nhảy không thành công khi chưa bật dạng sóng âm
* Sửa lỗi trạng thái theo tiến độ không được khôi phục sau khi tạm dừng phát dòng đã chọn

## v1.5.4 (2025/10/19)

* Sửa lỗi báo lỗi khi nhấp chuột phải vào vùng phát khi chưa mở video
* Mặc định bao gồm VLC

## v1.5.3 (2025/07/06)

* Thêm cài đặt thời gian tua nhanh
* Thêm mục menu phát từng dòng
* Sửa lỗi

## v1.5.2 (2025/05/18)

* Thêm trình tạo video không phụ đề
* Hỗ trợ nhấp vào dạng sóng âm để nhảy tiến độ

## v1.5.1 (2025/05/11)

* Vô hiệu hóa "Theo tiến độ" khi phát phần đã chọn
* Trình căn chỉnh hỗ trợ căn chỉnh một phần văn bản
* Thêm tùy chọn phụ đề: định dạng, khớp với chiều rộng video
* Thêm trình thực thi FFmpeg
* Tùy chọn xuất mới: video có phụ đề cứng (nén bằng FFmpeg)

## v1.5.0 (2025/05/02)

* Tính năng mới: tách dòng và gộp dòng
* Trình tách câu thêm nút tự động tách câu dựa trên SRX
* Thêm chế độ tách và gộp dòng mới
* Thêm nút dịch nhanh
* Thêm cài đặt CSS cho văn bản phụ đề
* Sửa việc truyền tham số bổ sung khi nhận dạng toàn bộ tệp bằng Whisper
* Cải thiện thông báo lỗi của Whisper

## v1.4.1 (2025/04/04)

* Thêm tùy chọn nhập xuất ra TXT
* Thêm các tùy chọn liên quan đến nhập văn bản từ SRT
* Thêm plugin DeepSeek
* Tăng thời gian chờ của ChatGPT lên 2 phút

## v1.4.0 (2025/03/01)

* Thêm chuyển đổi giản thể/phồn thể
* Thêm trình trích xuất khung hình
* Thêm các mục menu nhảy và phát
* Thêm mục menu chuột phải nhận dạng phần đã chọn
* Sửa lỗi mã ngôn ngữ tiếng Trung của Whisper

## v1.3.0 (2025/02/22)

* Thêm trình căn chỉnh để hỗ trợ căn chỉnh dòng thời gian nhận dạng với văn bản có sẵn (căn chỉnh văn bản và âm thanh)
* Hỗ trợ nhập và xuất XLIFF
* Hỗ trợ nhập SRT song ngữ
* Thêm cài đặt dự án cho tham số nhận dạng giọng nói bổ sung
* Thêm mục menu hoán đổi văn bản gốc và văn bản dịch
* Tùy chọn nhận dạng giọng nói mới: không tách âm thanh
* Trên Windows, hỏi có bật GPU hay không ở lần khởi động đầu tiên
* Các sửa lỗi khác

## v1.2.0 (2025/02/09)

* Thêm tùy chọn phát chính xác phần đã chọn
* Thêm nhập giọng nói
* Thêm trình tách câu
* Trình dịch hàng loạt hỗ trợ xuất SRT
* Hỏi phạm vi cần điều chỉnh trước khi điều chỉnh dòng thời gian hàng loạt
* Sửa lỗi lệch khi vẽ dạng sóng âm
* Các sửa lỗi khác

## v1.1.0 (2025/02/04)

* Thêm tùy chọn cỡ chữ phụ đề
* Thêm tùy chọn sử dụng GPU
* Thêm cài đặt dự án cho câu lệnh gợi ý
* Thêm dịch hàng loạt
* Thêm chức năng dịch chuyển toàn bộ dòng thời gian
* Thêm mục menu di chuyển dòng đã chọn lên và xuống
* Văn bản tiến độ sử dụng định dạng hh:mm:ss
* Phím tắt của macOS sử dụng phím Command
* Hỗ trợ xóa nhanh dòng đã chọn bằng phím Xóa
* Chèn dòng mới sau dòng đã chọn
* Trên macOS và Linux, nhắc rằng đường dẫn không nên có dấu cách
* Sửa lỗi căn giữa phụ đề
* Sửa lỗi bản địa hóa

## v1.0.0 (2025/01/27)

Phát hành phiên bản đầu tiên.

{% include comments.html %}

