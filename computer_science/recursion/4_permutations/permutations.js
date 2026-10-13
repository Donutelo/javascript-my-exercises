const permutations = function (obj) {
  let length = obj.length;

  if (length === 0) return [[]];

  if (length === 1) return [[...obj]];

  /*
    obj.forEach((item, i) => {
        if (!temp_arr.includes(item[i])) {
            temp_arr.push(item);
        }

        if (temp_arr.length === obj.length || !new_arr.includes(temp_arr)) {
            new_arr.push(temp_arr);
        }
    })
  */

  /*
  for (let i = 0; i < length; i++) {
    if (!tempArr.includes(obj[i]) && !ind.includes(i)) {
      tempArr.push(obj[i]);
    } else if (ind.includes(i)) {
      continue
    }

    if (tempArr.length === length && !newArr.includes(tempArr)) {
      newArr.length = 0;
      newArr.push([...tempArr]);
      tempArr.length = 0;
    }

    if (newArr.length === factorial(length)) {
      return newArr
      newArr.length = 0;
    } else {
      ind.push(i);
      permutations(obj, ind);
      return
    }
  }
  */

  const result = [];

  for (let i = 0; i < length; i++) {
    const chosen = obj[i];
    const remaining = obj.filter((_, ind) => ind !== i);

    for (const perm of permutations(remaining)) {
      result.push([chosen, ...perm]);
    }
  }
  return result;
};

// Do not edit below this line
module.exports = permutations;
