const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const cloudinary = require("../config/cloudinary");
const authMiddleware = require("../middleware/auth"); // your existing auth

// helper function: upload buffer to cloudinary
const uploadToCloudinary = (buffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "blogify" },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );

    stream.end(buffer);
  });
};

// route
router.post(
  "/",
  authMiddleware,
  upload.single("image"),
  async (req, res, next) => {
    try {
      if (!req.file) {
        return res.status(400).json({ success: false, message: "No file uploaded" });
      }

      const result = await uploadToCloudinary(req.file.buffer);

      res.status(200).json({
        success: true,
        url: result.secure_url,
        publicId: result.public_id,
      });
    } catch (error) {
      next(error);
    }
  }
);

// ✅ error handler (IMPORTANT)
router.use((err, req, res, next) => {
  if (err instanceof require("multer").MulterError) {
    return res.status(400).json({ success: false, message: err.message });
  }

  if (err.message === "Only image files are allowed") {
    return res.status(400).json({ success: false, message: err.message });
  }

  res.status(500).json({ success: false, message: "Server error" });
});

module.exports = router;