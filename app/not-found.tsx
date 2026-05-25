import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-container flex min-h-[55vh] max-w-3xl flex-col items-center justify-center py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
        404
      </p>
      <h1 className="mt-4 text-4xl font-bold text-ink">Page not found</h1>
      <p className="mt-5 text-slate-600">
        The page you requested is unavailable. Browse the free calculators to
        continue planning your store.
      </p>
      <Link className="primary-button mt-8" href="/#calculators">
        View calculators
      </Link>
    </main>
  );
}
