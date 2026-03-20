import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditPost = ({ user }) => {
  const [formData, setFormData] = useState({ title: '', content: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    fetchPost();
  }, [user, id, navigate]);

  const fetchPost = async () => {
    try {
      const res = await axios.get(`/api/posts/${id}`);
      if (res.data.author._id !== user._id) {
        navigate('/');
        return;
      }
      setFormData({ title: res.data.title, content: res.data.content });
    } catch (err) {
      setError('Failed to fetch post');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.put(`/api/posts/${id}`, formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setSuccess('Post updated successfully');
      setTimeout(() => navigate('/'), 1000);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update post');
    }
  };

  return (
    <div>
      <h1>Edit Post</h1>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea name="content" value={formData.content} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Update Post</button>
      </form>
    </div>
  );
};

export default EditPost;