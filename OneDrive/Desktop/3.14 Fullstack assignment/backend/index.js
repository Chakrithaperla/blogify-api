const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// Example API route that intentionally fails when missing a required field.
app.post('/api/items', (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    const err = new Error('Missing required field: name');
    err.statusCode = 400;
    return next(err);
  }

  res.json({ success: true, data: { id: 1, name } });
});

// Example protected route that fails with unauthorized.
app.get('/api/secure', (req, res, next) => {
  // Simulate an unauthorized request.
  const unauthorized = true;
  if (unauthorized) {
    const err = new Error('You must be logged in to access this resource.');
    err.statusCode = 401;
    return next(err);
  }

  res.json({ success: true, data: { secret: '🎉' } });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'OK' });
});

// Global Error Handler
app.use((err, req, res, next) => {
  // Log the error for server-side debugging.
  console.error(err);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    success: false,
    message,
  });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Backend listening on http://localhost:${port}`);
});
