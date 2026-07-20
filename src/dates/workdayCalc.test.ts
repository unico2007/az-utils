import { describe, expect, it } from "vitest";
import { addWorkingDays, workingDaysBetween } from "./index";

describe("addWorkingDays", () => {
  it("skips weekends going forward", () => {
    expect(addWorkingDays(new Date(2024, 0, 5), 1).getTime()).toBe(new Date(2024, 0, 8).getTime());
    expect(addWorkingDays(new Date(2024, 0, 1), 5).getTime()).toBe(new Date(2024, 0, 8).getTime());
  });

  it("goes backward for negative n", () => {
    expect(addWorkingDays(new Date(2024, 0, 8), -1).getTime()).toBe(new Date(2024, 0, 5).getTime());
  });

  it("returns the same day for n = 0", () => {
    expect(addWorkingDays(new Date(2024, 0, 1), 0).getTime()).toBe(new Date(2024, 0, 1).getTime());
  });
});

describe("workingDaysBetween", () => {
  it("counts working days in a range", () => {
    expect(workingDaysBetween(new Date(2024, 0, 1), new Date(2024, 0, 5))).toBe(4);
    expect(workingDaysBetween(new Date(2024, 0, 5), new Date(2024, 0, 8))).toBe(1);
  });

  it("is order-independent and zero for the same day", () => {
    expect(workingDaysBetween(new Date(2024, 0, 8), new Date(2024, 0, 5))).toBe(1);
    expect(workingDaysBetween(new Date(2024, 0, 1), new Date(2024, 0, 1))).toBe(0);
  });

  it("returns 0 for invalid dates", () => {
    expect(workingDaysBetween(new Date("x"), new Date(2024, 0, 1))).toBe(0);
  });
});
