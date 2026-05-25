"use client";

import InputField from "@/components/InputField";
import CalculatorWorkspace from "@/components/calculators/CalculatorWorkspace";
import { useCalculatorInputs } from "@/components/calculators/useCalculatorInputs";
import { calculateEbayFee } from "@/lib/calc";
import { formatCurrency, formatPercent } from "@/lib/format";

type Field =
  | "salePrice"
  | "shippingCharged"
  | "itemCost"
  | "shippingCost"
  | "finalValueFeePercentage"
  | "fixedOrderFee"
  | "promotedListingAdRate";

const defaults: Record<Field, string> = {
  salePrice: "60",
  shippingCharged: "8",
  itemCost: "24",
  shippingCost: "7",
  finalValueFeePercentage: "13.25",
  fixedOrderFee: "0.30",
  promotedListingAdRate: "0",
};

export default function EbayFeeCalculator() {
  const { values, numbers, updateValue, resetValues } =
    useCalculatorInputs(defaults);
  const result = calculateEbayFee(numbers);
  const metrics = [
    { label: "Total revenue", value: formatCurrency(result.totalRevenue) },
    { label: "eBay fee", value: formatCurrency(result.ebayFee) },
    { label: "Promoted listing fee", value: formatCurrency(result.promotedListingFee) },
    { label: "Total cost", value: formatCurrency(result.totalCost) },
    { label: "Net profit", value: formatCurrency(result.netProfit), highlight: true },
    { label: "Profit margin", value: formatPercent(result.profitMargin), highlight: true },
  ];

  return (
    <CalculatorWorkspace
      metrics={metrics}
      name="eBay Fee Calculator Results"
      onReset={resetValues}
      warning={
        result.netProfit < 0
          ? "Your profit is negative. Review your item cost, shipping, fees, or promoted listing rate."
          : undefined
      }
    >
      <InputField id="ebay-sale-price" label="Sale price" onChange={(value) => updateValue("salePrice", value)} prefix="$" value={values.salePrice} />
      <InputField id="ebay-shipping-charged" label="Shipping charged" onChange={(value) => updateValue("shippingCharged", value)} prefix="$" value={values.shippingCharged} />
      <InputField id="ebay-item-cost" label="Item cost" onChange={(value) => updateValue("itemCost", value)} prefix="$" value={values.itemCost} />
      <InputField id="ebay-shipping-cost" label="Shipping cost" onChange={(value) => updateValue("shippingCost", value)} prefix="$" value={values.shippingCost} />
      <InputField id="ebay-final-value-fee" label="Final value fee percentage" onChange={(value) => updateValue("finalValueFeePercentage", value)} suffix="%" value={values.finalValueFeePercentage} />
      <InputField id="ebay-fixed-fee" label="Fixed order fee" onChange={(value) => updateValue("fixedOrderFee", value)} prefix="$" value={values.fixedOrderFee} />
      <InputField id="ebay-promoted-rate" label="Promoted listing ad rate" onChange={(value) => updateValue("promotedListingAdRate", value)} suffix="%" value={values.promotedListingAdRate} />
    </CalculatorWorkspace>
  );
}
