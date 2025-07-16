const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

const pool = new Pool({
  user: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  host: process.env.POSTGRES_HOST || 'postgres',
  database: process.env.POSTGRES_DB || 'postgresdb',
  port: 5432,
});

const initDb = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(100) NOT NULL,
        password VARCHAR(100) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('Database schema initialized');
  } catch (err) {
    console.error('Error initializing database schema:', err);
  }
};

initDb();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post('/api/users', async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log('Received user data:', { username, password });
    console.log(pool);
    // Insert user data
    const result = await pool.query(
      'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id',
      [username, password]
    );
    
    res.status(201).json({
      success: true,
      userId: result.rows[0].id,
    });
  } catch (err) {
    console.error('Error saving user data:', err);
    res.status(500).json({ success: false, error: 'Failed to save user data' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Backend service is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});