import type { Metadata } from "next";
import CalculatorPage from "@/components/CalculatorPage";
import StripeFeeCalculator from "@/components/calculators/StripeFeeCalculator";
import { getCalculator } from "@/data/calculators";
import { calculatorMetadata } from "@/lib/metadata";

export const metadata: Metadata = calculatorMetadata("stripe-fee-calculator");

export default function StripeFeeCalculatorPage() {
  return (
    <CalculatorPage
      calculator={getCalculator("stripe-fee-calculator")}
      form={<StripeFeeCalculator />}
    />
  );
}
