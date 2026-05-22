const { Pool } = require('pg');
require('dotenv').config();

// Mảng 65 bài viết chuẩn SEO y khoa đầy đủ 13 chuyên mục, mỗi chuyên mục 5 bài
const articles = [
  // ==========================================
  // 1. MANG THAI (5 bài)
  // ==========================================
  {
    id: 'mt_01',
    title: 'Cẩm nang chăm sóc bà bầu 3 tháng đầu: Dinh dưỡng, kiêng cữ và xét nghiệm quan trọng',
    category: 'Mang thai',
    sub_category: 'Tam cá nguyệt thứ nhất',
    tags: 'mang thai,bà bầu 3 tháng đầu,dinh dưỡng thai kỳ,kiêng cữ mang thai',
    summary: 'Tam cá nguyệt thứ nhất là giai đoạn cực kỳ nhạy cảm và quan trọng đối với sự hình thành thai nhi. Khám phá quy trình dinh dưỡng, kiêng cữ khoa học và các mốc xét nghiệm y khoa không thể bỏ qua.',
    content: `### 1. Dinh dưỡng vàng cho bà bầu trong 3 tháng đầu
3 tháng đầu là lúc phôi thai hình thành các cơ quan quan trọng. Mẹ bầu cần tập trung vào các vi chất dinh dưỡng thiết yếu sau:
*   **Axit Folic (400-600 mcg/ngày):** Phòng ngừa dị tật ống thần kinh ở thai nhi. Nên bổ sung trước khi mang thai và trong suốt tam cá nguyệt đầu tiên qua bông cải xanh, măng tây, trứng hoặc viên uống.
*   **Sắt (30-60 mg/ngày):** Tăng lượng máu nuôi dưỡng thai nhi và ngăn ngừa thiếu máu ở mẹ. Có nhiều trong thịt bò, lòng đỏ trứng, rau lá xanh đậm.
*   **Canxi và Vitamin D3:** Hỗ trợ phát triển khung xương sơ khai cho bé. Bổ sung từ sữa hạt, phô mai và tôm cua nhỏ.

### 2. Những điều kiêng cữ y khoa cần lưu ý
*   **Tránh vận động mạnh:** Tránh mang vác vật nặng, chạy nhảy hay thay đổi tư thế đột ngột do túi thai chưa bám chắc vào thành tử cung.
*   **Kiểm soát thực phẩm:** Tuyệt đối tránh ăn đồ sống (sushi, tiết canh, trứng ốp la lòng đào) để ngăn nhiễm ký sinh trùng Listeria gây sảy thai. Kiêng các loại rau quả gây co thắt tử cung mạnh như rau ngót rừng, dứa, đu đủ xanh.
*   **Hạn chế hóa chất độc hại:** Không nhuộm tóc, sơn móng tay hoặc tiếp xúc trực tiếp với hóa chất tẩy rửa mạnh.

### 3. Các mốc khám thai và xét nghiệm bắt buộc
*   **Mốc 6 - 8 tuần:** Siêu âm kiểm tra tim thai, vị trí làm tổ của thai nhi xem có nằm trong tử cung hay ngoài tử cung.
*   **Mốc 11 - 13 tuần 6 ngày:** Siêu âm đo độ mờ da gáy (NT) kết hợp làm xét nghiệm Double Test hoặc NIPT để sàng lọc hội chứng Down, Patau, Edwards.`,
    image: 'https://images.unsplash.com/photo-1518104593124-ac2e82a5eb9d?w=600&auto=format&fit=crop&q=80',
    views: 4890,
    likes: 412,
    created_at: '2026-03-10',
    author: 'Bác sĩ sản khoa Hoài An',
    faqs: JSON.stringify([
      { q: 'Bà bầu 3 tháng đầu bị nghén nặng không ăn được phải làm sao?', a: 'Mẹ bầu nên chia nhỏ bữa ăn thành 5-6 bữa/ngày, ưu tiên thực phẩm lỏng, dễ tiêu, uống nước gừng ấm và có thể bổ sung vitamin tổng hợp theo chỉ định nếu không ăn được thức ăn thô.' },
      { q: 'Mang thai 3 tháng đầu có được quan hệ vợ chồng không?', a: 'Nếu thai kỳ bình thường, mẹ không có tiền sử sảy thai, động thai hay ra máu bất thường thì có thể sinh hoạt nhẹ nhàng, nhưng cần hạn chế tần suất và tránh các động tác thô bạo.' }
    ])
  },
  {
    id: 'mt_02',
    title: 'Thực đơn dinh dưỡng cho bà bầu theo từng tháng giúp thai nhi phát triển não bộ vượt trội',
    category: 'Mang thai',
    sub_category: 'Dinh dưỡng thai kỳ',
    tags: 'thực đơn bà bầu,dinh dưỡng thai nhi,phát triển não bộ thai nhi,ăn gì thông minh',
    summary: 'Ăn gì để con thông minh ngay từ trong bụng mẹ? Cung cấp thực đơn dinh dưỡng chi tiết theo từng tháng tuổi thai kỳ giàu DHA, Omega-3 và Choline tốt cho hệ thần kinh của bé.',
    content: `### 1. Giai đoạn 3 tháng đầu (Tháng 1 đến tháng 3): Xây nền tảng ống thần kinh
Ở giai đoạn này, não bộ của bé bắt đầu phát triển các nơ-ron thần kinh đầu tiên. Thực đơn của mẹ cần giàu:
*   **Axit Folic:** Có nhiều trong súp lơ, măng tây, ngũ cốc nguyên hạt.
*   **Choline:** Hỗ trợ cấu trúc màng tế bào não, có nhiều trong lòng đỏ trứng gà (ăn 3-4 quả/tuần).

### 2. Giai đoạn 3 tháng giữa (Tháng 4 đến tháng 6): Phát triển tế bào não thần tốc
Giai đoạn tế bào não của thai nhi nhân lên với tốc độ cực nhanh (khoảng 250.000 tế bào mỗi phút). Mẹ cần bổ sung:
*   **DHA & EPA (Omega-3):** Quyết định độ nhạy bén của các giác quan và tư duy của con. Ăn các loại cá béo an toàn như cá hồi, cá trích (2 bữa/tuần) hoặc bổ sung viên dầu cá bầu chất lượng cao.
*   **Sắt & Kẽm:** Giúp vận chuyển oxy lên não đầy đủ, có trong thịt bò, thịt heo thăn, các hạt dinh dưỡng (óc chó, hạnh nhân, hạt điều).

### 3. Giai đoạn 3 tháng cuối (Tháng 7 đến tháng 9): Hoàn thiện nếp nhăn và kích thước não
Não bộ tăng trưởng nhanh nhất về thể tích và hình thành các nếp nhăn sâu.
*   **Chất béo lành mạnh:** Chiếm 60% cấu trúc não bộ. Mẹ bầu hãy tăng cường ăn quả bơ, dầu ô-liu và các loại hạt.
*   **Canxi:** Giúp hoàn thiện hệ thống dẫn truyền thần kinh và cấu trúc xương chắc khỏe.`,
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&auto=format&fit=crop&q=80',
    views: 5210,
    likes: 467,
    created_at: '2026-03-15',
    author: 'Viện Dinh Dưỡng Quốc Gia',
    faqs: JSON.stringify([
      { q: 'Bà bầu ăn cá hồi nhiều có sợ nhiễm độc thủy ngân không?', a: 'Cá hồi là loại cá có hàm lượng thủy ngân rất thấp và an toàn. Tuy nhiên, mẹ bầu chỉ nên ăn khoảng 300g cá hồi chín mỗi tuần để đảm bảo an toàn tuyệt đối.' },
      { q: 'Hạt óc chó có thực sự giúp con thông minh?', a: 'Đúng. Hạt óc chó giàu ALA (tiền chất của DHA) rất tốt cho màng não bộ, mẹ nên ăn 5-6 hạt mỗi ngày làm bữa phụ.' }
    ])
  },
  {
    id: 'mt_03',
    title: 'Những dấu hiệu chuyển dạ sắp sinh mẹ bầu cần nhập viện ngay lập tức',
    category: 'Mang thai',
    sub_category: 'Chuẩn bị sinh',
    tags: 'dấu hiệu chuyển dạ,sắp sinh,vỡ ối,cơn gò tử cung,chuẩn bị đi biển',
    summary: 'Nhận biết chính xác các cơn gò chuyển dạ thật, hiện tượng rỉ ối, ra dịch hồng âm đạo để chủ động nhập viện an toàn, tránh các biến chứng sinh nở nguy hiểm.',
    content: `### 1. Cơn gò tử cung chuyển dạ (Cơn gò thật vs Cơn gò giả)
Mẹ bầu cần phân biệt rõ giữa cơn gò sinh lý Braxton Hicks (cơn gò giả) và cơn gò chuyển dạ thực sự:
*   **Cơn gò giả:** Diễn ra không đều, khoảng cách xa, giảm đau khi mẹ thay đổi tư thế nằm hoặc đi lại nhẹ nhàng. Không kèm theo dịch âm đạo.
*   **Cơn gò chuyển dạ thật:** Xuất hiện đều đặn với tần suất tăng dần (cứ 5-10 phút có 1 cơn gò kéo dài 30-40 giây). Cơn đau quặn vùng bụng dưới và lan ra sau lưng, không hề thuyên giảm dù mẹ nghỉ ngơi.

### 2. Vỡ ối hoặc rỉ nước ối âm đạo
*   Nước ối chảy ra từ âm đạo có thể đột ngột ào ạt hoặc rỉ rả liên tục, nước trong suốt hoặc hơi hồng vàng, không mùi khai như nước tiểu.
*   **Hành động y khoa nguy cấp:** Khi đã vỡ ối, hàng rào bảo vệ thai nhi đã mở. Mẹ cần nằm nghiêng trái và di chuyển ngay đến bệnh viện phụ sản để tránh nhiễm trùng ối hoặc sa dây rốn cực kỳ nguy hiểm cho thai nhi.

### 3. Xuất hiện dịch nhầy hồng âm đạo (Máu báo sinh)
*   Khi cổ tử cung bắt đầu mở rộng và mỏng đi, nút nhầy bảo vệ cổ tử cung sẽ thoát ra ngoài tạo thành chất dịch nhầy màu hồng hoặc đỏ nhạt.
*   Đây là dấu hiệu chuyển dạ chuẩn xác báo hiệu em bé sẽ chào đời trong vòng 24 - 48 giờ tới. Mẹ cần thu dọn giỏ đồ đi sinh và chuẩn bị sẵn sàng tâm lý.`,
    image: 'https://images.unsplash.com/photo-1584515901367-f1c276565434?w=600&auto=format&fit=crop&q=80',
    views: 3120,
    likes: 289,
    created_at: '2026-03-20',
    author: 'Hộ sinh trưởng Kim Cúc',
    faqs: JSON.stringify([
      { q: 'Rỉ ối nhẹ có cần đi viện ngay không?', a: 'Có. Bất kỳ hiện tượng rò rỉ nước ối nào đều tăng nguy cơ cạn ối và nhiễm khuẩn ngược dòng cho thai nhi. Mẹ phải đi khám ngay lập tức.' },
      { q: 'Cổ tử cung mở mấy phân thì sinh?', a: 'Cổ tử cung mở đủ 10 phân (10cm) là mức mở hoàn toàn để đầu em bé có thể chui ra ngoài trong quá trình rặn đẻ.' }
    ])
  },
  {
    id: 'mt_04',
    title: 'Tiểu đường thai kỳ: Nguyên nhân, triệu chứng và cách kiểm soát đường huyết an toàn',
    category: 'Mang thai',
    sub_category: 'Biến chứng thai kỳ',
    tags: 'tiểu đường thai kỳ,nghiệm pháp dung nạp glucose,chế độ ăn tiểu đường thai kỳ',
    summary: 'Tiểu đường thai kỳ ảnh hưởng xấu đến cả mẹ và con nếu không được phát hiện sớm. Tìm hiểu phương pháp thực hiện nghiệm pháp dung nạp glucose đường uống và thực đơn kiểm soát đường huyết hiệu quả.',
    content: `### 1. Nguyên nhân và những ai có nguy cơ cao?
Tiểu đường thai kỳ xảy ra do các hormone nhau thai tiết ra làm tăng tính kháng insulin của tế bào cơ thể mẹ. Những đối tượng có nguy cơ cao bao gồm:
*   Mẹ bầu trên 35 tuổi, thừa cân béo phì trước khi mang thai.
*   Có tiền sử gia đình bị đái tháo đường tuýp 2.
*   Từng sinh con nặng trên 4kg hoặc có tiền sử sảy thai, thai lưu không rõ nguyên nhân.

### 2. Tác hại y khoa nếu không kiểm soát đường huyết
*   **Đối với thai nhi:** Nguy cơ thai to (trên 4kg) gây khó sinh, kẹt vai khi đẻ thường; suy hô hấp cấp sau sinh; hạ đường huyết đột ngột sau khi cắt rốn.
*   **Đối với mẹ bầu:** Tăng nguy cơ tiền sản giật, đa ối, sinh non và nguy cơ tiến triển thành đái tháo đường thực sự sau sinh.

### 3. Phương pháp kiểm soát đường huyết an toàn tại nhà
*   **Cắt giảm tinh bột nhanh:** Thay thế cơm trắng, bánh mì bằng tinh bột hấp thu chậm như gạo lứt, khoai lang, yến mạch nguyên cám.
*   **Tăng chất xơ & đạm:** Ăn nhiều rau xanh trước bữa ăn để làm chậm quá trình hấp thu đường. Bổ sung đạm nạc từ ức gà, cá, đậu phụ.
*   **Vận động nhẹ nhàng:** Đi bộ đều đặn 15-20 phút sau mỗi bữa ăn chính giúp tế bào tiêu thụ glucose hiệu quả hơn.`,
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&auto=format&fit=crop&q=80',
    views: 4530,
    likes: 388,
    created_at: '2026-03-25',
    author: 'Thạc sĩ Bác sĩ Nguyễn Khánh',
    faqs: JSON.stringify([
      { q: 'Khi nào mẹ bầu cần thực hiện test tiểu đường thai kỳ?', a: 'Nghiệm pháp dung nạp glucose bằng cách uống nước đường thường được thực hiện ở tuần thứ 24 - 28 của thai kỳ.' },
      { q: 'Tiểu đường thai kỳ có tự hết sau sinh không?', a: 'Đa số các trường hợp đường huyết sẽ trở lại bình thường trong vòng 6-12 tuần sau khi sinh bé. Tuy nhiên mẹ vẫn nên tái khám định kỳ.' }
    ])
  },
  {
    id: 'mt_05',
    title: 'Bài tập yoga cho bà bầu giúp dễ sinh, giảm đau lưng và thư giãn tinh thần',
    category: 'Mang thai',
    sub_category: 'Hoạt động thể chất',
    tags: 'yoga bà bầu,giảm đau lưng mang thai,dễ sinh thường,bài tập cho bà bầu',
    summary: 'Tập luyện yoga nhẹ nhàng mang lại lợi ích tuyệt vời cho cột sống của mẹ bầu, giúp mở khớp háng tạo thuận lợi cho sinh thường và kiểm soát nhịp thở giảm căng thẳng khi vượt cạn.',
    content: `### 1. Lợi ích của Yoga bầu đối với quá trình sinh nở
*   **Giảm đau mỏi cột sống:** Các động tác kéo giãn nhẹ nhàng giúp giải tỏa áp lực lên vùng thắt lưng do bụng bầu ngày một lớn.
*   **Mở rộng xương chậu:** Các tư thế mở khớp háng hỗ trợ đầu thai nhi dễ lọt vào khung chậu.
*   **Học cách kiểm soát hơi thở:** Hơi thở sâu của yoga giúp mẹ bình tĩnh, cung cấp nhiều oxy cho thai nhi và giảm đáng kể cơn đau khi xuất hiện cơn gò tử cung chuyển dạ.

### 2. Top 3 tư thế vàng cho mẹ bầu tại nhà
*   **Tư thế Con Mèo / Con Bò (Cat-Cow Pose):**
    Quỳ trên hai tay và đầu gối. Hít vào, võng nhẹ lưng và ngước đầu lên. Thở ra, hóp bụng, cong lưng lên và cúi đầu nhìn về phía rốn. Bài tập này giúp giảm đau lưng và điều chỉnh ngôi thai thuận.
*   **Tư thế Góc Cố Định (Baddha Konasana):**
    Ngồi thẳng lưng, hai lòng bàn chân áp sát vào nhau, kéo gót chân sát vào lòng. Dùng hai tay giữ các ngón chân, dập dình nhẹ hai đùi như cánh bướm. Giúp kéo giãn cơ đùi trong và khớp háng.
*   **Tư thế Đứa Trẻ (Child\'s Pose):**
    Quỳ trên sàn, mở rộng hai đầu gối sang bên để bụng bầu được thoải mái, cúi gập người về phía trước, hai tay duỗi thẳng. Đây là tư thế thư giãn hoàn hảo sau ngày dài mệt mỏi.

### 3. Nguyên tắc an toàn y tế khi tập luyện
*   Tránh các động tác vặn xoắn bụng sâu, các tư thế nằm sấp đè lên bụng hoặc nằm ngửa quá lâu sau tuần 20 (gây chèn ép tĩnh mạch chủ dưới).
*   Luôn tập dưới sự hướng dẫn của huấn luyện viên giàu kinh nghiệm và lắng nghe cơ thể mình. Dừng lại ngay nếu thấy chóng mặt, ra huyết âm đạo.`,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&auto=format&fit=crop&q=80',
    views: 3980,
    likes: 315,
    created_at: '2026-03-28',
    author: 'HLV Yoga Bầu Thanh Mai',
    faqs: JSON.stringify([
      { q: 'Tháng thứ mấy của thai kỳ thì có thể tập yoga?', a: 'Mẹ bầu có thể bắt đầu tập yoga từ tuần thứ 12 trở đi khi thai kỳ đã đi vào giai đoạn ổn định và hết ốm nghén.' },
      { q: 'Bị rau tiền đạo có tập yoga được không?', a: 'Tuyệt đối không. Các trường hợp rau tiền đạo, hở eo tử cung, rỉ ối hoặc có nguy cơ sinh non được khuyến cáo nằm nghỉ ngơi tại giường và tránh vận động.' }
    ])
  },

  // ==========================================
  // 2. SAU SINH (5 bài)
  // ==========================================
  {
    id: 'ss_01',
    title: 'Thực đơn gọi sữa về ướt áo cho mẹ sau sinh mổ và sinh thường hiệu quả nhất',
    category: 'Sau sinh',
    sub_category: 'Phục hồi & Sữa mẹ',
    tags: 'sữa mẹ,lợi sữa sau sinh,gọi sữa về nhanh,thực đơn mẹ sau sinh',
    summary: 'Mẹ sau sinh mổ sữa về chậm hoặc mẹ sinh thường bị thiếu sữa cho con? Khám phá ngay thực đơn vàng giàu dinh dưỡng kích thích tuyến sữa hoạt động thần tốc và an toàn cho bé.',
    content: `### 1. Nguyên tắc cốt lõi để gọi sữa về dồi dào
Không phải chân giò hầm mới là bí quyết gọi sữa. Để có nguồn sữa dồi dào, mẹ cần thực hiện nguyên tắc "Cung - Cầu" y khoa:
*   **Cho con bú hoặc hút sữa đều đặn:** Kích thích tuyến yên sản sinh prolactin (hormone tạo sữa) và oxytocin (hormone phun sữa). Tần suất tối ưu là 2-3 giờ/lần.
*   **Uống đủ nước ấm (3 lít/ngày):** Sữa mẹ có thành phần chính là nước. Uống 1 ly nước ấm trước và sau khi cho con bú 15 phút giúp sữa phun mạnh hơn.
*   **Tinh thần thoải mái:** Stress, lo âu và thiếu ngủ là kẻ thù số 1 chặn đứng dòng sữa mẹ.

### 2. Các thực phẩm lợi sữa y khoa khuyên dùng
*   **Thịt bò nạc & thịt thăn heo:** Cung cấp sắt và protein chất lượng cao giúp cơ thể mẹ phục hồi năng lượng để sản xuất sữa.
*   **Hạt thì là và cỏ cà ri:** Chứa các phytoestrogen kích thích sự phát triển của tuyến vú và tăng sản lượng sữa rõ rệt.
*   **Rau ngót, mồng tơi, bông cải xanh:** Giàu vitamin, chất xơ giúp nhuận tràng và làm mát nguồn sữa.
*   **Yến mạch, gạo lứt:** Nguồn tinh bột phức hợp cung cấp năng lượng bền bỉ cho quá trình tiết sữa liên tục.

### 3. Thực đơn mẫu 1 ngày lợi sữa cho mẹ
*   **Bữa sáng:** Cháo gà yến mạch ấm, 1 cốc sữa hạt ấm.
*   **Bữa trưa:** Cơm gạo lứt, thịt bò xào súp lơ xanh, canh rau ngót nấu thịt băm, đu đủ chín tráng miệng.
*   **Bữa phụ:** 1 ly ngũ cốc lợi sữa ấm + vài quả óc chó.
*   **Bữa tối:** Cơm nóng, cá hồi áp chảo, canh mồng tơi, 1 ly nước ấm trước khi ngủ.`,
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=600&auto=format&fit=crop&q=80',
    views: 6120,
    likes: 549,
    created_at: '2026-04-01',
    author: 'Chuyên gia Sữa mẹ Hương Giang',
    faqs: JSON.stringify([
      { q: 'Tại sao sau sinh mổ sữa lại về chậm hơn sinh thường?', a: 'Do ảnh hưởng của thuốc gây tê, thuốc kháng sinh và cơn đau vết mổ làm chậm quá trình tiết hormone oxytocin kích sữa. Mẹ hãy kiên trì cho con da kề da và bú sớm nhất có thể.' },
      { q: 'Ăn lá lốt có gây mất sữa thật không?', a: 'Đúng. Lá lốt, măng, bạc hà là những thực phẩm có chứa các chất có thể làm ức chế quá trình tiết sữa, mẹ nên tránh ăn trong thời gian nuôi con bằng sữa mẹ.' }
    ])
  },
  {
    id: 'ss_02',
    title: 'Trầm cảm sau sinh: Dấu hiệu nhận biết sớm và cách vượt qua an toàn cho mẹ bỉm',
    category: 'Sau sinh',
    sub_category: 'Tâm lý sau sinh',
    tags: 'trầm cảm sau sinh,tâm lý mẹ bỉm,rối loạn lo âu,chữa trầm cảm',
    summary: 'Trầm cảm sau sinh không phải là sự yếu đuối, đó là một bệnh lý y khoa nghiêm trọng cần sự thấu hiểu từ chồng và gia đình. Hãy nhận biết sớm các dấu hiệu nguy hiểm để có giải pháp can thiệp kịp thời.',
    content: `### 1. Phân biệt hiện tượng Baby Blues và Trầm cảm sau sinh
*   **Baby Blues (Hội chứng buồn bã sau sinh):** Gặp ở 80% phụ nữ, xuất hiện do sụt giảm hormone đột ngột sau sinh. Biểu hiện là dễ xúc động, khóc nhè, mệt mỏi nhưng sẽ tự hết sau 10-14 ngày mà không cần điều trị.
*   **Trầm cảm sau sinh (PPD):** Kéo dài trên 2 tuần với mức độ nghiêm trọng tăng dần. Mẹ bỉm rơi vào trạng thái kiệt sức, tuyệt vọng sâu sắc, mất kết nối với con và có ý nghĩ tiêu cực.

### 2. Các dấu hiệu cảnh báo đỏ y khoa
Gia đình và người chồng cần cực kỳ chú ý nếu người mẹ có các biểu hiện sau:
*   Mất ngủ kéo dài dù con đã ngủ ngoan, hoặc ngủ quá nhiều nhưng vẫn cảm thấy kiệt sức.
*   Khóc lóc không rõ lý do, bực bội, tức giận vô cớ với những người xung quanh.
*   Cảm giác tội lỗi, thấy mình là người mẹ tồi tệ, không biết chăm sóc con.
*   Mất hứng thú với mọi sở thích trước đây, sợ hãi khi phải ở một mình với em bé.
*   Có ý nghĩ làm tổn thương bản thân hoặc làm hại em bé.

### 3. Phương pháp vượt qua trầm cảm khoa học
*   **Chia sẻ áp lực:** Chồng và người thân cần chủ động gánh vác việc chăm bé ban đêm, giặt giũ để mẹ có giấc ngủ liên tục trên 4 tiếng.
*   **Giải tỏa tâm lý:** Mẹ nên dành ra 30 phút mỗi ngày đi dạo hít thở khí trời, nghe nhạc thư giãn. Không tự cô lập bản thân trong phòng kín.
*   **Tìm kiếm sự trợ giúp chuyên khoa:** Nếu các triệu chứng không thuyên giảm, hãy đưa mẹ đến gặp bác sĩ tâm lý sớm để được tư vấn trị liệu hành vi hoặc dùng thuốc an toàn cho sữa mẹ.`,
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&auto=format&fit=crop&q=80',
    views: 5490,
    likes: 498,
    created_at: '2026-04-03',
    author: 'Thạc sĩ Tâm lý học Lâm sàng Minh Thư',
    faqs: JSON.stringify([
      { q: 'Người chồng nên làm gì khi vợ có biểu hiện trầm cảm?', a: 'Chồng cần lắng nghe không phán xét, ôm ấp vỗ về vợ, chủ động chăm con để vợ ngủ đủ giấc và tuyệt đối không nói những lời vô tâm chỉ trích vợ.' },
      { q: 'Uống thuốc trầm cảm sau sinh có phải cai sữa con không?', a: 'Không nhất thiết. Hiện nay y học có nhiều dòng thuốc chống trầm cảm thế hệ mới rất ít qua sữa mẹ và an toàn cho bé bú, cần được bác sĩ chuyên khoa kê đơn cụ thể.' }
    ])
  },
  {
    id: 'ss_03',
    title: 'Bí quyết eo thon dáng đẹp sau sinh bằng các phương pháp tự nhiên không mất sữa',
    category: 'Sau sinh',
    sub_category: 'Lấy lại vóc dáng',
    tags: 'giảm cân sau sinh,giảm mỡ bụng,eo thon dáng đẹp,phục hồi vóc dáng',
    summary: 'Làm sao để đánh bay mỡ bụng sau sinh hiệu quả mà vẫn đảm bảo nguồn sữa chất lượng cho con yêu? Cùng thực hiện chế độ dinh dưỡng và các bài tập nhẹ nhàng chuẩn y khoa.',
    content: `### 1. Cho con bú trực tiếp: Máy đốt calo tự nhiên hiệu quả nhất
Cho con bú hoàn toàn bằng sữa mẹ giúp tiêu hao từ **500 - 800 calo/ngày**, tương đương với việc chạy bộ 1 giờ hoặc bơi lội liên tục. Đây là cơ chế giảm cân tự nhiên vô cùng kỳ diệu của cơ thể người mẹ.

### 2. Chế độ ăn uống giảm cân khoa học "Eat Clean"
*   **Không nhịn ăn:** Nhịn ăn gây mất sữa và đẩy cơ thể vào trạng thái kiệt quệ tinh thần.
*   **Ăn tinh bột phức hợp:** Thay cơm trắng bằng khoai lang, yến mạch, quinoa để no lâu hơn và không tăng đường huyết đột ngột.
*   **Uống trà ấm & nước đậu đen:** Trà gạo lứt đậu đỏ, nước đậu đen rang giúp thanh lọc cơ thể, giảm cảm giác thèm ngọt và kích thích tiết sữa thơm mát.
*   **Nạp nhiều rau củ luộc:** Ăn rau luộc trước bữa ăn chính để lấp đầy dạ dày một cách thông minh.

### 3. Thời điểm tập luyện thể dục an toàn
*   **Sinh thường:** Có thể tập các bài nhẹ nhàng như Kegel, đi bộ chậm sau 6 tuần.
*   **Sinh mổ:** Cần chờ ít nhất 8 - 12 tuần để vết mổ bên trong tử cung lành hoàn toàn. Hãy bắt đầu bằng các tư thế yoga nhẹ nhàng, tránh các bài tập gập bụng mạnh gây áp lực lên cơ bụng bị chia tách (hiện tượng sổ bụng sau sinh).`,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format&fit=crop&q=80',
    views: 4320,
    likes: 395,
    created_at: '2026-04-06',
    author: 'PT Chuyên nghiệp Khánh Linh',
    faqs: JSON.stringify([
      { q: 'Có nên dùng nịt bụng ngay sau khi sinh không?', a: 'Không nên. Nịt bụng quá sớm gây cản trở tuần hoàn máu, làm chậm sự co hồi của tử cung và đè ép vết mổ chưa lành. Chỉ nên nịt nhẹ nhàng sau sinh thường 1 tháng và sinh mổ 2 tháng.' },
      { q: 'Tại sao cân nặng giảm nhưng bụng vẫn to sồ sề?', a: 'Đó là do hiện tượng tách cơ thẳng bụng (sổ bụng). Mẹ cần tập các bài tập phục hồi sàn chậu và cơ lõi như Plank tĩnh nhẹ nhàng, tránh các bài gập bụng gắt.' }
    ])
  },
  {
    id: 'ss_04',
    title: 'Chăm sóc vết mổ đẻ và vết khâu tầng sinh môn tránh nhiễm trùng tại nhà',
    category: 'Sau sinh',
    sub_category: 'Chăm sóc vết thương',
    tags: 'vết mổ đẻ,vết khâu tầng sinh môn,nhiễm trùng sau sinh,vệ sinh sau sinh',
    summary: 'Chăm sóc vết thương sau sinh đúng cách giúp giảm đau đớn, vết thương nhanh lành và không để lại sẹo lồi xấu xí. Tìm hiểu quy trình vệ sinh sát khuẩn chuẩn y tế tại nhà.',
    content: `### 1. Cách chăm sóc vết mổ đẻ an toàn tuyệt đối
*   **Giữ vết mổ luôn khô ráo:** Trong 48 giờ đầu, nhân viên y tế sẽ thay băng. Sau khi về nhà, mẹ có thể để hở vết mổ cho thông thoáng, tuyệt đối không đắp thuốc lá, lá cây dân gian lên vết mổ.
*   **Tắm rửa nhanh:** Khi tắm, nên tắm vòi sen nhanh, tránh ngâm bồn. Sau khi tắm, dùng gạc y tế sạch thấm nhẹ cho khô hoàn toàn vết mổ.
*   **Bôi kem trị sẹo đúng thời điểm:** Chỉ bôi kem silicon trị sẹo khi vết mổ đã khép miệng hoàn toàn và bong hết vảy (thường sau 3-4 tuần).

### 2. Vệ sinh vết khâu tầng sinh môn (đối với sinh thường)
*   **Rửa sạch sau mỗi lần đi vệ sinh:** Dùng bình xịt phun nước ấm nhẹ nhàng từ trước ra sau, sau đó dùng khăn xô sạch hoặc giấy vệ sinh mềm thấm khô. Tuyệt đối không thụt rửa sâu bên trong âm đạo.
*   **Xông hơi lá trầu không khoa học:** Tránh xông hơ quá nóng gây bỏng rát. Nước lá trầu không chỉ dùng rửa ngoài nhẹ nhàng sau khi nước đã nguội bớt để sát khuẩn.
*   **Mẹo giảm đau:** Ngồi trên phao tròn để tránh đè trực tiếp lên vết khâu, mặc quần lót cotton giấy thông thoáng dùng 1 lần.

### 3. Các dấu hiệu nhiễm trùng vết thương nguy hiểm
Mẹ cần lập tức quay lại bệnh viện nếu có các triệu chứng sau:
*   Vết thương sưng đỏ, nóng ran, rỉ dịch mủ hoặc máu có mùi hôi.
*   Cảm giác đau đớn tăng dần thay vì giảm đi sau mỗi ngày.
*   Mẹ bị sốt cao trên 38.5 độ C kèm run rẩy.`,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=80',
    views: 3870,
    likes: 310,
    created_at: '2026-04-10',
    author: 'Bác sĩ CKII Nguyễn Minh',
    faqs: JSON.stringify([
      { q: 'Chỉ khâu tầng sinh môn bao lâu thì tự tiêu?', a: 'Thông thường chỉ tự tiêu sẽ tự biến mất hoàn toàn trong vòng 2 - 3 tuần tùy thuộc vào cơ địa của từng mẹ.' },
      { q: 'Sinh mổ có cần kiêng ăn rau muống, thịt gà không?', a: 'Rau muống có thể làm tăng nguy cơ sẹo lồi, trứng làm loang màu da vết mổ, đồ nếp gây sưng mủ. Mẹ nên kiêng các món này trong tháng đầu tiên sau sinh.' }
    ])
  },
  {
    id: 'ss_05',
    title: 'Rụng tóc sau sinh kéo dài bao lâu? Nguyên nhân và cách khắc phục hiệu quả tại nhà',
    category: 'Sau sinh',
    sub_category: 'Chăm sóc sắc đẹp',
    tags: 'rụng tóc sau sinh,chăm sóc tóc,trị rụng tóc,nội tiết tố sau sinh',
    summary: 'Tóc rụng từng mảng lớn sau sinh khiến nhiều mẹ bỉm hoang mang lo lắng. Khám phá cơ chế nội tiết tố và các giải pháp chăm sóc giúp tóc nhanh mọc lại dày mượt sinh động.',
    content: `### 1. Nguyên nhân thực sự gây rụng tóc sau sinh
Khoảng 30% - 40% mẹ bỉm gặp tình trạng tóc rụng nhiều từ tháng thứ 2 đến tháng thứ 5 sau sinh. Đây là hiện tượng sinh lý hoàn toàn bình thường do:
*   **Sụt giảm estrogen đột ngột:** Trong thai kỳ, lượng estrogen cao giữ cho tóc ít rụng. Sau khi sinh, estrogen giảm nhanh khiến một lượng lớn nang tóc chuyển cùng lúc sang giai đoạn nghỉ (telogen) và rụng hàng loạt.
*   **Stress & Thiếu ngủ:** Chăm con nhỏ vất vả, đêm thức giấc nhiều lần kích thích sản sinh hormone cortisol phá hủy nang tóc.
*   **Thiếu hụt vi chất:** Sắt, Kẽm, Biotin tập trung cho việc tạo sữa mẹ, khiến nang tóc bị thiếu hụt dinh dưỡng.

### 2. Các giải pháp khắc phục chuẩn y khoa
*   **Bổ sung dinh dưỡng từ bên trong:** Uống đầy đủ vitamin tổng hợp bầu tiếp tục sau sinh. Ăn các thực phẩm giàu kẽm, biotin, sắt như trứng, thịt bò, các hạt dinh dưỡng, khoai lang.
*   **Thay đổi thói quen chải và gội đầu:**
    *   Sử dụng dầu gội thảo dược dịu nhẹ (bồ kết, vỏ bưởi, sả chanh), không chứa paraben và sulfate.
    *   Chỉ chải tóc bằng lược răng thưa khi tóc đã khô hoàn toàn. Tránh buộc tóc quá chặt làm tổn thương chân tóc.
*   **Sử dụng tinh dầu bưởi massage da đầu:** Xịt tinh dầu vỏ bưởi nguyên chất vào chân tóc mỗi tối và massage nhẹ nhàng để kích thích tuần hoàn máu nuôi nang tóc.

### 3. Hiện tượng rụng tóc bao lâu thì chấm dứt?
Rụng tóc sau sinh thường kéo dài từ 3 - 6 tháng và sẽ tự động thuyên giảm khi nội tiết tố cơ thể mẹ ổn định trở lại. Tóc sẽ mọc lại bình thường sau khoảng 1 năm. Nếu sau 1 năm tóc vẫn rụng nhiều không kiểm soát, mẹ nên đi khám kiểm tra tuyến giáp hoặc tình trạng thiếu máu nặng.`,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80',
    views: 4120,
    likes: 320,
    created_at: '2026-04-12',
    author: 'Dược sĩ Da liễu Thùy Trang',
    faqs: JSON.stringify([
      { q: 'Có nên đi nhuộm, uốn tóc để che bớt phần tóc rụng?', a: 'Tuyệt đối không nên làm hóa chất uốn nhuộm khi tóc đang rụng mạnh. Hóa chất độc hại sẽ thấm qua da đầu và làm suy yếu các nang tóc vốn đang nhạy cảm, khiến tóc rụng nghiêm trọng hơn.' },
      { q: 'Dầu gội bưởi tự nấu có thực sự hiệu quả?', a: 'Có hiệu quả rất tốt. Tinh dầu tự nhiên trong vỏ bưởi giúp sát khuẩn da đầu nhẹ nhàng và cung cấp dưỡng chất nuôi dưỡng nang tóc.' }
    ])
  },

  // ==========================================
  // 3. CHĂM SÓC BÉ (5 bài)
  // ==========================================
  {
    id: 'csb_01',
    title: 'Hướng dẫn tắm cho trẻ sơ sinh chưa rụng rốn an toàn, chuẩn y khoa từng bước',
    category: 'Chăm sóc bé',
    sub_category: 'Vệ sinh bé sơ sinh',
    tags: 'tắm bé sơ sinh,chăm sóc rốn,vệ sinh tai mắt cho bé,y khoa nhi',
    summary: 'Tắm bé sơ sinh chưa rụng rốn đòi hỏi sự cẩn thận tối đa để tránh nhiễm trùng rốn nguy hiểm. Hướng dẫn chi tiết từng bước chuẩn bị nước, bế bé và sát trùng rốn chuẩn bác sĩ nhi khoa.',
    content: `### 1. Chuẩn bị trước khi tắm bé
Để quá trình tắm diễn ra nhanh chóng, tránh bé bị lạnh, mẹ cần chuẩn bị đầy đủ:
*   **Phòng tắm kín gió:** Nhiệt độ phòng khoảng 28 - 29 độ C.
*   **Nước tắm ấm vừa phải:** Nhiệt độ nước chuẩn là **37 độ C** (dùng nhiệt kế đo nước hoặc thử bằng mặt trong cùi chỏ tay cảm thấy ấm dễ chịu).
*   **Dụng cụ tắm:** 2 thau nước ấm, sữa tắm bé dịu nhẹ pH trung tính, gạc vô trùng, tăm bông sạch, khăn xô lớn, quần áo ấm và tã sạch.

### 2. Quy trình tắm bé sơ sinh khoa học
Hãy ôm bé thật chắc chắn bằng cánh tay của bạn và thực hiện:
*   **Bước 1: Lau mắt, mặt và tai trước:**
    Dùng bông gòn thấm nước ấm lau sạch mắt bé từ khóe mắt ra đuôi mắt (mỗi mắt dùng một miếng bông riêng biệt). Lau sạch mặt và vành tai ngoài.
*   **Bước 2: Gội đầu:**
    Bế ngửa bé, dùng ngón tay cái và ngón trỏ của tay đỡ đầu bé ép nhẹ hai vành tai áp sát vào đầu để tránh nước chảy vào tai. Gội sạch da đầu bằng sữa tắm nhẹ, xả sạch nước và dùng khăn khô lau ngay lập tức.
*   **Bước 3: Tắm toàn thân:**
    Hạ người bé từ từ vào thau nước ấm (giữ đầu bé cao trên mặt nước). Lau sạch các vùng nếp gấp da cổ, nách, bẹn, bộ phận sinh dục và mông bé.
*   **Bước 4: Lau khô và mặc quần áo:**
    Nhấc bé ra đặt vào khăn lông lớn, thấm khô toàn thân nhẹ nhàng, nhanh chóng mặc quần áo, đeo bao tay chân.

### 3. Quy trình vệ sinh và chăm sóc rốn sau tắm
*   Dùng tăm bông sạch thấm nước muối sinh lý vô trùng lau nhẹ nhàng từ chân rốn ra ngoài thân rốn.
*   Để rốn hở hoàn toàn cho khô tự nhiên, tuyệt đối không băng kín rốn hoặc bôi phấn rôm lên rốn.
*   Gấp mép tã xuống dưới rốn để tránh nước tiểu của bé dính vào làm ướt chân rốn gây nhiễm trùng.`,
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77ebe?w=600&auto=format&fit=crop&q=80',
    views: 4980,
    likes: 420,
    created_at: '2026-04-15',
    author: 'Điều dưỡng trưởng khoa Nhi Lan Hương',
    faqs: JSON.stringify([
      { q: 'Trẻ sơ sinh rụng rốn muộn nhất là bao lâu?', a: 'Thông thường rốn sẽ rụng trong vòng 7 - 15 ngày sau khi sinh. Nếu sau 3 tuần rốn vẫn chưa rụng và có dấu hiệu rỉ nước vàng có mùi hôi, mẹ cần đưa bé đi khám.' },
      { q: 'Dấu hiệu rốn bé bị nhiễm trùng là gì?', a: 'Chân rốn sưng đỏ, chảy dịch vàng hoặc mủ có mùi hôi, rỉ máu liên tục, bé quấy khóc đau đớn khi chạm vào vùng rốn.' }
    ])
  },
  {
    id: 'csb_02',
    title: 'Lịch tiêm chủng cho trẻ từ 0 - 24 tháng tuổi đầy đủ và chuẩn xác nhất năm 2026',
    category: 'Chăm sóc bé',
    sub_category: 'Tiêm chủng phòng bệnh',
    tags: 'lịch tiêm chủng,vắc xin 6 trong 1,não mô cầu,sởi đơn,tiêm phòng cho bé',
    summary: 'Đừng để bỏ lỡ các mốc tiêm chủng vàng bảo vệ bé yêu khỏi các căn bệnh truyền nhiễm nguy hiểm. Bảng tổng hợp lịch tiêm chủng đầy đủ nhất cho trẻ sơ sinh đến 2 tuổi.',
    content: `### 1. Lịch tiêm chủng chi tiết theo tháng tuổi của bé
Hãy lưu lại các mốc quan trọng này để đưa bé đi tiêm phòng đầy đủ:
*   **Sơ sinh (24 giờ đầu):** Vắc-xin Viêm gan B mũi sơ sinh & Vắc-xin phòng Lao (BCG).
*   **2 tháng tuổi:**
    *   Uống Rotavirus mũi 1 (phòng tiêu chảy cấp).
    *   Tiêm vắc-xin phối hợp 6 trong 1 mũi 1 (Bạch hầu, ho gà, uốn ván, bại liệt, viêm gan B, Hib).
    *   Tiêm vắc-xin Phế cầu mũi 1 (phòng viêm phổi, viêm màng não).
*   **3 tháng tuổi:** Uống Rotavirus mũi 2 & Tiêm 6 trong 1 mũi 2.
*   **4 tháng tuổi:** Tiêm 6 trong 1 mũi 3 & Phế cầu mũi 2 (và uống Rota mũi 3 tùy loại).
*   **6 tháng tuổi:** Tiêm vắc-xin Cúm mũi 1 & vắc-xin Não mô cầu BC mũi 1.
*   **9 tháng tuổi:** Tiêm vắc-xin Sởi đơn (MVVac) hoặc phối hợp Sởi - Quai bị - Rubella (MMR) & Não mô cầu ACYW.
*   **12 tháng tuổi:** Tiêm vắc-xin Thủy đậu mũi 1 & Viêm não Nhật Bản mũi 1.
*   **18 tháng tuổi:** Tiêm nhắc lại 6 trong 1 mũi 4 & sởi-quai bị-rubella mũi 2.

### 2. Những lưu ý y khoa quan trọng trước và sau khi tiêm
*   **Trước khi tiêm:** Đảm bảo bé khỏe mạnh, không sốt cao, không đang điều trị bệnh cấp tính bằng corticoid. Báo với bác sĩ tiền sử dị ứng sữa, thuốc của bé (nếu có).
*   **Theo dõi tại trạm/bệnh viện:** Ở lại theo dõi phản ứng phản vệ ít nhất **30 phút** sau khi tiêm.
*   **Theo dõi tại nhà:** Quan sát nhịp thở, vết tiêm và thân nhiệt của bé liên tục trong 24-48 giờ đầu.

### 3. Cách chăm sóc bé bị sốt sau tiêm
*   Nhiệt độ dưới 38.5 độ C: Lau mát cho bé bằng nước ấm vùng nách, bẹn. Cho bé bú nhiều sữa mẹ hoặc uống nhiều nước.
*   Nhiệt độ trên 38.5 độ C: Cho bé uống thuốc hạ sốt Paracetamol liều 10-15mg/kg cân nặng mỗi 4-6 tiếng dưới sự hướng dẫn y khoa.`,
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&auto=format&fit=crop&q=80',
    views: 6540,
    likes: 588,
    created_at: '2026-04-18',
    author: 'Thạc sĩ Bác sĩ Nhi khoa Hữu Phước',
    faqs: JSON.stringify([
      { q: 'Bị trễ lịch tiêm chủng có phải tiêm lại từ đầu không?', a: 'Không. Nếu bé bị lỡ hoặc trễ lịch tiêm, chỉ cần tiêm tiếp tục các mũi còn thiếu càng sớm càng tốt chứ tuyệt đối không cần tiêm lại từ đầu.' },
      { q: 'Vết tiêm của bé bị sưng đỏ nổi cục cứng có sao không?', a: 'Đây là phản ứng viêm tại chỗ bình thường. Mẹ có thể chườm mát nhẹ nhàng, tuyệt đối không đắp chanh, khoai tây hay lá cây lên vết tiêm vì dễ gây nhiễm trùng hoại tử da.' }
    ])
  },
  {
    id: 'csb_03',
    title: 'Cách xử lý khi trẻ sơ sinh bị sốt sau tiêm phòng hoặc do sốt virus tại nhà',
    category: 'Chăm sóc bé',
    sub_category: 'Xử lý bệnh thường gặp',
    tags: 'bé bị sốt,hạ sốt cho bé,co giật do sốt,bệnh nhi khoa',
    summary: 'Trẻ sơ sinh bị sốt cao khiến cha mẹ vô cùng lo lắng, dễ lúng túng dẫn đến xử lý sai lầm nguy hiểm. Đọc ngay hướng dẫn hạ sốt an toàn và nhận biết dấu hiệu co giật cần đi cấp cứu.',
    content: `### 1. Định nghĩa chuẩn y khoa về tình trạng sốt ở trẻ
Sốt không phải là bệnh, mà là phản ứng phòng vệ có lợi của hệ miễn dịch chống lại tác nhân gây hại (virus, vi khuẩn). Thân nhiệt của trẻ được xác định là sốt khi đo được:
*   Nhiệt độ đo ở nách: Từ 37.5 độ C trở lên.
*   Nhiệt độ đo ở tai/hậu môn: Từ 38 độ C trở lên.

### 2. Quy trình xử lý hạ sốt khoa học từng bước tại nhà
*   **Khi bé sốt nhẹ (37.5 - 38.4 độ C):**
    *   Cho bé mặc quần áo mỏng nhẹ, rộng rãi bằng vải cotton thấm hút mồ hôi tốt. Không đắp chăn dày hoặc ủ ấm bé.
    *   Cho bé bú nhiều sữa mẹ hoặc uống nhiều nước ấm để bù lại lượng nước mất đi do sốt.
    *   Lau mát cho bé bằng khăn xô thấm nước ấm (khoảng 32-35 độ C) lau liên tục ở vùng trán, nách, bẹn của bé.
*   **Khi bé sốt cao (từ 38.5 độ C trở lên):**
    *   Tiếp tục lau mát bằng nước ấm.
    *   Cho bé uống thuốc hạ sốt **Paracetamol** đơn chất (liều lượng từ 10 - 15mg cho mỗi kg cân nặng của bé). Khoảng cách giữa các lần uống tối thiểu là 4 - 6 tiếng, không uống quá 4 lần/ngày.

### 3. Cảnh báo các sai lầm nguy hiểm khi hạ sốt cho con
*   **Chườm đá lạnh:** Nước đá lạnh làm co mạch ngoại vi đột ngột, khiến nhiệt lượng không thể thoát ra ngoài qua da, làm bé sốt cao hơn bên trong nội tạng và dễ gây viêm phổi.
*   **Tự ý dùng thuốc Aspirin hoặc Ibuprofen:** Tuyệt đối không dùng Aspirin vì có thể gây hội chứng Reye cực kỳ nguy hiểm tính mạng. Chỉ dùng Ibuprofen khi có chỉ định cụ thể của bác sĩ và bé trên 6 tháng tuổi.
*   **Lau cồn y tế:** Cồn bốc hơi nhanh có thể thấm qua làn da mỏng manh của trẻ sơ sinh gây ngộ độc cồn.`,
    image: 'https://images.unsplash.com/photo-1584515981504-035bb2a4a7cf?w=600&auto=format&fit=crop&q=80',
    views: 5890,
    likes: 490,
    created_at: '2026-04-20',
    author: 'Dr. Hải Anh',
    faqs: JSON.stringify([
      { q: 'Khi nào cần đưa trẻ bị sốt đi bệnh viện ngay?', a: 'Đưa bé đi viện ngay nếu: bé dưới 3 tháng tuổi bị sốt; sốt cao liên tục trên 39 độ không hạ sau khi uống thuốc; sốt kéo dài quá 3 ngày; bé ngủ li bì, khó đánh thức, co giật hoặc nôn mửa liên tục.' },
      { q: 'Trẻ bị co giật do sốt cao bố mẹ phải làm gì?', a: 'Đặt bé nằm nghiêng một bên nơi thông thoáng, nới lỏng quần áo để lưu thông đường thở. Tuyệt đối không nhét bất kỳ vật cứng nào (thìa, đũa) hoặc ngón tay vào miệng bé, không ghì chặt bé. Chờ cơn giật qua đi và đưa bé đi viện cấp cứu.' }
    ])
  },
  {
    id: 'csb_04',
    title: 'Hướng dẫn massage cho bé sơ sinh giúp ngủ ngon, hết đầy hơi táo bón hiệu quả',
    category: 'Chăm sóc bé',
    sub_category: 'Chăm sóc thể chất',
    tags: 'massage cho bé,trẻ sơ sinh đầy hơi,trị táo bón cho trẻ,bí quyết nuôi con',
    summary: 'Massage đều đặn mỗi ngày là liều thuốc tự nhiên tuyệt vời giúp kích thích nhu động ruột của bé khỏe mạnh, đánh bay khí ga gây chướng bụng và thư giãn hệ thần kinh giúp bé ngủ thẳng giấc.',
    content: `### 1. Thời điểm vàng để massage cho bé yêu
*   Hãy chọn lúc bé đang tỉnh táo, vui vẻ (khoảng 45 phút sau khi ăn hoặc sau khi tắm xong ấm áp).
*   Tránh tuyệt đối massage khi bé vừa bú no bụng (dễ gây nôn trớ trào ngược dạ dày) hoặc khi bé đang mệt mỏi quấy khóc, đang sốt.

### 2. Các động tác massage bụng đẩy hơi, trị táo bón sinh lý
Nhu động ruột của trẻ sơ sinh còn yếu, rất dễ tích tụ hơi thừa gây chướng bụng, đau bụng sinh lý (Colic). Hãy thực hiện:
*   **Động tác xoa bụng theo chiều kim đồng hồ:**
    Dùng ba đầu ngón tay của bạn đặt lên bụng bé, vuốt nhẹ nhàng theo vòng tròn quanh rốn theo chiều kim đồng hồ (đây là chiều di chuyển của đại tràng). Thực hiện lặp lại 30-50 lần giúp tăng nhu động ruột đẩy hơi ra ngoài.
*   **Động tác Đạp xe (Bicycle Legs):**
    Giữ hai cổ chân của bé, nhẹ nhàng gập luân phiên từng chân một sát vào bụng bé rồi duỗi thẳng ra như động tác đạp xe. Động tác này tạo lực ép nhẹ lên đại tràng giúp bé xì hơi nhanh chóng và dễ đi đại tiện.
*   **Động tác massage ngón chân:**
    Xoay tròn nhẹ ngón chân cái của bé, vì đây là vùng phản xạ thần kinh liên quan mật thiết đến hệ tiêu hóa.

### 3. Những chuẩn bị cần thiết của mẹ bầu và mẹ bỉm
*   Rửa tay thật sạch bằng xà phòng, tháo hết nhẫn, vòng tay sắc nhọn có thể làm xước da bé.
*   Làm ấm lòng bàn tay bằng cách xoa hai tay vào nhau trước khi chạm vào người bé.
*   Sử dụng một vài giọt dầu dừa tinh khiết ép lạnh để tay trượt mượt mà trên da bé.`,
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&auto=format&fit=crop&q=80',
    views: 4210,
    likes: 388,
    created_at: '2026-04-22',
    author: 'Kỹ thuật viên Phục hồi chức năng Nhi',
    faqs: JSON.stringify([
      { q: 'Trẻ sơ sinh bị đầy hơi xì hơi nhiều có sao không?', a: 'Bé xì hơi được là rất tốt, chứng tỏ khí thừa đang được tống xuất ra ngoài. Nếu bé xì hơi kèm quấy khóc đỏ mặt, co chân liên tục thì mới là biểu hiện đau bụng đầy hơi cần hỗ trợ massage.' },
      { q: 'Nên massage cho bé bao nhiêu phút mỗi lần?', a: 'Khoảng 5 - 10 phút cho trẻ dưới 3 tháng tuổi và có thể tăng lên 15 phút cho bé lớn hơn.' }
    ])
  },
  {
    id: 'csb_05',
    title: 'Rơ lưỡi cho trẻ sơ sinh bằng gì tốt nhất? Cách rơ lưỡi không gây nôn trớ cho bé',
    category: 'Chăm sóc bé',
    sub_category: 'Vệ sinh răng miệng',
    tags: 'rơ lưỡi trẻ sơ sinh,nấm miệng,tưa lưỡi,nước muối sinh lý,vệ sinh khoang miệng',
    summary: 'Rơ lưỡi cho bé sơ sinh giúp loại bỏ cặn sữa bám dày, ngăn ngừa bệnh tưa lưỡi nấm miệng gây đau đớn khiến bé lười bú. Hướng dẫn cách rơ lưỡi an toàn, nhẹ nhàng chuẩn nha khoa nhi.',
    content: `### 1. Tại sao phải rơ lưỡi thường xuyên cho trẻ sơ sinh?
Trẻ bú sữa mẹ hoặc sữa công thức hàng ngày sẽ để lại lớp cặn sữa màu trắng bám dày trên bề mặt lưỡi. Nếu không được làm sạch:
*   Cặn sữa sẽ lên men tạo môi trường cho nấm Candida Albicans phát triển gây ra bệnh tưa lưỡi (nấm miệng).
*   Nấm miệng làm lưỡi bé đau rát, chảy máu khi cọ xát, khiến bé sợ bú, bỏ bú và hay quấy khóc ban đêm.

### 2. Nên dùng nước gì để rơ lưỡi cho bé?
*   **Nước muối sinh lý 0.9%:** Là lựa chọn an toàn, lành tính nhất cho bé dưới 6 tháng tuổi dùng hàng ngày.
*   **Nước dịch chiết rau ngót rừng:** Chỉ dùng khi bé đã trên 6 tháng tuổi. Rau ngót cần được rửa cực sạch, trần qua nước sôi để tránh nhiễm khuẩn. Tuyệt đối không dùng mật ong cho trẻ dưới 1 tuổi vì chứa bào tử vi khuẩn Clostridium Botulinum gây ngộ độc liệt cơ hô hấp nguy hiểm tính mạng.
*   **Gạc rơ lưỡi thảo dược đóng gói sẵn:** Rất tiện lợi và an toàn vì đã được tiệt trùng vô khuẩn và tẩm dịch kháng khuẩn tự nhiên.

### 3. Các bước rơ lưỡi nhẹ nhàng không gây kích ứng nôn trớ
*   **Bước 1:** Rửa sạch tay mẹ. Đeo gạc xô vô trùng vào ngón tay trỏ, thấm ướt bằng nước muối sinh lý ấm.
*   **Bước 2:** Bế ngửa bé chắc chắn, đặt ngón tay mẹ lên môi bé rà nhẹ để bé tự động há miệng.
*   **Bước 3:** Lau nhẹ nhàng vùng nướu trên và nướu dưới trước, sau đó lau hai bên bên trong má, cuối cùng vuốt nhẹ bề mặt lưỡi từ trong ra ngoài. Không thọc sâu ngón tay vào họng bé vì sẽ kích thích phản xạ nôn trớ sữa.`,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=80',
    views: 4510,
    likes: 367,
    created_at: '2026-04-25',
    author: 'Bác sĩ Răng Hàm Mặt Nhi Thu Hằng',
    faqs: JSON.stringify([
      { q: 'Nên rơ lưỡi cho trẻ sơ sinh mấy lần một ngày?', a: 'Bé bú mẹ hoàn toàn chỉ cần rơ lưỡi 1 lần/ngày. Bé bú sữa công thức cần rơ lưỡi 2 lần/ngày do sữa công thức bám cặn sữa dày và dễ gây tưa lưỡi hơn.' },
      { q: 'Phân biệt giữa cặn sữa thường và bệnh tưa lưỡi nấm miệng?', a: 'Cặn sữa thường rất dễ lau sạch bằng gạc muối sinh lý ấm. Còn nấm tưa lưỡi là những mảng trắng bám rất chặt, khi mẹ cố lau sạch sẽ lộ ra vùng da đỏ ửng rướm máu và làm bé khóc đau đớn.' }
    ])
  },

  // ==========================================
  // 4. ĂN DẶM (5 bài)
  // ==========================================
  {
    id: 'ad_01',
    title: 'Phương pháp ăn dặm tự chỉ huy (BLW): Hướng dẫn bắt đầu cho bé từ 6 tháng tuổi',
    category: 'Ăn dặm',
    sub_category: 'Ăn dặm tự chỉ huy (BLW)',
    tags: 'ăn dặm tự chỉ huy,BLW,bắt đầu ăn dặm,dinh dưỡng cho bé 6 tháng',
    summary: 'Ăn dặm tự chỉ huy (Baby Led Weaning) giúp bé phát triển kỹ năng nhai nuốt, phối hợp tay mắt và tính tự lập sớm. Cùng tìm hiểu cách cắt thái rau củ và nguyên tắc an toàn y khoa.',
    content: `### 1. Ăn dặm tự chỉ huy (BLW) là gì?
BLW là phương pháp ăn dặm bỏ qua hoàn toàn giai đoạn ăn bột nhuyễn thìa đút. Bé sẽ tự ngồi trên ghế ăn dặm, tự dùng tay bốc các miếng thức ăn thô mềm có kích thước lớn bằng ngón tay do mẹ chuẩn bị và quyết định ăn gì, ăn bao nhiêu theo nhu cầu cơ thể.

### 2. Các lợi ích tuyệt vời của phương pháp BLW
*   **Phát triển vận động tinh:** Rèn luyện khả năng phối hợp nhịp nhàng giữa tay, mắt và miệng khi cầm nắm thức ăn đưa vào miệng chuẩn xác.
*   **Kích thích nhai nuốt sớm:** Bé học nhai bằng lợi cơ bản trước khi nuốt, giúp cơ hàm phát triển tốt, hỗ trợ quá trình tập nói sau này.
*   **Tránh biếng ăn tâm lý:** Bé không bị ép ăn, được tự do khám phá cấu trúc màu sắc mùi vị nguyên bản của thực phẩm.

### 3. Quy tắc cắt thái và chuẩn bị thức ăn an toàn
*   **Hình dáng chuẩn:** Cắt thức ăn thành các thanh dài bằng ngón tay người lớn (chiều dài khoảng 5-7cm) để bé dễ dàng cầm nắm trong lòng bàn tay và cắn phần nhô ra ngoài.
*   **Độ mềm tiêu chuẩn:** Thức ăn hấp chín mềm sao cho mẹ có thể dùng ngón tay cái và ngón trỏ bóp nhẹ là nát.
*   **Nguyên liệu khởi đầu:** Cà rốt, bí ngòi, súp lơ xanh hấp chín, bơ chín cắt lát dài, chuối lột vỏ một nửa.

### 4. Quy tắc an toàn y khoa phòng tránh hóc nghẹn
*   Bé phải ngồi thẳng lưng 90 độ trên ghế ăn dặm, tuyệt đối không cho ăn khi đang nằm, đang bò hay đang chơi chạy nhảy.
*   Phân biệt phản xạ ọe (gagging - phản xạ tự bảo vệ đường thở bình thường khi thức ăn thô chạm vào cuống lưỡi) với hóc dị vật (choking - tắc hoàn toàn đường thở, bé tím tái, không phát ra âm thanh).
*   **Không bao giờ để bé ăn một mình** mà không có sự giám sát trực tiếp của người lớn.`,
    image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&auto=format&fit=crop&q=80',
    views: 6890,
    likes: 612,
    created_at: '2026-04-28',
    author: 'Admin Mẹ Bỉm Thông Thái',
    faqs: JSON.stringify([
      { q: 'Bé chưa mọc răng có ăn dặm BLW được không?', a: 'Được. Lợi của trẻ sơ sinh 6 tháng tuổi rất cứng, kết hợp với dịch vị nước bọt hoàn toàn có thể nghiền nát rau củ hấp chín mềm dễ dàng.' },
      { q: 'Làm thế nào khi bé bị ọe khi ăn thô?', a: 'Học cách bình tĩnh quan sát. Khi bé ọe, bé sẽ tự động ho và đẩy thức ăn ra ngoài đầu lưỡi. Mẹ tuyệt đối không thọc tay vào họng bé vì sẽ đẩy thức ăn vào sâu hơn gây hóc thật sự.' }
    ])
  },
  {
    id: 'ad_02',
    title: 'Thực đơn ăn dặm kiểu Nhật cho bé từ 5 - 6 tháng tuổi đầy đủ dinh dưỡng từng tuần',
    category: 'Ăn dặm',
    sub_category: 'Ăn dặm kiểu Nhật',
    tags: 'ăn dặm kiểu Nhật,thực đơn ăn dặm 5 tháng,cháo rây,ăn riêng biệt',
    summary: 'Phương pháp ăn dặm kiểu Nhật chú trọng giữ nguyên hương vị tự nhiên và cho bé ăn riêng biệt từng loại thực phẩm. Hướng dẫn nấu cháo rây tỉ lệ 1:10 và thực đơn tuần đầu tiên khoa học.',
    content: `### 1. Triết lý cốt lõi của Ăn dặm kiểu Nhật
*   **Ăn riêng biệt:** Không trộn chung thịt rau cháo vào một bát như cháo truyền thống Việt Nam. Mỗi món ăn được đặt ở một ngăn/bát nhỏ riêng để bé nhận diện mùi vị thực tế từng loại.
*   **Không nêm gia vị:** Tuyệt đối không nêm muối, mắm, hạt nêm cho trẻ dưới 1 tuổi để bảo vệ thận chưa hoàn thiện của bé. Mùi vị được tạo tự nhiên từ nước dùng rau củ Dashi.
*   **Tăng dần độ thô khoa học:** Chuyển từ cháo rây mịn sang cháo nghiền thô, cháo nguyên hạt và cơm nát theo từng tháng tuổi.

### 2. Cách nấu cháo rây tỉ lệ 1:10 chuẩn Nhật
*   Tỉ lệ 1:10 có nghĩa là 1 phần gạo nấu với 10 phần nước (hoặc 1 phần cơm nóng với 5 phần nước).
*   **Cách làm:** Nấu chín cháo thật nhừ. Khi cháo còn ấm nóng, múc cháo đổ lên rây lọc kim loại, dùng muỗng xoa nhẹ nhàng để cháo mịn lọt xuống dưới thau. Bỏ phần bã xơ thô bên trên.

### 3. Thực đơn ăn dặm tuần thứ 1 và thứ 2
*   **Tuần 1 (Tập ăn):** Mỗi ngày chỉ ăn 1 bữa vào buổi sáng.
    *   Ngày 1-3: 1 muỗng cháo rây 1:10 (khoảng 5ml).
    *   Ngày 4-7: 2 muỗng cháo rây (10ml).
*   **Tuần 2 (Bổ sung rau củ):**
    *   Mỗi ngày ăn 15ml cháo rây kết hợp thêm 5ml rau củ rây riêng (cà rốt rây, bí đỏ rây hoặc khoai lang rây).`,
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&auto=format&fit=crop&q=80',
    views: 5210,
    likes: 432,
    created_at: '2026-05-01',
    author: 'Chuyên gia Dinh dưỡng Minh Hà',
    faqs: JSON.stringify([
      { q: 'Nước dùng Dashi rau củ bảo quản tủ lạnh được bao lâu?', a: 'Nước Dashi sau khi nấu và lọc sạch có thể trữ đông trong các khay đá đậy kín tối đa 1 tuần để dùng dần cho bé.' },
      { q: 'Tại sao không được nêm muối mắm cho bé dưới 1 tuổi?', a: 'Thận của trẻ sơ sinh dưới 1 tuổi có kích thước rất nhỏ và chức năng lọc chưa hoàn thiện. Lượng natri thừa từ mắm muối sẽ gây áp lực cực lớn làm suy thận và tăng huyết áp khi trẻ lớn lên.' }
    ])
  },
  {
    id: 'ad_03',
    title: 'Bé biếng ăn dặm: Nguyên nhân y khoa và giải pháp trị dứt điểm của chuyên gia dinh dưỡng',
    category: 'Ăn dặm',
    sub_category: 'Tâm lý ăn dặm',
    tags: 'bé biếng ăn,lười ăn dặm,giải pháp biếng ăn,thiếu kẽm ở trẻ',
    summary: 'Tình trạng bé quay đầu khóc thét khi thấy bát cháo là nỗi ám ảnh của mọi mẹ bỉm sữa. Tìm hiểu nguyên nhân biếng ăn sinh lý, biếng ăn bệnh lý và giải pháp thiết lập lại phản xạ thèm ăn tự nhiên.',
    content: `### 1. Phân loại nguyên nhân bé biếng ăn dặm
*   **Biếng ăn sinh lý:** Xuất hiện trùng vào các mốc phát triển nhảy vọt của trẻ (Wonder Weeks) như tập lật, tập bò, tập đứng mọc răng. Tình trạng này kéo dài khoảng 1-2 tuần rồi tự hết.
*   **Biếng ăn tâm lý (Phổ biến nhất):** Do cha mẹ ép ăn, quát mắng, đè ngửa đút cháo hoặc cho bé vừa ăn vừa xem điện thoại/tivi làm bé mất phản xạ tập trung nhai nuốt, sợ hãi mỗi khi đến bữa ăn.
*   **Biếng ăn bệnh lý:** Bé bị thiếu vi chất dinh dưỡng kéo dài (đặc biệt là Kẽm, Lysine, Vitamin nhóm B), bị viêm họng, tưa lưỡi rơ chưa sạch gây đau đớn khi nuốt.

### 2. Quy tắc 3 KHÔNG trị dứt điểm biếng ăn tâm lý
*   **KHÔNG ép ăn:** Nếu bé ngậm miệng, lắc đầu xua tay hoặc khóc ngằn ngặt sau 3 lần đút thử, mẹ hãy vui vẻ dọn dẹp bát đĩa ngay lập tức. Hãy tôn trọng dạ dày nhỏ bé của con. Con sẽ tự bù năng lượng vào bữa bú sữa sau.
*   **KHÔNG ăn rong, xem tivi, điện thoại:** Thiết lập bữa ăn nghiêm túc trên ghế ăn dặm. Không đồ chơi, không đi dạo bên ngoài. Bữa ăn chỉ kéo dài tối đa **30 phút**.
*   **KHÔNG kéo dài khoảng cách bú sữa quá gần bữa ăn:** Đảm bảo bữa ăn dặm cách cữ bú sữa trước đó ít nhất 2 - 2.5 giờ để bé có cảm giác đói thực sự.

### 3. Bổ sung vi chất dinh dưỡng khoa học
Mẹ có thể tham khảo ý kiến bác sĩ nhi khoa để bổ sung kẽm hữu cơ, lysine và men vi sinh chính hãng trong vòng 2-4 tuần để kích thích vị giác giúp con ăn ngon miệng tự nhiên.`,
    image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&auto=format&fit=crop&q=80',
    views: 7120,
    likes: 620,
    created_at: '2026-05-03',
    author: 'Viện Dinh Dưỡng Nhi Khoa',
    faqs: JSON.stringify([
      { q: 'Bé lười ăn cháo có nên cho uống sữa bù thay thế hoàn toàn không?', a: 'Không nên cho bú sữa ngay lập tức sau khi bé từ chối ăn dặm. Hãy đợi ít nhất 1.5 - 2 tiếng sau mới cho bú sữa để bé hiểu rằng từ chối ăn dặm không đồng nghĩa với việc được bú sữa ngay lập tức.' },
      { q: 'Bé mọc răng lười ăn bao lâu thì hết?', a: 'Thông thường cơn đau nướu do nhú răng chỉ kéo dài khoảng 3 - 5 ngày. Mẹ nên nấu cháo loãng ấm hoặc mát để bé dễ chịu.' }
    ])
  },
  {
    id: 'ad_04',
    title: 'Bảng thời gian cho bé ăn dặm trong ngày và lượng ăn tiêu chuẩn theo từng tháng tuổi',
    category: 'Ăn dặm',
    sub_category: 'Lịch trình ăn dặm',
    tags: 'lịch ăn dặm,lượng ăn dặm tiêu chuẩn,bé 6 tháng ăn bao nhiêu cháo',
    summary: 'Thiết lập thời gian biểu ăn dặm khoa học giúp dạ dày bé tiêu hóa tối ưu, tránh đầy bụng và không ảnh hưởng đến lượng sữa bú hàng ngày. Khám phá bảng lịch trình chuẩn từ 6-12 tháng.',
    content: `### 1. Nguyên tắc cân đối giữa Sữa và Ăn dặm dưới 1 tuổi
Mẹ cần nhớ rằng trong năm đầu đời, **sữa mẹ/sữa công thức vẫn là nguồn dinh dưỡng chính** (chiếm 60-70% tổng năng lượng). Ăn dặm chỉ là giai đoạn tập dượt hệ tiêu hóa làm quen với thức ăn đặc.

### 2. Bảng lịch trình ăn dặm chi tiết theo độ tuổi
*   **Giai đoạn 6 - 7 tháng tuổi (Tập ăn):**
    *   **Lượng ăn:** 1 bữa/ngày (khoảng 20-50ml cháo loãng + rau củ mịn).
    *   **Lịch trình mẫu:**
        *   7:00: Bú sữa mẹ/Sữa công thức.
        *   10:00: **Ăn dặm tập ăn**.
        *   12:00: Bú sữa mẹ.
        *   15:30: Bú sữa mẹ.
        *   19:00: Bú sữa mẹ.
*   **Giai đoạn 8 - 9 tháng tuổi (Tăng tốc):**
    *   **Lượng ăn:** 2 bữa/ngày (khoảng 80-120ml cháo đặc thô + đạm xay nhỏ).
    *   **Lịch trình mẫu:**
        *   7:00: Bú sữa.
        *   9:30: **Ăn dặm bữa 1**.
        *   12:00: Bú sữa.
        *   15:00: Ăn phụ nhẹ (trái cây, sữa chua).
        *   17:30: **Ăn dặm bữa 2**.
        *   20:00: Bú sữa ấm trước khi ngủ.

### 3. Lưu ý về việc uống nước lọc của bé ăn dặm
*   Bé 6 tháng tuổi chỉ cần uống khoảng 15-30ml nước lọc ấm sau bữa ăn dặm chủ yếu để tráng miệng sạch khoang họng. Không cho uống quá nhiều vì sẽ làm loãng dịch vị dạ dày và giảm bú sữa.`,
    image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=600&auto=format&fit=crop&q=80',
    views: 4560,
    likes: 399,
    created_at: '2026-05-05',
    author: 'Bác sĩ Dinh dưỡng Hoàng Phong',
    faqs: JSON.stringify([
      { q: 'Có nên cho bé ăn dặm lúc tối muộn không?', a: 'Không nên cho bé ăn dặm sau 19 giờ tối vì dạ dày bé cần ít nhất 2 tiếng để tiêu hóa thức ăn đặc. Ăn tối muộn sẽ khiến bé bị đầy bụng, khó chịu, trằn trọc mất ngủ ban đêm.' },
      { q: 'Lượng đạm tiêu chuẩn cho bé 7 tháng là bao nhiêu?', a: 'Chỉ cần khoảng 10-15g đạm nạc (thịt bò, heo, gà) băm nhuyễn mịn cho mỗi bữa ăn dặm.' }
    ])
  },
  {
    id: 'ad_05',
    title: 'Cách nấu cháo ăn dặm thơm ngon, giữ trọn dưỡng chất cho bé phát triển thể chất',
    category: 'Ăn dặm',
    sub_category: 'Cách nấu cháo ăn dặm',
    tags: 'cách nấu cháo,giữ dưỡng chất vitamin,nấu cháo ăn dặm khoa học',
    summary: 'Rất nhiều mẹ bỉm mắc sai lầm ninh rau củ, thịt thà quá lâu trong nồi cháo làm bay hơi hoàn toàn vitamin thiết yếu. Hướng dẫn công thức nấu cháo thông minh của đầu bếp nhi khoa.',
    content: `### 1. Sai lầm phổ biến khi nấu cháo cho con
Nhiều mẹ bỉm có thói quen cho tất cả thịt, rau, cháo vào nồi áp suất ninh nhừ hàng tiếng đồng hồ. Thói quen này làm phân hủy toàn bộ vitamin nhóm B, vitamin C nhạy cảm với nhiệt độ, cháo nồng vị khiến bé ngán.

### 2. Quy trình nấu cháo giữ trọn 100% vitamin & khoáng chất
Hãy áp dụng công thức nấu cháo khoa học sau:
*   **Bước 1: Nấu cháo trắng cốt riêng:** Nấu một nồi cháo trắng nhừ nguyên bản không nêm nếm. Trữ đông cháo trắng cốt trong khay chuyên dụng nếu mẹ bận rộn.
*   **Bước 2: Chế biến đạm (Thịt, cá, tôm):** Thịt nạc rửa sạch, xay nhuyễn với một chút nước lọc khi còn sống để tránh bị vón cục khi nấu. Cho thịt lên chảo đảo chín nhanh rồi tắt bếp.
*   **Bước 3: Chế biến rau củ:** Rau xanh xay/băm nhỏ. Chỉ thả rau vào nồi cháo khi cháo đã sôi bùng lên và **đun thêm tối đa 2-3 phút** cho rau vừa chín tới là tắt bếp ngay.
*   **Bước 4: Bổ sung chất béo lành mạnh:** Sau khi tắt bếp, xúc cháo ra bát, đợi cháo nguội bớt xuống khoảng 50 độ C thì mới khuấy thêm **1 muỗng cà phê dầu ăn dặm** (dầu cá hồi, dầu hạt lanh, dầu ô-liu). Chất béo giúp hòa tan các vitamin A, D, E, K dễ dàng.

### 3. Tại sao dầu ăn dặm lại bắt buộc?
Chất béo là nguồn cung cấp năng lượng mật độ cao và là thành phần cấu tạo nên bao myelin của dây thần kinh não bộ. Thiếu dầu ăn dặm kéo dài sẽ khiến bé bị còi xương, chậm lớn dù ăn nhiều cháo.`,
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&auto=format&fit=crop&q=80',
    views: 4890,
    likes: 412,
    created_at: '2026-05-08',
    author: 'Đầu bếp Nhi khoa Tuấn Hải',
    faqs: JSON.stringify([
      { q: 'Nên dùng loại dầu ăn dặm nào tốt nhất cho bé?', a: 'Nên luân phiên sử dụng dầu động vật (dầu cá hồi giàu DHA) và dầu thực vật (dầu óc chó, dầu hạt lanh giàu Omega-3) để bé được hấp thu đa dạng nhóm chất béo.' },
      { q: 'Cháo trắng trữ đông để ngăn đá tủ lạnh được bao lâu?', a: 'Mẹ có thể chia cháo trắng vào các hộp nhỏ đậy kín trữ đông ngăn đá tối đa 1 tháng. Khi ăn chỉ cần rã đông và đun nóng lại.' }
    ])
  },

  // ==========================================
  // 5. GIÁO DỤC SỚM (5 bài)
  // ==========================================
  {
    id: 'gds_01',
    title: 'Phương pháp giáo dục sớm Montessori: Cách áp dụng hiệu quả tại nhà cho trẻ 0 - 3 tuổi',
    category: 'Giáo dục sớm',
    sub_category: 'Phương pháp Montessori',
    tags: 'Montessori,giáo dục sớm,đồ chơi Montessori,rèn tự lập cho trẻ',
    summary: 'Giáo dục sớm Montessori tôn trọng cá tính tự nhiên và khơi gợi tiềm năng tự học hỏi của con trẻ qua giáo cụ chuyên biệt. Bí quyết thiết lập môi trường chuẩn Montessori tại nhà.',
    content: `### 1. Triết lý cốt lõi của Montessori
Học thuyết của bà Maria Montessori nhấn mạnh: *"Hãy giúp con tự làm lấy"*. Giáo dục sớm không phải là nhồi nhét chữ nghĩa kiến thức mà là tạo cơ hội cho con tự do khám phá thế giới trong một môi trường được chuẩn bị sẵn sàng, an toàn.

### 2. Thiết lập môi trường Montessori tại nhà siêu đơn giản
Cha mẹ có thể biến ngôi nhà của mình thành không gian học tập lý tưởng bằng cách:
*   **Thiết kế đồ dùng vừa tầm tay trẻ:** Sử dụng kệ đồ chơi mở có chiều cao thấp khoảng 2-3 tầng để bé tự chọn đồ chơi và tự cất dọn ngăn nắp sau khi chơi xong.
*   **Góc sinh hoạt độc lập:** Đặt một chiếc ghế nhỏ tự phục vụ tại bồn rửa mặt, trang bị giá treo khăn thấp để con tự rửa tay và lau mặt mỗi ngày.
*   **Hạn chế số lượng đồ chơi:** Trên kệ chỉ trưng bày từ 6-8 bộ đồ chơi/giáo cụ kích thích trí tuệ (như đồ chơi gỗ luồn hạt, xếp khối gỗ hình học). Quá nhiều đồ chơi sẽ khiến bé mất tập trung sâu.

### 3. Cách tương tác với con theo tinh thần Montessori
*   Quan sát không can thiệp: Hãy để con tự tìm cách giải quyết vấn đề (ví dụ con đang cố gắng xếp khối gỗ bị ngã, hãy kiên nhẫn quan sát, không làm thay con).
*   Tuyệt đối không khen ngợi sáo rỗng kiểu *"Con giỏi quá"* mà hãy khen ngợi hành động cụ thể: *"Bố thấy con đã rất kiên trì xếp lại khối gỗ này đến lần thứ ba đấy!"*.`,
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&auto=format&fit=crop&q=80',
    views: 5690,
    likes: 489,
    created_at: '2026-05-10',
    author: 'Chuyên gia Montessori Hồng Nhung',
    faqs: JSON.stringify([
      { q: 'Độ tuổi nào là tốt nhất để bắt đầu giáo dục sớm?', a: 'Giai đoạn từ 0 - 3 tuổi là "giai đoạn vàng" của não bộ phát triển nhanh nhất, bé học hỏi thế giới quan bằng xúc giác và thị giác vô thức cực nhạy bén.' },
      { q: 'Có cần mua các giáo cụ gỗ đắt tiền không?', a: 'Không bắt buộc. Mẹ có thể tự làm giáo cụ đơn giản từ đồ gia dụng như phân loại hạt đậu đỏ và hạt bắp, tập rót nước từ cốc này sang cốc khác bằng khay nhựa.' }
    ])
  },
  {
    id: 'gds_02',
    title: 'Học liệu Glenn Doman là gì? Hướng dẫn tráo thẻ đúng cách kích thích trí não của bé',
    category: 'Giáo dục sớm',
    sub_category: 'Glenn Doman',
    tags: 'Glenn Doman,tráo thẻ flashcard,kích thích não phải,phát triển ngôn ngữ',
    summary: 'Phương pháp Glenn Doman kích thích sự phát triển vượt trội của não phải trẻ sơ sinh thông qua các thẻ từ và thẻ chấm (Dot cards) tốc độ cao. Quy trình tráo thẻ đúng chuẩn y khoa tại nhà.',
    content: `### 1. Nguyên lý kích thích não phải bằng thẻ Glenn Doman
Não phải của trẻ sơ sinh dưới 3 tuổi có khả năng chụp hình ảnh chụp quét tốc độ cao vô cùng kỳ diệu. Việc tráo thẻ flashcard nhanh (dưới 1 giây/thẻ) giúp kích hoạt vùng não phải ghi nhớ hình ảnh nguyên khối, hỗ trợ phát triển ngôn ngữ, tư duy logic toán học từ sớm.

### 2. Hướng dẫn các bước tráo thẻ đúng chuẩn khoa học
*   **Bước 1: Chọn thời điểm vàng:** Tập khi con hoàn toàn tỉnh táo, vui vẻ, không đói và không buồn ngủ. Chỉ tập khoảng 1-2 phút mỗi cữ.
*   **Bước 2: Tư thế chuẩn:** Cho bé ngồi đối diện cách mẹ khoảng 45-50cm. Mẹ giữ thẻ ngang tầm mắt của bé.
*   **Bước 3: Tráo thẻ với tốc độ cực nhanh:** Đọc to rõ từ trên thẻ và tráo sang thẻ tiếp theo trong vòng **dưới 1 giây**. Tuyệt đối không dừng lại giải thích hay bắt bé đọc lại.
*   **Bước 4: Dừng lại trước khi bé chán:** Luôn dừng buổi học khi bé vẫn còn muốn xem tiếp để tạo cảm giác tò mò thích thú cho buổi học sau.

### 3. Những lỗi sai kinh điển khiến phương pháp thất bại
*   Tráo thẻ quá chậm (để bé ngắm nghía thẻ quá lâu sẽ chuyển sang kích hoạt não trái phân tích chậm chạp).
*   Kiểm tra bài cũ bằng cách hỏi con *"Đây là chữ gì?"*. Điều này tạo áp lực tâm lý làm con ghét học thẻ.`,
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&auto=format&fit=crop&q=80',
    views: 4120,
    likes: 310,
    created_at: '2026-05-12',
    author: 'Giảng viên Sư phạm Mầm non Thanh Thủy',
    faqs: JSON.stringify([
      { q: 'Trẻ mấy tháng tuổi có thể bắt đầu học Glenn Doman?', a: 'Có thể bắt đầu học từ 3 tháng tuổi bằng các thẻ chấm đỏ (Dot card) đơn giản để rèn luyện thị giác và khả năng đếm lượng của não bộ.' },
      { q: 'Học thẻ Glenn Doman có làm trẻ bị tự kỷ không?', a: 'Không. Tự kỷ là bệnh lý bẩm sinh. Glenn Doman là phương pháp tương tác, mẹ trò chuyện vui vẻ cùng con nên không hề gây tự kỷ.' }
    ])
  },
  {
    id: 'gds_03',
    title: 'Các trò chơi kích thích giác quan giúp trẻ từ 0 - 12 tháng tuổi thông minh vượt trội',
    category: 'Giáo dục sớm',
    sub_category: 'Kích thích giác quan',
    tags: 'kích thích ngũ quan,tummy time,trò chơi sơ sinh,trí thông minh bé',
    summary: 'Phát triển ngũ quan (thị giác, thính giác, xúc giác, khứu giác, vị giác) giúp khớp thần kinh não bộ của trẻ kết nối mạnh mẽ. Khám phá 5 trò chơi kích thích giác quan đơn giản nhất.',
    content: `### 1. Trò chơi "Tummy Time" (Nằm sấp) - Vua của các trò chơi vận động
Nằm sấp khi tỉnh táo là bài tập y khoa hàng đầu cho bé sơ sinh từ tháng đầu tiên:
*   **Lợi ích:** Rèn luyện cơ cổ, cơ lưng và vai chắc khỏe giúp bé nhanh biết lẫy, ngồi và bò bò; ngăn ngừa hội chứng bẹt đầu (móp đầu sinh lý) do nằm ngửa quá nhiều.
*   **Cách chơi:** Đặt bé nằm sấp trên thảm mềm hoặc trên ngực mẹ. Đặt các đồ chơi màu sắc sặc sỡ hoặc gương nhựa an toàn trước mặt bé để khuyến khích bé ngẩng đầu nhìn.

### 2. Trò chơi "Hộp Xúc Giác Kỳ Diệu" (Xúc giác)
*   **Cách chơi:** Chuẩn bị các miếng vải có cấu trúc chất liệu khác nhau (vải lông mềm, vải thô ráp, lụa trơn, gạc y tế). Vuốt nhẹ từng miếng vải lên lòng bàn tay, bàn chân và cơ thể bé để kích thích các cơ quan thụ cảm dưới da của con.

### 3. Trò chơi "Đuổi Theo Âm Thanh" (Thính giác)
*   **Cách chơi:** Dùng xúc xắc hoặc chuông nhỏ lắc nhẹ ở bên trái đầu bé, đợi bé quay đầu tìm kiếm nguồn âm thanh thì khen ngợi nhẹ nhàng. Sau đó chuyển sang bên phải. Trò chơi giúp rèn luyện khả năng xác định hướng âm thanh của bé.`,
    image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&auto=format&fit=crop&q=80',
    views: 4890,
    likes: 420,
    created_at: '2026-05-14',
    author: 'Dr. Hải Anh',
    faqs: JSON.stringify([
      { q: 'Trẻ sơ sinh nằm sấp tối đa bao nhiêu phút một ngày?', a: 'Bắt đầu từ 1-2 phút/lần ngay sau khi rụng rốn và tăng dần lên tổng số 15 - 20 phút mỗi ngày khi bé lớn hơn.' },
      { q: 'Có nên cho trẻ nằm sấp khi ngủ không?', a: 'Tuyệt đối không. Chỉ cho bé nằm sấp khi bé hoàn toàn tỉnh táo và có sự giám sát của người lớn để tránh hội chứng đột tử ở trẻ sơ sinh (SIDS).' }
    ])
  },
  {
    id: 'gds_04',
    title: 'Phương pháp Easy Baby và rèn tự lập cho trẻ từ những năm tháng đầu đời',
    category: 'Giáo dục sớm',
    sub_category: 'Rèn luyện nếp sống',
    tags: 'chu kỳ EASY,rèn tự ngủ,nuôi con EASY,tự lập từ nhỏ',
    summary: 'Chu kỳ sinh hoạt EASY (Eat - Activity - Sleep - Your time) là nền tảng tuyệt vời giúp con thiết lập nhịp sinh học ổn định và hình thành tính tự lập từ sơ sinh cực kỳ khoa học.',
    content: `### 1. Chu kỳ sinh hoạt EASY là gì?
EASY là chuỗi hoạt động lặp đi lặp lại có tính chu kỳ trong ngày của bé:
*   **E (Eat):** Bé ngủ dậy được bú sữa no nê.
*   **A (Activity):** Bé được chơi vận động (tummy time, tắm rửa, trò chuyện giác quan).
*   **S (Sleep):** Mẹ đặt bé tự ngủ một mình trên nôi cũi mà không cần bế ru ẵm hay ngậm ti sữa.
*   **Y (Your time):** Thời gian rảnh rỗi của mẹ bỉm để nghỉ ngơi, chăm sóc bản thân.

### 2. Lợi ích khoa học của chu kỳ EASY
*   **Giúp dạ dày bé hoạt động tốt:** Ăn ra ăn, ngủ ra ngủ, tránh tình trạng ăn vặt ngủ vặt làm đầy hơi, biếng ăn sinh lý.
*   **Rèn luyện tính tự lập:** Bé học cách tự chuyển giấc và tự đưa mình vào giấc ngủ sâu mà không bị phụ thuộc vào các công cụ hỗ trợ nhân tạo (như ngậm ti giả, bế đưa võng lắc mạnh).
*   **Mẹ chủ động cuộc sống:** Mẹ biết chính xác khi nào con đói, khi nào con buồn ngủ để sắp xếp công việc cá nhân khoa học.

### 3. Cách bắt đầu chu kỳ EASY 3 cho trẻ 0 - 3 tháng tuổi
*   Khoảng cách giữa các cữ ăn là **3 giờ/lần**.
*   Thời gian thức chơi tối đa của bé là **1 giờ - 1.5 giờ** (bao gồm cả thời gian ăn sữa).
*   Thời gian ngủ mỗi giấc ban ngày khoảng **1.5 giờ - 2 giờ**.`,
    image: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?w=600&auto=format&fit=crop&q=80',
    views: 6100,
    likes: 532,
    created_at: '2026-05-16',
    author: 'Chuyên gia luyện ngủ EASY Bảo Ngọc',
    faqs: JSON.stringify([
      { q: 'Rèn con ngủ theo EASY có cần dùng phương pháp Cry It Out (Để mặc con khóc) không?', a: 'Không bắt buộc. Mẹ có thể áp dụng các phương pháp dịu nhẹ hơn như tự ngủ nút cổ chũn kết hợp phương pháp vỗ về dập dình để bé học tự ngủ mà không cần khóc quá nhiều.' },
      { q: 'Mấy tuần tuổi có thể luyện EASY cho con?', a: 'Có thể áp dụng nếp sinh hoạt EASY từ tuần thứ 3 sau sinh khi cân nặng của bé đã phục hồi sinh lý tốt.' }
    ])
  },
  {
    id: 'gds_05',
    title: 'Lợi ích tuyệt vời của việc đọc sách cho bé sơ sinh nghe mỗi ngày và chọn sách phù hợp',
    category: 'Giáo dục sớm',
    sub_category: 'Đọc sách tương tác',
    tags: 'đọc sách cho trẻ sơ sinh,sách vải,sách tương tác,phát triển ngôn ngữ',
    summary: 'Đọc sách cho trẻ từ sơ sinh là phương pháp rẻ nhất và tốt nhất để làm giàu vốn từ vựng, kích thích trí tưởng tượng phong phú và gắn kết sợi dây tình cảm mẫu tử thiêng liêng.',
    content: `### 1. Não bộ trẻ hưởng lợi gì từ việc đọc sách sớm?
Nhiều cha mẹ lầm tưởng trẻ sơ sinh chưa hiểu gì nên đọc sách là vô ích. Thực tế y khoa chỉ ra:
*   **Làm giàu vốn từ vựng thu động:** Trẻ sơ sinh nghe giọng nói của mẹ đọc sách sẽ tích lũy kho từ vựng khổng lồ trong vỏ não, giúp trẻ biết nói sớm và nói lưu loát hơn.
*   **Phát triển thị giác thần tốc:** Sách có độ tương phản đen trắng cao giúp kích thích võng mạc phát triển nhanh chóng trong 3 tháng đầu.
*   **Tạo phản xạ tập trung:** Hình thành thói quen ngồi yên tĩnh lật dở trang sách, tăng khả năng tập trung chú ý khi lớn lên.

### 2. Cách chọn sách chuẩn theo từng giai đoạn phát triển của bé
*   **Giai đoạn 0 - 3 tháng tuổi:**
    Chọn sách tương phản cao (đen - trắng - đỏ), họa tiết hình khối lớn để bé tập trung tiêu cự mắt.
*   **Giai đoạn 4 - 6 tháng tuổi (Khám phá xúc giác):**
    Ưu tiên **Sách Vải** mềm sột soạt có đính kèm các chất liệu sần sùi lông thú để bé thỏa sức sờ mó, gặm nhấm an toàn mà không sợ rách sách.
*   **Giai đoạn 7 - 12 tháng tuổi:**
    Chọn dòng sách tương tác (Sách Lật Mở - Lift the flap, sách âm thanh, sách chuyển động) kích thích sự tò mò của bé tìm kiếm vật ẩn giấu sau các bức tranh.

### 3. Phương pháp đọc sách tương tác "Chỉ & Gọi"
*   Không chỉ đọc suông chữ nghĩa trên sách. Hãy dùng ngón tay của bạn chỉ vào hình vẽ to rõ và gọi tên biểu cảm: *"Xem này con, chú chó nhỏ màu vàng đang vẫy đuôi gâu gâu vui vẻ đấy!"*. Giọng đọc ấm áp truyền cảm của mẹ là âm thanh tuyệt vời nhất của bé.`,
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&auto=format&fit=crop&q=80',
    views: 3890,
    likes: 312,
    created_at: '2026-05-18',
    author: 'Nhà sáng lập Góc Sách Cho Con',
    faqs: JSON.stringify([
      { q: 'Trẻ sơ sinh có xu hướng ngậm, gặm sách thì phải làm sao?', a: 'Đây là phản xạ khám phá thế giới bằng xúc giác khoang miệng bình thường của trẻ sơ sinh. Mẹ hãy dùng Sách vải tiệt trùng an toàn để con tự do gặm gặm.' },
      { q: 'Mỗi ngày nên đọc sách cho con bao nhiêu phút?', a: 'Chỉ cần khoảng 5 - 10 phút trước giờ đi ngủ mỗi tối để tạo thói quen thư giãn giấc ngủ cho con.' }
    ])
  },

  // ==========================================
  // 6. TÂM LÝ TRẺ EM (5 bài)
  // ==========================================
  {
    id: 'tl_01',
    title: 'Khủng hoảng tuổi lên 2 (Terrible Twos): Tuyệt chiêu giúp cha mẹ cùng con vượt qua êm đẹp',
    category: 'Tâm lý trẻ em',
    sub_category: 'Khủng hoảng phát triển',
    tags: 'khủng hoảng tuổi lên 2,trẻ ăn vạ,tâm lý trẻ 2 tuổi,kỷ luật tích cực',
    summary: 'Hiện tượng bé 2 tuổi đột ngột trở nên bướng bỉnh, hay ăn vạ gào khóc thét và liên tục nói "Không!" là bước chuyển tâm lý hoàn toàn bình thường. Mẹo xoa dịu cơn giận của con khoa học.',
    content: `### 1. Tại sao lại gọi là "Khủng hoảng tuổi lên 2"?
Ở độ tuổi lên 2, trẻ bắt đầu nhận thức được cái tôi độc lập của mình. Con muốn tự làm mọi thứ theo ý mình nhưng khả năng ngôn ngữ còn hạn chế, chưa thể diễn tả được cảm xúc phức tạp bên trong dẫn đến sự ức chế bùng nổ bằng hành vi gào khóc ăn vạ, ném đồ chơi, cấu xé.

### 2. Các bước xoa dịu cơn ăn vạ ăn vạ khoa học
Khi con bắt đầu nổi giận gào khóc gào khóc ăn vạ giữa chỗ đông người, cha mẹ hãy áp dụng quy trình:
*   **Bước 1: Giữ bình tĩnh tuyệt đối:** Cơn giận dữ của bạn chỉ làm con sợ hãi hoặc kích động gào to hơn. Hít một hơi thật sâu để giữ giọng nói ôn hòa.
*   **Bước 2: Di chuyển con đến nơi an toàn:** Đưa con ra khỏi nơi ồn ào hoặc nguy hiểm (như gần đường lộ, bàn ăn thủy tinh) để con có không gian hạ hỏa.
*   **Bước 3: Công nhận cảm xúc của con:** Ngồi xuống ngang tầm mắt con, ôm nhẹ nhàng nếu con đồng ý và nói: *"Bố biết con đang rất tức giận vì không được mua chiếc ô tô này đúng không? Con cứ khóc đi, bố ở ngay bên cạnh con đây."*.
*   **Bước 4: Đánh lạc hướng thông minh:** Khi con bắt đầu khóc nhỏ lại, hãy hướng sự chú ý của con sang một hoạt động thú vị khác: *"Xem kìa con, chú mèo ngoài sân đang trèo cây nhanh quá kìa!"*.

### 3. Những sai lầm kinh điển cần tránh
*   Quát mắng bạo lực, đánh con (chỉ dạy con rằng bạo lực là cách giải quyết vấn đề).
*   **Nhượng bộ nuông chiều:** Mua đồ chơi hoặc đáp ứng yêu cầu của con ngay khi con khóc gào ăn vạ. Điều này vô tình dạy con hiểu rằng *"Cứ khóc gào là sẽ có được mọi thứ mình muốn"*.`,
    image: 'https://images.unsplash.com/photo-1484665754804-74b091211472?w=600&auto=format&fit=crop&q=80',
    views: 6540,
    likes: 543,
    created_at: '2026-05-19',
    author: 'Chuyên gia Tâm lý Trẻ em Khánh An',
    faqs: JSON.stringify([
      { q: 'Khủng hoảng tuổi lên 2 thường kéo dài bao lâu?', a: 'Tình trạng này có thể bắt đầu từ 18 tháng và kéo dài đến hết 3 tuổi. Khi ngôn ngữ của bé phát triển phong phú, tình trạng ăn vạ sẽ tự động giảm dần.' },
      { q: 'Làm thế nào để phòng ngừa cơn ăn vạ trước khi xảy ra?', a: 'Hãy cho con quyền lựa chọn giới hạn. Ví dụ thay vì ra lệnh *"Đi tắm ngay!"*, mẹ hãy hỏi: *"Con muốn mang chú vịt vàng hay chiếc tàu thủy đi tắm cùng nào?"*.' }
    ])
  },
  {
    id: 'tl_02',
    title: 'Cách xử lý khi con bướng bỉnh, không nghe lời bằng phương pháp kỷ luật không nước mắt',
    category: 'Tâm lý trẻ em',
    sub_category: 'Kỷ luật tích cực',
    tags: 'kỷ luật không nước mắt,trẻ bướng bỉnh,nuôi dạy con tích cực',
    summary: 'Kỷ luật tích cực không đồng nghĩa với đòn roi hay quát mắng nặng lời. Khám phá các công cụ tâm lý giúp trẻ tự nguyện lắng nghe và tuân thủ các quy tắc gia đình một cách vui vẻ.',
    content: `### 1. Bản chất thực sự của sự bướng bỉnh ở trẻ
Sự bướng bỉnh không phải là tính cách xấu bẩm sinh, đó thường là cách trẻ thử nghiệm các giới hạn quyền lực của cha mẹ hoặc do phương pháp giao tiếp của cha mẹ chưa phù hợp (ra lệnh quá nhiều, giải thích quá mơ hồ).

### 2. Top 3 công cụ kỷ luật không nước mắt hiệu quả nhất
*   **Hệ thống "Góc Bình Yên" (Time-out tích cực):**
    Khi con có hành vi bạo lực (đánh bạn, cắn người), hãy đưa con ra ngồi ở "Góc Bình Yên" (một góc phòng có đệm mềm, truyện tranh nhẹ nhàng). Số phút ngồi bằng đúng số tuổi của con (ví dụ 3 tuổi ngồi 3 phút) để con bình tâm tự điều chỉnh cảm xúc, tuyệt đối không dùng góc tối dọa nạt con.
*   **Thiết lập quy tắc "Nếu... Thì...":**
    Đặt ra các thỏa thuận rõ ràng rõ ràng trước khi hành động: *"Nếu con thu dọn xong đồ chơi gỗ này, thì chúng ta sẽ cùng đi công viên chơi nhé. Nếu con không dọn, thì đồ chơi sẽ được cất vào tủ khóa lại trong ngày hôm nay."*.
*   **Sử dụng ngôn ngữ khẳng định thay vì cấm đoán:**
    Thay vì la hét *"Không được chạy nhảy!"*, mẹ hãy nói nhẹ nhàng: *"Con hãy đi bộ chậm rãi trong nhà nhé"*. Não bộ của trẻ phản xạ rất chậm với từ phủ định.

### 3. Nhất quán trong cách dạy con
Điều quan trọng nhất của kỷ luật là sự thống nhất giữa bố, mẹ và ông bà. Nếu mẹ phạt cất đồ chơi mà bố hoặc ông bà lại lấy ra đưa cho bé, bé sẽ học cách đối phó và không bao giờ tôn trọng các quy tắc của gia đình nữa.`,
    image: 'https://images.unsplash.com/photo-1536640712247-c5780dfd403f?w=600&auto=format&fit=crop&q=80',
    views: 4890,
    likes: 412,
    created_at: '2026-05-20',
    author: 'Tác giả Sách Giáo Dục Gia Đình',
    faqs: JSON.stringify([
      { q: 'Phương pháp Time-out có làm tổn thương tâm lý trẻ không?', a: 'Chỉ tổn thương nếu mẹ dùng nó để trừng phạt bêu rếu con. Nếu mẹ giải thích trước rằng đó là góc để con bình tĩnh lại và vẫn ôm con sau khi hết thời gian, phương pháp sẽ vô cùng an toàn và nhân văn.' },
      { q: 'Con 1 tuổi có áp dụng kỷ luật tích cực được chưa?', a: 'Dưới 1 tuổi bé chưa có tư duy logic để hiểu các hình phạt. Biện pháp tốt nhất ở độ tuổi này là hướng sự chú ý của bé sang việc khác và cất các vật nguy hiểm lên cao.' }
    ])
  },
  {
    id: 'tl_03',
    title: 'Trầm cảm ở trẻ nhỏ: Những dấu hiệu cảnh báo tinh thần cha mẹ chớ nên bỏ qua',
    category: 'Tâm lý trẻ em',
    sub_category: 'Sức khỏe tâm thần trẻ em',
    tags: 'trầm cảm trẻ em,sức khỏe tâm thần,dấu hiệu trầm cảm trẻ nhỏ,tâm lý nhi khoa',
    summary: 'Rối loạn lo âu và trầm cảm không chỉ xảy ra ở người lớn mà ngày càng trẻ hóa. Đọc ngay các biểu hiện thay đổi hành vi đột ngột của con để đồng hành và cứu lấy tinh thần của con kịp thời.',
    content: `### 1. Trầm cảm ở trẻ nhỏ là gì?
Trầm cảm ở trẻ em là tình trạng rối loạn tâm trạng dai dẳng, ảnh hưởng nghiêm trọng đến cách trẻ suy nghĩ, cảm nhận cảm xúc và tham gia vào các hoạt động học tập vui chơi hàng ngày. Trẻ nhỏ thường chưa đủ vốn từ để nói rằng *"Con đang buồn"*, nên bệnh thường biểu hiện qua sự thay đổi hành vi cơ thể đột ngột.

### 2. Các dấu hiệu cảnh báo đỏ cha mẹ cần đặc biệt lưu tâm
*   **Thay đổi thói quen ăn ngủ:** Con đột ngột mất ngủ kéo dài, hay gặp ác mộng hoặc ngủ li bì cả ngày; chán ăn bỏ bữa hoặc ăn vô tội vạ không kiểm soát.
*   **Thu mình lập dị:** Tránh xa bạn bè, không muốn tham gia các trò chơi tập thể trước đây con từng rất thích.
*   **Cảm xúc thất thường cực đoan:** Dễ nổi giận lôi đình, đập phá đồ đạc hoặc thường xuyên khóc lóc tủi thân chỉ vì những rắc rối cực kỳ nhỏ.
*   **Suy giảm thể chất kéo dài vô cớ:** Con liên tục kêu đau đầu, đau bụng âm ỉ dai dẳng mà khi đưa đi khám thực thể, siêu âm xét nghiệm bác sĩ không tìm ra bất kỳ tổn thương thực thể nào.

### 3. Cha mẹ nên làm gì để đồng hành cùng con?
*   **Lắng nghe tích cực:** Dành ra ít nhất 15 phút mỗi tối tắt hoàn toàn điện thoại, ôm con vào lòng và trò chuyện hỏi han về một ngày của con.
*   **Không phán xét hay coi thường cảm xúc của trẻ:** Tuyệt đối tránh nói: *"Có chuyện nhỏ nhặt thế mà cũng buồn khóc gào, sướng quá hóa rồ à!"*.
*   **Đưa con đi khám chuyên khoa tâm thần nhi:** Nếu các dấu hiệu kéo dài trên 2 tuần, hãy chủ động đưa con đến các bệnh viện nhi uy tín có khoa tâm lý trị liệu để được can thiệp sớm.`,
    image: 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=600&auto=format&fit=crop&q=80',
    views: 3120,
    likes: 278,
    created_at: '2026-05-21',
    author: 'Bác sĩ Tâm thần Nhi khoa Minh Quân',
    faqs: JSON.stringify([
      { q: 'Trẻ mấy tuổi có thể bị trầm cảm?', a: 'Nghiên cứu chỉ ra trẻ em từ 3 tuổi trở lên đã có thể xuất hiện các triệu chứng rối loạn cảm xúc và trầm cảm do áp lực gia đình hoặc môi trường xung quanh.' },
      { q: 'Bạo lực gia đình ảnh hưởng thế nào đến tâm lý trẻ?', a: 'Chứng kiến cha mẹ cãi vã, bạo lực là vết sẹo tâm lý sâu sắc nhất phá hủy hệ thần kinh chưa hoàn thiện của trẻ, đẩy trẻ vào nguy cơ trầm cảm lo âu cực cao.' }
    ])
  },
  {
    id: 'tl_04',
    title: 'Giúp trẻ tự tin giao tiếp và vượt qua nỗi sợ người lạ ở các giai đoạn phát triển',
    category: 'Tâm lý trẻ em',
    sub_category: 'Kỹ năng xã hội',
    tags: 'trẻ sợ người lạ,giao tiếp tự tin,tâm lý trẻ nhỏ,kết bạn mầm non',
    summary: 'Nỗi sợ hãi người lạ là phản xạ sinh lý hoàn toàn bình thường báo hiệu sự phát triển nhận thức của bé. Hướng dẫn cha mẹ cách giúp con tự tin hòa nhập môi trường mới thông minh.',
    content: `### 1. Hiểu đúng về nỗi sợ người lạ của con
Khoảng 6 - 8 tháng tuổi, trẻ sơ sinh bắt đầu biết phân biệt rõ ràng giữa khuôn mặt của người chăm sóc thân thuộc (cha mẹ, ông bà) và người lạ xung quanh. Nỗi sợ người lạ bùng nổ mạnh mẽ là minh chứng cho thấy não bộ của con đang phát triển nhận thức và tự vệ rất tốt, không phải là biểu hiện của sự nhút nhát nhút nhát bẩm sinh.

### 2. Các bước giúp con làm quen với người lạ tinh tế
*   **Không bao giờ ép buộc con:** Tránh hành động giật con từ tay mẹ đưa ngay sang cho một người bạn lạ bế ẵm khi con đang khóc thét sợ hãi.
*   **Quy tắc "Cầu Nối Ấm Áp":**
    Mẹ hãy bế con trên tay, trò chuyện vui vẻ thân thiết với người lạ trước mặt con để con quan sát và hiểu rằng: *"Người này an toàn, mẹ rất tin tưởng họ"*.
*   **Tạo khoảng cách tôn trọng:** Người lạ không nên vồ vập tiến sát lại gần mà nên ngồi ở khoảng cách xa, dùng đồ chơi lắc nhẹ để thu hút sự chú ý tự nhiên của bé.

### 3. Rèn luyện sự tự tin giao tiếp hàng ngày
*   Đưa con đi chơi công viên, sân chơi chung thường xuyên để con có cơ hội quan sát các bạn cùng lứa chơi đùa đùa.
*   Cho con tham gia các lớp học nhóm mầm non từ sớm để làm quen với nếp sinh hoạt tập thể.`,
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=600&auto=format&fit=crop&q=80',
    views: 4120,
    likes: 356,
    created_at: '2026-05-21',
    author: 'Cô giáo mầm non Thu Thủy',
    faqs: JSON.stringify([
      { q: 'Có nên gán nhãn con nhút nhát trước mặt người khác?', a: 'Tuyệt đối không nên nói: *"Bé nhà em nhút nhát rụt rè lắm!"* trước mặt con. Việc này vô tình gán mác tâm lý làm con tự ti và mặc định mình là người rụt rè thực sự.' },
      { q: 'Nỗi sợ người lạ thường kết thúc khi nào?', a: 'Thường nỗi sợ sẽ thuyên giảm rõ rệt sau 2 tuổi khi con đã phát triển tốt kỹ năng ngôn ngữ giao tiếp.' }
    ])
  },
  {
    id: 'tl_05',
    title: 'Phương pháp xây dựng trí thông minh cảm xúc (EQ) cho trẻ từ khi còn nhỏ',
    category: 'Tâm lý trẻ em',
    sub_category: 'Thông minh cảm xúc (EQ)',
    tags: 'thông minh cảm xúc EQ,phát triển tâm hồn,nuôi dạy con thành công',
    summary: 'Trí thông minh cảm xúc EQ quyết định 80% sự thành công và hạnh phúc của một con người khi trưởng thành. Tìm hiểu cách giúp con nhận diện và quản lý cảm xúc cá nhân xuất sắc.',
    content: `### 1. EQ là gì và tại sao lại quan trọng hơn cả IQ?
EQ (Emotional Quotient) là khả năng nhận biết, thấu hiểu và quản lý cảm xúc của chính mình, đồng thời biết đồng cảm với cảm xúc của người xung quanh. Trẻ có EQ cao sẽ biết cách xử lý xung đột êm đẹp, tự tin giao tiếp xã hội và có khả năng phục hồi tinh thần sau những thất bại rất nhanh.

### 2. Các bước vàng rèn luyện EQ cho con từ sơ sinh
*   **Bước 1: Gọi tên cảm xúc rõ ràng:**
    Khi con khóc gào tức giận hay buồn tủi, hãy giúp con gọi tên cảm xúc đó để con hiểu: *"Bố thấy con đang rất tức giận vì món đồ chơi gỗ bị hỏng đúng không? Cảm giác đó gọi là BỰC BỘI đấy con ạ."*.
*   **Bước 2: Chấp nhận cảm xúc nhưng giới hạn hành vi:**
    Luôn cho phép con được có mọi cảm xúc nhưng nghiêm cấm các hành vi sai trái: *"Con có quyền buồn và khóc, nhưng con không được phép ném đồ chơi gỗ hay đánh mẹ"*.
*   **Bước 3: Hướng dẫn giải tỏa cảm xúc lành mạnh:**
    Dạy con cách hít thở sâu 3 nhịp khi chuẩn bị nổi giận, hoặc ôm chú gấu bông xoa dịu, vẽ tranh để xả bớt năng lượng tiêu cực ra ngoài.
*   **Bước 4: Rèn luyện lòng đồng cảm:**
    Hãy chỉ vào một nhân vật trong truyện tranh và hỏi con: *"Con xem chú thỏ nhỏ đang khóc kìa, con nghĩ chú đang cảm thấy thế nào? Chúng ta có thể làm gì để giúp chú vui lên nhỉ?"*.

### 3. Gương sáng từ cha mẹ
Trẻ con là tấm gương phản chiếu hành vi của cha mẹ. Nếu bố mẹ thường la hét, đập phá đồ đạc mỗi khi tức giận, trẻ sẽ học theo chính xác cách giải tỏa cảm xúc bạo lực đó.`,
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&auto=format&fit=crop&q=80',
    views: 4560,
    likes: 388,
    created_at: '2026-05-22',
    author: 'Nhà nghiên cứu Giáo dục sớm Hoài Nam',
    faqs: JSON.stringify([
      { q: 'Trẻ 18 tháng tuổi đã rèn EQ được chưa?', a: 'Hoàn toàn được. Mẹ có thể chỉ vào các bức tranh vẽ khuôn mặt biểu cảm cười, khóc, giận để dạy bé nhận diện cảm xúc từ sớm.' },
      { q: 'Làm thế nào để trẻ bớt ích kỷ biết chia sẻ đồ chơi?', a: 'Hãy tôn trọng quyền sở hữu của con. Hãy hỏi ý kiến con trước: *"Con có đồng ý cho bạn mượn chú gấu bông này trong 5 phút không?"*. Trẻ cảm thấy đồ chơi của mình an toàn sẽ dễ dàng chia sẻ hơn.' }
    ])
  },

  // ==========================================
  // 7. MẸO TIẾT KIỆM CHO MẸ BỈM (5 bài)
  // ==========================================
  {
    id: 'tk_01',
    title: 'Bí quyết săn sale bỉm sữa, đồ dùng cho bé tiết kiệm đến 50% chi phí nuôi con',
    category: 'Mẹo tiết kiệm cho mẹ bỉm',
    sub_category: 'Mua sắm thông minh',
    tags: 'săn sale bỉm sữa,tiết kiệm chi phí nuôi con,mua sắm thông minh,mẹo mẹ bỉm',
    summary: 'Chi phí mua sắm tã bỉm, sữa công thức và quần áo sơ sinh là gánh nặng tài chính không hề nhỏ. Lưu ngay bí quyết săn voucher giảm giá và tích trữ đồ dùng khoa học cực rẻ.',
    content: `### 1. Lập danh sách mua sắm thực tế "Cần vs Muốn"
Trước khi bước vào các đợt bão sale trên Shopee, Lazada hay các chuỗi cửa hàng mẹ và bé, mẹ cần lập danh sách cực kỳ nghiêm túc:
*   **Nhóm Bắt buộc (Need):** Bỉm tã, sữa công thức (nếu sữa mẹ thiếu), nước giặt xả lành tính cho bé, khăn xô vô trùng.
*   **Nhóm Muốn có (Want):** Đồ chơi xếp hình gỗ đắt tiền, quần áo thời trang thiết kế điệu đà, xe đẩy sang trọng đắt đỏ. Nên hạn chế mua hoặc canh giảm giá sâu mới mua.

### 2. Bí quyết săn sale sàn thương mại điện tử (TMĐT) chuẩn cao thủ
*   **Canh khung giờ vàng:** Các mã giảm giá khủng nhất thường được tung ra vào đúng **0:00 và 12:00** của các ngày đôi (1/1, 2/2, 11/11, 12/12) hoặc giữa tháng.
*   **Tham gia các nhóm hội săn sale uy tín:** Nơi các mẹ bỉm sữa chia sẻ các link sản phẩm chính hãng có giá hời và mã giảm giá độc quyền.
*   **Mua sỉ / Mua combo:** Bỉm tã và khăn ướt là những vật dụng tiêu hao liên tục. Hãy mua dạng thùng, combo nhiều bịch để có đơn giá rẻ hơn và được miễn phí vận chuyển.

### 3. Tránh bẫy tích trữ quá nhiều
*   **Bỉm tã:** Bé sơ sinh lớn rất nhanh trong 6 tháng đầu. Mẹ tuyệt đối không tích trữ quá 2 bịch bỉm size sơ sinh (Newborn hoặc size S) vì bé sẽ chật bụng rất nhanh gây lãng phí.
*   **Quần áo sơ sinh:** Chỉ nên mua tối đa 5-7 bộ quần áo size nhỏ nhất. Bé sẽ chật quần áo chỉ sau 1 tháng.`,
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d296e?w=600&auto=format&fit=crop&q=80',
    views: 5120,
    likes: 420,
    created_at: '2026-05-18',
    author: 'Hot Mom Săn Sale Minh Phương',
    faqs: JSON.stringify([
      { q: 'Làm sao để biết sản phẩm bỉm sữa trên mạng là chính hãng?', a: 'Luôn ưu tiên mua tại các gian hàng Mall (Shopee Mall, LazMall) có logo đỏ chứng nhận thương hiệu và kiểm tra kỹ số lượng đánh giá 5 sao của người mua thực tế.' },
      { q: 'Mua bỉm cận date giá rẻ có an toàn không?', a: 'Nếu hạn sử dụng còn trên 3 tháng và bao bì bỉm nguyên vẹn hoàn toàn không bị ẩm mốc, mẹ có thể mua để cho bé dùng ngay nhằm tiết kiệm.' }
    ])
  },
  {
    id: 'tk_02',
    title: 'Lập kế hoạch tài chính gia đình khi có con nhỏ: Chi tiêu hợp lý và quỹ dự phòng',
    category: 'Mẹo tiết kiệm cho mẹ bỉm',
    sub_category: 'Tài chính gia đình',
    tags: 'kế hoạch tài chính,quỹ dự phòng,chi tiêu nuôi con,quản lý tài chính',
    summary: 'Sự chào đời của thiên thần nhỏ đi kèm với hàng loạt chi phí phát sinh khổng lồ. Hướng dẫn mẹ bỉm phương pháp phân bổ thu nhập 60-20-20 khoa học để không bao giờ lâm vào cảnh túng quẫn.',
    content: `### 1. Sự thật về chi phí nuôi con nhỏ
Nhiều cặp vợ chồng trẻ lâm vào khủng hoảng nợ nần sau sinh do không lường trước được các chi phí khổng lồ: tiêm vắc-xin dịch vụ, sữa công thức đắt tiền, bỉm tã hàng tháng và chi phí y tế khi con ốm đau. Việc lập kế hoạch tài chính là bắt buộc để giữ gìn hạnh phúc gia đình.

### 2. Phương pháp phân bổ tài chính 50-30-20 cải tiến cho mẹ bỉm
Hãy chia tổng thu nhập hàng tháng của gia đình thành 3 hũ tài chính nghiêm ngặt:
*   **50% - Hũ Chi Tiêu Thiết Yếu (Essentials):** Tiền ăn uống của cả nhà, tiền bỉm sữa của con, tiền điện nước, nhà trọ, học phí mầm non.
*   **30% - Hũ Quỹ Dự Phòng & Tiết Kiệm (Savings):** Đây là khoản bắt buộc trích ra **ngay khi nhận lương**. Hũ này dùng để xây dựng Quỹ dự phòng khẩn cấp y tế (tương đương 6 tháng chi phí gia đình) phòng khi con ốm nằm viện hoặc bố mẹ mất thu nhập tạm thời.
*   **20% - Hũ Đầu Tư Cho Tương Lai & Vui Chơi (Lifestyle):** Tiền mua bảo hiểm sức khỏe cho con, đi du lịch gia đình cuối tuần hoặc mua đồ chơi giáo dục sớm.

### 3. Cắt giảm chi phí thông minh
*   **Tận dụng đồ xin lại:** Xin cũi gỗ, xe đẩy, xe tập đi từ người thân bè bạn đã nuôi con lớn. Rửa sạch sát khuẩn là dùng cực tốt mà không tốn một đồng.
*   **Tiêm chủng mở rộng:** Các mũi tiêm cơ bản như 5 trong 1, lao, sởi mẹ hoàn toàn có thể cho con tiêm miễn phí tại Trạm y tế phường cực kỳ an toàn, chỉ tiêm dịch vụ các mũi ngoài chương trình.`,
    image: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=600&auto=format&fit=crop&q=80',
    views: 4560,
    likes: 388,
    created_at: '2026-05-19',
    author: 'Chuyên gia Tài chính cá nhân Hoàng Nam',
    faqs: JSON.stringify([
      { q: 'Nên lập Quỹ dự phòng y tế cho con bao nhiêu tiền là đủ?', a: 'Mẹ nên chuẩn bị một khoản tiền mặt khoảng 10 - 15 triệu đồng gửi tiết kiệm online để có thể rút ra dùng ngay lập tức khi con có sự cố sức khỏe cần đi viện.' },
      { q: 'Có nên mua bảo hiểm nhân thọ cho bé từ 1 tuổi?', a: 'Nên ưu tiên mua Bảo hiểm sức khỏe phi nhân thọ trước để được chi trả viện phí trực tiếp tại các khoa dịch vụ chất lượng cao, sau đó mới xét đến bảo hiểm nhân thọ tích lũy dài hạn.' }
    ])
  },
  {
    id: 'tk_03',
    title: 'Tự làm đồ chơi handmade an toàn cho bé từ nguyên liệu tái chế siêu tiết kiệm',
    category: 'Mẹo tiết kiệm cho mẹ bỉm',
    sub_category: 'Đồ chơi handmade',
    tags: 'đồ chơi handmade,đồ chơi tái chế,giáo cụ handmade,tự làm đồ chơi gỗ',
    summary: 'Đồ chơi nhựa trôi nổi chứa nhiều hóa chất độc hại chất hóa dẻo Phthalate nguy hiểm. Hướng dẫn mẹ bỉm tự chế đồ chơi kích thích trí thông minh cực kỳ an toàn từ bìa carton và lõi giấy.',
    content: `### 1. Mối nguy hiểm từ đồ chơi nhựa giá rẻ kém chất lượng
Các dòng đồ chơi nhựa không rõ nguồn gốc bán tràn lan trên vỉa hè thường chứa kim loại nặng (chì, cadmium) và chất hóa dẻo Phthalate cực kỳ độc hại cho gan, thận và hệ nội tiết của trẻ nhỏ khi trẻ ngậm gặm gặm đồ chơi vào miệng.

### 2. Các ý tưởng đồ chơi handmade siêu thông minh từ phế liệu
Mẹ có thể cùng con dành ra 15 phút làm những món đồ chơi tuyệt vời sau:
*   **Hộp thả bóng bằng bìa carton (Cho bé 8-12 tháng):**
    *   **Chuẩn bị:** 1 chiếc hộp giày cũ sạch, vài quả bóng bàn màu sắc sặc sỡ.
    *   **Cách làm:** Khoét một lỗ tròn có đường kính lớn hơn quả bóng bàn một chút trên nắp hộp. Bé sẽ cực kỳ thích thú khi thả quả bóng biến mất vào lỗ tròn và mở hộp lấy ra. Trò chơi giúp rèn luyện khả năng phối hợp tay mắt và nhận thức về sự tồn tại vĩnh cửu của vật thể.
*   **Trống lắc lắc bằng lon sữa cũ (Cho bé 6-12 tháng):**
    *   **Chuẩn bị:** Lon sữa bột đã hết, vài hạt đậu đỏ/đậu bắp khô, bong bóng bay.
    *   **Cách làm:** Cho hạt đậu vào lon sữa. Cắt bỏ cuống bong bóng, căng bề mặt bong bóng che kín miệng lon sữa và buộc chặt bằng thun. Bé gõ nhẹ sẽ tạo ra âm thanh bập bùng vui tai vui mắt.
*   **Bảng luồn dây bằng đĩa giấy (Cho bé 2 tuổi):**
    *   Dùng đĩa giấy ăn, bấm lỗ xung quanh và dùng một sợi dây giày có đầu bịt nhựa để con tập tập xâu dây qua các lỗ tròn. Rèn luyện vận động tinh cực tốt.

### 3. Nguyên tắc an toàn khi làm đồ chơi handmade
*   Tuyệt đối không dùng các vật liệu nhỏ liti (như cúc áo, hạt cườm nhỏ) cho bé dưới 3 tuổi vì nguy cơ bé nuốt phải gây hóc dị vật đường thở nguy kịch.
*   Mài nhẵn các góc sắc, không dùng keo dán có mùi hóa chất nồng nặc.`,
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&auto=format&fit=crop&q=80',
    views: 3980,
    likes: 310,
    created_at: '2026-05-20',
    author: 'Cô giáo Mầm non dạy sáng tạo Hoài Thương',
    faqs: JSON.stringify([
      { q: 'Dùng màu nước gì vẽ đồ chơi an toàn cho con?', a: 'Mẹ nên chọn màu Acrylic gốc nước không mùi độc hại, có dán nhãn non-toxic (không chứa chất độc) an toàn cho trẻ em.' },
      { q: 'Đồ chơi handmade bằng giấy carton bị ướt nước bọt có sao không?', a: 'Giấy carton thấm nước bọt sẽ bị rã ra. Mẹ nên dán một lớp băng keo trong suốt bên ngoài để chống thấm nước và bảo vệ đồ chơi bền hơn.' }
    ])
  },
  {
    id: 'tk_04',
    title: 'Có nên mua lại đồ sơ sinh thanh lý? Những món đồ tuyệt đối phải mua mới cho bé',
    category: 'Mẹo tiết kiệm cho mẹ bỉm',
    sub_category: 'Kinh nghiệm thanh lý',
    tags: 'đồ sơ sinh thanh lý,mua lại xe đẩy cũ,tiết kiệm chuẩn y khoa,đồ sơ sinh',
    summary: 'Mua đồ cũ là giải pháp tiết kiệm tiền tuyệt vời nhưng nếu không chọn lọc kỹ sẽ rước họa vào thân cho bé. Cùng phân loại những món đồ có thể mua cũ và những món phải mua mới 100%.',
    content: `### 1. Những món đồ sơ sinh mẹ hoàn toàn có thể mua thanh lý (Cực rẻ & Tiết kiệm)
Trẻ sơ sinh lớn rất nhanh nên các đồ dùng thường còn rất mới khi bị thanh lý:
*   **Xe đẩy, nôi gỗ, ghế ăn dặm:** Đây là những đồ có độ bền cơ học cao. Mẹ chỉ cần mua cũ cũ rồi tháo đệm vải đem giặt sạch sát khuẩn bằng cồn là dùng cực kỳ tốt, tiết kiệm đến vài triệu đồng.
*   **Đồ chơi gỗ Montessori:** Gỗ tự nhiên bền bỉ, chỉ cần chà rửa nước ấm phơi nắng khử trùng là an toàn tuyệt đối.
*   **Quần áo khoác ngoài, váy điệu đà:** Những đồ mặc vài lần khi đi chơi, ít co giãn co rút vải.

### 2. Những món đồ tuyệt đối phải mua mới 100% (Không dùng lại)
Vì lý do vệ sinh an toàn y tế và sức khỏe cột sống của bé, mẹ chớ nên tiếc tiền mua cũ các món sau:
*   **Núm ti, bình sữa, máy hút sữa phụ kiện:** Núm ti silicone cũ bị mòn, rạn nứt nứt là nơi tích tụ hàng triệu vi khuẩn gây tưa lưỡi nấm miệng khó trị. Các bộ phận máy hút sữa chạm trực tiếp vào sữa mẹ cũng cần vô trùng hoàn toàn.
*   **Đệm giường, nôi cũi:** Đệm cũ có thể bị lún sâu theo phom người bé trước, ảnh hưởng cực xấu đến sự phát triển cột sống non nớt của bé và có thể chứa mạt bụi gây hen suyễn dị ứng da.
*   **Ghế ngồi ô tô cho bé:** Mẹ bầu và mẹ bỉm không thể biết chiếc ghế cũ từng bị va chạm tai nạn giao thông lực lớn làm rạn nứt khung nhựa bên trong hay chưa. Nó không còn đảm bảo an toàn tính mạng cho bé nữa.

### 3. Lưu ý sát trùng đồ cũ trước khi dùng
*   Tất cả đồ vải (quần áo, đệm) cần được giặt bằng nước nóng trên 60 độ C để diệt trừ mạt bụi và vi khuẩn nấm ngứa rồi phơi nắng to.`,
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=80',
    views: 4210,
    likes: 356,
    created_at: '2026-05-21',
    author: 'Admin Mẹ Bỉm Thông Thái',
    faqs: JSON.stringify([
      { q: 'Mua máy hút sữa cũ thanh lý động cơ được không?', a: 'Có thể mua lại phần động cơ máy hút sữa của các hãng uy tín, nhưng toàn bộ phụ kiện dây dẫn khí, phễu hút, bình sữa mẹ bắt buộc phải mua mới hoàn toàn.' },
      { q: 'Làm thế nào để kiểm tra ghế ăn dặm cũ còn an toàn?', a: 'Hãy rung lắc mạnh thử xem các chốt khóa khớp nối có bị rơ lỏng lẻo không, kiểm tra đai an toàn 3 điểm hoặc 5 điểm có bị sờn đứt chốt khóa không.' }
    ])
  },
  {
    id: 'tk_05',
    title: 'Công thức tự làm nước giặt xả, xịt diệt khuẩn lành tính cho bé cực rẻ tại nhà',
    category: 'Mẹo tiết kiệm cho mẹ bỉm',
    sub_category: 'Tự làm đồ dùng',
    tags: 'nước giặt tự nhiên cho bé,nước lau sàn organic,nước xịt diệt khuẩn handmade',
    summary: 'Hóa chất tẩy rửa công nghiệp tạo mùi nhân tạo dễ làm kích ứng da bé gây viêm da cơ địa chàm sữa. Tự tay chế tạo nước giặt xả bồ hòn thảo dược lành tính và siêu rẻ tại nhà.',
    content: `### 1. Tác hại của chất tạo mùi công nghiệp với làn da bé
Sữa tắm, nước giặt xả thông thường chứa nhiều hóa chất tẩy rửa sunfat mạnh và hương liệu hóa học (parfum). Làn da bé sơ sinh mỏng hơn da người lớn đến 5 lần, dễ dàng hấp thu các chất này dẫn đến tình trạng nổi mẩn đỏ, ngứa ngáy dữ dội và kích hoạt cơn chàm sữa viêm da cơ địa mãn tính tái đi tái lại.

### 2. Công thức nước giặt thảo dược tự nhiên từ quả Bồ Hòn
Quả bồ hòn chứa chất Saponin tự nhiên là chất tạo bọt làm sạch vết bẩn bùn đất cực tốt và an toàn:
*   **Nguyên liệu:** 20 quả bồ hòn khô tách hạt, 1 lít nước lọc, 1 cây sả đập dập, 1 vỏ quả bưởi/cam để tạo mùi thơm dịu nhẹ.
*   **Cách làm:** Cho bồ hòn và sả vào nồi nước đun sôi rồi vặn nhỏ lửa ninh nhừ trong 30 phút. Gần tắt bếp thì thả vỏ bưởi/cam vào đun thêm 5 phút cho tinh dầu tan ra. Lọc lấy nước cốt màu nâu sẫm đổ vào chai thủy tinh bảo quản ngăn mát dùng dần.
*   **Cách dùng:** Dùng 50ml nước bồ hòn giặt xả quần áo xô xô xốp cho bé, quần áo sẽ sạch sẽ mềm mại thơm mùi thảo dược tự nhiên.

### 3. Công thức nước lau sàn, lau đồ chơi bằng giấm và vỏ cam
*   **Cách làm:** Cho đầy vỏ cam/quýt vào hũ thủy tinh, đổ giấm trắng ngập vỏ cam. Đậy kín nắp ngâm trong vòng 2 tuần. Lọc lấy nước cốt giấm cam vàng óng pha loãng với nước theo tỉ lệ 1:5.
*   **Công dụng:** Axit axetic nhẹ trong giấm kết hợp tinh dầu cam có tính sát khuẩn tự nhiên cực cao, lau sạch sàn nhà và đồ chơi bé gặm nhấm mà hoàn toàn lành tính cho con.`,
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&auto=format&fit=crop&q=80',
    views: 3540,
    likes: 298,
    created_at: '2026-05-22',
    author: 'Mẹ Bỉm Sống Xanh Thanh Huyền',
    faqs: JSON.stringify([
      { q: 'Nước giặt bồ hòn bọt ít có giặt sạch vết bẩn không?', a: 'Sạch rất tốt. Chất Saponin làm sạch vết bẩn cơ học hoàn hảo, bọt ít giúp mẹ giặt xả cực nhanh sạch tiết kiệm nước mà không để lại tồn dư hóa chất trên thớ vải.' },
      { q: 'Nước bồ hòn để được bao lâu ở nhiệt độ phòng?', a: 'Do không chứa chất bảo quản hóa học nên nước bồ hòn tự nhiên chỉ để được khoảng 3-5 ngày ở ngoài. Mẹ nên trữ trong ngăn mát tủ lạnh để dùng được trong 1 tháng.' }
    ])
  },

  // ==========================================
  // 8. REVIEW SẢN PHẨM MẸ & BÉ (5 bài)
  // ==========================================
  {
    id: 'rv_01',
    title: 'So sánh top 5 loại sữa công thức cho bé nhẹ cân, chậm tăng cân tốt nhất hiện nay',
    category: 'Review sản phẩm mẹ & bé',
    sub_category: 'Review sữa công thức',
    tags: 'so sánh sữa công thức,sữa tăng cân tốt nhất,sữa cho trẻ nhẹ cân',
    summary: 'Chọn sữa công thức giúp con tăng cân vù vù vù vù vù là bài toán đau đầu của cha mẹ. Đánh giá chi tiết ưu nhược điểm y khoa của top 5 dòng sữa tăng cân bán chạy nhất thị trường.',
    content: `### 1. Nguyên tắc y khoa khi chọn sữa tăng cân cho bé
Sữa công thức tăng cân chuyên biệt thường có mật độ năng lượng cao (đạt mức 1kcal/ml sữa thay vì 0.67kcal/ml như sữa thường), giàu đạm Whey thủy phân dễ hấp thu và chứa nhiều chất béo chuỗi trung bình MCT giúp trẻ hấp thu nhanh qua đường ruột mà không gây đầy bụng chướng hơi.

### 2. Đánh giá chi tiết ưu nhược điểm top 5 dòng sữa
*   **Sữa Pediasure (Abbott Hoa Kỳ):**
    *   **Ưu điểm:** Hàm lượng dinh dưỡng cực kỳ đầy đủ, kích thích tăng cân tăng chiều cao vô cùng thần tốc rõ rệt sau 9 tuần. Bé thích uống do vị vani ngọt thơm béo ngậy.
    *   **Nhược điểm:** Hàm lượng chất béo cao dễ gây táo bón nếu cơ địa bé nóng trong. Vị ngọt đậm dễ làm bé từ chối bú sữa mẹ nhạt mát. Chỉ dùng cho bé trên 1 tuổi.
*   **Sữa Similac Neosure (Abbott):**
    *   Dành riêng cho trẻ sinh non nhẹ cân dưới 1 tuổi. Kích thích phát triển hệ miễn dịch và võng mạc rất tốt, hỗ trợ tăng cân đều đặn. Có thể gây hơi khó tiêu nhẹ.
*   **Sữa Infatrini (Nutricia Đức):**
    *   Dòng sữa cao năng lượng hàng đầu cho trẻ sơ sinh từ 0 - 18 tháng tuổi còi cọc suy dinh dưỡng. Sữa nhạt mát dễ uống uống vị giống sữa mẹ mẹ, chứa nhiều chất xơ GOS/FOS chống táo bón hoàn hảo. Nhược điểm duy nhất là giá thành khá đắt đỏ.
*   **Sữa Glico Icreo (Nhật Bản):**
    *   Sữa mát thanh nhạt nhất, giúp phát triển cơ bắp săn chắc chắc chắn chứ không tăng cân béo phì đột ngột. Rất giàu DHA/ARA tự nhiên.
*   **Sữa Meiji (Nhật Bản):**
    *   Thường gọi là "sữa rau" cực kỳ mát giúp bé có hệ tiêu hóa khỏe mạnh không táo bón táo bón. Bé tăng cân đều đặn vững chắc theo đúng chuẩn biểu đồ tăng trưởng WHO.

### 3. Lời khuyên y khoa khi đổi sữa cho bé
*   Đổi sữa từ từ theo nguyên tắc pha trộn tăng dần tỉ lệ sữa mới trong vòng 3-5 ngày để hệ vi sinh đường ruột của con làm quen, không đổi sữa đột ngột dễ gây loạn khuẩn tiêu chảy.`,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&auto=format&fit=crop&q=80',
    views: 6540,
    likes: 512,
    created_at: '2026-05-18',
    author: 'Dược sĩ Tư vấn Dinh dưỡng Thu Giang',
    faqs: JSON.stringify([
      { q: 'Bé bị dị ứng đạm sữa bò có uống được các dòng sữa tăng cân này không?', a: 'Không được. Trẻ dị ứng đạm sữa bò bắt buộc phải sử dụng sữa công thức thủy phân toàn phần (Amin hoặc Pregestimil) hoặc sữa đạm đậu nành dưới sự hướng dẫn y khoa.' },
      { q: 'Pha sữa công thức bằng nước khoáng có tốt không?', a: 'Tuyệt đối không. Nước khoáng chứa nhiều khoáng chất dư thừa dễ làm biến đổi công thức sữa và gây sỏi thận cho trẻ sơ sinh. Chỉ pha sữa bằng nước lọc đun sôi để nguội ấm.' }
    ])
  },
  {
    id: 'rv_02',
    title: 'Đánh giá xe đẩy em bé gấp gọn du lịch: Nên chọn loại nào bền, nhẹ và an toàn?',
    category: 'Review sản phẩm mẹ & bé',
    sub_category: 'Review xe đẩy em bé',
    tags: 'đánh giá xe đẩy,xe đẩy gấp gọn du lịch,nên mua xe đẩy nào,xe đẩy em bé',
    summary: 'Một chiếc xe đẩy gấp siêu gọn nhẹ, êm ái chống xóc xóc tốt là trợ thủ đắc lực giúp cả nhà tự tin vi vu du lịch cùng con. Review chân thực các thương hiệu xe đẩy được ưa chuộng.',
    content: `### 1. Các tiêu chí cốt lõi khi chọn xe đẩy du lịch cho bé
*   **Khả năng gấp gọn tối đa:** Có thể gấp gọn bằng một tay và đút vừa cabin khoang hành lý máy bay hoặc cốp xe ô tô cỡ nhỏ.
*   **Trọng lượng siêu nhẹ:** Khung sườn làm bằng hợp kim nhôm siêu cứng nhưng nhẹ dưới 6.5kg để bố mẹ dễ dàng đeo vai hoặc xách bằng một tay.
*   **Hệ thống giảm xóc bánh xe (Shock Absorption):** Lò xo giảm xóc ở bánh xe giúp giảm rung lắc chấn động lên đại não non nớt của trẻ khi đi qua đoạn đường gồ ghề.
*   **Góc ngả lưng linh hoạt:** Ngả tối đa từ 100 đến 175 độ để bé có thể nằm ngủ thẳng lưng thoải mái nhất khi đi chơi xa.

### 2. Đánh giá 3 dòng xe đẩy gấp gọn du lịch bán chạy
*   **Xe đẩy YoYo (Babyzen Pháp):**
    *   **Ưu điểm:** Đẳng cấp sang trọng bậc nhất, đẩy siêu êm ái nhẹ nhàng lướt như bay. Gấp siêu gọn bỏ túi đeo như túi xách thời trang. Độ bền cơ học cực cao lên đến 5-7 năm.
    *   **Nhược điểm:** Giá thành cực kỳ đắt đỏ (khoảng 10-12 triệu đồng).
*   **Xe đẩy Chilux (Thương hiệu Singapore):**
    *   Thiết kế khung chữ X cứng cáp chống xóc tốt, nôi nằm rộng rãi thoáng khí, đẩy hai chiều tiện lợi cho mẹ tương tác với bé. Trọng lượng hơi nặng hơn một chút. Mức giá tầm trung rất hợp ví tiền.
*   **Xe đẩy Aprica (Nhật Bản):**
    *   Nổi tiếng với thiết kế ghế ngồi cao cách mặt đất 50-53cm giúp bé tránh hít phải bụi mịn ngoài đường và giảm nhiệt lượng phản xạ từ mặt đường nhựa cực tốt. Chất vải thun mát chống tia UV hoàn hảo.

### 3. Lưu ý an toàn y tế khi dùng xe đẩy
*   **Tuyệt đối không cho bé dưới 6 tháng tuổi ngồi xe đẩy tư thế dựng đứng** vì xương cột sống cổ của con chưa cứng cáp, dễ gây cong vẹo cột sống cổ. Bé dưới 6 tháng bắt buộc nằm phẳng ngả 170-175 độ.`,
    image: 'https://images.unsplash.com/photo-1591534566714-2d703f2fec5d?w=600&auto=format&fit=crop&q=80',
    views: 4890,
    likes: 410,
    created_at: '2026-05-19',
    author: 'Mẹ Bỉm Thích Du Lịch Thùy Chi',
    faqs: JSON.stringify([
      { q: 'Xe đẩy hai chiều và xe đẩy một chiều khác nhau thế nào?', a: 'Xe đẩy hai chiều cho phép mẹ quay mặt bé đối diện với mẹ để tạo cảm giác an tâm cho bé sơ sinh, khi bé lớn hơn có thể quay mặt hướng về phía trước để bé thỏa sức ngắm cảnh thế giới.' },
      { q: 'Đai an toàn 5 điểm có thực sự cần thiết?', a: 'Rất cần thiết. Đai 5 điểm (giữ vai, hông và bẹn bé) giúp giữ bé chắc chắn cố định trên xe đẩy, ngăn bé ngọ nguậy trượt ngã nhào ra ngoài.' }
    ])
  },
  {
    id: 'rv_03',
    title: 'Máy hút sữa loại nào tốt? Review chi tiết máy hút sữa rảnh tay và máy có dây',
    category: 'Review sản phẩm mẹ & bé',
    sub_category: 'Review máy hút sữa',
    tags: 'máy hút sữa loại nào tốt,máy hút sữa rảnh tay không dây,hút sữa kích sữa',
    summary: 'Cuộc chiến giữa máy hút sữa có dây truyền thống lực hút mạnh mẽ và máy hút sữa không dây rảnh tay tiện lợi siêu gọn. Đánh giá ưu nhược điểm y khoa giúp kích sữa hiệu quả nhất.',
    content: `### 1. Phân biệt Máy hút sữa có dây truyền thống và Không dây rảnh tay
*   **Máy hút sữa có dây (như Medela, Spectra):**
    *   **Cơ chế:** Động cơ đặt bàn nối với phễu hút qua dây silicon dẫn khí dài. Lực hút cực khỏe, sâu, có nhiều chế độ massage kích sữa vô cùng nhịp nhàng giúp thông tắc tia sữa rất nhanh.
    *   **Nhược điểm:** Mẹ bỉm phải ngồi im một chỗ cố định gần ổ điện trong suốt 30 phút hút sữa, bất tiện khi đi làm lại hoặc chăm bé một mình.
*   **Máy hút sữa không dây rảnh tay (như FatzBaby, Elvie):**
    *   **Cơ chế:** Động cơ siêu nhỏ gắn trực tiếp tích hợp trên cup hút sữa úp gọn trong áo ngực. Hoàn toàn không dây dẫn khí rườm rà.
    *   **Ưu điểm:** Mẹ có thể vừa hút sữa vừa quét nhà, nấu cơm, đi dạo hay làm việc văn phòng vô cùng tự do thoải mái thoải mái.
    *   **Nhược điểm:** Lực hút thường yếu hơn một chút, khó hút cạn kiệt bầu sữa hoàn toàn đối với mẹ có tuyến sữa sâu khó vắt.

### 2. Gợi ý lựa chọn tối ưu theo nhu cầu của mẹ
*   **Mẹ cần kích sữa từ con số 0 hoặc hay bị tắc tia sữa:**
    Nên chọn dòng máy có dây Medela Pump hoặc Spectra Dual S. Máy có nhịp bú massage mô phỏng nhịp bú của em bé sơ sinh hoàn hảo, giúp kích thích hormone tạo sữa tiết ra dồi dào nhất.
*   **Mẹ nhiều sữa ổn định, chuẩn bị đi làm lại công sở:**
    Máy không dây rảnh tay FatzBaby hoặc Imani là trợ thủ đắc lực giúp mẹ tranh thủ hút sữa kín đáo ngay tại bàn làm việc vô cùng tiện lợi.

### 3. Chọn size phễu hút sữa - Yếu tố quyết định không gây đau đớn
*   Phễu quá rộng sẽ hút cả quầng vú vào trong gây tổn thương da. Phễu quá chật sẽ cọ xát đầu ti gây nứt cổ gà rớm máu đau đớn. Mẹ cần đo đường kính chân đầu ti của mình khi chưa hút để chọn size phễu vừa vặn hoàn hảo.`,
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&auto=format&fit=crop&q=80',
    views: 4560,
    likes: 388,
    created_at: '2026-05-20',
    author: 'Chuyên gia Sữa Mẹ Việt Nam',
    faqs: JSON.stringify([
      { q: 'Hút sữa mỗi cữ bao nhiêu phút là tốt nhất?', a: 'Mỗi cữ hút chỉ nên kéo dài tối đa **20 - 30 phút** (mỗi bên vú). Hút quá lâu sẽ gây chai rát đầu ti và làm tổn thương các mô tuyến sữa nhạy cảm.' },
      { q: 'Tiệt trùng phụ kiện máy hút sữa bằng nước sôi nhiều có sao không?', a: 'Các bộ phận bằng nhựa và silicone chịu nhiệt cao có thể tiệt trùng nước sôi 5 phút. Tránh đun sôi quá lâu làm biến dạng silicon dẫn đến giảm lực hút của máy.' }
    ])
  },
  {
    id: 'rv_04',
    title: 'Đánh giá top 3 dòng bỉm chống hăm tả, siêu mỏng nhẹ cho bé mặc ban đêm',
    category: 'Review sản phẩm mẹ & bé',
    sub_category: 'Review bỉm tã em bé',
    tags: 'bỉm chống hăm,bỉm đêm tốt nhất,bỉm siêu mỏng nhẹ,tã dán em bé',
    summary: 'Một chiếc bỉm đêm thấm hút cực tốt giữ mông bé khô thoáng suốt 12 tiếng là bí quyết để bé ngủ ngon thẳng giấc, không quấy khóc vì ẩm ướt khó chịu chịu. So sánh 3 thương hiệu bỉm đỉnh cao.',
    content: `### 1. Tại sao bỉm ban đêm lại vô cùng quan trọng?
Trẻ sơ sinh đi tiểu nhiều lần vào ban đêm. Nếu bỉm bị tràn hoặc ẩm ngược (chất lỏng thấm ngược trở lại da bé):
*   Nước tiểu chứa amoniac tiếp xúc da lâu sẽ kích ứng gây hăm tã, nổi mẩn đỏ, ngứa ngáy làm bé thức giấc quấy khóc giữa đêm liên tục.
*   Ẩm ướt làm bé bị lạnh bụng, tăng nguy cơ cảm lạnh hô hấp.

### 2. So sánh top 3 dòng bỉm đêm chống hăm tã đỉnh cao
*   **Bỉm Applecrumby (Malaysia/Úc):**
    *   **Đánh giá:** Ông vua của dòng bỉm đêm. 100% không chứa chất tẩy trắng chứa clo. Độ thấm hút khổng lồ lên đến 1200ml chất lỏng nhờ lớp gel SAP cao cấp Nhật Bản, hoàn toàn không bị ẩm ngược dù ép mạnh. Vải cotton mềm mịn như lụa.
    *   **Nhược điểm:** Form bỉm khá dày, giá thành cao (khoảng 7.000 - 9.000đ/miếng).
*   **Bỉm Bobby Đệm Thun Thấm Mồ Hôi (Việt Nam):**
    *   Công nghệ lõi nén thần kỳ siêu mỏng chỉ 3mm nhưng thấm hút cực nhanh. Đệm thun lưng mềm mại co giãn không để lại vết hằn đỏ trên da bé. Mức giá bình dân dễ mua ở mọi cửa tiệm tạp hóa.
*   **Bỉm Moony Natural (Nhật Bản):**
    *   Bề mặt bỉm làm từ sợi bông hữu cơ (organic cotton) siêu mềm và lành tính, có tính axit nhẹ ngăn ngừa vi khuẩn gây hăm tã tuyệt vời. Bỉm có vạch chỉ báo thay tã đổi màu xanh rất thông minh.

### 3. Quy trình thay bỉm ban đêm hạn chế đánh thức giấc ngủ của bé
*   Chuẩn bị sẵn bỉm mới, khăn ướt ấm kế bên.
*   Thao tác thật nhẹ nhàng, giữ ánh sáng đèn phòng thật lờ mờ ấm áp. Không trò chuyện đùa giỡn làm bé thức giấc hẳn.`,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=80',
    views: 5120,
    likes: 432,
    created_at: '2026-05-21',
    author: 'Mẹ Bỉm Sữa Cẩn Thận Phương Thảo',
    faqs: JSON.stringify([
      { q: 'Mấy tiếng nên thay bỉm ban ngày cho bé?', a: 'Ban ngày mẹ nên thay bỉm đều đặn sau mỗi **3 - 4 tiếng** để giữ làn da bé luôn khô thoáng sạch sẽ.' },
      { q: 'Kem trị hăm tã nào hiệu quả nhất cho da bé?', a: 'Các dòng kem chứa Oxit Kẽm (Zinc Oxide) như Sudocrem hoặc Desitin giúp tạo hàng rào vật lý bảo vệ làn da bé khỏi nước tiểu vô cùng hiệu quả.' }
    ])
  },
  {
    id: 'rv_05',
    title: 'Đồ chơi thông minh phát triển trí não cho bé 1 tuổi: Review các thương hiệu uy tín',
    category: 'Review sản phẩm mẹ & bé',
    sub_category: 'Review đồ chơi thông minh',
    tags: 'đồ chơi thông minh,đồ chơi bé 1 tuổi,phát triển trí tuệ,đồ chơi an toàn',
    summary: 'Bé 1 tuổi bắt đầu học hỏi thế giới quan bằng cách bắt chước, phân biệt màu sắc hình học và phát triển kỹ năng cầm nắm logic. Review chi tiết các món đồ chơi gỗ, nhựa an toàn kích trí não.',
    content: `### 1. Xu hướng phát triển tư duy của trẻ 1 tuổi
Tròn 1 tuổi, bé bắt đầu hiểu được mối quan hệ nhân quả đơn giản (ví dụ: gõ búa thì phát ra tiếng kêu, thả khối gỗ thì lọt xuống lỗ). Đồ chơi giai đoạn này cần kích thích vận động tinh của đôi tay, phối hợp tay mắt và rèn tính kiên nhẫn logic.

### 2. Review top 3 món đồ chơi phát triển trí tuệ tốt nhất
*   **Hộp Đập Bóng & Đóng Cọc Gỗ (Giáo cụ Montessori):**
    *   **Cơ chế:** Bé dùng chiếc búa gỗ nhỏ gõ mạnh để các quả bóng sắc màu lọt xuống khe rãnh và lăn ra ngoài.
    *   **Lợi ích:** Rèn luyện lực của cánh tay, phối hợp tay mắt chuẩn xác và đem lại sự phấn khích nhân quả tuyệt vời cho bé. Ưu tiên mua chất liệu gỗ tự nhiên mịn màng không xước dăm.
*   **Bộ Đồ Chơi Xếp Tháp Vòng Tròn Màu Sắc (Fisher-Price Mỹ):**
    *   Bé học cách phân biệt kích thước lớn - nhỏ, thứ tự xếp vòng tròn từ to đến nhỏ vào cột trụ. Nhựa cao cấp dày dặn không chứa BPA độc hại, bé ngậm thoải mái.
*   **Sách Âm Thanh Song Ngữ (Thương hiệu Lalala Baby):**
    *   Mỗi trang sách có các nút bấm phát ra âm tiếng nhạc tiếng kêu của các con vật bằng tiếng Anh và tiếng Việt. Giúp bé kích thích thính giác và học từ vựng nhanh chóng.

### 3. Cảnh báo an toàn đồ chơi cho trẻ 1 tuổi
*   Tránh các đồ chơi chạy pin phát ra tiếng nhạc quá to có thể làm tổn thương thính giác nhạy cảm của bé.
*   Kiểm tra kỹ các khớp nối ren vít của đồ chơi gỗ cũ, đảm bảo không có chi tiết sắc nhọn trầy xước.'`,
    image: 'https://images.unsplash.com/photo-1537655780520-1e392edd816a?w=600&auto=format&fit=crop&q=80',
    views: 3980,
    likes: 310,
    created_at: '2026-05-22',
    author: 'Chuyên gia Giáo dục trẻ thơ Mai Anh',
    faqs: JSON.stringify([
      { q: 'Trẻ 1 tuổi chơi đồ chơi thông minh bao nhiêu phút một ngày?', a: 'Mẹ nên cùng con chơi khoảng 20-30 phút/ngày, chia nhỏ thành nhiều cữ, tương tác trò chuyện cùng con thay vì để con tự chơi lủi thủi một mình.' },
      { q: 'Có nên cho bé 1 tuổi chơi đồ chơi thông minh trên Ipad không?', a: 'Tuyệt đối không nên cho trẻ dưới 2 tuổi tiếp xúc với màn hình điện tử (tivi, điện thoại, ipad) vì nguy cơ gây chậm nói, suy giảm khả năng tương tác xã hội thực tế.' }
    ])
  },

  // ==========================================
  // 9. KINH NGHIỆM NUÔI CON (5 bài)
  // ==========================================
  {
    id: 'kn_01',
    title: 'Bí quyết nuôi con không kháng sinh: Tăng đề kháng tự nhiên cho bé lúc giao mùa',
    category: 'Kinh nghiệm nuôi con',
    sub_category: 'Nuôi con khoa học',
    tags: 'nuôi con không kháng sinh,tăng đề kháng tự nhiên,bệnh giao mùa,y khoa nhi',
    summary: 'Kháng sinh chỉ tiêu diệt được vi khuẩn, hoàn toàn vô hại với virus nhưng lại tàn phá hệ vi sinh đường ruột của trẻ sơ sinh dữ dội. Học cách tăng đề kháng tự nhiên chuẩn khoa học cho bé.',
    content: `### 1. Sự thật y khoa: 80% bệnh hô hấp ở trẻ là do Virus
Nhiều cha mẹ bỉm hễ thấy con ho, sụt sịt mũi là tự ý chạy ra tiệm thuốc tây mua thuốc kháng sinh liều cao cho con uống. Đây là sai lầm y tế nghiêm trọng:
*   Kháng sinh **chỉ có tác dụng tiêu diệt vi khuẩn**, hoàn toàn không có tác dụng với các bệnh do virus gây ra (như cảm cúm, sốt virus, viêm tiểu phế quản cấp).
*   Lạm dụng kháng sinh gây ra hiện tượng vi khuẩn kháng thuốc (lờn thuốc) cực nguy hiểm và tiêu diệt hoàn toàn vi khuẩn có lợi đường ruột, khiến bé bị tiêu chảy, suy giảm hệ miễn dịch nghiêm trọng vì 70% tế bào miễn dịch nằm ở đường ruột.

### 2. Giải pháp tăng đề kháng tự nhiên cho con khi giao mùa
*   **Duy trì bú sữa mẹ tối đa:** Sữa mẹ giàu kháng thể IgA giúp bao bọc niêm mạc mũi họng bé khỏi sự tấn công của mầm bệnh bên ngoài.
*   **Bổ sung Vitamin D3 K2 liều dự phòng hàng ngày:** Vitamin D3 là chìa khóa kích hoạt các tế bào miễn dịch hoạt động nhạy bén chống chọi mầm bệnh.
*   **Giữ vệ sinh mũi họng thông minh:** Nhỏ nước muối sinh lý ấm và hút mũi nhẹ nhàng khi con có đờm dịch nhầy, tránh lạm dụng xịt co mạch chứa thành phần hóa học mạnh.
*   **Tắm nắng và vận động ngoài trời:** Cho bé tiếp xúc với ánh nắng mặt trời buổi sáng sớm giúp da tổng hợp vitamin D tự nhiên tốt nhất.

### 3. Khi nào thực sự bắt buộc dùng kháng sinh?
*   Chỉ sử dụng kháng sinh khi có bằng chứng nhiễm khuẩn rõ ràng qua xét nghiệm công thức máu (bạch cầu tăng cao, CRP tăng) và có chỉ định kê đơn bằng giấy cụ thể của bác sĩ nhi khoa.`,
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&auto=format&fit=crop&q=80',
    views: 6540,
    likes: 549,
    created_at: '2026-05-15',
    author: 'Bác sĩ Nhi khoa Trương Hữu Khánh',
    faqs: JSON.stringify([
      { q: 'Lạm dụng kháng sinh làm trẻ chậm phát triển như thế nào?', a: 'Kháng sinh tàn phá hệ vi sinh đường ruột làm bé giảm hấp thu dưỡng chất thiết yếu, dẫn đến còi xương chậm lớn và dễ bị dị ứng hen suyễn.' },
      { q: 'Bé bị ho đờm có cần uống thuốc long đờm ngay?', a: 'Ho là phản xạ tự nhiên tốt để đẩy đờm dịch nhầy ra ngoài đường thở. Mẹ chỉ cần cho bú nhiều nước ấm, nhỏ mũi sạch sẽ để đờm loãng tự nhiên.' }
    ])
  },
  {
    id: 'kn_02',
    title: 'Kinh nghiệm rèn bé tự ngủ xuyên đêm từ 2 tháng tuổi của mẹ bỉm thành công',
    category: 'Kinh nghiệm nuôi con',
    sub_category: 'Luyện ngủ cho bé',
    tags: 'rèn con tự ngủ,ngủ xuyên đêm,luyện ngủ tự lập,chu kỳ giấc ngủ',
    summary: 'Rèn con tự ngủ không phải là sự tàn nhẫn gạt bỏ con mà là giúp con học cách chuyển giấc êm đềm để có giấc ngủ sâu tốt cho sự phát triển của đại não. Chia sẻ quy trình luyện ngủ thành công.',
    content: `### 1. Nhịp sinh học của trẻ sơ sinh 2 tháng tuổi
Tròn 2 tháng tuổi, tuyến tùng của bé bắt đầu sản sinh melatonin (hormone bóng tối điều hòa giấc ngủ) rõ rệt. Đây là thời điểm vàng để mẹ thiết lập nhịp ngày - đêm rõ ràng và rèn con tự ngủ tự lập.

### 2. Các công cụ hỗ trợ rèn ngủ thần kỳ
*   **Quấn chũn cổ điển (Swaddle):** Tái tạo môi trường chật hẹp, ấm áp như trong tử cung mẹ vỗ về, giúp ngăn ngừa phản xạ giật mình rướn người (Moro reflex) làm bé thức giấc khóc thét.
*   **Tiếng ồn trắng (White Noise):** Mô phỏng âm thanh dòng máu chảy rào rào bên trong bụng mẹ, giúp che lấp các tiếng động đột ngột xung quanh nhà (tiếng chó sủa, tiếng còi xe).
*   **Nhiệt độ phòng mát lạnh:** Nhiệt độ phòng lý tưởng nhất cho trẻ sơ sinh ngủ là **20 - 22 độ C** kèm đắp chăn mỏng (đảm bảo gáy cổ bé ấm, tay chân hơi mát nhẹ là chuẩn). Phòng nóng nực là nguyên nhân số 1 làm bé trằn trọc quấy khóc đêm.

### 3. Quy trình luyện ngủ 4S/5S dịu nhẹ tại nhà
*   **S1: Thiết lập trình tự đi ngủ (Wind-down):** Tắm rửa ấm áp, tắt đèn tối om phòng, bật tiếng ồn trắng, quấn chũn êm ái.
*   **S2: Đặt bé khi còn thức:** Đặt bé vào cũi nằm ngửa khi bé lim dim buồn ngủ ngủ nhưng vẫn còn tỉnh táo.
*   **S3: Phương pháp vỗ về:** Vỗ nhẹ vào mông bé theo nhịp tim, thì thầm tiếng "shhh... shhh..." ấm áp bên tai để xoa dịu con.
*   **S4: Rút dần sự hỗ trợ:** Khi bé đã yên tĩnh nhắm mắt, mẹ lùi dần ra xa để bé tự chìm vào giấc ngủ.`,
    image: 'https://images.unsplash.com/photo-1528228728630-376b23ac12d4?w=600&auto=format&fit=crop&q=80',
    views: 5890,
    likes: 512,
    created_at: '2026-05-18',
    author: 'Mẹ Bỉm Sữa Thành Công Rèn Tự Ngủ',
    faqs: JSON.stringify([
      { q: 'Bé rướn người đỏ mặt khi ngủ có phải thiếu canxi?', a: 'Bé 2 tháng tuổi rướn người gồng mặt là phản xạ sinh lý hoàn toàn bình thường để giãn cơ nướu phát triển thể chất, không phải thiếu canxi trừ khi kèm rụng tóc hình vành khăn, đổ mồ hôi trộm nặng.' },
      { q: 'Khi nào nên cai quấn chũn cho bé?', a: 'Nên cai quấn chũn khi bé bắt đầu biết tự lật úp bụng (thường từ 4-5 tháng) để đảm bảo hai tay con tự do chống đỡ an toàn.' }
    ])
  },
  {
    id: 'kn_03',
    title: 'Cách tập cho bé bú bình thành công sau 3 ngày cho mẹ chuẩn bị đi làm lại',
    category: 'Kinh nghiệm nuôi con',
    sub_category: 'Nuôi con bằng sữa mẹ',
    tags: 'tập bú bình,bé từ chối bú bình,kinh nghiệm đi làm lại,sữa công thức bình',
    summary: 'Rất nhiều bé quen ti mẹ mềm ấm sẽ quyết liệt từ chối núm ti cao su silicon cứng đơ của bình sữa. Lưu ngay mẹo đánh lừa cảm giác giúp bé hợp tác bú bình vèo vèo.',
    content: `### 1. Tại sao bé lại từ chối bú bình dữ dội?
*   Núm ti silicone cứng và không có độ ấm ấm áp như bầu ngực mẹ.
*   Sữa chảy ra từ bình với tốc độ cố định, không giống như ti mẹ chảy sữa theo nhịp mút kích thích của bé.
*   Bé ngửi thấy mùi mẹ quen thuộc bên cạnh nên đòi ti mẹ bằng được và khóc lóc ăn vạ đẩy bình sữa ra xa.

### 2. Quy trình 3 ngày tập bú bình thành công
*   **Ngày 1: Nhờ người khác cho bú (Nguyên tắc cách ly mẹ):**
    Mẹ cần tạm lánh đi phòng khác hoặc ra ngoài. Nhờ bố hoặc ông bà cho bé bú bình. Người cho bú bế bé ở tư thế hơi nghiêng ngửa thoải mái, không nhìn chăm chăm vào bé tạo áp lực.
*   **Ngày 2: Đánh lừa xúc giác nướu:**
    Ngâm núm ti bình sữa vào nước ấm cho núm ti có độ ấm ấm áp bằng nhiệt độ cơ thể mẹ. Vắt vài giọt sữa mẹ ngọt mát bôi xung quanh đầu núm ti để bé ngửi thấy mùi sữa quen thuộc kích thích vị giác.
*   **Ngày 3: Tập khi bé hơi đói vừa phải:**
    Cho bé bú bình khi bé hơi đói nhẹ (khoảng 30 phút trước cữ bú sữa chính thức). Tuyệt đối không đợi bé đói khóc gào rã ruột mới đút bình bình, vì lúc đó bé đang ức chế cáu kỉnh sẽ hét to đẩy bình ra quyết liệt hơn.

### 3. Lựa chọn núm ti phù hợp
*   Nên chọn dòng núm ti có thiết kế mô phỏng bầu ngực mẹ siêu mềm mại và có van thông khí chống đầy hơi tốt để bé không bị nuốt phải khí thừa gây đau bụng nôn trớ sữa.`,
    image: 'https://images.unsplash.com/photo-1522844990619-4951c40f3edf?w=600&auto=format&fit=crop&q=80',
    views: 4560,
    likes: 389,
    created_at: '2026-05-20',
    author: 'Tư vấn viên Sữa Mẹ Hạnh Phúc',
    faqs: JSON.stringify([
      { q: 'Tập bú bình bao nhiêu cữ một ngày là vừa?', a: 'Mẹ nên duy trì 1-2 cữ bú bình đều đặn mỗi ngày từ tháng thứ 2 trở đi để bé duy trì song song phản xạ bú bình và ti mẹ mượt mà.' },
      { q: 'Núm ti bình sữa bao lâu phải thay mới một lần?', a: 'Nên thay núm ti mới sau mỗi **2 - 3 tháng** sử dụng do chất liệu silicone bị lão hóa chai cứng hoặc rạn nứt nứt tích tụ vi khuẩn.' }
    ])
  },
  {
    id: 'kn_04',
    title: 'Mẹo dân gian hạ sốt cực nhanh, an toàn cho bé bằng nhọ nồi và lá tía tô',
    category: 'Kinh nghiệm nuôi con',
    sub_category: 'Mẹo dân gian y khoa',
    tags: 'hạ sốt bằng lá tía tô,mẹo dân gian hạ sốt,nhọ nồi hạ sốt,chăm sóc trẻ bị sốt',
    summary: 'Các bài thuốc dân gian lành tính giúp mẹ bỉm hạ sốt nhanh chóng cho con tại nhà mà không cần lạm dụng thuốc hạ sốt hóa học khi con mới sốt nhẹ nhẹ. Hướng dẫn cách làm khoa học.',
    content: `### 1. Tác dụng y học của lá Tía Tô và cây Nhọ Nồi
Theo Đông y và các nghiên cứu khoa học:
*   **Lá tía tô:** Có tính ấm, chứa các hoạt chất tinh dầu tự nhiên kích thích tuyến mồ hôi hoạt động mạnh, giúp giãn mạch ngoại vi, đào thải độc tố và giải cảm nhiệt hạ sốt cực kỳ hiệu quả.
*   **Cây nhọ nồi (Cỏ mực):** Có tính mát, chứa saponin và tannin giúp sát khuẩn, thanh nhiệt lương huyết, hạ nhiệt lượng bên trong cơ thể rất tốt.

### 2. Hướng dẫn làm bài thuốc đắp hạ sốt từ cỏ nhọ nồi
*   **Chuẩn bị:** 1 nắm cỏ nhọ nồi tươi sạch.
*   **Cách làm:** Rửa cỏ nhọ nồi dưới vòi nước chảy, trần nhanh qua nước sôi để diệt khuẩn bám trên lá. Cho vào cối giã nát nát, lọc lấy nước cốt cho bé uống 1-2 thìa nhỏ. Phần bã cỏ còn lại đắp trực tiếp lên vùng trán, nách, bẹn của bé và dùng khăn xô bọc lại cố định.
*   Nhiệt độ của bé sẽ hạ nhanh chóng sau 15-20 phút đắp thảo dược tự nhiên này.

### 3. Mẹo uống nước lá tía tô hạ sốt trước khi đi tiêm phòng
*   Trước khi đưa bé đi tiêm phòng 1 ngày, mẹ hãy ăn một nắm lớn lá tía tô sống hoặc uống nước lá tía tô đun sôi để các kháng thể giải độc lành tính truyền qua sữa mẹ. Khi bé bú sữa mẹ chứa tinh chất tía tô sẽ giảm hẳn nguy cơ sốt cao sau khi tiêm chủng.`,
    image: 'https://images.unsplash.com/photo-1584036561566-baf245fdb76f?w=600&auto=format&fit=crop&q=80',
    views: 4120,
    likes: 310,
    created_at: '2026-05-21',
    author: 'Lương y Đỗ Văn Minh',
    faqs: JSON.stringify([
      { q: 'Trẻ sơ sinh mấy tháng tuổi có thể uống trực tiếp nước cỏ nhọ nồi?', a: 'Chỉ nên cho bé trên 6 tháng tuổi uống trực tiếp nước thảo dược sống. Bé dưới 6 tháng tuổi tốt nhất chỉ nên đắp bã thảo dược ngoài da và mẹ uống nước để truyền qua sữa mẹ.' },
      { q: 'Lá tía tô có chữa được ho cho bé không?', a: 'Có. Nước lá tía tô chưng đường phèn, quất hồng bì là bài thuốc trị ho đờm, cảm lạnh vô cùng nhạy bén lành tính.' }
    ])
  },
  {
    id: 'kn_05',
    title: 'Kinh nghiệm chăm bé đi nhà trẻ không bị ốm vặt và nhanh hòa nhập môi trường mới',
    category: 'Kinh nghiệm nuôi con',
    sub_category: 'Chuẩn bị đi học',
    tags: 'chăm bé đi nhà trẻ,khủng hoảng đi học mầm non,trẻ ốm vặt đi học,kỹ năng mầm non',
    summary: 'Giai đoạn đầu đi nhà trẻ là cơn ác mộng khi con khóc khóc hằng ngày và ốm vặt liên miên do môi trường lây nhiễm chéo virus. Bí quyết vàng bảo vệ sức khỏe và tâm lý cho con.',
    content: `### 1. Hiện tượng "Ốm vặt kiến thiết" khi đi nhà trẻ
Mẹ cần chuẩn bị sẵn tâm lý: Khi con bắt đầu tiếp xúc với môi trường tập thể mới, con sẽ liên tục bị ốm vặt (viêm mũi họng, sốt virus, tay chân miệng). Đây gọi là quá trình y học "kiến thiết hệ miễn dịch". Cơ thể con tiếp xúc với các chủng virus mới để tạo ra kháng thể tự nhiên tự bảo vệ. Tình trạng ốm vặt sẽ giảm hẳn sau 3 - 6 tháng đi học đều đặn.

### 2. Bí quyết bảo vệ sức khỏe hệ hô hấp của con
*   **Vệ sinh mũi họng ngay sau khi đi học về:**
    Dùng nước xịt muối biển sâu xịt rửa sạch bụi bẩn và virus bám trong khoang mũi bé ngay khi từ lớp học về nhà.
*   **Tiêm đầy đủ các mũi vắc-xin bổ sung:** Đảm bảo con đã tiêm phòng Cúm hàng năm, Phế cầu và vắc-xin Tả uống đầy đủ.
*   **Tăng đề kháng đường ruột:** Bổ sung men vi sinh và kẽm hữu cơ đều đặn để con hấp thu tốt chất dinh dưỡng nâng cao đề kháng thể trạng.

### 3. Xoa dịu tâm lý "Khủng hoảng xa cách mẹ"
*   Trò chuyện trước về lớp học vui vẻ với con: *"Ở trường mầm non có cô giáo hiền thương con con, có nhiều đồ chơi xếp hình gỗ đẹp lắm đấy!"*.
*   **Quy tắc chào tạm biệt dứt khoát:** Khi đưa con đến lớp, hãy ôm con vỗ về ấm áp và nói: *"Chiều đúng giờ Bố sẽ đón con nhé!"* rồi bàn giao cho cô giáo và đi thẳng. Tránh tình trạng nấn ná nấn ná quay đầu nhìn làm con càng khóc dai ăn vạ kéo dài hơn.`,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80',
    views: 4890,
    likes: 412,
    created_at: '2026-05-22',
    author: 'Hiệu trưởng mầm non Hồng Nhung',
    faqs: JSON.stringify([
      { q: 'Bé mấy tuổi đi nhà trẻ là tốt nhất?', a: 'Dưới góc độ tâm lý học, bé từ 18 - 24 tháng tuổi đã phát triển tương đối tốt kỹ năng vận động ngôn ngữ và tự phục vụ cơ bản, đi học học rất nhanh hòa nhập.' },
      { q: 'Có nên cho con nghỉ học ngay mỗi khi con chớm sụt sịt mũi?', a: 'Nếu con chỉ sụt sịt mũi nhẹ, không sốt cao, vẫn vui vẻ ăn chơi bình thường thì mẹ nên tiếp tục cho con đi học để con làm quen nhịp độ học tập mầm non.' }
    ])
  },

  // ==========================================
  // 10. KIẾM TIỀN ONLINE CHO MẸ BỈM (5 bài)
  // ==========================================
  {
    id: 'kto_01',
    title: 'Top 5 công việc freelancer tại nhà có thu nhập ổn định phù hợp nhất cho mẹ bỉm',
    category: 'Kiếm tiền online cho mẹ bỉm',
    sub_category: 'Công việc freelancer',
    tags: 'freelancer tại nhà,mẹ bỉm kiếm tiền,viết content tại nhà,nhập liệu online',
    summary: 'Chăm con nhỏ bận rộn nhưng mẹ bỉm vẫn hoàn toàn có thể tự chủ tài chính nhờ các công việc tự do linh hoạt thời gian. Đánh giá 5 công việc freelancer thu nhập tốt và an toàn.',
    content: `### 1. Viết bài Content SEO (Content Writer)
*   **Đặc thù công việc:** Viết các bài viết chuẩn SEO cho các trang web, viết bài bán hàng Facebook hoặc kịch bản video TikTok.
*   **Ưu điểm:** Mẹ có thể làm việc vào bất kỳ lúc nào rảnh rỗi rảnh rỗi (khi con đang ngủ giấc trưa hoặc buổi tối muộn). Chỉ cần 1 chiếc laptop và khả năng viết lách cơ bản.
*   **Thu nhập:** Khoảng 80.000đ - 250.000đ cho mỗi bài viết tùy thuộc vào chất lượng và độ chuyên sâu của bài viết.

### 2. Quản trị viên Fanpage / Group cộng đồng
*   **Đặc thù công việc:** Phê duyệt bài viết của thành viên, trực tin nhắn tư vấn trả lời khách hàng mua sắm online cho các cửa tiệm.
*   **Ưu điểm:** Có thể thao tác trực tiếp hoàn toàn trên điện thoại thông minh vô cùng linh hoạt.

### 3. Gia sư trực tuyến (Online Tutor)
*   Nếu mẹ có kiến thức chuyên môn vững chắc (như tiếng Anh, tiếng Trung, Toán học, Ngữ văn), dạy học online 1-1 qua phần mềm Zoom buổi tối là nguồn thu nhập vô cùng ổn định chất lượng cao.

### 4. Dịch thuật tài liệu trực tuyến (Translator)
*   Dịch các bài viết, phụ đề video hoặc tài liệu nước ngoài sang tiếng Việt cho các công ty truyền thông trực tuyến.

### 5. Cộng tác viên thiết kế đồ họa Canvas/Photoshop
*   Thiết kế ảnh quảng cáo bán hàng, ảnh bìa Youtube cho các shop bán hàng online.`,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80',
    views: 5890,
    likes: 498,
    created_at: '2026-05-18',
    author: 'Mẹ Bỉm Tự Chủ Tài Chính',
    faqs: JSON.stringify([
      { q: 'Tìm kiếm các công việc freelancer uy tín này ở đâu?', a: 'Mẹ có thể tham gia vào các sàn freelancer lớn và uy tín của Việt Nam như vLance, Upwork hoặc tìm kiếm cơ hội tuyển dụng trong các hội nhóm viết content chất lượng trên Facebook.' },
      { q: 'Cảnh báo các chiêu trò lừa đảo kiếm tiền online phổ biến?', a: 'Tuyệt đối tránh xa các lời mời chào *"việc nhẹ lương cao"* yêu cầu đóng tiền cọc trước, nhận nhiệm vụ giật đơn hàng ảo, hoặc gõ mã captcha kiếm tiền. Đó đều là bẫy lừa đảo chiếm đoạt tài sản.' }
    ])
  },
  {
    id: 'kto_02',
    title: 'Hướng dẫn mẹ bỉm làm tiếp thị liên kết (Affiliate Marketing) kiếm thêm thu nhập thụ động',
    category: 'Kiếm tiền online cho mẹ bỉm',
    sub_category: 'Tiếp thị liên kết',
    tags: 'tiếp thị liên kết,affiliate marketing mẹ bỉm,kiếm tiền thụ động,shopee affiliate',
    summary: 'Không cần nhập hàng ôm hàng rủi ro, mẹ bỉm sữa vẫn có thể nhận hoa hồng vèo vèo nhờ chia sẻ link giới thiệu sản phẩm chất lượng thực tế của Shopee, TikTok Shop.',
    content: `### 1. Tiếp thị liên kết (Affiliate Marketing) là gì?
Là phương pháp kiếm tiền bằng cách chia sẻ liên kết giới thiệu (link affiliate) của một sản phẩm chất lượng lên trang cá nhân hoặc hội nhóm. Khi có người nhấp vào đường link đó và thực hiện mua hàng thành công, mẹ sẽ được sàn TMĐT chi trả một khoản hoa hồng tương ứng từ 3% đến 12% giá trị đơn hàng.

### 2. Tại sao Affiliate là mô hình kiếm tiền hoàn hảo cho mẹ bỉm?
*   **Vốn 0 đồng:** Không cần bỏ tiền nhập hàng gom hàng, không lo hàng tồn kho rủi ro tài chính.
*   **Không lo vận chuyển:** Toàn bộ khâu đóng gói hàng, giao nhận vận chuyển và chăm sóc khách hàng đều do chủ shop và sàn Shopee/TikTok lo liệu hoàn toàn.
*   **Thu nhập thụ động trọn đời:** Một khi đường link chia sẻ có nhiều lượt tương tác tiếp cận, mẹ vẫn có thể nhận hoa hồng thụ động ngay cả khi đang ngủ hay đang bận bế con.

### 3. Quy trình từng bước làm Shopee/TikTok Affiliate thành công
*   **Bước 1: Đăng ký tài khoản:** Truy cập chương trình Shopee Affiliate hoặc TikTok Shop Creator đăng ký tài khoản miễn phí dành cho nhà sáng tạo nội dung.
*   **Bước 2: Sáng tạo nội dung chân thực:** Thay vì spam link bừa bãi, hãy viết những bài review chia sẻ trải nghiệm thực tế sau khi dùng bỉm, sữa, xe đẩy cho con. Chụp ảnh rõ nét chân thực.
*   **Bước 3: Gắn link khéo léo:** Đặt link mua hàng ở phần bình luận hoặc phần mô tả trang cá nhân để hướng dẫn các mẹ bỉm khác vào mua sắm an toàn chính hãng.`,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
    views: 4560,
    likes: 388,
    created_at: '2026-05-19',
    author: 'KOL Mẹ Bỉm Sữa Thành Công',
    faqs: JSON.stringify([
      { q: 'Làm affiliate có yêu cầu số lượng người theo dõi (Follower) lớn không?', a: 'Không nhất thiết. Chỉ cần mẹ chia sẻ các bài viết review vô cùng chân thực, có ích trong các hội nhóm nuôi con nhỏ thì vẫn thu hút rất nhiều người nhấp vào mua sắm.' },
      { q: 'Làm sao rút tiền hoa hồng Shopee?', a: 'Shopee sẽ tự động đối soát và thanh toán tiền hoa hồng trực tiếp vào tài khoản ngân hàng của mẹ định kỳ mỗi tháng sau khi đạt hạn mức tối thiểu.' }
    ])
  },
  {
    id: 'kto_03',
    title: 'Bí quyết kinh doanh online đồ ăn dặm handmade, đồ dùng mẹ và bé vốn nhỏ lãi cao',
    category: 'Kiếm tiền online cho mẹ bỉm',
    sub_category: 'Kinh doanh online',
    tags: 'kinh doanh đồ ăn dặm,đồ dùng mẹ và bé,bán hàng online vốn nhỏ,khởi nghiệp mẹ bỉm',
    summary: 'Tự tay nấu các hũ ruốc cá hồi, bột hạt ăn dặm organic dinh dưỡng thơm ngon bán cho các mẹ bỉm xung quanh là ý tưởng khởi nghiệp tuyệt vời có lợi nhuận cao.',
    content: `### 1. Tại sao đồ ăn dặm handmade lại đắt hàng?
Các bà mẹ hiện đại cực kỳ bận rộn nhưng luôn mong muốn con có bữa ăn dặm bổ dưỡng, tươi ngon và an toàn nhất. Đồ ăn dặm đóng chai công nghiệp thường chứa chất bảo quản nên các hũ ruốc cá hồi ép lạnh, cháo cốt rau củ tươi ngon, bột hạt dinh dưỡng organic handmade luôn là lựa chọn hàng đầu được săn lùng.

### 2. Các ý tưởng sản phẩm ăn dặm handmade dễ làm tại nhà
*   **Ruốc (chà bông) cá hồi, ruốc tôm đồng:** Giàu omega-3 và canxi. Quy trình làm cần cực kỳ tỉ mỉ, sấy khô hoàn toàn để bảo quản lâu không bị mốc.
*   **Bột bánh ăn dặm từ hạt hạt hữu cơ:** Nghiền mịn hạt chia, hạt óc chó, hạnh nhân phối trộn theo tỉ lệ dinh dưỡng.
*   **Nước cốt dùng Dashi cô đặc:** Ninh củ quả súp lơ cô đặc đóng chai thủy tinh nhỏ tiệt trùng trữ đông đông.

### 3. Bí quyết xây dựng thương hiệu uy tín của mẹ bỉm sữa
*   **Đảm bảo vệ sinh an toàn thực phẩm là sống còn:** Quay video ghi lại quy trình nấu nướng nhà bếp sạch sẽ, nguyên liệu tươi rói organic để chứng minh chất lượng y khoa với khách hàng.
*   **Bán hàng bằng sự tử tế:** Tư vấn tận tâm thực đơn ăn dặm phù hợp cho con của khách hàng. Khách hàng cảm thấy sự gần gũi thấu hiểu sẽ trung thành mua sắm lâu dài và giới thiệu bạn bè ủng hộ.`,
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=600&auto=format&fit=crop&q=80',
    views: 3980,
    likes: 310,
    created_at: '2026-05-20',
    author: 'Chủ Thương Hiệu Ăn Dặm Mẹ Ốc',
    faqs: JSON.stringify([
      { q: 'Cần bao nhiêu vốn để bắt đầu kinh doanh đồ ăn dặm handmade?', a: 'Chỉ cần số vốn ban đầu rất nhỏ từ 1 - 2 triệu đồng mua sắm nguyên liệu tươi sống và hũ thủy tinh đóng gói sạch sẽ.' },
      { q: 'Làm thế nào để tiếp cận khách hàng đầu tiên?', a: 'Mẹ hãy chia sẻ tặng dùng thử cho các mẹ bỉm sữa ở chung cư, khu phố xung quanh nhà và nhờ họ viết nhận xét review chân thực đăng lên mạng xã hội.' }
    ])
  },
  {
    id: 'kto_04',
    title: 'Trở thành người sáng tạo nội dung (Content Creator) viết lách tại nhà cho mẹ bỉm sữa',
    category: 'Kiếm tiền online cho mẹ bỉm',
    sub_category: 'Sáng tạo nội dung',
    tags: 'content creator mẹ bỉm,viết lách kiếm tiền,kiếm tiền từ blog,sáng tạo nội dung',
    summary: 'Chia sẻ các kiến thức nuôi con thực tế, câu chuyện làm mẹ ý nghĩa dưới dạng bài viết Blog, kịch bản video thu hút hàng triệu lượt xem xem và kiếm tiền từ quảng cáo nhãn hàng.',
    content: `### 1. Content Creator mẹ bỉm sữa là gì?
Là việc mẹ sử dụng kiến thức, kinh nghiệm và trải nghiệm làm mẹ thực tế của mình để viết lách, chụp ảnh hoặc quay các video chia sẻ hữu ích lên các nền tảng Blog cá nhân, Facebook, TikTok, Youtube để xây dựng thương hiệu cá nhân có lượng người hâm mộ trung thành.

### 2. Các nguồn thu nhập khổng lồ của một Content Creator
Một khi thương hiệu cá nhân có độ phủ sóng rộng rãi rộng rãi, mẹ sẽ có nhiều nguồn thu nhập đa dạng:
*   **Quảng cáo Booking từ các nhãn hàng:** Các thương hiệu bỉm, sữa, đồ chơi mầm non trả tiền để mẹ giới thiệu sản phẩm của họ trong bài viết/video.
*   **Doanh thu AdSense quảng cáo:** Tiền chia sẻ doanh thu quảng cáo tự động từ Youtube, TikTok hoặc mạng lưới quảng cáo trên Blog cá nhân.
*   **Bán các khóa học, ebook tự viết:** Chia sẻ kinh nghiệm ăn dặm, kinh nghiệm rèn tự ngủ EASY chuyên sâu có thu phí.

### 3. Bí quyết sáng tạo nội dung chạm vào trái tim người đọc
*   **Viết bằng sự chân thực nhất:** Hãy kể lại đúng những khó khăn, những giọt nước mắt bất lực thức đêm chăm con và cách mẹ đã vượt qua. Sự đồng cảm chân thành là chìa khóa thu hút hàng triệu mẹ bỉm sữa khác lắng nghe.
*   **Chia sẻ kiến thức chuẩn y khoa khoa học:** Luôn trích dẫn nguồn uy tín để tăng độ tin cậy tuyệt đối của blog.`,
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&auto=format&fit=crop&q=80',
    views: 4210,
    likes: 356,
    created_at: '2026-05-21',
    author: 'Blogger Chăm Con Khoa Học',
    faqs: JSON.stringify([
      { q: 'Làm sao để tự thiết lập một trang Blog cá nhân miễn phí?', a: 'Mẹ có thể bắt đầu viết lách rất dễ dàng trên nền tảng WordPress.com hoặc Blogger hoàn toàn miễn phí, sau khi viết tốt có thể đầu tư mua tên miền riêng.' },
      { q: 'Có cần khuôn mặt xinh đẹp để quay video TikTok?', a: 'Không cần. Sự chân thành mộc mạc, giọng nói ấm áp và giá trị chia sẻ hữu ích thực tế mới là điều cốt lõi giữ chân người xem ở lại lâu dài.' }
    ])
  },
  {
    id: 'kto_05',
    title: 'Cách quản lý thời gian làm việc tại nhà hiệu quả không ảnh hưởng đến việc chăm con',
    category: 'Kiếm tiền online cho mẹ bỉm',
    sub_category: 'Quản lý thời gian',
    tags: 'quản lý thời gian,mẹ bỉm đa năng,làm việc tại nhà hiệu quả,chăm con nhàn tênh',
    summary: 'Vừa ôm con vừa gõ laptop làm việc dễ khiến mẹ rơi vào trạng thái kiệt quệ stress cực độ do phân tâm. Cùng áp dụng các kỹ thuật quản lý thời gian đỉnh cao của mẹ bỉm đa năng.',
    content: `### 1. Bẫy phân tâm của mẹ bỉm làm việc tại nhà (Work From Home)
Sai lầm lớn nhất là mẹ bỉm cố gắng làm việc đa nhiệm cùng lúc: Vừa trông con chơi vừa gõ email phản hồi khách hàng. Kết quả là công việc trì trệ ngập lỗi, còn con không được tương tác chất lượng chất lượng dẫn đến cáu kỉnh quấy khóc nhiều hơn.

### 2. Kỹ thuật quản lý thời gian "Time-Blocking" đỉnh cao
Hãy chia một ngày thành các khối thời gian độc lập rõ ràng nghiêm ngặt:
*   **Khối thời gian dành trọn cho con (100% Focus):**
    Khoảng thời gian bé thức chơi, mẹ hãy tắt hoàn toàn tivi máy tính, dành trọn tâm trí chơi xếp gỗ, đọc sách trò chuyện cùng con. Bé được đáp ứng đầy đủ tình thương yêu và tương tác chất lượng sẽ trở nên ngoan ngoãn và tự chơi tự lập cực tốt ở giai đoạn sau.
*   **Khối thời gian làm việc tập trung (Deep Work):**
    Tận dụng lúc con đang ngủ giấc sâu (giấc trưa trưa từ 12h-14h và tối sau 20h) hoặc nhờ người thân bế hộ. Trong khối thời gian này, mẹ tắt hết thông báo mạng xã hội để xử lý công việc với năng suất cao nhất.

### 3. Kỹ thuật quả cà chua Pomodoro
*   Làm việc tập trung cao độ trong **25 phút**, sau đó nghỉ ngơi thư giãn 5 phút (ra ngoài uống nước ấm hoặc ôm con). Lặp lại chu kỳ giúp não bộ duy trì sự nhạy bén sáng tạo mà không bị kiệt sức mỏi mệt.`,
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&auto=format&fit=crop&q=80',
    views: 4560,
    likes: 388,
    created_at: '2026-05-22',
    author: 'Thạc sĩ Quản trị Năng suất Phương Thảo',
    faqs: JSON.stringify([
      { q: 'Làm thế nào khi đang làm việc dở dang thì con khóc gào đòi bế?', a: 'Luôn ưu tiên con trước. Hãy nhẹ nhàng ôm ấp xoa dịu con, đặt con chơi ở vị trí an toàn kế bên rồi mới quay trở lại làm việc chậm rãi.' },
      { q: 'Làm sao để rèn thói quen tự chơi một mình cho con?', a: 'Hãy bắt đầu từ 2-3 phút tự chơi trên thảm mở với các giáo cụ an toàn khi mẹ ngồi quan sát kế bên, tăng dần thời gian tự lập chơi của bé.' }
    ])
  },

  // ==========================================
  // 11. CHUYỆN THẬT LÀM MẸ (5 bài)
  // ==========================================
  {
    id: 'ct_01',
    title: 'Nhật ký sinh con lần đầu: Nước mắt rơi phía sau phòng đẻ và niềm hạnh phúc vỡ òa',
    category: 'Chuyện thật làm mẹ',
    sub_category: 'Nhật ký đi biển',
    tags: 'sinh con lần đầu,vượt cạn đớn đau,hạnh phúc làm mẹ,kỷ niệm sinh con',
    summary: 'Những dòng nhật ký chân thực thấm đẫm mồ hôi, nước mắt của một người mẹ trẻ lần đầu bước chân vào phòng sinh đẻ đầy bỡ ngỡ nhưng đổi lại là cái ôm da kề da thiêng liêng.',
    content: `### 1. Đêm bão giông rỉ ối đầy lo âu
Đúng 2 giờ sáng tuần thứ 39, tôi giật mình tỉnh giấc bởi một dòng nước ấm rỉ ra từ âm đạo. Cảm giác run rẩy lo âu dâng tràn lồng ngực. Bố bé cuống cuồng vác giỏ đồ đi sinh đã xếp gọn sẵn sàng, hai vợ chồng phi xe thẳng vào viện sản trong cơn mưa lạnh đêm hè.

### 2. Cơn đau chuyển dạ vượt cạn xé da xé thịt
Nằm trên bàn đẻ theo dõi monitor tim thai, từng cơn gò tử cung ập đến quặn thắt quặn thắt vùng lưng hông. Đau đớn như có hàng trăm chiếc búa gõ mạnh vào xương chậu chậu. Tôi khóc ngằn ngặt bóp chặt tay chồng đến rướm máu.
*   Bác sĩ hộ sinh hiền từ vuốt tóc dặn dò: *"Hãy bình tĩnh hít sâu bằng mũi và thở ra chậm rãi bằng miệng con nhé. Tập trung lực rặn khi cơn gò lên đỉnh điểm."*.
*   Rặn đẻ là cuộc chiến sinh tử thiêng liêng nhất của người phụ nữ. Sự kiệt sức và đớn đau dâng lên tột cùng.

### 3. Tiếng khóc chào đời chào đời vang vọng cả căn phòng
*   Sau cú rặn dài cuối cùng, một tiếng khóc *"Oa... oa... oa..."* vang lên dõng dạc xé tan sự im lặng.
*   Em bé đỏ hỏn nhầy dính được đặt ngay lên ngực tôi thực hiện da kề da. Giây phút làn da mỏng manh ấm nóng của con áp sát vào ngực mẹ, mọi đau đớn xé thịt trước đó biến mất hoàn toàn. Nước mắt tôi rơi lã chã vì niềm hạnh phúc thiêng liêng vỡ òa vỡ òa của tình mẫu tử.`,
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77ebe?w=600&auto=format&fit=crop&q=80',
    views: 6540,
    likes: 589,
    created_at: '2026-05-18',
    author: 'Mẹ Bông Bông',
    faqs: JSON.stringify([
      { q: 'Có nên cho chồng vào phòng sinh cùng vợ không?', a: 'Rất nên nếu người chồng có tâm lý vững vàng. Sự nắm tay vỗ về động viên của chồng giúp người mẹ tăng sinh hormone oxytocin giảm đau đớn và gắn kết tình cảm vợ chồng sâu sắc.' },
      { q: 'Sau sinh thường bao lâu mẹ có thể đi lại nhẹ nhàng?', a: 'Sau khoảng 6-8 tiếng nằm nghỉ ngơi phục hồi sức lực sau sinh thường, mẹ nên cố gắng gượng dậy đi lại nhẹ nhàng để tránh bế sản dịch tống sản dịch ra ngoài.' }
    ])
  },
  {
    id: 'ct_02',
    title: 'Hành trình 100 ngày cùng con chiến đấu với căn bệnh sinh non trong lồng kính',
    category: 'Chuyện thật làm mẹ',
    sub_category: 'Chiến binh sinh non',
    tags: 'trẻ sinh non,lồng kính chăm sóc đặc biệt,hành trình chữa lành,nghị lực làm mẹ',
    summary: 'Con chào đời ở tuần thứ 28 chỉ nặng vẻn vẹn 1.1kg nằm lọt thỏm trong lồng kính y tế chằng chịt dây truyền truyền dịch. Câu chuyện cảm động về tình mẫu tử phi thường vượt qua ranh giới sinh tử.',
    content: `### 1. Cú sốc chuyển dạ sinh non đột ngột
Khi bác sĩ thông báo tôi bị cạn ối bắt buộc phải mổ lấy thai cấp cứu ở tuần thứ 28 để cứu cả mẹ lẫn con, tôi cảm thấy trời đất sụp đổ hoàn toàn dưới chân. Em bé chào đời nặng 1.1kg bé bằng hai bàn tay chụm lại, da đỏ hực trong suốt nhìn thấy rõ các mạch máu liti dưới da, hô hấp suy kiệt được đưa thẳng vào phòng chăm sóc đặc biệt NICU nằm lồng kính cách ly.

### 2. Những đêm trắng vắt sữa và những giọt nước mắt lặng thầm
*   Không được bế con, không được ôm ấp. Hàng ngày tôi chỉ được nhìn con 10 phút qua tấm kính tròn của lồng ấp. Con chằng chịt các loại dây dẫn ống thở máy trợ thở, kim truyền dịch trên đôi tay bé xíu còi cọc.
*   Bác sĩ dặn: *"Sữa mẹ là liều thuốc kháng thể kỳ diệu duy nhất giúp ruột bé sinh non chống hoại tử"*.
*   Dù đau đớn vết mổ đẻ gắt gao, tôi cứ 2 tiếng lại lụi cụi ngồi dậy dậy vắt từng giọt sữa non vàng óng gửi vào khoa NICU cho con. Mỗi giọt sữa thấm đẫm cả tình yêu thương và giọt nước mắt cầu nguyện cầu mong con được bình an vô sự.

### 3. Kỳ tích 100 ngày kiên cường vượt qua sinh tử
*   Nhờ sự chăm sóc điều trị tận tâm đỉnh cao chuẩn y khoa của đội ngũ bác sĩ và dòng sữa mẹ ngọt ngào dồi dào dồi dào, con yêu đã kiên cường vượt qua các đợt nhiễm trùng phổi nguy kịch.
*   Ngày thứ 100 con cán mốc 3.2kg tự thở khí trời hoàn hảo, bú bình khỏe mạnh và được xuất viện về nhà trong vòng tay ấm áp của ba mẹ. Cảm ơn con yêu đã chọn mẹ làm mẹ của con trên đời!`,
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&auto=format&fit=crop&q=80',
    views: 7120,
    likes: 688,
    created_at: '2026-05-19',
    author: 'Mẹ Chiến Binh Nhí',
    faqs: JSON.stringify([
      { q: 'Trẻ sinh non cần bổ sung vi chất gì đặc biệt?', a: 'Trẻ sinh non có nguy cơ thiếu sắt thiếu máu rất cao bẩm sinh do chưa kịp tích lũy sắt từ mẹ trong tam cá nguyệt cuối. Mẹ bắt buộc bổ sung sắt nhỏ giọt và vitamin tổng hợp theo đúng đơn bác sĩ NICU kê.' },
      { q: 'Phương pháp ấp Kangaroo da kề da có lợi ích gì?', a: 'Ấp Kangaroo giúp điều hòa nhịp tim, nhịp thở, giữ ấm thân nhiệt cho bé sinh non cực tốt và kích thích phát triển tế bào não vượt trội.' }
    ])
  },
  {
    id: 'ct_03',
    title: 'Khi làm mẹ đơn thân: Sức mạnh phi thường từ nụ cười của thiên thần nhỏ bé',
    category: 'Chuyện thật làm mẹ',
    sub_category: 'Mẹ đơn thân',
    tags: 'mẹ đơn thân,nghị lực sống,nuôi con một mình,hạnh phúc giản đơn',
    summary: 'Trải lòng về những vất vả, cô đơn tủi thân tủi hờn khi phải tự gánh vác trách nhiệm nuôi con một mình và nguồn sức mạnh tinh thần bất tận đến từ nụ cười của con yêu.',
    content: `### 1. Những ngày giông bão hôn nhân đổ vỡ
Quyết định ly hôn bước ra khỏi cuộc hôn nhân độc hại khi bụng bầu đang ở tháng thứ 7 là lựa chọn đau đớn nhất đời tôi. Trở thành mẹ đơn thân đồng nghĩa với việc tôi phải tự đối mặt đối mặt với các gánh nặng cơm áo gạo tiền, tự đi sinh đẻ một mình và tự trông con khóc thét thức đêm.

### 2. Sự cô đơn quạnh hiu quạnh quẽ trong căn phòng trọ nhỏ
*   Có những đêm con sốt cao liên tục gào khóc, tôi một tay bế con tay kia lụi cụi chườm ấm ấm áp, mắt thâm quầng mỏi mệt kiệt sức. Sự cô đơn tủi thân dâng tràn lồng ngực muốn khóc thành tiếng thật to.
*   Nhưng khi nhìn thấy con yêu hạ sốt ngủ ngon lành nở nụ cười thiên thần vô tội vội trong giấc mơ, tôi nhận ra mình không hề cô đơn. Con chính là cả thế giới, là nguồn động lực phi thường tiếp sức cho tôi chiến đấu vượt qua bão giông cuộc sống.

### 3. Vững tin bước về phía trước hạnh phúc rực rỡ
*   Tôi nỗ lực làm việc freelancer kiếm tiền online tại nhà, sắp xếp thời gian khoa học vừa chăm con nhàn tênh vừa tự chủ kinh tế vững vàng.
*   Làm mẹ đơn thân không phải là ngõ cụt, đó là hành trình tôi tự tay kiến thiết một gia đình nhỏ ngập tràn tiếng cười và sự bình yên độc lập cho con yêu.`,
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&auto=format&fit=crop&q=80',
    views: 4890,
    likes: 420,
    created_at: '2026-05-20',
    author: 'Mẹ Đơn Thân Kiên Cường',
    faqs: JSON.stringify([
      { q: 'Làm thế nào để mẹ đơn thân cân bằng tâm lý tránh trầm cảm?', a: 'Mẹ nên chủ động tham gia các nhóm cộng đồng mẹ đơn thân cùng hoàn cảnh để chia sẻ tâm sự giải tỏa lo âu và không ngại ngần nhờ sự giúp đỡ của gia đình đẻ.' },
      { q: 'Giải thích thế nào khi con hỏi về bố?', a: 'Hãy luôn nói sự thật nhẹ nhàng phù hợp độ tuổi, tránh gieo rắc sự oán hận thù thù hằn vào đầu óc non nớt của trẻ thơ.' }
    ])
  },
  {
    id: 'ct_04',
    title: 'Cú sốc trầm cảm sau sinh và hành trình tự chữa lành bằng tình yêu thương gia đình',
    category: 'Chuyện thật làm mẹ',
    sub_category: 'Chữa lành tâm hồn',
    tags: 'vượt qua trầm cảm,tâm sự làm mẹ,chữa lành sau sinh,tâm lý gia đình',
    summary: 'Tâm sự chân thật của một người mẹ bỉm sữa từng rơi vào bóng tối trầm cảm sau sinh sâu thẳm, từng ghét bỏ em bé và hành trình hồi sinh kỳ diệu nhờ sự thấu hiểu đồng hành của người chồng.',
    content: `### 1. Rơi vào hố đen trầm cảm sâu thẳm
Sau khi sinh bé thứ nhất, áp lực từ việc con khóc đêm quấy khóc ròng rã ròng rã, tắc tia sữa đau đớn cộng với sự thiếu ngủ trầm trọng làm đầu óc tôi luôn căng như dây đàn. Tôi rơi vào trạng thái cáu kỉnh lầm lì, chán ghét mọi thứ, thậm chí cảm thấy oán giận chính đứa con đỏ hỏn của mình vì nghĩ con đã cướp đi tự do cuộc sống của tôi.

### 2. Điểm chạm thức tỉnh y khoa kịp thời
*   Có một chiều muộn, tôi bế con đứng bên cửa sổ ban công và có ý nghĩ tiêu cực nhảy xuống để giải thoát. Giật mình nhận ra sự nguy hiểm tột độ tột cùng, tôi khóc gào khóc thét nức nở ôm chặt con chạy vào giường.
*   Tôi đã dũng cảm nói thật hoàn toàn tình trạng của mình với chồng. Chồng tôi đã chết lặng ôm chặt lấy tôi xin lỗi vì đã vô tâm bấy lâu nay.

### 3. Hành trình tự chữa lành hồi sinh kỳ diệu
*   Chồng tôi lập tức xin nghỉ phép 2 tuần, chủ động gánh vác toàn bộ việc thay bỉm tã, thức đêm dỗ con để tôi có giấc ngủ sâu trên 6 tiếng hồi phục hệ thần kinh.
*   Gia đình đưa tôi đi trị liệu tâm lý chuyên khoa đều đặn hàng tuần. Tôi được giải tỏa mọi ấm ức dồn nén bấy lâu.
*   Nhờ tình yêu thương, sự thấu hiểu đồng hành tuyệt đối của gia đình, tôi đã chiến thắng bóng tối trầm cảm, cảm nhận được trọn vẹn tình mẫu tử thiêng liêng ấm áp.`,
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&auto=format&fit=crop&q=80',
    views: 5230,
    likes: 476,
    created_at: '2026-05-21',
    author: 'Mẹ Bỉm Tự Chữa Lành',
    faqs: JSON.stringify([
      { q: 'Mất ngủ có phải là dấu hiệu đầu tiên của trầm cảm?', a: 'Đúng. Mất ngủ kéo dài dù cơ thể rất mệt mỏi là hồi chuông cảnh báo hệ thần kinh đang bị quá tải nghiêm trọng, dễ tiến triển thành trầm cảm nếu không được giải tỏa kịp thời.' },
      { q: 'Có nên tự ý dùng thuốc an thần sau sinh?', a: 'Tuyệt đối không tự ý mua thuốc an thần, thuốc ngủ uống vì thuốc có thể bài tiết qua sữa mẹ gây ức chế hô hấp thần kinh cực kỳ nguy hiểm cho bé sơ sinh.' }
    ])
  },
  {
    id: 'ct_05',
    title: 'Câu chuyện đằng sau giọt sữa mẹ ngọt ngào: Những vết nứt cổ gà và đêm mất ngủ',
    category: 'Chuyện thật làm mẹ',
    sub_category: 'Hành trình nuôi con sữa mẹ',
    tags: 'nứt cổ gà,tắc tia sữa rớm máu,sữa mẹ ngọt ngào,đêm thức giấc',
    summary: 'Phía sau những bức ảnh em bé bú mẹ bình yên ngọt ngào trên mạng xã hội là cả một hành trình đầy đớn đau của những vết nứt đầu ti rớm máu rát buốt buốt và những đêm trắng kiên trì hút sữa.',
    content: `### 1. Cơn ác mộng mang tên "Nứt cổ gà" (Nứt đầu ti)
Khi mới tập cho con bú, do bé ngậm khớp cắn chưa chuẩn xác chỉ ngậm mớm vào đầu ti thay vì ngậm sâu vào quầng vú. Cơn đau nứt cổ gà ập đến buốt nhói lên tận óc mỗi khi con bắt đầu mút sữa. Đầu ti rạn nứt rớm máu rỉ dịch, đau đến mức tôi phát khóc gào rên rỉ mỗi lần đến cữ bú của con.

### 2. Cuộc chiến tắc tia sữa sưng đau phát sốt
*   Ngực căng cứng như đá, nóng ran bỏng rát rát, chạm nhẹ cũng đau đớn tột cùng. Mẹ bị sốt cao lên đến 39 độ C kèm run cầm cập vì viêm tắc tuyến sữa bên trong.
*   Để có sữa ngọt mát cho con, tôi phải cắn răng chịu đựng nhờ chồng massage thông tia đau đớn buốt nhói nhói nhói hoặc dùng máy hút sữa cật lực giữa đêm trắng quạnh hiu.

### 3. Vị ngọt ngọt ngào của dòng sữa chiến thắng tất cả
*   Nhờ kiên trì chỉnh lại khớp ngậm chuẩn y khoa y tế cho con và bôi sữa mẹ, mỡ cừu lanolin làm lành đầu ti bị nứt nhanh chóng.
*   Mọi đớn đau gian khổ thức đêm biến mất hoàn toàn khi tôi được ngắm con ôm chặt ngực mẹ bú sữa no nê, đôi má bầu bĩnh hồng hào ngon giấc giấc lành. Dòng sữa mẹ ngọt ngào chính là sợi dây liên kết vô giá mẫu tử thiêng liêng nhất.`,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=80',
    views: 4560,
    likes: 398,
    created_at: '2026-05-22',
    author: 'Mẹ Sữa Hạnh Phúc',
    faqs: JSON.stringify([
      { q: 'Làm thế nào để trị dứt điểm nứt cổ gà?', a: 'Mẹ cần sửa lại khớp ngậm của con cho đúng (con mở miệng to ngậm sâu hết quầng vú dưới). Bôi vài giọt sữa mẹ hoặc kem mỡ cừu purelan lên đầu ti sau mỗi lần bú để làm dịu da nhanh chóng.' },
      { q: 'Bị tắc tia sữa phát sốt có nên tiếp tục cho con bú?', a: 'Rất nên tiếp tục cho con bú bên ngực bị tắc vì lực mút sinh lý của con là công cụ thông tắc tia sữa tự nhiên hiệu quả nhất.' }
    ])
  },

  // ==========================================
  // 12. GÓC TÂM SỰ (5 bài)
  // ==========================================
  {
    id: 'ts_01',
    title: 'Khủng hoảng hôn nhân sau khi có con: Làm sao để vợ chồng thấu hiểu và sẻ chia?',
    category: 'Góc tâm sự',
    sub_category: 'Hôn nhân gia đình',
    tags: 'khủng hoảng hôn nhân sau sinh,vợ chồng bất đồng quan điểm,chia sẻ áp lực chăm con',
    summary: 'Sự xuất hiện của đứa con đột ngột làm thay đổi hoàn toàn thói quen sinh hoạt của hai vợ chồng, dễ bùng nổ các tranh cãi xung đột tủi hờn. Bí quyết hâm nóng tình cảm tinh tế.',
    content: `### 1. Hiện trạng: Hôn nhân nguội lạnh và đầy tiếng cãi vã sau sinh
Rất nhiều cặp vợ chồng trẻ chia sẻ họ cảm thấy thất vọng về đối phương sau khi sinh con. Vợ thì kiệt sức mệt mỏi chăm con nên dễ cáu gắt tủi thân, chồng thì cảm thấy bị bỏ rơi và áp lực kinh tế đè nặng. Những bất đồng nhỏ nhặt về cách pha sữa, dỗ con ngủ ngủ bỗng chốc bùng nổ thành cuộc chiến cãi vã nảy lửa nảy lửa.

### 2. Các nguyên nhân y khoa và tâm lý học xã hội
*   Sự sụt giảm hormone đột ngột của vợ sau sinh cộng với tình trạng thiếu ngủ trầm trọng làm suy nhược hệ thần kinh trung ương, khiến vợ dễ rơi vào trạng thái cáu giận vô cớ.
*   Chồng chưa kịp thích nghi thích nghi với vai trò làm cha làm cha, cảm thấy lúng túng lóng ngóng trong việc dỗ dành trẻ con sơ sinh khóc thét.

### 3. Giải pháp thấu hiểu xây dựng lại ngọn lửa gia đình
*   **Thiết lập quy tắc "Bầu bạn nửa giờ":** Dành ra 30 phút mỗi tối khi con đã ngủ say để hai vợ chồng ôm ấp, uống trà ấm và lắng nghe chia sẻ của nhau mà không phán xét phán xét phán xét.
*   **Chủ động phân công việc rõ ràng cụ thể:**
    Vợ phụ trách cho bú và dọn dẹp vệ sinh nhẹ nhàng. Chồng phụ trách thay bỉm tã ban đêm, pha sữa ấm ấm và bế ru con ngủ. Chăm sóc con là hành trình chung của cả hai người.
*   **Tuyệt đối tránh ngôn từ bạo lực chỉ trích chỉ trích:** Thay vì quát mắng *"Anh lười biếng vô dụng thế!"*, hãy nói nhẹ nhàng: *"Em đang rất mệt mỏi kiệt sức, anh có thể giúp em bế bế ru bé ngủ giấc này được không?"*.`,
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&auto=format&fit=crop&q=80',
    views: 5890,
    likes: 512,
    created_at: '2026-05-18',
    author: 'Người Giữ Lửa Hôn Nhân',
    faqs: JSON.stringify([
      { q: 'Làm thế nào để hâm nóng tình cảm vợ chồng sau sinh?', a: 'Hai vợ chồng nên nhờ ông bà trông con giùm 1 buổi cuối tuần để cùng nhau đi ăn tối riêng tư hoặc đi xem phim hâm nóng bầu không khí.' },
      { q: 'Có nên ngủ riêng giường sau khi sinh con?', a: 'Hạn chế tối đa việc ngủ riêng phòng. Ngủ chung giường chung phòng giúp người chồng cảm nhận được sự vất vả thức đêm chăm con của vợ và gắn kết tình cảm gia đình gần gũi.' }
    ])
  },
  {
    id: 'ts_02',
    title: 'Nỗi lòng mẹ bỉm đi làm lại: Sự giằng xé giữa sự nghiệp và tình thương con nhỏ',
    category: 'Góc tâm sự',
    sub_category: 'Mẹ bỉm công sở',
    tags: 'mẹ bỉm đi làm lại,gửi con đi học học,cân bằng công việc gia đình,nỗi lòng làm mẹ',
    summary: 'Hết 6 tháng thai sản, mẹ bỉm bước chân quay trở lại văn phòng công sở công sở với muôn vàn giằng xé, lo âu nhớ nhớ thương thương đứa con nhỏ lủi thủi ở nhà. Trải lòng chân thực cảm động.',
    content: `### 1. Ngày đầu tiên quay trở lại văn phòng đầy bão giông cảm xúc
Hết 6 tháng nghỉ sinh thai sản là lúc tôi bắt buộc phải khóa cửa căn phòng nhỏ, để con lại cho bà ngoại trông nom và bước lên xe đi làm lại. Cả ngày ngồi ở công ty đầu óc tôi luôn trống rỗng, chốc chốc lại mở điện thoại camera xem con ở nhà có khóc gào khóc thét hay bỏ bú sữa không. Nước mắt tôi cứ rỉ ra âm thầm âm thầm trong nhà vệ sinh văn phòng.

### 2. Sự giằng xé giữa Sự Nghiệp và Thiên Chức làm mẹ
Mẹ bỉm sữa hiện đại phải chịu áp lực quá lớn:
*   Muốn tự chủ kinh tế vững vàng để con có cuộc sống tốt đẹp nhất nhưng lại dằn vặt dằn vặt vì nghĩ mình đã cướp đi sự ôm ấp chăm sóc kề cạnh của con những năm tháng đầu đời.
*   Cơ thể mệt mỏi rã rời vì đêm trắng vắt sữa sữa kích sữa, ngày đi làm công sở tập trung cao độ, trưa tranh thủ chui vào góc kín hút sữa trữ đông mang về cho con bú.

### 3. Lời khuyên giúp mẹ giải tỏa dằn vặt tội lỗi
*   **Chất lượng hơn Số lượng:** 2 giờ đồng hồ mẹ hoàn toàn thư giãn trò chuyện, ôm ấp tương tác chất lượng chất lượng với con buổi tối có giá trị gấp trăm lần cả ngày mẹ mệt mỏi stress stress bế con lủi thủi trong phòng.
*   Hãy tin tưởng vào sự chăm sóc của người thân hoặc cô giáo mầm non. Con yêu của bạn vô cùng kiên cường và độc lập phát triển rất tốt.`,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80',
    views: 4560,
    likes: 395,
    created_at: '2026-05-19',
    author: 'Mẹ Bỉm Công Sở Đa Năng',
    faqs: JSON.stringify([
      { q: 'Làm sao để duy trì nguồn sữa mẹ khi đi làm lại?', a: 'Mẹ nên sắm một chiếc túi giữ nhiệt đá khô và máy hút sữa rảnh tay cầm tay để duy trì hút sữa đều đặn 2-3 cữ tại công ty rồi mang sữa trữ đông về cho bé.' },
      { q: 'Có nên cho con đi học mầm non từ 6 tháng để đi làm?', a: 'Nếu hoàn cảnh bắt buộc mẹ hoàn toàn có thể gửi các lớp nhóm trẻ gia đình uy tín sĩ số ít để được cô chăm sóc chu đáo, hoặc thuê người trông trẻ tại nhà.' }
    ])
  },
  {
    id: 'ts_03',
    title: 'Khi mẹ chồng và con dâu bất đồng quan điểm nuôi dạy cháu: Giải pháp ứng xử khôn khéo',
    category: 'Góc tâm sự',
    sub_category: 'Mẹ chồng nàng dâu',
    tags: 'mẹ chồng nàng dâu,bất đồng nuôi con,mẹo dân gian vs khoa học,ứng xử khéo léo',
    summary: 'Mẹ bỉm nuôi con chuẩn y khoa hiện đại, ông bà chăm cháu theo mẹo dân gian truyền thống dễ gây ra những rạn nứt gia đình căng thẳng dồn nén. Cách ứng xử thông minh, vẹn cả đôi đường.',
    content: `### 1. Bản chất xung đột thế hệ trong việc nuôi con nhỏ
Mẹ chồng nuôi con từ mấy chục năm trước bằng kinh nghiệm truyền tai dân gian dồi dào dồi dào: bắt mặc ấm ủ ấm bé, rơ lưỡi bằng mật ong, bắt uống nước lọc sớm, tắm các loại lá cây sống. Trong khi mẹ bỉm sữa hiện đại tiếp cận kiến thức y khoa y tế nhi khoa WHO cập nhật liên tục. Sự bất đồng này là ngòi nổ cho các cuộc chiến lạnh lạnh âm ỉ trong nhà.

### 2. Các tình huống xung đột kinh điển trong gia đình
*   **Ủ ấm quá mức:** Bà sợ cháu lạnh nên quấn 3-4 lớp chăn dày dù phòng nóng nực, mẹ bỉm sợ cháu sốt hoặc đột tử SIDS nên muốn bật điều hòa mát lạnh.
*   **Ăn dặm quá sớm:** Bà muốn cho cháu ăn dặm ăn bột từ 4 tháng tuổi để nặng cân mập mạp mập mạp, mẹ bỉm kiên quyết chờ đủ 6 tháng tuổi hệ tiêu hóa hoàn thiện hoàn thiện.

### 3. Bí quyết ứng xử thông minh vẹn cả đôi đường
*   **Mượn lời bác sĩ chuyên khoa:** Đừng trực tiếp tranh cãi cãi vã với mẹ chồng. Hãy mở các video chia sẻ của bác sĩ nhi khoa uy tín hoặc đưa mẹ chồng đi cùng trong các buổi khám dinh dưỡng tiêm phòng của cháu để bác sĩ trực tiếp tư vấn tư vấn giải thích khoa học.
*   **Thể hiện sự biết ơn chân thành:** Luôn nói lời cảm ơn mẹ chồng đã vất vả đỡ đần việc nhà: *"Con vô cùng biết ơn mẹ đã thức khuya dậy sớm chăm sóc mẹ con con. Tuy nhiên bác sĩ nhi khoa dặn rốn bé chưa rụng rụng bắt buộc phải chăm sóc hở thế này để tránh sưng mủ đấy ạ"*.
*   **Đồng lòng cùng chồng:** Chồng chính là cầu nối quan trọng nhất để giải thích nhẹ nhàng ôn hòa với mẹ đẻ của mình.`,
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80',
    views: 5210,
    likes: 467,
    created_at: '2026-05-20',
    author: 'Nhà tâm lý học gia đình Thanh Vân',
    faqs: JSON.stringify([
      { q: 'Mẹ chồng nhất quyết đòi cho bé dưới 1 tuổi uống nước lọc, làm sao cản?', a: 'Hãy in bài viết cảnh báo nhiễm độc nước và suy dinh dưỡng ở trẻ sơ sinh của WHO đưa cho chồng và mẹ chồng đọc, kết hợp giải thích nhẹ nhàng sữa mẹ đã chứa 88% là nước.' },
      { q: 'Làm thế nào để ông bà không tự ý đút bánh kẹo ngọt cho cháu?', a: 'Hãy chuẩn bị sẵn các hộp trái cây thanh nhã, sữa chua organic hoặc bánh ăn dặm tự làm dành riêng cho bé và dặn ông bà đút các món này khi cháu thèm ăn vặt.' }
    ])
  },
  {
    id: 'ts_04',
    title: 'Có con rồi, tôi nhận ra mình đã từng ích kỷ và thương mẹ đẻ nhiều hơn bao giờ hết',
    category: 'Góc tâm sự',
    sub_category: 'Tình mẫu tử thiêng liêng',
    tags: 'thương mẹ đẻ nhiều hơn,tình mẹ bao la,có con mới hiểu lòng cha mẹ,tâm sự làm mẹ',
    summary: 'Chỉ khi thực sự nằm trên bàn đẻ vượt cạn đớn đau, thức trắng đêm chăm con ốm nóng ran ran, tôi mới thấu hiểu trọn vẹn những hy sinh thầm lặng vô bờ bến của mẹ đẻ mình ngày xưa.',
    content: `### 1. Ngày xưa con từng bướng bỉnh ích kỷ
Thuở con gái mới lớn, tôi từng có những lúc cãi lời mẹ, giận dỗi bỏ bữa cơm vì mẹ cấm đoán đi chơi tối muộn, từng nghĩ mẹ thật phiền phức phiền hà cổ hủ. Tôi coi mọi sự chăm sóc chăm chút yêu thương nâng niu của mẹ là điều hiển nhiên của cuộc sống.

### 2. Sự thức tỉnh vỡ òa khi chính mình làm mẹ
*   Giây phút tôi nằm gồng mình đau đớn xé thịt trên bàn đẻ đẻ đẻ đẻ, nước mắt tuôn rơi ròng rã, mẹ đẻ tôi đứng ngoài phòng sinh cửa tay chắp lại cầu nguyện, mắt đỏ hoe đỏ hoe mong ngóng con gái ruột tai qua nạn khỏi.
*   Những đêm trắng ròng rã bế con sốt cao liên tục giật mình khóc thét, đôi tay rã rời kiệt sức, đầu óc căng thẳng stress stress, tôi bỗng bật khóc gọi thầm: *"Mẹ ơi!"*.
*   Hóa ra ngày xưa mẹ cũng từng một mình thức trắng đêm ôm ấp chăm sóc tôi vượt qua bao trận ốm đau bệnh tật giao mùa vất vả như thế này. Có con mới hiểu lòng cha mẹ bao la như biển khơi rộng lớn.

### 3. Lời xin lỗi muộn màng và cái ôm ấm áp
*   Nếu mẹ đẻ của bạn vẫn còn sống khỏe mạnh bên cạnh, hãy gọi điện ngay cho mẹ mỗi ngày, chủ động chạy lại ôm mẹ thật chặt và nói lời cảm ơn cảm kích sâu sắc. Đừng đợi đến khi quá muộn mới nhận ra tình yêu thương thiêng liêng nhất đời.`,
    image: 'https://images.unsplash.com/photo-1518104593124-ac2e82a5eb9d?w=600&auto=format&fit=crop&q=80',
    views: 4890,
    likes: 456,
    created_at: '2026-05-21',
    author: 'Mẹ Bỉm sữa Ngộ Nhận',
    faqs: JSON.stringify([
      { q: 'Làm sao để dung hòa khi mẹ đẻ chăm cháu cũng theo cách cũ?', a: 'Với mẹ đẻ, mẹ bỉm bỉm sữa dễ dàng thủ thỉ, trò chuyện trực tiếp thẳng thắn giải thích khoa học hoặc cùng mẹ đẻ đi khám dinh dưỡng để cả hai cùng thống nhất quan điểm nuôi dạy con.' },
      { q: 'Mẹ đẻ ở xa không giúp được gì có nên tủi thân?', a: 'Mẹ nên thường xuyên gọi video call để mẹ đẻ được ngắm cháu ngoại cười đùa, cảm nhận được tình thương yêu và sự kết nối ấm áp của gia đình dù ở xa.' }
    ])
  },
  {
    id: 'ts_05',
    title: 'Góc khuất làm mẹ bỉm sữa toàn thời gian: Những cô đơn không lời giải đáp phía sau cánh cửa',
    category: 'Góc tâm sự',
    sub_category: 'Mẹ bỉm sữa toàn thời gian',
    tags: 'mẹ bỉm sữa toàn thời gian,cô đơn trầm cảm,áp lực vô hình chăm con,góc khuất làm mẹ',
    summary: 'Nhiều người nghĩ ở nhà chăm con là sung sướng nhàn hạ rảnh rỗi. Sự thật đằng sau là những cô đơn cùng cực, sự mất kết nối xã hội và những nỗ lực thầm lặng không ai ghi nhận.',
    content: `### 1. Cái danh xưng vô hình "Chỉ ở nhà ăn bám chăm con"
Quyết định nghỉ việc văn phòng để ở nhà làm mẹ bỉm sữa toàn thời gian chăm sóc con trọn vẹn là một sự hy sinh cực kỳ to lớn. Thế nhưng, xã hội và đôi khi chính người chồng lại buông những lời vô tâm cay đắng: *"Ở nhà có mỗi việc bế con ăn chơi mà cũng kêu mệt!"*, *"Ở nhà ăn bám chồng vất vả kiếm tiền"*. Những câu nói đó như ngàn nhát dao đâm vào lòng người mẹ bỉm sữa.

### 2. Sự cô đơn quạnh quẽ tột cùng phía sau cánh cửa căn phòng nhỏ
*   Một ngày lặp lại đơn điệu nhàm chán từ 5 giờ sáng đến 12 giờ đêm: bỉm tã, cháo bột, dọn dẹp bãi chiến trường đồ chơi gỗ, bế ru ẵm khóc thét thức đêm.
*   Mẹ mất hoàn toàn kết nối với thế giới bạn bè xã hội bên ngoài ngoài ngoài, không trang điểm điệu đà, đầu bù tóc rối mỏi mệt mệt mỏi.
*   Nỗi cô đơn ập đến mỗi chiều muộn khi ngồi lủi thủi trong phòng chờ chồng về, nhưng chồng về lại mỏi mệt bấm điện thoại không thèm hỏi han một câu vợ hôm nay thế nào.

### 3. Giải pháp giải cứu tinh thần cho mẹ bỉm toàn thời gian
*   **Chồng hãy thấu hiểu ghi nhận:** Chăm con nhỏ toàn thời gian vất vả hơn đi làm công sở gấp 3 lần. Chồng hãy ôm vợ ghi nhận công lao vô giá này.
*   **Dành thời gian bước ra ngoài xã hội:** Mẹ nên gửi con cho chồng trông 1-2 tiếng mỗi cuối tuần để đi cafe cùng bạn bè, đi làm tóc làm đẹp tự tái tạo năng lượng sống tích cực.`,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80',
    views: 5430,
    likes: 498,
    created_at: '2026-05-22',
    author: 'Mẹ Bỉm sữa Trải Lòng',
    faqs: JSON.stringify([
      { q: 'Làm thế nào để ở nhà chăm con vẫn có thu nhập tự chủ?', a: 'Mẹ có thể tham khảo các công việc kinh doanh đồ ăn dặm handmade online vốn nhỏ tại nhà hoặc làm tiếp thị liên kết affiliate marketing vô cùng linh hoạt thời gian.' },
      { q: 'Con mấy tuổi mẹ nên đi làm lại để giải tỏa tâm lý?', a: 'Khi con tròn 1.5 - 2 tuổi tuổi mầm non đã biết tự chơi tự lập và nói cơ bản, mẹ hoàn toàn có thể yên tâm cho con đi học và quay lại sự nghiệp rực rỡ.' }
    ])
  },

  // ==========================================
  // 13. HỎI ĐÁP MẸ & BÉ (5 bài)
  // ==========================================
  {
    id: 'hd_01',
    title: 'Bé sơ sinh đi tướt mọc răng khác gì với tiêu chảy? Hướng dẫn phân biệt chính xác',
    category: 'Hỏi đáp mẹ & bé',
    sub_category: 'Tiêu hóa nhi khoa',
    tags: 'đi tướt mọc răng,phân biệt tiêu chảy ở trẻ,phân sống,mọc răng sốt nhẹ',
    summary: 'Hiện tượng đi tướt mọc răng rất dễ nhầm lẫn với tiêu chảy nhiễm khuẩn đường ruột nguy hiểm làm chậm điều trị. Hướng dẫn cha mẹ cách nhận diện chính xác từng dấu hiệu y khoa.',
    content: `### 1. Tại sao bé lại bị "Đi tướt" khi mọc răng?
Khi em bé mọc răng (nhú nầm nướu răng cửa), cơ thể bé sẽ sản sinh ra một lượng lớn enzyme trong nước bọt. Việc nuốt nhiều nước bọt chứa enzyme này xuống ruột sẽ kích thích nhu động ruột co bóp nhanh hơn gây ra hiện tượng đi ngoài phân hơi lỏng nhầy nhầy nhầy nhầy, dân gian gọi là "đi tướt mọc răng".

### 2. Bảng phân biệt khoa học chính xác giữa Đi Tướt và Tiêu Chảy
*   **Đi tướt mọc răng (Sinh lý hoàn hảo):**
    *   **Tần suất:** Chỉ đi ngoài khoảng 3 - 5 lần/ngày.
    *   **Tính chất phân:** Phân hơi sệt lỏng, màu vàng nhạt hoặc hơi xanh nhẹ, có chút nhầy cặn sữa, hoàn toàn không có mùi thối khắm bất thường.
    *   **Biểu hiện kèm theo:** Bé chỉ bị sốt nhẹ dưới 38 độ C hoặc không sốt; chảy nhiều nước dãi, hay cắn ngậm gặm gặm đồ chơi do ngứa nướu nướu răng; bé vẫn vui vẻ bú sữa ăn chơi bình thường không sút cân. Tình trạng tự hết sau 2-3 ngày khi răng đã nhú nhú lên hẳn.
*   **Tiêu chảy cấp (Bệnh lý nhiễm trùng nguy kịch):**
    *   **Tần suất:** Đi ngoài liên tục dồn dập trên 6-10 lần/ngày. Phân phun nước mạnh mạnh.
    *   **Tính chất phân:** Phân lỏng như nước nước nước, có mùi chua loét thối khắm đặc trưng hoặc rỉ ra chất nhầy lẫn vệt máu tươi âm thầm.
    *   **Biểu hiện kèm theo:** Bé sốt cao liên tục khó hạ; nôn mửa liên tục; ngủ li bì ngủ lịm mệt mỏi, mắt trũng sâu trũng trũng do mất nước nặng.

### 3. Quy trình chăm sóc xử lý y khoa chuẩn xác
*   **Khi đi tướt mọc răng:** Vệ sinh sạch vùng bẹn mông của con tránh hăm tã, không cần dùng bất kỳ loại thuốc tiêu chảy nào.
*   **Khi tiêu chảy cấp:** Cho bé uống bù nước điện giải **Oresol** pha chuẩn tỉ lệ hướng dẫn ngay lập tức và đưa con đi khám nhi khoa khẩn cấp.`,
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77ebe?w=600&auto=format&fit=crop&q=80',
    views: 6540,
    likes: 512,
    created_at: '2026-05-18',
    author: 'Bác sĩ Nhi khoa Đặng Văn Dương',
    faqs: JSON.stringify([
      { q: 'Bé mọc răng sốt cao trên 38.5 độ C có sao không?', a: 'Sốt mọc răng thực tế chỉ sốt nhẹ dưới 38 độ. Nếu bé sốt cao trên 38.5 độ C, đó là do bé bị lây nhiễm chéo virus/vi khuẩn khác đường hô hấp do ngậm gặm gặm đồ chơi bẩn khi ngứa nướu. Mẹ cần cho bé đi khám ngay.' },
      { q: 'Có nên bôi gel giảm đau mọc răng bán trên mạng?', a: 'Tuyệt đối không dùng các dòng gel giảm đau chứa Benzocaine bôi nướu cho trẻ vì có thể gây ngộ độc máu Methemoglobin cực kỳ nguy hiểm hô hấp tính mạng của bé.' }
    ])
  },
  {
    id: 'hd_02',
    title: 'Có nên cho bé sơ sinh uống nước lọc không? Cảnh báo nguy hiểm nhiễm độc nước ở trẻ',
    category: 'Hỏi đáp mẹ & bé',
    sub_category: 'Dinh dưỡng sơ sinh',
    tags: 'có nên cho trẻ sơ sinh uống nước lọc,nhiễm độc nước ở bé,sữa mẹ 88% nước,y khoa nhi',
    summary: 'Rất nhiều bà và mẹ chồng bắt cháu uống nước lọc để tráng miệng sạch miệng sau khi bú sữa sữa. Đây là sai lầm y tế chết người gây loãng máu ngộ độc nước cực kỳ nguy kịch.',
    content: `### 1. Tại sao trẻ sơ sinh dưới 6 tháng TUYỆT ĐỐI không uống nước lọc?
Tổ chức Y tế Thế giới (WHO) khuyến cáo khuyến cáo trẻ dưới 6 tháng tuổi hoàn toàn không cần và không được phép uống nước lọc do các lý do y học nghiêm trọng sau:
*   **Sữa mẹ đã chứa 88% là nước:** Nước trong sữa mẹ là nước tinh khiết vô trùng hoàn hảo, mát lành nhất, đáp ứng đầy đủ 100% nhu cầu nước cho bé ngay cả khi thời tiết nắng nóng hanh khô nhất.
*   **Thận bé còn quá non yếu:** Thận của trẻ sơ sinh chưa hoàn thiện hoàn toàn chức năng lọc. Việc nạp thêm nước lọc sẽ làm thận quá tải lọc natri, dẫn đến hiện tượng lượng natri trong máu bị loãng đi nhanh chóng, gây ra **hội chứng nhiễm độc nước ở trẻ sơ sinh**.
*   **Nguy cơ còi xương suy dinh dưỡng:** Nước lọc lấp đầy dạ dày nhỏ bé vốn chỉ bằng quả chanh của con, tạo cảm giác no giả làm con lười bú sữa, thiếu hụt dưỡng chất trầm trọng.

### 2. Triệu chứng nhiễm độc nước cấp tính ở bé sơ sinh
Cha mẹ cần đưa bé đi viện cấp cứu ngay nếu phát hiện bé lỡ uống nhiều nước lọc lọc và có biểu hiện:
*   Bé ngủ li bì, lơ mơ mệt mỏi, khó đánh thức.
*   Thân nhiệt giảm sâu đột ngột dưới 36 độ C kèm rụng rốn ẩm sưng.
*   Xuất hiện các cơn giật nhẹ cơ mặt mặt hoặc co giật toàn thân cực kỳ nguy hiểm.

### 3. Vệ sinh khoang miệng đúng cách không dùng nước lọc
*   Mẹ chỉ cần dùng gạc xô vô trùng thấm nhẹ nước muối sinh lý ấm rơ rơ miệng và lưỡi nhẹ nhàng cho con 1-2 lần/ngày như hướng dẫn nha khoa, hoàn toàn không cần cho uống nước lọc để tráng miệng.`,
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=600&auto=format&fit=crop&q=80',
    views: 7120,
    likes: 645,
    created_at: '2026-05-19',
    author: 'Tiến sĩ Bác sĩ Nguyễn Văn Lâm',
    faqs: JSON.stringify([
      { q: 'Trẻ trên 6 tháng tuổi uống bao nhiêu nước lọc mỗi ngày là vừa?', a: 'Trẻ ăn dặm từ 6-12 tháng tuổi chỉ cần uống khoảng 30 - 60ml nước lọc ấm sau mỗi bữa ăn chủ yếu để tráng miệng sạch khoang họng.' },
      { q: 'Pha sữa công thức loãng hơn để bù nước cho con bị sốt được không?', a: 'Tuyệt đối không pha sữa loãng hoặc đậm đặc hơn hướng dẫn của nhà sản xuất vì sẽ phá vỡ cân bằng áp suất thẩm thấu dạ dày của con, gây suy dinh dưỡng hoặc tiêu chảy nặng.' }
    ])
  },
  {
    id: 'hd_03',
    title: 'Làm thế nào để biết bé đã bú đủ sữa mẹ? Bảng theo dõi số lượng bỉm ướt tiêu chuẩn',
    category: 'Hỏi đáp mẹ & bé',
    sub_category: 'Theo dõi sức khỏe',
    tags: 'bé bú đủ sữa mẹ,số lượng bỉm ướt tiêu chuẩn,tăng cân bé sơ sinh,y khoa mẹ bé',
    summary: 'Sữa mẹ chảy âm thầm bên trong bầu ngực vú vú vú vú làm mẹ lo lắng không biết con có bị đói bú sữa thiếu chất hay không. Cùng dựa vào các chỉ số bỉm ướt bỉm bẩn và cân nặng chuẩn xác.',
    content: `### 1. Chỉ số vàng theo dõi số lượng bỉm ướt trong ngày
Cách chuẩn xác nhất của y khoa để xác định lượng sữa bé nạp vào cơ thể là đếm số lượng bỉm ướt của con hàng ngày:
*   **Trẻ từ 1 - 2 ngày tuổi:** Chỉ cần ướt từ 1 - 2 chiếc bỉm/ngày do lượng sữa non của mẹ lúc này mới tiết ra rất ít nhỏ giọt và dạ dày con bé bằng quả nho.
*   **Trẻ từ 6 ngày tuổi trở lên (Sữa mẹ đã về dồi dào dồi dào):**
    Bé phải ướt đẫm nặng tay từ **6 - 8 chiếc bỉm vải/bỉm giấy mỗi 24 giờ**. Nước tiểu của bé phải có màu vàng nhạt trong suốt hoặc không màu, không có mùi hôi nồng nặc. Nếu nước tiểu màu vàng sẫm đậm vệt cam là biểu hiện bé đang bị đói sữa thiếu nước trầm trọng.

### 2. Các biểu hiện cơ thể của bé bú no sữa mẹ
*   **Trạng thái thư giãn dễ chịu:** Bé tự nhả núm ti mẹ ra khi đã no nê, hai tay con duỗi thẳng mở rộng ngực thoải mái, vẻ mặt lim dim thỏa mãn thỏa mãn đi vào giấc ngủ sâu ngon lành trên 2 giờ.
*   **Bầu ngực mẹ mềm đi rõ rệt:** Trước khi bú, bầu vú căng cứng to rõ; sau khi bú xong, ngực mẹ xẹp mềm mại, nhẹ bẫng dễ chịu chứng tỏ tuyến sữa đã được vắt sạch cạn kiệt.

### 3. Tốc độ tăng cân chuẩn y khoa của bé sơ sinh
*   Trong 3 tháng đầu đời, cân nặng của bé phải tăng trưởng đều đặn trung bình từ **150g - 200g mỗi tuần** (khoảng 800g - 1kg/tháng). Mẹ chỉ cần cân con 1 lần/tháng vào đúng ngày sinh tròn tháng, không nên cân hàng ngày tạo áp lực lo âu lo âu.`,
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&auto=format&fit=crop&q=80',
    views: 4890,
    likes: 412,
    created_at: '2026-05-20',
    author: 'Dr. Hải Anh',
    faqs: JSON.stringify([
      { q: 'Hiện tượng mất nước sinh lý sau sinh là gì?', a: 'Trong 3-5 ngày đầu sau sinh, bé sẽ bị sụt khoảng 5% - 7% trọng lượng cơ thể do đào thải phân su phân su và thoát dịch lỏng. Cân nặng của bé sẽ tự động phục hồi hoàn toàn sau 10-14 ngày tuổi.' },
      { q: 'Bé bú mẹ hoàn toàn đi phân lỏng sệt nhiều lần có sao không?', a: 'Hoàn toàn bình thường. Phân hoa cà hoa cải lỏng sệt nhầy có hạt cặn sữa màu vàng là đặc trưng phân sinh lý của trẻ bú mẹ hoàn toàn, không phải tiêu chảy tiêu chảy.' }
    ])
  },
  {
    id: 'hd_04',
    title: 'Bé 3 tháng tuổi ngủ hay giật mình, rướn người đỏ mặt có sao không? Cách xử lý an toàn',
    category: 'Hỏi đáp mẹ & bé',
    sub_category: 'Giấc ngủ nhi khoa',
    tags: 'bé ngủ giật mình,bé rướn người đỏ mặt,phản xạ giật mình Moro,swaddle quấn chũn',
    summary: 'Rướn người gồng đỏ mặt tai và ngủ hay giật mình nảy người là biểu hiện khiến nhiều cha mẹ lúng túng dọa con thiếu canxi bổ sung bừa bãi. Phân tích nguyên nhân y khoa nhi chuẩn xác.',
    content: `### 1. Phản xạ giật mình Moro bẩm sinh ở trẻ sơ sinh
Trẻ dưới 4 tháng tuổi có hệ thần kinh vận động chưa trưởng thành hoàn toàn, chưa thể kiểm soát được hoạt động tự chủ của tay chân. Khi có tiếng động nhẹ đột ngột hoặc cảm giác hẫng hụt thăng bằng, bé sẽ tự động duỗi thẳng hai tay hai chân chân, xòe ngón tay và co lại khóc thét nảy người lên. Đây gọi là **phản xạ giật mình Moro bẩm sinh** hoàn toàn bình thường bảo vệ sự sống sót của trẻ.

### 2. Hiện tượng rướn người gồng đỏ mặt tai sinh lý
*   Trẻ sơ sinh tăng trưởng chiều dài cơ thể rất nhanh trong 3 tháng đầu. Để kéo giãn xương nướu cơ gân, bé thường gồng gập người, đỏ bừng mặt tai lên trong vòng 1-2 phút rồi xẹp nhẹ nhõm.
*   Hiện tượng này hoàn toàn lành tính nếu con vẫn tăng cân đều, bú bú bú sữa tốt, không quấy khóc quằn quại liên tục cả ngày đêm.

### 3. Cách hỗ trợ xoa dịu giúp bé ngủ thẳng giấc ngon lành
*   **Sử dụng nhộng chũn / quấn chũn êm ái:** Chũn thun co giãn tốt giúp ôm nhẹ giữ hai tay bé sát lồng ngực, ngăn chặn đường đi của phản xạ Moro giật mình Moro hiệu quả.
*   **Bổ sung Vitamin D3 K2 đầy đủ:** Đảm bảo con hấp thu canxi tốt từ sữa mẹ để phát triển răng xương chắc khỏe, hạn chế trằn trọc đổ mồ hôi trộm.
*   **Mát xa nhẹ nhàng tay chân:** Mát xa vuốt nhẹ cơ bắp chân đùi giúp con giải tỏa sự mỏi mệt mỏi mỏi mỏi mỏi cơ thể sau ngày dài rướn người.`,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=80',
    views: 4560,
    likes: 387,
    created_at: '2026-05-21',
    author: 'Bác sĩ Nhi khoa Nguyễn Trí',
    faqs: JSON.stringify([
      { q: 'Bé rướn người khóc thét quằn quại kèm ọc sữa liên tục là bị sao?', a: 'Mẹ cần đưa bé đi khám sớm. Gồng mình rướn người kèm ọc sữa vọt nhiều lần có thể là triệu chứng của bệnh lý Trào ngược dạ dày thực quản (GERD) hoặc thiếu vi chất canxi phốt pho nặng.' },
      { q: 'Khi nào phản xạ giật mình Moro tự động biến mất?', a: 'Phản xạ này sẽ thuyên giảm dần rõ rệt sau 3 tháng tuổi và biến mất hoàn toàn khi bé được 5 - 6 tháng tuổi.' }
    ])
  },
  {
    id: 'hd_05',
    title: 'Khi nào cần bổ sung Vitamin D3 K2 cho bé? Liều lượng bổ sung chuẩn theo độ tuổi',
    category: 'Hỏi đáp mẹ & bé',
    sub_category: 'Vi chất dinh dưỡng',
    tags: 'vitamin D3 K2 cho bé,liều lượng D3 K2 chuẩn y khoa,còi xương trẻ sơ sinh,phơi nắng',
    summary: 'Vitamin D3 K2 quyết định 99% khả năng hấp thu canxi vào xương cốt của bé sơ sinh, chống còi xương rụng tóc vành khăn trằn trọc đổ mồ hôi trộm. Khám phá cẩm nang bổ sung chuẩn bác sĩ nhi.',
    content: `### 1. Tại sao sữa mẹ và tắm nắng không cung cấp đủ Vitamin D3?
Nhiều cha mẹ tin rằng sữa mẹ chứa đầy đủ mọi chất dinh dưỡng nên không cần bổ sung gì thêm. Đây là quan điểm sai lầm y học:
*   **Sữa mẹ chứa rất ít Vitamin D3** (chỉ đạt khoảng 20-40 IU/lít sữa, trong khi nhu cầu tối thiểu của trẻ sơ sinh là **400 IU/ngày**).
*   **Tắm nắng sơ sinh tiềm ẩn nguy cơ ung thư da:** Làn da trẻ sơ sinh mỏng manh, nhạy cảm dễ bị bỏng rát tổn thương bởi tia cực tím UV độc hại. Viện Hàn Lâm Nhi Khoa Hoa Kỳ khuyến cáo không cho bé dưới 6 tháng tuổi tiếp xúc trực tiếp ánh nắng gắt gao. Do đó, việc nhỏ giọt bổ sung Vitamin D3 trực tiếp hàng ngày là giải pháp an toàn tối ưu hàng đầu.

### 2. Vai trò hiệp đồng kỳ diệu của Vitamin D3 và K2 (Dòng MK7)
*   **Vitamin D3:** Giúp hấp thu canxi từ ruột non vào trong dòng máu nuôi dưỡng cơ thể.
*   **Vitamin K2 (Dòng MK7):** Đóng vai trò là người gác cổng thông minh định hướng, kích hoạt protein Osteocalcin để **vận chuyển canxi từ máu gắn trực tiếp vào trong xương và răng**. Nếu thiếu K2, canxi tự do trong máu dễ bị lắng đọng xơ vữa mạch máu hoặc lắng sỏi thận rất nguy hiểm.

### 3. Liều lượng bổ sung chuẩn y khoa theo khuyến nghị quốc tế
*   **Bé từ 0 - 12 tháng tuổi:** Bổ sung liều dự phòng đều đặn **400 IU Vitamin D3 + 10-15 mcg Vitamin K2 MK7 mỗi ngày**. Nhỏ giọt trực tiếp vào miệng bé vào lúc sáng sớm sau ăn sữa để hấp thu canxi tốt nhất.
*   **Bé từ 1 - 2 tuổi:** Bổ sung liều **600 IU Vitamin D3/ngày**.`,
    image: 'https://images.unsplash.com/photo-1628771065518-0d82f1118187?w=600&auto=format&fit=crop&q=80',
    views: 5490,
    likes: 489,
    created_at: '2026-05-22',
    author: 'Bác sĩ Nhi khoa Lâm Khánh',
    faqs: JSON.stringify([
      { q: 'Nhỏ quá liều Vitamin D3 có nguy hiểm không?', a: 'Rất nguy hiểm. Ngộ độc vitamin D do quá liều kéo dài gây tăng canxi huyết nặng, làm lắng sỏi suy thận, vôi hóa mạch máu của bé sơ sinh. Mẹ tuyệt đối dùng đúng liều lượng 1-2 giọt/ngày theo khuyến cáo.' },
      { q: 'Vitamin D3 K2 nhỏ vào sữa công thức nóng được không?', a: 'Không nên nhỏ trực tiếp vào bình sữa nóng vì nhiệt độ sữa trên 50 độ C sẽ làm phân hủy phân rã hoạt tính của Vitamin K2. Hãy nhỏ khi sữa đã ấm mát dưới 40 độ hoặc nhỏ trực tiếp miệng bé.' }
    ])
  }
];

async function run() {
  console.log('⚡ Đang kết nối tới đám mây Neon Postgres...');
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });

  try {
    // 1. Clear các bài viết cũ
    console.log('🧹 Đang xóa sạch các bài viết cũ trong cơ sở dữ liệu...');
    await pool.query('DELETE FROM articles;');
    console.log('✅ Đã xóa sạch thành công!');

    // 2. Chèn 65 bài viết mới bằng Prepared Statements để tránh lỗi cú pháp
    console.log('📝 Bắt đầu nạp 65 bài viết chuẩn SEO y khoa...');
    const insertQuery = `
      INSERT INTO articles (id, title, category, sub_category, tags, summary, content, image, views, likes, created_at, author, faqs)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13::jsonb);
    `;

    let count = 0;
    for (const art of articles) {
      await pool.query(insertQuery, [
        art.id,
        art.title,
        art.category,
        art.sub_category,
        art.tags,
        art.summary,
        art.content,
        art.image,
        art.views,
        art.likes,
        art.created_at,
        art.author,
        art.faqs
      ]);
      count++;
      if (count % 5 === 0) {
        console.log(`✨ Đã nạp thành công ${count}/65 bài viết...`);
      }
    }

    console.log(`\n🎉 HOÀN THÀNH XUẤT SẮC! Tổng số bài viết đã nạp: ${count} bài.`);
    
    // 3. Đọc kiểm tra kết quả chèn
    const groupRes = await pool.query('SELECT category, COUNT(*) FROM articles GROUP BY category ORDER BY count DESC;');
    console.log('\n📊 Thống kê số bài viết theo chuyên mục trong database:');
    groupRes.rows.forEach(row => {
      console.log(`🔹 Chuyên mục [${row.category}]: ${row.count} bài.`);
    });

  } catch (err) {
    console.error('❌ Lỗi nạp dữ liệu bài viết chuẩn SEO:', err.message);
  } finally {
    await pool.end();
    console.log('🔌 Đã ngắt kết nối an toàn với cơ sở dữ liệu.');
  }
}

run();
