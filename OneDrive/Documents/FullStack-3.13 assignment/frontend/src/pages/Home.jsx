import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = ({ user }) => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get('/api/posts');
      setPosts(res.data);
    } catch (err) {
      setError('Failed to fetch posts');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`/api/posts/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setPosts(posts.filter(post => post._id !== id));
    } catch (err) {
      setError('Failed to delete post');
    }
  };

  return (
    <div>
      <h1>Posts</h1>
      {error && <p className="error">{error}</p>}
      {posts.map(post => (
        <div key={post._id} className="post">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p className="author">By {post.author.username}</p>
          {user && user._id === post.author._id && (
            <div className="actions">
              <Link to={`/edit/${post._id}`} className="btn btn-secondary">Edit</Link>
              <button onClick={() => handleDelete(post._id)} className="btn btn-danger">Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Home;