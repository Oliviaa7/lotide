const eqArrays = (arr1, arr2) => {
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

const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log(`🟢 Assertion Passed: ${array1} === ${array2}!`);
  } else {
    console.log(`🔴 Assertion Failed: ${array1} !== ${array2}!`);
  }
};

const takeUntil = (array, cb) => {
if (!Array.isArray(array) || typeof cb !== 'function') {
    return "Invalid Input!";
}
const result = [];

for (const item of array) {
  if (!cb(item)){
    result.push(item);
  } else {
    break;
  }
  }
return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]);

const data3 = [3, 2, 1]
assertArraysEqual(takeUntil(data3, "x"), "Invalid Input!");



