const urlDecode = function(text) {
  const newArray = text.split("&");
  const newObject = {};
  for (let elem of newArray) {
    let tempArray = elem.split("=");
    newObject[tempArray[0]] = tempArray[1].split("%20").join(" ");
  }
  return newObject;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

// Expected Output
// { duck: "rubber" }
// { bootcamp: "Lighthouse Labs" }
// { city: "Vancouver", weather: "lots of rain" }
// "lots of rain"