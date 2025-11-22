"use client";
import "./styles/globals.css";
import React, { useEffect, useState } from "react";
import Sidebar from "./components/layout/sidebar/Sidebar";
import Header from "./components/layout/header/Header";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  usePathname;
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500); // simulate smooth transition
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      <div className="min-h-screen bg-[#f5f5f7]  text-gray-900 ">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-4 md:grid-cols-[18rem_1fr]">
          <Sidebar open={open} onClose={() => setOpen(false)} />
          <main className="space-y-4">
            <div className="">
              <Header onMenu={() => setOpen(true)} />
            </div>

            {loading && (
              <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50 transition-opacity duration-300">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            {children}
          </main>
        </div>
      </div>
    </>
  );
}
