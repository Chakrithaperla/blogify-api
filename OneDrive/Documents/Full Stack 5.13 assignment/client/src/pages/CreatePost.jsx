import React from 'react';
import ImageUpload from '../components/ImageUpload';

const CreatePost = () => {
  const handleUpload = (formData) => {
    // For now, we just log the identity of the file inside FormData
    const imageFile = formData.get('image');
    console.log('--- Upload Triggered in Parent ---');
    console.log('File Name:', imageFile.name);
    console.log('File Type:', imageFile.type);
    console.log('File Size:', (imageFile.size / 1024).toFixed(2), 'KB');
    console.log('Full File Object:', imageFile);
  };

  return (
    <div className="create-post-page">
      <div className="content-header">
        <h1>Create New Post</h1>
        <p>Share your latest beats and visuals with the community.</p>
      </div>
      
      <div className="form-section">
        <ImageUpload onUpload={handleUpload} />
      </div>
      
      <footer className="footer">
        <p>© 2026 BeatHub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CreatePost;
