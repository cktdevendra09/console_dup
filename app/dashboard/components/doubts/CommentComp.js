"use client";

import React from "react";
import { HeartIcon, ChatBubbleBottomCenterTextIcon, ArrowUpTrayIcon } from "@heroicons/react/24/outline";

const CommentComp = () => {
  return (
    <div className="border">
      <div className="flex items-start px-4 py-6 w-full">
        <img
          className="w-12 h-12 rounded-full object-cover mr-4 shadow"
          src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?auto=format&fit=crop&w=500&q=60"
          alt="avatar"
        />

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900 -mt-1">Brad Adams</h2>
            <small className="text-sm text-gray-700">22h ago</small>
          </div>

          <p className="text-gray-700">Joined 12 SEP 2012.</p>

          <p className="mt-3 text-gray-700 text-sm">
            Lorem ipsum, dolor sit amet conse. Saepe optio minus rem dolor sit amet!
          </p>

          {/* Actions */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center text-gray-700 text-sm space-x-6">
              <button className="flex items-center hover:text-red-500 transition">
                <HeartIcon className="w-5 h-5 mr-1" />
                <span>12</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentComp;
