import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar */}
      <nav className="border-b bg-white">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            Collins
          </Link>
          <div className="flex gap-6 text-sm font-medium">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link href="/projects" className="text-blue-600">
              Projects
            </Link>
            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-gray-600 mb-12 max-w-2xl">
          A selection of projects I&apos;ve built while learning and preparing for
          software engineering roles.
        </p>

        {/* Project Card */}
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">
            Personal Finance Tracker
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            A full-stack web application that allows users to track income and
            expenses. Features include authentication, transaction management,
            category filtering, search, sorting, dark mode, monthly budget
            tracking, charts, and CSV export.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="text-xs bg-gray-100 px-2.5 py-1 rounded-full">
              Next.js
            </span>
            <span className="text-xs bg-gray-100 px-2.5 py-1 rounded-full">
              TypeScript
            </span>
            <span className="text-xs bg-gray-100 px-2.5 py-1 rounded-full">
              Supabase
            </span>
            <span className="text-xs bg-gray-100 px-2.5 py-1 rounded-full">
              Tailwind CSS
            </span>
            <span className="text-xs bg-gray-100 px-2.5 py-1 rounded-full">
              Recharts
            </span>
          </div>

          <div className="flex gap-5 text-sm font-medium">
            <a
              href="https://personal-finance-tracker-mauve-nine.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Live Demo →
            </a>
            <a
              href="https://github.com/mhezie/personal-finance-tracker"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:underline"
            >
              GitHub →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}