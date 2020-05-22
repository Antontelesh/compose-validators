import { Validator } from "../types";
import { isValid } from "../utils";

/**
 * Creates a validator accepting arrays
 * and runs provided item validator against every array item.
 * Returns an object where keys are indices of array items having validation errors.
 *
 * @example
 *
 * ```ts
 * import { object, compose, string, required, number, min } from 'compose-validators';
 *
 * const person = object({
 *   name: compose(string, required),
 *   age: compose(number, min(18)),
 * })
 *
 * const people = arrayOf(person);
 *
 * people([
 *   { name: 'John', age: 30 },
 *   { name: 'Jim', age: 15 },
 * ])
 * // this returns
 * // {
 * //   1: { age: { min: 18 } }
 * // }
 * ```
 * @typeParam Item Type of array item
 *
 * @param validator Array item validator
 */
export const arrayOf = <Item>(
  validator: Validator<Item>
): Validator<Item[]> => (value: Item[]) => {
  return value.reduce((acc, item, index) => {
    const result = validator(item);
    if (isValid(result)) return acc;
    return { ...acc, [index]: result };
  }, {});
};
