"use client";

import { useEffect, useRef, useState } from "react";

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

function parseStoredInputValues<Key extends string>(
  raw: string,
  sampleValues: Record<Key, string>,
): Record<Key, string> {
  const parsed = JSON.parse(raw) as unknown;
  const emptyValues = createEmptyInputValues(sampleValues);

  if (typeof parsed !== "object" || parsed === null) {
    return emptyValues;
  }

  const storedValues = parsed as Record<string, unknown>;

  return Object.fromEntries(
    Object.keys(emptyValues).map((key) => {
      const nextValue = storedValues[key];

      if (typeof nextValue === "string") {
        return [key, nextValue];
      }

      if (typeof nextValue === "number" && Number.isFinite(nextValue)) {
        return [key, String(nextValue)];
      }

      return [key, ""];
    }),
  ) as Record<Key, string>;
}

export function useCalculatorInputs<Key extends string>(
  sampleValues: Record<Key, string>,
  options?: {
    storageKey?: string;
  },
) {
  const storageKey = options?.storageKey;
  const [values, setValues] = useState<Record<Key, string>>(() =>
    createEmptyInputValues(sampleValues),
  );
  const hasInitializedPersistenceRef = useRef(false);

  useEffect(() => {
    hasInitializedPersistenceRef.current = false;

    if (!storageKey || typeof window === "undefined") {
      return;
    }

    try {
      const rawStoredValues = window.localStorage.getItem(storageKey);
      if (rawStoredValues) {
        const restoredValues = parseStoredInputValues(rawStoredValues, sampleValues);
        queueMicrotask(() => {
          setValues(restoredValues);
        });
      }
    } catch {
      // Ignore local storage errors and keep in-memory values.
    }
  }, [sampleValues, storageKey]);

  useEffect(() => {
    if (!storageKey || typeof window === "undefined") {
      return;
    }

    if (!hasInitializedPersistenceRef.current) {
      hasInitializedPersistenceRef.current = true;
      return;
    }

    try {
      const hasAnyInput = (Object.values(values) as string[]).some(
        (value) => value.trim() !== "",
      );

      if (!hasAnyInput) {
        window.localStorage.removeItem(storageKey);
        return;
      }

      window.localStorage.setItem(storageKey, JSON.stringify(values));
    } catch {
      // Ignore local storage errors and keep the UI functional.
    }
  }, [storageKey, values]);

  function updateValue(key: Key, value: string) {
    setValues((current) => updateInputValues(current, key, value));
  }

  function resetValues() {
    setValues(createEmptyInputValues(sampleValues));
  }

  function clearSavedValues() {
    if (storageKey && typeof window !== "undefined") {
      try {
        window.localStorage.removeItem(storageKey);
      } catch {
        // Ignore storage errors while clearing.
      }
    }
    resetValues();
  }

  const numbers = parseInputNumbers(values);

  return { values, numbers, updateValue, resetValues, clearSavedValues };
}
