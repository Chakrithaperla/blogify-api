const Post = require("../models/post.model");

exports.getAllPosts = async () => {
  return await Post.find().populate("author");
};

exports.getPostById = async (id) => {
  return await Post.findById(id).populate("author");
};

exports.createPost = async (data) => {
  return await Post.create(data);
};

exports.updatePost = async (id, data) => {
  return await Post.findByIdAndUpdate(id, data, { new: true });
};

exports.deletePost = async (id) => {
  return await Post.findByIdAndDelete(id);
};