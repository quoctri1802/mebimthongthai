const { Pool } = require('pg');
require('dotenv').config();

async function run() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });

  try {
    const res = await pool.query(`
      SELECT id, title, category, image 
      FROM articles 
      WHERE image IS NULL 
         OR image = '' 
         OR image LIKE '%placeholder%' 
         OR image LIKE '%error%';
    `);
    console.log(`Found ${res.rows.length} articles matching missing/broken image criteria.`);
    res.rows.forEach((r, idx) => {
      console.log(`[${idx + 1}] ID: ${r.id} | Chuyên mục: ${r.category}`);
      console.log(`    Tiêu đề: ${r.title}`);
      console.log(`    Ảnh: ${r.image}`);
    });
  } catch (err) {
    console.error(err);
  } finally {
    await pool.end();
  }
}

run();
