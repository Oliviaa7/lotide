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

const map = (array, cb) => {
const results = [];
for (let item of array) {
  results.push(cb(item));
}
return results
};

const words = ["you", "look", "like", "stevie", "nicks"];
const nums = [1, 4, 2, 7, 9, 10];

assertArraysEqual(map(words, (word) => word[2]), ["u", "o", "k", "e", "c"]);
assertArraysEqual(map(nums, (num) => num + 3), [4, 7, 5, 10, 12, 13]);
assertArraysEqual(map(words, (word) => `${word} 👀`), ["you 👀", "look 👀", "like 👀", "stevie 👀", "nicks 👀"]);
