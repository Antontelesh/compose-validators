import { compose, required, string, minLength, maxLength } from "../src";

describe("compose", () => {
  // we cast the "any" type to prevent TypeScript from doing validation for us
  const check = compose<any>(string, required, minLength(3), maxLength(5));

  test("passes", () => {
    expect(check("abc")).toEqual({});
    expect(check("abcd")).toEqual({});
    expect(check("abcde")).toEqual({});
  });

  test("stops on first failure", () => {
    expect(check(5)).toEqual({ type: "string" });
    expect(check("")).toEqual({ required: true });
    expect(check("ab")).toEqual({ minLength: 3 });
    expect(check("abcdef")).toEqual({ maxLength: 5 });
  });
});
