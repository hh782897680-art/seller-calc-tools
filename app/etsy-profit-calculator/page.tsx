import type { Metadata } from "next";
import CalculatorPage from "@/components/CalculatorPage";
import EtsyProfitCalculator from "@/components/calculators/EtsyProfitCalculator";
import { getCalculator } from "@/data/calculators";
import { calculatorMetadata } from "@/lib/metadata";

export const metadata: Metadata = calculatorMetadata("etsy-profit-calculator");

export default function EtsyProfitCalculatorPage() {
  return (
    <CalculatorPage
      calculator={getCalculator("etsy-profit-calculator")}
      form={<EtsyProfitCalculator />}
    />
  );
}
