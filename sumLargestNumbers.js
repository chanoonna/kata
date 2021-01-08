const sumLargestNumbers = function(data) {
  data.sort((a, b) => a - b);                               // Simple sorting to rearrange the array ascending order.

  return data[data.length - 1] + data[data.length - 2];     // return the sum of the last 2 elements.
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([2, 1, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));