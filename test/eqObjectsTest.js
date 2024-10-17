const assertEqual = require("../assertEqual");
const eqObjects = require("../eqObjects");

const shirtObject = { colour: "red", size: "medium" };
const anotherShirtObject = { size: "medium", colour: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", colour: "red", sleeveLength: "long"};
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

const multiColourShirtObject = { colours: ["red", "blue"], size: "medium" };
const anotherMultiColourShirtObject = { size: "medium", colours: ["red", "blue"]};
assertEqual(eqObjects(multiColourShirtObject, anotherMultiColourShirtObject), true);

const longSleeveMultiColourShirtObject = {
  size: "medium",
  colours: ["red", "blue"],
  sleeveLength: "long",
};

assertEqual(eqObjects(multiColourShirtObject, longSleeveMultiColourShirtObject), false);
