import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | SellerCalcTools",
  description: "Basic terms of use for SellerCalcTools calculators and content.",
  alternates: {
    canonical: "https://ecomprofittools.com/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="page-container max-w-4xl py-14 sm:py-20">
      <h1 className="text-4xl font-bold tracking-tight text-ink">Terms of Use</h1>
      <p className="mt-3 text-sm text-slate-500">Last updated: May 25, 2026</p>
      <div className="mt-9 space-y-9 text-base leading-8 text-slate-600">
        <section>
          <h2 className="text-2xl font-semibold text-ink">Use of the website</h2>
          <p className="mt-3">
            SellerCalcTools offers free calculators and educational content for
            business planning. You may use the website for lawful personal or
            business information purposes.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-ink">No professional advice</h2>
          <p className="mt-3">
            All calculations and content are general estimates and educational
            information. Nothing on this website is financial, tax, legal, or
            accounting advice. You must independently verify figures, fee rates,
            applicable rules, and decisions.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-ink">Accuracy and availability</h2>
          <p className="mt-3">
            We aim to provide clear formulas, but do not guarantee that outputs
            are complete, current, or appropriate for every store, marketplace,
            country, or business situation. Features may change or be unavailable
            without notice.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-ink">Limitation</h2>
          <p className="mt-3">
            To the extent permitted by law, SellerCalcTools is not responsible
            for losses or decisions made in reliance on calculations or website
            content. Users remain responsible for checking all results.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-ink">Future links and advertising</h2>
          <p className="mt-3">
            The site may later include advertising or affiliate links. External
            services and products will be subject to their own terms and policies.
          </p>
        </section>
      </div>
    </main>
  );
}
