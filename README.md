# 👶 Mẹ Bỉm Thông Thái - Nền Tảng Chăm Sóc Bé Yêu Khoa Học

> Nền tảng số hóa cẩm nang nuôi con chuẩn y khoa kết hợp diễn đàn chia sẻ và trợ lý trí tuệ nhân tạo (AI) thấu cảm dành riêng cho các mẹ bỉm sữa Việt Nam.
>
> 🌐 **Website chính thức:** [mebimthongthai.io.vn](https://mebimthongthai.io.vn)

Dự án được xây dựng với cấu trúc **Production-Ready**, tích hợp cơ chế đồng bộ dữ liệu đám mây thời gian thực với **Neon Postgres** và có hệ thống Fallback an toàn về LocalStorage khi chạy ngoại tuyến (Offline).

---

## 🚀 Tính Năng Nổi Bật

1. **📚 Cẩm nang Kiến thức:** Hơn 10+ bài viết chất lượng cao chuẩn SEO được y khoa khuyên dùng (Tắm bé sơ sinh, Thực đơn ăn dặm BLW, Luyện tự ngủ EASY, Chăm sóc mẹ sau sinh...).
2. **📊 Bộ Công cụ Theo dõi (Trackers):**
   * Theo dõi lượng sữa bú (Ăn dặm, bú mẹ trực tiếp, sữa công thức).
   * Nhật ký giấc ngủ hàng ngày của bé.
   * Nhật ký thay tã.
   * Biểu đồ theo dõi chiều cao, cân nặng, vòng đầu chuẩn WHO (sử dụng Chart.js).
   * Lịch tiêm phòng tự động từ sơ sinh đến 2 tuổi.
3. **💬 Diễn đàn Cộng đồng:** Nơi các mẹ bỉm đặt câu hỏi, thảo luận, thả tim và chia sẻ kinh nghiệm thực tế. Hỗ trợ chế độ **Đăng bài Ẩn danh** để bảo vệ sự riêng tư tuyệt đối.
4. **🤖 Trợ lý AI Bác sĩ thấu cảm:** Hỗ trợ giải đáp các thắc mắc về bệnh lý nhi khoa phổ biến dựa trên khoa học, đưa ra những lời khuyên kịp thời và ân cần.
5. **⚙️ Trang Quản trị (Admin Panel):** Quản lý bài viết chuẩn SEO, tích hợp trường sinh dữ liệu FAQ Schema giúp bài viết dễ dàng lọt top tìm kiếm Google.

---

## 🛠️ Công Nghệ Sử Dụng

* **Frontend:** HTML5, CSS3, Tailwind CSS (giao diện thiết kế Glassmorphism hiện đại, cao cấp), React 18 (Client-side rendering qua Babel Standalone).
* **Backend:** Node.js, Express.js.
* **Database:** Neon Postgres (Cơ sở dữ liệu đám mây Serverless) kết nối qua driver `pg`.
* **Trí tuệ nhân tạo:** Tích hợp AI mô phỏng kiến thức bác sĩ nhi khoa.

---

## 📁 Cấu Trúc Thư Mục Dự Án

```text
├── public/                 # Thư mục chứa hình ảnh tĩnh của ứng dụng
├── viet_mom_baby.png       # Ảnh thiết kế AI trang chủ (Mẹ và bé Việt)
├── viet_baby_eating.png    # Ảnh thiết kế AI chuyên mục Ăn dặm
├── viet_baby_sleeping.png  # Ảnh thiết kế AI chuyên mục Giấc ngủ
├── index.html              # Toàn bộ mã nguồn giao diện chính & logic React
├── styles.css              # Tùy biến hiệu ứng CSS đặc quyền (Glassmorphism, animations)
├── db.js                   # Công cụ quản lý dữ liệu (Two-way Cloud Sync Engine)
├── ai.js                   # Động cơ Trợ lý AI Bác sĩ nhi khoa
├── server.js               # Máy chủ Express kết nối Neon Postgres đám mây
├── seed.js                 # Script nạp dữ liệu mẫu lên đám mây
├── copy_images.js          # Script sao chép tài nguyên hình ảnh
├── .env                    # Lưu trữ các biến môi trường cấu hình DB (Không push lên GitHub)
├── .gitignore              # Chỉ định các file Git cần bỏ qua
└── README.md               # Tài liệu hướng dẫn này
```

---

## 💻 Hướng Dẫn Cài Đặt & Chạy Cục Bộ (Local)

### 1. Yêu cầu hệ thống
Đảm bảo máy tính của bạn đã cài đặt sẵn [Node.js](https://nodejs.org/) (Khuyên dùng phiên bản LTS mới nhất).

### 2. Cài đặt các thư viện phụ thuộc
Mở Terminal tại thư mục dự án và chạy lệnh sau để tải các package cần thiết:
```bash
npm install
```

### 3. Cấu hình biến môi trường
Tạo file tên là `.env` ở thư mục gốc của dự án (nếu chưa có) và điền đường dẫn kết nối Neon Postgres của bạn:
```env
# Chuỗi kết nối Postgres lấy từ trang quản trị Neon Console
DATABASE_URL=postgresql://username:password@ep-your-subdomain.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require

# Cổng khởi chạy máy chủ Node.js cục bộ
PORT=3000
```

### 4. Nạp dữ liệu mẫu lên mây
Để đẩy toàn bộ bài viết uy tín y khoa lên Neon Postgres làm giàu dữ liệu ban đầu, chạy lệnh:
```bash
node seed.js
```

### 5. Khởi chạy máy chủ phát triển
Chạy lệnh bên dưới để bật server:
```bash
npm run dev
```
Sau đó mở trình duyệt và truy cập vào địa chỉ: **`http://localhost:3000`** để trải nghiệm ứng dụng!

---

## 📤 Hướng Dẫn Đẩy Mã Nguồn Lên GitHub (Git Push)

Để đưa mã nguồn của bạn lên GitHub nhằm lưu trữ và triển khai (Deploy) công khai, hãy làm theo các bước chuẩn mực dưới đây:

### ⚠️ QUAN TRỌNG: Không bao giờ push file `.env` lên GitHub!
Trước khi làm bất cứ điều gì, hãy đảm bảo bạn đã tạo file `.gitignore` để tránh rò rỉ tài khoản Neon Postgres của bạn ra ngoài internet.

Nội dung file `.gitignore` tiêu chuẩn (đã được tạo sẵn trong dự án):
```text
node_modules/
.env
.DS_Store
```

---

### Các bước đẩy dự án lên GitHub:

#### Bước 1: Khởi tạo Git trong thư mục dự án
Mở Terminal tại thư mục của dự án `Me & Be` và gõ:
```bash
git init
```

#### Bước 2: Thêm toàn bộ các file vào khu vực chuẩn bị (Staging)
```bash
git add .
```
*(Lệnh này sẽ tự động bỏ qua các file được khai báo trong `.gitignore` như `.env` và thư mục nặng `node_modules`).*

#### Bước 3: Commit (Lưu trạng thái mã nguồn) đầu tiên
```bash
git commit -m "feat: hoan thien he thong Me Bim Thong Thai voi Neon Cloud Sync"
```

#### Bước 4: Tạo một Repository (Kho chứa) mới trên GitHub
1. Truy cập vào trang cá nhân [GitHub](https://github.com/) của bạn.
2. Bấm vào nút **New** (hoặc dấu cộng `+` góc trên bên phải -> chọn *New repository*).
3. Đặt tên kho chứa (Repository name), ví dụ: `me-bim-thong-thai`.
4. Chọn chế độ **Public** hoặc **Private** tùy theo nhu cầu của bạn.
5. **Tuyệt đối KHÔNG tích chọn** vào các ô *Add a README.md*, *Add .gitignore* hay *Choose a license* (vì dự án của chúng ta đã có sẵn các file này).
6. Bấm nút **Create repository**.

#### Bước 5: Liên kết thư mục cục bộ với Kho chứa trên GitHub
Sau khi tạo xong, GitHub sẽ hiển thị một số dòng lệnh. Hãy copy dòng lệnh liên kết và chạy trong Terminal của bạn. Ví dụ:
```bash
# Đổi tên nhánh mặc định thành main
git branch -M main

# Thay URL bên dưới bằng URL kho chứa thực tế của bạn
git remote add origin https://github.com/tai-khoan-cua-ban/me-bim-thong-thai.git
```

#### Bước 6: Đẩy mã nguồn lên GitHub
Gõ lệnh cuối cùng này để đẩy toàn bộ code lên đám mây GitHub:
```bash
git push -u origin main
```

Từ lần tiếp theo, mỗi khi bạn sửa code, bạn chỉ cần chạy 3 lệnh đơn giản sau để cập nhật lên GitHub:
```bash
git add .
git commit -m "Sửa đổi nội dung giao diện"
git push
```

---

## 🛡️ Tuyên Bố Miễn Trừ Trách Nhiệm (Medical Disclaimer)

Toàn bộ thông tin, bài viết cẩm nang và phản hồi của Trợ lý AI trên nền tảng này chỉ mang tính chất tham khảo chung. Chúng tôi không chịu trách nhiệm pháp lý đối với bất kỳ quyết định tự điều trị bệnh tại nhà nào. Bố mẹ cần đưa bé đến cơ sở y tế hoặc bệnh viện nhi gần nhất nếu phát hiện bé có dấu hiệu sốt cao kéo dài hoặc suy hô hấp.

---
**💝 Mẹ Bỉm Thông Thái - Đồng hành cùng hàng triệu bà mẹ Việt nuôi dạy thế hệ tương lai khỏe mạnh, tự lập!**
