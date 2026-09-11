# Xin lỗi em

Hai bản của cùng một món quà. Mở bằng điện thoại.

## File
- `index.html` — **bản phim**, trang chính. Tự chạy qua 7 cảnh theo nhạc, không cuộn.
- `cuon.html` — bản trang cuộn, có đầy đủ lời bài hát và khu vực ảnh.
- `audio/bai-hat.mp3` — bài hát (4:18)
- `sw.js` — cache cho bản cuộn, chạy offline sau lần đầu
- `images/` — ảnh cho bản cuộn, **chưa có**

## Bản phim — canh nhạc
Mốc cảnh nằm ở mảng `CUES` đầu file `index.html`, đang đặt theo độ dài bài
(0 / 38 / 76 / 104 / 150 / 205 / 247 giây).

Muốn canh cho khớp thật thì không cần sửa code: **bấm 3 lần vào góc dưới bên
trái màn hình** để mở bảng canh nhạc. Nghe tới đoạn muốn đổi cảnh thì bấm ⏱
của cảnh đó, nó lấy đúng giây đang chạy. Xong bấm "Chép mảng CUES" rồi dán đè
vào mảng `CUES` trong file để giữ luôn.

Nhạc chỉ chạy sau khi bấm "Bắt đầu" — iPhone yêu cầu vậy. Nút tắt/bật tiếng
ở góc trên phải.

Nếu máy bật *Reduce Motion* thì trang bỏ mưa và hiệu ứng ánh sáng, chỉ còn
chữ hiện dần. Đúng ý đồ, không phải lỗi.

## Bản cuộn — còn phải làm
Bỏ 3 tấm ảnh vào `images/`, đặt tên `1.jpg` `2.jpg` `3.jpg`, mỗi tấm dưới
300 KB. Chưa có ảnh thì phần đó tự ẩn, không vỡ trang.
Sửa dòng ký tên cuối trang (tìm chuỗi `— Anh · 11.09.2026`).

## Deploy
Import repo vào https://vercel.com/new, bấm Deploy. Không cần build.
Link gốc ra bản phim; bản cuộn ở `/cuon`.

## Trước khi gửi
Tự mở link bằng điện thoại, tắt Wi-Fi chạy 4G, xem hết một lượt.
File nhạc 5.7 MB nên lần đầu trên 4G hơi lâu — nghe thử trước cho chắc.
