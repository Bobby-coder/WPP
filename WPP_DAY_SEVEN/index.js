// Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.

function generateString(str) {
  // if input string is less than 3 characters return false
  if (str.length < 3) return false;
  // Extract last three characters using -indexing in slice
  const lastThree = str.slice(-3);
  // concatenate last three characters at front & back of input string
  const newString = `${lastThree}${str}${lastThree}`;
  // return new string
  return newString;
}

console.log(generateString("abc"));
console.log(generateString("ab"));
console.log(generateString("abcd"));
