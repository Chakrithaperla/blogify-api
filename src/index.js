const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const postsRouter = require('./routes/posts.routes');

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Blogify API is running' });
});

app.use('/api/v1/posts', postsRouter);

app.listen(PORT, () => {
  console.log(` Blogify server running on port ${PORT}`);
});
