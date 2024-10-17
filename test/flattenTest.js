const assertArraysEqual = require("../assertArraysEqual");
const flatten = require("../flatten");

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([7, 8, [9, 10], 11, [12, 13]]), [7, 8, 9, 10, 11, 12, 13]);
assertArraysEqual(flatten([1, 2, 3]), [1, 2, 3]);