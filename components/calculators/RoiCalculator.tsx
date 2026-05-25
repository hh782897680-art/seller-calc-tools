"use client";

import InputField from "@/components/InputField";
import CalculatorWorkspace from "@/components/calculators/CalculatorWorkspace";
import { useCalculatorInputs } from "@/components/calculators/useCalculatorInputs";
import { calculateRoi } from "@/lib/calc";
import { formatCurrency, formatPercent } from "@/lib/format";

type Field = "investmentCost" | "returnAmount";

const defaults: Record<Field, string> = {
  investmentCost: "2500",
  returnAmount: "3400",
};

export default function RoiCalculator() {
  const { values, numbers, updateValue, resetValues } =
    useCalculatorInputs(defaults);
  const result = calculateRoi(numbers);
  const metrics = [
    { label: "Net return", value: formatCurrency(result.netReturn), highlight: true },
    { label: "ROI percentage", value: formatPercent(result.roiPercentage), highlight: true },
  ];

  return (
    <CalculatorWorkspace
      metrics={metrics}
      name="ROI Calculator Results"
      onReset={resetValues}
      warning={
        result.netReturn < 0
          ? "Your return is negative. The entered return has not recovered the investment cost."
          : undefined
      }
    >
      <InputField id="roi-investment" label="Investment cost" onChange={(value) => updateValue("investmentCost", value)} prefix="$" value={values.investmentCost} />
      <InputField id="roi-return" label="Return amount" onChange={(value) => updateValue("returnAmount", value)} prefix="$" value={values.returnAmount} />
    </CalculatorWorkspace>
  );
}
