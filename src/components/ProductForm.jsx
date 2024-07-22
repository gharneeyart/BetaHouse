import React, { useState } from 'react';
import { useAuth } from '../contexts/Auth';
import axios from 'axios';

const ProductForm = () => {
  const { auth } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    bedrooms: 0,
    bathrooms: 0,
    price: 0,
    duration: '',
    featured: false,
    status: '',
    imageFile: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      imageFile: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    for (const key in formData) {
      if (key === 'imageFile' && formData[key]) {
        formDataToSend.append('image', formData[key]);
      } else {
        formDataToSend.append(key, formData[key]);
      }
    }

    try {
      const response = await axios.post('/products/create', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${auth.token}` // Adjust according to your auth setup
        }
      });
      console.log('Product created successfully:', response.data);
      setFormData({
        name: '',
        location: '',
        bedrooms: 0,
        bathrooms: 0,
        price: 0,
        duration: '',
        featured: false,
        status: '',
        imageFile: null
      });
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      <div>
        <label className="block font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border rounded p-2 w-full"
          required
        />
      </div>
      <div>
        <label className="block font-medium">Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="border rounded p-2 w-full"
          required
        />
      </div>
      <div>
        <label className="block font-medium">Bedrooms</label>
        <input
          type="number"
          name="bedrooms"
          value={formData.bedrooms}
          onChange={handleChange}
          className="border rounded p-2 w-full"
          required
        />
      </div>
      <div>
        <label className="block font-medium">Bathrooms</label>
        <input
          type="number"
          name="bathrooms"
          value={formData.bathrooms}
          onChange={handleChange}
          className="border rounded p-2 w-full"
          required
        />
      </div>
      <div>
        <label className="block font-medium">Price</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="border rounded p-2 w-full"
          required
        />
      </div>
      <div>
        <label className="block font-medium">Duration</label>
        <input
          type="text"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
      </div>
      <div>
        <label className="block font-medium">Featured</label>
        <input
          type="checkbox"
          name="featured"
          checked={formData.featured}
          onChange={handleChange}
          className="border rounded p-2"
        />
      </div>
      <div>
        <label className="block font-medium">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border rounded p-2 w-full"
          required
        >
          <option value="">Select Status</option>
          <option value="For Sale">For Sale</option>
          <option value="For Rent">For Rent</option>
        </select>
      </div>
      <div>
        <label className="block font-medium">Image</label>
        <input
          type="file"
          name="imageFile"
          onChange={handleImageChange}
          className="border rounded p-2 w-full"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Create Product
      </button>
    </form>
  );
};

export default ProductForm;
