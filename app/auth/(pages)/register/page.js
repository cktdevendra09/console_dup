"use client";

import { AUTH } from "@/app/(web)/config/routes";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Name:", name, "Email:", email, "Password:", password);
    // TODO: Connect with registration API
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-white">
      <div className="flex flex-col overflow-hidden rounded-2xl shadow-xl md:flex-row md:max-w-4xl w-full border border-gray-200">
        
        {/* Left Section */}
        <div className="p-8 text-white bg-gray-900 md:w-80 md:flex md:flex-col md:justify-between">
          <div className="text-4xl font-bold text-center tracking-wide">K-WD</div>
          <p className="mt-6 text-sm text-gray-300 text-center">
            Focus on functionality while we handle the UI design of your digital products.
          </p>
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400">Already have an account?</p>
            <a href="#" className="text-white font-semibold hover:underline">
              Log in
            </a>
          </div>
          <p className="mt-6 text-xs text-gray-500 text-center">
            Read our <a href="#" className="underline">terms</a> and <a href="#" className="underline">conditions</a>
          </p>
        </div>

        {/* Right Section */}
        <div className="p-8 md:flex-1 bg-white">
          <h3 className="text-2xl font-semibold text-gray-900">Create Account</h3>

          <form onSubmit={handleSubmit} className="flex flex-col mt-6 space-y-5">
            
            {/* Full Name */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent transition bg-white text-gray-900"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent transition bg-white text-gray-900"
                placeholder="your@email.com"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent transition bg-white text-gray-900"
                placeholder="Enter your password"
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
                placeholder="Confirm your password"
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="agree"
                className="w-4 h-4 rounded border-gray-300 focus:ring-2 focus:ring-gray-700 transition"
              />
              <label htmlFor="agree" className="text-sm text-gray-900 font-medium">
                I agree to the terms and conditions
              </label>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-gray-900 rounded-lg shadow hover:bg-black focus:ring-2 focus:ring-gray-700 focus:outline-none transition"
            >
              Sign Up
            </button>
          </form>

          {/* "Already have an account?" Link */}
          <p className="mt-6 text-center text-sm text-gray-700">
            Already have an account?{' '}
            <Link href={AUTH.LOGIN} className="font-semibold hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
