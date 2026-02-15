"use client";

import { useState } from "react";
import Link from "next/link";
import { APP_CONFIG } from "../../utils/Constants";
import { AUTH, WEB_PAGES } from "../../config/routes";

export default function NavbarUI() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <div className="relative">

      {/* ================= NAVBAR ================= */}
      <nav className="lg:fixed lg:top-0 lg:left-0 lg:w-full z-50 bg-white border-b border-black/10">
  <div className="max-w-[1600px] mx-auto px-8 h-20 flex items-center justify-between relative">

    {/* LEFT - LOGO */}
    <Link
      href="/"
      className="text-2xl font-bold tracking-tighter uppercase"
    >
      {APP_CONFIG.PROJECT_NAME}.
    </Link>

    {/* CENTER - MENU */}
    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 space-x-10 text-[11px] uppercase tracking-[0.2em] font-medium text-black/50">

      <Link href="/" className="hover:text-black transition-colors">
        Home
      </Link>

      <Link
        href={WEB_PAGES.PORTFOLIO}
        className="hover:text-black transition-colors"
      >
        Portfolio
      </Link>

      <Link
        href={WEB_PAGES.TOPICS}
        className="hover:text-black transition-colors"
      >
        Articles
      </Link>

      <Link
        href={WEB_PAGES.CONTESTS}
        className="hover:text-black transition-colors"
      >
        Contests
      </Link>

      <Link
        href={WEB_PAGES.DOUBTS}
        className="hover:text-black transition-colors"
      >
        Playground
      </Link>
    </div>

    {/* RIGHT - SIGN IN + MOBILE */}
    <div className="flex items-center space-x-6">
      <Link
        href={AUTH.LOGIN}
        className="hidden lg:inline-block border border-black px-6 py-2 text-[11px] uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all"
      >
        Sign In
      </Link>

      <button
        className="lg:hidden text-black"
        onClick={() => setOpen(true)}
      >
        <svg viewBox="0 0 20 20" className="w-6 h-6">
          <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>
    </div>
  </div>
</nav>



      {/* ================= MOBILE DRAWER ================= */}
      <div
        className={`fixed top-0 left-0 w-72 h-full bg-white shadow-xl transform transition-transform duration-300 z-50 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={() => setOpen(false)} className="text-2xl">
            ×
          </button>
        </div>

        <nav className="flex flex-col p-6 space-y-6 text-sm uppercase tracking-widest">

          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link href={WEB_PAGES.PORTFOLIO} onClick={() => setOpen(false)}>
            Portfolio
          </Link>

          <Link href={WEB_PAGES.TOPICS} onClick={() => setOpen(false)}>
            Articles
          </Link>

          <Link href={WEB_PAGES.CONTESTS} onClick={() => setOpen(false)}>
            Contests
          </Link>

          <Link href={WEB_PAGES.DOUBTS} onClick={() => setOpen(false)}>
            Playground
          </Link>

          <Link href={AUTH.LOGIN} onClick={() => setOpen(false)}>
            Sign In
          </Link>
        </nav>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </div>
  );
}

/* ================= DROPDOWN ITEM ================= */

function DropdownItem({ title }) {
  return (
    <button className="block w-full text-left px-4 py-2 text-sm hover:bg-black/5">
      {title}
    </button>
  );
}
