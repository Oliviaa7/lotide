const assertArraysEqual = require("../assertArraysEqual");
const without = require("../without");

assertArraysEqual((without([1, 2, 3], [1])), [2, 3]);
assertArraysEqual((without(["1", "2", "3"], [1, 2, "3"])), ["1", "2"]);
assertArraysEqual((without(["freddy", "leo", "zoe"], ["zoe"])), ["freddy", "leo"]);
assertArraysEqual((without([5, 6, 7], [1, 2, 3])), [5, 6, 7]);
assertArraysEqual((without([], ["empty", "huh"])), []);
assertArraysEqual((without(["stuff", "here"], [])), ["stuff", "here"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
