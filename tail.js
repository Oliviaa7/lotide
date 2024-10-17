const assertEqual = require("./assertEqual");

const tail = function(arr1) {
  const end = arr1.slice(1);
  return end;
};

module.exports = tail;