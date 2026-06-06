import Link from "next/link";

const toolLinks = [
  ["Shopify Profit", "/shopify-profit-calculator"],
  ["Etsy Fee", "/etsy-fee-calculator"],
  ["Amazon FBA Profit", "/amazon-fba-profit-calculator"],
  ["Profit Margin", "/profit-margin-calculator"],
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white/90">
      <div className="page-container grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-lg font-bold text-ink">Ecom Profit Tools</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">
            Free ecommerce and business calculators for sellers, marketers, and
            small business owners.
          </p>
          <p className="mt-4 text-xs text-slate-500">
            Calculations are estimates and do not constitute financial, tax, or
            legal advice.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">Popular tools</p>
          <ul className="mt-4 space-y-3 text-sm">
            {toolLinks.map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="transition hover:text-brand-700">
                  {label} Calculator
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">Company</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link className="transition hover:text-brand-700" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-brand-700" href="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="transition hover:text-brand-700"
                href="/free-ecommerce-profit-tracker-spreadsheet"
              >
                Free Profit Tracker
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-brand-700" href="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-brand-700" href="/editorial-policy">
                Editorial Policy
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-brand-700" href="/privacy-policy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-brand-700" href="/terms">
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-100 py-5 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} Ecom Profit Tools. All rights reserved.
      </div>
    </footer>
  );
}
