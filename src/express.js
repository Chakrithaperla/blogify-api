const express = require("express");
const apiRoutes = require("./routes");

const app = express();

/**
 * Global Middleware
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Health Check Route (optional but good practice)
 */
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Blogify API is running",
  });
});

/**
 * Versioned API Routes
 */
app.use("/api/v1", apiRoutes);

/**
 * 404 Handler (must be last)
 */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

module.exports = app;