const { Pool } = require('pg');
require('dotenv').config();

async function run() {
  if (!process.env.DATABASE_URL) {
    console.error("❌ Không tìm thấy DATABASE_URL trong tệp .env!");
    process.exit(1);
  }

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });

  try {
    console.log("⚡ Đang kết nối tới đám mây Neon Postgres...");
    
    const updates = [
      {
        id: 'art_02',
        image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&auto=format&fit=crop&q=80',
        title: 'Ăn dặm tự chỉ huy (BLW)'
      },
      {
        id: 'art_03',
        image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=80',
        title: 'Sleep Training'
      },
      {
        id: 'art_06',
        image: 'https://images.unsplash.com/photo-1515488042361-404e9250afef?w=600&auto=format&fit=crop&q=80',
        title: 'Lịch sinh hoạt EASY 3'
      },
      {
        id: 'art_07',
        image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&auto=format&fit=crop&q=80',
        title: 'Bảo quản và rã đông sữa mẹ'
      },
      {
        id: 'art_09',
        image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=600&auto=format&fit=crop&q=80',
        title: 'So sánh ADKN và BLW'
      },
      {
        id: 'art_1779182328705',
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&auto=format&fit=crop&q=80',
        title: 'Hội những bà mẹ mắt thâm'
      }
    ];

    for (const update of updates) {
      console.log(`⏳ Đang cập nhật ảnh cho [${update.id}] - ${update.title}...`);
      const res = await pool.query(
        'UPDATE articles SET image = $1 WHERE id = $2 RETURNING id, title, image;',
        [update.image, update.id]
      );
      if (res.rows.length > 0) {
        console.log(`✅ Thành công! Ảnh mới: "${res.rows[0].image}"`);
      } else {
        console.log(`⚠️  Không tìm thấy bài viết mang ID ${update.id} trong CSDL.`);
      }
    }

    console.log("\n⭐ Hoàn tất toàn bộ cập nhật hình ảnh trên đám mây Neon Postgres!");
  } catch (err) {
    console.error("❌ Lỗi xảy ra trong quá trình cập nhật:", err);
  } finally {
    await pool.end();
  }
}

run();
