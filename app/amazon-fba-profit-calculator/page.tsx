import type { Metadata } from "next";
import CalculatorPage from "@/components/CalculatorPage";
import AmazonFbaProfitCalculator from "@/components/calculators/AmazonFbaProfitCalculator";
import { getCalculator } from "@/data/calculators";
import { calculatorMetadata } from "@/lib/metadata";

export const metadata: Metadata = calculatorMetadata("amazon-fba-profit-calculator");

export default function AmazonFbaProfitCalculatorPage() {
  return (
    <CalculatorPage
      calculator={getCalculator("amazon-fba-profit-calculator")}
      form={<AmazonFbaProfitCalculator />}
    />
  );
}
