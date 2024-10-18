const assert = require('chai').assert;
const eqArrays = require("../eqArrays");

describe('#eqArrays', () => {
  it("should return true if two arrays are equal", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("should return false for the following two arrays: [3, 4, 5], [3, 4, '5']", () => {
    assert.deepEqual(eqArrays([3, 4, 5], [3, 4, "5"]), false);
  });
  it("should return true for the following two arrays: ['1', '2', '3'], ['1', '2', '3']", () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });
  it("should return false for the following two arrays: [1, 2, 3], [1, 2]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2]), false);
  });
  it("should return true for two empty arrays", () => {
    assert.deepEqual(eqArrays([], []), true);
  });
  it("should return false for one empty array and one array containing values", () => {
    assert.deepEqual(eqArrays([], [1]), false);
  });
});