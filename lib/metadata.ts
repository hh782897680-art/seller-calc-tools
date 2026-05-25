import type { Metadata } from "next";
import { getCalculator, type CalculatorSlug } from "@/data/calculators";

const siteUrl = "https://sellercalctools.com";

export function calculatorMetadata(slug: CalculatorSlug): Metadata {
  const calculator = getCalculator(slug);
  const url = `${siteUrl}/${calculator.slug}`;

  return {
    title: calculator.seoTitle,
    description: calculator.seoDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      siteName: "SellerCalcTools",
      title: calculator.seoTitle,
      description: calculator.seoDescription,
    },
  };
}
