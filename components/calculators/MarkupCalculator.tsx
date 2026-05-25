"use client";

import InputField from "@/components/InputField";
import CalculatorWorkspace from "@/components/calculators/CalculatorWorkspace";
import { useCalculatorInputs } from "@/components/calculators/useCalculatorInputs";
import { calculateMarkup } from "@/lib/calc";
import { formatCurrency, formatPercent } from "@/lib/format";

type Field = "cost" | "markupPercentage";

const defaults: Record<Field, string> = {
  cost: "28",
  markupPercentage: "75",
};

export default function MarkupCalculator() {
  const { values, numbers, updateValue, resetValues } =
    useCalculatorInputs(defaults);
  const result = calculateMarkup(numbers);
  const metrics = [
    { label: "Selling price", value: formatCurrency(result.sellingPrice), highlight: true },
    { label: "Profit", value: formatCurrency(result.profit), highlight: true },
    { label: "Profit margin", value: formatPercent(result.profitMargin), highlight: true },
  ];

  return (
    <CalculatorWorkspace
      metrics={metrics}
      name="Markup Calculator Results"
      onReset={resetValues}
      warning={
        result.profit < 0
          ? "Your profit is negative. Review cost and intended markup."
          : undefined
      }
    >
      <InputField id="markup-cost" label="Cost" onChange={(value) => updateValue("cost", value)} prefix="$" value={values.cost} />
      <InputField id="markup-percent" label="Markup percentage" onChange={(value) => updateValue("markupPercentage", value)} suffix="%" value={values.markupPercentage} />
    </CalculatorWorkspace>
  );
}
