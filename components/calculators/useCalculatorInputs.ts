"use client";

import { useState } from "react";

const numericInputPattern = /^[+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?$/i;

export function createEmptyInputValues<Key extends string>(
  sampleValues: Record<Key, string>,
) {
  return Object.fromEntries(
    Object.keys(sampleValues).map((key) => [key, ""]),
  ) as Record<Key, string>;
}

export function parseInputNumber(value: unknown): number {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : 0;
  }

  if (typeof value !== "string") {
    return 0;
  }

  const normalizedValue = value.trim();

  if (!numericInputPattern.test(normalizedValue)) {
    return 0;
  }

  const number = Number(normalizedValue);

  return Number.isFinite(number) ? number : 0;
}

export function parseInputNumbers<Key extends string>(
  values: Record<Key, unknown>,
) {
  return Object.fromEntries(
    Object.entries(values).map(([key, value]) => [
      key,
      parseInputNumber(value),
    ]),
  ) as Record<Key, number>;
}

export function updateInputValues<Key extends string>(
  values: Record<Key, string>,
  key: Key,
  value: string,
) {
  return { ...values, [key]: value };
}

export function useCalculatorInputs<Key extends string>(
  sampleValues: Record<Key, string>,
) {
  const [values, setValues] = useState<Record<Key, string>>(() =>
    createEmptyInputValues(sampleValues),
  );

  function updateValue(key: Key, value: string) {
    setValues((current) => updateInputValues(current, key, value));
  }

  function resetValues() {
    setValues(createEmptyInputValues(sampleValues));
  }

  const numbers = parseInputNumbers(values);

  return { values, numbers, updateValue, resetValues };
}
