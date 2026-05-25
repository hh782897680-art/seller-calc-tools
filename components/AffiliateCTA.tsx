import Link from "next/link";

interface AffiliateCTAProps {
  message: string;
}

export default function AffiliateCTA({ message }: AffiliateCTAProps) {
  return (
    <aside className="rounded-2xl border border-brand-100 bg-brand-50 p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
          Recommended tools
        </p>
        <p className="mt-2 font-semibold text-ink">{message}</p>
      </div>
      <Link href="#" className="primary-button mt-5 shrink-0 sm:mt-0">
        Explore tools
      </Link>
    </aside>
  );
}
