'use client';
import { usePathname } from "next/navigation";
import FooterUI from "./components/layout/FooterUI";
import NavbarUI from "./components/layout/NavbarUI";
import { useEffect, useState } from "react";

export default function WebsiteLayout({ children }) {

  const pathname = usePathname(); usePathname
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500); // simulate smooth transition
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <div className="bg-gray-50">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50 transition-opacity duration-300">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      <NavbarUI></NavbarUI>
      <main className="min-h-screen">{children}</main>
      <FooterUI />
    </div>
  );
}

