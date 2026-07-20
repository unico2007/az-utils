import { describe, expect, it } from "vitest";
import { extractDigits } from "./index";

describe("extractDigits", () => {
  it("keeps only digits", () => {
    expect(extractDigits("+994 50 123-45-67")).toBe("994501234567");
    expect(extractDigits("AZ21 NABZ 0000")).toBe("210000");
  });

  it("returns an empty string when there are no digits", () => {
    expect(extractDigits("abc")).toBe("");
    // @ts-expect-error runtime guard for untyped callers
    expect(extractDigits(null)).toBe("");
  });
});
