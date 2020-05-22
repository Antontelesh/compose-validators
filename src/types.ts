export type Validator<T> = (value: T) => { [error: string]: any };
