import { Validator } from "../types";
import { isValid } from "../utils";

/**
 * Takes a config object, which defines validators for necessary properties
 * and returns a validator taking an object and validates its properties
 * against the config.
 *
 * Does not check that an object is of type "object" or anything.
 * If you want to check for an object first, consider prefixing this validator
 * with `compose(type('object'), object({...}))` or any other validator that
 * suits your needs.
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
 * person({ name: '', age: 0 }) // => { name: { required: true }, age: { min: 18 } }
 * person({ name: 'John', age: 20 }) // => {}
 * ```
 *
 * @param config object with validators in properties
 */
export const object = <T extends Record<string, unknown>>(
  config: { [P in keyof T]: Validator<T[P]> }
): Validator<T> => (value: T) => {
  const errors: { [P in keyof T]?: any } = {};
  for (const key in config) {
    const validator = config[key];
    const result = validator(value[key]);
    if (!isValid(result)) {
      errors[key] = result;
    }
  }
  return errors;
};
