'use client';
import React, { useState, useRef, useEffect } from "react";
import {
  BellIcon,
  Bars3Icon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

export default function Header({ onMenu }) {
  const [open, setOpen] = useState(false); // Profile dropdown
  const [notifyOpen, setNotifyOpen] = useState(false); // Notification dropdown
  const dropdownRef = useRef(null);
  const notifyRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        notifyRef.current &&
        !notifyRef.current.contains(event.target)
      ) {
        setOpen(false);
        setNotifyOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNotifyClick = () => {
    setNotifyOpen(!notifyOpen);
    setOpen(false); // close profile
  };

  const handleProfileClick = () => {
    setOpen(!open);
    setNotifyOpen(false); // close notification
  };

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="flex h-16 items-center justify-between px-4">

        {/* LEFT: Menu + Title */}
        <div className="flex items-center gap-3">
          {/* ☰ Menu Button (Mobile) */}
          <button
            onClick={onMenu}
            className="inline-flex items-center justify-center rounded-xl px-3 py-2 text-gray-600 hover:bg-gray-100 md:hidden"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>

          {/* Dashboard Title */}
          <h4 className="text-lg font-semibold text-gray-800 whitespace-nowrap">
            Dashboard
          </h4>
        </div>

        {/* RIGHT: Notification + Profile */}
        <div className="flex items-center gap-4">
          {/* 🔔 Notification Dropdown */}
          <div className="relative" ref={notifyRef}>
            <button
              onClick={handleNotifyClick}
              className="relative grid h-9 w-9 place-items-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              <BellIcon className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>

            {notifyOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
                <div className="px-4 py-2 font-semibold text-gray-700 border-b">
                  Notifications
                </div>
                <ul className="max-h-60 overflow-y-auto">
                  <li className="px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 flex gap-2">
                    <span className="text-blue-500">•</span> New user registered
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 flex gap-2">
                    <span className="text-green-500">•</span> Server restarted
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 flex gap-2">
                    <span className="text-yellow-500">•</span> Payment pending
                  </li>
                </ul>
                <div className="border-t">
                  <button className="w-full text-center text-sm text-blue-600 py-2 hover:bg-gray-50">
                    See all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* 👤 Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={handleProfileClick}
              className="grid h-9 w-9 place-items-center rounded-full bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300"
            >
              DG
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-100">
                <ul className="py-1 text-sm text-gray-700">
                  <li>
                    <button className="flex items-center w-full gap-2 px-4 py-2 hover:bg-gray-100">
                      <UserCircleIcon className="h-5 w-5" />
                      Change Profile
                    </button>
                  </li>
                  <li>
                    <button className="flex items-center w-full gap-2 px-4 py-2 hover:bg-gray-100">
                      <Cog6ToothIcon className="h-5 w-5" />
                      Settings
                    </button>
                  </li>
                  <li>
                    <button className="flex items-center w-full gap-2 px-4 py-2 text-red-600 hover:bg-gray-100">
                      <ArrowRightOnRectangleIcon className="h-5 w-5" />
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
