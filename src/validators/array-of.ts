import { Validator } from "../types";
import { isEmpty } from "../utils";

export const arrayOf = <T>(validator: Validator<T>): Validator<T[]> => (
  value
) => {
  return value.reduce((acc, item, index) => {
    const result = validator(item);
    if (isEmpty(result)) return acc;
    return { ...acc, [index]: result };
  }, {});
};
