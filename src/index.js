const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Blogify API is running' }));
});

server.listen(PORT, () => {
  console.log(` Blogify server running on port ${PORT}`);
});
