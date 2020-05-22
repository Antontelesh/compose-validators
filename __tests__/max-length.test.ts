import { maxLength } from "../src";

describe("maxLength", () => {
  const check = maxLength(5);

  test("passes", () => {
    expect(check("abcde")).toEqual({});
    expect(check([1, 2, 3, 4, 5])).toEqual({});
  });

  test("fails", () => {
    expect(check("abcdef")).toEqual({ maxLength: 5 });
    expect(check([1, 2, 3, 4, 5, 6])).toEqual({ maxLength: 5 });
  });
});
