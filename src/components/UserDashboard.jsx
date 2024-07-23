import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/Auth';
import axios from 'axios';

const UserDashboard = () => {
  const { auth, logout } = useAuth();
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    image: null,
    imageFile: null,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (auth.user && auth.token) {
          const response = await axios.get(`/auth/user/${auth.user._id}`, {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          });

          if (response.data.success) {
            const userData = response.data.user;
            setUser(userData);
            setFormData({
              firstName: userData.firstName,
              lastName: userData.lastName,
              email: userData.email,
              image: userData.image,
              imageFile: null,
            });
          } else {
            console.error('Error fetching user data:', response.data.message);
          }
        } else {
          console.error('No user or token found');
        }
      } catch (error) {
        console.error('Error fetching user data:', error.response?.data?.message || error.message);
      }
    };

    fetchUserData();
  }, [auth.user, auth.token]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      imageFile: file,
      image: URL.createObjectURL(file),
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('lastName', formData.lastName);
      formDataToSend.append('email', formData.email);
      if (formData.imageFile) {
        formDataToSend.append('image', formData.imageFile);
      }

      const response = await axios.put('/auth/user/update', formDataToSend, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        setUser(response.data.user);
        setEditMode(false);
      } else {
        console.error('Error updating user data:', response.data.message);
      }
    } catch (error) {
      console.error('Error updating user data:', error.response?.data?.message || error.message);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`/auth/user/${auth.user._id}`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });

      if (response.data.success) {
        console.log('User deleted successfully');
        logout();
      } else {
        console.error('Error deleting user data:', response.data.message);
      }
    } catch (error) {
      console.error('Error deleting user data:', error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto pt-36 pb-16 bg-slate-100">
      <h1 className="text-3xl font-bold mb-4 text-center">User Dashboard</h1>
      <div className="mb-6 border w-80 md:w-1/2 flex flex-col justify-center items-center h-1/2">
        <h2 className="text-2xl font-semibold">User Information</h2>
        {editMode ? (
          <form onSubmit={handleUpdate} className="space-y-4">
            <div>
              <label className="block font-medium">Profile Img</label>
              <input
                type="file"
                name="image"
                onChange={handleImageChange}
                className="border rounded p-2 w-full"
              />
            </div>
            {formData.image && (
              <img
                src={formData.image}
                alt="Profile Preview"
                className="w-20 h-20 rounded-full"
              />
            )}
            <div>
              <label className="block font-medium">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="border rounded p-2 w-full"
              />
            </div>
            <div>
              <label className="block font-medium">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="border rounded p-2 w-full"
              />
            </div>
            <div>
              <label className="block font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded p-2 w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Update
            </button>
          </form>
        ) : (
          <div className="space-y-4">
            {user?.image && (
              <img src={user.image} alt="Profile" className="w-20 h-20 rounded-full" />
            )}
            <p className="font-medium text-lg">
              <span className="font-bold text-xl">First Name:</span> {user?.firstName}
            </p>
            <p className="font-medium text-lg">
              <span className="font-bold text-xl">Last Name:</span> {user?.lastName}
            </p>
            <p className="font-medium text-lg">
              <span className="font-bold text-xl">Email:</span> {user?.email}
            </p>
            <div className="space-x-4">
              <button
                onClick={() => setEditMode(true)}
                className="border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white font-semibold px-4 py-2 rounded-md"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-4 py-2 rounded-md font-semibold"
              >
                Delete Account
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
