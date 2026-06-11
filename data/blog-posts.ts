import { featuredGuides } from "@/data/featured-guides";
import { profitGuides } from "@/data/profit-guides";

export interface BlogPostSummary {
  slug: string;
  title: string;
  seoTitle: string;
  category: string;
  description: string;
  readTime: string;
  updatedAt?: string;
}

export const blogPosts: BlogPostSummary[] = [
  ...profitGuides.map((guide) => ({
    slug: guide.slug,
    title: guide.title,
    seoTitle: guide.seoTitle,
    category: guide.category,
    description: guide.description,
    readTime: guide.readTime,
    updatedAt: guide.updatedAt,
  })),
  ...featuredGuides.map((guide) => ({
    slug: guide.slug,
    title: guide.title,
    seoTitle: guide.seoTitle,
    category: guide.category,
    description: guide.description,
    readTime: guide.readTime,
    updatedAt: guide.updatedAt,
  })),
  {
    slug: "ecommerce-profit-formula-explained",
    title: "Ecommerce Profit Formula Explained",
    seoTitle: "Ecommerce Profit Formula Explained: Costs, Fees, and Margin",
    category: "Profit",
    description:
      "A practical framework for calculating ecommerce profit from revenue, product cost, shipping, payment fees, marketplace fees, advertising, returns, and overhead.",
    readTime: "11 min read",
    updatedAt: "June 2, 2026",
  },
  {
    slug: "how-to-price-products-for-profit",
    title: "How to Price Products for Ecommerce Profit",
    seoTitle: "How to Price Products for Ecommerce Profit: Seller Pricing Guide",
    category: "Pricing",
    description:
      "Learn a repeatable pricing workflow that connects landed cost, fees, margin, shipping, discounts, advertising, and break-even checks.",
    readTime: "11 min read",
    updatedAt: "June 2, 2026",
  },
  {
    slug: "ecommerce-fee-stack-checklist",
    title: "Ecommerce Fee Stack Checklist",
    seoTitle: "Ecommerce Fee Stack Checklist for Shopify, Etsy, Amazon, and Payments",
    category: "Fees",
    description:
      "Use this fee checklist to identify platform, payment, fulfillment, advertising, return, and operating costs before judging seller profit.",
    readTime: "12 min read",
    updatedAt: "June 2, 2026",
  },
  {
    slug: "how-to-calculate-ecommerce-profit",
    title: "How to Calculate Ecommerce Profit",
    seoTitle: "How to Calculate Ecommerce Profit: Formula and Example",
    category: "Profit",
    description:
      "Learn how to calculate ecommerce net profit after product cost, shipping, platform fees, payment fees, returns, overhead, and advertising.",
    readTime: "8 min read",
  },
  {
    slug: "paypal-vs-stripe-fees",
    title: "PayPal vs Stripe Fees for Ecommerce Sellers",
    seoTitle: "PayPal vs Stripe Fees: A Seller Cost Comparison",
    category: "Payments",
    description:
      "Compare PayPal and Stripe payment costs, fixed fees, international charges, refunds, disputes, and the factors that affect seller profit.",
    readTime: "8 min read",
  },
  {
    slug: "what-is-a-good-profit-margin-for-ecommerce",
    title: "What Is a Good Profit Margin for Ecommerce?",
    seoTitle: "What Is a Good Profit Margin for Ecommerce Sellers?",
    category: "Margins",
    description:
      "Understand healthy ecommerce profit margins, why targets vary by product and channel, and how to improve margin without relying on guesswork.",
    readTime: "9 min read",
  },
  {
    slug: "how-to-calculate-roas-for-ecommerce",
    title: "How to Calculate ROAS for Ecommerce",
    seoTitle: "How to Calculate ROAS for Ecommerce: Formula and Targets",
    category: "Advertising",
    description:
      "Use the ecommerce ROAS formula, calculate break-even ROAS from margin, and evaluate advertising revenue against real profitability.",
    readTime: "8 min read",
  },
  {
    slug: "marketplace-seller-fees-explained",
    title: "Marketplace Seller Fees Explained",
    seoTitle: "Marketplace Seller Fees Explained: A Profit Guide",
    category: "Fees",
    description:
      "A practical guide to listing, transaction, payment, fulfillment, advertising, subscription, and return fees for marketplace sellers.",
    readTime: "9 min read",
  },
  {
    slug: "shopify-fees-explained",
    title: "Shopify Fees Explained",
    seoTitle: "Shopify Fees Explained: A Cost Guide for Sellers",
    category: "Shopify",
    description:
      "Understand the Shopify costs that can affect store profit, from subscriptions and payment processing to apps, shipping, marketing, and returns.",
    readTime: "9 min read",
  },
  {
    slug: "etsy-fees-explained",
    title: "Etsy Fees Explained",
    seoTitle: "Etsy Fees Explained: A Practical Seller Cost Guide",
    category: "Etsy",
    description:
      "Learn how to account for Etsy listing, transaction, payment, promotion, shipping, and operating costs when evaluating product profitability.",
    readTime: "9 min read",
  },
  {
    slug: "amazon-referral-fees-explained",
    title: "Amazon Referral Fees Explained",
    seoTitle: "Amazon Referral Fees Explained for Online Sellers",
    category: "Amazon",
    description:
      "Understand how Amazon referral fees fit into a seller profit calculation alongside fulfillment, advertising, returns, and product costs.",
    readTime: "9 min read",
  },
  {
    slug: "ebay-promoted-listing-fees-explained",
    title: "eBay Promoted Listing Fees Explained",
    seoTitle: "eBay Promoted Listing Fees Explained for Sellers",
    category: "eBay",
    description:
      "Learn how promoted listing costs interact with eBay selling fees, margins, attribution, and ROAS when planning profitable advertising.",
    readTime: "9 min read",
  },
  {
    slug: "tiktok-shop-fees-explained",
    title: "TikTok Shop Fees Explained",
    seoTitle: "TikTok Shop Fees Explained: Seller Profit Guide",
    category: "TikTok Shop",
    description:
      "Plan TikTok Shop profitability by considering platform charges, promotions, fulfillment, affiliate or ad costs, returns, and product margin.",
    readTime: "9 min read",
  },
];

export function getBlogPost(slug: string): BlogPostSummary {
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    throw new Error(`Blog post not found: ${slug}`);
  }

  return post;
}
