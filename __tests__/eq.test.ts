import { eq } from "../src";

describe("eq", () => {
  describe("string", () => {
    const check = eq("abc");

    test("passes", () => {
      expect(check("abc")).toEqual({});
    });

    test("fails", () => {
      expect(check("xyz")).toEqual({ eq: "abc" });
    });
  });

  describe("custom comparator", () => {
    const check = eq(
      "abc",
      (a, b) => String(a).toLowerCase() === String(b).toLowerCase()
    );

    test("passes", () => {
      expect(check("abc")).toEqual({});
      expect(check("ABC")).toEqual({});
    });

    test("fails", () => {
      expect(check("xyz")).toEqual({ eq: "abc" });
      expect(check("XYZ")).toEqual({ eq: "abc" });
    });
  });
});
