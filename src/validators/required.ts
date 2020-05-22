import { Validator } from "../types";

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

export const required: Validator<any> = (value) => {
  if (isValid(value)) return {};
  return { required: true };
};
