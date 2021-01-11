const camelCase = function(input) {
  let returnStr = input.trim().split(" ");
  returnStr.map((currentValue, index) => (index) ? currentValue : currentValue[0].toUpperCase() + currentValue.substring(1));
  console.log(returnStr);
  return returnStr.join("");
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

// Output
// thisIsAString
// loopyLighthouse
// supercalifragalisticexpialidocious