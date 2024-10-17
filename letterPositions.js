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

module.exports = letterPositions;
