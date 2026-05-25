import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle, { ArticleSection } from "@/components/BlogArticle";
import { getBlogPost } from "@/data/blog-posts";

const post = getBlogPost("marketplace-seller-fees-explained");
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

export default function MarketplaceSellerFeesArticle() {
  return (
    <BlogArticle
      category={post.category}
      title={post.title}
      description={post.description}
      readTime={post.readTime}
    >
      <ArticleSection title="Why marketplace fees require a full calculation">
        <p>
          Online marketplaces can put products in front of shoppers without the
          seller building all demand independently. In return, platforms may
          charge for listing, selling, accepting payment, fulfillment, storage,
          optional advertising, or services connected to an order. The
          commission shown in a marketing headline is rarely the complete cost
          of operating a marketplace listing.
        </p>
        <p>
          Fee schedules depend on platform, category, country, seller program,
          fulfillment method, advertising choices, and order characteristics.
          Platforms update their terms periodically. Before pricing an item,
          read the current official seller fee schedule for the exact marketplace
          and program you use. Then model each applicable charge alongside
          product, delivery, return, and marketing costs to determine profit.
        </p>
      </ArticleSection>

      <ArticleSection title="Listing and subscription charges">
        <p>
          Some marketplaces charge when an item is listed or renewed, whether or
          not it sells. Others offer monthly seller plans, store subscriptions,
          premium placement, additional account services, or limits that make a
          paid plan economical only after a certain order volume. These charges
          are easy to overlook because they may appear separately from the order
          payout.
        </p>
        <p>
          Allocate recurring or listing costs realistically. If a $40 monthly
          plan supports 200 orders, allocating $0.20 per order is a useful
          starting estimate. If a listing costs money and sells only once every
          four renewals, the successful order effectively bears all four listing
          charges. A catalog with slow-moving variations can therefore have very
          different economics from a compact, fast-moving range even at the
          same sales price.
        </p>
      </ArticleSection>

      <ArticleSection title="Transaction, referral, and payment fees">
        <p>
          A transaction or referral fee is often calculated as a percentage of
          the order amount and may vary by category. Check which amounts are
          included in the fee base: item price, seller-charged shipping, gift
          wrapping, taxes, or other amounts can be treated differently under
          platform rules. A percentage applied to more than the merchandise
          price can reduce profit more than a quick estimate suggests.
        </p>
        <p>
          Payment processing can be included within a marketplace charge or
          assessed separately as a percentage plus a fixed charge per order.
          Fixed charges weigh heavily on low-priced items. If several inexpensive
          units can be bundled into one larger order, processing and packaging
          cost as a share of revenue may decline. Always use the fee structure
          for the seller&apos;s payment country and transaction type rather than
          a rate quoted for a different market.
        </p>
      </ArticleSection>

      <ArticleSection title="Fulfillment, shipping, and storage costs">
        <p>
          When a marketplace fulfills orders, charges may cover picking,
          packing, outbound shipping, storage, inbound placement, removal,
          disposal, or special handling. These fees frequently depend on product
          dimensions, shipping weight, season, storage duration, and service
          level. Accurate packaged measurements are therefore part of pricing:
          a small packaging change can move an item into a different cost band.
        </p>
        <p>
          Seller-fulfilled orders still have costs, even when the platform does
          not call them fees. Include postage, boxes or mailers, labels, labor,
          tracking, shipping insurance where used, and any shipping discount
          promised to the buyer. Inventory held too long also consumes cash and
          storage space. Compare fulfillment choices using total cost and
          customer service expectations, not only the platform fulfillment line
          item.
        </p>
      </ArticleSection>

      <ArticleSection title="Advertising, promotions, and return costs">
        <p>
          Marketplace advertising and promoted placement can drive visibility,
          but advertising needs its own profitability threshold. A seller that
          earns $9 before ads on an order cannot sustainably spend $12 acquiring
          that order just because sales rank improves. Coupons, promotional
          participation, affiliate programs, or marketplace-funded promotions
          may also change the revenue paid to the seller or the fees charged.
          Read the program rules before opting in.
        </p>
        <p>
          Returns can eliminate revenue while leaving outbound fulfillment,
          payment, return label, inspection, restocking, damaged product, or
          disposal costs. Platforms vary in what they reimburse or retain after
          a refund. Estimate a return allowance using actual category behavior,
          especially for products with sizing, fit, fragility, or subjective
          preference. A low headline fee does little good if returns routinely
          consume the remaining margin.
        </p>
      </ArticleSection>

      <ArticleSection title="Example of a seller fee stack">
        <p>
          Consider a product sold for $50 with $18 landed product cost. Suppose
          the seller estimates $0.30 of allocated listing or subscription cost,
          $7.50 in percentage marketplace charges, $1.75 payment processing,
          $6.00 delivery and packaging, $1.50 return allowance, and $5.00
          marketplace advertising. The contribution profit is $9.95 before any
          general overhead: $50 - $18 - $0.30 - $7.50 - $1.75 - $6 - $1.50 -
          $5.
        </p>
        <p>
          This example retains almost 20% of sales before overhead. If
          advertising climbs by $4, contribution profit drops to $5.95. If a
          promotion discounts the sale to $45 while costs stay nearly the same,
          the margin narrows further. Scenario calculations show which fees are
          fixed, which rise with price or volume, and how much room remains for
          discounts and paid visibility.
        </p>
      </ArticleSection>

      <ArticleSection title="A routine for pricing marketplace products">
        <p>
          Build a cost sheet for each product with selling price, expected
          discount, landed cost, fee percentages and fixed fees, fulfillment,
          advertising assumption, returns allowance, and allocated operating
          costs. Verify actual payouts against the sheet after sales arrive.
          Review whenever a platform announces fee changes, packaging changes
          product dimensions, advertising expands, or returns depart from the
          estimate.
        </p>
        <p>
          Marketplace fees are manageable when they are visible before a seller
          chooses a price or campaign. For channel-specific scenarios, try the{" "}
          <Link className="font-semibold text-brand-600" href="/etsy-fee-calculator">
            Etsy fee calculator
          </Link>{" "}
          or the{" "}
          <Link
            className="font-semibold text-brand-600"
            href="/amazon-fba-profit-calculator"
          >
            Amazon FBA profit calculator
          </Link>
          , using current official fee terms as your inputs. Comparing true
          contribution profit allows marketplace reach to be evaluated as a
          business cost rather than a surprise on the payout report.
        </p>
      </ArticleSection>
    </BlogArticle>
  );
}
