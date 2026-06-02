import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Ecommerce Calculator Guides | Ecom Profit Tools Blog",
  description:
    "Practical guides about ecommerce profit, fees, margins, ROAS, payment processing, and marketplace selling.",
  alternates: {
    canonical: "https://www.ecomprofittools.com/blog",
  },
  openGraph: {
    title: "Ecommerce Calculator Guides | Ecom Profit Tools Blog",
    description:
      "Practical guides about ecommerce profit, seller fees, pricing, payments, and advertising returns.",
    url: "https://www.ecomprofittools.com/blog",
    type: "website",
    siteName: "Ecom Profit Tools",
  },
};

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
          Understand the costs and metrics behind a profitable online store.
          These guides help sellers use calculator inputs with confidence.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article className="surface-card flex flex-col p-6" key={post.title}>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
              {post.category}
            </p>
            <h2 className="mt-3 text-xl font-semibold text-ink">{post.title}</h2>
            <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
              {post.description}
            </p>
            <p className="mt-5 text-xs font-medium text-slate-500">
              {post.readTime}
              {post.updatedAt ? ` · Updated ${post.updatedAt}` : ""}
            </p>
            <Link
              className="mt-4 text-sm font-semibold text-brand-600"
              href={`/blog/${post.slug}`}
            >
              Read guide <span aria-hidden="true">&rarr;</span>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
