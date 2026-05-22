const { Pool } = require('pg');
require('dotenv').config();

async function run() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });

  try {
    const articlesRes = await pool.query('SELECT id, title, category, image FROM articles ORDER BY category, id;');
    console.log(`\nFound ${articlesRes.rowCount} articles in Database:`);
    articlesRes.rows.forEach((row, i) => {
      console.log(`[${i+1}] ID: ${row.id} | Category: ${row.category}`);
      console.log(`    Title: ${row.title}`);
      console.log(`    Image: ${row.image}`);
    });

    const groupRes = await pool.query('SELECT category, COUNT(*) FROM articles GROUP BY category;');
    console.log('\nGrouped by category:');
    console.log(groupRes.rows);
  } catch (err) {
    console.error(err);
  } finally {
    await pool.end();
  }
}

run();
