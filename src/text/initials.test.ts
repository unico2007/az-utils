import { describe, expect, it } from "vitest";
import { initials } from "./index";

describe("initials", () => {
  it("takes the first letter of each word, uppercased", () => {
    expect(initials("Orxan Qasımov")).toBe("OQ");
    expect(initials("islam kərimov")).toBe("İK");
  });

  it("handles single names and extra whitespace", () => {
    expect(initials("Aygün")).toBe("A");
    expect(initials("  üç  ad  var ")).toBe("ÜAV");
  });

  it("returns an empty string for empty or non-string input", () => {
    expect(initials("")).toBe("");
    // @ts-expect-error runtime guard for untyped callers
    expect(initials(null)).toBe("");
  });
});
