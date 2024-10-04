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

const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.toLowerCase();

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];

    if (char !== ' '){
      if (!results[char]) {
        results[char] = [];
      }
      results[char].push(i);
    }
  }  
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("Hi my name is Olivia").o, [14]);
assertArraysEqual(letterPositions("Hi my name is Olivia").i, [1, 11, 16, 18]);