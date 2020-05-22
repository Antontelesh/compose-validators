import { arrayOf, compose, string, required } from "../src";

describe("arrayOf", () => {
  const item = compose(string, required);
  const check = arrayOf(item);

  test("passes", () => {
    expect(check([])).toEqual({});
    expect(check(["abc"])).toEqual({});
    expect(check(["abc", "def"])).toEqual({});
  });

  test("combines errors", () => {
    expect(check([24, null, "abc", ""])).toEqual({
      0: { type: "string" },
      1: { type: "string" },
      3: { required: true },
    });
  });
});
