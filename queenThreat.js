const generateBoard = function(wQ, bQ) {
  let board = [];
  for(let i = 0; i < 8; i++) {
    board.push([0,0,0,0,0,0,0,0]);
  }
  board[wQ[0]].splice(wQ[1], 1, 1);
  board[bQ[0]].splice(bQ[1], 1, 1);
  return board;
};

const queenThreat = function(generatedBoard) {
  const queens = [];
  for (let i = 0; i < generatedBoard.length; i++) {
    for (let j = 0; j < generatedBoard.length; j++) {
      if (generatedBoard[i][j] === 1) {
        queens.push([i, j]);
      }
    }
  }

  if (queens[0][0] === queens[1][0] || queens[0][1] === queens[1][1]) {
    return true;
  } else if (Math.abs(queens[0][0] - queens[1][0]) === Math.abs(queens[0][1] - queens[1][1])) {
    return true;
  } else {
    return false;
  }
};

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

// Expected Output
// [
//   [0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [1, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0]
// ]
// true

// Input
let whiteQueen2 = [0, 0];
let blackQueen2 = [5, 7];
let generatedBoard2 = generateBoard(whiteQueen2, blackQueen2);
console.log(generatedBoard2);
console.log(queenThreat(generatedBoard2));

// Expected Output
// [
//   [1, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0]
// ]
// false