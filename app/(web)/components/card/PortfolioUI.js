"use client";

import React from "react";

export default function PortfolioUI() {
  return (
    <div className="flex flex-col justify-center items-center py-10">
      <div className="relative flex flex-col w-full max-w-[300px] rounded-[20px] bg-white p-4 shadow-xl">

        {/* Image Section */}
        <div className="relative w-full">
          <img
            src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png"
            alt="NFT"
            className="rounded-xl w-full h-auto mb-3"
          />

          {/* Like Button */}
          <button className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 hover:bg-gray-100 shadow">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 512 512"
              height="20"
              width="20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81C63 286 150.8 363.8 247 429.1a16 16 0 0018 0C360 363.8 447.8 286 448 176.8c-.54-52.6-42.32-96.8-95.08-96.8z"
              ></path>
            </svg>
          </button>
        </div>

        {/* Title + Author */}
        <div className="mb-3 flex items-center justify-between">
          <div>
            <p className="text-lg font-bold text-gray-900">Abstract Colors</p>
            <p className="text-sm text-gray-600 mt-1">By Esthera Jackson</p>
          </div>

          {/* Avatars */}
          <div className="flex flex-row-reverse">
            <span className="ml-1 h-8 w-8 flex items-center justify-center rounded-full bg-gray-200 text-xs text-gray-800 border-2 border-white">
              +5
            </span>

            {[
              "avatar1.eeef2af6dfcd3ff23cb8.png",
              "avatar2.5692c39db4f8c0ea999e.png",
              "avatar3.9f646ac5920fa40adf00.png",
            ].map((img, i) => (
              <span
                key={i}
                className="-mr-3 h-8 w-8 rounded-full border-2 border-white"
              >
                <img
                  src={`https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/${img}`}
                  alt="avatar"
                  className="h-full w-full rounded-full object-cover"
                />
              </span>
            ))}
          </div>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold text-blue-600">
            Current Bid: 0.91 <span className="text-gray-800">ETH</span>
          </p>

          <button className="rounded-[20px] bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 active:bg-blue-800 transition">
            Place Bid
          </button>
        </div>
      </div>
    </div>
  );
}
