"use client";

import InputField from "@/components/InputField";
import CalculatorWorkspace from "@/components/calculators/CalculatorWorkspace";
import { useCalculatorInputs } from "@/components/calculators/useCalculatorInputs";
import { calculatePayPalFee } from "@/lib/calc";
import { formatCurrency, formatPercent } from "@/lib/format";

type Field = "amountReceived" | "feePercentage" | "fixedFee";

const sampleValues: Record<Field, string> = {
  amountReceived: "100",
  feePercentage: "3.49",
  fixedFee: "0.49",
};

export default function PayPalFeeCalculator() {
  const { values, numbers, updateValue, resetValues, clearSavedValues } =
    useCalculatorInputs(sampleValues, {
      storageKey: "calculator-inputs:paypal-fee-calculator",
    });
  const result = calculatePayPalFee(numbers);
  const metrics = [
    { label: "PayPal fee", value: formatCurrency(result.fee), highlight: true },
    { label: "Net amount", value: formatCurrency(result.netAmount), highlight: true },
    { label: "Fee rate", value: formatPercent(result.feeRate) },
  ];

  return (
    <CalculatorWorkspace
      metrics={metrics}
      name="PayPal Fee Calculator Results"
      onReset={resetValues}
      onClearSavedInputs={clearSavedValues}
      savedInputsNotice="Your inputs are saved locally in this browser only. They are not sent to a server."
      warning={
        result.netAmount < 0
          ? "The estimated fee exceeds the received amount. Review the transaction value and fee assumptions."
          : undefined
      }
    >
      <InputField id="paypal-amount" label="Amount received" onChange={(value) => updateValue("amountReceived", value)} prefix="$" placeholder={sampleValues.amountReceived} value={values.amountReceived} />
      <InputField id="paypal-percent" label="Fee percentage" onChange={(value) => updateValue("feePercentage", value)} suffix="%" placeholder={sampleValues.feePercentage} value={values.feePercentage} />
      <InputField id="paypal-fixed-fee" label="Fixed fee" onChange={(value) => updateValue("fixedFee", value)} prefix="$" placeholder={sampleValues.fixedFee} value={values.fixedFee} />
    </CalculatorWorkspace>
  );
}
