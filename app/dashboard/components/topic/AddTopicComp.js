"use client";
import React, { useState } from "react";
import { PhotoIcon, FaceSmileIcon, LinkIcon } from "@heroicons/react/24/outline";

const AddTopicComp = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [charCount, setCharCount] = useState(0);

  const handleDescChange = (e) => {
    setDesc(e.target.value);
    setCharCount(e.target.value.length);
  };

  return (
    <div className="">
      <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
        {/* Editor */}
        <div className="p-6">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="w-full bg-gray-100 border border-gray-300 p-2 mb-4 rounded-md outline-none"
            spellCheck="false"
          />

          <textarea
            value={desc}
            onChange={handleDescChange}
            placeholder="Describe everything about this post here..."
            className="w-full bg-gray-100 p-3 h-40 border border-gray-300 rounded-md outline-none resize-none"
            spellCheck="false"
          />

          {/* Icons & Character Count */}
          <div className="flex items-center text-gray-500 mt-3">
            <PhotoIcon className="w-6 h-6 mr-2 cursor-pointer hover:text-gray-700 border p-1 rounded-full" />
            <FaceSmileIcon className="w-6 h-6 mr-2 cursor-pointer hover:text-gray-700 border p-1 rounded-full" />
            <LinkIcon className="w-6 h-6 mr-2 cursor-pointer hover:text-gray-700 border p-1 rounded-full" />
            <div className="ml-auto text-gray-400 text-xs font-semibold">{charCount}/300</div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end mt-4">
            <button className="border border-gray-300 px-4 py-1 font-semibold text-gray-600 rounded-md hover:bg-gray-100">
              Cancel
            </button>
            <button className="border border-indigo-500 px-4 py-1 font-semibold text-white rounded-md bg-indigo-500 ml-2 hover:bg-indigo-600">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTopicComp;
