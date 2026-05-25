import type { Metadata } from "next";
import CalculatorPage from "@/components/CalculatorPage";
import TikTokShopProfitCalculator from "@/components/calculators/TikTokShopProfitCalculator";
import { getCalculator } from "@/data/calculators";
import { calculatorMetadata } from "@/lib/metadata";

export const metadata: Metadata = calculatorMetadata("tiktok-shop-profit-calculator");

export default function TikTokShopProfitCalculatorPage() {
  return (
    <CalculatorPage
      calculator={getCalculator("tiktok-shop-profit-calculator")}
      form={<TikTokShopProfitCalculator />}
    />
  );
}
