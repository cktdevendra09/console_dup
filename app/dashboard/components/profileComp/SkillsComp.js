"use client";
import React, { useState } from "react";
import { WrenchScrewdriverIcon, TrashIcon, PlusIcon } from "@heroicons/react/24/outline";
import { CARD_CLASS } from "../Comman/DESIGN";

export default function SkillsComp() {
  const [skills, setSkills] = useState(["Java", "Spring Boot", "React.js"]);
  const [newSkill, setNewSkill] = useState("");
  const [showAddBox, setShowAddBox] = useState(false); // controls input visibility

  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (index) => {
    const updated = skills.filter((_, i) => i !== index);
    setSkills(updated);
  };

  return (
    <div className={CARD_CLASS.CARD}>
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
          <WrenchScrewdriverIcon className="h-5 w-5 text-green-500" />
          <span className="tracking-wide text-base">Skills</span>
        </div>

        {/* Add Icon */}
        <PlusIcon
          onClick={() => setShowAddBox(!showAddBox)}
          className={`h-6 w-6 cursor-pointer transition-colors ${
            showAddBox ? "text-green-600" : "text-gray-600 hover:text-green-600"
          }`}
          title="Add Skill"
        />
      </div>

      {/* Skills List */}
      <ul className="flex flex-wrap gap-2 mb-3">
        {skills.map((skill, idx) => (
          <li
            key={idx}
            className="flex items-center gap-1 px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full"
          >
            {skill}
            <TrashIcon
              onClick={() => handleRemoveSkill(idx)}
              className="h-4 w-4 text-gray-500 hover:text-red-600 cursor-pointer"
              title="Remove skill"
            />
          </li>
        ))}
      </ul>

      {/* Add Skill Input (toggle by ➕ button only) */}
      {showAddBox && (
        <div className="flex gap-2 mt-2">
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Enter a new skill..."
            className="w-full px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-400"
          />
          <button
            onClick={handleAddSkill}
            className="flex items-center gap-1 px-4 py-1 bg-green-500 text-white text-sm rounded-md hover:bg-green-600"
          >
            <PlusIcon className="h-4 w-4" />
            Add
          </button>
        </div>
      )}
    </div>
  );
}
