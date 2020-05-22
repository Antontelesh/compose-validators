import { ValidationResult } from "./types";

export const isValid = (result: ValidationResult): boolean =>
  Object.keys(result).length === 0;
