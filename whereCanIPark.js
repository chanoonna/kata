const whereCanIPark = function(spots, vehicle) {
  const table = {
    regular: { R: 1 },
    small: { R: 1, S: 1 },
    motorcycle: { R: 1, S: 1, M: 1}
  };

  for (const [ i, elemOuter ] of spots.entries()) {       // Loop outer array. i is index and elemOuter is a nested array.
    for (const [ j, elem] of elemOuter.entries()) {       // Loop nested array. j is index and elem is the string stored in a nested array.
      if (table[vehicle][elem]) {                         // If object, table, has the property named elem, 'R', 'S' and such,
        return [j, i];                                    // Return coordinates.
      }
    }
  }
  return false;
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
));

// Expected Output
// [4, 0]
// false
// [3, 1]