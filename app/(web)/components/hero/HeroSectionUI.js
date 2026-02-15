"use client";

import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export default function HeroSection() {
  return (
    <section
      className={`${geist.className} relative flex items-center justify-center min-h-screen py-24 bg-cover bg-center`}
      style={{ backgroundImage: "url('/your-background.jpg')" }} // <-- replace with your image path
    >
      <div className="mx-auto max-w-3xl text-center px-4">
        {/* Subtitle */}
        <p className="text-lg font-medium leading-8 text-indigo-600/95">
          Introducing Design Data Platform
        </p>

        {/* Heading */}
        <h1 className="mt-3 text-5xl sm:text-6xl font-bold leading-tight tracking-tight text-black">
          Distribute your brand from&nbsp;design to code
        </h1>

        {/* Description */}
        <p className="mt-3 text-lg sm:text-xl leading-relaxed text-slate-400">
          Specify helps you unify your brand identity by collecting, storing and distributing design tokens and assets — automatically.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="rounded-md bg-indigo-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700"
          >
            Get started for free
          </a>
          <a
            href="#"
            className="rounded-md border border-slate-200 px-5 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50"
          >
            Request a demo
          </a>
        </div>
      </div>
    </section>
  );
}
