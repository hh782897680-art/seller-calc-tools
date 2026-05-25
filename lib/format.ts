export type DisplayNumber = number | null;

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const numberFormatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function formatCurrency(value: DisplayNumber): string {
  return value === null || !Number.isFinite(value)
    ? "N/A"
    : currencyFormatter.format(value);
}

export function formatPercent(value: DisplayNumber): string {
  return value === null || !Number.isFinite(value)
    ? "N/A"
    : `${numberFormatter.format(value)}%`;
}

export function formatNumber(value: DisplayNumber): string {
  return value === null || !Number.isFinite(value)
    ? "N/A"
    : numberFormatter.format(value);
}

export function formatRatio(value: DisplayNumber): string {
  return value === null || !Number.isFinite(value)
    ? "N/A"
    : `${numberFormatter.format(value)}x`;
}
