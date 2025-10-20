'use client';
import "./styles/globals.css";
import React, { useState } from "react";
import Sidebar from "./components/layout/sidebar/Sidebar";
import Header from "./components/layout/header/Header";

export default function RootLayout({ children }) {
  const [open, setOpen] = useState(false);
  return (
    
      <>

        <div className="min-h-screen bg-gray-50 text-gray-900">      
              <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-4 md:grid-cols-[18rem_1fr]">
                <Sidebar open={open} onClose={() => setOpen(false)} />
                <main className="space-y-4">
                  <div className="">
                    <Header onMenu={() => setOpen(true)} />
                  </div>          

                  {children}
                </main>
              </div>
            </div>
      </>
    
  );
}
