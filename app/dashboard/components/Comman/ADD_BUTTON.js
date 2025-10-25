import Link from "next/link";
import React from "react";

export const AddButton = ({ redirectTo = "#", label = "" }) => {
  return (
    <Link
      href={redirectTo}
      className="inline-flex items-center gap-2 rounded-md text-black text-sm font-medium px-4 py-2"
    >
      {/* Plus icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
      {label}
    </Link>
  );
};
