"use client";

export default function Checkout() {
  return (
    <div className="bg-slate-50 dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      {/* Header */}
    

      {/* Main */}
      <main className="flex-1 max-w-7xl mx-auto w-full p-6 md:p-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column */}
          <div className="lg:w-[65%] space-y-10">
            <div>
              <h2 className="text-2xl font-bold mb-2">Checkout</h2>
              <p className="text-slate-500">
                Complete your purchase to customize your developer profile.
              </p>
            </div>

            {/* Payment Method */}
            <section className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                Select Payment Method
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="p-6 rounded-2xl border-2 border-primary bg-primary/5 flex flex-col items-center gap-3 transition-all">
                  <span className="material-symbols-outlined text-3xl text-primary">
                    credit_card
                  </span>
                  <span className="text-sm font-bold">Credit Card</span>
                </button>
                <button className="p-6 rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:border-primary/50 flex flex-col items-center gap-3 transition-all bg-white dark:bg-slate-900">
                  <span className="material-symbols-outlined text-3xl text-slate-400">
                    account_balance_wallet
                  </span>
                  <span className="text-sm font-bold">PayPal</span>
                </button>
                <button className="p-6 rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:border-primary/50 flex flex-col items-center gap-3 transition-all bg-white dark:bg-slate-900">
                  <span className="material-symbols-outlined text-3xl text-slate-400">
                    contactless
                  </span>
                  <span className="text-sm font-bold">Apple Pay</span>
                </button>
              </div>
            </section>

            {/* Card Details */}
            <section className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">security</span>
                Card Details
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                    Card Number
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                      payments
                    </span>
                    <input
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-primary search-glow transition-all outline-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full px-4 py-3.5 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-primary search-glow transition-all outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                      CVV
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="***"
                        className="w-full px-4 py-3.5 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-primary search-glow transition-all outline-none"
                      />
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 cursor-pointer">
                        help
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="save-card"
                    className="rounded text-primary focus:ring-primary w-5 h-5 border-slate-300"
                  />
                  <label htmlFor="save-card" className="text-sm text-slate-500">
                    Save card information for future purchases
                  </label>
                </div>
              </div>
            </section>

            <div className="flex items-center gap-4 text-slate-400 px-2">
              <span className="material-symbols-outlined text-sm">lock</span>
              <p className="text-xs">
                Your payment data is encrypted with bank-level security. We never store your full card details.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-[35%]">
            <div className="sticky top-32 space-y-6">
              <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
                <div className="p-6 border-b border-slate-100 dark:border-slate-800">
                  <h3 className="font-bold text-lg">Order Summary</h3>
                </div>
                <div className="p-6 space-y-6">
                  <div className="flex gap-4">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shrink-0">
                      <img
                        alt="Cyber Grid Pro"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu9Vp7DoUyk20IhRMJ-279zpH4YV7CNKNTm37oI_FlDtzKXMSSKKUKH77MmW6leVVjH8tx8tGb92Mm793OGNnXxTrKhsEi_zeJZkerLv3ugIsVSgGHPo8_v7CgYMSCNNBFTae492UE1dCdWICFJT1AK9v-K04I6P3gLszI5Bt7IMIak6TG2MHpC2Vpew2zwEf_YApNsSotNYzPdg1GpofUWCg2a2VewTtdLd2hGoi7bcnCbEmlom2TYEAkLNjXYBZxRPdMLTxBk6lo"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="font-bold">Cyber Grid Pro</h4>
                      <p className="text-sm text-slate-500">by @neon_dev</p>
                      <div className="mt-2 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-primary/10 text-primary uppercase">
                        Lifetime License
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-500">Subtotal</span>
                      <span className="font-semibold">$12.00</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-500">Platform Fee</span>
                      <span className="font-semibold text-green-500">FREE</span>
                    </div>
                    <div className="pt-2">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Promo code"
                          className="flex-1 px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary/20"
                        />
                        <button className="px-4 py-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-sm font-bold rounded-xl hover:opacity-90 transition-all">
                          Apply
                        </button>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-end">
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                          Total Amount
                        </p>
                        <p className="text-3xl font-black text-slate-900 dark:text-slate-100">$12.00</p>
                      </div>
                      <span className="text-xs text-slate-400 font-medium">VAT Included</span>
                    </div>
                  </div>
                </div>
                <button className="w-full py-4 bg-primary text-white rounded-2xl font-bold text-lg hover:brightness-110 shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2">
                  Complete Purchase
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>

              <div className="p-6 bg-slate-100 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-800/50">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary">info</span>
                  <div>
                    <p className="text-sm font-bold">Money-back Guarantee</p>
                    <p className="text-xs text-slate-500 mt-1">
                      If you're not satisfied with the theme, request a full refund within 14 days of purchase.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-8 border-t border-slate-200 dark:border-slate-800">
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