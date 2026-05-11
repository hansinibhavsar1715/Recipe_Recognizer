import React, { useState } from 'react';
import axios from 'axios';
import { Camera, UploadCloud } from 'lucide-react';

const Uploader = ({ setIngredients, setLoading }) => {
  const [preview, setPreview] = useState(null);

  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));
    setLoading(true);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('http://127.0.0.1:5000/recognize', formData);
      setIngredients(res.data);
    } catch (err) {
      alert("Backend se connection nahi ho paya!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card border-0 shadow-sm p-4 mb-4 rounded-4">
      <h5 className="fw-bold mb-3"><Camera size={20} className="me-2" />Identify Dish</h5>
      <div className="upload-box border-2 border-dashed rounded-4 p-5 text-center position-relative bg-light">
        {preview ? (
          <img src={preview} alt="Preview" className="img-fluid rounded-3 shadow-sm" style={{ maxHeight: '200px' }} />
        ) : (
          <div className="text-muted">
            <UploadCloud size={48} className="mb-2 opacity-50" />
            <p className="small mb-0">Drag & Drop or Click to Upload</p>
          </div>
        )}
        <input 
          type="file" 
          className="position-absolute top-0 start-0 w-100 h-100 opacity-0 cursor-pointer" 
          onChange={handleFile} 
          accept="image/*" 
        />
      </div>
    </div>
  );
};

export default Uploader;