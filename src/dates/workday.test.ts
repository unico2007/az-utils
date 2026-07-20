import { describe, expect, it } from "vitest";
import { isWeekend, isWorkingDay } from "./index";

describe("isWeekend", () => {
  it("is true on Saturday and Sunday", () => {
    expect(isWeekend(new Date(2000, 0, 1))).toBe(true); // Saturday
    expect(isWeekend(new Date(2023, 0, 1))).toBe(true); // Sunday
  });

  it("is false on a weekday", () => {
    expect(isWeekend(new Date(2024, 0, 1))).toBe(false); // Monday
  });
});

describe("isWorkingDay", () => {
  it("is true Monday–Friday", () => {
    expect(isWorkingDay(new Date(2024, 0, 1))).toBe(true); // Monday
    expect(isWorkingDay(new Date(2024, 0, 5))).toBe(true); // Friday
  });

  it("is false on weekends and for invalid dates", () => {
    expect(isWorkingDay(new Date(2000, 0, 1))).toBe(false); // Saturday
    expect(isWorkingDay(new Date("nonsense"))).toBe(false);
  });
});
