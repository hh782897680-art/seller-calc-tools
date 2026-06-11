import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FeaturedGuidePage from "@/components/FeaturedGuidePage";
import { getProfitGuide, profitGuides } from "@/data/profit-guides";
import { featuredGuideMetadata } from "@/lib/featured-guide-metadata";

interface ProfitGuidePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return profitGuides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProfitGuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getProfitGuide(slug);

  if (!guide) {
    return {};
  }

  return featuredGuideMetadata(guide);
}

export default async function ProfitGuidePage({
  params,
}: ProfitGuidePageProps) {
  const { slug } = await params;
  const guide = getProfitGuide(slug);

  if (!guide) {
    notFound();
  }

  return <FeaturedGuidePage guide={guide} />;
}
