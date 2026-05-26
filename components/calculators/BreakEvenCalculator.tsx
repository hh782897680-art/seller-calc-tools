"use client";

import InputField from "@/components/InputField";
import CalculatorWorkspace from "@/components/calculators/CalculatorWorkspace";
import { useCalculatorInputs } from "@/components/calculators/useCalculatorInputs";
import { calculateBreakEven } from "@/lib/calc";
import { formatCurrency, formatNumber } from "@/lib/format";

type Field = "fixedCosts" | "pricePerUnit" | "variableCostPerUnit";

const sampleValues: Record<Field, string> = {
  fixedCosts: "4000",
  pricePerUnit: "50",
  variableCostPerUnit: "30",
};

export default function BreakEvenCalculator() {
  const { values, numbers, updateValue, resetValues } =
    useCalculatorInputs(sampleValues);
  const result = calculateBreakEven(numbers);
  const metrics = [
    {
      label: "Contribution margin per unit",
      value: formatCurrency(result.contributionMarginPerUnit),
      highlight: true,
    },
    {
      label: "Break-even units",
      value: formatNumber(result.breakEvenUnits),
      highlight: true,
    },
    {
      label: "Break-even revenue",
      value: formatCurrency(result.breakEvenRevenue),
      highlight: true,
    },
  ];

  return (
    <CalculatorWorkspace
      metrics={metrics}
      name="Break Even Calculator Results"
      onReset={resetValues}
      warning={
        result.contributionMarginPerUnit <= 0
          ? "There is no break-even volume while variable cost equals or exceeds price per unit."
          : undefined
      }
    >
      <InputField id="breakeven-fixed" label="Fixed costs" onChange={(value) => updateValue("fixedCosts", value)} prefix="$" placeholder={sampleValues.fixedCosts} value={values.fixedCosts} />
      <InputField id="breakeven-price" label="Price per unit" onChange={(value) => updateValue("pricePerUnit", value)} prefix="$" placeholder={sampleValues.pricePerUnit} value={values.pricePerUnit} />
      <InputField id="breakeven-variable" label="Variable cost per unit" onChange={(value) => updateValue("variableCostPerUnit", value)} prefix="$" placeholder={sampleValues.variableCostPerUnit} value={values.variableCostPerUnit} />
    </CalculatorWorkspace>
  );
}
