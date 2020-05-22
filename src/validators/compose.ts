import type { Validator } from "../types";
import { isValid } from "../utils";

/**
 * Combines several validators and returns a composed validator
 * that applies all given validators one by one.
 *
 * Stops at first validator returning errors, so you can guard yourself
 * by placing less strict rules first.
 *
 * @example
 *
 * ```ts
 * import { compose, string, minLength } from 'compose-validators';
 *
 * const validate = compose(string, minLength(3));
 *
 * validate([]) // => { type: "string" }
 * validate("") // => { minLength: 3 }
 * validate("abc") // => {}
 * ```
 *
 * @typeParam T expected value type
 *
 * @param validators
 */
export const compose = <T>(...validators: Validator<T>[]): Validator<T> => (
  value: T
) => {
  for (const validator of validators) {
    const result = validator(value);
    if (!isValid(result)) return result;
  }
  return {};
};
