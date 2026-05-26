export interface CopyResultLine {
  label: string;
  value: string;
}

export async function copyText(text: string): Promise<void> {
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // Fall through for browsers that deny access to the async Clipboard API.
    }
  }

  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.select();
  const copied = document.execCommand("copy");
  textArea.remove();

  if (!copied) {
    throw new Error("Clipboard access is not available in this browser.");
  }
}

export async function copyResults(
  title: string,
  lines: CopyResultLine[],
): Promise<void> {
  const text = [title, ...lines.map((line) => `${line.label}: ${line.value}`)].join(
    "\n",
  );

  await copyText(text);
}
