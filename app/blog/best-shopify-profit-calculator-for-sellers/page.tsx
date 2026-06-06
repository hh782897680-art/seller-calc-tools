import type { Metadata } from "next";
import FeaturedGuidePage from "@/components/FeaturedGuidePage";
import { getFeaturedGuide } from "@/data/featured-guides";
import { featuredGuideMetadata } from "@/lib/featured-guide-metadata";

const guide = getFeaturedGuide("best-shopify-profit-calculator-for-sellers");

export const metadata: Metadata = featuredGuideMetadata(guide);

export default function BestShopifyProfitCalculatorArticle() {
  return <FeaturedGuidePage guide={guide} />;
}
