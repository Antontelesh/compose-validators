import { Validator } from "../types";

export const min = (num: number): Validator<number> => (value: number) => {
  if (value >= num) return {};
  return { min: num };
};
