import type { Metadata } from "next";
import CalculatorPage from "@/components/CalculatorPage";
import EtsyFeeCalculator from "@/components/calculators/EtsyFeeCalculator";
import { getCalculator } from "@/data/calculators";
import { calculatorMetadata } from "@/lib/metadata";

export const metadata: Metadata = calculatorMetadata("etsy-fee-calculator");

export default function EtsyFeeCalculatorPage() {
  return (
    <CalculatorPage
      calculator={getCalculator("etsy-fee-calculator")}
      form={<EtsyFeeCalculator />}
    />
  );
}
