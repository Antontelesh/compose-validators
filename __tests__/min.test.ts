import { min } from "../src";

describe("min", () => {
  const check = min(10);

  test("passes", () => {
    expect(check(10)).toEqual({});
    expect(check(11)).toEqual({});
  });

  test("fails", () => {
    expect(check(9)).toEqual({ min: 10 });
  });
});
