import type { Validator } from "../types";

/**
 * Checks the type of value by using the `typeof` operator.
 * Accepts an optional custom comparator function, where you can define
 * different logic of comparing type, i.e. `instanceof` or any other check.
 *
 * Please, remember that `typeof null === "object"` and `typeof NaN === 'number'` in JavaScript.
 *
 * @example
 *
 * ```ts
 * import { type } from 'compose-validators';
 *
 * const validate = type('object');
 *
 * validate('abc') // => { type: 'object' }
 * validate([]) // => {}
 * validate({}) // => {}
 * validate(null) // => {}
 * ```
 *
 * @param t expected data type
 * @param comparator custom comparator function (typeof by default)
 */
export const type = <T>(
  t: string,
  comparator = (v: T): boolean => typeof v === t
): Validator<T> => (value: T) => {
  if (comparator(value)) return {};
  return { type: t };
};

/**
 * A handy utility on top of {@link type} validator.
 * Checks that the given value is boolean by using the `typeof` operator.
 *
 * @example
 *
 * ```ts
 * import { boolean } from 'compose-validators';
 *
 * boolean('abc') // => { type: 'boolean' }
 * boolean(true) // => {}
 * ```
 */
export const boolean = type("boolean");

/**
 * A handy utility on top of {@link type} validator.
 * Checks that the given value is number by using the `typeof` operator.
 *
 * @example
 *
 * ```ts
 * import { number } from 'compose-validators';
 *
 * number('abc') // => { type: 'number' }
 * number(5) // => {}
 * number(NaN) // => {}
 * ```
 */
export const number = type("number");

/**
 * A handy utility on top of {@link type} validator.
 * Checks that the given value is string by using the `typeof` operator.
 *
 * @example
 *
 * ```ts
 * import { string } from 'compose-validators';
 *
 * string(5) // => { type: 'string' }
 * string('abc') // => {}
 * ```
 */
export const string = type("string");

/**
 * A handy utility on top of {@link type} validator.
 * Checks that the given value is array by using the `Array.isArray` function.
 *
 * @example
 *
 * ```ts
 * import { array } from 'compose-validators';
 *
 * array(5) // => { type: 'array' }
 * array([]) // => {}
 * ```
 */
export const array = type("array", Array.isArray);
