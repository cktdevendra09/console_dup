"use client";

import Link from "next/link";
import HeroSection from "./components/hero/HeroSectionUI";

export default function Home() {
  const articles = [
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAcEMNEQKRiTem7Sz9q6E293sEx4eYyCjkldXstetsG2pnHqtxZ0jMrRdAsRzrfNCC081Li4eFCzh9nbf6NEeBRIr3Ce9Bk0E6ANqMsIrmaw6Zf45z3eHMZfU2N1UqLvNANW8JaIShCxvEBQCUZTRY0Y45BbEQtuhKWoTOnllV9aBYdcDUIHdLSkgOjRS7WP3O4lWnaswKyi3cb7HcyAQhS3yvJ_Kb0odsp3MzSal0JwbrLZM1KHvhcER2tMtwKY6wRLTFhN2WX504",
      alt: "Workplace technology",
      category: "Technology",
      date: "Oct 24, 2023",
      readTime: "8 min read",
      title: "The Future of Generative Systems in Modern UI Frameworks",
      description:
        "Exploring how AI is reshaping the way designers approach component libraries, styling systems, and user experience paradigms in the next generation of web development.",
      href: "#",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB90wQcTWMJHGMciKlZ9bzuCoX3Mkbj0hd34_dlfB5kBEGZVnhrC2GZG0WdEOfHtPaE4FxZxBCpr4cu2yWiYDjoO6ZD3A_6P_fv2bBU9FQYbPObIfgh4AUSADO2uqgcWQ3izNsOtQnIX01VAS5HQ2J9Q41_k1ucoWGKaR6ZQSCI8BlyROKpQraFHsa266b33N2LWNle5yMYHgDYpHt9mZ1_B2ldV1s94TQ3TKvG2dBqahoIUxl1pBOy3XbCyXBPs-ijSaMu2FYikew",
      alt: "Vintage computer hardware",
      category: "Design",
      date: "Oct 18, 2023",
      readTime: "12 min read",
      title: "Minimalism vs. Brutalism: The Great Design Conflict of 2024",
      description:
        "A new wave of brutalist aesthetics challenges the clean, minimalist status quo that has dominated for a decade.",
      href: "#",
    },
  ];
  return (
    <div className="min-h-screen  text-dark">

      {/* ================= HERO ================= */}
      <HeroSection/>

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
            <div key={item} className="bg-white rounded-2xl overflow-hidden">
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
            <div className="bg-white p-6 rounded-2xl flex justify-between items-center">
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

            <div className="bg-white p-6 rounded-2xl flex justify-between items-center">
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

            <div className="bg-white p-6 rounded-2xl flex justify-between items-center">
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

          <div className="bg-white rounded-2xl p-6 space-y-4">
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
              className="bg-white p-6 rounded-2xl min-w-[180px] text-center"
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
