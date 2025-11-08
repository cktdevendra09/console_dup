import React from "react";
import DoubtsComp from "../../components/doubts/DoubtsComp";
import ReplyBoxComp from "../../components/doubts/ReplyBoxComp";
import Link from "next/link";
import { DASHBOARD_LINKS } from "../../config/routes";

const Doubts = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">All Doubts <Link href={DASHBOARD_LINKS.DOUBTS_ADDUPDATE}>CREATE</Link></h1>      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">        
        <DoubtsComp />   
        <DoubtsComp />   
        <DoubtsComp />        
      </div>      
    </div>
  );
};

export default Doubts;
