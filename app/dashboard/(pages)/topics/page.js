"use client";
import React from "react";
import TopicCardUi from "@/app/(web)/components/card/TopicCardUi";
import TopicComp from "../../components/topic/TopicComp";
import AddTopicComp from "../../components/topic/AddTopicComp";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Topics</h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First card — Add Topic */}
          <div className="order-first">
            <AddTopicComp />
          </div>
          {/* Other topic cards */}
          <TopicComp />
          <TopicComp />
        </div>
      </div>
    </div>
  );
};

export default Page;
