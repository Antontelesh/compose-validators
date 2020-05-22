import { ValidationResult } from "./types";

/**
 * A handy utility that converts validation result to a boolean.
 * Basically it just checks that the validation result is an empty object.
 *
 * @param result validation result
 */
export const isValid = (result: ValidationResult): boolean =>
  Object.keys(result).length === 0;
