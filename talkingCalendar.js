const talkingCalendar = function(date) {
  const month = [
    null, "January", "Feburary", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];
  
  const returnDate = date.split("/");
  const returnYear = returnDate[0];
  const returnMonth = month[Number(returnDate[1])];
  const returnDay =
      returnDate[2] === "01" ? "1st" :
        returnDate[2] === "02" ? "2nd" :
          returnDate[2] === "03" ? "3rd" :
            Number(returnDate[2]) + "th";

  return `${returnMonth} ${returnDay}, ${returnYear}`;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));


// Expected output

// December 2nd, 2017
// November 11th, 2007
// August 24th, 1987