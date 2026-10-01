const contains = function (obj, val) {
  const values = Object.values(obj);

  if (values.includes(val)) {
    return true;
  }

  const objects = values.filter(
    (item) => item !== null && typeof item === "object" && !Array.isArray(item),
  );

  for (const nestedObj of objects) {
    if (contains(nestedObj, val)) {
      return true;
    }
  }

  return false;
};

// Do not edit below this line
module.exports = contains;
