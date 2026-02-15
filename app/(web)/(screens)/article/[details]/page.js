export default function QuizPage() {
  return (
    <div className="bg-white text-black antialiased font-serif">

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[100]">
        <div className="h-full bg-black w-[60%]"></div>
      </div>

      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/5">
        <div className="max-w-[1600px] mx-auto px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <a className="text-2xl font-bold tracking-tighter uppercase">Archive.</a>

            <div className="hidden lg:flex space-x-8 text-[10px] uppercase tracking-[0.2em] font-medium text-black/50">
              <a className="hover:text-black transition-colors">Contest Home</a>
              <a className="hover:text-black transition-colors">Rules</a>
              <a className="hover:text-black transition-colors">Help</a>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button className="text-[10px] uppercase tracking-[0.2em] text-black/50 hover:text-black">
              Exit Session
            </button>

            <div className="w-px h-4 bg-black/10"></div>

            <div className="flex items-center space-x-3">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
                JD
              </span>
              <div className="w-8 h-8 bg-black flex items-center justify-center text-white text-sm">
                👤
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* ================= MAIN ================= */}
      <main className="max-w-[1600px] mx-auto px-8 pt-16 pb-32">
        <div className="lg:grid lg:grid-cols-12 gap-16">

          {/* ================= QUESTION SECTION ================= */}
          <div className="lg:col-span-8">
            <div className="max-w-3xl">

              <header className="mb-12">
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/40">
                    Technical Assessment
                  </span>
                  <div className="h-px w-8 bg-black/10"></div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em]">
                    Question 12 of 20
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl font-medium leading-[1.1] tracking-tight">
                  Which architectural pattern is most effective for ensuring
                  eventual consistency in a distributed microservices
                  environment?
                </h1>
              </header>

              {/* Options */}
              <div className="space-y-4">

                {[
                  "Synchronous REST-based orchestration with 2PC",
                  "Event-driven choreography via persistent message brokers",
                  "Centralized relational database with global locking",
                  "Direct RPC communication with retry-on-failure logic"
                ].map((option, index) => (
                  <div
                    key={index}
                    className={`border border-black/10 p-8 cursor-pointer transition-all duration-300 hover:border-black ${
                      index === 1 ? "bg-black text-white border-black" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <span className="text-[10px] font-bold">
                          {String.fromCharCode(65 + index)}
                        </span>
                        <p className="text-xl tracking-tight">{option}</p>
                      </div>
                      {index === 1 && <span>✔</span>}
                    </div>
                  </div>
                ))}

              </div>

              {/* Navigation Buttons */}
              <div className="mt-16 flex items-center justify-between">
                <button className="text-[10px] uppercase tracking-[0.3em] text-black/40 hover:text-black">
                  ← Previous
                </button>

                <button className="bg-black text-white px-10 py-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-black/80 transition-all">
                  Confirm Answer
                </button>
              </div>

            </div>
          </div>

          {/* ================= SIDEBAR ================= */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-32 space-y-12">

              {/* Timer */}
              <div className="border-l border-black/10 pl-10">
                <h5 className="text-[10px] uppercase tracking-[0.4em] text-black/40 font-bold mb-6">
                  Contest Dashboard
                </h5>

                <span className="text-[9px] uppercase tracking-[0.2em] text-black/30">
                  Time Remaining
                </span>

                <div className="text-8xl font-light tracking-tighter leading-none mb-4">
                  14:38
                </div>

                <div className="h-1 bg-black/5 w-full relative">
                  <div className="absolute inset-0 bg-black w-2/3"></div>
                </div>
              </div>

              {/* Score */}
              <div className="border-l border-black/10 pl-10">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-black/30 block mb-1">
                      Current Score
                    </span>
                    <span className="text-3xl font-bold tracking-tight">
                      1,240
                    </span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-black/30 block mb-1">
                      Rank
                    </span>
                    <span className="text-3xl font-bold tracking-tight">
                      #12
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </aside>

        </div>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-[1600px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] text-white/30 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-8">
            <span className="text-white font-bold tracking-tighter">
              Archive.
            </span>
            <p>© 2024 Global Technical Contest</p>
          </div>

          <div className="flex items-center space-x-8">
            <a className="hover:text-white">Privacy Policy</a>
            <a className="hover:text-white">Terms of Entry</a>
            <a className="hover:text-white">Contact Proctor</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
