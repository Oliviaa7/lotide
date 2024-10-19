const assert = require('chai').assert;
const takeUntil = require("../takeUntil");

describe('#takeUntil', () => {
  it("takes [1, 2, 5, 7, 2, -1, 2, 4, 5] and (data1, x => x < 0) and returns [1, 2, 5, 7, 2]", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    assert.deepEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
  });
  it("takes ['I've', 'been', 'to', 'Hollywood', ',', 'I've', 'been', 'to', 'Redwood'] and (data2, x => x === ',') and returns ['I've', 'been', 'to', 'Hollywood']", () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    assert.deepEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]);
  });
  it("takes [3, 2, 1] and (data3, 'x') and returns 'Invalid Input!'", () => {
    const data3 = [3, 2, 1];
    assert.deepEqual(takeUntil(data3, "x"), "Invalid Input!");
  });
});