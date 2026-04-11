const Post = require("../models/post.model");

const deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  // ✅ Authorization check
  if (post.user.toString() !== req.user.userId) {
    return res.status(403).json({ message: "Forbidden" });
  }

  await post.deleteOne();

  res.status(200).json({ message: "Post deleted" });
};

module.exports = { deletePost };