import type { Validator } from "../types";

/**
 * Checks whether an actual value equals to expected.
 * Accepts optional comparator as a second argument, where you can define custom comparison logic.
 * By default `Object.is` is used as comparator.
 *
 * @example
 *
 * ```ts
 * import { eq } from 'compose-validators';
 *
 * const validate = eq('production');
 *
 * validate('development') // => { eq: 'production' }
 * validate('production') // => {}
 * ```
 *
 * @param expected expected value
 * @param comparator custom comparator (`Object.is` is used by default)
 */
export const eq = <T>(
  expected: T,
  comparator: (expected: T, actual: any) => boolean = Object.is
): Validator<T> => (value: T) => {
  if (comparator(expected, value)) return {};
  return { eq: expected };
};
