/**
 * @vitest-environment jsdom
 */

import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import InputField from "../InputField";
import { copyResults } from "@/lib/copy";
import { downloadCalculatorResultsCsv } from "@/lib/csv";
import { calculateProfitMargin } from "../../lib/calc";
import { formatCurrency, formatPercent } from "../../lib/format";
import CalculatorWorkspace, { COPY_FEEDBACK_DURATION_MS } from "./CalculatorWorkspace";
import {
  parseInputNumber,
  parseInputNumbers,
  useCalculatorInputs,
} from "./useCalculatorInputs";

vi.mock("@/lib/copy", () => ({
  copyResults: vi.fn(),
}));
vi.mock("@/lib/csv", () => ({
  downloadCalculatorResultsCsv: vi.fn(),
}));

type Field = "revenue" | "cost";

const sampleValues: Record<Field, string> = {
  revenue: "250",
  cost: "150",
};

const mockedCopyResults = vi.mocked(copyResults);
const mockedDownloadCalculatorResultsCsv = vi.mocked(downloadCalculatorResultsCsv);
const localStorageStore = new Map<string, string>();

function createLocalStorageMock() {
  return {
    getItem: vi.fn((key: string) => localStorageStore.get(key) ?? null),
    setItem: vi.fn((key: string, value: string) => {
      localStorageStore.set(key, value);
    }),
    removeItem: vi.fn((key: string) => {
      localStorageStore.delete(key);
    }),
    clear: vi.fn(() => {
      localStorageStore.clear();
    }),
  };
}

beforeEach(() => {
  localStorageStore.clear();
  Object.defineProperty(window, "localStorage", {
    value: createLocalStorageMock(),
    configurable: true,
  });
});

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
  vi.useRealTimers();
  localStorageStore.clear();
});

function MarginInputHarness({
  storageKey,
}: {
  storageKey?: string;
} = {}) {
  const { values, numbers, updateValue, resetValues, clearSavedValues } =
    useCalculatorInputs(
      sampleValues,
      storageKey ? { storageKey } : undefined,
    );
  const result = calculateProfitMargin(numbers);

  return (
    <CalculatorWorkspace
      metrics={[
        { label: "Gross profit", value: formatCurrency(result.grossProfit) },
        { label: "Profit margin", value: formatPercent(result.profitMargin) },
      ]}
      name="Profit Margin Calculator Results"
      onReset={resetValues}
      onClearSavedInputs={storageKey ? clearSavedValues : undefined}
      savedInputsNotice={
        storageKey
          ? "Your inputs are saved locally in this browser only. They are not sent to a server."
          : undefined
      }
    >
      <InputField
        id="revenue"
        label="Revenue"
        onChange={(value) => updateValue("revenue", value)}
        placeholder={sampleValues.revenue}
        value={values.revenue}
      />
      <InputField
        id="cost"
        label="Cost"
        onChange={(value) => updateValue("cost", value)}
        placeholder={sampleValues.cost}
        value={values.cost}
      />
    </CalculatorWorkspace>
  );
}

function input(label: string) {
  return screen.getByLabelText(label) as HTMLInputElement;
}

function resultValue(label: string) {
  const labelElement = screen.getByText(label);

  return labelElement.parentElement?.querySelector("dd")?.textContent;
}

describe("calculator inputs", () => {
  it("starts empty, shows gray sample placeholders, and always displays zero-based results", () => {
    render(<MarginInputHarness />);

    expect(screen.getByRole("heading", { name: "Results" })).toBeTruthy();
    expect(input("Revenue").value).toBe("");
    expect(input("Revenue").placeholder).toBe("250");
    expect(input("Revenue").className).toContain("placeholder:text-slate-400");
    expect(input("Cost").value).toBe("");
    expect(input("Cost").placeholder).toBe("150");
    expect(resultValue("Gross profit")).toBe("$0.00");
    expect(resultValue("Profit margin")).toBe("N/A");
  });

  it("updates results with partial inputs and recalculates a cleared field as zero", () => {
    render(<MarginInputHarness />);

    fireEvent.change(input("Revenue"), { target: { value: "250" } });
    expect(resultValue("Gross profit")).toBe("$250.00");
    expect(resultValue("Profit margin")).toBe("100.00%");

    fireEvent.change(input("Cost"), { target: { value: "150" } });
    expect(resultValue("Gross profit")).toBe("$100.00");
    expect(resultValue("Profit margin")).toBe("40.00%");

    fireEvent.change(input("Cost"), { target: { value: "" } });
    expect(resultValue("Gross profit")).toBe("$250.00");
    expect(resultValue("Profit margin")).toBe("100.00%");
    expect(screen.getByRole("heading", { name: "Results" })).toBeTruthy();
  });

  it("preserves an explicitly entered zero and computes it as zero", () => {
    render(<MarginInputHarness />);

    fireEvent.change(input("Cost"), { target: { value: "150" } });
    fireEvent.change(input("Revenue"), { target: { value: "0" } });
    expect(input("Revenue").value).toBe("0");
    expect(resultValue("Gross profit")).toBe("-$150.00");
    expect(resultValue("Profit margin")).toBe("N/A");
  });

  it("clears entered values and reveals the sample placeholders on reset", () => {
    render(<MarginInputHarness />);

    fireEvent.change(input("Revenue"), { target: { value: "300" } });
    fireEvent.change(input("Cost"), { target: { value: "125" } });
    fireEvent.click(screen.getByRole("button", { name: "Reset" }));

    expect(input("Revenue").value).toBe("");
    expect(input("Revenue").placeholder).toBe("250");
    expect(input("Cost").value).toBe("");
    expect(input("Cost").placeholder).toBe("150");
    expect(resultValue("Gross profit")).toBe("$0.00");
  });

  it("restores saved values from local storage for the same calculator key", async () => {
    render(<MarginInputHarness storageKey="calculator-inputs:profit-margin-calculator" />);

    fireEvent.change(input("Revenue"), { target: { value: "300" } });
    fireEvent.change(input("Cost"), { target: { value: "125" } });

    expect(
      window.localStorage.getItem("calculator-inputs:profit-margin-calculator"),
    ).toBe(JSON.stringify({ revenue: "300", cost: "125" }));

    cleanup();

    render(<MarginInputHarness storageKey="calculator-inputs:profit-margin-calculator" />);

    await act(async () => {
      await Promise.resolve();
    });

    expect(input("Revenue").value).toBe("300");
    expect(input("Cost").value).toBe("125");
  });

  it("clears saved local inputs with the clear saved inputs button", () => {
    render(<MarginInputHarness storageKey="calculator-inputs:profit-margin-calculator" />);

    fireEvent.change(input("Revenue"), { target: { value: "300" } });
    fireEvent.change(input("Cost"), { target: { value: "125" } });

    fireEvent.click(screen.getByRole("button", { name: "Clear saved inputs" }));

    expect(input("Revenue").value).toBe("");
    expect(input("Cost").value).toBe("");
    expect(
      window.localStorage.getItem("calculator-inputs:profit-margin-calculator"),
    ).toBeNull();
  });

  it("turns absent, malformed, and non-finite inputs into finite zero values", () => {
    expect(parseInputNumber("")).toBe(0);
    expect(parseInputNumber(null)).toBe(0);
    expect(parseInputNumber(undefined)).toBe(0);
    expect(parseInputNumber("not-a-number")).toBe(0);
    expect(parseInputNumber("42not-a-number")).toBe(0);
    expect(parseInputNumber("Infinity")).toBe(0);
    expect(parseInputNumber(Number.POSITIVE_INFINITY)).toBe(0);
    expect(parseInputNumber("0")).toBe(0);
    expect(parseInputNumber("42.50")).toBe(42.5);
  });

  it("converts absent input values to zero before calling calculation logic", () => {
    const result = calculateProfitMargin(
      parseInputNumbers<Field>({ revenue: undefined, cost: null }),
    );

    expect(result).toEqual({
      grossProfit: 0,
      profitMargin: null,
      markup: null,
    });
  });

  it("never exposes invalid result text for partial or cleared inputs", () => {
    render(<MarginInputHarness />);

    fireEvent.change(input("Cost"), { target: { value: "150" } });
    fireEvent.change(input("Cost"), { target: { value: "" } });

    expect(document.body.textContent).not.toMatch(/NaN|Infinity|undefined/);
  });
});

describe("csv export feedback", () => {
  it("prompts the user to complete a calculation when no inputs were entered", () => {
    render(<MarginInputHarness />);

    fireEvent.click(screen.getByRole("button", { name: "Export CSV" }));

    expect(screen.getByRole("status").textContent).toBe(
      "Complete the calculator first.",
    );
    expect(mockedDownloadCalculatorResultsCsv).not.toHaveBeenCalled();
  });

  it("downloads csv with calculator name, input values, and result values", () => {
    render(<MarginInputHarness />);
    fireEvent.change(input("Revenue"), { target: { value: "250" } });
    fireEvent.change(input("Cost"), { target: { value: "150" } });

    fireEvent.click(screen.getByRole("button", { name: "Export CSV" }));

    expect(mockedDownloadCalculatorResultsCsv).toHaveBeenCalledWith({
      calculatorName: "Profit Margin Calculator Results",
      inputs: [
        { label: "Revenue", value: "250" },
        { label: "Cost", value: "150" },
      ],
      results: [
        { label: "Gross profit", value: "$100.00" },
        { label: "Profit margin", value: "40.00%" },
      ],
    });
    expect(screen.getByRole("status").textContent).toBe("CSV downloaded.");
  });
});

describe("copy results feedback", () => {
  it("only shows success after copying resolves and retains it for over two seconds", async () => {
    vi.useFakeTimers();
    let resolveCopy: (() => void) | undefined;
    mockedCopyResults.mockImplementation(
      () =>
        new Promise<void>((resolve) => {
          resolveCopy = resolve;
        }),
    );
    render(<MarginInputHarness />);
    fireEvent.change(input("Revenue"), { target: { value: "250" } });

    fireEvent.click(screen.getByRole("button", { name: "Copy Results" }));

    const status = screen.getByRole("status");
    expect(status.getAttribute("aria-live")).toBe("polite");
    expect(status.textContent).toBe("");
    expect(screen.queryByRole("button", { name: "Copied!" })).toBeNull();

    await act(async () => {
      resolveCopy?.();
      await Promise.resolve();
    });

    expect(mockedCopyResults).toHaveBeenCalledWith("Profit Margin Calculator Results", [
      { label: "Gross profit", value: "$250.00" },
      { label: "Profit margin", value: "100.00%" },
    ]);
    expect(screen.getByRole("button", { name: "Copied!" })).toBeTruthy();
    expect(status.textContent).toBe("Results copied.");

    act(() => {
      vi.advanceTimersByTime(2000);
    });
    expect(status.textContent).toBe("Results copied.");

    act(() => {
      vi.advanceTimersByTime(COPY_FEEDBACK_DURATION_MS - 2000);
    });
    expect(status.textContent).toBe("");
    expect(screen.getByRole("button", { name: "Copy Results" })).toBeTruthy();
  });

  it("shows the failure message when copying rejects", async () => {
    mockedCopyResults.mockRejectedValue(new Error("Clipboard denied"));
    render(<MarginInputHarness />);

    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: "Copy Results" }));
      await Promise.resolve();
    });

    expect(screen.getByRole("status").textContent).toBe(
      "Copy failed. Please try again.",
    );
    expect(screen.getByRole("button", { name: "Copy Results" })).toBeTruthy();
    expect(screen.queryByRole("button", { name: "Copied!" })).toBeNull();
  });
});
