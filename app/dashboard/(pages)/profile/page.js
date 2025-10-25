"use client";
import Link from "next/link";
import React, { useState } from "react";
import { DASHBOARD_LINKS } from "../../config/routes";
import { AddButton } from "../../components/Comman/ADD_BUTTON";
import { EDIT_BUTTON } from "../../components/Comman/EDIT_BUTTON";

const page = () => {
  const [profile, setProfile] = useState({
    name: "Jane Doe",
    role: "Owner at Her Company Inc.",
    location: "Beech Creek, PA, USA",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt.",
    email: "jane@example.com",
    birthday: "Feb 06, 1998",
    contact: "+11 998001001",
  });

  const defaultImage =
    "https://unsplash.com/photos/snowy-mountains-rise-from-the-ocean-at-sunrise-IHfbPJYsnsI";
  const [image, setImage] = useState(defaultImage);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const handleRemoveImage = () => {
    setImage(defaultImage);
  };

  return (
    <div className="min-h-screen p-5">
      <div className="container mx-auto md:flex md:space-x-4">
        {/* Left Sidebar */}
        <div className="w-full md:w-3/12 space-y-4">
          <div className="bg-white p- rounded shadow p-5">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1759675795062-a657fcb278b1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1601"
                alt="Profile"
                className="h-40 w-40 mx-auto rounded-full object-cover"
              />              
            </div>
            <h1 className="text-gray-900 font-bold text-xl text-center mt-2">
              {profile.name} 
            </h1>
            <h3 className="text-gray-600 font-semibold text-center text-sm">
              {profile.role}
            </h3>
            <p className="text-gray-500 text-sm mt-2 text-center">{profile.about}</p>            
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-9/12 space-y-4">
          {/* About Section */}
          <div className="bg-white p-3 shadow-sm rounded-sm">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-2">
              <svg
                className="h-5 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="tracking-wide">About
                <EDIT_BUTTON redirectTo={DASHBOARD_LINKS.PROFILE_ADDUPDATE}/>
              </span>
            </div>
            <div className="text-gray-700 text-sm grid md:grid-cols-2 gap-2">
              <div className="grid grid-cols-2">
                <div className="font-semibold px-4 py-2">Full Name</div>
                <div className="px-4 py-2">{profile.name}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="font-semibold px-4 py-2">Role</div>
                <div className="px-4 py-2">{profile.role}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="font-semibold px-4 py-2">Email</div>
                <div className="px-4 py-2">{profile.email}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="font-semibold px-4 py-2">Birthday</div>
                <div className="px-4 py-2">{profile.birthday}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="font-semibold px-4 py-2">Contact</div>
                <div className="px-4 py-2">{profile.contact}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="font-semibold px-4 py-2">Location</div>
                <div className="px-4 py-2">{profile.location}</div>
              </div>
            </div>
          </div>

          {/* Experience & Education */}
          <div className="bg-white p-3 shadow-sm rounded-sm">
            <div className="grid md:grid-cols-2 gap-4">
              {/* Experience */}
              <div>
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-2">
                  <svg
                    className="h-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span className="tracking-wide">Experience 
                    <AddButton redirectTo={DASHBOARD_LINKS.EXPERIENCE_ADDUPDATE}></AddButton>                    
                    </span>
                </div>
                <ul className="list-inside space-y-2 text-sm text-gray-700">
                  <li>
                    <div className="text-teal-600">Java Developer @ Edunext Technologies</div>
                    <div className="text-gray-500 text-xs">June 2025 - Present</div>
                    <div className="text-gray-600 text-xs">
                      Working on backend APIs using Spring Boot and integrating with frontend React.js applications.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Education */}
              <div>
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-2">
                  <svg
                    className="h-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                  <span className="tracking-wide">Education 
                    {/* <Link href={DASHBOARD_LINKS.EDUCATION_ADDUPDATE}>edit</Link> */}
                    <AddButton redirectTo={DASHBOARD_LINKS.EDUCATION_ADDUPDATE} />

                    </span>
                </div>
                <ul className="list-inside space-y-2 text-sm text-gray-700">
                  <li>
                    <div className="text-teal-600">Masters Degree in Oxford</div>
                    <div className="text-gray-500 text-xs">March 2020 - Now</div>
                  </li>
                  <li>
                    <div className="text-teal-600">Bachelors Degree in LPU</div>
                    <div className="text-gray-500 text-xs">March 2020 - Now</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
