"use client";

import { useState } from "react";
import Link from "next/link";
import { DASHBOARD_LINKS } from "@/app/dashboard/config/routes";

export default function ProfileAddUpdatePage() {
  const [profile, setProfile] = useState({
    name: "Devendra Kumar",
    role: "Software Developer",
    location: "Noida, India",
    about:
      "Passionate software developer with experience in Java, Spring Boot, React.js, and Next.js.",
  });

  const [experiences, setExperiences] = useState([
    {
      title: "Java Developer @ Edunext Technologies",
      duration: "June 2025 - Present",
      description:
        "Working on backend APIs using Spring Boot and integrating with frontend React.js applications.",
    },
  ]);

  const [educations, setEducations] = useState([
    {
      degree: "MCA - Master of Computer Applications",
      duration: "2021 - 2024",
      description:
        "Studied Computer Science, specialized in Java development and web technologies.",
    },
  ]);

  const [image, setImage] = useState(
    "https://avatars2.githubusercontent.com/u/24622175?s=60&v=4"
  );
  const [imageFile, setImageFile] = useState(null);

  // --- Basic Info ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  // --- Image Upload ---
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImage(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImage("https://avatars2.githubusercontent.com/u/24622175?s=60&v=4");
  };

  // --- Experience Section ---
  const addExperience = () => {
    setExperiences([
      ...experiences,
      { title: "", duration: "", description: "" },
    ]);
  };

  const removeExperience = (index) => {
    setExperiences(experiences.filter((_, i) => i !== index));
  };

  const handleExperienceChange = (index, field, value) => {
    const newExperiences = [...experiences];
    newExperiences[index][field] = value;
    setExperiences(newExperiences);
  };

  // --- Education Section ---
  const addEducation = () => {
    setEducations([
      ...educations,
      { degree: "", duration: "", description: "" },
    ]);
  };

  const removeEducation = (index) => {
    setEducations(educations.filter((_, i) => i !== index));
  };

  const handleEducationChange = (index, field, value) => {
    const newEducations = [...educations];
    newEducations[index][field] = value;
    setEducations(newEducations);
  };

  // --- Submit ---
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", profile.name);
    formData.append("role", profile.role);
    formData.append("location", profile.location);
    formData.append("about", profile.about);
    formData.append("experiences", JSON.stringify(experiences));
    formData.append("educations", JSON.stringify(educations));
    if (imageFile) formData.append("profileImage", imageFile);

    console.log("Updated Profile Data:", Object.fromEntries(formData.entries()));
    alert("Profile Updated Successfully!");
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* LEFT SIDEBAR */}
        <div className="md:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex flex-col items-center">
              <div className="relative group">
                <label htmlFor="imageUpload" className="cursor-pointer">
                  <img
                    src={image}
                    alt="Profile"
                    className="h-24 w-24 rounded-full object-cover hover:opacity-80 transition"
                  />
                </label>
                {imageFile && (
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full p-1 opacity-80 hover:opacity-100"
                  >
                    ✕
                  </button>
                )}
                <input
                  type="file"
                  id="imageUpload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>

              <h2 className="mt-4 text-lg font-semibold text-gray-900">
                {profile.name}
              </h2>
              <p className="text-sm text-gray-600">{profile.role}</p>
              <p className="text-sm text-gray-600">{profile.location}</p>

              {imageFile && (
                <p className="mt-2 text-xs text-gray-500">
                  Selected: {imageFile.name}
                </p>
              )}
            </div>
          </div>

          {/* BASIC INFO */}
          <div className="bg-white p-6 rounded-lg shadow space-y-4 mt-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Basic Information
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
              <input
                type="text"
                name="role"
                value={profile.role}
                onChange={handleChange}
                placeholder="Role (e.g. Software Developer)"
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
              <input
                type="text"
                name="location"
                value={profile.location}
                onChange={handleChange}
                placeholder="Location"
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
            </div>
            <textarea
              name="about"
              value={profile.about}
              onChange={handleChange}
              placeholder="About yourself"
              rows="3"
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* EXPERIENCE SECTION */}
            <div className="bg-white p-6 rounded-lg shadow space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  Experience
                </h3>
                <button
                  type="button"
                  onClick={addExperience}
                  className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                >
                  + Add
                </button>
              </div>

              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="border border-gray-200 p-4 rounded-lg relative"
                >
                  <button
                    type="button"
                    onClick={() => removeExperience(index)}
                    className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                    title="Remove"
                  >
                    ✕
                  </button>

                  <input
                    type="text"
                    value={exp.title}
                    onChange={(e) =>
                      handleExperienceChange(index, "title", e.target.value)
                    }
                    placeholder="Experience Title"
                    className="border border-gray-300 rounded-lg p-2 w-full mb-2"
                  />
                  <input
                    type="text"
                    value={exp.duration}
                    onChange={(e) =>
                      handleExperienceChange(index, "duration", e.target.value)
                    }
                    placeholder="Duration"
                    className="border border-gray-300 rounded-lg p-2 w-full mb-2"
                  />
                  <textarea
                    value={exp.description}
                    onChange={(e) =>
                      handleExperienceChange(
                        index,
                        "description",
                        e.target.value
                      )
                    }
                    placeholder="Describe your work..."
                    rows="3"
                    className="border border-gray-300 rounded-lg p-2 w-full"
                  />
                </div>
              ))}
            </div>

            {/* EDUCATION SECTION */}
            <div className="bg-white p-6 rounded-lg shadow space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  Education
                </h3>
                <button
                  type="button"
                  onClick={addEducation}
                  className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                >
                  + Add
                </button>
              </div>

              {educations.map((edu, index) => (
                <div
                  key={index}
                  className="border border-gray-200 p-4 rounded-lg relative"
                >
                  <button
                    type="button"
                    onClick={() => removeEducation(index)}
                    className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                    title="Remove"
                  >
                    ✕
                  </button>

                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) =>
                      handleEducationChange(index, "degree", e.target.value)
                    }
                    placeholder="Degree"
                    className="border border-gray-300 rounded-lg p-2 w-full mb-2"
                  />
                  <input
                    type="text"
                    value={edu.duration}
                    onChange={(e) =>
                      handleEducationChange(index, "duration", e.target.value)
                    }
                    placeholder="Duration"
                    className="border border-gray-300 rounded-lg p-2 w-full mb-2"
                  />
                  <textarea
                    value={edu.description}
                    onChange={(e) =>
                      handleEducationChange(
                        index,
                        "description",
                        e.target.value
                      )
                    }
                    placeholder="Describe your studies..."
                    rows="3"
                    className="border border-gray-300 rounded-lg p-2 w-full"
                  />
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex justify-end space-x-4">
              <Link
                href={DASHBOARD_LINKS.PROFILE_ADDUPDATE}
                className="px-5 py-2 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-100"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
