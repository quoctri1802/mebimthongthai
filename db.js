/**
 * Mẹ Bỉm Thông Thái - Database Engine (db.js)
 * Quản lý trạng thái ứng dụng qua LocalStorage với dữ liệu mẫu tiếng Việt phong phú.
 */

const STORAGE_KEY = 'ME_BIM_THONG_THAI_DB';

// Dữ liệu mẫu ban đầu để khởi tạo cơ sở dữ liệu nếu chưa có
const INITIAL_DATABASE = {
  // 1. Hệ thống người dùng & Hồ sơ thành viên
  currentUser: null,
  
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
      "id": "art_01",
      "title": "Hướng dẫn tắm trẻ sơ sinh an toàn tại nhà cho mẹ mới sinh",
      "category": "Trẻ sơ sinh",
      "subCategory": "Tắm bé",
      "tags": [
        "trẻ sơ sinh",
        "tắm bé",
        "mẹ mới"
      ],
      "summary": "Tắm bé sơ sinh lần đầu tại nhà có thể khiến nhiều mẹ lúng túng. Dưới đây là hướng dẫn chi tiết từng bước chuẩn y khoa giúp mẹ tắm bé dễ dàng và an toàn.",
      "content": "\nTắm bé sơ sinh là một trong những thử thách lớn nhất đối với các ông bố bà mẹ mới. Da của bé rất mỏng manh và trơn trượt khi ướt. Bài viết này sẽ cung cấp hướng dẫn đầy đủ nhất để mẹ tự tin tắm bé tại nhà.\n\n### 1. Chuẩn bị dụng cụ trước khi tắm\nTrước khi cởi quần áo của bé, hãy chuẩn bị đầy đủ các dụng cụ sau đây ở nơi kín gió:\n*   **Chậu tắm:** 2 chậu (1 chậu nước xà phòng tắm bé, 1 chậu nước sạch tráng lại).\n*   **Nước tắm:** Nhiệt độ nước khoảng 37-38°C (dùng nhiệt kế đo nước hoặc dùng cùi chỏ tay cảm nhận độ ấm vừa phải).\n*   **Sữa tắm chuyên dụng:** Dịu nhẹ, không cay mắt và không chứa cồn.\n*   **Khăn lau:** 2 khăn xô nhỏ và 1 khăn tắm lớn có mũ trùm bằng cotton mềm mại.\n*   **Quần áo, tã giấy sạch:** Đã chuẩn bị sẵn mở rộng.\n*   **Dụng cụ vệ sinh:** Tăm bông vô trùng, cồn 70 độ vệ sinh rốn (nếu rốn chưa rụng), nước muối sinh lý 0.9% nhỏ mắt mũi.\n\n### 2. Các bước tắm bé sơ sinh chuẩn khoa học\nHãy thực hiện theo quy tắc: **Lau mặt -> Gội đầu -> Tắm toàn thân -> Chăm sóc rốn sau tắm.**\n\n*   **Bước 1: Lau mặt cho bé**\n    Bọc bé trong khăn ấm. Dùng bông gòn hoặc khăn xô nhúng nước ấm sạch lau mắt bé nhẹ nhàng từ góc trong ra góc ngoài. Sau đó lau trán, má, cằm và tai.\n*   **Bước 2: Gội đầu cho bé**\n    Kẹp nách bé sát vào hông mẹ, nâng đầu bé bằng lòng bàn tay và đỡ lưng bé bằng cánh tay mẹ. Dùng tay còn lại vốc nước lên tóc bé, thoa một chút dầu gội dịu nhẹ, xoa nhẹ nhàng rồi xả sạch lại bằng nước ấm. Dùng khăn mềm lau khô đầu bé ngay lập tức để tránh bé bị lạnh đầu.\n*   **Bước 3: Tắm cơ thể bé**\n    Thả bé từ từ vào chậu nước tắm, đặt đầu bé trên cánh tay mẹ. Dùng khăn mềm thoa nhẹ nhàng sữa tắm khắp cơ thể bé, chú ý đến các nếp gấp da cổ, nách, bẹn và kẽ ngón tay ngón chân.\n*   **Bước 4: Tráng người và lau khô**\n    Chuyển bé sang chậu nước sạch thứ hai để tráng lại toàn thân. Sau đó, nhấc bé ra đặt vào chiếc khăn tắm bông ấm áp đã trải sẵn, lau khô người thật nhanh nhưng nhẹ nhàng.\n\n### 3. Vệ sinh rốn cho trẻ sơ sinh sau khi tắm\nNếu cuống rốn của bé chưa rụng, việc chăm sóc rốn là cực kỳ quan trọng để phòng tránh nhiễm trùng:\n*   Dùng tăm bông sạch thấm nước muối sinh lý hoặc cồn vệ sinh nhẹ nhàng từ chân rốn ra ngoài cuống rốn.\n*   Không bôi bất kỳ loại lá thuốc dân gian hay chất lạ nào lên rốn bé.\n*   Để rốn luôn thông thoáng, tã giấy phải gấp dưới rốn, không che phủ cuống rốn.\n\n> **Lời khuyên y khoa:** Mẹ không cần tắm cho bé hàng ngày trong những tuần đầu, chỉ cần 2-3 lần/tuần nếu thường xuyên vệ sinh sạch sẽ vùng mặc tã và lau người cho bé. Tắm quá nhiều có thể làm khô làn da non nớt của bé.\n      ",
      "views": 1250,
      "likes": 85,
      "bookmarkCount": 42,
      "createdAt": "2026-03-10",
      "author": "Dr. Hải Anh",
      "isFeatured": true,
      "isTrending": true,
      "image": "https://images.unsplash.com/photo-1519689680058-324335c77ebe?w=600&auto=format&fit=crop&q=80",
      "faqs": [
        {
          "q": "Trẻ sơ sinh chưa rụng rốn có tắm được không?",
          "a": "Hoàn toàn được. Mẹ chỉ cần chú ý giữ cuống rốn khô thoáng sau khi tắm và không ngâm bé quá lâu trong nước."
        },
        {
          "q": "Nhiệt độ phòng khi tắm bé bao nhiêu là thích hợp?",
          "a": "Nhiệt độ phòng lý tưởng là khoảng 26-28°C, tuyệt đối tránh gió lùa và không bật quạt hay điều hòa thẳng vào nơi tắm bé."
        }
      ]
    },
    {
      "id": "art_02",
      "title": "Ăn dặm tự chỉ huy (BLW): Bắt đầu thế nào cho đúng và an toàn?",
      "category": "Dinh dưỡng cho bé",
      "subCategory": "Ăn dặm",
      "tags": [
        "ăn dặm",
        "BLW",
        "dinh dưỡng"
      ],
      "summary": "Phương pháp ăn dặm tự chỉ huy (Baby-Led Weaning) ngày càng được các mẹ ưa chuộng nhờ ưu điểm giúp con tự lập và phát triển kỹ năng nhai nuốt sớm. Bài viết chia sẻ hướng dẫn bắt đầu đúng cách.",
      "content": "\nĂn dặm tự chỉ huy (Baby-Led Weaning - BLW) là phương pháp bỏ qua giai đoạn ăn cháo, bột nhuyễn, bé sẽ trực tiếp ăn các thức ăn dạng đặc, cắt miếng vừa tay cầm bằng cách tự bốc ăn ngay từ 6 tháng tuổi.\n\n### 1. Dấu hiệu nhận biết bé đã sẵn sàng ăn dặm BLW\nĐừng ép bé ăn dặm quá sớm. Bé chỉ thực sự sẵn sàng khi đạt các mốc sau:\n1.  **Bé có thể tự ngồi vững:** Có thể tự giữ thẳng đầu và cổ mà không cần sự hỗ trợ nhiều của bố mẹ.\n2.  **Mất phản xạ đẩy lưỡi:** Bé không còn tự động dùng lưỡi đẩy các vật thể lạ ra khỏi miệng.\n3.  **Bé có sự phối hợp Tay - Mắt - Miệng:** Bé biết tự tay với lấy thức ăn và đưa chính xác vào miệng.\n4.  **Bé tỏ ra hứng thú với thức ăn:** Khi nhìn thấy người lớn ăn, bé sẽ nhìn chăm chú, nhóp nhép miệng hoặc với tay đòi thức ăn.\n\n### 2. Thực đơn BLW tuần đầu tiên cho bé\nTrong những ngày đầu, mẹ nên chuẩn bị những loại rau củ luộc mềm, cắt thành hình răng cưa hoặc dạng thanh dài như ngón tay của người lớn (khoảng 5-7cm) để bé dễ cầm nắm:\n*   **Cà rốt hấp:** Cắt thanh dài, hấp chín mềm vừa phải sao cho bé bóp nhẹ bằng tay thì hơi lún nhưng không bị nát nát.\n*   **Bông cải xanh hấp:** Phần cuống dài giúp bé dễ cầm nắm và gặm phần ngọn hoa mềm.\n*   **Bí ngòi hấp:** Rất mềm ngọt, dễ tiêu hóa.\n*   **Bơ chín cắt lát:** Rất ngậy và chứa nhiều chất béo tốt cho não bộ, nhưng cần cắt miếng dày để không bị nát khi bé bóp.\n*   **Chuối chín:** Cắt đôi, chừa lại một phần vỏ ở đuôi để bé cầm không bị trơn trượt.\n\n### 3. Nguyên tắc an toàn cốt lõi phòng chống hóc nghẹn\nHóc nghẹn (Choking) là nỗi sợ lớn nhất của cha mẹ khi cho con ăn BLW. Mẹ cần phân biệt rõ giữa phản xạ oẹ (Gagging) và hóc nghẹn thật sự:\n*   **Phản xạ oẹ (Gagging):** Đây là phản xạ sinh lý hoàn toàn bình thường giúp bé tự đẩy thức ăn quá sâu ra ngoài. Bé sẽ ho, đỏ mặt, hơi nhăn mặt nhưng vẫn thở và khóc bình thường. Cha mẹ hãy bình tĩnh quan sát, không nên thò tay móc họng bé.\n*   **Hóc nghẹn thực sự (Choking):** Đường thở của bé bị bít hoàn toàn. Bé sẽ im lặng, mặt tái mét, môi tím tái và không thể thở hay phát ra tiếng khóc. Lúc này mẹ cần áp dụng ngay kỹ thuật sơ cứu vỗ lưng ấn ngực Heimlich dành riêng cho trẻ dưới 1 tuổi.\n\n> **Nguyên tắc an toàn:**\n> *   Luôn để bé ngồi thẳng lưng trên ghế ăn dặm khi ăn.\n> *   TUYỆT ĐỐI KHÔNG để bé ăn một mình mà không có sự giám sát của người lớn.\n> *   Không cắt thức ăn thành dạng khoanh tròn tròn nhỏ (như nho, xúc xích) vì rất dễ lọt vào đường thở gây tắc nghẽn. Phải bổ đôi hoặc cắt lát dọc.\n      ",
      "views": 2450,
      "likes": 198,
      "bookmarkCount": 88,
      "createdAt": "2026-04-05",
      "author": "Mẹ Ốc",
      "isFeatured": false,
      "isTrending": true,
      "image": "/viet_baby_eating.png",
      "faqs": [
        {
          "q": "Bé chưa mọc răng có ăn dặm BLW được không?",
          "a": "Hoàn toàn được! Lợi (nướu) của bé rất cứng và có thể nghiền nát được rau củ luộc chín mềm. Răng chỉ là công cụ hỗ trợ chứ không phải bắt buộc."
        },
        {
          "q": "Ăn dặm tự chỉ huy có làm bé bị đau dạ dày không?",
          "a": "Không. Hệ tiêu hóa của bé sẽ tự tiết ra enzym để phân giải thức ăn phù hợp và việc tự nhai giúp kích thích tiết nước bọt hỗ trợ tiêu hóa tốt hơn."
        }
      ]
    },
    {
      "id": "art_03",
      "title": "Sleep Training là gì? Có nên luyện ngủ cho con từ sớm?",
      "category": "Giấc ngủ",
      "subCategory": "Sleep training",
      "tags": [
        "giấc ngủ",
        "sleep training",
        "routine"
      ],
      "summary": "Giấc ngủ của trẻ sơ sinh là vấn đề nhức nhối nhất của các mẹ bỉm. Sleep training giúp con tự ngủ sâu giấc suốt đêm. Vậy phương pháp nào phù hợp nhất với con bạn?",
      "content": "\nThiếu ngủ triền miên sau sinh là nguyên nhân hàng đầu dẫn đến trầm cảm của các mẹ bỉm sữa. Khái niệm Sleep Training (luyện ngủ) ra đời như một vị cứu tinh. Bài viết dưới đây sẽ giúp mẹ thấu hiểu khoa học về giấc ngủ của trẻ và cách luyện ngủ nhân văn nhất.\n\n### 1. Thời điểm vàng để bắt đầu Sleep Training\nCác chuyên gia nhi khoa khuyên rằng thời điểm thích hợp nhất để bắt đầu luyện tự ngủ cho bé là khi bé được **4 đến 6 tháng tuổi**. \nLúc này:\n*   Chu kỳ giấc ngủ của bé bắt đầu ổn định giống người lớn.\n*   Bé đã có khả năng tự xoa dịu bản thân (self-soothe) như bú mút ngón tay hoặc ôm gối mền.\n*   Cân nặng của bé đã đạt chuẩn giúp bé có thể ngủ dài qua đêm mà không bị đói thức giấc đòi bú (thường là khoảng 6kg trở lên).\n\n### 2. Các phương pháp Sleep Training phổ biến\nCó nhiều phương pháp luyện ngủ từ nhẹ nhàng đến nghiêm khắc, mẹ có thể chọn phương pháp phù hợp với cá tính của con và tâm lý gia đình:\n\n*   **Phương pháp Cry It Out (Để bé khóc tự ngủ):**\n    Mẹ thực hiện chu trình ngủ (đọc truyện, ôm ấp), sau đó đặt bé vào cũi khi bé còn thức, tắt đèn, ra ngoài và đóng cửa. Mẹ không quay lại phòng trừ khi có việc bất thường nguy hiểm. Đây là cách nhanh nhất (chỉ 3-4 ngày) nhưng đòi hỏi tinh thần thép và sự đồng lòng cao của cả nhà.\n*   **Phương pháp Ferber (Luyện ngủ giãn cách):**\n    Tương tự như Cry It Out, nhưng mẹ sẽ quay lại phòng kiểm tra và vỗ về con sau những khoảng thời gian giãn cách tăng dần (ví dụ: 3 phút, 5 phút, 10 phút rồi 15 phút). Mẹ chỉ vỗ về bé bằng giọng nói và chạm nhẹ, không được bế bé lên.\n*   **Phương pháp No Tears / Fading (Không nước mắt):**\n    Phương pháp tiếp cận chậm rãi. Mẹ ngồi cạnh cũi của bé, vuốt ve bé nhẹ nhàng cho đến khi bé ngủ. Cứ sau mỗi đêm, mẹ dịch chuyển ghế ngồi của mình xa cũi hơn một chút (đến cửa phòng, rồi ra hẳn ngoài). Phương pháp này mất nhiều tuần nhưng giảm thiểu áp lực tâm lý cho cả mẹ lẫn bé.\n\n### 3. Thiết lập môi trường ngủ lý tưởng cho con\nTrước khi luyện ngủ, hãy chắc chắn phòng ngủ của bé đã đạt các chuẩn tối ưu sau:\n1.  **Nhiệt độ phòng:** Nên duy trì mát mẻ từ 18 - 22°C (ở Việt Nam điều hòa thường đặt 25-27°C tùy phòng nhưng cần cảm thấy mát tay).\n2.  **Độ tối:** Phòng tối hoàn toàn (sử dụng rèm cản sáng 100%) để kích thích cơ thể bé tiết ra hormone buồn ngủ Melatonin.\n3.  **Tiếng ồn trắng (White noise):** Giúp cản bớt tiếng ồn đột ngột từ sinh hoạt gia đình hoặc ngoài đường và tạo âm thanh môi trường quen thuộc tựa như trong bụng mẹ.\n4.  **Routine đi ngủ:** Thực hiện một chuỗi hoạt động cố định mỗi tối (Tắm -> Massage -> Đọc sách -> Bú sữa -> Vào cũi). Điều này báo hiệu cho não bộ bé biết rằng đã đến giờ đi ngủ.\n      ",
      "views": 3100,
      "likes": 245,
      "bookmarkCount": 154,
      "createdAt": "2026-03-22",
      "author": "Mẹ Sữa Bé Gấu",
      "isFeatured": false,
      "isTrending": false,
      "image": "/viet_baby_sleeping.png",
      "faqs": [
        {
          "q": "Luyện ngủ có ảnh hưởng đến tâm lý hay làm giảm tình gắn kết mẹ con?",
          "a": "Không. Các nghiên cứu dài hạn chứng minh trẻ được luyện ngủ tự lập vẫn phát triển tâm lý bình thường và có mối quan hệ gắn kết an toàn tốt đẹp với cha mẹ."
        },
        {
          "q": "Bé đang ốm hay mọc răng có nên luyện ngủ không?",
          "a": "Tuyệt đối KHÔNG. Khi con ốm, sốt hay mọc răng đau nhức, hãy tạm hoãn luyện ngủ và ưu tiên ôm ấp vỗ về bé tối đa."
        }
      ]
    },
    {
      "id": "art_04",
      "title": "Phòng ngừa trầm cảm sau sinh: Tiếng lòng của những người mẹ",
      "category": "Chăm sóc mẹ sau sinh",
      "subCategory": "tâm lý mẹ bỉm",
      "tags": [
        "mẹ sau sinh",
        "tâm lý mẹ bỉm",
        "trầm cảm sau sinh"
      ],
      "summary": "Trầm cảm sau sinh không phải là một sự yếu đuối. Đó là một tình trạng y khoa thực sự cần được thấu hiểu, chia sẻ và điều trị kịp thời.",
      "content": "\nSinh con ra là một niềm hạnh phúc thiêng liêng, nhưng đi kèm với đó là vô vàn áp lực vô hình đè nặng lên đôi vai của người mẹ trẻ. Sự thay đổi đột ngột của hormone kết hợp cùng việc thiếu ngủ triền miên có thể đẩy người mẹ vào bóng tối trầm cảm sau sinh.\n\n### 1. Phân biệt Hội chứng Baby Blues và Trầm cảm sau sinh\nNhiều người thường nhầm lẫn giữa hai khái niệm này, dẫn đến sự chủ quan đáng tiếc:\n*   **Hội chứng Baby Blues (Buồn chán sau sinh):** Ảnh hưởng đến khoảng 80% sản phụ. Biểu hiện là dễ xúc động, khóc vô cớ, lo lắng vu vơ, mất ngủ nhẹ. Hội chứng này thường xuất hiện từ ngày thứ 3 sau sinh và tự biến mất hoàn toàn sau 2 tuần mà không cần can thiệp y khoa.\n*   **Trầm cảm sau sinh (Postpartum Depression - PPD):** Nghiêm trọng và kéo dài hơn nhiều. Nó xuất hiện bất kỳ lúc nào trong vòng 1 năm đầu sau sinh với các triệu chứng dữ dội: cảm thấy tuyệt vọng cùng cực, mất kết nối với con, thường xuyên khóc lóc, nghĩ mình là một người mẹ tồi tệ, suy nghĩ làm tổn hại bản thân hoặc em bé. Nếu kéo dài quá 2 tuần, sản phụ cần có sự giúp đỡ y tế khẩn cấp.\n\n### 2. Nguyên nhân dẫn đến trầm cảm sau sinh\nPPD là sự cộng hưởng phức tạp của nhiều yếu tố sinh học và môi trường:\n1.  **Hormone sụt giảm đột ngột:** Lượng estrogen và progesterone trong cơ thể giảm mạnh về mức bình thường trong 24 giờ đầu sau khi sinh, gây mất cân bằng cảm xúc sâu sắc.\n2.  **Thiếu ngủ và kiệt sức:** Chăm sóc trẻ sơ sinh ban đêm làm gián đoạn giấc ngủ hoàn toàn, bào mòn năng lượng cơ thể.\n3.  **Thiếu sự chia sẻ từ gia đình:** Áp lực chăm con một mình, chồng vô tâm hoặc mâu thuẫn thế hệ mẹ chồng - nàng dâu về phương pháp nuôi dạy con.\n4.  **Kỳ vọng quá cao:** Áp lực từ xã hội buộc người mẹ phải \"hoàn hảo\", sữa phải nhiều, con phải tăng cân nhanh, nhà cửa phải gọn gàng sạch sẽ.\n\n### 3. Người mẹ và gia đình cần làm gì để vượt qua?\n*   **Với người mẹ:** Hãy học cách buông bỏ bớt sự hoàn hảo. Con ngủ - mẹ ngủ, đừng cố dọn dẹp nhà cửa. Hãy thẳng thắn nói ra mong muốn được giúp đỡ của mình thay vì chịu đựng âm thầm.\n*   **Với người chồng:** Hãy trở thành tấm khiên bảo vệ người vợ. Hãy chủ động bế con, thay tã, dọn dẹp nhà cửa để vợ được chợp mắt. Tránh những lời nói vô tình làm tổn thương như: *\"Ở nhà chỉ có nuôi con mà cũng mệt\"*.\n*   **Tìm kiếm sự trợ giúp chuyên khoa:** Đừng ngần ngại gặp gỡ bác sĩ tâm lý để được tham vấn hoặc sử dụng liệu pháp y tế an toàn.\n      ",
      "views": 1800,
      "likes": 215,
      "bookmarkCount": 97,
      "createdAt": "2026-04-18",
      "author": "Dr. Hải Anh",
      "isFeatured": true,
      "isTrending": false,
      "image": "https://images.unsplash.com/photo-1545239351-ef35f43d514b?w=600&auto=format&fit=crop&q=80",
      "faqs": [
        {
          "q": "Thuốc điều trị trầm cảm sau sinh có ảnh hưởng đến sữa mẹ không?",
          "a": "Hiện nay có rất nhiều nhóm thuốc điều trị trầm cảm thế hệ mới hoàn toàn an toàn đối với các bà mẹ đang cho con bú. Hãy tham khảo ý kiến chuyên môn của bác sĩ sản khoa và tâm thần để được kê đơn phù hợp."
        },
        {
          "q": "Làm thế nào để người chồng nhận biết vợ bị trầm cảm?",
          "a": "Hãy chú ý nếu thấy vợ thường xuyên mất ngủ dù con đã ngủ say, dễ giật mình cáu gắt vô cớ, lơ là bản thân và ít giao tiếp bằng mắt, hoặc có những hành động chăm sóc bé quá mức một cách lo âu cực đoan."
        }
      ]
    },
    {
      "id": "art_05",
      "title": "7 Dấu hiệu nguy hiểm ở trẻ sơ sinh cần đưa đi cấp cứu ngay lập tức",
      "category": "Sức khỏe trẻ em",
      "subCategory": "Cấp cứu nhi",
      "tags": [
        "sơ sinh",
        "sức khỏe",
        "cấp cứu"
      ],
      "summary": "Trẻ sơ sinh rất non nớt và bệnh thường diễn biến nhanh. Cha mẹ cần nằm lòng 7 dấu hiệu sinh tồn nguy hiểm này để bảo vệ tính mạng con.",
      "content": "\nTrẻ sơ sinh dưới 3 tháng tuổi có hệ miễn dịch vô cùng yếu. Một triệu chứng nhỏ cũng có thể là dấu hiệu của bệnh lý nghiêm trọng như nhiễm trùng máu hoặc viêm màng não. Bố mẹ tuyệt đối không được chủ quan nếu thấy 1 trong 7 dấu hiệu sau:\n\n### 1. Sốt trên 38°C (đối với trẻ dưới 3 tháng)\nSốt ở trẻ dưới 3 tháng tuổi được xem là một trường hợp cấp cứu y tế. Đừng cho trẻ uống thuốc hạ sốt ở nhà mà hãy đưa bé đến bệnh viện ngay lập tức. Sốt có thể là dấu hiệu duy nhất của một nhiễm trùng nghiêm trọng.\n\n### 2. Trẻ lừ đừ, khó đánh thức\nMột em bé khỏe mạnh sẽ thức dậy để bú, khóc khi đói hoặc tã ướt. Nếu bé nhà bạn ngủ li bì, chân tay mềm nhũn, lay gọi mãi không mở mắt hoặc không phản ứng, đây là một cấp cứu y khoa khẩn cấp.\n\n### 3. Thay đổi màu sắc da (Tím tái hoặc nhợt nhạt)\nMôi, lưỡi, hoặc móng tay/móng chân của bé chuyển sang màu xanh tím. Da bé trở nên nhợt nhạt, tái mét, hoặc nổi vân hoa đốm đỏ/tím. Đây là dấu hiệu thiếu oxy hoặc sốc, tuần hoàn máu kém.\n\n### 4. Thở nhanh, thở rút lõm lồng ngực\nTrẻ thở quá 60 lần/phút, hoặc khi thở phần ngực dưới xương sườn lõm sâu vào (rút lõm lồng ngực), cánh mũi phập phồng mạnh. Bé phát ra tiếng rên rỉ (grunting) mỗi khi thở ra.\n\n### 5. Bỏ bú hoàn toàn hoặc nôn vọt liên tục\nBé không thể ngậm vú, từ chối bú nhiều cữ liên tiếp. Nôn vọt ra thành tia mạnh (không phải ọc sữa thông thường) sau mọi cữ bú, đặc biệt nôn ra dịch xanh/vàng hoặc có lẫn máu.\n\n### 6. Thóp phồng hoặc lõm sâu\nThóp (phần mềm trên đỉnh đầu bé sơ sinh). Thóp phồng căng dù bé đang nằm yên và không khóc có thể là dấu hiệu viêm màng não. Thóp lõm sâu báo hiệu bé đang bị mất nước nghiêm trọng.\n\n### 7. Co giật\nCơ thể bé co cứng, mắt trợn ngược, tay chân giật liên hồi. Cha mẹ cần giữ bình tĩnh, đặt bé nằm nghiêng nơi an toàn và gọi cấp cứu ngay, KHÔNG nhét bất cứ thứ gì vào miệng bé.\n      ",
      "views": 5200,
      "likes": 450,
      "bookmarkCount": 320,
      "createdAt": "2026-05-18",
      "author": "BS. Tuấn Minh (BV Nhi Đồng)",
      "isFeatured": true,
      "isTrending": true,
      "image": "https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?w=600&auto=format&fit=crop&q=80",
      "faqs": [
        {
          "q": "Làm sao để đếm nhịp thở của trẻ sơ sinh?",
          "a": "Để bé nằm yên hoặc ngủ, vén áo bé lên để nhìn rõ bụng và ngực. Đếm số lần ngực/bụng nhô lên trong trọn vẹn 1 phút. Nhịp thở bình thường của trẻ sơ sinh là 40-60 lần/phút."
        }
      ]
    },
    {
      "id": "art_06",
      "title": "Lịch sinh hoạt EASY 3 cho trẻ từ 0 - 6 tuần tuổi",
      "category": "Giấc ngủ",
      "subCategory": "Sinh hoạt EASY",
      "tags": [
        "EASY",
        "giấc ngủ",
        "trẻ sơ sinh"
      ],
      "summary": "EASY là chuỗi sinh hoạt lặp đi lặp lại giúp bé ăn ngon, ngủ ngoan và mẹ có thời gian nghỉ ngơi. Cùng tìm hiểu EASY 3 dành riêng cho bé mới sinh.",
      "content": "\nEASY là viết tắt của: Eat (Ăn) - Activity (Chơi) - Sleep (Ngủ) - Your time (Thời gian của mẹ). Ở giai đoạn 0-6 tuần tuổi, bé cần ăn liên tục để tăng trưởng, do đó chu kỳ EASY 3 (3 giờ lặp lại một lần) là phù hợp nhất.\n\n### 1. Chu kỳ EASY 3 hoạt động như thế nào?\nMột chu kỳ EASY 3 giờ diễn ra như sau:\n*   **E (Eat - Ăn): 20-30 phút.** Bé thức dậy và được cho bú ngay. Việc bú lúc tỉnh táo giúp bé ăn no và hiệu quả, tránh tình trạng vừa ăn vừa ngủ gật.\n*   **A (Activity - Chơi): 20-30 phút.** Sau khi ăn no và vỗ ợ hơi, mẹ thay tã, trò chuyện, cho bé nằm sấp (Tummy time) hoặc nhìn thẻ kích thích thị giác.\n*   **S (Sleep - Ngủ): 1.5 - 2 giờ.** Khi thấy dấu hiệu buồn ngủ (ngáp, dụi mắt, cáu gắt), mẹ tiến hành trình tự ngủ và cho bé vào cũi.\n*   **Y (Your time - Thời gian của mẹ):** Trong lúc bé ngủ, mẹ vắt sữa, ăn uống, dọn dẹp hoặc ngủ nghỉ.\n\n### 2. Ví dụ một lịch EASY 3 mẫu\n*   07:00 – Thức dậy, Ăn (E)\n*   07:30 – Chơi, thay đồ (A)\n*   08:00 – Ngủ sáng (S)\n*   10:00 – Thức dậy, Ăn (E)\n*   10:30 – Chơi (A)\n*   11:00 – Ngủ trưa (S)\n*   13:00 – Thức dậy, Ăn (E)...\n*(Lặp lại cho đến 19:00, sau đó bé sẽ vào giấc ngủ đêm, đêm bé đói thì dậy bú rồi ngủ tiếp không cần chơi).*\n\n### 3. Bí quyết áp dụng EASY thành công\n*   Quan trọng nhất là duy trì thứ tự E -> A -> S. Tuyệt đối không để bé quen với việc bú để ngủ.\n*   Linh hoạt theo nhu cầu của bé: Thời gian thức (wake window) của bé sơ sinh rất ngắn, tối đa chỉ 45-60 phút. Đừng ép bé thức quá lâu sẽ khiến bé bị quá mệt (overtired) và khó vào giấc.\n      ",
      "views": 4100,
      "likes": 312,
      "bookmarkCount": 215,
      "createdAt": "2026-05-15",
      "author": "Chuyên gia Ngủ Ngọc Anh",
      "isFeatured": false,
      "isTrending": false,
      "image": "/viet_baby_sleeping.png",
      "faqs": []
    },
    {
      "id": "art_07",
      "title": "Hướng dẫn bảo quản và rã đông sữa mẹ chuẩn Bộ Y Tế",
      "category": "Dinh dưỡng cho bé",
      "subCategory": "Sữa mẹ",
      "tags": [
        "sữa mẹ",
        "bảo quản",
        "dinh dưỡng"
      ],
      "summary": "Sữa mẹ là tài sản quý giá nhất, nhưng bảo quản sai cách có thể làm mất chất hoặc ôi thiu. Đọc ngay nguyên tắc bảo quản vàng.",
      "content": "\nBảo quản sữa mẹ đúng cách là kỹ năng bắt buộc đối với các mẹ đi làm hoặc muốn kích sữa lưu trữ cho con. \n\n### 1. Thời gian bảo quản tối đa của sữa mẹ\n*   **Ở nhiệt độ phòng (dưới 26°C):** Tối đa 4 - 6 giờ.\n*   **Trong túi đá khô giữ nhiệt:** Tối đa 24 giờ.\n*   **Ngăn mát tủ lạnh (0-4°C):** Tối đa 3 - 5 ngày. Nên để sâu bên trong, không để ở cánh cửa tủ vì nhiệt độ không ổn định.\n*   **Ngăn đá tủ lạnh cửa riêng:** Tối đa 3 - 6 tháng.\n*   **Tủ đông chuyên dụng (-18°C):** Từ 6 - 12 tháng.\n\n### 2. Cách trữ sữa an toàn\n*   Luôn rửa tay sạch bằng xà phòng trước khi hút sữa.\n*   Chỉ sử dụng túi trữ sữa hoặc bình trữ sữa chuyên dụng, BPA-free.\n*   **Lưu ý quan trọng:** Không đổ sữa đầy phễu túi vì khi đông lại thể tích sữa sẽ tăng lên gây bục túi. Chỉ đổ khoảng 3/4 túi.\n*   Luôn ghi rõ ngày, giờ hút sữa lên túi trước khi cất. Nguyên tắc: Sữa cũ dùng trước (First in - First out).\n*   Không trộn chung sữa vừa mới vắt (còn ấm) vào túi sữa đang để trong tủ lạnh. Hãy làm lạnh sữa mới trong ngăn mát trước, khi cả hai có cùng nhiệt độ lạnh mới được đổ chung.\n\n### 3. Quy trình rã đông và hâm sữa\n*   **Rã đông:** Chuyển túi sữa từ ngăn đá xuống ngăn mát trước nửa ngày để sữa rã đông từ từ. Hoặc ngâm túi sữa vào bát nước ấm. Tuyệt đối không rã đông bằng lò vi sóng hoặc nước sôi sẽ làm chết các kháng thể quý giá trong sữa.\n*   **Lắc đều:** Sữa trữ đông thường bị tách lớp béo nổi lên trên. Lắc nhẹ nhàng vòng tròn để trộn đều.\n*   **Hâm nóng:** Ngâm trong nước ấm 40°C hoặc dùng máy hâm sữa. Kiểm tra nhiệt độ lên cổ tay trước khi cho bé bú.\n*   Sữa sau khi rã đông chỉ để được ở nhiệt độ phòng trong 2 giờ và ở ngăn mát 24 giờ. Sữa bé bú thừa phải bỏ đi, không trữ lại.\n      ",
      "views": 3800,
      "likes": 290,
      "bookmarkCount": 180,
      "createdAt": "2026-05-12",
      "author": "Hội Sữa Mẹ Việt Nam",
      "isFeatured": false,
      "isTrending": false,
      "image": "https://images.unsplash.com/photo-1544254881-2292f392ddb9?w=600&auto=format&fit=crop&q=80",
      "faqs": []
    },
    {
      "id": "art_08",
      "title": "Khủng hoảng tuổi lên 2 (Terrible Twos): Đối phó với những cơn ăn vạ",
      "category": "Tâm lý & Nuôi dạy",
      "subCategory": "Tâm lý trẻ nhỏ",
      "tags": [
        "khủng hoảng lên 2",
        "tâm lý",
        "kỷ luật"
      ],
      "summary": "Trẻ bỗng trở nên ương bướng, thích nói \"Không\" và hay lăn ra khóc ăn vạ? Chúc mừng mẹ, con đang bước vào giai đoạn khủng hoảng phát triển sinh lý tự nhiên.",
      "content": "\nGiai đoạn \"Terrible Twos\" (khủng hoảng tuổi lên hai) thực chất có thể bắt đầu từ lúc trẻ 18 tháng và kéo dài đến 3 tuổi. Đây là dấu mốc quan trọng chứng tỏ con bạn đang phát triển nhận thức để trở thành một cá thể độc lập.\n\n### 1. Dấu hiệu nhận biết khủng hoảng lên 2\n*   Câu cửa miệng luôn là: \"Không!\", \"Của con!\", \"Tự làm!\".\n*   Cảm xúc thay đổi thất thường chỉ trong vài giây.\n*   Bất đồng ý chí với người lớn: Mẹ bảo đi hướng này, con nhất định đi hướng kia.\n*   Cơn \"tantrum\" (ăn vạ): La hét, khóc lóc vật vã, cắn, đánh, ném đồ vật, hoặc lăn đùng ra sàn nhà ăn vạ chỗ đông người.\n\n### 2. Nguyên nhân do đâu?\nỞ tuổi này, trí não của trẻ phát triển rực rỡ, trẻ bắt đầu có những ý muốn, sở thích riêng và muốn khám phá thế giới. Tuy nhiên, khả năng ngôn ngữ của trẻ lại chưa đủ tốt để diễn đạt mong muốn, cộng thêm kỹ năng kiểm soát cảm xúc chưa hoàn thiện dẫn đến sự bùng nổ, bức bối khi không được như ý.\n\n### 3. Chiến lược đối phó thông thái dành cho cha mẹ\n*   **Giữ bình tĩnh (Bố mẹ không được \"tantrum\" theo con):** Đừng quát tháo hay đánh đòn. Điều này chỉ làm con hoảng sợ và học cách dùng bạo lực. Hít thở sâu và hiểu rằng: \"Con đang gặp khó khăn, con không phải đứa trẻ hư\".\n*   **Cung cấp sự lựa chọn, không ra lệnh:** Thay vì nói \"Đi tắm ngay!\", hãy hỏi \"Con muốn tắm bằng chậu màu xanh hay màu đỏ?\". Trẻ sẽ cảm thấy được tôn trọng ý kiến.\n*   **Áp dụng kỹ thuật Time-out hoặc Time-in:** Khi bé đang cơn cuồng nộ cắn đánh, hãy đảm bảo bé an toàn và lùi lại một bước chờ bé dịu xuống, hoặc ôm chặt bé vào lòng (Time-in) và nói \"Mẹ biết con đang rất tức giận vì không được ăn kẹo\".\n*   **Lờ đi hành vi xấu:** Nếu bé khóc ăn vạ đòi một món đồ vô lý, hãy cương quyết nói \"Không\" một lần, sau đó quay đi làm việc khác. Khi bé thấy khóc lóc không mang lại tác dụng, bé sẽ dừng lại.\n      ",
      "views": 6500,
      "likes": 520,
      "bookmarkCount": 410,
      "createdAt": "2026-05-10",
      "author": "Chuyên gia Tâm lý",
      "isFeatured": true,
      "isTrending": true,
      "image": "https://images.unsplash.com/photo-1471286174890-9c112cbcdfc3?w=600&auto=format&fit=crop&q=80",
      "faqs": []
    },
    {
      "id": "art_09",
      "title": "So sánh Ăn dặm Kiểu Nhật và BLW: Ưu nhược điểm",
      "category": "Dinh dưỡng cho bé",
      "subCategory": "Ăn dặm",
      "tags": [
        "ăn dặm kiểu nhật",
        "BLW",
        "dinh dưỡng"
      ],
      "summary": "Mẹ phân vân không biết nên chọn Ăn dặm Kiểu Nhật (ADKN) hay Bé tự chỉ huy (BLW)? Cùng so sánh chi tiết để tìm phương pháp phù hợp nhất.",
      "content": "\nKhi con bước vào 6 tháng tuổi, việc chọn phương pháp ăn dặm khiến nhiều mẹ đau đầu. Hai phương pháp hiện đại nhất là ADKN và BLW đều có những ưu điểm vượt trội so với ăn dặm truyền thống (nấu chung thành nồi cháo lổn nhổn).\n\n### 1. Ăn dặm Kiểu Nhật (ADKN)\n*   **Đặc điểm:** Thức ăn được nấu riêng từng món (cơm, thịt, rau), chế biến từ loãng mịn đến đặc thô dần theo từng tháng tuổi. Ăn nhạt hoàn toàn, chú trọng nước dùng Dashi để tạo vị ngọt tự nhiên.\n*   **Ưu điểm:** \n    * Bé làm quen tốt với hương vị nguyên bản của từng loại thực phẩm.\n    * Tốt cho hệ tiêu hóa do độ thô được tăng từ từ.\n    * Mẹ kiểm soát được chính xác lượng thức ăn bé nạp vào.\n*   **Nhược điểm:** Mẹ tốn rất nhiều thời gian hầm, rây, nghiền, nấu nhiều món riêng biệt lỉnh kỉnh mỗi ngày. Cần mẹ phải cực kỳ kiên nhẫn bón thìa.\n\n### 2. Ăn dặm Tự chỉ huy (BLW - Baby Led Weaning)\n*   **Đặc điểm:** Bỏ qua hoàn toàn giai đoạn ăn cháo xay nhuyễn. Bé được cung cấp thức ăn thô ngay từ đầu (cắt thanh dài vừa tay cầm). Bé tự cầm bốc, tự quyết định ăn gì và ăn bao nhiêu.\n*   **Ưu điểm:**\n    * Kỹ năng nhai nuốt và phối hợp tay-mắt phát triển cực kỳ vượt trội.\n    * Bé tận hưởng bữa ăn, không có hiện tượng ép ăn sinh ra biếng ăn tâm lý.\n    * Mẹ nhàn hạ, không phải đút, có thể cho bé ăn cùng bữa cơm gia đình.\n*   **Nhược điểm:**\n    * Nguy cơ hóc nghẹn (gagging) khiến gia đình đau tim.\n    * Thời gian đầu bé chủ yếu bóp nát, nhai nhả chứ không nuốt được vào bụng nhiều, gây áp lực cân nặng.\n    * Rất bẩn, mẹ dọn dẹp \"chiến trường\" mệt mỏi.\n\n### 3. Phương pháp kết hợp (Kết hợp kiểu Nhật và BLW)\nNhiều mẹ thông thái chọn giải pháp dung hòa: Bữa trưa cho ăn BLW để rèn kỹ năng nhai và tự lập, bữa chiều tối mẹ đút theo kiểu Nhật để đảm bảo bé no bụng tăng cân tốt.\n      ",
      "views": 3200,
      "likes": 210,
      "bookmarkCount": 150,
      "createdAt": "2026-05-08",
      "author": "Mẹ Ốc",
      "isFeatured": false,
      "isTrending": false,
      "image": "/viet_baby_eating.png",
      "faqs": []
    },
    {
      "id": "art_10",
      "title": "5 Dấu hiệu nhận biết sớm nguy cơ trẻ tự kỷ (ASD)",
      "category": "Sức khỏe trẻ em",
      "subCategory": "Tâm lý",
      "tags": [
        "tự kỷ",
        "ASD",
        "tâm lý"
      ],
      "summary": "Can thiệp sớm trước 3 tuổi là chìa khóa vàng cho trẻ tự kỷ. Làm sao để cha mẹ nhận biết những dấu hiệu bất thường từ khi con 1 tuổi?",
      "content": "\nRối loạn phổ tự kỷ (ASD) thường xuất hiện trước 3 tuổi, ảnh hưởng tới khả năng giao tiếp và tương tác xã hội của trẻ. Việc phát hiện và can thiệp y tế trong \"giai đoạn vàng\" (trước 3 tuổi) sẽ tăng cơ hội hòa nhập bình thường cho bé.\n\nDưới đây là các dấu hiệu Cờ Đỏ (Red flags) ở độ tuổi 12-18 tháng mà cha mẹ tuyệt đối không nên phớt lờ cho rằng \"trẻ chậm nói thôi\":\n\n### 1. Không giao tiếp bằng mắt\nTrẻ né tránh ánh mắt của cha mẹ khi được gọi tên hoặc trò chuyện cùng. Bé thường nhìn lảng đi nơi khác hoặc nhìn xuyên qua người bạn. \n\n### 2. Không phản ứng khi được gọi tên\nDù thính lực hoàn toàn bình thường, trẻ lại không quay đầu lại hoặc không có bất kỳ biểu cảm nào khi nghe ai đó gọi tên mình, như thể bé bị điếc.\n\n### 3. Không biết chỉ ngón tay (Pointing)\nĐến 12-14 tháng tuổi, trẻ bình thường sẽ dùng ngón trỏ để chỉ vào đồ vật bé muốn hoặc chỉ cho người lớn xem thứ gì đó thú vị. Trẻ tự kỷ thường mất đi kỹ năng giao tiếp phi ngôn ngữ này, thay vào đó bé có thể cầm tay người lớn kéo đến đồ vật bé muốn mà không nhìn mắt.\n\n### 4. Hành vi rập khuôn, lặp đi lặp lại\nBé thích các trò chơi rập khuôn một cách kỳ lạ. Ví dụ: thay vì đẩy xe ô tô chạy, bé lại lật ngược xe để quay bánh xe hàng giờ đồng hồ. Bé thích xếp đồ chơi thành hàng thẳng tắp. Bé có các động tác lặp lại vô nghĩa như vỗ tay liên tục, đập đầu, xoay tròn người.\n\n### 5. Chậm nói và mất đi kỹ năng đã có\nTrẻ không bập bẹ nói lúc 12 tháng, không nói được từ đơn lúc 16 tháng. Đặc biệt nguy hiểm là tình trạng \"Thoái lui\": Trẻ đã từng nói được vài từ nhưng sau đó im lặng dần và mất hoàn toàn khả năng ngôn ngữ.\n\n> **Lời khuyên:** Nếu thấy con có từ 2 dấu hiệu trên, cha mẹ hãy mạnh dạn đưa con đi khám tại các trung tâm Tâm bệnh hoặc khoa Tâm lý Nhi uy tín để được thực hiện bài test sàng lọc M-CHAT.\n      ",
      "views": 4500,
      "likes": 380,
      "bookmarkCount": 220,
      "createdAt": "2026-05-05",
      "author": "BS Tâm bệnh Lê Văn",
      "isFeatured": false,
      "isTrending": false,
      "image": "https://images.unsplash.com/photo-1601683413988-cb940e53a2eb?w=600&auto=format&fit=crop&q=80",
      "faqs": []
    },
    {
      "id": "art_11",
      "title": "Hướng dẫn tắm bé sơ sinh chưa rụng rốn chuẩn y khoa",
      "category": "Chăm sóc trẻ sơ sinh",
      "subCategory": "Vệ sinh",
      "tags": [
        "tắm bé",
        "rốn",
        "sơ sinh"
      ],
      "summary": "Việc tắm bé sơ sinh, đặc biệt khi cuống rốn chưa rụng khiến nhiều ba mẹ lóng ngóng. Các bước hướng dẫn chi tiết sau sẽ giúp mẹ tự tin hơn.",
      "content": "\nCuống rốn của trẻ sơ sinh thường rụng sau 7-15 ngày. Trong thời gian này, việc tắm và vệ sinh cuống rốn cần cẩn trọng để tránh nhiễm trùng.\n\n### Chuẩn bị trước khi tắm:\n*   Phòng tắm kín gió, nhiệt độ phòng 27-28 độ C.\n*   Chuẩn bị sẵn sàng mọi thứ: khăn tắm to, khăn sữa, quần áo, bỉm, bông tăm, cồn 70 độ (để sát khuẩn rốn), sữa tắm gội cho bé.\n*   Pha nước ấm khoảng 37-38 độ C (thử bằng cùi chỏ tay mẹ thấy ấm là được).\n\n### Các bước thực hiện:\n1.  **Gội đầu trước:** Vẫn quấn khăn giữ ấm cơ thể bé, mẹ bế bé kẹp dưới nách trái, ngón tay cái và ngón giữa bịt hai lỗ tai bé lại để nước không vào. Dùng khăn sữa dấp nước gội đầu và lau khô ngay.\n2.  **Tắm thân:** Cởi khăn quấn bé, nhẹ nhàng thả bé vào chậu nước. Một tay mẹ luôn đỡ sau gáy và vai bé. Tắm bằng khăn sữa, chú ý các vùng nếp gấp (cổ, nách, bẹn).\n3.  **Vấn đề rốn:** Đừng quá hoảng sợ nếu nước dính vào rốn chưa rụng, việc này không cấm kỵ miễn là mẹ phải lau khô kỹ sau đó. Tránh cọ xát mạnh vùng rốn.\n4.  **Lau khô:** Nhấc bé ra, quấn ngay vào khăn bông lớn thấm khô toàn thân, đặc biệt các nếp gấp. \n\n### Vệ sinh rốn sau tắm:\nDùng tăm bông nhúng cồn 70 độ (hoặc cồn đỏ betadine theo chỉ định của bác sĩ) lau nhẹ nhàng từ chân rốn (sát da bụng) hất lên trên cuống rốn. Đợi rốn khô ráo hoàn toàn mới mặc áo hoặc quấn bỉm. **Lưu ý:** Gập mép bỉm xuống dưới rốn để rốn được thoáng khí, giúp nhanh rụng hơn.\n      ",
      "views": 2900,
      "likes": 180,
      "bookmarkCount": 110,
      "createdAt": "2026-05-02",
      "author": "Điều dưỡng Thu Trà",
      "isFeatured": false,
      "isTrending": false,
      "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80",
      "faqs": []
    },
    {
      "id": "art_12",
      "title": "Top 8 thực phẩm dễ gây dị ứng mẹ cần lưu ý khi bé ăn dặm",
      "category": "Dinh dưỡng cho bé",
      "subCategory": "Ăn dặm",
      "tags": [
        "dị ứng",
        "ăn dặm",
        "thực phẩm"
      ],
      "summary": "Dị ứng thực phẩm ở trẻ nhỏ có thể gây sốc phản vệ nguy hiểm. Mẹ hãy nắm rõ danh sách \"Top 8\" này để cho bé thử nghiệm an toàn.",
      "content": "\nKhi bắt đầu hành trình ăn dặm, ngoài việc bổ sung dinh dưỡng, mẹ cũng cần test dị ứng cho bé. Theo thống kê y khoa, 90% các ca dị ứng thực phẩm ở trẻ em bắt nguồn từ \"Top 8\" nhóm thực phẩm sau:\n\n1.  **Sữa bò và các chế phẩm từ sữa bò:** Phổ biến nhất (dị ứng đạm bò). Gây tiêu chảy, nôn mửa, phát ban hoặc đi ngoài ra máu.\n2.  **Trứng (đặc biệt là lòng trắng):** Thường gây dị ứng cho trẻ dưới 1 tuổi. \n3.  **Lạc (Đậu phộng):** Là loại dị ứng nguy hiểm nhất vì dễ gây sốc phản vệ gây khó thở khẩn cấp.\n4.  **Các loại hạt cây (Óc chó, hạnh nhân, hạt điều, mác ca).**\n5.  **Đậu nành:** Nhiều trẻ dị ứng đạm bò cũng dị ứng chéo với đạm đậu nành.\n6.  **Lúa mì (Chứa Gluten).**\n7.  **Cá biển.**\n8.  **Hải sản có vỏ (Tôm, cua, sò, hàu).**\n\n### Cách thử thực phẩm an toàn (Quy tắc 3 ngày)\nKhi muốn giới thiệu một trong những thực phẩm thuộc nhóm dễ dị ứng, mẹ hãy áp dụng \"Quy tắc 3 ngày\" (3-day wait rule):\n*   Ngày 1: Cho bé ăn một lượng rất nhỏ (1 thìa cafe) thực phẩm mới vào buổi sáng và theo dõi 24h.\n*   Ngày 2 & 3: Tăng lượng từ từ lên nếu không thấy phản ứng gì. Trong 3 ngày này không cho ăn thêm bất kỳ loại thức ăn MỚI nào khác.\n*   **TUYỆT ĐỐI KHÔNG** thử đồ ăn mới vào buổi tối, vì nếu dị ứng sốc phản vệ xảy ra trong lúc ngủ, cha mẹ sẽ không thể phát hiện kịp.\n\n### Triệu chứng dị ứng cần đi viện cấp cứu ngay:\nSưng phù môi, lưỡi, mặt; Khò khè khó thở; Nổi mề đay toàn thân nhanh chóng; Li bì nôn mửa liên tục.\n      ",
      "views": 3500,
      "likes": 240,
      "bookmarkCount": 190,
      "createdAt": "2026-04-28",
      "author": "BS Dinh Dưỡng Mai Anh",
      "isFeatured": false,
      "isTrending": false,
      "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=600&auto=format&fit=crop&q=80",
      "faqs": []
    },
    {
      "id": "art_13",
      "title": "Trẻ bị sốt: Khi nào cần dùng thuốc hạ sốt Paracetamol/Ibuprofen?",
      "category": "Sức khỏe trẻ em",
      "subCategory": "Chăm sóc khi ốm",
      "tags": [
        "sốt",
        "sức khỏe",
        "hạ sốt"
      ],
      "summary": "Nhiều cha mẹ có thói quen hễ thấy con ấm người là cho uống thuốc hạ sốt ngay. Đây là một sai lầm cản trở hệ miễn dịch của bé.",
      "content": "\nSốt KHÔNG PHẢI là một căn bệnh. Sốt là một phản ứng có lợi của cơ thể, chứng tỏ hệ miễn dịch của bé đang hoạt động mạnh mẽ để tiêu diệt virus/vi khuẩn xâm nhập.\n\n### 1. Nhiệt độ bao nhiêu mới gọi là sốt?\n*   Nhiệt độ bình thường của trẻ: 36.5 - 37.5°C.\n*   Sốt nhẹ: 37.6 - 38.4°C.\n*   Sốt cao: Từ 38.5°C trở lên.\n(Đo nhiệt độ chuẩn xác nhất là kẹp nách hoặc đo hậu môn).\n\n### 2. Khi nào nên dùng thuốc hạ sốt?\nTổ chức Y tế Thế giới (WHO) khuyến cáo: **Chỉ dùng thuốc hạ sốt khi nhiệt độ của bé từ 38.5°C trở lên VÀ/HOÀNG bé có biểu hiện quấy khóc, khó chịu, lừ đừ mệt mỏi.**\n\nNếu bé sốt 39°C nhưng vẫn tươi tỉnh, chạy nhảy chơi đùa bình thường, ăn ngủ tốt thì mẹ có thể chưa cần cho uống thuốc hạ sốt, chỉ cần cho bé uống nhiều nước, nới lỏng quần áo và chườm ấm. Ngược lại, nếu bé chỉ sốt 38°C nhưng mệt lả, quấy khóc nhiều, hoặc bé có tiền sử sốt cao co giật, mẹ có thể cho uống thuốc hạ sốt.\n\n### 3. Liều lượng an toàn (Theo cân nặng)\n*   **Paracetamol (Hapacol, Efferalgan):** Loại an toàn nhất. Liều lượng chuẩn là **10 - 15mg cho mỗi kg cân nặng** trong 1 lần uống. Các lần uống phải cách nhau ít nhất 4-6 tiếng. (Ví dụ: Bé nặng 10kg thì uống liều 100mg - 150mg).\n*   **Ibuprofen (Brufen, Nurofen):** Có tác dụng hạ sốt mạnh và kéo dài hơn. Tuy nhiên KHÔNG ĐƯỢC DÙNG khi nghi ngờ bé bị Sốt xuất huyết.\n\n*Lưu ý: Không tự ý kết hợp đan xen 2 loại thuốc hạ sốt nếu không có sự chỉ định trực tiếp từ Bác sĩ.*\n      ",
      "views": 7800,
      "likes": 650,
      "bookmarkCount": 450,
      "createdAt": "2026-04-20",
      "author": "Dr. Hải Anh",
      "isFeatured": true,
      "isTrending": true,
      "image": "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=600&auto=format&fit=crop&q=80",
      "faqs": []
    },
    {
      "id": "art_14",
      "title": "Kỷ luật không đòn roi: Phương pháp Time-out hiệu quả",
      "category": "Tâm lý & Nuôi dạy",
      "subCategory": "Tâm lý trẻ nhỏ",
      "tags": [
        "kỷ luật",
        "nuôi dạy",
        "time-out"
      ],
      "summary": "Làm sao để phạt con mà không dùng bạo lực? Phương pháp \"Góc suy nghĩ\" (Time-out) chính là giải pháp hữu hiệu được các chuyên gia tâm lý khuyên dùng.",
      "content": "\nĐòn roi có thể khiến trẻ sợ và ngừng hành vi xấu ngay lập tức, nhưng nó để lại tổn thương tâm lý sâu sắc và dạy trẻ giải quyết vấn đề bằng bạo lực. \"Kỷ luật không đòn roi\" ra đời để thay thế đòn roi, trong đó phổ biến nhất là kỹ thuật Time-out (Góc suy nghĩ/Thời gian cách ly).\n\n### 1. Time-out là gì?\nKhi trẻ có hành vi xấu mang tính cố ý (ví dụ: đánh bạn, cố tình ném đồ vật vỡ, chửi bậy), trẻ sẽ bị tách ra khỏi môi trường đang vui chơi và phải ngồi yên tại một khu vực nhàm chán được quy định sẵn (Góc suy nghĩ) trong một khoảng thời gian nhất định.\n\n### 2. Các bước thực hiện Time-out chuẩn xác\n1.  **Cảnh báo 1 lần duy nhất:** \"Nếu con đánh em thêm 1 lần nữa, con sẽ phải vào Góc suy nghĩ\".\n2.  **Đưa vào Góc:** Nếu con vi phạm, hãy im lặng, nắm tay con dắt thẳng vào Góc suy nghĩ. Không tranh cãi, không giải thích dài dòng, không để lộ sự tức giận. Mẹ chỉ nói: \"Con đã đánh em, con phải ngồi đây suy nghĩ\".\n3.  **Thời gian phạt:** Quy tắc là **1 phút cho mỗi tuổi**. (Bé 3 tuổi phạt 3 phút, bé 4 tuổi phạt 4 phút).\n4.  **Kỷ luật thép:** Góc suy nghĩ không có tivi, đồ chơi, không ai được giao tiếp, nhìn mắt bé trong suốt thời gian phạt. Nếu bé bỏ chạy khỏi góc, lập tức dắt bé lại về góc và đếm giờ lại từ đầu. Không nhượng bộ dù bé khóc lóc.\n5.  **Kết thúc:** Khi chuông báo hết giờ, mẹ tới ngồi ngang tầm mắt bé. Hỏi bé: \"Con đã biết vì sao mình bị phạt chưa?\". Bé xin lỗi, mẹ ôm bé và nói: \"Mẹ yêu con, nhưng hành động đánh người là không được phép\".\n\n### Lỗi sai phổ biến cần tránh\n* Dùng Time-out quá thường xuyên cho các lỗi vụn vặt.\n* Đặt Góc suy nghĩ ở nơi đáng sợ như nhà kho rùng rợn hoặc phòng tối (sẽ gây ám ảnh tâm lý). Nên chọn 1 chiếc ghế trơn ở góc tường phòng khách.\n* Vừa phạt vừa mắng nhiếc con: Sẽ làm mất đi sự bình tâm suy nghĩ của trẻ.\n      ",
      "views": 3100,
      "likes": 240,
      "bookmarkCount": 160,
      "createdAt": "2026-04-15",
      "author": "Chuyên gia Tâm lý",
      "isFeatured": false,
      "isTrending": false,
      "image": "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=600&auto=format&fit=crop&q=80",
      "faqs": []
    },
    {
      "id": "art_15",
      "title": "Hướng dẫn massage cho trẻ sơ sinh giúp bé ngủ ngon, tiêu hóa tốt và tăng đề kháng",
      "category": "Trẻ sơ sinh",
      "subCategory": "Chăm sóc bé",
      "tags": [
        "trẻ sơ sinh",
        "massage bé",
        "chăm sóc bé",
        "tiêu hóa tốt"
      ],
      "summary": "Massage cho trẻ sơ sinh mang lại nhiều lợi ích tuyệt vời như kích thích hệ tiêu hóa, giảm đầy hơi táo bón, giúp bé thư giãn ngủ sâu giấc và tăng cường liên kết tình cảm mẫu tử.",
      "content": "\nMassage cho trẻ sơ sinh không chỉ đơn thuần là các thao tác vuốt ve, mà là một phương pháp trị liệu khoa học mang lại nhiều lợi ích to lớn cho sự phát triển thể chất và tinh thần của bé.\n\n### 1. Lợi ích vượt trội của việc massage cho trẻ sơ sinh\nNhiều nghiên cứu y khoa chỉ ra rằng massage đều đặn mỗi ngày mang lại:\n*   **Kích thích hệ tiêu hóa:** Giúp đẩy khí thừa ra ngoài, giảm tình trạng đầy bụng, khó tiêu và táo bón sinh lý thường gặp ở trẻ sơ sinh.\n*   **Cải thiện chất lượng giấc ngủ:** Massage làm giảm nồng độ hormone cortisol (gây căng thẳng) và kích thích sản sinh melatonin (hormone điều hòa giấc ngủ), giúp bé dễ ngủ và ngủ sâu hơn.\n*   **Phát triển xúc giác và não bộ:** Kích thích các thụ thể cảm giác dưới da, tăng tốc độ myelin hóa các sợi thần kinh, giúp não bộ xử lý thông tin nhạy bén hơn.\n*   **Tăng cường hệ miễn dịch:** Kích thích hệ bạch huyết lưu thông tốt hơn, giúp trẻ chống lại các tác nhân gây bệnh nhiễm trùng thông thường.\n\n### 2. Các bước massage bé sơ sinh chuẩn khoa học\nHãy thực hiện các động tác thật nhẹ nhàng bằng lòng bàn tay và các đầu ngón tay mềm mại của bạn:\n\n*   **Massage vùng ngực (Động tác Mở sách):**\n    Đặt hai lòng bàn tay lên giữa ngực bé, vuốt nhẹ nhàng ra hai bên sườn tạo thành hình trái tim, sau đó vuốt trở lại vị trí cũ. Động tác này giúp giãn cơ ngực, hỗ trợ bé hô hấp sâu và đều đặn.\n*   **Massage bụng giảm đầy hơi (Động tác I Love U):**\n    *   **I:** Dùng tay phải vuốt một đường thẳng từ dưới sườn trái của bé xuống hông trái.\n    *   **Love:** Vuốt từ dưới sườn phải sang sườn trái, rồi vuốt dọc xuống hông trái (tạo thành chữ L ngược).\n    *   **U:** Vuốt từ hông phải lên sườn phải, sang sườn trái và dọc xuống hông trái (tạo thành chữ U ngược). Đây là đường đi của đại tràng, giúp đẩy hơi thừa hiệu quả.\n*   **Massage tay chân:**\n    Vuốt nhẹ từ đùi xuống cổ chân bé (động tác vắt sữa sữa), sau đó dùng ngón tay cái xoay nhẹ lòng bàn chân bé theo chiều kim đồng hồ để kích thích các huyệt đạo. Làm tương tự với cánh tay.\n\n### 3. Nguyên tắc an toàn y khoa khi massage cho bé\n*   **Nhiệt độ phòng thích hợp:** Đảm bảo phòng kín gió, ấm áp khoảng 27-28 độ C.\n*   **Thời điểm vàng:** Massage khi bé tỉnh táo, dễ chịu (khoảng 45 phút sau khi bú hoặc ngay sau khi tắm xong). Tuyệt đối không massage khi bé vừa ăn no hoặc đang sốt, mệt mỏi.\n*   **Lựa chọn dầu massage:** Nên dùng dầu tự nhiên ép lạnh như dầu dừa organic hoặc dầu hướng dương không chứa hương liệu nhân tạo để bảo vệ làn da non nớt của trẻ.\n\n> **Lời khuyên y khoa:** Hãy quan sát phản ứng của bé. Nếu bé khóc, ngọ nguậy khó chịu, hãy dừng lại ngay lập tức. Mục tiêu cốt lõi của massage là tạo cảm giác thư giãn và an toàn tối đa cho bé.\n    ",
      "views": 3450,
      "likes": 290,
      "bookmarkCount": 140,
      "createdAt": "2026-05-20",
      "author": "Dr. Hải Anh",
      "isFeatured": true,
      "isTrending": true,
      "image": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=80",
      "faqs": [
        {
          "q": "Trẻ sơ sinh mấy ngày tuổi có thể massage được?",
          "a": "Mẹ có thể bắt đầu vuốt ve bé nhẹ nhàng từ những ngày đầu sau sinh. Khi cuống rốn rụng và lành hoàn toàn (thường sau 10-14 ngày), mẹ có thể bắt đầu massage bài bản hơn."
        },
        {
          "q": "Có nên massage bằng dầu tràm không?",
          "a": "Không nên. Dầu tràm hoặc dầu khuynh diệp chứa tinh dầu đậm đặc có tính nóng cao, dễ gây bỏng rát và kích ứng làn da mỏng manh của bé."
        }
      ]
    },
    {
      "id": "art_16",
      "title": "Da bé bị chàm sữa (viêm da cơ địa): Bí quyết chăm sóc và dưỡng ẩm chuẩn y khoa tại nhà",
      "category": "Trẻ sơ sinh",
      "subCategory": "Làn da bé",
      "tags": [
        "chàm sữa",
        "viêm da cơ địa",
        "chăm sóc da",
        "trẻ sơ sinh"
      ],
      "summary": "Chàm sữa là bệnh ngoài da cực kỳ phổ biến khiến bé ngứa ngáy, khó chịu và quấy khóc liên tục. Khám phá ngay quy trình tắm, dưỡng ẩm và chọn kem bôi chuẩn y khoa để trị dứt điểm cho con.",
      "content": "\nChàm sữa (hay viêm da cơ địa ở trẻ sơ sinh) là tình trạng viêm da mãn tính, tái phát thường gặp ở trẻ từ 2 tháng đến 2 tuổi. Biểu hiện là hai má bé đỏ ửng, nổi các mụn nước nhỏ liti, da thô ráp, bong tróc làm trẻ ngứa ngáy và gãi liên tục.\n\n### 1. Nguyên nhân thực sự gây chàm sữa ở trẻ\nChàm sữa không phải do lây nhiễm hay do mẹ vệ sinh kém, mà do sự kết hợp của:\n*   **Yếu tố di truyền:** Trong gia đình có bố, mẹ hoặc người thân bị hen suyễn, viêm mũi dị ứng hoặc viêm da cơ địa.\n*   **Hàng rào bảo vệ da bị suy yếu:** Làn da trẻ sơ sinh mất nước nhanh hơn da người lớn, dễ bị khô ráp và nhạy cảm với các dị nguyên bên ngoài.\n*   **Các dị nguyên kích ứng:** Bụi bẩn, lông thú cưng, len sợi tổng hợp, bột giặt có chất tẩy mạnh, thời tiết hanh khô hoặc dị ứng sữa.\n\n### 2. Quy trình chăm sóc làn da chàm sữa chuẩn y tế\nChìa khóa cốt lõi để đẩy lùi chàm sữa là **\"Giữ sạch - Dưỡng ẩm - Chống viêm\"**:\n\n*   **Tắm cho bé đúng cách:**\n    *   Tắm nước ấm vừa phải (35-36 độ C), không tắm quá 10 phút để tránh mất độ ẩm tự nhiên của da.\n    *   Sử dụng sữa tắm chuyên dụng cho da chàm, không bọt, không hương liệu (fragrance-free) có độ pH trung tính.\n*   **Dưỡng ẩm - Bước quan trọng nhất:**\n    *   Thoa kem dưỡng ẩm (emollient) chuyên biệt cho trẻ bị chàm sữa **ngay trong vòng 3 phút sau khi tắm** (khi da còn hơi ẩm).\n    *   Thoa lại đều đặn **3-4 lần/ngày** trên toàn bộ vùng da khô đỏ sần sùi. Da đủ ẩm sẽ tái tạo hàng rào bảo vệ, ngăn ngừa tình trạng kích ứng gây ngứa.\n*   **Kiểm soát ngứa và viêm da:**\n    *   Cắt ngắn móng tay của bé hoặc đeo bao tay cotton mềm để ngăn bé cào gãi làm xước da gây nhiễm trùng thứ phát.\n    *   Chọn quần áo rộng rãi, chất liệu 100% cotton mềm mại, thấm hút mồ hôi tốt.\n\n### 3. Cảnh báo những sai lầm phổ biến khi điều trị chàm sữa\n*   **Tự ý bôi kem chứa Corticoid liều cao:** Các loại kem trị chàm trôi nổi trên mạng thường chứa corticoid mạnh. Bôi kéo dài gây teo da, rạn da, suy tuyến thượng thận cực kỳ nguy hiểm. Chỉ dùng corticoid nhẹ khi có chỉ định cụ thể của bác sĩ da liễu trong thời gian ngắn (3-5 ngày).\n*   **Tắm các loại lá dân gian:** Tắm lá chè xanh, sài đất, mướp đắng... khi da đang bị tổn thương hở có thể gây nhiễm trùng da, nhiễm trùng huyết đe dọa tính mạng của trẻ do vi khuẩn bám trên lá.\n\n> **Lời khuyên y khoa:** Chàm sữa là bệnh mãn tính có tính chất tự giới hạn, đa số trẻ sẽ tự khỏi khi lớn dần (sau 1-2 tuổi). Việc duy trì bôi kem dưỡng ẩm đều đặn hàng ngày là giải pháp phòng ngừa tái phát hiệu quả nhất.\n    ",
      "views": 4500,
      "likes": 380,
      "bookmarkCount": 220,
      "createdAt": "2026-05-18",
      "author": "Dr. Hải Anh",
      "isFeatured": false,
      "isTrending": true,
      "image": "https://images.unsplash.com/photo-1519689680058-324335c77ebe?w=600&auto=format&fit=crop&q=80",
      "faqs": [
        {
          "q": "Bôi kem dưỡng ẩm loại nào tốt cho bé bị chàm sữa?",
          "a": "Nên chọn các dòng kem dưỡng ẩm chuyên biệt cho da viêm cơ địa có chứa Ceramide, không mùi hương nhân tạo, ví dụ như Aveeno Baby, Cetaphil Pro AD Derma, hoặc Dexeryl."
        },
        {
          "q": "Bé bị chàm sữa mẹ có cần kiêng ăn gì không?",
          "a": "Nếu bé bú mẹ hoàn toàn, mẹ chỉ nên kiêng các thực phẩm dễ dị ứng (như hải sản, trứng, bò, đậu phộng) khi thấy biểu hiện chàm sữa của bé bùng phát dữ dội sau khi mẹ ăn các loại đồ ăn này."
        }
      ]
    },
    {
      "id": "art_17",
      "title": "Vệ sinh tai, mũi, họng cho trẻ sơ sinh: Tránh ngay 5 sai lầm tai hại gây tổn thương niêm mạc của bé",
      "category": "Trẻ sơ sinh",
      "subCategory": "Vệ sinh cho bé",
      "tags": [
        "vệ sinh trẻ sơ sinh",
        "rửa mũi cho bé",
        "rơ lưỡi",
        "chăm sóc bé"
      ],
      "summary": "Vệ sinh tai, mũi, họng cho trẻ sơ sinh đòi hỏi sự nhẹ nhàng và dụng cụ vô trùng. Khám phá quy trình vệ sinh chuẩn y khoa và 5 sai lầm nghiêm trọng mẹ cần tuyệt đối tránh xa.",
      "content": "\nTai, mũi, họng là các cửa ngõ hô hấp cực kỳ nhạy cảm của trẻ sơ sinh. Do niêm mạc của trẻ còn quá mỏng manh và dễ tổn thương, việc vệ sinh không đúng cách vô tình tạo điều kiện cho vi khuẩn xâm nhập sâu, gây viêm tai giữa, viêm mũi họng kéo dài.\n\n### 1. Hướng dẫn vệ sinh tai, mũi, họng chuẩn y khoa\n*   **Vệ sinh tai an toàn:**\n    *   Chỉ dùng khăn mềm ẩm lau sạch và khô vùng vành tai bên ngoài và các nếp gấp sau tai của bé.\n    *   Tuyệt đối **không được chọc tăm bông hoặc các dụng cụ cứng** vào sâu trong ống tai ngoài của bé. Ráy tai là chất bảo vệ tự nhiên, nó sẽ tự đẩy ra ngoài vành tai khi bé nhai hoặc bú.\n*   **Vệ sinh mũi khi bé khò khè:**\n    *   Nếu mũi bé bình thường, không có dịch, không cần nhỏ nước muối sinh lý hàng ngày vì dễ làm mất đi chất nhầy bảo vệ tự nhiên.\n    *   Nếu bé bị nghẹt mũi sinh lý, hãy nhỏ 1-2 giọt nước muối sinh lý ấm 0.9% vào mỗi bên mũi để làm loãng chất nhầy, sau đó mát-xa cánh mũi nhẹ nhàng hoặc cho bé nằm cao đầu một chút dịch mũi sẽ tự chảy ra hoặc xuống họng.\n*   **Vệ sinh họng và rơ lưỡi:**\n    *   Rơ lưỡi cho bé tối thiểu 1-2 lần/ngày (đặc biệt sau cữ bú sáng hoặc tối) bằng gạc vô trùng thấm nước muối sinh lý ấm hoặc dịch rơ lưỡi chuyên dụng để tránh bị tưa lưỡi (nấm lưỡi).\n\n### 2. 5 sai lầm tai hại mẹ bỉm cần tránh tuyệt đối\n*   **Sai lầm 1: Hút mũi cho bé quá nhiều lần bằng dụng cụ hút.**\n    Lực hút mạnh và cọ xát thường xuyên của ống hút sẽ làm trầy xước niêm mạc mũi nhạy cảm, gây phù nề, sưng tấy và thậm chí khiến mũi bé tiết nhiều dịch hơn.\n*   **Sai lầm 2: Nhỏ nước tỏi ép vào mũi để trị ngạt mũi.**\n    Nước tỏi có tính cay nóng cực mạnh, bôi hoặc nhỏ trực tiếp vào mũi trẻ sơ sinh có thể gây phỏng niêm mạc mũi nghiêm trọng, dẫn đến hoại tử niêm mạc rất nguy hiểm.\n*   **Sai lầm 3: Dùng miệng hút mũi trực tiếp cho con.**\n    Miệng người lớn chứa hàng triệu vi khuẩn có thể lây lan trực tiếp các mầm bệnh truyền nhiễm nguy hiểm sang cho trẻ sơ sinh có hệ miễn dịch còn yếu ớt.\n*   **Sai lầm 4: Chọc ngoáy tăm bông vào sâu lỗ tai.**\n    Hành động này vô tình đẩy ráy tai thụt sâu hơn vào trong màng nhĩ, tạo thành nút ráy tai gây đau, ù tai hoặc nguy hiểm hơn là làm thủng màng nhĩ mỏng manh của trẻ.\n*   **Sai lầm 5: Nhỏ thuốc co mạch mũi (như Otrivin, Naphazolin) bừa bãi.**\n    Những loại thuốc này chỉ dùng cho trẻ lớn dưới sự chỉ định nghiêm ngặt của bác sĩ. Dùng cho trẻ sơ sinh dễ gây ngộ độc, hạ thân nhiệt, ức chế hô hấp rất nguy kịch.\n\n> **Lời khuyên y khoa:** Tai-mũi-họng của bé có cơ chế tự làm sạch rất tốt. Chỉ vệ sinh sâu khi có biểu hiện bệnh lý và hãy luôn ưu tiên các phương pháp tự nhiên, dịu nhẹ và vô trùng.\n    ",
      "views": 2900,
      "likes": 195,
      "bookmarkCount": 88,
      "createdAt": "2026-05-15",
      "author": "Dr. Hải Anh",
      "isFeatured": false,
      "isTrending": false,
      "image": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop&q=80",
      "faqs": [
        {
          "q": "Tưa lưỡi ở trẻ sơ sinh có tự hết không?",
          "a": "Không. Tưa lưỡi do nấm Candida phát triển quá mức. Mẹ cần rơ lưỡi hàng ngày bằng gạc và dùng thuốc kháng nấm như Nystatin dạng rơ lưỡi nếu nấm lan rộng theo chỉ định bác sĩ."
        },
        {
          "q": "Rửa mũi bằng xi lanh xịt nước muối sinh lý có an toàn không?",
          "a": "Với trẻ sơ sinh dưới 6 tháng tuổi, tuyệt đối không dùng xi lanh bơm áp lực mạnh để xịt rửa mũi vì dễ gây sặc nước vào phổi hoặc làm rách niêm mạc mũi bé."
        }
      ]
    },
    {
      "id": "art_18",
      "title": "Trẻ sơ sinh khóc dạ đề (Colic): Hiểu đúng nguyên nhân và 6 cách xoa dịu giúp bé vượt qua khủng hoảng",
      "category": "Trẻ sơ sinh",
      "subCategory": "Tâm lý & Giấc ngủ",
      "tags": [
        "khóc dạ đề",
        "colic",
        "trẻ quấy khóc",
        "chăm sóc bé"
      ],
      "summary": "Khóc dạ đề (Colic) là nỗi ám ảnh của nhiều gia đình có con nhỏ khi bé khóc ngặt nghẽo hàng giờ liên tục vào chiều tối mà không cách nào dỗ dành. Khám phá 6 cách xoa dịu hiệu quả chuẩn y khoa.",
      "content": "\nKhóc dạ đề (Colic/Hội chứng quấy khóc ở trẻ sơ sinh) là tình trạng một đứa trẻ khỏe mạnh quấy khóc dữ dội, khóc thét liên tục nhiều giờ mà không có lý do rõ ràng. Colic thường bắt đầu từ 2-3 tuần tuổi, đạt đỉnh điểm ở tuần thứ 6 và giảm dần sau 3-4 tháng tuổi.\n\n### 1. Quy tắc \"Con số 3\" nhận diện khóc dạ đề Colic\nTrẻ được chẩn đoán khóc dạ đề khi đáp ứng đủ các tiêu chí y khoa sau:\n*   Khóc liên tục từ **3 giờ trở lên** mỗi ngày.\n*   Quấy khóc ít nhất **3 ngày mỗi tuần**.\n*   Tình trạng này kéo dài liên tục **3 tuần trở lên**.\n*   Bé khóc ngặt nghẽo đỏ gay mặt, hai tay nắm chặt, hai chân co lên bụng, bụng căng cứng, thường xảy ra vào cùng một khung giờ chiều hoặc tối muộn.\n\n### 2. Nguyên nhân sâu xa của khóc dạ đề\nCho đến nay, y học vẫn chưa tìm ra nguyên nhân chính xác 100% gây ra Colic. Tuy nhiên, các chuyên gia nhi khoa đồng ý với các giả thuyết hàng đầu sau:\n*   **Hệ tiêu hóa chưa hoàn thiện:** Trẻ dễ bị đầy hơi, co thắt ruột do chưa tiêu hóa hết đường lactose trong sữa hoặc mất cân bằng hệ vi sinh đường ruột.\n*   **Hệ thần kinh quá tải:** Trẻ sơ sinh rất nhạy cảm với ánh sáng, tiếng ồn, môi trường xung quanh và chưa biết cách tự xoa dịu bản thân dẫn đến căng thẳng, khóc thét.\n*   **Dị ứng thực phẩm:** Bé dị ứng với đạm sữa bò hoặc nhạy cảm với thức ăn từ sữa mẹ truyền sang.\n\n### 3. 6 cách xoa dịu trẻ khóc dạ đề hiệu quả nhất\nKhi bé bắt đầu vào cơn khóc Colic, cha mẹ hãy bình tĩnh thực hiện phương pháp **5S của Bác sĩ Nhi khoa Harvey Karp**:\n\n1.  **Swaddle (Quấn chũn):** Quấn bé ấm áp bằng chũn vải mềm để tái tạo cảm giác ôm chặt an toàn như trong bụng mẹ.\n2.  **Side/Stomach position (Tư thế nằm nghiêng/sấp):** Bế nghiêng bé trên cánh tay mẹ hoặc cho bé nằm sấp nhẹ nhàng trên đùi bố mẹ để giảm áp lực co thắt ruột.\n3.  **Shush (Tiếng suỵt):** Ghé sát tai bé kêu \"suỵt... suỵt...\" to tương đương tiếng khóc của bé, hoặc bật máy tiếng ồn trắng (White noise) để giúp bé trấn tĩnh thần kinh.\n4.  **Swing (Đung đưa):** Đung đưa nhẹ nhàng, nhịp nhàng theo nhịp điệu ôm bé sát người. Tuyệt đối không rung lắc mạnh vùng đầu bé.\n5.  **Suck (Mút):** Cho bé ngậm ti giả hoặc núm vú giả, phản xạ bú mút giải phóng hormone endorphin giúp xoa dịu cơn đau bụng hiệu quả.\n6.  **Massage bụng ấm:** Thoa chút dầu massage ấm áp xoa nhẹ bụng bé theo chiều kim đồng hồ hoặc làm động tác đạp xe chân bé để đẩy khí thừa ra ngoài.\n\n> **Tuyên bố y tế quan trọng:** Hãy đưa bé đi khám bác sĩ ngay nếu bé khóc kèm theo sốt cao, nôn trớ sữa vọt ra liên tục, đi ngoài phân có máu, hoặc bé lờ đờ, bỏ bú. Đó có thể là dấu hiệu của bệnh lý thực thể (như lồng ruột, nhiễm trùng tai) chứ không đơn thuần là Colic.\n    ",
      "views": 3100,
      "likes": 220,
      "bookmarkCount": 105,
      "createdAt": "2026-05-12",
      "author": "Dr. Hải Anh",
      "isFeatured": false,
      "isTrending": true,
      "image": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&auto=format&fit=crop&q=80",
      "faqs": [
        {
          "q": "Khóc dạ đề có ảnh hưởng đến sự phát triển của trẻ không?",
          "a": "May mắn là Colic hoàn toàn lành tính. Mặc dù làm gia đình căng thẳng, trẻ bị khóc dạ đề vẫn phát triển cân nặng, chiều cao và trí tuệ bình thường."
        },
        {
          "q": "Bổ sung men vi sinh có giúp giảm khóc dạ đề không?",
          "a": "Các nghiên cứu y khoa chỉ ra bổ sung chủng lợi khuẩn Lactobacillus reuteri DSM 17938 giúp hỗ trợ cải thiện đáng kể tình trạng đầy bụng co thắt ruột và giảm thời gian khóc dạ đề ở trẻ bú mẹ."
        }
      ]
    },
    {
      "id": "art_19",
      "title": "Cẩm nang quấn chũn và sử dụng nhộng chũn an toàn cho trẻ sơ sinh ngủ sâu giấc tự nhiên",
      "category": "Trẻ sơ sinh",
      "subCategory": "Giấc ngủ của bé",
      "tags": [
        "quấn chũn",
        "nhộng chũn",
        "giấc ngủ trẻ sơ sinh",
        "EASY"
      ],
      "summary": "Quấn chũn là tuyệt chiêu tái tạo môi trường tử cung ấm áp giúp bé sơ sinh không bị giật mình bởi phản xạ Moro. Tìm hiểu cách quấn chũn an toàn và thời điểm chuyển đổi sang nhộng chũn khoa học.",
      "content": "\nPhản xạ Moro (giật mình giơ hai tay lên) là phản xạ sinh lý hoàn toàn bình thường ở trẻ sơ sinh, nhưng lại là thủ phạm chính khiến bé thức giấc liên tục và khóc thét giữa chừng. Phương pháp quấn chũn (Swaddling) là giải pháp giúp xoa dịu hệ thần kinh của bé, mô phỏng lại môi trường chật hẹp, ấm áp như những ngày còn ở trong bụng mẹ.\n\n### 1. Lợi ích khoa học của việc quấn chũn đúng cách\n*   **Ngăn chặn giật mình:** Giữ yên hai tay bé áp sát vào cơ thể, giúp duy trì giấc ngủ sâu và dài hơn.\n*   **Giữ ấm ổn định:** Giúp trẻ sơ sinh duy trì nhiệt độ cơ thể trong những tuần đầu đời khi cơ chế điều hòa thân nhiệt chưa hoàn thiện.\n*   **Xoa dịu hệ thần kinh:** Áp lực nhẹ nhàng từ vải quấn tạo cảm giác an toàn tuyệt đối, giúp bé tự trấn tĩnh nhanh chóng khi bị kích thích quá mức.\n\n### 2. Hướng dẫn quấn chũn chuẩn an toàn và đúng khớp hông\nSai lầm phổ biến nhất của các mẹ là quấn bé quá chặt ở chân, kéo thẳng chân bé ra. Việc này có thể gây trật khớp hông bẩm sinh rất nguy hiểm.\n*   **Quấn chữ D (Diamond Swaddle):** Trải khăn vuông chéo góc thành hình kim cương, gấp góc đỉnh xuống. Đặt bé nằm lên sao cho vai bé ngang mép gấp.\n*   **Cố định hai tay:** Áp tay phải bé sát sườn, kéo mép khăn bên phải qua ngực bé, nhét dưới hông trái. Áp tay trái bé xuống, kéo mép khăn bên trái qua ngực và gài chặt dưới lưng bé.\n*   **Thoải mái phần chân (Chữ M):** Phần đuôi khăn ở dưới chân vuốt nhẹ nhưng tuyệt đối không bó chặt chân bé. Chân bé phải thoải mái co duỗi, mở rộng ra hai bên tự nhiên tạo thành hình chữ M (tư thế ếch).\n\n### 3. Khi nào nên chuyển từ Quấn chũn cổ điển sang Nhộng chũn khóa kéo?\n*   **Nhộng chũn (Zip Swaddle):** Là loại chũn thiết kế sẵn có khóa kéo tiện lợi, giúp tay bé giơ lên hai bên đầu theo tư thế ngủ tự nhiên nhất của trẻ mà không bị lỏng lẻo tuột ra.\n*   **Thời điểm vàng chuyển đổi:** Mẹ nên chuyển sang nhộng chũn khi bé được khoảng **1.5 đến 2 tháng tuổi**. Nhộng chũn giúp bé tự lập hơn và cho phép bé vận động tay chân thoải mái hơn.\n*   **⚠️ CẢNH BÁO BẮT BUỘC:** Phải **dừng quấn chũn hoàn toàn** (cả quấn chũn cổ điển và nhộng chũn) ngay khi bé có dấu hiệu **biết lật (lẫy)**, thường là khoảng 3-4 tháng tuổi. Nếu bị quấn chặt tay khi lật úp, bé không thể dùng tay chống đầu lên, có nguy cơ cao bị ngạt thở đường thở.\n\n> **Lời khuyên y khoa:** Chọn vải quấn có chất liệu 100% cotton co giãn 4 chiều, mỏng nhẹ, thoáng khí tốt để tránh làm bé bị quá nhiệt, đổ mồ hôi trộm dẫn đến viêm phổi.\n    ",
      "views": 3800,
      "likes": 275,
      "bookmarkCount": 130,
      "createdAt": "2026-05-10",
      "author": "Mẹ Bông",
      "isFeatured": true,
      "isTrending": false,
      "image": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=80",
      "faqs": [
        {
          "q": "Có nên quấn chũn cho bé cả ngày không?",
          "a": "Không nên. Chỉ quấn chũn khi bé đi ngủ (giấc ngày và giấc đêm). Khi bé thức, hãy thả tự do tay chân bé để con tự do vận động, phát triển cơ bắp và xúc giác."
        },
        {
          "q": "Làm sao biết bé bị nóng khi quấn chũn?",
          "a": "Mẹ hãy sờ gáy, ngực hoặc lưng bé. Nếu thấy đổ mồ hôi, da nóng đỏ, hãy nới lỏng chũn, bật điều hòa mát hoặc thay quần áo mỏng hơn bên trong."
        }
      ]
    },
    {
      "id": "art_20",
      "title": "Ăn dặm kiểu Nhật (ADKN) cho bé 5-6 tháng tuổi: Thực đơn chi tiết tuần đầu tiên và cách nấu dashi chuẩn",
      "category": "Dinh dưỡng cho bé",
      "subCategory": "Ăn dặm",
      "tags": [
        "ăn dặm kiểu Nhật",
        "ADKN",
        "nước dashi",
        "thực đơn ăn dặm"
      ],
      "summary": "Ăn dặm kiểu Nhật đề cao hương vị tự nhiên của từng loại thực phẩm riêng biệt và rèn luyện kỹ năng nhai nuốt sớm cho bé. Khám phá cách nấu nước dashi chuẩn Nhật và thực đơn tuần đầu tiên.",
      "content": "\nĂn dặm kiểu Nhật (ADKN) là một trong những phương pháp nuôi con ăn dặm khoa học và được yêu thích nhất tại Việt Nam. Điểm đặc trưng của phương pháp này là cho bé ăn thô sớm hơn (từ cháo rây loãng tỷ lệ 1:10), không trộn lẫn thức ăn mà cho bé ăn riêng biệt từng loại để nhận biết mùi vị tự nhiên.\n\n### 1. Nguyên tắc vàng của Ăn dặm kiểu Nhật\n*   **Tôn trọng hương vị tự nhiên:** Tuyệt đối **không nêm muối, đường, nước mắm** hay gia vị vào thức ăn của trẻ dưới 1 tuổi để bảo vệ thận non nớt của bé.\n*   **Ăn từ lỏng đến đặc, mịn đến thô:** Bé bắt đầu từ cháo loãng tỷ lệ 1:10 rây mịn, sau đó tăng dần độ thô của rau củ và cháo theo từng tháng tuổi.\n*   **Ăn riêng biệt:** Các món ăn được đặt trên các khay/chén riêng biệt, giúp kích thích thị giác, vị giác và phát hiện nhanh thực phẩm gây dị ứng.\n\n### 2. Cách nấu Nước Dùng Dashi từ Rau Củ chuẩn khoa học\nNước dashi là linh hồn của ADKN, giúp các món ăn dặm của bé thơm ngọt đậm đà tự nhiên mà không cần nêm gia vị hóa học:\n*   **Nguyên liệu:** Chọn 4-5 loại rau củ ngọt mát, không gây đầy bụng như: bắp cải, cà rốt, su su, bí ngòi, ngô ngọt, khoai lang. Tránh kết hợp các loại rau kỵ nhau.\n*   **Cách nấu:**\n    *   Rửa sạch, cắt khúc vừa phải rau củ.\n    *   Cho rau củ cứng (cà rốt, ngô) vào luộc trước 15 phút, sau đó cho các loại rau củ mềm (bắp cải, bí ngòi) vào đun thêm 10 phút.\n    *   Vớt rau củ ra (có thể xay/rây làm rau củ ăn dặm cho bé).\n    *   Lọc nước dùng qua rây sạch, để nguội, trữ vào khay đá có nắp đậy trong tủ đông dùng dần trong vòng 1 tuần.\n\n### 3. Thực đơn chi tiết tuần đầu tiên cho bé 5-6 tháng tuổi\nBé mới tập ăn dặm chỉ nên ăn 1 bữa mỗi ngày vào giờ cố định (thường là 10h sáng). Bữa ăn dặm đầu đời chủ yếu là làm quen, sữa mẹ/sữa công thức vẫn là nguồn dinh dưỡng chính (90%).\n\n*   **Ngày 1 - Ngày 3:** 1 muỗng cà phê cháo loãng tỷ lệ 1:10 rây mịn (pha thêm chút nước ấm cho dễ nuốt).\n*   **Ngày 4 - Ngày 5:** 2 muỗng cháo loãng rây + 1 muỗng cà rốt hấp rây loãng bằng nước dashi.\n*   **Ngày 6 - Ngày 7:** 2 muỗng cháo loãng rây + 1 muỗng bí ngòi rây + 1 muỗng dashi rau củ ấm.\n\n> **Lời khuyên y khoa:** Khi giới thiệu một món ăn mới (ví dụ: khoai tây, trứng, cá), hãy cho bé ăn liên tục 3 ngày với lượng nhỏ để theo dõi phản ứng dị ứng của cơ thể bé (như nổi mề đay, nôn mửa, tiêu chảy).\n    ",
      "views": 4800,
      "likes": 410,
      "bookmarkCount": 290,
      "createdAt": "2026-05-08",
      "author": "Mẹ Ốc",
      "isFeatured": false,
      "isTrending": true,
      "image": "https://images.unsplash.com/photo-1596131397999-6e3e5714e0b0?w=600&auto=format&fit=crop&q=80",
      "faqs": [
        {
          "q": "Có nên dùng nước dashi nấu từ củ cải trắng không?",
          "a": "Củ cải trắng chứa hàm lượng nitrat khá cao, không nên sử dụng nhiều cho trẻ dưới 6 tháng tuổi. Hãy dùng bắp cải, bí ngòi hoặc cà rốt ngọt để an toàn hơn."
        },
        {
          "q": "Trữ đông nước dashi được tối đa bao lâu?",
          "a": "Nước dashi nên được trữ đông tối đa trong vòng 7 ngày để đảm bảo độ tươi ngon và không bị nhiễm khuẩn chéo trong tủ lạnh."
        }
      ]
    },
    {
      "id": "art_21",
      "title": "Kích sữa bằng máy hút sữa: Phác đồ Power Pumping duy trì nguồn sữa mẹ dồi dào, tràn trề cho bé",
      "category": "Dinh dưỡng cho bé",
      "subCategory": "Nuôi con bằng sữa mẹ",
      "tags": [
        "kích sữa",
        "Power Pumping",
        "sữa mẹ",
        "máy hút sữa"
      ],
      "summary": "Nuôi con bằng sữa mẹ hoàn toàn là mong muốn của mọi người mẹ bỉm sữa. Tìm hiểu ngay phác đồ kích sữa nổi tiếng Power Pumping mô phỏng chu kỳ bú dồn dập giúp sữa về dào dạt.",
      "content": "\nTình trạng mất sữa, giảm sữa đột ngột sau khi đi làm lại hoặc do căng thẳng, mệt mỏi là nỗi lo chung của hàng triệu người mẹ. Phác đồ **Power Pumping** (hút sữa quyền năng) là một phương pháp khoa học nổi tiếng toàn cầu, giúp đánh lừa bộ não sản xuất sữa mẹ tăng gấp đôi sản lượng dựa trên nguyên lý Cung - Cầu sinh lý.\n\n### 1. Cơ chế khoa học đứng sau Power Pumping\nCơ thể mẹ sản xuất sữa dựa trên hormone prolactin và oxytocin. Khi ngực bị hút rỗng liên tục và dồn dập, não bộ sẽ nhận tín hiệu rằng \"bé đang rất đói và cần nhiều sữa hơn\", từ đó kích thích các tuyến sữa hoạt động tối đa công suất. Power Pumping mô phỏng lại giai đoạn tăng trưởng vượt trội của em bé (Growth Spurt) khi con liên tục đòi bú dồn dập (cluster feeding).\n\n### 2. Chi tiết Phác đồ Power Pumping chuẩn y khoa\nĐể thực hiện phương pháp này hiệu quả, mẹ cần chuẩn bị một máy hút sữa điện đôi lực hút êm ái, phễu hút vừa vặn với núm vú để tránh tổn thương.\n\nMẹ thực hiện kích sữa **1 lần mỗi ngày** (ưu tiên vào sáng sớm khi lượng hormone prolactin đạt đỉnh cao nhất), các cữ hút khác trong ngày vẫn hút theo lịch 3 tiếng/lần như bình thường.\n\n#### **Chu trình Power Pumping dài 60 phút:**\n*   **Hút sữa 20 phút** liên tục ➔ **Nghỉ 10 phút**.\n*   **Hút tiếp 10 phút** ➔ **Nghỉ 10 phút**.\n*   **Hút cữ cuối 10 phút** ➔ Kết thúc chu trình.\n\n> *Lưu ý:* Trong thời gian nghỉ 10 phút, mẹ hoàn toàn tắt máy, uống một cốc nước ấm, nghe nhạc thư giãn, không cần massage ngực quá nhiều.\n\n### 3. Những bí quyết giúp kích sữa thành công rực rỡ\n*   **Tâm lý thư giãn:** Sự căng thẳng giải phóng adrenaline làm ức chế phản xạ xuống sữa. Khi hút sữa, mẹ hãy nhìn hình con, xem video dễ thương của bé, tránh xa màn hình điện thoại xem lượng sữa chảy ra từng giọt.\n*   **Dinh dưỡng và nước:** Sữa mẹ thành phần chính là nước. Mẹ cần uống tối thiểu **3 lít nước ấm** mỗi ngày, bổ sung sữa ấm trước cữ hút 30 phút và ăn uống đủ chất, không kiêng khem quá đà.\n*   **Sử dụng phễu silicon mềm:** Tránh dùng phễu nhựa cứng kích thước không vừa gây đau rát núm vú, nứt cổ gà tổn thương ngực.\n\n> **Khuyến cáo y khoa:** Phương pháp Power Pumping đòi hỏi sự kiên trì từ **7 đến 14 ngày** liên tục mới thấy lượng sữa tăng rõ rệt. Hãy kiên nhẫn, tin tưởng vào bản năng làm mẹ của bạn!\n    ",
      "views": 5200,
      "likes": 490,
      "bookmarkCount": 310,
      "createdAt": "2026-05-05",
      "author": "Mẹ Sữa Bé Gấu",
      "isFeatured": true,
      "isTrending": true,
      "image": "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&auto=format&fit=crop&q=80",
      "faqs": [
        {
          "q": "Thực hiện Power Pumping bao nhiêu lần một ngày?",
          "a": "Chỉ nên thực hiện duy nhất 1 lần/ngày. Thực hiện quá nhiều cữ này dễ làm mẹ bị kiệt sức, tổn thương mô ngực và gây tắc tia sữa."
        },
        {
          "q": "Lượng sữa hút ra lúc đầu rất ít có sao không?",
          "a": "Hoàn toàn bình thường. Trong 3-5 ngày đầu tiên, bạn có thể chỉ thấy hút ra hơi hoặc vài giọt sữa. Đừng nản lòng, đó là thời gian não bộ đang điều chỉnh nội tiết tố."
        }
      ]
    },
    {
      "id": "art_22",
      "title": "Bổ sung Sắt và Kẽm dự phòng cho trẻ bú mẹ hoàn toàn từ 4 tháng tuổi: Hướng dẫn mới từ Hiệp hội Nhi khoa",
      "category": "Dinh dưỡng cho bé",
      "subCategory": "Vi chất dinh dưỡng",
      "tags": [
        "bổ sung sắt",
        "bổ sung kẽm",
        "vi chất dinh dưỡng",
        "sữa mẹ hoàn toàn"
      ],
      "summary": "Hiệp hội Nhi khoa Hoa Kỳ (AAP) khuyến nghị bổ sung sắt dự phòng cho trẻ bú sữa mẹ hoàn toàn bắt đầu từ 4 tháng tuổi để tránh thiếu máu thiếu sắt. Tìm hiểu liều lượng và cách dùng chuẩn y khoa.",
      "content": "\nSữa mẹ là nguồn dinh dưỡng hoàn hảo nhất cho sự phát triển của trẻ nhỏ. Tuy nhiên, có một sự thật y khoa ít người biết: Lượng sắt dự trữ sẵn có trong gan của bé tích lũy từ trong bụng mẹ sẽ cạn kiệt dần khi bé chạm mốc **4 tháng tuổi**, trong khi sữa mẹ tự nhiên lại chứa hàm lượng sắt và kẽm cực kỳ thấp.\n\n### 1. Tại sao trẻ bú mẹ hoàn toàn cần bổ sung Sắt dự phòng?\n*   **Ngăn ngừa thiếu máu thiếu sắt:** Sắt là thành phần cấu tạo nên hemoglobin của hồng cầu, có nhiệm vụ vận chuyển oxy nuôi cơ thể và phát triển não bộ. Thiếu sắt kéo dài làm trẻ biếng ăn, da xanh xao, chậm chạp và giảm khả năng tập trung học tập sau này.\n*   **Khác biệt giữa sữa công thức và sữa mẹ:** Sữa công thức thường được bổ sung lượng sắt nhân tạo cao, nên bé uống sữa công thức hoàn toàn ít có nguy cơ thiếu sắt hơn bé bú mẹ hoàn toàn trong giai đoạn 4-6 tháng tuổi.\n\n### 2. Liều lượng bổ sung Sắt & Kẽm chuẩn y khoa cho trẻ\nDưới đây là khuyến nghị liều dự phòng chính thức từ các chuyên gia Nhi khoa hàng đầu:\n\n*   **Bổ sung Sắt (từ 4 tháng tuổi đến khi ăn dặm tốt):**\n    *   Liều lượng dự phòng: **1 mg sắt nguyên tố trên mỗi kg cân nặng** của bé mỗi ngày.\n    *   *Ví dụ:* Bé 4 tháng nặng 6.5 kg cần bổ sung 6.5 mg sắt nguyên tố mỗi ngày.\n    *   Ngưng bổ sung sắt nhỏ giọt khi bé bước vào độ tuổi ăn dặm (6 tháng) và ăn tốt các thực phẩm giàu sắt tự nhiên như thịt bò, gan, trứng, rau màu xanh đậm.\n*   **Bổ sung Kẽm sinh học:**\n    *   Kẽm giúp trẻ ăn ngon miệng, tăng cường hệ miễn dịch đường ruột. \n    *   Chỉ nên bổ sung kẽm liều dự phòng dưới sự tư vấn của bác sĩ hoặc khi bé có các đợt tiêu chảy cấp kéo dài (bổ sung kẽm 10-20mg trong 10-14 ngày giúp hồi phục niêm mạc ruột nhanh chóng).\n\n### 3. Hướng dẫn cho bé uống Sắt đúng cách tránh đen răng\n*   **Thời điểm uống tốt nhất:** Cho bé uống sắt vào buổi sáng, lúc **đói** (khoảng 1 tiếng trước ăn hoặc 2 tiếng sau ăn) vì sắt hấp thu tốt nhất khi dạ dày trống rỗng.\n*   **Tăng hấp thu:** Cho bé uống kèm một chút vitamin C (hoặc nước cam, nước hoa quả đối với trẻ đã ăn dặm) để tăng hiệu quả hấp thu sắt gấp nhiều lần.\n*   **Tránh đen men răng:** Nhỏ sắt trực tiếp vào khóe miệng sâu bên trong của bé để tránh dung dịch tiếp xúc trực tiếp làm ố đen men răng sữa non nớt.\n\n> **Cảnh báo an toàn y tế:** Sắt là vi chất có nguy cơ ngộ độc cao nếu dùng quá liều lượng. Tuyệt đối **không được tự ý tăng liều** sắt cho bé mà không có xét nghiệm máu và chỉ định trực tiếp từ bác sĩ chuyên khoa nhi.\n    ",
      "views": 3200,
      "likes": 180,
      "bookmarkCount": 95,
      "createdAt": "2026-05-02",
      "author": "Dr. Hải Anh",
      "isFeatured": false,
      "isTrending": false,
      "image": "https://images.unsplash.com/photo-1550572017-edd951b55104?w=600&auto=format&fit=crop&q=80",
      "faqs": [
        {
          "q": "Uống sắt đi ngoài phân đen có nguy hiểm không?",
          "a": "Hoàn toàn bình thường. Sắt không được hấp thu hết sẽ đào thải qua phân và nhuộm phân thành màu xanh đen hoặc xám đen. Mẹ không cần lo lắng."
        },
        {
          "q": "Trẻ sinh non có cần bổ sung sắt sớm hơn không?",
          "a": "Trẻ sinh non không tích lũy đủ lượng sắt ở gan trong 3 tháng cuối thai kỳ, nên cần bổ sung sắt dự phòng sớm hơn từ **2 tuần tuổi** với liều 2mg/kg/ngày dưới sự hướng dẫn y khoa."
        }
      ]
    },
    {
      "id": "art_23",
      "title": "Thực đơn ăn dặm tự chỉ huy BLW chống hóc nghẹn: Hướng dẫn cắt thái rau củ quả chuẩn theo từng tháng tuổi",
      "category": "Dinh dưỡng cho bé",
      "subCategory": "Ăn dặm BLW",
      "tags": [
        "ăn dặm",
        "BLW",
        "chống hóc nghẹn",
        "cắt rau củ"
      ],
      "summary": "Nỗi lo sợ hóc nghẹn cản trở nhiều mẹ cho bé ăn dặm tự chỉ huy (BLW). Tìm hiểu ngay nguyên tắc cắt thái thực phẩm cực kỳ chi tiết chuẩn y khoa giúp con ăn an toàn, vui vẻ.",
      "content": "\nĂn dặm tự chỉ huy (Baby-Led Weaning - BLW) là cơ hội tuyệt vời để bé phát triển sự tự lập, kỹ năng phối hợp vận động tinh và cơ hàm khỏe mạnh. Tuy nhiên, việc chuẩn bị kích thước và hình dáng đồ ăn sai cách là nguyên nhân hàng đầu gây ra các tai nạn hóc nghẹn đường thở nguy hiểm ở trẻ nhỏ.\n\n### 1. Nguyên tắc cốt lõi về cấu trúc đồ ăn BLW\nĐồ ăn dặm cho trẻ ăn BLW phải thỏa mãn đồng thời hai điều kiện sau:\n*   **Về độ mềm:** Thức ăn phải được hấp chín mềm hoàn toàn. Mẹ kiểm tra bằng cách dùng ngón trỏ và ngón cái bóp nhẹ miếng thức ăn, nếu nó nát nát dễ dàng mà không cần lực mạnh là đạt chuẩn.\n*   **Về kích thước:** Không được cắt thức ăn thành dạng khối tròn nhỏ (nho, cà chua bi, xúc xích cắt khoanh) vì chúng khớp khít hoàn toàn với đường thở của bé, nếu lọt vào sẽ gây bít tắc ngạt thở ngay lập tức.\n\n### 2. Quy trình cắt thái thực phẩm chuẩn theo độ tuổi của bé\n\n*   **Giai đoạn bắt đầu (6 - 8 tháng tuổi): Bé tập bốc bằng cả bàn tay (Palmar Grasp)**\n    *   Bé chưa biết dùng ngón tay nhặt đồ vật, chỉ biết nắm cả bàn tay vào thức ăn và gặm phần nhô ra ngoài nắm tay.\n    *   **Quy cách cắt:** Cắt thức ăn thành các **thanh dài như ngón tay người lớn (khoảng 5-8cm)**, dày khoảng 1.5-2cm. Nên dùng dao lượn sóng cắt răng cưa để tạo độ bám, giúp bé không bị trơn trượt tay khi cầm nắm.\n    *   *Món ăn mẫu:* Cà rốt hấp răng cưa, bông cải xanh luộc giữ nguyên cuống dài, quả bơ cắt lát dày chừa vỏ phần đuôi.\n*   **Giai đoạn phát triển (9 - 12 tháng tuổi): Bé tập bốc bằng hai đầu ngón tay (Pincer Grasp)**\n    *   Bé bắt đầu phát triển vận động tinh, biết sử dụng ngón trỏ và ngón cái kẹp nhặt các mẩu thức ăn nhỏ liti.\n    *   **Quy cách cắt:** Chuyển sang cắt thức ăn dạng **hạt lựu lớn hoặc các miếng mỏng dẹt bằng đồng xu (bite-sized)** để con tập nhặt.\n    *   *Món ăn mẫu:* Khoai tây hấp cắt hạt lựu mềm, thịt bò viên hấp chín mềm bóp dẹt nhẹ, quả việt quất cắt đôi hoặc bóp bẹt ra.\n\n### 3. Những thực phẩm nguy cơ cao gây hóc cần tuyệt đối tránh\n*   Các loại hạt khô (hạt điều, hạt lạc, óc chó): Tuyệt đối không cho trẻ dưới 5 tuổi ăn nguyên hạt.\n*   Kẹo cứng, kẹo dẻo, thạch rau câu.\n*   Bánh mỳ gối chưa nướng (bánh mỳ ẩm dễ vón cục dính chặt vào họng bé gây nghẹt thở).\n\n> **Lời khuyên an toàn y tế:** Hãy luôn cho bé ngồi thẳng lưng trong ghế ăn dặm và thắt đai an toàn. Tuyệt đối không bao giờ cho trẻ ăn khi đang nằm, đang bò, chạy chơi hoặc đang đi xe ô tô. Mẹ cũng nên tham gia một khóa học sơ cứu hóc nghẹn Heimlich để tự tin xử lý sự cố.\n    ",
      "views": 3900,
      "likes": 310,
      "bookmarkCount": 160,
      "createdAt": "2026-04-28",
      "author": "Mẹ Bông",
      "isFeatured": false,
      "isTrending": false,
      "image": "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=600&auto=format&fit=crop&q=80",
      "faqs": [
        {
          "q": "Phản xạ oẹ (Gagging) khác gì với Hóc nghẹn (Choking)?",
          "a": "Oẹ là phản xạ đẩy thức ăn tự nhiên (bé đỏ mặt, ho to, phát ra tiếng). Hóc nghẹn là tắc thở hoàn toàn (bé im lặng, mặt tái xanh, không thở được). Hãy bình tĩnh khi bé oẹ, và sơ cứu ngay khi bé bị hóc."
        },
        {
          "q": "Bánh mỳ ăn dặm có an toàn không?",
          "a": "Để an toàn, mẹ hãy nướng giòn bánh mỳ trước khi cho bé ăn. Bánh mỳ nướng giòn sẽ tự tan ra khi tiếp xúc với nước bọt của bé, tránh bị vón cục dai gây ngạt."
        }
      ]
    },
    {
      "id": "art_24",
      "title": "Bé biếng ăn sinh lý giai đoạn tập đi (1-2 tuổi): Nguyên nhân và 5 tuyệt chiêu trị biếng ăn thông thái",
      "category": "Dinh dưỡng cho bé",
      "subCategory": "Tâm lý ăn dặm",
      "tags": [
        "biếng ăn sinh lý",
        "bé chậm lớn",
        "trị biếng ăn",
        "dinh dưỡng trẻ em"
      ],
      "summary": "Bé đột ngột lười ăn, ngậm chặt miệng hoặc ném đồ ăn khiến bữa cơm gia đình trở thành cuộc chiến căng thẳng. Tìm hiểu cơ chế biếng ăn sinh lý và 5 giải pháp khoa học trị dứt điểm.",
      "content": "\nGiai đoạn từ 1 đến 2 tuổi là thời kỳ bé có bước phát triển vượt bậc về trí tuệ và vận động (tập đứng, tập đi, mọc răng, học nói). Tuy nhiên, đây cũng là thời kỳ bùng phát hội chứng **biếng ăn sinh lý** phổ biến nhất khiến các ông bố bà mẹ mất ăn mất ngủ.\n\n### 1. Tại sao trẻ đột ngột biếng ăn ở tuổi tập đi?\nY học giải thích hiện tượng này qua các yếu tố sinh lý và tâm lý tự nhiên của trẻ:\n*   **Tốc độ tăng trưởng chậm lại:** Trong năm đầu đời, cân nặng của bé tăng gấp ba lần. Nhưng từ 1-2 tuổi, tốc độ phát triển tự nhiên chậm lại rõ rệt, cơ thể bé cần ít calo hơn nên nhu cầu ăn tự động giảm đi.\n*   **Bận rộn khám phá thế giới:** Trẻ ham học đi, tập chạy nhảy và thích thú khám phá mọi đồ vật xung quanh hơn là ngồi yên một chỗ ăn uống.\n*   **Khủng hoảng tâm lý tự lập (Terrible Twos):** Bé bắt đầu nhận thức được \"cái tôi\" của mình, biết từ chối và muốn tự quyết định những gì mình thích ăn hoặc không ăn. Nếu bị ép buộc, bé sẽ phản kháng quyết liệt.\n\n### 2. 5 tuyệt chiêu trị biếng ăn sinh lý cực kỳ hiệu quả của bác sĩ\nĐể bữa ăn không còn là \"cuộc chiến đầy nước mắt\", cha mẹ hãy áp dụng ngay các nguyên tắc vàng sau:\n\n*   **Tuyệt chiêu 1: Quy tắc \"3 Không\" trên bàn ăn**\n    Không tivi điện thoại, không ăn rong đi dạo, không đồ chơi làm xao nhãng. Việc cho xem hoạt hình làm tê liệt thần kinh vị giác, bé nuốt vô thức dẫn đến suy giảm tiêu hóa và lười ăn nghiêm trọng hơn.\n*   **Tuyệt chiêu 2: Thiết lập khung giờ ăn cố định**\n    Khoảng cách giữa các bữa ăn chính và phụ nên giãn cách tối thiểu **2.5 đến 3 tiếng**. Không cho bé ăn vặt, uống sữa, nước ngọt ngay trước bữa ăn chính vì sẽ làm tăng đường huyết gây cảm giác no giả tạo.\n*   **Tuyêu chiêu 3: Tôn trọng quyền tự quyết của con**\n    Hãy để bé tự xúc ăn, tự lựa chọn món ăn có sẵn trên bàn. Nhiệm vụ của cha mẹ là chuẩn bị đồ ăn dinh dưỡng, còn việc ăn bao nhiêu và ăn món nào là quyền của bé. Nếu sau 20-30 phút bé không ăn, hãy vui vẻ dọn đi và không cho ăn thêm gì cho đến bữa tiếp theo.\n*   **Tuyệt chiêu 4: Trình bày món ăn đẹp mắt, đa dạng**\n    Tạo hình cơm cuộn động vật dễ thương, cắt tỉa củ quả nhiều màu sắc kích thích vị giác của trẻ bốc nhặt.\n*   **Tuyệt chiêu 5: Cho bé vận động thể chất nhiều hơn**\n    Cho bé đi bộ, chạy nhảy ngoài trời tối thiểu 1 tiếng mỗi ngày trước bữa tối giúp tiêu hao năng lượng, bé sẽ tự động đói bụng và ăn ngon lành.\n\n> **Lời khuyên y khoa:** Biếng ăn sinh lý thường chỉ kéo dài từ vài ngày đến 2-3 tuần. Chỉ cần bé vẫn chơi đùa vui vẻ, uống đủ nước và duy trì cân nặng ổn định, cha mẹ hoàn toàn có thể yên tâm vượt qua giai đoạn này mà không cần lạm dụng các loại thuốc hay siro kích thích ăn ngon không rõ nguồn gốc.\n    ",
      "views": 4100,
      "likes": 350,
      "bookmarkCount": 195,
      "createdAt": "2026-04-20",
      "author": "Dr. Hải Anh",
      "isFeatured": true,
      "isTrending": false,
      "image": "https://images.unsplash.com/photo-1536622432212-dbb67a29424b?w=600&auto=format&fit=crop&q=80",
      "faqs": [
        {
          "q": "Có nên ép con ăn hết khẩu phần ăn không?",
          "a": "Tuyệt đối không! Việc ép buộc, quát mắng hay đè con ra đổ thức ăn sẽ tạo chấn thương tâm lý sợ ăn suốt đời cho trẻ, dẫn đến biếng ăn tâm lý cực kỳ khó điều trị."
        },
        {
          "q": "Bổ sung siro ăn ngon có hiệu quả thực sự không?",
          "a": "Đa số siro ăn ngon chứa vi chất (kẽm, lysine, vitamin nhóm B) hỗ trợ tạm thời. Tuy nhiên, thay đổi hành vi ăn uống chuẩn khoa học mới là chìa khóa gốc rễ quyết định."
        }
      ]
    },
    {
      "id": "art_25",
      "title": "Luyện tự ngủ theo chu kỳ EASY 3 cho trẻ sơ sinh: Bắt đầu thế nào và lịch trình mẫu hoàn hảo",
      "category": "Giấc ngủ",
      "subCategory": "Luyện ngủ EASY",
      "tags": [
        "EASY 3",
        "luyện tự ngủ",
        "nếp sinh hoạt",
        "giấc ngủ trẻ sơ sinh"
      ],
      "summary": "Chu kỳ sinh hoạt EASY giúp bé sơ sinh hình thành nếp ăn ngủ điều độ khoa học và giúp mẹ có nhiều thời gian nghỉ ngơi thư giãn. Tìm hiểu chi tiết lịch trình mẫu EASY 3 từ 0-3 tháng tuổi.",
      "content": "\n**EASY** là cụm từ viết tắt của: **E**at (Ăn) - **A**ctivity (Chơi) - **S**leep (Ngủ) - **Y**our time (Thời gian của mẹ). Đây là khái niệm nếp sinh hoạt khoa học nổi tiếng toàn cầu do tác giả Tracy Hogg sáng lập. EASY giúp bé sơ sinh dự đoán được hoạt động tiếp theo của mình, tránh tình trạng cáu gắt do quá mệt và đem lại sự thảnh thơi thực sự cho mẹ bỉm.\n\n### 1. Bản chất cốt lõi của EASY 3\nLịch trình **EASY 3** được thiết kế riêng cho các bé từ **0 đến 3 tháng tuổi** (hoặc cân nặng đạt từ 3kg trở lên). \n*   **Chu kỳ lặp lại:** Mỗi chu kỳ EASY 3 kéo dài đúng **3 tiếng đồng hồ** và lặp lại liên tục suốt cả ngày.\n*   **Không nhầm lẫn Ăn - Ngủ:** Khác biệt lớn nhất của EASY là tách biệt hoàn toàn việc Ăn và Ngủ. Bé bú lúc vừa tỉnh dậy chứ không phải bú để ngủ thiếp đi. Điều này giúp ngăn chặn thói quen xấu: \"Phải ngậm ti mẹ mới ngủ được\" (ti giả sinh học).\n\n### 2. Chi tiết Lịch Trình Mẫu EASY 3 hoàn hảo (Bắt đầu lúc 7:00 sáng)\n*   **07:00 - 07:45 (EAT & ACTIVITY):** Bé thức dậy. Mẹ cho bé bú no ngay (E - khoảng 20-30 phút). Sau đó cho bé chơi nhẹ nhàng (A - vỗ ợ hơi, rơ lưỡi, rửa mặt, tắm nắng hoặc chơi trò chuyện).\n*   **07:45 - 09:00 (SLEEP):** Mẹ thực hiện thủ tục quấn chũn, bật tiếng ồn trắng và đặt bé vào cũi tự ngủ (S - giấc ngủ kéo dài 1 tiếng 15 phút).\n*   **09:00 - Your Time:** Thời gian của riêng mẹ để nghỉ ngơi, làm việc nhà hoặc tự chăm sóc bản thân.\n*   **09:00 - 11:00:** Bắt đầu chu kỳ thứ hai (Eat - Activity - Sleep tương tự).\n*   **11:00 - 13:00:** Chu kỳ thứ ba.\n*   **13:00 - 15:00:** Chu kỳ thứ tư.\n*   **15:00 - 17:00:** Chu kỳ thứ năm.\n*   **17:00 - 19:00:** Chu kỳ thứ sáu (Cho bé ngủ giấc phụ ngắn 30 phút từ 17:30 đến 18:00).\n*   **19:00:** Cho bé bú cữ tối, lau người ấm, thực hiện thủ tục đi ngủ đêm sâu giấc. Mẹ cai sữa đêm dần khi bé lớn hơn.\n\n### 3. Cách chuyển đổi nếp sinh hoạt nhẹ nhàng cho con\n*   **Tôn trọng thời gian thức tối đa (Wake time):** Ở tuổi EASY 3, bé chỉ có thể thức tối đa **45 đến 60 phút** liên tục. Nếu để bé thức quá giờ này, bé sẽ bị mệt quá mức (overtired), cơ thể tiết ra cortisol gây hưng phấn ảo khiến bé thét lên khi đi ngủ và cực kỳ khó dỗ.\n*   **Hỗ trợ tự ngủ nhân văn:** Hãy bắt đầu quấn chũn, bật tiếng ồn trắng và đặt bé xuống cũi khi bé có dấu hiệu buồn ngủ đầu tiên (nháy mắt chậm, ngáp, dụi đầu).\n\n> **Lời khuyên y khoa:** Đừng quá cứng nhắc từng phút một. Hãy lắng nghe tín hiệu cơ thể của con. Những ngày đầu luyện tập bé có thể quấy khóc, mẹ hãy kiên nhẫn vỗ về và điều chỉnh lịch trình lệch 15-30 phút tùy thể trạng của bé.\n    ",
      "views": 4900,
      "likes": 425,
      "bookmarkCount": 210,
      "createdAt": "2026-04-18",
      "author": "Mẹ Bông",
      "isFeatured": true,
      "isTrending": true,
      "image": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80",
      "faqs": [
        {
          "q": "Bé hay bị thức giấc giữa chừng sau 30 phút ngủ xử lý thế nào?",
          "a": "Đó gọi là tình trạng catnap (ngủ ngắn). Mẹ hãy chờ 5-10 phút để bé tự kết nối giấc ngủ (nhờ hỗ trợ từ tiếng ồn trắng và chũn). Nếu bé khóc to, hãy vào hỗ trợ vỗ nhẹ mông vỗ nhẹ đầu giúp bé ngủ tiếp."
        },
        {
          "q": "Khi nào cần chuyển từ EASY 3 sang EASY 4?",
          "a": "Khi bé được khoảng 3-4 tháng tuổi, thời gian thức tối đa của bé tăng lên 1.5 - 2 tiếng và bé bắt đầu ngủ ngắn lại ở giấc ngày, đó là lúc mẹ cần chuyển dịch lịch sinh hoạt sang EASY 4."
        }
      ]
    },
    {
      "id": "art_26",
      "title": "Vượt qua khủng hoảng giấc ngủ (Sleep Regression) 4 tháng tuổi nhẹ nhàng, không nước mắt",
      "category": "Giấc ngủ",
      "subCategory": "Khủng hoảng giấc ngủ",
      "tags": [
        "khủng hoảng giấc ngủ",
        "sleep regression",
        "bé ngủ hay giật mình",
        "EASY"
      ],
      "summary": "Bé đang tự ngủ rất ngoan bỗng dưng thức giấc liên tục mỗi 1-2 tiếng ban đêm, khóc lóc cáu gắt đột ngột. Tìm hiểu cơ chế sinh lý đằng sau khủng hoảng giấc ngủ 4 tháng và bí quyết vượt qua.",
      "content": "\nNhiều bậc cha mẹ trải qua cảm giác bất lực tột độ khi con yêu tròn 4 tháng tuổi. Đứa trẻ vốn dĩ ngủ xuyên đêm rất ngoan bỗng dưng \"đổi tính đổi nết\", thức giấc khóc lóc mỗi 1-2 tiếng ban đêm, ngủ ngày ngắn và rất khó dỗ dành. Chào mừng bạn đến với cột mốc sinh lý nổi tiếng nhất: **Khủng hoảng giấc ngủ 4 tháng tuổi (4-Month Sleep Regression)**.\n\n### 1. Cơ chế sinh học thực sự của Khủng hoảng 4 tháng\nHiện tượng này không phải là một bước lùi hay bệnh lý, mà thực tế là một **bước nhảy vọt vượt bậc về mặt não bộ** của bé:\n*   **Thay đổi cấu trúc giấc ngủ:** Trước 4 tháng, giấc ngủ của trẻ sơ sinh chỉ có 2 giai đoạn chính (ngủ nông và ngủ sâu). Từ 4 tháng tuổi, chu kỳ giấc ngủ của bé chuyển đổi hoàn toàn giống người lớn, gồm **4 giai đoạn** phức tạp. Bé bắt đầu thức dậy nhẹ nhàng sau mỗi chu kỳ ngủ (khoảng 45 phút).\n*   **Chưa có kỹ năng tự kết nối giấc:** Khi tỉnh giấc giữa các chu kỳ, nếu trước đó bé được bế ru hoặc ngậm ti để ngủ, bé sẽ hoảng sợ khóc đòi mẹ làm lại đúng hành động bế ru đó thì mới ngủ tiếp được.\n*   **Phát triển giác quan:** Bé nhận thức thế giới xung quanh rõ nét hơn, mắt nhìn xa hơn, tai nghe nhạy hơn nên dễ bị giật mình đánh thức bởi những tiếng động nhỏ nhất.\n\n### 2. Bí quyết giúp mẹ và bé vượt qua khủng hoảng 4 tháng\nThay vì hoang mang lo sợ và quay lại thói quen xấu bế ru cả đêm, mẹ hãy bình tĩnh áp dụng các giải pháp khoa học sau:\n\n*   **Tạo môi trường ngủ tối ưu tối đa:**\n    Phòng ngủ của bé phải **tối hoàn toàn** (dùng rèm cản sáng) cho cả giấc ngày và giấc đêm. Bóng tối kích thích tuyến tùng tiết ra hormone ngủ melatonin. Bật máy tiếng ồn trắng liên tục để át đi các âm thanh sinh hoạt gia đình.\n*   **Kéo dài thời gian thức ban ngày (Wake time):**\n    Bé 4 tháng cần thời gian thức tối thiểu là **1.5 đến 2 tiếng** giữa các giấc ngủ. Nếu cho bé đi ngủ quá sớm khi áp lực giấc ngủ chưa đủ lớn, bé sẽ ngủ rất ngắn (catnap 30 phút) và tỉnh dậy quấy khóc.\n*   **Dạy bé tự lập đi vào giấc ngủ:**\n    Hãy đặt bé xuống cũi khi bé **còn tỉnh táo nhưng đã lơ mơ buồn ngủ** (drowy but awake). Cho bé cơ hội tự xoa dịu bản thân bằng cách tự mút tay hoặc ôm gối ôm nhỏ thay vì bế ru ròng rã trên tay mẹ.\n*   **Tránh cho bé bú vặt ban đêm:**\n    Khi bé tỉnh giấc ban đêm, hãy chờ 5-10 phút quan sát xem con có tự ngủ lại được không. Chỉ cho bú khi chắc chắn đến giờ đói thực sự, tránh tạo thói quen xấu cứ thức dậy là phải bú.\n\n> **Lời khuyên y khoa:** Khủng hoảng giấc ngủ 4 tháng thường kéo dài từ **2 đến 4 tuần**. Hãy kiên nhẫn duy trì nề nếp sinh hoạt điều độ, tuyệt đối không thiết lập các thói quen xấu mới (như bế rung lắc mạnh, cho đi xe rong đêm) vì sẽ rất khó sửa chữa sau này.\n    ",
      "views": 4500,
      "likes": 390,
      "bookmarkCount": 230,
      "createdAt": "2026-04-12",
      "author": "Mẹ Sữa Bé Gấu",
      "isFeatured": false,
      "isTrending": true,
      "image": "https://images.unsplash.com/photo-1515488042361-404e9250afef?w=600&auto=format&fit=crop&q=80",
      "faqs": [
        {
          "q": "Khủng hoảng 4 tháng có đi kèm biếng ăn không?",
          "a": "Có. Nhiều bé do bận rập tập lật, tập trườn và não bộ kích thích liên tục dẫn đến xao nhãng ăn uống, bú vặt hoặc từ chối ti mẹ ban ngày."
        },
        {
          "q": "Bổ sung canxi có giúp hết khủng hoảng giấc ngủ không?",
          "a": "Không. Nếu bé vẫn uống vitamin D3 K2 đầy đủ, phát triển bình thường thì đây hoàn toàn là khủng hoảng não bộ sinh lý tự nhiên, uống canxi không giúp cải thiện tình trạng này."
        }
      ]
    },
    {
      "id": "art_27",
      "title": "Tiếng ồn trắng (White Noise): Lợi ích ru ngủ thần kỳ và 4 quy tắc an toàn y khoa bắt buộc phải nhớ",
      "category": "Giấc ngủ",
      "subCategory": "Công cụ hỗ trợ ngủ",
      "tags": [
        "tiếng ồn trắng",
        "white noise",
        "giấc ngủ bé sơ sinh",
        "an toàn y tế"
      ],
      "summary": "Tiếng ồn trắng (White Noise) giúp che lấp tiếng ồn xung quanh và trấn tĩnh thần kinh giúp trẻ sơ sinh tự ngủ rất tốt. Tuy nhiên dùng sai cách có thể gây tổn thương thính giác của bé.",
      "content": "\nTiếng ồn trắng (White Noise) là tập hợp các âm thanh có tần số thấp, phát ra đều đặn, liên tục như tiếng mưa rơi, tiếng sóng biển, tiếng tivi mất sóng hay tiếng máy sấy tóc. Đối với trẻ sơ sinh, tiếng ồn trắng giống như một giai điệu quen thuộc đầy thân thương, mô phỏng lại tiếng máu chảy rào rào qua động mạch tử cung của mẹ mà con đã nghe suốt 9 tháng thai kỳ.\n\n### 1. Tại sao tiếng ồn trắng giúp bé tự ngủ kỳ diệu?\n*   **Trấn an hệ thần kinh kích ứng:** Âm thanh đều đều làm giảm sự căng thẳng của não bộ, báo hiệu cho cơ thể bé biết rằng đã đến giờ đi ngủ.\n*   **Bộ lọc tiếng ồn tuyệt hảo:** Át đi các âm thanh đột ngột của sinh hoạt gia đình (tiếng chó sủa, tiếng đóng cửa, tiếng xe cộ ngoài phố) - vốn là thủ phạm chính gây giật mình tỉnh giấc ở trẻ nhỏ.\n*   **Kéo dài giấc ngủ:** Hỗ trợ bé dễ dàng vượt qua giai đoạn chuyển giao chu kỳ giấc ngủ nông sang sâu mà không bị thức giấc hoàn toàn.\n\n### 2. 4 quy tắc an toàn y khoa bắt buộc khi sử dụng máy tiếng ồn trắng\nDù có lợi ích ru ngủ thần kỳ, Viện Hàn lâm Nhi khoa Mỹ (AAP) cảnh báo nếu lạm dụng máy phát âm thanh cường độ lớn có thể tăng nguy cơ tổn thương thính lực và chậm phát triển ngôn ngữ ở trẻ nhỏ. Mẹ cần tuân thủ nghiêm ngặt 4 quy tắc an toàn sau:\n\n1.  **Quy tắc Khoảng cách an toàn:**\n    Tuyệt đối **không đặt máy phát tiếng ồn trắng sát cạnh cũi hay đầu giường bé**. Khoảng cách tối thiểu bắt buộc từ máy phát đến đầu giường của trẻ là **2 mét (6 feet)**.\n2.  **Quy tắc Cường độ âm thanh giới hạn:**\n    Âm lượng đo tại vị trí tai bé nằm ngủ tuyệt đối không được vượt quá **50 Decibel (dB)**. Mẹ có thể tải các ứng dụng đo decibel miễn phí trên điện thoại để kiểm tra vị trí tai con nằm xem có vượt ngưỡng an toàn không. Hãy vặn mức âm lượng tương đương tiếng mưa rơi rả rích hoặc tiếng vòi sen chảy nhẹ.\n3.  **Quy tắc Thời gian sử dụng:**\n    Chỉ bật tiếng ồn trắng khi bé đi ngủ (giấc ngày và giấc đêm). Khi bé thức dậy chơi đùa, hãy tắt máy đi để bé được lắng nghe các âm thanh tự nhiên của cuộc sống (tiếng mẹ nói, tiếng chim hót, âm nhạc vui tươi) nhằm kích thích phát triển ngôn ngữ và giao tiếp.\n4.  **Cai tiếng ồn trắng đúng thời điểm:**\n    Mẹ nên giảm dần âm lượng và cai hoàn toàn tiếng ồn trắng cho bé khi con được **1 tuổi**, thời điểm hệ thần kinh và chu kỳ giấc ngủ của con đã hoàn toàn ổn định vững chắc.\n\n> **Khuyến cáo y tế:** Không dùng các thiết bị điện thoại đang sạc pin đặt sát đầu bé để phát âm thanh vì nguy cơ cháy nổ và bức xạ sóng điện từ không tốt cho sức khỏe của trẻ.\n    ",
      "views": 3300,
      "likes": 240,
      "bookmarkCount": 115,
      "createdAt": "2026-04-08",
      "author": "Dr. Hải Anh",
      "isFeatured": false,
      "isTrending": false,
      "image": "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=600&auto=format&fit=crop&q=80",
      "faqs": [
        {
          "q": "Nên dùng âm thanh nào làm tiếng ồn trắng tốt nhất?",
          "a": "Các âm thanh tự nhiên tần số thấp như tiếng mưa rơi, tiếng sóng biển rì rào hoặc tiếng gió thổi là dịu nhẹ và an toàn nhất cho tai bé sơ sinh."
        },
        {
          "q": "Bật tiếng ồn trắng cả đêm có sao không?",
          "a": "Được phép bật suốt cả đêm với điều kiện tuân thủ đúng khoảng cách tối thiểu 2 mét và âm lượng dưới 50 dB để tránh gián đoạn giấc ngủ giữa chừng của trẻ."
        }
      ]
    },
    {
      "id": "art_28",
      "title": "Xây dựng thủ tục đi ngủ (Bedtime Routine) chuẩn giúp bé tự ngủ sâu giấc, không quấy khóc ban đêm",
      "category": "Giấc ngủ",
      "subCategory": "Thói quen ngủ ngon",
      "tags": [
        "bedtime routine",
        "thủ tục đi ngủ",
        "luyện tự ngủ",
        "EASY"
      ],
      "summary": "Thủ tục đi ngủ (Bedtime Routine) là chuỗi hoạt động lặp đi lặp lại giúp bé nhận biết đã đến giờ ngủ đêm. Khám phá quy trình 4 bước chuẩn khoa học giúp bé ngủ một mạch đến sáng.",
      "content": "\nTrẻ nhỏ cực kỳ yêu thích sự lặp lại và tính dự đoán trước của các sự kiện hàng ngày. Một chuỗi các hoạt động nhẹ nhàng được thực hiện theo đúng thứ tự cố định mỗi tối trước khi đi ngủ — gọi là **Bedtime Routine (Thủ tục đi ngủ)** — sẽ thiết lập chiếc đồng hồ sinh học tự nhiên hoàn hảo cho bé, giúp con dễ dàng chìm vào giấc ngủ mà không cần bế ru, rung lắc mệt mỏi.\n\n### 1. Ý nghĩa khoa học của Bedtime Routine\nChuỗi hoạt động lặp lại đều đặn mỗi ngày giúp não bộ bé tự sản sinh ra chất dẫn truyền thần kinh báo hiệu sự thư giãn. Bé hiểu rằng: \"Sau khi tắm ấm, mặc bỉm sạch, đọc truyện là mình sẽ được đi ngủ\". Điều này loại bỏ hoàn toàn sự phản kháng hay nỗi sợ hãi khi phải tách biệt khỏi bố mẹ để đi vào bóng tối.\n\n### 2. Quy trình 4 bước Bedtime Routine chuẩn y khoa (Thời gian kéo dài 30-45 phút)\nMẹ nên bắt đầu thực hiện thủ tục đi ngủ vào khoảng **18h30 đến 19h00** hàng tối:\n\n*   **Bước 1: Tắm nước ấm thư giãn hoặc Lau người ấm (10 phút)**\n    Nước ấm làm tăng nhiệt độ cơ thể nhẹ nhàng, sau đó khi ra ngoài không khí mát mẻ, thân nhiệt bé sẽ hạ xuống nhẹ - đây là tín hiệu sinh lý tự nhiên kích hoạt cơn buồn ngủ sâu của con người.\n*   **Bước 2: Massage nhẹ nhàng & Mặc quần áo thoải mái (10 phút)**\n    Thoa kem dưỡng ẩm dịu nhẹ, thực hiện vài động tác massage lưng và chân tay vuốt nhẹ nhàng giúp bé thư giãn cơ bắp. Mặc tã bỉm sạch sẽ, thoáng mát và mặc bộ đồ ngủ cotton co giãn tốt.\n*   **Bước 3: Cho cữ bú cuối ngày no nê (10-15 phút)**\n    Cho bé bú sữa mẹ hoặc sữa công thức no bụng cữ cuối để bé ngủ dài qua đêm. *Lưu ý y khoa quan trọng:* Hãy cố gắng giữ cho bé thức trong lúc bú bằng cách lau mặt nhẹ hoặc nói chuyện thì thầm, tránh để bé ngủ gục ngay trên bầu ngực mẹ.\n*   **Bước 4: Thiết lập môi trường ngủ & Đặt bé tự ngủ (5 phút)**\n    *   Kéo rèm tối hoàn toàn, bật máy tiếng ồn trắng, giảm độ sáng của đèn ngủ về mức ấm dịu.\n    *   Ôm bé thì thầm chúc bé ngủ ngon, hát ru nhẹ hoặc đọc 1 câu chuyện ngắn.\n    *   Đặt bé vào cũi khi con **vẫn còn thức nhưng đã lơ mơ buồn ngủ** để con tự đi vào giấc ngủ cuối cùng.\n\n### 3. Nguyên tắc vàng để thực hiện thành công\n*   **Tính nhất quán tuyệt đối:** Thực hiện đúng chuỗi hành động này vào **cùng một khung giờ** mỗi tối, không thay đổi thứ tự.\n*   **Tạo ranh giới rõ rệt giữa Ngày và Đêm:** Ban ngày chơi vui tươi, ánh sáng tràn ngập, ồn ào tự nhiên. Ban tối yên tĩnh, đèn mờ, thì thầm dịu nhẹ.\n\n> **Lời khuyên y khoa:** Một Bedtime Routine bền bỉ được xây dựng ngay từ **6 tuần tuổi** sẽ giúp ngăn ngừa tối đa các rối loạn giấc ngủ, khủng hoảng giấc ngủ khi bé bước sang giai đoạn lớn hơn.\n    ",
      "views": 3600,
      "likes": 280,
      "bookmarkCount": 140,
      "createdAt": "2026-04-05",
      "author": "Mẹ Bông",
      "isFeatured": false,
      "isTrending": false,
      "image": "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=600&auto=format&fit=crop&q=80",
      "faqs": [
        {
          "q": "Thủ tục đi ngủ ban ngày có giống ban đêm không?",
          "a": "Thủ tục giấc ngày (Nap routine) nên rút ngắn hơn (chỉ khoảng 5-10 phút): Quấn chũn, bật tiếng ồn trắng, ôm ấp vỗ về 2 phút rồi đặt cũi tự ngủ. Không cần tắm hay bú cữ lớn như ban đêm."
        },
        {
          "q": "Nên đọc sách gì cho bé sơ sinh nghe trước khi ngủ?",
          "a": "Nên chọn các cuốn sách tranh Ehon Nhật Bản mỏng nhẹ, sách tranh đen trắng kích thích thị giác với nội dung siêu ngắn gọn, âm vần lặp đi lặp lại nhẹ nhàng."
        }
      ]
    },
    {
      "id": "art_29",
      "title": "Hướng dẫn cai sữa đêm (cai ti đêm) an toàn, khoa học cho bé từ 6 tháng tuổi giúp mẹ ngủ tròn giấc",
      "category": "Giấc ngủ",
      "subCategory": "Cai sữa đêm",
      "tags": [
        "cai ti đêm",
        "cai sữa đêm",
        "giấc ngủ bé 6 tháng",
        "dinh dưỡng trẻ em"
      ],
      "summary": "Bé trên 6 tháng tuổi hoàn toàn có khả năng nhịn bú đêm suốt 8-10 tiếng nếu cân nặng đạt chuẩn. Cai ti đêm giúp bé ngủ sâu giấc phát triển chiều cao vượt trội và giải phóng sức lao động cho mẹ.",
      "content": "\nBú đêm (ti đêm) là nhu cầu sinh lý hoàn toàn bình thường ở trẻ sơ sinh dưới 6 tháng tuổi do dạ dày của bé còn quá nhỏ, cần nạp năng lượng liên tục. Tuy nhiên, nếu bé đã **trên 6 tháng tuổi**, cân nặng đạt trên 6kg và bước vào ăn dặm tốt, việc ti đêm kéo dài liên tục mỗi 2-3 tiếng không còn là nhu cầu sinh lý đói bụng thực sự, mà chỉ là một **thói quen tâm lý thèm ngậm ti để ngủ lại**.\n\n### 1. Tại sao cần cai ti đêm cho bé từ 6 tháng tuổi?\n*   **Phát triển chiều cao vượt trội:** Hormone tăng trưởng (Growth Hormone) tiết ra nhiều nhất vào khoảng **22h đêm đến 2h sáng** khi trẻ đang trong trạng thái ngủ rất sâu giấc. Bé thức dậy bú đêm liên tục sẽ làm gián đoạn giấc ngủ sâu này, cản trở sự phát triển thể chất.\n*   **Bảo vệ men răng sữa:** Sữa mẹ hay sữa công thức đọng lại trong khoang miệng ban đêm tạo môi trường axit lý tưởng cho vi khuẩn phát triển, gây sâu răng, sún răng sữa sớm.\n*   **Cải thiện chất lượng ăn dặm ban ngày:** Cai bú đêm giúp bé có cảm giác đói thực sự vào buổi sáng, từ đó hợp tác ăn dặm vui vẻ và bú sữa mẹ ban ngày hiệu quả hơn hẳn.\n\n### 2. Dấu hiệu bé đã sẵn sàng cai sữa đêm\nBé hoàn toàn có thể cai ti đêm khi đạt các mốc y khoa sau:\n1.  Bé đạt độ tuổi từ **6 tháng trở lên**, cân nặng đạt tối thiểu 6-7kg.\n2.  Bé đã ăn dặm tốt được 1-2 bữa/ngày.\n3.  Lượng sữa bú ban ngày đầy đủ, no nê.\n4.  Bé tỉnh giấc đêm chỉ ngậm ti vài giây rồi ngủ lại ngay (chứng tỏ bé thức giấc vì thèm ngậm ti chứ không phải vì đói).\n\n### 3. Phương pháp cai sữa đêm giãn cữ và giảm lượng sữa khoa học\nTuyệt đối không nên cắt sữa đêm đột ngột làm bé bị sốc tâm lý. Hãy áp dụng phương pháp giảm dần từ từ cực kỳ nhân văn sau:\n\n*   **Nếu bé bú sữa công thức (Bú bình):**\n    *   **Cách giảm lượng sữa:** Cứ sau mỗi 3 ngày, mẹ giảm bớt **20-30ml sữa** ở mỗi cữ bú đêm của bé, giữ nguyên lượng nước (tức là pha sữa loãng đi nhẹ nhàng hoặc giảm thể tích sữa). Khi lượng sữa cữ đêm giảm xuống còn dưới 30ml, bé sẽ tự động không muốn thức dậy bú nữa.\n*   **Nếu bé bú mẹ trực tiếp:**\n    *   **Cách giảm thời gian bú:** Nếu bình thường bé bú mẹ 10 phút mỗi cữ đêm, hãy giảm xuống còn 8 phút ở ngày thứ 1-3, tiếp tục giảm xuống 6 phút ở ngày thứ 4-6, và chỉ cho ngậm 3 phút ở ngày thứ 7.\n    *   **Nhờ sự hỗ trợ của Bố:** Khi bé thức dậy đòi ti đêm, hãy để bố vào dỗ dành vỗ về bé ngủ lại. Bé ngửi thấy mùi sữa mẹ sẽ khóc đòi ti bằng được, nhưng khi ngửi thấy hơi ấm của bố, bé sẽ dễ dàng chấp nhận việc vỗ về ngủ lại mà không đòi bú nữa.\n\n> **Lời khuyên y khoa:** Hãy bù đắp lượng dinh dưỡng thiếu hụt của cữ đêm vào các cữ bú ban ngày của bé. Đảm bảo cữ bú trước khi đi ngủ đêm thật no nê để bé yên tâm ngủ dài giấc.\n    ",
      "views": 4200,
      "likes": 360,
      "bookmarkCount": 185,
      "createdAt": "2026-03-25",
      "author": "Dr. Hải Anh",
      "isFeatured": false,
      "isTrending": false,
      "image": "https://images.unsplash.com/photo-1473286835901-04adb1afab02?w=600&auto=format&fit=crop&q=80",
      "faqs": [
        {
          "q": "Cai ti đêm có làm bé bị hạ đường huyết không?",
          "a": "Với trẻ khỏe mạnh sinh đủ tháng trên 6 tháng tuổi, cơ thể đã phát triển gan lưu trữ glycogen đảm bảo ổn định đường huyết suốt 10-12 tiếng ban đêm mà không cần ăn."
        },
        {
          "q": "Trẻ mọc răng quấy khóc đêm có nên cho bú không?",
          "a": "Trong những ngày bé đau nướu sốt mọc răng cấp tính, mẹ có thể linh hoạt cho bé bú nhẹ nhàng để trấn an tâm lý. Khi bé hết sưng đau nướu, hãy quay lại ngay lịch trình cai đêm."
        }
      ]
    },
    {
      "id": "art_30",
      "title": "Cách hạ sốt nhanh, an toàn cho trẻ tại nhà bằng paracetamol và dấu hiệu cảnh báo co giật cần đi viện",
      "category": "Sức khỏe trẻ em",
      "subCategory": "Xử lý bệnh nhi khoa",
      "tags": [
        "hạ sốt cho trẻ",
        "trẻ bị sốt",
        "paracetamol liều lượng",
        "co giật do sốt"
      ],
      "summary": "Sốt là phản ứng có lợi của hệ miễn dịch chống lại tác nhân gây bệnh. Hướng dẫn mẹ cách tính liều thuốc hạ sốt paracetamol chuẩn xác theo cân nặng của con và xử lý co giật an toàn.",
      "content": "\nSốt là một trong những lý do hàng đầu khiến cha mẹ đưa trẻ đi khám cấp cứu ban đêm. Tâm lý hoang mang, sợ con bị tổn thương não bộ dẫn đến việc nhiều cha mẹ tự ý cho uống hạ sốt quá liều lượng hoặc phối hợp thuốc bừa bãi rất nguy hiểm cho gan và thận của trẻ.\n\n### 1. Hiểu đúng về cơ chế sốt ở trẻ nhỏ\n*   **Phản ứng miễn dịch tự nhiên:** Sốt không phải là bệnh, mà là **phản ứng bảo vệ có lợi** của cơ thể. Nhiệt độ cao làm ức chế sự sinh sản của vi khuẩn, virus và kích thích hệ miễn dịch sản sinh kháng thể chống lại nhiễm trùng.\n*   **Ngưỡng nhiệt độ cần can thiệp:** Chỉ nên cho trẻ uống thuốc hạ sốt khi nhiệt độ đo ở nách đạt từ **38.5 độ C trở lên** và trẻ có biểu hiện mệt mỏi, quấy khóc, khó chịu. Nếu bé sốt 38.5 độ nhưng vẫn chơi đùa vui vẻ, ăn uống bình thường thì không nhất thiết phải uống thuốc ngay.\n\n### 2. Phác đồ sử dụng Paracetamol hạ sốt an toàn chuẩn y khoa\nParacetamol là hoạt chất hạ sốt đầu tay an toàn nhất được WHO khuyên dùng cho trẻ em từ sơ sinh.\n\n> [!IMPORTANT]\n> **TÍNH LIỀU THUỐC THEO CÂN NẶNG, KHÔNG TÍNH THEO ĐỘ TUỔI.**\n> *   Liều lượng an toàn: **10 đến 15 mg paracetamol trên mỗi kg cân nặng** của trẻ cho một lần uống.\n> *   Khoảng cách giữa các lần uống: Tối thiểu từ **4 đến 6 tiếng**.\n> *   Tổng liều tối đa: Không vượt quá **60 mg/kg/ngày**.\n> *   *Ví dụ minh họa:* Bé cân nặng 10kg.\n>     *   Liều một lần uống: 10kg x 10-15mg = 100mg đến 150mg paracetamol. Mẹ có thể cho bé uống 1 gói Hapacol 150mg hoặc đút hậu môn viên đạn 150mg là chuẩn nhất.\n\n### 3. Quy trình xử lý co giật do sốt cao tại nhà (Febrile Seizures)\nKhoảng 2-5% trẻ em từ 6 tháng đến 5 tuổi bị co giật khi nhiệt độ cơ thể tăng quá nhanh đột ngột. Co giật do sốt cao trông rất đáng sợ nhưng đa số hoàn toàn lành tính và tự hết sau 1-3 phút mà không để lại di chứng não.\n\n**Cha mẹ hãy thực hiện ngay 4 hành động cứu mạng sau:**\n1.  **Đặt bé nằm nghiêng bên trái:** Đặt bé nằm trên mặt phẳng an toàn, nghiêng đầu sang một bên để đờm nhớt hoặc chất nôn tự chảy ra ngoài, phòng ngừa sặc tắc đường thở.\n2.  **TUYỆT ĐỐI KHÔNG chọc bất kỳ vật cứng nào vào miệng bé:** Không nhét thìa, đũa, ngón tay mẹ hoặc vắt chanh vào miệng trẻ. Cơ hàm của trẻ khi co giật khóa chặt, nhét vật cứng dễ làm gãy răng, rách niêm mạc miệng hoặc ngón tay mẹ bị cắn tổn thương. Trẻ không bao giờ tự cắn lưỡi chảy máu đến chết khi co giật do sốt.\n3.  **Nới lỏng quần áo:** Cởi bỏ bớt quần áo, tã giấy giúp thoát nhiệt cơ thể.\n4.  **Đặt thuốc đút hậu môn hạ sốt:** Khi cơn giật kết thúc, đút ngay 1 viên paracetamol vào hậu môn bé để hạ sốt.\n\n### 4. Dấu hiệu cảnh báo phải đưa con đi viện khẩn cấp\nHãy đưa trẻ đến bệnh viện ngay lập tức nếu:\n*   Trẻ **dưới 3 tháng tuổi** bị sốt từ 38 độ C trở lên (bắt buộc nhập viện kiểm tra).\n*   Sốt kéo dài liên tục quá **3 ngày (72 giờ)** không hạ.\n*   Trẻ lờ đờ, ngủ li bì gọi hỏi không biết, bỏ bú hoàn toàn, nôn trớ vọt ra mọi thứ sau khi ăn.\n*   Có biểu hiện khó thở (thở nhanh bất thường, rút lõm lồng ngực sườn, cánh mũi phập phồng).\n\n> **Lời khuyên y khoa:** Việc lau người bằng nước ấm khi sốt chỉ có tác dụng hỗ trợ thư giãn cơ thể tạm thời trong 15-20 phút, hoàn toàn không giúp hạ trung tâm điều nhiệt ở não bộ của trẻ. Tuyệt đối không lau người bằng nước lạnh, cồn hoặc nước đá vì sẽ gây co mạch ngoại biên làm nhiệt độ nội tạng tăng cao hơn nguy hiểm.\n    ",
      "views": 8200,
      "likes": 720,
      "bookmarkCount": 490,
      "createdAt": "2026-05-15",
      "author": "Dr. Hải Anh",
      "isFeatured": true,
      "isTrending": true,
      "image": "https://images.unsplash.com/photo-1584036561566-baf2418a7c2e?w=600&auto=format&fit=crop&q=80",
      "faqs": [
        {
          "q": "Thuốc hạ sốt Ibuprofen dùng cho trẻ khi nào?",
          "a": "Ibuprofen chỉ dùng cho trẻ từ **6 tháng tuổi trở lên** khi paracetamol không hiệu quả và phải có sự chỉ định trực tiếp từ bác sĩ. Tuyệt đối không dùng Ibuprofen khi nghi ngờ trẻ bị sốt xuất huyết vì sẽ gây chảy máu ồ ạt nguy hiểm tính mạng."
        },
        {
          "q": "Cơn co giật do sốt kéo dài bao lâu là bất thường?",
          "a": "Nếu cơn co giật kéo dài liên tục quá **5 phút**, hoặc trẻ bị co giật lần 2 trong vòng 24 giờ, hãy gọi ngay xe cấp cứu đưa bé đến bệnh viện gần nhất."
        }
      ]
    },
    {
      "id": "art_31",
      "title": "Hướng dẫn bổ sung Vitamin D3 K2 cho trẻ sơ sinh chuẩn xác: Liều lượng, cách uống và thời điểm vàng",
      "category": "Sức khỏe trẻ em",
      "subCategory": "Vi chất dinh dưỡng",
      "tags": [
        "vitamin D3 K2",
        "bổ sung D3 cho trẻ",
        "còi xương",
        "rụng tóc vành khăn"
      ],
      "summary": "Vitamin D3 K2 đóng vai trò then chốt giúp hấp thu Canxi tối đa vào xương răng của trẻ sơ sinh, phòng ngừa còi xương. Tìm hiểu liều lượng uống chuẩn xác và cách nhỏ giọt an toàn.",
      "content": "\nTrong những năm gần đây, việc bổ sung **Vitamin D3 và K2 (đặc biệt là dạng MK7)** cho trẻ sơ sinh đã trở thành một kiến thức chăm sóc con cơ bản của các mẹ bỉm sữa thông thái. Sự kết hợp hoàn hảo này là chìa khóa vàng quyết định hiệu quả hấp thu canxi, giúp bé phát triển hệ xương khớp vững chắc và chiều cao vượt trội.\n\n### 1. Tại sao phải bổ sung Vitamin D3 K2 từ sơ sinh?\n*   **Sữa mẹ nghèo Vitamin D:** Sữa mẹ chứa hàm lượng vitamin D cực kỳ thấp (chỉ khoảng 25 UI/lít sữa, trong khi nhu cầu của bé là 400 UI/ngày). Bé bú mẹ hoàn toàn có nguy cơ cao bị thiếu vitamin D gây còi xương.\n*   **Cơ chế hấp thu Canxi tối ưu:**\n    *   **Vitamin D3:** Giúp hấp thu canxi từ ruột vào máu. Nếu thiếu D3, Canxi chỉ hấp thu được khoảng 10% lượng nạp vào.\n    *   **Vitamin K2 (MK7):** Giống như một người dẫn đường thông minh, kích hoạt protein osteocalcin giúp gắn kết Canxi từ máu trực tiếp vào **xương và răng**, tránh canxi lắng đọng tự do ở thành mạch máu gây vôi hóa động mạch hoặc lắng đọng ở thận gây sỏi thận.\n*   **Biểu hiện thiếu D3 K2 ở trẻ:** Bé ngủ hay giật mình quấy khóc ban đêm, đổ mồ hôi trộm nhiều ở đầu gáy (dù phòng mát), rụng tóc hình vành khăn sau đầu, chậm mọc răng và xương sọ mềm (nhuyễn xương sọ).\n\n### 2. Liều lượng bổ sung Vitamin D3 chuẩn y khoa hàng ngày\nHiệp hội Nhi khoa thế giới khuyến nghị bổ sung vitamin D3 liều dự phòng liên tục cho bé từ **sơ sinh đến ít nhất 1-2 tuổi**:\n*   **Trẻ bú mẹ hoàn toàn hoặc bú mẹ một phần:** Bổ sung **400 UI Vitamin D3** mỗi ngày bắt đầu ngay từ những ngày đầu sau sinh.\n*   **Trẻ uống sữa công thức hoàn toàn:** Sữa công thức đã bổ sung sẵn vitamin D. Nếu bé uống được tối thiểu **1 lít sữa công thức** mỗi ngày, bé đã nạp đủ 400 UI D3 và không cần bổ sung thêm bên ngoài. Nếu uống dưới 1 lít sữa/ngày, bé vẫn cần bổ sung thêm D3 liều dự phòng nhẹ dưới sự hướng dẫn y khoa.\n\n### 3. Hướng dẫn cách uống và Thời điểm vàng hấp thu tốt nhất\n*   **Thời điểm uống tốt nhất:** Cho bé uống vào **buổi sáng**, ngay trong cữ ăn hoặc ngay sau cữ bú của bé. Vitamin D3 và K2 là các vitamin **tan trong dầu**, chất béo có trong sữa mẹ hoặc sữa công thức sẽ là dung môi tự nhiên giúp cơ thể hấp thu các vi chất này tốt nhất.\n*   **⚠️ CẢNH BÁO CÁCH NHỎ GIỌT AN TOÀN:**\n    Tuyệt đối **không nhỏ trực tiếp đầu chai thuốc vào miệng bé**. Trẻ sơ sinh hay ngọ nguậy, đầu chai nhựa cứng có thể làm trầy xước lợi của bé, nguy hiểm hơn là vi khuẩn từ nước bọt của bé sẽ bám ngược vào đầu nhỏ giọt gây nhiễm khuẩn, hỏng toàn bộ lọ thuốc bên trong.\n    *   *Cách nhỏ chuẩn:* Nhỏ lượng giọt cần thiết ra một chiếc thìa nhựa nhỏ sạch sẽ, hoặc nhỏ lên núm ti mẹ rồi cho bé bú trực tiếp, hoặc nhỏ ra đầu ti giả cho bé ngậm mút.\n\n> **Khuyến cáo y tế:** Bổ sung thừa Vitamin D3 liều cao kéo dài (> 2000 UI/ngày) có thể gây ngộ độc tăng canxi máu, làm trẻ nôn trớ, chán ăn, tổn thương thận nghiêm trọng. Hãy luôn tuân thủ liều lượng 400 UI dự phòng hàng ngày của nhà sản xuất.\n    ",
      "views": 5100,
      "likes": 430,
      "bookmarkCount": 280,
      "createdAt": "2026-05-10",
      "author": "Dr. Hải Anh",
      "isFeatured": false,
      "isTrending": true,
      "image": "https://images.unsplash.com/photo-1550572017-edd951b55104?w=600&auto=format&fit=crop&q=80",
      "faqs": [
        {
          "q": "Tắm nắng có thay thế được việc uống Vitamin D3 K2 không?",
          "a": "Không. Để tổng hợp đủ vitamin D từ ánh nắng, da bé phải tiếp xúc trực tiếp với tia UVB cường độ mạnh (thường là nắng gắt từ 10h sáng đến 15h chiều). Tắm nắng sớm trước 8h sáng chỉ có tác dụng sưởi ấm, không giúp tổng hợp D3 mà còn tăng nguy cơ ung thư da ở trẻ sơ sinh."
        },
        {
          "q": "Vitamin K2 có cần thiết bắt buộc đi kèm D3 không?",
          "a": "Rất nên đi kèm. Sự kết hợp D3 K2 giúp định hướng canxi vào xương chuẩn xác nhất. Tuy nhiên nếu điều kiện kinh tế eo hẹp, việc bổ sung D3 đơn lẻ liều 400 UI vẫn là bắt buộc hàng đầu cho trẻ sơ sinh."
        }
      ]
    },
    {
      "id": "art_32",
      "title": "Trẻ bị viêm tiểu phế quản: Cách nhận biết triệu chứng sớm, chăm sóc đường thở và khi nào cần cấp cứu",
      "category": "Sức khỏe trẻ em",
      "subCategory": "Hô hấp trẻ em",
      "tags": [
        "viêm tiểu phế quản",
        "ho khò khè",
        "virus RSV",
        "hô hấp trẻ em"
      ],
      "summary": "Viêm tiểu phế quản là bệnh nhiễm trùng đường hô hấp dưới cực kỳ phổ biến ở trẻ dưới 2 tuổi, đặc biệt do virus hợp bào hô hấp (RSV) gây ra. Tìm hiểu cách theo dõi nhịp thở phát hiện suy hô hấp.",
      "content": "\nViêm tiểu phế quản là tình trạng các phế quản nhỏ (tiểu phế quản) trong phổi của trẻ bị viêm nhiễm, sưng phù nề và tiết nhiều dịch nhầy làm tắc nghẽn đường thở. Bệnh chủ yếu xảy ra ở trẻ em **dưới 2 tuổi** (nhiều nhất là trẻ 2-6 tháng tuổi) vào thời điểm giao mùa thu - đông hoặc xuân - hè.\n\n### 1. Nguyên nhân hàng đầu gây bệnh\nVirus hợp bào hô hấp (**RSV - Respiratory Syncytial Virus**) là thủ phạm chính gây ra 80% số ca viêm tiểu phế quản ở trẻ nhỏ. Loại virus này lây lan cực nhanh qua các giọt bắn đường hô hấp khi tiếp xúc gần hoặc qua đồ chơi nhiễm bẩn.\n\n### 2. Diễn tiến triệu chứng lâm sàng mẹ cần nắm rõ\nBệnh thường diễn tiến kéo dài từ 7 đến 10 ngày với các giai đoạn cụ thể:\n*   **Giai đoạn khởi phát (3-5 ngày đầu):** Bé có các triệu chứng giống cảm lạnh thông thường: chảy nước mũi trong, hắt hơi, ho khan nhẹ, sốt nhẹ hoặc không sốt.\n*   **Giai đoạn toàn phát (Ngày thứ 5 đến ngày thứ 7):** Virus tấn công sâu vào phổi. Bé ho nhiều hơn, khò khè nghe rõ bằng tai thường, thở nhanh, ăn bú kém hơn rõ rệt.\n*   **Giai đoạn phục hồi (Sau ngày thứ 8):** Các triệu chứng khò khè ho giảm dần, dịch mũi đặc lại rồi hết hoàn toàn.\n\n### 3. Cách theo dõi nhịp thở phát hiện sớm dấu hiệu Suy hô hấp nguy hiểm\n> [!IMPORTANT]\n> **ĐẾM NHỊP THỞ KHI BÉ NẰM YÊN HOẶC ĐANG NGỦ SAY.**\n> Vén áo bé lên để quan sát sự di động của ngực/bụng. Đếm nhịp thở tròn trong đúng **1 phút** bằng đồng hồ bấm giờ.\n>\n> **Ngưỡng nhịp thở nhanh cảnh báo phổi đang bị tổn thương:**\n> *   Trẻ **dưới 2 tháng tuổi**: Nhịp thở từ **60 lần/phút trở lên**.\n> *   Trẻ từ **2 đến 11 tháng tuổi**: Nhịp thở từ **50 lần/phút trở lên**.\n> *   Trẻ từ **12 đến 24 tháng tuổi**: Nhịp thở từ **40 lần/phút trở lên**.\n\n### 4. Quy trình chăm sóc bé viêm tiểu phế quản tại nhà\nĐa số trẻ bị viêm tiểu phế quản thể nhẹ hoàn toàn có thể tự điều trị an toàn tại nhà bằng cách chăm sóc triệu chứng tích cực:\n*   **Làm thông thoáng đường thở:** Nhỏ 2-3 giọt nước muối sinh lý ấm vào mũi bé trước cữ bú 15 phút để làm mềm dịch mũi, giúp bé bú không bị ngạt.\n*   **Bù nước dồi dào:** Cho bé bú mẹ nhiều cữ ngắn hơn hoặc tăng lượng nước ấm đối với trẻ lớn. Nước là chất làm loãng đờm nhầy tự nhiên tốt nhất trong cơ thể giúp trẻ dễ ho tống đờm ra ngoài.\n*   **Giữ độ ẩm phòng lý tưởng:** Sử dụng máy phun sương tạo ẩm trong phòng ngủ để tránh không khí khô lạnh gây kích ứng phổi.\n\n### 5. Dấu hiệu khẩn cấp đưa đi viện ngay lập tức\nĐưa bé đi cấp cứu ngay nếu phát hiện:\n*   Nhịp thở nhanh vượt ngưỡng an toàn kể trên kèm theo co rút cơ hô hấp (rút lõm lồng ngực sườn sâu hoắm mỗi khi hít vào).\n*   Cánh mũi phập phồng theo nhịp thở, đầu gật gù theo nhịp thở.\n*   Môi, đầu ngón tay ngón chân tái xanh hoặc tím tái (dấu hiệu thiếu oxy máu nghiêm trọng).\n*   Bé rên rỉ rên rít từng tiếng, lờ đờ bỏ bú hoàn toàn.\n    ",
      "views": 6200,
      "likes": 540,
      "bookmarkCount": 390,
      "createdAt": "2026-05-01",
      "author": "Dr. Hải Anh",
      "isFeatured": true,
      "isTrending": true,
      "image": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&auto=format&fit=crop&q=80",
      "faqs": [
        {
          "q": "Có nên tự ý cho trẻ uống siro ho long đờm không?",
          "a": "Không nên. Siro ho long đờm làm tăng tiết dịch đờm loãng trong phổi, trong khi phế quản của trẻ dưới 1 tuổi quá nhỏ chưa biết cách ho mạnh để tống đờm ra, dễ gây ứ đọng đờm dẫn đến suy hô hấp."
        },
        {
          "q": "Bệnh viêm tiểu phế quản có cần uống kháng sinh không?",
          "a": "Không. Viêm tiểu phế quản do virus RSV gây ra. Kháng sinh hoàn toàn không có tác dụng diệt virus mà chỉ gây loạn khuẩn đường ruột của trẻ. Chỉ dùng kháng sinh khi bác sĩ xác định có bội nhiễm vi khuẩn."
        }
      ]
    },
    {
      "id": "art_33",
      "title": "Tiêu chảy cấp do Rotavirus ở trẻ em: Phác đồ bù nước điện giải Oresol chuẩn y khoa và dinh dưỡng phù hợp",
      "category": "Sức khỏe trẻ em",
      "subCategory": "Tiêu hóa trẻ em",
      "tags": [
        "tiêu chảy cấp",
        "Rotavirus",
        "Oresol cách pha",
        "bù nước điện giải"
      ],
      "summary": "Rotavirus là tác nhân hàng đầu gây tiêu chảy cấp mất nước nghiêm trọng đe dọa tính mạng trẻ nhỏ dưới 5 tuổi. Tìm hiểu cách pha Oresol chuẩn xác từng ml và chế độ ăn chống sụt cân cho con.",
      "content": "\nTiêu chảy cấp do nhiễm virus **Rotavirus** là bệnh lý đường ruột cực kỳ nguy hiểm và phổ biến ở trẻ nhỏ. Biểu hiện đặc trưng của bệnh là trẻ đột ngột nôn trớ sữa liên tục (giai đoạn đầu), sau đó đi ngoài phân lỏng toàn nước màu vàng hoặc xanh nhiều lần trong ngày (10-20 lần), kèm theo sốt nhẹ và đau bụng dữ dội. \n\nNguy hiểm lớn nhất của bệnh không phải là số lần đi ngoài, mà là **tình trạng mất nước và điện giải cấp tính** rất nhanh. Nếu không được bù dịch kịp thời, trẻ sẽ bị suy kiệt, suy thận cấp, thậm chí tử vong.\n\n### 1. Phác đồ bù nước điện giải bằng Oresol (ORS) - Chìa khóa vàng cứu mạng trẻ\nOresol là dung dịch bù nước tốt nhất thế giới được y khoa khuyên dùng. Tuy nhiên, pha oresol sai tỷ lệ nước (quá đặc hoặc quá loãng) sẽ trực tiếp gây nguy hại cho tính mạng của trẻ do gây rối loạn điện giải tế bào não.\n\n> [!WARNING]\n> **PHA ĐÚNG CHÍNH XÁC THỂ TÍCH NƯỚC ĐƯỢC GHI TRÊN BAO BÌ.**\n> *   Nếu gói Oresol yêu cầu pha với **200ml nước**, mẹ phải dùng cốc đong đo đúng 200ml nước đun sôi để nguội để hòa tan hoàn toàn bột thuốc. Tuyệt đối không ước lượng bằng mắt, không chia nhỏ gói thuốc ra để pha làm nhiều lần, không thêm đường hay nước hoa quả vào dung dịch.\n> *   Nếu pha quá đặc: Dung dịch ưu trương sẽ rút nước từ tế bào ruột ra ngoài, làm trẻ tiêu chảy nặng hơn và gây teo tế bào não rất nguy hiểm.\n> *   Nếu pha quá loãng: Dung dịch nhược trương không cung cấp đủ lượng muối và điện giải cần thiết cho cơ thể phục hồi.\n\n### 2. Cách cho trẻ uống Oresol đúng kỹ thuật tránh nôn trớ\n*   Cho trẻ uống **từng muỗng nhỏ (thìa nhỏ)** hoặc từng ngụm nhỏ cách nhau 1-2 phút. Cho uống từ từ để ruột hấp thu dần dần.\n*   Nếu cho trẻ tu ực một hơi hết cả bình oresol, áp lực lớn lên dạ dày đang viêm kích ứng sẽ lập tức gây phản xạ nôn vọt ra ngoài toàn bộ lượng nước vừa uống.\n*   Nếu trẻ nôn trớ sau khi uống: Hãy dừng lại nghỉ 10 phút, sau đó cho uống lại từng thìa chậm hơn nữa.\n\n### 3. Chế độ dinh dưỡng chống sụt cân khi trẻ bị tiêu chảy\nSai lầm cực lớn của nhiều mẹ là bắt con kiêng ăn, chỉ cho ăn cháo muối nhạt hoặc kiêng sữa vì sợ đi ngoài nhiều hơn. Việc này làm cơ thể bé suy kiệt, teo niêm mạc ruột kéo dài thời gian hồi phục.\n*   **Trẻ bú mẹ/sữa công thức:** Tiếp tục cho bú bình thường, tăng số cữ bú trong ngày vì sữa mẹ chứa nhiều kháng thể giúp ruột phục hồi rất nhanh.\n*   **Trẻ ăn dặm:** Cho ăn thức ăn mềm, lỏng, dễ tiêu hóa như cháo thịt gà, cháo thịt lợn băm nhỏ nấu nhừ kèm cà rốt hấp. Không nêm quá nhiều dầu mỡ động vật.\n*   **Thực phẩm cần tránh:** Kiêng tuyệt đối các loại nước ngọt có gas, nước hoa quả đóng chai chứa nhiều đường fructose (làm tăng áp lực thẩm thấu ruột gây tiêu chảy nặng hơn).\n\n> **Lời khuyên y khoa:** Bổ sung **Kẽm nguyên tố** (10mg/ngày cho trẻ dưới 6 tháng, 20mg/ngày cho trẻ trên 6 tháng) liên tục trong **10-14 ngày** là phác đồ bắt buộc của Bộ Y Tế nhằm giúp tái tạo niêm mạc ruột tổn thương và giảm tỷ lệ tái phát tiêu chảy trong những tháng tiếp theo.\n    ",
      "views": 4800,
      "likes": 395,
      "bookmarkCount": 220,
      "createdAt": "2026-04-25",
      "author": "Dr. Hải Anh",
      "isFeatured": false,
      "isTrending": true,
      "image": "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?w=600&auto=format&fit=crop&q=80",
      "faqs": [
        {
          "q": "Có nên cho trẻ uống thuốc cầm tiêu chảy (như Loperamid) không?",
          "a": "TUYỆT ĐỐI KHÔNG! Các thuốc cầm tiêu chảy hoạt động bằng cách làm giảm nhu động ruột, giữ chất độc và virus có hại đọng lại sâu trong ruột, gây trướng bụng hoại tử ruột vô cùng nguy hiểm tính mạng của trẻ."
        },
        {
          "q": "Làm thế nào để phòng bệnh Rotavirus chủ động?",
          "a": "Phòng ngừa hiệu quả nhất là cho trẻ **uống vắc-xin phòng Rotavirus** đầy đủ từ **6 tuần tuổi** (phải hoàn thành các liều uống trước khi trẻ tròn 6 hoặc 8 tháng tuổi tùy dòng vắc-xin)."
        }
      ]
    },
    {
      "id": "art_34",
      "title": "Bí quyết chăm sóc bé sau tiêm chủng: Cách làm giảm sưng đau vết tiêm và theo dõi phản ứng sốt tại nhà",
      "category": "Sức khỏe trẻ em",
      "subCategory": "Tiêm chủng an toàn",
      "tags": [
        "tiêm chủng an toàn",
        "chăm sóc bé sau tiêm",
        "sốt sau tiêm",
        "giảm sưng vết tiêm"
      ],
      "summary": "Tiêm chủng đầy đủ giúp trẻ xây dựng hàng rào miễn dịch vững chắc bảo vệ sức khỏe. Hướng dẫn mẹ quy trình theo dõi 24-48h sau tiêm chủng khoa học và xử lý các phản ứng phụ nhẹ tại nhà.",
      "content": "\nTiêm vắc-xin phòng bệnh là quyền lợi và là biện pháp bảo vệ sức khỏe tốt nhất cho trẻ sơ sinh và trẻ nhỏ. Tuy nhiên, sau khi tiêm phòng, cơ thể trẻ sẽ tự động kích hoạt hệ miễn dịch để nhận diện kháng nguyên, dẫn đến một số phản ứng phụ thông thường như sốt nhẹ, quấy khóc, sưng đỏ đau nhức tại vết tiêm. Mẹ cần trang bị đầy đủ kiến thức để chăm sóc con an tâm nhất.\n\n### 1. Quy trình theo dõi bé nghiêm ngặt sau tiêm chủng\n*   **Theo dõi 30 phút đầu tại trung tâm tiêm chủng:**\n    Đây là thời điểm vàng để phát hiện sớm phản ứng phản vệ (sốc phản vệ) cực kỳ hiếm gặp nhưng vô cùng nguy hiểm. Mẹ tuyệt đối không tự ý cho bé về nhà ngay sau khi tiêm xong.\n*   **Theo dõi 24 - 48 giờ tiếp theo tại nhà:**\n    *   Thường xuyên đo nhiệt độ cơ thể bé (mỗi 2-3 tiếng).\n    *   Quan sát nhịp thở của con lúc ngủ, tinh thần chơi đùa, màu sắc da và lượng bú sữa hàng ngày.\n\n### 2. Cách làm dịu sưng đau tại vết tiêm chuẩn khoa học\nVết tiêm của bé thường bị đỏ, hơi cứng và đau nhẹ trong vòng 1-2 ngày đầu.\n*   **Cách làm đúng:**\n    *   Mặc quần áo cotton rộng rãi, mềm mại để tránh cọ xát vào vết tiêm sưng đau của bé.\n    *   Khi tắm rửa, tránh chà xát mạnh vào vết tiêm. Mẹ có thể áp khăn mát sạch sẽ nhẹ nhàng lên vùng da xung quanh vết tiêm để giúp bé giảm cảm giác đau buốt.\n*   **⚠️ CẢNH BÁO NHỮNG SAI LẦM DÂN GIAN NGUY HIỂM:**\n    Tuyệt đối **không được chườm nóng, chườm lạnh đá trực tiếp, hoặc đắp các lát khoai tây, lát chanh, lá thuốc dân gian** lên vết tiêm của bé. Da của bé sau tiêm có một lỗ kim tiêm hở siêu nhỏ. Việc đắp chất lạ chứa hàng triệu vi khuẩn lên đó sẽ trực tiếp gây nhiễm trùng da cấp tính, áp-xe vết tiêm hoại tử cơ rất nguy hiểm.\n\n### 3. Xử lý sốt sau tiêm chủng an toàn tại nhà\n*   Sốt nhẹ dưới 38.5 độ C: Cho bé bú mẹ nhiều cữ hơn để bù nước, cởi bớt tã quần rộng rãi thoáng mát.\n*   Sốt từ 38.5 độ C trở lên: Cho bé uống thuốc hạ sốt **Paracetamol** với liều lượng chuẩn xác theo cân nặng của con (10-15mg/kg cho mỗi lần uống, cách nhau tối thiểu 4-6 tiếng).\n\n### 4. Các triệu chứng nguy hiểm cần lập tức đưa đi bệnh viện cấp cứu\nMẹ cần khẩn trương đưa bé tới cơ sở y tế gần nhất nếu phát hiện các biểu hiện bất thường sau:\n*   Bé sốt cao liên tục trên 39 độ C uống thuốc hạ sốt không thuyên giảm.\n*   Trẻ quấy khóc dữ dội dồn dập kéo dài liên tục trên **3 tiếng đồng hồ** (hội chứng khóc thét dai dẳng sau tiêm).\n*   Bé lờ đờ, ngủ lịm gọi hỏi khó tỉnh, bỏ bú hoàn toàn.\n*   Có biểu hiện phát ban đỏ toàn thân đột ngột, khó thở, thở rít, môi tím tái.\n*   Vết tiêm sưng tấy đỏ lan rộng đường kính trên 5cm, chảy mủ nhiễm trùng.\n    ",
      "views": 5900,
      "likes": 480,
      "bookmarkCount": 310,
      "createdAt": "2026-05-11",
      "author": "Dr. Hải Anh",
      "isFeatured": true,
      "isTrending": false,
      "image": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&auto=format&fit=crop&q=80",
      "faqs": [
        {
          "q": "Có nên cho trẻ uống thuốc hạ sốt trước khi đi tiêm phòng không?",
          "a": "Tuyệt đối không! Việc tự ý cho uống paracetamol dự phòng trước khi tiêm chủng có thể làm suy giảm hiệu quả kích hoạt phản ứng miễn dịch tạo kháng thể của vắc-xin."
        },
        {
          "q": "Vết tiêm bị nổi cục cứng sau nhiều tuần có sao không?",
          "a": "Hiện tượng này khá phổ biến khi tiêm các vắc-xin chứa muối nhôm (như 6-trong-1, phế cầu). Cục cứng nhỏ dưới da hoàn toàn vô hại và sẽ tự tan biến sau vài tuần đến vài tháng mà không cần can thiệp."
        }
      ]
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
const IS_SERVER_MODE = typeof window !== 'undefined';

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

    // Tự động khởi tạo lịch tiêm chủng dựa trên ngày sinh cho em bé mới
    db.recalculateVaccinations(newBaby.id, newBaby.birthdate);

    if (IS_SERVER_MODE) {
      fetch('/api/babies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newBaby)
      }).catch(e => console.error("Lỗi sync Neon baby profile:", e));
    }

    return newBaby;
  },

  updateBabyProfile: (id, data) => {
    const database = getDb();
    const baby = database.babyProfiles.find(b => b.id === id);
    if (baby) {
      baby.name = data.name;
      baby.birthdate = data.birthdate;
      baby.gender = data.gender;
      saveDb(database);

      if (IS_SERVER_MODE) {
        fetch('/api/babies/' + id, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        }).catch(e => console.error("Lỗi sync Neon update baby profile:", e));
      }
    }
    return baby;
  },

  recalculateVaccinations: (babyId, birthdate) => {
    const database = getDb();
    let currentVacs = database.vaccinations.filter(v => v.babyId === babyId);
    
    const VACCINE_MASTER_SCHEDULE = [
      { age: 'Sơ sinh (24h đầu)', name: 'Vắc xin Lao (BCG)', disease: 'Phòng bệnh Lao phổi, Lao màng não' },
      { age: 'Sơ sinh (24h đầu)', name: 'Vắc xin Viêm gan B (Sơ sinh)', disease: 'Phòng bệnh Viêm gan B lây từ mẹ' },
      { age: '2 tháng tuổi', name: 'Vắc xin 6 trong 1 (Hexaxim / Infanrix Hexa)', disease: 'Phòng Bạch hầu, Ho gà, Uốn ván, Bại liệt, Viêm gan B, Viêm màng não do Hib' },
      { age: '2 tháng tuổi', name: 'Vắc xin phòng Phế cầu (Synflorix / Prevenar 13)', disease: 'Phòng Viêm phổi, Viêm màng não, Viêm tai giữa do phế cầu khuẩn' },
      { age: '2 tháng tuổi', name: 'Vắc xin uống Rotavirus (Rotarix / Rotateq)', disease: 'Phòng bệnh Tiêu chảy cấp do Rotavirus' },
      { age: '3 tháng tuổi', name: 'Vắc xin 6 trong 1 (Hexaxim / Infanrix Hexa)', disease: 'Phòng Bạch hầu, Ho gà, Uốn ván, Bại liệt, Viêm gan B, Viêm màng não do Hib' },
      { age: '3 tháng tuổi', name: 'Vắc xin phòng Phế cầu (Synflorix / Prevenar 13)', disease: 'Phòng Viêm phổi, Viêm màng não, Viêm tai giữa do phế cầu khuẩn' },
      { age: '3 tháng tuổi', name: 'Vắc xin uống Rotavirus (Rotarix / Rotateq)', disease: 'Phòng bệnh Tiêu chảy cấp do Rotavirus' },
      { age: '4 tháng tuổi', name: 'Vắc xin 6 trong 1 (Hexaxim / Infanrix Hexa)', disease: 'Phòng Bạch hầu, Ho gà, Uốn ván, Bại liệt, Viêm gan B, Viêm màng não do Hib' },
      { age: '4 tháng tuổi', name: 'Vắc xin phòng Phế cầu (Synflorix / Prevenar 13)', disease: 'Phòng Viêm phổi, Viêm màng não, Viêm tai giữa do phế cầu khuẩn' },
      { age: '4 tháng tuổi', name: 'Vắc xin uống Rotavirus (Rotateq)', disease: 'Phòng bệnh Tiêu chảy cấp do Rotavirus' },
      { age: '6 tháng tuổi', name: 'Vắc xin phòng Cúm mùa', disease: 'Phòng ngừa các chủng cúm A và B theo mùa' },
      { age: '6 tháng tuổi', name: 'Vắc xin Não mô cầu BC (Mengoc-BC)', disease: 'Phòng Viêm màng não mô cầu tuýp B và C' },
      { age: '9 tháng tuổi', name: 'Vắc xin Sởi đơn (MVVac)', disease: 'Phòng bệnh Sởi nguy cơ gây biến chứng phổi' },
      { age: '9 tháng tuổi', name: 'Vắc xin phòng Quai bị - Sởi - Rubella (MMR II / Priorix)', disease: 'Phòng 3 bệnh truyền nhiễm Sởi, Quai bị, Rubella' },
      { age: '9 tháng tuổi', name: 'Vắc xin phòng Viêm não Nhật Bản (Imojev)', disease: 'Phòng Viêm não Nhật Bản thế hệ mới' },
      { age: '9 tháng tuổi', name: 'Vắc xin phòng Não mô cầu ACYW (Menactra)', disease: 'Phòng Viêm màng não, nhiễm khuẩn huyết do não mô cầu A, C, Y, W-135' },
      { age: '12 tháng tuổi', name: 'Vắc xin phòng Thủy đậu (Varilrix / Varivax)', disease: 'Phòng bệnh Thủy đậu (Trái rạ) lây lan mạnh' },
      { age: '12 tháng tuổi', name: 'Vắc xin phòng Viêm gan A (Avaxim)', disease: 'Phòng bệnh Viêm gan A cấp tính' },
      { age: '12 tháng tuổi', name: 'Vắc xin phòng Viêm não Nhật Bản (Jevax)', disease: 'Phòng Viêm não Nhật Bản truyền thống' },
      { age: '18 tháng tuổi', name: 'Vắc xin phối hợp nhắc lại (6 trong 1 hoặc 5 trong 1)', disease: 'Bạch hầu, Ho gà, Uốn ván, Bại liệt, Viêm gan B, Viêm màng não do Hib' },
      { age: '24 tháng tuổi', name: 'Vắc xin phòng Thương hàn (Typhim Vi)', disease: 'Phòng bệnh sốt Thương hàn biến chứng ruột' },
      { age: '24 tháng tuổi', name: 'Vắc xin uống ngừa bệnh Tả (mORCVAX)', disease: 'Phòng dịch bệnh Tả lây lan qua nguồn nước' }
    ];

    const helperAddMonths = (dStr, mToAdd) => {
      const d = new Date(dStr);
      if (isNaN(d.getTime())) return dStr;
      d.setMonth(d.getMonth() + mToAdd);
      return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    };

    const parseMonths = (ageStr) => {
      if (ageStr.includes('Sơ sinh')) return 0;
      const match = ageStr.match(/(\d+)\s*tháng/);
      return match ? parseInt(match[1]) : 0;
    };

    if (currentVacs.length === 0) {
      const newVacs = VACCINE_MASTER_SCHEDULE.map((item, index) => {
        const m = parseMonths(item.age);
        const dueDate = helperAddMonths(birthdate, m);
        return {
          id: `v_${babyId}_${Date.now()}_${index}`,
          babyId: babyId,
          vaccineName: item.name,
          disease: item.disease,
          scheduleAge: item.age,
          dueDate: dueDate,
          status: 'pending',
          completedDate: null,
          note: ''
        };
      });
      database.vaccinations = [...database.vaccinations, ...newVacs];
    } else {
      // Cập nhật lại ngày dự kiến của các mũi tiêm hiện có dựa trên ngày sinh mới
      database.vaccinations.forEach(vac => {
        if (vac.babyId === babyId) {
          const m = parseMonths(vac.scheduleAge);
          vac.dueDate = helperAddMonths(birthdate, m);
        }
      });
    }

    saveDb(database);

    if (IS_SERVER_MODE) {
      fetch('/api/logs/vaccines/recalculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ babyId, birthdate })
      }).catch(e => console.error("Lỗi sync Neon recalculate vaccines:", e));
    }
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
