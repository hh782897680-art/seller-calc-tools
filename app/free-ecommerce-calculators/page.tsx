import type { Metadata } from "next";
import Link from "next/link";
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
    <main>
      <script
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }}
        type="application/ld+json"
      />

      <section className="border-b border-slate-200 bg-white">
        <div className="page-container py-14 sm:py-20">
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
          <div className="mt-9 flex flex-wrap gap-4">
            <Link className="primary-button" href="#calculators">
              Browse calculators
            </Link>
            <Link className="secondary-button" href="/shopify-profit-calculator">
              Start with Shopify profit
            </Link>
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
          {[
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
          ].map((audience) => (
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
          <div className="mt-10 space-y-10">
            {calculatorGroups.map((group) => (
              <section key={group.title}>
                <h3 className="text-xl font-semibold text-ink">{group.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {group.description}
                </p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.slugs.map((slug) => {
                    const calculator = getCalculator(slug);

                    return (
                      <Link
                        className="surface-card group flex h-full flex-col p-5 transition hover:border-brand-100 hover:shadow-md"
                        href={`/${calculator.slug}`}
                        key={calculator.slug}
                      >
                        <h4 className="font-semibold text-ink group-hover:text-brand-600">
                          {calculator.name}
                        </h4>
                        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                          {calculator.shortDescription}
                        </p>
                        <span className="mt-4 text-sm font-semibold text-brand-600">
                          Open {calculator.name} <span aria-hidden="true">&rarr;</span>
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
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
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
          <div>
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
        <div className="page-container max-w-4xl">
          <div className="surface-card bg-brand-50 p-7 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
              Seller workflow resource
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-ink">
              Exploring AI support for ecommerce work?
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
              After estimating fees, profit, and advertising room, review our
              guide to{" "}
              <Link
                className="font-semibold text-brand-600"
                href="/ai-tools-for-ecommerce-sellers"
              >
                AI tool categories for ecommerce sellers
              </Link>
              , including product copy, photos, SEO, ads, customer support, and
              email marketing workflows.
            </p>
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
