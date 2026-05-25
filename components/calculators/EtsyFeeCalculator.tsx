"use client";

import InputField from "@/components/InputField";
import CalculatorWorkspace from "@/components/calculators/CalculatorWorkspace";
import { useCalculatorInputs } from "@/components/calculators/useCalculatorInputs";
import { calculateEtsyFee } from "@/lib/calc";
import { formatCurrency, formatPercent } from "@/lib/format";

type Field =
  | "itemPrice"
  | "shippingCharged"
  | "itemCost"
  | "shippingCost"
  | "listingFee"
  | "transactionFeePercentage"
  | "processingPercentage"
  | "processingFixedFee"
  | "offsiteAdsFeePercentage";

const defaults: Record<Field, string> = {
  itemPrice: "40",
  shippingCharged: "5",
  itemCost: "12",
  shippingCost: "6",
  listingFee: "0.20",
  transactionFeePercentage: "6.5",
  processingPercentage: "3",
  processingFixedFee: "0.25",
  offsiteAdsFeePercentage: "0",
};

export default function EtsyFeeCalculator() {
  const { values, numbers, updateValue, resetValues } =
    useCalculatorInputs(defaults);
  const result = calculateEtsyFee(numbers);
  const metrics = [
    { label: "Total revenue", value: formatCurrency(result.totalRevenue) },
    { label: "Etsy transaction fee", value: formatCurrency(result.transactionFee) },
    { label: "Payment processing fee", value: formatCurrency(result.processingFee) },
    { label: "Offsite ads fee", value: formatCurrency(result.offsiteAdsFee) },
    { label: "Total fees", value: formatCurrency(result.totalFees) },
    { label: "Total cost", value: formatCurrency(result.totalCost) },
    { label: "Net profit", value: formatCurrency(result.netProfit), highlight: true },
    { label: "Profit margin", value: formatPercent(result.profitMargin), highlight: true },
  ];

  return (
    <CalculatorWorkspace
      metrics={metrics}
      name="Etsy Fee Calculator Results"
      onReset={resetValues}
      warning={
        result.netProfit < 0
          ? "Your profit is negative. Review your item cost, shipping, or marketplace fees."
          : undefined
      }
    >
      <InputField id="etsy-item-price" label="Item price" onChange={(value) => updateValue("itemPrice", value)} prefix="$" value={values.itemPrice} />
      <InputField id="etsy-shipping-charged" label="Shipping charged to buyer" onChange={(value) => updateValue("shippingCharged", value)} prefix="$" value={values.shippingCharged} />
      <InputField id="etsy-item-cost" label="Item cost" onChange={(value) => updateValue("itemCost", value)} prefix="$" value={values.itemCost} />
      <InputField id="etsy-shipping-cost" label="Shipping cost" onChange={(value) => updateValue("shippingCost", value)} prefix="$" value={values.shippingCost} />
      <InputField id="etsy-listing-fee" label="Etsy listing fee" onChange={(value) => updateValue("listingFee", value)} prefix="$" value={values.listingFee} />
      <InputField id="etsy-transaction-fee" label="Transaction fee percentage" onChange={(value) => updateValue("transactionFeePercentage", value)} suffix="%" value={values.transactionFeePercentage} />
      <InputField id="etsy-processing-percent" label="Payment processing percentage" onChange={(value) => updateValue("processingPercentage", value)} suffix="%" value={values.processingPercentage} />
      <InputField id="etsy-processing-fixed" label="Payment fixed fee" onChange={(value) => updateValue("processingFixedFee", value)} prefix="$" value={values.processingFixedFee} />
      <InputField id="etsy-offsite-ads" label="Offsite ads fee percentage (optional)" onChange={(value) => updateValue("offsiteAdsFeePercentage", value)} suffix="%" value={values.offsiteAdsFeePercentage} />
    </CalculatorWorkspace>
  );
}
