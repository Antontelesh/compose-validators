import { Validator } from "../types";
import { isEmpty } from "../utils";

export const object = <T extends Record<string, unknown>>(
  config: { [P in keyof T]: Validator<T[P]> }
): Validator<T> => (value: T) => {
  const errors: { [P in keyof T]?: any } = {};
  for (const key in config) {
    const validator = config[key];
    const result = validator(value[key]);
    if (!isEmpty(result)) {
      errors[key] = result;
    }
  }
  return errors;
};
