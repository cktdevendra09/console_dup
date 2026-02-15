"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { APP_CONFIG } from "../../utils/Constants";
import { AUTH, WEB_PAGES } from "../../config/routes";

export default function NavbarUI() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 space-x-10 text-[11px] uppercase tracking-[0.2em] font-medium">

            <NavLink href="/" label="Home" pathname={pathname} />
            <NavLink href={WEB_PAGES.PORTFOLIO} label="Portfolio" pathname={pathname} />
            <NavLink href={WEB_PAGES.TOPICS} label="Articles" pathname={pathname} />
            <NavLink href={WEB_PAGES.CONTESTS} label="Contests" pathname={pathname} />
            <NavLink href={WEB_PAGES.DOUBTS} label="Playground" pathname={pathname} />
          </div>

          {/* RIGHT - SIGN IN + MOBILE */}
          <div className="flex items-center space-x-6">

            <Link
              href={AUTH.LOGIN}
              className={`hidden lg:inline-block border px-6 py-2 text-[11px] uppercase tracking-[0.2em] transition-all ${
                pathname === AUTH.LOGIN
                  ? "bg-black text-white border-black"
                  : "border-black hover:bg-black hover:text-white"
              }`}
            >
              Sign In
            </Link>

            <button
              className="lg:hidden text-black"
              onClick={() => setOpen(true)}
            >
              <svg viewBox="0 0 20 20" className="w-6 h-6">
                <path
                  d="M3 5h14M3 10h14M3 15h14"
                  stroke="currentColor"
                  strokeWidth="2"
                />
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
          <span className="text-lg font-semibold">Console</span>
          <button onClick={() => setOpen(false)} className="text-2xl">
            ×
          </button>
        </div>

        <nav className="flex flex-col p-6 space-y-6 text-sm uppercase tracking-widest">

          <MobileLink href="/" label="Home" pathname={pathname} setOpen={setOpen} />
          <MobileLink href={WEB_PAGES.PORTFOLIO} label="Portfolio" pathname={pathname} setOpen={setOpen} />
          <MobileLink href={WEB_PAGES.TOPICS} label="Articles" pathname={pathname} setOpen={setOpen} />
          <MobileLink href={WEB_PAGES.CONTESTS} label="Contests" pathname={pathname} setOpen={setOpen} />
          <MobileLink href={WEB_PAGES.DOUBTS} label="Playground" pathname={pathname} setOpen={setOpen} />
          <MobileLink href={WEB_PAGES.WALLET} label="Wallet" pathname={pathname} setOpen={setOpen} />
          <MobileLink href={AUTH.LOGIN} label="Sign In" pathname={pathname} setOpen={setOpen} />

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

/* ================= DESKTOP NAV LINK ================= */

function NavLink({ href, label, pathname }) {
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`transition-colors ${
        isActive ? "text-black" : "text-black/50 hover:text-black"
      }`}
    >
      {label}
    </Link>
  );
}

/* ================= MOBILE NAV LINK ================= */

function MobileLink({ href, label, pathname, setOpen }) {
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={() => setOpen(false)}
      className={`transition-colors ${
        isActive
          ? "text-black font-semibold"
          : "text-black/60 hover:text-black"
      }`}
    >
      {label}
    </Link>
  );
}
