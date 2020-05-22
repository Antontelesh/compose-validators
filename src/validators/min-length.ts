import type { Validator } from "../types";

/**
 * Given a string, array or any other object having a `length: number`
 * property, checks the actual length against expected minimum.
 *
 * @example
 *
 * ```ts
 * import { minLength } from 'compose-validators';
 *
 * const validate = minLength(3);
 *
 * validate([1,2]) // => { minLength: 3 }
 * validate([1,2,3]) // => {}
 * validate("ab") // => { minLength: 3 }
 * validate("abc") // => {}
 * ```
 *
 * @param length minimum length allowed
 */
export const minLength = <T extends { length: number }>(
  length: number
): Validator<T> => (value: T) => {
  if (value.length < length) {
    return { minLength: length };
  }
  return {};
};
