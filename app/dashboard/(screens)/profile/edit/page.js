"use client";

import { useState } from "react";
import {
  card,
  input,
  label,
  heading,
  primaryButton,
  secondaryButton,
  smallButton,
} from "@/app/dashboard/components/Comman/DashboardUiUtility";

export default function ProfileAddEditPage() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-[#f4f5f7] dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-6 py-10 space-y-6">

          {/* Profile Card */}
          <div className={card()}>
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
                  <button className={smallButton()}>
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
          <div className={card()}>
            <h2 className={heading("mb-5")}>
              Personal Information
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className={label()}>Full Name</label>
                <input
                  type="text"
                  defaultValue="Augusta Ryan"
                  className={input()}
                />
              </div>

              <div>
                <label className={label()}>Job Title</label>
                <input
                  type="text"
                  defaultValue="Project Director"
                  className={input()}
                />
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className={card()}>
            <h2 className={heading("mb-5")}>
              Contact Information
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className={label()}>Email Address</label>
                <input
                  type="email"
                  defaultValue="augusta.ryan@devflow.io"
                  className={input()}
                />
              </div>

              <div>
                <label className={label()}>Location</label>
                <input
                  type="text"
                  defaultValue="San Francisco, CA"
                  className={input()}
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end items-center gap-4 pt-2">
            <button className={secondaryButton()}>
              Cancel
            </button>
            <button className={primaryButton()}>
              Save Changes
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}