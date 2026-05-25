export interface BlogPostSummary {
  slug: string;
  title: string;
  seoTitle: string;
  category: string;
  description: string;
  readTime: string;
}

export const blogPosts: BlogPostSummary[] = [
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
];

export function getBlogPost(slug: string): BlogPostSummary {
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    throw new Error(`Blog post not found: ${slug}`);
  }

  return post;
}
