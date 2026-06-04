import type { FAQItem } from "@/data/calculators";

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details
          key={item.question}
          className="group rounded-lg border border-slate-200 bg-white px-5 py-4 shadow-sm transition hover:border-brand-100 hover:shadow-card open:border-brand-100 open:bg-brand-50/30"
        >
          <summary className="cursor-pointer list-none pr-7 font-semibold text-ink outline-none marker:hidden focus-visible:ring-2 focus-visible:ring-brand-500">
            <span>{item.question}</span>
            <span className="float-right text-brand-600 transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
