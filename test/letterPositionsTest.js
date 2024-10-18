const assert = require('chai').assert;
const letterPositions = require("../letterPositions");

describe('#letterPositions', () => {
  it("returns [1] for the position of letter e in 'hello'", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
  it("returns [14] for the position of letter o in 'Hi my name is Olivia'", () => {
    assert.deepEqual(letterPositions("Hi my name is Olivia").o, [14]);
  });
  it("returns [1, 11, 16, 18] for the positions of letter i in 'Hi my name is Olivia'", () => {
    assert.deepEqual(letterPositions("Hi my name is Olivia").i, [1, 11, 16, 18]);
  })
});
