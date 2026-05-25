"use client";

import { useState } from "react";

export function useCalculatorInputs<Key extends string>(
  defaults: Record<Key, string>,
) {
  const [values, setValues] = useState<Record<Key, string>>(defaults);

  function updateValue(key: Key, value: string) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function resetValues() {
    setValues(defaults);
  }

  const numbers = Object.fromEntries(
    Object.entries(values).map(([key, value]) => [
      key,
      Number.parseFloat(value as string) || 0,
    ]),
  ) as Record<Key, number>;

  return { values, numbers, updateValue, resetValues };
}
