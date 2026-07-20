import { describe, expect, it } from "vitest";
import { ensurePrefix } from "./index";

describe("ensurePrefix", () => {
  it("prepends the prefix when missing", () => {
    expect(ensurePrefix("994501234567", "+")).toBe("+994501234567");
    expect(ensurePrefix("example.com", "https://")).toBe("https://example.com");
  });

  it("leaves the string unchanged when already prefixed", () => {
    expect(ensurePrefix("+994", "+")).toBe("+994");
  });

  it("returns an empty string for non-string input", () => {
    // @ts-expect-error runtime guard for untyped callers
    expect(ensurePrefix(null, "+")).toBe("");
  });
});
