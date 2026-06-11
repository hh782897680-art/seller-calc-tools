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
  title: "Free Ecommerce Profit Calculators for Sellers | Ecom Profit Tools",
  description:
    "Free ecommerce calculators updated for 2026. Estimate Shopify, Etsy, Amazon, eBay, PayPal, Stripe fees, profit margin, ROI, ROAS, and break-even numbers for online sellers.",
  alternates: {
    canonical: "https://www.ecomprofittools.com/",
  },
  openGraph: {
    title: "Free Ecommerce Profit Calculators for Sellers | Ecom Profit Tools",
    description:
      "Free ecommerce calculators updated for 2026. Estimate Shopify, Etsy, Amazon, eBay, PayPal, Stripe fees, profit margin, ROI, ROAS, and break-even numbers for online sellers.",
    url: "https://www.ecomprofittools.com/",
    type: "website",
    siteName: "Ecom Profit Tools",
  },
};

const trustValues: { title: string; text: string; iconKey: IconKey }[] = [
  {
    title: "No signup required",
    text: "Open any calculator and start modeling product costs, fees, ads, and margin without creating an account.",
    iconKey: "calculator",
  },
  {
    title: "Works in your browser",
    text: "Calculations run in the current browser session, so sellers can test scenarios quickly and privately.",
    iconKey: "creditCard",
  },
  {
    title: "Built for ecommerce sellers",
    text: "Use practical fields for channel fees, fulfillment, paid ads, margins, ROI, ROAS, and break-even planning.",
    iconKey: "shoppingCart",
  },
  {
    title: "Export and compare results",
    text: "Copy results or export CSV from calculator workspaces, then compare pricing and promotion scenarios.",
    iconKey: "trending",
  },
];

const sellerUseCases: { title: string; text: string; iconKey: IconKey }[] = [
  {
    title: "Check product profitability before launch",
    text: "Model price, product cost, shipping, fees, and ad spend before ordering inventory or publishing a listing.",
    iconKey: "package",
  },
  {
    title: "Compare fees across platforms",
    text: "Review Shopify, Etsy, Amazon, eBay, TikTok Shop, PayPal, Stripe, and WooCommerce assumptions with matching tools.",
    iconKey: "scale",
  },
  {
    title: "Estimate break-even ROAS",
    text: "See the revenue multiple an ad campaign needs before paid traffic starts reducing contribution profit.",
    iconKey: "trending",
  },
  {
    title: "Plan discounts and promotions",
    text: "Test price cuts, shipping offers, bundles, and acquisition cost changes before launching a campaign.",
    iconKey: "receipt",
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

const heroStats = [
  "Updated for 2026",
  "18 free calculators",
  "No signup",
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

const platformProfitExamples = [
  {
    title: "Shopify product check",
    text: "A store sells an item for $48. Product, shipping, packaging, payment, and advertising costs total $34 per order, leaving $14 before monthly overhead. The useful next step is to test a discount or higher acquisition cost in the Shopify Profit Calculator instead of assuming the $48 sale is profit.",
    href: "/shopify-profit-calculator",
  },
  {
    title: "Etsy listing check",
    text: "An Etsy seller collects $42 for an item and shipping. Materials, postage, listing, transaction, and payment costs total $24. If an Offsite Ads fee applies, the remaining profit changes again. Compare attributed and ordinary orders before deciding whether the listing price works.",
    href: "/etsy-fee-calculator",
  },
  {
    title: "Amazon FBA SKU check",
    text: "An FBA product sells for $35, but referral, fulfillment, landed inventory, inbound freight, storage, and PPC total $25 per unit. The $10 estimate should be stress-tested with a lower selling price and higher ad cost before a reorder is approved.",
    href: "/amazon-fba-profit-calculator",
  },
];

const pricingWorkflow = [
  "Define one product, channel, and measurement period.",
  "Collect net selling price and every cost that belongs to the same scope.",
  "Calculate profit, margin, and any channel-specific fees.",
  "Run a downside case with higher ads, shipping, returns, or discounts.",
  "Compare the estimate with actual payouts and update the assumptions.",
];

const calculationMistakes = [
  "Treating revenue, payout, or ad-attributed sales as profit.",
  "Mixing per-unit costs with monthly or campaign totals.",
  "Leaving out payment fees, returns, packaging, or shipping subsidies.",
  "Using a generic fee rate without checking the seller's account and market.",
  "Scaling a campaign from ROAS alone without checking contribution margin.",
];

const dashboardMetrics = [
  {
    label: "Net Profit",
    value: "$1,284",
    helper: "after variable costs",
  },
  {
    label: "Margin",
    value: "32.4%",
    helper: "profit share",
  },
  {
    label: "ROI",
    value: "148%",
    helper: "return on cost",
  },
  {
    label: "Break-even ROAS",
    value: "2.7x",
    helper: "ad efficiency target",
  },
  {
    label: "Fees",
    value: "$186",
    helper: "platform + payment",
  },
];

const dashboardBreakdown = [
  {
    label: "Revenue",
    value: "$3,960",
    widthClass: "w-[92%]",
  },
  {
    label: "COGS + fulfillment",
    value: "$1,680",
    widthClass: "w-[58%]",
  },
  {
    label: "Ads",
    value: "$810",
    widthClass: "w-[42%]",
  },
  {
    label: "Fees",
    value: "$186",
    widthClass: "w-[28%]",
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
      className="dashboard-card group flex h-full flex-col p-5 transition duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl"
      href={`/${calculator.slug}`}
    >
      <div className="flex items-start justify-between gap-3">
        <p className="soft-badge bg-slate-50">
          {calculator.category}
        </p>
        <span
          className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${iconWrapperClassByKey[iconKey]}`}
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
      <span className="mt-6 inline-flex items-center text-sm font-semibold text-brand-700 transition group-hover:text-brand-600">
        Use calculator <span aria-hidden="true" className="ml-1 transition group-hover:translate-x-0.5">&rarr;</span>
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
      <section className="relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_48%,#f6f8fb_100%)]">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]"
        />
        <div className="page-container relative grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
          <div>
            <p className="eyebrow">
              Free to use | No signup required
            </p>
            <h1 className="mt-6 max-w-3xl text-4xl font-bold text-ink sm:text-6xl">
              Free Ecommerce Profit Calculators for Online Sellers
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Free ecommerce calculators updated for 2026 to estimate Shopify,
              Etsy, Amazon, eBay, PayPal, and Stripe fees, plus profit, margin,
              ROI, ROAS, and break-even numbers.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link className="primary-button w-full sm:w-auto" href="#calculators">
                Browse calculators
              </Link>
              <Link className="secondary-button w-full sm:w-auto" href="/shopify-profit-calculator">
                Calculate Shopify profit
              </Link>
            </div>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {heroStats.map((stat) => (
                <span className="soft-badge bg-white/90" key={stat}>
                  {stat}
                </span>
              ))}
            </div>
          </div>

          <div className="dashboard-card w-full max-w-xl overflow-hidden p-0 shadow-xl shadow-slate-200/80 sm:ml-auto">
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 bg-gradient-to-b from-white to-slate-50 px-5 py-4 sm:px-6">
              <div>
                <p className="text-sm font-semibold text-ink">Profit snapshot</p>
                <p className="mt-1 text-xs text-slate-500">Example dashboard preview</p>
              </div>
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                Live estimate
              </span>
            </div>

            <div className="grid gap-3 p-5 sm:grid-cols-2 sm:p-6">
              {dashboardMetrics.map((metric, index) => (
                <div
                  className={`rounded-lg border border-slate-200 p-4 ${
                    index === 0 ? "bg-ink text-white sm:col-span-2" : "bg-slate-50"
                  }`}
                  key={metric.label}
                >
                  <div className="flex items-start justify-between gap-3">
                    <p
                      className={`text-sm font-medium ${
                        index === 0 ? "text-slate-200" : "text-slate-500"
                      }`}
                    >
                      {metric.label}
                    </p>
                    <span
                      className={`h-2 w-2 rounded-full ${
                        index === 0 ? "bg-emerald-300" : "bg-brand-500"
                      }`}
                    />
                  </div>
                  <p
                    className={`mt-2 font-bold ${
                      index === 0 ? "text-4xl text-white" : "text-2xl text-ink"
                    }`}
                  >
                    {metric.value}
                  </p>
                  <p
                    className={`mt-1 text-xs ${
                      index === 0 ? "text-slate-300" : "text-slate-500"
                    }`}
                  >
                    {metric.helper}
                  </p>
                </div>
              ))}
            </div>

            <div className="mx-5 mb-5 rounded-lg border border-slate-200 bg-white p-4 sm:mx-6 sm:mb-6">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-semibold uppercase text-slate-500">
                  Cost breakdown
                </p>
                <p className="text-xs font-semibold text-slate-500">Sample order set</p>
              </div>
              <ul className="mt-3 space-y-3">
                {dashboardBreakdown.map((item) => (
                  <li key={item.label}>
                    <div className="mb-1 flex items-center justify-between gap-4 text-xs text-slate-600">
                      <span>{item.label}</span>
                      <span className="font-semibold text-slate-900">{item.value}</span>
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
      </section>

      <section className="border-b border-slate-200 bg-white/85">
        <div className="page-container py-7">
          <div className="dashboard-card flex flex-col gap-5 p-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase text-brand-700">
                Platform coverage
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Dedicated tools for major ecommerce channels, payment fees, ad metrics, and pricing decisions.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5 md:justify-end">
              {platformCoverage.map((platform) => (
                <span className="soft-badge bg-slate-50" key={platform}>
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-16">
        <div className="page-container">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <h2 className="section-heading">Why use Ecom Profit Tools?</h2>
              <p className="mt-4 leading-7 text-slate-600">
                A sale is only useful when it supports a healthy business. Use
                straightforward estimates to make better informed selling choices.
              </p>
            </div>
            <p className="max-w-sm text-sm leading-6 text-slate-500">
              Built for quick pricing, fee, margin, ROI, ROAS, and break-even
              checks across common ecommerce selling channels.
            </p>
          </div>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trustValues.map((value) => (
              <div
                className="dashboard-card bg-slate-50 p-5"
                key={value.title}
              >
                <span
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${iconWrapperClassByKey[value.iconKey]}`}
                >
                  {iconByKey[value.iconKey]}
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{value.text}</p>
              </div>
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
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {calculators.map((calculator) => (
            <HomepageCalculatorCard calculator={calculator} key={calculator.slug} />
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="page-container">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <h2 className="section-heading">Use cases for ecommerce sellers</h2>
              <p className="mt-4 leading-7 text-slate-600">
                Use the calculators when a selling decision depends on the
                relationship between price, cost, fees, promotion, and paid traffic.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {sellerUseCases.map((useCase) => (
                <div
                  className="dashboard-card p-5"
                  key={useCase.title}
                >
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${iconWrapperClassByKey[useCase.iconKey]}`}
                  >
                    {iconByKey[useCase.iconKey]}
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-ink">
                    {useCase.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {useCase.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
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
              <div
                className="dashboard-card p-6"
                key={step.title}
              >
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

      <section className="border-b border-slate-200 bg-white py-16">
        <div className="page-container">
          <div className="max-w-3xl">
            <p className="eyebrow">Seller decision guide</p>
            <h2 className="mt-5 section-heading">
              How ecommerce sellers should use these calculators
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Ecom Profit Tools is for independent store owners, marketplace
              sellers, product researchers, and marketers who need a fast
              planning estimate before changing a price, launching a promotion,
              ordering inventory, or increasing ad spend. Start with one
              clearly defined scenario. Use numbers from current supplier
              quotes, shipping invoices, payout reports, and advertising
              dashboards rather than relying on a generic benchmark.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              A calculator result is most useful when it leads to a comparison.
              Run a base case using recent actual costs, then change one
              assumption at a time. Test a lower price, a higher return
              allowance, a more expensive shipping zone, or a weaker campaign.
              The difference between those cases shows where the business is
              sensitive and which input deserves attention.
            </p>
          </div>

          <div className="mt-9 grid gap-5 lg:grid-cols-3">
            {platformProfitExamples.map((example) => (
              <article className="dashboard-card flex flex-col p-6" key={example.title}>
                <h3 className="text-lg font-semibold text-ink">{example.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                  {example.text}
                </p>
                <Link
                  className="mt-5 text-sm font-semibold text-brand-700 hover:underline"
                  href={example.href}
                >
                  Test this type of scenario <span aria-hidden="true">&rarr;</span>
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-9 grid gap-6 lg:grid-cols-2">
            <section className="dashboard-card p-6">
              <h3 className="text-xl font-semibold text-ink">
                Pricing and margin decision workflow
              </h3>
              <ol className="mt-5 space-y-4">
                {pricingWorkflow.map((step, index) => (
                  <li className="flex gap-3 text-sm leading-7 text-slate-600" key={step}>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 font-bold text-brand-700">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section className="dashboard-card p-6">
              <h3 className="text-xl font-semibold text-ink">
                Common profit calculation mistakes
              </h3>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
                {calculationMistakes.map((mistake) => (
                  <li className="border-l-2 border-amber-300 pl-4" key={mistake}>
                    {mistake}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-7 text-slate-600">
                Review the{" "}
                <Link className="font-semibold text-brand-700 hover:underline" href="/methodology">
                  calculator methodology
                </Link>{" "}
                for formula scope, source checks, update practices, and
                limitations.
              </p>
            </section>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="page-container">
          <div className="dashboard-card overflow-hidden bg-gradient-to-r from-slate-900 via-ink to-brand-700 px-6 py-8 text-white sm:px-8">
            <div className="flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold sm:text-3xl">
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
              <div
                className="dashboard-card p-6"
                key={category.title}
              >
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
