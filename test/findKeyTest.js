const assert = require('chai').assert;
const findKey = require("../findKey");

describe('#findKey', () => {
  it("should use a callback, 'x.stars === 2' to determine a key, 'noma' in an object of stars", () => {
    assert.deepEqual(findKey(
      {
        "Blue Hill": { stars: 1 },
        Akaleri: { stars: 3 },
        noma: { stars: 2 },
        elBulli: { stars: 3 },
        Ora: { stars: 2 },
        Akelarre: { stars: 3 },
      },
      (x) => x.stars === 2), "noma")
  });
});