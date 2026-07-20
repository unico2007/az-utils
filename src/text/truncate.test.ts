import { describe, expect, it } from "vitest";
import { truncate } from "./index";

describe("truncate", () => {
  it("shortens long text and appends the suffix", () => {
    expect(truncate("Salam dünya", 8)).toBe("Salam d…");
    expect(truncate("uzun mətn", 6, "...")).toBe("uzu...");
  });

  it("leaves short text unchanged", () => {
    expect(truncate("qısa", 10)).toBe("qısa");
    expect(truncate("qısa", 4)).toBe("qısa");
  });

  it("never exceeds maxLength", () => {
    expect(truncate("abcdef", 3).length).toBeLessThanOrEqual(3);
  });

  it("returns an empty string for non-string input", () => {
    // @ts-expect-error runtime guard for untyped callers
    expect(truncate(null, 5)).toBe("");
  });
});
