"use client";
import React from "react";
import Image from "next/image";

export default function TopicComp() {
  return (
    <div className=" ">
      <div className="bg-white  rounded-lg mb-6 tracking-wide">
        {/* Image Section */}
        <div className="md:flex-shrink-0">
          <img
            src="https://ik.imagekit.io/q5edmtudmz/post1_fOFO9VDzENE.jpg"
            alt="Mountains"
            width={400}
            height={300}
            className="w-full  rounded-lg rounded-b-none object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="px-4 py-2 mt-2">
          <h3 className="font-bold  text-gray-800 tracking-normal">
            My Amazing Journey to the Mountains.
          </h3>

          <p className="text-sm text-gray-700 px-2 mr-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit....
          </p>

          {/* Bottom Action Section */}
          <div className="flex items-center justify-between mt-2 mx-6">
            <a
              href="#"
              className="text-blue-500 text-xs -ml-3 hover:underline"
            >
              Show More
            </a>
            <button className="flex items-center text-gray-700 hover:text-blue-600">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-blue-500"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
              <span className="ml-1 text-sm">5</span>
            </button>
          </div>          
        </div>
      </div>
    </div>
  );
}
