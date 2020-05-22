import { Validator } from "../types";

export const max = (num: number): Validator<number> => (value) => {
  if (value <= num) return {};
  return { max: num };
};
