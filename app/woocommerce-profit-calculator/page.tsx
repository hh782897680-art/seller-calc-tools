import type { Metadata } from "next";
import CalculatorPage from "@/components/CalculatorPage";
import WooCommerceProfitCalculator from "@/components/calculators/WooCommerceProfitCalculator";
import { getCalculator } from "@/data/calculators";
import { calculatorMetadata } from "@/lib/metadata";

export const metadata: Metadata = calculatorMetadata("woocommerce-profit-calculator");

export default function WooCommerceProfitCalculatorPage() {
  return (
    <CalculatorPage
      calculator={getCalculator("woocommerce-profit-calculator")}
      form={<WooCommerceProfitCalculator />}
    />
  );
}
