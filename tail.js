const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr1) {
  const end = arr1.slice(1);
  return end;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const words = ["Yo yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const singleElement = ["Hello"];
tail(singleElement);
assertEqual(singleElement.length, 1);

const emptyArray = [];
tail(emptyArray);
assertEqual(emptyArray.length, 0);