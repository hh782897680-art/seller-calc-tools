interface AdPlaceholderProps {
  className?: string;
}

export default function AdPlaceholder({ className = "" }: AdPlaceholderProps) {
  return (
    <div
      aria-label="Advertisement placeholder"
      className={`flex min-h-24 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 text-xs font-medium uppercase tracking-[0.2em] text-slate-400 ${className}`}
    >
      Advertisement
    </div>
  );
}
