// Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7
function isMultiple(number) {
  return number % 3 === 0 || number % 7 === 0;
}

console.log(isMultiple(12));
console.log(isMultiple(14));
console.log(isMultiple(10));
console.log(isMultiple(11));
