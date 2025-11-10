"use client";

import { useState, useEffect } from "react";
import {
  PhotoIcon,
  QuestionMarkCircleIcon,
  PaperAirplaneIcon,
  TagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import TosterAlerMessage from "@/app/dashboard/components/Comman/TosterAlerMessage";
import ToasterAlert from "@/app/dashboard/components/Comman/ToasterAlert";

export default function CreateDoubts({ onDoubtCreate }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [toast, setToast] = useState({ message: "", type: "" });

  const showToast = (message, type = "info") => {
    setToast({ message, type });
    setTimeout(() => setToast({ message: "", type: "" }), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      showToast("Please fill all fields!", "error");
      return;
    }

    const newDoubt = {
      id: Date.now(),
      title,
      description,
      images: images.map((img) => URL.createObjectURL(img)),
      createdAt: new Date().toLocaleString(),
    };

    onDoubtCreate && onDoubtCreate(newDoubt);
    showToast("Doubt posted successfully!", "success");

    setTitle("");
    setDescription("");
    setImages([]);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (images.length + files.length > 5) {
      showToast("You can upload up to 5 images only.", "error");
      return;
    }
    setImages((prev) => [...prev, ...files]);
  };

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="relative">
      {/* Toast */}
      {toast.message && (  

        <ToasterAlert
        show={true}
        onClose={false}
        type="success"
        message="Successfully Saved!"
        description="File saved. Click here to view."
      />
    
        // <TosterAlerMessage message={toast.message} messageType={toast.type} />
      )}

      {/* Form Container */}
      <div className="bg-white border border-gray-200 shadow-md rounded-xl p-6 max-w-2xl mx-auto my-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4 border-b border-gray-100 pb-3">
          <div className="bg-blue-100 p-2 rounded-lg">
            <QuestionMarkCircleIcon className="w-5 h-5 text-blue-600" />
          </div>
          <h2 className="text-lg font-semibold text-gray-800">Ask a Doubt</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your doubt title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              rows={4}
              className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              placeholder="Describe your doubt in detail..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          {/* Image Previews */}
          {images.length > 0 && (
            <div className="flex items-center gap-3 flex-wrap mt-2">
              {images.map((img, index) => (
                <div key={index} className="relative">
                  <img
                    src={URL.createObjectURL(img)}
                    alt={`Preview ${index}`}
                    className="w-10 h-10 object-cover rounded-lg border border-gray-300"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute -top-2 -right-2 bg-white text-red-500 rounded-full p-0.5 shadow hover:bg-red-50 transition"
                  >
                    <XMarkIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            {/* Left Icons */}
            <div className="flex items-center gap-5 text-gray-600">
              <label className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition">
                <PhotoIcon className="w-5 h-5" />
                <span className="text-sm font-medium hidden sm:inline">
                  Add Image ({images.length}/5)
                </span>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>

              <button
                type="button"
                className="flex items-center gap-1 hover:text-blue-600 transition"
              >
                <TagIcon className="w-5 h-5" />
                <span className="text-sm font-medium hidden sm:inline">
                  Add Tag
                </span>
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="flex items-center gap-2 bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-blue-700 active:scale-95 transition"
            >
              <PaperAirplaneIcon className="w-4 h-4 rotate-45" />
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
