import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Editorial Policy | Ecom Profit Tools",
  description:
    "How Ecom Profit Tools prepares, reviews, and updates ecommerce calculator content, examples, and educational guides.",
  alternates: {
    canonical: "https://www.ecomprofittools.com/editorial-policy",
  },
  openGraph: {
    title: "Editorial Policy | Ecom Profit Tools",
    description:
      "Learn how Ecom Profit Tools writes and reviews calculator pages, examples, and educational ecommerce content.",
    url: "https://www.ecomprofittools.com/editorial-policy",
    type: "website",
  },
};

const standards = [
  {
    title: "Formula-first explanations",
    text: "Calculator pages show the formula or calculation logic in plain language so sellers can understand what each input changes.",
  },
  {
    title: "Practical seller examples",
    text: "Guides and calculator pages include examples based on common ecommerce workflows such as pricing, marketplace fees, ad spend, and break-even planning.",
  },
  {
    title: "Clear limits",
    text: "Results are educational estimates. They are not tax, accounting, legal, or official marketplace advice.",
  },
  {
    title: "Review and correction process",
    text: "Reports about outdated fee assumptions, unclear formulas, broken links, or missing context are reviewed through the contact channel.",
  },
];

export default function EditorialPolicyPage() {
  return (
    <main className="page-container max-w-4xl py-14 sm:py-20">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
        Editorial policy
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
        How Ecom Profit Tools prepares calculator content
      </h1>
      <p className="mt-4 text-sm text-slate-500">Last updated: June 2, 2026</p>
      <div className="mt-8 space-y-5 text-lg leading-8 text-slate-600">
        <p>
          Ecom Profit Tools publishes free calculators and educational guides for
          ecommerce sellers, marketers, and small business owners. The goal is to
          help readers understand common profit, fee, margin, ROI, ROAS, and
          break-even calculations before making pricing or campaign decisions.
        </p>
        <p>
          We prioritize original explanations, transparent formulas, concrete
          examples, and clear limitations. Marketplace and payment processor terms
          can change, so readers should verify important assumptions against their
          own account dashboards, invoices, contracts, and current official fee
          schedules.
        </p>
      </div>

      <section className="mt-10 grid gap-4 sm:grid-cols-2">
        {standards.map((item) => (
          <div className="rounded-2xl border border-slate-200 bg-white p-5" key={item.title}>
            <h2 className="text-lg font-semibold text-ink">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-2xl font-semibold text-ink">Independence and affiliations</h2>
        <div className="mt-4 space-y-4 text-base leading-8 text-slate-600">
          <p>
            Ecom Profit Tools is not an official calculator from Shopify, Etsy,
            Amazon, eBay, TikTok, WooCommerce, PayPal, Stripe, Meta, or any other
            marketplace, payment processor, advertising network, or ecommerce
            platform mentioned on the site.
          </p>
          <p>
            Brand names are used only to identify the platform or seller workflow
            being discussed. If a page includes a recommendation, it should still
            be evaluated against the reader&apos;s own business needs, costs, and
            current provider terms.
          </p>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-ink">Corrections</h2>
        <p className="mt-4 text-base leading-8 text-slate-600">
          To report an unclear explanation, outdated assumption, broken link, or
          calculator issue, contact us with the page URL and the detail that needs
          review.
        </p>
        <Link className="primary-button mt-6" href="/contact">
          Contact Ecom Profit Tools
        </Link>
      </section>
    </main>
  );
}
