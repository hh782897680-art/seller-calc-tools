import type { Metadata } from "next";
import CalculatorPage from "@/components/CalculatorPage";
import RoasCalculator from "@/components/calculators/RoasCalculator";
import { getCalculator } from "@/data/calculators";
import { calculatorMetadata } from "@/lib/metadata";

export const metadata: Metadata = calculatorMetadata("roas-calculator");

export default function RoasCalculatorPage() {
  return (
    <CalculatorPage
      calculator={getCalculator("roas-calculator")}
      form={<RoasCalculator />}
    />
  );
}
