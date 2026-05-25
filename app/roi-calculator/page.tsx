import type { Metadata } from "next";
import CalculatorPage from "@/components/CalculatorPage";
import RoiCalculator from "@/components/calculators/RoiCalculator";
import { getCalculator } from "@/data/calculators";
import { calculatorMetadata } from "@/lib/metadata";

export const metadata: Metadata = calculatorMetadata("roi-calculator");

export default function RoiCalculatorPage() {
  return (
    <CalculatorPage
      calculator={getCalculator("roi-calculator")}
      form={<RoiCalculator />}
    />
  );
}
