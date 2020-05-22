import { Validator } from "../types";

export const eq = <T>(wanted: T, comparator = Object.is): Validator<T> => (
  value
) => {
  if (comparator(wanted, value)) return {};
  return { eq: wanted };
};
