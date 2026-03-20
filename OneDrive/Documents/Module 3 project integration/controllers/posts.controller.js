const postsService = require("../services/posts.service");

exports.getAllPosts = async (req, res) => {
  const posts = await postsService.getAllPosts();
  res.json(posts);
};

exports.getPostById = async (req, res) => {
  const post = await postsService.getPostById(req.params.id);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.json(post);
};

exports.createPost = async (req, res) => {
  const post = await postsService.createPost(req.body);
  res.status(201).json(post);
};

exports.updatePost = async (req, res) => {
  const post = await postsService.updatePost(req.params.id, req.body);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.json(post);
};

exports.deletePost = async (req, res) => {
  const post = await postsService.deletePost(req.params.id);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.json({ message: "Post deleted successfully" });
};