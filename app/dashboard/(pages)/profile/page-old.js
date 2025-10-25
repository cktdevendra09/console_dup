"use client";
import React, { useState } from "react";

const ProfileAddUpdate = () => {
  const [profile, setProfile] = useState({
    name: "Devendra Kumar",
    role: "Software Developer",
    location: "Noida, India",
    about:
      "Passionate software developer with experience in Java, Spring Boot, React.js, and Next.js.",
  });

  const defaultImage =
    "https://avatars2.githubusercontent.com/u/24622175?s=60&v=4";
  const [image, setImage] = useState(defaultImage);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const handleRemoveImage = () => {
    setImage(defaultImage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Profile:", profile);
    alert("Profile updated successfully!");
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-10 bg-gray-100 min-h-screen">
      <div className="relative flex w-full max-w-4xl flex-col md:flex-row rounded-xl bg-white text-gray-700 shadow-lg overflow-hidden">
        
        {/* Optional Image Section */}
        <div className="hidden md:block md:w-2/5 bg-gray-100  items-center justify-center relative">
          <img
            src={image}
            alt="Profile"
            className="h-full w-full object-cover"
          />
          {/* Remove Icon */}
          <button
            type="button"
            onClick={handleRemoveImage}
            className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:bg-gray-200 transition"
            title="Remove Image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Form Section */}
        <div className="p-8 w-full md:w-3/5">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Update Profile
            </h3>

            {/* Profile Image Upload */}
            <div className="flex items-center justify-center mb-4 relative">
              <label className="cursor-pointer">
                <img
                  src={image}
                  alt="Profile"
                  className="h-24 w-24 rounded-full object-cover border-2 border-gray-300 hover:opacity-80 transition"
                />
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
              {/* Remove Icon on mobile view */}
              <button
                type="button"
                onClick={handleRemoveImage}
                className="absolute top-0 right-0 md:hidden bg-white rounded-full p-1 shadow hover:bg-gray-200 transition"
                title="Remove Image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Name */}
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="border border-gray-300 rounded-lg p-3 w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
            />

            {/* Role */}
            <input
              type="text"
              name="role"
              value={profile.role}
              onChange={handleChange}
              placeholder="Role (e.g. Software Developer)"
              className="border border-gray-300 rounded-lg p-3 w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
            />

            {/* Location */}
            <input
              type="text"
              name="location"
              value={profile.location}
              onChange={handleChange}
              placeholder="Location"
              className="border border-gray-300 rounded-lg p-3 w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
            />

            {/* About */}
            <textarea
              name="about"
              value={profile.about}
              onChange={handleChange}
              placeholder="About yourself"
              rows="4"
              className="border border-gray-300 rounded-lg p-3 w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
            />

            {/* Save Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-md"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileAddUpdate;
