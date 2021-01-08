const conditionalSum = function(values, condition) {
  if (condition === "odd") {
    return values.reduce((accumulator, currentValue) => currentValue & 1 ? accumulator + currentValue : accumulator, 0);
  } else {
    return values.reduce((accumulator, currentValue) => currentValue & 1 ? accumulator : accumulator + currentValue, 0);
  }
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));