import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About SellerCalcTools | Free Seller Calculators",
  description:
    "SellerCalcTools provides free browser-based calculators that help ecommerce sellers and small businesses estimate profit, fees, ROI, and ad returns.",
  alternates: {
    canonical: "https://ecomprofittools.com/about",
  },
  openGraph: {
    title: "About SellerCalcTools | Free Seller Calculators",
    description:
      "Free calculators built to help ecommerce sellers and small business owners plan with clear estimates.",
    url: "https://ecomprofittools.com/about",
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
      <div className="mt-8 space-y-5 text-lg leading-8 text-slate-600">
        <p>
          SellerCalcTools is a free tool website for Shopify, Etsy, Amazon FBA,
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
      <Link className="primary-button mt-10" href="/#calculators">
        Browse calculators
      </Link>
    </main>
  );
}
