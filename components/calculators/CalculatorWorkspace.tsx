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
      className={`grid items-start gap-6 ${isShopifyTone ? "lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)]" : "lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]"}`}
    >
      <form
        ref={formRef}
        className={`dashboard-card relative overflow-hidden p-5 sm:p-7 ${isShopifyTone ? "border-brand-100 bg-gradient-to-b from-white to-brand-50/30 shadow-lg shadow-brand-100/30" : ""}`}
        onSubmit={(event) => event.preventDefault()}
      >
        <div className="relative flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase text-brand-700">
              Scenario inputs
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-ink">{formTitle}</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              {formDescription}
            </p>
          </div>
          <span className="soft-badge shrink-0">No signup</span>
        </div>
        <div className="mt-4 rounded-lg border border-brand-100 bg-brand-50/70 px-4 py-3 text-sm leading-6 text-slate-700">
          Tip: compare at least 2 pricing scenarios before publishing or scaling.
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">{children}</div>
        <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap sm:items-center">
          <button
            className="primary-button w-full sm:w-auto sm:min-w-[8.5rem]"
            onClick={handleCopy}
            type="button"
          >
            {copyFeedback === "success" ? "Copied!" : "Copy Results"}
          </button>
          <button
            className="secondary-button w-full sm:w-auto sm:min-w-[8.5rem]"
            onClick={handleCsvExport}
            type="button"
          >
            Export CSV
          </button>
          <button className="tertiary-button w-full sm:w-auto" onClick={handleReset} type="button">
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
      <div className="lg:sticky lg:top-24">
        <ResultCard metrics={metrics} tone={tone} warning={warning} />
      </div>
    </div>
  );
}
