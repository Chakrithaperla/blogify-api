const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const analyticsRoutes = require('./routes/analytics');
const songRoutes = require('./routes/songRoutes');
const apiLimiter = require('./middlewares/rateLimit');

// Config
dotenv.config();
const app = express();
app.use(express.json());

// Application-wide Rate Limiting
app.use('/api/', apiLimiter);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/songs', songRoutes);

// Database Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/beathub';

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => {
    console.error('❌ MongoDB Connection Error:', err);
    // process.exit(1); 
  });

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`🚀 BeatHub Server running on port ${PORT}`);
});

module.exports = app;
