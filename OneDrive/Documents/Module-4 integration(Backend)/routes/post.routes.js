const express = require("express");
const protect = require("../middleware/auth.middleware");
const { deletePost } = require("../controllers/post.controller");

const router = express.Router();

router.delete("/posts/:id", protect, deletePost);

module.exports = router;