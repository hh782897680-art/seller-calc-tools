export interface CopyResultLine {
  label: string;
  value: string;
}

export async function copyResults(
  title: string,
  lines: CopyResultLine[],
): Promise<void> {
  const text = [title, ...lines.map((line) => `${line.label}: ${line.value}`)].join(
    "\n",
  );

  if (!navigator.clipboard) {
    throw new Error("Clipboard access is not available in this browser.");
  }

  await navigator.clipboard.writeText(text);
}
