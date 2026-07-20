import { describe, expect, it } from "vitest";
import { reverseText } from "./index";

describe("reverseText", () => {
  it("reverses characters", () => {
    expect(reverseText("salam")).toBe("malas");
    expect(reverseText("12345")).toBe("54321");
  });

  it("keeps Azerbaijani letters intact", () => {
    expect(reverseText("əli")).toBe("ilə");
  });

  it("returns an empty string for non-string input", () => {
    expect(reverseText("")).toBe("");
    // @ts-expect-error runtime guard for untyped callers
    expect(reverseText(null)).toBe("");
  });
});
