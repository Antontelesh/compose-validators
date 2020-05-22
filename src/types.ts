/**
 * ValidationResult is an object with errors.
 * Empty object means valid entity.
 */
export type ValidationResult = Record<string, unknown>;

/**
 * Validator is a function
 * that accepts a value to be validated
 * and returns a validation result.
 */
export type Validator<T> = (value: T) => ValidationResult;
