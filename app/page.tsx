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
    // eslint-disable-next-line react-hooks/set-state-in-effect
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
      {/* Mobile top bar */}
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
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}

      <div className="mx-auto grid max-w-6xl lg:grid-cols-[300px_1fr]">
        {/* LEFT PANEL */}
        <aside className="hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:px-8 lg:py-14">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Collins Ewere</h1>
            <p className="mt-2 text-base font-medium text-indigo-600 dark:text-indigo-400">
              Aspiring Software Engineer
            </p>
            <p className="mt-4 max-w-[16rem] text-sm leading-6 text-gray-600 dark:text-gray-300">
              Building full-stack products and training for SDE roles in top tech and fintech.
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
            <a href="https://github.com/mhezie" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/collins-ewere/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
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

        {/* RIGHT CONTENT */}
        <main className="px-5 py-10 lg:px-10 lg:py-14">
          <section id="about" className="mb-20">
            <h2 className="mb-5 text-xs font-semibold tracking-[0.18em] text-gray-500">
              ABOUT
            </h2>

            <div className="space-y-4 text-[15px] leading-7 text-gray-600 dark:text-gray-300">
              <p>
                Hi, I’m Collins. I’m an aspiring Software Engineer focused on building practical
                full-stack applications and strengthening my data structures and algorithms foundation.
              </p>
              <p>
                Right now, I’m deliberately training for SDE roles: building real projects, practicing
                DSA daily, and improving debugging skills across multi-file codebases — the kind of
                work expected in technical assessments and real engineering teams.
              </p>
              <p>
                I care about clean UI, working end-to-end features, and writing code I can explain.
                My goal is to join a strong engineering team in top tech or fintech where I can keep
                growing as a builder.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {["Next.js", "TypeScript", "Supabase", "Python", "DSA", "Tailwind CSS", "Debugging"].map(
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

            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-xl font-semibold">Personal Finance Tracker</h3>
                <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                  Featured
                </span>
              </div>

              <p className="mt-4 text-[15px] leading-7 text-gray-600 dark:text-gray-300">
                A full-stack finance app where users can sign up, log income and expenses, review
                transaction history, and understand spending through charts and summaries.
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-600 dark:text-gray-300">
                <li>Authentication with Supabase</li>
                <li>Add, edit, and delete transactions</li>
                <li>Income vs expenses dashboard with charts</li>
                <li>Search, filters, and CSV export</li>
                <li>Dark mode and responsive UI</li>
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

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://personal-finance-tracker-vmc6.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
                >
                  Live Demo ↗
                </a>
                <a
                  href="https://github.com/mhezie/personal-finance-tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium transition hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
                >
                  GitHub ↗
                </a>
              </div>
            </article>
          </section>

          <section id="contact" className="mb-12">
            <h2 className="mb-5 text-xs font-semibold tracking-[0.18em] text-gray-500">
              CONTACT
            </h2>

            <p className="max-w-2xl text-[15px] leading-7 text-gray-600 dark:text-gray-300">
              I’m open to Software Engineer opportunities and conversations about full-stack
              development, fintech products, and junior/grad SDE roles. Feel free to reach out.
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