import { describe, expect, it } from "vitest";
import { numberToWordsAz } from "./index";

describe("numberToWordsAz", () => {
  it("spells single digits and zero", () => {
    expect(numberToWordsAz(0)).toBe("sıfır");
    expect(numberToWordsAz(5)).toBe("beş");
    expect(numberToWordsAz(9)).toBe("doqquz");
  });

  it("spells tens", () => {
    expect(numberToWordsAz(10)).toBe("on");
    expect(numberToWordsAz(21)).toBe("iyirmi bir");
    expect(numberToWordsAz(99)).toBe("doxsan doqquz");
  });

  it("spells hundreds (no leading bir for 100)", () => {
    expect(numberToWordsAz(100)).toBe("yüz");
    expect(numberToWordsAz(234)).toBe("iki yüz otuz dörd");
    expect(numberToWordsAz(905)).toBe("doqquz yüz beş");
  });

  it("spells thousands (no leading bir for 1000)", () => {
    expect(numberToWordsAz(1000)).toBe("min");
    expect(numberToWordsAz(2000)).toBe("iki min");
    expect(numberToWordsAz(21000)).toBe("iyirmi bir min");
    expect(numberToWordsAz(1001)).toBe("min bir");
  });

  it("spells millions (keeps bir for 1,000,000)", () => {
    expect(numberToWordsAz(1_000_000)).toBe("bir milyon");
    expect(numberToWordsAz(1_234_567)).toBe(
      "bir milyon iki yüz otuz dörd min beş yüz altmış yeddi",
    );
  });

  it("handles negatives and rejects invalid input", () => {
    expect(numberToWordsAz(-5)).toBe("mənfi beş");
    expect(numberToWordsAz(1.5)).toBe("");
    expect(numberToWordsAz(1_000_000_000)).toBe("");
    // @ts-expect-error runtime guard for untyped callers
    expect(numberToWordsAz("5")).toBe("");
  });
});
