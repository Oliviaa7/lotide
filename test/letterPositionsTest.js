const assertArraysEqual = require("../assertArraysEqual");
const letterPositions = require("../letterPositions");

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("Hi my name is Olivia").o, [14]);
assertArraysEqual(letterPositions("Hi my name is Olivia").i, [1, 11, 16, 18]);