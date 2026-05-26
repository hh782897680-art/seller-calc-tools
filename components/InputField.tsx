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
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </label>
      <div className="relative">
        {prefix && (
          <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
            {prefix}
          </span>
        )}
        <input
          className={`w-full rounded-lg border border-slate-300 bg-white py-2.5 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100 ${
            prefix ? "pl-7" : "pl-3"
          } ${suffix ? "pr-10" : "pr-3"}`}
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
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500">
            {suffix}
          </span>
        )}
      </div>
      {hint && <p className="mt-1.5 text-xs text-slate-500">{hint}</p>}
    </div>
  );
}
