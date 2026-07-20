import { describe, expect, it } from "vitest";
import { maskEmail } from "./index";

describe("maskEmail", () => {
  it("masks the local part, keeping the domain", () => {
    expect(maskEmail("orkhan@unico.az")).toBe("o****n@unico.az");
  });

  it("handles very short local parts", () => {
    expect(maskEmail("ab@x.az")).toBe("a*@x.az");
    expect(maskEmail("a@x.az")).toBe("a*@x.az");
  });

  it("returns non-email input unchanged", () => {
    expect(maskEmail("notanemail")).toBe("notanemail");
    expect(maskEmail("@x.az")).toBe("@x.az");
    // @ts-expect-error runtime guard for untyped callers
    expect(maskEmail(null)).toBe("");
  });
});
