import { type, number, string, boolean, array } from "../src";

describe("type", () => {
  describe("number", () => {
    test("pass", () => {
      expect(type("number")(0)).toEqual({});
      expect(number(0)).toEqual({});
      expect(number(NaN)).toEqual({});
    });
    test("fail", () => {
      expect(type("number")("abc")).toEqual({ type: "number" });
      expect(number("abc")).toEqual({ type: "number" });
      expect(number(null)).toEqual({ type: "number" });
    });
  });

  describe("string", () => {
    test("pass", () => {
      expect(type("string")("")).toEqual({});
      expect(string("")).toEqual({});
      expect(string("abc")).toEqual({});
    });
    test("fail", () => {
      expect(type("string")(0)).toEqual({ type: "string" });
      expect(string({})).toEqual({ type: "string" });
      expect(string(null)).toEqual({ type: "string" });
    });
  });

  describe("boolean", () => {
    test("pass", () => {
      expect(type("boolean")(true)).toEqual({});
      expect(boolean(true)).toEqual({});
      expect(boolean(false)).toEqual({});
    });
    test("fail", () => {
      expect(type("boolean")(0)).toEqual({ type: "boolean" });
      expect(boolean({})).toEqual({ type: "boolean" });
      expect(boolean(null)).toEqual({ type: "boolean" });
    });
  });

  describe("object", () => {
    const check = type("object");
    test("pass", () => {
      expect(check({})).toEqual({});
      expect(check([])).toEqual({});
      expect(check(null)).toEqual({});
    });
    test("fail", () => {
      expect(check(0)).toEqual({ type: "object" });
      expect(check("abc")).toEqual({ type: "object" });
      expect(check(undefined)).toEqual({ type: "object" });
    });
  });

  describe("array", () => {
    test("pass", () => {
      expect(array([])).toEqual({});
      expect(array([1, 2, 3])).toEqual({});
    });
    test("fail", () => {
      expect(array(0)).toEqual({ type: "array" });
      expect(array("abc")).toEqual({ type: "array" });
      expect(array(undefined)).toEqual({ type: "array" });
      expect(array({})).toEqual({ type: "array" });
    });
  });
});
