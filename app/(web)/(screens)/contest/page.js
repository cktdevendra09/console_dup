export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f3] text-zinc-900 font-serif">

      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 bg-[#f5f5f3]/80 backdrop-blur border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

          <div className="flex items-center gap-12">
            <h1 className="text-lg tracking-widest font-semibold">
              NEXUS<span className="text-yellow-500">.</span>
            </h1>

            <nav className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.3em] font-medium">
              <a className="text-yellow-600 border-b border-yellow-600 pb-1">
                Contests
              </a>
              <a className="text-zinc-500 hover:text-black">History</a>
              <a className="text-zinc-500 hover:text-black">Marketplace</a>
              <a className="text-zinc-500 hover:text-black">About</a>
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-right hidden sm:block">
              <p className="text-[9px] uppercase tracking-[0.3em] text-zinc-400">
                Personal Balance
              </p>
              <p className="text-sm font-semibold">$4,280.50</p>
            </div>

            <div className="w-8 h-8 rounded-full bg-zinc-300" />
          </div>
        </div>
      </header>

      {/* ================= PAGE CONTENT ================= */}
      <main className="max-w-6xl mx-auto px-6 py-12">

        {/* ================= HERO ================= */}
        <section className="bg-black text-white rounded-md p-16 flex justify-between items-end mb-16 relative overflow-hidden">

          {/* Subtle grid lines */}
          <div className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 max-w-xl">
            <h2 className="text-6xl md:text-7xl font-bold leading-[0.9] tracking-tight">
              Play.<br />
              Compete.<br />
              Earn.
            </h2>

            <p className="text-zinc-400 mt-6 text-sm max-w-sm">
              The premier ecosystem for high-stakes digital competition and
              architectural thinking.
            </p>
          </div>

          <div className="relative z-10 text-right">
            <p className="text-yellow-500 text-[10px] uppercase tracking-[0.4em] mb-4">
              Total Platform Earnings
            </p>

            <h3 className="text-6xl md:text-7xl font-bold tracking-tight">
              1,240
              <span className="text-yellow-500">.</span>
            </h3>
          </div>
        </section>

        {/* ================= CONTENT GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2">

            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xs tracking-[0.3em] uppercase text-zinc-500">
                Active Opportunities
              </h3>

              <div className="flex gap-2">
                <button className="text-[10px] border px-3 py-1">
                  Filter
                </button>
                <button className="text-[10px] border px-3 py-1">
                  Sort
                </button>
              </div>
            </div>

            {/* Cards */}
            <div className="grid sm:grid-cols-2 gap-6">

              {/* Card */}
              {[
                {
                  title: "The Modernist Architecture Quiz",
                  prize: "$2,500 USD",
                },
                {
                  title: "Exclusive NFT Drop Challenge",
                  prize: "Vortex #02",
                },
                {
                  title: "Grandmaster Chess Sprint",
                  prize: "$800 USD",
                },
                {
                  title: "Crypto Analytics Bounty",
                  prize: "$5,000 USD",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-sm border border-zinc-200"
                >
                  <p className="text-[9px] uppercase tracking-[0.3em] text-yellow-600 mb-3">
                    Featured
                  </p>

                  <h4 className="font-semibold mb-3 leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-xs text-zinc-500 mb-6">
                    Validate your expertise and compete for exclusive rewards.
                  </p>

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold">
                      {item.prize}
                    </span>

                    <button className="bg-black text-white text-[10px] px-4 py-2">
                      Enter
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="bg-black text-white p-6 rounded-md h-fit">

            <h4 className="text-xs uppercase tracking-[0.3em] text-zinc-400 mb-6">
              Top Earners
            </h4>

            <div className="space-y-4">
              {[
                { name: "Elena Valdez", amount: "$12,450" },
                { name: "Marcus Thorne", amount: "$8,210" },
                { name: "Sasha Grey", amount: "$7,550" },
              ].map((user, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center border-b border-zinc-800 pb-3"
                >
                  <span className="text-sm">{user.name}</span>
                  <span className="text-yellow-500 text-sm">
                    {user.amount}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 border border-yellow-500 p-4 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-yellow-500 mb-2">
                Exclusive Status
              </p>
              <p className="text-xs text-zinc-400">
                Top 10 earners unlock special platform privileges.
              </p>
            </div>

          </aside>
        </div>
      </main>
    </div>
  );
}
