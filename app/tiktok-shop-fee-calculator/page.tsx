import type { Metadata } from "next";
import CalculatorPage from "@/components/CalculatorPage";
import TikTokShopFeeCalculator from "@/components/calculators/TikTokShopFeeCalculator";
import { getCalculator } from "@/data/calculators";
import { calculatorMetadata } from "@/lib/metadata";

export const metadata: Metadata = calculatorMetadata("tiktok-shop-fee-calculator");

export default function TikTokShopFeeCalculatorPage() {
  return (
    <CalculatorPage
      calculator={getCalculator("tiktok-shop-fee-calculator")}
      form={<TikTokShopFeeCalculator />}
    />
  );
}
