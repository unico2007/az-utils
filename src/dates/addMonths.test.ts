import { describe, expect, it } from "vitest";
import { addMonths } from "./index";

describe("addMonths", () => {
  it("clamps the day to the target month length", () => {
    expect(addMonths(new Date(2023, 0, 31), 1).getTime()).toBe(new Date(2023, 1, 28).getTime());
    expect(addMonths(new Date(2024, 0, 31), 1).getTime()).toBe(new Date(2024, 1, 29).getTime());
  });

  it("adds and subtracts whole months", () => {
    expect(addMonths(new Date(2026, 5, 15), 3).getTime()).toBe(new Date(2026, 8, 15).getTime());
    expect(addMonths(new Date(2026, 0, 10), -1).getTime()).toBe(new Date(2025, 11, 10).getTime());
  });

  it("returns an Invalid Date for invalid input", () => {
    expect(Number.isNaN(addMonths(new Date("x"), 1).getTime())).toBe(true);
  });
});
