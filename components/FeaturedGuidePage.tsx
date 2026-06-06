import Link from "next/link";
import BlogArticle, { ArticleSection } from "@/components/BlogArticle";
import type { FeaturedGuide } from "@/data/featured-guides";

interface FeaturedGuidePageProps {
  guide: FeaturedGuide;
}

export default function FeaturedGuidePage({
  guide,
}: FeaturedGuidePageProps) {
  return (
    <BlogArticle
      category={guide.category}
      description={guide.description}
      faqs={guide.faqs}
      readTime={guide.readTime}
      relatedCalculatorSlugs={guide.relatedCalculatorSlugs}
      title={guide.title}
      updatedAt={guide.updatedAt}
    >
      <section className="rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-600">
        <p className="font-semibold text-ink">Editorial and affiliate note</p>
        <p className="mt-2">
          This guide is educational and does not promise revenue or profit. It
          does not currently contain paid placements or affiliate links. If that
          changes, a clear disclosure will appear before any compensated link.
        </p>
      </section>

      {guide.sections.map((section) => (
        <ArticleSection key={section.title} title={section.title}>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.subsections?.map((subsection) => (
            <div className="pt-2" key={subsection.title}>
              <h3 className="text-xl font-semibold text-ink">
                {subsection.title}
              </h3>
              <div className="mt-3 space-y-4">
                {subsection.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </ArticleSection>
      ))}

      <section>
        <h2 className="section-heading">Use the related calculators</h2>
        <p className="mt-5 text-base leading-8 text-slate-600">
          Replace example assumptions with numbers from your own listings,
          payout reports, shipping invoices, advertising dashboards, and
          accounting records. These tools are planning aids, not official
          platform statements.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {guide.relatedLinks.map((link) => (
            <Link
              className="dashboard-card p-5 transition hover:border-brand-200 hover:shadow-lg"
              href={link.href}
              key={link.href}
            >
              <h3 className="font-semibold text-ink">{link.label}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {link.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </BlogArticle>
  );
}
