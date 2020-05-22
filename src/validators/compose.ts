import { Validator } from "../types";
import { isEmpty } from "../utils";

export const compose = <T>(...validators: Validator<T>[]): Validator<T> => (
  value: T
) => {
  for (const validator of validators) {
    const result = validator(value);
    if (!isEmpty(result)) return result;
  }
  return {};
};
