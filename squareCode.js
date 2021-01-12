const squareCode = function(message) {
  const tempArr = message.split(/\s+/).join("").split("");
  const sqrt = Math.ceil(Math.sqrt(tempArr.length));
  const encodedArr = Array(sqrt).fill("");

  for (let i = 0; i < tempArr.length; i++) {
    encodedArr[i % sqrt] += tempArr[i];
  }
  return encodedArr.join(" ");
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));

// Expected output

// clu hlt io
// fto ehg ee dd
// hae and via ecy
// imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau