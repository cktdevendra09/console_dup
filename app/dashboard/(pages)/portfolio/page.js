import CardUI from "@/app/dashboard/components/portfolio/CardUI";
import React from "react";

const Portfolio = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4">
        {/* Example: showing 6 cards */}
        <CardUI />
        <CardUI />
        <CardUI />
        <CardUI />
        <CardUI />
        <CardUI />
      </div>
    </>
  );
};

export default Portfolio;
