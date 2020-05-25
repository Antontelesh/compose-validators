[Docs](README.md)

# Docs

## Index

### Type aliases

- [ValidationResult](README.md#validationresult)
- [Validator](README.md#validator)

### Variables

- [array](README.md#const-array)
- [boolean](README.md#const-boolean)
- [number](README.md#const-number)
- [string](README.md#const-string)

### Functions

- [arrayOf](README.md#const-arrayof)
- [compose](README.md#const-compose)
- [eq](README.md#const-eq)
- [isValid](README.md#const-isvalid)
- [max](README.md#const-max)
- [maxLength](README.md#const-maxlength)
- [min](README.md#const-min)
- [minLength](README.md#const-minlength)
- [object](README.md#const-object)
- [required](README.md#const-required)
- [type](README.md#const-type)

## Type aliases

### ValidationResult

Ƭ **ValidationResult**: _Record‹string, unknown›_

ValidationResult is an object with errors.
Empty object means valid entity.

---

### Validator

Ƭ **Validator**: _function_

Validator is a function
that accepts a value to be validated
and returns a validation result.

#### Type declaration:

▸ (`value`: T): _[ValidationResult](README.md#validationresult)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `value` | T    |

## Variables

### `Const` array

• **array**: _function_ = type("array", Array.isArray)

A handy utility on top of [type](README.md#const-type) validator.
Checks that the given value is array by using the `Array.isArray` function.

**`example`**

```ts
import { array } from "compose-validators";

array(5); // => { type: 'array' }
array([]); // => {}
```

#### Type declaration:

▸ (`value`: T): _[ValidationResult](README.md#validationresult)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `value` | T    |

---

### `Const` boolean

• **boolean**: _function_ = type("boolean")

A handy utility on top of [type](README.md#const-type) validator.
Checks that the given value is boolean by using the `typeof` operator.

**`example`**

```ts
import { boolean } from "compose-validators";

boolean("abc"); // => { type: 'boolean' }
boolean(true); // => {}
```

#### Type declaration:

▸ (`value`: T): _[ValidationResult](README.md#validationresult)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `value` | T    |

---

### `Const` number

• **number**: _function_ = type("number")

A handy utility on top of [type](README.md#const-type) validator.
Checks that the given value is number by using the `typeof` operator.

**`example`**

```ts
import { number } from "compose-validators";

number("abc"); // => { type: 'number' }
number(5); // => {}
number(NaN); // => {}
```

#### Type declaration:

▸ (`value`: T): _[ValidationResult](README.md#validationresult)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `value` | T    |

---

### `Const` string

• **string**: _function_ = type("string")

A handy utility on top of [type](README.md#const-type) validator.
Checks that the given value is string by using the `typeof` operator.

**`example`**

```ts
import { string } from "compose-validators";

string(5); // => { type: 'string' }
string("abc"); // => {}
```

#### Type declaration:

▸ (`value`: T): _[ValidationResult](README.md#validationresult)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `value` | T    |

## Functions

### `Const` arrayOf

▸ **arrayOf**<**Item**>(`validator`: [Validator](README.md#validator)‹Item›): _[Validator](README.md#validator)‹Item[]›_

Creates a validator accepting arrays
and runs provided item validator against every array item.
Returns an object where keys are indices of array items having validation errors.

**`example`**

```ts
import {
  object,
  compose,
  string,
  required,
  number,
  min,
} from "compose-validators";

const person = object({
  name: compose(string, required),
  age: compose(number, min(18)),
});

const people = arrayOf(person);

people([
  { name: "John", age: 30 },
  { name: "Jim", age: 15 },
]);
// this returns
// {
//   1: { age: { min: 18 } }
// }
```

**Type parameters:**

▪ **Item**

Type of array item

**Parameters:**

| Name        | Type                                   | Description          |
| ----------- | -------------------------------------- | -------------------- |
| `validator` | [Validator](README.md#validator)‹Item› | Array item validator |

**Returns:** _[Validator](README.md#validator)‹Item[]›_

---

### `Const` compose

▸ **compose**<**T**>(...`validators`: [Validator](README.md#validator)‹T›[]): _[Validator](README.md#validator)‹T›_

Combines several validators and returns a composed validator
that applies all given validators one by one.

Stops at first validator returning errors, so you can guard yourself
by placing less strict rules first.

**`example`**

```ts
import { compose, string, minLength } from "compose-validators";

const validate = compose(string, minLength(3));

validate([]); // => { type: "string" }
validate(""); // => { minLength: 3 }
validate("abc"); // => {}
```

**Type parameters:**

▪ **T**

expected value type

**Parameters:**

| Name            | Type                                  | Description |
| --------------- | ------------------------------------- | ----------- |
| `...validators` | [Validator](README.md#validator)‹T›[] |             |

**Returns:** _[Validator](README.md#validator)‹T›_

---

### `Const` eq

▸ **eq**<**T**>(`expected`: T, `comparator`: function): _[Validator](README.md#validator)‹T›_

Checks whether an actual value equals to expected.
Accepts optional comparator as a second argument, where you can define custom comparison logic.
By default `Object.is` is used as comparator.

**`example`**

```ts
import { eq } from "compose-validators";

const validate = eq("production");

validate("development"); // => { eq: 'production' }
validate("production"); // => {}
```

**Type parameters:**

▪ **T**

**Parameters:**

▪ **expected**: _T_

expected value

▪`Default value` **comparator**: _function_= Object.is

custom comparator (`Object.is` is used by default)

▸ (`expected`: T, `actual`: any): _boolean_

**Parameters:**

| Name       | Type |
| ---------- | ---- |
| `expected` | T    |
| `actual`   | any  |

**Returns:** _[Validator](README.md#validator)‹T›_

---

### `Const` isValid

▸ **isValid**(`result`: [ValidationResult](README.md#validationresult)): _boolean_

A handy utility that converts validation result to a boolean.
Basically it just checks that the validation result is an empty object.

**Parameters:**

| Name     | Type                                           | Description       |
| -------- | ---------------------------------------------- | ----------------- |
| `result` | [ValidationResult](README.md#validationresult) | validation result |

**Returns:** _boolean_

---

### `Const` max

▸ **max**(`num`: number): _[Validator](README.md#validator)‹number›_

Given a number checks it against an expected maximum.

**`example`**

```ts
import { max } from "compose-validators";

const validate = max(10);

validate(15); // => { max: 10 }
validate(10); // => {}
```

**Parameters:**

| Name  | Type   | Description             |
| ----- | ------ | ----------------------- |
| `num` | number | expected maximum number |

**Returns:** _[Validator](README.md#validator)‹number›_

---

### `Const` maxLength

▸ **maxLength**<**T**>(`length`: number): _[Validator](README.md#validator)‹T›_

Given a string, array or any other object having a `length: number`
property, checks the actual length against expected maximum.

**`example`**

```ts
import { maxLength } from "compose-validators";

const validate = maxLength(3);

validate([1, 2, 3, 4]); // => { maxLength: 3 }
validate([1, 2, 3]); // => {}
validate("abcd"); // => { maxLength: 3 }
validate("abc"); // => {}
```

**Type parameters:**

▪ **T**: _object_

**Parameters:**

| Name     | Type   | Description            |
| -------- | ------ | ---------------------- |
| `length` | number | maximum length allowed |

**Returns:** _[Validator](README.md#validator)‹T›_

---

### `Const` min

▸ **min**(`num`: number): _[Validator](README.md#validator)‹number›_

Given a number checks it against an expected minimum.

**`example`**

```ts
import { min } from "compose-validators";

const validate = min(10);

validate(9); // => { min: 10 }
validate(10); // => {}
```

**Parameters:**

| Name  | Type   | Description             |
| ----- | ------ | ----------------------- |
| `num` | number | expected minimum number |

**Returns:** _[Validator](README.md#validator)‹number›_

---

### `Const` minLength

▸ **minLength**<**T**>(`length`: number): _[Validator](README.md#validator)‹T›_

Given a string, array or any other object having a `length: number`
property, checks the actual length against expected minimum.

**`example`**

```ts
import { minLength } from "compose-validators";

const validate = minLength(3);

validate([1, 2]); // => { minLength: 3 }
validate([1, 2, 3]); // => {}
validate("ab"); // => { minLength: 3 }
validate("abc"); // => {}
```

**Type parameters:**

▪ **T**: _object_

**Parameters:**

| Name     | Type   | Description            |
| -------- | ------ | ---------------------- |
| `length` | number | minimum length allowed |

**Returns:** _[Validator](README.md#validator)‹T›_

---

### `Const` object

▸ **object**<**T**>(`config`: object): _[Validator](README.md#validator)‹T›_

Takes a config object, which defines validators for necessary properties
and returns a validator taking an object and validates its properties
against the config.

Does not check that an object is of type "object" or anything.
If you want to check for an object first, consider prefixing this validator
with `compose(type('object'), object({...}))` or any other validator that
suits your needs.

**`example`**

```ts
import {
  object,
  compose,
  string,
  required,
  number,
  min,
} from "compose-validators";

const person = object({
  name: compose(string, required),
  age: compose(number, min(18)),
});

person({ name: "", age: 0 }); // => { name: { required: true }, age: { min: 18 } }
person({ name: "John", age: 20 }); // => {}
```

**Type parameters:**

▪ **T**: _Record‹string, unknown›_

**Parameters:**

| Name     | Type   | Description                          |
| -------- | ------ | ------------------------------------ |
| `config` | object | object with validators in properties |

**Returns:** _[Validator](README.md#validator)‹T›_

---

### `Const` required

▸ **required**(`value`: any): _object | object_

Checks that the value is defined and is not an empty string.

**`example`**

```ts
import { required } from "compose-validators";

required(""); // => { required: true }
required(undefined); // => { required: true }
required(null); // => { required: true }
required("abc"); // => {}
required(0); // => {}
required(false); // => {}
required({}); // => {}
required([]); // => {}
```

**Parameters:**

| Name    | Type | Description |
| ------- | ---- | ----------- |
| `value` | any  |             |

**Returns:** _object | object_

---

### `Const` type

▸ **type**<**T**>(`t`: string, `comparator`: (Anonymous function)): _[Validator](README.md#validator)‹T›_

Checks the type of value by using the `typeof` operator.
Accepts an optional custom comparator function, where you can define
different logic of comparing type, i.e. `instanceof` or any other check.

Please, remember that `typeof null === "object"` and `typeof NaN === 'number'` in JavaScript.

**`example`**

```ts
import { type } from "compose-validators";

const validate = type("object");

validate("abc"); // => { type: 'object' }
validate([]); // => {}
validate({}); // => {}
validate(null); // => {}
```

**Type parameters:**

▪ **T**

**Parameters:**

| Name         | Type                 | Default                           | Description                                    |
| ------------ | -------------------- | --------------------------------- | ---------------------------------------------- |
| `t`          | string               | -                                 | expected data type                             |
| `comparator` | (Anonymous function) | (v: T): boolean => typeof v === t | custom comparator function (typeof by default) |

**Returns:** _[Validator](README.md#validator)‹T›_
