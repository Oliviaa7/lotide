const assert = require('chai').assert;
const eqObjects = require("../eqObjects");

describe('#eqObjects', () => {
  it("returns true when two objects have the same key/value pairs", () => {
    const shirtObject = { colour: "red", size: "medium" };
    const anotherShirtObject = { size: "medium", colour: "red" };
    assert.deepEqual(eqObjects(shirtObject, anotherShirtObject), true);
  });
  it("returns false when two objects do not have the same key/value pairs", () => {
    const shirtObject = { colour: "red", size: "medium" };
    const longSleeveShirtObject = { size: "medium", colour: "red", sleeveLength: "long"};
    assert.deepEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
  });
  it("returns true when two objects whose keys contain arrays have the same key/value pairs", () => {
    const multiColourShirtObject = { colours: ["red", "blue"], size: "medium" };
    const anotherMultiColourShirtObject = { size: "medium", colours: ["red", "blue"]};
    assert.deepEqual(eqObjects(multiColourShirtObject, anotherMultiColourShirtObject), true);
  });
  it("returns false when two objects whose keys contain arrays do not have the same key/value pairs", () => {
    const multiColourShirtObject = { colours: ["red", "blue"], size: "medium" };
    const longSleeveMultiColourShirtObject = {
        size: "medium",
        colours: ["red", "blue"],
        sleeveLength: "long",
      };
    assert.deepEqual(eqObjects(multiColourShirtObject, longSleeveMultiColourShirtObject), false)
  });
});
