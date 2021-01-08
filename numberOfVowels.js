const numberOfVowels = function(data) {
  const vowels = { a: 1, e: 1, i: 1, o: 1, u: 1 };
  let count = 0;

  for (let ch of data) {
    count += !!vowels[ch];
  }
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));