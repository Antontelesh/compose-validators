import { minLength } from "../src";

describe("minLength", () => {
  const check = minLength(5);

  test("passes", () => {
    expect(check("abcde")).toEqual({});
    expect(check([1, 2, 3, 4, 5])).toEqual({});
  });

  test("fails", () => {
    expect(check("abcd")).toEqual({ minLength: 5 });
    expect(check([1, 2, 3, 4])).toEqual({ minLength: 5 });
  });
});
