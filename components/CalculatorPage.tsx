import Link from "next/link";
import type { ReactNode } from "react";
import AffiliateCTA from "@/components/AffiliateCTA";
import FAQ from "@/components/FAQ";
import FormulaBox from "@/components/FormulaBox";
import RelatedCalculators from "@/components/RelatedCalculators";
import ShareCalculator from "@/components/ShareCalculator";
import type { CalculatorData } from "@/data/calculators";

const reviewedFeeCalculatorSlugs = new Set<CalculatorData["slug"]>([
  "shopify-fee-calculator",
  "shopify-profit-calculator",
  "etsy-fee-calculator",
  "etsy-profit-calculator",
  "amazon-fba-profit-calculator",
  "amazon-referral-fee-calculator",
  "paypal-fee-calculator",
  "stripe-fee-calculator",
  "ebay-fee-calculator",
  "ebay-promoted-listing-fee-calculator",
  "tiktok-shop-fee-calculator",
  "tiktok-shop-profit-calculator",
  "woocommerce-profit-calculator",
]);

const shopifyPlatforms = [
  "Shopify",
  "Shopify Payments",
  "PayPal",
  "Stripe",
  "TikTok Ads",
  "Meta Ads",
];

const amazonFbaPlatforms = [
  "Amazon FBA",
  "Amazon Referral Fees",
  "FBA Fulfillment",
  "Storage Costs",
  "PPC Ads",
  "Inbound Shipping",
];

interface CalculatorPageProps {
  calculator: CalculatorData;
  form: ReactNode;
}

function serializeJsonLd(schema: object): string {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}

export default function CalculatorPage({
  calculator,
  form,
}: CalculatorPageProps) {
  const isShopifyProfitPage = calculator.slug === "shopify-profit-calculator";
  const isAmazonFbaProfitPage = calculator.slug === "amazon-fba-profit-calculator";
  const isFeaturedCalculatorPage = isShopifyProfitPage || isAmazonFbaProfitPage;
  const showFeeReviewNotice = reviewedFeeCalculatorSlugs.has(calculator.slug);
  const expertReview = calculator.expertReview;
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: calculator.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to use ${calculator.name}`,
    description: calculator.shortDescription,
    step: calculator.howToUse.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: `Step ${index + 1}`,
      text: step,
    })),
  };

  return (
    <main>
      <script
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(howToSchema) }}
        type="application/ld+json"
      />
      {isShopifyProfitPage ? (
        <>
          <section className="overflow-hidden border-b border-slate-200 bg-gradient-to-b from-white via-slate-50 to-brand-50/40">
            <div className="page-container grid items-center gap-8 py-12 sm:py-16 lg:grid-cols-[1.02fr_0.98fr]">
              <div>
                <p className="inline-flex rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-brand-700">
                  {calculator.category}
                </p>
                <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                  {calculator.name}
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                  {calculator.shortDescription}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {shopifyPlatforms.map((platform) => (
                    <span
                      className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700"
                      key={platform}
                    >
                      {platform}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link className="primary-button w-full sm:w-auto" href="#calculator-workspace">
                    Start calculating
                  </Link>
                  <Link className="secondary-button w-full sm:w-auto" href="/free-ecommerce-calculators">
                    Browse all calculators
                  </Link>
                </div>
                <aside className="mt-6 max-w-3xl rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-600">
                  <p className="font-semibold text-slate-700">Trust note: planning estimate</p>
                  <p className="mt-1">
                    Results are directional. Verify Shopify payment and transaction
                    rates for your country, plan, and checkout setup before final
                    pricing decisions.
                  </p>
                </aside>
              </div>

              <aside className="surface-card relative overflow-hidden border-brand-100 p-5 shadow-lg shadow-brand-100/40 sm:p-7">
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-100/80 blur-3xl" aria-hidden="true" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                    Example use case
                  </p>
                  <h2 className="mt-3 text-xl font-semibold text-ink">
                    Validate a product before increasing ad spend
                  </h2>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                      <p className="text-xs text-slate-500">Example net profit</p>
                      <p className="mt-1 text-2xl font-bold text-brand-700">$1,339.50</p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                      <p className="text-xs text-slate-500">Margin</p>
                      <p className="mt-1 text-2xl font-bold text-ink">29.77%</p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                      <p className="text-xs text-slate-500">ROI</p>
                      <p className="mt-1 text-2xl font-bold text-ink">42.38%</p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                      <p className="text-xs text-slate-500">Break-even ROAS</p>
                      <p className="mt-1 text-2xl font-bold text-ink">5.63x</p>
                    </div>
                  </div>
                  <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Cost breakdown
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-slate-600">
                      <li className="flex items-center justify-between gap-4">
                        <span>Product + shipping</span>
                        <span className="font-semibold text-slate-900">$2,100.00</span>
                      </li>
                      <li className="flex items-center justify-between gap-4">
                        <span>Ad spend</span>
                        <span className="font-semibold text-slate-900">$800.00</span>
                      </li>
                      <li className="flex items-center justify-between gap-4">
                        <span>Payment fees</span>
                        <span className="font-semibold text-slate-900">$260.50</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </section>
          <section className="border-b border-slate-200 bg-white">
            <div className="page-container py-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Platform badges
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {shopifyPlatforms.map((platform) => (
                  <span
                    className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700"
                    key={`strip-${platform}`}
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : isAmazonFbaProfitPage ? (
        <>
          <section className="overflow-hidden border-b border-slate-200 bg-gradient-to-b from-white via-slate-50 to-brand-50/40">
            <div className="page-container grid items-center gap-8 py-12 sm:py-16 lg:grid-cols-[1.02fr_0.98fr]">
              <div>
                <p className="inline-flex rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-brand-700">
                  {calculator.category}
                </p>
                <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                  {calculator.name}
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                  {calculator.shortDescription}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {amazonFbaPlatforms.map((platform) => (
                    <span
                      className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700"
                      key={platform}
                    >
                      {platform}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link className="primary-button w-full sm:w-auto" href="#calculator-workspace">
                    Start calculating
                  </Link>
                  <Link className="secondary-button w-full sm:w-auto" href="/free-ecommerce-calculators">
                    Browse all calculators
                  </Link>
                </div>
                <aside className="mt-6 max-w-3xl rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-600">
                  <p className="font-semibold text-slate-700">Trust note: estimate only</p>
                  <p className="mt-1">
                    Results are planning estimates for Amazon FBA sellers, not
                    tax, accounting, or legal advice, and not an official Amazon
                    fee statement.
                  </p>
                </aside>
              </div>

              <aside className="surface-card relative overflow-hidden border-brand-100 p-5 shadow-lg shadow-brand-100/40 sm:p-7">
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-100/80 blur-3xl" aria-hidden="true" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                    Example FBA snapshot
                  </p>
                  <h2 className="mt-3 text-xl font-semibold text-ink">
                    Check if an FBA SKU still works after fee and ad changes
                  </h2>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                      <p className="text-xs text-slate-500">Example net profit</p>
                      <p className="mt-1 text-2xl font-bold text-brand-700">$1,029.15</p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                      <p className="text-xs text-slate-500">FBA fees</p>
                      <p className="mt-1 text-2xl font-bold text-ink">$500.00</p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                      <p className="text-xs text-slate-500">Referral fee</p>
                      <p className="mt-1 text-2xl font-bold text-ink">$524.85</p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                      <p className="text-xs text-slate-500">Margin</p>
                      <p className="mt-1 text-2xl font-bold text-ink">29.41%</p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                      <p className="text-xs text-slate-500">ROI</p>
                      <p className="mt-1 text-2xl font-bold text-ink">41.67%</p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                      <p className="text-xs text-slate-500">Break-even ROAS</p>
                      <p className="mt-1 text-2xl font-bold text-ink">8.75x</p>
                    </div>
                  </div>
                  <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Cost breakdown
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-slate-600">
                      <li className="flex items-center justify-between gap-4">
                        <span>Product cost</span>
                        <span className="font-semibold text-slate-900">$900.00</span>
                      </li>
                      <li className="flex items-center justify-between gap-4">
                        <span>Storage + inbound shipping</span>
                        <span className="font-semibold text-slate-900">$115.00</span>
                      </li>
                      <li className="flex items-center justify-between gap-4">
                        <span>Ad spend + other costs</span>
                        <span className="font-semibold text-slate-900">$430.00</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </section>
          <section className="border-b border-slate-200 bg-white">
            <div className="page-container py-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Platform badges
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {amazonFbaPlatforms.map((platform) => (
                  <span
                    className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700"
                    key={`strip-${platform}`}
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        <section className="border-b border-slate-200 bg-white">
          <div className="page-container py-12 sm:py-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
              {calculator.category}
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              {calculator.name}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              {calculator.shortDescription}
            </p>
            {showFeeReviewNotice && (
              <aside className="mt-6 max-w-3xl rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600">
                <p className="font-medium text-slate-700">Last reviewed: May 2026</p>
                <p className="mt-1">
                  Fees may vary by country, currency, account type, category, and
                  platform policy. Always verify the latest official fee schedule.
                </p>
              </aside>
            )}
          </div>
        </section>
      )}

      <section
        className={isFeaturedCalculatorPage ? "border-b border-slate-200 bg-gradient-to-b from-white to-slate-50/60" : ""}
        id="calculator-workspace"
        aria-label={`${calculator.name} tool`}
      >
        <div className="page-container py-6">
          {isShopifyProfitPage && (
            <aside className="mb-6 rounded-2xl border border-brand-100 bg-brand-50/60 p-5 text-sm leading-7 text-slate-700">
              <p className="font-semibold text-ink">Example use case</p>
              <p className="mt-1">
                A seller planning to scale ads can model current order economics
                first, then test a higher ad-cost scenario to see whether margin
                and break-even ROAS still stay in a safe range.
              </p>
            </aside>
          )}
          {isAmazonFbaProfitPage && (
            <aside className="mb-6 rounded-2xl border border-brand-100 bg-brand-50/60 p-5 text-sm leading-7 text-slate-700">
              <p className="font-semibold text-ink">Example use case</p>
              <p className="mt-1">
                Before placing a reorder, model a higher PPC cost and fulfillment
                fee scenario to confirm that per-unit profit, margin, and ROI are
                still strong enough for scale.
              </p>
            </aside>
          )}
          {form}
        </div>
      </section>

      <article className={`page-container mt-12 ${isFeaturedCalculatorPage ? "max-w-5xl space-y-14" : "max-w-4xl space-y-12"}`}>
        <section>
          <h2 className="section-heading">What is this calculator?</h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">
            {calculator.whatIs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section>
          <h2 className="section-heading">Who should use it?</h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            {calculator.whoShouldUse}
          </p>
        </section>

        <section>
          <h2 className="section-heading">How to calculate it</h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">
            {calculator.howToCalculate.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-7">
            <FormulaBox formulas={calculator.formula} />
          </div>
        </section>

        <section>
          <h2 className="section-heading">How this estimate is prepared</h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">
            <p>
              This page explains the formula behind {calculator.name} before asking
              for inputs, so sellers can review what each field changes and spot
              assumptions that do not match their own store records.
            </p>
            <p>
              Marketplace and payment fees can change by country, account type,
              category, currency, and platform policy. Treat the result as a
              planning estimate, then compare important decisions against your
              current invoices, dashboard reports, and official fee schedules.
            </p>
            <p>
              Learn more about how Ecom Profit Tools writes and reviews calculator
              content in the{" "}
              <Link className="text-brand-700 hover:underline" href="/editorial-policy">
                editorial policy
              </Link>
              .
            </p>
          </div>
        </section>

        {expertReview && (
          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
                  Expert review notes
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-ink">
                  What this calculator is designed to check
                </h2>
              </div>
              <p className="text-sm font-medium text-slate-500">
                Last reviewed: {expertReview.lastReviewed}
              </p>
            </div>
            <p className="mt-5 text-base leading-8 text-slate-600">
              {expertReview.summary}
            </p>

            <div className="mt-7 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-ink">Included in this estimate</h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                  {expertReview.includes.map((item) => (
                    <li className="border-l-2 border-brand-200 pl-3" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-ink">Not automatically included</h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                  {expertReview.excludes.map((item) => (
                    <li className="border-l-2 border-slate-300 pl-3" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-7 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-ink">Scenario checks worth running</h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                  {expertReview.scenarioChecks.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-ink">When to update inputs</h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                  {expertReview.updateChecklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {expertReview.sourceLinks && expertReview.sourceLinks.length > 0 && (
              <div className="mt-7 border-t border-slate-200 pt-5">
                <h3 className="text-lg font-semibold text-ink">Official references to verify</h3>
                <ul className="mt-4 flex flex-wrap gap-3 text-sm">
                  {expertReview.sourceLinks.map((source) => (
                    <li key={source.href}>
                      <a
                        className="font-semibold text-brand-700 hover:underline"
                        href={source.href}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {source.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        <section>
          <h2 className="section-heading">Example calculation</h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            {calculator.example}
          </p>
        </section>

        <section>
          <h2 className="section-heading">Why the result matters</h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">
            {calculator.whyItMatters.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <AffiliateCTA message={calculator.affiliateMessage} />

        <section className={isFeaturedCalculatorPage ? "rounded-3xl border border-slate-200 bg-white p-6 sm:p-8" : ""}>
          <h2 className="section-heading">How to use it</h2>
          {isFeaturedCalculatorPage ? (
            <ol className="mt-6 grid list-none gap-4 md:grid-cols-2">
              {calculator.howToUse.map((step, index) => (
                <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5" key={step}>
                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white"
                  >
                    {index + 1}
                  </span>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{step}</p>
                </li>
              ))}
            </ol>
          ) : (
            <ol className="mt-5 list-none space-y-3 text-base leading-8 text-slate-600">
              {calculator.howToUse.map((step, index) => (
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
          )}
          {isAmazonFbaProfitPage && (
            <p className="mt-5 text-sm leading-7 text-slate-600">
              For cross-channel planning, compare assumptions with the{" "}
              <Link className="text-brand-700 hover:underline" href="/shopify-profit-calculator">
                Shopify Profit Calculator
              </Link>{" "}
              and{" "}
              <Link className="text-brand-700 hover:underline" href="/etsy-fee-calculator">
                Etsy Fee Calculator
              </Link>
              , then validate ad efficiency targets with the{" "}
              <Link className="text-brand-700 hover:underline" href="/roas-calculator">
                ROAS Calculator
              </Link>{" "}
              and{" "}
              <Link className="text-brand-700 hover:underline" href="/break-even-calculator">
                Break Even Calculator
              </Link>
              .
            </p>
          )}
        </section>

        <section>
          <h2 className="section-heading">Common mistakes to avoid</h2>
          <ul className="mt-5 space-y-3 text-base leading-8 text-slate-600">
            {calculator.commonMistakes.map((mistake) => (
              <li className="rounded-xl border border-slate-200 bg-white px-5 py-3" key={mistake}>
                {mistake}
              </li>
            ))}
          </ul>
        </section>

        <section className={isFeaturedCalculatorPage ? "rounded-3xl border border-slate-200 bg-white p-6 sm:p-8" : ""}>
          <h2 className="section-heading">Frequently asked questions</h2>
          <div className="mt-6">
            <FAQ items={calculator.faqs} />
          </div>
          {isAmazonFbaProfitPage && (
            <p className="mt-5 text-sm leading-7 text-slate-600">
              Need more tools for seller decisions? See the full set in{" "}
              <Link className="text-brand-700 hover:underline" href="/free-ecommerce-calculators">
                Free Ecommerce Calculators
              </Link>
              .
            </p>
          )}
        </section>

        <section className={isFeaturedCalculatorPage ? "rounded-3xl border border-slate-200 bg-white p-6 sm:p-8" : ""}>
          <h2 className="section-heading">Related calculators</h2>
          {isShopifyProfitPage && (
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Compare Shopify with marketplace and performance calculators before
              setting channel-level pricing or ad targets.
            </p>
          )}
          {isAmazonFbaProfitPage && (
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Compare Amazon scenarios with{" "}
              <Link className="text-brand-700 hover:underline" href="/shopify-profit-calculator">
                Shopify Profit Calculator
              </Link>
              ,{" "}
              <Link className="text-brand-700 hover:underline" href="/etsy-fee-calculator">
                Etsy Fee Calculator
              </Link>
              ,{" "}
              <Link className="text-brand-700 hover:underline" href="/roas-calculator">
                ROAS Calculator
              </Link>
              , and{" "}
              <Link className="text-brand-700 hover:underline" href="/break-even-calculator">
                Break Even Calculator
              </Link>{" "}
              for broader pricing and campaign decisions.
            </p>
          )}
          <div className="mt-6">
            <RelatedCalculators slugs={calculator.relatedSlugs} />
          </div>
        </section>

        <ShareCalculator
          fallbackUrl={`https://www.ecomprofittools.com/${calculator.slug}`}
        />
      </article>
    </main>
  );
}
