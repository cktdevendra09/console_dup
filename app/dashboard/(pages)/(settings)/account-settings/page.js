"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  UserIcon,
  LockClosedIcon,
  BellIcon,
  ShieldCheckIcon,
  EnvelopeIcon,
  ArrowDownOnSquareIcon,
} from "@heroicons/react/24/outline";

export default function AccountSettingsPage() {
  const [formData, setFormData] = useState({
    fullName: "Devendra Kumar",
    email: "devendra@example.com",
    phone: "+91 9876543210",
    password: "",
    newPassword: "",
    notifications: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account settings updated successfully!");
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
          <UserIcon className="w-6 h-6 text-indigo-600" />
          Account Settings
        </h1>
        <p className="text-gray-500 mt-1">
          Manage your personal information, password, and preferences.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Navigation Links */}
        <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-4 space-y-1">
          <Link
            href="/settings/profile"
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-50 text-indigo-700 font-medium hover:bg-indigo-100 transition"
          >
            <UserIcon className="w-5 h-5" />
            Profile
          </Link>

          <Link
            href="/settings/security"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition"
          >
            <LockClosedIcon className="w-5 h-5" />
            Security
          </Link>

          <Link
            href="/settings/notifications"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition"
          >
            <BellIcon className="w-5 h-5" />
            Notifications
          </Link>

          <Link
            href="/settings/privacy"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition"
          >
            <ShieldCheckIcon className="w-5 h-5" />
            Privacy
          </Link>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-sm border border-gray-200 rounded-lg p-6 space-y-6"
          >
            {/* Profile Section */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-3">
                <UserIcon className="w-5 h-5 text-indigo-600" />
                Personal Information
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </div>

            {/* Password Section */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-3">
                <LockClosedIcon className="w-5 h-5 text-indigo-600" />
                Security
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Current Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    New Password
                  </label>
                  <input
                    type="password"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </div>

            {/* Notifications Section */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-3">
                <EnvelopeIcon className="w-5 h-5 text-indigo-600" />
                Notification Preferences
              </h2>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="notifications"
                  checked={formData.notifications}
                  onChange={handleChange}
                  className="w-4 h-4 accent-indigo-600"
                />
                <label className="text-sm text-gray-700">
                  Receive email notifications for updates and offers
                </label>
              </div>
            </div>

            {/* Save Button */}
            <div className="pt-4 border-t flex justify-end">
              <button
                type="submit"
                className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg flex items-center gap-2 transition"
              >
                <ArrowDownOnSquareIcon className="w-4 h-4" />
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
