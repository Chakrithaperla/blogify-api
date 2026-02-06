const express = require('express');
const router = express.Router();

const posts = [
  { id: 1, title: 'First post', content: 'Hello world' },
  { id: 2, title: 'Second post', content: 'Another post' }
];

router.get('/', (req, res) => {
  res.status(200).json({ posts });
});

module.exports = router;
