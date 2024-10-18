const assert = require('chai').assert;
const countOnly = require("../countOnly");

describe('#countOnly', () => {
  it("returns {Fang: 2} for a list of names which contains Fang twice", () => {
    const firstNames = [
        "Karl",
        "Salima",
        "Agouhanna",
        "Fang",
        "Kavith",
        "Jason",
        "Salima",
        "Fang",
        "Joe"
      ];
      assert.deepEqual(countOnly(firstNames, {Fang: true}), {Fang: 2});
  });
  it("returns an empty object for a list of names which does not contain Karima", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    assert.deepEqual(countOnly(firstNames, {Karima: true}), {});
  })
  it("returns an empty object for a list of names which does contain Agouhanna but for which we have not requested that information", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    assert.deepEqual(countOnly(firstNames, {Agouhanna: false}), {});
  })
});
