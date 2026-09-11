# Con Ngủ Rồi Anh Mới Chơi

Trang một-trang, mở bằng điện thoại.

## File
- `index.html` — toàn bộ trang (HTML + Tailwind CDN + JS thuần)
- `sw.js` — cache lại trang/font để lần sau mở gần như không cần mạng
- `audio/bai-hat.mp3` — bài hát (đã có sẵn, 5.9 MB)
- `images/1.jpg`, `2.jpg`, `3.jpg` — **chưa có**, bỏ vào là tự hiện

## Còn phải làm
1. Bỏ 3 tấm ảnh vào thư mục `images/`, đặt đúng tên `1.jpg` `2.jpg` `3.jpg`.
   Nén mỗi tấm dưới 300 KB cho đỡ lag 4G. Chưa có ảnh thì phần đó tự ẩn, không vỡ trang.
2. Sửa dòng ký tên ở cuối `index.html` (tìm chuỗi `— Anh · 11.09.2026`).

## Deploy
Kéo thả nguyên thư mục này vào https://vercel.com/new (hoặc Netlify Drop).
Không cần build, không cần cấu hình. Ra link dạng `ten-ban.vercel.app`.

## Trước khi gửi
Tự mở link bằng điện thoại, tắt Wi-Fi chạy 4G, bấm "Mở nghe" và nghe hết một lần.
Nhạc chỉ chạy sau khi bấm nút — đúng như trình duyệt yêu cầu, iPhone cũng chạy được.
