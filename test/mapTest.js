const assert = require('chai').assert;
const map = require("../map");

describe('#map', () => {
  it("takes an array, ['you', 'look', 'like', 'stevie', 'nicks'], and a callback, (word) => word[2]), and returns a new array, ['u', 'o', 'k', 'e', 'c'", () => {
    const words = ["you", "look", "like", "stevie", "nicks"];
    assert.deepEqual(map(words, (word) => word[2]), ["u", "o", "k", "e", "c"])
  });
  it("returns [4, 7, 5, 10, 12, 13] when passed [1, 4, 2, 7, 9, 10] and (num) => num + 3)", () => {
    const nums = [1, 4, 2, 7, 9, 10];
    assert.deepEqual(map(nums, (num) => num + 3), [4, 7, 5, 10, 12, 13]);
  });
  it("returns ['you 👀', 'look 👀', 'like 👀', 'stevie 👀', 'nicks 👀'] when passed ['you', 'look', 'like', 'stevie', 'nicks'] and (word) => `${word} 👀`)", () => {
    const words = ["you", "look", "like", "stevie", "nicks"];
    assert.deepEqual(map(words, (word) => `${word} 👀`), ["you 👀", "look 👀", "like 👀", "stevie 👀", "nicks 👀"]);
  });
  it("returns 'Invalid Input!' when passed an empty array and/or not a callback function", () => {
    const emptyArray = [];
    assert.deepEqual(map(emptyArray, 50), "Invalid Input!");
  });
});