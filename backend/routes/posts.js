const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const jwt = require('jsonwebtoken');

// Middleware to verify token
const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ message: 'No token' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

// Create post
router.post('/', authMiddleware, async (req, res) => {
  const { title, content, author, category } = req.body; // Add category
  const post = new Post({ title, content, author, category });
  await post.save();
  res.status(201).json(post);
});

// Get all posts or filter by category
router.get('/', async (req, res) => {
  const { category } = req.query;
  const query = category ? { category } : {};
  const posts = await Post.find(query);
  res.json(posts);
});

module.exports = router;