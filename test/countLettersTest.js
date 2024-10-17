const assertEqual = require("../assertEqual");
const countLetters = require("../countLetters");

const result2 = countLetters("lighthouse in the house");
const result3 = countLetters("Hi my name is Olivia");

assertEqual(result2['t'], 2);
assertEqual(result3['i'], 4);