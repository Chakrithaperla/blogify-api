const express = require("express");
const app = express();

app.use(express.json());

app.use("/api/posts", require("./routes/posts.routes"));

module.exports = app;