"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import ResultCard, { type ResultMetric } from "@/components/ResultCard";
import { copyResults } from "@/lib/copy";
import {
  downloadCalculatorResultsCsv,
  type CsvField,
} from "@/lib/csv";

export const COPY_FEEDBACK_DURATION_MS = 2200;

type CopyFeedback = "success" | "error" | null;
type StatusFeedbackTone = "success" | "error";

interface StatusFeedback {
  message: string;
  tone: StatusFeedbackTone;
}

interface CalculatorWorkspaceProps {
  name: string;
  children: ReactNode;
  metrics: ResultMetric[];
  warning?: string;
  onReset: () => void;
  tone?: "default" | "shopify";
  formTitle?: string;
  formDescription?: string;
  onClearSavedInputs?: () => void;
  savedInputsNotice?: string;
}

export default function CalculatorWorkspace({
  name,
  children,
  metrics,
  warning,
  onReset,
  tone = "default",
  formTitle = "Enter your numbers",
  formDescription = "Enter your own numbers. Empty inputs are treated as zero. Gray placeholder values are examples only.",
  onClearSavedInputs,
  savedInputsNotice,
}: CalculatorWorkspaceProps) {
  const isShopifyTone = tone === "shopify";
  const [copyFeedback, setCopyFeedback] = useState<CopyFeedback>(null);
  const [statusFeedback, setStatusFeedback] = useState<StatusFeedback | null>(null);
  const copyAttemptRef = useRef(0);
  const feedbackTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    return () => {
      if (feedbackTimeoutRef.current !== null) {
        clearTimeout(feedbackTimeoutRef.current);
      }
    };
  }, []);

  function showStatusFeedback(
    message: string,
    tone: StatusFeedbackTone,
    options?: {
      clearCopyFeedback?: boolean;
    },
  ) {
    if (feedbackTimeoutRef.current !== null) {
      clearTimeout(feedbackTimeoutRef.current);
    }

    setStatusFeedback({ message, tone });
    feedbackTimeoutRef.current = setTimeout(() => {
      if (options?.clearCopyFeedback) {
        setCopyFeedback(null);
      }
      setStatusFeedback(null);
      feedbackTimeoutRef.current = null;
    }, COPY_FEEDBACK_DURATION_MS);
  }

  function showCopyFeedback(feedback: Exclude<CopyFeedback, null>) {
    setCopyFeedback(feedback);
    showStatusFeedback(
      feedback === "success" ? "Results copied." : "Copy failed. Please try again.",
      feedback === "success" ? "success" : "error",
      { clearCopyFeedback: true },
    );
  }

  function collectInputValues(): CsvField[] {
    if (!formRef.current) {
      return [];
    }

    const inputElements = Array.from(
      formRef.current.querySelectorAll<HTMLInputElement>("input"),
    );

    return inputElements.map((inputElement) => {
      const rawLabel = formRef.current?.querySelector<HTMLLabelElement>(
        `label[for="${inputElement.id}"]`,
      )?.textContent;
      const label = rawLabel?.trim() || inputElement.name || inputElement.id || "input";

      return {
        label,
        value: inputElement.value,
      };
    });
  }

  async function handleCopy() {
    const copyAttempt = ++copyAttemptRef.current;

    try {
      await copyResults(name, metrics);
      if (copyAttempt === copyAttemptRef.current) {
        showCopyFeedback("success");
      }
    } catch {
      if (copyAttempt === copyAttemptRef.current) {
        showCopyFeedback("error");
      }
    }
  }

  function handleCsvExport() {
    const inputValues = collectInputValues();
    const hasAnyInput = inputValues.some((item) => item.value.trim() !== "");

    if (!hasAnyInput) {
      showStatusFeedback("Complete the calculator first.", "error");
      return;
    }

    try {
      downloadCalculatorResultsCsv({
        calculatorName: name,
        inputs: inputValues,
        results: metrics,
      });
      showStatusFeedback("CSV downloaded.", "success");
    } catch {
      showStatusFeedback("CSV export failed. Please try again.", "error");
    }
  }

  function handleReset() {
    copyAttemptRef.current += 1;
    if (feedbackTimeoutRef.current !== null) {
      clearTimeout(feedbackTimeoutRef.current);
      feedbackTimeoutRef.current = null;
    }
    setCopyFeedback(null);
    setStatusFeedback(null);
    onReset();
  }

  return (
    <div
      className={`grid items-start gap-6 ${isShopifyTone ? "lg:grid-cols-[1.06fr_0.94fr]" : "lg:grid-cols-[1fr_0.9fr]"}`}
    >
      <form
        ref={formRef}
        className={`surface-card p-5 sm:p-7 ${isShopifyTone ? "relative overflow-hidden border-brand-100 bg-gradient-to-b from-white to-brand-50/30 shadow-lg shadow-brand-100/30" : ""}`}
        onSubmit={(event) => event.preventDefault()}
      >
        {isShopifyTone && (
          <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-brand-100/80 blur-3xl" aria-hidden="true" />
        )}
        <div className="relative">
          {isShopifyTone && (
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
              Scenario inputs
            </p>
          )}
          <h2 className="mt-2 text-xl font-semibold text-ink">{formTitle}</h2>
          <p className="mt-2 text-sm text-slate-500">
            {formDescription}
          </p>
        </div>
        {isShopifyTone && (
          <div className="mt-4 inline-flex rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-medium text-brand-700">
            Tip: compare at least 2 pricing scenarios before publishing.
          </div>
        )}
        <div className={`mt-6 grid gap-5 ${isShopifyTone ? "sm:grid-cols-2" : "sm:grid-cols-2"}`}>{children}</div>
        <div className={`mt-7 flex flex-wrap gap-3 ${isShopifyTone ? "sm:items-center" : ""}`}>
          <button
            className="primary-button min-w-[8.5rem]"
            onClick={handleCopy}
            type="button"
          >
            {copyFeedback === "success" ? "Copied!" : "Copy Results"}
          </button>
          <button
            className="secondary-button min-w-[8.5rem]"
            onClick={handleCsvExport}
            type="button"
          >
            Export CSV
          </button>
          <button className="secondary-button" onClick={handleReset} type="button">
            Reset
          </button>
        </div>
        {(savedInputsNotice || onClearSavedInputs) && (
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-500">
            {savedInputsNotice && <p>{savedInputsNotice}</p>}
            {onClearSavedInputs && (
              <button
                className="text-xs font-medium text-slate-600 underline underline-offset-2 hover:text-slate-800"
                onClick={onClearSavedInputs}
                type="button"
              >
                Clear saved inputs
              </button>
            )}
          </div>
        )}
        <p
          className={`mt-3 min-h-5 text-sm ${
            statusFeedback?.tone === "error" ? "text-red-700" : "text-brand-700"
          }`}
          aria-live="polite"
          role="status"
        >
          {statusFeedback?.message ?? ""}
        </p>
      </form>
      <ResultCard metrics={metrics} tone={tone} warning={warning} />
    </div>
  );
}
