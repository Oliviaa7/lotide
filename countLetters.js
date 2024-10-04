const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  const result = {};
  str = str.toLowerCase();

  for (const char of str) {
    if (char !== ' ') {
      if (result[char]) {
        result[char] += 1;
      } else {
        result[char] = 1;
      }
    }
  }
  return result;
};

const result2 = countLetters("lighthouse in the house");
const result3 = countLetters("Hi my name is Olivia");

assertEqual(result2['t'], 2);
assertEqual(result3['i'], 4);