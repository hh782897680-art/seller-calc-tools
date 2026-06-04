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
  const primaryMetric =
    metrics.find((metric) => metric.highlight) ?? metrics[0];
  const highlightedMetrics = metrics.filter(
    (metric) => metric.highlight && metric.label !== primaryMetric?.label,
  );

  return (
    <section
      className={`dashboard-card overflow-hidden p-0 ${isShopifyTone ? "border-brand-100 shadow-lg shadow-brand-100/40" : ""} ${className ?? ""}`}
      aria-live="polite"
    >
      <div className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-50 px-5 py-4 sm:px-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase text-brand-700">
              Live calculation
            </p>
            <h2 className="mt-1 text-xl font-semibold text-ink">{title}</h2>
          </div>
          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            Instant
          </span>
        </div>
      </div>

      {primaryMetric && (
        <div className="px-5 py-5 sm:px-6">
          <dl className="rounded-lg border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-white p-5">
            <dt className="text-sm font-semibold text-slate-600">
              {primaryMetric.label}
            </dt>
            <dd className="mt-2 break-words text-4xl font-bold text-brand-700 sm:text-5xl">
              {primaryMetric.value}
            </dd>
          </dl>
        </div>
      )}

      {highlightedMetrics.length > 0 && (
        <dl className="grid gap-3 px-5 pb-5 sm:grid-cols-2 sm:px-6">
          {highlightedMetrics.map((metric) => (
            <div
              className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              key={`highlight-${metric.label}`}
            >
              <dt className="text-xs font-semibold uppercase text-slate-500">
                {metric.label}
              </dt>
              <dd className="mt-1 break-words text-xl font-bold text-ink">
                {metric.value}
              </dd>
            </div>
          ))}
        </dl>
      )}

      <dl className="border-t border-slate-200 px-5 py-3 sm:px-6">
        {metrics.map((metric) => (
          <div className="flex items-center justify-between gap-4 py-3 text-sm" key={metric.label}>
            <dt className={metric.highlight ? "font-semibold text-ink" : "text-slate-600"}>
              {metric.label}
            </dt>
            <dd className={metric.highlight ? "font-bold text-brand-700" : "font-semibold text-slate-900"}>
              {metric.value}
            </dd>
          </div>
        ))}
      </dl>
      {warning && (
        <p className="mx-5 mb-5 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-800 sm:mx-6">
          {warning}
        </p>
      )}
    </section>
  );
}
