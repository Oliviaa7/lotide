const head = require("./head");
const tail = require("./tail");
const middle = require("./middle");
const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");
const countOnly = require("./countOnly");
const countLetters = require("./countLetters");
const eqObjects = require("./eqObjects");
const findKey = require("./findKey");
const findKeyByValue = require("./findKeyByValue");
const flatten = require("./flatten");
const letterPositions = require("./letterPositions");
const map = require("./map");
const takeUntil = require("./takeUntil");
const without = require("./without");

module.exports = {
  head:              head,
  tail:              tail,
  middle:            middle,
  assertEqual:       assertEqual,
  eqArrays:          eqArrays,
  assertArraysEqual: assertArraysEqual,
  countOnly:         countOnly,
  countLetters:      countLetters,
  eqObjects:         eqObjects,
  findKey:           findKey,
  findKeyByValue:    findKeyByValue,
  flatten:           flatten,
  letterPositions:   letterPositions,
  map:               map,
  takeUntil:         takeUntil,
  without:           without
};