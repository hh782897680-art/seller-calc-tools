import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Ecom Profit Tools",
  description: "Basic terms of use for Ecom Profit Tools calculators and content.",
  alternates: {
    canonical: "https://www.ecomprofittools.com/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="page-container max-w-4xl py-14 sm:py-20">
      <h1 className="text-4xl font-bold tracking-tight text-ink">Terms of Use</h1>
      <p className="mt-3 text-sm text-slate-500">Last updated: June 4, 2026</p>
      <div className="mt-9 space-y-9 text-base leading-8 text-slate-600">
        <section>
          <h2 className="text-2xl font-semibold text-ink">Acceptance of terms</h2>
          <p className="mt-3">
            By accessing or using Ecom Profit Tools, you agree to these Terms of
            Use. If you do not agree with these terms, do not use the website.
            These terms apply to the calculators, guides, pages, examples, and
            other content published on this website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-ink">Acceptable use</h2>
          <p className="mt-3">
            Ecom Profit Tools offers free calculators and educational content for
            business planning. You may use the website for lawful personal or
            business information purposes.
          </p>
          <p className="mt-3">
            You agree not to misuse the website, interfere with its operation,
            attempt unauthorized access, copy pages at scale, submit malicious
            code, or use the site in a way that violates applicable laws or the
            rights of others.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-ink">
            Calculator information and limitations
          </h2>
          <p className="mt-3">
            Calculators on this site produce estimates from the values and fee
            assumptions entered by the user. They are intended to help ecommerce
            sellers think through pricing, fees, profit, margin, ROI, ROAS, and
            break-even scenarios.
          </p>
          <p className="mt-3">
            Outputs may be incomplete or unsuitable for a specific store,
            marketplace, country, currency, category, tax situation, promotion,
            or account arrangement. You are responsible for checking inputs,
            formulas, current platform terms, and actual business records before
            relying on any result.
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
          <h2 className="text-2xl font-semibold text-ink">Intellectual property</h2>
          <p className="mt-3">
            The site design, calculator explanations, examples, page copy,
            graphics, and other original materials are owned by Ecom Profit
            Tools or used with permission, except for third-party names and
            marks referenced to identify ecommerce platforms, payment providers,
            advertising services, or seller workflows.
          </p>
          <p className="mt-3">
            You may link to public pages and use calculator outputs for your own
            planning. You may not reproduce, republish, sell, or scrape
            substantial portions of the website without permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-ink">
            Third-party links and services
          </h2>
          <p className="mt-3">
            The website may link to third-party platforms, marketplaces, payment
            processors, advertising tools, analytics services, or educational
            references. Those third parties are independent from Ecom Profit
            Tools and are governed by their own terms, policies, pricing, and
            practices.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-ink">
            Advertising and affiliate disclosure
          </h2>
          <p className="mt-3">
            Ecom Profit Tools may display advertising, including ads served by
            Google AdSense or other advertising partners. Advertising content is
            provided by third parties and does not mean Ecom Profit Tools
            endorses a product, service, or claim.
          </p>
          <p className="mt-3">
            Some pages may discuss ecommerce tools or services. If affiliate
            links are used in the future, we will identify them where
            appropriate. External services and products remain subject to their
            own terms and policies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-ink">Limitation of liability</h2>
          <p className="mt-3">
            To the extent permitted by law, Ecom Profit Tools is not responsible
            for losses, damages, missed revenue, incorrect decisions, or business
            outcomes related to use of the website, calculator outputs, linked
            services, or educational content. Users remain responsible for
            checking all results and making their own decisions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-ink">Changes to terms</h2>
          <p className="mt-3">
            We may revise these Terms of Use as the website, calculators,
            advertising arrangements, or legal requirements change. The updated
            date on this page identifies the current published version.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-ink">Contact information</h2>
          <p className="mt-3">
            Questions about these terms can be sent to{" "}
            <a className="font-semibold text-brand-600" href="mailto:contact@ecomprofittools.com">
              contact@ecomprofittools.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
