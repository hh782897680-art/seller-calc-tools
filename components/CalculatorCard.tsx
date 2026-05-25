import Link from "next/link";
import type { CalculatorData } from "@/data/calculators";

interface CalculatorCardProps {
  calculator: CalculatorData;
}

export default function CalculatorCard({ calculator }: CalculatorCardProps) {
  return (
    <Link
      href={`/${calculator.slug}`}
      className="surface-card group flex h-full flex-col p-6 transition duration-200 hover:-translate-y-1 hover:border-brand-100 hover:shadow-lg"
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
        {calculator.category}
      </p>
      <h3 className="mt-3 text-lg font-semibold text-ink group-hover:text-brand-600">
        {calculator.name}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
        {calculator.shortDescription}
      </p>
      <span className="mt-5 text-sm font-semibold text-brand-600">
        Use calculator <span aria-hidden="true">&rarr;</span>
      </span>
    </Link>
  );
}
