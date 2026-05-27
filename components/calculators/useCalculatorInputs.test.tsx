/**
 * @vitest-environment jsdom
 */

import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import InputField from "../InputField";
import { copyResults } from "@/lib/copy";
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

type Field = "revenue" | "cost";

const sampleValues: Record<Field, string> = {
  revenue: "250",
  cost: "150",
};

const mockedCopyResults = vi.mocked(copyResults);

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
  vi.useRealTimers();
});

function MarginInputHarness() {
  const { values, numbers, updateValue, resetValues } =
    useCalculatorInputs(sampleValues);
  const result = calculateProfitMargin(numbers);

  return (
    <CalculatorWorkspace
      metrics={[
        { label: "Gross profit", value: formatCurrency(result.grossProfit) },
        { label: "Profit margin", value: formatPercent(result.profitMargin) },
      ]}
      name="Profit Margin Calculator Results"
      onReset={resetValues}
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
