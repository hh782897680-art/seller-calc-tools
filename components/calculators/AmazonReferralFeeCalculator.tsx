"use client";

import InputField from "@/components/InputField";
import CalculatorWorkspace from "@/components/calculators/CalculatorWorkspace";
import { useCalculatorInputs } from "@/components/calculators/useCalculatorInputs";
import { calculateAmazonReferralFee } from "@/lib/calc";
import { formatCurrency, formatPercent } from "@/lib/format";

type Field =
  | "sellingPrice"
  | "unitsSold"
  | "referralFeePercentage"
  | "minimumReferralFee";

const sampleValues: Record<Field, string> = {
  sellingPrice: "35",
  unitsSold: "20",
  referralFeePercentage: "15",
  minimumReferralFee: "0.30",
};

export default function AmazonReferralFeeCalculator() {
  const { values, numbers, updateValue, resetValues } =
    useCalculatorInputs(sampleValues);
  const result = calculateAmazonReferralFee(numbers);
  const metrics = [
    { label: "Total revenue", value: formatCurrency(result.totalRevenue) },
    {
      label: "Percentage fee per unit",
      value: formatCurrency(result.percentageFeePerUnit),
    },
    {
      label: "Applied fee per unit",
      value: formatCurrency(result.appliedFeePerUnit),
    },
    {
      label: "Total referral fees",
      value: formatCurrency(result.totalReferralFees),
      highlight: true,
    },
    {
      label: "Proceeds after referral fees",
      value: formatCurrency(result.proceedsAfterReferralFees),
    },
    {
      label: "Effective fee rate",
      value: formatPercent(result.effectiveFeeRate),
    },
  ];

  return (
    <CalculatorWorkspace
      metrics={metrics}
      name="Amazon Referral Fee Calculator Results"
      onReset={resetValues}
    >
      <InputField
        id="amazon-referral-price"
        label="Selling price"
        onChange={(value) => updateValue("sellingPrice", value)}
        prefix="$"
        placeholder={sampleValues.sellingPrice} value={values.sellingPrice}
      />
      <InputField
        id="amazon-referral-units"
        label="Units sold"
        onChange={(value) => updateValue("unitsSold", value)}
        step="1"
        placeholder={sampleValues.unitsSold} value={values.unitsSold}
      />
      <InputField
        id="amazon-referral-rate"
        label="Referral fee percentage"
        hint="Confirm the applicable product category"
        onChange={(value) => updateValue("referralFeePercentage", value)}
        suffix="%"
        placeholder={sampleValues.referralFeePercentage} value={values.referralFeePercentage}
      />
      <InputField
        id="amazon-referral-minimum"
        label="Minimum referral fee per unit"
        hint="Enter zero when no minimum applies"
        onChange={(value) => updateValue("minimumReferralFee", value)}
        prefix="$"
        placeholder={sampleValues.minimumReferralFee} value={values.minimumReferralFee}
      />
    </CalculatorWorkspace>
  );
}
