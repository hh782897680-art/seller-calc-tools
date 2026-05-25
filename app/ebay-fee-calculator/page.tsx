import type { Metadata } from "next";
import CalculatorPage from "@/components/CalculatorPage";
import EbayFeeCalculator from "@/components/calculators/EbayFeeCalculator";
import { getCalculator } from "@/data/calculators";
import { calculatorMetadata } from "@/lib/metadata";

export const metadata: Metadata = calculatorMetadata("ebay-fee-calculator");

export default function EbayFeeCalculatorPage() {
  return (
    <CalculatorPage
      calculator={getCalculator("ebay-fee-calculator")}
      form={<EbayFeeCalculator />}
    />
  );
}
