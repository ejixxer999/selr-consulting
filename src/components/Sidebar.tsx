import Link from "next/link";

const navItems = [
  {
    label: "About SELR",
    links: [
      { label: "Overview", href: "/about-selr" },
      { label: "Mission", href: "/about-selr/mission" },
      { label: "Who We Help", href: "/about-selr/who-we-help" },
    ],
  },
  {
    label: "Methods",
    links: [
      { label: "Overview", href: "/methods" },
      { label: "Frameworks", href: "/methods/frameworks" },
      { label: "Applications", href: "/methods/applications" },
    ],
  },
  {
    label: "Coaching",
    links: [
      { label: "Overview", href: "/coaching" },
      { label: "Individual Coaching", href: "/coaching/individual" },
      { label: "Group Coaching", href: "/coaching/group" },
    ],
  },
];

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
            <div key={item.label} className="group relative">
              <button className="w-full border-b border-white/10 py-4 text-left text-sm uppercase tracking-[0.18em] text-white/80 transition group-hover:text-white">
                <span className="mr-3 text-white/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.label}
              </button>

              <div className="pointer-events-none absolute left-full top-0 z-50 ml-4 w-64 border border-(--selr-border) bg-(--selr-paper) p-4 opacity-0 shadow-xl transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                {item.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block border-b border-(--selr-border) px-4 py-3 text-sm text-(--selr-blue) transition last:border-b-0 hover:bg-(--selr-cream)"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto space-y-4 text-sm text-white/60">
          <p>
            Educational consulting for strategy, growth, and applied learning.
          </p>
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