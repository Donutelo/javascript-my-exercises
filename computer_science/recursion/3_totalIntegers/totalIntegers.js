const totalIntegers = function (obj) {
  let integers;
  let objects;
  if (Array.isArray(obj)) {
    objects = obj.filter((item) => isObject(item));
    integers = obj.filter((item) => Number.isInteger(item)).length;
  } else if (isObject(obj)) {
    objects = Object.values(obj);
    integers = objects.filter((item) => Number.isInteger(item)).length;
  } else {
    return
  }

  if (objects.length === 0) return integers;

  for (const nestObj of objects) {
    if (isObject(nestObj) && nestObj.length !== 0) {
      integers += totalIntegers(nestObj);
    }
  }

  return integers;
};

const isObject = function (item) {
  return item !== null && typeof item === "object" ? true : false;
};

// Do not edit below this line
module.exports = totalIntegers;
