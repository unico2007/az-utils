import { describe, expect, it } from "vitest";
import { extractPlateRegion } from "./index";

describe("extractPlateRegion", () => {
  it("returns the region code as a number", () => {
    expect(extractPlateRegion("10-AB-123")).toBe(10);
    expect(extractPlateRegion("90zz999")).toBe(90);
    expect(extractPlateRegion("01-CC-001")).toBe(1);
  });

  it("returns null for an invalid plate", () => {
    expect(extractPlateRegion("00-AB-123")).toBeNull();
    expect(extractPlateRegion("nonsense")).toBeNull();
    // @ts-expect-error runtime guard for untyped callers
    expect(extractPlateRegion(null)).toBeNull();
  });
});
