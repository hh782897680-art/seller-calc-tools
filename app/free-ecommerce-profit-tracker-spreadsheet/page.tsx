import type { Metadata } from "next";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import type { FAQItem } from "@/data/calculators";

const pageUrl =
  "https://www.ecomprofittools.com/free-ecommerce-profit-tracker-spreadsheet";

export const metadata: Metadata = {
  title: "Free Ecommerce Profit Tracker Spreadsheet | Ecom Profit Tools",
  description:
    "Download a free ecommerce profit tracker spreadsheet to track revenue, product costs, shipping, marketplace fees, payment fees, ad spend, refunds, net profit, and profit margin.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    siteName: "Ecom Profit Tools",
    title: "Free Ecommerce Profit Tracker Spreadsheet | Ecom Profit Tools",
    description:
      "Download a free ecommerce profit tracker spreadsheet for seller revenue, costs, fees, advertising, refunds, net profit, and margin.",
  },
};

const faqs: FAQItem[] = [
  {
    question: "Is the ecommerce profit tracker really free?",
    answer:
      "Yes. The CSV template can be downloaded without creating an account or providing an email address.",
  },
  {
    question: "Can I open the template in Google Sheets?",
    answer:
      "Yes. Upload or import the CSV into Google Sheets. It also works with Excel, Numbers, LibreOffice Calc, and other spreadsheet tools that support CSV files.",
  },
  {
    question: "Does the spreadsheet calculate net profit automatically?",
    answer:
      "The included example and blank template rows contain Google Sheets-compatible formulas for gross revenue, net profit, and profit margin. Check the formulas after importing and extend them to additional rows.",
  },
  {
    question: "Does this replace bookkeeping or tax software?",
    answer:
      "No. It is a planning and management template, not accounting, tax, legal, or financial advice. Reconcile it with platform reports and professional records.",
  },
];

const relatedCalculators = [
  ["Shopify Profit Calculator", "/shopify-profit-calculator"],
  ["Etsy Fee Calculator", "/etsy-fee-calculator"],
  ["Amazon FBA Profit Calculator", "/amazon-fba-profit-calculator"],
  ["Profit Margin Calculator", "/profit-margin-calculator"],
  ["ROI Calculator", "/roi-calculator"],
  ["ROAS Calculator", "/roas-calculator"],
  ["Break-even Calculator", "/break-even-calculator"],
] as const;

const columns = [
  "Date and sales platform",
  "Product name, SKU, units, and selling price",
  "Gross revenue and product cost",
  "Shipping, marketplace fees, and payment fees",
  "Ad spend, refunds, and other costs",
  "Net profit, profit margin, and notes",
];

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

export default function FreeEcommerceProfitTrackerPage() {
  return (
    <main>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
        type="application/ld+json"
      />

      <section className="overflow-hidden border-b border-slate-200 bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_55%,#f6f8fb_100%)]">
        <div className="page-container grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.04fr_0.96fr]">
          <div>
            <p className="eyebrow">Free seller spreadsheet</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold text-ink sm:text-5xl">
              Free Ecommerce Profit Tracker Spreadsheet
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Track revenue, product costs, shipping, marketplace fees, payment
              fees, ad spend, refunds, net profit, and profit margin in one
              practical CSV template.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="primary-button w-full sm:w-auto"
                download
                href="/downloads/ecommerce-profit-tracker-template.csv"
              >
                Download free spreadsheet
              </a>
              <Link
                className="secondary-button w-full sm:w-auto"
                href="/blog/best-free-ecommerce-spreadsheets"
              >
                Read the spreadsheet guide
              </Link>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              CSV format | Google Sheets compatible | No signup required
            </p>
          </div>

          <aside className="dashboard-card overflow-hidden p-6 shadow-xl shadow-slate-200/70">
            <p className="text-xs font-semibold uppercase text-brand-700">
              Included columns
            </p>
            <ul className="mt-5 space-y-3">
              {columns.map((column) => (
                <li
                  className="flex gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700"
                  key={column}
                >
                  <span
                    aria-hidden="true"
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700"
                  >
                    +
                  </span>
                  {column}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <article className="page-container max-w-5xl space-y-12 py-14 sm:py-20">
        <section className="dashboard-card p-6 sm:p-8">
          <h2 className="section-heading">What this template helps you track</h2>
          <div className="mt-5 space-y-4 leading-8 text-slate-600">
            <p>
              The tracker brings the main parts of ecommerce unit economics into
              one row: sales volume, selling price, product cost, fulfillment,
              platform charges, payment processing, advertising, refunds, and
              other operating costs. Formula columns estimate gross revenue, net
              profit, and profit margin.
            </p>
            <p>
              Use one row per order, product-period, or channel-period, but keep
              the method consistent. The example row shows how the formulas work.
              Replace it with your own records and add categories when your store
              has costs that are not represented by the default columns.
            </p>
          </div>
        </section>

        <section>
          <h2 className="section-heading">How to use this spreadsheet</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Download the CSV and import it into Google Sheets, Excel, Numbers, or another spreadsheet app.",
              "Replace the example row with sales data from your store, marketplace, payment, shipping, and advertising reports.",
              "Confirm the gross revenue, net profit, and profit margin formulas, then extend them to each new row.",
              "Review results weekly and reconcile monthly against payouts, invoices, refunds, and bookkeeping records.",
            ].map((step, index) => (
              <li className="dashboard-card p-5" key={step}>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="mt-4 text-sm leading-7 text-slate-600">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="dashboard-card p-6">
            <h2 className="text-2xl font-bold text-ink">Who this is for</h2>
            <p className="mt-4 leading-8 text-slate-600">
              The template is designed for Shopify, Etsy, Amazon, eBay, TikTok
              Shop, WooCommerce, and independent sellers who need a simple profit
              view before adopting more advanced reporting software.
            </p>
          </div>
          <div className="dashboard-card p-6">
            <h2 className="text-2xl font-bold text-ink">Important limitations</h2>
            <p className="mt-4 leading-8 text-slate-600">
              This spreadsheet does not automatically import platform data,
              calculate taxes, reconcile inventory accounting, or replace
              bookkeeping. Verify fee and cost inputs against your own records
              before making business decisions.
            </p>
          </div>
        </section>

        <section>
          <h2 className="section-heading">Related calculators</h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-600">
            Use these calculators to test a scenario before recording the
            approved assumptions in your profit tracker.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedCalculators.map(([label, href]) => (
              <Link
                className="dashboard-card flex items-center justify-between gap-4 p-5 font-semibold text-ink transition hover:border-brand-200 hover:text-brand-700 hover:shadow-lg"
                href={href}
                key={href}
              >
                {label}
                <span aria-hidden="true">&rarr;</span>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="section-heading">Frequently asked questions</h2>
          <div className="mt-6">
            <FAQ items={faqs} />
          </div>
        </section>

        <section className="dashboard-card bg-gradient-to-r from-brand-50 via-white to-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-ink">
            Start tracking seller profit
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-600">
            Download the template, replace the example data, and use your own
            fee schedules and business records.
          </p>
          <a
            className="primary-button mt-6"
            download
            href="/downloads/ecommerce-profit-tracker-template.csv"
          >
            Download free spreadsheet
          </a>
        </section>
      </article>
    </main>
  );
}
