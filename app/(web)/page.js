"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B1423] to-[#0E1A2D] text-white">

      {/* ================= NAVBAR ================= */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-white/10">
        <h1 className="text-lg font-bold text-blue-500">COMMUNITY-HUB</h1>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <Link href="#">Articles</Link>
          <Link href="#">Portfolio</Link>
          <Link href="#">Contests</Link>
          <Link href="#">Leaderboard</Link>
        </div>

        <div className="flex gap-3 text-sm">
          <button className="text-gray-300 hover:text-white">Login</button>
          <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="text-center py-24 px-6">
        <p className="text-blue-400 text-xs mb-4 tracking-widest">
          WELCOME TO THE CREATIVE HUB
        </p>

        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Writing, Competing, <br />
          <span className="text-blue-500">And Winning</span>
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          The ultimate platform for writers and gamers to showcase their craft,
          climb the ranks, and earn rewards.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700">
            Get Started Free
          </button>
          <button className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10">
            View Active Contests
          </button>
        </div>
      </section>

      {/* ================= FEATURED ARTICLES ================= */}
      <section className="px-8 py-16 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-xl font-semibold">Featured Articles</h3>
          <Link href="#" className="text-blue-400 text-sm">
            View All →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-[#111C2E] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                alt="Article"
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <h4 className="font-semibold mb-2">
                  The Evolution of Modern Innovation
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  Explore how technology has transformed industries.
                </p>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <img
                    src="https://i.pravatar.cc/30"
                    className="w-6 h-6 rounded-full"
                    alt=""
                  />
                  Alex Turner
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONTEST + LEADERBOARD ================= */}
      <section className="px-8 py-16 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        {/* Active Contests */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold mb-6">Active Contests</h3>

          <div className="space-y-4">
            <div className="bg-[#111C2E] p-6 rounded-2xl flex justify-between items-center">
              <div>
                <h4 className="font-semibold">Monthly Flash Fiction</h4>
                <p className="text-gray-400 text-sm">
                  Submit your story • Prize ₹2000
                </p>
              </div>
              <button className="bg-blue-600 px-4 py-2 rounded-lg text-sm">
                Join
              </button>
            </div>

            <div className="bg-[#111C2E] p-6 rounded-2xl flex justify-between items-center">
              <div>
                <h4 className="font-semibold">Indie Speedrun Saturday</h4>
                <p className="text-gray-400 text-sm">
                  Compete & win rewards
                </p>
              </div>
              <button className="bg-blue-600 px-4 py-2 rounded-lg text-sm">
                Join
              </button>
            </div>

            <div className="bg-[#111C2E] p-6 rounded-2xl flex justify-between items-center">
              <div>
                <h4 className="font-semibold">Character Design Sprint</h4>
                <p className="text-gray-400 text-sm">
                  Showcase your creativity
                </p>
              </div>
              <button className="bg-gray-600 px-4 py-2 rounded-lg text-sm">
                Closed
              </button>
            </div>
          </div>
        </div>

        {/* Leaderboard */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Daily Top 5</h3>

          <div className="bg-[#111C2E] rounded-2xl p-6 space-y-4">
            {["DevMaster", "PixelPro", "LearningSphere", "Voyager99", "NovaTech"].map(
              (user, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-sm">
                    {i + 1}. {user}
                  </span>
                  <span className="text-green-400 text-sm">
                    +{100 - i * 10}
                  </span>
                </div>
              )
            )}

            <button className="w-full mt-4 text-blue-400 text-sm">
              View Full Leaderboard
            </button>
          </div>
        </div>
      </section>

      {/* ================= RISING CREATORS ================= */}
      <section className="px-8 py-16 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-xl font-semibold">Rising Creators</h3>
          <Link href="#" className="text-blue-400 text-sm">
            Browse Portfolios →
          </Link>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="bg-[#111C2E] p-6 rounded-2xl min-w-[180px] text-center"
            >
              <img
                src={`https://i.pravatar.cc/100?img=${item}`}
                className="w-16 h-16 rounded-full mx-auto mb-4"
                alt=""
              />
              <h4 className="text-sm font-semibold">Creator {item}</h4>
              <button className="mt-3 text-xs bg-blue-600 px-3 py-1 rounded-lg">
                Follow
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 text-center py-6 text-gray-400 text-sm">
        © 2026 CommunityHub. All rights reserved.
      </footer>

    </div>
  );
}
