interface FormulaBoxProps {
  formulas: string[];
}

export default function FormulaBox({ formulas }: FormulaBoxProps) {
  return (
    <div className="rounded-lg border border-brand-100 bg-gradient-to-b from-brand-50 to-white p-5 shadow-sm sm:p-6">
      <p className="text-xs font-semibold uppercase text-brand-700">
        Calculator method
      </p>
      <h3 className="mt-2 text-lg font-semibold text-ink">Formula</h3>
      <ul className="mt-4 space-y-3 text-sm text-slate-700">
        {formulas.map((formula) => (
          <li
            className="rounded-lg border border-slate-200 bg-white px-4 py-3 font-mono text-[13px] shadow-sm"
            key={formula}
          >
            {formula}
          </li>
        ))}
      </ul>
    </div>
  );
}
