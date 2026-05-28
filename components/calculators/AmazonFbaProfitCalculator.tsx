"use client";

import InputField from "@/components/InputField";
import CalculatorWorkspace from "@/components/calculators/CalculatorWorkspace";
import { useCalculatorInputs } from "@/components/calculators/useCalculatorInputs";
import { calculateAmazonFbaProfit } from "@/lib/calc";
import { formatCurrency, formatPercent } from "@/lib/format";

type Field =
  | "sellingPrice"
  | "productCost"
  | "referralFeePercentage"
  | "fulfillmentFee"
  | "storageCost"
  | "shippingToAmazon"
  | "adCost"
  | "otherCost"
  | "unitsSold";

const sampleValues: Record<Field, string> = {
  sellingPrice: "34.99",
  productCost: "9",
  referralFeePercentage: "15",
  fulfillmentFee: "5",
  storageCost: "0.35",
  shippingToAmazon: "0.80",
  adCost: "4",
  otherCost: "0.30",
  unitsSold: "100",
};

export default function AmazonFbaProfitCalculator() {
  const { values, numbers, updateValue, resetValues, clearSavedValues } =
    useCalculatorInputs(sampleValues, {
      storageKey: "calculator-inputs:amazon-fba-profit-calculator",
    });
  const result = calculateAmazonFbaProfit(numbers);
  const metrics = [
    { label: "Revenue", value: formatCurrency(result.revenue) },
    { label: "Referral fees", value: formatCurrency(result.referralFees) },
    { label: "FBA fees", value: formatCurrency(result.fbaFees) },
    { label: "Total costs", value: formatCurrency(result.totalCosts) },
    { label: "Net profit", value: formatCurrency(result.netProfit), highlight: true },
    { label: "Profit per unit", value: formatCurrency(result.profitPerUnit), highlight: true },
    { label: "Profit margin", value: formatPercent(result.profitMargin), highlight: true },
    { label: "ROI", value: formatPercent(result.roi), highlight: true },
  ];

  return (
    <CalculatorWorkspace
      metrics={metrics}
      name="Amazon FBA Profit Calculator Results"
      onReset={resetValues}
      onClearSavedInputs={clearSavedValues}
      savedInputsNotice="Your inputs are saved locally in this browser only. They are not sent to a server."
      tone="shopify"
      formTitle="Amazon FBA unit economics"
      formDescription="Model your per-unit costs, Amazon fees, and ad spend assumptions. Results update instantly for scenario planning."
      warning={
        result.netProfit < 0
          ? "Your profit is negative. Review your product cost, FBA fees, or ad spend."
          : undefined
      }
    >
      <InputField id="amazon-selling-price" label="Selling price" onChange={(value) => updateValue("sellingPrice", value)} prefix="$" placeholder={sampleValues.sellingPrice} value={values.sellingPrice} />
      <InputField id="amazon-product-cost" label="Product cost" hint="Per unit" onChange={(value) => updateValue("productCost", value)} prefix="$" placeholder={sampleValues.productCost} value={values.productCost} />
      <InputField id="amazon-referral-fee" label="Referral fee percentage" onChange={(value) => updateValue("referralFeePercentage", value)} suffix="%" placeholder={sampleValues.referralFeePercentage} value={values.referralFeePercentage} />
      <InputField id="amazon-fulfillment-fee" label="FBA fulfillment fee" hint="Per unit" onChange={(value) => updateValue("fulfillmentFee", value)} prefix="$" placeholder={sampleValues.fulfillmentFee} value={values.fulfillmentFee} />
      <InputField id="amazon-storage-cost" label="Storage cost" hint="Per unit average" onChange={(value) => updateValue("storageCost", value)} prefix="$" placeholder={sampleValues.storageCost} value={values.storageCost} />
      <InputField id="amazon-shipping" label="Shipping to Amazon" hint="Per unit" onChange={(value) => updateValue("shippingToAmazon", value)} prefix="$" placeholder={sampleValues.shippingToAmazon} value={values.shippingToAmazon} />
      <InputField id="amazon-ad-cost" label="Ad cost" hint="Per unit average" onChange={(value) => updateValue("adCost", value)} prefix="$" placeholder={sampleValues.adCost} value={values.adCost} />
      <InputField id="amazon-other-cost" label="Other cost" hint="Per unit" onChange={(value) => updateValue("otherCost", value)} prefix="$" placeholder={sampleValues.otherCost} value={values.otherCost} />
      <InputField id="amazon-units" label="Units sold" onChange={(value) => updateValue("unitsSold", value)} step="1" placeholder={sampleValues.unitsSold} value={values.unitsSold} />
    </CalculatorWorkspace>
  );
}
