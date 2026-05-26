import type { Metadata } from "next";
import CalculatorPage from "@/components/CalculatorPage";
import AmazonReferralFeeCalculator from "@/components/calculators/AmazonReferralFeeCalculator";
import { getCalculator } from "@/data/calculators";
import { calculatorMetadata } from "@/lib/metadata";

export const metadata: Metadata = calculatorMetadata(
  "amazon-referral-fee-calculator",
);

export default function AmazonReferralFeeCalculatorPage() {
  return (
    <CalculatorPage
      calculator={getCalculator("amazon-referral-fee-calculator")}
      form={<AmazonReferralFeeCalculator />}
    />
  );
}
