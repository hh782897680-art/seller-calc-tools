"use client";

import InputField from "@/components/InputField";
import CalculatorWorkspace from "@/components/calculators/CalculatorWorkspace";
import { useCalculatorInputs } from "@/components/calculators/useCalculatorInputs";
import { calculateEbayPromotedListingFee } from "@/lib/calc";
import { formatCurrency, formatPercent } from "@/lib/format";

type Field =
  | "salePrice"
  | "shippingCharged"
  | "orders"
  | "promotedListingAdRate";

const sampleValues: Record<Field, string> = {
  salePrice: "60",
  shippingCharged: "8",
  orders: "10",
  promotedListingAdRate: "5",
};

export default function EbayPromotedListingFeeCalculator() {
  const { values, numbers, updateValue, resetValues } =
    useCalculatorInputs(sampleValues);
  const result = calculateEbayPromotedListingFee(numbers);
  const metrics = [
    { label: "Total sale amount", value: formatCurrency(result.totalRevenue) },
    {
      label: "Promoted listing fee",
      value: formatCurrency(result.promotedListingFee),
      highlight: true,
    },
    {
      label: "Proceeds after promoted fee",
      value: formatCurrency(result.proceedsAfterPromotedListingFee),
    },
    { label: "Fee per order", value: formatCurrency(result.feePerOrder) },
    {
      label: "Effective ad fee rate",
      value: formatPercent(result.effectiveFeeRate),
    },
  ];

  return (
    <CalculatorWorkspace
      metrics={metrics}
      name="eBay Promoted Listing Fee Calculator Results"
      onReset={resetValues}
    >
      <InputField
        id="ebay-promoted-price"
        label="Sale price"
        onChange={(value) => updateValue("salePrice", value)}
        prefix="$"
        placeholder={sampleValues.salePrice} value={values.salePrice}
      />
      <InputField
        id="ebay-promoted-shipping"
        label="Shipping charged to buyer"
        onChange={(value) => updateValue("shippingCharged", value)}
        prefix="$"
        placeholder={sampleValues.shippingCharged} value={values.shippingCharged}
      />
      <InputField
        id="ebay-promoted-orders"
        label="Attributed orders"
        onChange={(value) => updateValue("orders", value)}
        step="1"
        placeholder={sampleValues.orders} value={values.orders}
      />
      <InputField
        id="ebay-promoted-rate"
        label="Promoted listing ad rate"
        hint="Use the rate for the modeled campaign"
        onChange={(value) => updateValue("promotedListingAdRate", value)}
        suffix="%"
        placeholder={sampleValues.promotedListingAdRate} value={values.promotedListingAdRate}
      />
    </CalculatorWorkspace>
  );
}
