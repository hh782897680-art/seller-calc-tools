import type { ReactNode } from "react";
import AdPlaceholder from "@/components/AdPlaceholder";
import AffiliateCTA from "@/components/AffiliateCTA";
import FAQ from "@/components/FAQ";
import FormulaBox from "@/components/FormulaBox";
import RelatedCalculators from "@/components/RelatedCalculators";
import ShareCalculator from "@/components/ShareCalculator";
import type { CalculatorData } from "@/data/calculators";

interface CalculatorPageProps {
  calculator: CalculatorData;
  form: ReactNode;
}

export default function CalculatorPage({
  calculator,
  form,
}: CalculatorPageProps) {
  return (
    <main>
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
        </div>
      </section>

      <div className="page-container py-8">
        <AdPlaceholder />
      </div>

      <section className="page-container py-6" aria-label={`${calculator.name} tool`}>
        {form}
      </section>

      <article className="page-container mt-12 max-w-4xl space-y-12">
        <section>
          <h2 className="section-heading">What is {calculator.name}?</h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">
            {calculator.whatIs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
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
          <h2 className="section-heading">Why it matters for ecommerce sellers</h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">
            {calculator.whyItMatters.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <AffiliateCTA message={calculator.affiliateMessage} />

        <section>
          <h2 className="section-heading">How to use this calculator</h2>
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
