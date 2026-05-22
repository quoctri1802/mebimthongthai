const fs = require('fs');
const { Pool } = require('pg');
require('dotenv').config();

// Danh sách 10 bài đăng diễn đàn cực kỳ thực tế và đầy tính tương tác
const newPosts = [
  {
    id: 'post_04',
    title: 'Cứu em với các mom ơi, bé 4 tháng rưỡi đang tự ngủ bỗng dưng thức đêm khóc thét đòi bế dựng',
    content: 'Bé Sữa nhà em trộm vía trước đây tự ngủ rất ngoan, chỉ cần quấn nhũn bật tiếng ồn trắng là tự đưa mình vào giấc lúc 8h tối. Nhưng khoảng 1 tuần nay bé bỗng dưng dở chứng. Đang ngủ ngon lành đến 12h đêm bỗng khóc thét lên, dỗ thế nào cũng không nín. Chỉ khi bố bế dựng lên đi quanh phòng mới chịu im, cứ đặt xuống giường là mắt lại mở thao láo và khóc thét tiếp. Em mệt mỏi rã rời, cả ngày đi làm tối về lại chiến đấu thế này sắp kiệt sức rồi. Có phải con đang vào khủng hoảng Wonder Week 19 không ạ? Có mẹ nào cùng cảnh ngộ chia sẻ kinh nghiệm vượt qua giai đoạn này với ạ!',
    author: {
      nickname: 'Mẹ Bé Sữa',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      badge: 'Mẹ Tập Đầu'
    },
    tags: ['trẻ sơ sinh', 'giấc ngủ của bé', 'tâm lý mẹ bỉm'],
    upvotes: 56,
    helpfulCount: 28,
    heartCount: 20,
    createdAt: '2026-05-20T12:00:00Z',
    isAnonymous: false,
    comments: [
      {
        id: 'c_05',
        postId: 'post_04',
        content: 'Mom ơi, đây chính là biểu hiện điển hình của Wonder week 19 và khủng hoảng ngủ 4 tháng đấy ạ. Giai đoạn này não bộ của bé phát triển nhảy vọt nên giấc ngủ bị xáo trộn. Mom hãy kiên nhẫn nhé, hạn chế bế dựng đi rong tạo thói quen xấu sau này khó bỏ lắm. Thử tăng thời gian thức ngày (wake window) lên và dùng ti giả dỗ con tạm thời xem sao.',
        author: {
          nickname: 'Mẹ Sữa Bé Gấu',
          avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&auto=format&fit=crop&q=80',
          badge: 'Chuyên Gia Ngủ'
        },
        createdAt: '2026-05-20T12:45:00Z'
      },
      {
        id: 'c_06',
        postId: 'post_04',
        content: 'Bé nhà em cũng y hệt luôn mom ạ! Mất đúng 2 tuần như cực hình, đặt xuống giường là như đặt trên gai ấy. Em phải nhờ chồng bế đỡ ca đêm chứ không thì trầm cảm mất. Mom cố lên, qua đợt này con tự dưng ngoan trở lại đấy, cố gắng sinh hoạt EASY chuẩn giờ giấc nhé.',
        author: {
          nickname: 'Mẹ Bông',
          avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
          badge: 'Mẹ Siêu Chăm'
        },
        createdAt: '2026-05-20T13:15:00Z'
      }
    ]
  },
  {
    id: 'post_05',
    title: 'Con bị oẹ đỏ mặt tía tai khi ăn dặm BLW, mẹ chồng mắng em muốn hại cháu',
    content: 'Hôm nay em cho bé Kem (6 tháng 15 ngày) bắt đầu tập ăn dặm BLW bằng súp lơ và cà rốt hấp chín mềm cắt thanh dài. Vừa bốc đưa vào miệng gặm được một lúc thì bé bị oẹ liên tục, mặt đỏ gay, chảy cả nước mắt nước mũi. Em đã học khóa sơ cứu và biết đây là phản xạ oẹ bình thường để đẩy thức ăn thừa nên để yên cho con tự xử lý. Thế nhưng mẹ chồng em đứng bên cạnh thấy thế hét ầm lên, giật phắt bé ra khỏi ghế ăn dặm rồi vỗ lưng bôm bốp, mắng em sa sả bảo cho ăn uống kiểu giết con hại cháu. Giờ không khí gia đình căng thẳng quá, mẹ chồng bắt em phải xay nhuyễn cháo bón bằng thìa. Các mẹ ơi, làm sao để thuyết phục gia đình tin tưởng phương pháp này ạ?',
    author: {
      nickname: 'Mẹ Bé Kem',
      avatar: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=150&auto=format&fit=crop&q=80',
      badge: 'Mẹ Ăn Dặm'
    },
    tags: ['ăn dặm', 'BLW', 'tâm lý mẹ bỉm'],
    upvotes: 110,
    helpfulCount: 75,
    heartCount: 48,
    createdAt: '2026-05-21T08:30:00Z',
    isAnonymous: false,
    comments: [
      {
        id: 'c_07',
        postId: 'post_05',
        content: 'Ôi tình cảnh chung của các mẹ nuôi con BLW ở chung với ông bà rồi mom ơi. Phản xạ oẹ (Gagging) hoàn toàn khác với Hóc nghẹn (Choking). Oẹ là cơ chế tự vệ rất tốt giúp bé học cách xử lý thô. Mom thử tìm các video khoa học giải thích về hai cái này rồi cho chồng xem trước, để chồng làm cầu nối giải thích với mẹ chồng nhé.',
        author: {
          nickname: 'Mẹ Ốc',
          avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&auto=format&fit=crop&q=80',
          badge: 'Mẹ Ăn Dặm'
        },
        createdAt: '2026-05-21T09:10:00Z'
      },
      {
        id: 'c_08',
        postId: 'post_05',
        content: 'Ý kiến của mẹ Ốc rất chuẩn. Dưới góc độ y khoa, phản xạ oẹ của trẻ 6 tháng nằm ở phía trước lưỡi nên rất nhạy cảm để tránh dị vật lọt vào đường thở. Càng lớn phản xạ này càng lùi về phía sau. Nếu không cho con tập thô sớm, sau này bé rất dễ lười nhai, nuốt chửng gây đau dạ dày. Mẹ có thể cho con đi khám dinh dưỡng và nhờ bác sĩ trực tiếp tư vấn cho gia đình nhé.',
        author: {
          nickname: 'Dr. Hải Anh',
          avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&auto=format&fit=crop&q=80',
          badge: 'Chuyên Gia Y Tế'
        },
        createdAt: '2026-05-21T09:45:00Z'
      }
    ]
  },
  {
    id: 'post_06',
    title: 'Bé tiêm phế cầu Synflorix và 6in1 về sốt 38.5 độ có nên cho uống hạ sốt ngay không?',
    content: 'Bé nhà em sáng nay vừa đi tiêm mũi phế cầu Synflorix và 6in1 mũi đầu tiên về. Chiều nay con bắt đầu quấy khóc nhiều hơn, sờ người thấy nóng ran, em đo nhiệt độ ở nách là 38.5 độ C. Trộm vía con vẫn chịu bú mẹ, hơi lờ đờ tí thôi. Em lo quá, có nên cho con uống thuốc hạ sốt Paracetamol luôn không hay chườm ấm thôi ạ? Em nghe nói uống hạ sốt sớm làm giảm tác dụng kích hoạt miễn dịch của vắc-xin có đúng không các mẹ? Lần đầu làm mẹ nhiều cái ngơ ngác quá mong các mẹ chỉ bảo.',
    author: {
      nickname: 'Mẹ Đậu Đỏ',
      avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&auto=format&fit=crop&q=80',
      badge: 'Mẹ Mới'
    },
    tags: ['sức khỏe', 'vắc-xin', 'trẻ sơ sinh'],
    upvotes: 42,
    helpfulCount: 19,
    heartCount: 15,
    createdAt: '2026-05-19T14:20:00Z',
    isAnonymous: false,
    comments: [
      {
        id: 'c_09',
        postId: 'post_06',
        content: 'Nguyên tắc y khoa là khi trẻ sốt dưới 38.5 độ C (đo hậu môn hoặc tai) hoặc dưới 38 độ C (đo nách) và vẫn chơi ngoan, bú tốt thì chưa cần dùng thuốc hạ sốt, chỉ cần lau ấm bằng nước ấm ở bẹn, nách, cổ. Tuy nhiên, nếu nhiệt độ nách đã là 38.5 độ (tương đương nhiệt độ thực tế bên trong khoảng 39 độ) hoặc bé quấy khóc nhiều, khó chịu, bỏ bú, mẹ nên cho bé uống Paracetamol liều 10-15mg/kg cân nặng mỗi 4-6 tiếng. Việc uống hạ sốt khi con thực sự sốt cao khó chịu không làm ảnh hưởng đến hiệu quả miễn dịch của vắc-xin đâu mẹ nhé.',
        author: {
          nickname: 'Dr. Hải Anh',
          avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&auto=format&fit=crop&q=80',
          badge: 'Chuyên Gia Y Tế'
        },
        createdAt: '2026-05-19T14:55:00Z'
      },
      {
        id: 'c_10',
        postId: 'post_06',
        content: 'Đúng rồi mom, phế cầu nổi tiếng là sốt và đau bắp đùi chỗ tiêm đấy. Đừng đắp chanh hay khoai tây lên vết tiêm nhé nguy hiểm nhiễm trùng đấy. Cứ mặc đồ rộng rãi thoáng mát cho con bú tích cực là dịu dần thôi.',
        author: {
          nickname: 'Mẹ Bông',
          avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
          badge: 'Mẹ Siêu Chăm'
        },
        createdAt: '2026-05-19T15:20:00Z'
      }
    ]
  },
  {
    id: 'post_07',
    title: 'Tắc tia sữa nổi cục cứng ngắt đau phát khóc, làm sao để thông sữa nhanh hả các mẹ?',
    content: 'Em sinh bé được 2 tuần. Đêm qua mệt quá ngủ quên mất một cữ bú của con, sáng ra thấy ngực phải đau buốt, nổi một cục to cứng ngắc ở phía trên quầng vú. Em cố gắng dùng máy vắt sữa ra nhưng không được giọt nào, ngực thì căng tức như sắp nổ tung, người bắt đầu hơi gai sốt run cầm cập rồi. Em đau phát khóc luôn không bế nổi con nữa. Mẹ nào từng bị tắc sữa chỉ em cách xử lý nhanh tại nhà với ạ, em sợ bị áp xe vú phải đi chích mủ lắm!',
    author: {
      nickname: 'Mẹ Bé Bắp',
      avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=150&auto=format&fit=crop&q=80',
      badge: 'Mẹ Mới'
    },
    tags: ['nuôi con bằng sữa mẹ', 'sức khỏe', 'tâm lý mẹ bỉm'],
    upvotes: 95,
    helpfulCount: 55,
    heartCount: 32,
    createdAt: '2026-05-22T06:00:00Z',
    isAnonymous: false,
    comments: [
      {
        id: 'c_11',
        postId: 'post_07',
        content: 'Thương mom quá, cảm giác tắc sữa đúng là đau hơn cả đẻ! Mom làm ngay theo các bước này nhé: 1. Uống ngay 1 cốc nước ấm lớn. 2. Tắm vòi sen nước ấm xịt trực tiếp vào ngực, hoặc chườm ấm khoảng 5-10 phút trước khi bú để làm giãn nở ống sữa. 3. Cho bé bú tích cực bên ngực tắc trước, hướng cằm của bé về phía cục cứng để lực mút mạnh nhất giúp thông dòng sữa. 4. Vừa bú/vắt vừa massage nhẹ nhàng từ phía cục cứng hướng về phía núm vú.',
        author: {
          nickname: 'Mẹ Sữa Bé Gấu',
          avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&auto=format&fit=crop&q=80',
          badge: 'Chuyên Gia Ngủ'
        },
        createdAt: '2026-05-22T06:45:00Z'
      },
      {
        id: 'c_12',
        postId: 'post_07',
        content: 'Nếu có biểu hiện gai sốt trên 38.5 độ kéo dài và cục cứng đỏ ửng lên, mom tuyệt đối không được dùng máy hút lực mạnh hay nhồi bóp thô bạo nhé, sẽ làm tổn thương mô tuyến vú gây viêm nặng hơn. Hãy đi khám bác sĩ sản khoa ngay để được siêu âm thông tia bằng sóng siêu âm đa tần, kết hợp dùng kháng sinh/kháng viêm an toàn cho mẹ bú nhé.',
        author: {
          nickname: 'Dr. Hải Anh',
          avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&auto=format&fit=crop&q=80',
          badge: 'Chuyên Gia Y Tế'
        },
        createdAt: '2026-05-22T07:10:00Z'
      }
    ]
  },
  {
    id: 'post_08',
    title: 'Bé bị chàm sữa hai má đỏ như quả cà chua, bong tróc nứt nẻ ráp như giấy nhám xót quá',
    content: 'Chào các mẹ, bé Bon nhà em được 3 tháng tuổi. Dạo này thời tiết hanh khô thấy hai má con bắt đầu đỏ ửng, sờ vào ráp như tờ giấy nhám. Hôm nay con ngứa ngáy khó chịu cứ lấy tay cào xước cả má rớm máu xót vô cùng. Em đã thử tắm lá kinh giới và bôi hồ nước theo kinh nghiệm dân gian nhưng thấy má con càng khô và đỏ đậm hơn. Có loại kem dưỡng ẩm hay thuốc bôi nào an toàn lành tính trị dứt điểm chàm sữa cho trẻ sơ sinh không các mẹ chỉ giúp em với!',
    author: {
      nickname: 'Mẹ Bon Bon',
      avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&auto=format&fit=crop&q=80',
      badge: 'Mẹ Siêu Chăm'
    },
    tags: ['làn da bé', 'trẻ sơ sinh', 'sức khỏe'],
    upvotes: 68,
    helpfulCount: 34,
    heartCount: 20,
    createdAt: '2026-05-18T10:10:00Z',
    isAnonymous: false,
    comments: [
      {
        id: 'c_13',
        postId: 'post_08',
        content: 'Mom ơi tuyệt đối ngưng tắm các loại lá khi má bé đang bị xước rớm máu nhé, dễ nhiễm trùng da cực kỳ nguy hiểm. Chàm sữa bản chất là do hàng rào bảo vệ da bị thiếu hụt độ ẩm. Mom hãy bôi kem dưỡng ẩm chuyên dụng như Aveeno Baby, Cetaphil AD Derma hoặc Dexeryl ngày 4-5 lần, thoa ngay sau khi tắm 3 phút. Da đủ ẩm sẽ tự hồi phục và hết ngứa ngáy.',
        author: {
          nickname: 'Mẹ Bông',
          avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
          badge: 'Mẹ Siêu Chăm'
        },
        createdAt: '2026-05-18T11:00:00Z'
      },
      {
        id: 'c_14',
        postId: 'post_08',
        content: 'Đúng vậy mom ạ. Nếu chàm sữa bị viêm đỏ nặng, rỉ dịch vàng thì cần phải bôi kem corticoid nhẹ (như Hydrocortisone 1%) trong 3-5 ngày để cắt cơn viêm theo đơn của bác sĩ da liễu. Không tự ý mua thuốc bôi chứa corticoid mạnh trôi nổi trên mạng kẻo gây teo da, suy tuyến thượng thận cho con nhé.',
        author: {
          nickname: 'Dr. Hải Anh',
          avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&auto=format&fit=crop&q=80',
          badge: 'Chuyên Gia Y Tế'
        },
        createdAt: '2026-05-18T11:30:00Z'
      }
    ]
  },
  {
    id: 'post_09',
    title: 'Bé 4 tháng tăng chỉ được 400g, em bị cả nhà chồng chỉ trích vì sữa mẹ loãng, nóng...',
    content: 'Em đang chịu áp lực kinh khủng khiếp các mẹ ạ. Bé nhà em bú mẹ hoàn toàn, trộm vía 3 tháng đầu tăng cân rất tốt (tháng đầu 1.2kg, tháng hai 900g, tháng ba 700g). Nhưng đến tháng thứ tư này cân nặng con chỉ tăng đúng 400g. Mẹ chồng em bế cháu thấy nhẹ cân là lườm nguýt bảo tại em ăn uống kiêng khem nên sữa loãng như nước vo gạo, sữa nóng làm con còi cọc, rồi đòi mua sữa công thức dặm thêm cho cháu uống. Em stress mất ngủ triền miên dẫn đến lượng sữa vắt ra cũng ít hẳn đi. Có phải sữa mẹ sau 3 tháng sẽ bị mất chất không ạ? Em có nên dặm thêm sữa ngoài không?',
    author: {
      nickname: 'Mẹ Ẩn Danh',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
      badge: 'Mẹ Mới'
    },
    tags: ['nuôi con bằng sữa mẹ', 'tâm lý mẹ bỉm', 'sữa'],
    upvotes: 120,
    helpfulCount: 88,
    heartCount: 60,
    createdAt: '2026-05-20T21:10:00Z',
    isAnonymous: true,
    comments: [
      {
        id: 'c_15',
        postId: 'post_09',
        content: 'Thương mom nhiều lắm, đọc mà nghẹn lòng vì thấy hình ảnh mình ngày xưa. Sữa mẹ luôn là tốt nhất và không bao giờ tự nhiên mất chất sau 3 tháng đâu nhé. Sinh lý của trẻ sơ sinh là tăng cân cực nhanh trong 3 tháng đầu (giai đoạn tích mỡ), sau đó từ tháng thứ 4 bé bắt đầu hoạt động nhiều hơn (lật lẫy, hóng chuyện) nên tốc độ tăng cân sẽ giảm dần xuống còn 300g-500g/tháng là hoàn toàn bình thường. Mom đừng stress nhé, stress làm giảm hormone oxytocin gây giảm tiết sữa đấy.',
        author: {
          nickname: 'Mẹ Sữa Bé Gấu',
          avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&auto=format&fit=crop&q=80',
          badge: 'Chuyên Gia Ngủ'
        },
        createdAt: '2026-05-20T21:45:00Z'
      },
      {
        id: 'c_16',
        postId: 'post_09',
        content: 'Mẹ Sữa giải thích rất chính xác. Theo biểu đồ tăng trưởng chuẩn của Tổ chức Y tế Thế giới (WHO), tốc độ tăng cân giảm dần sau 3 tháng tuổi là quy luật sinh lý bình thường. Để đánh giá bé có nhận đủ sữa hay không, mẹ hãy theo dõi số lượng tã ướt (bé đi tiểu 6 lần/ngày trở lên, nước tiểu trong hoặc vàng nhạt) và con vẫn vui vẻ, lanh lợi là đạt yêu cầu. Đừng dặm sữa ngoài vội vàng kẻo bé quen bú bình rồi bỏ bú mẹ đấy.',
        author: {
          nickname: 'Dr. Hải Anh',
          avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&auto=format&fit=crop&q=80',
          badge: 'Chuyên Gia Y Tế'
        },
        createdAt: '2026-05-20T22:15:00Z'
      }
    ]
  },
  {
    id: 'post_10',
    title: 'Bé 18 ngày tuổi chưa rụng rốn, cuống rốn hơi ướt và có mùi hôi nhẹ có sao không ạ?',
    content: 'Các mẹ cho em hỏi chút, bé nhà em sinh thường được 18 ngày rồi mà rốn vẫn chưa rụng, chân rốn nhìn hơi ướt và hôm nay lúc thay tã em thấy có mùi hôi nhẹ. Em vẫn vệ sinh bằng cồn 70 độ hàng ngày theo hướng dẫn của bà nội. Em lo lắng quá không biết có phải con bị nhiễm trùng rốn không? Có mẹ nào có con rụng rốn muộn thế này chưa và cần đưa đi viện khám ngay không ạ?',
    author: {
      nickname: 'Mẹ Miu Miu',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      badge: 'Mẹ Tập Đầu'
    },
    tags: ['trẻ sơ sinh', 'sức khỏe', 'vệ sinh cho bé'],
    upvotes: 38,
    helpfulCount: 12,
    heartCount: 8,
    createdAt: '2026-05-17T09:30:00Z',
    isAnonymous: false,
    comments: [
      {
        id: 'c_17',
        postId: 'post_10',
        content: '⚠️ CẢNH BÁO MẸ: Tuyệt đối KHÔNG tự ý dùng cồn 70 độ hoặc cồn i-ốt bôi trực tiếp vào chân rốn trẻ sơ sinh nhé! Cồn bay hơi nhanh làm khô bề mặt ngoài nhưng lại làm bỏng, hoại tử niêm mạc rốn non nớt bên trong, làm rốn lâu rụng hơn. Cách chăm sóc rốn đúng y khoa hiện nay là để hở rốn khô thoáng tự nhiên, không quấn băng rốn chèn lên tã. Nếu rốn có mùi hôi nhẹ, ướt rỉ dịch vàng hoặc đỏ tấy vùng da quanh rốn thì đây là dấu hiệu cảnh báo nhiễm trùng rốn, mẹ cần đưa bé đi khám nhi khoa ngay lập tức để bác sĩ xử lý sát khuẩn tránh biến chứng nhiễm trùng huyết nguy hiểm nhé.',
        author: {
          nickname: 'Dr. Hải Anh',
          avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&auto=format&fit=crop&q=80',
          badge: 'Chuyên Gia Y Tế'
        },
        createdAt: '2026-05-17T10:15:00Z'
      },
      {
        id: 'c_18',
        postId: 'post_10',
        content: 'Ôi may quá có bác sĩ Hải Anh tư vấn! Bé nhà em hồi trước cũng 21 ngày mới rụng rốn nhưng khô ráo hoàn toàn không hôi. Rốn ướt có mùi là phải đi khám ngay đi mom ơi đừng chủ quan.',
        author: {
          nickname: 'Mẹ Ốc',
          avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&auto=format&fit=crop&q=80',
          badge: 'Mẹ Ăn Dặm'
        },
        createdAt: '2026-05-17T10:45:00Z'
      }
    ]
  },
  {
    id: 'post_11',
    title: 'Hành trình rèn tự ngủ thành công cho bé theo EASY 3 và nút chờ - Chia sẻ động lực cho các mẹ bỉm',
    content: 'Sau 2 tuần chiến đấu kiên trì, hôm nay em muốn chia sẻ niềm vui sướng tột cùng này với các mẹ. Bé Thỏ nhà em trước đây chỉ ngủ khi bế đưa võng hoặc ngậm ti mẹ, đặt xuống giường là tỉnh như sáo sậu. Em quyết định rèn con tự ngủ theo EASY 3 và nút chờ. Mấy ngày đầu con khóc ròng rã, em xót ruột phát khóc phải trốn ra ngoài cho chồng dỗ. Nhưng trộm vía đến ngày thứ 5 bé bắt đầu tự đưa mình vào giấc mà không cần bế ẵm hay ti giả nữa. Giờ giấc ăn ngủ cực kỳ khoa học, mẹ có nhiều thời gian nghỉ ngơi chăm sóc bản thân hẳn. Các mẹ đang rèn EASY cố lên nhé, quả ngọt sẽ đến thôi ạ!',
    author: {
      nickname: 'Mẹ Bé Thỏ',
      avatar: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=150&auto=format&fit=crop&q=80',
      badge: 'Chuyên Gia Bỉm'
    },
    tags: ['giấc ngủ của bé', 'EASY', 'tâm lý mẹ bỉm'],
    upvotes: 154,
    helpfulCount: 112,
    heartCount: 85,
    createdAt: '2026-05-22T02:30:00Z',
    isAnonymous: false,
    comments: [
      {
        id: 'c_19',
        postId: 'post_11',
        content: 'Chúc mừng mom siêu nhân! Ngưỡng mộ quá đi mất. Bé nhà mình 2 tháng tuổi ngủ ngày siêu ngắn chỉ toàn 30 phút là tỉnh. Mom cho mình xin lịch sinh hoạt EASY 3 chi tiết của bé nhà mom với nhé, mình cảm ơn nhiều!',
        author: {
          nickname: 'Mẹ Bông',
          avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
          badge: 'Mẹ Siêu Chăm'
        },
        createdAt: '2026-05-22T03:15:00Z'
      },
      {
        id: 'c_20',
        postId: 'post_11',
        content: 'Chúc mừng hai mẹ con! Luyện tự ngủ theo phương pháp khoa học giúp bé hình thành chu kỳ giấc ngủ sinh lý khỏe mạnh, không phụ thuộc vào các công cụ hỗ trợ ngoại cảnh. Mom nhớ lưu ý duy trì cữ bú no vào ban ngày để con không bị thức giấc vì đói đêm nhé.',
        author: {
          nickname: 'Mẹ Sữa Bé Gấu',
          avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&auto=format&fit=crop&q=80',
          badge: 'Chuyên Gia Ngủ'
        },
        createdAt: '2026-05-22T03:45:00Z'
      }
    ]
  },
  {
    id: 'post_12',
    title: 'Bổ sung Vitamin D3K2 loại nào tốt cho bé sơ sinh ngủ không sâu giấc, rụng tóc vành khăn?',
    content: 'Bé nhà em được 2 tháng tuổi, dạo này ngủ rất hay giật mình, vặn mình đỏ gay cả mặt và ra nhiều mồ hôi trộm ở đầu. Em quan sát thấy gáy con bắt đầu rụng tóc thành một vệt tròn (rụng tóc vành khăn). Bà ngoại bảo bé bị thiếu canxi đòi mua canxi cho uống. Nhưng em tìm hiểu thấy trẻ sơ sinh bú mẹ đầy đủ không thiếu canxi mà chỉ cần bổ sung Vitamin D3K2 để hấp thu thôi. Các mẹ đang cho con dùng D3K2 loại nào tốt, nhỏ giọt hay xịt, chỉ giúp em thương hiệu uy tín với ạ!',
    author: {
      nickname: 'Bố Đăng Khoa',
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80',
      badge: 'Bố Đảm Đang'
    },
    tags: ['vi chất dinh dưỡng', 'trẻ sơ sinh', 'sức khỏe'],
    upvotes: 50,
    helpfulCount: 22,
    heartCount: 14,
    createdAt: '2026-05-16T15:20:00Z',
    isAnonymous: false,
    comments: [
      {
        id: 'c_21',
        postId: 'post_12',
        content: 'Bố Đăng Khoa tìm hiểu thông tin rất chuẩn xác và khoa học. Trẻ sơ sinh dưới 6 tháng tuổi bú mẹ hoàn toàn không cần uống thêm canxi trực tiếp vì hàm lượng canxi trong sữa mẹ rất dễ hấp thu và dồi dào. Hiện tượng rụng tóc vành khăn, vặn mình phần lớn là sinh lý bình thường chứ không hẳn là do thiếu canxi. Tuy nhiên, việc bổ sung Vitamin D3 dự phòng liều **400 IU/ngày** là bắt buộc từ tuần thứ 2 sau sinh. Nên ưu tiên D3K2 dạng xịt (như Dimao) vì phân liều chuẩn xác, tiện lợi hơn dạng nhỏ giọt dễ bị quá liều.',
        author: {
          nickname: 'Dr. Hải Anh',
          avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&auto=format&fit=crop&q=80',
          badge: 'Chuyên Gia Y Tế'
        },
        createdAt: '2026-05-16T16:05:00Z'
      },
      {
        id: 'c_22',
        postId: 'post_12',
        content: 'Nhà em đang dùng Lineabon D3K2 dạng nhỏ giọt nhập khẩu thấy con hợp tác lắm bố nó ơi, trộm vía bé ngủ sâu giấc và ít ra mồ hôi hẳn. Bố mua thử cho bé dùng xem sao.',
        author: {
          nickname: 'Mẹ Bé Kem',
          avatar: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=150&auto=format&fit=crop&q=80',
          badge: 'Mẹ Ăn Dặm'
        },
        createdAt: '2026-05-16T16:30:00Z'
      }
    ]
  },
  {
    id: 'post_13',
    title: 'Cực hình Wonder Week tuần thứ 8 - Bé quấy khóc không ngớt từ sáng đến tối',
    content: 'Em sắp kiệt sức rồi các mẹ ơi. Bé tròn 8 tuần tuổi bỗng dưng lột xác thành một đứa trẻ hoàn toàn khác. Con lười bú hẳn, cứ bế ngửa ra bú là hét toáng lên, ngủ giấc ngày chỉ được đúng 30 phút là mở mắt khóc ré lên. Bình thường con rất hay cười đùa mà giờ mặt cứ cau có, quấy khóc ê a cả ngày không chịu rời mẹ nửa bước. Em bế mỏi rã cánh tay, ăn vội bát cơm cũng không yên. Đây có đúng là Wonder Week 8 không và bao giờ thì cơn ác mộng này mới kết thúc hả các mẹ? Em muốn trầm cảm luôn rồi...',
    author: {
      nickname: 'Mẹ Bé Bơ',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      badge: 'Mẹ Tập Đầu'
    },
    tags: ['trẻ sơ sinh', 'tâm lý mẹ bỉm', 'giấc ngủ của bé'],
    upvotes: 82,
    helpfulCount: 46,
    heartCount: 25,
    createdAt: '2026-05-21T16:20:00Z',
    isAnonymous: false,
    comments: [
      {
        id: 'c_23',
        postId: 'post_13',
        content: 'Chính xác là WW8 rồi mom ơi, đợt này kéo dài khoảng 1 tuần đến 10 ngày đấy. Bé đang học kỹ năng mới là nhận biết các chuyển động và âm thanh xung quanh nên não bộ bị quá tải. Mom hãy tích cực ôm ấp da kề da, dùng địu vải để rảnh tay làm việc nhé. Hãy tự nhủ "đây chỉ là một giai đoạn, rồi nó sẽ qua" để giữ bình tĩnh nhé, cố lên mom!',
        author: {
          nickname: 'Mẹ Sữa Bé Gấu',
          avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&auto=format&fit=crop&q=80',
          badge: 'Chuyên Gia Ngủ'
        },
        createdAt: '2026-05-21T17:05:00Z'
      },
      {
        id: 'c_24',
        postId: 'post_13',
        content: 'Bé nhà em ngày xưa qua WW8 là tự dưng biết ê a dài hơn, cười thành tiếng giòn tan luôn ấy mom. Kiên trì ôm con vỗ về qua những ngày bão giông nhé mom bỉm!',
        author: {
          nickname: 'Mẹ Bông',
          avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
          badge: 'Mẹ Siêu Chăm'
        },
        createdAt: '2026-05-21T17:30:00Z'
      }
    ]
  }
];

async function run() {
  const dbPath = './db.js';
  
  try {
    console.log('⏳ Bước 1: Đọc và cập nhật file db.js cục bộ...');
    const dbContent = fs.readFileSync(dbPath, 'utf8');

    // Tìm mảng posts bằng Regex
    const postsMatch = dbContent.match(/posts:\s*(\[[\s\S]*?\n  \]),/);
    if (!postsMatch) {
      throw new Error('❌ Không tìm thấy mảng posts trong db.js!');
    }

    let currentPostsArray = [];
    eval(`currentPostsArray = ${postsMatch[1]}`);

    console.log(`📊 Số lượng bài đăng cũ trong db.js: ${currentPostsArray.length}`);

    // Ghép các bài viết mới vào sau mảng cũ, kiểm tra trùng lặp ID
    const mergedPosts = [...currentPostsArray];
    for (const newPost of newPosts) {
      if (!mergedPosts.some(p => p.id === newPost.id)) {
        mergedPosts.push(newPost);
      } else {
        // Cập nhật nội dung nếu trùng ID
        const idx = mergedPosts.findIndex(p => p.id === newPost.id);
        mergedPosts[idx] = newPost;
      }
    }

    console.log(`📊 Số lượng bài đăng sau khi ghép: ${mergedPosts.length}`);

    // Định dạng lại code đẹp đẽ thụt đầu dòng
    const formattedPostsCode = JSON.stringify(mergedPosts, null, 2)
      .replace(/\n/g, '\n  ');

    const targetString = `posts: ${postsMatch[1]},`;
    const replacementString = `posts: ${formattedPostsCode},`;

    const updatedDbContent = dbContent.replace(targetString, replacementString);
    fs.writeFileSync(dbPath, updatedDbContent, 'utf8');
    console.log('✅ Đã cập nhật thành công 10 bài đăng diễn đàn mới vào file db.js!');

    // --- BƯỚC 2: ĐỒNG BỘ LÊN NEON POSTGRES CLOUD ---
    console.log('⏳ Bước 2: Bắt đầu đồng bộ 10 bài đăng và bình luận tương ứng lên Neon Postgres Cloud...');
    
    if (!process.env.DATABASE_URL) {
      console.log('⚠️ Không tìm thấy biến môi trường DATABASE_URL trong file .env. Bỏ qua bước đồng bộ mây.');
      return;
    }

    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }
    });

    for (const post of newPosts) {
      const { id, title, content, author, tags, upvotes, helpfulCount, heartCount, createdAt, isAnonymous, comments } = post;
      
      // Chèn/Cập nhật bảng posts
      const postQuery = `
        INSERT INTO posts (id, title, content, author_nickname, author_avatar, author_badge, tags, upvotes, helpful_count, heart_count, created_at, is_anonymous)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
        ON CONFLICT (id) DO UPDATE SET
          title = EXCLUDED.title,
          content = EXCLUDED.content,
          author_nickname = EXCLUDED.author_nickname,
          author_avatar = EXCLUDED.author_avatar,
          author_badge = EXCLUDED.author_badge,
          tags = EXCLUDED.tags,
          upvotes = EXCLUDED.upvotes,
          helpful_count = EXCLUDED.helpful_count,
          heart_count = EXCLUDED.heart_count,
          created_at = EXCLUDED.created_at,
          is_anonymous = EXCLUDED.is_anonymous;
      `;
      
      const tagsStr = tags ? tags.join(',') : '';
      const nickname = isAnonymous ? 'Mẹ Ẩn Danh' : (author.nickname || '');
      const avatar = isAnonymous ? 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80' : (author.avatar || '');
      const badge = isAnonymous ? 'Mẹ Mới' : (author.badge || '');

      await pool.query(postQuery, [
        id, title, content, nickname, avatar, badge, tagsStr,
        upvotes || 0, helpfulCount || 0, heartCount || 0, createdAt, isAnonymous || false
      ]);
      console.log(`   + Đồng bộ bài đăng thành công: "${title.substring(0, 40)}..."`);

      // Chèn/Cập nhật bảng comments tương ứng
      if (comments && comments.length > 0) {
        for (const comment of comments) {
          const commentQuery = `
            INSERT INTO comments (id, post_id, content, author_nickname, author_avatar, author_badge, created_at)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            ON CONFLICT (id) DO UPDATE SET
              content = EXCLUDED.content,
              author_nickname = EXCLUDED.author_nickname,
              author_avatar = EXCLUDED.author_avatar,
              author_badge = EXCLUDED.author_badge,
              created_at = EXCLUDED.created_at;
          `;
          
          await pool.query(commentQuery, [
            comment.id, comment.postId, comment.content,
            comment.author.nickname, comment.author.avatar, comment.author.badge,
            comment.createdAt
          ]);
        }
        console.log(`     -> Đồng bộ thành công ${comments.length} bình luận tương ứng.`);
      }
    }

    await pool.end();
    console.log('🎉 Hoàn tất 100% việc chèn local & đồng bộ Neon Postgres Cloud cho 10 bài đăng cộng đồng!');
    
  } catch (error) {
    console.error('❌ Thất bại:', error);
  }
}

run();
