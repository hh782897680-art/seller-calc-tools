import type { Metadata } from "next";
import CalculatorPage from "@/components/CalculatorPage";
import EbayPromotedListingFeeCalculator from "@/components/calculators/EbayPromotedListingFeeCalculator";
import { getCalculator } from "@/data/calculators";
import { calculatorMetadata } from "@/lib/metadata";

export const metadata: Metadata = calculatorMetadata(
  "ebay-promoted-listing-fee-calculator",
);

export default function EbayPromotedListingFeeCalculatorPage() {
  return (
    <CalculatorPage
      calculator={getCalculator("ebay-promoted-listing-fee-calculator")}
      form={<EbayPromotedListingFeeCalculator />}
    />
  );
}
