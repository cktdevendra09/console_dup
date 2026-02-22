"use client";

import { cardClasses } from "@/app/dashboard/components/Comman/DashboardUiUtility";
import {
  BookmarkIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";

export default function ArticleDetailsPage() {
  return (
    <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto w-full px-4 lg:px-8 py-12">

      {/* Main Column */}
      <div className="flex-1 w-full lg:max-w-4xl space-y-12">

        {/* Article Card */}
        <article className={cardClasses("p-8")}>

          {/* Header */}
          <header className="mb-10 space-y-6">

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Mastering Micro-frontends with React and Module Federation
            </h1>

            {/* Meta Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-y border-slate-200 dark:border-slate-800 py-6">

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  alt="Author"
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-slate-100 dark:ring-slate-800"
                  src="https://randomuser.me/api/portraits/men/11.jpg"
                />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    Liam Henderson
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Senior Frontend Engineer • Oct 24, 2023
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <button className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-slate-700 transition">
                  <BookmarkIcon className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-slate-700 transition">
                  <ShareIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </header>

          {/* Hero Image */}
          <div>
            <img
              alt="Hero"
              className="w-full h-[300px] md:h-[420px] object-cover rounded-2xl shadow-lg"
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            />
          </div>

          {/* Body */}
          <div className="mt-10 space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed">

            <p>
              In the ever-evolving landscape of web development, scaling
              large-scale applications remains a formidable challenge.
              Micro-frontends allow breaking frontend monoliths into
              smaller, more manageable pieces.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Why Module Federation?
            </h2>

            <p>
              Webpack 5's Module Federation allows multiple builds to form a
              single application at runtime. Shared dependencies load only once,
              enabling independent updates.
            </p>

            <pre className="bg-slate-950 rounded-xl p-5 text-sm overflow-x-auto text-cyan-400">
              {`// webpack.config.js
              new ModuleFederationPlugin({
                name: "app_main",
                remotes: {
                  auth: "auth@http://localhost:3001/remoteEntry.js",
                },
                shared: { react: { singleton: true } },
              });`}
            </pre>

          </div>
        </article>

        {/* Comments Section */}
        <div className={cardClasses()}>

          <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">
            Comments (84)
          </h3>

          {/* Comment Input */}
          <div className="flex gap-4">
            <img
              className="w-12 h-12 rounded-full object-cover"
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User"
            />
            <textarea
              placeholder="Add to the discussion..."
              className="flex-1 bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-indigo-500/30 outline-none resize-none min-h-[120px]"
            />
          </div>

          {/* Comment List */}
          <div className="mt-12 space-y-8">

            {/* Comment 1 */}
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full object-cover"
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="User"
              />
              <div className="flex-1 bg-slate-50 dark:bg-slate-800 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    Daniel Morris
                  </h4>
                  <span className="text-xs text-slate-500">
                    2 hours ago
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  This article explains Module Federation in such a clean way.
                  Really loved the webpack example.
                </p>
              </div>
            </div>

            {/* Comment 2 */}
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full object-cover"
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="User"
              />
              <div className="flex-1 bg-slate-50 dark:bg-slate-800 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    Sophia Carter
                  </h4>
                  <span className="text-xs text-slate-500">
                    5 hours ago
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Micro-frontends are game changing for large teams.
                  We recently migrated our dashboard using this exact approach.
                </p>
              </div>
            </div>

            {/* Comment 3 */}
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full object-cover"
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="User"
              />
              <div className="flex-1 bg-slate-50 dark:bg-slate-800 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    Ethan Walker
                  </h4>
                  <span className="text-xs text-slate-500">
                    1 day ago
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Curious — how do you handle shared state across micro-frontends?
                  Redux or Context API?
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}