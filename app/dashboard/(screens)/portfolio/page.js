"use client";

import { useState } from "react";
import {
  CheckCircleIcon,
  EyeIcon,
  TrashIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

export default function ManageAssetsPage() {
  const tabs = ["Projects", "Achievements", "Startups"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const projects = [
    {
      title: "CloudStack Platform",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCu9Vp7DoUyk20IhRMJ-279zpH4YV7CNKNTm37oI_FlDtzKXMSSKKUKH77MmW6leVVjH8tx8tGb92Mm793OGNnXxTrKhsEi_zeJZkerLv3ugIsVSgGHPo8_v7CgYMSCNNBFTae492UE1dCdWICFJT1AK9v-K04I6P3gLszI5Bt7IMIak6TG2MHpC2Vpew2zwEf_YApNsSotNYzPdg1GpofUWCg2a2VewTtdLd2hGoi7bcnCbEmlom2TYEAkLNjXYBZxRPdMLTxBk6lo",
      status: "Public",
    },
    {
      title: "Neural Engine SDK",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDI25hWVhDEJmTRupE3W2kr5qfXt9uxjRekYyucrgYkbvz6Iw3lx5CILsec-WTf2dtq9owQ6lr8XruvD5u2uJ56pTcPsJg9zbTY5RJmrXs5gefkt9MGpecvgBMK3di4DZ5WA0g_QC2RjVt99HfrqUEexZFd8M3msIGry-BFQ0w1o3lqxP871M_aTsxnzVx_Kwohd-YFGkDhaAQqT3Swi8CoUqXiLj1x-0WFobGZ8u7RB7NgVNtHc5snKMEpsp9lO1aNDNdZUTtP3AM3",
      status: "Private",
    },
    {
      title: "Decentralized Auth",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBN0IZuOTcl5uCb12Br1J3kycm2eHjvf-gSnxcTJNz-dl8K-mR89VLAm1k1U65gp_JASMA1kySlPFFuftTPafqxvjtC5Kh-8Xo1YYkYSyvNM9B0110BdFPWPjMsr7fa94d1FqyJ7Q0LyCM8te9HLZ4rMkbYgW4ge_3UFKYevW0-d0omW42rH_P5buRFcEVnTQ9bxAytQjnydCotEYxmxJqhmhn_jLF5GuWVd2MBOfEVNjNQ12LalzQDzeLjDUi6Ns4LdS58cOJMEvJM",
      status: "Public",
    },
  ];

  const quickTips = [
    {
      title: "Use high-res thumbnails",
      desc: "Projects with custom covers get 60% more clicks from recruiters.",
    },
    {
      title: "Link your Github",
      desc: "Syncing your repositories adds live star counts to your project cards.",
    },
    {
      title: "Add Case Studies",
      desc: "Detailed descriptions of your process help prove your problem-solving skills.",
    },
  ];

  return (
    <div className="flex flex-1 overflow-hidden">

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Tabs */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 px-6 sm:px-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-all ${
                activeTab === tab
                  ? "border-primary text-primary"
                  : "border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden group hover:shadow-lg transition-all"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        proj.status === "Public"
                          ? "bg-white/90 dark:bg-slate-800/90 text-primary border border-primary/20"
                          : "bg-slate-900/80 text-white border border-white/20 backdrop-blur-sm"
                      }`}
                    >
                      {proj.status}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-4">{proj.title}</h3>

                  <div className="flex items-center gap-2">

                    {/* Apply */}
                    <button className="flex-1 py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs font-semibold flex items-center justify-center gap-2 transition-colors">
                      <CheckCircleIcon className="w-4 h-4" />
                      Apply
                    </button>

                    {/* Preview */}
                    <button className="flex-1 py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs font-semibold flex items-center justify-center gap-2 transition-colors">
                      <EyeIcon className="w-4 h-4" />
                      Preview
                    </button>

                    {/* Delete */}
                    <button className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-500 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors flex items-center justify-center">
                      <TrashIcon className="w-4 h-4" />
                    </button>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <aside className="w-80 border-l border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm p-8 hidden xl:block shrink-0 overflow-y-auto custom-scrollbar">

        {/* Profile Strength */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">
              Profile Strength
            </h2>
            <span className="text-primary font-bold">85%</span>
          </div>

          <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full mb-6">
            <div className="bg-primary h-full rounded-full w-[85%]"></div>
          </div>

          <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-4 border border-primary/20">
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Complete your <strong>Work History</strong> to reach All-Star
              status and increase visibility by 4x.
            </p>
          </div>
        </div>

        {/* Quick Tips */}
        <div>
          <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
            <LightBulbIcon className="w-5 h-5 text-primary" />
            Quick Tips
          </h2>

          <div className="space-y-4">
            {quickTips.map((tip, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700"
              >
                <h4 className="text-sm font-bold mb-1">{tip.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {tip.desc}
                </p>
              </div>
            ))}
          </div>

          <button className="w-full mt-8 py-3 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800 text-slate-400 font-medium text-sm hover:border-primary hover:text-primary transition-all">
            Share Public Portfolio
          </button>
        </div>
      </aside>
    </div>
  );
}
