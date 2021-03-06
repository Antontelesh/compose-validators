# compose-validators

Composable JavaScript validators

![Tests](https://github.com/Antontelesh/compose-validators/workflows/Tests/badge.svg?branch=master)
[![codecov](https://codecov.io/gh/Antontelesh/compose-validators/branch/master/graph/badge.svg)](https://codecov.io/gh/Antontelesh/compose-validators)

## Install

with npm:

```
npm install compose-validators
```

or yarn:

```
yarn add compose-validators
```

## [**API Docs**](docs/README.md)

## Why

npm contains several popular packages that perform different kinds of validations.
But none of them provides clean and composable functions that can be used as validators.
Some of them invent their own domain-specific languages, forcing you to learn custom syntax.
Others require you to dive deep into JSON schemas and don't give you clean output.

This library is an attempt to solve these problems.
It is focused on

- Composition. In `compose-validators` everything is a validator, so you can compose your validators to get more complex ones while having the same API everywhere.
- Type safety. It is written in TypeScript meaning that you get your validators being statically typed out of the box.
- Small size. We want the library to be as lightweight as possible while keeping the source code readable. Also, it has zero runtime dependencies. It's now 729 bytes according to [size-limit](ai/size-limit).

## Concepts

### Validator

Every validator is a function that accepts a value to be validated and returns a validation result.

### Validation result

Validation result is always a plain object with collected validation errors. If the object is empty it means the value is valid.

Having validation result as an object allows us to combine results from composed validators like [`object`](docs/README.md#object) or [`arrayOf`](docs/README.md#arrayOf). This way you can nest your objects and arrays and therefore validate deep structures, like the following example:

```ts
import { object, string, required, compose } from "compose-validators";

const validator = object({
  name: compose(string, required),
  address: object({
    city: compose(string, required),
  }),
});

validator({
  name: "John Doe",
  address: {
    city: "",
  },
});
```

Applying this validator to an object with `address.city` being an empty string,
you will get the following validation result:

```json
{
  "address": {
    "city": {
      "required: true
    }
  }
}
```

This validation result is non deterministic about your actual error messages,
it does not deal with any sort of i18n,
though provides enough information for you to display a clean error message.

## Custom validators

You can define and use your own validators with this library.
To be composable with built-in ones your validator should be a function
that takes a value to be validated and returns either an empty object if the value is valid
or something else in case the value is invalid.

We recommend you to always return a plain object, which has a property named after your validator
in order to keep the same style of validation results.

Here's an example of creating a custom validator for email strings:

```ts
import { compose, object, string } from "compose-validators";

const email = (value) => {
  // place your regular expression instead if you wish
  if (value.includes("@")) {
    // input is valid, return an empty object
    return {};
  }

  // input is invalid, return an object with the an error description
  return {
    email: true,
  };
};

const validateForm = object({
  email: compose(string, email),
  message: string,
});

expect(
  validateForm({
    email: "abc",
    message: "message",
  })
).toEqual({
  email: { email: true },
});

expect(
  validateForm({
    email: "test@email.com",
    message: "message",
  })
).toEqual({});
```
