const assert = require('chai').assert;
const flatten = require("../flatten");

describe('#flatten', () => {
  it("returns [1, 2, 3, 4, ,5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("returns [7, 8, 9, 10, 11, 12, 13] for [7, 8, [9, 10], 11, [12, 13]]", () => {
    assert.deepEqual(flatten([7, 8, [9, 10], 11, [12, 13]]), [7, 8, 9, 10, 11, 12, 13]);
  });
  it("returns [1, 2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(flatten([1, 2, 3]), [1, 2, 3]);
  });
});
