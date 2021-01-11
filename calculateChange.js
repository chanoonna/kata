const calculateChange = function(total, cash) {
  let change = cash - total;
  const denomNum = [ 2000, 1000, 500, 200, 100, 25, 10, 5, 1 ];
  const denomCha = [
    "twentyDollars", "tenDollars", "fiveDollars", "twoDollars",
    "oneDollar", "quarter", "dime", "nickel", "penny"
  ];
  const returnObj = {};

  for (let i = 0; i < denomNum.length; i++) {
    let currDenom = Math.floor(change / denomNum[i]);
    if (currDenom) {
      returnObj[denomCha[i]] = currDenom;
      change %= denomNum[i];
    }
  }
  
  return returnObj;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

// Expected Output
// { twoDollar: 1, dime: 1, penny: 3 }
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }