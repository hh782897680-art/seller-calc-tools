import type { Metadata } from "next";
import CalculatorPage from "@/components/CalculatorPage";
import ProfitMarginCalculator from "@/components/calculators/ProfitMarginCalculator";
import { getCalculator } from "@/data/calculators";
import { calculatorMetadata } from "@/lib/metadata";

export const metadata: Metadata = calculatorMetadata("profit-margin-calculator");

export default function ProfitMarginCalculatorPage() {
  return (
    <CalculatorPage
      calculator={getCalculator("profit-margin-calculator")}
      form={<ProfitMarginCalculator />}
    />
  );
}
