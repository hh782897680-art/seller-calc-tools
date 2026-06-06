import type { Metadata } from "next";
import FeaturedGuidePage from "@/components/FeaturedGuidePage";
import { getFeaturedGuide } from "@/data/featured-guides";
import { featuredGuideMetadata } from "@/lib/featured-guide-metadata";

const guide = getFeaturedGuide("shopify-vs-etsy-fees");

export const metadata: Metadata = featuredGuideMetadata(guide);

export default function ShopifyVsEtsyFeesArticle() {
  return <FeaturedGuidePage guide={guide} />;
}
