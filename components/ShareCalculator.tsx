"use client";

import { useState, useSyncExternalStore } from "react";
import { copyText } from "@/lib/copy";

interface ShareCalculatorProps {
  fallbackUrl: string;
}

function subscribeToLocation() {
  return () => {};
}

export default function ShareCalculator({ fallbackUrl }: ShareCalculatorProps) {
  const pageUrl = useSyncExternalStore(
    subscribeToLocation,
    () => window.location.href,
    () => fallbackUrl,
  );
  const [copyMessage, setCopyMessage] = useState("");

  async function handleCopy() {
    try {
      await copyText(window.location.href);
      setCopyMessage("Link copied.");
    } catch {
      setCopyMessage("Unable to copy link in this browser.");
    }
  }

  return (
    <aside className="surface-card bg-brand-50 p-6 sm:p-7">
      <h2 className="text-xl font-semibold text-ink">Share this calculator</h2>
      <p className="mt-3 text-base leading-7 text-slate-600">
        Share this free calculator with another seller.
      </p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <p className="min-w-0 flex-1 break-all rounded-lg border border-brand-100 bg-white px-4 py-3 text-sm text-slate-600">
          {pageUrl}
        </p>
        <button className="secondary-button shrink-0" onClick={handleCopy} type="button">
          Copy link
        </button>
      </div>
      <p className="mt-3 min-h-5 text-sm text-brand-700" aria-live="polite">
        {copyMessage}
      </p>
    </aside>
  );
}
