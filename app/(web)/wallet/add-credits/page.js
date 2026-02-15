"use client";

import { useState } from "react";

// Header Component
function Header() {
  return (
    <header className="h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <a className="flex items-center gap-2" href="#">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-xl">terminal</span>
          </div>
          <span className="text-xl font-bold tracking-tight">DevFlow</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Contests</a>
          <a className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Marketplace</a>
          <a className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Resources</a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
        </button>
        <div className="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-slate-800">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold">Augusta Ryan</p>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Pro Developer</p>
          </div>
          <img
            alt="Profile"
            className="w-9 h-9 rounded-full object-cover ring-2 ring-primary/20"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkEdEjkgAqbRAGQcEf6bA99dQkOKNRSv7EUC5Cv7LFH-zIB15M_84taRysyhreMGtQo0oVnnMduLu6cLZuYXQEqwfBS44Mtq0AfMXrJdnfX-Q-gt_aViv9LAY5dp9wnKbTOLSRGpW4oYbn582Fxe5msP0DzI-LUUbPj9zb0owcC7czLU5j9pUKrGeZpAbkWmiEoMzCslX5gF87K5qiopvHvMMiGU69ru57KSPP8PECKZxYwp7xkn0O5vTugXDysJwrbCWWqJf8Y4_V"
          />
        </div>
      </div>
    </header>
  );
}

// Sidebar Component
function Sidebar() {
  return (
    <aside className="w-64 border-r border-slate-200 dark:border-slate-800 p-6 hidden lg:block bg-white/50 dark:bg-slate-900/50">
      <nav className="space-y-2">
        <a className="sidebar-link" href="#">
          <span className="material-symbols-outlined">dashboard</span>
          Dashboard
        </a>
        <a className="sidebar-link active" href="#">
          <span className="material-symbols-outlined">account_balance_wallet</span>
          Wallet
        </a>
        <a className="sidebar-link" href="#">
          <span className="material-symbols-outlined">shopping_cart</span>
          Marketplace
        </a>
        <a className="sidebar-link" href="#">
          <span className="material-symbols-outlined">receipt_long</span>
          Transactions
        </a>
        <div className="pt-8 pb-4">
          <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Settings</p>
          <a className="sidebar-link" href="#">
            <span className="material-symbols-outlined">payments</span>
            Payment Methods
          </a>
          <a className="sidebar-link" href="#">
            <span className="material-symbols-outlined">settings</span>
            Preferences
          </a>
        </div>
      </nav>
    </aside>
  );
}

// Package Card Component
function PackageCard({ title, credits, price, features, isActive, badge }) {
  return (
    <div className={`package-card group ${isActive ? "active" : ""}`}>
      {isActive && (
        <div className="absolute top-4 right-4 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
          <span className="material-symbols-outlined text-white text-sm font-bold">check</span>
        </div>
      )}
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-white text-[10px] font-bold rounded-full uppercase tracking-widest">{badge}</div>
      )}
      <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{title}</p>
      <div className="flex items-baseline gap-1 mb-4">
        <span className="text-3xl font-black italic">{credits}</span>
        <span className="text-sm font-bold text-slate-400">Credits</span>
      </div>
      <div className="text-2xl font-bold mb-6">{price}</div>
      <div className="space-y-2">
        {features.map((f, i) => (
          <div key={i} className="flex items-center gap-2 text-xs text-slate-500">
            <span className="material-symbols-outlined text-emerald-500 text-sm">check_circle</span>
            {f}
          </div>
        ))}
      </div>
    </div>
  );
}

// Payment Method Button
function PaymentMethodBtn({ icon, title, subtitle, isActive }) {
  return (
    <button className={`payment-method-btn ${isActive ? "active" : ""}`}>
      <span className="material-symbols-outlined">{icon}</span>
      <div className="text-left">
        <p className="text-xs font-bold">{title}</p>
        <p className="text-[10px] opacity-70">{subtitle}</p>
      </div>
      <span className="material-symbols-outlined ml-auto text-sm">{isActive ? "radio_button_checked" : "radio_button_unchecked"}</span>
    </button>
  );
}

// Main Page
export default function AddCreditsPage() {
  const [customAmount, setCustomAmount] = useState(0);

  return (
    <div className="bg-slate-50 dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 md:p-10 overflow-y-auto">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="mb-8">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                <a className="hover:text-primary transition-colors" href="#">Digital Wallet</a>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                <span className="text-slate-900 dark:text-slate-100">Add Credits</span>
              </div>
              <h1 className="text-3xl font-black mb-2">Add Credits</h1>
              <p className="text-slate-500 text-sm">Top up your wallet to continue building and participating in contests.</p>
            </div>

            {/* Packages */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <PackageCard title="Starter" credits="500" price="$50.00" features={["Standard Access"]} isActive />
              <PackageCard title="Pro" credits="1,200" price="$100.00" features={["200 Bonus Credits", "Priority Support"]} badge="Best Value" />
              <PackageCard title="Elite" credits="3,000" price="$250.00" features={["500 Bonus Credits", "Early Access Features"]} />
            </div>

            {/* Custom Amount */}
            <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-200 dark:border-slate-800">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Custom Amount</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-2">ENTER AMOUNT (USD)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                    <input
                      type="number"
                      className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl py-4 pl-8 pr-4 text-xl font-bold focus:ring-2 focus:ring-primary"
                      placeholder="0.00"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(Number(e.target.value))}
                    />
                  </div>
                </div>
                <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">Estimated Credits</span>
                    <span className="text-lg font-black text-primary">{customAmount}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">stars</span>
                      Bonus Applied
                    </span>
                    <span className="text-xs font-bold text-emerald-600">+0 Credits</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Summary */}
            <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-200 dark:border-slate-800 shadow-sm sticky top-24 space-y-6">
              <h2 className="text-xl font-bold mb-6">Payment Summary</h2>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Starter Package</span>
                  <span className="font-bold">$50.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Processing Fee (2.5%)</span>
                  <span className="font-bold">$1.25</span>
                </div>
                <div className="h-px bg-slate-100 dark:bg-slate-800 my-4"></div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm font-bold">Total to Pay</span>
                  <span className="text-2xl font-black text-slate-900 dark:text-white">$51.25</span>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-3 mb-8">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Secure Payment Method</p>
                <PaymentMethodBtn icon="credit_card" title="Credit / Debit Card" subtitle="Visa, Mastercard, Amex" isActive />
                <PaymentMethodBtn icon="account_balance" title="PayPal" subtitle="Express Checkout" />
                <PaymentMethodBtn icon="currency_bitcoin" title="Crypto" subtitle="BTC, ETH, USDC" />
              </div>

              <button className="w-full py-4 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-primary/90 transition-all shadow-lg shadow-primary/30">
                <span className="material-symbols-outlined">lock</span>
                Complete Payment
              </button>

              <p className="text-[10px] text-slate-400 text-center mt-6 uppercase font-bold tracking-widest">
                <span className="material-symbols-outlined text-[12px] align-middle mr-1">shield</span>
                AES-256 Encrypted Transaction
              </p>
            </div>

            {/* Pro Tip */}
            <div className="bg-slate-900 rounded-3xl p-6 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <div className="relative z-10">
                <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2">Pro Tip</p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Top up over $100 to unlock exclusive "Elite" status badges and reduced marketplace fees for 30 days.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>

      <footer className="py-6 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 mt-auto px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2024 DevFlow. Secure digital assets for creators.</p>
          <div className="flex gap-8 font-medium">
            <a className="hover:text-primary transition-colors" href="#">Transaction Policy</a>
            <a className="hover:text-primary transition-colors" href="#">Wallet FAQ</a>
            <a className="hover:text-primary transition-colors" href="#">Security</a>
          </div>
        </div>
      </footer>
    </div>
  );
}