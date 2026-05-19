const fs = require('fs');
const path = require('path');

const images = [
  {
    src: 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\e59ab0bc-d8e2-4216-b209-a4829676268a\\vietnamese_mother_baby_homepage_1779158509039.png',
    dest: './viet_mom_baby.png'
  },
  {
    src: 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\e59ab0bc-d8e2-4216-b209-a4829676268a\\vietnamese_baby_eating_1779158626605.png',
    dest: './viet_baby_eating.png'
  },
  {
    src: 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\e59ab0bc-d8e2-4216-b209-a4829676268a\\vietnamese_baby_sleeping_1779158665417.png',
    dest: './viet_baby_sleeping.png'
  }
];

let successCount = 0;

console.log('⏳ Đang sao chép hình ảnh chất lượng cao vào thư mục dự án...');

images.forEach(img => {
  try {
    if (fs.existsSync(img.src)) {
      fs.copyFileSync(img.src, img.dest);
      console.log(`✅ Đã sao chép thành công: ${img.dest}`);
      successCount++;
    } else {
      console.error(`❌ Không tìm thấy file nguồn: ${img.src}`);
    }
  } catch (err) {
    console.error(`❌ Lỗi khi sao chép ${img.dest}:`, err.message);
  }
});

if (successCount === images.length) {
  console.log('🎉 Hoàn tất! Vui lòng chạy lại "node seed.js" để đồng bộ đường dẫn ảnh mới lên Neon Postgres nhé.');
}
