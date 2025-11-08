"use client";

import { useState } from "react";
import {
  PhotoIcon,
  QuestionMarkCircleIcon,
  PaperAirplaneIcon,
  TagIcon,
} from "@heroicons/react/24/outline";

export default function CreateDoubts({ onDoubtCreate }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const newDoubt = {
      id: Date.now(),
      title,
      description,
      image: image ? URL.createObjectURL(image) : null,
      createdAt: new Date().toLocaleString(),
    };

    onDoubtCreate && onDoubtCreate(newDoubt);

    setTitle("");
    setDescription("");
    setImage(null);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 max-w-2xl mx-auto my-6 border border-gray-100">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <QuestionMarkCircleIcon className="w-6 h-6 text-blue-600" />
        <h2 className="text-lg font-semibold text-gray-800">
          Ask Your Doubt
        </h2>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Doubt Title */}
        <input
          type="text"
          className="w-full border rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="Enter your doubt title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Description */}
        <textarea
          rows={3}
          className="w-full border rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
          placeholder="Describe your doubt in detail..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        {/* Image Preview */}
        {image && (
          <div className="relative mt-2">
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              className="rounded-lg w-full object-cover"
            />
            <button
              type="button"
              onClick={() => setImage(null)}
              className="absolute top-2 right-2 bg-white/90 text-red-500 rounded-full p-1 shadow-sm"
            >
              ✕
            </button>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between flex-wrap gap-3 mt-3">
          {/* Icons */}
          <div className="flex items-center space-x-5 text-gray-600">
            <label className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition">
              <PhotoIcon className="w-5 h-5" />
              <span className="text-sm font-medium hidden sm:inline">Image</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>

            <button
              type="button"
              className="flex items-center gap-1 hover:text-blue-600 transition"
            >
              <TagIcon className="w-5 h-5" />
              <span className="text-sm font-medium hidden sm:inline">Tag</span>
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex items-center gap-1 bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            <PaperAirplaneIcon className="w-4 h-4 rotate-45" />
            Post Doubt
          </button>
        </div>
      </form>
    </div>
  );
}
