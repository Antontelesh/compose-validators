import { required } from "../src";

const PASS = [0, 10, "abc", true, false, {}, []];

const FAIL = ["", null, undefined];

describe("required", () => {
  describe("passes", () => {
    for (const value of PASS) {
      it(`${JSON.stringify(value)} should pass`, () => {
        expect(required(value)).toEqual({});
      });
    }
  });

  describe("fails", () => {
    for (const value of FAIL) {
      it(`${JSON.stringify(value)} should fail`, () => {
        expect(required(value)).toEqual({ required: true });
      });
    }
  });
});
