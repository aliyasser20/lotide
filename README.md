# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @aliyasser20/lotide`

**Require it:**

`const _ = require('@aliyasser20/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head([a, b, c, ...])`: Returns the first element of an array.
- `tail([a, b, c, ...])`: Returns an array of all elements expect for first.
- `middle([a, b, c, ...])`: Returns the middle element/elements (single if array length is odd, double if array length is even). Returns empty array if array length is less than 3 elements.
- `assertEqual(a, b)`: Returns true if a and b are equal, false otherwise.
- `eqArrays([a, b, [c, d]], [a, b, [c, d]])`: Returns true if two input arrays are equal, false otherwise.
- `assertArraysEqual([a, b, [c, d]], [a, b, [c, d]])`: Logs if two input arrays are equal or not to the console.
- `eqObjects({a: ... , b: {...}}, {a: ... , b: {...}})`: Returns true if two input objects are equal, false otherwise.
- `assertObjectsEqual({a: ... , b: {...}}, {a: ... , b: {...}})`: Logs if two input objects are equal or not to the console.
- `countOnly([a, b, c, ...], {a: true, b: false, ...})`: Returns an object with the number of instances of true properties of second argument in the first argument. Example - input: `([a, a, b, c], {a: true, c: true})` => output: `{a: 2, b: 1}`.
- `countLetters("string")`: Returns an object with the number of letters in a string. Example - input: `"javascript"` => output: `{a: 2, c: 1, i: 1, j: 1, s: 1, p: 1, t: 1, v: 1, r: 1}`
- `takeUntil([a, b, c, ...], b)`: Returns a new array with the elements before the second argument is reached.
- `without([a, b, c, ...], [a, b])`: Returns a new array without the elements passed in the second array argument.
- `findKey({a: b, c: d}, callback)`: Returns the first key of the property that has a value matching the callback input function. Callback must return true or false if matches or not.
- `findKeyByValue({a: b, c: d}, b)`: Returns the key of the property which has a value matching the second input.
- `letterPositions("string")`: Returns an object with the the positions of each letter in a string. Example - input: `("javascript")` => output: `{j: [ 0 ], a: [ 1, 3 ], v: [ 2 ], s: [ 4 ], c: [ 5 ], r: [ 6 ], i: [ 7 ], p: [ 8 ], t: [ 9 ]}`.
- `flatten([a, b, [c, d]])`: Returns a new array with all elements and sub-elements.
- `map([a, b, c, ...], callback)`: Returns a new array with elements matching callback argument.
