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

const flatten = function(arr) {
  const result = [];
  
  for (let element of arr) {
    if (Array.isArray(element)) {
      for (let innerElement of element) {
        result.push(innerElement);
      }
    } else {
      result.push(element);
    }
  }
  return result;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([7, 8, [9, 10], 11, [12, 13]]), [7, 8, 9, 10, 11, 12, 13]);
assertArraysEqual(flatten([1, 2, 3]), [1, 2, 3]);
