require('dotenv').config();
const express = require('express');
const app = express();
const schoolRoutes = require('./routes/schoolRoutes');
const cors = require('cors');
const pool = require('./db'); // Import your MySQL pool here

app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('API is running');
});

// ✅ DB connectivity test route
app.get('/db-test', (req, res) => {
  pool.query('SELECT 1 + 1 AS result', (err, results) => {
    if (err) {
      return res.status(500).json({
        message: '❌ DB connection failed',
        error: err.message,
      });
    }
    res.json({
      message: '✅ DB connected successfully!',
      result: results[0],
    });
  });
});

// Mount school routes under /api
app.use('/api', schoolRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
