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
      <p className="mt-3 text-sm text-slate-500">Last updated: June 4, 2026</p>
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
            you to enter account passwords, payment card numbers, bank account
            numbers, tax identification numbers, or sensitive personal financial
            information. Calculator inputs are not intentionally transmitted to
            an Ecom Profit Tools server or database.
          </p>
          <p className="mt-3">
            The site may use browser local storage to save calculator inputs
            locally on your device so your previous values can be restored in
            the same browser. Saved inputs are not sent to our server. You can
            remove saved calculator values from the calculator page using
            <span className="font-semibold text-slate-700"> Clear saved inputs</span>,
            and you can also clear browser storage from your browser settings.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-ink">Analytics and advertising</h2>
          <p className="mt-3">
            This website uses Google Analytics to analyze visits and understand
            how visitors use the site. It uses Google AdSense to display
            advertisements on eligible pages. Google Analytics, Google AdSense,
            and third-party advertising vendors may use cookies, web beacons,
            local storage, device identifiers, or similar technologies when you
            visit this website.
          </p>
          <p className="mt-3">
            Google and other advertising vendors may use information from your
            visits to this website and other websites to help show ads. Depending
            on your settings, location, consent signals, and Google&apos;s systems,
            ads may be personalized or non-personalized.
          </p>
          <p className="mt-3">
            You can manage Google ad personalization through{" "}
            <a
              className="font-semibold text-brand-600"
              href="https://adssettings.google.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Google Ads Settings
            </a>
            . You can also manage, block, or delete cookies through your browser
            settings. Blocking cookies may affect analytics, advertising, saved
            inputs, or other website features.
          </p>
          <p className="mt-3">
            Ecom Profit Tools publishes an ads.txt file at{" "}
            <span className="font-semibold text-slate-700">/ads.txt</span> to
            identify authorized digital advertising sellers for this domain. The
            file currently lists Google with publisher ID{" "}
            <span className="font-semibold text-slate-700">
              pub-5827463097117050
            </span>
            .
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
