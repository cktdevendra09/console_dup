"use client";

import { AUTH } from "@/app/(web)/config/routes";
import Link from "next/link";
import { useState, useRef } from "react";

export default function OtpVerificationPage() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputsRef = useRef([]);

  const handleChange = (element, index) => {
    const value = element.value;
    if (/^\d*$/.test(value)) {
      let newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to next input
      if (value && index < 5) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Entered OTP:", otp.join(""));
    // TODO: Connect with OTP verification API
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-50">
      <div className="flex flex-col overflow-hidden rounded-2xl shadow-xl md:max-w-md w-full border border-gray-200">
        
        {/* Header Section */}
        <div className="p-8 bg-gray-900 text-white rounded-t-2xl text-center">
          <div className="text-4xl font-bold tracking-wide">K-WD</div>
          <p className="mt-4 text-sm text-gray-300">
            Enter the 6-digit OTP sent to your email or phone.
          </p>
        </div>

        {/* Form Section */}
        <div className="p-8 bg-white">
          <h3 className="text-2xl font-semibold text-gray-900 text-center">OTP Verification</h3>

          <form onSubmit={handleSubmit} className="flex flex-col mt-6 space-y-5">
            
            {/* OTP Inputs */}
            <div className="flex justify-between space-x-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  value={digit}
                  ref={(el) => (inputsRef.current[index] = el)}
                  onChange={(e) => handleChange(e.target, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-12 h-12 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 text-gray-900 text-lg font-semibold transition bg-white"
                />
              ))}
            </div>

            {/* Submit Button */}
            <Link
              href={AUTH.NEW_PASSWORFD}
              className="w-full px-4 py-2 font-semibold text-white bg-gray-900 rounded-lg shadow hover:bg-black focus:ring-2 focus:ring-gray-700 focus:outline-none transition"
            >
              Verify OTP
            </Link>
          </form>

          {/* Resend OTP */}
          <p className="mt-4 text-center text-sm text-gray-700">
            Didn't receive OTP?{' '}
            <a href="#" className="font-semibold hover:underline">
              Resend
            </a>
          </p>

          {/* Back to Login */}
          <p className="mt-2 text-center text-sm text-gray-700">
            Go back to{' '}
            <a href="#" className="font-semibold hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
