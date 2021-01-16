const makeCase = function(input, cases) {
  let returnStr = "";
  let arr = input.split(/\s+/);
  const wrapCase = {
    camel: (arr) => arr.map((x, i) => i !== 0 ? x[0].toUpperCase() + x.slice(1) : x).join(""),
    pascal: (arr) => arr.map(x => x[0].toUpperCase() + x.slice(1)).join(""),
    snake: (arr) => arr.join("_"),
    kebab: (arr) => arr.join("-"),
    title: (arr) => arr.map(x => x[0].toUpperCase() + x.slice(1)).join(" "),
    vowel: (arr) => {
      const newArr = [...arr];
      for (let i = 0; i < newArr.length; i++) {
        newArr[i] = newArr[i].replace('a', 'A');
        newArr[i] = newArr[i].replace('e', 'E');
        newArr[i] = newArr[i].replace('i', 'I');
        newArr[i] = newArr[i].replace('o', 'O');
        newArr[i] = newArr[i].replace('u', 'U');
      }
      return newArr.join(" ");
    },
    consonant: (arr) => {
      const newArr = [...arr];
      for (let i = 0; i < newArr.length; i++) {
        newArr[i] = newArr[i].toUpperCase();
        newArr[i] = newArr[i].replace('A', 'a');
        newArr[i] = newArr[i].replace('E', 'e');
        newArr[i] = newArr[i].replace('I', 'i');
        newArr[i] = newArr[i].replace('O', 'o');
        newArr[i] = newArr[i].replace('U', 'u');
      }
      return newArr.join(" ");
    },
    upper: (arr) => arr.map(x => x.toUpperCase()),
    lower: (arr) => arr.map(x => x.toLowerCase()),
  }

  return wrapCase[cases](arr);
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
// console.log(makeCase("this is a string", ["upper", "snake"]));

// Expected Output

// thisIsAString
// ThisIsAString
// this_is_a_string
// this-is-a-string
// This Is A String
// thIs Is A strIng
// THiS iS a STRiNG
// THIS_IS_A_STRING