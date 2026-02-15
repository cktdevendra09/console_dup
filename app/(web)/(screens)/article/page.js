export default function Home() {
  return (
    <div className="font-serif antialiased bg-white text-black">

      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 bg-white border-b border-black/10">
        <div className="max-w-[1600px] mx-auto px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <a className="text-2xl font-bold tracking-tighter uppercase" href="#">
              Archive.
            </a>

            <div className="hidden lg:flex space-x-8 text-[10px] uppercase tracking-[0.2em] font-medium text-black/50">
              <a className="hover:text-black transition-colors" href="#">Portfolios</a>
              <a className="hover:text-black transition-colors" href="#">Manifesto</a>
              <a className="hover:text-black transition-colors" href="#">Contact</a>
            </div>
          </div>

          <button className="border border-black px-6 py-2 text-[10px] uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all">
            Subscribe
          </button>
        </div>
      </nav>

      {/* ================= MAIN ================= */}
      <main className="max-w-[1600px] mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* ================= LEFT SIDEBAR ================= */}
          <aside className="lg:col-span-2 hidden lg:block">
            <div className="sticky top-32 space-y-12">
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-black/30">
                  Filters
                </h3>

                <nav className="flex flex-col space-y-4 text-xs uppercase tracking-widest">
                  <a className="font-bold">All Articles</a>
                  <a className="text-black/40 hover:text-black transition-colors">Engineering</a>
                  <a className="text-black/40 hover:text-black transition-colors">Design</a>
                  <a className="text-black/40 hover:text-black transition-colors">AI & Machine</a>
                  <a className="text-black/40 hover:text-black transition-colors">Philosophy</a>
                </nav>
              </div>

              <div className="pt-8 border-t border-black/10">
                <input
                  className="w-full border border-black px-4 py-3 text-[10px] uppercase tracking-widest focus:outline-none"
                  placeholder="SEARCH ARCHIVE"
                />
              </div>
            </div>
          </aside>

          {/* ================= CENTER CONTENT ================= */}
          <div className="lg:col-span-7 space-y-24">

            {/* Featured Article */}
            <section className="space-y-10">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX4H5VB4m_pd-Qvsl9IQnG_A5MfjMY6tNrsWsALdrYPnY9mfzdYH5Z-Gt9NUYGSGz2QpeWw206rnMjDgiIszfph3-NSLSeEYC0djO1Fh_I8G4qr-DjDr1gFB-sIZoD9kihevBmpB3Uuv6xNmUNkuw_2JDFQDIXzk24GOKOOqo0a9j5e8ib-On_Y5jaonLRRrdGfx9XLMiQzFpykeVTC8Z1MPLNTnBE0QY4Rj9HfYTOgavrFk2scMJvgP2n-BnvQKpHa2e9z5DWlzVL"
                  alt="Featured"
                  className="w-full h-full object-cover grayscale brightness-90"
                />
              </div>

              <div className="max-w-2xl">
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                  Latest Edition
                </div>

                <h1 className="text-5xl font-medium leading-[1.1] tracking-tight mb-6 italic">
                  The Future of Deterministic AI Systems
                </h1>

                <p className="text-xl text-black/60 font-light leading-relaxed mb-8">
                  Exploring the intersection of Large Language Models and formal verification in modern software engineering.
                </p>

                <div className="flex items-center space-x-8 pb-4 border-b border-black/10">
                  <span className="text-[10px] uppercase tracking-widest text-black/40">
                    October 24, 2023
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-black/40">
                    12 min read
                  </span>
                </div>
              </div>
            </section>

            {/* Recent Entries */}
            <section>
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold">
                  Recent Entries
                </h2>
                <div className="h-px flex-grow ml-8 bg-black/10"></div>
              </div>

              <div className="divide-y divide-black/10">

                {[
                  "Reclaiming Your Time: Deep Work for Modern Engineers",
                  "The Aesthetics of Minimalist Web Design",
                  "Understanding Rust Ownership through Analogy"
                ].map((title, i) => (
                  <article key={i} className="py-12 group">
                    <div className="grid grid-cols-4 gap-8">
                      <div className="col-span-3">
                        <span className="text-[10px] text-black/40 uppercase tracking-widest block mb-4">
                          Sep 2023 — Engineering
                        </span>

                        <h3 className="text-3xl font-medium group-hover:italic transition-all duration-300 mb-4 cursor-pointer">
                          {title}
                        </h3>

                        <p className="text-black/50 text-lg font-light leading-relaxed max-w-xl">
                          Practical strategies and insights from modern software systems.
                        </p>
                      </div>
                    </div>
                  </article>
                ))}

              </div>

              <div className="mt-16">
                <button className="w-full border border-black/10 py-6 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-black hover:text-white transition-all">
                  Load More Archive Entries
                </button>
              </div>
            </section>
          </div>

          {/* ================= RIGHT SIDEBAR ================= */}
          <aside className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-32">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-12 text-black/30">
                Popular This Week
              </h3>

              <div className="space-y-12">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="flex items-start space-x-6 group cursor-pointer">
                    <span className="text-5xl font-black opacity-20 group-hover:opacity-100 transition-opacity">
                      0{num}
                    </span>

                    <div>
                      <h4 className="text-xl font-bold group-hover:underline">
                        Popular Article Title
                      </h4>
                      <p className="text-[10px] uppercase tracking-widest text-black/40">
                        5 min read — Engineering
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Newsletter */}
              <div className="mt-20 p-8 border border-black/10 bg-black/5">
                <h5 className="text-xs font-bold uppercase tracking-widest mb-4">
                  Newsletter
                </h5>

                <p className="text-sm text-black/60 mb-6 leading-relaxed">
                  Join 15,000+ subscribers for weekly editorial insights.
                </p>

                <input
                  className="w-full bg-white border border-black/10 px-4 py-3 text-[10px] uppercase tracking-widest focus:outline-none mb-4"
                  placeholder="EMAIL ADDRESS"
                  type="email"
                />

                <button className="w-full bg-black text-white py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black/80 transition-colors">
                  Sign Up
                </button>
              </div>

            </div>
          </aside>

        </div>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bg-black text-white pt-24 pb-12 mt-24">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="pt-8 border-t border-white/10 flex justify-between items-center text-[10px] uppercase tracking-[0.3em] text-white/30">
            <p>© 2024 Archive Editorial. All Rights Reserved.</p>
            <p>Built for the Modern Web.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
