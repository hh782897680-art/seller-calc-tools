import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle, { ArticleSection } from "@/components/BlogArticle";
import { getBlogPost } from "@/data/blog-posts";

const post = getBlogPost("ecommerce-profit-formula-explained");
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

export default function EcommerceProfitFormulaExplainedArticle() {
  return (
    <BlogArticle
      category={post.category}
      title={post.title}
      description={post.description}
      readTime={post.readTime}
      updatedAt={post.updatedAt}
      relatedCalculatorSlugs={[
        "shopify-profit-calculator",
        "profit-margin-calculator",
        "paypal-fee-calculator",
      ]}
    >
      <ArticleSection title="The practical ecommerce profit formula">
        <p>
          Ecommerce profit is not the same as sales, payout balance, or the
          amount left after buying inventory. A useful formula starts with net
          sales, then deducts the direct and indirect costs required to earn
          those sales. For most sellers, the working formula is: net profit =
          net sales - product cost - fulfillment cost - payment fees -
          platform fees - advertising cost - returns - allocated operating
          expenses.
        </p>
        <p>
          The exact labels can change by channel. A Shopify store may call some
          costs apps, subscription, payment processing, carrier labels, and ad
          spend. An Etsy shop may see listing, transaction, payment processing,
          postage, and offsite ad charges. An Amazon FBA seller may track
          referral fees, fulfillment, storage, inbound shipping, and PPC. The
          profit formula stays useful because it forces every cost into the same
          decision frame before margin is judged.
        </p>
      </ArticleSection>

      <ArticleSection title="Start with net sales, not vanity revenue">
        <p>
          Net sales should represent the money earned from orders after
          discounts, cancellations, refunded sales, and seller-funded
          promotions are handled consistently. If a store reports $20,000 in
          gross sales but $2,000 was refunded and $1,500 came from seller-funded
          discounts, treating the gross number as profit base will overstate the
          business. The cleaner starting point is the revenue that the business
          actually kept as sales for the period being reviewed.
        </p>
        <p>
          Be careful with shipping charged to customers and sales tax. Shipping
          revenue may be part of the amount charged to the buyer and may also be
          part of the fee base for some channels, but it should be matched with
          the shipping cost paid by the seller. Taxes collected for a tax
          authority are generally not operating revenue. Follow your accounting
          setup and professional guidance, but do not let collected tax inflate
          perceived store performance.
        </p>
      </ArticleSection>

      <ArticleSection title="Separate cost of goods from selling costs">
        <p>
          Cost of goods sold should reflect the units sold, not simply the cash
          spent buying inventory during the month. For a physical product, this
          can include purchase cost, inbound freight, duties, preparation,
          labeling, packaging that belongs with the product, and any production
          expense needed before sale. For handmade products, materials and
          production time should be defined consistently so pricing is not built
          on incomplete cost.
        </p>
        <p>
          Selling costs are the costs created by the order or the channel.
          Payment processing, marketplace commissions, transaction fees,
          fulfillment, postage, pick-and-pack, customer acquisition, affiliate
          commission, returns, and customer support allowances belong here. A
          product with strong gross margin can still become weak after selling
          costs are included, especially if paid traffic or shipping subsidies
          are required to produce the order.
        </p>
      </ArticleSection>

      <ArticleSection title="Use contribution profit before full overhead">
        <p>
          Contribution profit is a helpful middle step: revenue minus the costs
          that are directly tied to producing and fulfilling the sale. It helps
          a seller decide whether one more order, product, campaign, or channel
          is worth scaling. If contribution profit is negative, more volume
          usually makes the problem bigger unless the seller expects repeat
          purchases or a clearly documented strategic reason.
        </p>
        <p>
          Overhead still matters. Subscriptions, design work, bookkeeping,
          insurance, storage, software, support labor, and owner compensation
          eventually need to be covered. The key is to avoid mixing cost scopes
          casually. Use contribution profit for product and ad decisions, then
          use net profit after overhead for business health. Label each view so
          comparisons remain honest.
        </p>
      </ArticleSection>

      <ArticleSection title="Worked example with margin">
        <p>
          Suppose an online store records $18,000 in net sales during a month.
          Product cost for the units sold is $6,300. Fulfillment, shipping, and
          packaging cost $2,100. Payment and platform fees are $850.
          Advertising costs $3,000. Refund and return allowances cost $700.
          Allocated monthly operating expenses are $1,250. Net profit is
          $18,000 - $6,300 - $2,100 - $850 - $3,000 - $700 - $1,250 = $3,800.
        </p>
        <p>
          Profit margin is $3,800 / $18,000 x 100, or 21.11%. That percentage
          tells a better story than revenue alone. If ad costs rise to $4,500
          without increasing net sales, profit falls to $2,300 and margin falls
          to 12.78%. If product cost drops by $900 while other assumptions stay
          stable, margin rises to 26.11%. This is why a structured formula is
          useful for decisions, not just reporting.
        </p>
      </ArticleSection>

      <ArticleSection title="Tie the formula to seller decisions">
        <p>
          The formula should answer concrete questions. Can the store afford a
          15% discount? Does a free-shipping threshold raise order value enough
          to offset delivery cost? Can a product support paid acquisition after
          payment fees and returns? Should a marketplace product move to a
          direct store, or does the direct store require too much advertising to
          replace marketplace demand?
        </p>
        <p>
          Run the formula at several levels: one order, one product, one
          campaign, one channel, and the full month. Averages can hide weak
          items. Product-level work reveals what to promote. Channel-level work
          shows where costs are rising. Monthly net profit shows whether all
          activity is paying for the business as a whole.
        </p>
      </ArticleSection>

      <ArticleSection title="A repeatable review workflow">
        <p>
          Each month, export orders, refunds, product cost, shipping labels,
          processor fees, marketplace charges, advertising spend, app bills, and
          overhead. Reconcile forecasted inputs with actual statements. Keep a
          note explaining which costs are included in each margin view. When
          changing price, ad budgets, fulfillment, or selling channel, rerun the
          model before the change and after real data arrives.
        </p>
        <p>
          For a quick scenario, use the{" "}
          <Link className="font-semibold text-brand-600" href="/shopify-profit-calculator">
            Shopify Profit Calculator
          </Link>{" "}
          or check the final percentage with the{" "}
          <Link className="font-semibold text-brand-600" href="/profit-margin-calculator">
            Profit Margin Calculator
          </Link>
          . The calculator is not bookkeeping software, but it makes the
          assumptions visible before a seller commits cash, inventory, or ad
          spend.
        </p>
      </ArticleSection>
    </BlogArticle>
  );
}
