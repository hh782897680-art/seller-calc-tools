import type { Metadata } from "next";
import FeaturedGuidePage from "@/components/FeaturedGuidePage";
import { getFeaturedGuide } from "@/data/featured-guides";
import { featuredGuideMetadata } from "@/lib/featured-guide-metadata";

const guide = getFeaturedGuide("best-free-ecommerce-spreadsheets");

export const metadata: Metadata = featuredGuideMetadata(guide);

export default function BestFreeEcommerceSpreadsheetsArticle() {
  return <FeaturedGuidePage guide={guide} />;
}
