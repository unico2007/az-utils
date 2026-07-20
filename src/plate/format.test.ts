import { describe, expect, it } from "vitest";
import { formatPlate } from "./index";

describe("formatPlate", () => {
  it("formats to NN-LL-NNN", () => {
    expect(formatPlate("10ab123")).toBe("10-AB-123");
    expect(formatPlate("90 ZZ 999")).toBe("90-ZZ-999");
    expect(formatPlate("10-AB-123")).toBe("10-AB-123");
  });

  it("returns null for an invalid plate", () => {
    expect(formatPlate("00-AB-123")).toBeNull();
    expect(formatPlate("nonsense")).toBeNull();
    // @ts-expect-error runtime guard for untyped callers
    expect(formatPlate(null)).toBeNull();
  });
});
