import type { Metadata } from "next";
import CalculatorPage from "@/components/CalculatorPage";
import ShopifyProfitCalculator from "@/components/calculators/ShopifyProfitCalculator";
import { getCalculator } from "@/data/calculators";
import { calculatorMetadata } from "@/lib/metadata";

export const metadata: Metadata = calculatorMetadata("shopify-profit-calculator");

export default function ShopifyProfitCalculatorPage() {
  return (
    <CalculatorPage
      calculator={getCalculator("shopify-profit-calculator")}
      form={<ShopifyProfitCalculator />}
    />
  );
}
