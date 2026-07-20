import { describe, expect, it } from "vitest";
import { ensureSuffix } from "./index";

describe("ensureSuffix", () => {
  it("appends the suffix when missing", () => {
    expect(ensureSuffix("folder", "/")).toBe("folder/");
    expect(ensureSuffix("file", ".txt")).toBe("file.txt");
  });

  it("leaves the string unchanged when already suffixed", () => {
    expect(ensureSuffix("folder/", "/")).toBe("folder/");
  });

  it("returns an empty string for non-string input", () => {
    // @ts-expect-error runtime guard for untyped callers
    expect(ensureSuffix(null, "/")).toBe("");
  });
});
