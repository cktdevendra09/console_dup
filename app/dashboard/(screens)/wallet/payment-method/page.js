"use client";

import React from "react";
import { MdTerminal, MdNotifications, MdDashboard, MdAccountBalanceWallet, MdShoppingCart, MdReceiptLong, MdPayments, MdSettings, MdAdd, MdCheckCircle, MdPending, MdDelete, MdCreditCard, MdContactless, MdVerifiedUser, MdLock, MdShield } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";

// Header Component
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

// Sidebar Component
function Sidebar() {
  return (
    <aside className="w-64 border-r border-slate-200 dark:border-slate-800 p-6 hidden lg:block bg-white/50 dark:bg-slate-900/50">
      <nav className="space-y-2">
        <a className="sidebar-link" href="#"><MdDashboard /> Dashboard</a>
        <a className="sidebar-link" href="#"><MdAccountBalanceWallet /> Wallet</a>
        <a className="sidebar-link" href="#"><MdShoppingCart /> Marketplace</a>
        <a className="sidebar-link" href="#"><MdReceiptLong /> Transactions</a>
        <div className="pt-8 pb-4">
          <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Settings</p>
          <a className="sidebar-link active" href="#"><MdPayments /> Payment Methods</a>
          <a className="sidebar-link" href="#"><MdSettings /> Preferences</a>
        </div>
      </nav>
    </aside>
  );
}

// Payment Card Component
function PaymentCard({ avatar, name, type, accountNumber, status, isPrimary }) {
  return (
    <div className="payment-card relative overflow-hidden group">
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-lg flex items-center justify-center text-xl font-bold text-slate-400">{avatar}</div>
        {isPrimary && <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 text-[10px] font-bold rounded-md uppercase tracking-wider">Primary</span>}
      </div>
      <div>
        <h3 className="font-bold text-slate-900 dark:text-white">{name}</h3>
        <p className="text-sm text-slate-500 mb-4">{type} •••• {accountNumber}</p>
        <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
          {status === "verified" ? <MdCheckCircle className="text-sm" /> : <MdPending className="text-sm text-amber-500" />}
          {status === "verified" ? "Verified for Withdrawals" : "Verification Pending"}
        </div>
      </div>
      <button className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 p-2 text-slate-400 hover:text-red-500 transition-all">
        <MdDelete className="text-lg" />
      </button>
    </div>
  );
}

// Visual Card Component
function VisualCard({ gradient, cardNumber, holder, expires, type }) {
  return (
    <div className={`visual-card ${gradient}`}>
      <div className="flex justify-between items-start mb-8">
        <MdContactless className="text-3xl" />
        {type && <div className="flex flex-col items-end"><span className="text-xs font-black italic tracking-tighter">{type}</span></div>}
      </div>
      <div className="mb-4">
        <p className="text-[10px] uppercase tracking-widest opacity-60 mb-1">Card Number</p>
        <p className="text-lg font-mono tracking-widest">{cardNumber}</p>
      </div>
      <div className="flex justify-between items-end">
        <div>
          <p className="text-[10px] uppercase tracking-widest opacity-60 mb-1">Card Holder</p>
          <p className="text-sm font-bold uppercase">{holder}</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest opacity-60 mb-1">Expires</p>
          <p className="text-sm font-bold">{expires}</p>
        </div>
      </div>
    </div>
  );
}

// Main Page
export default function PaymentMethodsPage() {
  return (
    <div className="bg-slate-50 dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 md:p-10 overflow-y-auto">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="mb-8">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                <a className="hover:text-primary transition-colors" href="#">Wallet</a>
                <span className="text-xs">›</span>
                <span className="text-slate-900 dark:text-slate-100">Payment Methods</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-black mb-2">Manage Payment Methods</h1>
                  <p className="text-slate-500 text-sm font-medium">Add and organize your accounts for easy deposits and withdrawals.</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1.5 rounded-full">
                    <MdVerifiedUser className="text-sm" /> PCI DSS Compliant
                  </span>
                </div>
              </div>
            </div>

            {/* Bank Accounts */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600">
                    <MdAccountBalanceWallet />
                  </div>
                  <h2 className="text-xl font-bold">Bank Accounts</h2>
                </div>
                <button className="text-sm font-bold text-primary flex items-center gap-1 hover:underline">
                  <MdAdd /> Link New Bank
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <PaymentCard avatar="BK" name="Chase Manhattan Bank" type="Savings Account" accountNumber="4291" status="verified" isPrimary />
                <PaymentCard avatar="WF" name="Wells Fargo" type="Checking Account" accountNumber="8832" status="pending" />
                <div className="add-card group">
                  <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <FiPlusCircle className="text-xl" />
                  </div>
                  <span className="font-bold text-sm">Link New Bank</span>
                </div>
              </div>
            </section>

            {/* Credit/Debit Cards */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center text-purple-600">
                    <MdCreditCard />
                  </div>
                  <h2 className="text-xl font-bold">Credit & Debit Cards</h2>
                </div>
              </div>
              <div className="flex gap-6 overflow-x-auto pb-6 -mx-2 px-2 scrollbar-hide">
                <VisualCard gradient="bg-gradient-to-br from-slate-800 to-slate-900" cardNumber="•••• •••• •••• 4529" holder="Augusta Ryan" expires="08/26" />
                <VisualCard gradient="bg-gradient-to-br from-primary to-cyan-600" cardNumber="•••• •••• •••• 1088" holder="Augusta Ryan" expires="12/25" type="VISA" />
                <div className="w-80 h-48 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center gap-3 text-slate-400 hover:text-primary hover:border-primary hover:bg-primary/5 transition-all cursor-pointer group shrink-0">
                  <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <FiPlusCircle className="text-xl" />
                  </div>
                  <p className="font-bold">Add New Card</p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}