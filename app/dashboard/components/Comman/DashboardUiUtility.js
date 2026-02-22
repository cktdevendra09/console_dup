import clsx from "clsx";

/* ---------- CARD ---------- */
export const card = (extra) =>
  clsx(
    "bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 transition-colors duration-300",
    extra
  );

/* ---------- INPUT ---------- */
export const input = (extra) =>
  clsx(
    "w-full mt-1 px-3 py-2 text-sm rounded-lg bg-slate-100 dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition",
    extra
  );

/* ---------- LABEL ---------- */
export const label = (extra) =>
  clsx("text-xs text-slate-500 dark:text-slate-400", extra);

/* ---------- HEADING ---------- */
export const heading = (extra) =>
  clsx("text-sm font-semibold text-slate-700 dark:text-slate-200", extra);

/* ---------- PRIMARY BUTTON ---------- */
export const primaryButton = (extra) =>
  clsx(
    "px-6 py-2 text-sm bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 active:scale-95 transition",
    extra
  );

/* ---------- SECONDARY BUTTON ---------- */
export const secondaryButton = (extra) =>
  clsx(
    "text-sm text-slate-500 hover:text-slate-700 dark:text-slate-400 transition",
    extra
  );

/* ---------- SMALL BUTTON ---------- */
export const smallButton = (extra) =>
  clsx(
    "px-3 py-1.5 text-xs bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 rounded-md font-medium transition",
    extra
  );