"use client";

import InputField from "@/components/InputField";
import CalculatorWorkspace from "@/components/calculators/CalculatorWorkspace";
import { useCalculatorInputs } from "@/components/calculators/useCalculatorInputs";
import { calculateShopifyFee } from "@/lib/calc";
import { formatCurrency, formatPercent } from "@/lib/format";

type Field =
  | "totalSales"
  | "numberOfOrders"
  | "paymentFeePercentage"
  | "fixedTransactionFee"
  | "thirdPartyTransactionFeePercentage";

const defaults: Record<Field, string> = {
  totalSales: "2500",
  numberOfOrders: "50",
  paymentFeePercentage: "2.9",
  fixedTransactionFee: "0.30",
  thirdPartyTransactionFeePercentage: "0",
};

export default function ShopifyFeeCalculator() {
  const { values, numbers, updateValue, resetValues } =
    useCalculatorInputs(defaults);
  const result = calculateShopifyFee(numbers);
  const metrics = [
    { label: "Total sales", value: formatCurrency(result.totalSales) },
    {
      label: "Payment processing fee",
      value: formatCurrency(result.paymentProcessingFee),
    },
    {
      label: "Additional transaction fee",
      value: formatCurrency(result.thirdPartyTransactionFee),
    },
    { label: "Total estimated fees", value: formatCurrency(result.totalFees) },
    {
      label: "Estimated payout",
      value: formatCurrency(result.estimatedPayout),
      highlight: true,
    },
    { label: "Fee per order", value: formatCurrency(result.feePerOrder) },
    {
      label: "Effective fee rate",
      value: formatPercent(result.effectiveFeeRate),
      highlight: true,
    },
  ];

  return (
    <CalculatorWorkspace
      metrics={metrics}
      name="Shopify Fee Calculator Results"
      onReset={resetValues}
    >
      <InputField
        id="shopify-fee-sales"
        label="Total sales"
        onChange={(value) => updateValue("totalSales", value)}
        prefix="$"
        value={values.totalSales}
      />
      <InputField
        id="shopify-fee-orders"
        label="Number of orders"
        onChange={(value) => updateValue("numberOfOrders", value)}
        step="1"
        value={values.numberOfOrders}
      />
      <InputField
        id="shopify-fee-payment-rate"
        label="Payment processing percentage"
        onChange={(value) => updateValue("paymentFeePercentage", value)}
        suffix="%"
        value={values.paymentFeePercentage}
      />
      <InputField
        id="shopify-fee-fixed"
        label="Fixed transaction fee"
        onChange={(value) => updateValue("fixedTransactionFee", value)}
        prefix="$"
        value={values.fixedTransactionFee}
      />
      <InputField
        id="shopify-fee-additional-rate"
        label="Additional transaction fee percentage"
        hint="Enter only when applicable to your payment setup"
        onChange={(value) =>
          updateValue("thirdPartyTransactionFeePercentage", value)
        }
        suffix="%"
        value={values.thirdPartyTransactionFeePercentage}
      />
    </CalculatorWorkspace>
  );
}
