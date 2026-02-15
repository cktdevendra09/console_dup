"use client";

import React from "react";
import { MdTerminal, MdNotifications, MdAccountBalance, MdVerifiedUser, MdSecurity, MdChevronRight } from "react-icons/md";

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
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkEdEjkgAqbRAGQcEf6bA99dQkOKNRSv7EUC5Cv7LFH-zIB15M_84taRysyhreMGtQo0oVnnMduLu6cLZuYXQEqwfBS44Mtq0AfMXrJdnfX-Q-gt_aViv9LAY5dp9wnKbTOLSRGpW4oYbn582Fxe5msP0DzI-LUUbPj9zb0owcC7czLU5j9pUKrGeZpAbkWmiEoMzCslX5gF87K5qiopvHvMMiGU69ru57KSPP8PECKZxYwp7xkn0O5vTugXDysJwrbCWWqJf8Y4_V"
          />
        </div>
      </div>
    </header>
  );
}

function AddBankForm() {
  return (
    <main className="flex-1 flex items-center justify-center p-6 bg-slate-50 dark:bg-background-dark">
      <div className="w-full max-w-lg">
        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
          <a className="hover:text-primary transition-colors" href="#">Wallet</a>
          <MdChevronRight className="text-xs" />
          <a className="hover:text-primary transition-colors" href="#">Settings</a>
          <MdChevronRight className="text-xs" />
          <span className="text-slate-900 dark:text-slate-100">Add Bank</span>
        </div>

        {/* Card-style Form */}
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MdAccountBalance className="text-3xl text-primary" />
            </div>
            <h1 className="text-2xl font-black mb-2">Add Bank Account</h1>
            <p className="text-slate-500 text-sm">Securely link your bank for deposits and withdrawals.</p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="form-label">Account Holder Name</label>
              <input className="form-input" placeholder="e.g. Augusta Ryan" type="text"/>
            </div>
            <div>
              <label className="form-label">Bank Name</label>
              <input className="form-input" placeholder="e.g. Global Tech Bank" type="text"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="form-label">Account Number</label>
                <input className="form-input" placeholder="•••• •••• ••••" type="text"/>
              </div>
              <div>
                <label className="form-label">SWIFT / IFSC Code</label>
                <input className="form-input" placeholder="GTB000123" type="text"/>
              </div>
            </div>
            <div className="pt-4">
              <button className="w-full py-4 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-primary/90 transition-all shadow-lg shadow-primary/30" type="submit">
                <MdVerifiedUser /> Verify &amp; Link Bank
              </button>
            </div>
          </form>

          {/* Security Badge */}
          <div className="mt-8 flex flex-col items-center">
            <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 dark:bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-100 dark:border-emerald-500/20">
              <MdSecurity className="text-sm" /> Bank-grade security
            </div>
            <p className="mt-4 text-[10px] text-slate-400 text-center max-w-[280px] leading-relaxed">
              Your data is encrypted with AES-256 standards. We never store your full banking credentials.
            </p>
          </div>
        </div>

        <p className="text-center mt-8 text-sm text-slate-500">
          Need help? <a className="text-primary font-bold hover:underline" href="#">Contact Support</a>
        </p>
      </div>
    </main>
  );
}

function Footer() {
  return (
    <footer className="py-6 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 mt-auto px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
        <p>© 2024 DevFlow. Secure digital assets for creators.</p>
        <div className="flex gap-8 font-medium">
          <a className="hover:text-primary transition-colors" href="#">Security Policy</a>
          <a className="hover:text-primary transition-colors" href="#">Banking FAQ</a>
          <a className="hover:text-primary transition-colors" href="#">Privacy</a>
        </div>
      </div>
    </footer>
  );
}

export default function AddBankPage() {
  return (
    <div className="bg-slate-50 dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      <Header />
      <AddBankForm />
      <Footer />
    </div>
  );
}