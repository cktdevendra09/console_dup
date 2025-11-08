"use client";

import { BookmarkIcon, HeartIcon, ChatBubbleOvalLeftIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";

export default function ReplyBoxComp() {
  return (

     <div className="relative flex items-center w-full max-w-xl p-4 text-gray-600">
          <img
            className="w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer"
            alt="User avatar"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=2000&q=80"
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-6">
            <button className="p-1 hover:text-blue-500">
              <PaperAirplaneIcon className="w-5 h-5 text-gray-400" />
            </button>
          </span>
          <input
            type="text"
            placeholder="Post a comment..."
            className="w-full py-2 pl-4 pr-10 text-sm bg-gray-100 rounded-full placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500"
          />
        </div>
  );
}
