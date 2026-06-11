import Link from "next/link";

const navigation = [
  { label: "Calculators", href: "/#calculators" },
  { label: "Blog", href: "/blog" },
  { label: "Methodology", href: "/methodology" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 shadow-sm shadow-slate-200/50 backdrop-blur-xl">
      <div className="page-container flex h-16 items-center justify-between gap-3">
        <Link
          aria-label="Ecom Profit Tools home"
          href="/"
          className="flex min-w-0 items-center gap-2.5 text-lg font-bold text-ink"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ink text-base text-white shadow-sm shadow-slate-300">
            $
          </span>
          <span className="truncate">Ecom Profit Tools</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50/80 p-1 text-sm font-medium text-slate-600">
            {navigation.map((item) => (
              <li key={item.label}>
                <Link
                  className="block rounded-full px-4 py-2 transition hover:bg-white hover:text-brand-700 hover:shadow-sm"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <details className="group relative md:hidden">
          <summary
            aria-label="Open navigation menu"
            className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-brand-200 hover:text-brand-700 [&::-webkit-details-marker]:hidden"
          >
            <span className="relative h-4 w-5" aria-hidden="true">
              <span className="absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition group-open:top-2 group-open:rotate-45" />
              <span className="absolute left-0 top-2 h-0.5 w-5 rounded-full bg-current transition group-open:opacity-0" />
              <span className="absolute left-0 top-4 h-0.5 w-5 rounded-full bg-current transition group-open:top-2 group-open:-rotate-45" />
            </span>
          </summary>
          <nav
            aria-label="Mobile navigation"
            className="absolute right-0 top-12 w-[min(16rem,calc(100vw-2rem))] overflow-hidden rounded-lg border border-slate-200 bg-white p-2 text-sm font-semibold text-slate-700 shadow-xl shadow-slate-200/80"
          >
            {navigation.map((item) => (
              <Link
                className="block rounded-lg px-4 py-3 transition hover:bg-brand-50 hover:text-brand-700"
                href={item.href}
                key={item.label}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
