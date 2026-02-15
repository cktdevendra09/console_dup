"use client";

export default function PurchaseSuccess() {
  return (
    <div className="bg-slate-50 dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col relative overflow-x-hidden">
      
      {/* Confetti */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="confetti-piece confetti-cyan top-[10%] left-[5%] rotate-12"></div>
        <div className="confetti-piece confetti-white top-[15%] left-[15%] rotate-45"></div>
        <div className="confetti-piece confetti-cyan top-[8%] right-[10%] -rotate-12"></div>
        <div className="confetti-piece confetti-white top-[20%] right-[15%] rotate-90"></div>
        <div className="confetti-piece confetti-cyan bottom-[15%] left-[10%] rotate-45"></div>
        <div className="confetti-piece confetti-white bottom-[10%] right-[5%] -rotate-12"></div>
        <div className="confetti-piece confetti-cyan top-[40%] right-[2%] rotate-12"></div>
        <div className="confetti-piece confetti-white top-[60%] left-[3%] -rotate-45"></div>
      </div>


      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6 z-10">
        <div className="max-w-xl w-full text-center space-y-8">
          
          {/* Success Message */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6 success-checkmark">
              <span className="material-symbols-outlined text-primary text-6xl leading-none">check_circle</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">Purchase Successful!</h1>
            <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              Woohoo! Your profile is about to get a major upgrade. We've sent your receipt to <span className="font-semibold text-slate-900 dark:text-slate-100">augusta.ryan@devflow.com</span>.
            </p>
          </div>

          {/* Product Card */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-none relative group">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-full md:w-48 h-48 rounded-3xl overflow-hidden border-4 border-slate-50 dark:border-slate-800 shrink-0 shadow-lg">
                <img
                  alt="Cyber Grid Pro"
                  className="w-full h-full object-cover transform transition-transform group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu9Vp7DoUyk20IhRMJ-279zpH4YV7CNKNTm37oI_FlDtzKXMSSKKUKH77MmW6leVVjH8tx8tGb92Mm793OGNnXxTrKhsEi_zeJZkerLv3ugIsVSgGHPo8_v7CgYMSCNNBFTae492UE1dCdWICFJT1AK9v-K04I6P3gLszI5Bt7IMIak6TG2MHpC2Vpew2zwEf_YApNsSotNYzPdg1GpofUWCg2a2VewTtdLd2hGoi7bcnCbEmlom2TYEAkLNjXYBZxRPdMLTxBk6lo"
                />
              </div>
              <div className="flex-1 text-center md:text-left space-y-4">
                <div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold bg-primary/10 text-primary uppercase tracking-widest mb-2">
                    Lifetime License
                  </div>
                  <h2 className="text-2xl font-bold">Cyber Grid Pro</h2>
                  <p className="text-slate-500">Designed by @neon_dev</p>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-400">Dark Mode Optimized</span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-400">Custom Icons</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto pt-4">
            <button className="w-full py-4 bg-primary text-white rounded-2xl font-bold text-lg hover:brightness-110 shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2">
              Apply Theme Now
              <span className="material-symbols-outlined">magic_button</span>
            </button>
            <button className="w-full py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-2xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2">
              Go to Library
              <span className="material-symbols-outlined">grid_view</span>
            </button>
          </div>

          <p className="text-xs text-slate-400 pt-4 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-sm">verified</span>
            Verified Transaction ID: #DEV-8932-TX-2024
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm mt-auto">
        <div className="max-w-7xl mx-auto px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2024 DevFlow Marketplace. All rights reserved.</p>
          <div className="flex gap-8">
            <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-primary transition-colors" href="#">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}