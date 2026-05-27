import type { Metadata } from "next";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import type { FAQItem } from "@/data/calculators";

const pageUrl = "https://www.ecomprofittools.com/ai-tools-for-ecommerce-sellers";

export const metadata: Metadata = {
  title: "Best AI Tools for E-commerce Sellers | Ecom Profit Tools",
  description:
    "Explore AI tool categories for Shopify, Etsy, Amazon, and TikTok Shop sellers, including product copy, photos, SEO, ads, support, and email marketing.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Best AI Tools for E-commerce Sellers | Ecom Profit Tools",
    description:
      "Explore AI tool categories for Shopify, Etsy, Amazon, and TikTok Shop sellers, including product copy, photos, SEO, ads, support, and email marketing.",
    url: pageUrl,
    type: "article",
    siteName: "Ecom Profit Tools",
  },
};

const sellerPlatforms = [
  {
    name: "Shopify sellers",
    text: "Often need product-page copy, branded email campaigns, ad creative testing, and support workflows for a store they control.",
  },
  {
    name: "Etsy sellers",
    text: "May use AI to draft listing descriptions, organize attributes, improve photo presentation, and answer repeated buyer questions.",
  },
  {
    name: "Amazon sellers",
    text: "Frequently need structured listing drafts, image planning, advertising analysis, and careful review against marketplace policies.",
  },
  {
    name: "TikTok Shop sellers",
    text: "Can benefit from rapid content concepts, product visuals, promotional copy, and customer response drafts for fast-moving campaigns.",
  },
];

const toolCategories = [
  {
    title: "Product description tools",
    suitableFor:
      "Sellers launching new products, refreshing a large catalog, or adapting one product for Shopify, Etsy, Amazon, and TikTok Shop listing formats.",
    problem:
      "They help overcome blank-page writing, turn product attributes into structured benefit-led drafts, and produce channel-specific variations more quickly.",
    review:
      "Confirm every material, size, compatibility claim, shipping statement, and marketplace-restricted term before publishing.",
  },
  {
    title: "Product photo tools",
    suitableFor:
      "Small sellers without frequent studio shoots, merchants testing lifestyle concepts, and TikTok Shop sellers preparing visual content variations.",
    problem:
      "They can clean backgrounds, resize assets, suggest compositions, or create concept images that make a catalog easier to present consistently.",
    review:
      "A generated image must not misrepresent the actual item, included accessories, packaging, color, or product condition.",
  },
  {
    title: "SEO tools",
    suitableFor:
      "Shopify store owners building category pages, Etsy sellers organizing listings, and marketplace sellers researching how shoppers describe an item.",
    problem:
      "They can organize keyword ideas, suggest title structures, summarize search intent, and identify gaps in product or educational content.",
    review:
      "Use search suggestions as research inputs, not promises of ranking. Keep titles natural and accurate for the product being sold.",
  },
  {
    title: "Ads and campaign tools",
    suitableFor:
      "Sellers already running paid campaigns or preparing ad tests on direct stores, marketplaces, or social-commerce channels.",
    problem:
      "They can draft ad variations, group creative angles, summarize campaign exports, and help plan which messaging hypotheses to test.",
    review:
      "Ad output is useful only when spend is checked against margin and ROAS. Creative speed should not replace profitability review.",
  },
  {
    title: "Customer support tools",
    suitableFor:
      "Stores receiving repeated questions about delivery, sizing, product use, order status, returns, or marketplace policies.",
    problem:
      "They can prepare response drafts, turn approved policies into FAQ material, and reduce time spent composing routine messages.",
    review:
      "Keep human review for refunds, disputes, safety concerns, personal information, and any response that commits the business to an outcome.",
  },
  {
    title: "Email marketing tools",
    suitableFor:
      "Shopify and independent-store sellers with a permission-based subscriber list and a reason to communicate launches, replenishment, or offers.",
    problem:
      "They can draft subject lines, campaign outlines, product education sequences, and alternative messages for audience testing.",
    review:
      "Only contact opted-in recipients, comply with email rules, and assess whether discounts or paid acquisition still leave acceptable profit.",
  },
];

const faqs: FAQItem[] = [
  {
    question: "Does Ecom Profit Tools recommend specific paid AI software?",
    answer:
      "No. This guide explains useful categories and decision points for ecommerce sellers. It does not contain affiliate recommendations or require a paid tool.",
  },
  {
    question: "Which AI tool category should a new ecommerce seller try first?",
    answer:
      "Start with the bottleneck that consumes time but can be checked easily, such as drafting product descriptions or improving existing product images. Verify all output before publishing.",
  },
  {
    question: "Can AI tools replace a profit or fee calculation?",
    answer:
      "No. AI can help prepare content or marketing work, but sellers still need to enter realistic prices, fees, shipping, advertising spend, and other costs into a calculator before making decisions.",
  },
  {
    question: "Can I publish AI-generated listing copy or photos without reviewing them?",
    answer:
      "No. Check product accuracy, intellectual property considerations, marketplace policies, advertising claims, and customer expectations before using generated material.",
  },
];

function serializeJsonLd(schema: object): string {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}

export default function AiToolsForEcommerceSellersPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main>
      <script
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }}
        type="application/ld+json"
      />

      <section className="border-b border-slate-200 bg-white">
        <div className="page-container max-w-5xl py-14 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Ecommerce workflow guide
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Best AI Tools for E-commerce Sellers
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            AI tools can help online sellers prepare product content, marketing
            tests, and customer communications faster. They do not replace the
            core work of checking fees, margins, ad spend, and break-even sales
            before choosing a product or scaling a campaign.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link className="primary-button" href="/free-ecommerce-calculators">
              Use free calculators
            </Link>
            <Link className="secondary-button" href="#tool-categories">
              Browse AI categories
            </Link>
          </div>
        </div>
      </section>

      <section className="page-container max-w-5xl py-14 sm:py-16">
        <div className="max-w-3xl">
          <h2 className="section-heading">Where AI fits in seller workflows</h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            A seller can use AI for drafts, ideas, organization, and repeated
            operational tasks while retaining responsibility for product facts,
            platform compliance, customer promises, and financial decisions.
            Useful AI support depends on the channel and on the bottleneck the
            seller is trying to remove.
          </p>
        </div>
        <div className="mt-9 grid gap-5 sm:grid-cols-2">
          {sellerPlatforms.map((platform) => (
            <div className="surface-card p-6" key={platform.name}>
              <h3 className="text-lg font-semibold text-ink">{platform.name}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{platform.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="border-y border-slate-200 bg-white py-14 sm:py-16"
        id="tool-categories"
      >
        <div className="page-container max-w-5xl">
          <div className="max-w-3xl">
            <h2 className="section-heading">AI tool categories for ecommerce sellers</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              The right category is the one that addresses a measurable workflow
              problem. Review generated output carefully, then compare the time
              or marketing benefit with the cost of the tool and the economics of
              each sale.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {toolCategories.map((category) => (
              <section className="surface-card p-6 sm:p-7" key={category.title}>
                <h3 className="text-xl font-semibold text-ink">{category.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  <span className="font-semibold text-ink">Suitable for: </span>
                  {category.suitableFor}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  <span className="font-semibold text-ink">Problem solved: </span>
                  {category.problem}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  <span className="font-semibold text-ink">Review before use: </span>
                  {category.review}
                </p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="page-container max-w-5xl py-14 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <h2 className="section-heading">Choose tools by business outcome</h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">
              <p>
                A product description draft is valuable when it speeds a listing
                launch. A photo workflow is useful when it creates accurate,
                consistent product presentation. An advertising assistant matters
                only if the resulting tests produce sales at an affordable
                acquisition cost.
              </p>
              <p>
                Before paying for software or increasing marketing activity,
                estimate channel costs with a{" "}
                <Link className="font-semibold text-brand-600" href="/shopify-profit-calculator">
                  Shopify profit calculator
                </Link>
                , an{" "}
                <Link className="font-semibold text-brand-600" href="/etsy-profit-calculator">
                  Etsy profit calculator
                </Link>
                , or an{" "}
                <Link className="font-semibold text-brand-600" href="/amazon-fba-profit-calculator">
                  Amazon FBA profit calculator
                </Link>
                . Sellers evaluating paid creative or campaigns can also compare
                planned spend using the{" "}
                <Link className="font-semibold text-brand-600" href="/roas-calculator">
                  ROAS calculator
                </Link>
                .
              </p>
            </div>
          </div>
          <aside className="surface-card bg-brand-50 p-7">
            <h2 className="text-xl font-semibold text-ink">A practical review checklist</h2>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
              <li>Define the content or workflow problem before choosing a tool.</li>
              <li>Check generated facts, claims, images, and customer-facing promises.</li>
              <li>Review platform policies for each sales channel where content appears.</li>
              <li>Measure tool cost and ad spend against realistic profit assumptions.</li>
            </ul>
            <p className="mt-6 text-sm leading-7 text-slate-600">
              This guide is educational and does not include affiliate links or
              endorsements of specific AI products.
            </p>
          </aside>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-14 sm:py-16">
        <div className="page-container max-w-4xl">
          <h2 className="section-heading">Frequently asked questions</h2>
          <div className="mt-7">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>
    </main>
  );
}
