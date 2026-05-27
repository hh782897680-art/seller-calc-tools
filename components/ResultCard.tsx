export interface ResultMetric {
  label: string;
  value: string;
  highlight?: boolean;
}

interface ResultCardProps {
  title?: string;
  metrics: ResultMetric[];
  warning?: string;
  tone?: "default" | "shopify";
  className?: string;
}

export default function ResultCard({
  title = "Results",
  metrics,
  warning,
  tone = "default",
  className,
}: ResultCardProps) {
  const isShopifyTone = tone === "shopify";

  return (
    <section
      className={`surface-card p-6 ${isShopifyTone ? "border-brand-100 bg-gradient-to-b from-white to-brand-50/40 shadow-lg shadow-brand-100/40" : ""} ${className ?? ""}`}
      aria-live="polite"
    >
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-xl font-semibold text-ink">{title}</h2>
        {isShopifyTone && (
          <span className="rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
            Live preview
          </span>
        )}
      </div>
      <dl className="mt-5 divide-y divide-slate-100">
        {metrics.map((metric) => (
          <div
            className={`flex items-center justify-between gap-4 py-3 ${
              metric.highlight ? "text-base" : "text-sm"
            }`}
            key={metric.label}
          >
            <dt className={metric.highlight ? "font-semibold text-ink" : "text-slate-600"}>
              {metric.label}
            </dt>
            <dd
              className={
                metric.highlight
                  ? isShopifyTone
                    ? "text-xl font-bold text-brand-700"
                    : "text-lg font-bold text-brand-700"
                  : "font-semibold text-slate-900"
              }
            >
              {metric.value}
            </dd>
          </div>
        ))}
      </dl>
      {warning && (
        <p className="mt-5 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          {warning}
        </p>
      )}
    </section>
  );
}
