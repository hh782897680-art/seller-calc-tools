import type { Metadata } from "next";
import Link from "next/link";
import AdPlaceholder from "@/components/AdPlaceholder";
import CalculatorCard from "@/components/CalculatorCard";
import FAQ from "@/components/FAQ";
import {
  calculators,
  getCalculator,
  homeFaqs,
  type CalculatorSlug,
} from "@/data/calculators";

export const metadata: Metadata = {
  title: "Free Ecommerce Profit Calculators for Online Sellers | Ecom Profit Tools",
  description:
    "Free ecommerce profit and fee calculators for Shopify, Etsy, Amazon FBA, eBay, TikTok Shop, PayPal, Stripe, and WooCommerce sellers.",
  alternates: {
    canonical: "https://ecomprofittools.com/",
  },
  openGraph: {
    title: "Free Ecommerce Profit Calculators for Online Sellers | Ecom Profit Tools",
    description:
      "Free ecommerce profit and fee calculators for Shopify, Etsy, Amazon FBA, eBay, TikTok Shop, PayPal, Stripe, and WooCommerce sellers.",
    url: "https://ecomprofittools.com/",
    type: "website",
    siteName: "Ecom Profit Tools",
  },
};

const benefits = [
  {
    title: "Clear profit decisions",
    text: "See the costs behind a sale before adjusting prices, promotions, or advertising budgets.",
  },
  {
    title: "Seller-focused inputs",
    text: "Model channel fees, fulfillment, paid ads, margins, and return metrics using practical fields.",
  },
  {
    title: "Fast and private",
    text: "All calculations run in your browser. No signup or stored financial inputs are required.",
  },
];

const popularSlugs = [
  "shopify-profit-calculator",
  "etsy-fee-calculator",
  "amazon-fba-profit-calculator",
  "roas-calculator",
];

const calculatorCategories: { title: string; slugs: CalculatorSlug[] }[] = [
  {
    title: "Marketplace calculators",
    slugs: [
      "etsy-fee-calculator",
      "amazon-fba-profit-calculator",
      "ebay-fee-calculator",
      "tiktok-shop-profit-calculator",
    ],
  },
  {
    title: "Payment fee calculators",
    slugs: ["paypal-fee-calculator", "stripe-fee-calculator"],
  },
  {
    title: "Profit and margin calculators",
    slugs: [
      "profit-margin-calculator",
      "markup-calculator",
      "break-even-calculator",
    ],
  },
  {
    title: "Advertising calculators",
    slugs: ["roas-calculator", "roi-calculator"],
  },
];

export default function HomePage() {
  const popularCalculators = calculators.filter((calculator) =>
    popularSlugs.includes(calculator.slug),
  );

  return (
    <main>
      <section className="overflow-hidden border-b border-slate-200 bg-white">
        <div className="page-container grid items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <p className="inline-flex rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700">
              Free tools for ecommerce sellers
            </p>
            <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-ink sm:text-6xl">
              Free Ecommerce Profit Calculators for Online Sellers
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Calculate Shopify, Etsy, Amazon FBA, eBay, TikTok Shop, PayPal,
              Stripe, and WooCommerce profit, fees, margin, ROI, and ROAS.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link className="primary-button" href="#calculators">
                Browse calculators
              </Link>
              <Link className="secondary-button" href="/shopify-profit-calculator">
                Calculate Shopify profit
              </Link>
            </div>
          </div>
          <div className="surface-card p-5 sm:p-7">
            <div className="rounded-xl bg-ink p-6 text-white">
              <p className="text-sm text-slate-300">Example net profit</p>
              <p className="mt-2 text-4xl font-bold">$1,339.50</p>
              <div className="mt-7 grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-white/10 p-4">
                  <p className="text-xs text-slate-300">Margin</p>
                  <p className="mt-2 text-xl font-semibold">29.77%</p>
                </div>
                <div className="rounded-lg bg-white/10 p-4">
                  <p className="text-xs text-slate-300">ROI</p>
                  <p className="mt-2 text-xl font-semibold">42.38%</p>
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-500">
              Model Shopify, Etsy, Amazon FBA, advertising, pricing, and
              break-even scenarios with clear formulas.
            </p>
          </div>
        </div>
      </section>

      <section className="page-container py-16" id="calculators">
        <div className="max-w-2xl">
          <h2 className="section-heading">Ecommerce and business calculators</h2>
          <p className="mt-4 leading-7 text-slate-600">
            Select a free calculator to understand fees, set sustainable prices,
            review advertising, or plan the sales needed to cover costs.
          </p>
        </div>
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {calculators.map((calculator) => (
            <CalculatorCard calculator={calculator} key={calculator.slug} />
          ))}
        </div>
        <AdPlaceholder className="mt-12" />
      </section>

      <section className="border-y border-slate-200 bg-white py-16">
        <div className="page-container">
          <div className="max-w-2xl">
            <h2 className="section-heading">Calculator categories</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Choose tools by sales channel, payment fee, profitability, or
              advertising decision.
            </p>
          </div>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {calculatorCategories.map((category) => (
              <div className="surface-card p-6" key={category.title}>
                <h3 className="text-lg font-semibold text-ink">{category.title}</h3>
                <ul className="mt-5 space-y-3 text-sm">
                  {category.slugs.map((slug) => {
                    const calculator = getCalculator(slug);

                    return (
                      <li key={slug}>
                        <Link
                          className="flex items-center justify-between gap-3 rounded-lg bg-slate-50 px-3 py-3 transition hover:bg-brand-50 hover:text-brand-700"
                          href={`/${slug}`}
                        >
                          <span>{calculator.name}</span>
                          <span aria-hidden="true">&rarr;</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="page-container">
          <div className="max-w-2xl">
            <h2 className="section-heading">Why use Ecom Profit Tools?</h2>
            <p className="mt-4 leading-7 text-slate-600">
              A sale is only useful when it supports a healthy business. Use
              straightforward estimates to make better informed selling choices.
            </p>
          </div>
          <div className="mt-9 grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div className="rounded-2xl border border-slate-200 p-6" key={benefit.title}>
                <h3 className="text-lg font-semibold text-ink">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-container py-16">
        <h2 className="section-heading">Popular ecommerce calculators</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {popularCalculators.map((calculator) => (
            <CalculatorCard calculator={calculator} key={calculator.slug} />
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="page-container max-w-4xl">
          <h2 className="section-heading">Frequently asked questions</h2>
          <div className="mt-7">
            <FAQ items={homeFaqs} />
          </div>
        </div>
      </section>
    </main>
  );
}
