"use client";

import InputField from "@/components/InputField";
import CalculatorWorkspace from "@/components/calculators/CalculatorWorkspace";
import { useCalculatorInputs } from "@/components/calculators/useCalculatorInputs";
import { calculateWooCommerceProfit } from "@/lib/calc";
import { formatCurrency, formatPercent } from "@/lib/format";

type Field =
  | "sellingPrice"
  | "productCost"
  | "shippingCost"
  | "paymentFeePercentage"
  | "fixedTransactionFee"
  | "pluginOrHostingCost"
  | "adCost"
  | "unitsSold";

const defaults: Record<Field, string> = {
  sellingPrice: "50",
  productCost: "18",
  shippingCost: "5",
  paymentFeePercentage: "2.9",
  fixedTransactionFee: "0.30",
  pluginOrHostingCost: "20",
  adCost: "60",
  unitsSold: "10",
};

export default function WooCommerceProfitCalculator() {
  const { values, numbers, updateValue, resetValues } =
    useCalculatorInputs(defaults);
  const result = calculateWooCommerceProfit(numbers);
  const metrics = [
    { label: "Revenue", value: formatCurrency(result.revenue) },
    { label: "Payment fees", value: formatCurrency(result.paymentFees) },
    { label: "Total cost", value: formatCurrency(result.totalCost) },
    { label: "Net profit", value: formatCurrency(result.netProfit), highlight: true },
    { label: "Profit per unit", value: formatCurrency(result.profitPerUnit), highlight: true },
    { label: "Profit margin", value: formatPercent(result.profitMargin), highlight: true },
    { label: "ROI", value: formatPercent(result.roi), highlight: true },
  ];

  return (
    <CalculatorWorkspace
      metrics={metrics}
      name="WooCommerce Profit Calculator Results"
      onReset={resetValues}
      warning={
        result.netProfit < 0
          ? "Your profit is negative. Review product cost, processing, hosting, or ad spend."
          : undefined
      }
    >
      <InputField id="woocommerce-selling-price" label="Selling price" onChange={(value) => updateValue("sellingPrice", value)} prefix="$" value={values.sellingPrice} />
      <InputField id="woocommerce-product-cost" label="Product cost" hint="Per unit" onChange={(value) => updateValue("productCost", value)} prefix="$" value={values.productCost} />
      <InputField id="woocommerce-shipping-cost" label="Shipping cost" hint="Per unit" onChange={(value) => updateValue("shippingCost", value)} prefix="$" value={values.shippingCost} />
      <InputField id="woocommerce-payment-percent" label="Payment fee percentage" onChange={(value) => updateValue("paymentFeePercentage", value)} suffix="%" value={values.paymentFeePercentage} />
      <InputField id="woocommerce-fixed-fee" label="Fixed transaction fee" onChange={(value) => updateValue("fixedTransactionFee", value)} prefix="$" value={values.fixedTransactionFee} />
      <InputField id="woocommerce-hosting-cost" label="Plugin or hosting cost" hint="Total for units sold" onChange={(value) => updateValue("pluginOrHostingCost", value)} prefix="$" value={values.pluginOrHostingCost} />
      <InputField id="woocommerce-ad-cost" label="Ad cost" hint="Total for units sold" onChange={(value) => updateValue("adCost", value)} prefix="$" value={values.adCost} />
      <InputField id="woocommerce-units" label="Units sold" onChange={(value) => updateValue("unitsSold", value)} step="1" value={values.unitsSold} />
    </CalculatorWorkspace>
  );
}
