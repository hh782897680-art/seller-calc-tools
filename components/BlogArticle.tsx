import type { ReactNode } from "react";
import Link from "next/link";
import { getCalculator, type CalculatorSlug } from "@/data/calculators";

interface BlogArticleProps {
  category: string;
  title: string;
  description: string;
  readTime: string;
  updatedAt?: string;
  relatedCalculatorSlugs: CalculatorSlug[];
  children: ReactNode;
}

interface ArticleSectionProps {
  title: string;
  children: ReactNode;
}

export function ArticleSection({ title, children }: ArticleSectionProps) {
  return (
    <section>
      <h2 className="section-heading">{title}</h2>
      <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">
        {children}
      </div>
    </section>
  );
}

export default function BlogArticle({
  category,
  title,
  description,
  readTime,
  updatedAt,
  relatedCalculatorSlugs,
  children,
}: BlogArticleProps) {
  const relatedCalculators = relatedCalculatorSlugs.map((slug) =>
    getCalculator(slug),
  );

  return (
    <main>
      <header className="border-b border-slate-200 bg-white">
        <div className="page-container max-w-4xl py-12 sm:py-16">
          <Link
            href="/blog"
            className="text-sm font-semibold uppercase tracking-widest text-brand-600"
          >
            {category} guide
          </Link>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            {description}
          </p>
          <p className="mt-5 text-sm font-medium text-slate-500">
            {readTime}
            {updatedAt ? ` · Last updated: ${updatedAt}` : ""}
          </p>
        </div>
      </header>

      <article className="page-container mt-12 max-w-4xl space-y-12">
        {children}

        <section className="surface-card bg-brand-50 p-7">
          <h2 className="text-xl font-semibold text-ink">Try these calculators</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Use Ecom Profit Tools calculators to test sales, costs, fees, margin,
            and advertising scenarios with your own assumptions.
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {relatedCalculators.map((calculator) => (
              <li key={calculator.slug}>
                <Link
                  className="flex h-full items-center justify-between rounded-xl border border-brand-100 bg-white px-5 py-4 font-semibold text-ink transition hover:border-brand-300 hover:text-brand-700"
                  href={`/${calculator.slug}`}
                >
                  <span>{calculator.name}</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
