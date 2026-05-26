import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle, { ArticleSection } from "@/components/BlogArticle";
import { getBlogPost } from "@/data/blog-posts";

const post = getBlogPost("shopify-fees-explained");
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

export default function ShopifyFeesExplainedArticle() {
  return (
    <BlogArticle
      category={post.category}
      title={post.title}
      description={post.description}
      readTime={post.readTime}
      relatedCalculatorSlugs={[
        "shopify-fee-calculator",
        "shopify-profit-calculator",
        "profit-margin-calculator",
      ]}
    >
      <ArticleSection title="What Shopify fees mean for a store owner">
        <p>
          Shopify gives a merchant the tools to operate an online store, but a
          store&apos;s cost is not a single percentage taken from sales. A seller
          may pay for a plan, payment acceptance, optional apps or themes, domain
          services, shipping tools, marketing, and the operational work required
          to deliver an order. Some charges are recurring, while others change
          with the number, value, location, or payment method of orders.
        </p>
        <p>
          That distinction matters because a product can look profitable when
          only its product cost is considered, then become much less attractive
          after selling expenses are included. Shopify pricing and payment terms
          can change, and available options differ by country and plan. Treat the
          official Shopify pricing pages and the terms shown in your own admin as
          the source of truth before setting a price or updating a forecast.
        </p>
      </ArticleSection>

      <ArticleSection title="Start with recurring store costs">
        <p>
          A subscription is typically the first visible store expense. For
          profitability analysis, it should not disappear simply because it is
          billed monthly or yearly instead of on an order. Allocate recurring
          costs over a realistic number of monthly orders. A growing shop can
          spread the same base cost across more sales; a new or seasonal shop may
          carry a noticeably larger cost per completed order.
        </p>
        <p>
          Apps, premium themes, email tools, review services, reporting tools,
          domains, and other services can add convenience or revenue, but each
          should earn its place. Keep a list of subscriptions, renewal dates, and
          the reason each tool is used. When an app supports only one collection
          or sales channel, assigning its cost to that area gives a clearer view
          than spreading it across products it does not help sell.
        </p>
      </ArticleSection>

      <ArticleSection title="Account for payment and transaction charges">
        <p>
          Online orders need a way to accept payment. The applicable processing
          cost can depend on the store&apos;s plan, payment provider, buyer
          location, currency, card type, and other transaction details. Stores
          that use a payment provider outside the platform&apos;s native option
          should also check whether additional Shopify charges apply to that
          configuration. Model the setup actually enabled in your store rather
          than relying on a headline example.
        </p>
        <p>
          Look carefully at how refunds, chargebacks, currency conversion, and
          international payments affect net proceeds. A refunded order may still
          leave nonrecoverable expenses, and a disputed order can involve costs
          beyond the item value. Your payout and billing reports are useful for
          reconciling assumptions: after a month of sales, compare the payment
          cost you forecast with the charges that were actually recorded.
        </p>
      </ArticleSection>

      <ArticleSection title="Selling costs extend beyond the Shopify bill">
        <p>
          Platform and payment costs are only part of a direct-to-consumer
          order. Include landed product cost, packaging, postage or fulfillment,
          delivery insurance when used, discounts funded by the store, return
          labels, replacement shipments, customer service, and an allowance for
          damaged or unsellable returns. Tax collected for an authority is not
          profit and should be handled consistently with your accounting advice
          and reporting obligations.
        </p>
        <p>
          Customer acquisition can be an even larger variable. Paid social,
          search advertising, creator commissions, affiliate payments, and email
          promotions should be associated with the revenue they are intended to
          produce. Gross sales do not establish that a campaign worked. A store
          must still have contribution profit after product, delivery, payment,
          platform, return, and acquisition costs have been deducted.
        </p>
      </ArticleSection>

      <ArticleSection title="Build a per-order Shopify profit calculation">
        <p>
          Begin with the amount the customer pays for merchandise and any
          shipping revenue you retain, after discounts and refunded sales. From
          that amount deduct product landed cost, allocated recurring store cost,
          payment and applicable transaction charges, fulfillment and shipping,
          return allowance, and marketing cost. The remaining figure is
          contribution profit before general business overhead that is not yet
          assigned to the order.
        </p>
        <p>
          Keep costs separate rather than compressing everything into one
          estimate. Percentage-based charges rise when the selling price rises;
          a packaging cost may stay stable; shipping can change by zone or
          weight; ad cost can vary dramatically by campaign. Separating these
          inputs lets a merchant test a bundle, price increase, free-shipping
          threshold, or advertising budget without losing sight of which
          assumption caused the result.
        </p>
      </ArticleSection>

      <ArticleSection title="Use a scenario instead of a guessed margin">
        <p>
          Imagine an item sells for $60 after a promotion. The merchant records
          $21 in landed product cost, $8 for fulfillment and shipping, $1 for a
          returns allowance, $12 for customer acquisition, and the subscription
          allocation and payment or platform charges verified for that order.
          This is not a Shopify rate example; it is a planning template. Entering
          the store&apos;s actual charges reveals what remains from the sale.
        </p>
        <p>
          The same scenario can answer practical questions. Would increasing the
          order value with a bundle cover its additional postage? Can a discount
          be offered without pushing profit below the target? How much paid
          acquisition is affordable before the order breaks even? Testing these
          variations is more reliable than assuming a sales increase will
          automatically improve the business.
        </p>
      </ArticleSection>

      <ArticleSection title="Review charges as the store evolves">
        <p>
          Maintain a short monthly review: export orders and refunds, check
          Shopify bills and payment payouts, gather shipping and advertising
          totals, allocate active subscriptions, and compare actual profit with
          the assumptions used to price products. Repeat the review when the
          business changes plan, enables a new payment method, installs an app,
          enters a new country, or adjusts its fulfillment strategy.
        </p>
        <p>
          For a quick estimate of store charges, open the{" "}
          <Link className="font-semibold text-brand-600" href="/shopify-fee-calculator">
            Shopify fee calculator
          </Link>{" "}
          and use inputs supported by current official Shopify terms for your
          setup. Pair that fee view with full profit and margin analysis before
          making pricing decisions. Clear assumptions, checked against real
          statements, turn fees from an after-the-sale surprise into a planned
          cost of serving customers.
        </p>
      </ArticleSection>
    </BlogArticle>
  );
}
