"use client";

import { AUTH } from "@/app/(web)/config/routes";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset link will be sent to:", email);
    // TODO: Connect with your password reset API
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-50">
      <div className="flex flex-col overflow-hidden rounded-2xl shadow-xl md:max-w-md w-full border border-gray-200">
        
        {/* Header Section */}
        <div className="p-8 bg-gray-900 text-white rounded-t-2xl text-center">
          <div className="text-4xl font-bold tracking-wide">K-WD</div>
          <p className="mt-4 text-sm text-gray-300">
            Enter your email below and we'll send you a link to reset your password.
          </p>
        </div>

        {/* Form Section */}
        <div className="p-8 bg-white">
          <h3 className="text-2xl font-semibold text-gray-900 text-center">Forgot Password</h3>

          <form onSubmit={handleSubmit} className="flex flex-col mt-6 space-y-5">

            {/* Email */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                id="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent transition bg-white text-gray-900"
                placeholder="your@email.com"
              />
            </div>

            {/* Submit Button */}
            <Link
              href={AUTH.OTP_VERIFICATION}
              className="w-full px-4 py-2 font-semibold text-white bg-gray-900 rounded-lg shadow hover:bg-black focus:ring-2 focus:ring-gray-700 focus:outline-none transition"
            >
              Send Reset Link
            </Link>
          </form>

          {/* Back to Login Link */}
          <p className="mt-6 text-center text-sm text-gray-700">
            Remembered your password?{' '}
            <Link href={AUTH.LOGIN} className="font-semibold hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
