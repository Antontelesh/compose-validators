[Docs](README.md)

# Docs

## Index

### Type aliases

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
- [max](README.md#const-max)
- [maxLength](README.md#const-maxlength)
- [min](README.md#const-min)
- [minLength](README.md#const-minlength)
- [object](README.md#const-object)
- [required](README.md#const-required)
- [type](README.md#const-type)

## Type aliases

### Validator

Ƭ **Validator**: _function_

_Defined in [types.ts:1](https://github.com/Antontelesh/compose-validators/blob/6a68992/src/types.ts#L1)_

#### Type declaration:

▸ (`value`: T): _object_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `value` | T    |

- \[ **error**: _string_\]: any

## Variables

### `Const` array

• **array**: _function_ = type("array", Array.isArray)

_Defined in [validators/type.ts:14](https://github.com/Antontelesh/compose-validators/blob/6a68992/src/validators/type.ts#L14)_

#### Type declaration:

▸ (`value`: T): _object_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `value` | T    |

- \[ **error**: _string_\]: any

---

### `Const` boolean

• **boolean**: _function_ = type("boolean")

_Defined in [validators/type.ts:11](https://github.com/Antontelesh/compose-validators/blob/6a68992/src/validators/type.ts#L11)_

#### Type declaration:

▸ (`value`: T): _object_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `value` | T    |

- \[ **error**: _string_\]: any

---

### `Const` number

• **number**: _function_ = type("number")

_Defined in [validators/type.ts:12](https://github.com/Antontelesh/compose-validators/blob/6a68992/src/validators/type.ts#L12)_

#### Type declaration:

▸ (`value`: T): _object_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `value` | T    |

- \[ **error**: _string_\]: any

---

### `Const` string

• **string**: _function_ = type("string")

_Defined in [validators/type.ts:13](https://github.com/Antontelesh/compose-validators/blob/6a68992/src/validators/type.ts#L13)_

#### Type declaration:

▸ (`value`: T): _object_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `value` | T    |

- \[ **error**: _string_\]: any

## Functions

### `Const` arrayOf

▸ **arrayOf**<**Item**>(`validator`: [Validator](README.md#validator)‹Item›): _[Validator](README.md#validator)‹Item[]›_

_Defined in [validators/array-of.ts:34](https://github.com/Antontelesh/compose-validators/blob/6a68992/src/validators/array-of.ts#L34)_

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

_Defined in [validators/compose.ts:27](https://github.com/Antontelesh/compose-validators/blob/6a68992/src/validators/compose.ts#L27)_

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

_Defined in [validators/eq.ts:22](https://github.com/Antontelesh/compose-validators/blob/6a68992/src/validators/eq.ts#L22)_

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

### `Const` max

▸ **max**(`num`: number): _[Validator](README.md#validator)‹number›_

_Defined in [validators/max.ts:3](https://github.com/Antontelesh/compose-validators/blob/6a68992/src/validators/max.ts#L3)_

**Parameters:**

| Name  | Type   |
| ----- | ------ |
| `num` | number |

**Returns:** _[Validator](README.md#validator)‹number›_

---

### `Const` maxLength

▸ **maxLength**<**T**>(`length`: number): _[Validator](README.md#validator)‹T›_

_Defined in [validators/max-length.ts:22](https://github.com/Antontelesh/compose-validators/blob/6a68992/src/validators/max-length.ts#L22)_

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

_Defined in [validators/min.ts:3](https://github.com/Antontelesh/compose-validators/blob/6a68992/src/validators/min.ts#L3)_

**Parameters:**

| Name  | Type   |
| ----- | ------ |
| `num` | number |

**Returns:** _[Validator](README.md#validator)‹number›_

---

### `Const` minLength

▸ **minLength**(`length`: number): _[Validator](README.md#validator)‹object›_

_Defined in [validators/min-length.ts:3](https://github.com/Antontelesh/compose-validators/blob/6a68992/src/validators/min-length.ts#L3)_

**Parameters:**

| Name     | Type   |
| -------- | ------ |
| `length` | number |

**Returns:** _[Validator](README.md#validator)‹object›_

---

### `Const` object

▸ **object**<**T**>(`config`: object): _[Validator](README.md#validator)‹T›_

_Defined in [validators/object.ts:4](https://github.com/Antontelesh/compose-validators/blob/6a68992/src/validators/object.ts#L4)_

**Type parameters:**

▪ **T**: _Record‹string, unknown›_

**Parameters:**

| Name     | Type   |
| -------- | ------ |
| `config` | object |

**Returns:** _[Validator](README.md#validator)‹T›_

---

### `Const` required

▸ **required**(`value`: any): _object | object_

_Defined in [validators/required.ts:19](https://github.com/Antontelesh/compose-validators/blob/6a68992/src/validators/required.ts#L19)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `value` | any  |

**Returns:** _object | object_

---

### `Const` type

▸ **type**<**T**>(`t`: string, `comparator`: (Anonymous function)): _[Validator](README.md#validator)‹T›_

_Defined in [validators/type.ts:3](https://github.com/Antontelesh/compose-validators/blob/6a68992/src/validators/type.ts#L3)_

**Type parameters:**

▪ **T**

**Parameters:**

| Name         | Type                 | Default                  |
| ------------ | -------------------- | ------------------------ |
| `t`          | string               | -                        |
| `comparator` | (Anonymous function) | (v: T) => typeof v === t |

**Returns:** _[Validator](README.md#validator)‹T›_
