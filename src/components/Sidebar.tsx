import Link from "next/link"
 

const navItems = [
  { label: "About SELR", href: "/about-selr" },
  { label: "Methods", href: "/methods" },
  { label: "Coaching", href: "/coaching" },
]

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-72 border-r border-(--selr-border) bg-(--selr-blue) text-white lg:flex lg:flex-col">
      <div className="border-b border-white/15 p-8">
        <Link href="/" className="block">
          <p className="text-sm uppercase tracking-[0.35em] text-white/70">
            SELR
          </p>
          <h1 className="mt-3 text-2xl font-semibold tracking-tight">
            Consulting
          </h1>
        </Link>
      </div>

      <nav className="flex flex-1 flex-col p-8">
        <div className="space-y-2">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="group block border-b border-white/10 py-4 text-sm uppercase tracking-[0.18em] text-white/80 transition hover:text-white"
            >
              <span className="mr-3 text-white/40">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="mt-auto space-y-4 text-sm text-white/60">
          <p>Educational consulting for strategy, growth, and applied learning.</p>
          <Link
            href="/coaching"
            className="inline-block border border-white/30 px-4 py-3 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-(--selr-blue)"
          >
            Start Here
          </Link>
        </div>
      </nav>
    </aside>
  );
}