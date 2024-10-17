const takeUntil = (array, cb) => {
if (!Array.isArray(array) || typeof cb !== 'function') {
    return "Invalid Input!";
}
const result = [];

for (const item of array) {
  if (!cb(item)){
    result.push(item);
  } else {
    break;
  }
  }
return result;
};

module.exports = takeUntil;