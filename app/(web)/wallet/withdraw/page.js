"use client";

import React from "react";
import { 
  MdTerminal, MdNotifications, MdDashboard, MdAccountBalanceWallet, MdShoppingCart, 
  MdReceiptLong, MdPayments, MdSettings, MdChevronRight, MdVerifiedUser, MdAccountBalance,
  MdArrowForward, MdHistory, MdSync, MdCheckCircle, MdInfo 
} from "react-icons/md";

function Header() {
  return (
    <header className="h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <a className="flex items-center gap-2" href="#">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <MdTerminal className="text-xl" />
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
          <MdNotifications />
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
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTY1hfrDU1dJC12v4FrQpLk31kylwtbX4un4p1teC0GyYNZkn_4q-KKdlKcnHyxCo0ngZWFxv1dn3zU2j5srksRZZtKXfSmXS5Jlcbnp0QnSuHum_Wgf0pw7l_LCg4DK7QACaL3zYgpF7WrKVUvoiDtmB6rNk82H0VX3n56DuOAikPGeSuHgM7WdgEkAhKXp-euvHY7oqZEt6X77LyWjgK4ELyaYARJ8dS4K2nEXvCm_F7Ahm3lOt13YnpX8oBm5dS3pjAZM0-Miw_"
          />
        </div>
      </div>
    </header>
  );
}

function Sidebar() {
  const links = [
    { icon: <MdDashboard />, label: "Dashboard" },
    { icon: <MdAccountBalanceWallet />, label: "Wallet", active: true },
    { icon: <MdShoppingCart />, label: "Marketplace" },
    { icon: <MdReceiptLong />, label: "Transactions" }
  ];
  const settings = [
    { icon: <MdPayments />, label: "Payment Methods" },
    { icon: <MdSettings />, label: "Preferences" }
  ];
  return (
    <aside className="w-64 border-r border-slate-200 dark:border-slate-800 p-6 hidden lg:block bg-white/50 dark:bg-slate-900/50">
      <nav className="space-y-2">
        {links.map((link, i) => (
          <a key={i} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary ${link.active ? 'bg-primary/10 text-primary font-semibold' : ''}`} href="#">
            {link.icon} {link.label}
          </a>
        ))}
        <div className="pt-8 pb-4">
          <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Settings</p>
          {settings.map((link, i) => (
            <a key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary" href="#">
              {link.icon} {link.label}
            </a>
          ))}
        </div>
      </nav>
    </aside>
  );
}

function WithdrawCard() {
  const methods = [
    { name: "Bank Transfer", icon: <MdAccountBalance />, desc: "Direct to your bank account", time: "2-3 Days", fee: "Free", selected: true },
    { name: "PayPal", icon: <MdPayments />, desc: "Instant digital payout", time: "Instant", fee: "2.5%" },
    { name: "Stripe", icon: <MdAccountBalance />, desc: "Professional merchant payout", time: "1 Day", fee: "1.0%" },
  ];
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
      <div className="xl:col-span-2 space-y-8 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="space-y-6">
          {/* Withdrawal Amount */}
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-4 uppercase tracking-wider">1. Withdrawal Amount</label>
            <div className="relative">
              <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-bold text-slate-400">C</span>
              <input className="w-full bg-slate-50 dark:bg-slate-800/50 border-none focus:ring-2 focus:ring-primary rounded-2xl py-6 pl-12 pr-6 text-3xl font-black placeholder:text-slate-300" placeholder="0.00" type="number"/>
              <button className="absolute right-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-xl text-xs font-bold transition-colors">MAX</button>
            </div>
            <div className="mt-3 flex justify-between text-[11px] font-bold uppercase tracking-wide text-slate-400">
              <span>Min: 50.00 Credits</span>
              <span>No hidden fees on first monthly payout</span>
            </div>
          </div>
          {/* Select Destination */}
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-4 uppercase tracking-wider">2. Select Destination</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {methods.map((m, i) => (
                <div key={i} className={`relative border-2 border-slate-100 dark:border-slate-800 rounded-2xl p-4 cursor-pointer transition-all hover:border-primary/50 ${m.selected ? 'border-primary bg-primary/5 ring-1 ring-primary' : ''}`}>
                  {m.selected && (
                    <div className="absolute top-4 right-4 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white text-[14px]">
                      <MdVerifiedUser />
                    </div>
                  )}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${i===0 ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600' : i===1 ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600' : 'bg-purple-100 dark:bg-purple-900/30 text-purple-600'}`}>
                    {m.icon}
                  </div>
                  <h3 className="font-bold text-sm mb-1">{m.name}</h3>
                  <p className="text-[11px] text-slate-500 mb-4">{m.desc}</p>
                  <div className="space-y-1 pt-3 border-t border-slate-100 dark:border-slate-800 text-[10px] font-bold">
                    <div className="flex justify-between"><span className="text-slate-400">TIME:</span> <span>{m.time}</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">FEE:</span> <span className={i===0?'text-emerald-500':'text-slate-600'}>{m.fee}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-6">
            <button className="w-full py-5 bg-slate-900 dark:bg-primary text-white rounded-2xl font-black text-lg shadow-xl shadow-slate-200 dark:shadow-none hover:scale-[1.01] transition-all flex items-center justify-center gap-3">
              Confirm Withdrawal <MdArrowForward />
            </button>
            <p className="text-center mt-4 text-xs text-slate-400 font-medium">
              By confirming, you agree to our <a className="text-primary underline" href="#">Payout Terms and Conditions</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="py-6 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 mt-auto px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
        <p>© 2024 DevFlow. Secure digital assets for creators.</p>
        <div className="flex gap-8 font-medium">
          <a className="hover:text-primary transition-colors" href="#">Transaction Policy</a>
          <a className="hover:text-primary transition-colors" href="#">Withdrawal FAQ</a>
          <a className="hover:text-primary transition-colors" href="#">Security</a>
        </div>
      </div>
    </footer>
  );
}

export default function WithdrawFundsPage() {
  return (
    <div className="bg-slate-50 dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 md:p-10 overflow-y-auto">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
              <a className="hover:text-primary" href="#">Wallet</a>
              <MdChevronRight className="text-xs" />
              <span className="text-slate-900 dark:text-slate-100">Withdraw Funds</span>
            </div>
            <h1 className="text-3xl font-black mb-2">Withdraw Funds</h1>
            <p className="text-slate-500 text-sm">Securely transfer your earnings to your preferred account.</p>
          </div>
          {/* Withdraw Card */}
          <WithdrawCard />
        </main>
      </div>
      <Footer />
    </div>
  );
}