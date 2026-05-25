"use client";

import InputField from "@/components/InputField";
import CalculatorWorkspace from "@/components/calculators/CalculatorWorkspace";
import { useCalculatorInputs } from "@/components/calculators/useCalculatorInputs";
import { calculateProfitMargin } from "@/lib/calc";
import { formatCurrency, formatPercent } from "@/lib/format";

type Field = "revenue" | "cost";

const defaults: Record<Field, string> = {
  revenue: "125",
  cost: "80",
};

export default function ProfitMarginCalculator() {
  const { values, numbers, updateValue, resetValues } =
    useCalculatorInputs(defaults);
  const result = calculateProfitMargin(numbers);
  const metrics = [
    { label: "Gross profit", value: formatCurrency(result.grossProfit), highlight: true },
    { label: "Profit margin", value: formatPercent(result.profitMargin), highlight: true },
    { label: "Markup", value: formatPercent(result.markup) },
  ];

  return (
    <CalculatorWorkspace
      metrics={metrics}
      name="Profit Margin Calculator Results"
      onReset={resetValues}
      warning={
        result.grossProfit < 0
          ? "Your profit is negative. Costs exceed revenue for this calculation."
          : undefined
      }
    >
      <InputField id="margin-revenue" label="Revenue" onChange={(value) => updateValue("revenue", value)} prefix="$" value={values.revenue} />
      <InputField id="margin-cost" label="Cost" onChange={(value) => updateValue("cost", value)} prefix="$" value={values.cost} />
    </CalculatorWorkspace>
  );
}
