const assert = require('chai').assert;
const without = require("../without");

describe('#without', () => {
  it("takes [1, 2, 3] and [1] and returns [2, 3]", () => {
    assert.deepEqual((without([1, 2, 3], [1])), [2, 3]);
  });
  it("takes ['1', '2', '3'] and [1, 2, '3'] and returns ['1', '2']", () => {
    assert.deepEqual((without(["1", "2", "3"], [1, 2, "3"])), ["1", "2"]);
  });
  it("takes [5, 6, 7] and [1, 2, 3] and returns [5, 6, 7]", () => {
    assert.deepEqual((without([5, 6, 7], [1, 2, 3])), [5, 6, 7]);
  });
  it("takes [] and ['empty, 'huh'] and returns []", () => {
    assert.deepEqual((without([], ["empty", "huh"])), []);
  });
  it("takes ['stuff', 'here'] and [] and returns ['stuff', 'here']", () => {
    assert.deepEqual((without(["stuff", "here"], [])), ["stuff", "here"]);
  });
});