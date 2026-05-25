"use client";

import InputField from "@/components/InputField";
import CalculatorWorkspace from "@/components/calculators/CalculatorWorkspace";
import { useCalculatorInputs } from "@/components/calculators/useCalculatorInputs";
import { calculateShopifyProfit } from "@/lib/calc";
import { formatCurrency, formatPercent, formatRatio } from "@/lib/format";

type Field =
  | "sellingPrice"
  | "productCost"
  | "shippingCost"
  | "adCost"
  | "otherCost"
  | "paymentFeePercentage"
  | "fixedTransactionFee"
  | "numberOfOrders";

const defaults: Record<Field, string> = {
  sellingPrice: "45",
  productCost: "16",
  shippingCost: "5",
  adCost: "8",
  otherCost: "1",
  paymentFeePercentage: "2.9",
  fixedTransactionFee: "0.30",
  numberOfOrders: "100",
};

export default function ShopifyProfitCalculator() {
  const { values, numbers, updateValue, resetValues } =
    useCalculatorInputs(defaults);
  const result = calculateShopifyProfit(numbers);
  const metrics = [
    { label: "Revenue", value: formatCurrency(result.revenue) },
    { label: "Total product cost", value: formatCurrency(result.totalProductCost) },
    { label: "Total shipping cost", value: formatCurrency(result.totalShippingCost) },
    { label: "Total ad cost", value: formatCurrency(result.totalAdCost) },
    { label: "Total fees", value: formatCurrency(result.totalFees) },
    { label: "Total cost", value: formatCurrency(result.totalCost) },
    { label: "Net profit", value: formatCurrency(result.netProfit), highlight: true },
    { label: "Profit margin", value: formatPercent(result.profitMargin), highlight: true },
    { label: "ROI", value: formatPercent(result.roi), highlight: true },
    { label: "Break-even ROAS", value: formatRatio(result.breakEvenRoas) },
  ];

  return (
    <CalculatorWorkspace
      metrics={metrics}
      name="Shopify Profit Calculator Results"
      onReset={resetValues}
      warning={
        result.netProfit < 0
          ? "Your profit is negative. Review your product cost, ad spend, or fees."
          : undefined
      }
    >
      <InputField id="shopify-selling-price" label="Selling price" onChange={(value) => updateValue("sellingPrice", value)} prefix="$" value={values.sellingPrice} />
      <InputField id="shopify-product-cost" label="Product cost" hint="Per order" onChange={(value) => updateValue("productCost", value)} prefix="$" value={values.productCost} />
      <InputField id="shopify-shipping-cost" label="Shipping cost" hint="Per order" onChange={(value) => updateValue("shippingCost", value)} prefix="$" value={values.shippingCost} />
      <InputField id="shopify-ad-cost" label="Ad cost" hint="Per order average" onChange={(value) => updateValue("adCost", value)} prefix="$" value={values.adCost} />
      <InputField id="shopify-other-cost" label="Other cost" hint="Per order" onChange={(value) => updateValue("otherCost", value)} prefix="$" value={values.otherCost} />
      <InputField id="shopify-payment-fee" label="Payment fee percentage" onChange={(value) => updateValue("paymentFeePercentage", value)} suffix="%" value={values.paymentFeePercentage} />
      <InputField id="shopify-fixed-fee" label="Fixed transaction fee" onChange={(value) => updateValue("fixedTransactionFee", value)} prefix="$" value={values.fixedTransactionFee} />
      <InputField id="shopify-orders" label="Number of orders" onChange={(value) => updateValue("numberOfOrders", value)} step="1" value={values.numberOfOrders} />
    </CalculatorWorkspace>
  );
}
