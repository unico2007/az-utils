import { describe, expect, it } from "vitest";
import { isPast } from "./index";

describe("isPast", () => {
  it("compares against a reference date", () => {
    expect(isPast(new Date(2020, 0, 1), new Date(2026, 0, 1))).toBe(true);
    expect(isPast(new Date(2030, 0, 1), new Date(2026, 0, 1))).toBe(false);
  });

  it("is false for invalid input", () => {
    expect(isPast(new Date("x"), new Date(2026, 0, 1))).toBe(false);
    // @ts-expect-error runtime guard for untyped callers
    expect(isPast("2020", new Date())).toBe(false);
  });
});
