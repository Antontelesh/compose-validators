import { Validator } from "../types";

/**
 * @internal
 * @param value
 */
const isValid = (value: any) => {
  switch (typeof value) {
    case "boolean":
    case "number":
      return true;

    default: {
      return Boolean(value);
    }
  }
};

/**
 * Checks that the value is defined and is not an empty string.
 *
 * @example
 *
 * ```ts
 * import { required } from 'compose-validators';
 *
 * required('') // => { required: true }
 * required(undefined) // => { required: true }
 * required(null) // => { required: true }
 * required('abc') // => {}
 * required(0) // => {}
 * required(false) // => {}
 * required({}) // => {}
 * required([]) // => {}
 * ```
 *
 * @param value
 */
export const required: Validator<any> = (value) => {
  if (isValid(value)) return {};
  return { required: true };
};
