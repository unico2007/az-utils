import { describe, expect, it } from "vitest";
import { detectOperator } from "./index";

describe("detectOperator", () => {
  it("detects each mobile operator", () => {
    expect(detectOperator("0501234567")).toBe("Azercell");
    expect(detectOperator("+994551234567")).toBe("Bakcell");
    expect(detectOperator("0771234567")).toBe("Nar");
    expect(detectOperator("0601234567")).toBe("Naxtel");
  });

  it("returns null for a Baku landline", () => {
    expect(detectOperator("0121234567")).toBeNull();
  });

  it("returns null for invalid input", () => {
    expect(detectOperator("not a phone")).toBeNull();
    expect(detectOperator("")).toBeNull();
  });
});
