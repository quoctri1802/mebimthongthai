/**
 * Mẹ Bỉm Thông Thái - Node.js Backend Server (api/index.js)
 * Cổng kết nối bảo mật tới Neon serverless Postgres đám mây với cơ chế tự khởi tạo DDL.
 */

const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const path = require('path');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Cấu hình Middleware
app.use(cors());
app.use(express.json());

// Phục vụ file tĩnh từ thư mục cha (Root Folder) khi chạy phát triển cục bộ
app.use(express.static(path.join(__dirname, '..')));

// Khởi tạo Connection Pool tới Neon Postgres hoặc sử dụng Mock Pool nếu thiếu cấu hình
let pool;
if (process.env.DATABASE_URL) {
  const dbUrl = process.env.DATABASE_URL.includes('?') 
    ? process.env.DATABASE_URL + '&sslmode=require' 
    : process.env.DATABASE_URL + '?sslmode=require';

  pool = new Pool({
    connectionString: dbUrl,
    ssl: {
      rejectUnauthorized: false // Yêu cầu bảo mật SSL của Neon
    }
  });

  // Kiểm tra kết nối đám mây Neon
  pool.connect((err, client, release) => {
    if (err) {
      console.error('❌ Lỗi kết nối đám mây Neon Postgres:', err.message);
      console.log('⚠️  Hệ thống sẽ chạy ở chế độ LOCAL-ONLY.');
    } else {
      console.log('🟢 Đã kết nối thành công tới đám mây Neon Serverless Postgres!');
      release();
      initializeDatabaseSchema(); // Tự động khởi tạo schema khi khởi chạy thành công
    }
  });
} else {
  console.warn('⚠️  DATABASE_URL không được định nghĩa trong Environment Variables!');
  console.log('⚠️  Hệ thống chạy ở chế độ LOCAL-ONLY (Mock Database).');
  
  // Mock Pool để tránh crash lỗi runtime khi deploy hoặc chạy thiếu biến môi trường
  pool = {
    query: async (text, params) => {
      console.warn('⚠️  Truy vấn bị bỏ qua vì DATABASE_URL chưa được cấu hình:', text);
      if (text.trim().toUpperCase().includes('SELECT COUNT')) {
        return { rows: [{ count: '0' }] };
      }
      return { rows: [] };
    },
    connect: (cb) => {
      cb(new Error('DATABASE_URL is not configured'), null, () => {});
    }
  };
}

// --- HÀM KHỞI TẠO & CẬP NHẬT LỊCH TIÊM CHỦNG BÉ ---
async function initializeVaccinationsForBaby(babyId, birthdate) {
  const VACCINE_MASTER_SCHEDULE = [
    { age: 'Sơ sinh (24h đầu)', name: 'Vắc xin Lao (BCG)', disease: 'Phòng bệnh Lao phổi, Lao màng não' },
    { age: 'Sơ sinh (24h đầu)', name: 'Vắc xin Viêm gan B (Sơ sinh)', disease: 'Phòng bệnh Viêm gan B lây từ mẹ' },
    { age: '2 tháng tuổi', name: 'Vắc xin 6 trong 1 (Hexaxim / Infanrix Hexa)', disease: 'Phòng Bạch hầu, Ho gà, Uốn ván, Bại liệt, Viêm gan B, Viêm màng não do Hib' },
    { age: '2 tháng tuổi', name: 'Vắc xin phòng Phế cầu (Synflorix / Prevenar 13)', disease: 'Phòng Viêm phổi, Viêm màng não, Viêm tai giữa do phế cầu khuẩn' },
    { age: '2 tháng tuổi', name: 'Vắc xin uống Rotavirus (Rotarix / Rotateq)', disease: 'Phòng bệnh Tiêu chảy cấp do Rotavirus' },
    { age: '3 tháng tuổi', name: 'Vắc xin 6 trong 1 (Hexaxim / Infanrix Hexa)', disease: 'Phòng Bạch hầu, Ho gà, Uốn ván, Bại liệt, Viêm gan B, Viêm màng não do Hib' },
    { age: '3 tháng tuổi', name: 'Vắc xin phòng Phế cầu (Synflorix / Prevenar 13)', disease: 'Phòng Viêm phổi, Viêm màng não, Viêm tai giữa do phế cầu khuẩn' },
    { age: '3 tháng tuổi', name: 'Vắc xin uống Rotavirus (Rotarix / Rotateq)', disease: 'Phòng bệnh Tiêu chảy cấp do Rotavirus' },
    { age: '4 tháng tuổi', name: 'Vắc xin 6 trong 1 (Hexaxim / Infanrix Hexa)', disease: 'Phòng Bạch hầu, Ho gà, Uốn ván, Bại liệt, Viêm gan B, Viêm màng não do Hib' },
    { age: '4 tháng tuổi', name: 'Vắc xin phòng Phế cầu (Synflorix / Prevenar 13)', disease: 'Phòng Viêm phổi, Viêm màng não, Viêm tai giữa do phế cầu khuẩn' },
    { age: '4 tháng tuổi', name: 'Vắc xin uống Rotavirus (Rotateq)', disease: 'Phòng bệnh Tiêu chảy cấp do Rotavirus' },
    { age: '6 tháng tuổi', name: 'Vắc xin phòng Cúm mùa', disease: 'Phòng ngừa các chủng cúm A và B theo mùa' },
    { age: '6 tháng tuổi', name: 'Vắc xin Não mô cầu BC (Mengoc-BC)', disease: 'Phòng Viêm màng não mô cầu tuýp B và C' },
    { age: '9 tháng tuổi', name: 'Vắc xin Sởi đơn (MVVac)', disease: 'Phòng bệnh Sởi nguy cơ gây biến chứng phổi' },
    { age: '9 tháng tuổi', name: 'Vắc xin phòng Quai bị - Sởi - Rubella (MMR II / Priorix)', disease: 'Phòng 3 bệnh truyền nhiễm Sởi, Quai bị, Rubella' },
    { age: '9 tháng tuổi', name: 'Vắc xin phòng Viêm não Nhật Bản (Imojev)', disease: 'Phòng Viêm não Nhật Bản thế hệ mới' },
    { age: '9 tháng tuổi', name: 'Vắc xin phòng Não mô cầu ACYW (Menactra)', disease: 'Phòng Viêm màng não, nhiễm khuẩn huyết do não mô cầu A, C, Y, W-135' },
    { age: '12 tháng tuổi', name: 'Vắc xin phòng Thủy đậu (Varilrix / Varivax)', disease: 'Phòng bệnh Thủy đậu (Trái rạ) lây lan mạnh' },
    { age: '12 tháng tuổi', name: 'Vắc xin phòng Viêm gan A (Avaxim)', disease: 'Phòng bệnh Viêm gan A cấp tính' },
    { age: '12 tháng tuổi', name: 'Vắc xin phòng Viêm não Nhật Bản (Jevax)', disease: 'Phòng Viêm não Nhật Bản truyền thống' },
    { age: '18 tháng tuổi', name: 'Vắc xin phối hợp nhắc lại (6 trong 1 hoặc 5 trong 1)', disease: 'Bạch hầu, Ho gà, Uốn ván, Bại liệt, Viêm gan B, Viêm màng não do Hib' },
    { age: '24 tháng tuổi', name: 'Vắc xin phòng Thương hàn (Typhim Vi)', disease: 'Phòng bệnh sốt Thương hàn biến chứng ruột' },
    { age: '24 tháng tuổi', name: 'Vắc xin uống ngừa bệnh Tả (mORCVAX)', disease: 'Phòng dịch bệnh Tả lây lan qua nguồn nước' }
  ];

  const helperAddMonths = (dStr, mToAdd) => {
    const d = new Date(dStr);
    if (isNaN(d.getTime())) return dStr;
    d.setMonth(d.getMonth() + mToAdd);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  };

  const parseMonths = (ageStr) => {
    if (ageStr.includes('Sơ sinh')) return 0;
    const match = ageStr.match(/(\d+)\s*tháng/);
    return match ? parseInt(match[1]) : 0;
  };

  try {
    const existingVacs = await pool.query('SELECT * FROM vaccinations WHERE baby_id = $1', [babyId]);

    if (existingVacs.rows.length === 0) {
      for (let i = 0; i < VACCINE_MASTER_SCHEDULE.length; i++) {
        const item = VACCINE_MASTER_SCHEDULE[i];
        const m = parseMonths(item.age);
        const dueDate = helperAddMonths(birthdate, m);
        const vacId = `v_${babyId}_${Date.now()}_${i}`;

        await pool.query(
          `INSERT INTO vaccinations (id, baby_id, vaccine_name, disease, schedule_age, due_date, status, completed_date, note)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);`,
          [vacId, babyId, item.name, item.disease, item.age, dueDate, 'pending', null, '']
        );
      }
    } else {
      for (const vac of existingVacs.rows) {
        const m = parseMonths(vac.schedule_age);
        const newDueDate = helperAddMonths(birthdate, m);
        await pool.query(
          `UPDATE vaccinations 
           SET due_date = $1 
           WHERE id = $2;`,
          [newDueDate, vac.id]
        );
      }
    }
  } catch (e) {
    console.error("Lỗi khởi tạo lịch tiêm chủng backend:", e.message);
  }
}

// --- API HỆ THỐNG ---

const JWT_SECRET = process.env.JWT_SECRET || 'mebimthongthai_secret_key_2026';

app.post('/api/admin/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query('SELECT * FROM admins WHERE email = $1', [email]);
    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Email hoặc mật khẩu không chính xác' });
    }

    const admin = result.rows[0];
    const isMatch = await bcrypt.compare(password, admin.password_hash);
    
    if (!isMatch) {
      return res.status(401).json({ error: 'Email hoặc mật khẩu không chính xác' });
    }

    // Tạo token JWT
    const token = jwt.sign(
      { id: admin.id, email: admin.email, role: 'admin' },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({ success: true, token, admin: { id: admin.id, email: admin.email, name: admin.name } });
  } catch (err) {
    res.status(500).json({ error: 'Lỗi server: ' + err.message });
  }
});

app.post('/api/users/register', async (req, res) => {
  const { emailOrPhone, password, name } = req.body;

  try {
    const existing = await pool.query('SELECT * FROM users WHERE email_or_phone = $1', [emailOrPhone]);
    if (existing.rows.length > 0) {
      return res.status(400).json({ error: 'Tài khoản này đã tồn tại trong hệ thống!' });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const userId = 'user_' + Date.now();
    const nickname = name; // Sử dụng tên làm nickname mặc định
    const avatar = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'; // Avatar mặc định
    const badge = 'Mẹ Mới';
    const points = 0;

    // Chèn người dùng mới
    await pool.query(
      `INSERT INTO users (id, email_or_phone, password_hash, name, nickname, avatar, badge, points)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`,
      [userId, emailOrPhone, passwordHash, name, nickname, avatar, badge, points]
    );

    // Tự động tạo em bé mặc định cho tài khoản mới
    const babyId = 'baby_' + Date.now();
    const babyName = 'Bé của ' + nickname;
    const birthdate = '2026-02-15';
    const gender = 'female';

    const babyResult = await pool.query(
      `INSERT INTO baby_profiles (id, parent_id, name, birthdate, gender)
       VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
      [babyId, userId, babyName, birthdate, gender]
    );

    // Khởi tạo lịch tiêm chủng dựa trên ngày sinh cho em bé mặc định
    await initializeVaccinationsForBaby(babyId, birthdate);

    // Tạo token JWT
    const token = jwt.sign(
      { id: userId, emailOrPhone: emailOrPhone, role: 'user' },
      JWT_SECRET,
      { expiresIn: '30d' }
    );

    res.json({
      success: true,
      token,
      user: {
        id: userId,
        name,
        nickname,
        avatar,
        badge,
        points,
        babyId
      },
      baby: babyResult.rows[0]
    });
  } catch (err) {
    res.status(500).json({ error: 'Lỗi server đăng ký: ' + err.message });
  }
});

app.post('/api/users/login', async (req, res) => {
  const { emailOrPhone, password } = req.body;

  try {
    const result = await pool.query('SELECT * FROM users WHERE email_or_phone = $1', [emailOrPhone]);
    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Tài khoản hoặc mật khẩu không chính xác' });
    }

    const user = result.rows[0];
    const isMatch = await bcrypt.compare(password, user.password_hash);
    
    if (!isMatch) {
      return res.status(401).json({ error: 'Tài khoản hoặc mật khẩu không chính xác' });
    }

    // Lấy thông tin các bé của tài khoản này
    const babiesRes = await pool.query('SELECT * FROM baby_profiles WHERE parent_id = $1', [user.id]);
    const baby = babiesRes.rows[0] || null;
    const babyId = baby ? baby.id : null;

    // Tạo token JWT
    const token = jwt.sign(
      { id: user.id, emailOrPhone: user.email_or_phone, role: 'user' },
      JWT_SECRET,
      { expiresIn: '30d' }
    );

    res.json({
      success: true,
      token,
      user: {
        id: user.id,
        name: user.name,
        nickname: user.nickname,
        avatar: user.avatar,
        badge: user.badge,
        points: user.points,
        babyId
      },
      babies: babiesRes.rows
    });
  } catch (err) {
    res.status(500).json({ error: 'Lỗi server đăng nhập: ' + err.message });
  }
});

// --- DYNAMIC GOOGLE SEO DỰ PHÒNG CỦA MẸ BỈM THÔNG THÁI ---
// Cung cấp Sitemap.xml động cập nhật theo thời gian thực từ Neon Postgres
app.get('/sitemap.xml', async (req, res) => {
  res.header('Content-Type', 'application/xml');
  const baseUrl = `${req.protocol}://${req.get('host')}`;
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Trang chủ chính -->
  <url>
    <loc>${baseUrl}/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Các Tab và trang chức năng chính -->
  <url>
    <loc>${baseUrl}/#community</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/#tools</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/#ai</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`;

  try {
    // 1. Quét toàn bộ chuyên mục hoạt động thực tế
    const categoriesRes = await pool.query('SELECT name FROM categories ORDER BY id');
    if (categoriesRes.rows && categoriesRes.rows.length > 0) {
      categoriesRes.rows.forEach(cat => {
        xml += `  <url>
    <loc>${baseUrl}/#articles?category=${encodeURIComponent(cat.name)}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
      });
    }

    // 2. Quét toàn bộ 65 bài viết y khoa y đức chuẩn SEO
    const articlesRes = await pool.query('SELECT id, created_at FROM articles ORDER BY created_at DESC');
    if (articlesRes.rows && articlesRes.rows.length > 0) {
      articlesRes.rows.forEach(art => {
        const dateStr = art.created_at ? new Date(art.created_at).toISOString().split('T')[0] : new Date().toISOString().split('T')[0];
        xml += `  <url>
    <loc>${baseUrl}/#article-${art.id}</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>\n`;
      });
    }

    // 3. Quét toàn bộ bài viết thảo luận cộng đồng
    const postsRes = await pool.query('SELECT id, created_at FROM posts ORDER BY created_at DESC');
    if (postsRes.rows && postsRes.rows.length > 0) {
      postsRes.rows.forEach(post => {
        const dateStr = post.created_at ? new Date(post.created_at).toISOString().split('T')[0] : new Date().toISOString().split('T')[0];
        xml += `  <url>
    <loc>${baseUrl}/#community-post-${post.id}</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>\n`;
      });
    }
  } catch (err) {
    console.error("Lỗi khi kết xuất sitemap.xml động:", err.message);
    xml += `  <!-- Dự phòng khi lỗi kết nối Neon Cloud -->
  <url>
    <loc>${baseUrl}/#articles</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
  }

  xml += `</urlset>`;
  res.send(xml);
});

// Cung cấp Robots.txt bảo mật phân cấp điều hướng cho Googlebot
app.get('/robots.txt', (req, res) => {
  res.header('Content-Type', 'text/plain');
  const baseUrl = `${req.protocol}://${req.get('host')}`;
  
  const robots = `User-agent: *
Allow: /
Allow: /index.html
Allow: /styles.css
Allow: /db.js
Allow: /ai.js
Allow: /api/articles
Allow: /api/categories
Allow: /api/posts
Allow: /sitemap.xml

# Chặn thu thập các trang bảo mật, bảng admin kiểm soát
Disallow: /admin.html
Disallow: /admin-login.html
Disallow: /api/admin/
Disallow: /api/users/

Sitemap: ${baseUrl}/sitemap.xml
`;
  res.send(robots);
});

app.get('/api/status', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ status: 'connected', provider: 'neon', dbTime: result.rows[0].now });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
});

// --- API ARTICLE (CRUD) ---
app.get('/api/articles', async (req, res) => {
  try {

    const result = await pool.query('SELECT * FROM articles ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/articles', async (req, res) => {
  const { title, category, subCategory, tags, summary, content, image, faqs } = req.body;
  const id = 'art_' + Date.now();
  const author = 'Dr. Hải Anh';
  const createdAt = new Date().toISOString().split('T')[0];

  try {
    const query = `
      INSERT INTO articles (id, title, category, sub_category, tags, summary, content, image, views, likes, created_at, author, faqs)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
      RETURNING *;
    `;
    const values = [id, title, category, subCategory, tags.join(','), summary, content, image, 0, 0, createdAt, author, JSON.stringify(faqs)];
    const result = await pool.query(query, values);
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/api/articles/:id', async (req, res) => {
  const { id } = req.params;
  const { title, category, subCategory, tags, summary, content, image, faqs } = req.body;

  try {
    const query = `
      UPDATE articles 
      SET title = $1, category = $2, sub_category = $3, tags = $4, summary = $5, content = $6, image = $7, faqs = $8
      WHERE id = $9
      RETURNING *;
    `;
    const values = [title, category, subCategory, tags.join(','), summary, content, image, JSON.stringify(faqs), id];
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Không tìm thấy bài viết' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/articles/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM articles WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Không tìm thấy bài viết' });
    }
    res.json({ success: true, deleted: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- API CATEGORIES ---
app.get('/api/categories', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM categories ORDER BY id ASC');
    if (result.rows.length === 0) {
      // Fallback categories list when table is empty or in mock mode
      const defaultCategories = [
        { id: 1, name: 'Mang thai', slug: 'mang-thai', description: 'Kinh nghiệm mang thai, chăm sóc sức khỏe mẹ bầu và chuẩn bị sinh.' },
        { id: 2, name: 'Sau sinh', slug: 'sau-sinh', description: 'Chăm sóc mẹ sau sinh, phục hồi sức khỏe, tâm lý và giảm stress.' },
        { id: 3, name: 'Chăm sóc bé', slug: 'cham-soc-be', description: 'Kinh nghiệm nuôi dưỡng, tắm bé, chăm sóc sức khỏe và lịch tiêm chủng.' },
        { id: 4, name: 'Ăn dặm', slug: 'an-dam', description: 'Công thức ăn dặm, ăn dặm tự chỉ huy (BLW), dinh dưỡng cho bé từng tháng tuổi.' },
        { id: 5, name: 'Giáo dục sớm', slug: 'giao-duc-som', description: 'Phương pháp giáo dục sớm như Montessori, Glenn Doman và các hoạt động phát triển trí não.' },
        { id: 6, name: 'Tâm lý trẻ em', slug: 'tam-ly-tre-em', description: 'Thấu hiểu cảm xúc của con, xử lý khủng hoảng tuổi lên 2, lên 3 và kết nối yêu thương.' },
        { id: 7, name: 'Mẹo tiết kiệm cho mẹ bỉm', slug: 'meo-tiet-kiem-cho-me-bim', description: 'Bí quyết quản lý chi tiêu gia đình, săn sale bỉm sữa và tiết kiệm tài chính.' },
        { id: 8, name: 'Review sản phẩm mẹ & bé', slug: 'review-san-pham-me-and-be', description: 'Đánh giá chân thực các sản phẩm bỉm, sữa, xe đẩy, nôi cũi và đồ dùng gia đình.' },
        { id: 9, name: 'Kinh nghiệm nuôi con', slug: 'kinh-nghiem-nuoi-con', description: 'Các bài viết đúc kết kinh nghiệm thực tế nuôi dạy con từ các thế hệ mẹ bỉm.' },
        { id: 10, name: 'Kiếm tiền online cho mẹ bỉm', slug: 'kiem-tien-online-cho-me-bim', description: 'Gợi ý các công việc freelance, cộng tác viên, affiliate marketing phù hợp cho mẹ bỉm tại nhà.' },
        { id: 11, name: 'Cộng đồng mẹ bỉm', slug: 'cong-dong-me-bim', description: 'Nơi kết nối các mẹ bỉm, chia sẻ các hoạt động nhóm, hội thảo và hỗ trợ lẫn nhau.' },
        { id: 12, name: 'Chuyện thật làm mẹ', slug: 'chuyen-that-lam-me', description: 'Những câu chuyện cảm động, chân thực, niềm vui và cả những giọt nước mắt trên hành trình làm mẹ.' },
        { id: 13, name: 'Góc tâm sự', slug: 'goc-tam-su', description: 'Không gian trải lòng, chia sẻ tâm tư thầm kín về hôn nhân, gia đình và cuộc sống làm mẹ.' },
        { id: 14, name: 'Hỏi đáp mẹ & bé', slug: 'hoi-dap-me-and-be', description: 'Giải đáp nhanh các thắc mắc về sức khỏe, chăm sóc và nuôi dạy bé từ chuyên gia và cộng đồng.' }
      ];
      return res.json(defaultCategories);
    }
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- API FORUM POSTS ---
app.get('/api/posts', async (req, res) => {
  try {

    const result = await pool.query('SELECT * FROM posts ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/posts', async (req, res) => {
  const { title, content, isAnonymous, tags, author_nickname, author_avatar, author_badge } = req.body;
  const id = 'post_' + Date.now();
  const createdAt = new Date().toISOString();

  try {
    const query = `
      INSERT INTO posts (id, title, content, author_nickname, author_avatar, author_badge, tags, upvotes, helpful_count, heart_count, created_at, is_anonymous)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
      RETURNING *;
    `;
    const values = [id, title, content, author_nickname, author_avatar, author_badge, tags.join(','), 1, 0, 0, createdAt, isAnonymous];
    const result = await pool.query(query, values);
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/posts/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM comments WHERE post_id = $1', [id]);
    const result = await pool.query('DELETE FROM posts WHERE id = $1 RETURNING *', [id]);
    res.json({ success: true, deleted: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- API COMMENTS ---
app.get('/api/comments', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM comments ORDER BY created_at ASC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/comments', async (req, res) => {
  const { postId, content, author_nickname, author_avatar, author_badge } = req.body;
  const id = 'c_' + Date.now();
  const createdAt = new Date().toISOString();

  try {
    const query = `
      INSERT INTO comments (id, post_id, content, author_nickname, author_avatar, author_badge, created_at)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
    `;
    const values = [id, postId, content, author_nickname, author_avatar, author_badge, createdAt];
    const result = await pool.query(query, values);
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- API BABY PROFILE ---
app.get('/api/babies', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM baby_profiles');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/babies', async (req, res) => {
  const { id, parentId, name, birthdate, gender } = req.body;
  const babyId = id || 'baby_' + Date.now();
  const parent = parentId || 'user_01';

  try {
    const query = `
      INSERT INTO baby_profiles (id, parent_id, name, birthdate, gender)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    const values = [babyId, parent, name, birthdate, gender];
    const result = await pool.query(query, values);
    
    // Tự động khởi tạo lịch tiêm chủng mới vào DB cho bé này
    await initializeVaccinationsForBaby(babyId, birthdate);

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/api/babies/:id', async (req, res) => {
  const { id } = req.params;
  const { name, birthdate, gender } = req.body;

  try {
    const query = `
      UPDATE baby_profiles 
      SET name = $1, birthdate = $2, gender = $3 
      WHERE id = $4 
      RETURNING *;
    `;
    const values = [name, birthdate, gender, id];
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Không tìm thấy thông tin bé' });
    }
    
    res.json({ success: true, baby: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/logs/vaccines/recalculate', async (req, res) => {
  const { babyId, birthdate } = req.body;

  try {
    await initializeVaccinationsForBaby(babyId, birthdate);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- API TRACKING LOGS (FEEDING, SLEEP, DIAPER, GROWTH, VACCINE) ---
app.get('/api/logs/:type', async (req, res) => {
  const { type } = req.params;
  try {
    let tableName = '';
    if (type === 'feeding') tableName = 'feeding_logs';
    else if (type === 'sleep') tableName = 'sleep_logs';
    else if (type === 'diaper') tableName = 'diaper_logs';
    else if (type === 'growth') tableName = 'growth_tracking';
    else if (type === 'vaccine') tableName = 'vaccinations';
    else return res.status(400).json({ error: 'Loại nhật ký không hợp lệ' });

    const result = await pool.query(`SELECT * FROM ${tableName}`);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/logs/:type', async (req, res) => {
  const { type } = req.params;
  const data = req.body;

  try {
    if (type === 'feeding') {
      const id = 'f_' + Date.now();
      const query = `
        INSERT INTO feeding_logs (id, baby_id, type, time, amount, duration, note)
        VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;
      `;
      const values = [id, data.babyId, data.type, data.time, data.amount, data.duration, data.note];
      const result = await pool.query(query, values);
      return res.json(result.rows[0]);
    } 
    
    if (type === 'sleep') {
      const id = 's_' + Date.now();
      const query = `
        INSERT INTO sleep_logs (id, baby_id, start_time, end_time, duration, quality, note)
        VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;
      `;
      const values = [id, data.babyId, data.startTime, data.endTime, data.duration, data.quality, data.note];
      const result = await pool.query(query, values);
      return res.json(result.rows[0]);
    }

    if (type === 'diaper') {
      const id = 'd_' + Date.now();
      const query = `
        INSERT INTO diaper_logs (id, baby_id, type, time, note)
        VALUES ($1, $2, $3, $4, $5) RETURNING *;
      `;
      const values = [id, data.babyId, data.type, data.time, data.note];
      const result = await pool.query(query, values);
      return res.json(result.rows[0]);
    }

    if (type === 'growth') {
      const id = 'g_' + Date.now();
      const query = `
        INSERT INTO growth_tracking (id, baby_id, date, age_months, weight, height, head_circumference)
        VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;
      `;
      const values = [id, data.babyId, data.date, data.ageMonths, data.weight, data.height, data.headCircumference];
      const result = await pool.query(query, values);
      return res.json(result.rows[0]);
    }

    if (type === 'vaccine') {
      // Toggle vaccination status
      const { id, completedDate } = data;
      const selectRes = await pool.query('SELECT status FROM vaccinations WHERE id = $1', [id]);
      if (selectRes.rows.length === 0) return res.status(404).json({ error: 'Không tìm thấy lịch tiêm' });

      const newStatus = selectRes.rows[0].status === 'done' ? 'pending' : 'done';
      const newCompletedDate = newStatus === 'done' ? (completedDate || new Date().toISOString().split('T')[0]) : null;

      const query = `
        UPDATE vaccinations 
        SET status = $1, completed_date = $2 
        WHERE id = $3 
        RETURNING *;
      `;
      const result = await pool.query(query, [newStatus, newCompletedDate, id]);
      return res.json(result.rows[0]);
    }

    res.status(400).json({ error: 'Loại nhật ký không hợp lệ' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Phục vụ trang index.html cho các route còn lại (trang chủ và SPA routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// Khởi chạy server lắng nghe kết nối nếu không phải môi trường serverless Vercel
if (process.env.VERCEL !== '1') {
  app.listen(PORT, () => {
    console.log(`🚀 Máy chủ Mẹ Bỉm Thông Thái đang chạy tại: http://localhost:${PORT}`);
  });
}

// --- HÀM TỰ ĐỘNG KHỞI TẠO BẢNG DDL ---
async function initializeDatabaseSchema() {
  try {
    // 1. Tạo các bảng cơ sở dữ liệu
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        email_or_phone TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        name TEXT NOT NULL,
        nickname TEXT,
        avatar TEXT,
        badge TEXT DEFAULT 'Mẹ Mới',
        points INT DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS admins (
        id SERIAL PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        name TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS articles (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        category TEXT NOT NULL,
        sub_category TEXT,
        tags TEXT,
        summary TEXT,
        content TEXT,
        image TEXT,
        views INT DEFAULT 0,
        likes INT DEFAULT 0,
        created_at TEXT,
        author TEXT,
        faqs JSONB
      );
      
      CREATE TABLE IF NOT EXISTS posts (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        content TEXT,
        author_nickname TEXT,
        author_avatar TEXT,
        author_badge TEXT,
        tags TEXT,
        upvotes INT DEFAULT 0,
        helpful_count INT DEFAULT 0,
        heart_count INT DEFAULT 0,
        created_at TEXT,
        is_anonymous BOOLEAN DEFAULT FALSE
      );

      CREATE TABLE IF NOT EXISTS comments (
        id TEXT PRIMARY KEY,
        post_id TEXT REFERENCES posts(id) ON DELETE CASCADE,
        content TEXT,
        author_nickname TEXT,
        author_avatar TEXT,
        author_badge TEXT,
        created_at TEXT
      );

      CREATE TABLE IF NOT EXISTS baby_profiles (
        id TEXT PRIMARY KEY,
        parent_id TEXT,
        name TEXT,
        birthdate TEXT,
        gender TEXT
      );

      CREATE TABLE IF NOT EXISTS feeding_logs (
        id TEXT PRIMARY KEY,
        baby_id TEXT,
        type TEXT,
        time TEXT,
        amount INT DEFAULT 0,
        duration INT DEFAULT 0,
        note TEXT
      );

      CREATE TABLE IF NOT EXISTS sleep_logs (
        id TEXT PRIMARY KEY,
        baby_id TEXT,
        start_time TEXT,
        end_time TEXT,
        duration INT DEFAULT 0,
        quality TEXT,
        note TEXT
      );

      CREATE TABLE IF NOT EXISTS diaper_logs (
        id TEXT PRIMARY KEY,
        baby_id TEXT,
        type TEXT,
        time TEXT,
        note TEXT
      );

      CREATE TABLE IF NOT EXISTS growth_tracking (
        id TEXT PRIMARY KEY,
        baby_id TEXT,
        date TEXT,
        age_months INT DEFAULT 0,
        weight REAL DEFAULT 0.0,
        height REAL DEFAULT 0.0,
        head_circumference REAL DEFAULT 0.0
      );

      CREATE TABLE IF NOT EXISTS vaccinations (
        id TEXT PRIMARY KEY,
        baby_id TEXT,
        vaccine_name TEXT,
        disease TEXT,
        schedule_age TEXT,
        due_date TEXT,
        status TEXT,
        completed_date TEXT,
        note TEXT
      );
    `);
    
    console.log('⚡ Đã đồng bộ cấu trúc bảng DDL trên đám mây Neon Postgres!');

    // 2. Tự động nạp tài khoản quản trị viên nếu chưa có
    const adminCheck = await pool.query('SELECT COUNT(*) FROM admins');
    if (parseInt(adminCheck.rows[0].count) === 0) {
      console.log('🛡️ Đang tự động nạp tài khoản admin mặc định...');
      const defaultPasswordHash = await bcrypt.hash('admin123', 10);
      await pool.query('INSERT INTO admins (email, password_hash, name) VALUES ($1, $2, $3) ON CONFLICT DO NOTHING;', ['admin@mebim.vn', defaultPasswordHash, 'Quản trị viên']);
    }

    // 3. Nạp dữ liệu mẫu nếu bảng articles rỗng
    const countCheck = await pool.query('SELECT COUNT(*) FROM articles');
    if (parseInt(countCheck.rows[0].count) === 0) {
      console.log('⚠️  Phát hiện cơ sở dữ liệu trống! Đang tự động nạp dữ liệu cẩm nang mẫu...');

      // Chèn các bài viết mẫu sơ khởi để trang web hiển thị lung linh ngay lập tức
      await pool.query(`
        INSERT INTO baby_profiles (id, parent_id, name, birthdate, gender)
        VALUES ('baby_01', 'user_01', 'Nguyễn Tuệ Lâm (Bông)', '2026-02-15', 'female')
        ON CONFLICT DO NOTHING;

        INSERT INTO articles (id, title, category, sub_category, tags, summary, content, image, views, likes, created_at, author, faqs)
        VALUES (
          'art_01', 
          'Hướng dẫn tắm trẻ sơ sinh an toàn tại nhà cho mẹ mới sinh', 
          'Trẻ sơ sinh', 
          'Tắm bé', 
          'trẻ sơ sinh,tắm bé,mẹ mới', 
          'Tắm bé sơ sinh lần đầu tại nhà có thể khiến nhiều mẹ lúng túng. Dưới đây là hướng dẫn chi tiết chuẩn y khoa giúp tắm bé an toàn.', 
          'Tắm bé sơ sinh là một thử thách lớn. Hãy thực hiện theo quy tắc: Lau mặt -> Gội đầu -> Tắm toàn thân -> Chăm sóc rốn sau tắm.', 
          'https://images.unsplash.com/photo-1519689680058-324335c77ebe?w=600&auto=format&fit=crop&q=80', 
          1250, 
          85, 
          '2026-03-10', 
          'Dr. Hải Anh', 
          '[{"q": "Trẻ sơ sinh chưa rụng rốn tắm được không?", "a": "Hoàn toàn được. Mẹ chỉ cần giữ cuống rốn khô thoáng sau khi tắm."}]'
        ),
        (
          'art_02', 
          'Ăn dặm tự chỉ huy (BLW): Bắt đầu thế nào cho đúng và an toàn?', 
          'Dinh dưỡng cho bé', 
          'Ăn dặm', 
          'ăn dặm,BLW,dinh dưỡng', 
          'Phương pháp ăn dặm tự chỉ huy giúp con tự lập và phát triển kỹ năng nhai nuốt sớm. Bài viết chia sẻ hướng dẫn bắt đầu đúng cách.', 
          'Ăn dặm tự chỉ huy (BLW) là phương pháp bỏ qua giai đoạn ăn bột nhuyễn, bé tự bốc ăn rau củ chín mềm từ 6 tháng tuổi.', 
          'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&auto=format&fit=crop&q=80', 
          2450, 
          198, 
          '2026-04-05', 
          'Mẹ Ốc', 
          '[{"q": "Bé chưa mọc răng có ăn BLW được không?", "a": "Được. Lợi của bé rất cứng, có thể nghiền nát rau củ luộc mềm."}]'
        )
        ON CONFLICT DO NOTHING;

        INSERT INTO posts (id, title, content, author_nickname, author_avatar, author_badge, tags, upvotes, helpful_count, heart_count, created_at, is_anonymous)
        VALUES (
          'post_01',
          'Bé 3 tháng không chịu bú bình phải làm sao hả các mẹ?',
          'Em chuẩn bị đi làm lại nên tập bú bình cho con nhưng con khóc thét lên đẩy ra. Có mẹ nào có kinh nghiệm không cứu em với!',
          'Mẹ Bông',
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
          'Mẹ Siêu Chăm',
          'trẻ sơ sinh,sữa,giấc ngủ',
          48,
          22,
          15,
          '2026-05-12T09:30:00Z',
          FALSE
        )
        ON CONFLICT DO NOTHING;

        INSERT INTO vaccinations (id, baby_id, vaccine_name, disease, schedule_age, due_date, status, completed_date, note)
        VALUES 
          ('v_01', 'baby_01', 'Lao (BCG)', 'Phòng bệnh Lao', 'Sơ sinh', '2026-02-20', 'done', '2026-02-18', 'Tiêm tại viện sản.'),
          ('v_02', 'baby_01', 'Viêm gan B mũi 1', 'Viêm gan B', 'Sơ sinh', '2026-02-16', 'done', '2026-02-15', 'Tiêm trong 24h đầu.'),
          ('v_03', 'baby_01', '6 trong 1 Mũi 1', '6 bệnh nguy hiểm', '2 tháng', '2026-04-15', 'done', '2026-04-18', 'Hơi sốt nhẹ 38 độ.'),
          ('v_04', 'baby_01', '6 trong 1 Mũi 2', '6 bệnh nguy hiểm', '3 tháng', '2026-05-15', 'pending', NULL, 'Cần đặt lịch tiêm trạm y tế.')
        ON CONFLICT DO NOTHING;
      `);
      console.log('🎉 Đã tự động nạp dữ liệu mẫu ban đầu thành công lên đám mây Neon Postgres!');
    }
  } catch (err) {
    console.error('❌ Lỗi khởi tạo cấu trúc bảng trên Neon Postgres:', err.message);
  }
}

module.exports = app;
