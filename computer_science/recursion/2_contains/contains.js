const contains = function (obj, val) {
  const values = Object.values(obj);
  // const keys = Object.keys(obj);

  if (values.filter((item) => item === val).length) {
    return true;
  } else if (
    values.some(
      (item) =>
        item !== null && typeof item === "object" && !Array.isArray(item),
    )
  ) {
    const objects = values.filter((item) =>
        item !== null && typeof item === "object" && !Array.isArray(item));


    for (let i = 0; i < objects.length; i++) {
      return contains(objects[i], val);
    }

    // objects.forEach((object) => {
    //   return contains(object, val);
    // })
    
  } else {
    return false
  }
};

// Do not edit below this line
module.exports = contains;
