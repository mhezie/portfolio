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
    const newValue = !darkMode;
    setDarkMode(newValue);
    document.documentElement.classList.toggle("dark", newValue);
    localStorage.setItem("theme", newValue ? "dark" : "light");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
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

      <div className="mx-auto grid max-w-6xl lg:grid-cols-[300px_1fr]">
        <aside className="hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:px-8 lg:py-14">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Collins Ewere</h1>
            <p className="mt-2 text-base font-medium text-indigo-600 dark:text-indigo-400">
              Aspiring Software Engineer
            </p>
            <p className="mt-4 max-w-[16rem] text-sm leading-6 text-gray-600 dark:text-gray-300">
              First Class Computer Science graduate building full-stack products
              and training for SDE roles.
            </p>

            <nav className="mt-10 flex flex-col gap-3 text-xs font-semibold tracking-[0.18em] text-gray-500">
              <a href="#about" className="transition hover:text-indigo-600 dark:hover:text-indigo-400">
                ABOUT
              </a>
              <a href="#projects" className="transition hover:text-indigo-600 dark:hover:text-indigo-400">
                PROJECTS
              </a>
              <a href="#contact" className="transition hover:text-indigo-600 dark:hover:text-indigo-400">
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
          <section id="about" className="mb-20">
            <h2 className="mb-5 text-xs font-semibold tracking-[0.18em] text-gray-500">
              ABOUT
            </h2>

            <div className="space-y-4 text-[15px] leading-7 text-gray-600 dark:text-gray-300">
              <p>
                Hi, I’m Collins — a First Class BSc (Hons) Computer Science graduate from
                Birmingham City University. I build practical software across full-stack web,
                cloud, mobile, and applied machine learning.
              </p>
              <p>
                I’ve worked on end-to-end projects ranging from AI forecasting models and Android
                applications to cloud-hosted web systems. Alongside university work, I build personal
                products and train deliberately for software engineering roles through DSA practice
                and multi-file debugging.
              </p>
              <p>
                I’m looking for graduate/junior SDE roles in top tech and fintech, where I can
                contribute to real products and keep growing as an engineer.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {["Next.js", "TypeScript", "Python", "Java", "SQL", "AWS", "Android", "DSA", "Machine Learning"].map(
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

          <section id="projects" className="mb-20">
            <h2 className="mb-6 text-xs font-semibold tracking-[0.18em] text-gray-500">
              PROJECTS
            </h2>

            <div className="space-y-6">
              <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold">Personal Finance Tracker</h3>
                  <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                    Personal Project
                  </span>
                </div>

                <p className="mt-4 text-[15px] leading-7 text-gray-600 dark:text-gray-300">
                  Full-stack UK finance app for tracking income and expenses, with authentication,
                  dashboards, a monthly budget stored per user, and export.
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-600 dark:text-gray-300">
                  <li>Auth with Supabase</li>
                  <li>Add, edit, and delete transactions</li>
                  <li>Income vs expenses charts, date filters, CSV export</li>
                  <li>Monthly budget persisted in Postgres with row-level security</li>
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {["Next.js", "TypeScript", "Supabase", "Recharts", "Tailwind"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-3 text-sm font-medium">
                  <a
                    href="https://personal-finance-tracker-mauve-nine.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline dark:text-indigo-400"
                  >
                    Live demo ↗
                  </a>
                  <a
                    href="https://github.com/mhezie/personal-finance-tracker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline dark:text-indigo-400"
                  >
                    GitHub ↗
                  </a>
                </div>
              </article>

              <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold">Stock Price Forecasting Models</h3>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    Academic · FYP
                  </span>
                </div>

                <p className="mt-4 text-[15px] leading-7 text-gray-600 dark:text-gray-300">
                  Comparative framework evaluating Random Walk, Linear Regression, LSTM, GBM, and
                  sentiment-augmented models for next-day stock price forecasting.
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-600 dark:text-gray-300">
                  <li>Collected OHLCV data and GDELT news sentiment</li>
                  <li>Engineered features such as Moving Average, RSI, and MACD</li>
                  <li>Evaluated models using MAE, RMSE, and directional accuracy</li>
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {["Python", "LSTM", "GBM", "Scikit-learn", "Feature Engineering"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="mt-5 text-sm text-gray-500">
                  Academic project · code not publicly available
                </p>
              </article>

              <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold">ParkEase – Android Parking App</h3>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    Academic Project
                  </span>
                </div>

                <p className="mt-4 text-[15px] leading-7 text-gray-600 dark:text-gray-300">
                  Android application for real-time parking availability, booking, and payments
                  across locations in England.
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-600 dark:text-gray-300">
                  <li>Google Maps integration for location search</li>
                  <li>User authentication, booking, and payment flow</li>
                  <li>Push notifications and session extension alerts</li>
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {["Java", "Android Studio", "Google Maps API", "Authentication"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="mt-5 text-sm text-gray-500">
                  Academic project · code not publicly available
                </p>
              </article>
            </div>
          </section>

          <section id="contact" className="mb-12">
            <h2 className="mb-5 text-xs font-semibold tracking-[0.18em] text-gray-500">
              CONTACT
            </h2>

            <p className="max-w-2xl text-[15px] leading-7 text-gray-600 dark:text-gray-300">
              I’m open to graduate Software Engineer roles and conversations about full-stack
              development, fintech products, and applied engineering work. Feel free to reach out.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="mailto:toewerecollins@gmail.com"
                className="rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-indigo-700"
              >
                Email Me
              </a>
              <a
                href="https://github.com/mhezie"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium transition hover:-translate-y-0.5 dark:border-gray-700"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/collins-ewere/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium transition hover:-translate-y-0.5 dark:border-gray-700"
              >
                LinkedIn ↗
              </a>
            </div>
          </section>

          <footer className="border-t border-gray-200 pt-6 text-sm text-gray-500 dark:border-gray-800">
            <p>© {new Date().getFullYear()} Collins Ewere · Built with Next.js + Tailwind CSS</p>
          </footer>
        </main>
      </div>
    </div>
  );
}