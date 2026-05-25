import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ecommerce Calculator Guides | SellerCalcTools Blog",
  description:
    "Planned guides about ecommerce profit, fees, margins, ROAS, Shopify, Etsy, and Amazon FBA selling.",
  alternates: {
    canonical: "https://sellercalctools.com/blog",
  },
  openGraph: {
    title: "Ecommerce Calculator Guides | SellerCalcTools Blog",
    description:
      "Planned guides about ecommerce profit, seller fees, pricing, and advertising returns.",
    url: "https://sellercalctools.com/blog",
    type: "website",
  },
};

const posts = [
  {
    title: "How to calculate ecommerce profit",
    category: "Profit",
    description:
      "A practical outline for tracking sales, product costs, shipping, advertising, and transaction fees.",
  },
  {
    title: "Profit margin vs markup",
    category: "Pricing",
    description:
      "Understand the two percentages sellers often confuse when setting a product price.",
  },
  {
    title: "What is a good ROAS for ecommerce?",
    category: "Advertising",
    description:
      "Learn why a sustainable advertising target depends on margin and customer value.",
  },
  {
    title: "Shopify fees explained",
    category: "Shopify",
    description:
      "Plan for payment fees, transaction costs, apps, shipping, and customer acquisition.",
  },
  {
    title: "Etsy seller fees explained",
    category: "Etsy",
    description:
      "A future guide to listing fees, processing charges, transactions, and offsite ads.",
  },
  {
    title: "Amazon FBA profit explained",
    category: "Amazon FBA",
    description:
      "A future guide to referral, fulfillment, storage, inbound shipping, and ad expense.",
  },
];

export default function BlogPage() {
  return (
    <main className="page-container py-14 sm:py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
          Resources
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          Ecommerce selling guides
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Practical educational content is coming soon. These planned articles
          will help sellers use calculators with better cost and pricing inputs.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article className="surface-card flex flex-col p-6" key={post.title}>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
              {post.category}
            </p>
            <h2 className="mt-3 text-xl font-semibold text-ink">{post.title}</h2>
            <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
              {post.description}
            </p>
            <Link className="mt-6 text-sm font-semibold text-brand-600" href="#">
              Coming soon <span aria-hidden="true">&rarr;</span>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
