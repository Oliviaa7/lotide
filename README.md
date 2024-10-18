# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @oliviaanderson/lotide`

**Require it:**

`const _ = require('@oliviaanderson/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head()` : returns the first element of an array
- `tail()` : returns the remainder of the array after the first element
- `middle()` : returns the center element of an odd-numbered array and the middle two elements of an even numbered array
- `assertEqual()` : compares two arguments to determine if they are equal
- `eqArrays()` : compares two arrays to determine if they are equal
- `assertArraysEqual()` : uses eqArrays to form a statement on equality between two arrays
- `countOnly()` : counts each element in an array and increases count for repeated elements
- `countLetters()` : counts each letter in a string and increases count for repeated letters
- `eqObjects()` : compares two objects to determine if they are equal
- `findKey()` : uses a callback to find a key in an object
- `findKeyByValue()` : uses the value of a key to find a key in an object
- `flatten()` : returns one single array which contained arrays with limited scope
- `letterPositions()` : returns the positions within a string of a given letter
- `map()` : uses a callback to make a change to an array
- `takeUntil()` : uses a callback to determine how much of an array will be returned
- `without()` : removes specified elements of array if they exist within given array
- `assertObjectsEqual()` : uses eqObjects to form a statement on equality between two objects