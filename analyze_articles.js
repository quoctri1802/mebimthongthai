const fs = require('fs');

try {
  const dbContent = fs.readFileSync('./db.js', 'utf8');
  const match = dbContent.match(/articles:\s*(\[[\s\S]*?\n  \]),/);
  if (!match) {
    console.error("Không tìm thấy mảng articles trong db.js");
    process.exit(1);
  }
  
  let articlesArray;
  eval(`articlesArray = ${match[1]}`);
  
  console.log(`Tìm thấy tổng cộng ${articlesArray.length} bài viết.`);
  
  articlesArray.forEach((article, index) => {
    console.log(`[${index + 1}] Chuyên mục: ${article.category}`);
    console.log(`    Tiêu đề: ${article.title}`);
    console.log(`    Ảnh: ${article.image}`);
  });
  
} catch (err) {
  console.error("Lỗi:", err);
}
