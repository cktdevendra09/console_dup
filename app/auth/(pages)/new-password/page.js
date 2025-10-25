"use client";

import { useState } from "react";

export default function CreateNewPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("New Password:", password);
    // TODO: Connect with your reset password API
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-50">
      <div className="flex flex-col overflow-hidden rounded-2xl shadow-xl md:max-w-md w-full border border-gray-200">

        {/* Header Section */}
        <div className="p-8 bg-gray-900 text-white rounded-t-2xl text-center">
          <div className="text-4xl font-bold tracking-wide">K-WD</div>
          <p className="mt-4 text-sm text-gray-300">
            Enter a new password to secure your account.
          </p>
        </div>

        {/* Form Section */}
        <div className="p-8 bg-white">
          <h3 className="text-2xl font-semibold text-gray-900 text-center">Create New Password</h3>

          <form onSubmit={handleSubmit} className="flex flex-col mt-6 space-y-5">

            {/* New Password */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
                New Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent transition bg-white text-gray-900"
                placeholder="Enter new password"
              />
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent transition bg-white text-gray-900"
                placeholder="Confirm new password"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-gray-900 rounded-lg shadow hover:bg-black focus:ring-2 focus:ring-gray-700 focus:outline-none transition"
            >
              Set New Password
            </button>
          </form>

          {/* Back to Login */}
          <p className="mt-6 text-center text-sm text-gray-700">
            Remembered your password?{' '}
            <a href="#" className="font-semibold hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
