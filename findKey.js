const findKey = (object, cb) => {
  const keys = Object.keys(object);

  for (const key of keys) {
    if (cb(object[key])) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;
