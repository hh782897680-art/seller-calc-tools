import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle, { ArticleSection } from "@/components/BlogArticle";
import { getBlogPost } from "@/data/blog-posts";

const post = getBlogPost("paypal-vs-stripe-fees");
const url = `https://ecomprofittools.com/blog/${post.slug}`;

export const metadata: Metadata = {
  title: post.seoTitle,
  description: post.description,
  alternates: {
    canonical: url,
  },
  openGraph: {
    type: "article",
    url,
    siteName: "Ecom Profit Tools",
    title: post.seoTitle,
    description: post.description,
  },
};

export default function PaypalVsStripeFeesArticle() {
  return (
    <BlogArticle
      category={post.category}
      title={post.title}
      description={post.description}
      readTime={post.readTime}
    >
      <ArticleSection title="Compare the payment mix, not just one rate">
        <p>
          PayPal and Stripe both let ecommerce businesses accept online
          payments, but a useful comparison starts with how customers actually
          pay. A store may offer the PayPal wallet because shoppers recognize it,
          process ordinary card checkouts through Stripe, accept international
          cards, and issue occasional refunds. The cost is the combined result
          of those transaction types rather than a single advertised number.
        </p>
        <p>
          Fees also depend on the seller&apos;s country, customer location,
          currency conversion, product configuration, negotiated pricing, and
          optional services. This guide uses the structure a US online seller
          should evaluate. Before changing checkout, confirm the applicable
          prices on the official{" "}
          <a
            className="font-semibold text-brand-600"
            href="https://www.paypal.com/us/webapps/mpp/merchant-fees"
          >
            PayPal merchant fees
          </a>{" "}
          and{" "}
          <a className="font-semibold text-brand-600" href="https://stripe.com/us/pricing">
            Stripe pricing
          </a>{" "}
          pages and in the terms for your own account.
        </p>
      </ArticleSection>

      <ArticleSection title="How online processing charges work">
        <p>
          Most standard online payment charges have a percentage component and
          a fixed amount per successful transaction. The percentage makes a
          higher-value order cost more to process. The fixed component matters
          more on inexpensive items: thirty cents on a $5 sale consumes much
          more margin than thirty cents on a $100 sale. Average order value is
          therefore essential in any processor comparison.
        </p>
        <p>
          Official US pricing currently lists Stripe domestic online card
          transactions at 2.9% plus 30 cents, with additional listed charges
          for certain international cards and currency conversion. PayPal&apos;s
          US merchant fee table lists payment types separately; for example,
          PayPal Checkout domestic commercial transactions use a listed
          percentage plus a currency-based fixed fee. Since tables and eligible
          products can change, use these figures as a comparison starting point,
          not a permanent promise of cost.
        </p>
      </ArticleSection>

      <ArticleSection title="Estimate fees using your own orders">
        <p>
          Imagine 200 domestic online orders averaging $50, for $10,000 in
          processed payments. A pricing plan of 2.9% plus $0.30 would produce
          $350 in transaction charges: $290 percentage cost plus $60 fixed
          cost. A different wallet or checkout rate must be evaluated with the
          same order count and revenue. Multiplying only the percentage misses
          the fixed fees entirely.
        </p>
        <p>
          Create separate rows for domestic card checkout, wallet checkout,
          international cards, converted currencies, subscriptions if used, and
          any alternative payment methods. Multiply each row by its applicable
          variable and fixed fees, then add relevant extras. This weighted model
          shows what the store would have paid under each provider given its
          actual customer behavior. It is far more dependable than comparing two
          rates without transaction volume.
        </p>
      </ArticleSection>

      <ArticleSection title="International sales, conversion, and refunds">
        <p>
          A seller with customers outside its home country should give special
          attention to cross-border transactions and currency conversion.
          Additional international or conversion charges can turn an apparently
          small difference in domestic pricing into a material cost. Decide
          whether the customer pays in the store&apos;s settlement currency or
          whether the processor converts funds, then model the applicable
          surcharge from the pricing table.
        </p>
        <p>
          Refunds and disputes are another margin issue. When an order is
          refunded, the product revenue disappears while shipping, return
          handling, and some previously charged payment costs may remain,
          depending on the provider and account terms. Disputes can carry a fee
          and operational work even when the seller responds successfully. Read
          each provider&apos;s current refund and dispute terms, then estimate
          costs using your historical refund and chargeback rates.
        </p>
      </ArticleSection>

      <ArticleSection title="Conversion and customer preference matter">
        <p>
          Choosing a payment option solely because its modeled processing cost
          is lower can be a false economy. Some shoppers prefer paying from a
          familiar wallet; others expect a smooth card checkout with saved
          details or local payment methods. Removing a preferred option can
          reduce completed orders, while offering an additional method can
          improve conversion enough to justify its cost.
        </p>
        <p>
          Measure payment method adoption, checkout completion, average order
          value, refunds, disputes, and net contribution profit. A controlled
          checkout test or a monthly comparison can show whether the incremental
          sales from offering PayPal, Stripe-powered methods, or both outweigh
          the added fees and implementation work. Payment processing supports
          customer acquisition; it is not simply a procurement decision.
        </p>
      </ArticleSection>

      <ArticleSection title="Platform and operating considerations">
        <p>
          Confirm how a payment provider works with the ecommerce platform. A
          hosted storefront may impose additional transaction charges when an
          outside processor is used, while a custom site may require engineering
          effort for payment flows, tax handling, fraud tools, webhooks, or
          recurring billing. Optional products such as invoicing, fraud
          screening, accelerated checkout, or multicurrency settlement may also
          carry separate prices.
        </p>
        <p>
          Operational fit has a real cost. Reconciliation should connect every
          order, payout, processing charge, refund, and dispute to accounting
          records. Review payout timing if cash is tight, access controls if a
          team manages refunds, and reporting exports before committing to a
          workflow. A processor that saves a small amount but creates manual
          bookkeeping each week may not improve the business.
        </p>
      </ArticleSection>

      <ArticleSection title="Make the comparison part of profit planning">
        <p>
          Download a representative period of transactions and group orders by
          payment type, currency, customer country, refund status, and disputed
          status. Apply each provider&apos;s current, account-specific fee terms.
          Add platform costs and the expected effect on checkout conversion.
          Record both the total dollar cost and payment cost as a percentage of
          collected sales, then update the calculation as sales patterns change.
        </p>
        <p>
          For a quick fee scenario, the{" "}
          <Link className="font-semibold text-brand-600" href="/paypal-fee-calculator">
            PayPal fee calculator
          </Link>{" "}
          and{" "}
          <Link className="font-semibold text-brand-600" href="/stripe-fee-calculator">
            Stripe fee calculator
          </Link>{" "}
          can help translate a rate assumption into dollars. Confirm rates from
          official pricing before relying on the output, and evaluate final
          processor decisions using profit after fees rather than checkout cost
          in isolation.
        </p>
      </ArticleSection>
    </BlogArticle>
  );
}
