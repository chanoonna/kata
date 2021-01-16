const checkElm = function(arr, num) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === num) {
      return true;
    }
  }
  return false;
};

let prompt = require('prompt-sync')();

let playAgain = "y";

while(playAgain.toLowerCase() === "y") {
  let count = 0;
  let numAnswered = [];
  let ranNum = Math.ceil(Math.random() * 100);
  let correct = 0
  while(correct === 0) {
    let answer = Number(prompt("Guess a number (1 - 100): "));
    if(Number.isNaN(answer)) {
      console.log("I only take numbers.");
    } else {
      if(checkElm(numAnswered, answer)) {
        console.log("Already guessed!");
      } else {
        if(answer > ranNum) {
          numAnswered.push(answer);
          console.log("You need to think smaller than that!");
          count++;
        } else if(answer < ranNum) {
          numAnswered.push(answer);
          console.log("You need to think bigger than that!");
          count++;
        } else {
          count++;
          console.log("You got it! You took " + count + " attempts!");
          correct = 1;
        }
      }
    } 
  }
  playAgain = prompt("Do you want to play again? y/n: ");
}