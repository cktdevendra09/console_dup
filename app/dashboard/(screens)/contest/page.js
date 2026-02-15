"use client";

import React from "react";
import { 
  MdPlayCircle, 
  MdSchedule, 
  MdJavascript, 
  MdStorage,  // replaced database
  MdSecurity, 
  MdBrush,    // replaced palette
  MdNotifications
} from "react-icons/md";

export default function ContestDashboardPage() {
  return (
    <div className="bg-slate-50 dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
     

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        {/* Active Contest */}
        <section className="mb-12 relative overflow-hidden bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl shadow-cyan-500/10">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
            <MdPlayCircle className="text-[300px] absolute -right-20 -top-20" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-6 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-bold uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Current Active Contest
              </div>
              <div>
                <h1 className="text-3xl md:text-5xl font-black mb-4">React Performance Optimization</h1>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Showcase your skills in rendering optimization, memory management, and code-splitting. Refactor our legacy dashboard for the grand prize.
                </p>
              </div>
              <div className="flex flex-wrap gap-8 items-center">
                <div className="flex flex-col">
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Grand Prize</span>
                  <span className="text-2xl font-bold text-primary">$500 + Exclusive Badge</span>
                </div>
                <div className="h-10 w-px bg-slate-800"></div>
                <div className="flex flex-col">
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Closes in</span>
                  <span className="text-2xl font-bold font-mono">24:12:45</span>
                </div>
              </div>
              <button className="bg-primary hover:brightness-110 text-slate-900 px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-cyan-500/20">
                Join Challenge Now
              </button>
            </div>
          </div>
        </section>

        {/* Ongoing Contests */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <MdPlayCircle className="text-primary" />
                Ongoing Contests
              </h2>
              <a className="text-sm font-semibold text-primary hover:underline" href="#">View all</a>
            </div>
            <div className="space-y-4">
              <ContestCard 
                icon={<MdJavascript size={28} className="text-amber-500" />} 
                title="Async Logic Mastery" 
                level="Intermediate" 
                desc="Handling complex race conditions in vanilla JS" 
                prize="$200" 
              />
              <ContestCard 
                icon={<MdStorage size={28} className="text-indigo-500" />} 
                title="SQL Query Ninja" 
                level="Pro" 
                desc="Optimize complex analytical queries for large datasets" 
                prize="$150" 
              />
            </div>
          </section>

          {/* Upcoming Contests */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <MdSchedule className="text-slate-400" />
                Upcoming Contests
              </h2>
            </div>
            <div className="space-y-4">
              <ContestCard 
                icon={<MdSecurity size={28} className="text-emerald-500" />} 
                title="Secure API Architect" 
                level="Starts in 2 days" 
                desc="Topic: OAuth2 Implementation & CSRF Protection" 
                prize="Premium Hardware Kit" 
                reminder
              />
              <ContestCard 
                icon={<MdBrush size={28} className="text-rose-500" />} 
                title="Tailwind CSS Wizard" 
                level="Starts in 5 days" 
                desc="Topic: Designing Responsive Dashboards with Zero CSS" 
                prize="$100" 
                reminder
              />
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 mt-auto px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2024 DevFlow. Building the future of developer talent.</p>
          <div className="flex gap-8 font-medium">
            <a className="hover:text-primary transition-colors" href="#">Contest Rules</a>
            <a className="hover:text-primary transition-colors" href="#">FAQ</a>
            <a className="hover:text-primary transition-colors" href="#">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ContestCard Component
function ContestCard({ icon, title, level, desc, prize, reminder }) {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-300 border-dashed">
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-2xl bg-gray-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-lg">{title}</h3>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${reminder ? 'text-slate-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 uppercase'}`}>
              {level}
            </span>
          </div>
          <p className="text-sm text-slate-500 mb-4">{desc}</p>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <span className="text-slate-400">Prize{!reminder && ' Pool'}:</span>
              <span className="font-bold text-slate-900 dark:text-slate-100 ml-1">{prize}</span>
            </div>
            <button className={`px-5 py-2 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${reminder ? 'border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800' : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'}`}>
              {reminder ? 'Set Reminder' : 'Join Now'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}