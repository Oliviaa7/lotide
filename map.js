const map = (array, cb) => {
  if (!Array.isArray(array) || typeof cb !== 'function') {
    return "Invalid Input!";
  }
const results = [];
for (let item of array) {
  results.push(cb(item));
}
return results
};

module.exports = map;
