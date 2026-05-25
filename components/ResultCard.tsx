export interface ResultMetric {
  label: string;
  value: string;
  highlight?: boolean;
}

interface ResultCardProps {
  title?: string;
  metrics: ResultMetric[];
  warning?: string;
}

export default function ResultCard({
  title = "Results",
  metrics,
  warning,
}: ResultCardProps) {
  return (
    <section className="surface-card p-6" aria-live="polite">
      <h2 className="text-xl font-semibold text-ink">{title}</h2>
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
                  ? "text-lg font-bold text-brand-700"
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
