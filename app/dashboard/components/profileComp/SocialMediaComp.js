"use client";
import React, { useState } from "react";
import { UserGroupIcon, PlusCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { CARD_CLASS } from "../Comman/DESIGN";

export default function SocialMediaComp() {
  const [socials, setSocials] = useState([
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "GitHub", url: "https://github.com" },
  ]);
  const [newName, setNewName] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [showAddSection, setShowAddSection] = useState(false);

  const handleAddSocial = () => {
    if (newName.trim() && newUrl.trim()) {
      setSocials([...socials, { name: newName.trim(), url: newUrl.trim() }]);
      setNewName("");
      setNewUrl("");
      setShowAddSection(false);
    }
  };

  const handleRemoveSocial = (index) => {
    const updated = socials.filter((_, i) => i !== index);
    setSocials(updated);
  };

  return (
    <div className={CARD_CLASS.CARD}>
      {/* Title with Add Icon */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
          <UserGroupIcon className="h-5 w-5 text-blue-500" />
          <span className="tracking-wide text-base">Social Media</span>
        </div>

        {/* Toggle Add Section */}
        <button
          onClick={() => setShowAddSection(!showAddSection)}
          className="text-blue-600 hover:text-blue-800"
          title="Add social link"
        >
          <PlusCircleIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Social List */}
      <ul className="flex flex-col gap-2 mb-3">
        {socials.map((social, idx) => (
          <li
            key={idx}
            className="flex items-center justify-between px-3 py-2 bg-blue-50 text-blue-700 rounded-md"
          >
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline"
            >
              {social.name}
            </a>
            <button
              onClick={() => handleRemoveSocial(idx)}
              className="text-gray-500 hover:text-red-600"
              title="Remove"
            >
              <XMarkIcon className="h-4 w-4" />
            </button>
          </li>
        ))}
      </ul>

      {/* Add Social Section */}
      {showAddSection && (
        <div className="flex flex-col gap-2 mt-3">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Platform name (e.g., Twitter)"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
          <input
            type="url"
            value={newUrl}
            onChange={(e) => setNewUrl(e.target.value)}
            placeholder="Profile URL"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
          <button
            onClick={handleAddSocial}
            className="px-4 py-2 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600"
          >
            Add
          </button>
        </div>
      )}
    </div>
  );
}
