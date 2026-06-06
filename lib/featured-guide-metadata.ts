import type { Metadata } from "next";
import type { FeaturedGuide } from "@/data/featured-guides";

export function featuredGuideMetadata(guide: FeaturedGuide): Metadata {
  const url = `https://www.ecomprofittools.com/blog/${guide.slug}`;

  return {
    title: guide.seoTitle,
    description: guide.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      siteName: "Ecom Profit Tools",
      title: guide.seoTitle,
      description: guide.description,
    },
  };
}
