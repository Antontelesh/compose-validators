import type { Validator } from "../types";

/**
 * Given a number checks it against an expected minimum.
 *
 * @example
 *
 * ```ts
 * import { min } from 'compose-validators';
 *
 * const validate = min(10);
 *
 * validate(9) // => { min: 10 }
 * validate(10) // => {}
 * ```
 *
 * @param num expected minimum number
 */
export const min = (num: number): Validator<number> => (value: number) => {
  if (value >= num) return {};
  return { min: num };
};
