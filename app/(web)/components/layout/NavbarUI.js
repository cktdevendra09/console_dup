// components/NavbarUI.js
"use client";

import { useState } from "react";
import { APP_CONFIG } from "../../utils/Constants";
import Link from "next/link";

export default function NavbarUI() {
  const [open, setOpen] = useState(false); // mobile off-canvas
  const [moreOpen, setMoreOpen] = useState(false); // "More" dropdown

  return (
    <div className="relative antialiased ">
      {/* Top Navbar */}
      <div className="w-full text-gray-700 bg-white shadow-md">
        <div className="flex items-center justify-between max-w-screen-xl px-4 py-4 mx-auto md:px-6 lg:px-8">
          <Link
            href="/"
            className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg focus:outline-none focus:shadow-outline"
          >
            {APP_CONFIG.PROJECT_NAME}
          </Link>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-gray-900 focus:outline-none focus:shadow-outline"
            onClick={() => setOpen(true)}
          >
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex md:items-center md:space-x-4">
            {/* {["Blog", "Portfolio", "About", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 text-sm font-semibold rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200"
              >
                {item}
              </a>
            ))} */}


            <Link href="/" className="px-4 py-2 text-sm font-semibold rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200">Home</Link>
            <Link href="/portfolio" className="px-4 py-2 text-sm font-semibold rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200">PortFolio</Link>
            <Link href="/topics" className="px-4 py-2 text-sm font-semibold rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200">Topics</Link>
            <Link href="/doubts" className="px-4 py-2 text-sm font-semibold rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200">Doubts</Link>
            <Link href="/code-contest" className="px-4 py-2 text-sm font-semibold rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200">Code Contest</Link>
            <Link href="/auth" className="px-4 py-2 text-sm font-semibold rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 bg-gray-200">SignIn</Link>
            

            {/* "More" dropdown */}
            {/* <div className="relative">
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className="flex items-center px-4 py-2 text-sm font-semibold rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200"
              >
                More
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                    moreOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {moreOpen && (
                <div className="absolute right-0 w-48 mt-2 bg-white border rounded-md shadow-lg">
                  <DropdownItem title="Appearance" description="Easy customization" />
                  <DropdownItem title="Comments" description="Check your latest comments" />
                  <DropdownItem title="Analytics" description="View your stats" />
                </div>
              )}
            </div> */}


             {/* <div className="flex flex-wrap gap-4"> */}
                {/* View our work button */}
                {/* <a href="#" className="px-4 py-2 bg-black text-white rounded-full font-medium hover:bg-black/90 transition-all duration-300 group relative overflow-hidden">
                  <span className="relative z-10">View our work</span>
                  <span className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-all duration-500"></span>
                </a> */}

                {/* About studio button */}
                {/* <a href="#" className="px-4 py-2 border border-black/10 rounded-full font-medium hover:border-black/30 transition-all duration-300 group relative overflow-hidden">
                  <span className="relative z-10">About studio</span>
                  <span className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-all duration-500"></span>
                </a> */}
              {/* </div> */}
          </nav>
        </div>
      </div>

      {/* Mobile Off-Canvas Menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-md transform transition-transform duration-300 ease-in-out z-50 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-lg font-semibold">Menu</span>
          <button
            className="text-gray-900 text-2xl font-bold focus:outline-none"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-2">
          {["Blog", "Portfolio", "About", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="px-4 py-2 text-sm font-semibold rounded-lg hover:text-gray-900 hover:bg-gray-200"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}

          {/* "More" dropdown inside mobile */}
          <div>
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="flex items-center w-full px-4 py-2 text-sm font-semibold rounded-lg hover:text-gray-900 hover:bg-gray-200"
            >
              More
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                  moreOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {moreOpen && (
              <div className="flex flex-col pl-4 mt-2 space-y-1">
                <DropdownItem title="Appearance" description="Easy customization" />
                <DropdownItem title="Comments" description="Check your latest comments" />
                <DropdownItem title="Analytics" description="View your stats" />
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Overlay when menu is open */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </div>
  );
}

function DropdownItem({ title, description }) {
  return (
    <a
      href="#"
      className="flex items-start px-2 py-2 rounded-lg hover:bg-gray-100"
    >
      <div className="ml-2">
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </a>
  );
}
