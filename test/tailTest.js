const assertEqual = require("../assertEqual");
const tail = require("../tail");

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