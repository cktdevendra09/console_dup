'use client';
import React, { useState, useRef, useEffect } from "react";

export default function Header({ onMenu }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-30 border-gray-200 bg-white/70 backdrop-blur shadow rounded">
      <div className="flex h-16 items-center gap-3 px-4">

        <button
          onClick={onMenu}
          className="md:hidden inline-flex items-center justify-center rounded-xl px-3 py-2 text-gray-600 hover:bg-gray-100"
        >
          ☰
        </button>


        <div className="relative flex-1">
          <h4 className="text-lg font-semibold">Dashboard</h4>
        </div>

        
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpen(!open)}
            className="grid h-9 w-9 place-items-center rounded-full bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300"
          >
            DG
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-100">
              <ul className="py-1 text-sm text-gray-700">
                <li>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                    Change Profile
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                    Settings
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
