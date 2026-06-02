import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Ecom Profit Tools | Free Seller Calculators",
  description:
    "Ecom Profit Tools provides free browser-based calculators that help ecommerce sellers and small businesses estimate profit, fees, ROI, and ad returns.",
  alternates: {
    canonical: "https://www.ecomprofittools.com/about",
  },
  openGraph: {
    title: "About Ecom Profit Tools | Free Seller Calculators",
    description:
      "Free calculators built to help ecommerce sellers and small business owners plan with clear estimates.",
    url: "https://www.ecomprofittools.com/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="page-container max-w-4xl py-14 sm:py-20">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
        About
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
        Tools for practical seller decisions
      </h1>
      <p className="mt-4 text-sm text-slate-500">Last updated: June 2, 2026</p>
      <div className="mt-8 space-y-5 text-lg leading-8 text-slate-600">
        <p>
          Ecom Profit Tools is a free tool website for Shopify, Etsy, Amazon FBA,
          independent store sellers, marketers, and small business owners. It is
          designed to make common business calculations quick to run and easy to
          understand.
        </p>
        <p>
          Our calculators help estimate profit, marketplace fees, profit margin,
          markup, return on investment, advertising return, and break-even sales.
          Calculations happen directly in your browser and do not require a login.
        </p>
        <p>
          Results provide general educational estimates only. Actual fees,
          shipping charges, tax treatment, advertising attribution, and business
          costs vary. Always verify important inputs and decisions using current
          records and appropriate professional guidance.
        </p>
      </div>
      <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-2xl font-semibold text-ink">How the content is maintained</h2>
        <div className="mt-4 space-y-4 text-base leading-8 text-slate-600">
          <p>
            Calculator pages are written around formulas, example inputs, common
            seller mistakes, and plain-language notes about where estimates can
            differ from real invoices or marketplace statements.
          </p>
          <p>
            Fee-sensitive pages include review notes where platform terms may vary
            by country, category, account type, currency, or seller settings. When
            a calculator covers third-party marketplaces or payment processors,
            it is not presented as an official statement from those platforms.
          </p>
          <p>
            Corrections and update requests can be sent through the contact page.
            We review reports about unclear formulas, outdated fee assumptions,
            broken links, and content that needs stronger sourcing or examples.
          </p>
        </div>
      </section>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link className="primary-button" href="/#calculators">
          Browse calculators
        </Link>
        <Link className="secondary-button" href="/editorial-policy">
          Read editorial policy
        </Link>
      </div>
    </main>
  );
}
