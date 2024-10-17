const flatten = function(arr) {
  let result = [];
  
  for (let element of arr) {
    if (Array.isArray(element)) {
      result = result.concat(element);
    } else {
      result.push(element);
    }
  }
  return result;
};

module.exports = flatten;
