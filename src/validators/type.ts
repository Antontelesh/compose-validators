import type { Validator } from "../types";

export const type = <T>(
  t: string,
  comparator = (v: T) => typeof v === t
): Validator<T> => (value: T) => {
  if (comparator(value)) return {};
  return { type: t };
};

export const boolean = type("boolean");
export const number = type("number");
export const string = type("string");
export const array = type("array", Array.isArray);
