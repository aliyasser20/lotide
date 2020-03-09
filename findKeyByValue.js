const findKeyByValue = (object, valueInput) => {

  let result;

  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      object[key] === valueInput ? result = key : null;
    }
  }

  return result;
};

module.exports = findKeyByValue;
