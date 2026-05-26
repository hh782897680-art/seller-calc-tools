"use client";

import InputField from "@/components/InputField";
import CalculatorWorkspace from "@/components/calculators/CalculatorWorkspace";
import { useCalculatorInputs } from "@/components/calculators/useCalculatorInputs";
import { calculateRoas } from "@/lib/calc";
import { formatCurrency, formatRatio } from "@/lib/format";

type Field = "adSpend" | "revenueFromAds";

const sampleValues: Record<Field, string> = {
  adSpend: "600",
  revenueFromAds: "2400",
};

export default function RoasCalculator() {
  const { values, numbers, updateValue, resetValues } =
    useCalculatorInputs(sampleValues);
  const result = calculateRoas(numbers);
  const metrics = [
    { label: "ROAS", value: formatRatio(result.roas), highlight: true },
    { label: "Revenue", value: formatCurrency(result.revenue) },
    { label: "Ad spend", value: formatCurrency(result.adSpend) },
    {
      label: "Profit before product cost",
      value: formatCurrency(result.profitBeforeProductCost),
      highlight: true,
    },
  ];

  return (
    <CalculatorWorkspace
      metrics={metrics}
      name="ROAS Calculator Results"
      onReset={resetValues}
      warning={
        result.profitBeforeProductCost < 0
          ? "Revenue is below ad spend. Review this campaign before including product and fulfillment costs."
          : undefined
      }
    >
      <InputField id="roas-spend" label="Ad spend" onChange={(value) => updateValue("adSpend", value)} prefix="$" placeholder={sampleValues.adSpend} value={values.adSpend} />
      <InputField id="roas-revenue" label="Revenue from ads" onChange={(value) => updateValue("revenueFromAds", value)} prefix="$" placeholder={sampleValues.revenueFromAds} value={values.revenueFromAds} />
    </CalculatorWorkspace>
  );
}
