"use client";

import InputField from "@/components/InputField";
import CalculatorWorkspace from "@/components/calculators/CalculatorWorkspace";
import { useCalculatorInputs } from "@/components/calculators/useCalculatorInputs";
import { calculateTikTokShopFee } from "@/lib/calc";
import { formatCurrency, formatPercent } from "@/lib/format";

type Field =
  | "grossSales"
  | "orders"
  | "platformFeePercentage"
  | "affiliateCommissionPercentage"
  | "fixedFeePerOrder";

const defaults: Record<Field, string> = {
  grossSales: "1500",
  orders: "40",
  platformFeePercentage: "6",
  affiliateCommissionPercentage: "0",
  fixedFeePerOrder: "0",
};

export default function TikTokShopFeeCalculator() {
  const { values, numbers, updateValue, resetValues } =
    useCalculatorInputs(defaults);
  const result = calculateTikTokShopFee(numbers);
  const metrics = [
    { label: "Gross sales", value: formatCurrency(result.grossSales) },
    { label: "Platform fee", value: formatCurrency(result.platformFee) },
    {
      label: "Affiliate commission",
      value: formatCurrency(result.affiliateCommission),
    },
    { label: "Fixed order fees", value: formatCurrency(result.fixedOrderFees) },
    {
      label: "Total estimated fees",
      value: formatCurrency(result.totalFees),
      highlight: true,
    },
    {
      label: "Proceeds after fees",
      value: formatCurrency(result.proceedsAfterFees),
    },
    { label: "Fee per order", value: formatCurrency(result.feePerOrder) },
    {
      label: "Effective fee rate",
      value: formatPercent(result.effectiveFeeRate),
    },
  ];

  return (
    <CalculatorWorkspace
      metrics={metrics}
      name="TikTok Shop Fee Calculator Results"
      onReset={resetValues}
    >
      <InputField
        id="tiktok-fee-sales"
        label="Gross sales"
        onChange={(value) => updateValue("grossSales", value)}
        prefix="$"
        value={values.grossSales}
      />
      <InputField
        id="tiktok-fee-orders"
        label="Number of orders"
        onChange={(value) => updateValue("orders", value)}
        step="1"
        value={values.orders}
      />
      <InputField
        id="tiktok-fee-platform-rate"
        label="Platform fee percentage"
        onChange={(value) => updateValue("platformFeePercentage", value)}
        suffix="%"
        value={values.platformFeePercentage}
      />
      <InputField
        id="tiktok-fee-affiliate-rate"
        label="Affiliate commission percentage"
        hint="Use zero when no affiliate commission applies"
        onChange={(value) => updateValue("affiliateCommissionPercentage", value)}
        suffix="%"
        value={values.affiliateCommissionPercentage}
      />
      <InputField
        id="tiktok-fee-fixed"
        label="Other fixed fee per order"
        hint="Optional fee assumption"
        onChange={(value) => updateValue("fixedFeePerOrder", value)}
        prefix="$"
        value={values.fixedFeePerOrder}
      />
    </CalculatorWorkspace>
  );
}
