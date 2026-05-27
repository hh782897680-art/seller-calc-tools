import type { ReactNode } from "react";
import AdPlaceholder from "@/components/AdPlaceholder";
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
  const showFeeReviewNotice = reviewedFeeCalculatorSlugs.has(calculator.slug);
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

      <section className="page-container py-6" aria-label={`${calculator.name} tool`}>
        {form}
      </section>

      <div className="page-container py-8">
        <AdPlaceholder />
      </div>

      <article className="page-container mt-12 max-w-4xl space-y-12">
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

        <section>
          <h2 className="section-heading">How to use it</h2>
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

        <AdPlaceholder />

        <section>
          <h2 className="section-heading">Frequently asked questions</h2>
          <div className="mt-6">
            <FAQ items={calculator.faqs} />
          </div>
        </section>

        <section>
          <h2 className="section-heading">Related calculators</h2>
          <div className="mt-6">
            <RelatedCalculators slugs={calculator.relatedSlugs} />
          </div>
        </section>

        <ShareCalculator
          fallbackUrl={`https://ecomprofittools.com/${calculator.slug}`}
        />
      </article>
    </main>
  );
}
