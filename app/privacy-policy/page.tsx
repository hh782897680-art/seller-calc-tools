import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Ecom Profit Tools",
  description: "Privacy policy for Ecom Profit Tools.",
  alternates: {
    canonical: "https://www.ecomprofittools.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="page-container max-w-4xl py-14 sm:py-20">
      <h1 className="text-4xl font-bold tracking-tight text-ink">Privacy Policy</h1>
      <p className="mt-3 text-sm text-slate-500">Last updated: May 26, 2026</p>
      <div className="mt-9 space-y-9 text-base leading-8 text-slate-600">
        <section>
          <h2 className="text-2xl font-semibold text-ink">Overview</h2>
          <p className="mt-3">
            Ecom Profit Tools provides browser-based calculators and educational
            information. This policy describes the basic way information may be
            handled when you visit this website.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-ink">Calculator inputs</h2>
          <p className="mt-3">
            Calculator entries are processed in your browser. Ecom Profit Tools
            does not require an account to use its calculators and does not ask
            you to enter sensitive financial information. Calculator inputs are
            not transmitted to an Ecom Profit Tools database.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-ink">Analytics and advertising</h2>
          <p className="mt-3">
            This website uses Google Analytics to analyze visits and understand
            how visitors use the site. It uses Google AdSense to display
            advertisements, and an ads.txt file identifies authorized advertising
            sellers.
          </p>
          <p className="mt-3">
            Google and other third-party analytics or advertising services may
            use cookies or similar technologies when you visit this website.
            You can manage or disable cookies through your browser settings,
            although doing so may affect some website or advertising features.
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
