"use client";

import { cardClasses } from "@/app/dashboard/components/Comman/DashboardUiUtility";
import React from "react";
import {
  MdTerminal,
  MdNotifications,
  MdMilitaryTech,
  MdAnalytics,
  MdPublic,
  MdWorkspacePremium,
  MdHistory,
  MdFilterList,
  MdShowChart,
} from "react-icons/md";

export default function MyParticipationsPage() {
  const participations = [
    {
      title: "TypeScript Type Gym",
      subtitle: "Advanced Logic",
      date: "Oct 12, 2024",
      rank: "14th",
      total: 1200,
      score: 982,
      rewardIcon: <MdMilitaryTech />,
      rewardAmount: "$50",
      rewardColor: "text-amber-500",
    },
    {
      title: "CSS Grid Challenge",
      subtitle: "Layout Mastery",
      date: "Sep 28, 2024",
      rank: "3rd",
      total: 850,
      score: 1120,
      rewardIcon: <MdWorkspacePremium />,
      rewardAmount: "$200",
      rewardColor: "text-primary",
    },
    {
      title: "Next.js Edge Runtime",
      subtitle: "Deployment Architecture",
      date: "Sep 15, 2024",
      rank: "42nd",
      total: 2400,
      score: 845,
      rewardIcon: null,
      rewardAmount: "Participant",
      rewardColor: "text-slate-400",
    },
    {
      title: "Micro-interactions Lab",
      subtitle: "Animation & UI",
      date: "Aug 22, 2024",
      rank: "1st",
      total: 500,
      score: 1450,
      rewardIcon: <MdMilitaryTech />,
      rewardAmount: "$500",
      rewardColor: "text-primary",
    },
  ];

  return (
    <div className="">
      {/* Header */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        {/* Title & Global Rank */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-black mb-2">My Participations</h1>
            <p className="text-slate-500">Track your coding journey and competition history</p>
          </div>
          <div className="bg-primary/10 px-4 py-2 rounded-xl flex items-center gap-3 border border-primary/20">
            <MdMilitaryTech className="text-primary" />
            <span className="text-sm font-bold text-primary">Global Rank: #1,402</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <StatCard title="Total Joined" value="24" trend="+3 this month" icon={<MdMilitaryTech />} trendColor="text-emerald-500" />
          <StatCard title="Average Rank" value="12th" subtitle="Across all categories" icon={<MdAnalytics />} />
          <StatCard title="Global Percentile" value="Top 4%" subtitle="Improved from 5%" icon={<MdPublic />} valueColor="text-primary" trendColor="text-emerald-500" />
          <StatCard title="Prizes Won" value="$1,850" subtitle="5 Badges earned" icon={<MdWorkspacePremium />} />
        </div>

        {/* Participations Table */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
          <div className="xl:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <MdHistory className="text-primary" />
                Played Contests
              </h2>
              <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg text-slate-500">
                <MdFilterList size={20} />
              </button>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                    <tr>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Contest Title</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Rank</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Score</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Rewards</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {participations.map((p, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="px-6 py-5">
                          <div>
                            <p className="font-bold text-slate-900 dark:text-slate-100">{p.title}</p>
                            <p className="text-xs text-slate-500">{p.subtitle}</p>
                          </div>
                        </td>
                        <td className="px-6 py-5 text-sm text-slate-500">{p.date}</td>
                        <td className="px-6 py-5">
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-primary text-xs font-bold">
                            {p.rank} <span className="text-slate-400 font-normal">/ {p.total}</span>
                          </div>
                        </td>
                        <td className="px-6 py-5 text-right font-mono text-sm font-bold text-primary">{p.score}</td>
                        <td className="px-6 py-5">
                          {p.rewardIcon && <div className="flex gap-1"><span className={`${p.rewardColor} text-lg`}>{p.rewardIcon}</span><span className="text-xs font-medium text-slate-600 dark:text-slate-400">{p.rewardAmount}</span></div>}
                          {!p.rewardIcon && <span className="text-[10px] font-bold text-slate-400 uppercase">{p.rewardAmount}</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Performance Trend + Next Challenge */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold flex items-center gap-2">
                <MdShowChart className="text-primary" />
                Performance Trend
              </h2>
              <div className={cardClasses()}>
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Ranking Progress</p>
                    <p className="text-lg font-bold">Last 6 Months</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-800"></div>
                  </div>
                </div>
                <div className="h-48 flex items-end justify-between gap-1 relative mb-6">
                  <div className="absolute inset-0 flex flex-col justify-between py-2 border-l border-slate-100 dark:border-slate-800">
                    <div className="w-full h-px bg-slate-50 dark:bg-slate-800"></div>
                    <div className="w-full h-px bg-slate-50 dark:bg-slate-800"></div>
                    <div className="w-full h-px bg-slate-50 dark:bg-slate-800"></div>
                    <div className="w-full h-px bg-slate-50 dark:bg-slate-800"></div>
                  </div>
                  <div className="relative w-full h-full flex items-end justify-around px-4">
                    <div className="w-3 bg-primary/20 rounded-t-full h-[30%]"></div>
                    <div className="w-3 bg-primary/40 rounded-t-full h-[45%]"></div>
                    <div className="w-3 bg-primary/60 rounded-t-full h-[40%]"></div>
                    <div className="w-3 bg-primary/80 rounded-t-full h-[65%]"></div>
                    <div className="w-3 bg-primary rounded-t-full h-[85%]"></div>
                    <div className="w-3 bg-primary rounded-t-full h-[75%]"></div>
                  </div>
                </div>
                <div className="flex justify-around px-4 text-[10px] font-bold text-slate-400 uppercase">
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                  <span>Oct</span>
                </div>
                <div className="mt-10 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                  <p className="text-xs text-slate-500 mb-1 italic">Pro Insight:</p>
                  <p className="text-sm font-medium">Your ranking has improved by <span className="text-primary font-bold">18%</span> since August after participating in frontend-specific tracks.</p>
                </div>
              </div>
            </div>

            {/* Next Challenge */}
            <div className="bg-gradient-to-br from-primary to-cyan-600 rounded-2xl p-6 text-white shadow-lg shadow-cyan-500/20">
              <h3 className="font-bold text-lg mb-2">Next Challenge</h3>
              <p className="text-white/80 text-sm mb-4">React Performance Optimization starts in 24 hours. You're qualified for the Pro track!</p>
              <button className="w-full py-3 bg-white text-primary rounded-xl font-bold text-sm hover:bg-slate-50 transition-colors">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// StatCard component
function StatCard({ title, value, subtitle, icon, trend, valueColor, trendColor }) {
  return (
    <div className={cardClasses()}>
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{title}</span>
        <span className="text-primary/50 group-hover:text-primary transition-colors">{icon}</span>
      </div>
      <div className={`text-3xl font-black ${valueColor || ""}`}>{value}</div>
      {subtitle && <div className="text-xs text-slate-400 font-bold mt-2">{subtitle}</div>}
      {trend && (
        <div className={`text-xs font-bold mt-2 flex items-center gap-1 ${trendColor || "text-emerald-500"}`}>
          <MdAnalytics className="text-sm" />
          {trend}
        </div>
      )}
    </div>
  );
}