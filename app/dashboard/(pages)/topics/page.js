"use client";

import React from "react";

import AddTopicComp from "../../components/topic/AddTopicComp";
import TopicComp from "../../components/topic/TopicComp";

const Page = () => {
  return (
    <div className="">
      <div className="">

        {/* HEADING LEFT + BREADCRUMB RIGHT */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">

          {/* LEFT SIDE: Page Heading */}
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">Topics</h1>
            <p className="text-gray-500 text-sm mt-1">
              Manage and organize your topics.
            </p>
          </div>

          {/* RIGHT SIDE: Breadcrumb */}
          <div className="mt-4 md:mt-0">
            {/* <BreadcrumbUI items={["Topics"]} /> */}
          
          </div>
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">

          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            All Topics
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <AddTopicComp />

            <TopicComp />
            <TopicComp />
            <TopicComp />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
