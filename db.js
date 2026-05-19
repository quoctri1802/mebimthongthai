/**
 * Mẹ Bỉm Thông Thái - Database Engine (db.js)
 * Quản lý trạng thái ứng dụng qua LocalStorage với dữ liệu mẫu tiếng Việt phong phú.
 */

const STORAGE_KEY = 'ME_BIM_THONG_THAI_DB';

// Dữ liệu mẫu ban đầu để khởi tạo cơ sở dữ liệu nếu chưa có
const INITIAL_DATABASE = {
  // 1. Hệ thống người dùng & Hồ sơ thành viên
  currentUser: {
    id: 'user_01',
    name: 'Nguyễn Thị Mai',
    nickname: 'Mẹ Bông',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    badge: 'Mẹ Siêu Chăm',
    points: 340,
    role: 'user', // user | admin
    babyId: 'baby_01'
  },
  
  users: [
    { id: 'user_01', name: 'Nguyễn Thị Mai', nickname: 'Mẹ Bông', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80', badge: 'Mẹ Siêu Chăm', points: 340, role: 'user' },
    { id: 'user_02', name: 'Trần Thu Trang', nickname: 'Mẹ Sữa Bé Gấu', avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&auto=format&fit=crop&q=80', badge: 'Chuyên Gia Ngủ', points: 520, role: 'user' },
    { id: 'user_03', name: 'Bác sĩ Lê Hải Anh', nickname: 'Dr. Hải Anh', avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&auto=format&fit=crop&q=80', badge: 'Chuyên Gia Y Tế', points: 1200, role: 'admin' },
    { id: 'user_04', name: 'Lê Thùy Linh', nickname: 'Mẹ Ốc', avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&auto=format&fit=crop&q=80', badge: 'Mẹ Ăn Dặm', points: 210, role: 'user' },
    { id: 'user_05', name: 'Phạm Minh Quân', nickname: 'Bố Ken', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80', badge: 'Bố Đảm Đang', points: 95, role: 'user' }
  ],

  // 2. Hồ sơ em bé
  babyProfiles: [
    {
      id: 'baby_01',
      parentId: 'user_01',
      name: 'Nguyễn Tuệ Lâm (Bông)',
      birthdate: '2026-02-15', // Bé khoảng 3 tháng tuổi vào tháng 5/2026
      gender: 'female'
    }
  ],

  // 3. Nhật ký hoạt động hàng ngày của Bé
  feedingLogs: [
    { id: 'f_01', babyId: 'baby_01', type: 'breast', time: '07:30', amount: 120, note: 'Bé bú sữa mẹ vắt ra, bú tốt.' },
    { id: 'f_02', babyId: 'baby_01', type: 'formula', time: '11:00', amount: 100, note: 'Sữa công thức pha ấm.' },
    { id: 'f_03', babyId: 'baby_01', type: 'direct', time: '14:30', amount: 0, duration: 20, note: 'Bú trực tiếp 2 bên ngực.' },
    { id: 'f_04', babyId: 'baby_01', type: 'breast', time: '18:00', amount: 110, note: 'Bú ngon lành.' }
  ],
  
  sleepLogs: [
    { id: 's_01', babyId: 'baby_01', startTime: '08:30', endTime: '10:00', duration: 90, quality: 'good', note: 'Ngủ sâu, không quấy.' },
    { id: 's_02', babyId: 'baby_01', startTime: '12:30', endTime: '14:00', duration: 90, quality: 'medium', note: 'Giật mình 1 lần lúc giữa giấc.' },
    { id: 's_03', babyId: 'baby_01', startTime: '16:00', endTime: '16:45', duration: 45, quality: 'poor', note: 'Tiếng ồn bên ngoài làm bé tỉnh giấc.' }
  ],
  
  diaperLogs: [
    { id: 'd_01', babyId: 'baby_01', type: 'wet', time: '07:00', note: 'Tã ướt vừa' },
    { id: 'd_02', babyId: 'baby_01', type: 'both', time: '10:15', note: 'Đi ngoài phân vàng hạt cải, bình thường' },
    { id: 'd_03', babyId: 'baby_01', type: 'wet', time: '13:30', note: 'Tã ướt nhiều' },
    { id: 'd_04', babyId: 'baby_01', type: 'dirty', time: '17:00', note: 'Đi ngoài ít' }
  ],

  // 4. Nhật ký tăng trưởng (Growth Data)
  growthTracking: [
    { id: 'g_01', babyId: 'baby_01', date: '2026-02-15', ageMonths: 0, weight: 3.2, height: 50.0, headCircumference: 33.5 },
    { id: 'g_02', babyId: 'baby_01', date: '2026-03-15', ageMonths: 1, weight: 4.3, height: 54.2, headCircumference: 35.8 },
    { id: 'g_03', babyId: 'baby_01', date: '2026-04-15', ageMonths: 2, weight: 5.4, height: 57.8, headCircumference: 37.5 },
    { id: 'g_04', babyId: 'baby_01', date: '2026-05-15', ageMonths: 3, weight: 6.2, height: 60.5, headCircumference: 38.9 }
  ],

  // 5. Lịch tiêm chủng (Vaccination Tracker)
  vaccinations: [
    { id: 'v_01', babyId: 'baby_01', vaccineName: 'Lao (BCG)', disease: 'Phòng bệnh Lao', scheduleAge: 'Sơ sinh', dueDate: '2026-02-20', status: 'done', completedDate: '2026-02-18', note: 'Tiêm tại viện sản.' },
    { id: 'v_02', babyId: 'baby_01', vaccineName: 'Viêm gan B mũi 1', disease: 'Viêm gan B', scheduleAge: 'Sơ sinh', dueDate: '2026-02-16', status: 'done', completedDate: '2026-02-15', note: 'Tiêm trong vòng 24h sau sinh.' },
    { id: 'v_03', babyId: 'baby_01', vaccineName: 'Bạch hầu - Ho gà - Uốn ván - Bại liệt - Hib - Viêm gan B (6 trong 1) Mũi 1', disease: '6 bệnh nguy hiểm ở trẻ', scheduleAge: '2 tháng', dueDate: '2026-04-15', status: 'done', completedDate: '2026-04-18', note: 'Hơi sốt nhẹ 38 độ sau tiêm, tự hết sau 1 ngày.' },
    { id: 'v_04', babyId: 'baby_01', vaccineName: 'Phế cầu khuẩn Mũi 1', disease: 'Viêm phổi, viêm màng não do phế cầu', scheduleAge: '2 tháng', dueDate: '2026-04-15', status: 'done', completedDate: '2026-04-18', note: 'Hơi đỏ ở vết tiêm.' },
    { id: 'v_05', babyId: 'baby_01', vaccineName: 'Uống Rota phòng tiêu chảy Mũi 1', disease: 'Tiêu chảy cấp do Rotavirus', scheduleAge: '2 tháng', dueDate: '2026-04-15', status: 'done', completedDate: '2026-04-18', note: 'Bé ngoan, hợp tác.' },
    { id: 'v_06', babyId: 'baby_01', vaccineName: '6 trong 1 Mũi 2', disease: '6 bệnh nguy hiểm', scheduleAge: '3 tháng', dueDate: '2026-05-15', status: 'pending', completedDate: null, note: 'Cần đặt lịch tiêm trạm y tế phường.' },
    { id: 'v_07', babyId: 'baby_01', vaccineName: 'Phế cầu Mũi 2', disease: 'Viêm phổi do phế cầu', scheduleAge: '3 tháng', dueDate: '2026-05-15', status: 'pending', completedDate: null, note: '' },
    { id: 'v_08', babyId: 'baby_01', vaccineName: 'Uống Rota Mũi 2', disease: 'Tiêu chảy do Rota', scheduleAge: '3 tháng', dueDate: '2026-05-15', status: 'pending', completedDate: null, note: '' },
    { id: 'v_09', babyId: 'baby_01', vaccineName: '6 trong 1 Mũi 3', disease: '6 bệnh nguy hiểm', scheduleAge: '4 tháng', dueDate: '2026-06-15', status: 'pending', completedDate: null, note: '' },
    { id: 'v_10', babyId: 'baby_01', vaccineName: 'Sởi mũi 1', disease: 'Bệnh sởi', scheduleAge: '9 tháng', dueDate: '2026-11-15', status: 'pending', completedDate: null, note: '' }
  ],

  // 6. Kho kiến thức chuẩn SEO (Articles / Knowledge Hub)
  articles: [
    {
      id: 'art_01',
      title: 'Hướng dẫn tắm trẻ sơ sinh an toàn tại nhà cho mẹ mới sinh',
      category: 'Trẻ sơ sinh',
      subCategory: 'Tắm bé',
      tags: ['trẻ sơ sinh', 'tắm bé', 'mẹ mới'],
      summary: 'Tắm bé sơ sinh lần đầu tại nhà có thể khiến nhiều mẹ lúng túng. Dưới đây là hướng dẫn chi tiết từng bước chuẩn y khoa giúp mẹ tắm bé dễ dàng và an toàn.',
      content: `
Tắm bé sơ sinh là một trong những thử thách lớn nhất đối với các ông bố bà mẹ mới. Da của bé rất mỏng manh và trơn trượt khi ướt. Bài viết này sẽ cung cấp hướng dẫn đầy đủ nhất để mẹ tự tin tắm bé tại nhà.

### 1. Chuẩn bị dụng cụ trước khi tắm
Trước khi cởi quần áo của bé, hãy chuẩn bị đầy đủ các dụng cụ sau đây ở nơi kín gió:
*   **Chậu tắm:** 2 chậu (1 chậu nước xà phòng tắm bé, 1 chậu nước sạch tráng lại).
*   **Nước tắm:** Nhiệt độ nước khoảng 37-38°C (dùng nhiệt kế đo nước hoặc dùng cùi chỏ tay cảm nhận độ ấm vừa phải).
*   **Sữa tắm chuyên dụng:** Dịu nhẹ, không cay mắt và không chứa cồn.
*   **Khăn lau:** 2 khăn xô nhỏ và 1 khăn tắm lớn có mũ trùm bằng cotton mềm mại.
*   **Quần áo, tã giấy sạch:** Đã chuẩn bị sẵn mở rộng.
*   **Dụng cụ vệ sinh:** Tăm bông vô trùng, cồn 70 độ vệ sinh rốn (nếu rốn chưa rụng), nước muối sinh lý 0.9% nhỏ mắt mũi.

### 2. Các bước tắm bé sơ sinh chuẩn khoa học
Hãy thực hiện theo quy tắc: **Lau mặt -> Gội đầu -> Tắm toàn thân -> Chăm sóc rốn sau tắm.**

*   **Bước 1: Lau mặt cho bé**
    Bọc bé trong khăn ấm. Dùng bông gòn hoặc khăn xô nhúng nước ấm sạch lau mắt bé nhẹ nhàng từ góc trong ra góc ngoài. Sau đó lau trán, má, cằm và tai.
*   **Bước 2: Gội đầu cho bé**
    Kẹp nách bé sát vào hông mẹ, nâng đầu bé bằng lòng bàn tay và đỡ lưng bé bằng cánh tay mẹ. Dùng tay còn lại vốc nước lên tóc bé, thoa một chút dầu gội dịu nhẹ, xoa nhẹ nhàng rồi xả sạch lại bằng nước ấm. Dùng khăn mềm lau khô đầu bé ngay lập tức để tránh bé bị lạnh đầu.
*   **Bước 3: Tắm cơ thể bé**
    Thả bé từ từ vào chậu nước tắm, đặt đầu bé trên cánh tay mẹ. Dùng khăn mềm thoa nhẹ nhàng sữa tắm khắp cơ thể bé, chú ý đến các nếp gấp da cổ, nách, bẹn và kẽ ngón tay ngón chân.
*   **Bước 4: Tráng người và lau khô**
    Chuyển bé sang chậu nước sạch thứ hai để tráng lại toàn thân. Sau đó, nhấc bé ra đặt vào chiếc khăn tắm bông ấm áp đã trải sẵn, lau khô người thật nhanh nhưng nhẹ nhàng.

### 3. Vệ sinh rốn cho trẻ sơ sinh sau khi tắm
Nếu cuống rốn của bé chưa rụng, việc chăm sóc rốn là cực kỳ quan trọng để phòng tránh nhiễm trùng:
*   Dùng tăm bông sạch thấm nước muối sinh lý hoặc cồn vệ sinh nhẹ nhàng từ chân rốn ra ngoài cuống rốn.
*   Không bôi bất kỳ loại lá thuốc dân gian hay chất lạ nào lên rốn bé.
*   Để rốn luôn thông thoáng, tã giấy phải gấp dưới rốn, không che phủ cuống rốn.

> **Lời khuyên y khoa:** Mẹ không cần tắm cho bé hàng ngày trong những tuần đầu, chỉ cần 2-3 lần/tuần nếu thường xuyên vệ sinh sạch sẽ vùng mặc tã và lau người cho bé. Tắm quá nhiều có thể làm khô làn da non nớt của bé.
      `,
      views: 1250,
      likes: 85,
      bookmarkCount: 42,
      createdAt: '2026-03-10',
      author: 'Dr. Hải Anh',
      isFeatured: true,
      isTrending: true,
      image: 'https://images.unsplash.com/photo-1519689680058-324335c77ebe?w=600&auto=format&fit=crop&q=80',
      faqs: [
        { q: 'Trẻ sơ sinh chưa rụng rốn có tắm được không?', a: 'Hoàn toàn được. Mẹ chỉ cần chú ý giữ cuống rốn khô thoáng sau khi tắm và không ngâm bé quá lâu trong nước.' },
        { q: 'Nhiệt độ phòng khi tắm bé bao nhiêu là thích hợp?', a: 'Nhiệt độ phòng lý tưởng là khoảng 26-28°C, tuyệt đối tránh gió lùa và không bật quạt hay điều hòa thẳng vào nơi tắm bé.' }
      ]
    },
    {
      id: 'art_02',
      title: 'Ăn dặm tự chỉ huy (BLW): Bắt đầu thế nào cho đúng và an toàn?',
      category: 'Dinh dưỡng cho bé',
      subCategory: 'Ăn dặm',
      tags: ['ăn dặm', 'BLW', 'dinh dưỡng'],
      summary: 'Phương pháp ăn dặm tự chỉ huy (Baby-Led Weaning) ngày càng được các mẹ ưa chuộng nhờ ưu điểm giúp con tự lập và phát triển kỹ năng nhai nuốt sớm. Bài viết chia sẻ hướng dẫn bắt đầu đúng cách.',
      content: `
Ăn dặm tự chỉ huy (Baby-Led Weaning - BLW) là phương pháp bỏ qua giai đoạn ăn cháo, bột nhuyễn, bé sẽ trực tiếp ăn các thức ăn dạng đặc, cắt miếng vừa tay cầm bằng cách tự bốc ăn ngay từ 6 tháng tuổi.

### 1. Dấu hiệu nhận biết bé đã sẵn sàng ăn dặm BLW
Đừng ép bé ăn dặm quá sớm. Bé chỉ thực sự sẵn sàng khi đạt các mốc sau:
1.  **Bé có thể tự ngồi vững:** Có thể tự giữ thẳng đầu và cổ mà không cần sự hỗ trợ nhiều của bố mẹ.
2.  **Mất phản xạ đẩy lưỡi:** Bé không còn tự động dùng lưỡi đẩy các vật thể lạ ra khỏi miệng.
3.  **Bé có sự phối hợp Tay - Mắt - Miệng:** Bé biết tự tay với lấy thức ăn và đưa chính xác vào miệng.
4.  **Bé tỏ ra hứng thú với thức ăn:** Khi nhìn thấy người lớn ăn, bé sẽ nhìn chăm chú, nhóp nhép miệng hoặc với tay đòi thức ăn.

### 2. Thực đơn BLW tuần đầu tiên cho bé
Trong những ngày đầu, mẹ nên chuẩn bị những loại rau củ luộc mềm, cắt thành hình răng cưa hoặc dạng thanh dài như ngón tay của người lớn (khoảng 5-7cm) để bé dễ cầm nắm:
*   **Cà rốt hấp:** Cắt thanh dài, hấp chín mềm vừa phải sao cho bé bóp nhẹ bằng tay thì hơi lún nhưng không bị nát nát.
*   **Bông cải xanh hấp:** Phần cuống dài giúp bé dễ cầm nắm và gặm phần ngọn hoa mềm.
*   **Bí ngòi hấp:** Rất mềm ngọt, dễ tiêu hóa.
*   **Bơ chín cắt lát:** Rất ngậy và chứa nhiều chất béo tốt cho não bộ, nhưng cần cắt miếng dày để không bị nát khi bé bóp.
*   **Chuối chín:** Cắt đôi, chừa lại một phần vỏ ở đuôi để bé cầm không bị trơn trượt.

### 3. Nguyên tắc an toàn cốt lõi phòng chống hóc nghẹn
Hóc nghẹn (Choking) là nỗi sợ lớn nhất của cha mẹ khi cho con ăn BLW. Mẹ cần phân biệt rõ giữa phản xạ oẹ (Gagging) và hóc nghẹn thật sự:
*   **Phản xạ oẹ (Gagging):** Đây là phản xạ sinh lý hoàn toàn bình thường giúp bé tự đẩy thức ăn quá sâu ra ngoài. Bé sẽ ho, đỏ mặt, hơi nhăn mặt nhưng vẫn thở và khóc bình thường. Cha mẹ hãy bình tĩnh quan sát, không nên thò tay móc họng bé.
*   **Hóc nghẹn thực sự (Choking):** Đường thở của bé bị bít hoàn toàn. Bé sẽ im lặng, mặt tái mét, môi tím tái và không thể thở hay phát ra tiếng khóc. Lúc này mẹ cần áp dụng ngay kỹ thuật sơ cứu vỗ lưng ấn ngực Heimlich dành riêng cho trẻ dưới 1 tuổi.

> **Nguyên tắc an toàn:**
> *   Luôn để bé ngồi thẳng lưng trên ghế ăn dặm khi ăn.
> *   TUYỆT ĐỐI KHÔNG để bé ăn một mình mà không có sự giám sát của người lớn.
> *   Không cắt thức ăn thành dạng khoanh tròn tròn nhỏ (như nho, xúc xích) vì rất dễ lọt vào đường thở gây tắc nghẽn. Phải bổ đôi hoặc cắt lát dọc.
      `,
      views: 2450,
      likes: 198,
      bookmarkCount: 88,
      createdAt: '2026-04-05',
      author: 'Mẹ Ốc',
      isFeatured: false,
      isTrending: true,
      image: '/viet_baby_eating.png',
      faqs: [
        { q: 'Bé chưa mọc răng có ăn dặm BLW được không?', a: 'Hoàn toàn được! Lợi (nướu) của bé rất cứng và có thể nghiền nát được rau củ luộc chín mềm. Răng chỉ là công cụ hỗ trợ chứ không phải bắt buộc.' },
        { q: 'Ăn dặm tự chỉ huy có làm bé bị đau dạ dày không?', a: 'Không. Hệ tiêu hóa của bé sẽ tự tiết ra enzym để phân giải thức ăn phù hợp và việc tự nhai giúp kích thích tiết nước bọt hỗ trợ tiêu hóa tốt hơn.' }
      ]
    },
    {
      id: 'art_03',
      title: 'Sleep Training là gì? Có nên luyện ngủ cho con từ sớm?',
      category: 'Giấc ngủ',
      subCategory: 'Sleep training',
      tags: ['giấc ngủ', 'sleep training', 'routine'],
      summary: 'Giấc ngủ của trẻ sơ sinh là vấn đề nhức nhối nhất của các mẹ bỉm. Sleep training giúp con tự ngủ sâu giấc suốt đêm. Vậy phương pháp nào phù hợp nhất với con bạn?',
      content: `
Thiếu ngủ triền miên sau sinh là nguyên nhân hàng đầu dẫn đến trầm cảm của các mẹ bỉm sữa. Khái niệm Sleep Training (luyện ngủ) ra đời như một vị cứu tinh. Bài viết dưới đây sẽ giúp mẹ thấu hiểu khoa học về giấc ngủ của trẻ và cách luyện ngủ nhân văn nhất.

### 1. Thời điểm vàng để bắt đầu Sleep Training
Các chuyên gia nhi khoa khuyên rằng thời điểm thích hợp nhất để bắt đầu luyện tự ngủ cho bé là khi bé được **4 đến 6 tháng tuổi**. 
Lúc này:
*   Chu kỳ giấc ngủ của bé bắt đầu ổn định giống người lớn.
*   Bé đã có khả năng tự xoa dịu bản thân (self-soothe) như bú mút ngón tay hoặc ôm gối mền.
*   Cân nặng của bé đã đạt chuẩn giúp bé có thể ngủ dài qua đêm mà không bị đói thức giấc đòi bú (thường là khoảng 6kg trở lên).

### 2. Các phương pháp Sleep Training phổ biến
Có nhiều phương pháp luyện ngủ từ nhẹ nhàng đến nghiêm khắc, mẹ có thể chọn phương pháp phù hợp với cá tính của con và tâm lý gia đình:

*   **Phương pháp Cry It Out (Để bé khóc tự ngủ):**
    Mẹ thực hiện chu trình ngủ (đọc truyện, ôm ấp), sau đó đặt bé vào cũi khi bé còn thức, tắt đèn, ra ngoài và đóng cửa. Mẹ không quay lại phòng trừ khi có việc bất thường nguy hiểm. Đây là cách nhanh nhất (chỉ 3-4 ngày) nhưng đòi hỏi tinh thần thép và sự đồng lòng cao của cả nhà.
*   **Phương pháp Ferber (Luyện ngủ giãn cách):**
    Tương tự như Cry It Out, nhưng mẹ sẽ quay lại phòng kiểm tra và vỗ về con sau những khoảng thời gian giãn cách tăng dần (ví dụ: 3 phút, 5 phút, 10 phút rồi 15 phút). Mẹ chỉ vỗ về bé bằng giọng nói và chạm nhẹ, không được bế bé lên.
*   **Phương pháp No Tears / Fading (Không nước mắt):**
    Phương pháp tiếp cận chậm rãi. Mẹ ngồi cạnh cũi của bé, vuốt ve bé nhẹ nhàng cho đến khi bé ngủ. Cứ sau mỗi đêm, mẹ dịch chuyển ghế ngồi của mình xa cũi hơn một chút (đến cửa phòng, rồi ra hẳn ngoài). Phương pháp này mất nhiều tuần nhưng giảm thiểu áp lực tâm lý cho cả mẹ lẫn bé.

### 3. Thiết lập môi trường ngủ lý tưởng cho con
Trước khi luyện ngủ, hãy chắc chắn phòng ngủ của bé đã đạt các chuẩn tối ưu sau:
1.  **Nhiệt độ phòng:** Nên duy trì mát mẻ từ 18 - 22°C (ở Việt Nam điều hòa thường đặt 25-27°C tùy phòng nhưng cần cảm thấy mát tay).
2.  **Độ tối:** Phòng tối hoàn toàn (sử dụng rèm cản sáng 100%) để kích thích cơ thể bé tiết ra hormone buồn ngủ Melatonin.
3.  **Tiếng ồn trắng (White noise):** Giúp cản bớt tiếng ồn đột ngột từ sinh hoạt gia đình hoặc ngoài đường và tạo âm thanh môi trường quen thuộc tựa như trong bụng mẹ.
4.  **Routine đi ngủ:** Thực hiện một chuỗi hoạt động cố định mỗi tối (Tắm -> Massage -> Đọc sách -> Bú sữa -> Vào cũi). Điều này báo hiệu cho não bộ bé biết rằng đã đến giờ đi ngủ.
      `,
      views: 3100,
      likes: 245,
      bookmarkCount: 154,
      createdAt: '2026-03-22',
      author: 'Mẹ Sữa Bé Gấu',
      isFeatured: false,
      isTrending: false,
      image: '/viet_baby_sleeping.png',
      faqs: [
        { q: 'Luyện ngủ có ảnh hưởng đến tâm lý hay làm giảm tình gắn kết mẹ con?', a: 'Không. Các nghiên cứu dài hạn chứng minh trẻ được luyện ngủ tự lập vẫn phát triển tâm lý bình thường và có mối quan hệ gắn kết an toàn tốt đẹp với cha mẹ.' },
        { q: 'Bé đang ốm hay mọc răng có nên luyện ngủ không?', a: 'Tuyệt đối KHÔNG. Khi con ốm, sốt hay mọc răng đau nhức, hãy tạm hoãn luyện ngủ và ưu tiên ôm ấp vỗ về bé tối đa.' }
      ]
    },
    {
      id: 'art_04',
      title: 'Phòng ngừa trầm cảm sau sinh: Tiếng lòng của những người mẹ',
      category: 'Chăm sóc mẹ sau sinh',
      subCategory: 'tâm lý mẹ bỉm',
      tags: ['mẹ sau sinh', 'tâm lý mẹ bỉm', 'trầm cảm sau sinh'],
      summary: 'Trầm cảm sau sinh không phải là một sự yếu đuối. Đó là một tình trạng y khoa thực sự cần được thấu hiểu, chia sẻ và điều trị kịp thời.',
      content: `
Sinh con ra là một niềm hạnh phúc thiêng liêng, nhưng đi kèm với đó là vô vàn áp lực vô hình đè nặng lên đôi vai của người mẹ trẻ. Sự thay đổi đột ngột của hormone kết hợp cùng việc thiếu ngủ triền miên có thể đẩy người mẹ vào bóng tối trầm cảm sau sinh.

### 1. Phân biệt Hội chứng Baby Blues và Trầm cảm sau sinh
Nhiều người thường nhầm lẫn giữa hai khái niệm này, dẫn đến sự chủ quan đáng tiếc:
*   **Hội chứng Baby Blues (Buồn chán sau sinh):** Ảnh hưởng đến khoảng 80% sản phụ. Biểu hiện là dễ xúc động, khóc vô cớ, lo lắng vu vơ, mất ngủ nhẹ. Hội chứng này thường xuất hiện từ ngày thứ 3 sau sinh và tự biến mất hoàn toàn sau 2 tuần mà không cần can thiệp y khoa.
*   **Trầm cảm sau sinh (Postpartum Depression - PPD):** Nghiêm trọng và kéo dài hơn nhiều. Nó xuất hiện bất kỳ lúc nào trong vòng 1 năm đầu sau sinh với các triệu chứng dữ dội: cảm thấy tuyệt vọng cùng cực, mất kết nối với con, thường xuyên khóc lóc, nghĩ mình là một người mẹ tồi tệ, suy nghĩ làm tổn hại bản thân hoặc em bé. Nếu kéo dài quá 2 tuần, sản phụ cần có sự giúp đỡ y tế khẩn cấp.

### 2. Nguyên nhân dẫn đến trầm cảm sau sinh
PPD là sự cộng hưởng phức tạp của nhiều yếu tố sinh học và môi trường:
1.  **Hormone sụt giảm đột ngột:** Lượng estrogen và progesterone trong cơ thể giảm mạnh về mức bình thường trong 24 giờ đầu sau khi sinh, gây mất cân bằng cảm xúc sâu sắc.
2.  **Thiếu ngủ và kiệt sức:** Chăm sóc trẻ sơ sinh ban đêm làm gián đoạn giấc ngủ hoàn toàn, bào mòn năng lượng cơ thể.
3.  **Thiếu sự chia sẻ từ gia đình:** Áp lực chăm con một mình, chồng vô tâm hoặc mâu thuẫn thế hệ mẹ chồng - nàng dâu về phương pháp nuôi dạy con.
4.  **Kỳ vọng quá cao:** Áp lực từ xã hội buộc người mẹ phải "hoàn hảo", sữa phải nhiều, con phải tăng cân nhanh, nhà cửa phải gọn gàng sạch sẽ.

### 3. Người mẹ và gia đình cần làm gì để vượt qua?
*   **Với người mẹ:** Hãy học cách buông bỏ bớt sự hoàn hảo. Con ngủ - mẹ ngủ, đừng cố dọn dẹp nhà cửa. Hãy thẳng thắn nói ra mong muốn được giúp đỡ của mình thay vì chịu đựng âm thầm.
*   **Với người chồng:** Hãy trở thành tấm khiên bảo vệ người vợ. Hãy chủ động bế con, thay tã, dọn dẹp nhà cửa để vợ được chợp mắt. Tránh những lời nói vô tình làm tổn thương như: *"Ở nhà chỉ có nuôi con mà cũng mệt"*.
*   **Tìm kiếm sự trợ giúp chuyên khoa:** Đừng ngần ngại gặp gỡ bác sĩ tâm lý để được tham vấn hoặc sử dụng liệu pháp y tế an toàn.
      `,
      views: 1800,
      likes: 215,
      bookmarkCount: 97,
      createdAt: '2026-04-18',
      author: 'Dr. Hải Anh',
      isFeatured: true,
      isTrending: false,
      image: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?w=600&auto=format&fit=crop&q=80',
      faqs: [
        { q: 'Thuốc điều trị trầm cảm sau sinh có ảnh hưởng đến sữa mẹ không?', a: 'Hiện nay có rất nhiều nhóm thuốc điều trị trầm cảm thế hệ mới hoàn toàn an toàn đối với các bà mẹ đang cho con bú. Hãy tham khảo ý kiến chuyên môn của bác sĩ sản khoa và tâm thần để được kê đơn phù hợp.' },
        { q: 'Làm thế nào để người chồng nhận biết vợ bị trầm cảm?', a: 'Hãy chú ý nếu thấy vợ thường xuyên mất ngủ dù con đã ngủ say, dễ giật mình cáu gắt vô cớ, lơ là bản thân và ít giao tiếp bằng mắt, hoặc có những hành động chăm sóc bé quá mức một cách lo âu cực đoan.' }
      ]
    },
    {
      id: 'art_05',
      title: '7 Dấu hiệu nguy hiểm ở trẻ sơ sinh cần đưa đi cấp cứu ngay lập tức',
      category: 'Sức khỏe trẻ em',
      subCategory: 'Cấp cứu nhi',
      tags: ['sơ sinh', 'sức khỏe', 'cấp cứu'],
      summary: 'Trẻ sơ sinh rất non nớt và bệnh thường diễn biến nhanh. Cha mẹ cần nằm lòng 7 dấu hiệu sinh tồn nguy hiểm này để bảo vệ tính mạng con.',
      content: `
Trẻ sơ sinh dưới 3 tháng tuổi có hệ miễn dịch vô cùng yếu. Một triệu chứng nhỏ cũng có thể là dấu hiệu của bệnh lý nghiêm trọng như nhiễm trùng máu hoặc viêm màng não. Bố mẹ tuyệt đối không được chủ quan nếu thấy 1 trong 7 dấu hiệu sau:

### 1. Sốt trên 38°C (đối với trẻ dưới 3 tháng)
Sốt ở trẻ dưới 3 tháng tuổi được xem là một trường hợp cấp cứu y tế. Đừng cho trẻ uống thuốc hạ sốt ở nhà mà hãy đưa bé đến bệnh viện ngay lập tức. Sốt có thể là dấu hiệu duy nhất của một nhiễm trùng nghiêm trọng.

### 2. Trẻ lừ đừ, khó đánh thức
Một em bé khỏe mạnh sẽ thức dậy để bú, khóc khi đói hoặc tã ướt. Nếu bé nhà bạn ngủ li bì, chân tay mềm nhũn, lay gọi mãi không mở mắt hoặc không phản ứng, đây là một cấp cứu y khoa khẩn cấp.

### 3. Thay đổi màu sắc da (Tím tái hoặc nhợt nhạt)
Môi, lưỡi, hoặc móng tay/móng chân của bé chuyển sang màu xanh tím. Da bé trở nên nhợt nhạt, tái mét, hoặc nổi vân hoa đốm đỏ/tím. Đây là dấu hiệu thiếu oxy hoặc sốc, tuần hoàn máu kém.

### 4. Thở nhanh, thở rút lõm lồng ngực
Trẻ thở quá 60 lần/phút, hoặc khi thở phần ngực dưới xương sườn lõm sâu vào (rút lõm lồng ngực), cánh mũi phập phồng mạnh. Bé phát ra tiếng rên rỉ (grunting) mỗi khi thở ra.

### 5. Bỏ bú hoàn toàn hoặc nôn vọt liên tục
Bé không thể ngậm vú, từ chối bú nhiều cữ liên tiếp. Nôn vọt ra thành tia mạnh (không phải ọc sữa thông thường) sau mọi cữ bú, đặc biệt nôn ra dịch xanh/vàng hoặc có lẫn máu.

### 6. Thóp phồng hoặc lõm sâu
Thóp (phần mềm trên đỉnh đầu bé sơ sinh). Thóp phồng căng dù bé đang nằm yên và không khóc có thể là dấu hiệu viêm màng não. Thóp lõm sâu báo hiệu bé đang bị mất nước nghiêm trọng.

### 7. Co giật
Cơ thể bé co cứng, mắt trợn ngược, tay chân giật liên hồi. Cha mẹ cần giữ bình tĩnh, đặt bé nằm nghiêng nơi an toàn và gọi cấp cứu ngay, KHÔNG nhét bất cứ thứ gì vào miệng bé.
      `,
      views: 5200,
      likes: 450,
      bookmarkCount: 320,
      createdAt: '2026-05-18',
      author: 'BS. Tuấn Minh (BV Nhi Đồng)',
      isFeatured: true,
      isTrending: true,
      image: 'https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?w=600&auto=format&fit=crop&q=80',
      faqs: [
        { q: 'Làm sao để đếm nhịp thở của trẻ sơ sinh?', a: 'Để bé nằm yên hoặc ngủ, vén áo bé lên để nhìn rõ bụng và ngực. Đếm số lần ngực/bụng nhô lên trong trọn vẹn 1 phút. Nhịp thở bình thường của trẻ sơ sinh là 40-60 lần/phút.' }
      ]
    },
    {
      id: 'art_06',
      title: 'Lịch sinh hoạt EASY 3 cho trẻ từ 0 - 6 tuần tuổi',
      category: 'Giấc ngủ',
      subCategory: 'Sinh hoạt EASY',
      tags: ['EASY', 'giấc ngủ', 'trẻ sơ sinh'],
      summary: 'EASY là chuỗi sinh hoạt lặp đi lặp lại giúp bé ăn ngon, ngủ ngoan và mẹ có thời gian nghỉ ngơi. Cùng tìm hiểu EASY 3 dành riêng cho bé mới sinh.',
      content: `
EASY là viết tắt của: Eat (Ăn) - Activity (Chơi) - Sleep (Ngủ) - Your time (Thời gian của mẹ). Ở giai đoạn 0-6 tuần tuổi, bé cần ăn liên tục để tăng trưởng, do đó chu kỳ EASY 3 (3 giờ lặp lại một lần) là phù hợp nhất.

### 1. Chu kỳ EASY 3 hoạt động như thế nào?
Một chu kỳ EASY 3 giờ diễn ra như sau:
*   **E (Eat - Ăn): 20-30 phút.** Bé thức dậy và được cho bú ngay. Việc bú lúc tỉnh táo giúp bé ăn no và hiệu quả, tránh tình trạng vừa ăn vừa ngủ gật.
*   **A (Activity - Chơi): 20-30 phút.** Sau khi ăn no và vỗ ợ hơi, mẹ thay tã, trò chuyện, cho bé nằm sấp (Tummy time) hoặc nhìn thẻ kích thích thị giác.
*   **S (Sleep - Ngủ): 1.5 - 2 giờ.** Khi thấy dấu hiệu buồn ngủ (ngáp, dụi mắt, cáu gắt), mẹ tiến hành trình tự ngủ và cho bé vào cũi.
*   **Y (Your time - Thời gian của mẹ):** Trong lúc bé ngủ, mẹ vắt sữa, ăn uống, dọn dẹp hoặc ngủ nghỉ.

### 2. Ví dụ một lịch EASY 3 mẫu
*   07:00 – Thức dậy, Ăn (E)
*   07:30 – Chơi, thay đồ (A)
*   08:00 – Ngủ sáng (S)
*   10:00 – Thức dậy, Ăn (E)
*   10:30 – Chơi (A)
*   11:00 – Ngủ trưa (S)
*   13:00 – Thức dậy, Ăn (E)...
*(Lặp lại cho đến 19:00, sau đó bé sẽ vào giấc ngủ đêm, đêm bé đói thì dậy bú rồi ngủ tiếp không cần chơi).*

### 3. Bí quyết áp dụng EASY thành công
*   Quan trọng nhất là duy trì thứ tự E -> A -> S. Tuyệt đối không để bé quen với việc bú để ngủ.
*   Linh hoạt theo nhu cầu của bé: Thời gian thức (wake window) của bé sơ sinh rất ngắn, tối đa chỉ 45-60 phút. Đừng ép bé thức quá lâu sẽ khiến bé bị quá mệt (overtired) và khó vào giấc.
      `,
      views: 4100,
      likes: 312,
      bookmarkCount: 215,
      createdAt: '2026-05-15',
      author: 'Chuyên gia Ngủ Ngọc Anh',
      isFeatured: false,
      isTrending: false,
      image: '/viet_baby_sleeping.png',
      faqs: []
    },
    {
      id: 'art_07',
      title: 'Hướng dẫn bảo quản và rã đông sữa mẹ chuẩn Bộ Y Tế',
      category: 'Dinh dưỡng cho bé',
      subCategory: 'Sữa mẹ',
      tags: ['sữa mẹ', 'bảo quản', 'dinh dưỡng'],
      summary: 'Sữa mẹ là tài sản quý giá nhất, nhưng bảo quản sai cách có thể làm mất chất hoặc ôi thiu. Đọc ngay nguyên tắc bảo quản vàng.',
      content: `
Bảo quản sữa mẹ đúng cách là kỹ năng bắt buộc đối với các mẹ đi làm hoặc muốn kích sữa lưu trữ cho con. 

### 1. Thời gian bảo quản tối đa của sữa mẹ
*   **Ở nhiệt độ phòng (dưới 26°C):** Tối đa 4 - 6 giờ.
*   **Trong túi đá khô giữ nhiệt:** Tối đa 24 giờ.
*   **Ngăn mát tủ lạnh (0-4°C):** Tối đa 3 - 5 ngày. Nên để sâu bên trong, không để ở cánh cửa tủ vì nhiệt độ không ổn định.
*   **Ngăn đá tủ lạnh cửa riêng:** Tối đa 3 - 6 tháng.
*   **Tủ đông chuyên dụng (-18°C):** Từ 6 - 12 tháng.

### 2. Cách trữ sữa an toàn
*   Luôn rửa tay sạch bằng xà phòng trước khi hút sữa.
*   Chỉ sử dụng túi trữ sữa hoặc bình trữ sữa chuyên dụng, BPA-free.
*   **Lưu ý quan trọng:** Không đổ sữa đầy phễu túi vì khi đông lại thể tích sữa sẽ tăng lên gây bục túi. Chỉ đổ khoảng 3/4 túi.
*   Luôn ghi rõ ngày, giờ hút sữa lên túi trước khi cất. Nguyên tắc: Sữa cũ dùng trước (First in - First out).
*   Không trộn chung sữa vừa mới vắt (còn ấm) vào túi sữa đang để trong tủ lạnh. Hãy làm lạnh sữa mới trong ngăn mát trước, khi cả hai có cùng nhiệt độ lạnh mới được đổ chung.

### 3. Quy trình rã đông và hâm sữa
*   **Rã đông:** Chuyển túi sữa từ ngăn đá xuống ngăn mát trước nửa ngày để sữa rã đông từ từ. Hoặc ngâm túi sữa vào bát nước ấm. Tuyệt đối không rã đông bằng lò vi sóng hoặc nước sôi sẽ làm chết các kháng thể quý giá trong sữa.
*   **Lắc đều:** Sữa trữ đông thường bị tách lớp béo nổi lên trên. Lắc nhẹ nhàng vòng tròn để trộn đều.
*   **Hâm nóng:** Ngâm trong nước ấm 40°C hoặc dùng máy hâm sữa. Kiểm tra nhiệt độ lên cổ tay trước khi cho bé bú.
*   Sữa sau khi rã đông chỉ để được ở nhiệt độ phòng trong 2 giờ và ở ngăn mát 24 giờ. Sữa bé bú thừa phải bỏ đi, không trữ lại.
      `,
      views: 3800,
      likes: 290,
      bookmarkCount: 180,
      createdAt: '2026-05-12',
      author: 'Hội Sữa Mẹ Việt Nam',
      isFeatured: false,
      isTrending: false,
      image: 'https://images.unsplash.com/photo-1544254881-2292f392ddb9?w=600&auto=format&fit=crop&q=80',
      faqs: []
    },
    {
      id: 'art_08',
      title: 'Khủng hoảng tuổi lên 2 (Terrible Twos): Đối phó với những cơn ăn vạ',
      category: 'Tâm lý & Nuôi dạy',
      subCategory: 'Tâm lý trẻ nhỏ',
      tags: ['khủng hoảng lên 2', 'tâm lý', 'kỷ luật'],
      summary: 'Trẻ bỗng trở nên ương bướng, thích nói "Không" và hay lăn ra khóc ăn vạ? Chúc mừng mẹ, con đang bước vào giai đoạn khủng hoảng phát triển sinh lý tự nhiên.',
      content: `
Giai đoạn "Terrible Twos" (khủng hoảng tuổi lên hai) thực chất có thể bắt đầu từ lúc trẻ 18 tháng và kéo dài đến 3 tuổi. Đây là dấu mốc quan trọng chứng tỏ con bạn đang phát triển nhận thức để trở thành một cá thể độc lập.

### 1. Dấu hiệu nhận biết khủng hoảng lên 2
*   Câu cửa miệng luôn là: "Không!", "Của con!", "Tự làm!".
*   Cảm xúc thay đổi thất thường chỉ trong vài giây.
*   Bất đồng ý chí với người lớn: Mẹ bảo đi hướng này, con nhất định đi hướng kia.
*   Cơn "tantrum" (ăn vạ): La hét, khóc lóc vật vã, cắn, đánh, ném đồ vật, hoặc lăn đùng ra sàn nhà ăn vạ chỗ đông người.

### 2. Nguyên nhân do đâu?
Ở tuổi này, trí não của trẻ phát triển rực rỡ, trẻ bắt đầu có những ý muốn, sở thích riêng và muốn khám phá thế giới. Tuy nhiên, khả năng ngôn ngữ của trẻ lại chưa đủ tốt để diễn đạt mong muốn, cộng thêm kỹ năng kiểm soát cảm xúc chưa hoàn thiện dẫn đến sự bùng nổ, bức bối khi không được như ý.

### 3. Chiến lược đối phó thông thái dành cho cha mẹ
*   **Giữ bình tĩnh (Bố mẹ không được "tantrum" theo con):** Đừng quát tháo hay đánh đòn. Điều này chỉ làm con hoảng sợ và học cách dùng bạo lực. Hít thở sâu và hiểu rằng: "Con đang gặp khó khăn, con không phải đứa trẻ hư".
*   **Cung cấp sự lựa chọn, không ra lệnh:** Thay vì nói "Đi tắm ngay!", hãy hỏi "Con muốn tắm bằng chậu màu xanh hay màu đỏ?". Trẻ sẽ cảm thấy được tôn trọng ý kiến.
*   **Áp dụng kỹ thuật Time-out hoặc Time-in:** Khi bé đang cơn cuồng nộ cắn đánh, hãy đảm bảo bé an toàn và lùi lại một bước chờ bé dịu xuống, hoặc ôm chặt bé vào lòng (Time-in) và nói "Mẹ biết con đang rất tức giận vì không được ăn kẹo".
*   **Lờ đi hành vi xấu:** Nếu bé khóc ăn vạ đòi một món đồ vô lý, hãy cương quyết nói "Không" một lần, sau đó quay đi làm việc khác. Khi bé thấy khóc lóc không mang lại tác dụng, bé sẽ dừng lại.
      `,
      views: 6500,
      likes: 520,
      bookmarkCount: 410,
      createdAt: '2026-05-10',
      author: 'Chuyên gia Tâm lý',
      isFeatured: true,
      isTrending: true,
      image: 'https://images.unsplash.com/photo-1471286174890-9c112cbcdfc3?w=600&auto=format&fit=crop&q=80',
      faqs: []
    },
    {
      id: 'art_09',
      title: 'So sánh Ăn dặm Kiểu Nhật và BLW: Ưu nhược điểm',
      category: 'Dinh dưỡng cho bé',
      subCategory: 'Ăn dặm',
      tags: ['ăn dặm kiểu nhật', 'BLW', 'dinh dưỡng'],
      summary: 'Mẹ phân vân không biết nên chọn Ăn dặm Kiểu Nhật (ADKN) hay Bé tự chỉ huy (BLW)? Cùng so sánh chi tiết để tìm phương pháp phù hợp nhất.',
      content: `
Khi con bước vào 6 tháng tuổi, việc chọn phương pháp ăn dặm khiến nhiều mẹ đau đầu. Hai phương pháp hiện đại nhất là ADKN và BLW đều có những ưu điểm vượt trội so với ăn dặm truyền thống (nấu chung thành nồi cháo lổn nhổn).

### 1. Ăn dặm Kiểu Nhật (ADKN)
*   **Đặc điểm:** Thức ăn được nấu riêng từng món (cơm, thịt, rau), chế biến từ loãng mịn đến đặc thô dần theo từng tháng tuổi. Ăn nhạt hoàn toàn, chú trọng nước dùng Dashi để tạo vị ngọt tự nhiên.
*   **Ưu điểm:** 
    * Bé làm quen tốt với hương vị nguyên bản của từng loại thực phẩm.
    * Tốt cho hệ tiêu hóa do độ thô được tăng từ từ.
    * Mẹ kiểm soát được chính xác lượng thức ăn bé nạp vào.
*   **Nhược điểm:** Mẹ tốn rất nhiều thời gian hầm, rây, nghiền, nấu nhiều món riêng biệt lỉnh kỉnh mỗi ngày. Cần mẹ phải cực kỳ kiên nhẫn bón thìa.

### 2. Ăn dặm Tự chỉ huy (BLW - Baby Led Weaning)
*   **Đặc điểm:** Bỏ qua hoàn toàn giai đoạn ăn cháo xay nhuyễn. Bé được cung cấp thức ăn thô ngay từ đầu (cắt thanh dài vừa tay cầm). Bé tự cầm bốc, tự quyết định ăn gì và ăn bao nhiêu.
*   **Ưu điểm:**
    * Kỹ năng nhai nuốt và phối hợp tay-mắt phát triển cực kỳ vượt trội.
    * Bé tận hưởng bữa ăn, không có hiện tượng ép ăn sinh ra biếng ăn tâm lý.
    * Mẹ nhàn hạ, không phải đút, có thể cho bé ăn cùng bữa cơm gia đình.
*   **Nhược điểm:**
    * Nguy cơ hóc nghẹn (gagging) khiến gia đình đau tim.
    * Thời gian đầu bé chủ yếu bóp nát, nhai nhả chứ không nuốt được vào bụng nhiều, gây áp lực cân nặng.
    * Rất bẩn, mẹ dọn dẹp "chiến trường" mệt mỏi.

### 3. Phương pháp kết hợp (Kết hợp kiểu Nhật và BLW)
Nhiều mẹ thông thái chọn giải pháp dung hòa: Bữa trưa cho ăn BLW để rèn kỹ năng nhai và tự lập, bữa chiều tối mẹ đút theo kiểu Nhật để đảm bảo bé no bụng tăng cân tốt.
      `,
      views: 3200,
      likes: 210,
      bookmarkCount: 150,
      createdAt: '2026-05-08',
      author: 'Mẹ Ốc',
      isFeatured: false,
      isTrending: false,
      image: '/viet_baby_eating.png',
      faqs: []
    },
    {
      id: 'art_10',
      title: '5 Dấu hiệu nhận biết sớm nguy cơ trẻ tự kỷ (ASD)',
      category: 'Sức khỏe trẻ em',
      subCategory: 'Tâm lý',
      tags: ['tự kỷ', 'ASD', 'tâm lý'],
      summary: 'Can thiệp sớm trước 3 tuổi là chìa khóa vàng cho trẻ tự kỷ. Làm sao để cha mẹ nhận biết những dấu hiệu bất thường từ khi con 1 tuổi?',
      content: `
Rối loạn phổ tự kỷ (ASD) thường xuất hiện trước 3 tuổi, ảnh hưởng tới khả năng giao tiếp và tương tác xã hội của trẻ. Việc phát hiện và can thiệp y tế trong "giai đoạn vàng" (trước 3 tuổi) sẽ tăng cơ hội hòa nhập bình thường cho bé.

Dưới đây là các dấu hiệu Cờ Đỏ (Red flags) ở độ tuổi 12-18 tháng mà cha mẹ tuyệt đối không nên phớt lờ cho rằng "trẻ chậm nói thôi":

### 1. Không giao tiếp bằng mắt
Trẻ né tránh ánh mắt của cha mẹ khi được gọi tên hoặc trò chuyện cùng. Bé thường nhìn lảng đi nơi khác hoặc nhìn xuyên qua người bạn. 

### 2. Không phản ứng khi được gọi tên
Dù thính lực hoàn toàn bình thường, trẻ lại không quay đầu lại hoặc không có bất kỳ biểu cảm nào khi nghe ai đó gọi tên mình, như thể bé bị điếc.

### 3. Không biết chỉ ngón tay (Pointing)
Đến 12-14 tháng tuổi, trẻ bình thường sẽ dùng ngón trỏ để chỉ vào đồ vật bé muốn hoặc chỉ cho người lớn xem thứ gì đó thú vị. Trẻ tự kỷ thường mất đi kỹ năng giao tiếp phi ngôn ngữ này, thay vào đó bé có thể cầm tay người lớn kéo đến đồ vật bé muốn mà không nhìn mắt.

### 4. Hành vi rập khuôn, lặp đi lặp lại
Bé thích các trò chơi rập khuôn một cách kỳ lạ. Ví dụ: thay vì đẩy xe ô tô chạy, bé lại lật ngược xe để quay bánh xe hàng giờ đồng hồ. Bé thích xếp đồ chơi thành hàng thẳng tắp. Bé có các động tác lặp lại vô nghĩa như vỗ tay liên tục, đập đầu, xoay tròn người.

### 5. Chậm nói và mất đi kỹ năng đã có
Trẻ không bập bẹ nói lúc 12 tháng, không nói được từ đơn lúc 16 tháng. Đặc biệt nguy hiểm là tình trạng "Thoái lui": Trẻ đã từng nói được vài từ nhưng sau đó im lặng dần và mất hoàn toàn khả năng ngôn ngữ.

> **Lời khuyên:** Nếu thấy con có từ 2 dấu hiệu trên, cha mẹ hãy mạnh dạn đưa con đi khám tại các trung tâm Tâm bệnh hoặc khoa Tâm lý Nhi uy tín để được thực hiện bài test sàng lọc M-CHAT.
      `,
      views: 4500,
      likes: 380,
      bookmarkCount: 220,
      createdAt: '2026-05-05',
      author: 'BS Tâm bệnh Lê Văn',
      isFeatured: false,
      isTrending: false,
      image: 'https://images.unsplash.com/photo-1601683413988-cb940e53a2eb?w=600&auto=format&fit=crop&q=80',
      faqs: []
    },
    {
      id: 'art_11',
      title: 'Hướng dẫn tắm bé sơ sinh chưa rụng rốn chuẩn y khoa',
      category: 'Chăm sóc trẻ sơ sinh',
      subCategory: 'Vệ sinh',
      tags: ['tắm bé', 'rốn', 'sơ sinh'],
      summary: 'Việc tắm bé sơ sinh, đặc biệt khi cuống rốn chưa rụng khiến nhiều ba mẹ lóng ngóng. Các bước hướng dẫn chi tiết sau sẽ giúp mẹ tự tin hơn.',
      content: `
Cuống rốn của trẻ sơ sinh thường rụng sau 7-15 ngày. Trong thời gian này, việc tắm và vệ sinh cuống rốn cần cẩn trọng để tránh nhiễm trùng.

### Chuẩn bị trước khi tắm:
*   Phòng tắm kín gió, nhiệt độ phòng 27-28 độ C.
*   Chuẩn bị sẵn sàng mọi thứ: khăn tắm to, khăn sữa, quần áo, bỉm, bông tăm, cồn 70 độ (để sát khuẩn rốn), sữa tắm gội cho bé.
*   Pha nước ấm khoảng 37-38 độ C (thử bằng cùi chỏ tay mẹ thấy ấm là được).

### Các bước thực hiện:
1.  **Gội đầu trước:** Vẫn quấn khăn giữ ấm cơ thể bé, mẹ bế bé kẹp dưới nách trái, ngón tay cái và ngón giữa bịt hai lỗ tai bé lại để nước không vào. Dùng khăn sữa dấp nước gội đầu và lau khô ngay.
2.  **Tắm thân:** Cởi khăn quấn bé, nhẹ nhàng thả bé vào chậu nước. Một tay mẹ luôn đỡ sau gáy và vai bé. Tắm bằng khăn sữa, chú ý các vùng nếp gấp (cổ, nách, bẹn).
3.  **Vấn đề rốn:** Đừng quá hoảng sợ nếu nước dính vào rốn chưa rụng, việc này không cấm kỵ miễn là mẹ phải lau khô kỹ sau đó. Tránh cọ xát mạnh vùng rốn.
4.  **Lau khô:** Nhấc bé ra, quấn ngay vào khăn bông lớn thấm khô toàn thân, đặc biệt các nếp gấp. 

### Vệ sinh rốn sau tắm:
Dùng tăm bông nhúng cồn 70 độ (hoặc cồn đỏ betadine theo chỉ định của bác sĩ) lau nhẹ nhàng từ chân rốn (sát da bụng) hất lên trên cuống rốn. Đợi rốn khô ráo hoàn toàn mới mặc áo hoặc quấn bỉm. **Lưu ý:** Gập mép bỉm xuống dưới rốn để rốn được thoáng khí, giúp nhanh rụng hơn.
      `,
      views: 2900,
      likes: 180,
      bookmarkCount: 110,
      createdAt: '2026-05-02',
      author: 'Điều dưỡng Thu Trà',
      isFeatured: false,
      isTrending: false,
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80',
      faqs: []
    },
    {
      id: 'art_12',
      title: 'Top 8 thực phẩm dễ gây dị ứng mẹ cần lưu ý khi bé ăn dặm',
      category: 'Dinh dưỡng cho bé',
      subCategory: 'Ăn dặm',
      tags: ['dị ứng', 'ăn dặm', 'thực phẩm'],
      summary: 'Dị ứng thực phẩm ở trẻ nhỏ có thể gây sốc phản vệ nguy hiểm. Mẹ hãy nắm rõ danh sách "Top 8" này để cho bé thử nghiệm an toàn.',
      content: `
Khi bắt đầu hành trình ăn dặm, ngoài việc bổ sung dinh dưỡng, mẹ cũng cần test dị ứng cho bé. Theo thống kê y khoa, 90% các ca dị ứng thực phẩm ở trẻ em bắt nguồn từ "Top 8" nhóm thực phẩm sau:

1.  **Sữa bò và các chế phẩm từ sữa bò:** Phổ biến nhất (dị ứng đạm bò). Gây tiêu chảy, nôn mửa, phát ban hoặc đi ngoài ra máu.
2.  **Trứng (đặc biệt là lòng trắng):** Thường gây dị ứng cho trẻ dưới 1 tuổi. 
3.  **Lạc (Đậu phộng):** Là loại dị ứng nguy hiểm nhất vì dễ gây sốc phản vệ gây khó thở khẩn cấp.
4.  **Các loại hạt cây (Óc chó, hạnh nhân, hạt điều, mác ca).**
5.  **Đậu nành:** Nhiều trẻ dị ứng đạm bò cũng dị ứng chéo với đạm đậu nành.
6.  **Lúa mì (Chứa Gluten).**
7.  **Cá biển.**
8.  **Hải sản có vỏ (Tôm, cua, sò, hàu).**

### Cách thử thực phẩm an toàn (Quy tắc 3 ngày)
Khi muốn giới thiệu một trong những thực phẩm thuộc nhóm dễ dị ứng, mẹ hãy áp dụng "Quy tắc 3 ngày" (3-day wait rule):
*   Ngày 1: Cho bé ăn một lượng rất nhỏ (1 thìa cafe) thực phẩm mới vào buổi sáng và theo dõi 24h.
*   Ngày 2 & 3: Tăng lượng từ từ lên nếu không thấy phản ứng gì. Trong 3 ngày này không cho ăn thêm bất kỳ loại thức ăn MỚI nào khác.
*   **TUYỆT ĐỐI KHÔNG** thử đồ ăn mới vào buổi tối, vì nếu dị ứng sốc phản vệ xảy ra trong lúc ngủ, cha mẹ sẽ không thể phát hiện kịp.

### Triệu chứng dị ứng cần đi viện cấp cứu ngay:
Sưng phù môi, lưỡi, mặt; Khò khè khó thở; Nổi mề đay toàn thân nhanh chóng; Li bì nôn mửa liên tục.
      `,
      views: 3500,
      likes: 240,
      bookmarkCount: 190,
      createdAt: '2026-04-28',
      author: 'BS Dinh Dưỡng Mai Anh',
      isFeatured: false,
      isTrending: false,
      image: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=600&auto=format&fit=crop&q=80',
      faqs: []
    },
    {
      id: 'art_13',
      title: 'Trẻ bị sốt: Khi nào cần dùng thuốc hạ sốt Paracetamol/Ibuprofen?',
      category: 'Sức khỏe trẻ em',
      subCategory: 'Chăm sóc khi ốm',
      tags: ['sốt', 'sức khỏe', 'hạ sốt'],
      summary: 'Nhiều cha mẹ có thói quen hễ thấy con ấm người là cho uống thuốc hạ sốt ngay. Đây là một sai lầm cản trở hệ miễn dịch của bé.',
      content: `
Sốt KHÔNG PHẢI là một căn bệnh. Sốt là một phản ứng có lợi của cơ thể, chứng tỏ hệ miễn dịch của bé đang hoạt động mạnh mẽ để tiêu diệt virus/vi khuẩn xâm nhập.

### 1. Nhiệt độ bao nhiêu mới gọi là sốt?
*   Nhiệt độ bình thường của trẻ: 36.5 - 37.5°C.
*   Sốt nhẹ: 37.6 - 38.4°C.
*   Sốt cao: Từ 38.5°C trở lên.
(Đo nhiệt độ chuẩn xác nhất là kẹp nách hoặc đo hậu môn).

### 2. Khi nào nên dùng thuốc hạ sốt?
Tổ chức Y tế Thế giới (WHO) khuyến cáo: **Chỉ dùng thuốc hạ sốt khi nhiệt độ của bé từ 38.5°C trở lên VÀ/HOÀNG bé có biểu hiện quấy khóc, khó chịu, lừ đừ mệt mỏi.**

Nếu bé sốt 39°C nhưng vẫn tươi tỉnh, chạy nhảy chơi đùa bình thường, ăn ngủ tốt thì mẹ có thể chưa cần cho uống thuốc hạ sốt, chỉ cần cho bé uống nhiều nước, nới lỏng quần áo và chườm ấm. Ngược lại, nếu bé chỉ sốt 38°C nhưng mệt lả, quấy khóc nhiều, hoặc bé có tiền sử sốt cao co giật, mẹ có thể cho uống thuốc hạ sốt.

### 3. Liều lượng an toàn (Theo cân nặng)
*   **Paracetamol (Hapacol, Efferalgan):** Loại an toàn nhất. Liều lượng chuẩn là **10 - 15mg cho mỗi kg cân nặng** trong 1 lần uống. Các lần uống phải cách nhau ít nhất 4-6 tiếng. (Ví dụ: Bé nặng 10kg thì uống liều 100mg - 150mg).
*   **Ibuprofen (Brufen, Nurofen):** Có tác dụng hạ sốt mạnh và kéo dài hơn. Tuy nhiên KHÔNG ĐƯỢC DÙNG khi nghi ngờ bé bị Sốt xuất huyết.

*Lưu ý: Không tự ý kết hợp đan xen 2 loại thuốc hạ sốt nếu không có sự chỉ định trực tiếp từ Bác sĩ.*
      `,
      views: 7800,
      likes: 650,
      bookmarkCount: 450,
      createdAt: '2026-04-20',
      author: 'Dr. Hải Anh',
      isFeatured: true,
      isTrending: true,
      image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?w=600&auto=format&fit=crop&q=80',
      faqs: []
    },
    {
      id: 'art_14',
      title: 'Kỷ luật không đòn roi: Phương pháp Time-out hiệu quả',
      category: 'Tâm lý & Nuôi dạy',
      subCategory: 'Tâm lý trẻ nhỏ',
      tags: ['kỷ luật', 'nuôi dạy', 'time-out'],
      summary: 'Làm sao để phạt con mà không dùng bạo lực? Phương pháp "Góc suy nghĩ" (Time-out) chính là giải pháp hữu hiệu được các chuyên gia tâm lý khuyên dùng.',
      content: `
Đòn roi có thể khiến trẻ sợ và ngừng hành vi xấu ngay lập tức, nhưng nó để lại tổn thương tâm lý sâu sắc và dạy trẻ giải quyết vấn đề bằng bạo lực. "Kỷ luật không đòn roi" ra đời để thay thế đòn roi, trong đó phổ biến nhất là kỹ thuật Time-out (Góc suy nghĩ/Thời gian cách ly).

### 1. Time-out là gì?
Khi trẻ có hành vi xấu mang tính cố ý (ví dụ: đánh bạn, cố tình ném đồ vật vỡ, chửi bậy), trẻ sẽ bị tách ra khỏi môi trường đang vui chơi và phải ngồi yên tại một khu vực nhàm chán được quy định sẵn (Góc suy nghĩ) trong một khoảng thời gian nhất định.

### 2. Các bước thực hiện Time-out chuẩn xác
1.  **Cảnh báo 1 lần duy nhất:** "Nếu con đánh em thêm 1 lần nữa, con sẽ phải vào Góc suy nghĩ".
2.  **Đưa vào Góc:** Nếu con vi phạm, hãy im lặng, nắm tay con dắt thẳng vào Góc suy nghĩ. Không tranh cãi, không giải thích dài dòng, không để lộ sự tức giận. Mẹ chỉ nói: "Con đã đánh em, con phải ngồi đây suy nghĩ".
3.  **Thời gian phạt:** Quy tắc là **1 phút cho mỗi tuổi**. (Bé 3 tuổi phạt 3 phút, bé 4 tuổi phạt 4 phút).
4.  **Kỷ luật thép:** Góc suy nghĩ không có tivi, đồ chơi, không ai được giao tiếp, nhìn mắt bé trong suốt thời gian phạt. Nếu bé bỏ chạy khỏi góc, lập tức dắt bé lại về góc và đếm giờ lại từ đầu. Không nhượng bộ dù bé khóc lóc.
5.  **Kết thúc:** Khi chuông báo hết giờ, mẹ tới ngồi ngang tầm mắt bé. Hỏi bé: "Con đã biết vì sao mình bị phạt chưa?". Bé xin lỗi, mẹ ôm bé và nói: "Mẹ yêu con, nhưng hành động đánh người là không được phép".

### Lỗi sai phổ biến cần tránh
* Dùng Time-out quá thường xuyên cho các lỗi vụn vặt.
* Đặt Góc suy nghĩ ở nơi đáng sợ như nhà kho rùng rợn hoặc phòng tối (sẽ gây ám ảnh tâm lý). Nên chọn 1 chiếc ghế trơn ở góc tường phòng khách.
* Vừa phạt vừa mắng nhiếc con: Sẽ làm mất đi sự bình tâm suy nghĩ của trẻ.
      `,
      views: 3100,
      likes: 240,
      bookmarkCount: 160,
      createdAt: '2026-04-15',
      author: 'Chuyên gia Tâm lý',
      isFeatured: false,
      isTrending: false,
      image: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=600&auto=format&fit=crop&q=80',
      faqs: []
    }
  ],

  // 7. Diễn đàn thảo luận Cộng đồng (Community Forum)
  posts: [
    {
      id: 'post_01',
      title: 'Bé 3 tháng không chịu bú bình phải làm sao hả các mẹ?',
      content: 'Bé nhà em sinh thường được 3.2kg, trộm vía bú mẹ hoàn toàn 2 tháng đầu tăng cân rất tốt. Nhưng dạo gần đây em chuẩn bị đi làm lại nên tập cho bé bú bình bằng sữa mẹ vắt ra. Cứ mỗi lần đưa bình sữa vào là con khóc thét lên, ngậm chặt miệng, đẩy ra. Em đã đổi qua 3 loại núm ti khác nhau (Hegen, Avent, Pigeon thần thánh) rồi vẫn không ăn thua. Em stress quá, đêm nào cũng thức vắt sữa mà con không chịu hợp tác. Mẹ bỉm nào có kinh nghiệm luyện con bú bình thành công cứu em với ạ!',
      author: {
        nickname: 'Mẹ Bông',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
        badge: 'Mẹ Siêu Chăm'
      },
      tags: ['trẻ sơ sinh', 'sữa', 'giấc ngủ'],
      upvotes: 48,
      helpfulCount: 22,
      heartCount: 15,
      createdAt: '2026-05-12T09:30:00Z',
      isAnonymous: false,
      comments: [
        {
          id: 'c_01',
          postId: 'post_01',
          content: 'Mom ơi, kinh nghiệm xương máu của em là lúc tập bình đừng để mẹ cho bú. Bé ngửi thấy mùi sữa mẹ trên người mom là nó đòi ti trực tiếp thôi. Hãy nhờ bố hoặc bà cho bú bình ở một phòng khác hẳn, tránh xa mẹ ra nhé. Tầm 2-3 hôm bé đói sẽ tự bú thôi, mom đừng lo lắng quá.',
          author: {
            nickname: 'Mẹ Sữa Bé Gấu',
            avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&auto=format&fit=crop&q=80',
            badge: 'Chuyên Gia Ngủ'
          },
          createdAt: '2026-05-12T10:15:00Z'
        },
        {
          id: 'c_02',
          postId: 'post_01',
          content: 'Đúng rồi mom, với lại sữa mẹ vắt ra hâm ấm chuẩn nhiệt độ khoảng 37 độ nhé, lạnh quá hay nóng quá bé đều không chịu ti đâu. Cố lên mom nhé, kiên trì dứt khoát 1-2 ngày đừng xót ruột là được.',
          author: {
            nickname: 'Mẹ Ốc',
            avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&auto=format&fit=crop&q=80',
            badge: 'Mẹ Ăn Dặm'
          },
          createdAt: '2026-05-12T11:00:00Z'
        }
      ]
    },
    {
      id: 'post_02',
      title: 'Bé 5 tháng biếng ăn, lười bú đột ngột có đáng lo không?',
      content: 'Chào cả nhà, bé Ken nhà em được 5 tháng 10 ngày. Bình thường con bú rất giỏi, mỗi ngày tầm 900ml sữa. Nhưng 3 ngày nay bỗng dưng bé bú cực ít, đưa bình hay ti mẹ vào chỉ mút vài cái rồi ngó nghiêng nghịch ngợm, cả ngày lẹt đẹt được 400ml. Bé không có biểu hiện sốt, đi ngoài bình thường, vẫn chơi đùa vui vẻ. Cho em hỏi đây có phải là giai đoạn khủng hoảng sinh lý (Wonder Week) hay con bị gì không ạ? Em lo quá, sợ con sụt cân.',
      author: {
        nickname: 'Bố Ken',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
        badge: 'Bố Đảm Đang'
      },
      tags: ['ăn dặm', 'sức khỏe', 'sữa'],
      upvotes: 35,
      helpfulCount: 14,
      heartCount: 8,
      createdAt: '2026-05-15T14:20:00Z',
      isAnonymous: false,
      comments: [
        {
          id: 'c_03',
          postId: 'post_02',
          content: 'Giai đoạn 5 tháng bé đang phát triển thị giác và thính giác mạnh mẽ nên rất dễ bị xao nhãng khi ăn đấy bố Ken ơi. Hãy cho con bú trong phòng tối, yên tĩnh, ít đồ chơi. Có thể con cũng chuẩn bị bước vào Wonder week 19 hoặc mọc mầm răng nữa đấy.',
          author: {
            nickname: 'Dr. Hải Anh',
            avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&auto=format&fit=crop&q=80',
            badge: 'Chuyên Gia Y Tế'
          },
          createdAt: '2026-05-15T15:05:00Z'
        }
      ]
    },
    {
      id: 'post_03',
      title: 'Áp lực mâu thuẫn mẹ chồng nàng dâu về việc chăm cháu sau sinh...',
      content: 'Em sinh bé được 1 tháng và hiện tại đang ở chung với mẹ chồng. Thật sự em sắp phát điên các mẹ ạ. Mẹ chồng em cứ khăng khăng đòi giơ bé lên hơ than cho cứng cáp, rồi bắt em phải bó chặt chân bé lại để sau này chân không bị vòng kiềng. Em giải thích khoa học bây giờ không làm thế nguy hiểm thì bà giận dỗi bảo ngày xưa tao nuôi 3 đứa con khỏe mạnh có sao đâu. Tối nào em cũng khóc thầm, sữa thì tắc dần. Chồng em thì bảo mẹ thương cháu mới làm thế, em nên nghe mẹ chút cho êm nhà. Có mẹ nào ở hoàn cảnh này không cho em lời khuyên với...',
      author: {
        nickname: 'Mẹ Ẩn Danh',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
        badge: 'Mẹ Mới'
      },
      tags: ['mẹ sau sinh', 'tâm lý mẹ bỉm', 'sức khỏe'],
      upvotes: 89,
      helpfulCount: 56,
      heartCount: 45,
      createdAt: '2026-05-17T20:10:00Z',
      isAnonymous: true,
      comments: [
        {
          id: 'c_04',
          postId: 'post_03',
          content: 'Ôi thương mom quá! Tuyệt đối KHÔNG hơ than mom nhé, khói than độc vô cùng có thể gây ngạt khí CO cho trẻ sơ sinh. Còn chân vòng kiềng là do xương hoặc thiếu Vitamin D chứ quấn chặt chân chả có tác dụng gì còn gây trật khớp háng. Hãy nhờ bác sĩ tiêm chủng hoặc bác sĩ dinh dưỡng trực tiếp nói chuyện với bà, người già chỉ nghe lời bác sĩ thôi mom ơi. Cố lên nhé, chồng vô tâm thế thì mom phải mạnh mẽ lên bảo vệ con.',
          author: {
            nickname: 'Mẹ Bông',
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
            badge: 'Mẹ Siêu Chăm'
          },
          createdAt: '2026-05-17T21:00:00Z'
        }
      ]
    }
  ],

  // 8. Cột mốc phát triển theo độ tuổi (Milestones Data)
  milestones: [
    {
      id: 'm_newborn',
      ageLabel: 'Sơ sinh (0-28 ngày)',
      avgWeightMale: '3.3 kg',
      avgHeightMale: '49.9 cm',
      avgWeightFemale: '3.2 kg',
      avgHeightFemale: '49.1 cm',
      motorSkills: 'Phản xạ tự nhiên: bú mút, giật mình (Moro), nắm chặt tay khi chạm lòng bàn tay.',
      cognitiveSkills: 'Nhìn được vật trong khoảng 20-30cm, đặc biệt thích nhìn khuôn mặt mẹ và độ tương phản cao trắng đen.',
      healthNotes: 'Cần tiêm phòng Lao (BCG) và Viêm gan B trong 24h đầu. Chú ý vệ sinh cuống rốn khô sạch.',
      careTips: 'Cho bé bú mẹ hoàn toàn theo nhu cầu, giữ ấm phòng và da tiếp da với mẹ nhiều nhất có thể.'
    },
    {
      id: 'm_1m',
      ageLabel: '1 tháng tuổi',
      avgWeightMale: '4.5 kg',
      avgHeightMale: '54.7 cm',
      avgWeightFemale: '4.2 kg',
      avgHeightFemale: '53.7 cm',
      motorSkills: 'Bắt đầu biết ngóc đầu lên một chút khi nằm sấp. Chuyển động tay chân phối hợp hơn.',
      cognitiveSkills: 'Biết dõi mắt theo vật sáng chuyển động chậm. Phát ra những âm thanh ê, a đơn giản.',
      healthNotes: 'Chú ý hiện tượng vàng da sinh lý vs vàng da bệnh lý. Cho bé tắm nắng nhẹ hoặc bổ sung Vitamin D3 hàng ngày.',
      careTips: 'Tập cho bé nằm sấp (Tummy time) 2-3 phút mỗi ngày dưới sự giám sát.'
    },
    {
      id: 'm_3m',
      ageLabel: '3 tháng tuổi',
      avgWeightMale: '6.4 kg',
      avgHeightMale: '61.4 cm',
      avgWeightFemale: '5.8 kg',
      avgHeightFemale: '59.8 cm',
      motorSkills: 'Ngóc đầu cao 45-90 độ khi nằm sấp. Tay có thể mở rộng, biết chắp hai tay lại với nhau, tự mút ngón tay.',
      cognitiveSkills: 'Biết cười đáp lại (cười xã giao) khi nghe giọng mẹ. Phản ứng rõ ràng với âm thanh lớn.',
      healthNotes: 'Lịch tiêm phòng các mũi 6 trong 1, Phế cầu và uống Rota cực kỳ quan trọng ở thời điểm này.',
      careTips: 'Thường xuyên trò chuyện, hát và đọc truyện tranh ê-a cùng con để kích thích ngôn ngữ.'
    },
    {
      id: 'm_6m',
      ageLabel: '6 tháng tuổi',
      avgWeightMale: '7.9 kg',
      avgHeightMale: '67.6 cm',
      avgWeightFemale: '7.3 kg',
      avgHeightFemale: '65.7 cm',
      motorSkills: 'Có thể tự lật úp và ngửa dễ dàng. Bắt đầu tự ngồi khi có điểm tựa. Biết với lấy đồ vật bằng 1 tay.',
      cognitiveSkills: 'Phân biệt được người lạ và người quen. Biết bập bẹ các phụ âm đơn giản (ba-ba, ma-ma).',
      healthNotes: 'Đây là mốc bắt đầu ăn dặm. Tuyệt đối không cho muối, đường vào đồ ăn của trẻ dưới 1 tuổi.',
      careTips: 'Bắt đầu cho ăn dặm từ dạng ngọt, lỏng mịn rồi đặc dần, hoặc tập ăn dặm BLW tùy nhu cầu.'
    },
    {
      id: 'm_12m',
      ageLabel: '1 tuổi (12 tháng)',
      avgWeightMale: '9.6 kg',
      avgHeightMale: '75.7 cm',
      avgWeightFemale: '8.9 kg',
      avgHeightFemale: '74.0 cm',
      motorSkills: 'Tự đứng vững và bắt đầu lẫm chẫm đi những bước đầu tiên. Có thể dùng ngón tay nhặt đồ vật nhỏ.',
      cognitiveSkills: 'Hiểu được các mệnh lệnh đơn giản (đưa bóng cho mẹ). Gọi được "Bố", "Mẹ" rõ nghĩa và biết vẫy tay chào.',
      healthNotes: 'Tiêm phòng nhắc lại sởi, thủy đậu, viêm não Nhật Bản. Cho bé đi khám răng lần đầu.',
      careTips: 'Khuyến khích bé tự xúc ăn bằng thìa nhựa mềm, tăng cường chơi các trò chơi xếp hình, vận động tinh.'
    },
    {
      id: 'm_2y',
      ageLabel: '2 tuổi (24 tháng)',
      avgWeightMale: '12.2 kg',
      avgHeightMale: '87.8 cm',
      avgWeightFemale: '11.5 kg',
      avgHeightFemale: '86.4 cm',
      motorSkills: 'Chạy nhảy vững vàng, có thể tự đi lên xuống cầu thang dắt tay, đá bóng bằng chân.',
      cognitiveSkills: 'Nói được câu ngắn 3-4 từ. Biết gọi tên các đồ vật quen thuộc trong tranh vẽ.',
      healthNotes: 'Cần tẩy giun định kỳ 6 tháng một lần theo hướng dẫn của bác sĩ. Hạn chế tối đa xem điện thoại, tivi.',
      careTips: 'Cùng bé đọc sách tranh, dạy bé nhận biết các màu sắc, hình khối đơn giản qua trò chơi tương tác.'
    },
    {
      id: 'm_3y',
      ageLabel: '3 tuổi',
      avgWeightMale: '14.3 kg',
      avgHeightMale: '96.1 cm',
      avgWeightFemale: '13.9 kg',
      avgHeightFemale: '95.1 cm',
      motorSkills: 'Đạp được xe ba bánh, đứng thăng bằng 1 chân trong vài giây. Tự cởi quần áo đơn giản.',
      cognitiveSkills: 'Đặt nhiều câu hỏi "Tại sao?", "Cái gì?". Biết đếm số cơ bản, hát những bài hát thiếu nhi ngắn.',
      healthNotes: 'Bé đã mọc đủ bộ 20 răng sữa, cần hướng dẫn con tự chải răng bằng kem đánh răng chứa Fluoride nhẹ.',
      careTips: 'Cho bé tham gia các trò chơi phát triển trí tưởng tượng (đồ chơi đóng vai, vẽ tranh sáp màu).'
    },
    {
      id: 'm_4_6y',
      ageLabel: '4 - 6 tuổi',
      avgWeightMale: '16.3 - 20.5 kg',
      avgHeightMale: '103.3 - 116.0 cm',
      avgWeightFemale: '16.0 - 20.2 kg',
      avgHeightFemale: '102.7 - 115.1 cm',
      motorSkills: 'Nhảy dây, ném bóng chuẩn xác, tự dùng kéo cắt giấy an toàn, tự mặc quần áo cài cúc kéo khóa.',
      cognitiveSkills: 'Nói năng trôi chảy, kể lại được câu chuyện dài. Biết viết chữ cái, con số cơ bản trước khi vào lớp 1.',
      healthNotes: 'Tập cho trẻ thói quen rửa tay bằng xà phòng trước khi ăn và sau khi đi vệ sinh để phòng bệnh.',
      careTips: 'Chuẩn bị tâm lý cho con vào lớp 1, rèn luyện kỹ năng tập trung, lắng nghe và giao tiếp xã hội.'
    }
  ],

  // 9. Báo cáo vi phạm (Spam, abusive posts)
  reports: []
};

// Lấy DB hiện tại từ LocalStorage
function getDb() {
  if (typeof window === 'undefined') return INITIAL_DATABASE;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_DATABASE));
    return INITIAL_DATABASE;
  }
  try {
    return JSON.parse(stored);
  } catch (e) {
    console.error('Lỗi phân tích DB từ localStorage, đặt lại dữ liệu mặc định:', e);
    return INITIAL_DATABASE;
  }
}

// Lưu DB mới vào LocalStorage
function saveDb(db) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
  }
}

// APIs xuất khẩu cho việc thao tác CSDL
const IS_SERVER_MODE = typeof window !== 'undefined' && (window.location.port === '3000' || window.location.origin.includes('localhost:3000'));

export const db = {
  // Đồng bộ đám mây Neon Postgres hoặc LocalStorage
  init: async () => {
    if (IS_SERVER_MODE) {
      try {
        console.log("⚡ Đang kết nối và đồng bộ dữ liệu đám mây Neon Postgres...");
        
        // Thiết lập bộ thời gian chờ 2.5 giây cho trạng thái Server/Neon
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2500);

        const statusRes = await fetch('/api/status', { signal: controller.signal });
        const status = await statusRes.json();
        clearTimeout(timeoutId);
        
        if (status.status === 'connected') {
          console.log("🟢 Đã kết nối tới Neon Cloud! Đang tải dữ liệu thực tế...");
          
          // Thiết lập bộ thời gian chờ 4 giây cho việc tải toàn bộ dữ liệu
          const dataController = new AbortController();
          const dataTimeoutId = setTimeout(() => dataController.abort(), 4000);

          // Fetch toàn bộ dữ liệu song song
          const [artRes, postRes, comRes, babyRes, feedRes, sleepRes, diaperRes, growthRes, vacRes] = await Promise.all([
            fetch('/api/articles', { signal: dataController.signal }),
            fetch('/api/posts', { signal: dataController.signal }),
            fetch('/api/comments', { signal: dataController.signal }),
            fetch('/api/babies', { signal: dataController.signal }),
            fetch('/api/logs/feeding', { signal: dataController.signal }),
            fetch('/api/logs/sleep', { signal: dataController.signal }),
            fetch('/api/logs/diaper', { signal: dataController.signal }),
            fetch('/api/logs/growth', { signal: dataController.signal }),
            fetch('/api/logs/vaccine', { signal: dataController.signal })
          ]);

          const [articles, posts, comments, babies, feeding, sleep, diaper, growth, vacs] = await Promise.all([
            artRes.json(),
            postRes.json(),
            comRes.json(),
            babyRes.json(),
            feedRes.json(),
            sleepRes.json(),
            diaperRes.json(),
            growthRes.json(),
            vacRes.json()
          ]);
          
          clearTimeout(dataTimeoutId);

          const database = getDb();

          // Map articles
          database.articles = articles.map(a => ({
            id: a.id,
            title: a.title,
            category: a.category,
            subCategory: a.sub_category || '',
            tags: a.tags ? a.tags.split(',') : [],
            summary: a.summary,
            content: a.content,
            image: a.image,
            views: a.views || 0,
            likes: a.likes || 0,
            createdAt: a.created_at,
            author: a.author,
            faqs: typeof a.faqs === 'string' ? JSON.parse(a.faqs) : a.faqs || []
          }));

          // Map posts & comments
          database.posts = posts.map(p => {
            const postComments = comments.filter(c => c.post_id === p.id).map(c => ({
              id: c.id,
              postId: c.post_id,
              content: c.content,
              createdAt: c.created_at,
              author: {
                nickname: c.author_nickname,
                avatar: c.author_avatar,
                badge: c.author_badge
              }
            }));

            return {
              id: p.id,
              title: p.title,
              content: p.content,
              tags: p.tags ? p.tags.split(',') : [],
              upvotes: p.upvotes || 0,
              helpfulCount: p.helpful_count || 0,
              heartCount: p.heart_count || 0,
              createdAt: p.created_at,
              isAnonymous: p.is_anonymous,
              author: p.is_anonymous ? {
                nickname: 'Mẹ Ẩn Danh',
                avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
                badge: 'Mẹ Mới'
              } : {
                nickname: p.author_nickname,
                avatar: p.author_avatar,
                badge: p.author_badge
              },
              comments: postComments
            };
          });

          // Map baby profiles
          if (babies.length > 0) {
            database.babyProfiles = babies.map(b => ({
              id: b.id,
              parentId: b.parent_id,
              name: b.name,
              birthdate: b.birthdate,
              gender: b.gender
            }));
          }

          // Map logs
          database.feedingLogs = feeding.map(f => ({
            id: f.id, babyId: f.baby_id, type: f.type, time: f.time, amount: f.amount, duration: f.duration, note: f.note
          }));

          database.sleepLogs = sleep.map(s => ({
            id: s.id, babyId: s.baby_id, startTime: s.start_time, endTime: s.end_time, duration: s.duration, quality: s.quality, note: s.note
          }));

          database.diaperLogs = diaper.map(d => ({
            id: d.id, babyId: d.baby_id, type: d.type, time: d.time, note: d.note
          }));

          database.growthTracking = growth.map(g => ({
            id: g.id, babyId: g.baby_id, date: g.date, ageMonths: g.age_months, weight: g.weight, height: g.height, headCircumference: g.head_circumference
          }));

          database.vaccinations = vacs.map(v => ({
            id: v.id, babyId: v.baby_id, vaccineName: v.vaccine_name, disease: v.disease, scheduleAge: v.schedule_age, dueDate: v.due_date, status: v.status, completedDate: v.completed_date, note: v.note
          }));

          saveDb(database);
          window.IS_NEON_CONNECTED = true;
          return;
        }
      } catch (err) {
        console.warn("⚠️ Không thể đồng bộ đám mây Neon Postgres (Lỗi hoặc Hết hạn thời gian chờ). Chuyển sang Local Offline:", err.message);
      }
    }
    window.IS_NEON_CONNECTED = false;
    getDb(); // Nạp ngoại tuyến bình thường
  },

  // Trạng thái chung
  resetDatabase: () => {
    saveDb(INITIAL_DATABASE);
    return INITIAL_DATABASE;
  },

  // Người dùng hiện tại
  getCurrentUser: () => {
    const database = getDb();
    return database.currentUser;
  },
  
  setCurrentUser: (user) => {
    const database = getDb();
    database.currentUser = user;
    saveDb(database);
    return user;
  },

  // Tất cả người dùng
  getUsers: () => {
    const database = getDb();
    return database.users;
  },

  // Hồ sơ bé
  getBabyProfiles: () => {
    const database = getDb();
    return database.babyProfiles;
  },
  
  addBabyProfile: (baby) => {
    const database = getDb();
    const newBaby = {
      id: 'baby_' + Date.now(),
      parentId: database.currentUser.id,
      ...baby
    };
    database.babyProfiles.push(newBaby);
    database.currentUser.babyId = newBaby.id; 
    saveDb(database);

    if (IS_SERVER_MODE) {
      fetch('/api/babies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newBaby)
      }).catch(e => console.error("Lỗi sync Neon baby profile:", e));
    }

    return newBaby;
  },

  // Hoạt động của Bé (Bú sữa, Giấc ngủ, Tã)
  getFeedingLogs: (babyId) => {
    const database = getDb();
    return database.feedingLogs.filter(log => log.babyId === babyId);
  },
  
  addFeedingLog: (log) => {
    const database = getDb();
    const newLog = {
      id: 'f_' + Date.now(),
      ...log
    };
    database.feedingLogs.unshift(newLog);
    saveDb(database);

    if (IS_SERVER_MODE) {
      fetch('/api/logs/feeding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newLog)
      }).catch(e => console.error("Lỗi sync Neon feeding log:", e));
    }

    return newLog;
  },

  getSleepLogs: (babyId) => {
    const database = getDb();
    return database.sleepLogs.filter(log => log.babyId === babyId);
  },
  
  addSleepLog: (log) => {
    const database = getDb();
    const newLog = {
      id: 's_' + Date.now(),
      ...log
    };
    database.sleepLogs.unshift(newLog);
    saveDb(database);

    if (IS_SERVER_MODE) {
      fetch('/api/logs/sleep', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newLog)
      }).catch(e => console.error("Lỗi sync Neon sleep log:", e));
    }

    return newLog;
  },

  getDiaperLogs: (babyId) => {
    const database = getDb();
    return database.diaperLogs.filter(log => log.babyId === babyId);
  },
  
  addDiaperLog: (log) => {
    const database = getDb();
    const newLog = {
      id: 'd_' + Date.now(),
      ...log
    };
    database.diaperLogs.unshift(newLog);
    saveDb(database);

    if (IS_SERVER_MODE) {
      fetch('/api/logs/diaper', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newLog)
      }).catch(e => console.error("Lỗi sync Neon diaper log:", e));
    }

    return newLog;
  },

  // Tăng trưởng (Growth Tracker)
  getGrowthLogs: (babyId) => {
    const database = getDb();
    return database.growthTracking.filter(log => log.babyId === babyId)
      .sort((a, b) => a.ageMonths - b.ageMonths);
  },
  
  addGrowthLog: (log) => {
    const database = getDb();
    const newLog = {
      id: 'g_' + Date.now(),
      ...log
    };
    database.growthTracking.push(newLog);
    saveDb(database);

    if (IS_SERVER_MODE) {
      fetch('/api/logs/growth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newLog)
      }).catch(e => console.error("Lỗi sync Neon growth log:", e));
    }

    return newLog;
  },

  // Tiêm chủng
  getVaccinations: (babyId) => {
    const database = getDb();
    return database.vaccinations.filter(log => log.babyId === babyId);
  },
  
  toggleVaccinationStatus: (id, completedDate = null) => {
    const database = getDb();
    const vac = database.vaccinations.find(v => v.id === id);
    if (vac) {
      vac.status = vac.status === 'done' ? 'pending' : 'done';
      vac.completedDate = vac.status === 'done' ? (completedDate || new Date().toISOString().split('T')[0]) : null;
      saveDb(database);

      if (IS_SERVER_MODE) {
        fetch('/api/logs/vaccine', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id, completedDate: vac.completedDate })
        }).catch(e => console.error("Lỗi sync Neon vaccine log:", e));
      }
    }
    return vac;
  },

  // Kho kiến thức (Articles)
  getArticles: () => {
    const database = getDb();
    return database.articles;
  },

  addArticle: (article) => {
    const database = getDb();
    const newArticle = {
      id: 'art_' + Date.now(),
      views: 0,
      likes: 0,
      bookmarkCount: 0,
      createdAt: new Date().toISOString().split('T')[0],
      author: database.currentUser.nickname || 'Admin',
      faqs: [],
      ...article
    };
    database.articles.unshift(newArticle);
    saveDb(database);

    if (IS_SERVER_MODE) {
      fetch('/api/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newArticle)
      }).catch(e => console.error("Lỗi sync Neon add article:", e));
    }

    return newArticle;
  },

  updateArticle: (id, updatedArticle) => {
    const database = getDb();
    const idx = database.articles.findIndex(a => a.id === id);
    if (idx !== -1) {
      database.articles[idx] = { ...database.articles[idx], ...updatedArticle };
      saveDb(database);

      if (IS_SERVER_MODE) {
        fetch(`/api/articles/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(database.articles[idx])
        }).catch(e => console.error("Lỗi sync Neon update article:", e));
      }

      return database.articles[idx];
    }
    return null;
  },

  deleteArticle: (id) => {
    const database = getDb();
    database.articles = database.articles.filter(a => a.id !== id);
    saveDb(database);

    if (IS_SERVER_MODE) {
      fetch(`/api/articles/${id}`, {
        method: 'DELETE'
      }).catch(e => console.error("Lỗi sync Neon delete article:", e));
    }

    return true;
  },

  // Diễn đàn cộng đồng (Posts)
  getPosts: () => {
    const database = getDb();
    return database.posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  },

  addPost: (post) => {
    const database = getDb();
    const newPost = {
      id: 'post_' + Date.now(),
      upvotes: 1,
      helpfulCount: 0,
      heartCount: 0,
      createdAt: new Date().toISOString(),
      comments: [],
      author: post.isAnonymous ? {
        nickname: 'Mẹ Ẩn Danh',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
        badge: 'Mẹ Mới'
      } : {
        nickname: database.currentUser.nickname,
        avatar: database.currentUser.avatar,
        badge: database.currentUser.badge
      },
      ...post
    };
    database.posts.unshift(newPost);
    
    // Tặng điểm thưởng cho thành viên tích cực
    database.currentUser.points += 10;
    // Cập nhật lại huy hiệu dựa trên điểm
    if (database.currentUser.points >= 500) {
      database.currentUser.badge = 'Chuyên Gia Lão Luyện';
    } else if (database.currentUser.points >= 300) {
      database.currentUser.badge = 'Mẹ Siêu Chăm';
    } else if (database.currentUser.points >= 150) {
      database.currentUser.badge = 'Mẹ Hoạt Bát';
    }
    
    // Cập nhật user trong danh sách
    const uIdx = database.users.findIndex(u => u.id === database.currentUser.id);
    if (uIdx !== -1) {
      database.users[uIdx] = { ...database.currentUser };
    }
    
    saveDb(database);

    if (IS_SERVER_MODE) {
      fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: newPost.title,
          content: newPost.content,
          isAnonymous: newPost.isAnonymous,
          tags: newPost.tags,
          author_nickname: newPost.author.nickname,
          author_avatar: newPost.author.avatar,
          author_badge: newPost.author.badge
        })
      }).catch(e => console.error("Lỗi sync Neon add post:", e));
    }

    return newPost;
  },

  votePost: (postId, voteType) => {
    const database = getDb();
    const post = database.posts.find(p => p.id === postId);
    if (post) {
      if (voteType === 'upvote') post.upvotes += 1;
      if (voteType === 'helpful') post.helpfulCount += 1;
      if (voteType === 'heart') post.heartCount += 1;
      saveDb(database);
    }
    return post;
  },

  addComment: (postId, commentContent) => {
    const database = getDb();
    const post = database.posts.find(p => p.id === postId);
    if (post) {
      const newComment = {
        id: 'c_' + Date.now(),
        postId,
        content: commentContent,
        createdAt: new Date().toISOString(),
        author: {
          nickname: database.currentUser.nickname,
          avatar: database.currentUser.avatar,
          badge: database.currentUser.badge
        }
      };
      post.comments.push(newComment);
      
      // Tặng điểm hoạt động
      database.currentUser.points += 5;
      const uIdx = database.users.findIndex(u => u.id === database.currentUser.id);
      if (uIdx !== -1) {
        database.users[uIdx] = { ...database.currentUser };
      }
      
      saveDb(database);

      if (IS_SERVER_MODE) {
        fetch('/api/comments', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            postId: newComment.postId,
            content: newComment.content,
            author_nickname: newComment.author.nickname,
            author_avatar: newComment.author.avatar,
            author_badge: newComment.author.badge
          })
        }).catch(e => console.error("Lỗi sync Neon add comment:", e));
      }

      return newComment;
    }
    return null;
  },

  deletePost: (id) => {
    const database = getDb();
    database.posts = database.posts.filter(p => p.id !== id);
    saveDb(database);

    if (IS_SERVER_MODE) {
      fetch(`/api/posts/${id}`, {
        method: 'DELETE'
      }).catch(e => console.error("Lỗi sync Neon delete post:", e));
    }

    return true;
  },

  // Cột mốc phát triển (Milestones)
  getMilestones: () => {
    const database = getDb();
    return database.milestones;
  },

  // Đồng bộ toàn bộ dữ liệu từ đám mây (Articles, Posts, Comments, Logs)
  syncFromCloud: async () => {
    if (!IS_SERVER_MODE) return false;
    
    try {
      console.log("⏳ Bắt đầu tải dữ liệu từ Neon Postgres đám mây...");
      const [articlesRes, postsRes, commentsRes] = await Promise.all([
        fetch('/api/articles'),
        fetch('/api/posts'),
        fetch('/api/comments')
      ]);

      if (articlesRes.ok && postsRes.ok && commentsRes.ok) {
        const rawArticles = await articlesRes.json();
        const rawPosts = await postsRes.json();
        const rawComments = await commentsRes.json();

        // Chuyển đổi dữ liệu từ Postgres (snake_case) sang chuẩn Local (camelCase)
        const mappedArticles = rawArticles.map(a => ({
          id: a.id,
          title: a.title,
          category: a.category,
          subCategory: a.sub_category,
          tags: typeof a.tags === 'string' ? a.tags.split(',') : (a.tags || []),
          summary: a.summary,
          content: a.content,
          image: a.image,
          views: a.views,
          likes: a.likes,
          createdAt: a.created_at,
          author: a.author,
          faqs: a.faqs || []
        }));

        // Group comments by post_id
        const commentsByPost = {};
        rawComments.forEach(c => {
          if (!commentsByPost[c.post_id]) commentsByPost[c.post_id] = [];
          commentsByPost[c.post_id].push({
            id: c.id,
            postId: c.post_id,
            content: c.content,
            createdAt: c.created_at,
            author: {
              nickname: c.author_nickname,
              avatar: c.author_avatar,
              badge: c.author_badge
            }
          });
        });

        const mappedPosts = rawPosts.map(p => ({
          id: p.id,
          title: p.title,
          content: p.content,
          author: {
            nickname: p.author_nickname,
            avatar: p.author_avatar,
            badge: p.author_badge
          },
          tags: typeof p.tags === 'string' ? p.tags.split(',') : (p.tags || []),
          upvotes: p.upvotes,
          helpfulCount: p.helpful_count,
          heartCount: p.heart_count,
          createdAt: p.created_at,
          isAnonymous: p.is_anonymous,
          comments: commentsByPost[p.id] || []
        }));

        // Lưu vào LocalStorage
        const database = getDb();
        if (mappedArticles.length > 0) database.articles = mappedArticles;
        if (mappedPosts.length > 0) database.posts = mappedPosts;
        saveDb(database);
        
        console.log("✅ Đã đồng bộ thành công dữ liệu từ đám mây về trình duyệt!");
        return true;
      }
    } catch (err) {
      console.error("❌ Lỗi khi tải dữ liệu từ đám mây:", err);
      return false;
    }
  },

  // Báo cáo vi phạm
  reportContent: (type, targetId, reason) => {
    const database = getDb();
    const newReport = {
      id: 'rep_' + Date.now(),
      type, 
      targetId,
      reason,
      reporter: database.currentUser.nickname,
      createdAt: new Date().toISOString(),
      status: 'pending' 
    };
    database.reports.push(newReport);
    saveDb(database);
    return newReport;
  },

  getReports: () => {
    const database = getDb();
    return database.reports;
  },

  resolveReport: (reportId) => {
    const database = getDb();
    const report = database.reports.find(r => r.id === reportId);
    if (report) {
      report.status = 'resolved';
      saveDb(database);
    }
    return report;
  }
};
window.parentingDb = db;
