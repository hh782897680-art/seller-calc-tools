import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | SellerCalcTools",
  description: "Privacy policy for SellerCalcTools.",
  alternates: {
    canonical: "https://sellercalctools.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="page-container max-w-4xl py-14 sm:py-20">
      <h1 className="text-4xl font-bold tracking-tight text-ink">Privacy Policy</h1>
      <p className="mt-3 text-sm text-slate-500">Last updated: May 25, 2026</p>
      <div className="mt-9 space-y-9 text-base leading-8 text-slate-600">
        <section>
          <h2 className="text-2xl font-semibold text-ink">Overview</h2>
          <p className="mt-3">
            SellerCalcTools provides browser-based calculators and educational
            information. This policy describes the basic way information may be
            handled when you visit this website.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-ink">Calculator inputs</h2>
          <p className="mt-3">
            Calculator entries are processed in your browser. The current
            version does not require accounts or transmit calculator inputs to a
            SellerCalcTools database.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-ink">Analytics and advertising</h2>
          <p className="mt-3">
            The initial website contains advertising placeholders only. If
            analytics, advertising, or affiliate services are introduced later,
            this policy may be updated to explain cookies, third-party processing,
            and available choices.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-ink">Information notice</h2>
          <p className="mt-3">
            Calculators provide general estimates and educational information
            only. They do not constitute financial, tax, accounting, or legal
            advice. Users are responsible for verifying inputs and results.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-ink">Changes</h2>
          <p className="mt-3">
            We may revise this policy as site features change. The updated date
            on this page identifies the current published version.
          </p>
        </section>
      </div>
    </main>
  );
}
