const express = require("express");
const app = express();

app.use(express.json());

// upload route
app.use("/api/upload", require("./routes/upload"));

module.exports = app;