import Link from "next/link";

export default function AboutPage() {
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
            <Link href="/projects" className="hover:text-blue-600">
              Projects
            </Link>
            <Link href="/about" className="text-blue-600">
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>

        <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
          <p>
            I&apos;m Collins, an aspiring Software Engineer currently preparing
            for graduate and junior SDE roles at top technology companies.
          </p>

          <p>
            I focus on building practical full-stack applications while
            strengthening my foundations in data structures, algorithms, and
            clean software design.
          </p>

          <p>
            Recently I built a Personal Finance Tracker using Next.js, TypeScript,
            Supabase, and Tailwind CSS — a project that includes authentication,
            CRUD operations, filtering, dark mode, and data visualization.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "JavaScript",
              "TypeScript",
              "Python",
              "Next.js",
              "React",
              "Node.js",
              "Supabase",
              "PostgreSQL",
              "Tailwind CSS",
              "Git",
              "Data Structures",
              "Algorithms",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-white border px-3 py-1.5 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}