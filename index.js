const app = require("./src/express");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Blogify server running on port ${PORT}`);
});