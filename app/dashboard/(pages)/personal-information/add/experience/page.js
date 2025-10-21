"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ExperienceAddUpdate = () => {
  const [experience, setExperience] = useState({
    role: "Java Developer",
    company: "Edunext Technologies",
    startDate: null,
    endDate: null,
    description:
      "Working on backend APIs using Spring Boot and integrating with frontend React.js applications.",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (name, date) => {
    setExperience((prev) => ({ ...prev, [name]: date }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Experience Details:", experience);
    alert("Experience details saved successfully!");
  };

  return (
    <div className="flex flex-col items-center justify-center  min-h-screen">
      <div className="relative flex w-full max-w-4xl flex-col md:flex-row rounded-xl bg-white text-gray-700 shadow-lg overflow-hidden">
        
        {/* Optional Image Section */}
        <div className="hidden md:block md:w-2/5">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
            alt="Experience"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="p-8 w-full md:w-3/5">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Experience Details
            </h3>

            {/* Role */}
            <input
              type="text"
              name="role"
              value={experience.role}
              onChange={handleChange}
              placeholder="Role (e.g. Java Developer)"
              className="border border-gray-300 rounded-lg p-3 w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
            />

            {/* Company */}
            <input
              type="text"
              name="company"
              value={experience.company}
              onChange={handleChange}
              placeholder="Company Name"
              className="border border-gray-300 rounded-lg p-3 w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
            />

            {/* Duration */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Start Date
                </label>
                <DatePicker
                  selected={experience.startDate}
                  onChange={(date) => handleDateChange("startDate", date)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select start date"
                  className="border border-gray-300 rounded-lg p-3 w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
                  showPopperArrow={false}
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  End Date
                </label>
                <DatePicker
                  selected={experience.endDate}
                  onChange={(date) => handleDateChange("endDate", date)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select end date"
                  className="border border-gray-300 rounded-lg p-3 w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
                  showPopperArrow={false}
                />
              </div>
            </div>

            {/* Description */}
            <textarea
              name="description"
              value={experience.description}
              onChange={handleChange}
              placeholder="Describe your responsibilities or achievements..."
              rows="4"
              className="border border-gray-300 rounded-lg p-3 w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
            />

            {/* Save Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-md"
              >
                Save
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ExperienceAddUpdate;
