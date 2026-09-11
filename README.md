# Xin lỗi em

Một trang chạy như phim ngắn, tự đi qua 7 cảnh theo nhạc. Mở bằng điện thoại.

## File
- `index.html` — toàn bộ trang, CSS và JS nhúng sẵn bên trong
- `audio/bai-hat.mp3` — bài hát (4:18)
- `sw.js` — cache trang và nhạc, lần sau mở gần như không cần mạng

## Canh nhạc
Mốc cảnh nằm ở mảng `CUES` đầu file `index.html`, đang đặt theo độ dài bài
(0 / 38 / 76 / 104 / 150 / 205 / 247 giây).

Không cần sửa code: **bấm 3 lần vào góc dưới bên trái màn hình** để mở bảng
canh nhạc. Nghe tới đoạn muốn đổi cảnh thì bấm ⏱ của cảnh đó, nó lấy đúng
giây đang chạy; ▶ để tua tới thử lại. Số đã sửa tự lưu trong máy đó. Bấm
"Chép mảng CUES" rồi dán đè vào mảng `CUES` trong file để giữ luôn.

## Mấy điều đã tính sẵn
- Nhạc chỉ chạy sau khi bấm "Bắt đầu" — iPhone bắt buộc vậy.
- Nút tắt/bật tiếng ở góc trên phải, luôn hiện.
- Máy bật *Reduce Motion* thì bỏ mưa và hiệu ứng ánh sáng, chỉ còn chữ hiện
  dần. Đúng ý đồ, không phải lỗi.
- Không có file nhạc thì trang vẫn chạy bằng đồng hồ giả để xem thử.

## Deploy
Import repo, không cần build, không cần cấu hình.

Sau mỗi lần deploy lại mà máy cũ vẫn thấy bản cũ: đổi số ở dòng `CACHE` trong
`sw.js` (vd `sorry-v4` → `sorry-v5`) rồi đẩy lại. Trang HTML đã để chế độ ưu
tiên mạng nên bình thường chỉ cần tải lại một lần là ra bản mới.

## Trước khi gửi
Tự mở link bằng điện thoại, tắt Wi-Fi chạy 4G, xem hết một lượt.
File nhạc 5.7 MB nên lần đầu trên 4G hơi lâu.
