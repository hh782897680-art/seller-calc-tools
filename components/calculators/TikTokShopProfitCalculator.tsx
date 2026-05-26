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

const sampleValues: Record<Field, string> = {
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
    useCalculatorInputs(sampleValues);
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
      <InputField id="tiktok-selling-price" label="Selling price" onChange={(value) => updateValue("sellingPrice", value)} prefix="$" placeholder={sampleValues.sellingPrice} value={values.sellingPrice} />
      <InputField id="tiktok-product-cost" label="Product cost" hint="Per unit" onChange={(value) => updateValue("productCost", value)} prefix="$" placeholder={sampleValues.productCost} value={values.productCost} />
      <InputField id="tiktok-shipping-cost" label="Shipping cost" hint="Per unit" onChange={(value) => updateValue("shippingCost", value)} prefix="$" placeholder={sampleValues.shippingCost} value={values.shippingCost} />
      <InputField id="tiktok-fee-percent" label="TikTok fee percentage" onChange={(value) => updateValue("tiktokFeePercentage", value)} suffix="%" placeholder={sampleValues.tiktokFeePercentage} value={values.tiktokFeePercentage} />
      <InputField id="tiktok-ad-cost" label="Ad cost" hint="Total for units sold" onChange={(value) => updateValue("adCost", value)} prefix="$" placeholder={sampleValues.adCost} value={values.adCost} />
      <InputField id="tiktok-other-cost" label="Other cost" hint="Total for units sold" onChange={(value) => updateValue("otherCost", value)} prefix="$" placeholder={sampleValues.otherCost} value={values.otherCost} />
      <InputField id="tiktok-units" label="Units sold" onChange={(value) => updateValue("unitsSold", value)} step="1" placeholder={sampleValues.unitsSold} value={values.unitsSold} />
    </CalculatorWorkspace>
  );
}
