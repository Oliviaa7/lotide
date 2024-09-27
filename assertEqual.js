const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return "✅✅✅ Assertion Passed: " + actual + " === " + expected;
  } else {
    return "❌❌❌ Assertion Failed: " + actual + " !== " + expected;
  }
};

console.log(assertEqual("We are equal", "We are equal"));
console.log(assertEqual("Are we equal?", "No we are not"));
console.log(assertEqual(4, 4));
console.log(assertEqual(2, 6));