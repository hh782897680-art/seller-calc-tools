import type { Metadata } from "next";
import CalculatorPage from "@/components/CalculatorPage";
import MarkupCalculator from "@/components/calculators/MarkupCalculator";
import { getCalculator } from "@/data/calculators";
import { calculatorMetadata } from "@/lib/metadata";

export const metadata: Metadata = calculatorMetadata("markup-calculator");

export default function MarkupCalculatorPage() {
  return (
    <CalculatorPage
      calculator={getCalculator("markup-calculator")}
      form={<MarkupCalculator />}
    />
  );
}
