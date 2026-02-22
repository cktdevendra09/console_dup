"use client";

import {
  PhotoIcon,
  LinkIcon,
  HeartIcon,
  ChatBubbleLeftIcon,
  BookmarkIcon,
  EllipsisHorizontalIcon,
  FireIcon,
} from "@heroicons/react/24/outline";
import { cardClasses } from "../../components/Comman/DashboardUiUtility";
import Link from "next/link";
import { ARTICLE_MENU } from "../../config/DashboardRoutes";

export default function ArticlesPage() {
  return (
    <div className=" ">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 px-4">
        
        {/* ================= LEFT COLUMN ================= */}
        <div className="flex-1 space-y-6">
          
          {/* Create Insight */}
          <div className={cardClasses()}>
            <div className="flex gap-4">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbBvof1zvAxYBPJrD7nE4yPvNTqgt5XE6NFSXXKy1fmnM8Uitp1pv2aAYZLtz-KiC4QOrmNzveOmg3kLm_lCVjbMIryf-nSYfq6uGp1zwKzpP3sw-Y2BxO2dpJPmCoWXW1zzTLA8W8K6OEGbag7vjifsHppv0c7S-tIxLTFyQvQXoW713IBHIGk4uJ70hfa8g7nEH5Aq86H_-QcuX4qNnDCjbAeiHScaqczcgW_y6vHoHeRldMcITV5Q61IRvJaZakoFDarREM0Rg1"
                className="w-10 h-10 rounded-full object-cover"
                alt="User"
              />

              <div className="flex-1">
                <textarea
                  placeholder="Share your technical insights..."
                  className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/20 resize-none min-h-[80px] outline-none"
                />

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <button className="flex items-center gap-2 hover:text-primary transition">
                      <PhotoIcon className="w-5 h-5" />
                      Add Image
                    </button>
                    <button className="flex items-center gap-2 hover:text-primary transition">
                      <LinkIcon className="w-5 h-5" />
                      Attach Link
                    </button>
                  </div>

                  <button className="px-5 py-2 bg-primary text-black rounded-full text-sm font-medium hover:bg-cyan-600 transition">
                    Post Insight
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ================= ARTICLE CARD ================= */}
          <article className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 space-y-5">
            
            {/* Author */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE40q-7zbJEE_ys4gHFmS3V58isdbfIwysMwTJSN6HL65LbmFFiuoCWrR0BH996mC2E_en2WIJgNL9C_elQmM8wcaJOrjFWytaAgh0VphxksSD8R2VAOa-TXKSXCx-pAyz0JzDZzxUZ-jNltx9ONDL2jssog38x1eDgiEepI1gRiSlELDcOkvJagfQRLTYo5fwo43OJIeoXC-9K0JuIhkleILiZmXeWOtJkQNH48OZYYF0fSWMPzA8ZJa6DfTnOmjGrvNXkgWJWx5W"
                  className="w-10 h-10 rounded-full object-cover"
                  alt="Author"
                />
                <div>
                  <p className="text-sm font-semibold">Liam Henderson</p>
                  <p className="text-xs text-slate-400 uppercase tracking-wide">
                    Senior Frontend Engineer • 2h ago
                  </p>
                </div>
              </div>

              <EllipsisHorizontalIcon className="w-5 h-5 text-slate-400 cursor-pointer" />
            </div>

            {/* Content */}
            <div>
              <Link href={ARTICLE_MENU.ARTICLE_DETAILS}>
              <h2 className="text-lg font-bold hover:text-primary transition cursor-pointer">
                Mastering Micro-frontends with React and Module Federation
              </h2>
              </Link>

              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                Exploring how to scale large applications by breaking them down
                into independently deployable units and leveraging Webpack
                Module Federation for seamless integration.
              </p>
            </div>

            {/* Interaction Bar */}
            <div className="flex items-center gap-6 text-sm text-slate-500 pt-3 border-t border-slate-100 dark:border-slate-800">
              <button className="flex items-center gap-2 hover:text-primary transition">
                <HeartIcon className="w-4 h-4" />
                128
              </button>

              <button className="flex items-center gap-2 hover:text-primary transition">
                <ChatBubbleLeftIcon className="w-4 h-4" />
                84 Comments
              </button>

              <button className="flex items-center gap-2 hover:text-primary transition ml-auto">
                <BookmarkIcon className="w-4 h-4" />
                Save
              </button>
            </div>
          </article>
        </div>

        {/* ================= RIGHT SIDEBAR ================= */}
        <div className="lg:w-80 space-y-6">
          
          {/* Trending Topics */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
            <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
              <FireIcon className="w-4 h-4 text-orange-500" />
              Trending Topics
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between hover:text-primary cursor-pointer">
                <span>#WebAssembly</span>
                <span className="text-slate-400 text-xs">2.4k</span>
              </div>
              <div className="flex justify-between hover:text-primary cursor-pointer">
                <span>#Microservices</span>
                <span className="text-slate-400 text-xs">1.9k</span>
              </div>
              <div className="flex justify-between hover:text-primary cursor-pointer">
                <span>#RustLang</span>
                <span className="text-slate-400 text-xs">1.2k</span>
              </div>
              <div className="flex justify-between hover:text-primary cursor-pointer">
                <span>#TailwindCSS</span>
                <span className="text-slate-400 text-xs">950</span>
              </div>
            </div>

            <button className="mt-4 w-full text-xs text-primary font-medium hover:underline">
              View All Trends
            </button>
          </div>

          {/* Top Contributors */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
            <h3 className="text-sm font-semibold mb-4">
              Top Contributors
            </h3>

            <div className="space-y-4">
              {["Sarah Chen", "David Kim", "Elena Rodriguez"].map(
                (name, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700" />
                      <p className="text-sm">{name}</p>
                    </div>
                    <button className="text-xs text-primary font-medium hover:underline">
                      Follow
                    </button>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
