"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import ResultCard, { type ResultMetric } from "@/components/ResultCard";
import { copyResults } from "@/lib/copy";

export const COPY_FEEDBACK_DURATION_MS = 2200;

type CopyFeedback = "success" | "error" | null;

interface CalculatorWorkspaceProps {
  name: string;
  children: ReactNode;
  metrics: ResultMetric[];
  warning?: string;
  onReset: () => void;
}

export default function CalculatorWorkspace({
  name,
  children,
  metrics,
  warning,
  onReset,
}: CalculatorWorkspaceProps) {
  const [copyFeedback, setCopyFeedback] = useState<CopyFeedback>(null);
  const copyAttemptRef = useRef(0);
  const feedbackTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (feedbackTimeoutRef.current !== null) {
        clearTimeout(feedbackTimeoutRef.current);
      }
    };
  }, []);

  function showCopyFeedback(feedback: Exclude<CopyFeedback, null>) {
    if (feedbackTimeoutRef.current !== null) {
      clearTimeout(feedbackTimeoutRef.current);
    }

    setCopyFeedback(feedback);
    feedbackTimeoutRef.current = setTimeout(() => {
      setCopyFeedback(null);
      feedbackTimeoutRef.current = null;
    }, COPY_FEEDBACK_DURATION_MS);
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

  function handleReset() {
    copyAttemptRef.current += 1;
    if (feedbackTimeoutRef.current !== null) {
      clearTimeout(feedbackTimeoutRef.current);
      feedbackTimeoutRef.current = null;
    }
    setCopyFeedback(null);
    onReset();
  }

  const copyMessage =
    copyFeedback === "success"
      ? "Results copied."
      : copyFeedback === "error"
        ? "Copy failed. Please try again."
        : "";

  return (
    <div className="grid items-start gap-6 lg:grid-cols-[1fr_0.9fr]">
      <form
        className="surface-card p-5 sm:p-7"
        onSubmit={(event) => event.preventDefault()}
      >
        <h2 className="text-xl font-semibold text-ink">Enter your numbers</h2>
        <p className="mt-2 text-sm text-slate-500">
          Enter your own numbers. Empty inputs are treated as zero. Gray
          placeholder values are examples only.
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">{children}</div>
        <div className="mt-7 flex flex-wrap gap-3">
          <button
            className="primary-button min-w-[8.5rem]"
            onClick={handleCopy}
            type="button"
          >
            {copyFeedback === "success" ? "Copied!" : "Copy Results"}
          </button>
          <button className="secondary-button" onClick={handleReset} type="button">
            Reset
          </button>
        </div>
        <p
          className={`mt-3 min-h-5 text-sm ${
            copyFeedback === "error" ? "text-red-700" : "text-brand-700"
          }`}
          aria-live="polite"
          role="status"
        >
          {copyMessage}
        </p>
      </form>
      <ResultCard metrics={metrics} warning={warning} />
    </div>
  );
}
