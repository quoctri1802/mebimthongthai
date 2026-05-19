/**
 * Mẹ Bỉm Thông Thái - AI Parenting Assistant Engine (ai.js)
 * Cung cấp câu trả lời thông minh dựa trên từ khóa y khoa nhi, dinh dưỡng & giấc ngủ của bé.
 * Có kèm disclaimer y tế rõ ràng và cấu trúc lời khuyên chuẩn chuyên gia.
 */

const AI_RESPONSES = [
  {
    keywords: ['ngủ ngày cày đêm', 'ngủ ngày', 'cày đêm', 'đảo lộn giấc ngủ', 'ít ngủ đêm'],
    title: 'Giải pháp cho bé "ngủ ngày cày đêm" (Lộn xộn chu kỳ sinh học)',
    response: `
Chào Mẹ, hiện tượng trẻ sơ sinh (đặc biệt dưới 3 tháng) ngủ ngày cày đêm rất phổ biến do bé chưa phân biệt được ngày và đêm. Dưới đây là giải pháp khoa học dành cho Mẹ:

### 1. Nguyên nhân phổ biến
*   Bé chưa thiết lập nhịp sinh học Melatonin (thường chỉ ổn định từ tháng thứ 3-4).
*   Ban ngày bé ngủ quá nhiều, giấc ngủ ngày dài quá 2.5 - 3 tiếng liên tục làm giảm "áp lực ngủ" vào ban đêm.
*   Môi trường ban ngày và ban đêm không có sự khác biệt rõ rệt.

### 2. Cách xử lý an toàn & hiệu quả
*   **Thiết lập ranh giới Ngày/Đêm rõ rệt:**
    *   **Vào ban ngày:** Giữ phòng sáng sủa (mở rèm), sinh hoạt gia đình bình thường, nói chuyện với bé bằng giọng ấm áp, không cần đi nhẹ nói khẽ. Tuyệt đối không để giấc ngủ ngày kéo dài quá 2 giờ. Hãy đánh thức bé dậy, cho bé bú, chơi đùa (tummy time) rồi mới cho ngủ tiếp.
    *   **Vào ban đêm:** Giữ phòng tối hoàn toàn (hoặc chỉ bật đèn ngủ màu cam ấm cực nhẹ). Khi bé thức giấc bú đêm, giữ yên lặng tối đa, không trò chuyện, không chơi đùa với bé. Làm mọi việc thật nhẹ nhàng, bú xong đặt bé nằm xuống cũi ngay.
*   **Áp dụng Wake Window (Thời gian thức tối ưu):**
    *   Bé 0-1 tháng: Chỉ nên thức tối đa 45-60 phút giữa các giấc ngủ.
    *   Bé 2-3 tháng: Thời gian thức tối đa là 60-90 phút.
    *   Thức quá Wake window sẽ khiến bé bị quá mệt (overtired), dẫn đến khó ngủ và quấy khóc đêm dữ dội hơn.
*   **Thực hiện Routine đi ngủ cố định:**
    *   Khoảng 30 phút trước giờ ngủ đêm, hãy massage nhẹ cho bé, quấn kén (nếu bé dưới 3 tháng), bật tiếng ồn trắng và ôm ấp bế bé. Điều này tạo phản xạ có điều kiện báo hiệu cho não bộ bé đã đến giờ ngủ dài.

> **Cảnh báo y tế (Khi nào đi bác sĩ):** Nếu bé ngủ lịm đi khó đánh thức cả ngày lẫn đêm, bỏ bú hoàn toàn hoặc quấy khóc thét liên tục không thể dỗ dành quá 2 tiếng kèm sốt, mẹ cần đưa bé đi khám bác sĩ nhi ngay lập tức.
    `
  },
  {
    keywords: ['sốt', 'nhiệt độ cao', 'nóng người', 'sốt mọc răng', 'sốt tiêm chủng'],
    title: 'Hướng dẫn chăm sóc trẻ bị sốt an toàn tại nhà',
    response: `
Chào Mẹ, sốt là một phản ứng tự nhiên của hệ miễn dịch để chống lại nhiễm trùng. Mẹ hãy bình tĩnh và thực hiện các bước chăm sóc chuẩn y khoa sau:

### 1. Đánh giá mức độ sốt qua nhiệt độ đo được (Đo ở nách hoặc tai)
*   **Dưới 37.5°C:** Thân nhiệt bình thường.
*   **37.5°C - 38.5°C:** Sốt nhẹ. Chưa cần dùng thuốc hạ sốt.
*   **Trên 38.5°C:** Sốt vừa và cao. Cần cân nhắc dùng thuốc hạ sốt thích hợp cho bé.

### 2. Các bước xử lý an toàn tại nhà
*   **Dùng thuốc hạ sốt đúng liều lượng:**
    *   Chỉ dùng thuốc hạ sốt chứa hoạt chất **Paracetamol** đơn chất (ví dụ: Hapacol, Efferalgan nhi) khi nhiệt độ bé từ 38.5°C trở lên.
    *   **Liều lượng bắt buộc:** **10 - 15 mg cho mỗi kg cân nặng của bé** cho mỗi lần uống.
    *   Khoảng cách giữa các lần uống là từ **4 đến 6 tiếng**. Tuyệt đối không uống quá 4 lần trong 24 giờ.
    *   *Lưu ý:* Không tự ý dùng Ibuprofen trừ khi có chỉ định cụ thể của bác sĩ và bé trên 6 tháng tuổi.
*   **Lau ấm tích cực:**
    *   Dùng 5 chiếc khăn xô nhỏ nhúng nước ấm (nhiệt độ nước thấp hơn nhiệt độ cơ thể bé khoảng 2 độ, cảm thấy ấm tay).
    *   Đặt 4 khăn ở 2 nách và 2 bẹn của bé. Dùng chiếc khăn thứ 5 lau toàn thân bé liên tục, đặc biệt là vùng trán, nách, bẹn, lòng bàn tay chân. Thay khăn mỗi 2-3 phút.
    *   Ngưng lau khi nhiệt độ bé hạ xuống dưới 38°C hoặc sau khi lau 30 phút.
*   **Chăm sóc phụ trợ:**
    *   Mặc quần áo rộng rãi, mỏng nhẹ, thấm hút mồ hôi cho bé. Tuyệt đối KHÔNG đắp chăn dày hoặc mặc nhiều áo ấm vì sẽ làm giữ nhiệt khiến nhiệt độ tăng cao hơn, dễ gây co giật.
    *   Tăng cường cho bú mẹ hoặc bú bình nhiều hơn để bù nước. Trẻ lớn hơn có thể uống Oresol pha đúng tỉ lệ.

> **Cảnh báo y tế cực kỳ nguy hiểm (Đưa đi bệnh viện cấp tốc):**
> *   Trẻ dưới 3 tháng tuổi sốt từ 38°C trở lên (cần nhập viện ngay lập tức để tìm nguyên nhân).
> *   Bé sốt cao trên 39.5°C không đáp ứng với thuốc hạ sốt sau 1 giờ.
> *   Bé bị co giật, ngủ liêm bì, thở nhanh rút lõm ngực, hoặc xuất hiện ban đỏ trên da.
    `
  },
  {
    keywords: ['biếng ăn', 'lười bú', 'không chịu bú', 'bỏ bú', 'chậm tăng cân'],
    title: 'Nguyên nhân và giải pháp khi trẻ biếng ăn, lười bú đột ngột',
    response: `
Chào Mẹ, tình trạng trẻ lười bú hoặc biếng ăn đột ngột là nỗi ám ảnh chung của các bậc cha mẹ. Chúng ta cần tìm hiểu đúng nguyên nhân để giải quyết triệt để:

### 1. Phân loại nguyên nhân
*   **Biếng ăn sinh lý:** Thường trùng hợp với các cột mốc phát triển kỹ năng (Wonder Week) như bé đang học lẫy (3-4 tháng), học bò (7-8 tháng), mọc răng sữa (6-10 tháng). Bé quá mải mê khám phá thế giới xung quanh nên quên ăn. Tình trạng này thường tự hết sau 1-2 tuần.
*   **Biếng ăn tâm lý:** Do cha mẹ ép ăn, nhồi nhét, quát mắng hoặc ép bú bình quá mức khiến bé sợ hãi mỗi khi đến giờ ăn.
*   **Biếng ăn bệnh lý:** Bé bị đau họng, nhiệt miệng, nấm lưỡi (tưa lưỡi), viêm tai giữa hoặc đang bị đầy bụng, táo bón, rối loạn tiêu hóa.

### 2. Cách khắc phục khoa học
*   **Không ép buộc:** Tuyệt đối không ép bé ăn hay bú khi bé đã đẩy ra hoặc khóc. Hãy tôn trọng tín hiệu no của con. Ép ăn chỉ làm kéo dài thời gian biếng ăn của bé.
*   **Tạo môi trường tập trung:** Khi cho bú hoặc ăn dặm, hãy tắt hoàn toàn tivi, điện thoại và cất hết đồ chơi xung quanh. Cho bé ăn ở một góc yên tĩnh để tránh bị phân tâm.
*   **Khoảng cách bữa ăn hợp lý:** Đảm bảo khoảng cách giữa các cữ bú/ăn dặm từ **3 đến 4 tiếng**. Ăn vặt liên tục suốt ngày (snacking) sẽ khiến bé không bao giờ có cảm giác đói thực sự để bú ngon miệng.
*   **Vệ sinh miệng cho bé:** Rơ lưỡi sạch sẽ hàng ngày bằng nước muối sinh lý hoặc gạc chuyên dụng để bé cảm nhận hương vị sữa tốt nhất.

> **Cảnh báo y tế:** Đưa bé đi khám nếu bé lười bú kéo dài quá 2 tuần kèm sụt cân rõ rệt, tiểu ít (dưới 6 chiếc tã ướt mỗi ngày), hoặc bé có dấu hiệu mệt mỏi, đi ngoài ra máu.
    `
  },
  {
    keywords: ['ăn dặm', 'bắt đầu ăn dặm', 'blw', 'ăn cháo', 'thực đơn ăn dặm', 'dị ứng thức ăn'],
    title: 'Cẩm nang bắt đầu ăn dặm khoa học cho bé từ 6 tháng tuổi',
    response: `
Chào Mẹ, cộc mốc 6 tháng tuổi đánh dấu hành trình khám phá thế giới ẩm thực mới của bé. Hãy tham khảo cẩm nang chuẩn bị ăn dặm an toàn dưới đây:

### 1. Nguyên tắc vàng khi bắt đầu ăn dặm
*   **Bắt đầu từ 6 tháng tuổi:** Hệ tiêu hóa của bé trước 6 tháng tuổi chưa đủ men tiêu hóa tinh bột, dễ gây tiêu chảy hoặc dị ứng.
*   **Từ lỏng đến đặc, từ ít đến nhiều:** Bắt đầu bằng 1-2 thìa cháo rây loãng, sau đó tăng dần độ đặc và số lượng cữ ăn khi hệ tiêu hóa thích nghi.
*   **Quy tắc giới thiệu món mới (Quy tắc 3 ngày):** Khi thử một loại rau củ mới, hãy cho bé ăn liên tục trong 3 ngày để theo dõi xem bé có bị dị ứng (mẩn đỏ, nổi mề đay, tiêu chảy, nôn mửa) với thực phẩm đó hay không.
*   **Tuyệt đối KHÔNG nêm gia vị:** Hệ thận của trẻ dưới 1 tuổi rất non nớt. Muối và nước mắm nêm vào đồ ăn dặm có thể gây suy thận, quá tải tuần hoàn cho bé. Vị ngọt tự nhiên từ rau củ và sữa đã hoàn toàn đủ cho nhu cầu của bé.

### 2. Lựa chọn phương pháp ăn dặm phù hợp
*   **Ăn dặm truyền thống:** Bột/cháo nấu chung với thịt, rau củ xay nhuyễn. Ưu điểm: Dễ tăng cân nhanh, sạch sẽ. Nhược điểm: Bé chậm biết nhai nuốt thô, dễ biếng ăn về sau.
*   **Ăn dặm kiểu Nhật:** Cháo và các món ăn kèm được chế biến riêng biệt, rây mịn rồi tăng thô dần. Bé được cảm nhận hương vị nguyên bản của từng món ăn.
*   **Ăn dặm tự chỉ huy (BLW):** Bé tự bốc ăn các thanh củ quả hấp mềm ngay từ đầu. Phát triển tuyệt vời kỹ năng vận động tinh và cơ hàm nhai.

> **Lưu ý dị ứng thực phẩm:** Các thực phẩm dễ gây dị ứng cao bao gồm: lòng trắng trứng, hải sản có vỏ (tôm, cua), đậu phộng, hạt cây, lúa mì, sữa bò. Mẹ cần giới thiệu các món này thật muộn (sau 8-9 tháng) và ăn lượng cực nhỏ để thử phản ứng của bé trước.
    `
  },
  {
    keywords: ['táo bón', 'rặn đỏ mặt', 'đi ngoài khó', 'phân cứng', 'bao lâu đi ngoài'],
    title: 'Nhận biết và xử lý táo bón ở trẻ sơ sinh và trẻ nhỏ',
    response: `
Chào Mẹ, táo bón là hiện tượng phân của bé trở nên khô, cứng và bé gặp khó khăn, đau đớn khi đi ngoài. 

### 1. Phân biệt Táo bón thật sự và Giãn ruột sinh lý
*   **Hiện tượng Giãn ruột sinh lý (Thường gặp ở bé 2-5 tháng bú mẹ):** Bé có thể 7 - 10 ngày mới đi ngoài 1 lần, nhưng phân khi đi ra vẫn mềm, sệt màu vàng đẹp, bé chơi ngoan, bú tốt và không hề đau đớn khi đi. Đây hoàn toàn bình thường, không phải táo bón!
*   **Táo bón thật sự:** Bé đi ngoài ít hơn bình thường (dưới 2-3 lần/tuần), mỗi lần đi phải rặn đỏ mặt, khóc thét đau đớn. Phân ra dạng cục nhỏ cứng như phân dê, hoặc phân quá to và khô ráp.

### 2. Cách xử lý táo bón tại nhà
*   **Với bé bú mẹ hoàn toàn:**
    *   Mẹ hãy bổ sung nhiều chất xơ (rau xanh, trái cây), uống nhiều nước (ít nhất 2.5 lít/ngày). Tránh đồ ăn cay nóng, dầu mỡ vì chế độ ăn của mẹ ảnh hưởng trực tiếp đến tính chất sữa.
*   **Với bé bú sữa công thức:**
    *   Kiểm tra xem mẹ có pha sữa quá đặc hay không. Phải pha đúng tỉ lệ nước và sữa bột theo hướng dẫn trên vỏ lon.
    *   Cân nhắc đổi dòng sữa mát, giàu chất xơ hòa tan FOS/GOS cho bé.
*   **Massage bụng cho bé:**
    *   Massage bụng bé theo chiều kim đồng hồ quanh rốn (gọi là massage "I Love U") từ 5-10 phút mỗi ngày khi bé đói. Điều này giúp kích thích nhu động ruột hoạt động tốt hơn.
    *   Tập động tác "đạp xe" bằng chân bé nhẹ nhàng.
*   **Bổ sung men vi sinh (Probiotics):** Bổ sung lợi khuẩn đường ruột chất lượng cao giúp làm mềm phân tự nhiên.

> **Cảnh báo y tế:** Tuyệt đối không tự ý dùng ống bơm thụt hậu môn thường xuyên cho bé vì sẽ làm mất phản xạ rặn tự nhiên của trực tràng. Hãy đưa bé đi khám nếu táo bón kéo dài kèm theo nôn trớ bụng chướng to, đi ngoài có máu tươi hoặc bé sụt cân.
    `
  }
];

export const aiAssistant = {
  /**
   * Trả về câu trả lời phù hợp nhất dựa trên câu hỏi của mẹ bỉm.
   * Nếu không khớp từ khóa nào, sẽ trả về câu trả lời mang tính chất tư vấn chung rất chuyên nghiệp.
   */
  ask: (question) => {
    if (!question || question.trim() === '') {
      return {
        title: 'Trợ lý AI Mẹ & Bé',
        response: 'Chào Mẹ! Em có thể giúp gì cho Mẹ hôm nay? Mẹ hãy đặt các câu hỏi về chăm sóc trẻ sơ sinh, dinh dưỡng, giấc ngủ, tiêm chủng hoặc sức khỏe của mẹ sau sinh nhé.'
      };
    }

    const normalizedQuestion = question.toLowerCase();
    
    // Tìm kiếm câu trả lời khớp từ khóa nhất
    for (const item of AI_RESPONSES) {
      const match = item.keywords.some(keyword => normalizedQuestion.includes(keyword));
      if (match) {
        return item;
      }
    }

    // Nếu không khớp từ khóa nào, trả về câu trả lời thông minh tổng hợp
    return {
      title: 'Tư vấn Chăm sóc Bé Khoa học',
      response: `
Chào Mẹ, câu hỏi của Mẹ về **"${question}"** rất quan trọng trong hành trình nuôi dạy con. Dù chưa có câu trả lời chi tiết chuyên biệt cho chủ đề cụ thể này, Trợ lý AI xin chia sẻ một số lời khuyên tổng quát hữu ích chuẩn y khoa cho Mẹ:

### 1. Những nguyên tắc chăm sóc bé cốt lõi
*   **Lắng nghe cơ thể con:** Mỗi em bé là một cá thể duy nhất. Hãy quan sát biểu cảm của bé (khóc, rặn, ưỡn người, cười) để hiểu nhu cầu thay vì so sánh cứng nhắc với các bé khác.
*   **Dinh dưỡng dồi dào:** Trẻ dưới 6 tháng tuổi chỉ cần sữa mẹ hoặc sữa công thức là đủ cung cấp toàn bộ nước và dinh dưỡng cần thiết. Trẻ lớn hơn cần chế độ ăn dặm đa dạng nhóm chất (Carbohydrate, Protein, Chất béo, Vitamin và khoáng chất).
*   **Giữ vệ sinh an toàn:** Luôn rửa tay bằng xà phòng trước khi chăm sóc bé, pha sữa hoặc chế biến đồ ăn dặm. Tiêm chủng đầy đủ theo đúng lịch hẹn là tấm khiên bảo vệ bé tốt nhất trước dịch bệnh.

### 2. Gợi ý từ khóa Mẹ có thể tìm kiếm tiếp theo
Mẹ có thể thử gõ các câu hỏi cụ thể hơn có liên quan đến các từ khóa sau để nhận tư vấn chi tiết từ AI:
*   *"Bé bị sốt"*
*   *"Bé ngủ ngày cày đêm"*
*   *"Bắt đầu ăn dặm"*
*   *"Bé bị táo bón"*
*   *"Lười bú biếng ăn"*

> **LƯU Ý Y TẾ QUAN TRỌNG:**
> Toàn bộ thông tin được cung cấp bởi Trợ lý AI chỉ mang tính chất tham khảo, không thể thay thế cho các chẩn đoán chuyên môn, đơn thuốc hoặc lời khuyên trực tiếp của bác sĩ chuyên khoa nhi. Khi thấy bé có các biểu hiện sức khỏe bất thường như sốt cao liên tục, khó thở, nôn trớ nhiều cặn xanh hoặc lờ đờ bỏ bú, Mẹ cần đưa bé đến ngay cơ sở y tế hoặc bệnh viện gần nhất để được thăm khám kịp thời.
      `
    };
  },

  /**
   * Hệ thống Tìm kiếm Thông minh (Smart Search)
   * Tìm kiếm tất cả nội dung (Bài viết kiến thức + Câu hỏi cộng đồng)
   */
  search: (query, articles = [], posts = []) => {
    if (!query || query.trim() === '') {
      return { articles: [], posts: [], keywords: [] };
    }

    const normalizedQuery = query.toLowerCase();
    
    // Gợi ý từ khóa liên quan dựa trên query nhập vào
    const relatedKeywords = [];
    if (normalizedQuery.includes('sốt') || normalizedQuery.includes('nóng')) relatedKeywords.push('Hạ sốt an toàn', 'Tiêm chủng sơ sinh', 'Lau ấm cho bé');
    if (normalizedQuery.includes('ăn') || normalizedQuery.includes('bú') || normalizedQuery.includes('dặm')) relatedKeywords.push('Ăn dặm BLW', 'Biếng ăn sinh lý', 'Tập bú bình');
    if (normalizedQuery.includes('ngủ') || normalizedQuery.includes('đêm') || normalizedQuery.includes('giấc')) relatedKeywords.push('Sleep Training', 'Wake window trẻ em', 'Tiếng ồn trắng');
    if (normalizedQuery.includes('mẹ') || normalizedQuery.includes('sau sinh')) relatedKeywords.push('Trầm cảm sau sinh', 'Gọi sữa về', 'Dinh dưỡng mẹ bỉm');
    
    if (relatedKeywords.length === 0) {
      relatedKeywords.push('Chăm sóc trẻ sơ sinh', 'Lịch tiêm phòng mới nhất', 'Vệ sinh rốn bé');
    }

    // Tìm kiếm trong bài viết kiến thức
    const matchedArticles = articles.filter(art => 
      art.title.toLowerCase().includes(normalizedQuery) ||
      art.summary.toLowerCase().includes(normalizedQuery) ||
      art.content.toLowerCase().includes(normalizedQuery) ||
      art.category.toLowerCase().includes(normalizedQuery) ||
      art.tags.some(tag => tag.toLowerCase().includes(normalizedQuery))
    );

    // Tìm kiếm trong diễn đàn cộng đồng
    const matchedPosts = posts.filter(post => 
      post.title.toLowerCase().includes(normalizedQuery) ||
      post.content.toLowerCase().includes(normalizedQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(normalizedQuery))
    );

    return {
      articles: matchedArticles,
      posts: matchedPosts,
      keywords: relatedKeywords
    };
  }
};

window.parentingAi = aiAssistant;
