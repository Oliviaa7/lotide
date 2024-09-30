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

const without = function(source, itemsToRemove) {
  const newSource = [];

  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newSource.push(source[i]);
    }
  }
  return newSource;
};

assertArraysEqual((without([1, 2, 3], [1])), [2, 3]);
assertArraysEqual((without(["1", "2", "3"], [1, 2, "3"])), ["1", "2"]);
assertArraysEqual((without(["freddy", "leo", "zoe"], ["zoe"])), ["freddy", "leo"]);
assertArraysEqual((without([5, 6, 7], [1, 2, 3])), [5, 6, 7]);
assertArraysEqual((without([], ["empty", "huh"])), []);
assertArraysEqual((without(["stuff", "here"], [])), ["stuff", "here"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
