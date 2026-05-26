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
          Users can contact the site team for feedback, corrections, or
          partnership inquiries.
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
        <p>
          Please do not send sensitive financial information, payment details,
          account credentials, or personal records by email.
        </p>
        <p>
          Our calculators are intended for estimates and educational purposes
          only. Results do not constitute financial, tax, accounting, or legal
          advice.
        </p>
      </div>
    </main>
  );
}
