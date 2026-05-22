const { Pool } = require('pg');
require('dotenv').config();

async function run() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });

  try {
    const res = await pool.query('SELECT id, title, category, image FROM articles ORDER BY id ASC;');
    console.log(`Found ${res.rows.length} articles in Neon:`);
    res.rows.forEach((r, idx) => {
      console.log(`${idx + 1}. [${r.id}] [${r.category}] Image: "${r.image}"\n   Title: ${r.title}`);
    });
  } catch (err) {
    console.error(err);
  } finally {
    await pool.end();
  }
}

run();
