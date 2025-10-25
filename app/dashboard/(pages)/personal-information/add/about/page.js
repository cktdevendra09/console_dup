"use client";
import React, { useState } from "react";

const ProfileForm = () => {
  const [profile, setProfile] = useState({
    name: "Jane Doe",
    role: "Owner at Her Company Inc.",
    email: "jane.doe@example.com",
    birthday: "1990-01-01",
    contact: "+91 9876543210",
    location: "Beech Creek, PA, USA",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated profile:", profile);
  };

  return (
    <div className="bg-white p-6 shadow-sm rounded-lg max-w-3xl mx-auto">
      <div className="flex items-center space-x-2 font-semibold text-gray-900 mb-4">
        <svg
          className="h-5 w-5 text-green-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        <span className="tracking-wide text-lg">Edit Profile</span>
      </div>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
        {/** Full Name */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/** Role */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1">Role</label>
          <input
            type="text"
            name="role"
            value={profile.role}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/** Email */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/** Birthday */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1">Birthday</label>
          <input
            type="date"
            name="birthday"
            value={profile.birthday}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/** Contact */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1">Contact</label>
          <input
            type="text"
            name="contact"
            value={profile.contact}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/** Location */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={profile.location}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </form>

      <div className="mt-6">
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ProfileForm;
