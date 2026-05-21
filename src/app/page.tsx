import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-screen bg-(--selr-cream)">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-12 lg:py-28">
        <p className="text-sm uppercase tracking-[0.3em] text-(--selr-red)">
          SELR Consulting
        </p>

        <h1 className="mt-8 max-w-4xl text-5xl font-semibold tracking-tight text-(--selr-blue) md:text-7xl">
          Educational consulting for clearer thinking, stronger methods, and applied growth.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-(--selr-muted)">
          SELR helps individuals, groups, and organizations understand complex
          ideas, apply structured methods, and develop practical systems for
          improvement.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/about-selr"
            className="bg-(--selr-blue) px-6 py-4 text-sm uppercase tracking-[0.18em] text-white"
          >
            About SELR
          </Link>
          <Link
            href="/methods"
            className="border border-(--selr-blue) px-6 py-4 text-sm uppercase tracking-[0.18em] text-(--selr-blue)"
          >
            Explore Methods
          </Link>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {[
            ["01", "About SELR", "Learn the mission, philosophy, and purpose behind the platform."],
            ["02", "Methods", "Explore frameworks, models, and practical applications."],
            ["03", "Coaching", "Individual and group coaching for applied development."],
          ].map(([num, title, desc]) => (
            <div
              key={title}
              className="border border-(--selr-border) bg-(--selr-paper) p-8"
            >
              <p className="text-sm text-(--selr-red)">{num}</p>
              <h2 className="mt-6 text-2xl font-semibold text-(--selr-blue)">
                {title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-(--selr-muted)">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}