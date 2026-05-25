interface FormulaBoxProps {
  formulas: string[];
}

export default function FormulaBox({ formulas }: FormulaBoxProps) {
  return (
    <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
      <h3 className="text-lg font-semibold text-ink">Formula</h3>
      <ul className="mt-4 space-y-3 text-sm text-slate-700">
        {formulas.map((formula) => (
          <li
            className="rounded-lg border border-brand-100 bg-white px-4 py-3 font-mono text-[13px]"
            key={formula}
          >
            {formula}
          </li>
        ))}
      </ul>
    </div>
  );
}
