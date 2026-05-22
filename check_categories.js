const { Pool } = require('pg');
require('dotenv').config();

async function run() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });

  try {
    const columns = await pool.query(`
      SELECT column_name, data_type 
      FROM information_schema.columns 
      WHERE table_name = 'categories';
    `);
    console.log('Columns in categories table:');
    console.log(columns.rows);

    const rows = await pool.query('SELECT * FROM categories;');
    console.log('\nRows in categories table:');
    console.log(rows.rows);
  } catch (err) {
    console.error(err);
  } finally {
    await pool.end();
  }
}

run();
