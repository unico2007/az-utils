import { describe, expect, it } from "vitest";
import { maskCardNumber } from "./index";

describe("maskCardNumber", () => {
  it("keeps only the last four digits", () => {
    expect(maskCardNumber("4111111111111111")).toBe("**** **** **** 1111");
  });

  it("ignores separators in the input", () => {
    expect(maskCardNumber("4111 1111 1111 1111")).toBe("**** **** **** 1111");
  });

  it("returns short inputs unchanged", () => {
    expect(maskCardNumber("123")).toBe("123");
    expect(maskCardNumber("")).toBe("");
    // @ts-expect-error runtime guard for untyped callers
    expect(maskCardNumber(null)).toBe("");
  });
});
