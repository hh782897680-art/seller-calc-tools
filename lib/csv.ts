export interface CsvField {
  label: string;
  value: string;
}

interface DownloadCalculatorResultsCsvOptions {
  calculatorName: string;
  generatedAt?: Date;
  inputs: CsvField[];
  results: CsvField[];
}

function escapeCsvValue(value: string): string {
  if (/[",\n\r]/.test(value)) {
    return `"${value.replace(/"/g, '""')}"`;
  }

  return value;
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-results$/, "") || "calculator";
}

function formatGeneratedDate(date: Date): string {
  return date.toISOString();
}

function buildCsvContent(
  calculatorName: string,
  generatedDate: string,
  inputs: CsvField[],
  results: CsvField[],
): string {
  const lines = [
    ["section", "label", "value"],
    ["metadata", "calculator name", calculatorName],
    ["metadata", "generated date", generatedDate],
    ...inputs.map((field) => ["input", field.label, field.value]),
    ...results.map((field) => ["result", field.label, field.value]),
  ];

  return lines
    .map((line) => line.map((item) => escapeCsvValue(item)).join(","))
    .join("\n");
}

function downloadTextFile(filename: string, content: string, mimeType: string) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

export function downloadCalculatorResultsCsv({
  calculatorName,
  generatedAt = new Date(),
  inputs,
  results,
}: DownloadCalculatorResultsCsvOptions) {
  const generatedDate = formatGeneratedDate(generatedAt);
  const csvContent = buildCsvContent(calculatorName, generatedDate, inputs, results);
  const filename = `${slugify(calculatorName)}-results.csv`;

  downloadTextFile(filename, csvContent, "text/csv;charset=utf-8;");
}
