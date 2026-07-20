import { describe, expect, it } from "vitest";
import { WEEKDAY_NAMES_AZ, weekdayNameAz } from "./index";

describe("WEEKDAY_NAMES_AZ", () => {
  it("has 7 days indexed Sunday-first", () => {
    expect(WEEKDAY_NAMES_AZ).toHaveLength(7);
    expect(WEEKDAY_NAMES_AZ[0]).toBe("bazar");
    expect(WEEKDAY_NAMES_AZ[1]).toBe("bazar ertəsi");
    expect(WEEKDAY_NAMES_AZ[6]).toBe("şənbə");
  });
});

describe("weekdayNameAz", () => {
  it("maps known anchor dates to the correct weekday", () => {
    expect(weekdayNameAz(new Date(2000, 0, 1))).toBe("şənbə"); // Saturday
    expect(weekdayNameAz(new Date(2024, 0, 1))).toBe("bazar ertəsi"); // Monday
    expect(weekdayNameAz(new Date(2023, 0, 1))).toBe("bazar"); // Sunday
  });

  it("returns an empty string for an invalid date", () => {
    expect(weekdayNameAz(new Date("nonsense"))).toBe("");
    // @ts-expect-error runtime guard for untyped callers
    expect(weekdayNameAz(42)).toBe("");
  });
});
