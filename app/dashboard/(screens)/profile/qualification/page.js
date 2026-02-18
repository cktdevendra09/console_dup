"use client";

export default function QualificationsPage() {
  return (
    <div className="min-h-screen bg-[#f4f5f7] dark:bg-slate-900 py-10 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-slate-800 dark:text-white">
            Qualifications & Education
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Manage your professional milestones and academic background.
          </p>
        </div>

        <div className="space-y-6">

          {/* Education Card */}
<div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-6">

  {/* Card Header */}
  <div className="flex items-center justify-between mb-6">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700">
        🎓
      </div>
      <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-200">
        Education
      </h2>
    </div>

    <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
      + Add New
    </button>
  </div>

  <div className="space-y-5">

    {/* Degree + Field */}
    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <label className="text-xs font-medium text-slate-500">
          Degree
        </label>
        <input
          type="text"
          placeholder="Bachelor's, Master's, PhD..."
          className="w-full mt-1 px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="text-xs font-medium text-slate-500">
          Field of Study
        </label>
        <input
          type="text"
          placeholder="Computer Science"
          className="w-full mt-1 px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
    </div>

    {/* Institution + Location */}
    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <label className="text-xs font-medium text-slate-500">
          Institution
        </label>
        <input
          type="text"
          placeholder="University Name"
          className="w-full mt-1 px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="text-xs font-medium text-slate-500">
          Location
        </label>
        <input
          type="text"
          placeholder="City, Country"
          className="w-full mt-1 px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
    </div>

    {/* Start Year + Graduation Year */}
    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <label className="text-xs font-medium text-slate-500">
          Start Year
        </label>
        <input
          type="text"
          placeholder="2016"
          className="w-full mt-1 px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="text-xs font-medium text-slate-500">
          Graduation Year
        </label>
        <input
          type="text"
          placeholder="2020"
          className="w-full mt-1 px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
    </div>

    {/* GPA */}
    <div>
      <label className="text-xs font-medium text-slate-500">
        Grade / GPA (Optional)
      </label>
      <input
        type="text"
        placeholder="3.8 / 4.0"
        className="w-full mt-1 px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>

    {/* Currently Studying */}
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        className="w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500"
      />
      <label className="text-sm text-slate-600 dark:text-slate-300">
        I am currently studying here
      </label>
    </div>

    {/* Description */}
    <div>
      <label className="text-xs font-medium text-slate-500">
        Description
      </label>
      <textarea
        rows="3"
        placeholder="Mention achievements, coursework, honors..."
        className="w-full mt-1 px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
      />
    </div>

  </div>
</div>




       
          {/* Bottom Buttons */}
          <div className="flex justify-end items-center gap-4 pt-2">
            <button className="text-sm text-slate-500 hover:text-slate-700">
              Cancel
            </button>
            <button className="px-6 py-2 text-sm bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 active:scale-95 transition">
              Save Changes
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
