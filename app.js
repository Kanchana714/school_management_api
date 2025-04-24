require('dotenv').config();
const express = require('express');
const app = express();
const schoolRoutes = require('./routes/schoolRoutes');

// Middleware to parse JSON requests
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('API is running');
});

// Mount school routes under /api
app.use('/api', schoolRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
