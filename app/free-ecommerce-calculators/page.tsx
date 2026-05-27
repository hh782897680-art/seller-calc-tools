import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import FAQ from "@/components/FAQ";
import {
  getCalculator,
  type CalculatorSlug,
  type FAQItem,
} from "@/data/calculators";

const pageUrl = "https://www.ecomprofittools.com/free-ecommerce-calculators";

export const metadata: Metadata = {
  title: "Free Ecommerce Calculators for Online Sellers",
  description:
    "Free ecommerce calculators for Shopify, Etsy, Amazon, eBay, TikTok Shop, WooCommerce, PayPal, Stripe, profit margin, ROI, ROAS, and break-even analysis.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Free Ecommerce Calculators for Online Sellers",
    description:
      "Free ecommerce calculators for Shopify, Etsy, Amazon, eBay, TikTok Shop, WooCommerce, PayPal, Stripe, profit margin, ROI, ROAS, and break-even analysis.",
    url: pageUrl,
    type: "website",
    siteName: "Ecom Profit Tools",
  },
};

const calculatorGroups: {
  title: string;
  description: string;
  slugs: CalculatorSlug[];
}[] = [
  {
    title: "Store and marketplace profit",
    description:
      "Model the revenue and operating costs behind orders on popular ecommerce channels.",
    slugs: [
      "shopify-profit-calculator",
      "etsy-profit-calculator",
      "amazon-fba-profit-calculator",
      "tiktok-shop-profit-calculator",
      "woocommerce-profit-calculator",
    ],
  },
  {
    title: "Seller and payment fees",
    description:
      "Review editable payment, platform, referral, or promoted listing fee assumptions.",
    slugs: [
      "shopify-fee-calculator",
      "etsy-fee-calculator",
      "amazon-referral-fee-calculator",
      "ebay-fee-calculator",
      "ebay-promoted-listing-fee-calculator",
      "tiktok-shop-fee-calculator",
      "paypal-fee-calculator",
      "stripe-fee-calculator",
    ],
  },
  {
    title: "Pricing and performance planning",
    description:
      "Compare margin, pricing, advertising return, investment return, and sales targets.",
    slugs: [
      "profit-margin-calculator",
      "markup-calculator",
      "roi-calculator",
      "roas-calculator",
      "break-even-calculator",
    ],
  },
];

const faqs: FAQItem[] = [
  {
    question: "Are these ecommerce calculators free to use?",
    answer:
      "Yes. Ecom Profit Tools calculators are free to use in your browser and do not require an account.",
  },
  {
    question: "Do calculator results show my exact seller fees?",
    answer:
      "No. Results are estimates based on the inputs you enter. Marketplace and payment fees can vary by country, currency, account terms, category, and policy changes, so verify applicable terms before making decisions.",
  },
  {
    question: "Which calculator should a new seller start with?",
    answer:
      "Start with a channel-specific profit or fee calculator for the platform where you sell, such as Shopify, Etsy, or Amazon FBA. Then use margin, ROAS, ROI, or break-even tools for broader planning.",
  },
  {
    question: "Can I use these tools before launching a product?",
    answer:
      "Yes. Sellers can compare possible prices, costs, fee assumptions, advertising budgets, and sales targets before listing a product or ordering inventory.",
  },
];

const platformCoverage = [
  "Shopify",
  "Etsy",
  "Amazon FBA",
  "eBay",
  "TikTok Shop",
  "PayPal",
  "Stripe",
  "WooCommerce",
];

const sellerAudiences = [
  {
    title: "Marketplace sellers",
    text: "Consider listing, referral, transaction, delivery, and optional promotion costs.",
  },
  {
    title: "Independent stores",
    text: "Review payment processing, product, shipping, hosting, app, and advertising assumptions.",
  },
  {
    title: "Campaign planners",
    text: "Compare margin, ROAS, ROI, and break-even scenarios before changing spend.",
  },
];

const categoryAnchorMap: Record<string, string> = {
  "Store and marketplace profit": "store-marketplace-profit",
  "Seller and payment fees": "seller-payment-fees",
  "Pricing and performance planning": "pricing-performance-planning",
};

const categoryIconMap: Record<string, ReactNode> = {
  "Store and marketplace profit": (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
      <path
        className="stroke-current"
        d="M4 6h16M6 6l1 12h10l1-12"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path className="stroke-current" d="M9 10v4M12 10v4M15 10v4" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  ),
  "Seller and payment fees": (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
      <rect
        className="stroke-current"
        height="14"
        rx="2.5"
        strokeWidth="1.8"
        width="18"
        x="3"
        y="5"
      />
      <path className="stroke-current" d="M3 10h18M7 14h4" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  ),
  "Pricing and performance planning": (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
      <path
        className="stroke-current"
        d="M5 16l5-5 4 4 5-6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path className="stroke-current" d="M15 9h4v4" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  ),
};

function serializeJsonLd(schema: object): string {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}

export default function FreeEcommerceCalculatorsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="bg-slate-50">
      <script
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }}
        type="application/ld+json"
      />

      <section className="overflow-hidden border-b border-slate-200 bg-gradient-to-b from-white via-slate-50 to-brand-50/50">
        <div className="page-container grid items-center gap-9 py-14 sm:py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
              Free seller tools
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Free Ecommerce Calculators for Online Sellers
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Ecom Profit Tools is a collection of free browser-based calculators
              for sellers who want to estimate fees, profit, margin, ROI, ROAS,
              and break-even sales before making pricing or promotion decisions.
              Inputs are editable, and results are estimates for planning.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link className="primary-button w-full sm:w-auto" href="#calculators">
                Browse calculators
              </Link>
              <Link className="secondary-button w-full sm:w-auto" href="/shopify-profit-calculator">
                Start with Shopify profit
              </Link>
            </div>
          </div>

          <div className="surface-card relative overflow-hidden p-5 sm:p-7">
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-100/80 blur-3xl" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                Seller planning snapshot
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-ink p-4 text-white sm:col-span-2">
                  <p className="text-xs text-slate-300">Available calculators</p>
                  <p className="mt-1 text-3xl font-bold">18 tools</p>
                  <p className="mt-2 text-sm text-slate-300">
                    Profit, fee, margin, ROI, ROAS, and break-even coverage.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-xs text-slate-500">Platform support</p>
                  <p className="mt-1 text-xl font-semibold text-ink">8 channels</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-xs text-slate-500">Calculation style</p>
                  <p className="mt-1 text-xl font-semibold text-ink">Input-first</p>
                </div>
              </div>
              <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Platform coverage
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {platformCoverage.map((platform) => (
                    <span
                      className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700"
                      key={platform}
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="page-container py-8">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
            Platform badges
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5 sm:gap-3">
            {platformCoverage.map((platform) => (
              <span
                className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700"
                key={platform}
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="page-container py-14 sm:py-16">
        <div className="max-w-3xl">
          <h2 className="section-heading">Who is this for?</h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            These tools are for Shopify store owners, Etsy makers, Amazon and
            eBay marketplace sellers, TikTok Shop merchants, WooCommerce store
            operators, and small businesses accepting online payments. They are
            useful when a seller needs a straightforward estimate before
            choosing a price, comparing channels, planning advertising, or
            reviewing the costs behind a sale.
          </p>
        </div>
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {sellerAudiences.map((audience) => (
            <div className="surface-card p-6" key={audience.title}>
              <h3 className="text-lg font-semibold text-ink">{audience.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{audience.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-14 sm:py-16" id="calculators">
        <div className="page-container">
          <div className="max-w-3xl">
            <h2 className="section-heading">What calculators are included?</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Choose the calculator that matches the decision you are making.
              Each tool page explains its inputs, formulas, assumptions, and
              common mistakes in plain English.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {calculatorGroups.map((group) => (
              <a
                className="surface-card group block p-6 transition hover:border-brand-100 hover:shadow-md"
                href={`#${categoryAnchorMap[group.title]}`}
                key={`summary-${group.title}`}
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  {categoryIconMap[group.title]}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink group-hover:text-brand-600">
                  {group.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {group.description}
                </p>
                <p className="mt-4 text-sm font-semibold text-brand-600">
                  {group.slugs.length} tools in this category &rarr;
                </p>
              </a>
            ))}
          </div>

          <div className="mt-10 space-y-8">
            {calculatorGroups.map((group) => (
              <section
                className="surface-card p-6 sm:p-7"
                id={categoryAnchorMap[group.title]}
                key={group.title}
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-ink">{group.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {group.description}
                    </p>
                  </div>
                  <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                    {group.slugs.length} calculators
                  </span>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.slugs.map((slug) => {
                    const calculator = getCalculator(slug);

                    return (
                      <Link
                        className="group/card flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 transition hover:border-brand-100 hover:shadow-md"
                        href={`/${calculator.slug}`}
                        key={calculator.slug}
                      >
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-600">
                          Calculator
                        </p>
                        <h4 className="mt-2 font-semibold text-ink group-hover/card:text-brand-600">
                          {calculator.name}
                        </h4>
                        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                          {calculator.shortDescription}
                        </p>
                        <span className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition group-hover/card:bg-brand-700 sm:w-auto">
                          Open {calculator.name} &rarr;
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="page-container py-14 sm:py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="surface-card p-6 sm:p-7">
            <h2 className="section-heading">How sellers can use these tools</h2>
            <ol className="mt-6 space-y-4 text-base leading-8 text-slate-600">
              {[
                "Choose a tool for the channel or question being reviewed, such as an Etsy order, a PayPal payment, or an advertising campaign.",
                "Enter costs and fee assumptions that match the product, account, payment setup, and period being considered.",
                "Compare more than one scenario, such as a price change, shipping offer, promotion, or advertising budget.",
                "Check important assumptions against current account terms and actual reports before taking action.",
              ].map((step, index) => (
                <li className="flex gap-3" key={step}>
                  <span
                    aria-hidden="true"
                    className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-600"
                  >
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="surface-card p-6 sm:p-7">
            <h2 className="section-heading">Why accurate profit estimates matter</h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-slate-600">
              <p>
                Sales totals do not show what a seller keeps. Product cost,
                shipping, payment charges, marketplace fees, advertising,
                returns, subscriptions, and discounts may all reduce the margin
                available from an order.
              </p>
              <p>
                A useful estimate makes those assumptions visible before a
                seller increases inventory, offers a discount, or scales an ad
                campaign. Calculator results are not guaranteed fee quotes or
                financial advice. Actual results depend on current terms and
                the seller&apos;s records.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-14 sm:py-16">
        <div className="page-container max-w-5xl">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-900 via-ink to-brand-700 p-7 text-white sm:p-8">
            <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-white/15 blur-2xl" />
            <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-widest text-slate-100">
                  Seller workflow resource
                </p>
                <h2 className="mt-3 text-2xl font-semibold">Exploring AI support for ecommerce work?</h2>
                <p className="mt-4 text-base leading-8 text-slate-100">
                  After estimating fees, profit, and advertising room, review our
                  guide to AI tool categories for ecommerce sellers, including
                  product copy, photos, SEO, ads, customer support, and email
                  marketing workflows.
                </p>
              </div>
              <Link
                className="inline-flex w-full items-center justify-center rounded-lg border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20 sm:w-auto"
                href="/ai-tools-for-ecommerce-sellers"
              >
                Explore AI tools
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-14 sm:py-16">
        <div className="page-container max-w-4xl">
          <h2 className="section-heading">Frequently asked questions</h2>
          <div className="mt-7">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>
    </main>
  );
}
