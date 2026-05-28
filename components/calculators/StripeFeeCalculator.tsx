"use client";

import InputField from "@/components/InputField";
import CalculatorWorkspace from "@/components/calculators/CalculatorWorkspace";
import { useCalculatorInputs } from "@/components/calculators/useCalculatorInputs";
import { calculateStripeFee } from "@/lib/calc";
import { formatCurrency, formatPercent } from "@/lib/format";

type Field = "amountReceived" | "feePercentage" | "fixedFee";

const sampleValues: Record<Field, string> = {
  amountReceived: "100",
  feePercentage: "2.9",
  fixedFee: "0.30",
};

export default function StripeFeeCalculator() {
  const { values, numbers, updateValue, resetValues, clearSavedValues } =
    useCalculatorInputs(sampleValues, {
      storageKey: "calculator-inputs:stripe-fee-calculator",
    });
  const result = calculateStripeFee(numbers);
  const metrics = [
    { label: "Stripe fee", value: formatCurrency(result.fee), highlight: true },
    { label: "Net amount", value: formatCurrency(result.netAmount), highlight: true },
    { label: "Fee rate", value: formatPercent(result.feeRate) },
  ];

  return (
    <CalculatorWorkspace
      metrics={metrics}
      name="Stripe Fee Calculator Results"
      onReset={resetValues}
      onClearSavedInputs={clearSavedValues}
      savedInputsNotice="Your inputs are saved locally in this browser only. They are not sent to a server."
      warning={
        result.netAmount < 0
          ? "The estimated fee exceeds the received amount. Review the transaction value and fee assumptions."
          : undefined
      }
    >
      <InputField id="stripe-amount" label="Amount received" onChange={(value) => updateValue("amountReceived", value)} prefix="$" placeholder={sampleValues.amountReceived} value={values.amountReceived} />
      <InputField id="stripe-percent" label="Fee percentage" onChange={(value) => updateValue("feePercentage", value)} suffix="%" placeholder={sampleValues.feePercentage} value={values.feePercentage} />
      <InputField id="stripe-fixed-fee" label="Fixed fee" onChange={(value) => updateValue("fixedFee", value)} prefix="$" placeholder={sampleValues.fixedFee} value={values.fixedFee} />
    </CalculatorWorkspace>
  );
}
