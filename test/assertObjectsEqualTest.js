const assertObjectsEqual = require("../assertObjectsEqual");

assertObjectsEqual({a: "hello", b: 2}, {b: 2, a: "hello"});
assertObjectsEqual({a: "nope", b: 23}, {a: "oops", b: 23});
assertObjectsEqual({a: "right", b: [1, 2], c: 2}, {b: [1, 2], c: 2, a: "right"});
