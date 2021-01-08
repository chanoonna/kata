const checkAir = function(samples, threshold) {
  let polluted = 0;

  for (let elem of samples) {
    if (elem === 'dirty') {
      polluted++;
    }
  }
  return polluted / samples.length >= threshold ? "Polluted" : "Clean";
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
));

// Expected Output
// Polluted
// Polluted
// Clean