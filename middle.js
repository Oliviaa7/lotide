const middle = function(arr) {
  let result = [];

  if (arr.length <= 2) {
    return [];
  }

  if (arr.length % 2 === 1) {
    const oddMiddle = Math.floor(arr.length / 2);
    result.push(arr[oddMiddle]);
  } else {
    const evenMiddle1 = arr.length / 2 - 1;
    const evenMiddle2 = arr.length / 2;
    result.push(arr[evenMiddle1], arr[evenMiddle2]);
  }
  return result;
};

module.exports = middle;
