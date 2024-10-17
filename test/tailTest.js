const assert = require('chai').assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'} for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("returns ['Freddy', 'Leo'] for ['Lincoln', 'Freddy', 'Leo']", () => {
    assert.deepEqual(tail(['Lincoln', 'Freddy', 'Leo']), ['Freddy', 'Leo'])
  });
  it("returns [] for ['Hello']", () => {
    assert.deepEqual(tail(['Hello']), []);
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
});