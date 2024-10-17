const assertArraysEqual = require("../assertArraysEqual");
const map = require("../map");

const words = ["you", "look", "like", "stevie", "nicks"];
const nums = [1, 4, 2, 7, 9, 10];
const emptyArray = [];

assertArraysEqual(map(words, (word) => word[2]), ["u", "o", "k", "e", "c"]);
assertArraysEqual(map(nums, (num) => num + 3), [4, 7, 5, 10, 12, 13]);
assertArraysEqual(map(words, (word) => `${word} 👀`), ["you 👀", "look 👀", "like 👀", "stevie 👀", "nicks 👀"]);
assertArraysEqual(map(emptyArray, 50), "Invalid Input!");
