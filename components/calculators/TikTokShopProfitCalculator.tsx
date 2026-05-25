"use client";

import InputField from "@/components/InputField";
import CalculatorWorkspace from "@/components/calculators/CalculatorWorkspace";
import { useCalculatorInputs } from "@/components/calculators/useCalculatorInputs";
import { calculateTikTokShopProfit } from "@/lib/calc";
import { formatCurrency, formatPercent } from "@/lib/format";

type Field =
  | "sellingPrice"
  | "productCost"
  | "shippingCost"
  | "tiktokFeePercentage"
  | "adCost"
  | "otherCost"
  | "unitsSold";

const defaults: Record<Field, string> = {
  sellingPrice: "32",
  productCost: "10",
  shippingCost: "4",
  tiktokFeePercentage: "6",
  adCost: "35",
  otherCost: "5",
  unitsSold: "10",
};

export default function TikTokShopProfitCalculator() {
  const { values, numbers, updateValue, resetValues } =
    useCalculatorInputs(defaults);
  const result = calculateTikTokShopProfit(numbers);
  const metrics = [
    { label: "Revenue", value: formatCurrency(result.revenue) },
    { label: "TikTok fees", value: formatCurrency(result.tiktokFees) },
    { label: "Total cost", value: formatCurrency(result.totalCost) },
    { label: "Net profit", value: formatCurrency(result.netProfit), highlight: true },
    { label: "Profit per unit", value: formatCurrency(result.profitPerUnit), highlight: true },
    { label: "Profit margin", value: formatPercent(result.profitMargin), highlight: true },
    { label: "ROI", value: formatPercent(result.roi), highlight: true },
  ];

  return (
    <CalculatorWorkspace
      metrics={metrics}
      name="TikTok Shop Profit Calculator Results"
      onReset={resetValues}
      warning={
        result.netProfit < 0
          ? "Your profit is negative. Review product cost, shipping, ad spend, or seller fees."
          : undefined
      }
    >
      <InputField id="tiktok-selling-price" label="Selling price" onChange={(value) => updateValue("sellingPrice", value)} prefix="$" value={values.sellingPrice} />
      <InputField id="tiktok-product-cost" label="Product cost" hint="Per unit" onChange={(value) => updateValue("productCost", value)} prefix="$" value={values.productCost} />
      <InputField id="tiktok-shipping-cost" label="Shipping cost" hint="Per unit" onChange={(value) => updateValue("shippingCost", value)} prefix="$" value={values.shippingCost} />
      <InputField id="tiktok-fee-percent" label="TikTok fee percentage" onChange={(value) => updateValue("tiktokFeePercentage", value)} suffix="%" value={values.tiktokFeePercentage} />
      <InputField id="tiktok-ad-cost" label="Ad cost" hint="Total for units sold" onChange={(value) => updateValue("adCost", value)} prefix="$" value={values.adCost} />
      <InputField id="tiktok-other-cost" label="Other cost" hint="Total for units sold" onChange={(value) => updateValue("otherCost", value)} prefix="$" value={values.otherCost} />
      <InputField id="tiktok-units" label="Units sold" onChange={(value) => updateValue("unitsSold", value)} step="1" value={values.unitsSold} />
    </CalculatorWorkspace>
  );
}
