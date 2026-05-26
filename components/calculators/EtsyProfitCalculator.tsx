"use client";

import InputField from "@/components/InputField";
import CalculatorWorkspace from "@/components/calculators/CalculatorWorkspace";
import { useCalculatorInputs } from "@/components/calculators/useCalculatorInputs";
import { calculateEtsyProfit } from "@/lib/calc";
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
  | "offsiteAdsFeePercentage"
  | "orders";

const sampleValues: Record<Field, string> = {
  itemPrice: "40",
  shippingCharged: "5",
  itemCost: "12",
  shippingCost: "6",
  listingFee: "0.20",
  transactionFeePercentage: "6.5",
  processingPercentage: "3",
  processingFixedFee: "0.25",
  offsiteAdsFeePercentage: "0",
  orders: "10",
};

export default function EtsyProfitCalculator() {
  const { values, numbers, updateValue, resetValues } =
    useCalculatorInputs(sampleValues);
  const result = calculateEtsyProfit(numbers);
  const metrics = [
    { label: "Total revenue", value: formatCurrency(result.totalRevenue) },
    { label: "Listing fees", value: formatCurrency(result.listingFees) },
    { label: "Transaction fees", value: formatCurrency(result.transactionFees) },
    {
      label: "Payment processing fees",
      value: formatCurrency(result.paymentProcessingFees),
    },
    { label: "Offsite ads fees", value: formatCurrency(result.offsiteAdsFees) },
    { label: "Total fees", value: formatCurrency(result.totalFees) },
    { label: "Total cost", value: formatCurrency(result.totalCost) },
    {
      label: "Net profit",
      value: formatCurrency(result.netProfit),
      highlight: true,
    },
    {
      label: "Profit per order",
      value: formatCurrency(result.profitPerOrder),
    },
    {
      label: "Profit margin",
      value: formatPercent(result.profitMargin),
      highlight: true,
    },
  ];

  return (
    <CalculatorWorkspace
      metrics={metrics}
      name="Etsy Profit Calculator Results"
      onReset={resetValues}
      warning={
        result.netProfit < 0
          ? "Your modeled Etsy sales are unprofitable. Review pricing, fulfillment cost, and fee assumptions."
          : undefined
      }
    >
      <InputField
        id="etsy-profit-item-price"
        label="Item price"
        onChange={(value) => updateValue("itemPrice", value)}
        prefix="$"
        placeholder={sampleValues.itemPrice} value={values.itemPrice}
      />
      <InputField
        id="etsy-profit-shipping-charged"
        label="Shipping charged to buyer"
        onChange={(value) => updateValue("shippingCharged", value)}
        prefix="$"
        placeholder={sampleValues.shippingCharged} value={values.shippingCharged}
      />
      <InputField
        id="etsy-profit-item-cost"
        label="Item cost"
        hint="Per order"
        onChange={(value) => updateValue("itemCost", value)}
        prefix="$"
        placeholder={sampleValues.itemCost} value={values.itemCost}
      />
      <InputField
        id="etsy-profit-shipping-cost"
        label="Shipping cost"
        hint="Per order"
        onChange={(value) => updateValue("shippingCost", value)}
        prefix="$"
        placeholder={sampleValues.shippingCost} value={values.shippingCost}
      />
      <InputField
        id="etsy-profit-listing-fee"
        label="Listing fee"
        hint="Per order or renewal modeled"
        onChange={(value) => updateValue("listingFee", value)}
        prefix="$"
        placeholder={sampleValues.listingFee} value={values.listingFee}
      />
      <InputField
        id="etsy-profit-transaction-rate"
        label="Transaction fee percentage"
        onChange={(value) => updateValue("transactionFeePercentage", value)}
        suffix="%"
        placeholder={sampleValues.transactionFeePercentage} value={values.transactionFeePercentage}
      />
      <InputField
        id="etsy-profit-processing-rate"
        label="Payment processing percentage"
        onChange={(value) => updateValue("processingPercentage", value)}
        suffix="%"
        placeholder={sampleValues.processingPercentage} value={values.processingPercentage}
      />
      <InputField
        id="etsy-profit-processing-fixed"
        label="Payment fixed fee"
        onChange={(value) => updateValue("processingFixedFee", value)}
        prefix="$"
        placeholder={sampleValues.processingFixedFee} value={values.processingFixedFee}
      />
      <InputField
        id="etsy-profit-offsite-rate"
        label="Offsite ads percentage (optional)"
        onChange={(value) => updateValue("offsiteAdsFeePercentage", value)}
        suffix="%"
        placeholder={sampleValues.offsiteAdsFeePercentage} value={values.offsiteAdsFeePercentage}
      />
      <InputField
        id="etsy-profit-orders"
        label="Number of orders"
        onChange={(value) => updateValue("orders", value)}
        step="1"
        placeholder={sampleValues.orders} value={values.orders}
      />
    </CalculatorWorkspace>
  );
}
