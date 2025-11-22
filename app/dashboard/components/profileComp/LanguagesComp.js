"use client";
import React, { useState } from "react";
import { LanguageIcon, TrashIcon, PlusIcon } from "@heroicons/react/24/outline";
import { CARD_CLASS } from "../Comman/DESIGN";

export default function LanguagesComp() {
  const [languages, setLanguages] = useState(["English", "Hindi"]);
  const [newLanguage, setNewLanguage] = useState("");
  const [showAddBox, setShowAddBox] = useState(false);

  const handleAddLanguage = () => {
    if (newLanguage.trim() !== "") {
      setLanguages([...languages, newLanguage.trim()]);
      setNewLanguage("");
    }
  };

  const handleRemoveLanguage = (index) => {
    const updated = languages.filter((_, i) => i !== index);
    setLanguages(updated);
  };

  return (
    <div className={CARD_CLASS.CARD}>
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
          <LanguageIcon className="h-5 w-5 text-blue-500" />
          <span className="tracking-wide text-base">Languages</span>
        </div>

        {/* Add Icon */}
        <PlusIcon
          onClick={() => setShowAddBox(!showAddBox)}
          className={`h-6 w-6 cursor-pointer transition-colors ${
            showAddBox ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
          }`}
          title="Add Language"
        />
      </div>

      {/* Language List */}
      <ul className="flex flex-wrap gap-2 mb-3">
        {languages.map((lang, idx) => (
          <li
            key={idx}
            className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
          >
            {lang}
            <TrashIcon
              onClick={() => handleRemoveLanguage(idx)}
              className="h-4 w-4 text-gray-500 hover:text-red-600 cursor-pointer"
              title="Remove language"
            />
          </li>
        ))}
      </ul>

      {/* Add Language Input */}
      {showAddBox && (
        <div className="flex gap-2 mt-2">
          <input
            type="text"
            value={newLanguage}
            onChange={(e) => setNewLanguage(e.target.value)}
            placeholder="Enter a new language..."
            className="w-full px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
          <button
            onClick={handleAddLanguage}
            className="flex items-center gap-1 px-4 py-1 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600"
          >
            <PlusIcon className="h-4 w-4" />
            Add
          </button>
        </div>
      )}
    </div>
  );
}
