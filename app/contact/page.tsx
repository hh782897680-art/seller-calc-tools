import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Ecom Profit Tools | Feedback and Inquiries",
  description:
    "Contact Ecom Profit Tools with feedback, corrections, or partnership inquiries about our ecommerce calculators and educational content.",
  alternates: {
    canonical: "https://www.ecomprofittools.com/contact",
  },
  openGraph: {
    title: "Contact Ecom Profit Tools | Feedback and Inquiries",
    description:
      "Contact the Ecom Profit Tools team with feedback, corrections, or partnership inquiries.",
    url: "https://www.ecomprofittools.com/contact",
    type: "website",
    siteName: "Ecom Profit Tools",
  },
};

export default function ContactPage() {
  return (
    <main className="page-container max-w-4xl py-14 sm:py-20">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
        Contact
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
        Contact Ecom Profit Tools
      </h1>
      <div className="mt-8 space-y-5 text-lg leading-8 text-slate-600">
        <p>
          Use this page to reach Ecom Profit Tools about the calculators,
          educational pages, privacy questions, advertising questions, or
          business and legal inquiries related to this website.
        </p>
        <p>
          Email:{" "}
          <a
            className="font-semibold text-brand-600"
            href="mailto:contact@ecomprofittools.com"
          >
            contact@ecomprofittools.com
          </a>
        </p>
      </div>

      <section className="mt-10 rounded-lg border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-2xl font-semibold text-ink">
          What you can contact us about
        </h2>
        <ul className="mt-5 space-y-3 text-base leading-8 text-slate-600">
          <li>Calculator feedback, usability issues, or unclear instructions.</li>
          <li>Formula correction requests or reports about outdated fee assumptions.</li>
          <li>Broken internal links, broken external references, or missing pages.</li>
          <li>Privacy, cookies, Google Analytics, or advertising questions.</li>
          <li>Business, editorial, or legal inquiries related to the site.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-4 text-base leading-8 text-slate-600">
        <h2 className="text-2xl font-semibold text-ink">Response time</h2>
        <p>
          We aim to review clear messages within 3 to 5 business days. Complex
          correction requests may take longer because fee schedules, examples,
          and page context need to be checked before a public update is made.
        </p>
        <p>
          Please include the page URL, the calculator name, the input or text
          that may need review, and any public source that helps explain the
          issue. Please do not send account passwords, payment card numbers,
          private customer records, or sensitive personal financial information.
        </p>
        <p>
          Ecom Profit Tools provides free educational calculators and general
          ecommerce planning content. We cannot provide personalized tax, legal,
          accounting, financial, investment, or business advice by email.
        </p>
      </section>
    </main>
  );
}
