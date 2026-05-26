import type { Metadata } from "next";
import CalculatorPage from "@/components/CalculatorPage";
import ShopifyFeeCalculator from "@/components/calculators/ShopifyFeeCalculator";
import { getCalculator } from "@/data/calculators";
import { calculatorMetadata } from "@/lib/metadata";

export const metadata: Metadata = calculatorMetadata("shopify-fee-calculator");

export default function ShopifyFeeCalculatorPage() {
  return (
    <CalculatorPage
      calculator={getCalculator("shopify-fee-calculator")}
      form={<ShopifyFeeCalculator />}
    />
  );
}
