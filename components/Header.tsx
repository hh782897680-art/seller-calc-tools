import Link from "next/link";

const navigation = [
  { label: "Calculators", href: "/#calculators" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="page-container flex h-16 items-center justify-between gap-6">
        <Link
          aria-label="Ecom Profit Tools home"
          href="/"
          className="flex items-center gap-2 text-lg font-bold text-ink"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-lg text-white">
            $
          </span>
          <span className="inline sm:hidden">Ecom Tools</span>
          <span className="hidden sm:inline">Ecom Profit Tools</span>
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-3 text-sm font-medium text-slate-600 sm:gap-5 md:gap-7">
            {navigation.map((item) => (
              <li key={item.label}>
                <Link className="transition hover:text-brand-600" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
