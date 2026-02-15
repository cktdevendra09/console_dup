// pages/contest-results.js
import React from "react";

export default function ContestResults() {
  return (
    <div className="bg-slate-50 dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <a className="flex items-center gap-2" href="#">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-xl">terminal</span>
            </div>
            <span className="text-xl font-bold tracking-tight">DevFlow</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a className="text-primary font-semibold" href="#">
              Contests
            </a>
            <a className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors" href="#">
              Marketplace
            </a>
            <a className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors" href="#">
              Resources
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div className="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-slate-800">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold">Augusta Ryan</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                Pro Developer
              </p>
            </div>
            <img
              alt="Profile"
              className="w-9 h-9 rounded-full object-cover ring-2 ring-primary/20"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTY1hfrDU1dJC12v4FrQpLk31kylwtbX4un4p1teC0GyYNZkn_4q-KKdlKcnHyxCo0ngZWFxv1dn3zU2j5srksRZZtKXfSmXS5Jlcbnp0QnSuHum_Wgf0pw7l_LCg4DK7QACaL3zYgpF7WrKVUvoiDtmB6rNk82H0VX3n56DuOAikPGeSuHgM7WdgEkAhKXp-euvHY7oqZEt6X77LyWjgK4ELyaYARJ8dS4K2nEXvCm_F7Ahm3lOt13YnpX8oBm5dS3pjAZM0-Miw_"
            />
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 border-r border-slate-200 dark:border-slate-800 p-6 hidden lg:block bg-white/50 dark:bg-slate-900/50">
          <nav className="space-y-2">
            <a className="sidebar-link" href="#">
              <span className="material-symbols-outlined">dashboard</span>
              Dashboard
            </a>
            <a className="sidebar-link active" href="#">
              <span className="material-symbols-outlined">leaderboard</span>
              Leaderboard
            </a>
            <a className="sidebar-link" href="#">
              <span className="material-symbols-outlined">assignment_ind</span>
              My Participations
            </a>
            <a className="sidebar-link" href="#">
              <span className="material-symbols-outlined">gavel</span>
              Rules
            </a>
            <div className="pt-8 pb-4">
              <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                Support
              </p>
              <a className="sidebar-link" href="#">
                <span className="material-symbols-outlined">help</span>
                Help Center
              </a>
              <a className="sidebar-link" href="#">
                <span className="material-symbols-outlined">forum</span>
                Discord Community
              </a>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-10 overflow-y-auto">
          {/* Contest Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
              <a className="hover:text-primary" href="#">
                Contests
              </a>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span className="text-slate-900 dark:text-slate-100">Results</span>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex items-center gap-4">
                <h1 className="text-3xl font-black">CSS Grid Challenge</h1>
                <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  Completed
                </span>
              </div>
              <div className="flex gap-3">
                <button className="px-5 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm font-bold rounded-xl hover:bg-slate-50 transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">share</span>
                  Share Results
                </button>
                <button className="px-5 py-2.5 bg-primary text-white text-sm font-bold rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                  Certificate
                </button>
              </div>
            </div>
          </div>

          {/* Podium */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 items-end">
            {/* 2nd Place */}
            <div className="podium-card order-2 md:order-1 border-slate-200 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-200 text-slate-600 w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md">
                2
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <img
                    alt="2nd Place"
                    className="w-20 h-20 rounded-full object-cover ring-4 ring-slate-100"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiVGbKou1FDW3GU4JWu6T0xYckmRF-7P4UrJRX1-Cbr2xvPSyaw2YSJkrs8tlevgWybiTkyOcsVUDgvrVGpa19igEtyvGnaxmAJabWaO0tFdBa3tJsZOb1UiBPLISaAANS8b1Gi722t6YQ9ns0ooUuw-ZoEguvAW81Inx_iQO7w6Ik0W5WDw-Ltf7YSD_y3EbVoB63vtyTkEeuFsQlxfCeaXwR5XKGRydufopWMTuEk2iyu76rEFEFtXiX_su3RG1qlF3zrB-J7rSh"
                  />
                  <span className="absolute bottom-0 right-0 bg-slate-200 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-[14px] text-slate-600">military_tech</span>
                  </span>
                </div>
                <h3 className="font-bold text-lg">Marcus Chen</h3>
                <p className="text-sm text-slate-500 mb-4">@marcus_dev</p>
                <div className="w-full bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3 flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Final Score</span>
                  <span className="text-xl font-black text-slate-700 dark:text-slate-300">1,245</span>
                </div>
                <p className="mt-4 text-sm font-bold text-slate-500">Prize: $250 Credits</p>
              </div>
            </div>

            {/* 1st Place */}
            <div className="podium-card order-1 md:order-2 border-primary ring-4 ring-primary/10 py-12 relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                1
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <img
                    alt="1st Place"
                    className="w-28 h-28 rounded-full object-cover ring-4 ring-primary/20"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTY1hfrDU1dJC12v4FrQpLk31kylwtbX4un4p1teC0GyYNZkn_4q-KKdlKcnHyxCo0ngZWFxv1dn3zU2j5srksRZZtKXfSmXS5Jlcbnp0QnSuHum_Wgf0pw7l_LCg4DK7QACaL3zYgpF7WrKVUvoiDtmB6rNk82H0VX3n56DuOAikPGeSuHgM7WdgEkAhKXp-euvHY7oqZEt6X77LyWjgK4ELyaYARJ8dS4K2nEXvCm_F7Ahm3lOt13YnpX8oBm5dS3pjAZM0-Miw_"
                  />
                  <span className="absolute bottom-1 right-1 bg-primary w-8 h-8 rounded-full border-4 border-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg text-white">workspace_premium</span>
                  </span>
                </div>
                <h3 className="font-bold text-2xl">Sarah Jenkins</h3>
                <p className="text-sm text-slate-500 mb-6">@sarah_ui</p>
                <div className="w-full bg-primary/10 rounded-2xl p-4 flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-primary uppercase">Final Score</span>
                  <span className="text-3xl font-black text-primary">1,420</span>
                </div>
                <p className="mt-4 text-md font-bold text-primary flex items-center gap-1">
                  <span className="material-symbols-outlined">redeem</span>
                  $500 Cash + Elite Badge
                </p>
              </div>
            </div>

            {/* 3rd Place */}
            <div className="podium-card order-3 border-slate-200 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md">
                3
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <img
                    alt="3rd Place"
                    className="w-20 h-20 rounded-full object-cover ring-4 ring-amber-50"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEcWjAG3nuxrJwXVuWZFwTnuhQXi0cuYA1AD0FNVcJZSPjfELcWlqMBbRSpbNj2lVWSrehlv9Zq1uacLiLADbHoYX-LyO3V_RVyX1CKkx8oAnrR9VA_wpAd-Nl-P3jZ4U-_XQFdO_e7E_o5n66KAANBeFrCm6UdUvm6yyBD4mIpR_BFLhImi0VVyl9lxuq3Phk_dCUP1JvpBH6SbYlN1vyUH5qwn82b1-U3EvwTWhkliIpYclk4jDgb9F11lSNBIjf-FYWeI3QZyWV"
                  />
                  <span className="absolute bottom-0 right-0 bg-amber-600 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-[14px] text-white">star</span>
                  </span>
                </div>
                <h3 className="font-bold text-lg">Liam O'Neill</h3>
                <p className="text-sm text-slate-500 mb-4">@loneill_code</p>
                <div className="w-full bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3 flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Final Score</span>
                  <span className="text-xl font-black text-slate-700 dark:text-slate-300">1,180</span>
                </div>
                <p className="mt-4 text-sm font-bold text-slate-500">Prize: $100 Credits</p>
              </div>
            </div>
          </div>

          {/* Full leaderboard and stats can follow here... */}
        </main>
      </div>

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