import type { Metadata } from "next";
import CalculatorPage from "@/components/CalculatorPage";
import PayPalFeeCalculator from "@/components/calculators/PayPalFeeCalculator";
import { getCalculator } from "@/data/calculators";
import { calculatorMetadata } from "@/lib/metadata";

export const metadata: Metadata = calculatorMetadata("paypal-fee-calculator");

export default function PayPalFeeCalculatorPage() {
  return (
    <CalculatorPage
      calculator={getCalculator("paypal-fee-calculator")}
      form={<PayPalFeeCalculator />}
    />
  );
}
