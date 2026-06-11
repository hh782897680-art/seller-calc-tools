import type { Metadata } from "next";
import Link from "next/link";

const pageUrl = "https://www.ecomprofittools.com/methodology";

export const metadata: Metadata = {
  title: "Calculator Methodology | Ecom Profit Tools",
  description:
    "Learn how Ecom Profit Tools defines ecommerce profit, applies calculator formulas, checks data sources, updates content, and explains limitations.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Calculator Methodology | Ecom Profit Tools",
    description:
      "How ecommerce calculator formulas, fee assumptions, examples, source checks, updates, and limitations are handled.",
    url: pageUrl,
    type: "article",
    siteName: "Ecom Profit Tools",
  },
};

const sourceHierarchy = [
  {
    title: "1. Official platform documentation",
    text: "For platform-specific fee explanations, the preferred references are current help centers, pricing pages, seller policy pages, and official calculators published by Shopify, Etsy, Amazon, payment providers, or other named services.",
  },
  {
    title: "2. Seller account records",
    text: "Actual payout reports, payment statements, invoices, ad dashboards, fulfillment bills, and order exports are more relevant to an individual seller than a general example rate. Calculator fee fields remain editable for this reason.",
  },
  {
    title: "3. Transparent planning assumptions",
    text: "When a value cannot be inferred from public documentation or a seller account, it should be entered as a clearly labeled assumption. Examples demonstrate the formula but are not presented as typical or guaranteed results.",
  },
];

const reviewTriggers = [
  "A platform announces a fee, policy, plan, category, fulfillment, or payment change.",
  "An official source moves, becomes unavailable, or no longer supports a statement on the page.",
  "A calculator input, result label, example, or explanation could cause sellers to mix per-unit and total values.",
  "A user reports an error, ambiguous definition, broken link, or scenario that the current explanation does not cover.",
  "A scheduled content review finds that the page date, examples, or limitations no longer describe the current tool.",
];

export default function MethodologyPage() {
  return (
    <main>
      <header className="border-b border-slate-200 bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_58%,#f6f8fb_100%)]">
        <div className="page-container max-w-4xl py-12 sm:py-16">
          <p className="eyebrow">Transparency</p>
          <h1 className="mt-5 text-4xl font-bold text-ink sm:text-5xl">
            Calculator methodology
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            This page explains how Ecom Profit Tools defines inputs, applies
            formulas, uses data sources, reviews content, and communicates the
            limits of ecommerce planning estimates.
          </p>
          <p className="mt-5 text-sm font-medium text-slate-500">
            Last updated: June 11, 2026
          </p>
        </div>
      </header>

      <article className="calculator-content page-container max-w-4xl space-y-8 py-14">
        <section>
          <h2 className="section-heading">Purpose and scope</h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">
            <p>
              Ecom Profit Tools calculators are educational planning aids for
              online sellers. They are designed to make the relationship
              between selling price, product cost, shipping, fees, advertising,
              profit, margin, ROI, ROAS, and break-even volume easier to inspect.
              They do not connect to seller accounts, determine taxes, or
              produce official platform statements.
            </p>
            <p>
              Each calculator answers a defined question. A fee calculator
              estimates selected transaction charges. A profit calculator
              subtracts entered costs from revenue. A ROAS calculator compares
              attributed advertising revenue with spend. A break-even
              calculator divides fixed cost by unit contribution. Results from
              different tools should not be treated as interchangeable.
            </p>
          </div>
        </section>

        <section>
          <h2 className="section-heading">Core formula definitions</h2>
          <div className="mt-5 space-y-5 text-base leading-8 text-slate-600">
            <p>
              <strong>Revenue</strong> is the selling amount included in the
              modeled scope. Sellers should use a consistent definition, such
              as net product sales after seller-funded discounts and refunded
              orders. Shipping collected from buyers may be included when the
              related shipping expense and fee treatment are also included.
            </p>
            <p>
              <strong>Net profit</strong> is calculated as entered revenue minus
              entered costs. Depending on the tool, those costs may include
              product cost, delivery, marketplace or payment fees,
              fulfillment, advertising, and other allowances. A result is not
              complete business profit when payroll, taxes, software, rent,
              returns, or other operating costs are outside the inputs.
            </p>
            <p>
              <strong>Profit margin</strong> equals profit divided by revenue,
              multiplied by 100. <strong>Markup</strong> compares profit with
              cost instead of revenue. <strong>ROI</strong> compares net return
              with an entered investment. <strong>ROAS</strong> divides
              advertising-attributed revenue by advertising spend and does not
              subtract product or operating costs.
            </p>
            <p>
              <strong>Break-even units</strong> equal fixed costs divided by
              contribution margin per unit, where contribution is price minus
              variable unit cost. If contribution is zero or negative, the
              model has no finite break-even quantity. Real sales targets
              should round fractional unit results upward.
            </p>
          </div>
        </section>

        <section>
          <h2 className="section-heading">Input conventions</h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">
            <p>
              Inputs must use the same currency, time period, product scope, and
              unit basis. A per-unit product cost should not be combined with a
              total monthly advertising amount unless one of them is converted.
              A campaign&apos;s spend and attributed revenue should use the same
              reporting period and attribution rule. Empty calculator fields
              are treated as zero; gray values shown inside fields are examples
              rather than submitted data.
            </p>
            <p>
              Fee fields are editable because seller terms vary. Country,
              currency, plan, payment method, product category, package size,
              marketplace, advertising attribution, and account agreement can
              all change a charge. The site avoids claiming that one default
              rate applies to every seller.
            </p>
          </div>
        </section>

        <section>
          <h2 className="section-heading">Data source hierarchy</h2>
          <div className="mt-6 grid gap-4">
            {sourceHierarchy.map((source) => (
              <div
                className="rounded-lg border border-slate-200 bg-slate-50 p-5"
                key={source.title}
              >
                <h3 className="font-semibold text-ink">{source.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {source.text}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-base leading-8 text-slate-600">
            External references are included for verification, not as an
            endorsement. A platform remains the authority for its current fees
            and policies. Sellers should reconcile important estimates against
            their own account data before changing prices, inventory, or
            campaign budgets.
          </p>
        </section>

        <section>
          <h2 className="section-heading">Examples and rounding</h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">
            <p>
              Worked examples use invented seller scenarios to show how inputs
              move through a formula. They are not performance claims,
              financial forecasts, or representations of an average store.
              Example prices, fees, costs, margins, and returns should be
              replaced with the seller&apos;s own numbers.
            </p>
            <p>
              Calculations use ordinary JavaScript numeric operations and
              display currency or percentages in a readable rounded format.
              Small differences can occur when a platform rounds individual
              line items, applies minimum charges, calculates taxes, or groups
              transactions differently. Official statements and accounting
              records take priority over a browser estimate.
            </p>
          </div>
        </section>

        <section>
          <h2 className="section-heading">Update and review process</h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Core calculator pages display a review date. Reviews check formula
            wording, input definitions, examples, source links, limitations,
            and internal links. A review date means the page content was
            examined; it does not mean every possible fee for every country or
            account has been independently verified.
          </p>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
            {reviewTriggers.map((trigger) => (
              <li
                className="rounded-lg border border-slate-200 bg-slate-50 px-5 py-3"
                key={trigger}
              >
                {trigger}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Corrections can be reported through the{" "}
            <Link className="font-semibold text-brand-700 hover:underline" href="/contact">
              contact page
            </Link>
            . The broader writing, disclosure, and correction principles are
            described in the{" "}
            <Link
              className="font-semibold text-brand-700 hover:underline"
              href="/editorial-policy"
            >
              editorial policy
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="section-heading">Known limitations</h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">
            <p>
              The calculators do not automatically model demand, seasonality,
              inventory age, cash-flow timing, financing, taxes, duties,
              currency movement, customer lifetime value, repeat purchases,
              return behavior, stepped pricing, minimum fees, or every
              platform-specific exception. Some tools provide an Other cost
              field that can hold a documented allowance, but combining costs
              reduces detail and should be explained in the seller&apos;s notes.
            </p>
            <p>
              Results are sensitive to assumptions. A positive estimate does
              not guarantee that a product, campaign, or business will be
              profitable. A break-even result does not forecast that enough
              customers will buy. A high ROAS does not prove incremental
              profit. A favorable margin does not show whether the business has
              enough cash to purchase inventory or pay obligations.
            </p>
          </div>
        </section>

        <section className="border-amber-200 bg-amber-50/60">
          <h2 className="section-heading">General disclaimer</h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Ecom Profit Tools provides general educational information and
            planning estimates. It is not accounting, tax, legal, investment,
            or financial advice. The site is not an official calculator for
            Shopify, Etsy, Amazon, PayPal, Stripe, or any other named platform.
            Consult current official documentation and qualified professionals
            when a decision has material financial, tax, or legal consequences.
          </p>
        </section>
      </article>
    </main>
  );
}
