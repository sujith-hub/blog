import React, { useState, useEffect, useContext } from 'react';

import { useLocation } from 'react-router-dom';

import axios from 'axios';

import '../index.css';
import { AuthContext } from '../context/AuthContext';

const Blog = () => {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('general'); // Add category
  const location = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const params = new URLSearchParams(location.search);
      const category = params.get('category') || '';
      const res = await axios.get(`http://localhost:5000/api/posts?category=${category}`);
      setPosts(res.data);
    };
    fetchPosts();
  }, [location.search]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      'http://localhost:5000/api/posts',
      { title, content, author, category },
      {
        headers: { Authorization: `Bearer ${user.token}` },
      }
    );
    setTitle('');
    setContent('');
    setAuthor('');
    setCategory('general');
    const res = await axios.get('http://localhost:5000/api/posts');
    setPosts(res.data);
  };

  return (
    <div className="blog container">
      <h1>Blog Posts</h1>
      {user && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="general">General</option>
            <option value="stocks">Stocks</option>
            <option value="jobs">Jobs</option>
            <option value="technologies">Technologies</option>
          </select>
          <button type="submit">Add Post</button>
        </form>
      )}
      <div>
        {posts.map((post) => (
          <div key={post._id} className="post">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>
              <em>
                By {post.author} | Category: {post.category}
              </em>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;