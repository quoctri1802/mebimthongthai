# Hướng Dẫn Cấu Hình Tên Miền Tùy Chỉnh `mebimthongthai.io.vn`

Chào bạn! Để tích hợp thành công tên miền **`mebimthongthai.io.vn`** vào dự án **Mẹ Bỉm Thông Thái** đang được deploy trên **Vercel**, bạn cần thực hiện 2 bước đơn giản dưới đây:

---

## 🚀 Bước 1: Thêm Tên Miền vào Vercel Dashboard

Bạn cần khai báo tên miền mới này với dự án trên tài khoản Vercel của bạn.

1. Truy cập vào **[Vercel Dashboard](https://vercel.com/dashboard)** và đăng nhập vào tài khoản của bạn.
2. Chọn dự án **`mebimthongthai`** (hoặc tên dự án bạn đã đặt cho app này).
3. Di chuyển đến tab **Settings** (Cài đặt) ở thanh menu phía trên.
4. Ở danh sách bên trái, chọn mục **Domains** (Tên miền).
5. Tại ô nhập tên miền, điền: **`mebimthongthai.io.vn`** rồi nhấn nút **Add** (Thêm).
6. Hệ thống Vercel sẽ hỏi bạn muốn cấu hình như thế nào. Bạn nên chọn tùy chọn khuyến nghị: **"Add mebimthongthai.io.vn and redirect www.mebimthongthai.io.vn to it"** (để người dùng gõ có `www` hay không có `www` đều vào được trang web của bạn).

---

## 🌐 Bước 2: Cấu Hình Bản Ghi DNS tại Nhà Đăng Ký Tên Miền

Sau khi thêm trên Vercel, Vercel sẽ hiển thị trạng thái **"Invalid Configuration"** (Cấu hình không hợp lệ) vì tên miền chưa được trỏ về Vercel. 

Bây giờ, bạn hãy đăng nhập vào trang quản lý tên miền của nhà đăng ký nơi bạn mua tên miền `mebimthongthai.io.vn` (ví dụ: *Mắt Bão, Nhân Hòa, iNET, TenTen, PA Việt Nam...*) và thêm **2 bản ghi DNS** sau đây:

### 📋 Bảng cấu hình DNS chi tiết:

| Loại bản ghi (Type) | Tên bản ghi (Host/Name) | Giá trị (Value/Points to) | TTL | Mục đích |
| :---: | :---: | :---: | :---: | :--- |
| **A** | `@` *(hoặc để trống)* | **`76.76.21.21`** | Mặc định (hoặc 3600) | Trỏ tên miền gốc `mebimthongthai.io.vn` về Vercel |
| **CNAME** | `www` | **`cname.vercel-dns.com`** | Mặc định (hoặc 3600) | Trỏ subdomain `www.mebimthongthai.io.vn` về Vercel |

> [!IMPORTANT]
> - Nếu nhà đăng ký tên miền của bạn không cho phép nhập ký tự `@` ở cột Tên bản ghi, bạn chỉ cần **để trống** hoặc nhập chính tên miền **`mebimthongthai.io.vn.`** (có dấu chấm ở cuối nếu hệ thống yêu cầu).
> - Đảm bảo **xóa bỏ** các bản ghi **A** hoặc **CNAME** cũ (nếu có) đang trỏ về các địa chỉ IP hoặc server khác để tránh xung đột hệ thống.

---

## ⏳ Bước 3: Xác Minh & Kích Hoạt SSL (Tự Động)

- Sau khi bạn lưu các bản ghi DNS tại nhà đăng ký tên miền, có thể mất từ **5 phút đến vài giờ** để hệ thống DNS toàn cầu cập nhật (quá trình propagate).
- Khi DNS đã được cập nhật thành công, trạng thái trên **Vercel Dashboard -> Settings -> Domains** sẽ tự động chuyển sang màu xanh **"Valid Configuration"** và Vercel sẽ tự động cấp chứng chỉ bảo mật **SSL (HTTPS)** miễn phí cho bạn.
- Lúc này, bạn có thể truy cập trực tiếp vào ứng dụng của mình thông qua địa chỉ cực kỳ chuyên nghiệp:
  👉 **`https://mebimthongthai.io.vn`**

---

*Nếu bạn gặp bất kỳ khó khăn nào trong quá trình cấu hình DNS tại nhà đăng ký tên miền, hãy chụp ảnh màn hình trang quản lý DNS của bạn gửi lên đây, mình sẽ hướng dẫn chi tiết từng dòng cho bạn nhé! Chúc dự án Mẹ Bỉm Thông Thái của bạn hoạt động thật thành công!* ✨
