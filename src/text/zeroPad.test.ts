import { describe, expect, it } from "vitest";
import { zeroPad } from "./index";

describe("zeroPad", () => {
  it("pads with leading zeros", () => {
    expect(zeroPad(5, 3)).toBe("005");
    expect(zeroPad(42, 4)).toBe("0042");
  });

  it("leaves already-wide numbers unchanged", () => {
    expect(zeroPad(42, 2)).toBe("42");
    expect(zeroPad(123, 2)).toBe("123");
  });

  it("accounts for the minus sign", () => {
    expect(zeroPad(-7, 3)).toBe("-07");
  });

  it("returns an empty string for invalid input", () => {
    expect(zeroPad(Number.NaN, 3)).toBe("");
    // @ts-expect-error runtime guard for untyped callers
    expect(zeroPad("5", 3)).toBe("");
  });
});
