import type { Metadata } from "next";
import CalculatorPage from "@/components/CalculatorPage";
import BreakEvenCalculator from "@/components/calculators/BreakEvenCalculator";
import { getCalculator } from "@/data/calculators";
import { calculatorMetadata } from "@/lib/metadata";

export const metadata: Metadata = calculatorMetadata("break-even-calculator");

export default function BreakEvenCalculatorPage() {
  return (
    <CalculatorPage
      calculator={getCalculator("break-even-calculator")}
      form={<BreakEvenCalculator />}
    />
  );
}
