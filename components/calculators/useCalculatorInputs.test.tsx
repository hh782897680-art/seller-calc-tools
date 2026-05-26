/**
 * @vitest-environment jsdom
 */

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import InputField from "../InputField";
import { calculateProfitMargin } from "../../lib/calc";
import { formatCurrency, formatPercent } from "../../lib/format";
import {
  parseInputNumber,
  useCalculatorInputs,
} from "./useCalculatorInputs";

type Field = "revenue" | "cost";

const sampleValues: Record<Field, string> = {
  revenue: "250",
  cost: "150",
};

afterEach(cleanup);

function MarginInputHarness() {
  const { values, numbers, updateValue, resetValues } =
    useCalculatorInputs(sampleValues);
  const result = calculateProfitMargin(numbers);

  return (
    <>
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
      <button onClick={resetValues} type="button">
        Reset
      </button>
      <output data-testid="gross-profit">{formatCurrency(result.grossProfit)}</output>
      <output data-testid="profit-margin">{formatPercent(result.profitMargin)}</output>
    </>
  );
}

function input(label: string) {
  return screen.getByLabelText(label) as HTMLInputElement;
}

describe("calculator inputs", () => {
  it("starts empty, shows gray sample placeholders, and calculates empty inputs as zero", () => {
    render(<MarginInputHarness />);

    expect(input("Revenue").value).toBe("");
    expect(input("Revenue").placeholder).toBe("250");
    expect(input("Revenue").className).toContain("placeholder:text-slate-400");
    expect(input("Cost").value).toBe("");
    expect(input("Cost").placeholder).toBe("150");
    expect(screen.getByTestId("gross-profit").textContent).toBe("$0.00");
    expect(screen.getByTestId("profit-margin").textContent).toBe("N/A");
  });

  it("updates results from entered numbers and preserves an explicitly entered zero", () => {
    render(<MarginInputHarness />);

    fireEvent.change(input("Revenue"), { target: { value: "250" } });
    fireEvent.change(input("Cost"), { target: { value: "150" } });
    expect(screen.getByTestId("gross-profit").textContent).toBe("$100.00");
    expect(screen.getByTestId("profit-margin").textContent).toBe("40.00%");

    fireEvent.change(input("Revenue"), { target: { value: "0" } });
    expect(input("Revenue").value).toBe("0");
    expect(screen.getByTestId("gross-profit").textContent).toBe("-$150.00");
    expect(screen.getByTestId("profit-margin").textContent).toBe("N/A");
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
    expect(screen.getByTestId("gross-profit").textContent).toBe("$0.00");
  });

  it("turns blank and non-finite input strings into finite zero values", () => {
    expect(parseInputNumber("")).toBe(0);
    expect(parseInputNumber("not-a-number")).toBe(0);
    expect(parseInputNumber("Infinity")).toBe(0);
    expect(parseInputNumber("0")).toBe(0);
    expect(parseInputNumber("42.50")).toBe(42.5);
  });
});
