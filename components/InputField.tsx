interface InputFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  prefix?: string;
  suffix?: string;
  hint?: string;
  step?: string;
}

export default function InputField({
  id,
  label,
  value,
  onChange,
  placeholder,
  prefix,
  suffix,
  hint,
  step = "0.01",
}: InputFieldProps) {
  return (
    <div className="group">
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
      </label>
      <div className="relative rounded-lg border border-slate-200 bg-white shadow-sm transition group-hover:border-slate-300 group-focus-within:border-brand-500 group-focus-within:ring-4 group-focus-within:ring-brand-100/80">
        {prefix && (
          <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-sm font-semibold text-slate-500">
            {prefix}
          </span>
        )}
        <input
          className={`w-full rounded-lg border-0 bg-transparent py-3 text-sm font-semibold text-slate-950 placeholder:text-slate-400 outline-none ${
            prefix ? "pl-8" : "pl-3"
          } ${suffix ? "pr-11" : "pr-3"}`}
          id={id}
          inputMode="decimal"
          min="0"
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          step={step}
          type="number"
          value={value}
        />
        {suffix && (
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-sm font-semibold text-slate-500">
            {suffix}
          </span>
        )}
      </div>
      {hint && <p className="mt-1.5 text-xs leading-5 text-slate-500">{hint}</p>}
    </div>
  );
}
