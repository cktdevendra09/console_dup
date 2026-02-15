"use client";

export default function NewsletterUI() {
  return (
    <footer className="mt-16 p-8 rounded-xl bg-primary/10 border border-primary/20 flex flex-col md:flex-row items-center justify-between">
      <div className="mb-6 md:mb-0">
        <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">
          Subscribe to the feed
        </h3>
        <p className="text-slate-500 dark:text-slate-400 font-display">
          Get the best of our articles delivered weekly.
        </p>
      </div>
      <div className="flex w-full md:w-auto gap-2">
        <input
          type="email"
          placeholder="email@example.com"
          className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2 w-full md:w-64 focus:ring-primary focus:border-primary outline-none text-sm"
        />
        <button className="bg-primary text-white px-6 py-2 rounded-lg font-bold hover:bg-primary/90 transition-colors text-sm whitespace-nowrap">
          Join Now
        </button>
      </div>
    </footer>
  );
}
