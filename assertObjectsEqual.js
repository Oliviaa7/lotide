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
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = (actual, expected) => {
  const inspect = require("util").inspect;

  if (eqObjects(actual, expected)) {
  console.log(`🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
  console.log(`🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({a: "hello", b: 2}, {b: 2, a: "hello"});
assertObjectsEqual({a: "nope", b: 23}, {a: "oops", b: 23});
assertObjectsEqual({a: "right", b: [1, 2], c: 2}, {b: [1, 2], c: 2, a: "right"});
