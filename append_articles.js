const fs = require('fs');
const { Pool } = require('pg');
require('dotenv').config();

// Mảng 20 bài viết chuẩn SEO y khoa cực kỳ chi tiết và chất lượng cao
const newArticles = [
  // --- CHUYÊN MỤC: TRẺ SƠ SINH (5 bài) ---
  {
    id: 'art_15',
    title: 'Hướng dẫn massage cho trẻ sơ sinh giúp bé ngủ ngon, tiêu hóa tốt và tăng đề kháng',
    category: 'Trẻ sơ sinh',
    subCategory: 'Chăm sóc bé',
    tags: ['trẻ sơ sinh', 'massage bé', 'chăm sóc bé', 'tiêu hóa tốt'],
    summary: 'Massage cho trẻ sơ sinh mang lại nhiều lợi ích tuyệt vời như kích thích hệ tiêu hóa, giảm đầy hơi táo bón, giúp bé thư giãn ngủ sâu giấc và tăng cường liên kết tình cảm mẫu tử.',
    content: `
Massage cho trẻ sơ sinh không chỉ đơn thuần là các thao tác vuốt ve, mà là một phương pháp trị liệu khoa học mang lại nhiều lợi ích to lớn cho sự phát triển thể chất và tinh thần của bé.

### 1. Lợi ích vượt trội của việc massage cho trẻ sơ sinh
Nhiều nghiên cứu y khoa chỉ ra rằng massage đều đặn mỗi ngày mang lại:
*   **Kích thích hệ tiêu hóa:** Giúp đẩy khí thừa ra ngoài, giảm tình trạng đầy bụng, khó tiêu và táo bón sinh lý thường gặp ở trẻ sơ sinh.
*   **Cải thiện chất lượng giấc ngủ:** Massage làm giảm nồng độ hormone cortisol (gây căng thẳng) và kích thích sản sinh melatonin (hormone điều hòa giấc ngủ), giúp bé dễ ngủ và ngủ sâu hơn.
*   **Phát triển xúc giác và não bộ:** Kích thích các thụ thể cảm giác dưới da, tăng tốc độ myelin hóa các sợi thần kinh, giúp não bộ xử lý thông tin nhạy bén hơn.
*   **Tăng cường hệ miễn dịch:** Kích thích hệ bạch huyết lưu thông tốt hơn, giúp trẻ chống lại các tác nhân gây bệnh nhiễm trùng thông thường.

### 2. Các bước massage bé sơ sinh chuẩn khoa học
Hãy thực hiện các động tác thật nhẹ nhàng bằng lòng bàn tay và các đầu ngón tay mềm mại của bạn:

*   **Massage vùng ngực (Động tác Mở sách):**
    Đặt hai lòng bàn tay lên giữa ngực bé, vuốt nhẹ nhàng ra hai bên sườn tạo thành hình trái tim, sau đó vuốt trở lại vị trí cũ. Động tác này giúp giãn cơ ngực, hỗ trợ bé hô hấp sâu và đều đặn.
*   **Massage bụng giảm đầy hơi (Động tác I Love U):**
    *   **I:** Dùng tay phải vuốt một đường thẳng từ dưới sườn trái của bé xuống hông trái.
    *   **Love:** Vuốt từ dưới sườn phải sang sườn trái, rồi vuốt dọc xuống hông trái (tạo thành chữ L ngược).
    *   **U:** Vuốt từ hông phải lên sườn phải, sang sườn trái và dọc xuống hông trái (tạo thành chữ U ngược). Đây là đường đi của đại tràng, giúp đẩy hơi thừa hiệu quả.
*   **Massage tay chân:**
    Vuốt nhẹ từ đùi xuống cổ chân bé (động tác vắt sữa sữa), sau đó dùng ngón tay cái xoay nhẹ lòng bàn chân bé theo chiều kim đồng hồ để kích thích các huyệt đạo. Làm tương tự với cánh tay.

### 3. Nguyên tắc an toàn y khoa khi massage cho bé
*   **Nhiệt độ phòng thích hợp:** Đảm bảo phòng kín gió, ấm áp khoảng 27-28 độ C.
*   **Thời điểm vàng:** Massage khi bé tỉnh táo, dễ chịu (khoảng 45 phút sau khi bú hoặc ngay sau khi tắm xong). Tuyệt đối không massage khi bé vừa ăn no hoặc đang sốt, mệt mỏi.
*   **Lựa chọn dầu massage:** Nên dùng dầu tự nhiên ép lạnh như dầu dừa organic hoặc dầu hướng dương không chứa hương liệu nhân tạo để bảo vệ làn da non nớt của trẻ.

> **Lời khuyên y khoa:** Hãy quan sát phản ứng của bé. Nếu bé khóc, ngọ nguậy khó chịu, hãy dừng lại ngay lập tức. Mục tiêu cốt lõi của massage là tạo cảm giác thư giãn và an toàn tối đa cho bé.
    `,
    views: 3450,
    likes: 290,
    bookmarkCount: 140,
    createdAt: '2026-05-20',
    author: 'Dr. Hải Anh',
    isFeatured: true,
    isTrending: true,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=80',
    faqs: [
      { q: 'Trẻ sơ sinh mấy ngày tuổi có thể massage được?', a: 'Mẹ có thể bắt đầu vuốt ve bé nhẹ nhàng từ những ngày đầu sau sinh. Khi cuống rốn rụng và lành hoàn toàn (thường sau 10-14 ngày), mẹ có thể bắt đầu massage bài bản hơn.' },
      { q: 'Có nên massage bằng dầu tràm không?', a: 'Không nên. Dầu tràm hoặc dầu khuynh diệp chứa tinh dầu đậm đặc có tính nóng cao, dễ gây bỏng rát và kích ứng làn da mỏng manh của bé.' }
    ]
  },
  {
    id: 'art_16',
    title: 'Da bé bị chàm sữa (viêm da cơ địa): Bí quyết chăm sóc và dưỡng ẩm chuẩn y khoa tại nhà',
    category: 'Trẻ sơ sinh',
    subCategory: 'Làn da bé',
    tags: ['chàm sữa', 'viêm da cơ địa', 'chăm sóc da', 'trẻ sơ sinh'],
    summary: 'Chàm sữa là bệnh ngoài da cực kỳ phổ biến khiến bé ngứa ngáy, khó chịu và quấy khóc liên tục. Khám phá ngay quy trình tắm, dưỡng ẩm và chọn kem bôi chuẩn y khoa để trị dứt điểm cho con.',
    content: `
Chàm sữa (hay viêm da cơ địa ở trẻ sơ sinh) là tình trạng viêm da mãn tính, tái phát thường gặp ở trẻ từ 2 tháng đến 2 tuổi. Biểu hiện là hai má bé đỏ ửng, nổi các mụn nước nhỏ liti, da thô ráp, bong tróc làm trẻ ngứa ngáy và gãi liên tục.

### 1. Nguyên nhân thực sự gây chàm sữa ở trẻ
Chàm sữa không phải do lây nhiễm hay do mẹ vệ sinh kém, mà do sự kết hợp của:
*   **Yếu tố di truyền:** Trong gia đình có bố, mẹ hoặc người thân bị hen suyễn, viêm mũi dị ứng hoặc viêm da cơ địa.
*   **Hàng rào bảo vệ da bị suy yếu:** Làn da trẻ sơ sinh mất nước nhanh hơn da người lớn, dễ bị khô ráp và nhạy cảm với các dị nguyên bên ngoài.
*   **Các dị nguyên kích ứng:** Bụi bẩn, lông thú cưng, len sợi tổng hợp, bột giặt có chất tẩy mạnh, thời tiết hanh khô hoặc dị ứng sữa.

### 2. Quy trình chăm sóc làn da chàm sữa chuẩn y tế
Chìa khóa cốt lõi để đẩy lùi chàm sữa là **"Giữ sạch - Dưỡng ẩm - Chống viêm"**:

*   **Tắm cho bé đúng cách:**
    *   Tắm nước ấm vừa phải (35-36 độ C), không tắm quá 10 phút để tránh mất độ ẩm tự nhiên của da.
    *   Sử dụng sữa tắm chuyên dụng cho da chàm, không bọt, không hương liệu (fragrance-free) có độ pH trung tính.
*   **Dưỡng ẩm - Bước quan trọng nhất:**
    *   Thoa kem dưỡng ẩm (emollient) chuyên biệt cho trẻ bị chàm sữa **ngay trong vòng 3 phút sau khi tắm** (khi da còn hơi ẩm).
    *   Thoa lại đều đặn **3-4 lần/ngày** trên toàn bộ vùng da khô đỏ sần sùi. Da đủ ẩm sẽ tái tạo hàng rào bảo vệ, ngăn ngừa tình trạng kích ứng gây ngứa.
*   **Kiểm soát ngứa và viêm da:**
    *   Cắt ngắn móng tay của bé hoặc đeo bao tay cotton mềm để ngăn bé cào gãi làm xước da gây nhiễm trùng thứ phát.
    *   Chọn quần áo rộng rãi, chất liệu 100% cotton mềm mại, thấm hút mồ hôi tốt.

### 3. Cảnh báo những sai lầm phổ biến khi điều trị chàm sữa
*   **Tự ý bôi kem chứa Corticoid liều cao:** Các loại kem trị chàm trôi nổi trên mạng thường chứa corticoid mạnh. Bôi kéo dài gây teo da, rạn da, suy tuyến thượng thận cực kỳ nguy hiểm. Chỉ dùng corticoid nhẹ khi có chỉ định cụ thể của bác sĩ da liễu trong thời gian ngắn (3-5 ngày).
*   **Tắm các loại lá dân gian:** Tắm lá chè xanh, sài đất, mướp đắng... khi da đang bị tổn thương hở có thể gây nhiễm trùng da, nhiễm trùng huyết đe dọa tính mạng của trẻ do vi khuẩn bám trên lá.

> **Lời khuyên y khoa:** Chàm sữa là bệnh mãn tính có tính chất tự giới hạn, đa số trẻ sẽ tự khỏi khi lớn dần (sau 1-2 tuổi). Việc duy trì bôi kem dưỡng ẩm đều đặn hàng ngày là giải pháp phòng ngừa tái phát hiệu quả nhất.
    `,
    views: 4500,
    likes: 380,
    bookmarkCount: 220,
    createdAt: '2026-05-18',
    author: 'Dr. Hải Anh',
    isFeatured: false,
    isTrending: true,
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77ebe?w=600&auto=format&fit=crop&q=80',
    faqs: [
      { q: 'Bôi kem dưỡng ẩm loại nào tốt cho bé bị chàm sữa?', a: 'Nên chọn các dòng kem dưỡng ẩm chuyên biệt cho da viêm cơ địa có chứa Ceramide, không mùi hương nhân tạo, ví dụ như Aveeno Baby, Cetaphil Pro AD Derma, hoặc Dexeryl.' },
      { q: 'Bé bị chàm sữa mẹ có cần kiêng ăn gì không?', a: 'Nếu bé bú mẹ hoàn toàn, mẹ chỉ nên kiêng các thực phẩm dễ dị ứng (như hải sản, trứng, bò, đậu phộng) khi thấy biểu hiện chàm sữa của bé bùng phát dữ dội sau khi mẹ ăn các loại đồ ăn này.' }
    ]
  },
  {
    id: 'art_17',
    title: 'Vệ sinh tai, mũi, họng cho trẻ sơ sinh: Tránh ngay 5 sai lầm tai hại gây tổn thương niêm mạc của bé',
    category: 'Trẻ sơ sinh',
    subCategory: 'Vệ sinh cho bé',
    tags: ['vệ sinh trẻ sơ sinh', 'rửa mũi cho bé', 'rơ lưỡi', 'chăm sóc bé'],
    summary: 'Vệ sinh tai, mũi, họng cho trẻ sơ sinh đòi hỏi sự nhẹ nhàng và dụng cụ vô trùng. Khám phá quy trình vệ sinh chuẩn y khoa và 5 sai lầm nghiêm trọng mẹ cần tuyệt đối tránh xa.',
    content: `
Tai, mũi, họng là các cửa ngõ hô hấp cực kỳ nhạy cảm của trẻ sơ sinh. Do niêm mạc của trẻ còn quá mỏng manh và dễ tổn thương, việc vệ sinh không đúng cách vô tình tạo điều kiện cho vi khuẩn xâm nhập sâu, gây viêm tai giữa, viêm mũi họng kéo dài.

### 1. Hướng dẫn vệ sinh tai, mũi, họng chuẩn y khoa
*   **Vệ sinh tai an toàn:**
    *   Chỉ dùng khăn mềm ẩm lau sạch và khô vùng vành tai bên ngoài và các nếp gấp sau tai của bé.
    *   Tuyệt đối **không được chọc tăm bông hoặc các dụng cụ cứng** vào sâu trong ống tai ngoài của bé. Ráy tai là chất bảo vệ tự nhiên, nó sẽ tự đẩy ra ngoài vành tai khi bé nhai hoặc bú.
*   **Vệ sinh mũi khi bé khò khè:**
    *   Nếu mũi bé bình thường, không có dịch, không cần nhỏ nước muối sinh lý hàng ngày vì dễ làm mất đi chất nhầy bảo vệ tự nhiên.
    *   Nếu bé bị nghẹt mũi sinh lý, hãy nhỏ 1-2 giọt nước muối sinh lý ấm 0.9% vào mỗi bên mũi để làm loãng chất nhầy, sau đó mát-xa cánh mũi nhẹ nhàng hoặc cho bé nằm cao đầu một chút dịch mũi sẽ tự chảy ra hoặc xuống họng.
*   **Vệ sinh họng và rơ lưỡi:**
    *   Rơ lưỡi cho bé tối thiểu 1-2 lần/ngày (đặc biệt sau cữ bú sáng hoặc tối) bằng gạc vô trùng thấm nước muối sinh lý ấm hoặc dịch rơ lưỡi chuyên dụng để tránh bị tưa lưỡi (nấm lưỡi).

### 2. 5 sai lầm tai hại mẹ bỉm cần tránh tuyệt đối
*   **Sai lầm 1: Hút mũi cho bé quá nhiều lần bằng dụng cụ hút.**
    Lực hút mạnh và cọ xát thường xuyên của ống hút sẽ làm trầy xước niêm mạc mũi nhạy cảm, gây phù nề, sưng tấy và thậm chí khiến mũi bé tiết nhiều dịch hơn.
*   **Sai lầm 2: Nhỏ nước tỏi ép vào mũi để trị ngạt mũi.**
    Nước tỏi có tính cay nóng cực mạnh, bôi hoặc nhỏ trực tiếp vào mũi trẻ sơ sinh có thể gây phỏng niêm mạc mũi nghiêm trọng, dẫn đến hoại tử niêm mạc rất nguy hiểm.
*   **Sai lầm 3: Dùng miệng hút mũi trực tiếp cho con.**
    Miệng người lớn chứa hàng triệu vi khuẩn có thể lây lan trực tiếp các mầm bệnh truyền nhiễm nguy hiểm sang cho trẻ sơ sinh có hệ miễn dịch còn yếu ớt.
*   **Sai lầm 4: Chọc ngoáy tăm bông vào sâu lỗ tai.**
    Hành động này vô tình đẩy ráy tai thụt sâu hơn vào trong màng nhĩ, tạo thành nút ráy tai gây đau, ù tai hoặc nguy hiểm hơn là làm thủng màng nhĩ mỏng manh của trẻ.
*   **Sai lầm 5: Nhỏ thuốc co mạch mũi (như Otrivin, Naphazolin) bừa bãi.**
    Những loại thuốc này chỉ dùng cho trẻ lớn dưới sự chỉ định nghiêm ngặt của bác sĩ. Dùng cho trẻ sơ sinh dễ gây ngộ độc, hạ thân nhiệt, ức chế hô hấp rất nguy kịch.

> **Lời khuyên y khoa:** Tai-mũi-họng của bé có cơ chế tự làm sạch rất tốt. Chỉ vệ sinh sâu khi có biểu hiện bệnh lý và hãy luôn ưu tiên các phương pháp tự nhiên, dịu nhẹ và vô trùng.
    `,
    views: 2900,
    likes: 195,
    bookmarkCount: 88,
    createdAt: '2026-05-15',
    author: 'Dr. Hải Anh',
    isFeatured: false,
    isTrending: false,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop&q=80',
    faqs: [
      { q: 'Tưa lưỡi ở trẻ sơ sinh có tự hết không?', a: 'Không. Tưa lưỡi do nấm Candida phát triển quá mức. Mẹ cần rơ lưỡi hàng ngày bằng gạc và dùng thuốc kháng nấm như Nystatin dạng rơ lưỡi nếu nấm lan rộng theo chỉ định bác sĩ.' },
      { q: 'Rửa mũi bằng xi lanh xịt nước muối sinh lý có an toàn không?', a: 'Với trẻ sơ sinh dưới 6 tháng tuổi, tuyệt đối không dùng xi lanh bơm áp lực mạnh để xịt rửa mũi vì dễ gây sặc nước vào phổi hoặc làm rách niêm mạc mũi bé.' }
    ]
  },
  {
    id: 'art_18',
    title: 'Trẻ sơ sinh khóc dạ đề (Colic): Hiểu đúng nguyên nhân và 6 cách xoa dịu giúp bé vượt qua khủng hoảng',
    category: 'Trẻ sơ sinh',
    subCategory: 'Tâm lý & Giấc ngủ',
    tags: ['khóc dạ đề', 'colic', 'trẻ quấy khóc', 'chăm sóc bé'],
    summary: 'Khóc dạ đề (Colic) là nỗi ám ảnh của nhiều gia đình có con nhỏ khi bé khóc ngặt nghẽo hàng giờ liên tục vào chiều tối mà không cách nào dỗ dành. Khám phá 6 cách xoa dịu hiệu quả chuẩn y khoa.',
    content: `
Khóc dạ đề (Colic/Hội chứng quấy khóc ở trẻ sơ sinh) là tình trạng một đứa trẻ khỏe mạnh quấy khóc dữ dội, khóc thét liên tục nhiều giờ mà không có lý do rõ ràng. Colic thường bắt đầu từ 2-3 tuần tuổi, đạt đỉnh điểm ở tuần thứ 6 và giảm dần sau 3-4 tháng tuổi.

### 1. Quy tắc "Con số 3" nhận diện khóc dạ đề Colic
Trẻ được chẩn đoán khóc dạ đề khi đáp ứng đủ các tiêu chí y khoa sau:
*   Khóc liên tục từ **3 giờ trở lên** mỗi ngày.
*   Quấy khóc ít nhất **3 ngày mỗi tuần**.
*   Tình trạng này kéo dài liên tục **3 tuần trở lên**.
*   Bé khóc ngặt nghẽo đỏ gay mặt, hai tay nắm chặt, hai chân co lên bụng, bụng căng cứng, thường xảy ra vào cùng một khung giờ chiều hoặc tối muộn.

### 2. Nguyên nhân sâu xa của khóc dạ đề
Cho đến nay, y học vẫn chưa tìm ra nguyên nhân chính xác 100% gây ra Colic. Tuy nhiên, các chuyên gia nhi khoa đồng ý với các giả thuyết hàng đầu sau:
*   **Hệ tiêu hóa chưa hoàn thiện:** Trẻ dễ bị đầy hơi, co thắt ruột do chưa tiêu hóa hết đường lactose trong sữa hoặc mất cân bằng hệ vi sinh đường ruột.
*   **Hệ thần kinh quá tải:** Trẻ sơ sinh rất nhạy cảm với ánh sáng, tiếng ồn, môi trường xung quanh và chưa biết cách tự xoa dịu bản thân dẫn đến căng thẳng, khóc thét.
*   **Dị ứng thực phẩm:** Bé dị ứng với đạm sữa bò hoặc nhạy cảm với thức ăn từ sữa mẹ truyền sang.

### 3. 6 cách xoa dịu trẻ khóc dạ đề hiệu quả nhất
Khi bé bắt đầu vào cơn khóc Colic, cha mẹ hãy bình tĩnh thực hiện phương pháp **5S của Bác sĩ Nhi khoa Harvey Karp**:

1.  **Swaddle (Quấn chũn):** Quấn bé ấm áp bằng chũn vải mềm để tái tạo cảm giác ôm chặt an toàn như trong bụng mẹ.
2.  **Side/Stomach position (Tư thế nằm nghiêng/sấp):** Bế nghiêng bé trên cánh tay mẹ hoặc cho bé nằm sấp nhẹ nhàng trên đùi bố mẹ để giảm áp lực co thắt ruột.
3.  **Shush (Tiếng suỵt):** Ghé sát tai bé kêu "suỵt... suỵt..." to tương đương tiếng khóc của bé, hoặc bật máy tiếng ồn trắng (White noise) để giúp bé trấn tĩnh thần kinh.
4.  **Swing (Đung đưa):** Đung đưa nhẹ nhàng, nhịp nhàng theo nhịp điệu ôm bé sát người. Tuyệt đối không rung lắc mạnh vùng đầu bé.
5.  **Suck (Mút):** Cho bé ngậm ti giả hoặc núm vú giả, phản xạ bú mút giải phóng hormone endorphin giúp xoa dịu cơn đau bụng hiệu quả.
6.  **Massage bụng ấm:** Thoa chút dầu massage ấm áp xoa nhẹ bụng bé theo chiều kim đồng hồ hoặc làm động tác đạp xe chân bé để đẩy khí thừa ra ngoài.

> **Tuyên bố y tế quan trọng:** Hãy đưa bé đi khám bác sĩ ngay nếu bé khóc kèm theo sốt cao, nôn trớ sữa vọt ra liên tục, đi ngoài phân có máu, hoặc bé lờ đờ, bỏ bú. Đó có thể là dấu hiệu của bệnh lý thực thể (như lồng ruột, nhiễm trùng tai) chứ không đơn thuần là Colic.
    `,
    views: 3100,
    likes: 220,
    bookmarkCount: 105,
    createdAt: '2026-05-12',
    author: 'Dr. Hải Anh',
    isFeatured: false,
    isTrending: true,
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&auto=format&fit=crop&q=80',
    faqs: [
      { q: 'Khóc dạ đề có ảnh hưởng đến sự phát triển của trẻ không?', a: 'May mắn là Colic hoàn toàn lành tính. Mặc dù làm gia đình căng thẳng, trẻ bị khóc dạ đề vẫn phát triển cân nặng, chiều cao và trí tuệ bình thường.' },
      { q: 'Bổ sung men vi sinh có giúp giảm khóc dạ đề không?', a: 'Các nghiên cứu y khoa chỉ ra bổ sung chủng lợi khuẩn Lactobacillus reuteri DSM 17938 giúp hỗ trợ cải thiện đáng kể tình trạng đầy bụng co thắt ruột và giảm thời gian khóc dạ đề ở trẻ bú mẹ.' }
    ]
  },
  {
    id: 'art_19',
    title: 'Cẩm nang quấn chũn và sử dụng nhộng chũn an toàn cho trẻ sơ sinh ngủ sâu giấc tự nhiên',
    category: 'Trẻ sơ sinh',
    subCategory: 'Giấc ngủ của bé',
    tags: ['quấn chũn', 'nhộng chũn', 'giấc ngủ trẻ sơ sinh', 'EASY'],
    summary: 'Quấn chũn là tuyệt chiêu tái tạo môi trường tử cung ấm áp giúp bé sơ sinh không bị giật mình bởi phản xạ Moro. Tìm hiểu cách quấn chũn an toàn và thời điểm chuyển đổi sang nhộng chũn khoa học.',
    content: `
Phản xạ Moro (giật mình giơ hai tay lên) là phản xạ sinh lý hoàn toàn bình thường ở trẻ sơ sinh, nhưng lại là thủ phạm chính khiến bé thức giấc liên tục và khóc thét giữa chừng. Phương pháp quấn chũn (Swaddling) là giải pháp giúp xoa dịu hệ thần kinh của bé, mô phỏng lại môi trường chật hẹp, ấm áp như những ngày còn ở trong bụng mẹ.

### 1. Lợi ích khoa học của việc quấn chũn đúng cách
*   **Ngăn chặn giật mình:** Giữ yên hai tay bé áp sát vào cơ thể, giúp duy trì giấc ngủ sâu và dài hơn.
*   **Giữ ấm ổn định:** Giúp trẻ sơ sinh duy trì nhiệt độ cơ thể trong những tuần đầu đời khi cơ chế điều hòa thân nhiệt chưa hoàn thiện.
*   **Xoa dịu hệ thần kinh:** Áp lực nhẹ nhàng từ vải quấn tạo cảm giác an toàn tuyệt đối, giúp bé tự trấn tĩnh nhanh chóng khi bị kích thích quá mức.

### 2. Hướng dẫn quấn chũn chuẩn an toàn và đúng khớp hông
Sai lầm phổ biến nhất của các mẹ là quấn bé quá chặt ở chân, kéo thẳng chân bé ra. Việc này có thể gây trật khớp hông bẩm sinh rất nguy hiểm.
*   **Quấn chữ D (Diamond Swaddle):** Trải khăn vuông chéo góc thành hình kim cương, gấp góc đỉnh xuống. Đặt bé nằm lên sao cho vai bé ngang mép gấp.
*   **Cố định hai tay:** Áp tay phải bé sát sườn, kéo mép khăn bên phải qua ngực bé, nhét dưới hông trái. Áp tay trái bé xuống, kéo mép khăn bên trái qua ngực và gài chặt dưới lưng bé.
*   **Thoải mái phần chân (Chữ M):** Phần đuôi khăn ở dưới chân vuốt nhẹ nhưng tuyệt đối không bó chặt chân bé. Chân bé phải thoải mái co duỗi, mở rộng ra hai bên tự nhiên tạo thành hình chữ M (tư thế ếch).

### 3. Khi nào nên chuyển từ Quấn chũn cổ điển sang Nhộng chũn khóa kéo?
*   **Nhộng chũn (Zip Swaddle):** Là loại chũn thiết kế sẵn có khóa kéo tiện lợi, giúp tay bé giơ lên hai bên đầu theo tư thế ngủ tự nhiên nhất của trẻ mà không bị lỏng lẻo tuột ra.
*   **Thời điểm vàng chuyển đổi:** Mẹ nên chuyển sang nhộng chũn khi bé được khoảng **1.5 đến 2 tháng tuổi**. Nhộng chũn giúp bé tự lập hơn và cho phép bé vận động tay chân thoải mái hơn.
*   **⚠️ CẢNH BÁO BẮT BUỘC:** Phải **dừng quấn chũn hoàn toàn** (cả quấn chũn cổ điển và nhộng chũn) ngay khi bé có dấu hiệu **biết lật (lẫy)**, thường là khoảng 3-4 tháng tuổi. Nếu bị quấn chặt tay khi lật úp, bé không thể dùng tay chống đầu lên, có nguy cơ cao bị ngạt thở đường thở.

> **Lời khuyên y khoa:** Chọn vải quấn có chất liệu 100% cotton co giãn 4 chiều, mỏng nhẹ, thoáng khí tốt để tránh làm bé bị quá nhiệt, đổ mồ hôi trộm dẫn đến viêm phổi.
    `,
    views: 3800,
    likes: 275,
    bookmarkCount: 130,
    createdAt: '2026-05-10',
    author: 'Mẹ Bông',
    isFeatured: true,
    isTrending: false,
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=80',
    faqs: [
      { q: 'Có nên quấn chũn cho bé cả ngày không?', a: 'Không nên. Chỉ quấn chũn khi bé đi ngủ (giấc ngày và giấc đêm). Khi bé thức, hãy thả tự do tay chân bé để con tự do vận động, phát triển cơ bắp và xúc giác.' },
      { q: 'Làm sao biết bé bị nóng khi quấn chũn?', a: 'Mẹ hãy sờ gáy, ngực hoặc lưng bé. Nếu thấy đổ mồ hôi, da nóng đỏ, hãy nới lỏng chũn, bật điều hòa mát hoặc thay quần áo mỏng hơn bên trong.' }
    ]
  },

  // --- CHUYÊN MỤC: DINH DƯỠNG CHO BÉ (5 bài) ---
  {
    id: 'art_20',
    title: 'Ăn dặm kiểu Nhật (ADKN) cho bé 5-6 tháng tuổi: Thực đơn chi tiết tuần đầu tiên và cách nấu dashi chuẩn',
    category: 'Dinh dưỡng cho bé',
    subCategory: 'Ăn dặm',
    tags: ['ăn dặm kiểu Nhật', 'ADKN', 'nước dashi', 'thực đơn ăn dặm'],
    summary: 'Ăn dặm kiểu Nhật đề cao hương vị tự nhiên của từng loại thực phẩm riêng biệt và rèn luyện kỹ năng nhai nuốt sớm cho bé. Khám phá cách nấu nước dashi chuẩn Nhật và thực đơn tuần đầu tiên.',
    content: `
Ăn dặm kiểu Nhật (ADKN) là một trong những phương pháp nuôi con ăn dặm khoa học và được yêu thích nhất tại Việt Nam. Điểm đặc trưng của phương pháp này là cho bé ăn thô sớm hơn (từ cháo rây loãng tỷ lệ 1:10), không trộn lẫn thức ăn mà cho bé ăn riêng biệt từng loại để nhận biết mùi vị tự nhiên.

### 1. Nguyên tắc vàng của Ăn dặm kiểu Nhật
*   **Tôn trọng hương vị tự nhiên:** Tuyệt đối **không nêm muối, đường, nước mắm** hay gia vị vào thức ăn của trẻ dưới 1 tuổi để bảo vệ thận non nớt của bé.
*   **Ăn từ lỏng đến đặc, mịn đến thô:** Bé bắt đầu từ cháo loãng tỷ lệ 1:10 rây mịn, sau đó tăng dần độ thô của rau củ và cháo theo từng tháng tuổi.
*   **Ăn riêng biệt:** Các món ăn được đặt trên các khay/chén riêng biệt, giúp kích thích thị giác, vị giác và phát hiện nhanh thực phẩm gây dị ứng.

### 2. Cách nấu Nước Dùng Dashi từ Rau Củ chuẩn khoa học
Nước dashi là linh hồn của ADKN, giúp các món ăn dặm của bé thơm ngọt đậm đà tự nhiên mà không cần nêm gia vị hóa học:
*   **Nguyên liệu:** Chọn 4-5 loại rau củ ngọt mát, không gây đầy bụng như: bắp cải, cà rốt, su su, bí ngòi, ngô ngọt, khoai lang. Tránh kết hợp các loại rau kỵ nhau.
*   **Cách nấu:**
    *   Rửa sạch, cắt khúc vừa phải rau củ.
    *   Cho rau củ cứng (cà rốt, ngô) vào luộc trước 15 phút, sau đó cho các loại rau củ mềm (bắp cải, bí ngòi) vào đun thêm 10 phút.
    *   Vớt rau củ ra (có thể xay/rây làm rau củ ăn dặm cho bé).
    *   Lọc nước dùng qua rây sạch, để nguội, trữ vào khay đá có nắp đậy trong tủ đông dùng dần trong vòng 1 tuần.

### 3. Thực đơn chi tiết tuần đầu tiên cho bé 5-6 tháng tuổi
Bé mới tập ăn dặm chỉ nên ăn 1 bữa mỗi ngày vào giờ cố định (thường là 10h sáng). Bữa ăn dặm đầu đời chủ yếu là làm quen, sữa mẹ/sữa công thức vẫn là nguồn dinh dưỡng chính (90%).

*   **Ngày 1 - Ngày 3:** 1 muỗng cà phê cháo loãng tỷ lệ 1:10 rây mịn (pha thêm chút nước ấm cho dễ nuốt).
*   **Ngày 4 - Ngày 5:** 2 muỗng cháo loãng rây + 1 muỗng cà rốt hấp rây loãng bằng nước dashi.
*   **Ngày 6 - Ngày 7:** 2 muỗng cháo loãng rây + 1 muỗng bí ngòi rây + 1 muỗng dashi rau củ ấm.

> **Lời khuyên y khoa:** Khi giới thiệu một món ăn mới (ví dụ: khoai tây, trứng, cá), hãy cho bé ăn liên tục 3 ngày với lượng nhỏ để theo dõi phản ứng dị ứng của cơ thể bé (như nổi mề đay, nôn mửa, tiêu chảy).
    `,
    views: 4800,
    likes: 410,
    bookmarkCount: 290,
    createdAt: '2026-05-08',
    author: 'Mẹ Ốc',
    isFeatured: false,
    isTrending: true,
    image: 'https://images.unsplash.com/photo-1596131397999-6e3e5714e0b0?w=600&auto=format&fit=crop&q=80',
    faqs: [
      { q: 'Có nên dùng nước dashi nấu từ củ cải trắng không?', a: 'Củ cải trắng chứa hàm lượng nitrat khá cao, không nên sử dụng nhiều cho trẻ dưới 6 tháng tuổi. Hãy dùng bắp cải, bí ngòi hoặc cà rốt ngọt để an toàn hơn.' },
      { q: 'Trữ đông nước dashi được tối đa bao lâu?', a: 'Nước dashi nên được trữ đông tối đa trong vòng 7 ngày để đảm bảo độ tươi ngon và không bị nhiễm khuẩn chéo trong tủ lạnh.' }
    ]
  },
  {
    id: 'art_21',
    title: 'Kích sữa bằng máy hút sữa: Phác đồ Power Pumping duy trì nguồn sữa mẹ dồi dào, tràn trề cho bé',
    category: 'Dinh dưỡng cho bé',
    subCategory: 'Nuôi con bằng sữa mẹ',
    tags: ['kích sữa', 'Power Pumping', 'sữa mẹ', 'máy hút sữa'],
    summary: 'Nuôi con bằng sữa mẹ hoàn toàn là mong muốn của mọi người mẹ bỉm sữa. Tìm hiểu ngay phác đồ kích sữa nổi tiếng Power Pumping mô phỏng chu kỳ bú dồn dập giúp sữa về dào dạt.',
    content: `
Tình trạng mất sữa, giảm sữa đột ngột sau khi đi làm lại hoặc do căng thẳng, mệt mỏi là nỗi lo chung của hàng triệu người mẹ. Phác đồ **Power Pumping** (hút sữa quyền năng) là một phương pháp khoa học nổi tiếng toàn cầu, giúp đánh lừa bộ não sản xuất sữa mẹ tăng gấp đôi sản lượng dựa trên nguyên lý Cung - Cầu sinh lý.

### 1. Cơ chế khoa học đứng sau Power Pumping
Cơ thể mẹ sản xuất sữa dựa trên hormone prolactin và oxytocin. Khi ngực bị hút rỗng liên tục và dồn dập, não bộ sẽ nhận tín hiệu rằng "bé đang rất đói và cần nhiều sữa hơn", từ đó kích thích các tuyến sữa hoạt động tối đa công suất. Power Pumping mô phỏng lại giai đoạn tăng trưởng vượt trội của em bé (Growth Spurt) khi con liên tục đòi bú dồn dập (cluster feeding).

### 2. Chi tiết Phác đồ Power Pumping chuẩn y khoa
Để thực hiện phương pháp này hiệu quả, mẹ cần chuẩn bị một máy hút sữa điện đôi lực hút êm ái, phễu hút vừa vặn với núm vú để tránh tổn thương.

Mẹ thực hiện kích sữa **1 lần mỗi ngày** (ưu tiên vào sáng sớm khi lượng hormone prolactin đạt đỉnh cao nhất), các cữ hút khác trong ngày vẫn hút theo lịch 3 tiếng/lần như bình thường.

#### **Chu trình Power Pumping dài 60 phút:**
*   **Hút sữa 20 phút** liên tục ➔ **Nghỉ 10 phút**.
*   **Hút tiếp 10 phút** ➔ **Nghỉ 10 phút**.
*   **Hút cữ cuối 10 phút** ➔ Kết thúc chu trình.

> *Lưu ý:* Trong thời gian nghỉ 10 phút, mẹ hoàn toàn tắt máy, uống một cốc nước ấm, nghe nhạc thư giãn, không cần massage ngực quá nhiều.

### 3. Những bí quyết giúp kích sữa thành công rực rỡ
*   **Tâm lý thư giãn:** Sự căng thẳng giải phóng adrenaline làm ức chế phản xạ xuống sữa. Khi hút sữa, mẹ hãy nhìn hình con, xem video dễ thương của bé, tránh xa màn hình điện thoại xem lượng sữa chảy ra từng giọt.
*   **Dinh dưỡng và nước:** Sữa mẹ thành phần chính là nước. Mẹ cần uống tối thiểu **3 lít nước ấm** mỗi ngày, bổ sung sữa ấm trước cữ hút 30 phút và ăn uống đủ chất, không kiêng khem quá đà.
*   **Sử dụng phễu silicon mềm:** Tránh dùng phễu nhựa cứng kích thước không vừa gây đau rát núm vú, nứt cổ gà tổn thương ngực.

> **Khuyến cáo y khoa:** Phương pháp Power Pumping đòi hỏi sự kiên trì từ **7 đến 14 ngày** liên tục mới thấy lượng sữa tăng rõ rệt. Hãy kiên nhẫn, tin tưởng vào bản năng làm mẹ của bạn!
    `,
    views: 5200,
    likes: 490,
    bookmarkCount: 310,
    createdAt: '2026-05-05',
    author: 'Mẹ Sữa Bé Gấu',
    isFeatured: true,
    isTrending: true,
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&auto=format&fit=crop&q=80',
    faqs: [
      { q: 'Thực hiện Power Pumping bao nhiêu lần một ngày?', a: 'Chỉ nên thực hiện duy nhất 1 lần/ngày. Thực hiện quá nhiều cữ này dễ làm mẹ bị kiệt sức, tổn thương mô ngực và gây tắc tia sữa.' },
      { q: 'Lượng sữa hút ra lúc đầu rất ít có sao không?', a: 'Hoàn toàn bình thường. Trong 3-5 ngày đầu tiên, bạn có thể chỉ thấy hút ra hơi hoặc vài giọt sữa. Đừng nản lòng, đó là thời gian não bộ đang điều chỉnh nội tiết tố.' }
    ]
  },
  {
    id: 'art_22',
    title: 'Bổ sung Sắt và Kẽm dự phòng cho trẻ bú mẹ hoàn toàn từ 4 tháng tuổi: Hướng dẫn mới từ Hiệp hội Nhi khoa',
    category: 'Dinh dưỡng cho bé',
    subCategory: 'Vi chất dinh dưỡng',
    tags: ['bổ sung sắt', 'bổ sung kẽm', 'vi chất dinh dưỡng', 'sữa mẹ hoàn toàn'],
    summary: 'Hiệp hội Nhi khoa Hoa Kỳ (AAP) khuyến nghị bổ sung sắt dự phòng cho trẻ bú sữa mẹ hoàn toàn bắt đầu từ 4 tháng tuổi để tránh thiếu máu thiếu sắt. Tìm hiểu liều lượng và cách dùng chuẩn y khoa.',
    content: `
Sữa mẹ là nguồn dinh dưỡng hoàn hảo nhất cho sự phát triển của trẻ nhỏ. Tuy nhiên, có một sự thật y khoa ít người biết: Lượng sắt dự trữ sẵn có trong gan của bé tích lũy từ trong bụng mẹ sẽ cạn kiệt dần khi bé chạm mốc **4 tháng tuổi**, trong khi sữa mẹ tự nhiên lại chứa hàm lượng sắt và kẽm cực kỳ thấp.

### 1. Tại sao trẻ bú mẹ hoàn toàn cần bổ sung Sắt dự phòng?
*   **Ngăn ngừa thiếu máu thiếu sắt:** Sắt là thành phần cấu tạo nên hemoglobin của hồng cầu, có nhiệm vụ vận chuyển oxy nuôi cơ thể và phát triển não bộ. Thiếu sắt kéo dài làm trẻ biếng ăn, da xanh xao, chậm chạp và giảm khả năng tập trung học tập sau này.
*   **Khác biệt giữa sữa công thức và sữa mẹ:** Sữa công thức thường được bổ sung lượng sắt nhân tạo cao, nên bé uống sữa công thức hoàn toàn ít có nguy cơ thiếu sắt hơn bé bú mẹ hoàn toàn trong giai đoạn 4-6 tháng tuổi.

### 2. Liều lượng bổ sung Sắt & Kẽm chuẩn y khoa cho trẻ
Dưới đây là khuyến nghị liều dự phòng chính thức từ các chuyên gia Nhi khoa hàng đầu:

*   **Bổ sung Sắt (từ 4 tháng tuổi đến khi ăn dặm tốt):**
    *   Liều lượng dự phòng: **1 mg sắt nguyên tố trên mỗi kg cân nặng** của bé mỗi ngày.
    *   *Ví dụ:* Bé 4 tháng nặng 6.5 kg cần bổ sung 6.5 mg sắt nguyên tố mỗi ngày.
    *   Ngưng bổ sung sắt nhỏ giọt khi bé bước vào độ tuổi ăn dặm (6 tháng) và ăn tốt các thực phẩm giàu sắt tự nhiên như thịt bò, gan, trứng, rau màu xanh đậm.
*   **Bổ sung Kẽm sinh học:**
    *   Kẽm giúp trẻ ăn ngon miệng, tăng cường hệ miễn dịch đường ruột. 
    *   Chỉ nên bổ sung kẽm liều dự phòng dưới sự tư vấn của bác sĩ hoặc khi bé có các đợt tiêu chảy cấp kéo dài (bổ sung kẽm 10-20mg trong 10-14 ngày giúp hồi phục niêm mạc ruột nhanh chóng).

### 3. Hướng dẫn cho bé uống Sắt đúng cách tránh đen răng
*   **Thời điểm uống tốt nhất:** Cho bé uống sắt vào buổi sáng, lúc **đói** (khoảng 1 tiếng trước ăn hoặc 2 tiếng sau ăn) vì sắt hấp thu tốt nhất khi dạ dày trống rỗng.
*   **Tăng hấp thu:** Cho bé uống kèm một chút vitamin C (hoặc nước cam, nước hoa quả đối với trẻ đã ăn dặm) để tăng hiệu quả hấp thu sắt gấp nhiều lần.
*   **Tránh đen men răng:** Nhỏ sắt trực tiếp vào khóe miệng sâu bên trong của bé để tránh dung dịch tiếp xúc trực tiếp làm ố đen men răng sữa non nớt.

> **Cảnh báo an toàn y tế:** Sắt là vi chất có nguy cơ ngộ độc cao nếu dùng quá liều lượng. Tuyệt đối **không được tự ý tăng liều** sắt cho bé mà không có xét nghiệm máu và chỉ định trực tiếp từ bác sĩ chuyên khoa nhi.
    `,
    views: 3200,
    likes: 180,
    bookmarkCount: 95,
    createdAt: '2026-05-02',
    author: 'Dr. Hải Anh',
    isFeatured: false,
    isTrending: false,
    image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=600&auto=format&fit=crop&q=80',
    faqs: [
      { q: 'Uống sắt đi ngoài phân đen có nguy hiểm không?', a: 'Hoàn toàn bình thường. Sắt không được hấp thu hết sẽ đào thải qua phân và nhuộm phân thành màu xanh đen hoặc xám đen. Mẹ không cần lo lắng.' },
      { q: 'Trẻ sinh non có cần bổ sung sắt sớm hơn không?', a: 'Trẻ sinh non không tích lũy đủ lượng sắt ở gan trong 3 tháng cuối thai kỳ, nên cần bổ sung sắt dự phòng sớm hơn từ **2 tuần tuổi** với liều 2mg/kg/ngày dưới sự hướng dẫn y khoa.' }
    ]
  },
  {
    id: 'art_23',
    title: 'Thực đơn ăn dặm tự chỉ huy BLW chống hóc nghẹn: Hướng dẫn cắt thái rau củ quả chuẩn theo từng tháng tuổi',
    category: 'Dinh dưỡng cho bé',
    subCategory: 'Ăn dặm BLW',
    tags: ['ăn dặm', 'BLW', 'chống hóc nghẹn', 'cắt rau củ'],
    summary: 'Nỗi lo sợ hóc nghẹn cản trở nhiều mẹ cho bé ăn dặm tự chỉ huy (BLW). Tìm hiểu ngay nguyên tắc cắt thái thực phẩm cực kỳ chi tiết chuẩn y khoa giúp con ăn an toàn, vui vẻ.',
    content: `
Ăn dặm tự chỉ huy (Baby-Led Weaning - BLW) là cơ hội tuyệt vời để bé phát triển sự tự lập, kỹ năng phối hợp vận động tinh và cơ hàm khỏe mạnh. Tuy nhiên, việc chuẩn bị kích thước và hình dáng đồ ăn sai cách là nguyên nhân hàng đầu gây ra các tai nạn hóc nghẹn đường thở nguy hiểm ở trẻ nhỏ.

### 1. Nguyên tắc cốt lõi về cấu trúc đồ ăn BLW
Đồ ăn dặm cho trẻ ăn BLW phải thỏa mãn đồng thời hai điều kiện sau:
*   **Về độ mềm:** Thức ăn phải được hấp chín mềm hoàn toàn. Mẹ kiểm tra bằng cách dùng ngón trỏ và ngón cái bóp nhẹ miếng thức ăn, nếu nó nát nát dễ dàng mà không cần lực mạnh là đạt chuẩn.
*   **Về kích thước:** Không được cắt thức ăn thành dạng khối tròn nhỏ (nho, cà chua bi, xúc xích cắt khoanh) vì chúng khớp khít hoàn toàn với đường thở của bé, nếu lọt vào sẽ gây bít tắc ngạt thở ngay lập tức.

### 2. Quy trình cắt thái thực phẩm chuẩn theo độ tuổi của bé

*   **Giai đoạn bắt đầu (6 - 8 tháng tuổi): Bé tập bốc bằng cả bàn tay (Palmar Grasp)**
    *   Bé chưa biết dùng ngón tay nhặt đồ vật, chỉ biết nắm cả bàn tay vào thức ăn và gặm phần nhô ra ngoài nắm tay.
    *   **Quy cách cắt:** Cắt thức ăn thành các **thanh dài như ngón tay người lớn (khoảng 5-8cm)**, dày khoảng 1.5-2cm. Nên dùng dao lượn sóng cắt răng cưa để tạo độ bám, giúp bé không bị trơn trượt tay khi cầm nắm.
    *   *Món ăn mẫu:* Cà rốt hấp răng cưa, bông cải xanh luộc giữ nguyên cuống dài, quả bơ cắt lát dày chừa vỏ phần đuôi.
*   **Giai đoạn phát triển (9 - 12 tháng tuổi): Bé tập bốc bằng hai đầu ngón tay (Pincer Grasp)**
    *   Bé bắt đầu phát triển vận động tinh, biết sử dụng ngón trỏ và ngón cái kẹp nhặt các mẩu thức ăn nhỏ liti.
    *   **Quy cách cắt:** Chuyển sang cắt thức ăn dạng **hạt lựu lớn hoặc các miếng mỏng dẹt bằng đồng xu (bite-sized)** để con tập nhặt.
    *   *Món ăn mẫu:* Khoai tây hấp cắt hạt lựu mềm, thịt bò viên hấp chín mềm bóp dẹt nhẹ, quả việt quất cắt đôi hoặc bóp bẹt ra.

### 3. Những thực phẩm nguy cơ cao gây hóc cần tuyệt đối tránh
*   Các loại hạt khô (hạt điều, hạt lạc, óc chó): Tuyệt đối không cho trẻ dưới 5 tuổi ăn nguyên hạt.
*   Kẹo cứng, kẹo dẻo, thạch rau câu.
*   Bánh mỳ gối chưa nướng (bánh mỳ ẩm dễ vón cục dính chặt vào họng bé gây nghẹt thở).

> **Lời khuyên an toàn y tế:** Hãy luôn cho bé ngồi thẳng lưng trong ghế ăn dặm và thắt đai an toàn. Tuyệt đối không bao giờ cho trẻ ăn khi đang nằm, đang bò, chạy chơi hoặc đang đi xe ô tô. Mẹ cũng nên tham gia một khóa học sơ cứu hóc nghẹn Heimlich để tự tin xử lý sự cố.
    `,
    views: 3900,
    likes: 310,
    bookmarkCount: 160,
    createdAt: '2026-04-28',
    author: 'Mẹ Bông',
    isFeatured: false,
    isTrending: false,
    image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=600&auto=format&fit=crop&q=80',
    faqs: [
      { q: 'Phản xạ oẹ (Gagging) khác gì với Hóc nghẹn (Choking)?', a: 'Oẹ là phản xạ đẩy thức ăn tự nhiên (bé đỏ mặt, ho to, phát ra tiếng). Hóc nghẹn là tắc thở hoàn toàn (bé im lặng, mặt tái xanh, không thở được). Hãy bình tĩnh khi bé oẹ, và sơ cứu ngay khi bé bị hóc.' },
      { q: 'Bánh mỳ ăn dặm có an toàn không?', a: 'Để an toàn, mẹ hãy nướng giòn bánh mỳ trước khi cho bé ăn. Bánh mỳ nướng giòn sẽ tự tan ra khi tiếp xúc với nước bọt của bé, tránh bị vón cục dai gây ngạt.' }
    ]
  },
  {
    id: 'art_24',
    title: 'Bé biếng ăn sinh lý giai đoạn tập đi (1-2 tuổi): Nguyên nhân và 5 tuyệt chiêu trị biếng ăn thông thái',
    category: 'Dinh dưỡng cho bé',
    subCategory: 'Tâm lý ăn dặm',
    tags: ['biếng ăn sinh lý', 'bé chậm lớn', 'trị biếng ăn', 'dinh dưỡng trẻ em'],
    summary: 'Bé đột ngột lười ăn, ngậm chặt miệng hoặc ném đồ ăn khiến bữa cơm gia đình trở thành cuộc chiến căng thẳng. Tìm hiểu cơ chế biếng ăn sinh lý và 5 giải pháp khoa học trị dứt điểm.',
    content: `
Giai đoạn từ 1 đến 2 tuổi là thời kỳ bé có bước phát triển vượt bậc về trí tuệ và vận động (tập đứng, tập đi, mọc răng, học nói). Tuy nhiên, đây cũng là thời kỳ bùng phát hội chứng **biếng ăn sinh lý** phổ biến nhất khiến các ông bố bà mẹ mất ăn mất ngủ.

### 1. Tại sao trẻ đột ngột biếng ăn ở tuổi tập đi?
Y học giải thích hiện tượng này qua các yếu tố sinh lý và tâm lý tự nhiên của trẻ:
*   **Tốc độ tăng trưởng chậm lại:** Trong năm đầu đời, cân nặng của bé tăng gấp ba lần. Nhưng từ 1-2 tuổi, tốc độ phát triển tự nhiên chậm lại rõ rệt, cơ thể bé cần ít calo hơn nên nhu cầu ăn tự động giảm đi.
*   **Bận rộn khám phá thế giới:** Trẻ ham học đi, tập chạy nhảy và thích thú khám phá mọi đồ vật xung quanh hơn là ngồi yên một chỗ ăn uống.
*   **Khủng hoảng tâm lý tự lập (Terrible Twos):** Bé bắt đầu nhận thức được "cái tôi" của mình, biết từ chối và muốn tự quyết định những gì mình thích ăn hoặc không ăn. Nếu bị ép buộc, bé sẽ phản kháng quyết liệt.

### 2. 5 tuyệt chiêu trị biếng ăn sinh lý cực kỳ hiệu quả của bác sĩ
Để bữa ăn không còn là "cuộc chiến đầy nước mắt", cha mẹ hãy áp dụng ngay các nguyên tắc vàng sau:

*   **Tuyệt chiêu 1: Quy tắc "3 Không" trên bàn ăn**
    Không tivi điện thoại, không ăn rong đi dạo, không đồ chơi làm xao nhãng. Việc cho xem hoạt hình làm tê liệt thần kinh vị giác, bé nuốt vô thức dẫn đến suy giảm tiêu hóa và lười ăn nghiêm trọng hơn.
*   **Tuyệt chiêu 2: Thiết lập khung giờ ăn cố định**
    Khoảng cách giữa các bữa ăn chính và phụ nên giãn cách tối thiểu **2.5 đến 3 tiếng**. Không cho bé ăn vặt, uống sữa, nước ngọt ngay trước bữa ăn chính vì sẽ làm tăng đường huyết gây cảm giác no giả tạo.
*   **Tuyêu chiêu 3: Tôn trọng quyền tự quyết của con**
    Hãy để bé tự xúc ăn, tự lựa chọn món ăn có sẵn trên bàn. Nhiệm vụ của cha mẹ là chuẩn bị đồ ăn dinh dưỡng, còn việc ăn bao nhiêu và ăn món nào là quyền của bé. Nếu sau 20-30 phút bé không ăn, hãy vui vẻ dọn đi và không cho ăn thêm gì cho đến bữa tiếp theo.
*   **Tuyệt chiêu 4: Trình bày món ăn đẹp mắt, đa dạng**
    Tạo hình cơm cuộn động vật dễ thương, cắt tỉa củ quả nhiều màu sắc kích thích vị giác của trẻ bốc nhặt.
*   **Tuyệt chiêu 5: Cho bé vận động thể chất nhiều hơn**
    Cho bé đi bộ, chạy nhảy ngoài trời tối thiểu 1 tiếng mỗi ngày trước bữa tối giúp tiêu hao năng lượng, bé sẽ tự động đói bụng và ăn ngon lành.

> **Lời khuyên y khoa:** Biếng ăn sinh lý thường chỉ kéo dài từ vài ngày đến 2-3 tuần. Chỉ cần bé vẫn chơi đùa vui vẻ, uống đủ nước và duy trì cân nặng ổn định, cha mẹ hoàn toàn có thể yên tâm vượt qua giai đoạn này mà không cần lạm dụng các loại thuốc hay siro kích thích ăn ngon không rõ nguồn gốc.
    `,
    views: 4100,
    likes: 350,
    bookmarkCount: 195,
    createdAt: '2026-04-20',
    author: 'Dr. Hải Anh',
    isFeatured: true,
    isTrending: false,
    image: 'https://images.unsplash.com/photo-1536622432212-dbb67a29424b?w=600&auto=format&fit=crop&q=80',
    faqs: [
      { q: 'Có nên ép con ăn hết khẩu phần ăn không?', a: 'Tuyệt đối không! Việc ép buộc, quát mắng hay đè con ra đổ thức ăn sẽ tạo chấn thương tâm lý sợ ăn suốt đời cho trẻ, dẫn đến biếng ăn tâm lý cực kỳ khó điều trị.' },
      { q: 'Bổ sung siro ăn ngon có hiệu quả thực sự không?', a: 'Đa số siro ăn ngon chứa vi chất (kẽm, lysine, vitamin nhóm B) hỗ trợ tạm thời. Tuy nhiên, thay đổi hành vi ăn uống chuẩn khoa học mới là chìa khóa gốc rễ quyết định.' }
    ]
  },

  // --- CHUYÊN MỤC: GIẤC NGỦ (5 bài) ---
  {
    id: 'art_25',
    title: 'Luyện tự ngủ theo chu kỳ EASY 3 cho trẻ sơ sinh: Bắt đầu thế nào và lịch trình mẫu hoàn hảo',
    category: 'Giấc ngủ',
    subCategory: 'Luyện ngủ EASY',
    tags: ['EASY 3', 'luyện tự ngủ', 'nếp sinh hoạt', 'giấc ngủ trẻ sơ sinh'],
    summary: 'Chu kỳ sinh hoạt EASY giúp bé sơ sinh hình thành nếp ăn ngủ điều độ khoa học và giúp mẹ có nhiều thời gian nghỉ ngơi thư giãn. Tìm hiểu chi tiết lịch trình mẫu EASY 3 từ 0-3 tháng tuổi.',
    content: `
**EASY** là cụm từ viết tắt của: **E**at (Ăn) - **A**ctivity (Chơi) - **S**leep (Ngủ) - **Y**our time (Thời gian của mẹ). Đây là khái niệm nếp sinh hoạt khoa học nổi tiếng toàn cầu do tác giả Tracy Hogg sáng lập. EASY giúp bé sơ sinh dự đoán được hoạt động tiếp theo của mình, tránh tình trạng cáu gắt do quá mệt và đem lại sự thảnh thơi thực sự cho mẹ bỉm.

### 1. Bản chất cốt lõi của EASY 3
Lịch trình **EASY 3** được thiết kế riêng cho các bé từ **0 đến 3 tháng tuổi** (hoặc cân nặng đạt từ 3kg trở lên). 
*   **Chu kỳ lặp lại:** Mỗi chu kỳ EASY 3 kéo dài đúng **3 tiếng đồng hồ** và lặp lại liên tục suốt cả ngày.
*   **Không nhầm lẫn Ăn - Ngủ:** Khác biệt lớn nhất của EASY là tách biệt hoàn toàn việc Ăn và Ngủ. Bé bú lúc vừa tỉnh dậy chứ không phải bú để ngủ thiếp đi. Điều này giúp ngăn chặn thói quen xấu: "Phải ngậm ti mẹ mới ngủ được" (ti giả sinh học).

### 2. Chi tiết Lịch Trình Mẫu EASY 3 hoàn hảo (Bắt đầu lúc 7:00 sáng)
*   **07:00 - 07:45 (EAT & ACTIVITY):** Bé thức dậy. Mẹ cho bé bú no ngay (E - khoảng 20-30 phút). Sau đó cho bé chơi nhẹ nhàng (A - vỗ ợ hơi, rơ lưỡi, rửa mặt, tắm nắng hoặc chơi trò chuyện).
*   **07:45 - 09:00 (SLEEP):** Mẹ thực hiện thủ tục quấn chũn, bật tiếng ồn trắng và đặt bé vào cũi tự ngủ (S - giấc ngủ kéo dài 1 tiếng 15 phút).
*   **09:00 - Your Time:** Thời gian của riêng mẹ để nghỉ ngơi, làm việc nhà hoặc tự chăm sóc bản thân.
*   **09:00 - 11:00:** Bắt đầu chu kỳ thứ hai (Eat - Activity - Sleep tương tự).
*   **11:00 - 13:00:** Chu kỳ thứ ba.
*   **13:00 - 15:00:** Chu kỳ thứ tư.
*   **15:00 - 17:00:** Chu kỳ thứ năm.
*   **17:00 - 19:00:** Chu kỳ thứ sáu (Cho bé ngủ giấc phụ ngắn 30 phút từ 17:30 đến 18:00).
*   **19:00:** Cho bé bú cữ tối, lau người ấm, thực hiện thủ tục đi ngủ đêm sâu giấc. Mẹ cai sữa đêm dần khi bé lớn hơn.

### 3. Cách chuyển đổi nếp sinh hoạt nhẹ nhàng cho con
*   **Tôn trọng thời gian thức tối đa (Wake time):** Ở tuổi EASY 3, bé chỉ có thể thức tối đa **45 đến 60 phút** liên tục. Nếu để bé thức quá giờ này, bé sẽ bị mệt quá mức (overtired), cơ thể tiết ra cortisol gây hưng phấn ảo khiến bé thét lên khi đi ngủ và cực kỳ khó dỗ.
*   **Hỗ trợ tự ngủ nhân văn:** Hãy bắt đầu quấn chũn, bật tiếng ồn trắng và đặt bé xuống cũi khi bé có dấu hiệu buồn ngủ đầu tiên (nháy mắt chậm, ngáp, dụi đầu).

> **Lời khuyên y khoa:** Đừng quá cứng nhắc từng phút một. Hãy lắng nghe tín hiệu cơ thể của con. Những ngày đầu luyện tập bé có thể quấy khóc, mẹ hãy kiên nhẫn vỗ về và điều chỉnh lịch trình lệch 15-30 phút tùy thể trạng của bé.
    `,
    views: 4900,
    likes: 425,
    bookmarkCount: 210,
    createdAt: '2026-04-18',
    author: 'Mẹ Bông',
    isFeatured: true,
    isTrending: true,
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80',
    faqs: [
      { q: 'Bé hay bị thức giấc giữa chừng sau 30 phút ngủ xử lý thế nào?', a: 'Đó gọi là tình trạng catnap (ngủ ngắn). Mẹ hãy chờ 5-10 phút để bé tự kết nối giấc ngủ (nhờ hỗ trợ từ tiếng ồn trắng và chũn). Nếu bé khóc to, hãy vào hỗ trợ vỗ nhẹ mông vỗ nhẹ đầu giúp bé ngủ tiếp.' },
      { q: 'Khi nào cần chuyển từ EASY 3 sang EASY 4?', a: 'Khi bé được khoảng 3-4 tháng tuổi, thời gian thức tối đa của bé tăng lên 1.5 - 2 tiếng và bé bắt đầu ngủ ngắn lại ở giấc ngày, đó là lúc mẹ cần chuyển dịch lịch sinh hoạt sang EASY 4.' }
    ]
  },
  {
    id: 'art_26',
    title: 'Vượt qua khủng hoảng giấc ngủ (Sleep Regression) 4 tháng tuổi nhẹ nhàng, không nước mắt',
    category: 'Giấc ngủ',
    subCategory: 'Khủng hoảng giấc ngủ',
    tags: ['khủng hoảng giấc ngủ', 'sleep regression', 'bé ngủ hay giật mình', 'EASY'],
    summary: 'Bé đang tự ngủ rất ngoan bỗng dưng thức giấc liên tục mỗi 1-2 tiếng ban đêm, khóc lóc cáu gắt đột ngột. Tìm hiểu cơ chế sinh lý đằng sau khủng hoảng giấc ngủ 4 tháng và bí quyết vượt qua.',
    content: `
Nhiều bậc cha mẹ trải qua cảm giác bất lực tột độ khi con yêu tròn 4 tháng tuổi. Đứa trẻ vốn dĩ ngủ xuyên đêm rất ngoan bỗng dưng "đổi tính đổi nết", thức giấc khóc lóc mỗi 1-2 tiếng ban đêm, ngủ ngày ngắn và rất khó dỗ dành. Chào mừng bạn đến với cột mốc sinh lý nổi tiếng nhất: **Khủng hoảng giấc ngủ 4 tháng tuổi (4-Month Sleep Regression)**.

### 1. Cơ chế sinh học thực sự của Khủng hoảng 4 tháng
Hiện tượng này không phải là một bước lùi hay bệnh lý, mà thực tế là một **bước nhảy vọt vượt bậc về mặt não bộ** của bé:
*   **Thay đổi cấu trúc giấc ngủ:** Trước 4 tháng, giấc ngủ của trẻ sơ sinh chỉ có 2 giai đoạn chính (ngủ nông và ngủ sâu). Từ 4 tháng tuổi, chu kỳ giấc ngủ của bé chuyển đổi hoàn toàn giống người lớn, gồm **4 giai đoạn** phức tạp. Bé bắt đầu thức dậy nhẹ nhàng sau mỗi chu kỳ ngủ (khoảng 45 phút).
*   **Chưa có kỹ năng tự kết nối giấc:** Khi tỉnh giấc giữa các chu kỳ, nếu trước đó bé được bế ru hoặc ngậm ti để ngủ, bé sẽ hoảng sợ khóc đòi mẹ làm lại đúng hành động bế ru đó thì mới ngủ tiếp được.
*   **Phát triển giác quan:** Bé nhận thức thế giới xung quanh rõ nét hơn, mắt nhìn xa hơn, tai nghe nhạy hơn nên dễ bị giật mình đánh thức bởi những tiếng động nhỏ nhất.

### 2. Bí quyết giúp mẹ và bé vượt qua khủng hoảng 4 tháng
Thay vì hoang mang lo sợ và quay lại thói quen xấu bế ru cả đêm, mẹ hãy bình tĩnh áp dụng các giải pháp khoa học sau:

*   **Tạo môi trường ngủ tối ưu tối đa:**
    Phòng ngủ của bé phải **tối hoàn toàn** (dùng rèm cản sáng) cho cả giấc ngày và giấc đêm. Bóng tối kích thích tuyến tùng tiết ra hormone ngủ melatonin. Bật máy tiếng ồn trắng liên tục để át đi các âm thanh sinh hoạt gia đình.
*   **Kéo dài thời gian thức ban ngày (Wake time):**
    Bé 4 tháng cần thời gian thức tối thiểu là **1.5 đến 2 tiếng** giữa các giấc ngủ. Nếu cho bé đi ngủ quá sớm khi áp lực giấc ngủ chưa đủ lớn, bé sẽ ngủ rất ngắn (catnap 30 phút) và tỉnh dậy quấy khóc.
*   **Dạy bé tự lập đi vào giấc ngủ:**
    Hãy đặt bé xuống cũi khi bé **còn tỉnh táo nhưng đã lơ mơ buồn ngủ** (drowy but awake). Cho bé cơ hội tự xoa dịu bản thân bằng cách tự mút tay hoặc ôm gối ôm nhỏ thay vì bế ru ròng rã trên tay mẹ.
*   **Tránh cho bé bú vặt ban đêm:**
    Khi bé tỉnh giấc ban đêm, hãy chờ 5-10 phút quan sát xem con có tự ngủ lại được không. Chỉ cho bú khi chắc chắn đến giờ đói thực sự, tránh tạo thói quen xấu cứ thức dậy là phải bú.

> **Lời khuyên y khoa:** Khủng hoảng giấc ngủ 4 tháng thường kéo dài từ **2 đến 4 tuần**. Hãy kiên nhẫn duy trì nề nếp sinh hoạt điều độ, tuyệt đối không thiết lập các thói quen xấu mới (như bế rung lắc mạnh, cho đi xe rong đêm) vì sẽ rất khó sửa chữa sau này.
    `,
    views: 4500,
    likes: 390,
    bookmarkCount: 230,
    createdAt: '2026-04-12',
    author: 'Mẹ Sữa Bé Gấu',
    isFeatured: false,
    isTrending: true,
    image: 'https://images.unsplash.com/photo-1515488042361-404e9250afef?w=600&auto=format&fit=crop&q=80',
    faqs: [
      { q: 'Khủng hoảng 4 tháng có đi kèm biếng ăn không?', a: 'Có. Nhiều bé do bận rập tập lật, tập trườn và não bộ kích thích liên tục dẫn đến xao nhãng ăn uống, bú vặt hoặc từ chối ti mẹ ban ngày.' },
      { q: 'Bổ sung canxi có giúp hết khủng hoảng giấc ngủ không?', a: 'Không. Nếu bé vẫn uống vitamin D3 K2 đầy đủ, phát triển bình thường thì đây hoàn toàn là khủng hoảng não bộ sinh lý tự nhiên, uống canxi không giúp cải thiện tình trạng này.' }
    ]
  },
  {
    id: 'art_27',
    title: 'Tiếng ồn trắng (White Noise): Lợi ích ru ngủ thần kỳ và 4 quy tắc an toàn y khoa bắt buộc phải nhớ',
    category: 'Giấc ngủ',
    subCategory: 'Công cụ hỗ trợ ngủ',
    tags: ['tiếng ồn trắng', 'white noise', 'giấc ngủ bé sơ sinh', 'an toàn y tế'],
    summary: 'Tiếng ồn trắng (White Noise) giúp che lấp tiếng ồn xung quanh và trấn tĩnh thần kinh giúp trẻ sơ sinh tự ngủ rất tốt. Tuy nhiên dùng sai cách có thể gây tổn thương thính giác của bé.',
    content: `
Tiếng ồn trắng (White Noise) là tập hợp các âm thanh có tần số thấp, phát ra đều đặn, liên tục như tiếng mưa rơi, tiếng sóng biển, tiếng tivi mất sóng hay tiếng máy sấy tóc. Đối với trẻ sơ sinh, tiếng ồn trắng giống như một giai điệu quen thuộc đầy thân thương, mô phỏng lại tiếng máu chảy rào rào qua động mạch tử cung của mẹ mà con đã nghe suốt 9 tháng thai kỳ.

### 1. Tại sao tiếng ồn trắng giúp bé tự ngủ kỳ diệu?
*   **Trấn an hệ thần kinh kích ứng:** Âm thanh đều đều làm giảm sự căng thẳng của não bộ, báo hiệu cho cơ thể bé biết rằng đã đến giờ đi ngủ.
*   **Bộ lọc tiếng ồn tuyệt hảo:** Át đi các âm thanh đột ngột của sinh hoạt gia đình (tiếng chó sủa, tiếng đóng cửa, tiếng xe cộ ngoài phố) - vốn là thủ phạm chính gây giật mình tỉnh giấc ở trẻ nhỏ.
*   **Kéo dài giấc ngủ:** Hỗ trợ bé dễ dàng vượt qua giai đoạn chuyển giao chu kỳ giấc ngủ nông sang sâu mà không bị thức giấc hoàn toàn.

### 2. 4 quy tắc an toàn y khoa bắt buộc khi sử dụng máy tiếng ồn trắng
Dù có lợi ích ru ngủ thần kỳ, Viện Hàn lâm Nhi khoa Mỹ (AAP) cảnh báo nếu lạm dụng máy phát âm thanh cường độ lớn có thể tăng nguy cơ tổn thương thính lực và chậm phát triển ngôn ngữ ở trẻ nhỏ. Mẹ cần tuân thủ nghiêm ngặt 4 quy tắc an toàn sau:

1.  **Quy tắc Khoảng cách an toàn:**
    Tuyệt đối **không đặt máy phát tiếng ồn trắng sát cạnh cũi hay đầu giường bé**. Khoảng cách tối thiểu bắt buộc từ máy phát đến đầu giường của trẻ là **2 mét (6 feet)**.
2.  **Quy tắc Cường độ âm thanh giới hạn:**
    Âm lượng đo tại vị trí tai bé nằm ngủ tuyệt đối không được vượt quá **50 Decibel (dB)**. Mẹ có thể tải các ứng dụng đo decibel miễn phí trên điện thoại để kiểm tra vị trí tai con nằm xem có vượt ngưỡng an toàn không. Hãy vặn mức âm lượng tương đương tiếng mưa rơi rả rích hoặc tiếng vòi sen chảy nhẹ.
3.  **Quy tắc Thời gian sử dụng:**
    Chỉ bật tiếng ồn trắng khi bé đi ngủ (giấc ngày và giấc đêm). Khi bé thức dậy chơi đùa, hãy tắt máy đi để bé được lắng nghe các âm thanh tự nhiên của cuộc sống (tiếng mẹ nói, tiếng chim hót, âm nhạc vui tươi) nhằm kích thích phát triển ngôn ngữ và giao tiếp.
4.  **Cai tiếng ồn trắng đúng thời điểm:**
    Mẹ nên giảm dần âm lượng và cai hoàn toàn tiếng ồn trắng cho bé khi con được **1 tuổi**, thời điểm hệ thần kinh và chu kỳ giấc ngủ của con đã hoàn toàn ổn định vững chắc.

> **Khuyến cáo y tế:** Không dùng các thiết bị điện thoại đang sạc pin đặt sát đầu bé để phát âm thanh vì nguy cơ cháy nổ và bức xạ sóng điện từ không tốt cho sức khỏe của trẻ.
    `,
    views: 3300,
    likes: 240,
    bookmarkCount: 115,
    createdAt: '2026-04-08',
    author: 'Dr. Hải Anh',
    isFeatured: false,
    isTrending: false,
    image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=600&auto=format&fit=crop&q=80',
    faqs: [
      { q: 'Nên dùng âm thanh nào làm tiếng ồn trắng tốt nhất?', a: 'Các âm thanh tự nhiên tần số thấp như tiếng mưa rơi, tiếng sóng biển rì rào hoặc tiếng gió thổi là dịu nhẹ và an toàn nhất cho tai bé sơ sinh.' },
      { q: 'Bật tiếng ồn trắng cả đêm có sao không?', a: 'Được phép bật suốt cả đêm với điều kiện tuân thủ đúng khoảng cách tối thiểu 2 mét và âm lượng dưới 50 dB để tránh gián đoạn giấc ngủ giữa chừng của trẻ.' }
    ]
  },
  {
    id: 'art_28',
    title: 'Xây dựng thủ tục đi ngủ (Bedtime Routine) chuẩn giúp bé tự ngủ sâu giấc, không quấy khóc ban đêm',
    category: 'Giấc ngủ',
    subCategory: 'Thói quen ngủ ngon',
    tags: ['bedtime routine', 'thủ tục đi ngủ', 'luyện tự ngủ', 'EASY'],
    summary: 'Thủ tục đi ngủ (Bedtime Routine) là chuỗi hoạt động lặp đi lặp lại giúp bé nhận biết đã đến giờ ngủ đêm. Khám phá quy trình 4 bước chuẩn khoa học giúp bé ngủ một mạch đến sáng.',
    content: `
Trẻ nhỏ cực kỳ yêu thích sự lặp lại và tính dự đoán trước của các sự kiện hàng ngày. Một chuỗi các hoạt động nhẹ nhàng được thực hiện theo đúng thứ tự cố định mỗi tối trước khi đi ngủ — gọi là **Bedtime Routine (Thủ tục đi ngủ)** — sẽ thiết lập chiếc đồng hồ sinh học tự nhiên hoàn hảo cho bé, giúp con dễ dàng chìm vào giấc ngủ mà không cần bế ru, rung lắc mệt mỏi.

### 1. Ý nghĩa khoa học của Bedtime Routine
Chuỗi hoạt động lặp lại đều đặn mỗi ngày giúp não bộ bé tự sản sinh ra chất dẫn truyền thần kinh báo hiệu sự thư giãn. Bé hiểu rằng: "Sau khi tắm ấm, mặc bỉm sạch, đọc truyện là mình sẽ được đi ngủ". Điều này loại bỏ hoàn toàn sự phản kháng hay nỗi sợ hãi khi phải tách biệt khỏi bố mẹ để đi vào bóng tối.

### 2. Quy trình 4 bước Bedtime Routine chuẩn y khoa (Thời gian kéo dài 30-45 phút)
Mẹ nên bắt đầu thực hiện thủ tục đi ngủ vào khoảng **18h30 đến 19h00** hàng tối:

*   **Bước 1: Tắm nước ấm thư giãn hoặc Lau người ấm (10 phút)**
    Nước ấm làm tăng nhiệt độ cơ thể nhẹ nhàng, sau đó khi ra ngoài không khí mát mẻ, thân nhiệt bé sẽ hạ xuống nhẹ - đây là tín hiệu sinh lý tự nhiên kích hoạt cơn buồn ngủ sâu của con người.
*   **Bước 2: Massage nhẹ nhàng & Mặc quần áo thoải mái (10 phút)**
    Thoa kem dưỡng ẩm dịu nhẹ, thực hiện vài động tác massage lưng và chân tay vuốt nhẹ nhàng giúp bé thư giãn cơ bắp. Mặc tã bỉm sạch sẽ, thoáng mát và mặc bộ đồ ngủ cotton co giãn tốt.
*   **Bước 3: Cho cữ bú cuối ngày no nê (10-15 phút)**
    Cho bé bú sữa mẹ hoặc sữa công thức no bụng cữ cuối để bé ngủ dài qua đêm. *Lưu ý y khoa quan trọng:* Hãy cố gắng giữ cho bé thức trong lúc bú bằng cách lau mặt nhẹ hoặc nói chuyện thì thầm, tránh để bé ngủ gục ngay trên bầu ngực mẹ.
*   **Bước 4: Thiết lập môi trường ngủ & Đặt bé tự ngủ (5 phút)**
    *   Kéo rèm tối hoàn toàn, bật máy tiếng ồn trắng, giảm độ sáng của đèn ngủ về mức ấm dịu.
    *   Ôm bé thì thầm chúc bé ngủ ngon, hát ru nhẹ hoặc đọc 1 câu chuyện ngắn.
    *   Đặt bé vào cũi khi con **vẫn còn thức nhưng đã lơ mơ buồn ngủ** để con tự đi vào giấc ngủ cuối cùng.

### 3. Nguyên tắc vàng để thực hiện thành công
*   **Tính nhất quán tuyệt đối:** Thực hiện đúng chuỗi hành động này vào **cùng một khung giờ** mỗi tối, không thay đổi thứ tự.
*   **Tạo ranh giới rõ rệt giữa Ngày và Đêm:** Ban ngày chơi vui tươi, ánh sáng tràn ngập, ồn ào tự nhiên. Ban tối yên tĩnh, đèn mờ, thì thầm dịu nhẹ.

> **Lời khuyên y khoa:** Một Bedtime Routine bền bỉ được xây dựng ngay từ **6 tuần tuổi** sẽ giúp ngăn ngừa tối đa các rối loạn giấc ngủ, khủng hoảng giấc ngủ khi bé bước sang giai đoạn lớn hơn.
    `,
    views: 3600,
    likes: 280,
    bookmarkCount: 140,
    createdAt: '2026-04-05',
    author: 'Mẹ Bông',
    isFeatured: false,
    isTrending: false,
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=600&auto=format&fit=crop&q=80',
    faqs: [
      { q: 'Thủ tục đi ngủ ban ngày có giống ban đêm không?', a: 'Thủ tục giấc ngày (Nap routine) nên rút ngắn hơn (chỉ khoảng 5-10 phút): Quấn chũn, bật tiếng ồn trắng, ôm ấp vỗ về 2 phút rồi đặt cũi tự ngủ. Không cần tắm hay bú cữ lớn như ban đêm.' },
      { q: 'Nên đọc sách gì cho bé sơ sinh nghe trước khi ngủ?', a: 'Nên chọn các cuốn sách tranh Ehon Nhật Bản mỏng nhẹ, sách tranh đen trắng kích thích thị giác với nội dung siêu ngắn gọn, âm vần lặp đi lặp lại nhẹ nhàng.' }
    ]
  },
  {
    id: 'art_29',
    title: 'Hướng dẫn cai sữa đêm (cai ti đêm) an toàn, khoa học cho bé từ 6 tháng tuổi giúp mẹ ngủ tròn giấc',
    category: 'Giấc ngủ',
    subCategory: 'Cai sữa đêm',
    tags: ['cai ti đêm', 'cai sữa đêm', 'giấc ngủ bé 6 tháng', 'dinh dưỡng trẻ em'],
    summary: 'Bé trên 6 tháng tuổi hoàn toàn có khả năng nhịn bú đêm suốt 8-10 tiếng nếu cân nặng đạt chuẩn. Cai ti đêm giúp bé ngủ sâu giấc phát triển chiều cao vượt trội và giải phóng sức lao động cho mẹ.',
    content: `
Bú đêm (ti đêm) là nhu cầu sinh lý hoàn toàn bình thường ở trẻ sơ sinh dưới 6 tháng tuổi do dạ dày của bé còn quá nhỏ, cần nạp năng lượng liên tục. Tuy nhiên, nếu bé đã **trên 6 tháng tuổi**, cân nặng đạt trên 6kg và bước vào ăn dặm tốt, việc ti đêm kéo dài liên tục mỗi 2-3 tiếng không còn là nhu cầu sinh lý đói bụng thực sự, mà chỉ là một **thói quen tâm lý thèm ngậm ti để ngủ lại**.

### 1. Tại sao cần cai ti đêm cho bé từ 6 tháng tuổi?
*   **Phát triển chiều cao vượt trội:** Hormone tăng trưởng (Growth Hormone) tiết ra nhiều nhất vào khoảng **22h đêm đến 2h sáng** khi trẻ đang trong trạng thái ngủ rất sâu giấc. Bé thức dậy bú đêm liên tục sẽ làm gián đoạn giấc ngủ sâu này, cản trở sự phát triển thể chất.
*   **Bảo vệ men răng sữa:** Sữa mẹ hay sữa công thức đọng lại trong khoang miệng ban đêm tạo môi trường axit lý tưởng cho vi khuẩn phát triển, gây sâu răng, sún răng sữa sớm.
*   **Cải thiện chất lượng ăn dặm ban ngày:** Cai bú đêm giúp bé có cảm giác đói thực sự vào buổi sáng, từ đó hợp tác ăn dặm vui vẻ và bú sữa mẹ ban ngày hiệu quả hơn hẳn.

### 2. Dấu hiệu bé đã sẵn sàng cai sữa đêm
Bé hoàn toàn có thể cai ti đêm khi đạt các mốc y khoa sau:
1.  Bé đạt độ tuổi từ **6 tháng trở lên**, cân nặng đạt tối thiểu 6-7kg.
2.  Bé đã ăn dặm tốt được 1-2 bữa/ngày.
3.  Lượng sữa bú ban ngày đầy đủ, no nê.
4.  Bé tỉnh giấc đêm chỉ ngậm ti vài giây rồi ngủ lại ngay (chứng tỏ bé thức giấc vì thèm ngậm ti chứ không phải vì đói).

### 3. Phương pháp cai sữa đêm giãn cữ và giảm lượng sữa khoa học
Tuyệt đối không nên cắt sữa đêm đột ngột làm bé bị sốc tâm lý. Hãy áp dụng phương pháp giảm dần từ từ cực kỳ nhân văn sau:

*   **Nếu bé bú sữa công thức (Bú bình):**
    *   **Cách giảm lượng sữa:** Cứ sau mỗi 3 ngày, mẹ giảm bớt **20-30ml sữa** ở mỗi cữ bú đêm của bé, giữ nguyên lượng nước (tức là pha sữa loãng đi nhẹ nhàng hoặc giảm thể tích sữa). Khi lượng sữa cữ đêm giảm xuống còn dưới 30ml, bé sẽ tự động không muốn thức dậy bú nữa.
*   **Nếu bé bú mẹ trực tiếp:**
    *   **Cách giảm thời gian bú:** Nếu bình thường bé bú mẹ 10 phút mỗi cữ đêm, hãy giảm xuống còn 8 phút ở ngày thứ 1-3, tiếp tục giảm xuống 6 phút ở ngày thứ 4-6, và chỉ cho ngậm 3 phút ở ngày thứ 7.
    *   **Nhờ sự hỗ trợ của Bố:** Khi bé thức dậy đòi ti đêm, hãy để bố vào dỗ dành vỗ về bé ngủ lại. Bé ngửi thấy mùi sữa mẹ sẽ khóc đòi ti bằng được, nhưng khi ngửi thấy hơi ấm của bố, bé sẽ dễ dàng chấp nhận việc vỗ về ngủ lại mà không đòi bú nữa.

> **Lời khuyên y khoa:** Hãy bù đắp lượng dinh dưỡng thiếu hụt của cữ đêm vào các cữ bú ban ngày của bé. Đảm bảo cữ bú trước khi đi ngủ đêm thật no nê để bé yên tâm ngủ dài giấc.
    `,
    views: 4200,
    likes: 360,
    bookmarkCount: 185,
    createdAt: '2026-03-25',
    author: 'Dr. Hải Anh',
    isFeatured: false,
    isTrending: false,
    image: 'https://images.unsplash.com/photo-1473286835901-04adb1afab02?w=600&auto=format&fit=crop&q=80',
    faqs: [
      { q: 'Cai ti đêm có làm bé bị hạ đường huyết không?', a: 'Với trẻ khỏe mạnh sinh đủ tháng trên 6 tháng tuổi, cơ thể đã phát triển gan lưu trữ glycogen đảm bảo ổn định đường huyết suốt 10-12 tiếng ban đêm mà không cần ăn.' },
      { q: 'Trẻ mọc răng quấy khóc đêm có nên cho bú không?', a: 'Trong những ngày bé đau nướu sốt mọc răng cấp tính, mẹ có thể linh hoạt cho bé bú nhẹ nhàng để trấn an tâm lý. Khi bé hết sưng đau nướu, hãy quay lại ngay lịch trình cai đêm.' }
    ]
  },

  // --- CHUYÊN MỤC: SỨC KHỎE TRẺ EM (5 bài) ---
  {
    id: 'art_30',
    title: 'Cách hạ sốt nhanh, an toàn cho trẻ tại nhà bằng paracetamol và dấu hiệu cảnh báo co giật cần đi viện',
    category: 'Sức khỏe trẻ em',
    subCategory: 'Xử lý bệnh nhi khoa',
    tags: ['hạ sốt cho trẻ', 'trẻ bị sốt', 'paracetamol liều lượng', 'co giật do sốt'],
    summary: 'Sốt là phản ứng có lợi của hệ miễn dịch chống lại tác nhân gây bệnh. Hướng dẫn mẹ cách tính liều thuốc hạ sốt paracetamol chuẩn xác theo cân nặng của con và xử lý co giật an toàn.',
    content: `
Sốt là một trong những lý do hàng đầu khiến cha mẹ đưa trẻ đi khám cấp cứu ban đêm. Tâm lý hoang mang, sợ con bị tổn thương não bộ dẫn đến việc nhiều cha mẹ tự ý cho uống hạ sốt quá liều lượng hoặc phối hợp thuốc bừa bãi rất nguy hiểm cho gan và thận của trẻ.

### 1. Hiểu đúng về cơ chế sốt ở trẻ nhỏ
*   **Phản ứng miễn dịch tự nhiên:** Sốt không phải là bệnh, mà là **phản ứng bảo vệ có lợi** của cơ thể. Nhiệt độ cao làm ức chế sự sinh sản của vi khuẩn, virus và kích thích hệ miễn dịch sản sinh kháng thể chống lại nhiễm trùng.
*   **Ngưỡng nhiệt độ cần can thiệp:** Chỉ nên cho trẻ uống thuốc hạ sốt khi nhiệt độ đo ở nách đạt từ **38.5 độ C trở lên** và trẻ có biểu hiện mệt mỏi, quấy khóc, khó chịu. Nếu bé sốt 38.5 độ nhưng vẫn chơi đùa vui vẻ, ăn uống bình thường thì không nhất thiết phải uống thuốc ngay.

### 2. Phác đồ sử dụng Paracetamol hạ sốt an toàn chuẩn y khoa
Paracetamol là hoạt chất hạ sốt đầu tay an toàn nhất được WHO khuyên dùng cho trẻ em từ sơ sinh.

> [!IMPORTANT]
> **TÍNH LIỀU THUỐC THEO CÂN NẶNG, KHÔNG TÍNH THEO ĐỘ TUỔI.**
> *   Liều lượng an toàn: **10 đến 15 mg paracetamol trên mỗi kg cân nặng** của trẻ cho một lần uống.
> *   Khoảng cách giữa các lần uống: Tối thiểu từ **4 đến 6 tiếng**.
> *   Tổng liều tối đa: Không vượt quá **60 mg/kg/ngày**.
> *   *Ví dụ minh họa:* Bé cân nặng 10kg.
>     *   Liều một lần uống: 10kg x 10-15mg = 100mg đến 150mg paracetamol. Mẹ có thể cho bé uống 1 gói Hapacol 150mg hoặc đút hậu môn viên đạn 150mg là chuẩn nhất.

### 3. Quy trình xử lý co giật do sốt cao tại nhà (Febrile Seizures)
Khoảng 2-5% trẻ em từ 6 tháng đến 5 tuổi bị co giật khi nhiệt độ cơ thể tăng quá nhanh đột ngột. Co giật do sốt cao trông rất đáng sợ nhưng đa số hoàn toàn lành tính và tự hết sau 1-3 phút mà không để lại di chứng não.

**Cha mẹ hãy thực hiện ngay 4 hành động cứu mạng sau:**
1.  **Đặt bé nằm nghiêng bên trái:** Đặt bé nằm trên mặt phẳng an toàn, nghiêng đầu sang một bên để đờm nhớt hoặc chất nôn tự chảy ra ngoài, phòng ngừa sặc tắc đường thở.
2.  **TUYỆT ĐỐI KHÔNG chọc bất kỳ vật cứng nào vào miệng bé:** Không nhét thìa, đũa, ngón tay mẹ hoặc vắt chanh vào miệng trẻ. Cơ hàm của trẻ khi co giật khóa chặt, nhét vật cứng dễ làm gãy răng, rách niêm mạc miệng hoặc ngón tay mẹ bị cắn tổn thương. Trẻ không bao giờ tự cắn lưỡi chảy máu đến chết khi co giật do sốt.
3.  **Nới lỏng quần áo:** Cởi bỏ bớt quần áo, tã giấy giúp thoát nhiệt cơ thể.
4.  **Đặt thuốc đút hậu môn hạ sốt:** Khi cơn giật kết thúc, đút ngay 1 viên paracetamol vào hậu môn bé để hạ sốt.

### 4. Dấu hiệu cảnh báo phải đưa con đi viện khẩn cấp
Hãy đưa trẻ đến bệnh viện ngay lập tức nếu:
*   Trẻ **dưới 3 tháng tuổi** bị sốt từ 38 độ C trở lên (bắt buộc nhập viện kiểm tra).
*   Sốt kéo dài liên tục quá **3 ngày (72 giờ)** không hạ.
*   Trẻ lờ đờ, ngủ li bì gọi hỏi không biết, bỏ bú hoàn toàn, nôn trớ vọt ra mọi thứ sau khi ăn.
*   Có biểu hiện khó thở (thở nhanh bất thường, rút lõm lồng ngực sườn, cánh mũi phập phồng).

> **Lời khuyên y khoa:** Việc lau người bằng nước ấm khi sốt chỉ có tác dụng hỗ trợ thư giãn cơ thể tạm thời trong 15-20 phút, hoàn toàn không giúp hạ trung tâm điều nhiệt ở não bộ của trẻ. Tuyệt đối không lau người bằng nước lạnh, cồn hoặc nước đá vì sẽ gây co mạch ngoại biên làm nhiệt độ nội tạng tăng cao hơn nguy hiểm.
    `,
    views: 8200,
    likes: 720,
    bookmarkCount: 490,
    createdAt: '2026-05-15',
    author: 'Dr. Hải Anh',
    isFeatured: true,
    isTrending: true,
    image: 'https://images.unsplash.com/photo-1584036561566-baf2418a7c2e?w=600&auto=format&fit=crop&q=80',
    faqs: [
      { q: 'Thuốc hạ sốt Ibuprofen dùng cho trẻ khi nào?', a: 'Ibuprofen chỉ dùng cho trẻ từ **6 tháng tuổi trở lên** khi paracetamol không hiệu quả và phải có sự chỉ định trực tiếp từ bác sĩ. Tuyệt đối không dùng Ibuprofen khi nghi ngờ trẻ bị sốt xuất huyết vì sẽ gây chảy máu ồ ạt nguy hiểm tính mạng.' },
      { q: 'Cơn co giật do sốt kéo dài bao lâu là bất thường?', a: 'Nếu cơn co giật kéo dài liên tục quá **5 phút**, hoặc trẻ bị co giật lần 2 trong vòng 24 giờ, hãy gọi ngay xe cấp cứu đưa bé đến bệnh viện gần nhất.' }
    ]
  },
  {
    id: 'art_31',
    title: 'Hướng dẫn bổ sung Vitamin D3 K2 cho trẻ sơ sinh chuẩn xác: Liều lượng, cách uống và thời điểm vàng',
    category: 'Sức khỏe trẻ em',
    subCategory: 'Vi chất dinh dưỡng',
    tags: ['vitamin D3 K2', 'bổ sung D3 cho trẻ', 'còi xương', 'rụng tóc vành khăn'],
    summary: 'Vitamin D3 K2 đóng vai trò then chốt giúp hấp thu Canxi tối đa vào xương răng của trẻ sơ sinh, phòng ngừa còi xương. Tìm hiểu liều lượng uống chuẩn xác và cách nhỏ giọt an toàn.',
    content: `
Trong những năm gần đây, việc bổ sung **Vitamin D3 và K2 (đặc biệt là dạng MK7)** cho trẻ sơ sinh đã trở thành một kiến thức chăm sóc con cơ bản của các mẹ bỉm sữa thông thái. Sự kết hợp hoàn hảo này là chìa khóa vàng quyết định hiệu quả hấp thu canxi, giúp bé phát triển hệ xương khớp vững chắc và chiều cao vượt trội.

### 1. Tại sao phải bổ sung Vitamin D3 K2 từ sơ sinh?
*   **Sữa mẹ nghèo Vitamin D:** Sữa mẹ chứa hàm lượng vitamin D cực kỳ thấp (chỉ khoảng 25 UI/lít sữa, trong khi nhu cầu của bé là 400 UI/ngày). Bé bú mẹ hoàn toàn có nguy cơ cao bị thiếu vitamin D gây còi xương.
*   **Cơ chế hấp thu Canxi tối ưu:**
    *   **Vitamin D3:** Giúp hấp thu canxi từ ruột vào máu. Nếu thiếu D3, Canxi chỉ hấp thu được khoảng 10% lượng nạp vào.
    *   **Vitamin K2 (MK7):** Giống như một người dẫn đường thông minh, kích hoạt protein osteocalcin giúp gắn kết Canxi từ máu trực tiếp vào **xương và răng**, tránh canxi lắng đọng tự do ở thành mạch máu gây vôi hóa động mạch hoặc lắng đọng ở thận gây sỏi thận.
*   **Biểu hiện thiếu D3 K2 ở trẻ:** Bé ngủ hay giật mình quấy khóc ban đêm, đổ mồ hôi trộm nhiều ở đầu gáy (dù phòng mát), rụng tóc hình vành khăn sau đầu, chậm mọc răng và xương sọ mềm (nhuyễn xương sọ).

### 2. Liều lượng bổ sung Vitamin D3 chuẩn y khoa hàng ngày
Hiệp hội Nhi khoa thế giới khuyến nghị bổ sung vitamin D3 liều dự phòng liên tục cho bé từ **sơ sinh đến ít nhất 1-2 tuổi**:
*   **Trẻ bú mẹ hoàn toàn hoặc bú mẹ một phần:** Bổ sung **400 UI Vitamin D3** mỗi ngày bắt đầu ngay từ những ngày đầu sau sinh.
*   **Trẻ uống sữa công thức hoàn toàn:** Sữa công thức đã bổ sung sẵn vitamin D. Nếu bé uống được tối thiểu **1 lít sữa công thức** mỗi ngày, bé đã nạp đủ 400 UI D3 và không cần bổ sung thêm bên ngoài. Nếu uống dưới 1 lít sữa/ngày, bé vẫn cần bổ sung thêm D3 liều dự phòng nhẹ dưới sự hướng dẫn y khoa.

### 3. Hướng dẫn cách uống và Thời điểm vàng hấp thu tốt nhất
*   **Thời điểm uống tốt nhất:** Cho bé uống vào **buổi sáng**, ngay trong cữ ăn hoặc ngay sau cữ bú của bé. Vitamin D3 và K2 là các vitamin **tan trong dầu**, chất béo có trong sữa mẹ hoặc sữa công thức sẽ là dung môi tự nhiên giúp cơ thể hấp thu các vi chất này tốt nhất.
*   **⚠️ CẢNH BÁO CÁCH NHỎ GIỌT AN TOÀN:**
    Tuyệt đối **không nhỏ trực tiếp đầu chai thuốc vào miệng bé**. Trẻ sơ sinh hay ngọ nguậy, đầu chai nhựa cứng có thể làm trầy xước lợi của bé, nguy hiểm hơn là vi khuẩn từ nước bọt của bé sẽ bám ngược vào đầu nhỏ giọt gây nhiễm khuẩn, hỏng toàn bộ lọ thuốc bên trong.
    *   *Cách nhỏ chuẩn:* Nhỏ lượng giọt cần thiết ra một chiếc thìa nhựa nhỏ sạch sẽ, hoặc nhỏ lên núm ti mẹ rồi cho bé bú trực tiếp, hoặc nhỏ ra đầu ti giả cho bé ngậm mút.

> **Khuyến cáo y tế:** Bổ sung thừa Vitamin D3 liều cao kéo dài (> 2000 UI/ngày) có thể gây ngộ độc tăng canxi máu, làm trẻ nôn trớ, chán ăn, tổn thương thận nghiêm trọng. Hãy luôn tuân thủ liều lượng 400 UI dự phòng hàng ngày của nhà sản xuất.
    `,
    views: 5100,
    likes: 430,
    bookmarkCount: 280,
    createdAt: '2026-05-10',
    author: 'Dr. Hải Anh',
    isFeatured: false,
    isTrending: true,
    image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=600&auto=format&fit=crop&q=80',
    faqs: [
      { q: 'Tắm nắng có thay thế được việc uống Vitamin D3 K2 không?', a: 'Không. Để tổng hợp đủ vitamin D từ ánh nắng, da bé phải tiếp xúc trực tiếp với tia UVB cường độ mạnh (thường là nắng gắt từ 10h sáng đến 15h chiều). Tắm nắng sớm trước 8h sáng chỉ có tác dụng sưởi ấm, không giúp tổng hợp D3 mà còn tăng nguy cơ ung thư da ở trẻ sơ sinh.' },
      { q: 'Vitamin K2 có cần thiết bắt buộc đi kèm D3 không?', a: 'Rất nên đi kèm. Sự kết hợp D3 K2 giúp định hướng canxi vào xương chuẩn xác nhất. Tuy nhiên nếu điều kiện kinh tế eo hẹp, việc bổ sung D3 đơn lẻ liều 400 UI vẫn là bắt buộc hàng đầu cho trẻ sơ sinh.' }
    ]
  },
  {
    id: 'art_32',
    title: 'Trẻ bị viêm tiểu phế quản: Cách nhận biết triệu chứng sớm, chăm sóc đường thở và khi nào cần cấp cứu',
    category: 'Sức khỏe trẻ em',
    subCategory: 'Hô hấp trẻ em',
    tags: ['viêm tiểu phế quản', 'ho khò khè', 'virus RSV', 'hô hấp trẻ em'],
    summary: 'Viêm tiểu phế quản là bệnh nhiễm trùng đường hô hấp dưới cực kỳ phổ biến ở trẻ dưới 2 tuổi, đặc biệt do virus hợp bào hô hấp (RSV) gây ra. Tìm hiểu cách theo dõi nhịp thở phát hiện suy hô hấp.',
    content: `
Viêm tiểu phế quản là tình trạng các phế quản nhỏ (tiểu phế quản) trong phổi của trẻ bị viêm nhiễm, sưng phù nề và tiết nhiều dịch nhầy làm tắc nghẽn đường thở. Bệnh chủ yếu xảy ra ở trẻ em **dưới 2 tuổi** (nhiều nhất là trẻ 2-6 tháng tuổi) vào thời điểm giao mùa thu - đông hoặc xuân - hè.

### 1. Nguyên nhân hàng đầu gây bệnh
Virus hợp bào hô hấp (**RSV - Respiratory Syncytial Virus**) là thủ phạm chính gây ra 80% số ca viêm tiểu phế quản ở trẻ nhỏ. Loại virus này lây lan cực nhanh qua các giọt bắn đường hô hấp khi tiếp xúc gần hoặc qua đồ chơi nhiễm bẩn.

### 2. Diễn tiến triệu chứng lâm sàng mẹ cần nắm rõ
Bệnh thường diễn tiến kéo dài từ 7 đến 10 ngày với các giai đoạn cụ thể:
*   **Giai đoạn khởi phát (3-5 ngày đầu):** Bé có các triệu chứng giống cảm lạnh thông thường: chảy nước mũi trong, hắt hơi, ho khan nhẹ, sốt nhẹ hoặc không sốt.
*   **Giai đoạn toàn phát (Ngày thứ 5 đến ngày thứ 7):** Virus tấn công sâu vào phổi. Bé ho nhiều hơn, khò khè nghe rõ bằng tai thường, thở nhanh, ăn bú kém hơn rõ rệt.
*   **Giai đoạn phục hồi (Sau ngày thứ 8):** Các triệu chứng khò khè ho giảm dần, dịch mũi đặc lại rồi hết hoàn toàn.

### 3. Cách theo dõi nhịp thở phát hiện sớm dấu hiệu Suy hô hấp nguy hiểm
> [!IMPORTANT]
> **ĐẾM NHỊP THỞ KHI BÉ NẰM YÊN HOẶC ĐANG NGỦ SAY.**
> Vén áo bé lên để quan sát sự di động của ngực/bụng. Đếm nhịp thở tròn trong đúng **1 phút** bằng đồng hồ bấm giờ.
>
> **Ngưỡng nhịp thở nhanh cảnh báo phổi đang bị tổn thương:**
> *   Trẻ **dưới 2 tháng tuổi**: Nhịp thở từ **60 lần/phút trở lên**.
> *   Trẻ từ **2 đến 11 tháng tuổi**: Nhịp thở từ **50 lần/phút trở lên**.
> *   Trẻ từ **12 đến 24 tháng tuổi**: Nhịp thở từ **40 lần/phút trở lên**.

### 4. Quy trình chăm sóc bé viêm tiểu phế quản tại nhà
Đa số trẻ bị viêm tiểu phế quản thể nhẹ hoàn toàn có thể tự điều trị an toàn tại nhà bằng cách chăm sóc triệu chứng tích cực:
*   **Làm thông thoáng đường thở:** Nhỏ 2-3 giọt nước muối sinh lý ấm vào mũi bé trước cữ bú 15 phút để làm mềm dịch mũi, giúp bé bú không bị ngạt.
*   **Bù nước dồi dào:** Cho bé bú mẹ nhiều cữ ngắn hơn hoặc tăng lượng nước ấm đối với trẻ lớn. Nước là chất làm loãng đờm nhầy tự nhiên tốt nhất trong cơ thể giúp trẻ dễ ho tống đờm ra ngoài.
*   **Giữ độ ẩm phòng lý tưởng:** Sử dụng máy phun sương tạo ẩm trong phòng ngủ để tránh không khí khô lạnh gây kích ứng phổi.

### 5. Dấu hiệu khẩn cấp đưa đi viện ngay lập tức
Đưa bé đi cấp cứu ngay nếu phát hiện:
*   Nhịp thở nhanh vượt ngưỡng an toàn kể trên kèm theo co rút cơ hô hấp (rút lõm lồng ngực sườn sâu hoắm mỗi khi hít vào).
*   Cánh mũi phập phồng theo nhịp thở, đầu gật gù theo nhịp thở.
*   Môi, đầu ngón tay ngón chân tái xanh hoặc tím tái (dấu hiệu thiếu oxy máu nghiêm trọng).
*   Bé rên rỉ rên rít từng tiếng, lờ đờ bỏ bú hoàn toàn.
    `,
    views: 6200,
    likes: 540,
    bookmarkCount: 390,
    createdAt: '2026-05-01',
    author: 'Dr. Hải Anh',
    isFeatured: true,
    isTrending: true,
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&auto=format&fit=crop&q=80',
    faqs: [
      { q: 'Có nên tự ý cho trẻ uống siro ho long đờm không?', a: 'Không nên. Siro ho long đờm làm tăng tiết dịch đờm loãng trong phổi, trong khi phế quản của trẻ dưới 1 tuổi quá nhỏ chưa biết cách ho mạnh để tống đờm ra, dễ gây ứ đọng đờm dẫn đến suy hô hấp.' },
      { q: 'Bệnh viêm tiểu phế quản có cần uống kháng sinh không?', a: 'Không. Viêm tiểu phế quản do virus RSV gây ra. Kháng sinh hoàn toàn không có tác dụng diệt virus mà chỉ gây loạn khuẩn đường ruột của trẻ. Chỉ dùng kháng sinh khi bác sĩ xác định có bội nhiễm vi khuẩn.' }
    ]
  },
  {
    id: 'art_33',
    title: 'Tiêu chảy cấp do Rotavirus ở trẻ em: Phác đồ bù nước điện giải Oresol chuẩn y khoa và dinh dưỡng phù hợp',
    category: 'Sức khỏe trẻ em',
    subCategory: 'Tiêu hóa trẻ em',
    tags: ['tiêu chảy cấp', 'Rotavirus', 'Oresol cách pha', 'bù nước điện giải'],
    summary: 'Rotavirus là tác nhân hàng đầu gây tiêu chảy cấp mất nước nghiêm trọng đe dọa tính mạng trẻ nhỏ dưới 5 tuổi. Tìm hiểu cách pha Oresol chuẩn xác từng ml và chế độ ăn chống sụt cân cho con.',
    content: `
Tiêu chảy cấp do nhiễm virus **Rotavirus** là bệnh lý đường ruột cực kỳ nguy hiểm và phổ biến ở trẻ nhỏ. Biểu hiện đặc trưng của bệnh là trẻ đột ngột nôn trớ sữa liên tục (giai đoạn đầu), sau đó đi ngoài phân lỏng toàn nước màu vàng hoặc xanh nhiều lần trong ngày (10-20 lần), kèm theo sốt nhẹ và đau bụng dữ dội. 

Nguy hiểm lớn nhất của bệnh không phải là số lần đi ngoài, mà là **tình trạng mất nước và điện giải cấp tính** rất nhanh. Nếu không được bù dịch kịp thời, trẻ sẽ bị suy kiệt, suy thận cấp, thậm chí tử vong.

### 1. Phác đồ bù nước điện giải bằng Oresol (ORS) - Chìa khóa vàng cứu mạng trẻ
Oresol là dung dịch bù nước tốt nhất thế giới được y khoa khuyên dùng. Tuy nhiên, pha oresol sai tỷ lệ nước (quá đặc hoặc quá loãng) sẽ trực tiếp gây nguy hại cho tính mạng của trẻ do gây rối loạn điện giải tế bào não.

> [!WARNING]
> **PHA ĐÚNG CHÍNH XÁC THỂ TÍCH NƯỚC ĐƯỢC GHI TRÊN BAO BÌ.**
> *   Nếu gói Oresol yêu cầu pha với **200ml nước**, mẹ phải dùng cốc đong đo đúng 200ml nước đun sôi để nguội để hòa tan hoàn toàn bột thuốc. Tuyệt đối không ước lượng bằng mắt, không chia nhỏ gói thuốc ra để pha làm nhiều lần, không thêm đường hay nước hoa quả vào dung dịch.
> *   Nếu pha quá đặc: Dung dịch ưu trương sẽ rút nước từ tế bào ruột ra ngoài, làm trẻ tiêu chảy nặng hơn và gây teo tế bào não rất nguy hiểm.
> *   Nếu pha quá loãng: Dung dịch nhược trương không cung cấp đủ lượng muối và điện giải cần thiết cho cơ thể phục hồi.

### 2. Cách cho trẻ uống Oresol đúng kỹ thuật tránh nôn trớ
*   Cho trẻ uống **từng muỗng nhỏ (thìa nhỏ)** hoặc từng ngụm nhỏ cách nhau 1-2 phút. Cho uống từ từ để ruột hấp thu dần dần.
*   Nếu cho trẻ tu ực một hơi hết cả bình oresol, áp lực lớn lên dạ dày đang viêm kích ứng sẽ lập tức gây phản xạ nôn vọt ra ngoài toàn bộ lượng nước vừa uống.
*   Nếu trẻ nôn trớ sau khi uống: Hãy dừng lại nghỉ 10 phút, sau đó cho uống lại từng thìa chậm hơn nữa.

### 3. Chế độ dinh dưỡng chống sụt cân khi trẻ bị tiêu chảy
Sai lầm cực lớn của nhiều mẹ là bắt con kiêng ăn, chỉ cho ăn cháo muối nhạt hoặc kiêng sữa vì sợ đi ngoài nhiều hơn. Việc này làm cơ thể bé suy kiệt, teo niêm mạc ruột kéo dài thời gian hồi phục.
*   **Trẻ bú mẹ/sữa công thức:** Tiếp tục cho bú bình thường, tăng số cữ bú trong ngày vì sữa mẹ chứa nhiều kháng thể giúp ruột phục hồi rất nhanh.
*   **Trẻ ăn dặm:** Cho ăn thức ăn mềm, lỏng, dễ tiêu hóa như cháo thịt gà, cháo thịt lợn băm nhỏ nấu nhừ kèm cà rốt hấp. Không nêm quá nhiều dầu mỡ động vật.
*   **Thực phẩm cần tránh:** Kiêng tuyệt đối các loại nước ngọt có gas, nước hoa quả đóng chai chứa nhiều đường fructose (làm tăng áp lực thẩm thấu ruột gây tiêu chảy nặng hơn).

> **Lời khuyên y khoa:** Bổ sung **Kẽm nguyên tố** (10mg/ngày cho trẻ dưới 6 tháng, 20mg/ngày cho trẻ trên 6 tháng) liên tục trong **10-14 ngày** là phác đồ bắt buộc của Bộ Y Tế nhằm giúp tái tạo niêm mạc ruột tổn thương và giảm tỷ lệ tái phát tiêu chảy trong những tháng tiếp theo.
    `,
    views: 4800,
    likes: 395,
    bookmarkCount: 220,
    createdAt: '2026-04-25',
    author: 'Dr. Hải Anh',
    isFeatured: false,
    isTrending: true,
    image: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?w=600&auto=format&fit=crop&q=80',
    faqs: [
      { q: 'Có nên cho trẻ uống thuốc cầm tiêu chảy (như Loperamid) không?', a: 'TUYỆT ĐỐI KHÔNG! Các thuốc cầm tiêu chảy hoạt động bằng cách làm giảm nhu động ruột, giữ chất độc và virus có hại đọng lại sâu trong ruột, gây trướng bụng hoại tử ruột vô cùng nguy hiểm tính mạng của trẻ.' },
      { q: 'Làm thế nào để phòng bệnh Rotavirus chủ động?', a: 'Phòng ngừa hiệu quả nhất là cho trẻ **uống vắc-xin phòng Rotavirus** đầy đủ từ **6 tuần tuổi** (phải hoàn thành các liều uống trước khi trẻ tròn 6 hoặc 8 tháng tuổi tùy dòng vắc-xin).' }
    ]
  },
  {
    id: 'art_34',
    title: 'Bí quyết chăm sóc bé sau tiêm chủng: Cách làm giảm sưng đau vết tiêm và theo dõi phản ứng sốt tại nhà',
    category: 'Sức khỏe trẻ em',
    subCategory: 'Tiêm chủng an toàn',
    tags: ['tiêm chủng an toàn', 'chăm sóc bé sau tiêm', 'sốt sau tiêm', 'giảm sưng vết tiêm'],
    summary: 'Tiêm chủng đầy đủ giúp trẻ xây dựng hàng rào miễn dịch vững chắc bảo vệ sức khỏe. Hướng dẫn mẹ quy trình theo dõi 24-48h sau tiêm chủng khoa học và xử lý các phản ứng phụ nhẹ tại nhà.',
    content: `
Tiêm vắc-xin phòng bệnh là quyền lợi và là biện pháp bảo vệ sức khỏe tốt nhất cho trẻ sơ sinh và trẻ nhỏ. Tuy nhiên, sau khi tiêm phòng, cơ thể trẻ sẽ tự động kích hoạt hệ miễn dịch để nhận diện kháng nguyên, dẫn đến một số phản ứng phụ thông thường như sốt nhẹ, quấy khóc, sưng đỏ đau nhức tại vết tiêm. Mẹ cần trang bị đầy đủ kiến thức để chăm sóc con an tâm nhất.

### 1. Quy trình theo dõi bé nghiêm ngặt sau tiêm chủng
*   **Theo dõi 30 phút đầu tại trung tâm tiêm chủng:**
    Đây là thời điểm vàng để phát hiện sớm phản ứng phản vệ (sốc phản vệ) cực kỳ hiếm gặp nhưng vô cùng nguy hiểm. Mẹ tuyệt đối không tự ý cho bé về nhà ngay sau khi tiêm xong.
*   **Theo dõi 24 - 48 giờ tiếp theo tại nhà:**
    *   Thường xuyên đo nhiệt độ cơ thể bé (mỗi 2-3 tiếng).
    *   Quan sát nhịp thở của con lúc ngủ, tinh thần chơi đùa, màu sắc da và lượng bú sữa hàng ngày.

### 2. Cách làm dịu sưng đau tại vết tiêm chuẩn khoa học
Vết tiêm của bé thường bị đỏ, hơi cứng và đau nhẹ trong vòng 1-2 ngày đầu.
*   **Cách làm đúng:**
    *   Mặc quần áo cotton rộng rãi, mềm mại để tránh cọ xát vào vết tiêm sưng đau của bé.
    *   Khi tắm rửa, tránh chà xát mạnh vào vết tiêm. Mẹ có thể áp khăn mát sạch sẽ nhẹ nhàng lên vùng da xung quanh vết tiêm để giúp bé giảm cảm giác đau buốt.
*   **⚠️ CẢNH BÁO NHỮNG SAI LẦM DÂN GIAN NGUY HIỂM:**
    Tuyệt đối **không được chườm nóng, chườm lạnh đá trực tiếp, hoặc đắp các lát khoai tây, lát chanh, lá thuốc dân gian** lên vết tiêm của bé. Da của bé sau tiêm có một lỗ kim tiêm hở siêu nhỏ. Việc đắp chất lạ chứa hàng triệu vi khuẩn lên đó sẽ trực tiếp gây nhiễm trùng da cấp tính, áp-xe vết tiêm hoại tử cơ rất nguy hiểm.

### 3. Xử lý sốt sau tiêm chủng an toàn tại nhà
*   Sốt nhẹ dưới 38.5 độ C: Cho bé bú mẹ nhiều cữ hơn để bù nước, cởi bớt tã quần rộng rãi thoáng mát.
*   Sốt từ 38.5 độ C trở lên: Cho bé uống thuốc hạ sốt **Paracetamol** với liều lượng chuẩn xác theo cân nặng của con (10-15mg/kg cho mỗi lần uống, cách nhau tối thiểu 4-6 tiếng).

### 4. Các triệu chứng nguy hiểm cần lập tức đưa đi bệnh viện cấp cứu
Mẹ cần khẩn trương đưa bé tới cơ sở y tế gần nhất nếu phát hiện các biểu hiện bất thường sau:
*   Bé sốt cao liên tục trên 39 độ C uống thuốc hạ sốt không thuyên giảm.
*   Trẻ quấy khóc dữ dội dồn dập kéo dài liên tục trên **3 tiếng đồng hồ** (hội chứng khóc thét dai dẳng sau tiêm).
*   Bé lờ đờ, ngủ lịm gọi hỏi khó tỉnh, bỏ bú hoàn toàn.
*   Có biểu hiện phát ban đỏ toàn thân đột ngột, khó thở, thở rít, môi tím tái.
*   Vết tiêm sưng tấy đỏ lan rộng đường kính trên 5cm, chảy mủ nhiễm trùng.
    `,
    views: 5900,
    likes: 480,
    bookmarkCount: 310,
    createdAt: '2026-05-11',
    author: 'Dr. Hải Anh',
    isFeatured: true,
    isTrending: false,
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&auto=format&fit=crop&q=80',
    faqs: [
      { q: 'Có nên cho trẻ uống thuốc hạ sốt trước khi đi tiêm phòng không?', a: 'Tuyệt đối không! Việc tự ý cho uống paracetamol dự phòng trước khi tiêm chủng có thể làm suy giảm hiệu quả kích hoạt phản ứng miễn dịch tạo kháng thể của vắc-xin.' },
      { q: 'Vết tiêm bị nổi cục cứng sau nhiều tuần có sao không?', a: 'Hiện tượng này khá phổ biến khi tiêm các vắc-xin chứa muối nhôm (như 6-trong-1, phế cầu). Cục cứng nhỏ dưới da hoàn toàn vô hại và sẽ tự tan biến sau vài tuần đến vài tháng mà không cần can thiệp.' }
    ]
  }
];

// Tiến trình chèn 20 bài viết mới vào db.js
async function run() {
  console.log('⏳ Bước 1: Đọc và chèn 20 bài viết chuẩn SEO vào file db.js...');
  
  try {
    const dbPath = './db.js';
    if (!fs.existsSync(dbPath)) {
      throw new Error(`Không tìm thấy file ${dbPath}`);
    }

    let dbContent = fs.readFileSync(dbPath, 'utf8');

    // Tìm và trích xuất mảng articles hiện tại trong file db.js
    const articlesMatch = dbContent.match(/articles:\s*(\[[\s\S]*?\n  \]),/);
    if (!articlesMatch) {
      throw new Error('Không tìm thấy mảng articles trong file db.js');
    }

    // Phân tích mảng cũ sang JSON
    let currentArticlesArray;
    eval(`currentArticlesArray = ${articlesMatch[1]}`);

    console.log(`📊 Số lượng bài viết cũ trong db.js: ${currentArticlesArray.length}`);

    // Ghép 20 bài viết mới vào sau mảng cũ, kiểm tra trùng lặp ID
    const mergedArticles = [...currentArticlesArray];
    for (const newArt of newArticles) {
      if (!mergedArticles.some(art => art.id === newArt.id)) {
        mergedArticles.push(newArt);
      } else {
        // Nếu trùng lặp ID thì cập nhật nội dung
        const idx = mergedArticles.findIndex(art => art.id === newArt.id);
        mergedArticles[idx] = newArt;
      }
    }

    console.log(`📊 Số lượng bài viết sau khi ghép: ${mergedArticles.length}`);

    // Chuyển mảng đã ghép thành chuỗi code javascript với thụt đầu dòng đẹp mắt
    const formattedArticlesCode = JSON.stringify(mergedArticles, null, 2)
      .replace(/\n/g, '\n  '); // Thêm khoảng trắng thụt lề chuẩn

    // Tạo drop-in replacement
    const targetString = `articles: ${articlesMatch[1]},`;
    const replacementString = `articles: ${formattedArticlesCode},`;

    const updatedDbContent = dbContent.replace(targetString, replacementString);

    fs.writeFileSync(dbPath, updatedDbContent, 'utf8');
    console.log('✅ Đã cập nhật thành công 20 bài viết chuẩn SEO mới vào file db.js!');

    // --- BƯỚC 2: ĐỒNG BỘ LÊN NEON POSTGRES CLOUD ---
    console.log('⏳ Bước 2: Bắt đầu đồng bộ 20 bài viết mới lên Neon Postgres Cloud...');
    
    if (!process.env.DATABASE_URL) {
      console.log('⚠️ Không tìm thấy biến môi trường DATABASE_URL trong file .env. Bỏ qua bước đồng bộ mây.');
      return;
    }

    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }
    });

    for (const article of newArticles) {
      const { id, title, category, subCategory, tags, summary, content, image, views, likes, createdAt, author, faqs } = article;
      
      const query = `
        INSERT INTO articles (id, title, category, sub_category, tags, summary, content, image, views, likes, created_at, author, faqs)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
        ON CONFLICT (id) DO UPDATE 
        SET title = EXCLUDED.title,
            category = EXCLUDED.category,
            sub_category = EXCLUDED.sub_category,
            tags = EXCLUDED.tags,
            summary = EXCLUDED.summary,
            content = EXCLUDED.content,
            image = EXCLUDED.image,
            author = EXCLUDED.author,
            faqs = EXCLUDED.faqs;
      `;
      const faqsJson = faqs ? JSON.stringify(faqs) : '[]';
      const tagsStr = tags ? tags.join(',') : '';
      
      await pool.query(query, [
        id, title, category, subCategory || '', tagsStr, summary, content, image, 
        views || 0, likes || 0, createdAt, author, faqsJson
      ]);
      console.log(`   + Đồng bộ mây thành công: ${title}`);
    }

    await pool.end();
    console.log('🎉 Hoàn tất 100% cập nhật local & đồng bộ Neon Postgres Cloud!');
    
  } catch (error) {
    console.error('❌ Thất bại:', error);
  }
}

run();
