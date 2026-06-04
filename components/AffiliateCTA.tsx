import Link from "next/link";

interface AffiliateCTAProps {
  message: string;
}

export default function AffiliateCTA({ message }: AffiliateCTAProps) {
  return (
    <aside className="rounded-lg border border-brand-100 bg-gradient-to-r from-brand-50 via-white to-white p-5 shadow-card sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-6">
      <div>
        <p className="text-xs font-semibold uppercase text-brand-700">
          Related planning tools
        </p>
        <p className="mt-2 max-w-2xl font-semibold leading-7 text-ink">{message}</p>
      </div>
      <Link href="/free-ecommerce-calculators" className="primary-button mt-5 shrink-0 sm:mt-0">
        Explore tools
      </Link>
    </aside>
  );
}
