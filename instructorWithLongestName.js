const instructorWithLongestName = function(instructors) {
  let returnArr = [];
  let maxValue = -Infinity;

  for (let elem of instructors) {
    if (elem.name.length > maxValue) {
      returnArr = [ elem ];
      maxValue = elem.name.length;
    } else if (elem.name.length === maxValue) {
      returnArr.push(elem);
    }
  }

  return returnArr;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"},
  {name: "Johnathan", course: "RUST"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

console.log(instructorWithLongestName([
  {name: "John", course: "Web"},
  {name: "Jane", course: "iOS"}
]));
// Expected Output
// {name: "Jeremiah", course: "Web"}
// {name: "Domascus", course: "Web"}