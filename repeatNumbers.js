const repeatNumbers = function(data) {
  let returnArr = [];
  for (let elem of data) {
    returnArr.push(Array(elem[1] + 1).join(elem[0]));
  }
  return returnArr.join(", ");
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

// Expected Output
// 1111111111
// 11, 222
// 10101010, 343434343434, 9292