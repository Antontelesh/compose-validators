import { Validator } from "../types";

export const maxLength = (length: number): Validator<{ length: number }> => (
  value
) => {
  if (value.length > length) {
    return { maxLength: length };
  }
  return {};
};
