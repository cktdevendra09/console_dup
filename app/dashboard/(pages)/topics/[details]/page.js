"use client";
import React from "react";

export default function TopicDetails() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="w-full items-center mx-auto max-w-screen-lg">
        <div className="group grid w-full grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="pl-8 md:pl-16 relative flex items-end flex-col before:block before:absolute before:h-1/6 before:w-4 before:bg-blue-500 before:bottom-0 before:left-0 before:rounded-lg before:transition-all group-hover:before:bg-orange-300 overflow-hidden">
            {/* Floating Box */}
            <div className="absolute top-0 left-0 bg-blue-500 w-4/6 px-6 md:px-12 py-10 md:py-14 flex flex-col justify-center rounded-xl group-hover:bg-sky-600 transition-all">
              <span className="block mb-6 md:mb-10 font-bold text-white group-hover:text-orange-300">
                HERE WE ARE
              </span>
              <h2 className="text-white font-bold text-2xl md:text-3xl">
                What started as a tiny team mostly dedicated to Air Quality has
                grown.
              </h2>
            </div>

            {/* Learn More Link */}
            <a
              href="#"
              className="font-bold text-sm flex mt-2 mb-8 items-center gap-2 text-gray-700 hover:text-orange-400 transition-all"
            >
              <span>MORE ABOUT US</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>

            {/* Image */}
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://picsum.photos/800/800"
                alt="About section"
                className="object-cover w-full"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="px-6 md:pl-12">
            <p className="mb-6 text-gray-500">
              Simply Air Conditioning London are fixed system heating and air
              conditioning installation specialists. Because we’ve tested all
              heating and air conditioning unit manufacturers before using them
              there are no hidden surprises for our customers. We only supply
              air conditioning units from the leading manufacturers so any
              system we fit will be of the highest quality. We also thoroughly
              test every type of unit before supplying.
            </p>
            <p className="mb-6 text-gray-500">
              We also provide tailored Air Conditioning installation packages.
              The Air Conditioning systems we install are all inverter driven
              therefore are energy efficient, stylish & silent both providing
              cooling and heating. At Zero Degree AC Limited we only use the
              best brands.
            </p>

            <h3 className="mb-4 font-semibold text-xl text-gray-600">
              Conditioning installation packages
            </h3>
            <ul
              role="list"
              className="marker:text-sky-400 list-disc pl-5 space-y-3 text-gray-500"
            >
              <li>5 cups chopped Porcini mushrooms</li>
              <li>1/2 cup of olive oil</li>
              <li>3lb of celery</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
