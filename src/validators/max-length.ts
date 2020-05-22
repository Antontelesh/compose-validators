import type { Validator } from "../types";

/**
 * Given a string, array or any other object having a `length: number`
 * property, checks the actual length against expected maximum.
 *
 * @example
 *
 * ```ts
 * import { maxLength } from 'compose-validators';
 *
 * const validate = maxLength(3);
 *
 * validate([1,2,3,4]) // => { maxLength: 3 }
 * validate([1,2,3]) // => {}
 * validate("abcd") // => { maxLength: 3 }
 * validate("abc") // => {}
 * ```
 *
 * @param length maximum length allowed
 */
export const maxLength = <T extends { length: number }>(
  length: number
): Validator<T> => (value: T) => {
  if (value.length > length) {
    return { maxLength: length };
  }
  return {};
};
