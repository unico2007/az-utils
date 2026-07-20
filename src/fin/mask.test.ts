import { describe, expect, it } from "vitest";
import { maskFin } from "./index";

describe("maskFin", () => {
  it("keeps the first two and last two characters", () => {
    expect(maskFin("1ABC2DE")).toBe("1A***DE");
  });

  it("trims and uppercases first", () => {
    expect(maskFin("  1abc2de ")).toBe("1A***DE");
  });

  it("masks non-7-length input entirely", () => {
    expect(maskFin("123")).toBe("***");
    expect(maskFin("")).toBe("");
    // @ts-expect-error runtime guard for untyped callers
    expect(maskFin(null)).toBe("");
  });
});
