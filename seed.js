const fs = require('fs');
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

async function seed() {
  console.log('⏳ Bắt đầu nạp 10 bài viết mới lên Neon Postgres...');
  
  try {
    const dbContent = fs.readFileSync('./db.js', 'utf8');
    
    // Trích xuất mảng articles bằng cách parse file db.js
    const match = dbContent.match(/articles:\s*(\[[\s\S]*?\n  \]),/);
    if (!match) throw new Error("Không tìm thấy mảng articles trong db.js");
    
    let articlesArray;
    eval(`articlesArray = ${match[1]}`);

    for (const article of articlesArray) {
      const { id, title, category, subCategory, tags, summary, content, image, views, likes, createdAt, author, faqs } = article;
      
      const query = `
        INSERT INTO articles (id, title, category, sub_category, tags, summary, content, image, views, likes, created_at, author, faqs)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
        ON CONFLICT (id) DO UPDATE 
        SET title = EXCLUDED.title,
            category = EXCLUDED.category,
            content = EXCLUDED.content,
            summary = EXCLUDED.summary,
            image = EXCLUDED.image;
      `;
      const faqsJson = faqs ? JSON.stringify(faqs) : '[]';
      const tagsStr = tags ? tags.join(',') : '';
      
      await pool.query(query, [
        id, title, category, subCategory || '', tagsStr, summary, content, image, 
        views || 0, likes || 0, createdAt, author, faqsJson
      ]);
      console.log(`✅ Đã đồng bộ bài viết: ${title}`);
    }
    
    console.log('🎉 Hoàn tất nạp dữ liệu cẩm nang lên đám mây!');
  } catch (err) {
    console.error('❌ Lỗi:', err);
  } finally {
    await pool.end();
  }
}

seed();
