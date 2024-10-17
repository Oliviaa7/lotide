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

module.exports = countLetters;