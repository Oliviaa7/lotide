const without = function(source, itemsToRemove) {
  const newSource = [];

  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newSource.push(source[i]);
    }
  }
  return newSource;
};

module.exports = without;
