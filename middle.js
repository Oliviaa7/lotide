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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`🟢 Assertion Passed: ${array1} and ${array2} are equal!`);
  } else {
    console.log(`🔴 Assertion Failed: ${array1} and ${array2} are unequal!`);
  }
};

const middle = function(arr) {
  let result = [];

  if (arr.length <= 2) {
    return [];
  }

  if (arr.length % 2 === 1) {
    const oddMiddle = Math.floor(arr.length / 2);
    result.push(arr[oddMiddle]);
  }
  
  if (arr.length % 2 === 0) {
    const evenMiddle1 = arr.length / 2 - 1;
    const evenMiddle2 = arr.length / 2;
    result.push(arr[evenMiddle1], arr[evenMiddle2]);
  }
  return result;
};

assertArraysEqual((middle([1])), []);
assertArraysEqual((middle([1, 2])), []);

assertArraysEqual((middle([1, 2, 3])), [2]);
assertArraysEqual((middle([1, 2, 3, 4, 5])), [3]);

assertArraysEqual((middle([1, 2, 3, 4])), [2, 3]);
assertArraysEqual((middle([1, 2, 3, 4, 5, 6])), [3, 4]);
