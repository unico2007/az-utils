import { describe, expect, it } from "vitest";
import { phoneDigits } from "./index";

describe("phoneDigits", () => {
  it("returns the 9-digit national number", () => {
    expect(phoneDigits("0501234567")).toBe("501234567");
    expect(phoneDigits("+994551234567")).toBe("551234567");
    expect(phoneDigits("994 70 123 45 67")).toBe("701234567");
  });

  it("returns null for invalid input", () => {
    expect(phoneDigits("nope")).toBeNull();
    expect(phoneDigits("")).toBeNull();
  });
});
