const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = (obj1, obj2) => {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!obj2.hasOwnProperty(key)) {
      return false;
    } else if ((Array.isArray(obj1[key])) && (Array.isArray(obj2[key]))) {
      if (eqArrays(obj1[key], obj2[key]) === false) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

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
