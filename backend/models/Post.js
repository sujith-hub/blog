const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: String, default: 'general' }, // Add category
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Post', postSchema);