import Link from "next/link";
import type { CalculatorData } from "@/data/calculators";

interface CalculatorCardProps {
  calculator: CalculatorData;
}

export default function CalculatorCard({ calculator }: CalculatorCardProps) {
  return (
    <Link
      href={`/${calculator.slug}`}
      className="dashboard-card group flex h-full flex-col p-5 transition duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl"
    >
      <div className="flex items-start justify-between gap-3">
        <p className="soft-badge bg-slate-50">{calculator.category}</p>
        <span
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-sm font-bold text-brand-700"
        >
          $
        </span>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-ink group-hover:text-brand-600">
        {calculator.name}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
        {calculator.shortDescription}
      </p>
      <span className="mt-5 inline-flex items-center text-sm font-semibold text-brand-700">
        Use calculator{" "}
        <span aria-hidden="true" className="ml-1 transition group-hover:translate-x-0.5">
          &rarr;
        </span>
      </span>
    </Link>
  );
}
