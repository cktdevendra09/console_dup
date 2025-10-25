"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EducationAddUpdate = () => {
  const [education, setEducation] = useState({
    degree: "",
    startDate: null,
    endDate: null,
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (name, date) => {
    setEducation((prev) => ({ ...prev, [name]: date }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Education Details:", education);
    alert("Education details saved successfully!");
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-10 ">
      <div className="relative flex w-full max-w-4xl flex-col md:flex-row rounded-xl bg-white text-gray-700 shadow-lg overflow-hidden">
        
        {/* Image Section */}
        <div className="hidden md:block md:w-2/5">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="Education"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="p-8 w-full md:w-3/5">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Education Details
            </h3>

            {/* Degree */}
            <input
              type="text"
              name="degree"
              value={education.degree}
              onChange={handleChange}
              placeholder="Degree (e.g. MCA - Master of Computer Applications)"
              className="border border-gray-300 rounded-lg p-3 w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
            />

            {/* Duration */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Start Date
                </label>
                <DatePicker
                  selected={education.startDate}
                  onChange={(date) => handleDateChange("startDate", date)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select start date"
                  className="border border-gray-300 rounded-lg p-3 w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                  showPopperArrow={false}
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  End Date
                </label>
                <DatePicker
                  selected={education.endDate}
                  onChange={(date) => handleDateChange("endDate", date)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select end date"
                  className="border border-gray-300 rounded-lg p-3 w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                  showPopperArrow={false}
                />
              </div>
            </div>

            {/* Description */}
            <textarea
              name="description"
              value={education.description}
              onChange={handleChange}
              placeholder="Describe your studies or achievements..."
              rows="4"
              className="border border-gray-300 rounded-lg p-3 w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
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

export default EducationAddUpdate;
