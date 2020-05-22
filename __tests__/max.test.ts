import { max } from "../src";

describe("max", () => {
  const check = max(10);

  test("passes", () => {
    expect(check(9)).toEqual({});
    expect(check(10)).toEqual({});
  });

  test("fails", () => {
    expect(check(11)).toEqual({ max: 10 });
  });
});
