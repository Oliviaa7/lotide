const assert = require('chai').assert;
const countLetters = require("../countLetters");

describe('#countLetters', () => {
  it("returns 2 for the number of 't's in the string 'lighthouse in the house'", () => {
    assert.strictEqual(countLetters("lighthouse in the house").t, 2);
  });
  it("returns 4 for the number of 'i's in the string 'Hi my name is Olivia'", () => {
    assert.strictEqual(countLetters("Hi my name is Olivia").i, 4);
  })
});