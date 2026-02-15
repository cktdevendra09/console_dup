"use client";

import React from "react";

// Components
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
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTY1hfrDU1dJC12v4FrQpLk31kylwtbX4un4p1teC0GyYNZkn_4q-KKdlKcnHyxCo0ngZWFxv1dn3zU2j5srksRZZtKXfSmXS5Jlcbnp0QnSuHum_Wgf0pw7l_LCg4DK7QACaL3zYgpF7WrKVUvoiDtmB6rNk82H0VX3n56DuOAikPGeSuHgM7WdgEkAhKXp-euvHY7oqZEt6X77LyWjgK4ELyaYARJ8dS4K2nEXvCm_F7Ahm3lOt13YnpX8oBm5dS3pjAZM0-Miw_"
          />
        </div>
      </div>
    </header>
  );
}

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

function WalletCard() {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2rem] p-8 mb-8 text-white relative overflow-hidden shadow-2xl shadow-slate-200 dark:shadow-none">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2">Total Balance</p>
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-black">2,450.00</span>
            <span className="text-xl font-bold text-primary">Credits</span>
          </div>
          <p className="text-slate-500 text-xs mt-4 flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">lock</span>
            Securely managed by DevFlow Vault
          </p>
        </div>
        <div className="flex gap-4">
          <button className="px-8 py-4 bg-primary text-white rounded-2xl font-bold flex items-center gap-3 hover:bg-primary/90 transition-all shadow-lg shadow-primary/30">
            <span className="material-symbols-outlined">add_circle</span>
            Add Credits
          </button>
          <button className="px-8 py-4 bg-white/10 text-white border border-white/10 rounded-2xl font-bold flex items-center gap-3 hover:bg-white/20 transition-all">
            <span className="material-symbols-outlined">send</span>
            Transfer
          </button>
        </div>
      </div>
    </div>
  );
}

function TransactionTable() {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
            <tr>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Activity</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            <tr className="transaction-row">
              <td className="px-6 py-5">
                <p className="text-sm font-semibold">Oct 24, 2023</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase">14:20 PM</p>
              </td>
              <td className="px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600">
                    <span className="material-symbols-outlined">brush</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold">Theme Purchase</p>
                    <p className="text-xs text-slate-500">Modern Dashboard UI Kit</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-5 font-mono font-bold text-red-500 text-sm">-450.00</td>
              <td className="px-6 py-5">
                <span className="px-2 py-1 rounded-md bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold uppercase">Completed</span>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function WalletPage() {
  return (
    <div className="bg-slate-50 dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 md:p-10 overflow-y-auto">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
              <a className="hover:text-primary" href="#">Account</a>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span className="text-slate-900 dark:text-slate-100">Digital Wallet</span>
            </div>
            <h1 className="text-3xl font-black mb-2">My Wallet</h1>
            <p className="text-slate-500 text-sm">Manage your platform credits and transaction history.</p>
          </div>
          <WalletCard />
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="xl:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">history</span>
                  Recent Transactions
                </h2>
                <button className="text-sm font-bold text-primary hover:underline">View All</button>
              </div>
              <TransactionTable />
            </div>
            {/* Add Wallet Insights / Saved Methods here as additional components */}
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