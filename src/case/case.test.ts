import { describe, expect, it } from "vitest";
import { toLowerAz, toUpperAz } from "./index";

describe("toUpperAz", () => {
  it("maps dotted i to İ and dotless ı to I", () => {
    expect(toUpperAz("işıq")).toBe("İŞIQ");
    expect(toUpperAz("bakı")).toBe("BAKI");
  });

  it("uppercases the other Azerbaijani letters", () => {
    expect(toUpperAz("gəncə")).toBe("GƏNCƏ");
    expect(toUpperAz("azərbaycan")).toBe("AZƏRBAYCAN");
  });
});

describe("toLowerAz", () => {
  it("maps dotless I to ı and dotted İ to i", () => {
    expect(toLowerAz("İŞIQ")).toBe("işıq");
    expect(toLowerAz("BAKI")).toBe("bakı");
  });

  it("lowercases the other Azerbaijani letters", () => {
    expect(toLowerAz("GƏNCƏ")).toBe("gəncə");
  });
});

describe("round trip", () => {
  it("lowercasing an uppercased word restores it", () => {
    expect(toLowerAz(toUpperAz("bakı"))).toBe("bakı");
    expect(toLowerAz(toUpperAz("işıq"))).toBe("işıq");
  });

  it("returns an empty string for non-string input", () => {
    // @ts-expect-error runtime guard for untyped callers
    expect(toUpperAz(null)).toBe("");
    // @ts-expect-error runtime guard for untyped callers
    expect(toLowerAz(undefined)).toBe("");
  });
});
