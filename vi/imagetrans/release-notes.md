---
title: Ghi chú phát hành của ImageTrans
layout: page
lang: vi
---

<style>
.post-content h2 {
  font-size: 1.5rem;
}
</style>

## v7.0.0 (2026/11/01)

* Chuyển ag-psd sang Java để tạo PSD. Hỗ trợ tạo PSD có văn bản có thể chỉnh sửa mà không phụ thuộc vào Photoshop và trên Linux; loại bỏ sự phụ thuộc bắt buộc vào Krita khi tạo PSD raster hóa
* Đổi tên phát hiện bóng thoại thành phát hiện mô hình tùy chỉnh
* Hỗ trợ mô hình tùy chỉnh đầy đủ chức năng, chỉ một mô hình thực hiện định vị văn bản, phát hiện phân cảnh, phát hiện bóng thoại và tạo mặt nạ
* Mô hình tùy chỉnh hỗ trợ sử dụng mô hình định vị của RapidOCR
* Mô hình japanese-lines tích hợp chuyển sang dùng mô hình PPOCR được huấn luyện cho truyện tranh Nhật Bản
* Loại bỏ mô hình phát hiện phân cảnh truyện tranh Nhật Bản
* Khi không có vùng nào được chọn mà nhấn nút nhận dạng, hiển thị gợi ý thao tác
* Mặc định hỏi sử dụng mô hình phát hiện tùy chỉnh nào (nếu có nhiều mô hình)
* Cập nhật mẫu. Mẫu truyện tranh Nhật Bản mặc định dùng sắp xếp XYCut, đặt số pixel mở rộng khi xóa văn bản là 20
* Số pixel mở rộng khi xóa văn bản cũng áp dụng cho việc tạo mặt nạ
* Sửa lỗi sắp xếp XYCut có thể xóa các vùng chữ đã có
* Sửa lỗi mô tả không chính xác của một số mục menu
* Sửa lỗi khi sửa mặt nạ của một vùng có thể khiến toàn bộ mặt nạ của ảnh vẫn bị tạo lại dù không cần thiết

## v6.5.4 (2026/10/14)

* Thêm mục menu khớp chiều rộng và khớp chiều cao
* Mặc định dùng phương thức phát hiện magic code nội bộ để xác định tệp có phải WebP hay không
* Xuất PDF hỗ trợ lưu ở định dạng PDF/A
* Plugin sửa ảnh mới Resynth, chuyển từ resynthesizer của GIMP
* Sửa lỗi cuộn chuột để phóng to không có tác dụng trên Linux

## v6.5.3 (2026/10/11)

* Cập nhật plugin ChatGPT và Deepseek
* Trình điền API có thêm nút đặt lại
* Thêm mô hình nhận dạng phân cảnh truyện tranh Nhật Bản
* Cập nhật mẫu để sử dụng mô hình nhận dạng phân cảnh truyện tranh Nhật Bản
* Thêm dấu ba chấm vào các ký tự không khoảng cách mặc định của chế độ dọc
* Trên Linux, ưu tiên dùng tệp java ở đường dẫn `jre/bin/java` để khởi động chương trình
* Sửa lỗi tự khởi động ImageTrans không thành công trên Linux
* Sửa lỗi tiềm ẩn khi WebSocket gửi thông tin đến máy chủ (không thể gửi thành công thông tin trên Linux)

## v6.5.2 (2026/10/03)

* Dùng .NET Framework thay vì .NET 8 để viết dòng lệnh quét WIA, loại bỏ vấn đề phải cài thêm .NET 8 runtime
* OCR trên macOS mặc định dùng OCR phiên bản Livetext, tự động phát hiện ngôn ngữ, hỗ trợ tiếng Nhật và tiếng Trung dọc
* Thêm mục quy trình làm việc tùy chỉnh kết xuất trước
* Sửa lỗi hiển thị cỡ chữ không đúng sau khi tính toán nhằm tránh tách từ tiếng Anh

## v6.5.1 (2026/09/24)

* Hỗ trợ gọi mô hình lớn dựa trên toàn bộ ảnh để thêm văn bản gốc, bản dịch, màu sắc và thứ tự cho các vùng hiện có (được thực hiện dựa trên plugin ChatGPTOCR thông qua thao tác dùng OCR thêm văn bản cho các vùng đã có)
* Tối ưu việc định vị văn bản của OCR mô hình lớn, đồng thời hỗ trợ thêm bản dịch, màu sắc và các thông tin khác
* Quy trình làm việc tùy chỉnh dùng OCR để thêm văn bản cho các vùng hiện có hỗ trợ lưu tham số bổ sung
* Khi sắp xếp theo phân cảnh, các vùng nằm ngoài phân cảnh cũng được sắp xếp
* Sửa lỗi vượt chỉ số mảng khi sắp xếp XYCut

## v6.5.0 (2026/09/11)

* Cập nhật JRE thành [JRE26](https://download.bell-sw.com/java/26.0.2.1+1/bellsoft-jre26.0.2.1+1-windows-amd64-full.zip)
* Thêm cài đặt xuất JPEG có độ trung thực cao
* Thêm quy trình làm việc tùy chỉnh phát hiện hướng văn bản và đặt góc xoay
* Xoay node của vùng chữ thay vì xoay hình ảnh
* Trong chế độ dịch, căn chỉnh vùng đã chọn chỉ điều chỉnh vị trí của vùng bản dịch
* Với điều khiển dùng ngôn ngữ RTL, đặt NodeOrientation thành RIGHT_TO_LEFT thay vì chỉ đặt căn phải
* Thêm nhiều tùy chọn tải xuống từ máy chủ
* Sửa lỗi không kịp xóa tệp thất bại sau khi hủy tải xuống khi mạng chậm
* Sửa lỗi quên cập nhật kiểu TextArea khi tạo dự án mới
* Sửa lỗi thứ tự khi hợp nhất các từ hỗn hợp tiếng Ả Rập và không phải tiếng Ả Rập
* Sửa lỗi không bật RTL khi sắp chữ tiếng Ả Rập
* Sửa lỗi văn bản trong PDF được xuất không hỗ trợ xoay
* Sửa lỗi văn bản trong vùng bị xoay không được xoay quanh tâm
* Sửa lỗi điều chỉnh kích thước của vùng bị xoay
* Sửa lỗi báo lỗi khi tắt chế độ chữ dọc CJK
* Sửa lỗi RapidOCR xử lý chữ số Ả Rập thuần túy
* Sửa lỗi xử lý chữ số Ả Rập thuần túy khi tạo PDF tiếng Ả Rập

## v6.4.0 (2026/09/03)

* Tối ưu việc chọn phông chữ mặc định trong tùy chọn xuất PDF
* Tính năng tự động tìm phông chữ khi xuất PDF có thêm việc tìm phông trong thư mục phông chữ của thư mục người dùng Windows
* Tối ưu khoảng cách chữ trong PDF văn bản dọc được xuất
* Khi cài đặt dự án không có kiểu phông chữ, tự động phát hiện hướng văn bản khi xuất PDF tiếng Trung hoặc tiếng Nhật
* Quy trình làm việc tùy chỉnh hỗ trợ thống kê thời gian xử lý
* Đổi tất cả dịch vụ dịch mặc định thành Baidu
* Sửa lỗi chiều cao chữ không đúng trong PDF bản dịch tiếng Trung dọc được xuất
* Sửa lỗi RapidOCR đảo ngược chữ số Ả Rập
* Sửa lỗi đảo ngược chữ số Ả Rập khi tạo PDF tiếng Ả Rập

## v6.3.3 (2026/08/28)

* Thêm quy trình làm việc tùy chỉnh hợp nhất các vùng chồng lấn
* Thêm tùy chọn ngôn ngữ tiếng Bồ Đào Nha (Brazil)
* Phát hiện phân cảnh dựa trên phát hiện đối tượng hỗ trợ định nghĩa tên lớp sử dụng trong `model.json` (`class_names_to_use_for_panel`)
* Sửa lỗi báo lỗi khi tạo dự án mới mà không chọn ngôn ngữ
* Sửa lỗi báo lỗi khi xuất PDF có văn bản dọc

## v6.3.2 (2026/08/21)

* Khi mở trình xóa văn bản, phương thức xóa trong cài đặt dự án sẽ được tải
* Nếu đã đặt phương thức tạo mặt nạ cho nền phức tạp hoặc phương thức sửa ảnh, khi mở trình chỉnh sửa mặt nạ hoặc trình xóa văn bản sẽ dùng phương thức chọn theo vùng
* Việc phát hiện hướng văn bản và đặt kiểu chữ chỉ được thực hiện khi ngôn ngữ đích hỗ trợ chữ dọc
* Trình tạo chứng chỉ sẽ lấy IP trước và dùng thư mục cert của phần mềm làm thư mục mặc định
* Sửa lỗi trình tạo chứng chỉ không sử dụng đúng IP đã đặt

## v6.3.1 (2026/08/13)

Sửa lỗi khi mở dự án bằng dòng lệnh, chương trình thực hiện các thao tác tiếp theo mà không đợi giao diện điều chỉnh xong và chọn xong ngôn ngữ OCR.

## v6.3.0 (2026/08/06)

* Gói cài đặt mặc định bao gồm mô hình Lama Inpaint ONNX lượng tử hóa int8 với kích thước cố định 512x512
* Loại bỏ MIGAN Inpaint khỏi gói cài đặt
* Loại bỏ mô hình phân loại ngôn ngữ hình ảnh khỏi gói cài đặt
* Tối ưu việc sử dụng Lama Inpaint trong mẫu CG
* Thêm hỗ trợ mô hình RF-DETR
* Thêm quy trình làm việc tùy chỉnh loại bỏ các vùng không bị xoay
* Thêm cài đặt dự án cho phép tách từ khi từ dài hơn độ dài này
* Tải mô hình từ xa hỗ trợ kiểm tra SHA256
* RapidOCR tự động tải mô hình từ mạng, không hiển thị thông báo mô hình chưa cài đặt khi chuyển ngôn ngữ
* Gói cài đặt mặc định bao gồm từ điển tiếng Thái và tiếng Ả Rập của RapidOCR
* Khi xóa văn bản theo vùng, nếu các vùng chồng lấn, hợp nhất trước rồi mới xóa theo vùng, cải thiện vấn đề hiệu quả xóa chữ kém do chồng lấn
* Khi dùng mangaOCR nhận dạng toàn bộ ảnh, nếu không có mô hình OCR mit48px, dùng Rapid để nhận dạng văn bản dạng dải dài
* Sửa lỗi ROI không nhất quán khi kiểm tra ảnh có phức tạp hay không trong quá trình tạo mặt nạ và xóa văn bản
* Sửa lỗi dịch trước bỏ qua ảnh không có văn bản

## v6.2.2 (2026/08/01)

* PPDocLayout v3 hỗ trợ phiên bản mac mlx
* Dùng biến toàn cục lưu phát hiện phân cảnh để tránh tải mô hình thường xuyên
* Loại bỏ khoảng trắng thừa trong bản dịch tiếng Anh của phát hiện đối tượng
* Dịch trước bỏ qua ảnh không có văn bản


## v6.2.1 (2026/07/28)

* Loại bỏ `Character.UnicodeBlock.GENERAL_PUNCTUATION` (ví dụ …) khỏi điều kiện xác định ký tự chữ Hán
* Cập nhật chênh lệch tọa độ dọc tối đa trong mẫu thành 2000
* Sửa lỗi thông báo lỗi tải lên máy chủ không truyền tên
* Sửa lỗi máy chủ có thể đã đặt trạng thái chạy thành false trước khi tải lên xong ảnh đã dịch

## v6.2.0 (2026/07/26)

* Thêm mẫu máy chủ thông dụng
* Khi tạo dự án dựa trên mẫu cặp ngôn ngữ thông dụng, tự động chọn OCR phù hợp
* Thêm quy trình làm việc tùy chỉnh phát hiện ô trong phân loại bảng
* Viết lại toàn bộ logic xác định vùng chữ thuộc phân cảnh nào
* Dùng mặt nạ văn bản để tối ưu việc xác định ảnh nền phức tạp
* Đổi tên mô hình mặc định của Deepseek thành deepseek-v4-flash
* Quy trình làm việc phát hiện phân cảnh và dịch hỗ trợ định nghĩa tham số cho từng mục
* Tối ưu việc xác định vùng đảo màu khi tạo mặt nạ
* Máy chủ hỗ trợ đặt mật khẩu máy chủ từ xa (ws_secret)
* Máy chủ hỗ trợ tải cài đặt dự án dành riêng cho ngôn ngữ (src.json)
* Tính năng máy chủ tự động dọn dẹp ảnh có thêm việc dọn dẹp ảnh thu nhỏ
* Sửa lỗi xung đột phiên bản onnxruntime của oneocr

## v6.1.0 (2026/07/24)

* Thêm chức năng quét mã vạch dựa trên ZXingCPP
* Thêm chế độ chạy nền, hỗ trợ chạy máy chủ ở chế độ nền, quá trình dịch không hiển thị cửa sổ
* Đặt thời gian chờ chạy quy trình làm việc ở chế độ hàng loạt là 10 phút
* Máy chủ hỗ trợ tải mẫu quy trình làm việc tùy chỉnh dành riêng cho ngôn ngữ (custom_workflow_src-tgt.json)
* Sửa lỗi quy trình làm việc tùy chỉnh trên máy chủ trực tiếp sử dụng ảnh cùng tên đã xuất trước đó
* Sửa lỗi ảnh được tải trên máy chủ có thể không hợp lệ

## v6.0.3 (2026/07/16)

* Thêm chức năng nhận dạng bảng
* Thao tác hợp nhất các vùng trong phân cảnh không hợp nhất các vùng trong bảng

## v6.0.2 (2026/07/11)

* Thêm menu chuột phải chỉnh sửa phân loại vào danh sách phân cảnh
* Thêm nhiều tùy chọn xuất markdown
* Thêm xuất markdown vào quy trình làm việc tùy chỉnh
* Hỗ trợ đặt trước cài đặt xuất markdown trong cài đặt dự án
* Khi mở dự án bằng dòng lệnh để thực thi quy trình làm việc tùy chỉnh, đọc preferences.conf, settings.json, setOCRBasedOnLang tại dự án, nhất quán với chế độ tạo dự án từ mẫu
* Loại bỏ hậu tố .itp khỏi tên tệp ban đầu trên mac để tránh trùng lặp
* Cập nhật thư mục kết quả trung gian của mẫu thành `intermediateResults`
* Hỗ trợ sử dụng [ImageTrans-skills](https://github.com/xulihang/ImageTrans-skills), gọi thông qua các tác nhân như Xiaolongxia, Claude
* Sửa lỗi hiển thị hộp thoại hoàn thành khi gọi xuất PDF bằng dòng lệnh

## v6.0.1 (2026/07/07)

* Tối ưu việc xử lý tránh đầu dòng và tránh cuối dòng đối với dấu câu của công cụ chữ dọc
* Việc đánh giá tham số server khi gọi máy chủ bằng dòng lệnh chuyển từ chứa thành bằng
* Khi trích xuất ảnh từ PDF, chuyển TIFF thành JPG
* Thêm cài đặt dự án phát hiện bóng thoại hợp nhất các vùng chồng lấn
* Khi hợp nhất các vùng bóng thoại chồng lấn, kiểm tra xem có cùng phân loại hay không
* Thêm hỗ trợ PPDocLayout v3
* Sửa lỗi khởi tạo lại cùng một mô hình sau khi chọn mô hình phát hiện bóng thoại
* Sửa lỗi rò rỉ bộ nhớ của PPDocLayout
* Sửa lỗi tính toán chiều rộng của công cụ chữ dọc không xét đến nét viền
* Sửa lỗi bán kính nét viền không đúng của vùng chữ dọc bị xoay
* Sửa lỗi phạm vi tiến độ không đúng khi nhập PDF theo phạm vi chỉ định

## v6.0.0 (2026/07/03)

* Văn bản ngang dùng cách tính cỡ chữ chính xác
* Tùy chọn API có thể tùy chỉnh trong cài đặt dự án
* Sửa lỗi cỡ chữ tự động của vùng chữ dọc bị xoay

## v5.24.0 (2026/06/30)

* Không lưu góc xoay nhỏ hơn 0.01
* Thêm cài đặt dự án cho công cụ chữ dọc về dấu câu không nằm ở đầu dòng (tránh đầu dòng và cuối dòng)
* Thêm mục quy trình làm việc tùy chỉnh mở rộng vùng bản dịch và thu nhỏ vùng bản dịch
* Trong chế độ sắp chữ, thao tác mở rộng và thu nhỏ vùng điều chỉnh vị trí bản dịch
* Tối ưu hiệu quả tính cỡ chữ tự động của công cụ chữ dọc
* Sửa lỗi dao động trong tính cỡ chữ tự động của công cụ chữ dọc
* Sửa lỗi xử lý văn bản nhiều dòng của cỡ chữ tự động khi công cụ chữ dọc không bật tự động xuống dòng
## v5.23.0 (2026/06/29)

* Plugin OCR mới: oneocr (OCR ảnh chụp màn hình Windows 11)
* OCR thực hiện chia nhỏ ảnh trước rồi mới thực hiện thao tác thu phóng
* Sửa lỗi căn giữa theo chiều dọc của công cụ chữ dọc không có tác dụng
* Sửa lỗi tọa độ nhận dạng không đúng của truyện tranh dạng dải có chiều rộng nhỏ

## v5.22.1 (2026/06/23)

* Khi gọi bằng dòng lệnh, hỗ trợ sử dụng thông tin tài khoản đã điền để xác thực
* Hỗ trợ dùng hình ảnh cung cấp ngữ cảnh cho bản dịch (cần dùng mô hình lớn có thị giác)
* Hỗ trợ dùng văn bản của các trang trước cung cấp ngữ cảnh cho bản dịch

## v5.22.0 (2026/06/18)

* Thêm cài đặt dự án OCR về chiều rộng tối thiểu, nếu ảnh nhỏ hơn chiều rộng này thì phóng to đến chiều rộng đó
* Sửa lỗi không xóa tệp tải xuống thất bại sau khi máy chủ tải xuống thất bại
* Sửa lỗi máy chủ khởi động thất bại vẫn thông báo khởi động thành công

## v5.21.3 (2026/06/16)

Cập nhật Rapid OCR thành PPOCRv6

## v5.21.2 (2026/06/10)

* Tối ưu hiển thị pinyin tiếng Trung trong HTML được xuất
* Máy chủ hỗ trợ sử dụng chứng chỉ tự ký

## v5.21.1 (2026/06/04)

* Hỗ trợ đặt kích thước đường viền của hộp văn bản đang được kích hoạt
* Hỗ trợ nhập TIFF
* Phân cảnh hỗ trợ lưu văn bản
* Thêm quy trình làm việc tùy chỉnh tạo vùng bằng phân cảnh
* Tối ưu tính nhất quán của hiệu quả tự động căn chỉnh độ nghiêng của công cụ chữ dọc ở các cỡ chữ khác nhau
* Sửa lỗi mã hóa có thể xảy ra khi đọc từ điển của OCR mit48px

## v5.21.0 (2026/05/30)

* Thêm tùy chọn ghi nhớ cửa sổ chỉnh sửa mặt nạ
* Tối ưu tính nhất quán của hiệu quả tự động căn chỉnh độ nghiêng của công cụ chữ dọc ở các cỡ chữ khác nhau
* Mô hình phát hiện bóng thoại có thể chỉ định lớp dành riêng cho phân cảnh
* Sửa lỗi không thể khởi động tiến trình độc lập để xử lý sau khi khởi động máy chủ bằng dòng lệnh

## v5.20.0 (2026/05/23)

* Công cụ chữ dọc:
   * Sửa căn giữa của ký tự
   * Thêm âm ngắt tiếng Nhật vào các ký tự căn phải
* Máy chủ:
   * Không dọn dẹp ảnh khi đang dịch
   * Thêm tùy chọn khởi động lại định kỳ và sử dụng tiến trình độc lập
   * Lưu cài đặt máy chủ
   * Hỗ trợ mở trực tiếp ImageTrans bằng dòng lệnh để kết nối với máy chủ
* Trình chỉnh sửa mặt nạ và trình xóa văn bản:
   * Kiểm tra plugin đã cài đặt hoặc đang chạy hay chưa khi chọn phương thức
   * Thêm chọn theo vùng vào danh sách phương thức xử lý, mặc định không tự động chọn dựa trên nền có phức tạp hay không
* Quy trình làm việc tùy chỉnh hỗ trợ sử dụng nhiều tiến trình thực thi đồng thời để tối ưu tốc độ xử lý
* Sửa lỗi gọi mẫu bằng dòng lệnh để xử lý tệp không hỗ trợ ảnh đơn
* Sửa lỗi tự khởi động thất bại trên macOS


## v5.19.1 (2026/05/16)

* Cập nhật plugin DeepSeek và ChatGPT để hỗ trợ đặt trường bổ sung
* DeepSeek mặc định không bật chế độ suy nghĩ
* Thêm tùy chọn hiển thị số thứ tự kiểu phông chữ [#issue1066](https://github.com/xulihang/ImageTrans-docs/issues/1066)

## v5.19.0 (2026/05/09)

* Hỗ trợ đặt độ lệch ngang và dọc cho ký tự của công cụ chữ dọc [#issue1063](https://github.com/xulihang/ImageTrans-docs/issues/1063)
* Chế độ gọi mẫu bằng dòng lệnh hỗ trợ truyền thêm cài đặt dự án và tùy chọn
* Tối ưu việc gọi bằng dòng lệnh
* Sửa lỗi tạo bản sao không dùng sao chép sâu
* Sửa lỗi trích xuất ảnh png từ PDF ở chế độ trích xuất ảnh
* Sửa lỗi xuất kết quả dịch khi bật chế độ sắp chữ có thể khiến tọa độ vùng chữ bị thay đổi [#issue839](https://github.com/xulihang/ImageTrans-docs/issues/839)

## v5.18.0 (2026/04/19)

* Bộ nhớ dịch:
   * Thêm cài đặt dự án bộ nhớ dịch
   * Hỗ trợ đặt có sử dụng văn bản của dự án hay không
   * Hỗ trợ nhập và sử dụng bộ nhớ dịch bên ngoài (dựa trên SQLite)
* Trình đọc màn hình:
   * Hỗ trợ sử dụng bộ nhớ dịch
   * Sửa lỗi vẫn gọi phiên âm khi chưa bật phiên âm
* Thêm hỗ trợ gọi plugin OCR thực hiện nhận dạng đồng thời
* Trình trích xuất phụ đề cứng:
   * Hỗ trợ sử dụng phát hiện bóng thoại
   * Tối ưu thao tác nhận dạng đồng thời bằng plugin OCR
   * Thêm độ lệch bên trái vào điều kiện nhận dạng khung hình chính
   * Thêm thao tác đồng nhất vùng chữ của các ảnh có văn bản gần giống nhau khi nhận dạng khung hình chính
* Cài đặt dự án mới cho phát hiện bóng thoại: mở rộng hình ảnh
* Các tối ưu khác

## v5.17.0 (2026/04/11)

* Trình đọc màn hình:
   * Điều chỉnh bố cục
   * Hỗ trợ hiển thị phiên âm
   * Hỗ trợ đọc thành tiếng
   * Hỗ trợ sử dụng quy trình làm việc tùy chỉnh
   * Nhận dạng tự động sẽ đợi hình ảnh ổn định rồi mới chụp
   * Nếu chỉ bật một công cụ dịch máy, không hiển thị tên công cụ
   * Sửa lỗi khi lưu kết quả vào dự án
* Tải cài đặt trước đó khi mở trình đọc
* Dịch máy hỗ trợ dịch xuyên trang [#issue1055](https://github.com/xulihang/ImageTrans-docs/issues/1055)
* Điều chỉnh tùy chọn dịch máy

## v5.16.0 (2026/03/22)

* Thêm chức năng chú thích pinyin tiếng Trung và kana tiếng Nhật
* Định dạng xuất mới: HTML đơn
* Thêm thao tác tạo PDF đã xóa văn bản
* Thêm tùy chọn hiển thị văn bản gì trong danh sách hộp văn bản [#1052](https://github.com/xulihang/ImageTrans-docs/issues/1053)
* Trình quản lý ảnh hỗ trợ thêm ảnh mới được thêm vào thư mục [#1053](https://github.com/xulihang/ImageTrans-docs/issues/1053)
* Thêm OCR mit48px_ctc phiên bản có định vị
* mangaOCR mặc định xử lý ảnh thang độ xám để nâng cao tỷ lệ nhận dạng văn bản màu
* Sửa lỗi tạo lại phân cảnh bằng phương thức gom cụm văn bản thất bại khi đã có phân cảnh



## v5.15.1 (2026/03/17)

* Tối ưu hỗ trợ khoảng cách chữ âm của công cụ chữ dọc
* Thêm hỗ trợ phát hiện màu đường viền
* Điều khiển cài đặt kích thước đa dụng của trình soạn thảo rich text hỗ trợ số âm
* Sửa lỗi hộp văn bản dịch bị lệch khi thu phóng
* Sửa lỗi không cập nhật kết quả trong ảnh theo thời gian thực khi điền bản dịch máy bằng dịch nhanh và dịch hỗ trợ trong chế độ sắp chữ

## v5.15.0 (2026/03/14)

* Thêm trình xem ảnh thu nhỏ
* Thêm trình điều hướng hình ảnh
* Thêm trình quản lý ảnh (gọi bằng chuột phải trên danh sách ảnh)
* Hỗ trợ điều chỉnh thứ tự ảnh
* Loại bỏ dấu phẩy trong số thứ tự khỏi tên ảnh PDF được nhập
* Tối ưu tốc độ chuyển đổi ảnh
* Bỏ qua ảnh không có văn bản khi dịch nhiều câu
* Sửa lỗi trình quản lý ảnh đã dịch không lọc được ảnh đã xuất bản dịch [#issue1044](https://github.com/xulihang/ImageTrans-docs/issues/1044)

## v5.14.0 (2026/03/06)

* Nhập PDF:
   * Hỗ trợ chọn phạm vi trang
   * Khi nhập PDF ở chế độ trích xuất ảnh, nếu gặp trang không có ảnh thì dùng chế độ kết xuất
* Xuất PDF:
   * Hỗ trợ tìm tệp phông chữ tương ứng theo tên phông chữ
   * Hỗ trợ chọn phông chữ TTC
   * Phông chữ mặc định trên mac sử dụng Arial Unicode
   * Nếu hiển thị văn bản dọc, thay thế các ký tự dấu câu như ngoặc bằng ký tự dùng cho chữ dọc, thay thế ký tự nửa độ rộng bằng ký tự toàn độ rộng
   * Tối ưu hiệu quả hiển thị văn bản dọc
* Tăng thời gian chờ của plugin ChatGPTOCR
* Thêm plugin OllamaOCR
* Thêm hậu tố eSCL vào tên máy quét eSCL
* Sửa lỗi hiệu quả tự động điều chỉnh kích thước chữ dọc không tốt khi không bật tự động xuống dòng

## v5.13.0 (2026/02/23)

* Quét tài liệu:
   * Trên Windows hỗ trợ gọi TWAIN
   * Hỗ trợ dùng bộ quét xuyên sáng để quét phim, slide và các tài liệu khác
   * Báo lỗi khi dùng WIA nhưng máy cục bộ chưa cài .NET 8
* Giải phóng ảnh đã mở khi đóng dự án
* Thao tác cắt hỗ trợ lưu ảnh thành ảnh mới
* Thao tác chỉnh sửa ảnh mới: đảo màu, loại bỏ ám màu phim

## v5.12.0 (2026/02/14)

* Quét tài liệu:
   * WIA, ICA, SANE hỗ trợ bộ nạp giấy, quét nhiều trang và quét hai trang
   * WIA, ICA, SANE hỗ trợ hủy tác vụ quét
   * SANE hỗ trợ xem trước kết quả quét của từng ảnh theo thời gian thực
   * macOS hỗ trợ gọi SANE để quét
   * Hỗ trợ đặt vùng quét
   * Dùng API Windows Runtime hiện đại để gọi WIA
   * Ảnh đen trắng được lưu ở định dạng PNG 1 bit để tiết kiệm dung lượng
   * Tự động xóa tệp quét tạm khi đóng cửa sổ quét tài liệu
   * Thêm nút xóa ảnh
   * Sửa lỗi lưu tệp không đúng khi quét nhiều trang liên tiếp bằng eSCL
* Thêm chức năng đo khoảng cách
* Thêm menu chuột phải chỉnh sửa ảnh
* Hỗ trợ đặt cỡ chữ có phần thập phân, đổi bước điều chỉnh phông chữ mặc định thành 0.5 [#issue1038](https://github.com/xulihang/ImageTrans-docs/issues/1038)
* Cỡ chữ trên thanh công cụ hỗ trợ điều chỉnh bằng con lăn chuột [#issue1038](https://github.com/xulihang/ImageTrans-docs/issues/1038)
* Loại bỏ dấu phẩy trong số hàng nghìn khỏi tên ảnh được dán
* Hỗ trợ chọn dùng PNG hay JPG dựa trên đường dẫn của ảnh được dán
* Sửa lỗi URL gửi thông báo lỗi không đúng khi dùng máy chủ từ xa


## v5.11.1 (2026/02/07)

* Quét tài liệu hỗ trợ quét nhiều trang
* Quét tài liệu hỗ trợ sử dụng bộ nạp giấy (chỉ eSCL)
* Sửa lỗi cài đặt chế độ màu khi quét eSCL không có tác dụng
* Chữ nghiêng giả dùng phép biến đổi affine thay vì phép biến đổi phối cảnh để giải quyết vấn đề chiều rộng và chiều cao không đúng khi dùng đồng thời với chữ đậm giả
* Hỗ trợ đặt tệp server-mode ở thư mục gốc để tránh hộp thoại báo lỗi khi dùng máy chủ

## v5.11.0 (2026/01/31)

* Quét tài liệu hỗ trợ gọi giao diện quét của hệ thống (WIA, ICA, SANE)
* Quét tài liệu sẽ lưu danh sách máy quét đã tìm thấy trước đó
* PDF hỗ trợ hiển thị độ nét cao
* Mẫu tài liệu tắt cài đặt xóa văn bản theo vùng và phát hiện màu trong phát hiện phân cảnh
* Thao tác tải tile khi thu phóng ảnh sử dụng debounce
* Xuất TXT hỗ trợ chọn xuất văn bản gốc hay văn bản gốc kèm bản dịch
* Nhập TXT hỗ trợ nhập chỉ bản dịch
* Sửa lỗi không cập nhật đúng hình ảnh sau khi xoay ảnh


## v5.10.1 (2026/01/25)

* Thêm chức năng quét tài liệu (dựa trên eSCL)
* Thêm chức năng xem thông tin ảnh
* Cập nhật plugin dịch Papago
* Sửa lỗi chế độ chỉnh sửa dọc không hiển thị tùy chọn cài đặt kích thước rich text [#issue1032](https://github.com/xulihang/ImageTrans-docs/issues/1032)

## v5.10.0 (2026/01/17)

* Thêm hỗ trợ YOLO 26 [#issue1026](https://github.com/xulihang/ImageTrans-docs/issues/1026)
* Thêm hỗ trợ điều chỉnh độ lệch ngang và độ lệch dọc cho văn bản ngang [#issue826](https://github.com/xulihang/ImageTrans-docs/issues/826)
* Thêm hỗ trợ điều chỉnh khoảng cách chữ cho văn bản ngang
* Thêm hỗ trợ điều chỉnh khoảng cách chữ cho rich text
* Đổi khoảng cách chữ mặc định thành 0 và lưu trữ với tên tracking
* Trình soạn thảo rich text hỗ trợ đặt khoảng cách chữ, độ lệch ngang và độ lệch dọc
* Sửa lỗi không cập nhật kết quả kết xuất sau khi đặt định dạng bằng trình soạn thảo rich text
* Sửa lỗi quy trình làm việc tùy chỉnh có thể bị treo khi thực hiện hợp nhất vùng [#issue1029](https://github.com/xulihang/ImageTrans-docs/issues/1029)
* Sửa lỗi thu phóng bằng phím tắt không có tác dụng

## v5.9.0 (2026/01/13)

* Công cụ chữ dọc hỗ trợ căn giữa và căn đáy
* Thêm phát hiện màu ở cấp độ ký tự
* Hỗ trợ đặt kiểu rich text cho văn bản gốc
* Thêm cài đặt kiểu căn giữa theo chiều ngang
* Đổi chênh lệch tọa độ dọc tối đa mặc định thành 2000

## v5.8.3 (2026/01/05)

* Tối ưu việc xử lý góc bị phát hiện sai khi xoay ảnh dựa trên thông tin xoay của vùng chữ
* Tối ưu hỗ trợ kênh alpha khi xoay ảnh dựa trên thông tin xoay của vùng chữ
* Tối ưu việc xử lý các vùng chồng lấn và nằm ngoài ảnh của phát hiện bóng thoại
* Tăng độ linh hoạt khi áp dụng mặt nạ OCR
* Hỗ trợ nhập dấu trang từ trình đọc Chaoxing
* Sửa lỗi báo lỗi khi xóa trống ảnh
## v5.8.2 (2026/01/03)

* Dùng độ chính xác kép để lưu thông tin xoay của vùng chữ
* Thêm các thao tác xoay ảnh dựa trên thông tin xoay của vùng chữ
* Thêm các thao tác liên quan đến siêu phân giải
* Đổi độ chính xác điều chỉnh khi xoay ảnh ở bất kỳ góc nào thành 0.1
* Hỗ trợ gọi trình đọc Chaoxing để nhập tệp định dạng PDZ
* Xuất PDF hỗ trợ thêm nhiều cài đặt tham số xử lý ảnh
* Thêm dấu chấm phẩy và dấu hai chấm vào danh sách cần chuyển thành dấu câu tiếng Trung
* Sửa lỗi vẫn dùng ảnh trước đó để thực hiện OCR và các thao tác khác sau khi chỉnh sửa ảnh


## v5.8.1 (2025/12/30)

* Giải phóng ảnh được hiển thị dạng tile khi ảnh không còn hiển thị
* Thêm hỗ trợ bmp vào việc tải ảnh dạng tile

## v5.8.0 (2025/12/28)

* Dùng tile để tối ưu việc duyệt ảnh cực lớn [#issue739](https://github.com/xulihang/ImageTrans-docs/issues/739)
* Tạo ảnh thu nhỏ cho ảnh cực lớn để tăng tốc tải
* Trình chỉnh sửa mặt nạ hỗ trợ dùng nút giữa chuột để chuyển chế độ chỉnh sửa [#issue1022](https://github.com/xulihang/ImageTrans-docs/issues/1022)
* Sửa lỗi hộp văn bản vẫn bị ẩn sau khi lấy màu trên ảnh

## v5.7.0 (2025/12/21)

* Mô hình phát hiện đối tượng mới: mô hình phân tích bố cục [DocLayout](https://github.com/xulihang/PP_DocLayout_ONNX) của Paddle
* Thuật toán sắp xếp mới: XYCut
* Phân cảnh hỗ trợ lưu phân loại
* Thêm cài đặt và quy trình làm việc liên quan đến phân cảnh dạng biểu đồ
* Định dạng xuất mới: markdown
* Mẫu mới: tài liệu
* Cập nhật plugin DeepSeek-OCR để hỗ trợ lưu phân loại
* Hỗ trợ tạo ảnh đã xóa văn bản ở chế độ không chính xác
* Phát hiện đối tượng hỗ trợ lọc kết quả trực tiếp theo tên phân loại
* Tối ưu việc xử lý xuống dòng của bản dịch văn bản ngang khi xuất PDF

## v5.6.1 (2025/12/16)

* Dùng OCR hỗ trợ phân biệt ngôn ngữ trong ảnh là tiếng Trung hay tiếng Nhật
* Tối ưu hiệu quả thu phóng lấy chuột làm tâm
* Tối ưu hiệu năng thu phóng
* Sửa lỗi mẫu cấu hình OCR mặc định theo ngôn ngữ không xử lý tiếng Latinh


## v5.6.0 (2025/12/14)

* Hỗ trợ dùng ONNXRuntime làm công cụ phát hiện đối tượng
* Thêm chức năng Hot Folder
* Thêm chức năng phát hiện ngôn ngữ trong ảnh và phát hiện ngôn ngữ trong văn bản
* RapidOCR hỗ trợ tự động phát hiện ngôn ngữ trong ảnh
* Quy trình làm việc mới: xuất PDF, phát hiện ngôn ngữ trong ảnh để đặt OCR, phát hiện theo văn bản và đặt ngôn ngữ nguồn của dự án
* Hỗ trợ đặt trước cài đặt nhập xuất PDF và cài đặt xuất PSD
* Hỗ trợ xử lý PDF và các tệp khác bằng dòng lệnh
* Thêm cài đặt dự án hợp nhất dựa trên phân cảnh
* Thêm cài đặt dự án hợp nhất thông tin kênh Alpha khi sửa ảnh
* Thêm cài đặt dự án về phương thức tạo mặt nạ và phương thức sửa ảnh cho ảnh nền phức tạp
* Sửa lỗi thêm ảnh vào thư mục dự án bằng cách kéo thả thất bại
* Sửa lỗi sao chép văn bản thất bại khi không chọn xóa ngắt dòng
* Sửa lỗi máy chủ xóa cấu hình quy trình làm việc tùy chỉnh và các vấn đề khác



## v5.5.1 (2025/12/07)

* Khi nhập PDF ở chế độ trích xuất ảnh, lưu trực tiếp dữ liệu gốc trong PDF
* Sửa lỗi thao tác không kết thúc khi nhấn hủy trong quá trình nhập PDF


## v5.5.0 (2025/12/06)

* Thêm plugin sửa ảnh: OpenAI và Gemini, hỗ trợ gọi Gemini 3 Pro Image (Nano Banana) để vẽ lại ảnh
* Thêm plugin OCR: DeepSeek-OCR
* Quy trình làm việc mới: loại bỏ các vùng nằm ngoài phân cảnh
* Không hợp nhất các vùng không nằm trong cùng một phân cảnh
* Hỗ trợ gọi plugin OCR để phân tích bố cục (thông qua phát hiện phân cảnh)
* Xuất PDF hỗ trợ nén ảnh
* Hỗ trợ thêm tệp vào dự án bằng cách kéo thả

## v5.4.0 (2025/11/29)

* Thêm cài đặt dự án không phát hiện đường phân cách ở vùng nền phức tạp
* Thêm các thao tác kiểm tra chính tả bằng plugin mô hình lớn ChatGPT
* Plugin dịch máy mới: dịch tích hợp sẵn của hệ thống macOS
* LamaInpaint trên macOS hỗ trợ gọi mô hình CoreML
* mangaOCR mặc định dùng phát hiện bóng thoại để cung cấp thông tin định vị
* RapidOCR thêm nhận dạng ở cấp độ từ
* Cắt ảnh hỗ trợ thực hiện phép biến đổi phối cảnh dựa trên mặt nạ
* Cài đặt API hỗ trợ chuột phải để xóa cài đặt
* Sửa lỗi hợp nhất các từ không phải tiếng Ả Rập liên tiếp trong văn bản tiếng Ả Rập
* Sửa lỗi các từ không phải tiếng Ả Rập liên tiếp không được đảo ngược như một tổng thể khi xuất PDF tiếng Ả Rập


## v5.3.0 (2025/11/20)

* Thêm chức năng cắt và xoay ảnh ở bất kỳ góc nào vào chỉnh sửa ảnh
* Thêm tiếng Pháp và tiếng Việt vào danh sách ngôn ngữ của RapidOCR
* Thêm mục menu đảo ngược văn bản
* RapidOCR sử dụng mô hình tiếng Ả Rập phiên bản v5
* Tìm kiếm và thay thế có thêm mục menu lọc ảnh
* Trình quản lý ảnh đã dịch hỗ trợ đảo ngược lựa chọn
* Xóa ký tự điều khiển hướng trong văn bản khi tạo PDF
* Thêm thao tác loại bỏ vùng có độ tin cậy thấp vào quy trình làm việc tùy chỉnh
* Sửa lỗi ảnh hiện tại trong tìm kiếm và thay thế không thay đổi sau khi chuyển ảnh
* Sửa lỗi đặt sai tham số thư mục kết quả trung gian khi tạo PSD
* Sửa lỗi lớp văn bản của PDF được xuất có thể vượt ra ngoài biên tài liệu
* Sửa lỗi thao tác tạo PDF không báo lỗi
* Sửa lỗi ký tự không phải tiếng Ả Rập bị đảo ngược khi tạo PDF tiếng Ả Rập

## v5.2.0 (2025/11/15)

* Loại bỏ script Photoshop phiên bản AutoitV3, chuyển sang gọi trực tiếp tệp JavaScript
* Dùng Shell+AppleScript để bật Photoshop trên macOS
* Máy chủ hỗ trợ truyền quy trình làm việc, API, cài đặt dự án và tên mẫu
* Đổi giá trị mặc định của số pixel mở rộng khi sửa ảnh từ 20 thành 5
* Nếu mặt nạ là toàn bộ ảnh, loại bỏ nội dung mặt nạ ở vài pixel sát mép
* Khi máy chủ chọn OCR theo ngôn ngữ, cũng chọn có tắt tùy chọn thứ tự đọc từ phải sang trái hay không theo ngôn ngữ
* Thêm cài đặt chiều rộng tối đa khi sửa ảnh và tỷ lệ chồng lấn cửa sổ trượt khi sửa ảnh
* Mặc định không làm mờ viền mặt nạ
* Khi chọn các phương thức sửa ảnh học sâu như MIGAN, Lama trong cài đặt dự án, không còn bỏ chọn thao tác theo vùng chữ
* Dùng Krita chuyển PSD thành JPG
* Loại bỏ các thao tác PSD lỗi thời
* Tạo PSD có thể chỉnh sửa hỗ trợ thao tác trên ảnh hiện tại
* Sửa lỗi đường dẫn thêm ảnh đã xóa văn bản trong script PS

## v5.1.1 (2025/11/12)

* Có thể kéo ảnh trong trình xóa văn bản
* Điền lại ảnh đã xóa văn bản dựa trên mặt nạ
* Thêm cài đặt dự án làm mờ viền mặt nạ khi điền lại ảnh đã xóa văn bản
* Tạo mặt nạ chỉ loại bỏ các đường viền không có đường viền ngoài, thay vì chỉ giữ lại đường viền có số lượng nhiều nhất
* Các sửa lỗi khác

## v5.1.0 (2025/11/08)

* Trình chỉnh sửa mặt nạ thêm tùy chọn giãn nở hoặc ăn mòn mặt nạ đối với vùng đã chọn, đồng thời thay đổi cách chọn chế độ thao tác mặc định
* Định dạng đầu ra mới: PSD raster hóa (phụ thuộc Krita)
* Tái cấu trúc việc xuất định dạng ORA
* Với dự án mới, mặt nạ và ảnh đã xóa văn bản mặc định được lưu vào thư mục `intermediateResults`
* Đổi đường dẫn đầu ra thành lấy thư mục đầu ra làm thư mục gốc
* Thêm SegmentAnything làm công cụ tạo mặt nạ, phù hợp hơn với văn bản trên nền phức tạp
* Thêm quy trình làm việc tùy chỉnh khôi phục trạng thái UI, tạo ảnh mặt nạ và tạo ảnh đã xóa văn bản
* Thêm mục menu tạo mặt nạ hoặc ảnh đã xóa văn bản của ảnh hiện tại
* Hỗ trợ xuất WebP không mất dữ liệu
* Tối ưu mức sử dụng bộ nhớ của OCR và phát hiện bóng thoại đối với ảnh dài
* Đóng hộp tiến độ có thể dừng thao tác OCR và phát hiện bóng thoại của một ảnh
* Chọn dùng JPG hay PNG làm định dạng trung gian cho việc sửa ảnh bằng phương thức bên ngoài theo phần mở rộng
* Khi chọn các phương thức sửa ảnh học sâu như MIGAN, Lama trong cài đặt dự án, sẽ bỏ chọn thao tác theo vùng chữ
* Sửa lỗi tạo mặt nạ bị triệt tiêu ở phần chồng lấn của các hộp văn bản
* Sửa lỗi máy chủ mở chế độ dịch trước khi dịch
* Sửa lỗi phát hiện phân cảnh không hỗ trợ ảnh lớn trên 65500 pixel
* Sửa lỗi không cập nhật tọa độ vùng chữ sau khi mở rộng vùng khi sửa mặt nạ của một vùng

## v5.0.0 (2025/11/01)

* Chế độ tạo mặt nạ có thêm phát hiện bóng thoại
* Tạo mặt nạ bằng phát hiện bóng thoại và OCR mặc định chỉ xử lý toàn bộ ảnh
* Cài đặt mặt nạ và phương thức sửa ảnh chuyển sang lưu trữ theo tên
* Sửa ảnh chỉ thay thế hình ảnh tại vị trí hộp văn bản
* Thêm phương thức sửa ảnh MIGAN
* Sửa ảnh hỗ trợ cửa sổ trượt để hỗ trợ ảnh lớn hoặc giữ chi tiết
* Tối ưu hiệu quả xóa văn bản của mẫu CG
* Khi chỉnh sửa ảnh đã xóa văn bản của vùng, số pixel mở rộng sẽ theo cài đặt dự án
* Trình xóa văn bản hỗ trợ hoàn tác, thao tác theo vùng, sửa dựa trên ảnh hiện tại
* Điều khiển phần trăm của trình xóa văn bản và trình chỉnh sửa mặt nạ hỗ trợ điều khiển bằng con lăn chuột
* Thao tác giãn nở mặt nạ chuyển sang áp dụng cho toàn bộ ảnh thay vì từng vùng chữ
* Tối ưu tốc độ xóa văn bản và tạo mặt nạ
* Cập nhật plugin Lama để hỗ trợ ảnh đầu vào có kích thước động và thêm cài đặt kích thước tối đa
* Cập nhật câu lệnh gợi ý của Sakura để tránh hiện tượng nối tiếp
* ChatGPT sử dụng câu lệnh gợi ý dịch hàng loạt được đơn giản hóa
* Thêm tùy chọn ghi nhớ kết quả dịch máy
* Thêm mục menu xóa mặt nạ và ảnh đã xóa văn bản của ảnh hiện tại
* Đổi giá trị mặc định của số pixel mở rộng khi sửa ảnh từ 5 thành 20
* Sửa lỗi tọa độ không đúng sau khi mở rộng pixel khi sửa ảnh
* Các sửa lỗi khác

## v4.7.0 (2025/10/26)

* Phát hiện màu được thực hiện bằng luồng riêng để tránh chương trình không phản hồi
* Phát hiện màu văn bản hỗ trợ sử dụng OCR
* Thêm mẫu ảnh CG
* Thêm OCR 48px CTC của manga-image-translator phiên bản ONNX
* Thêm cài đặt dự án loại bỏ nền ở hai đầu văn bản trong ảnh khi chạy OCR nhận dạng thuần túy
* Khi điều chỉnh vùng đã chọn theo độ lệch, nếu số thứ tự đích vượt quá biên, cộng hoặc trừ số thứ tự đích với tổng số vùng
* Sửa lỗi thay đổi màu trên thanh công cụ không có tác dụng khi vùng chữ có thuộc tính textColor


## v4.6.0 (2025/10/24)

* Khi chọn hộp văn bản trong chế độ sắp chữ, cỡ chữ sẽ được cập nhật sau khi thả chuột
* Khi đặt tên phông chữ qua thanh công cụ, không đồng thời thêm cỡ chữ vào kiểu cục bộ
* Các thao tác như cỡ chữ tự động kiểm tra kiểu cục bộ có cỡ chữ hay không, thay vì kiểm tra có kiểu cục bộ hay không
* OCR trên macOS thêm kết quả ở cấp độ từ
* Cập nhật plugin ChatGPT để hỗ trợ mô hình suy luận của SiliconFlow
* Xuất PDF hỗ trợ dùng ảnh không có văn bản hoặc không thêm ảnh
* Xuất PDF hỗ trợ văn bản dọc, văn bản nhiều dòng và tiếng Ả Rập
* Lớp văn bản của PDF được xuất có thể được đặt thành hiển thị
* Nhập PDF hỗ trợ nhập văn bản ở cấp độ từ
* Nhập PDF cũng hỗ trợ nhập văn bản khi chọn trích xuất ảnh
* Thêm tiếng Lào, tiếng Thái và tiếng Khmer vào danh sách ngôn ngữ không có khoảng trắng

## v4.5.0 (2025/10/18)

* Cách sắp xếp mới: ngược chiều kim đồng hồ, theo chiều kim đồng hồ, chia cột văn bản
* Cách phát hiện phân cảnh mới: gom cụm văn bản
* Thêm chức năng điều chỉnh hàng loạt thứ tự vùng đã chọn hoặc phân cảnh
* Phát hiện phân cảnh hỗ trợ chỉ định cách sắp xếp và mô hình phát hiện đối tượng
* Thao tác hợp nhất vùng trong xử lý hàng loạt chuyển sang thực thi bằng luồng để tránh phần mềm không phản hồi
* Tối ưu việc tải plugin
* Xuất PSD có thêm tùy chọn tính lề văn bản
* Thêm plugin dịch Sakura
* Sửa lỗi công cụ chữ dọc báo lỗi kết xuất khi văn bản chỉ chứa ngắt dòng
* Sửa lỗi thứ tự kết quả không đúng khi nhấp đúp để đặt số thứ tự
* Sửa lỗi trình xóa văn bản không xử lý đúng giá trị alpha khi xử lý ảnh có thông tin trong suốt
* Sửa lỗi các thao tác như OCR trên ảnh WebP thất bại
* Sửa lỗi không cập nhật tiêu đề phần mềm và thêm bản ghi gần đây sau khi lưu thành tệp khác
* Sửa lỗi báo lỗi khi xác định kiểu theo hướng văn bản mà một kiểu nào đó không tồn tại
* Các sửa lỗi khác

## v4.4.0 (2025/09/27)

* Thêm thanh công cụ quy trình làm việc
* Chọn ngôn ngữ OCR theo ngôn ngữ dự án sau khi tạo dự án mới
* Tự động lưu tệp dự án sau khi tạo dự án mới
* Tải quy trình làm việc được định nghĩa trước khi mở cấu hình quy trình làm việc tùy chỉnh lần đầu
* Khi sửa kiểu bằng thanh công cụ, chỉ giữ lại kiểu đã sửa vào kiểu cục bộ
* Sửa lỗi truyền tham số dòng lệnh của bat và exe trên Windows

## v4.3.0 (2025/09/24)

* Khi dùng phát hiện bóng thoại cho ảnh nhỏ hơn, mở rộng chiều rộng và chiều cao ảnh thành 1024
* Xác định có thêm khoảng trắng và ngắt dòng hay không dựa trên hướng hợp nhất và việc có phải ký tự hay không
* Kết quả nhận dạng theo đơn vị ký tự của RapidOCR sẽ thêm thuộc tính `isChar` khi lưu
* RapidOCR thêm mô hình tiếng Ả Rập
* Sau khi phát hiện bóng thoại, mặc định không mở rộng vùng
* Thêm mục thao tác quy trình làm việc tùy chỉnh nhận dạng vùng dạng dải dài; loại bỏ cài đặt dự án vốn chỉ cho phép OCR nhận dạng thuần túy dùng cho văn bản dạng dải dài
* Thêm mục thao tác quy trình làm việc tùy chỉnh nhận dạng vùng không có văn bản có thể hợp nhất với vùng có văn bản
* Thêm cài đặt dự án về tỷ lệ vùng dạng dải dài
* Cập nhật mẫu truyện tranh Nhật Bản
* Sửa lỗi tọa độ phát hiện bóng thoại có thể chứa phần thập phân
* Sửa lỗi ký tự chỉ có một khoảng trắng bị xóa khi bật xóa ngắt dòng
* Sửa lỗi văn bản của mục thao tác có tham số trong quy trình làm việc tùy chỉnh có thể có thêm một khoảng trắng khi bản địa hóa


## v4.2.0 (2025/09/21)

* Chức năng tự động điều chỉnh cỡ chữ của công cụ chữ dọc chính xác hơn
* Phát hiện hướng văn bản mặc định dựa trên tỷ lệ ảnh
* Thêm mục menu mở thư mục phần mềm
* Khi dịch hàng loạt, sau khi phát hiện bóng thoại cũng thực hiện thao tác hợp nhất vùng
* OCR nhận dạng thuần túy có thể chỉ dùng cho văn bản dạng dải dài
* RapidOCR hỗ trợ trả về kết quả ở cấp độ ký tự
* Mặc định bao gồm mangaOCR phiên bản ONNX
* Tối ưu mẫu dựa trên OCR tích hợp mới
* Giải phóng Mat của OpenCV kịp thời để tối ưu mức sử dụng bộ nhớ
* Hợp nhất vùng hàng loạt chuyển thành thao tác không phụ thuộc UI
* Mặc định tải thư viện động của ONNXRuntime
* Thêm loại bỏ vùng không phải văn bản (OCR) vào quy trình làm việc tùy chỉnh
* Khi OCR một vùng, cắt theo vị trí được lưu thay vì theo vị trí của điều khiển
* RapidOCR mặc định sửa thứ tự khi nhận dạng một vùng
* Tùy chọn điều chỉnh thứ tự khi nhận dạng một vùng không có tác dụng với các công cụ nhận dạng thuần túy như mangaOCR
* Sửa lỗi thứ tự văn bản của Baidu OCR bản chính xác
* Sửa lỗi bản địa hóa mục có tham số trong quy trình làm việc tùy chỉnh
* Sửa lỗi chọn văn bản sai khi bật chế độ sắp chữ nhưng chưa xem bản dịch
* Sửa lỗi không thể thêm mục thông thường khi bật thêm tham số trong quy trình làm việc tùy chỉnh



## v4.1.0 (2025/09/13)

* OCR tích hợp mới: rapid
* Mặc định đi kèm [mô hình](https://github.com/xulihang/ImageTrans-docs/issues/860) nhận dạng dòng chữ tiếng Nhật
* Thêm plugin DocTROCR

## v4.0.2 (2025/09/10)

* Thao tác hợp nhất các vùng trong phân cảnh và thêm văn bản vào vùng hiện có bằng OCR sẽ thực hiện hợp nhất vùng để sửa thứ tự
* Khi thêm văn bản vào vùng hiện có bằng OCR, có thể chọn không xóa nội dung hình ảnh ngoài vùng
* Khôi phục hành vi mở rộng biên khi hợp nhất theo chiều ngang các vùng có chứa văn bản
* Tối ưu tốc độ phát hiện phân cảnh
* Tối ưu hiển thị số thứ tự
* Sửa lỗi cài đặt phương pháp phát hiện phân cảnh trong quy trình làm việc tùy chỉnh không có tác dụng
* Sửa lỗi có thể vượt chỉ số khi chọn hộp văn bản để chuyển đến vị trí tương ứng trong ảnh và điều chỉnh thứ tự

## v4.0.1 (2025/08/29)

Cải thiện độ rõ nét của văn bản bị xoay [#950](https://github.com/xulihang/ImageTrans-docs/issues/950)

## v4.0.0 (2025/08/23)

* Thêm phương pháp tạo mặt nạ: OCR
* Giữ lại kênh trong suốt khi tải WebP
* Khi có văn bản, vùng phát hiện đường phân cách lấy tâm làm điểm bắt đầu
* Dùng đường dẫn dự án làm tiêu đề phần mềm [#946](https://github.com/xulihang/ImageTrans-docs/issues/946)
* Sửa lỗi không thể áp dụng kiểu mặc định khi kiểu phông chữ đã đặt không tồn tại
* Sửa lỗi phát hiện bóng thoại phiên bản máy chủ mặc định thêm tên phân loại làm kiểu phông chữ
* Sửa lỗi không thể thực hiện thao tác chọn nhiều bằng phím Command trên macOS
* Sửa lỗi không thể dùng PatchMatch (đã biên dịch lại bản macOS và mặc định dùng định dạng PNG)

## v3.19.1 (2025/08/17)

* Đơn vị pixel của kích thước kết xuất của công cụ văn bản ở các tỷ lệ khác nhau được thống nhất dùng số nguyên
* Hỗ trợ nhập trực tiếp ảnh định dạng WebP


## v3.19.0 (2025/08/16)

* Cho phép dùng OCR để phát hiện xoay và thêm cài đặt dự án liên quan [#934](https://github.com/xulihang/ImageTrans-docs/issues/934)
* Cập nhật plugin OCR để hỗ trợ phát hiện xoay
* Thêm cài đặt tỷ lệ chồng lấn vùng
* Các sửa lỗi khác


## v3.18.2 (2025/08/10)

* Trình chỉnh sửa mặt nạ thêm phím tắt chuyển chế độ xóa [#issue924](https://github.com/xulihang/ImageTrans-docs/issues/924)
* Thêm thao tác đặt độ lệch cố định cho vùng chữ
* Sửa lỗi vùng chữ tính lại cỡ chữ do nhấp vào vùng chữ kích hoạt sự kiện thay đổi văn bản
* Sửa lỗi văn bản có thể bị mờ do dùng độ chính xác kép để đặt kích thước vùng chữ [issue928](https://github.com/xulihang/ImageTrans-docs/issues/928)

## v3.18.1 (2025/07/26)

* Thêm mục menu thao tác vùng chữ: dán bản dịch
* Thêm plugin Ollama
* Hiển thị giao diện chính sau khi plugin tải xong hoàn toàn
* Máy chủ mặc định tắt tự động dọn dẹp
* Sửa lỗi hộp văn bản của vùng chữ đã chọn biến mất khi thống nhất phông chữ
* Sửa lỗi bỏ chọn không kích hoạt sự kiện tương ứng khi chọn nhiều vùng chữ

## v3.18.0 (2025/07/19)

* Quy trình làm việc tùy chỉnh hỗ trợ lưu tham số bổ sung cho thao tác phát hiện văn bản và nhận dạng văn bản [#issue914](https://github.com/xulihang/ImageTrans-docs/issues/914)
* Thêm trình xem nhật ký
* Thêm trình quản lý dấu trang
* Sửa lỗi chọn mô hình bóng thoại lần thứ hai không có tác dụng
* Sửa lỗi mở dự án bằng cách kéo thả không đóng dự án đã mở


## v3.17.5 (2025/07/05)

* Văn bản trong vùng chỉnh sửa văn bản của văn bản hai chiều như tiếng Ả Rập mặc định được căn phải
* Nhấp đúp vào vùng chữ để kích hoạt chỉnh sửa văn bản
* Quy tắc tự động sửa có thể xuất thành CSV hoặc nhập từ CSV
* Hỗ trợ lọc vùng bằng quy tắc tùy chỉnh
* Thêm mục menu mở ảnh đã xóa văn bản bằng chương trình bên ngoài
* Thêm trình tách văn bản

## v3.17.4 (2025/06/20)

* Thêm mục menu làm mới và mở ảnh bằng chương trình bên ngoài
* Thêm mục menu mở rộng và thu nhỏ vùng đã chọn
* Hỗ trợ đặt màu đường viền cho vùng có độ tin cậy thấp
* Sắp xếp tên tệp sử dụng sắp xếp tự nhiên
* Trình xóa văn bản và trình chỉnh sửa mặt nạ sử dụng tỷ lệ thu phóng ảnh của giao diện chính khi mở

## v3.17.3 (2025/06/10)

* Thêm mục menu cài đặt kiểu [#888](https://github.com/xulihang/ImageTrans-docs/issues/888)
* Thêm mục menu lọc vùng [#887](https://github.com/xulihang/ImageTrans-docs/issues/887)
* Tối ưu logic cài đặt kiểu cục bộ
* Sửa lỗi mở cài đặt kiểu cục bộ thất bại [#889](https://github.com/xulihang/ImageTrans-docs/issues/889)
* Trình xóa phụ đề video xử lý tất cả ảnh bằng STTN theo đơn vị 30 ảnh


## v3.17.2 (2025/06/04)

* Tối ưu logic chuyển đổi ảnh
* Ảnh đã xóa văn bản được tạo bằng trình xóa phụ đề video có thêm thuộc tính văn bản đã được xóa
* Trình xóa phụ đề video hỗ trợ tạo hộp văn bản cho tất cả ảnh
* Sửa lỗi trình xóa phụ đề video cần tải phụ đề trước mới có thể mở

## v3.17.1 (2025/06/02)

* Hỗ trợ dùng CSS để điều chỉnh kiểu văn bản [#883](https://github.com/xulihang/ImageTrans-docs/issues/883)
* Thêm phương thức xóa văn bản STTN
* Trình xóa phụ đề video hỗ trợ gọi STTN, phương thức xóa văn bản chuyên dụng cho video

## v3.17.0 (2025/05/18)

* Thêm trình xóa phụ đề video
* Phương thức xóa văn bản mới: làm mờ Gaussian
* Thêm mục menu đảo ngược lựa chọn, chọn vùng cùng kiểu, đưa xuống lớp dưới
* Thêm tùy chọn lọc vùng chữ có nền không trong suốt
* Hỗ trợ đặt mặt nạ cho thao tác OCR để loại bỏ các vùng không cần nhận dạng [#881](https://github.com/xulihang/ImageTrans-docs/issues/881)
* Giữ lại thuộc tính của vùng chữ bị chia tách
* Trình xem ảnh gốc có thể chuyển đổi có đồng bộ thu phóng hay không [#879](https://github.com/xulihang/ImageTrans-docs/issues/879)
* Sửa lỗi đặt sai chiều rộng và chiều cao của số pixel mở rộng khi xóa văn bản

## v3.16.2 (2025/05/10)

* Vô hiệu hóa nút tương ứng khi thao tác xử lý một ảnh của quy trình làm việc tùy chỉnh chưa hoàn thành
* Thêm văn bản vào vùng hiện có bằng OCR hỗ trợ thêm màu văn bản, thông tin xoay, v.v.
* Thêm tùy chọn có đồng thời thay đổi độ trong suốt của văn bản khi thay đổi độ trong suốt của lớp phủ hay không
* Thêm xóa ảnh mặt nạ, xóa ảnh không có văn bản vào quy trình làm việc tùy chỉnh

## v3.16.1 (2025/05/02)

* Phát hiện bóng thoại hỗ trợ lọc kết quả theo ID phân loại
* Hỗ trợ hợp nhất văn bản theo màu văn bản
* Hợp nhất theo thông tin vị trí đoạn hỗ trợ văn bản dọc
* Thêm xóa văn bản gốc, xóa bản dịch, xóa vị trí bản dịch, xóa kiểu vào quy trình làm việc tùy chỉnh
* Quy trình làm việc tùy chỉnh có thêm nút xóa trống


## v3.16.0 (2025/04/26)

* Khi OCR một vùng, hỗ trợ thêm đường viền cho hình ảnh [#issue866](https://github.com/xulihang/ImageTrans-docs/issues/866)
* Cài đặt dự án định vị và hợp nhất văn bản có thêm tùy chọn chênh lệch tọa độ dọc tối đa và chênh lệch tọa độ ngang tối đa
* Khi thêm văn bản vào vùng hiện có bằng OCR, hình ảnh ngoài vùng sẽ bị xóa
* Sửa lỗi di chuyển ảnh trên văn bản không có tác dụng khi xem bản dịch

## v3.15.4 (2025/04/18)

* Tìm kiếm và thay thế hỗ trợ dùng biểu thức chính quy chọn đoạn trống
* Hỗ trợ thu phóng lấy chuột làm tâm
* Thêm phím tắt cho “Chuyển đến”

## v3.15.3 (2025/03/29)

* Thêm mục menu điền văn bản gốc vào bản dịch và điền bản dịch vào văn bản gốc
* Thêm nút ma thuật để hỗ trợ thực hiện thao tác chỉnh sửa văn bản tùy chỉnh [#858](https://github.com/xulihang/ImageTrans-docs/issues/858)
* Thêm plugin dịch DeepSeek chuyên dụng

## v3.15.2 (2025/03/13)

* Thêm liên kết trợ giúp
* Công cụ chữ dọc thêm cài đặt ký tự chiều cao tự do [#841](https://github.com/xulihang/ImageTrans-docs/issues/841)

## v3.15.1 (2025/03/08)

* Trích xuất phụ đề cứng hoàn thiện hơn
* Thêm mục menu “Chuyển đến”

## v3.15.0 (2025/03/02)

* Thêm trình trích xuất phụ đề cứng
* Thêm hỗ trợ ban đầu cho OCR đa luồng
* Tìm kiếm và thay thế có thêm tùy chọn chế độ thay thế
* Tối ưu logic sắp xếp theo số trong tên tệp
* Sửa lỗi ngắt dòng trong bản dịch của TXT phân tách bằng Tab không được thoát

## v3.14.4 (2025/02/19)

* Hỗ trợ mở dự án bằng cách mở mặc định của hệ thống
* Hỗ trợ chuột phải mở ảnh hiện tại bằng chương trình bên ngoài
* Sửa lỗi tọa độ chụp ảnh vùng cố định không đúng trên macOS ở DPI cao
* Sửa lỗi có thể xảy ra khi dịch nhiều câu bằng Google Dịch [#issue835](https://github.com/xulihang/ImageTrans-docs/issues/835)

## v3.14.3 (2025/01/08)

* Sửa lỗi văn bản không căn trái bị lệch khi chuyển tỷ lệ
* Thêm plugin OCR sử dụng ChatGPT

## v3.14.2 (2025/01/07)

* Sửa lỗi thực hiện phép biến đổi phối cảnh trên vùng bị xoay của ảnh lớn hơn thất bại [#issue813](https://github.com/xulihang/ImageTrans-docs/issues/813)
* Kiểm tra dự án có bị tiến trình khác sửa đổi hay không khi lưu dự án
* Quy trình làm việc tùy chỉnh thêm thao tác hợp nhất các vùng trong phân cảnh

## v3.14.1 (2024/12/28)

* Bán kính bo góc của hộp văn bản phủ ở chế độ không chính xác mặc định được đặt là 10
* Tăng phạm vi vùng phản hồi khi điều chỉnh kích thước hộp văn bản trong chế độ sắp chữ
* Sửa lỗi bo góc của hộp văn bản phủ ở chế độ không chính xác bị mờ
* Sửa lỗi máy chủ chuyển sang ảnh đã tải xuống thất bại

## v3.14.0 (2024/12/14)

* Thêm chức năng lưới
* Thêm mục menu kiểm tra chính tả
* Cài đặt API chuyển sang dùng TextArea để hỗ trợ nhập văn bản nhiều dòng
* Trong chế độ chọn nhiều bằng khung kéo, nhấp vào hộp văn bản khi giữ phím Control sẽ không bỏ chọn hộp văn bản
* Trong chế độ chọn nhiều bằng khung kéo, giữ phím Control hỗ trợ kéo khung để xóa lựa chọn
* Máy chủ gửi kiểm tra heartbeat 30 giây một lần
* Máy chủ hỗ trợ chọn công cụ OCR theo ngôn ngữ nguồn
* Sửa lỗi chế độ máy chủ không chuyển sang tỷ lệ 100% khi tạo ảnh thành phẩm
## v3.13.2 (2024/12/10)

* Sửa lỗi văn bản của phím tắt đặt lại chưa được dịch
* Sửa lỗi đặt lại phím tắt không dùng phím tắt dành riêng cho mac
* Sửa lỗi không chuyển đến tệp tương ứng sau khi dán tệp
* Thêm WebP vào định dạng xuất
* Giảm khoảng thời gian kiểm tra kết nối máy chủ từ 30 giây xuống 5 giây
* Máy chủ hỗ trợ chuyển đổi tệp WebP được trả về qua đường dẫn cục bộ

## v3.13.1 (2024/12/08)

* Sửa lỗi tọa độ Y không đúng sau khi đặt lề trên của công cụ chữ dọc
* Sửa lỗi kết quả OCR định dạng JSON không được phân tích
* macOS dùng java tích hợp sẵn để khởi chạy jar bên ngoài
* Máy chủ hỗ trợ chỉ truyền dữ liệu văn bản, không truyền ảnh
* Máy chủ mặc định truyền ảnh định dạng WebP để tiết kiệm băng thông

## v3.13.0 (2024/12/07)

* Tối ưu hiệu quả của ký tự không khoảng cách trong công cụ chữ dọc
* Tối ưu hiệu quả nhận dạng một vùng của mangaTranslator
* Máy chủ hỗ trợ kết nối với máy chủ từ xa

## v3.12.0 (2024/11/24)

* Khi dùng thanh công cụ chọn, nhấp và di chuyển hộp văn bản sẽ hiển thị tọa độ ở phía dưới giao diện
* Thêm thao tác thống nhất chiều rộng và thống nhất chiều cao
* Thanh công cụ phông chữ có thêm bộ chọn màu
* Tìm kiếm và thay thế hỗ trợ chuyển đổi viết hoa đầu câu và viết hoa tiêu đề
* Thêm mục menu tự động tính cỡ chữ phù hợp
* Mặt nạ ở chế độ không chính xác chỉ được tạo theo vùng văn bản gốc
* Sửa lỗi tính sai vị trí khi xóa văn bản theo vùng của trình xóa văn bản
* Sửa lỗi máy chủ phân tích quy trình làm việc thất bại
* Sửa lỗi hiển thị và lưu cài đặt quy trình làm việc
* Sửa lỗi sắp xếp phân cảnh không hỗ trợ cặp trang
* Sửa lỗi mặt nạ ở chế độ không chính xác không phản hồi xoay theo thời gian thực

## v3.11.2 (2024/11/16)

* Thêm dịch máy Alibaba
* Chế độ thanh công cụ xem ảnh gốc hỗ trợ hiển thị hộp văn bản gốc
* Thêm mục menu điều chỉnh thứ tự hộp văn bản

## v3.11.1 (2024/11/03)

* Hỗ trợ nhập ảnh PDF sử dụng định dạng JBIG
* Hỗ trợ gọi quy trình làm việc tùy chỉnh bằng dòng lệnh để xử lý tệp [#issue785](https://github.com/xulihang/ImageTrans-docs/issues/785)
* Quy trình làm việc tùy chỉnh hỗ trợ sửa cài đặt hiện tại
* Hỗ trợ dùng màu nền trong kiểu văn bản làm màu hộp văn bản [#issue775](https://github.com/xulihang/ImageTrans-docs/issues/775)
* Thêm thao tác sắp xếp phân cảnh và thu nhỏ vùng vào quy trình làm việc tùy chỉnh [#issue774](https://github.com/xulihang/ImageTrans-docs/issues/774) [#issue776](https://github.com/xulihang/ImageTrans-docs/issues/776)


## v3.11.0 (2024/10/25)

* Ở lại ảnh hiện tại sau khi nhập ảnh
* Hỗ trợ gọi dịch vụ phát hiện bóng thoại cục bộ [#issue771](https://github.com/xulihang/ImageTrans-docs/issues/771)
* Phát hiện phân cảnh hỗ trợ sử dụng phát hiện đối tượng [#issue772](https://github.com/xulihang/ImageTrans-docs/issues/772)
* Có thể lưu nhiều cài đặt quy trình làm việc tùy chỉnh


## v3.10.3 (2024/10/07)

* Hỗ trợ mở dự án bằng dòng lệnh và kéo thả tệp
* Thêm trình xem ảnh gốc [#issue763](https://github.com/xulihang/ImageTrans-docs/issues/763)
* Sửa lỗi lưu trữ bản dịch máy trống

## v3.10.2 (2024/09/22)

* Có thể đặt có trích xuất văn bản hay không khi nhập PDF
* Tự động khôi phục cửa sổ trình đọc màn hình sau khi gọi chụp ảnh bằng phím tắt
* Cập nhật plugin ChatGPT để hỗ trợ đặt host có số phiên bản
* Sửa lỗi vùng chữ có chiều rộng hoặc chiều cao bằng 0 khiến tạo mặt nạ thất bại
* Sửa lỗi độ phân giải ảnh chụp của trình đọc màn hình thấp ở DPI cao
* Điều chỉnh kích thước vùng dựa trên mặt nạ văn bản sẽ xác định mặt nạ có đúng hay không thông qua vị trí điểm tâm

## v3.10.1 (2024/09/15)

* Mặc định chuyển đến ảnh được mở lần trước khi mở dự án
* Sửa lỗi báo lỗi khi xuất ảnh không có phân cảnh và phân cảnh có kích thước sai

## v3.10.0 (2024/09/07)

* Thêm hỗ trợ văn bản ngang trong văn bản dọc [#issue507](https://github.com/xulihang/ImageTrans-docs/issues/507)
* Rich text của công cụ chữ ngang hỗ trợ đặt gạch ngang và gạch chân
* Xóa đường căn chỉnh khi thả chuột và làm mới
* Cho phép điều chỉnh độ lệch của văn bản dọc
* Thao tác giới hạn vùng chữ trong ảnh sẽ lưu thông tin vị trí vùng bản dịch

## v3.9.0 (2024/09/01)

* Phát hiện bóng thoại hỗ trợ mở hộp thoại để chọn mô hình
* Cách căn chỉnh mới: căn đều hai bên
* Thêm đường căn chỉnh phụ trợ và chức năng tự động hút [#issue733](https://github.com/xulihang/ImageTrans-docs/issues/733)
* Cho phép gọi công cụ 2 của OCRSpace
* Hỗ trợ chuyển đổi chữ hoa chữ thường của văn bản gốc trước khi dịch máy

## v3.8.0 (2024/08/25)

* Phát hiện phân cảnh hỗ trợ tự động xử lý ảnh nền tối [#issue741](https://github.com/xulihang/ImageTrans-docs/issues/741)
* Hỗ trợ đặt màu nền của truyện tranh dạng dải được xuất
* Thêm chức năng dùng phát hiện bóng thoại để loại bỏ vùng thừa và bổ sung vùng thiếu
* Sửa lỗi khi bật đảo màu, việc hợp nhất vùng chữ không dùng ảnh đã đảo màu
* Cho phép đặt có thực hiện các thao tác liên quan đến độ tin cậy của vùng chữ trong phát hiện văn bản theo heuristic khi xử lý hàng loạt hay không
* Mô hình phát hiện bóng thoại có thể đặt trong thư mục `models` của phần mềm, chọn mô hình sử dụng thông qua cài đặt dự án
* Mặc định bật phát hiện bóng thoại ngoại tuyến
* Thêm menu chuột phải dịch một chạm dựa trên quy trình làm việc tùy chỉnh
* Thêm các mẫu truyện tranh Trung Quốc, truyện tranh Hàn Quốc, truyện tranh Âu Mỹ, v.v.
* Mẫu hỗ trợ cấu hình có cần người dùng tự đặt ngôn ngữ và tải mô hình phát hiện bóng thoại hay không

## v3.7.0 (2024/08/18)

* Phát hiện văn bản trong cảnh tự nhiên hỗ trợ xử lý văn bản bị nghiêng
* Bộ tạo mặt nạ hình chữ nhật nội tiếp hỗ trợ xử lý vùng bị nghiêng
* Các thao tác liên quan đến phát hiện vùng chữ chỉ kiểm tra chồng lấn với các vùng hiện có
* Khi xóa văn bản theo vùng, vùng bị xoay sử dụng hình chữ nhật bao ngoài
* Sửa lỗi tính sai chiều rộng và chiều cao khi nhập lại dữ liệu chú thích định dạng OBB
* Sửa lỗi hợp nhất văn bản bị xoay 90 độ của phát hiện đối tượng
* Sửa lỗi gọi mô hình không phải ONNX
* Sửa lỗi ảnh bị lệch khi kéo khung ra ngoài trong trình chỉnh sửa mặt nạ và trình xóa văn bản

## v3.6.1 (2024/08/17)

* Thêm hỗ trợ YOLO OBB để phát hiện văn bản bị nghiêng
* Máy chủ hỗ trợ sử dụng quy trình làm việc tùy chỉnh
* Sửa lỗi hộp văn bản không khôi phục góc xoay sau khi hủy xoay
* Sửa lỗi hộp văn bản không được đặt xoay khi dùng OCR phát hiện góc văn bản

## v3.6.0 (2024/08/10)

* Thêm cài đặt số pixel mở rộng khi xóa văn bản theo vùng chữ
* Thêm mục menu thu nhỏ vùng
* Thêm thao tác điều chỉnh kích thước vùng chữ theo mặt nạ
* Thêm bộ chỉnh hướng ảnh dùng để sửa hướng ảnh chụp bằng điện thoại Apple và Samsung theo thông tin Exif
* Thêm chức năng hợp nhất với ảnh tiếp theo
* Tự động chỉnh hướng ảnh đã tải xuống theo Exif
* Tối ưu việc chuyển trang khi thao tác hàng loạt
* Quy trình làm việc tùy chỉnh thêm thao tác thêm kết quả OCR vào vùng đã có
* Mặc định bật chế độ kéo thả và xóa văn bản theo vùng chữ
* Sửa lỗi Baidu Dịch không hỗ trợ văn bản nhiều dòng

## v3.5.0 (2024/07/28)

* Cho phép dùng bốn góc để điều chỉnh kích thước và vị trí hộp văn bản
* Dùng độ chính xác kép để lưu thông tin vị trí bản dịch
* Xuất phân cảnh hỗ trợ lưu thành một ảnh dài


## v3.4.0 (2024/07/21)

* Hỗ trợ nhập các tệp định dạng Epub, Mobi, ZIP và CBZ
* Thêm trợ lý plugin để quản lý plugin
* Thêm thanh công cụ chỉnh sửa, hỗ trợ xoay và lật ảnh
* Thêm trình quản lý cặp trang. Khi đặt ảnh thành cặp trang, ảnh sẽ được tách thành hai ảnh trái và phải để xử lý khi sắp xếp và phát hiện phân cảnh
* Tùy chọn hỗ trợ đặt tham số cho plugin xóa văn bản và tạo mặt nạ
* Sửa lỗi trình xóa văn bản không tải đúng ảnh đã xóa văn bản
* Ghi nhớ kết quả dịch máy nhiều câu

## v3.3.1 (2024/07/06)

* Sửa lỗi hộp văn bản không được vẽ lại khi chuyển tỷ lệ hiển thị
* Sửa lỗi mất phân loại của bóng thoại được hợp nhất khi phát hiện bóng thoại

## v3.3.0 (2024/06/30)

* Kiểu phông chữ có thêm cài đặt lề trên
* Tìm kiếm và thay thế có thêm mục menu chuột phải cho các thao tác liên quan đến vùng chữ
* Quy trình làm việc tùy chỉnh thêm các thao tác loại bỏ vùng bên ngoài, phát hiện hướng văn bản, v.v.
* Khi tạo dự án mới, nếu thư mục chứa tệp dự án có ảnh, hỏi có nhập hay không
* Tối ưu hiệu năng khi chuyển tỷ lệ hiển thị
* Cập nhật PDFBox để sửa vấn đề nhập PDF tiếng Nhật

## v3.2.1 (2024/06/24)

* Dịch một chạm mặc định thực hiện phát hiện và sắp xếp phân cảnh
* Tối ưu hiệu quả hiển thị của công cụ chữ ngang khi giữ các từ không bị tách

## v3.2.0 (2024/06/23)

* Thêm chức năng tạo dự án mới từ mẫu [#issue688](https://github.com/xulihang/ImageTrans-docs/issues/688)
* Hỗ trợ hiển thị tên kiểu trong hộp văn bản
* Tăng cường hỗ trợ phân loại của phát hiện đối tượng
* Sửa lỗi phím tắt mặc định có thể không có tác dụng khi được gán cho chức năng khác [#issue630](https://github.com/xulihang/ImageTrans-docs/issues/630)
* Sửa lỗi OpenCV tải mô hình từ đường dẫn chứa ký tự Unicode thất bại


## v3.1.1 (2024/06/12)

* Thêm “Lấy độ tin cậy của vùng chữ” vào quy trình làm việc tùy chỉnh
* Thêm cài đặt dự án về ngưỡng độ tin cậy của vùng chữ
* Thêm cài đặt dự án sửa thứ tự văn bản trong kết quả OCR của một vùng
* Sửa lỗi plugin OCR chế độ kết hợp không được liệt kê trong tùy chọn
* Sửa lỗi văn bản của công cụ chữ ngang chuyển thành màu trắng trong chủ đề tối
* Sửa lỗi hợp nhất trên dưới các vùng chữ thất bại khi thứ tự đọc từ phải sang trái

## v3.1.0 (2024/06/10)

* Thêm nút màu tùy chỉnh vào bộ chọn màu
* Cách đặt màu trong cửa sổ cài đặt sắp chữ chuyển thành lấy màu trong ảnh
* Quy trình làm việc tùy chỉnh hỗ trợ chỉ xử lý ảnh hiện tại
* Quy trình làm việc tùy chỉnh thêm loại xử lý: dùng màu văn bản nhận dạng làm màu đường viền, đặt màu đường viền theo độ đậm nhạt của màu văn bản, đặt màu văn bản theo độ đậm nhạt của màu đường viền, dùng màu đường viền khớp kiểu văn bản
* Sửa lỗi danh sách ngôn ngữ OCR WinRT bị lỗi hiển thị


## v3.0.0 (2024/06/08)

* Cập nhật JRE thành Java 23 để sửa vấn đề khoảng trắng ở hai đầu ảnh hưởng đến hiệu quả tự động xuống dòng [#issue482](https://github.com/xulihang/ImageTrans-docs/issues/482)
* Hỗ trợ định nghĩa kiểu hộp văn bản
* Trình chỉnh sửa mặt nạ hỗ trợ kéo chọn vùng theo mọi hướng

## v2.12.4 (2024/06/02)

* Mặc định bật căn giữa theo chiều dọc
* Giữ phím SHIFT và kéo vùng chữ có thể giữ nguyên vị trí theo chiều ngang. Đồng thời giữ SHIFT và Z có thể giữ nguyên vị trí theo chiều dọc
* Sửa lỗi xuống dòng của công cụ chữ dọc khiến rich text mất hiệu lực
* Sửa lỗi trạng thái chọn vùng chữ bị đặt lại khi chuyển chế độ dịch


## v2.12.3 (2024/05/23)

Sửa lỗi căn giữa theo chiều dọc của script PS và căn giữa theo chiều ngang trong chế độ rich text không có tác dụng

## v2.12.2 (2024/05/19)

* Cho phép đặt ngôn ngữ trung gian của dịch máy [#issue647](https://github.com/xulihang/ImageTrans-docs/issues/647)
* Sửa lỗi tạo mặt nạ thất bại khi thao tác OCR khiến thao tác hàng loạt bị gián đoạn [#issue650](https://github.com/xulihang/ImageTrans-docs/issues/650)
* Sửa lỗi độ phân giải không nhất quán của ảnh được tạo qua máy chủ ở tỷ lệ không phải 100%

## v2.12.1 (2024/05/12)

Cho phép được máy chủ gọi để thực hiện OCR và dịch máy

## v2.12.0 (2024/05/11)

* Thêm cài đặt dự án tránh tách từ
* Thêm tùy chọn tự động chọn vùng chữ đầu tiên khi chuyển ảnh [#issue642](https://github.com/xulihang/ImageTrans-docs/issues/642)
* Thêm pseudo-class để hoàn thiện chức năng tùy chỉnh kiểu hộp văn bản bằng CSS [#issue636](https://github.com/xulihang/ImageTrans-docs/issues/636)
* Hỗ trợ xuất ảnh hoặc PDF theo phân cảnh
* Kết quả trả về của máy chủ có thêm dữ liệu như tọa độ và văn bản

## v2.11.2 (2024/05/02)

* Sửa lỗi cột bản dịch có chiều rộng bằng 0 trong tệp docx được xuất nếu bản dịch trống [#issue639](https://github.com/xulihang/ImageTrans-docs/issues/639)
* Hỗ trợ dùng CSS tùy chỉnh kiểu hộp văn bản [#issue636](https://github.com/xulihang/ImageTrans-docs/issues/636)
* Sửa lỗi văn bản căn giữa theo chiều ngang hoặc chiều dọc có thể bị mờ do dùng độ chính xác kép
## v2.11.1 (2024/04/26)

* Sửa lỗi kết quả hiển thị trong dịch hỗ trợ có thể chứa kết quả của vùng trước đó khi chuyển sang vùng chữ khác [#633](https://github.com/xulihang/ImageTrans-docs/issues/633)
* Sửa lỗi tìm kiếm và thay thế báo lỗi khi tìm các ký tự lặp lại liên tiếp [#631](https://github.com/xulihang/ImageTrans-docs/issues/631)
* Tạo khung bằng thao tác vuốt hỗ trợ nhiều hướng [#629](https://github.com/xulihang/ImageTrans-docs/issues/629)
* Lấy đồng thời kết quả dịch máy dùng cho dịch hỗ trợ [#628](https://github.com/xulihang/ImageTrans-docs/issues/628)
* Sửa lỗi danh sách phông chữ không được cập nhật kịp thời sau khi cài đặt phông chữ


## v2.11.0 (2024/04/21)

* Hỗ trợ tạo vùng chữ dựa trên mẫu [#issue626](https://github.com/xulihang/ImageTrans-docs/issues/626)
* Không bỏ chọn sau khi đặt phông chữ qua cửa sổ cài đặt phông chữ [#issue623](https://github.com/xulihang/ImageTrans-docs/issues/623)
* Thêm mục menu tạo bản sao [#issue622](https://github.com/xulihang/ImageTrans-docs/issues/622)
* Plugin dịch máy hỗ trợ trả về nhiều kết quả ứng viên trong tab dịch hỗ trợ [#issue619](https://github.com/xulihang/ImageTrans-docs/issues/619)


## v2.10.3 (2024/04/15)

* Sửa lỗi tự động lưu không có tác dụng khi mở qua dự án gần đây
* Sửa lỗi sửa thời gian tự động lưu trong tùy chọn không có hiệu lực ngay
* Sửa lỗi trạng thái lưu không được đặt lại khi chuyển dự án
* Tạo bản sao lưu của dự án hiện tại khi đóng phần mềm

## v2.10.2 (2024/04/13)

* Hỗ trợ đặt chiều rộng và chiều cao của mô hình phát hiện bóng thoại ONNX
* Hỗ trợ nhấp đúp để thay đổi số thứ tự phân cảnh
* Thêm mục menu chuột phải hợp nhất vùng
* Thêm hai cách sắp xếp: dọc trước ngang sau và ngang trước dọc sau

## v2.10.1 (2024/04/04)

* Hỗ trợ phát hiện bóng thoại và xuất dữ liệu chú thích dưới dạng cửa sổ trượt
* Ưu tiên sử dụng mô hình bóng thoại được đặt trong thư mục ảnh của dự án

## v2.10.0 (2024/03/30)

* Cập nhật OpenCV lên 4.9.0
* Thêm hỗ trợ mô hình phát hiện đối tượng Yolov8 (đổi tên mô hình onnx thành `model.onnx` và đặt vào thư mục phần mềm để bật)
* Thêm trình quản lý dữ liệu chú thích phát hiện đối tượng, hỗ trợ xuất hoặc nhập dữ liệu chú thích định dạng Yolo


## v2.9.2 (2024/03/24)

* Menu chuột phải có thêm “Sao chép văn bản”
* Trình đọc màn hình hỗ trợ thêm kết quả có thông tin vị trí văn bản vào dự án
* Chữ nghiêng giả của văn bản ngang hỗ trợ đặt giá trị độ lệch tọa độ Y và chiều cao
* Sửa lỗi ảnh được xử lý không tương ứng khi xử lý hàng loạt do phiên bản 2.9.1 đưa vào [#issue598](https://github.com/xulihang/ImageTrans-docs/issues/598)
* Sửa lỗi tạo vùng chữ mới đặt lại văn bản của vùng đang chọn khi bật tự động lưu [#issue598](https://github.com/xulihang/ImageTrans-docs/issues/598)


## v2.9.1 (2024/03/17)

* Thêm bộ loại bỏ thông tin trong suốt, có thể tạo ảnh JPG không có độ trong suốt để giải quyết vấn đề hầu hết phương thức OCR và xử lý ảnh không xử lý đúng độ trong suốt [#issue593](https://github.com/xulihang/ImageTrans-docs/issues/593)
* Nếu có ảnh văn bản thuần túy, ưu tiên dùng ảnh đó trong các phương thức xử lý ảnh; trước đây ảnh này chỉ được dùng cho OCR vùng chữ
* Phương thức xóa văn bản chính xác mới: văn bản trong suốt. Hỗ trợ kết hợp mặt nạ và pixel xung quanh để khôi phục nền. Chủ yếu dùng để xóa văn bản trên nền trong suốt [#issue302](https://github.com/xulihang/ImageTrans-docs/issues/302)
* Sửa lỗi sự kiện chuột không phản hồi trên nội dung ảnh trong suốt


## v2.9.0 (2024/03/17)

* Mặc định bật tự động lưu
* Đổi cách căn chỉnh mặc định thành căn trái
* Thêm cài đặt dự án lật ngang ảnh thành phẩm [#discussion592](https://github.com/xulihang/ImageTrans-docs/discussions/592)
* Chức năng rich text của công cụ chữ dọc hỗ trợ đặt cỡ chữ
* Công cụ chữ dọc hỗ trợ dòng trống
* Sửa lỗi giãn dòng của công cụ chữ dọc
* Sửa lỗi danh sách phông chữ bị đặt lại khi chuyển trình chỉnh sửa mã rich text [#issue587](https://github.com/xulihang/ImageTrans-docs/issues/587)

## v2.8.8 (2024/03/09)

* Hỗ trợ hợp nhất văn bản theo vị trí đoạn [#issue586](https://github.com/xulihang/ImageTrans-docs/issues/586)
* Thêm khoảng thời gian xử lý cho OCR trực tuyến và phát hiện bóng thoại trên ảnh dài

## v2.8.7 (2024/03/04)

* Sửa lỗi hợp nhất vùng chữ không thành công do sắp xếp
* Sửa lỗi Baidu Dịch xử lý văn bản nhiều dòng

## v2.8.6 (2024/03/01)

* Sửa lỗi ngắt dòng trong kết quả hợp nhất các dòng văn bản bị xóa khi không chọn “Tự động xóa ngắt dòng”
* Đặt chiều cao và chiều rộng khi trình đọc màn hình hợp nhất văn bản thành một nửa kích thước tương ứng

## v2.8.5 (2024/02/25)

* Hỗ trợ xuất PDF bằng ảnh gốc, hỗ trợ xuất PDF có văn bản có thể tìm kiếm [#issue580](https://github.com/xulihang/ImageTrans-docs/issues/580)
* Hỗ trợ tạo vùng chữ từ mặt nạ [#issue577](https://github.com/xulihang/ImageTrans-docs/issues/577)

## v2.8.4 (2024/02/15)

Tối ưu việc sắp xếp văn bản khi hợp nhất vùng chữ [#issue576](https://github.com/xulihang/ImageTrans-docs/issues/576)

## v2.8.3 (2024/02/08)

* Hỗ trợ xem trước phông chữ trong danh sách phông chữ trên thanh công cụ [#issue567](https://github.com/xulihang/ImageTrans-docs/issues/567)
* Bỏ qua ảnh đã dịch khi xuất ảnh thành phẩm và mặt nạ [#issue548](https://github.com/xulihang/ImageTrans-docs/issues/548)
* Trình quản lý ảnh đã dịch có thể nhanh chóng chọn các ảnh đã xuất
* Sửa lỗi tự động điều chỉnh cỡ chữ ghi đè cài đặt chữ đậm và chữ nghiêng trong kiểu toàn cục [#issue565](https://github.com/xulihang/ImageTrans-docs/issues/565)
* Các sửa lỗi khác

## v2.8.2 (2024/01/21)

* Trình đọc màn hình hỗ trợ phím tắt toàn cục [#issue237](https://github.com/xulihang/ImageTrans-docs/issues/237)
* Bố cục của trình đọc màn hình có thể điều chỉnh
* Cũng có thể sửa văn bản gốc khi nhập lại bản dịch [#issue557](https://github.com/xulihang/ImageTrans-docs/issues/557)
* Thêm chế độ nhập PDF: chế độ trích xuất ảnh

## v2.8.1 (2024/01/15)

* Sửa lỗi thứ tự văn bản không đúng khi hợp nhất vùng bằng thanh công cụ
* Sửa lỗi hợp nhất theo dấu câu khi thứ tự đọc từ phải sang trái
* Sửa lỗi không ẩn cửa sổ khi trình đọc màn hình chụp ảnh
* Khi hợp nhất vùng, xác định có thêm khoảng trắng hay không dựa trên việc ngôn ngữ có khoảng trắng hay không

## v2.8.0 (2024/01/14)

* Trình đọc màn hình hỗ trợ sửa thứ tự văn bản [#issue553](https://github.com/xulihang/ImageTrans-docs/issues/553)
* Trình đọc màn hình có thể nhận dạng vùng cố định theo thời gian và phát hiện hình ảnh trong vùng có thay đổi hay không. Độ trong suốt của cửa sổ vùng cố định có thể điều chỉnh [#issue521](https://github.com/xulihang/ImageTrans-docs/issues/521)
* Thêm cài đặt dự án hợp nhất văn bản, có thể hợp nhất văn bản theo dấu câu kết thúc, không phát hiện đường phân cách khi hợp nhất các vùng có văn bản [#issue553](https://github.com/xulihang/ImageTrans-docs/issues/552)
* Hiển thị tên tệp trong kết quả tìm kiếm và thay thế
* Sửa lỗi không lưu các thông tin bổ sung như kiểu khi hợp nhất vùng bằng thanh công cụ

## v2.7.1 (2024/01/01)

* Các mô hình ngôn ngữ lớn như ChatGPT và Gemini có thể dùng thuật ngữ để cải thiện kết quả dịch [#issue546](https://github.com/xulihang/ImageTrans-docs/issues/546)
* Tìm kiếm và thay thế hỗ trợ nhấp đúp để chuyển đến và thêm tùy chọn tìm kiếm trong tệp hiện tại [#issue545](https://github.com/xulihang/ImageTrans-docs/issues/545)
* Tìm kiếm và thay thế hiển thị kết quả theo thứ tự tên tệp [#issue545](https://github.com/xulihang/ImageTrans-docs/issues/545)

## v2.7.0 (2023/12/24)

* Thêm chức năng phát hiện góc xoay của văn bản [#issue543](https://github.com/xulihang/ImageTrans-docs/issues/543)
* Thêm trình quản lý bản địa hóa, có thể tự dịch giao diện phần mềm [#issue544](https://github.com/xulihang/ImageTrans-docs/issues/544)
* Thêm tùy chọn vô hiệu hóa hành vi dùng văn bản gốc khi không có bản dịch lúc xem bản dịch [#issue541](https://github.com/xulihang/ImageTrans-docs/issues/541)
* Sửa lỗi dịch chuyển do văn bản nằm ngoài ảnh gây ra ở chế độ xuất mặc định
* Các tối ưu khả dụng khác

## v2.6.0 (2023/12/17)

* Cải thiện hiệu quả phân loại vùng chữ dạng dải dài [#issue536](https://github.com/xulihang/ImageTrans-docs/issues/536)
* Thêm trang chào mừng
* Thêm thanh trạng thái hiển thị số lượng ảnh và số thứ tự ảnh hiện tại [#issue535](https://github.com/xulihang/ImageTrans-docs/issues/535)
* Thêm tùy chọn sắp xếp theo tọa độ ngang [#issue533](https://github.com/xulihang/ImageTrans-docs/issues/533)
* Thêm mục menu điều chỉnh cỡ chữ [#issue529](https://github.com/xulihang/ImageTrans-docs/issues/529)
* Ghi nhớ trạng thái giao diện như tỷ lệ phần trăm [#issue528](https://github.com/xulihang/ImageTrans-docs/issues/528)
* Sửa lỗi vùng chữ căn giữa theo chiều dọc có thể bị lệch vị trí ở chế độ xuất ảnh lớn

## v2.5.7 (2023/12/03)

* Sửa lỗi mặt nạ được tạo bị thu nhỏ khi OCR ảnh lớn
* Trình chỉnh sửa mặt nạ thêm thao tác xóa mặt nạ ngoài vùng chữ
* Mục quy trình làm việc tùy chỉnh mới: xóa vùng không có văn bản gốc của tất cả ảnh, xóa mặt nạ ngoài khung của tất cả ảnh

## v2.5.6 (2023/12/02)

* Tự động sửa hỗ trợ dùng biểu thức chính quy [#issue520](https://github.com/xulihang/ImageTrans-docs/issues/520)
* Sửa lỗi hộp văn bản bị lệch khi kéo ở tỷ lệ DPI cao [#issue524](https://github.com/xulihang/ImageTrans-docs/issues/524)
* Chuột phải vào danh sách ảnh có thể mở menu xóa trống ảnh [#issue516](https://github.com/xulihang/ImageTrans-docs/issues/516)

## v2.5.5 (2023/11/25)

* Thêm mục menu “Sắp xếp” và “Điền bản dịch máy/bộ nhớ dịch”
* Hỗ trợ tạo mặt nạ văn bản bằng OCR

## v2.5.4 (2023/11/12)

* Thêm tùy chọn tạo mặt nạ văn bản khi phát hiện văn bản trong cảnh tự nhiên
* Kiểm tra chính tả hỗ trợ kiểm tra bản dịch [#issue514](https://github.com/xulihang/ImageTrans-docs/issues/514)
* Thao tác hàng loạt hỗ trợ đặt trước [#issue515](https://github.com/xulihang/ImageTrans-docs/issues/515)
* Hiển thị rút gọn đường dẫn của dự án gần đây [#issue509](https://github.com/xulihang/ImageTrans-docs/issues/509)

## v2.5.3 (2023/10/09)

* Sửa lỗi văn bản bị xoay bị lệch trong ảnh được xuất ở chế độ ảnh lớn [#issue499](https://github.com/xulihang/ImageTrans-docs/issues/499)
* Tìm kiếm và thay thế hỗ trợ chọn nhiều [#issue498](https://github.com/xulihang/ImageTrans-docs/issues/498)
* Trình duyệt nhúng hỗ trợ tương tác JavaScript để truy vấn mà không làm mới trang [#issue500](https://github.com/xulihang/ImageTrans-docs/issues/500)

## v2.5.2 (2023/10/01)

* Nâng cao hiệu năng của trình chỉnh sửa mặt nạ, hỗ trợ tải ảnh cực lớn [#issue494](https://github.com/xulihang/ImageTrans-docs/issues/494)
* Hậu xử lý văn bản như xóa khoảng trắng sẽ được áp dụng cho thao tác OCR toàn ảnh

## v2.5.1 (2023/09/24)

* Cài đặt mới cho công cụ chữ dọc: cần nâng ký tự đầu [#issue490](https://github.com/xulihang/ImageTrans-docs/issues/490)
* Trình quản lý ảnh đã dịch có thể đặt ảnh đã dịch không hiển thị trong giao diện chỉnh sửa [#issue488](https://github.com/xulihang/ImageTrans-docs/issues/488)

## v2.5.0 (2023/09/16)

Công cụ chữ dọc hỗ trợ căn giữa theo chiều ngang

## v2.4.1 (2023/09/16)

* Thêm cài đặt dự án về định dạng ảnh đầu ra mặc định
* Thêm mục menu xóa kiểu văn bản
* Thêm tùy chọn sử dụng menu gốc của macOS
* Hỗ trợ Mac phiên bản ARM
* Sửa lỗi tỷ lệ một số văn bản không đúng ở chế độ xuất ảnh lớn
* Các sửa lỗi khác

## v2.4.0 (2023/08/26)

* Sửa lỗi tạo trùng ảnh đã xóa văn bản khi xuất ảnh
* Sửa lỗi thanh tiến độ thay đổi trước khi ảnh chuyển khi chuyển ảnh
* Áp dụng đường viền văn bản lên văn bản thay vì Pane cha của văn bản [#issue432](https://github.com/xulihang/ImageTrans-docs/issues/432#issuecomment-1692600202)
* Thanh công cụ phông chữ có thêm tùy chọn áp dụng cho tất cả [#issue432](https://github.com/xulihang/ImageTrans-docs/issues/432#issuecomment-1692600202)
* Có thể áp dụng thay đổi trong cửa sổ cài đặt phông chữ cho tất cả hộp văn bản đã chọn [#issue432](https://github.com/xulihang/ImageTrans-docs/issues/432#issuecomment-1694525969)
* Trong chế độ kéo thả, giữ phím Ctrl có thể dùng con lăn chuột để thu phóng ảnh
* Thuật ngữ hỗ trợ thêm ghi chú
* Thêm trình quản lý thuật ngữ

## v2.3.0 (2023/08/20)

* Sửa lỗi căn giữa theo chiều dọc mất tác dụng khi bật cỡ chữ tự động
* Sửa lỗi xung đột sự kiện trong chế độ kéo thả
* Chức năng mới: trình duyệt Web nhúng [#issue483](https://github.com/xulihang/ImageTrans-docs/issues/483)

## v2.2.2 (2023/08/10)

* Sửa lỗi văn bản bị cắt khi giãn dòng của công cụ chữ ngang lớn hơn 1
* Thêm mục menu căn chỉnh hộp văn bản [#issue479](https://github.com/xulihang/ImageTrans-docs/issues/479)

## v2.2.1 (2023/08/05)

* Tối ưu trình chỉnh sửa mặt nạ: mặt nạ mặc định có độ trong suốt một nửa [#issue472](https://github.com/xulihang/ImageTrans-docs/issues/472)
* Công cụ chữ dọc hỗ trợ đặt ký tự không khoảng cách [#issue473](https://github.com/xulihang/ImageTrans-docs/issues/473)
* Sửa lỗi

## v2.2.0 (2023/07/30)

* Thêm plugin dịch ảnh Baidu [#issue470](https://github.com/xulihang/ImageTrans-docs/issues/470)
* Plugin OCR hỗ trợ đặt bản dịch, màu phông chữ và các thông tin khác của hộp văn bản
* Thu nhỏ ảnh quá lớn và chia ảnh quá dài trước khi OCR toàn ảnh
* Màu của trình chỉnh sửa mặt nạ tự động dùng lại tùy chọn trước đó [#issue467](https://github.com/xulihang/ImageTrans-docs/issues/467)
* Sửa lỗi hủy tự động xuống dòng không có tác dụng

## v2.1.0 (2023/07/09)

* Thêm tùy chọn chuyển đến ảnh tương ứng sau khi chọn vùng trong danh sách vùng chữ [#issue455](https://github.com/xulihang/ImageTrans-docs/issues/455)
* Tìm kiếm và thay thế có thêm tùy chọn chuyển đổi chữ hoa chữ thường
* Tự động áp dụng cài đặt cần thiết trước khi xuất ảnh thành phẩm [#issue461](https://github.com/xulihang/ImageTrans-docs/issues/461)
* Có thể giữ tỷ lệ bằng cách giữ SHIFT khi điều chỉnh vùng chữ [#issue462](https://github.com/xulihang/ImageTrans-docs/issues/462)
* Thanh công cụ liên quan đến ảnh gốc mới dùng để điều chỉnh độ trong suốt của lớp phủ và căn vị trí văn bản gốc, bản dịch [#issue458](https://github.com/xulihang/ImageTrans-docs/issues/458)
* Sửa lỗi script PS không xử lý được đường viền [b079d40](https://github.com/xulihang/ImageTrans_PhotoshopScripts/commit/b079d40ffdf8188de0c05eeaa64f742b28e2eb00)
* Sửa lỗi trôi vị trí khi điều chỉnh thủ công vị trí và kích thước bản dịch hoặc chuyển tỷ lệ hiển thị [#issue459](https://github.com/xulihang/ImageTrans-docs/issues/459)
* Sửa lỗi xung đột phím tắt xóa [#issue455](https://github.com/xulihang/ImageTrans-docs/issues/455)
* Sửa lỗi căn giữa theo chiều dọc của công cụ chữ dọc không có tác dụng khi sửa bản dịch [#issue458](https://github.com/xulihang/ImageTrans-docs/issues/458)
## v2.0.0 (2023/07/02)

* Cập nhật plugin ChatGPT để hỗ trợ đặt mô hình [#issue430](https://github.com/xulihang/ImageTrans-docs/issues/430)
* Chế độ không chính xác hỗ trợ phủ lên văn bản bị xoay
* Đơn vị tạo mặt nạ văn bản của vùng bị xoay được cập nhật thành hình chữ nhật bao ngoài tương ứng
* Khi chuyển sang thanh công cụ sắp xếp, nhấp đúp vào vùng chữ có thể đặt thủ công số thứ tự của vùng [#issue445](https://github.com/xulihang/ImageTrans-docs/issues/445)
* Cài đặt dự án có thêm cài đặt căn cứ sắp xếp mới, có thể chọn sắp xếp theo khoảng cách đến gốc tọa độ hoặc theo tọa độ dọc [#issue445](https://github.com/xulihang/ImageTrans-docs/issues/445)
* Việc xác định vùng chồng lấn không còn xét đến diện tích [#issue447](https://github.com/xulihang/ImageTrans-docs/issues/447#issuecomment-1616323053)
* Trình quản lý ảnh đã dịch có thể chọn nhanh theo điều kiện [#issue447](https://github.com/xulihang/ImageTrans-docs/issues/447#issuecomment-1616323053)
* Tự động đưa vùng chữ vượt ra ngoài biên ảnh trở lại trong ảnh [#issue452](https://github.com/xulihang/ImageTrans-docs/issues/452)
* Sửa lỗi mặt nạ được tạo bởi phát hiện văn bản trong cảnh tự nhiên bị thu nhỏ

## v1.9.8 (2023/05/21)

* Cập nhật plugin ChatGPT để hỗ trợ dịch hàng loạt theo ảnh [#issue404](https://github.com/xulihang/ImageTrans-docs/issues/404)
* Cho phép bản dịch trống khi nhập lại bản dịch từ TXT
* Hiển thị dòng nội dung nào bị lỗi nếu xảy ra lỗi khi nhập lại bản dịch từ TXT [#issue412](https://github.com/xulihang/ImageTrans-docs/issues/412)
* Plugin tạo mặt nạ mới: hình chữ nhật nội tiếp [#issue413](https://github.com/xulihang/ImageTrans-docs/issues/413)

## v1.9.7 (2023/05/13)

* Sửa lỗi xóa vị trí bản dịch làm trống văn bản khi bật tự động lưu văn bản gốc và bản dịch [#issue408](https://github.com/xulihang/ImageTrans-docs/issues/408)
* Danh sách thuật ngữ có thêm chức năng xóa bằng chuột phải

## v1.9.6 (2023/05/07)

* Sửa lỗi khớp biểu thức chính quy khi tìm kiếm và thay thế văn bản nhiều dòng [#issue402](https://github.com/xulihang/ImageTrans-docs/issues/402)
* Hỗ trợ xuất tệp bộ nhớ dịch TMX
* Cập nhật plugin ChatGPT để hỗ trợ đặt dịch vụ bên thứ ba [#issue401](https://github.com/xulihang/ImageTrans-docs/issues/401)

## v1.9.5 (2023/05/01)

* Cập nhật script Photoshop phiên bản JavaScript để hỗ trợ rich text
* Dịch trước hỗ trợ gọi bộ nhớ dịch để khớp hoàn toàn
* Mục menu chuột phải mới: xóa vị trí bản dịch [#issue393](https://github.com/xulihang/ImageTrans-docs/issues/393)
* Áp dụng cài đặt chủ đề cho tất cả cửa sổ
* Tối ưu khả dụng của cài đặt kiểu phông chữ

## v1.9.4 (2023/04/05)

* Sửa lỗi chiều cao của phép biến đổi phối cảnh không đúng khi chữ nghiêng giả có đặt giãn dòng
* Chữ đậm giả và chữ nghiêng giả có thể đặt mức độ đậm và nghiêng

## v1.9.3 (2023/04/02)

* Hỗ trợ xuất thành PDF [#issue366](https://github.com/xulihang/ImageTrans-docs/issues/366)
* Plugin dịch máy mới: [ChatGPT](https://github.com/xulihang/ImageTrans-docs/issues/375), [Yandex](https://github.com/xulihang/ImageTrans-docs/issues/386)
* Thêm trình chỉnh sửa mã rich text [#issue390](https://github.com/xulihang/ImageTrans-docs/issues/390)
* Rich text hỗ trợ đặt chữ đậm giả, chữ nghiêng giả, tên phông chữ và cỡ chữ [#issue389](https://github.com/xulihang/ImageTrans-docs/issues/389)
* Cài đặt mới cho công cụ chữ dọc: thay thế ký tự [#issue388](https://github.com/xulihang/ImageTrans-docs/issues/388)
* Không thực hiện thao tác liên quan đến một hộp văn bản khi chọn nhiều hộp văn bản

## v1.9.2 (2023/03/05)

* Sửa lỗi bản dịch không được hợp nhất khi hợp nhất vùng
* Thêm cài đặt dự án thực hiện thao tác tạo mặt nạ văn bản và ảnh đã xóa văn bản theo vùng chữ
* Hỗ trợ lưu kết quả mặt nạ văn bản của phát hiện văn bản trong cảnh tự nhiên [#issue370](https://github.com/xulihang/ImageTrans-docs/issues/370)

## v1.9.1 (2023/02/19)

* Sửa lỗi không bỏ qua BBCode khi tính chiều cao văn bản ngang
* Sửa lỗi BBCode mất hiệu lực khi kiểu văn bản được đặt thành chữ hoa
* JRE mặc định chuyển sang Liberica JRE 11

## v1.9.0 (2023/02/12)

* Hỗ trợ rich text (dựa trên BBCode) [#issue194](https://github.com/xulihang/ImageTrans-docs/issues/194#issuecomment-1426964710)
* Sửa lỗi liên quan đến yêu cầu mạng, chọn nhiều bằng Ctrl và độ tin cậy của vùng chữ

## v1.8.5 (2023/01/08)

* Plugin OCR mới: OCR tích hợp sẵn của macOS [#issue341](https://github.com/xulihang/ImageTrans-docs/issues/341)
* Hỗ trợ dán ảnh từ đường dẫn tệp
* Phát hiện ảnh có phải định dạng WebP hay không bằng lệnh file [#issue338](https://github.com/xulihang/ImageTrans-docs/issues/338)
* Sửa lỗi tải ảnh từ liên kết data URL thất bại
* Sửa lỗi truyền ảnh thang độ xám của mặt nạ văn bản thay vì ảnh gốc khi đặt phương thức sửa ảnh bên thứ ba làm phương thức mặc định
* Thêm tùy chọn có tự động sửa khi gõ hay không


## v1.8.4 (2022/11/26)

* Hỗ trợ phím tắt tùy chỉnh [#issue323](https://github.com/xulihang/ImageTrans-docs/issues/323)
* Tối ưu giao diện

## v1.8.3 (2022/11/13)

* Chức năng mới: tự động khớp kiểu văn bản đặt trước theo màu văn bản được phát hiện  [#issue322](https://github.com/xulihang/ImageTrans-docs/issues/322)
* Hiển thị ảnh chụp của trình đọc màn hình ở tỷ lệ 100%

## v1.8.2 (2022/10/29)

* Trong chế độ sắp chữ, ẩn đường viền hộp văn bản khi kéo hộp văn bản (có thể hủy ẩn trong tùy chọn) [#issue314](https://github.com/xulihang/ImageTrans-docs/issues/314)
* Tùy chọn cài đặt dự án mới: đọc thư mục con (mặc định bật) [#issue304](https://github.com/xulihang/ImageTrans-docs/issues/304)


## v1.8.1 (2022/10/05)

* Sửa lỗi xóa văn bản trên ảnh png có số kênh khác 4 thất bại
* Sửa lỗi logic của hộp kiểm “Thêm lớp phủ”

## v1.8.0 (2022/10/02)

* Hỗ trợ xuất ảnh thành PNG [#issue295](https://github.com/xulihang/ImageTrans-docs/issues/295)
* Nếu định dạng ảnh là PNG, định dạng ảnh đã xóa văn bản và ảnh thành phẩm cũng dùng PNG. Các định dạng khác mặc định dùng JPG [#issue295](https://github.com/xulihang/ImageTrans-docs/issues/295)
* Cài đặt dự án có thêm cài đặt kích thước hộp văn bản mặc định [#issue290](https://github.com/xulihang/ImageTrans-docs/issues/290)
* Hỗ trợ dùng phím tắt điều chỉnh vị trí của nhiều vùng chữ [#issue285](https://github.com/xulihang/ImageTrans-docs/issues/285)


## v1.7.11 (2022/09/18)

Sửa lỗi xuất dữ liệu do phiên bản v1.7.8 đưa vào [#issue279](https://github.com/xulihang/ImageTrans-docs/issues/279)

## v1.7.10 (2022/09/18)

* Phím tắt trên macOS ưu tiên dùng phím Command [#issue277](https://github.com/xulihang/ImageTrans-docs/issues/277)
* Tối ưu khả dụng của trình chỉnh sửa mặt nạ [#issue261](https://github.com/xulihang/ImageTrans-docs/issues/261)
* Thêm cài đặt tùy chỉnh cho công cụ chữ dọc vào cài đặt dự án [#issue271](https://github.com/xulihang/ImageTrans-docs/issues/271#issuecomment-1246208024)

## v1.7.9 (2022/09/12)

Cải thiện hiệu quả của công cụ chữ dọc với các phông chữ khác nhau [#issue271](https://github.com/xulihang/ImageTrans-docs/issues/271)

## v1.7.8 (2022/09/11)

* Sửa lỗi lưu trình chỉnh sửa mặt nạ văn bản thất bại khi ảnh có chiều rộng quá lớn [#issue266](https://github.com/xulihang/ImageTrans-docs/issues/266)
* Hoàn thiện cài đặt kiểu phông chữ [#issue256](https://github.com/xulihang/ImageTrans-docs/issues/256)
* Hoàn thiện hành vi của cọ vẽ trong trình chỉnh sửa mặt nạ văn bản [#issue261](https://github.com/xulihang/ImageTrans-docs/issues/261)
* Tùy chọn cài đặt kiểu phông chữ mới: khoảng cách chữ (chỉ áp dụng cho văn bản dọc) [#issue224](https://github.com/xulihang/ImageTrans-docs/issues/224)

## v1.7.7 (2022/08/27)

* Dùng phép biến đổi phối cảnh để lấy ảnh vùng bị xoay chính xác hơn
* Các sửa lỗi khác [#issue246](https://github.com/xulihang/ImageTrans-docs/issues/246) [#issue248](https://github.com/xulihang/ImageTrans-docs/issues/248)

## v1.7.6 (2022/08/20)

Tự động dùng lại công cụ OCR và ngôn ngữ đã dùng trước đó của dự án [#issue245](https://github.com/xulihang/ImageTrans-docs/issues/245)

## v1.7.5 (2022/08/13)

Văn bản ngang hỗ trợ đặt giãn dòng [#issue244](https://github.com/xulihang/ImageTrans-docs/issues/244)

## v1.7.4 (2022/07/24)

* Công cụ chữ dọc hỗ trợ sắp xếp văn bản từ trái sang phải [#issue242](https://github.com/xulihang/ImageTrans-docs/issues/242)
* Tùy chọn mới: có tự động lưu kết quả OCR vào clipboard hay không [#issue169](https://github.com/xulihang/ImageTrans-docs/issues/169)

## v1.7.3 (2022/07/03)

* Chế độ chỉnh sửa cọ mặt nạ hỗ trợ điều chỉnh bán kính
* Sửa lỗi xuất trang web thất bại khi không phát hiện phân cảnh
* Cập nhật script Photoshop bản JS để hỗ trợ tệp định dạng PSB

## v1.7.2 (2022/06/03)

Tùy chọn mới: thư mục yêu cầu mạng tạm thời, dùng để giải quyết vấn đề “Từ chối truy cập” mà một số người dùng gặp phải [#issue218](https://github.com/xulihang/ImageTrans-docs/issues/218)

## v1.7.1 (2022/05/29)

* Tối ưu UX khi sửa phông chữ [#issue212](https://github.com/xulihang/ImageTrans-docs/issues/212)
* Tối ưu phím tắt [#issue205](https://github.com/xulihang/ImageTrans-docs/issues/205#issuecomment-1135449173)
* Thêm chức năng làm mới bằng chuột phải, có thể dùng để xem vấn đề báo lỗi khi chuyển ảnh quá nhanh trong chế độ xem bản dịch [#issue211](https://github.com/xulihang/ImageTrans-docs/issues/211)
* Plugin sửa ảnh mới: Lama Inpainting [#issue216](https://github.com/xulihang/ImageTrans-docs/issues/216)


## v1.7.0 (2022/05/22)

* Thêm trình quản lý ảnh gốc không có văn bản và ảnh văn bản thuần túy [#issue199](https://github.com/xulihang/ImageTrans-docs/issues/199)
* Tự động sửa có thể dùng cho OCR [#issue199](https://github.com/xulihang/ImageTrans-docs/issues/199#issuecomment-1126957556)
* Sửa lỗi nhập XLIFF thất bại [#issue207](https://github.com/xulihang/ImageTrans-docs/issues/207)
* Hỗ trợ nhập lại bản dịch từ tệp TXT phân tách bằng Tab [#issue207](https://github.com/xulihang/ImageTrans-docs/issues/207)
* Nền của kiểu phông chữ có thể đặt thành trong suốt [#issue208](https://github.com/xulihang/ImageTrans-docs/issues/208)
* Các sửa lỗi và tối ưu khác [#issue203](https://github.com/xulihang/ImageTrans-docs/issues/203)


## v1.6.5 (2022/05/01)

* Đối với trường hợp như dịch tiếng Nhật sang tiếng Anh, văn bản gốc dọc và bản dịch ngang, thêm chức năng tự động điều chỉnh vị trí và kích thước vùng chữ để phù hợp hiển thị ngang [#issue190](https://github.com/xulihang/ImageTrans-docs/issues/190#issuecomment-1107365256)
* Thêm nút đọc thành tiếng bên dưới vùng chỉnh sửa văn bản (có thể đặt ẩn) [#issue191](https://github.com/xulihang/ImageTrans-docs/issues/191)
* Có thể đặt phương thức tạo mặt nạ văn bản và sửa ảnh mặc định [#issue192](https://github.com/xulihang/ImageTrans-docs/issues/192#issuecomment-1114153046)
* Gọi thao tác tạo mặt nạ văn bản và sửa ảnh theo vùng chữ để tăng tốc xử lý
* Các tối ưu nhỏ khác

## v1.6.4 (2022/04/17)

* Sửa lỗi thao tác mở thư mục dự án không có tác dụng trên macOS và thao tác xoay bằng chuột quá lớn
* Thao tác cài đặt kiểu phông chữ hỗ trợ chọn nhiều và có hiệu lực ngay [#issue185](https://github.com/xulihang/ImageTrans-docs/issues/185)
* Tối ưu hiển thị chữ cái và dấu câu của công cụ chữ dọc [#issue186](https://github.com/xulihang/ImageTrans-docs/issues/186)
* Sửa lỗi văn bản bị cắt khi cỡ chữ của công cụ chữ dọc quá lớn

## v1.6.3 (2022/04/04)

* Thêm hỗ trợ phương thức thanh toán Mianbaoduo
* Thêm DeepL phiên bản miễn phí ([hướng dẫn](https://github.com/xulihang/ImageTrans_plugins/tree/master/deeplfreeMT))

## v1.6.2 (2022/03/27)

* Thêm chức năng xuất thành trang web (hỗ trợ đọc theo phân cảnh, đọc thành tiếng)
* Máy chủ hiện có thể dùng làm máy chủ HTTP để duyệt trang web được xuất trong mạng cục bộ
* Công cụ chữ dọc: hỗ trợ cài đặt giãn dòng, tối ưu tốc độ và hiển thị dấu câu
* Thêm thao tác thêm hộp văn bản toàn ảnh
* Có thể đặt tên thư mục đầu ra [#issue170](https://github.com/xulihang/ImageTrans-docs/issues/170#issuecomment-1058741066)
* Có thể phát âm thanh thông báo sau khi hoàn thành thao tác quy trình làm việc tùy chỉnh [#issue171](https://github.com/xulihang/ImageTrans-docs/issues/171)
* Cỡ chữ trên thanh công cụ phông chữ hiện có thể nhập trực tiếp [#issue176](https://github.com/xulihang/ImageTrans-docs/issues/176)

## v1.6.1 (2022/02/26)

* Hỗ trợ dùng chuột kéo để xoay hộp văn bản. Góc xoay có thể dùng để chỉnh ảnh văn bản, từ đó nâng cao tỷ lệ nhận dạng [#issue157](https://github.com/xulihang/ImageTrans-docs/issues/157)
* Bổ sung thanh tiến độ xử lý hàng loạt cho phát hiện phân cảnh và phát hiện màu [#issue153](https://github.com/xulihang/ImageTrans-docs/issues/153)
* TTS chuyển văn bản thành giọng nói có thêm cài đặt tốc độ đọc và hỗ trợ đọc đồng thời văn bản gốc và bản dịch [#issue152](https://github.com/xulihang/ImageTrans-docs/issues/152)
* Sửa lỗi chỉ số văn bản của script Photoshop AU3 [#issue160](https://github.com/xulihang/ImageTrans-docs/issues/160)

## v1.6.0 (2022/02/06)

* Thêm chức năng phát hiện phân cảnh truyện tranh, có thể dùng để sắp xếp vùng chữ và đọc theo phân cảnh trên thiết bị di động [#issue147](https://github.com/xulihang/ImageTrans-docs/issues/147)
* Thêm menu chuột phải xem bản dịch máy, có thể xem kết quả dịch sau khi ghép văn bản của nhiều vùng chữ, chủ yếu dùng cho trường hợp một câu bị chia sang các bóng thoại khác nhau [#issue118](https://github.com/xulihang/ImageTrans-docs/issues/118)
* Các tối ưu hiệu năng và sửa lỗi khác

## v1.5.5 (2022/01/31)

* Phát hiện bóng thoại hỗ trợ truyện tranh dạng dải dài [#issue138](https://github.com/xulihang/ImageTrans-docs/issues/138)
* Điều chỉnh cỡ chữ tự động hỗ trợ đặt cỡ chữ tối đa [#issue146](https://github.com/xulihang/ImageTrans-docs/issues/146)
* Trình đọc màn hình có thêm chức năng theo dõi clipboard [#issue145](https://github.com/xulihang/ImageTrans-docs/issues/145)
* Kết quả dịch của trình dịch im lặng sẽ lưu thông tin đường dẫn tệp gốc [#issue144](https://github.com/xulihang/ImageTrans-docs/issues/144)
* Plugin dịch máy mới: DeepL [#issue15](https://github.com/xulihang/ImageTrans-docs/issues/15)
* Thao tác mở rộng vùng sẽ kiểm tra kích thước ảnh để tránh vượt ra ngoài phạm vi ảnh
* Di chuyển thanh cuộn lên trên khi chuyển ảnh

## v1.5.4 (2022/01/22)

* Sửa lỗi bản địa hóa của một trang tùy chọn [#issue141](https://github.com/xulihang/ImageTrans-docs/issues/141)
* Thêm tùy chọn thu nhỏ ảnh trước khi phát hiện bóng thoại (mặc định thu nhỏ về 1024 pixel) [#issue137](https://github.com/xulihang/ImageTrans-docs/issues/137)

## v1.5.3 (2022/01/16)

* Cập nhật OpenCV lên 4.5.5 để hỗ trợ Scaled-Yolo V4 [#issue129](https://github.com/xulihang/ImageTrans-docs/issues/129)
* Hỗ trợ xuất vùng chữ và nhập lại kết quả OCR của từng ảnh [#issue124](https://github.com/xulihang/ImageTrans-docs/issues/124)
* Chế độ xóa văn bản phủ màu đặc có thể đặt nền thành hình chữ nhật bo góc [#issue123](https://github.com/xulihang/ImageTrans-docs/issues/123)
* Sửa lỗi hành vi không nhất quán của văn bản căn giữa theo chiều dọc ở các tỷ lệ khác nhau [#issue122](https://github.com/xulihang/ImageTrans-docs/issues/122)
* Chức năng tự động sửa cũng có thể dùng cho dịch máy [#issue133](https://github.com/xulihang/ImageTrans-docs/issues/133)
* Các tối ưu giao diện và hiệu năng khác

## v1.5.2 (2021/12/26)

* Thêm chức năng chuyển văn bản thành giọng nói (TTS)
* Có thể xóa vùng chữ trực tiếp bằng phím Delete
* Phát hiện văn bản theo heuristic hỗ trợ đặt thời gian chờ
* Các sửa lỗi khác
## v1.5.1 (2021/12/05)

* Hoàn thiện hành vi của trình đọc màn hình [issue 110](https://github.com/xulihang/ImageTrans-docs/issues/110)
* Hoàn thiện hành vi của chế độ sắp chữ khi văn bản được căn phải

## v1.5.0 (2021/11/14)

* Hỗ trợ tải tệp phông chữ thủ công [issue 100](https://github.com/xulihang/ImageTrans-docs/issues/100)
* Thêm trợ lý nhập liệu tương thích dựa trên Swing JTextArea, dùng để tạm thời giải quyết vấn đề nhập tiếng Tây Tạng của JavaFX [issue 99](https://github.com/xulihang/ImageTrans-docs/issues/99)
* Thêm cài đặt dự án: phông chữ vùng chỉnh sửa
* Các sửa lỗi khác

## v1.4.8 (2021/10/30)

* Thống nhất hiển thị hộp văn bản ở tỷ lệ 100% và các tỷ lệ hiển thị khác [issue 94](https://github.com/xulihang/ImageTrans-docs/issues/94)
* Plugin OCR mới: Google Drive OCR [issue 91](https://github.com/xulihang/ImageTrans-docs/issues/91)
* Sửa lỗi Google OCR không lấy đúng văn bản

## v1.4.7 (2021/10/17)

* Dùng luồng để chạy phát hiện văn bản theo heuristic nhằm tránh chương trình không phản hồi
* Thống nhất hành vi thao tác OCR của trình đọc màn hình và chương trình chính
* Điều chỉnh tỷ lệ hiển thị mặc định thành 100%

## v1.4.6 (2021/10/06)

* Thêm chế độ nhận dạng dòng văn bản Tesseract. ImageTrans định vị dòng văn bản trước rồi dùng Tesseract nhận dạng từng dòng, có thể nâng cao đáng kể độ chính xác ([issue87](https://github.com/xulihang/ImageTrans-docs/issues/87))
* Thêm tùy chọn tự động viết hoa
* Trình đọc màn hình có thêm tùy chọn tự động dịch máy
* Các sửa lỗi khác

## v1.4.5 (2021/09/25)

* Thêm trợ lý dịch im lặng
* Thêm phương pháp loại bỏ furigana dựa trên phép chiếu
* Cập nhật OpenCV lên 4.5.3, hỗ trợ chức năng phát hiện và nhận dạng văn bản tích hợp của OpenCV ([địa chỉ plugin](https://github.com/xulihang/ImageTrans-docs/issues/85)).
* Thêm plugin OCR tiếng Nhật: [読取革命](https://github.com/xulihang/ImageTrans-docs/issues/83).
* Các sửa lỗi khác

## v1.4.4 (2021/08/07)

* Sửa lỗi chiều rộng và chiều cao của văn bản bị xoay không đúng khi tạo ảnh bản dịch độ phân giải cao
* Sửa lỗi không điều chỉnh vị trí văn bản sau khi tự động điều chỉnh vùng quá nhỏ khi sắp chữ dọc
* Mục menu mới: mở thư mục dự án

## v1.4.3 (2021/08/05)

* Sửa lỗi không cập nhật cài đặt phông chữ của vùng chữ hiện tại khi chuyển thanh công cụ sang thanh công cụ phông chữ
* Sửa lỗi nút căn giữa theo chiều dọc trên thanh công cụ phông chữ không cập nhật trạng thái khi chuyển vùng chữ
* Hoàn thiện hiệu quả căn giữa theo chiều dọc
* Các tối ưu khác

## v1.4.2 (2021/07/25)

* Sửa lỗi xuất ảnh có độ phân giải lớn (chiều rộng hoặc chiều cao >8000) thất bại
* Văn bản sắp xếp dọc hỗ trợ tự động điều chỉnh cỡ chữ
* Cập nhật thao tác điều chỉnh vùng chữ sắp xếp dọc để phù hợp với thay đổi ở phiên bản 1.4.1 về căn phải văn bản: nhấp chuột vào bên trái vùng để điều chỉnh kích thước, bên phải để điều chỉnh vị trí
* Các tối ưu khác


## v1.4.1 (2021/07/18)

* Thêm tùy chọn căn giữa văn bản theo chiều dọc ([#issue72](https://github.com/xulihang/ImageTrans-docs/issues/72))
* Thêm phím tắt xóa vùng chữ ([#issue71](https://github.com/xulihang/ImageTrans-docs/issues/71))
* Khi chưa lưu mặt nạ văn bản, nếu không thêm, xóa hoặc điều chỉnh vùng chữ thì không tạo lại ảnh đã xóa văn bản
* Thêm tiếng Việt, tiếng Hindi và tiếng Indonesia vào danh sách ngôn ngữ mặc định (các phiên bản trước phải nhập thủ công mã ngôn ngữ) ([#issue61](https://github.com/xulihang/ImageTrans-docs/issues/61))
* Văn bản dọc mặc định bắt đầu sắp xếp từ bên phải
* Các tối ưu khác

## v1.4.0 (2021/06/14)

* Thêm thao tác lưu thành tệp khác
* Thêm menu điều hướng
* Thêm trình quản lý ảnh đã dịch, ảnh được đánh dấu đã dịch sẽ bị bỏ qua khi thao tác hàng loạt ([#issue59](https://github.com/xulihang/ImageTrans-docs/issues/59))
* Trình chỉnh sửa văn bản gốc và bản dịch có thể trở thành cửa sổ hoạt động
* Dùng Spinner làm điều khiển điều chỉnh tỷ lệ hiển thị ảnh
* Tự động đóng dự án đã mở khi mở dự án ([#issue39](https://github.com/xulihang/ImageTrans-docs/issues/39))


## v1.3.7 (2021/05/04)

* Giữ trạng thái khi chuyển thanh công cụ ([#issue47](https://github.com/xulihang/ImageTrans-docs/issues/47))
* Sửa lỗi xuất dữ liệu không bao gồm bản dịch ([#issue45](https://github.com/xulihang/ImageTrans-docs/issues/45))

## v1.3.6 (2021/05/02)

* Xóa bằng chuột phải và đảo ngược độ tin cậy hỗ trợ thao tác trên tất cả vùng chữ đã chọn
* Có thể chọn nhiều vùng chữ bằng cách nhấp khi giữ phím Control
* Thêm chức năng xóa văn bản gốc và bản dịch vào menu chuột phải của vùng chữ
* Các tối ưu khác

## v1.3.5 Update2 (2021/04/26)

* Hiển thị thông báo thân thiện khi thực hiện nhập ảnh mà chưa mở dự án
* Thêm hỗ trợ phần mở rộng JPEG

## v1.3.5 Update (2021/04/06)

* Bộ chọn ngôn ngữ không còn hiện ra khi mở dự án trước đây
* Đặt văn bản khi di chuột trên bộ chọn ảnh thành tên tệp hiện tại

## v1.3.5 (2021/03/30)

* Hoàn thiện chức năng dịch nhiều câu trong một yêu cầu dịch máy, Baidu hiện cũng hỗ trợ dịch hàng loạt
* Phương pháp định vị theo heuristic có thêm chức năng tự động điều chỉnh tham số (thử nghiệm)
* Hoàn thiện thao tác kiểu phông chữ, hỗ trợ di chuyển và nhập từ dự án khác
* Yêu cầu đặt cặp ngôn ngữ khi tạo dự án mới
* Thống nhất bộ chọn màu phông chữ
* Cải thiện chức năng hoàn tác

## v1.3.4 (2021/03/27)

Giải quyết các vấn đề được nêu trên GitHub: [#16](https://github.com/xulihang/ImageTrans-docs/issues/16), [#19](https://github.com/xulihang/ImageTrans-docs/issues/19), [#22](https://github.com/xulihang/ImageTrans-docs/issues/22), [#23](https://github.com/xulihang/ImageTrans-docs/issues/23)

## v1.3.3 (2021/03/23)

* Cập nhật [ImageTrans_OCR](https://github.com/xulihang/ImageTrans_OCR), thêm [ChineseOCR](https://github.com/ouyanghuiyu/chineseocr_lite), hỗ trợ kết hợp các phương pháp phát hiện và nhận dạng văn bản khác nhau, đồng thời cập nhật plugin tương ứng
* Sửa lỗi Index vượt quá số lượng hộp văn bản khi OCR hàng loạt. [Issue tương ứng](https://github.com/xulihang/ImageTrans-docs/issues/6)
* Thêm cài đặt khoảng thời gian OCR

## v1.3.2 (2021/03/07)

* Khi OCR một vùng chữ, nếu hình ảnh quá nhỏ thì phóng to
* Bản địa hóa các bố cục bị bỏ sót trước đây
* Plugin OCR mới: CRAFT+CRNN. Plugin dựa trên [dự án ImageTrans_OCR](https://github.com/xulihang/ImageTrans_OCR) mới. Dự án này được lên kế hoạch trở thành dịch vụ OCR ngoại tuyến tổng hợp các phương pháp hiện có với khả năng tùy chỉnh, tốc độ nhận dạng và độ chính xác tốt.

## v1.3.1 (2021/02/28)

* Plugin OCR mới: Clova OCR của Naver.
* Hỗ trợ nhanh chóng hợp nhất hoặc xóa vùng ở chế độ chọn bằng khung
* Thêm tùy chọn OCR sau khi chọn bằng khung
* Thêm phím tắt thao tác vùng chữ (di chuyển và OCR)
* Phát hiện bóng thoại ngoại tuyến dựa trên mô-đun Dnn của OpenCV, có thể gọi mô hình do [DarkNet](https://zhuanlan.zhihu.com/p/346021510) hoặc [TensorFlow Object Detection API](https://github.com/opencv/opencv/wiki/TensorFlow-Object-Detection-API) tạo ra. Cần đặt tệp mô hình, tệp cấu hình mô hình và model.json vào thư mục gốc của phần mềm ([ví dụ](/assets/model.json)).
* Trình chỉnh sửa văn bản hỗ trợ hiển thị văn bản gốc và bản dịch trên dưới


## v1.3.0 (2021/02/10)

* Thêm chức năng quy trình làm việc tùy chỉnh, có thể tự định nghĩa quy trình xử lý hàng loạt
* Hỗ trợ nhập PDF. PDF sẽ được xuất thành ảnh. Nếu văn bản trong PDF có thể sao chép, văn bản cũng sẽ được nhập

## v1.2.11

* Sửa lỗi vị trí vùng bản dịch không được lưu đúng
* Sửa lỗi đường dẫn lưu tệp script Photoshop
* Trình chỉnh sửa mặt nạ hỗ trợ tạo mặt nạ bằng màu chỉ định và có thể hiển thị mặt nạ với độ trong suốt một nửa
* Hỗ trợ gọi Caiyun Xiaoyi để yêu cầu dịch nhiều câu cùng lúc, có thể nâng cao đáng kể tốc độ dịch máy
* Dịch trước bằng dịch máy hỗ trợ đặt khoảng thời gian yêu cầu để tránh không lấy được bản dịch do số lần yêu cầu trong một đơn vị thời gian quá nhiều (nhà cung cấp dịch máy thường đặt QPS)

## v1.2.10

* Plugin OCR mới: ABBYY Cloud
* Hỗ trợ dùng LanguageTool kiểm tra chính tả kết quả nhận dạng OCR


## v1.2.9

* Nếu thứ tự đọc là từ phải sang trái, lật hộp văn bản trước khi sắp xếp
* Trình xóa văn bản có thêm tùy chọn bán kính sửa ảnh
* Thêm chủ đề. Hiện cung cấp chủ đề tối và chủ đề xanh lá.
* Một số OCR và dịch máy mặc định dùng API key cá nhân của tôi; dịch máy gồm Baidu, Xiaoniu và Tencent, OCR gồm OCRSPACE, Azure và Baidu.

## v1.2.8

* Thêm chức năng hoàn tác
* Dùng TextFlow làm công cụ kết xuất văn bản mặc định. Văn bản sẽ không còn hiển thị dấu ba chấm.
* Chuyển tỷ lệ hiển thị không làm thay đổi phông chữ và bố cục
* Các tối ưu khác

## v1.2.7

* Hỗ trợ chạy nhiều phiên bản tesseract cùng lúc để tăng tốc OCR
* Giữ bản ghi xác thực trong 7 ngày
* Sogou OCR hỗ trợ thứ tự đọc từ phải sang trái
* Thêm Baidu OCR bản chính xác
* Sửa lỗi tìm kiếm và thay thế (hành vi chuyển đoạn sai và thay thế thất bại do bản địa hóa)

## v1.2.6

* Ảnh định dạng WebP tải xuống từ liên kết sẽ được chuyển thành định dạng JPG (dùng OpenCV) 
* Hỗ trợ loại bỏ furigana trong truyện tranh Nhật Bản để có kết quả OCR tốt hơn
* Chuyển đổi tốt hơn văn bản tiếng Nhật sắp xếp dọc thành ảnh sắp xếp ngang (xoay và căn giữa các nội dung như “—”)
* Hỗ trợ thao tác thống nhất kiểu phông chữ
* Vùng chữ thu được từ OCR cũng sẽ được mở rộng

## v1.2.5

* Sửa lỗi vị trí vùng chữ bản dịch bị vị trí vùng văn bản gốc phủ lên
* Trình chỉnh sửa mặt nạ hỗ trợ chế độ cọ vẽ
* Cài đặt phông chữ hỗ trợ đặt chữ hoa
* Phát hiện văn bản có thêm cài đặt tỷ lệ chồng lấn chiều rộng/chiều cao tối thiểu
* Sửa lỗi vùng chữ không được thêm khi có chồng lấn
* Script Photoshop hỗ trợ đặt các kiểu như chữ đậm, chữ nghiêng, chữ hoa và xoay

## v1.2.4

* Thêm hỗ trợ tiện ích mở rộng (plugin) ImageTrans Chrome. Truy cập [tại đây](https://github.com/xulihang/ImageTrans_chrome_extension) để xem hướng dẫn sử dụng.
* Không nhập mặt nạ văn bản, ảnh đã xóa văn bản và ảnh thành phẩm đã xuất khi nhập ảnh
* Sửa lỗi chức năng ghi nhớ dự án gần đây của v1.2.2 khiến không thể tạo dự án mới bình thường
* Các tối ưu khác

## v1.2.3

* Thêm tùy chọn dịch sau OCR
* Ở chế độ không chính xác, khi xem bản dịch, nếu văn bản gốc và bản dịch đều trống, nền hộp văn bản trở nên trong suốt để dễ xem văn bản gốc
* Thao tác phát hiện vùng chữ khi dịch hàng loạt có thêm phát hiện văn bản trong cảnh tự nhiên và phát hiện bóng thoại
* Trình dịch im lặng hỗ trợ đặt phông chữ
* Thêm menu chuột phải, hỗ trợ tải ảnh vào dự án theo liên kết ảnh

## v1.2.2

* Thêm trình dịch im lặng, có thể dịch ảnh hàng loạt, hỗ trợ gọi từ dòng lệnh hoặc chạy dưới dạng [máy chủ](https://github.com/xulihang/ImageTrans_Server)
* Plugin OCR mới: Sogou Shenzhi OCR
* Lưu đường dẫn dự án mở gần đây
* Chức năng dịch một chạm nếu dùng OCR sẽ hỏi có thực hiện hợp nhất vùng hay không


## v1.2.1

* Hỗ trợ kéo nhiều hộp văn bản cùng lúc
* Hỗ trợ căn chỉnh nhiều hộp văn bản
* Kiểu phông chữ toàn cục hỗ trợ đặt nền, đường viền và xoay
* Thêm thao tác dán ảnh bằng chuột phải

## v1.2.0

* Nếu thứ tự đọc được đặt từ phải sang trái, hợp nhất văn bản theo thứ tự ngược của thứ tự tọa độ
* Thêm plugin tạo mặt nạ và sửa ảnh. Plugin đầu tiên được thêm là [Sickzil-Machine](https://github.com/xulihang/SickZil-Machine)
* Tesseract hỗ trợ phát hiện vùng chữ trên toàn bộ ảnh
* Hỗ trợ dịch trước và dịch một chạm cho ảnh đơn (gọi bằng chuột phải trên ảnh)
* Thay thế phương pháp phát hiện văn bản trong cảnh tự nhiên trong dịch một chạm bằng OCR
* Thêm cài đặt cỡ chữ tối thiểu
* Thêm tùy chọn tự động điều chỉnh kích thước vùng chữ
* Dùng hộp kiểm thay vì nút để xem ảnh bản dịch
* Tìm kiếm và thay thế hỗ trợ xử lý văn bản gốc
* Các cải tiến nhỏ khác

## v1.1.11

* Plugin OCR mới: [easyOCR](https://www.jaided.ai/easyocr), nhận dạng văn bản Tencent
* Danh sách ngôn ngữ OCR chỉ hiển thị các ngôn ngữ được công cụ đã chọn hỗ trợ
* Khi mở rộng vùng, lưu vùng gốc làm vùng văn bản đích
* Sửa phương pháp bản địa hóa của TabPane

## v1.1.10

* Trình đọc màn hình có thêm dịch máy
* Loại bỏ một số thư viện bên thứ ba
## v1.1.9

* Cập nhật OpenCV lên 4.5.0
* Độ tin cậy của vùng chữ hỗ trợ lấy ngoại tuyến và hiển thị tiến độ thao tác
* Plugin OCR mới: WinRT OCR, hỗ trợ gọi chức năng OCR tích hợp của Windows 10, cần cài đặt gói ngôn ngữ tương ứng trên hệ thống
* Đóng gói một phần plugin dịch máy của BasicCAT
* Tối ưu giao diện


## v1.1.8

* Tạo mặt nạ văn bản và ảnh đã xóa văn bản theo thứ tự và hiển thị tiến độ xử lý hàng loạt
* Thao tác sửa ảnh chuyển sang dùng luồng khác để tránh chương trình không phản hồi
* Kiểm tra vị trí vùng chữ có đúng hay không khi tạo mặt nạ
* Sửa lỗi mặt nạ văn bản và hình ảnh bị lệch khi xử lý ảnh quá lớn
* Thêm các thao tác liên quan đến vùng chữ vào menu chuột phải của ảnh

## v1.1.7

* Trình chỉnh sửa mặt nạ hỗ trợ thu phóng và tạo mặt nạ trong vùng đã chọn
* Trình xóa văn bản có thể xóa văn bản trong vùng đã chọn
* Màu mặc định của mặt nạ được đổi lại thành màu đỏ
* Thêm chức năng chỉnh sửa ảnh đã xóa văn bản
* Sửa lỗi

## v1.1.6

* Dùng PNG để lưu mặt nạ văn bản, để chế độ xóa văn bản bằng cách phủ màu hỗ trợ trường hợp màu nền là màu đen
* Hỗ trợ tạo bản sao hộp văn bản


## v1.1.5

* Thêm công cụ sắp chữ văn bản dọc CJK
* Thêm chức năng tự động sửa (có thể dùng để giải quyết vấn đề nhập dấu câu toàn độ rộng trên macOS)
* Sửa lỗi

## v1.1.4

* Công cụ mới trên thanh công cụ: cài đặt phông chữ
* Đường dẫn đã chọn trước đây sẽ được dùng chung cho thao tác tạo dự án mới và nhập ảnh
* Chọn màu tốt hơn

## v1.1.3

* Loại plugin mới: plugin OCR. Mã nguồn mở: [github](https://github.com/xulihang/ImageTrans_plugins). Hỗ trợ gọi PaddleOCR ngoại tuyến.
* Công cụ OCR mới: ABBYY (dùng [giao diện dòng lệnh](https://stackoverflow.com/questions/16385443/abbyy-finereader-exe-looking-for-cmd-commands-to-use-in-other-programms) của ABBYY FineReader, chỉ hỗ trợ Windows)
* Công cụ mới: trình đọc màn hình. Có thể dùng như công cụ chụp ảnh, ảnh chụp có thể gọi công cụ OCR của ImageTrans để nhận dạng văn bản, cũng có thể thêm trực tiếp vào dự án ImageTrans.
* Thêm thanh công cụ cung cấp nhiều thao tác hơn, ví dụ chia tách, hợp nhất và chọn vùng chữ.
* Hình dạng chuột sẽ thay đổi phù hợp theo thao tác được cung cấp.

## v1.1.2

Tùy chọn OCR mới: chuyển ảnh có văn bản sắp xếp dọc thành sắp xếp ngang, phù hợp với tiếng Nhật dọc, có thể cải thiện kết quả OCR

## v1.1.1

* Thêm chức năng dịch một chạm
* Thêm chức năng phát hiện vùng chữ dựa trên phát hiện văn bản trong cảnh tự nhiên
* Ghi nhớ đường dẫn tệp đã chọn trước đó

## v1.1.0

* Thêm trình xóa văn bản bên ngoài (thử nghiệm)
* Thêm hỗ trợ bản địa hóa. Phần mềm hiện có thể hiển thị bằng tiếng Trung và tiếng Anh.

## v1.0.1

* Nhiều cài đặt hơn
* Hỗ trợ rich text
* Nhập và xuất XLIFF

## v1.0.0 (2020/03/13)

Phần mềm được phát hành.

{% include comments.html %}
