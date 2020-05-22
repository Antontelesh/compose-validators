import {
  object,
  compose,
  minLength,
  required,
  string,
  number,
  min,
  max,
} from "../src";

describe("object", () => {
  const check = object({
    name: compose(string, required, minLength(3)),
    age: compose(number, min(18), max(100)),
  });

  test("passes", () => {
    const person = {
      name: "John Doe",
      age: 45,
    };
    expect(check(person)).toEqual({});
  });

  test("combines errors", () => {
    const person = {
      name: "",
      age: 10,
    };
    expect(check(person)).toEqual({
      name: { required: true },
      age: { min: 18 },
    });
  });
});
