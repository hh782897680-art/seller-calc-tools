import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import FAQ from "@/components/FAQ";
import {
  calculators,
  getCalculator,
  homeFaqs,
  type CalculatorData,
  type CalculatorSlug,
} from "@/data/calculators";

export const metadata: Metadata = {
  title: "Ecommerce Profit Calculator Tools",
  description:
    "Free Shopify, Etsy, Amazon, and eBay seller calculators for estimating ecommerce profit, marketplace fees, margin, ROI, and ROAS.",
  alternates: {
    canonical: "https://www.ecomprofittools.com/",
  },
  openGraph: {
    title: "Ecommerce Profit Calculator Tools",
    description:
      "Free Shopify, Etsy, Amazon, and eBay seller calculators for estimating ecommerce profit, marketplace fees, margin, ROI, and ROAS.",
    url: "https://www.ecomprofittools.com/",
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
      "etsy-profit-calculator",
      "amazon-fba-profit-calculator",
      "amazon-referral-fee-calculator",
      "ebay-fee-calculator",
      "ebay-promoted-listing-fee-calculator",
      "tiktok-shop-profit-calculator",
      "tiktok-shop-fee-calculator",
    ],
  },
  {
    title: "Payment fee calculators",
    slugs: [
      "shopify-fee-calculator",
      "paypal-fee-calculator",
      "stripe-fee-calculator",
    ],
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

const howItWorksSteps = [
  {
    title: "Choose your selling channel",
    text: "Start with the calculator that matches your platform and selling model.",
  },
  {
    title: "Enter costs, fees and ad spend",
    text: "Use real numbers for product costs, marketplace fees, shipping, and paid traffic.",
  },
  {
    title: "Compare profit, margin, ROI and ROAS",
    text: "Instantly view your key metrics and test different pricing or spend scenarios.",
  },
];

const dashboardBreakdown = [
  {
    label: "Product + COGS",
    value: "$2,300",
    widthClass: "w-[82%]",
  },
  {
    label: "Shipping + fulfillment",
    value: "$900",
    widthClass: "w-[62%]",
  },
  {
    label: "Ads",
    value: "$800",
    widthClass: "w-[56%]",
  },
  {
    label: "Payment fees",
    value: "$160.50",
    widthClass: "w-[36%]",
  },
];

type IconKey =
  | "calculator"
  | "shoppingCart"
  | "receipt"
  | "package"
  | "trending"
  | "creditCard"
  | "scale"
  | "barChart";

function getCalculatorIconKey(slug: CalculatorSlug): IconKey {
  if (slug.includes("shopify") || slug.includes("woocommerce")) {
    return "shoppingCart";
  }

  if (slug.includes("amazon")) {
    return "package";
  }

  if (slug.includes("paypal") || slug.includes("stripe")) {
    return "creditCard";
  }

  if (slug.includes("break-even") || slug.includes("ebay")) {
    return "scale";
  }

  if (slug.includes("roas") || slug.includes("roi") || slug.includes("margin")) {
    return "trending";
  }

  if (slug.includes("fee") || slug.includes("markup")) {
    return "receipt";
  }

  if (slug.includes("tiktok")) {
    return "barChart";
  }

  return "calculator";
}

const iconWrapperClassByKey: Record<IconKey, string> = {
  calculator: "bg-slate-100 text-slate-700",
  shoppingCart: "bg-blue-100 text-blue-700",
  receipt: "bg-amber-100 text-amber-700",
  package: "bg-emerald-100 text-emerald-700",
  trending: "bg-violet-100 text-violet-700",
  creditCard: "bg-cyan-100 text-cyan-700",
  scale: "bg-orange-100 text-orange-700",
  barChart: "bg-fuchsia-100 text-fuchsia-700",
};

const iconByKey: Record<IconKey, ReactNode> = {
  calculator: (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
      <rect
        className="stroke-current"
        height="18"
        rx="3"
        strokeWidth="1.8"
        width="14"
        x="5"
        y="3"
      />
      <path
        className="stroke-current"
        d="M8 7h8M8 11h2m4 0h2M8 15h2m4 0h2"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  ),
  shoppingCart: (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
      <path
        className="stroke-current"
        d="M4 5h2l2 10h9l2-7H7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <circle className="stroke-current" cx="10" cy="19" r="1.5" strokeWidth="1.8" />
      <circle className="stroke-current" cx="17" cy="19" r="1.5" strokeWidth="1.8" />
    </svg>
  ),
  receipt: (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
      <path
        className="stroke-current"
        d="M7 3h10v18l-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5V3Z"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path className="stroke-current" d="M9 8h6M9 12h6" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  ),
  package: (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
      <path
        className="stroke-current"
        d="M4 8.5 12 4l8 4.5v7L12 20l-8-4.5v-7Z"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path className="stroke-current" d="M12 4v16" strokeWidth="1.8" />
    </svg>
  ),
  trending: (
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
  creditCard: (
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
  scale: (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
      <path className="stroke-current" d="M12 4v14M7 20h10" strokeLinecap="round" strokeWidth="1.8" />
      <path
        className="stroke-current"
        d="M4 8h16M6 8l-2 4h4l-2-4Zm12 0-2 4h4l-2-4Z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  ),
  barChart: (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
      <path className="stroke-current" d="M4 20h16" strokeLinecap="round" strokeWidth="1.8" />
      <path className="stroke-current" d="M7 20v-7M12 20V9m5 11V6" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  ),
};

function HomepageCalculatorCard({ calculator }: { calculator: CalculatorData }) {
  const iconKey = getCalculatorIconKey(calculator.slug);

  return (
    <Link
      className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition duration-200 hover:-translate-y-1 hover:border-brand-100 hover:shadow-xl"
      href={`/${calculator.slug}`}
    >
      <div className="flex items-start justify-between gap-3">
        <p className="inline-flex rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-700">
          {calculator.category}
        </p>
        <span
          className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${iconWrapperClassByKey[iconKey]}`}
        >
          {iconByKey[iconKey]}
        </span>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-ink group-hover:text-brand-600">
        {calculator.name}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
        {calculator.shortDescription}
      </p>
      <span className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition group-hover:bg-brand-700 sm:w-auto">
        Use calculator &rarr;
      </span>
    </Link>
  );
}

export default function HomePage() {
  const popularCalculators = calculators.filter((calculator) =>
    popularSlugs.includes(calculator.slug),
  );

  return (
    <main>
      <section className="overflow-hidden border-b border-slate-200 bg-gradient-to-b from-white via-slate-50 to-brand-50/40">
        <div className="page-container grid items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
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
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link className="primary-button w-full sm:w-auto" href="#calculators">
                Browse calculators
              </Link>
              <Link className="secondary-button w-full sm:w-auto" href="/shopify-profit-calculator">
                Calculate Shopify profit
              </Link>
            </div>
          </div>

          <div className="surface-card relative w-full max-w-xl overflow-hidden p-5 shadow-xl sm:ml-auto sm:p-7">
            <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-brand-100/80 blur-3xl" />
            <div className="relative">
              <div className="rounded-2xl bg-ink p-5 text-white sm:p-6">
                <p className="text-sm text-slate-300">Example net profit</p>
                <p className="mt-2 text-3xl font-bold sm:text-4xl">$1,339.50</p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-white/10 p-3">
                    <p className="text-xs text-slate-300">Margin</p>
                    <p className="mt-1 text-lg font-semibold">29.77%</p>
                  </div>
                  <div className="rounded-lg bg-white/10 p-3">
                    <p className="text-xs text-slate-300">ROI</p>
                    <p className="mt-1 text-lg font-semibold">42.38%</p>
                  </div>
                  <div className="col-span-2 rounded-lg bg-white/10 p-3">
                    <p className="text-xs text-slate-300">Break-even ROAS</p>
                    <p className="mt-1 text-lg font-semibold">5.63x</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Cost breakdown
                  </p>
                  <p className="text-xs font-semibold text-slate-500">100 orders</p>
                </div>
                <ul className="mt-3 space-y-3">
                  {dashboardBreakdown.map((item) => (
                    <li key={item.label}>
                      <div className="mb-1 flex items-center justify-between text-xs text-slate-600">
                        <span>{item.label}</span>
                        <span>{item.value}</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                        <div className={`h-full rounded-full bg-brand-500 ${item.widthClass}`} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="page-container py-7">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
            Platform coverage
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

      <section className="page-container py-16" id="calculators">
        <div className="max-w-2xl">
          <h2 className="section-heading">Ecommerce and business calculators</h2>
          <p className="mt-4 leading-7 text-slate-600">
            Select a free calculator to understand fees, set sustainable prices,
            review advertising, or plan the sales needed to cover costs.
          </p>
        </div>
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {calculators.map((calculator) => (
            <HomepageCalculatorCard calculator={calculator} key={calculator.slug} />
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-gradient-to-b from-white to-slate-50 py-16">
        <div className="page-container">
          <div className="max-w-2xl">
            <h2 className="section-heading">How it works</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Use the same workflow top sellers use to evaluate product and
              campaign performance before scaling spend.
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {howItWorksSteps.map((step, index) => (
              <div className="surface-card p-6" key={step.title}>
                <p className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white">
                  {index + 1}
                </p>
                <h3 className="mt-4 text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="page-container">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-900 via-ink to-brand-700 px-6 py-8 text-white shadow-card sm:px-8">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
            <div className="relative flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  AI Tools for E-commerce Sellers
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-100">
                  Find practical AI tools for product descriptions, images,
                  SEO, ads, customer support and email marketing.
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
                          className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 transition hover:border-brand-100 hover:bg-brand-50 hover:text-brand-700"
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

      <section className="bg-slate-50 py-16">
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
              <div
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card"
                key={benefit.title}
              >
                <h3 className="text-lg font-semibold text-ink">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-container py-16">
        <h2 className="section-heading">Popular ecommerce calculators</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {popularCalculators.map((calculator) => (
            <HomepageCalculatorCard calculator={calculator} key={calculator.slug} />
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
