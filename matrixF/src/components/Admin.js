import React, { useState } from 'react';
import axios from 'axios';
import './Admin.css'; // Scoped styling for Admin

const Admin = () => {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('link', link);
    if (file) {
      formData.append('file', file);
    }

    try {
      await axios.post('/api/resources', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Resource uploaded successfully!');
      setName(''); // Reset form fields after successful upload
      setLink('');
      setFile(null);
    } catch (err) {
      console.error('Error uploading resource:', err);
      alert('Failed to upload resource');
    }
  };

  return (
    <div className="admin-container"> {/* Unique class for the Admin component */}
      <h2>Admin: Upload Resource</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Resource Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Link (optional)</label>
          <input
            type="text"
            className="form-control"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Upload PDF (optional)</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Upload Resource
        </button>
      </form>
    </div>
  );
};

export default Admin;
