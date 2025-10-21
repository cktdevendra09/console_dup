"use client";
import React, { useState } from "react";

const ProfileUpdatePage = () => {
  const [profile, setProfile] = useState({
    name: "Jane Doe", // default name
    role: "Owner at Her Company Inc.",
    location: "Beech Creek, PA, USA",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt.",
    email: "jane@example.com", // default email
    birthday: "Feb 06, 1998",
    contact: "+11 998001001",
  });

  const defaultImage =
    "https://images.unsplash.com/photo-1759675795062-a657fcb278b1?ixlib=rb-4.1.0&auto=format&fit=crop&w=1600&q=80";
  const [image, setImage] = useState(defaultImage);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Profile:", profile);
    alert("Profile updated successfully!");
  };

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <div className="container mx-auto md:flex md:space-x-4">
        {/* Left Sidebar */}
        <div className="w-full md:w-3/12 space-y-4">
          <div className="bg-white p-3 border-t-4 border-green-400 rounded shadow relative">
            <label className="cursor-pointer relative block mx-auto w-40 h-40">
              <img
                src={image}
                alt="Profile"
                className="h-40 w-40 mx-auto rounded-full object-cover"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </label>

            <h1 className="text-gray-900 font-bold text-xl text-center mt-2">
              {profile.name}
            </h1>
            <h3 className="text-gray-600 font-semibold text-center text-sm">
              {profile.role}
            </h3>
            <p className="text-gray-500 text-sm mt-1 text-center">{profile.email}</p>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-9/12 space-y-4">
          {/* Profile Update Form */}
          <div className="bg-white p-5 shadow-sm rounded-sm">
            <h3 className="text-lg font-semibold mb-4">Update Profile</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:border-black"
                />
                <input
                  type="text"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:border-black"
                />
                <input
                  type="text"
                  name="role"
                  value={profile.role}
                  onChange={handleChange}
                  placeholder="Role"
                  className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:border-black"
                />
                <input
                  type="text"
                  name="birthday"
                  value={profile.birthday}
                  onChange={handleChange}
                  placeholder="Birthday"
                  className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:border-black"
                />
                <input
                  type="text"
                  name="contact"
                  value={profile.contact}
                  onChange={handleChange}
                  placeholder="Contact"
                  className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:border-black"
                />
                <input
                  type="text"
                  name="location"
                  value={profile.location}
                  onChange={handleChange}
                  placeholder="Location"
                  className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:border-black"
                />
              </div>
              <textarea
                name="about"
                value={profile.about}
                onChange={handleChange}
                placeholder="About yourself"
                rows="4"
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:border-black"
              />
              <button
                type="submit"
                className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdatePage;
