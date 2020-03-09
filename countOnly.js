const countOnly = function(allItems, itemsToCount) {
  
  const outputObject = {};

  for (let key in itemsToCount) {
    if (itemsToCount.hasOwnProperty(key)) {
      if (itemsToCount[key] && allItems.includes(key)) {
        outputObject[key] = 0;
        allItems.forEach(item => {
          if (item === key) outputObject[key] += 1;
        });
      }
    }
  }

  return outputObject;
};

module.exports = countOnly;
