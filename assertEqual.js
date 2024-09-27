const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("We are equal", "We are equal");
assertEqual("Are we equal?", "No we are not");
assertEqual(4, 4);
assertEqual(2, 6);