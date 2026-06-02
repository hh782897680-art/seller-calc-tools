import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle, { ArticleSection } from "@/components/BlogArticle";
import { getBlogPost } from "@/data/blog-posts";

const post = getBlogPost("ecommerce-fee-stack-checklist");
const url = `https://www.ecomprofittools.com/blog/${post.slug}`;

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

export default function EcommerceFeeStackChecklistArticle() {
  return (
    <BlogArticle
      category={post.category}
      title={post.title}
      description={post.description}
      readTime={post.readTime}
      updatedAt={post.updatedAt}
      relatedCalculatorSlugs={[
        "shopify-profit-calculator",
        "etsy-fee-calculator",
        "amazon-fba-profit-calculator",
      ]}
    >
      <ArticleSection title="What a fee stack is">
        <p>
          A fee stack is the complete set of charges and cost layers attached
          to a sale. Ecommerce sellers often notice the largest cost first,
          such as product purchase or marketplace commission, but profit depends
          on the full stack. Payment processing, fulfillment, shipping, returns,
          advertising, subscriptions, and operating tools can each remove a
          small amount until the remaining margin is much lower than expected.
        </p>
        <p>
          The checklist below is designed for pricing and review. It does not
          replace official platform terms or accounting records. Instead, it
          helps a seller avoid missing cost categories before using a calculator
          or deciding that a product is profitable.
        </p>
      </ArticleSection>

      <ArticleSection title="Platform and marketplace fees">
        <p>
          Direct stores and marketplaces charge in different ways. Shopify
          sellers may need to review subscription plan cost, payment setup,
          possible third-party transaction charges, apps, themes, and other
          services used to operate the store. Shopify notes that payment costs
          can vary by plan and payment setup, so sellers should verify the plan
          and processor actually enabled in their store.
        </p>
        <p>
          Etsy sellers commonly review listing, transaction, and payment
          processing fees, plus optional Etsy Ads, Offsite Ads, postage labels,
          and country-specific charges where applicable. Amazon sellers should
          check selling plan fees, referral fees, FBA or merchant-fulfilled
          costs, storage, advertising, and optional services. In all cases, use
          official platform pages and actual statements as the final source.
        </p>
      </ArticleSection>

      <ArticleSection title="Payment processing fees">
        <p>
          Payment processors usually combine a percentage charge with a fixed
          charge. The fixed charge is especially important for low-priced
          products because it raises the effective percentage paid on each
          order. A $0.30 or $0.49 fixed cost is minor on a $200 order but can
          meaningfully reduce margin on a $12 item.
        </p>
        <p>
          PayPal, Stripe, marketplace payments, card methods, wallets, invoices,
          international payments, and currency conversion can all differ. Do not
          use one domestic card assumption for every channel. Record the gross
          payment, processor fee, fixed charge, currency, and payout amount for
          a sample of real orders, then update calculator inputs from that
          evidence.
        </p>
      </ArticleSection>

      <ArticleSection title="Fulfillment, shipping, and packaging">
        <p>
          Fulfillment costs can decide whether a price works. Include pick and
          pack, packaging, labels, postage, insurance, carrier surcharges,
          residential or remote-area charges, fulfillment center fees, inbound
          freight, storage, and return labels. If shipping is advertised as
          free, the seller still pays the carrier or fulfillment provider; the
          cost simply moves from the buyer to the margin.
        </p>
        <p>
          Packaging should not be treated as decorative overhead when it changes
          with each order. Boxes, mailers, tape, inserts, void fill, thermal
          labels, and branded packaging can be a real unit cost. For fragile or
          bulky items, include damage and replacement expectations. For
          cross-border sales, document duties, delivery delays, and support
          workload separately.
        </p>
      </ArticleSection>

      <ArticleSection title="Advertising and acquisition costs">
        <p>
          Advertising is often the cost that changes fastest. Paid social,
          search, marketplace ads, influencer commissions, affiliate fees, and
          creator seeding should be tied to the products they are expected to
          sell. Revenue attributed by an ad platform is not the same as profit.
          Product cost, payment fees, returns, and fulfillment still need to be
          deducted.
        </p>
        <p>
          Build scenarios rather than relying on one average. Run a conservative
          case with higher cost per acquisition, a base case from recent data,
          and an optimistic case for improved creative or conversion rate. If a
          campaign only works in the optimistic case, the product may not be
          ready for scale.
        </p>
      </ArticleSection>

      <ArticleSection title="Returns, refunds, and support">
        <p>
          Returns can turn an apparently profitable product into a weak one.
          Account for refunded revenue, nonrecoverable payment fees, return
          labels, inspection, repackaging, damaged units, support time, and
          restocking limits. Some categories have predictable fit, compatibility,
          or preference returns. Treat return allowance as a pricing input, not
          a rare exception.
        </p>
        <p>
          Customer support also belongs in the operating picture. A product that
          creates many questions, warranty claims, setup issues, or address
          corrections may require higher margin than a simple replenishable
          item. If support labor is not allocated per order, review it at the
          monthly business level so it does not vanish from profit analysis.
        </p>
      </ArticleSection>

      <ArticleSection title="Recurring tools and overhead">
        <p>
          Subscriptions and overhead are easy to ignore because they do not
          appear beside every order. Store plans, apps, analytics tools,
          bookkeeping, design, photography, inventory software, email tools,
          storage rent, samples, compliance work, and professional services all
          need a place in the business model. Allocate them carefully when they
          support only one channel or product line.
        </p>
        <p>
          A store can have positive product contribution but still lose money
          after overhead. That does not always mean the product is bad; it may
          mean the business needs more volume, fewer tools, better pricing, or a
          clearer allocation method. The fee stack checklist helps separate
          product economics from business structure.
        </p>
      </ArticleSection>

      <ArticleSection title="Where to verify official fees">
        <p>
          Verify platform and processor assumptions directly. Shopify publishes
          help and pricing pages for payment and plan cost, Etsy publishes fee
          basics and fee policy pages, Amazon publishes selling fee and FBA
          estimate resources, and PayPal publishes business fee tables. These
          sources can change, so the best practice is to check the official
          page and then reconcile with your own account reports.
        </p>
        <p>
          After collecting the fee stack, test the numbers with the{" "}
          <Link className="font-semibold text-brand-600" href="/shopify-profit-calculator">
            Shopify Profit Calculator
          </Link>
          ,{" "}
          <Link className="font-semibold text-brand-600" href="/etsy-fee-calculator">
            Etsy Fee Calculator
          </Link>
          , or{" "}
          <Link className="font-semibold text-brand-600" href="/amazon-fba-profit-calculator">
            Amazon FBA Profit Calculator
          </Link>
          . A calculator is only as useful as its inputs, and this checklist is
          meant to make those inputs harder to overlook.
        </p>
      </ArticleSection>
    </BlogArticle>
  );
}
