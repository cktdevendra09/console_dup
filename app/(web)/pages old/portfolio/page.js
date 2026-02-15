"use client";
import React from "react";
import PortfolioUI from "../../components/card/PortfolioUI";

const PortfolioPage = () => {
  return (
    <div className="w-full min-h-screen bg-indigo-100 p-6">
      <div className="flex flex-col lg:grid lg:gap-4 2xl:gap-6 lg:grid-cols-4 2xl:row-span-2 2xl:pb-8 ml-2 pt-4">

        {/* Daniel Clifford */}
        <div className="bg-indigo-600 lg:order-1 lg:row-span-1 lg:col-span-2 rounded-lg shadow-xl mb-5 lg:mb-0">
          <div className="mx-6 my-8">
            <img
              className="w-10 h-10 md:w-12 md:h-12 2xl:w-20 2xl:h-20 rounded-full border-2"
              src="https://images.pexels.com/photos/3775534/pexels-photo-3775534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <h1 className="text-white mt-2 text-base md:text-xl 2xl:text-2xl">
              Daniel Clifford
            </h1>
            <h2 className="text-white text-opacity-50 text-sm md:text-base 2xl:text-xl">
              Verified Graduate
            </h2>
          </div>

          <div className="-mt-6 px-7">
            <p className="text-white text-lg md:text-xl 2xl:text-4xl font-bold">
              I received a job offer mid-course...
            </p>
            <p className="text-white text-opacity-50 mt-3 mb-4 md:text-sm 2xl:text-3xl">
              “ I was an EMT for many years... ”
            </p>
          </div>
        </div>

        {/* Jonathan Walters */}
        <div className="bg-gray-900 lg:order-2 rounded-lg shadow-xl pb-4 mb-5 lg:mb-0">
          <div className="mx-8 my-10">
            <img
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2"
              src="https://images.pexels.com/photos/634021/pexels-photo-634021.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <h1 className="text-white text-base md:text-lg 2xl:text-2xl mt-2">
              Jonathan Walters
            </h1>
            <h2 className="text-white text-opacity-50 text-sm md:text-base 2xl:text-xl">
              Verified Graduate
            </h2>
          </div>

          <div className="px-6">
            <p className="text-white text-lg md:text-xl 2xl:text-4xl font-semibold">
              The team was very supportive and kept me motivated
            </p>
            <p className="text-white text-opacity-50 mt-3 md:text-sm 2xl:text-3xl">
              “ I started as a total newbie... ”
            </p>
          </div>
        </div>

        {/* Jeanette Harmon */}
        <div className="bg-white rounded-lg shadow-xl mb-5 lg:mb-0">
          <div className="mx-8 my-10">
            <img
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2"
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <h1 className="text-gray-800 mt-2 text-base md:text-lg 2xl:text-2xl">
              Jeanette Harmon
            </h1>
            <h2 className="text-gray-500 text-sm md:text-base 2xl:text-xl">
              Verified Graduate
            </h2>
          </div>

          <div className="px-6">
            <p className="text-gray-800 text-xl 2xl:text-4xl font-bold">
              An overall wonderful and rewarding experience
            </p>
            <p className="text-gray-500 mt-3 mb-6 md:text-sm 2xl:text-3xl">
              “ Thank you for the wonderful experience... ”
            </p>
          </div>
        </div>

        {/* Patrick Abrams */}
        <div className="bg-purple-800 rounded-lg shadow-xl mb-5 lg:mb-0 lg:pb-6">
          <div className="mx-8 my-10">
            <img
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2"
              src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <h1 className="text-white mt-2 text-base md:text-lg 2xl:text-2xl">
              Patrick Abrams
            </h1>
            <h2 className="text-white text-opacity-50 text-sm md:text-base 2xl:text-xl">
              Verified Graduate
            </h2>
          </div>

          <div className="px-6">
            <p className="text-white text-lg md:text-xl 2xl:text-4xl font-semibold">
              Awesome teaching support from TAs who did the bootcamp themselves.
            </p>
            <p className="text-white text-opacity-50 mt-3 md:text-sm 2xl:text-3xl">
              “ The staff seem genuinely concerned... ”
            </p>
          </div>
        </div>

        {/* Kira Whittle */}
        <div className="bg-white rounded-lg shadow-xl mb-5 lg:pb-4">
          <div className="mx-8 my-10">
            <img
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2"
              src="https://images.pexels.com/photos/3762804/pexels-photo-3762804.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <h1 className="text-gray-800 mt-2 text-base md:text-lg 2xl:text-2xl">
              Kira Whittle
            </h1>
            <h2 className="text-gray-500 text-sm md:text-base 2xl:text-xl">
              Verified Graduate
            </h2>
          </div>

          <div className="px-6">
            <p className="text-gray-800 text-xl 2xl:text-4xl font-semibold">
              Such a life-changing experience. Highly recommended!
            </p>
            <p className="text-gray-500 mt-3 md:text-sm mb-6 2xl:text-3xl">
              “ Before joining the bootcamp... ”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
