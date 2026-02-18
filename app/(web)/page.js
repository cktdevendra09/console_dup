"use client";

import App from "next/app";
import ProfileCardUI from "./components/user/ProfileCardUI";



export default function Home() {
  return (
    
    <div className="min-h-screen text-slate-900 dark:text-slate-100">


      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-900 py-24 lg:py-32 text-white">
        <div className="relative max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-8">
            <span className="text-primary text-sm font-bold uppercase">
              New Contests Added Daily
            </span>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Discover Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                Next Challenge
              </span>
            </h1>

            <p className="text-xl text-slate-400 max-w-xl">
              Join 50,000+ creators. Compete globally, showcase talent, and win big prizes.
            </p>

            <div className="flex gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/30">
                Get Started →
              </button>

              <button className="bg-white/10 border border-white/10 px-8 py-4 rounded-xl font-bold text-lg">
                View Winners
              </button>
            </div>

            <div className="flex items-center gap-8 pt-8 border-t border-white/10">
              <Stat number="1.2k+" label="Active Contests" />
              <Stat number="$2.5M+" label="Prizes Paid" />
            </div>
          </div>

          <div className="hidden lg:block">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUTPE7pDLBPKuVBmpYBWEiQuPXizPMRAljUqkZ4HFA5t7O8IoRINn8vOOhwjE9p8L9_Jj2OrE8WdNZiK4NNXgBHoU4ItUuJuZ2Wd49Eh9ORShJkAhy3kIgz4Ivmn6HZOo6M6YIy8_OWpJg3QKmaQDTf8iqyXescLC3_pDIBghQycSKtC_Y0uMH-RB_xvtUSvugQZ5GxEsjZorqns6FgRy4Au7MGh50l6ChjQtHvt92mBMc6pBhBpfCyfb9que40vEf_jBlpKYLhKg"
              className="rounded-2xl shadow-2xl"
              alt="Hero"
            />
          </div>

        </div>
      </section>

      {/* FEATURED CONTESTS */}
      <section className="max-w-[1600px] mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">Featured Contests</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ContestCard
            title="Global Architecture Visualizer 2024"
            prize="$15,000"
            tag="Top Pick"
          />
          <ContestCard
            title="Sustainable Fintech UI/UX"
            prize="$8,500"
            tag="Verified"
          />
          <ContestCard
            title="AI Content Generator Script"
            prize="$10,000"
            tag="Hot"
          />
        </div>
        <ProfileCardUI />
      </section>

      {/* CTA SECTION */}
      <section className="max-w-[1600px] mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-primary to-blue-700 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Showcase Your Talent?
          </h2>
          <p className="text-white/80 mb-8">
            Join thousands of creators building their legacy on C-DASH.
          </p>
          <button className="bg-white text-primary px-10 py-4 rounded-xl font-bold shadow-xl">
            Create Your Account
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-12 text-center text-sm text-slate-500">
        © 2024 C-DASH Contest Platform. All rights reserved.
      </footer>

    </div>
  );
}


/* Reusable Components */

function Stat({ number, label }) {
  return (
    <div>
      <div className="text-2xl font-bold">{number}</div>
      <div className="text-sm text-slate-400">{label}</div>
    </div>
  );
}

function ContestCard({ title, prize, tag }) {
  return (
    <div className="bg-slate-100 dark:bg-slate-800/40 rounded-2xl p-6 border hover:border-primary/50 transition-all">
      <span className="text-xs font-bold text-primary uppercase">{tag}</span>
      <h3 className="text-xl font-bold mt-3 mb-4">{title}</h3>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-primary">{prize}</span>
        <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm">
          Explore
        </button>
      </div>
    </div>
  );
}
