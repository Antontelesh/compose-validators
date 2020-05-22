import { Validator } from "../types";

/**
 * Given a number checks it against an expected maximum.
 *
 * @example
 *
 * ```ts
 * import { max } from 'compose-validators';
 *
 * const validate = max(10);
 *
 * validate(15) // => { max: 10 }
 * validate(10) // => {}
 * ```
 *
 * @param num expected maximum number
 */
export const max = (num: number): Validator<number> => (value: number) => {
  if (value <= num) return {};
  return { max: num };
};
