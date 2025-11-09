"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

import { CODING_LEARNING, USER_LINKS } from "@/app/dashboard/config/routes";
import { WEB_PAGES } from "@/app/(web)/config/routes";

// ✅ Centralized Menu Config
const MENU_SECTIONS = [
  {
    title: "",
    items: [
      { name: "Dashboard", href: USER_LINKS.DASHBOARD },
      { name: "Profile", href: USER_LINKS.PROFILE },
      { name: "Portfolio", href: USER_LINKS.PORTFOLIO },
      { name: "Topics", href: USER_LINKS.TOPICS },
      { name: "Doubts", href: USER_LINKS.DOUBTS },      
    ],
  },  
  {
    title: "Coding & Learning",
    items: [
      { name: "Daily Challenge", href: CODING_LEARNING.DAILY_CHALLENGE },
      { name: "Contests & Hackathons", href: CODING_LEARNING.CONTESTS_HACKATHONS },      
      { name: "Projects & Assignments", href: CODING_LEARNING.PROJECTS_ASSIGNMENTS },
    ],
  },
  {
    title: "Settings",
    items: [
      { name: "Account Settings", href: "/settings" },
      { name: "Notifications", href: "/notifications" },
      { name: "Logout", href: "/logout" },
    ],
  },
];

export default function Sidebar({ open, onClose }) {
  const pathname = usePathname();

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 w-72 border-r border-gray-200 bg-white/70 backdrop-blur transition-transform duration-300 ease-out md:static md:translate-x-0 
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
    >
      {/* Header */}
      <div className="flex h-16 items-center gap-2 px-4 flex-shrink-0">
        <button
          className="md:hidden inline-flex items-center justify-center rounded-xl px-3 py-2 text-gray-600 hover:bg-gray-100"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="flex items-center gap-2 text-xl font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-gray-900 text-white">C</span>
          <Link href={WEB_PAGES.WEB_HOME}>Console</Link>
        </div>
      </div>

      {/* Scrollable Menu */}
      <nav className="flex-1 overflow-y-auto px-4 pb-6 space-y-6">
        {MENU_SECTIONS.map((section) => (
          <div key={section.title}>
            <div className="px-2 text-xs font-medium uppercase tracking-wider text-gray-500">
              {section.title}
            </div>
            <ul className="mt-2 space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm truncate
                        transition-colors duration-300 ease-in-out
                        ${
                          isActive
                            ? "bg-black text-white shadow-md"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                    >
                      {/* Dot with animation */}
                      <span
                        className={`inline-block h-2 w-2 rounded-full transition-all duration-300
                          ${isActive ? "bg-white scale-125" : "bg-gray-300 scale-100"}
                        `}
                      />
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
