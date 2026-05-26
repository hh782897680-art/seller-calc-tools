"use client";

import { useState, type ReactNode } from "react";
import ResultCard, { type ResultMetric } from "@/components/ResultCard";
import { copyResults } from "@/lib/copy";

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
  const [copyMessage, setCopyMessage] = useState("");

  async function handleCopy() {
    try {
      await copyResults(name, metrics);
      setCopyMessage("Results copied.");
    } catch {
      setCopyMessage("Unable to copy results in this browser.");
    }
  }

  function handleReset() {
    onReset();
    setCopyMessage("");
  }

  return (
    <div className="grid items-start gap-6 lg:grid-cols-[1fr_0.9fr]">
      <form
        className="surface-card p-5 sm:p-7"
        onSubmit={(event) => event.preventDefault()}
      >
        <h2 className="text-xl font-semibold text-ink">Enter your numbers</h2>
        <p className="mt-2 text-sm text-slate-500">
          Use the sample numbers or enter your own. Empty inputs are treated as
          zero, and results update instantly.
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">{children}</div>
        <div className="mt-7 flex flex-wrap gap-3">
          <button className="primary-button" onClick={handleCopy} type="button">
            Copy Results
          </button>
          <button className="secondary-button" onClick={handleReset} type="button">
            Reset
          </button>
        </div>
        <p className="mt-3 min-h-5 text-sm text-brand-700" aria-live="polite">
          {copyMessage}
        </p>
      </form>
      <ResultCard metrics={metrics} warning={warning} />
    </div>
  );
}
