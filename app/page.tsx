"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = saved === "dark" || (!saved && prefersDark);
    document.documentElement.classList.toggle("dark", isDark);
    setDarkMode(isDark);
    setMounted(true);
  }, []);

  const toggleDarkMode = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4 lg:hidden dark:border-gray-800">
        <span className="text-lg font-bold">Collins Ewere</span>
        <div className="flex items-center gap-2">
          {mounted && (
            <button
              onClick={toggleDarkMode}
              className="rounded-lg border border-gray-300 px-3 py-2 text-sm dark:border-gray-700"
            >
              {darkMode ? "Light" : "Dark"}
            </button>
          )}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm dark:border-gray-700"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-b border-gray-200 px-5 py-4 lg:hidden dark:border-gray-800">
          <div className="flex flex-col gap-3 text-sm font-medium">
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      )}

      <div className="mx-auto grid max-w-6xl lg:grid-cols-[280px_1fr]">
        <aside className="hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:px-8 lg:py-14">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
              GRADUATE SDE
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight whitespace-nowrap">
              Collins Ewere
            </h1>
            <p className="mt-3 max-w-[16rem] text-sm leading-6 text-gray-600 dark:text-gray-400">
              First Class CS (BCU). Full-stack products with auth, Postgres, and RLS.
            </p>
            <nav className="mt-10 flex flex-col gap-3 text-xs font-semibold tracking-[0.18em] text-gray-500">
              <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400">
                ABOUT
              </a>
              <a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400">
                PROJECTS
              </a>
              <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400">
                CONTACT
              </a>
            </nav>
          </div>
          <div className="flex flex-wrap items-center gap-3 pb-2 text-sm text-gray-500">
            <a
              href="https://github.com/mhezie"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/collins-ewere/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600"
            >
              LinkedIn
            </a>
            <a href="mailto:toewerecollins@gmail.com" className="hover:text-indigo-600">
              Email
            </a>
            {mounted && (
              <button
                onClick={toggleDarkMode}
                className="rounded-md border border-gray-300 px-2 py-1 text-xs dark:border-gray-700"
              >
                {darkMode ? "Light" : "Dark"}
              </button>
            )}
          </div>
        </aside>

        <main className="px-5 py-10 lg:px-10 lg:py-14">
          <section id="about" className="mb-16">
            <h2 className="mb-4 text-xs font-semibold tracking-[0.18em] text-gray-500">
              ABOUT
            </h2>
            <p className="max-w-2xl text-[16px] leading-7 text-gray-700 dark:text-gray-300">
              First Class BSc Computer Science, Birmingham City University. I
              build tools I actually use: a UK finance tracker, a job board, and
              Pence — pay-request links. One Supabase identity, Postgres + RLS.
              Daily DSA toward graduate SDE roles.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Next.js", "TypeScript", "Python", "Java", "SQL", "Supabase", "Android", "DSA"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-gray-300 px-3 py-1 text-xs dark:border-gray-700"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </section>

          <section id="projects" className="mb-16">
            <h2 className="mb-6 text-xs font-semibold tracking-[0.18em] text-gray-500">
              PROJECTS
            </h2>

            <div className="grid gap-5 md:grid-cols-2">
              <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                <div className="border-b border-gray-100 bg-slate-50 px-4 py-4 dark:border-gray-800 dark:bg-gray-950">
                  <p className="text-xs text-indigo-500">Pence</p>
                  <p className="mt-1 text-lg font-semibold">Dinner</p>
                  <p className="text-2xl font-semibold tracking-tight">£3.50</p>
                  <div className="mt-3 rounded-lg bg-indigo-600 px-3 py-2 text-center text-xs font-medium text-white">
                    Pay £3.50
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold">Pence</h3>
                    <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-medium text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                      Live
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    UK pay-request links. Create an amount in £, copy a public
                    page. Amounts stored as pence. Public reads go through a
                    SECURITY DEFINER RPC, not an open table.
                  </p>
                  <div className="mt-4 flex gap-3 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                    <a
                      href="https://pence-teal.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live demo ↗
                    </a>
                    <a
                      href="https://github.com/mhezie/pence"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
              </article>

              <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                <div className="border-b border-gray-100 bg-slate-50 px-4 py-3 dark:border-gray-800 dark:bg-gray-950">
                  <p className="text-xs text-gray-500">Balance</p>
                  <p className="text-2xl font-semibold tracking-tight">£1,936.10</p>
                  <div className="mt-3 flex gap-2">
                    <span className="rounded-md bg-green-100 px-2 py-1 text-xs text-green-800 dark:bg-green-950 dark:text-green-300">
                      Income £3,150
                    </span>
                    <span className="rounded-md bg-red-100 px-2 py-1 text-xs text-red-800 dark:bg-red-950 dark:text-red-300">
                      Spend £1,214
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold">Personal Finance Tracker</h3>
                    <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-medium text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                      Live
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    UK £ app. Auth, dashboards, monthly budget in Postgres with RLS — not localStorage.
                  </p>
                  <div className="mt-4 flex gap-3 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                    <a
                      href="https://personal-finance-tracker-mauve-nine.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live demo ↗
                    </a>
                    <a
                      href="https://github.com/mhezie/personal-finance-tracker"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
              </article>

              <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                <div className="space-y-2 border-b border-gray-100 bg-slate-50 px-4 py-3 dark:border-gray-800 dark:bg-gray-950">
                  <div className="flex items-center justify-between text-sm">
                    <span>Amazon · SDE</span>
                    <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[11px] text-blue-800">
                      Applied
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Softwire · Graduate SDE</span>
                    <span className="rounded-full bg-yellow-100 px-2 py-0.5 text-[11px] text-yellow-800">
                      OA
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Citadel · Graduate SWE</span>
                    <span className="rounded-full bg-gray-200 px-2 py-0.5 text-[11px] text-gray-700">
                      Saved
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold">Job Application Tracker</h3>
                    <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-medium text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                      Live
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    Same login as finance. One identity, two apps, RLS so users only see their rows.
                  </p>
                  <div className="mt-4 flex gap-3 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                    <a
                      href="https://job-application-tracker-jade-alpha.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live demo ↗
                    </a>
                    <a
                      href="https://github.com/mhezie/job-application-tracker"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
              </article>

              <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                <div className="flex h-28 items-end gap-1 border-b border-gray-100 bg-slate-50 px-4 py-3 dark:border-gray-800 dark:bg-gray-950">
                  {[40, 55, 48, 70, 62, 80, 75, 88].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-indigo-400/80 dark:bg-indigo-500/70"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold">Stock Price Forecasting</h3>
                    <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                      FYP
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    LSTM / GBM vs baselines on next-day prices. MAE, RMSE, directional accuracy.
                  </p>
                  <p className="mt-4 text-xs text-gray-500">Academic · code private</p>
                </div>
              </article>

              <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                <div className="flex h-28 items-center justify-center border-b border-gray-100 bg-slate-50 dark:border-gray-800 dark:bg-gray-950">
                  <div className="rounded-full bg-indigo-600 px-4 py-2 text-xs font-medium text-white">
                    Find parking · England
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold">ParkEase</h3>
                    <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                      Android
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    Java Android app: maps, booking, payments, push alerts. Uni project.
                  </p>
                  <p className="mt-4 text-xs text-gray-500">Academic · code private</p>
                </div>
              </article>
            </div>
          </section>

          <section id="contact" className="mb-10">
            <h2 className="mb-4 text-xs font-semibold tracking-[0.18em] text-gray-500">
              CONTACT
            </h2>
            <p className="max-w-xl text-[16px] leading-7 text-gray-700 dark:text-gray-300">
              Open to graduate / junior SDE roles. Same inbox I use for the live demos.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:toewerecollins@gmail.com"
                className="rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700"
              >
                Email Me
              </a>
              <a
                href="https://github.com/mhezie"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium dark:border-gray-700"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/collins-ewere/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium dark:border-gray-700"
              >
                LinkedIn ↗
              </a>
            </div>
          </section>

          <footer className="border-t border-gray-200 pt-6 text-sm text-gray-500 dark:border-gray-800">
            <p>© {new Date().getFullYear()} Collins Ewere</p>
          </footer>
        </main>
      </div>
    </div>
  );
}