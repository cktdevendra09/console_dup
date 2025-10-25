import Link from "next/link";
import React from "react";

export const EDIT_BUTTON = ({ redirectTo = "#", label = "" }) => {
  return (
    <Link
      href={redirectTo}
      className="inline-flex items-center gap-2 rounded-md text-black text-sm font-medium px-4 py-2 "
    >
      {/* Edit (Pencil) icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.862 4.487l1.65 1.65a1.875 1.875 0 010 2.652L8.288 19.012a4.5 4.5 0 01-1.897 1.13l-2.59.647a.375.375 0 01-.46-.46l.647-2.59a4.5 4.5 0 011.13-1.897l10.225-10.225a1.875 1.875 0 012.652 0z"
        />
      </svg>
      {label}
    </Link>
  );
};
