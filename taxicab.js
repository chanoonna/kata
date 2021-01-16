const blocksAway = function(directions) {
  let x = 0, y = 0;                                 // Coordinates
  let nsew = 1;                                     // Facing 1 north 2 west 3 south 4 east
  let returnObj = {};

  for(let i = 0; i < directions.length; i += 2) {   // Cases with x - blocks to move < 0 or y - blocks to move < 0 not considered.
    switch(nsew) {
      case 1:                                       // Facing north
        if(directions[i] === "left") {
          if(x === 0) {                             // When x === 0, keep north
            y += directions[i + 1];
          } else {                                  // When x != 0, x - blocks to move, facing west
            x -= directions[i + 1];
            nsew = 2;
          }
        } else {                                    // Right turn, x + blocks to move, facing east
          x += directions[i + 1];
          nsew = 4;
        }
        break;

      case 2:                                       // Facing west
        if(directions[i] === "left") {
          if(y === 0) {
            x -= directions[i + 1];
          } else {
            y -= directions[i + 1];
            nsew = 3;
          }
        } else {
          y += directions[i + 1];
          nsew = 1;
        }
        break;

      case 3:                                       // Facing south
        if(directions[i] === "left") {
          x += directions[i + 1];
          nsew = 4;
        } else {
          if(x === 0) {
            y -= directions[i + 1];
          } else {
            x -= directions[i + 1];
            nsew = 2;
          }
        }
        break;

      case 4:                                       // Facing east
        if(directions[i] === "left") {
          y += directions[i + 1];
          nsew = 1;
        } else {
          if(y === 0) {
            x += directions[i + 1];
          } else {
            y -= directions[i + 1];
            nsew = 3;
          }
        }
        break;

      default :
    }
  }
  returnObj.east = x;
  returnObj.north = y;

  return returnObj;
};


console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));