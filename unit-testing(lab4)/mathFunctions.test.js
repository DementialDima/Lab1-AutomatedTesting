import { cbrt, max, min } from "./mathFunctions";

describe("cbrt", () => {
  test("кубовий корінь з 27 дорівнює 3", () => {
    expect(cbrt(27)).toBe(3);
  });

  test("негативне число -8", () => {
    expect(cbrt(-8)).toBe(-2);
  });

  test("кубовий корінь з 0 дорівнює 0", () => {
    expect(cbrt(0)).toBe(0);
  });

  test("кубовий корінь з 1.331 ≈ 1.1", () => {
    expect(cbrt(1.331)).toBeCloseTo(1.1);
  });

  test("NaN при некоректному вводі", () => {
    expect(cbrt("abc")).toBeNaN();
  });
});

describe("max", () => {
  test("максимум з 3 і 5 дорівнює 5", () => {
    expect(max(3, 5)).toBe(5);
  });

  test("максимум з двох однакових чисел", () => {
    expect(max(7, 7)).toBe(7);
  });

  test("негативні числа", () => {
    expect(max(-3, -8)).toBe(-3);
  });

  test("змішані числа", () => {
    expect(max(-10, 0)).toBe(0);
  });

  test("з дробами", () => {
    expect(max(2.5, 2.499)).toBe(2.5);
  });
});

describe("min", () => {
  test("мінімум з 4 і 2 дорівнює 2", () => {
    expect(min(4, 2)).toBe(2);
  });

  test("мінімум з однакових чисел", () => {
    expect(min(9, 9)).toBe(9);
  });

  test("мінімум серед негативних", () => {
    expect(min(-4, -1)).toBe(-4);
  });

  test("змішані", () => {
    expect(min(0, -1)).toBe(-1);
  });

  test("з дробами", () => {
    expect(min(0.1, 0.01)).toBe(0.01);
  });
});
