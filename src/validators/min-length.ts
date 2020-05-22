import { Validator } from "../types";

export const minLength = (length: number): Validator<{ length: number }> => (
  value
) => {
  if (value.length < length) {
    return { minLength: length };
  }
  return {};
};
