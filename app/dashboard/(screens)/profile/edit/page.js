"use client";

import { useState } from "react";

export default function ProfileAddEditPage() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-[#f4f5f7] dark:bg-slate-900 transition-colors duration-300">
        
        <div className="max-w-3xl mx-auto px-6 py-10">

          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-slate-800 dark:text-white">
              Edit Profile
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Manage your professional identity and skills.
            </p>
          </div>

          <div className="space-y-6">

            {/* Profile Card */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-6">

                <div className="relative">
                  <div className="w-24 h-24 rounded-full border-4 border-black dark:border-slate-600 p-1">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white dark:border-slate-800 rounded-full"></span>
                </div>

                <div>
                  <h3 className="font-medium text-slate-800 dark:text-white">
                    Profile Photo
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Update your profile picture. Recommended size: 400x400px.
                  </p>

                  <div className="flex items-center gap-4 mt-3">
                    <button className="px-3 py-1.5 text-xs bg-slate-100 hover:bg-slate-200 rounded-md font-medium transition">
                      Upload New
                    </button>
                    <button className="text-xs text-red-500 font-medium hover:underline">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Info */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-5">
                Personal Information
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-slate-500">Full Name</label>
                  <input
                    type="text"
                    defaultValue="Augusta Ryan"
                    className="w-full mt-1 px-3 py-2 text-sm rounded-lg bg-slate-100 dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-500">Job Title</label>
                  <input
                    type="text"
                    defaultValue="Project Director"
                    className="w-full mt-1 px-3 py-2 text-sm rounded-lg bg-slate-100 dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-4">
                Skills & Expertise
              </h2>

              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React",
                  "Node.js",
                  "TypeScript",
                  "GraphQL",
                  "Docker",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 font-medium"
                  >
                    {skill} ✕
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <input
                  placeholder="Add a skill..."
                  className="flex-1 px-3 py-2 text-sm rounded-lg bg-slate-100 dark:bg-slate-700 focus:outline-none"
                />
                <button className="px-4 py-2 text-xs bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                  ADD
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-5">
                Contact Information
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-slate-500">Email Address</label>
                  <input
                    type="email"
                    defaultValue="augusta.ryan@devflow.io"
                    className="w-full mt-1 px-3 py-2 text-sm rounded-lg bg-slate-100 dark:bg-slate-700 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-500">Location</label>
                  <input
                    type="text"
                    defaultValue="San Francisco, CA"
                    className="w-full mt-1 px-3 py-2 text-sm rounded-lg bg-slate-100 dark:bg-slate-700 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end items-center gap-4 pt-2">
              <button className="text-sm text-slate-500 hover:text-slate-700">
                Cancel
              </button>
              <button className="px-6 py-2 text-sm bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 active:scale-95 transition">
                Save Changes
              </button>
            </div>

          </div>
        </div>

        {/* Dark Toggle */}
        <div className="fixed bottom-6 right-6">
          <button
            onClick={() => setDark(!dark)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md border border-slate-200 dark:bg-slate-700"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>

      </div>
    </div>
  );
}
